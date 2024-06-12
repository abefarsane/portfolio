import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

import './mainbuttons.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload, faEye } from '@fortawesome/free-solid-svg-icons';

export default function MainButtons() {
    return (
        <div className='main-buttons'>
            <Button variant="dark"><FontAwesomeIcon icon={faEye}/>BROWSE</Button>
            <Button variant="dark"><FontAwesomeIcon icon={faCloudDownload}/>CURRICULUM</Button>
        </div>
    )
}