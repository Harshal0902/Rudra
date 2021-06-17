import React from 'react'
import '../css/EnglishService.css'
import { Link } from 'react-router-dom'
import Typewriter from '../Components/Typewriter';
import MouseCard from '../Components/MouseCard';

function Public() {
    const color = { "color": "#37243d" }
    return (<div>
        <h1 slot="header" style={color}>PUBLIC</h1>
        <p slot="content" style={color}>Sign in with Public Account
        </p>
    </div >)
}

function Police() {
    const color = { "color": "cyan" }
    return (<div>
        <h1 slot="header" style={color}>
            POLICE</h1>
        <p slot="content" style={color}>Sign in with Police Account</p>
    </div >)
}

export default function EnglishService() {
    return (
        <div className='EnglishService'>
            <h1 className="title">RUDRA</h1>
            <div className='container1'><Typewriter />
            </div>
            <div className='container'>
                <MouseCard id='1' image='/assets/public.jpg' Info={Public} />
                <MouseCard id='2' image='/assets/police.jpg' Info={Police} />
            </div>
        </div>
    )
}