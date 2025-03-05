import { Image, Upload } from 'antd'
import { Trash } from 'phosphor-react'
import { Controller } from 'react-hook-form'
import styled from 'styled-components'
import { CustomUploadButton } from './Button'

const ImagePreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
`
const PreviewCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: 1px dotted gray;
    border-radius: 20px;
    button {
        position: absolute;
        top: -10px;
        right: -10px;
        background: red;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const CustomMediaUploader = ({
    name,
    control,
    fileList,
    errors,
    setFileList,
}) => {
    const handleUploadChange = newFileList => {
        if (newFileList.length > 0) {
            const updatedFileList = newFileList?.map(file => {
                if (typeof file === 'string') {
                    return file
                }
                return {
                    ...file,
                    preview: file.originFileObj
                        ? URL.createObjectURL(file.originFileObj)
                        : file.preview,
                    type: file.type || 'image',
                }
            })
            setFileList(updatedFileList)
        } else {
            setFileList([])
        }
    }

    const handleRemove = (file, index) => {
        const filteredFiles = fileList.filter((_, i) => i !== index)
        setFileList(filteredFiles)
    }

    return (
        <div className="ps-2">
            {errors?.[name] && fileList?.length === 0 && (
                <p className="error">{errors?.[name]?.message}</p>
            )}

            <Controller
                name={name}
                control={control}
                defaultValue={[]}
                render={() => (
                    <>
                        <Upload
                            accept="image/*,video/mp4"
                            multiple
                            fileList={[]}
                            onChange={info => handleUploadChange(info.fileList)}
                            onRemove={file => handleRemove(file)}
                            beforeUpload={() => false}
                        >
                            <CustomUploadButton title="Upload Images or Videos" />
                        </Upload>

                        <ImagePreviewContainer>
                            {fileList?.map((file, index) => (
                                <PreviewCard key={file.uid || index}>
                                    {file.type === 'video/mp4' ? (
                                        // eslint-disable-next-line jsx-a11y/media-has-caption
                                        <video
                                            width="100"
                                            height="100"
                                            controls
                                        >
                                            <source
                                                src={
                                                    typeof file === 'object'
                                                        ? file.preview
                                                        : file
                                                }
                                                type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                    ) : (
                                        <Image
                                            src={
                                                typeof file === 'object'
                                                    ? file.preview
                                                    : file
                                            }
                                            alt={file.name}
                                            width={100}
                                            height={100}
                                            preview={false}
                                        />
                                    )}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemove(file, index)
                                        }
                                    >
                                        <Trash className="fs-6" />
                                    </button>
                                </PreviewCard>
                            ))}
                        </ImagePreviewContainer>
                    </>
                )}
            />
        </div>
    )
}
