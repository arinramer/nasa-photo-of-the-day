import React from "react";
import styled from 'styled-components';

const SpaceImg = styled.img`
    height: auto;
    width: 500px;
    margin: 10%;
    border-radius: 3%;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Photo(props) {
    return (
        <Wrapper>
            <SpaceImg src={props.photo} alt="the final frontier"/>
        </Wrapper>
    )
}