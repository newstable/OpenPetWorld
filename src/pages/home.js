import React, { useState, useEffect } from 'react';
import Nav from '../components/layout/nav';
import topImg from '../assets/img/homeTopImg.png';
import About from '../components/home/about';
import PetToken from '../components/home/petToken';
import BottomSection from '../components/home/bottom';
import defiVideo from '../assets/video/pet_video.mp4';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Home() {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    // const [firstTime, setFirstTime] = useState(1650860672398);
    const [endTime, setEndTime] = useState(1651033472398);

    useEffect(() => {
        if (Date.now() < endTime) {
            setInterval(() => {
                setDay(Math.floor((endTime - Date.now()) / (1000 * 3600 * 24)));
                setHour(Math.floor(((endTime - Date.now()) % (1000 * 3600 * 24)) / (1000 * 3600)));
                setMinute(Math.floor(((endTime - Date.now()) % (1000 * 3600 * 24)) % (1000 * 3600) / (1000 * 60)));
                setSecond(Math.floor(((endTime - Date.now()) % (1000 * 3600 * 24)) % (1000 * 3600) % (1000 * 60) / (1000)));
            }, 1000);
        }
    }, [])

    const StyleNumber = (num) => {
        return num < 10 ? "0" + num : num;
    }

    return (
        <div>
            <div className="x-home-top">
                <Nav />
                <div className="x-home-top-video">
                    <video autoPlay loop muted width="100%" height="90%">
                        <source src={defiVideo} type="video/mp4" />
                    </video>
                    <div className='x-home-top-img'>
                        <div className="home-card ">
                            <div className="home-title">OPEN PET WORLD</div>
                            <div className="home-title-s">An intimate and lasting bond <br />with digital pets</div>
                            <button className="x-chocoImgBtn"> <Link to="/tokenomics" className="home-button">Get token</Link></button>
                            <button className="x-greenImgBtn">Play (soon)</button>
                        </div>
                        <div className='home-presale'>
                            <div className='home-presale-font'>Pre-sale is Live Now</div>
                            <div className='home-count-down'>
                                <div>
                                    <div className='home-time-card'>{StyleNumber(day)}</div>
                                    <div style={{ fontSize: "13px", color: "rgb(156, 156, 157)" }}>Days</div>
                                </div>
                                <div>
                                    <div className='home-time-card'>{StyleNumber(hour)}</div>
                                    <div style={{ fontSize: "13px", color: "rgb(156, 156, 157)" }}>Hours</div>
                                </div>
                                <div>
                                    <div className='home-time-card'>{StyleNumber(minute)}</div>
                                    <div style={{ fontSize: "13px", color: "rgb(156, 156, 157)" }}>Minutes</div>
                                </div>
                                <div>
                                    <div className='home-time-card'>{StyleNumber(second)}</div>
                                    <div style={{ fontSize: "13px", color: "rgb(156, 156, 157)" }}>Seconds</div>
                                </div>
                            </div>
                            <div className='home-presale-border'></div>
                            <div className='home-presale-font'>Pre Sale</div>
                            <div className='home-presale-percent'>
                                <div style={{ width: "60%" }} className="home-presale-currentyPercent"></div>
                                <div className='home-ova-notes' style={{ left: "15%" }}>
                                    <span className='home-item-note'>Pre Sale</span>
                                    <div style={{ fontSize: "13px" }}>100$</div>
                                </div>
                                <div className='home-ova-notes' style={{ left: "45%" }}>
                                    <span className='home-item-note'>Soft Cap</span>
                                    <div style={{ fontSize: "13px" }}>1000$</div>
                                </div>
                                <div className='home-ova-notes' style={{ left: "80%" }}>
                                    <span className='home-item-note'>Hard Cap</span>
                                    <div style={{ fontSize: "13px" }}>10000$</div>
                                </div>
                            </div>
                            <button className='home-presale-button'>Purchase tokens</button>

                        </div>
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