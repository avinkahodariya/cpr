import { Form } from 'antd'
import {
  AppAvatar,
  FlexColumn,
  FlexRow,
  FlexRowBetween,
  GreenButton,
  GreenOutLinedButton,
  CommonPhoneBorderField,
  InputTextField,
  InputSelectField,
} from 'components'
import { useAuth } from 'context'
import { PageHeader } from 'elements'
import React, { useEffect, useState } from 'react'
import {
  CommonUtility,
  countriesList,
  UpdateProfileSchema,
  UsersService,
} from 'utility'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'

const ProfileContainer = styled(FlexColumn)`
  overflow-y: auto;
  margin-top: 130px;
  border-width: 1px, 2px, 4px, 1px;
  border-style: solid;
  border-color: #22a354;
  box-shadow: 0px 0px 200.9px -120px #22a354 inset;
  background: #1f1f1f80;
  border-radius: 20px;
  h6 {
    color: white;
  }
  .email {
    color: #878e8e;
  }
`
export const ProfileScreen = () => {
  const { user } = useAuth('')
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateProfileSchema),
  })
  const [loading, setLoading] = useState(false)
  console.log('🚀 ~ profile.js:46 ~ ProfileScreen ~ loading:', loading)
  console.log('🚀 ~ profile.js:14 ~ ProfileScreen ~ user:', user)
  useEffect(() => {
    reset({
      country: user?.country,
      zipcode: user?.zipcode,
      address: user?.address,
      state: user?.state,
      name: user?.firstname,
      email: user?.emailID,
      phoneNo: user?.phoneNo,
    })
  }, [user])
  const submit = async formData => {
    try {
      await UsersService.save(formData)
    } catch (error) {
      console.log('🚀 ~ profile.js:61 ~ ProfileScreen ~ error:', error)
    }
    setLoading(true)
  }
  return (
    <div>
      <PageHeader title="Profile" subTitle="Edit Your Profile & Settings" />
      <div className="p-5 pt-0">
        <ProfileContainer className="p-5">
          <FlexRowBetween>
            <FlexRow>
              <AppAvatar size={80} url={user?.image} title={user?.firstname} />
              <FlexColumn className="ms-4 justify-content-center">
                <h6>
                  {CommonUtility.toTitleCase(
                    `${user?.firstname || ''} ${user?.lastname || ''}`,
                  )}
                </h6>
                <h6 className="email">{user?.emailID}</h6>
              </FlexColumn>
            </FlexRow>
            <GreenOutLinedButton>Edit</GreenOutLinedButton>
          </FlexRowBetween>

          <Form className="row mt-5">
            <InputTextField
              name="name"
              label="Name"
              control={control}
              className="col-6"
              errors={errors}
              placeholder="Enter name"
            />
            <InputTextField
              name="email"
              label="Email Address"
              control={control}
              disabled
              className="col-6"
              errors={errors}
              required
              placeholder="Enter Email Address"
            />
            <InputTextField
              name="password"
              control={control}
              errors={errors}
              className="col-6"
              label="Password"
              placeholder="Change your password"
              type="password" // Ensure this is set to "password"
            />
            <CommonPhoneBorderField
              name="phoneNo"
              label="Phone"
              control={control}
              className="col-6"
              errors={errors}
              placeholder="Enter Phone"
            />{' '}
            <InputTextField
              name="zipcode"
              label="Zip Code"
              control={control}
              className="col-6"
              errors={errors}
              placeholder="Enter Zipcode"
            />
            <InputTextField
              name="state"
              label="State"
              control={control}
              className="col-6"
              errors={errors}
              placeholder="Enter State"
            />
            <InputSelectField
              name="country"
              label="country"
              options={countriesList}
              control={control}
              className="col-6"
              errors={errors}
              placeholder="Enter country"
            />
            <InputTextField
              name="address"
              label="address"
              control={control}
              className="col-6"
              errors={errors}
              placeholder="Enter address"
            />
            <FlexRow className="justify-content-center mt-5">
              {' '}
              <GreenButton onClick={handleSubmit(submit)}>
                Save Profile
              </GreenButton>
            </FlexRow>
          </Form>
        </ProfileContainer>
      </div>
    </div>
  )
}
