import React from 'react'
import styled from 'styled-components'



const Info = styled.div`
    color: #E9C46A;
    background: #264653;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0%;
    text-align: center;
    border: 3px solid #E76F51;
`

const Wrap = styled.div`
    opacity: 0.9;
    width: 50%;
    height: 50%;
    margin: 0 auto;
`

function Character(info) {
    const charInfo = info.props;

    return (
        <Wrap>
            {charInfo.map((data, idx) => {
                return (
                    <Info key={idx}>
                        Name: {data.name}<br /> Gender: {data.gender} <br /> Birth Year: {data.birth_year}<br /> <br />Films: {data.films.join(' - ')}
                    </Info>
                );
            })}
        </Wrap>
    );
}

export default Character;