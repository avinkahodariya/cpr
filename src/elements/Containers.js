import styled from "styled-components";

export const CommanAuthScreenLogin = styled.div`
    width:  ${({ isMobile }) => isMobile ? "100%" : "40%"};
    margin: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fffff;
    border: solid 1px ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    box-shadow: 0px 5px 13px rgba(5, 7, 7, 0.2);

    form {
        width: 100%;
    }
    .img {
        background-color: ${({ theme }) => theme.colors.primary};
        width:40px;
        border-radius:5px
    }
    .g-img {
        // background-color: ${({ theme }) => theme.colors.primary};
        width:18px;
        border-radius:5px
    }
    b {
        display: flex;
        align-items: center;
        gap: 10px;  
    }
    .kep-login-facebook {
        border-radius: .28571429rem !important;
        padding: .8571429em 1.5em .8571429em !important;
        line-height: 1em !important;
        font-size: 14px;
        width: 100%;
    }
`