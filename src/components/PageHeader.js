import { DesktopMode, MobileMode } from 'layout'
import React from 'react'
import { PrimaryButton } from './Button'
import styled from 'styled-components'
// import { Header } from 'semantic-ui-react'

export const PageHeader = ({ header, hideWeb = false }) => {
    return (
        <>
            {!hideWeb && <DesktopMode>
                <div>{header}</div>
            </DesktopMode>}
            <MobileMode>
                <h3>{header}</h3>
            </MobileMode>
        </>
    )
}

export const AdminPageHeader = ({ title, showButton, onButtonClick, buttonTitle }) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="ps-4">
                <h3>{title}</h3>
            </div>
            {
                showButton &&
                <PrimaryButton className="ms-2 me-4" onClick={onButtonClick}>{buttonTitle}</PrimaryButton>
            }
        </div>
    )
}
const StyledHeader = styled.div`
    background-color: #2540a2;
    padding: 20px; /* Added padding for smaller screens */
    
    @media (max-width: 768px) {
        padding: 15px; /* Reduced padding for smaller screens */
    }
`;

const MainTitle = styled.h2`
    color: white;
    font-size: 30px;
    line-height: 36px;
    font-weight: 900;
    text-transform: capitalize;
    font-family: var(--font-heading);
    letter-spacing: 0.5px;
    margin-bottom: 0px !important;

    @media (max-width: 1024px) {
        font-size: 24px; /* Reduced font size for tablet */
    }

    @media (max-width: 768px) {
        font-size: 20px; /* Further reduced font size for mobile */
        line-height: 28px; /* Adjust line height for smaller screens */
    }
`;

const SemiTitle = styled.p`
    font-family: initial;
    font-size: 20px;
    font-style: italic;
    color: #7590f3;

    @media (max-width: 1024px) {
        font-size: 18px; /* Slightly smaller font size for tablets */
    }

    @media (max-width: 768px) {
        font-size: 16px; /* Further reduced font size for mobile */
    }
`;

const Title = styled.div`
    color: white;
    text-align: left;
    padding: 50px 50px 50px 50px;

    @media (max-width: 1024px) {
        padding: 40px 30px; /* Reduced padding for tablets */
    }

    @media (max-width: 768px) {
        padding: 20px 15px; /* Reduced padding for mobile */
    }
`;

export const WebPageHeader = ({ title, subTitle }) => {
    return (
        <StyledHeader>
            <div>
                <Title>
                    <MainTitle>{title}</MainTitle>
                    { subTitle && <SemiTitle>{subTitle}</SemiTitle> }
                </Title>
            </div>
        </StyledHeader>
    )
}