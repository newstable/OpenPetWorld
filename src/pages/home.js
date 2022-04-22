import React from 'react';
import Nav from '../components/layout/nav';
import topImg from '../assets/img/homeTopImg.png';
import About from '../components/home/about';
import PetToken from '../components/home/petToken';
import BottomSection from '../components/home/bottom';
import defiVideo from '../assets/video/pet_video.mp4';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <div className="x-home-top">
                <Nav />
                <div className="x-home-top-video">
                    <video autoPlay loop muted width="100%" height="90%">
                        <source src={defiVideo} type="video/mp4" />
                    </video>
                </div>
                <div className='x-home-top-img'>
                    <div className="home-card ">
                        <div className="home-title">OPEN PET WORLD</div>
                        <div className="home-title-s">An intimate and lasting bond <br />with digital pets</div>
                        <button className="x-chocoImgBtn"> <Link to="/tokenomics" className="home-button">Get token</Link></button>
                        <button className="x-greenImgBtn">Play (soon)</button>
                    </div>
                </div>
            </div>
            <div>
                <About />
                <PetToken />
                <BottomSection />
            </div>
        </div>
    )
}

export default Home;