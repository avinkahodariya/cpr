import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import {
  InputDateField,
  InputTextField,
  InputTextAreaField,
  CustomMediaUploader,
  PrimaryButton,
} from 'components'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CompetitionTabScreen, DateUtility, processMediaList } from 'utility'
import * as yup from 'yup'

const CompetitionsSchema = yup.object().shape({
  name: yup
    .string()
    .trim('Spaces not allowed')
    .strict()
    .required('name is required'),
  description: yup
    .string()
    .trim('Spaces not allowed')
    .strict()
    .required('description is required'),
  start_date: yup.string().required('start date is required'),
  end_date: yup.string().required('end date is required'),
  eligibility_criteria: yup
    .string()
    .trim('Spaces not allowed')
    .strict()
    .required('eligibility criteria is required'),
  rules: yup
    .string()
    .trim('Spaces not allowed')
    .strict()
    .required('rules is required'),
  participants_limit: yup
    .number()
    .strict()
    .required('participants limit is required'),

  price_details: yup.string().strict().required('price details is required'),
})

export const CompetitionsTabAddEdit = ({ onNext, data }) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CompetitionsSchema),
  })
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const startDate = watch('start_date')
  useEffect(() => {
    if (data) {
      reset({
        ...data,
        start_date: dayjs(data.start_date),
        end_date: dayjs(data.end_date),
      })
      if (data.image) {
        setFiles([{ url: data.image, preview: data.image }])
      }
    }
  }, [data])
  const submit = async formData => {
    setLoading(true)
    let image = []
    try {
      image = await processMediaList(files)
      onNext(CompetitionTabScreen.Common, {
        ...formData,
        image: image?.[0]?.keyOrUrl || '',
      })
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Form>
      <div className="row">
        <div className="col-8">
          <InputTextField
            required
            name="name"
            control={control}
            errors={errors}
            label="Name"
            placeholder="Name"
          />
          <InputTextAreaField
            required
            name="description"
            control={control}
            errors={errors}
            label="Description"
            placeholder="Description"
          />
        </div>
        <div className="col-4">
          <CustomMediaUploader
            name="image"
            control={control}
            fileList={files}
            setFileList={setFiles}
          />
        </div>
      </div>
      <InputDateField
        required
        name="start_date"
        control={control}
        errors={errors}
        label="Start date"
        placeholder="Start date"
      />
      <InputDateField
        required
        name="end_date"
        control={control}
        errors={errors}
        label="End date"
        placeholder="end date"
        disabledDate={current => current < DateUtility.endDay(startDate)}
      />
      <InputTextField
        required
        name="eligibility_criteria"
        control={control}
        errors={errors}
        label="Eligible Criteria"
        placeholder="Eligible Criteria"
      />
      <InputTextAreaField
        required
        name="rules"
        control={control}
        errors={errors}
        label="Rules &  Guidelines"
        placeholder="Rules &  Guidelines"
      />
      <InputTextField
        required
        type="number"
        name="participants_limit"
        control={control}
        errors={errors}
        label="Participant Limit "
        placeholder="Participant Limit "
      />
      <InputTextField
        required
        // type="number"
        name="price_details"
        control={control}
        errors={errors}
        label="Price"
        placeholder="Enter Prize"
      />
      <PrimaryButton
        loading={loading}
        className="my-3"
        onClick={handleSubmit(submit)}
      >
        Save & Next
      </PrimaryButton>
    </Form>
  )
}
