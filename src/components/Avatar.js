import React, { useState } from 'react'
import { Avatar } from 'antd'
import { CommonUtility } from 'utility'

export const AppAvatar = ({
  url,
  title,
  size = 40,
  bgColor = 'bg-gray-300',
  textColor = 'text-white',
}) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      {url && !imageError ? (
        <Avatar
          src={url}
          size={size}
          onError={handleImageError}
          className="rounded-full shadow-md"
        />
      ) : (
        <Avatar
          size={size}
          className={`flex items-center justify-center ${bgColor} ${textColor} rounded-full shadow-md`}
        >
          {CommonUtility.getInitials(title)}
        </Avatar>
      )}
    </>
  )
}
