import { yupResolver } from '@hookform/resolvers/yup'
import { Collapse, Form } from 'antd'
import {
  InputDateField,
  InputTextField,
  InputTextAreaField,
  PrimaryButton,
} from 'components'
import dayjs from 'dayjs'
import { Trash, Plus } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import styled from 'styled-components'
import { CompetitionTabScreen, DateUtility } from 'utility'
import * as yup from 'yup'

const RoundsBox = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`

const CompetitionsRoundsSchema = yup.object().shape({
  rounds: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .trim('Spaces not allowed')
        .strict()
        .required('Name is required'),
      submission_deadline: yup
        .string()
        .required('Submission deadline is required'),
      voting_deadline: yup.string().required('Voting deadline is required'),
      no_of_winners: yup.number().required('Winners is required'),
      start_date: yup.string().required('Start date is required'),
      end_date: yup.string().required('End date is required'),
      result_announcement: yup
        .string()
        .required('Result announcement is required'),
      instruction: yup
        .string()
        .trim('Spaces not allowed')
        .strict()
        .required('Instruction is required'),
    }),
  ),
})

export const CompetitionsRoundsTabAddEdit = ({ data, onNext }) => {
  const [activeKeys, setActiveKeys] = useState(['0'])
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CompetitionsRoundsSchema),
    defaultValues: {
      rounds: [
        {
          name: '',
          submission_deadline: '',
          voting_deadline: '',
          result_announcement: '',
          instruction: '',
          no_of_winners: 0,
          start_date: '',
          end_date: '',
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rounds',
  })

  useEffect(() => {
    if (data && data?.rounds?.length) {
      // Convert dates to dayjs and reset the form with the provided data
      const formattedRounds = data.rounds.map(ele => ({
        ...ele,
        submission_deadline: dayjs(ele.submission_deadline),
        voting_deadline: dayjs(ele.voting_deadline),
        result_announcement: dayjs(ele.result_announcement),
        end_date: dayjs(ele.end_date),
        start_date: dayjs(ele.start_date),
      }))
      reset({ rounds: formattedRounds })
    }
  }, [data])

  const submit = formData => {
    onNext(CompetitionTabScreen.Rounds, formData)
  }
  const handleAddRound = () => {
    const newIndex = fields.length.toString() // New panel index
    append({
      name: '',
      submission_deadline: '',
      voting_deadline: '',
      result_announcement: '',
      instruction: '',
      no_of_winners: 0,
      start_date: '',
      end_date: '',
    })
    setActiveKeys(prevKeys => [...prevKeys, newIndex]) // Auto-open new panel
  }

  const handleRemoveRound = index => {
    remove(index)
    setActiveKeys(prevKeys => prevKeys.filter(key => key !== index.toString())) // Close the removed panel
  }
  const startDate = dayjs(data.start_date)
  return (
    <Form onFinish={handleSubmit(submit)}>
      <Collapse activeKey={activeKeys} onChange={keys => setActiveKeys(keys)}>
        {fields.map((item, index) => {
          const submissionDeadline = watch(
            `rounds[${index}].submission_deadline`,
          )
          const votingDeadline = watch(`rounds[${index}].voting_deadline`)
          const roundStartDate = watch(`rounds[${index}].start_date`)
          const votingDeadlineDate = watch(`rounds[${index}].voting_deadline`)

          return (
            <Collapse.Panel
              header={`Round ${index + 1}`}
              key={index.toString()}
              extra={
                <Trash
                  onClick={event => {
                    event.stopPropagation()
                    remove(index)
                  }}
                  style={{ color: 'red', cursor: 'pointer' }}
                />
              }
            >
              <RoundsBox key={item.id}>
                <InputTextField
                  required
                  name={`rounds[${index}].name`}
                  control={control}
                  errors={errors?.rounds?.[index]?.name?.message}
                  label="Name"
                  placeholder="Name"
                />
                <InputTextField
                  required
                  name={`rounds[${index}].no_of_winners`}
                  control={control}
                  type="number"
                  errors={errors?.rounds?.[index]?.no_of_winners?.message}
                  label="No of winners"
                  placeholder="No of winners"
                />
                <InputDateField
                  required
                  name={`rounds[${index}].start_date`}
                  control={control}
                  errors={errors?.rounds?.[index]?.start_date?.message}
                  label="Start Date"
                  placeholder="Start Date Of Round"
                  disabledDate={current =>
                    current && current < DateUtility.endDay(startDate)
                  }
                />
                <InputDateField
                  required
                  name={`rounds[${index}].end_date`}
                  control={control}
                  errors={errors?.rounds?.[index]?.end_date?.message}
                  label="End Date"
                  disabled={!roundStartDate}
                  placeholder="End Date Of Round"
                  disabledDate={current =>
                    current && current < DateUtility.endDay(roundStartDate)
                  }
                />
                <InputDateField
                  required
                  name={`rounds[${index}].submission_deadline`}
                  control={control}
                  errors={errors?.rounds?.[index]?.submission_deadline?.message}
                  label="Video Submission Deadline"
                  placeholder="Video Submission Deadline"
                  disabled={!roundStartDate}
                  disabledDate={current =>
                    current && current < DateUtility.endDay(roundStartDate)
                  }
                />
                <InputDateField
                  required
                  name={`rounds[${index}].voting_deadline`}
                  control={control}
                  errors={errors?.rounds?.[index]?.voting_deadline?.message}
                  label="Voting Deadline Date"
                  placeholder="Voting Deadline Date"
                  disabled={!roundStartDate}
                  disabledDate={current =>
                    current && current < DateUtility.endDay(submissionDeadline)
                  }
                />
                <InputDateField
                  required
                  name={`rounds[${index}].result_announcement`}
                  control={control}
                  errors={errors?.rounds?.[index]?.result_announcement?.message}
                  label="Result Announcement"
                  placeholder="Select Result Announcement Date"
                  disabled={!votingDeadlineDate}
                  disabledDate={current =>
                    current && current < dayjs(votingDeadline).endOf('day')
                  }
                />
                <InputTextAreaField
                  required
                  name={`rounds[${index}].instruction`}
                  control={control}
                  errors={errors?.rounds?.[index]?.instruction?.message}
                  label="Instruction"
                  placeholder="Instruction"
                />
                <PrimaryButton
                  type="button"
                  onClick={() => handleRemoveRound(index)}
                >
                  <Trash /> Delete
                </PrimaryButton>
              </RoundsBox>
            </Collapse.Panel>
          )
        })}
      </Collapse>
      <div className="my-3 d-felx">
        <PrimaryButton onClick={() => handleAddRound()} icon={<Plus />}>
          Add Round
        </PrimaryButton>
        <PrimaryButton className="mx-2" htmlType="submit">
          Submit
        </PrimaryButton>
      </div>
    </Form>
  )
}
