import React from "react";
import styled from 'styled-components';

const Headr = styled.h1`
  margin-bottom: 2%;
  color: #9a12b3;
`;

export default function Title(props) {
    return (
        <Headr>{props.title}</Headr>
    )
}