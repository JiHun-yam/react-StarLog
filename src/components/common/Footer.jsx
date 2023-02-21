import React from 'react';
import styled from 'styled-components';


const FooterArea = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222831;
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
        font-size: .9375rem;
        color: #fff;
        margin: 0 auto;
        background: #222831;
    };
  
`;





export default function Footer() {
    return (
        <FooterArea>
            <p>© HH99 Project  by: Harry 2023 | All rights reserved.</p>
        </FooterArea>
    )
}
