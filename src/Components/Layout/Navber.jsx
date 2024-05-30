import React from 'react'
import { Link } from 'react-router-dom'

export default function Navber() {
    return (
        <>
            
            <nav class="navbar navbar-expand-lg fixed-top bg-color ">
                <div class="container">
                <Link class="navbar-brand text-white" to="/">Sita<span>Ram</span></Link>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                    </button>
                    <div class="collapse navbar-collapse justify-content-center  text-align-center" id="navbarNav">
                        <ul class="navbar-nav text-white">
                            <li class="nav-item">
                                <Link class="nav-link text-white active " aria-current="page" to="/" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link txt-color" to="/about">about</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link txt-color" to="#">chef</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link txt-color" to="#">menu</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link txt-color" to="#">reservation</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link txt-color" to="#">contact</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
