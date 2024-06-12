import React, { Component } from 'react'
import LeWagon from './Media/lewagon.png'
import Diploma from './Media/diploma.png'
import './curiosities.scss'

export default function Curiosities() {



    return (
        <div className='curiosities-page'>
            <div className='header'>
                <h1 className='h1-header'>Curiosities <br></br>about me</h1>
                <p className='p-header'>Discovering Possibilities through Passion and Knowledge</p>
            </div>

            <div className='info-section'>
                <section className='info-item'>
                    <h3>Who am I?</h3>
                    <hr></hr>
                    <p>"Hello! I'm Abdollah Farsane, born and raised in Italy with a rich Moroccan heritage. From a young age, technology has always fascinated me. My passion for tech ignited in kindergarten when my dad brought home our first PC. This early exposure set me on a path of endless curiosity and innovation, driving my journey in the world of technology."</p>
                </section>

                <section className='info-item'>
                    <h3>Education</h3>
                    <hr></hr>
                    <p>"I graduated from high school with a focus on Informatics and Telecommunications, which solidified my foundation in technology. To further enhance my skills, I attended a full stack web development bootcamp at Le Wagon in Amsterdam. This intensive program not only honed my development skills but also provided an excellent opportunity to practice and improve my English proficiency."<section className='imgs'>
                        <img src={LeWagon} />
                        <img src={Diploma} />
                    </section></p>
                </section>
            </div>
        </div>
    )
}