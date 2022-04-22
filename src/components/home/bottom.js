import React from 'react';
import Footer from '../layout/footer';
import partnerTile from '../../assets/img/tilePartners.png';
import partnerContent from '../../assets/img/partnerContent.png';

function Bottom(){
    return(
        <div className = "x-home-bottom">
            <div className = "text-center pt-5">
                <img src = {partnerTile} alt = "partinerTile" width = "250px"/>
            </div>
            <div className = "text-center mt-5">
                <img src = {partnerContent} alt = "partinerTile" width = "80%"/>
            </div>
            <Footer />
        </div>
    )
}

export default Bottom;