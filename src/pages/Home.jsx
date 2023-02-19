import React, { useState, useEffect } from 'react'
import theme from '../style/theme'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import List from '../components/Home/List'
import styled from 'styled-components'

const PageSize = styled.div`
    max-width: 80rem;
    margin: 1rem auto;
    background: #393E46;
    border-radius: 20px;
    justify-content: center;
`;

function Home() {
    return (
        <PageSize>

            <Header />


            <List />
            <Sidebar />

        </PageSize>
    )
}

export default Home