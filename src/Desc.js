import React from "react";
import styled from 'styled-components';

const Headr = styled.p`
  margin-bottom: 2%;
  color: #67809f;
`;

export default function Desc(props) {
    return (
        <Headr>{props.desc}</Headr>
    )
}