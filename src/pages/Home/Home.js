import React, { Component } from 'react'
import MainHead from '../../components/Home/mainhead'
import MainButtons from '../../components/Home/mainbuttons'

export default function Home() {


    return (
        <div className='home-page'>
            <MainHead />
            <hr></hr>
            <MainButtons />
        </div>
    )
}