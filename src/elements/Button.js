import { Button } from 'antd'
import { FlexRow } from 'components'
import { DesktopMode, MobileMode } from 'layout'
import styled from 'styled-components'

export const AppButton = ({ loading, children, ...rest }) => (
    <>
        <Button loading={Boolean(loading)} {...rest}>
            {children}
        </Button>
    </>
)

export const BigButton = styled.div`
    button {
        border-radius: 5px;
        box-shadow: 0 5px 24px rgba(31, 37, 59, 0.15);
        color: #fff;
        font-size: 1.2rem;
        padding: 17px;
        height: 57px;
    }
`

export const AppBigButton = ({ loading, children, ...rest }) => (
    <BigButton>
        <Button loading={Boolean(loading)} {...rest}>
            {children}
        </Button>
    </BigButton>
)
export const AppPrimaryButton = styled(AppButton)`
    // background: ${({ theme }) => theme.colors.primary} !important;
    // color: ${({ theme }) => theme.colors.white} !important;
`
export const AppDangerButton = styled(AppButton)`
    background: ${({ theme }) => theme.colors.danger} !important;
    color: ${({ theme }) => theme.colors.white} !important;
`

export const AppSecondaryButton = styled(AppButton)`
    height: 100%;
`

export const LinkText = styled.div`
    color: ${({ theme }) => theme.colors.black} !important;
    text-decoration: ${({ noUnderline }) =>
        noUnderline ? 'none' : 'underline'};
    cursor: pointer;
    position: relative;
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary} !important;
    }
`

export const SubmitCancelButtons = ({
    loading,
    onSubmit,
    onCancel,
    className,
    hideCancel = false,
    cancelText = 'Cancel',
}) => {
    return (
        <>
            <DesktopMode>
                <FlexRow className={`justify-content-end ${className}`}>
                    <AppPrimaryButton loading={loading} onClick={onSubmit}>
                        Submit
                    </AppPrimaryButton>
                    {!hideCancel && (
                        <AppButton type="button" onClick={onCancel}>
                            {cancelText}
                        </AppButton>
                    )}
                </FlexRow>
            </DesktopMode>
            <MobileMode>
                <FlexRow className={`${className} justify-content-end`}>
                    <AppPrimaryButton
                        loading={loading}
                        className="col  col-sm-2 col-md-2"
                        onClick={onSubmit}
                    >
                        Submit
                    </AppPrimaryButton>
                    {!hideCancel && (
                        <AppButton
                            type="button"
                            className="col col-sm-2  col-md-2"
                            onClick={onCancel}
                        >
                            {cancelText}
                        </AppButton>
                    )}
                </FlexRow>
            </MobileMode>
        </>
    )
}
