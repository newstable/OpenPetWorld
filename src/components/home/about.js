import React from 'react';
import aboutImg from '../../assets/img/tileAbout.png';
import featureImg from '../../assets/img/tileFeature.png';
import {Grid} from '@material-ui/core';
import FeatureItem from './featureItem';
import sweethomeImg from '../../assets/img/sweethome.png'
import egg from '../../assets/img/features/egg.png';
import keepPet from '../../assets/img/features/sweet home.mp4';
import village from '../../assets/img/features/village.mp4';
import sweetHome from '../../assets/img/features/sweethome.png';

function About(){
    return(
        <div id="about">
            <div className = "x-home-about-back">
                <div className = "spacer-2"></div>
                <Grid container >   
                    <Grid item xs = {2} sm = {2} md = {5}></Grid> 
                    <Grid item xs = {8} sm = {8} md = {3}>
                        <div className = "text-center home-title-about">
                            <img src = {aboutImg} alt = "about title" width = "250px" />
                        </div>
                        <div className = "x-font8 text-center">
                            Open Pet World is a virtual pet game that aims to provide pet lovers with a deep bond with their pets. 
                            <br /><br />
                            Also it provides a connection to the real world economy by utilizing blockchain technology.
                        </div>
                    </Grid>  
                <Grid item xs = {2} sm = {2} md = {4}></Grid>       
                </Grid>
            </div>
            <div className = "x-home-features" id = "features">
                <div className = "text-center mb-5">
                    <img src = {featureImg} alt = "feature title" width = "300px" />
                </div>
                <Grid container spacing = {3} className = "text-center x-grid5">
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <img src = {egg} width = "100%"  alt = "item1" />
                        <span className = "x-font3">Collection</span>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <video autoPlay loop muted width="100%">
                            <source src={keepPet} type="video/mp4"/>
                        </video>
                        <span className = "x-font3">Keeping Pet</span>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <video autoPlay loop muted width="100%">
                            <source src={village} type="video/mp4"/>
                        </video>
                        <span className = "x-font3">Building Village</span>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <div className = "sweet-home-card">
                            <img src = {sweetHome} width = "100%"  alt = "item1" />
                        </div>
                        <span className = "x-font3">Sweet Home</span>
                        
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default About;