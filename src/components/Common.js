import { Divider, Row } from 'antd'
import styled from 'styled-components'
import { PrimaryButton } from './Button'

export const ScreenHeight = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

export const FlexBox = styled.div`
    display: flex;
`

export const FlexRow = styled(FlexBox)`
    flex-direction: row;
`
export const FlexColumn = styled(FlexBox)`
    flex-direction: column;
`
export const FlexRowBetween = styled(FlexRow)`
    justify-content: space-between;
`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #e7eaf9;
    border: solid 0.5px #e7eaf9;
`
export const FlexRowWrap = styled(FlexRow)`
    flex-wrap: wrap;
`

export const ImageContainer = styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    ${({ round }) => round && 'border-radius: 50%;'}
`

export const PriceStyle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #0fca98;
`

export const CardTitle = styled.h3`
    margin: 5px 0;
    font-weight: 700;
`

export const CardLocation = styled.p`
    margin: 0;
    color: #4e5c79;
`

export const CardGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    padding: 0px 100px;
    gap: 16px; /* Add spacing between the cards */
    @media (max-width: 600px) {
        padding: 0px 20px;
    }
`

export const CardWrapper = styled.div`
    width: 100%;
    max-width: 300px; /* Limit the card width */
    margin-bottom: 16px; /* Bottom margin for spacing */

    @media (max-width: 1200px) {
        width: 30%;
    }

    @media (max-width: 992px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const PropertyBlockWrap = styled.div`
    background: white;
    border-radius: 8px;
    margin-top: 20px;
`

export const PropertyBlockTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 20px;
    max-width: 400px;
    margin: 20px auto;
`

const Icon = styled.div`
    font-size: 40px;
    color: #ff6b6b;
`

const Message = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-top: 10px;
`

const Description = styled.p`
    font-size: 1rem;
    color: #777;
    margin-top: 5px;
`
export const NoDataFound = () => {
    return (
        <Container>
            <Icon>🔍</Icon>
            <Message>No Data Found</Message>
            <Description>
                We couldn't find any data matching your request. Please try
                again later.
            </Description>
        </Container>
    )
}

const ContainerForm = styled.div`
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    background-color: #ffffff;
`

const Title = styled.h4`
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 600;
`

export const PersonInformation = ({
    children,
    title,
    handleButtonClick,
    showButton,
    buttonTitle,
}) => {
    return (
        <ContainerForm>
            <div className="d-flex justify-content-between">
                <Title>{title}</Title>
                {showButton && (
                    <PrimaryButton onClick={handleButtonClick}>
                        Add {buttonTitle}
                    </PrimaryButton>
                )}
            </div>
            <Divider />
            {children}
        </ContainerForm>
    )
}

export const PageContainer = styled.div`
    .ant-upload-list-item-container {
        display: none;
    }
    .error {
        color: #ff4d4f;
    }
`

export const LabelBlockContainer = styled.span`
    font-size: 14px;
    color: #aaa;
    display: block;
`

export const ValueBlockContainer = styled.span`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-left: 2px;
`

export const KeyValueComponent = ({ label, value }) => {
    return (
        <Row>
            <LabelBlockContainer>{label} : </LabelBlockContainer>{' '}
            <ValueBlockContainer>{value || '-'}</ValueBlockContainer>
        </Row>
    )
}
