import { Tag } from "antd"
import styled from "styled-components"

const TagContainer = styled(Tag)`
    // width: 50px;
    margin: 2px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    border: 0;
    color: #F74400;
    padding: 4px 12px;
    border-radius: 30px;
`
export const CustomTag = ({ text, color }) => (
    <span>
        <TagContainer color={color}>{text}</TagContainer>
    </span>
)