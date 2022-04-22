import React from 'react';
import { Link } from 'react-router-dom';
import ChocoImgBtn from '../home/chocoImgBtn';
import { Grid } from '@material-ui/core';
import quickTile from '../../assets/img/tileQuickLink.png';
import connectTile from '../../assets/img/tileConnect.png';
import footerLogo from '../../assets/img/homeTopImg.png';
import mailIcon from '../../assets/img/mailIcon.png';
import facebookIcon from '../../assets/img/facebookIcon.png';
import instagramIcon from '../../assets/img/instagramIcon.png';
import twitterIcon from '../../assets/img/twitterIcon.png';
import { useHistory } from 'react-router-dom';

function Footer() {
    const history = useHistory();
    return (
        <div className="x-footer text-center">
            <div>
                <ChocoImgBtn text="Get Token" onClick={() => history.push("/tokenomics")} />
                <ChocoImgBtn text="Play Now!" />
            </div>
            <Grid container className="x-footer-content">
                <Grid item xs={6} sm={6} md={4}>
                    <div>
                        <img src={quickTile} alt="Quick links tile" className='x-footer-img' />
                    </div>
                    <div>
                        <Link to="/" className="x-footer-link">Home</Link>
                    </div>
                    <div>
                        <Link to="/tokenomics" className="x-footer-link">Tokenomics</Link>
                    </div>
                    <div>
                        <Link to="/defi" className="x-footer-link">Defi</Link>
                    </div>
                    <div>
                        <Link to="/my-items" className="x-footer-link">My Items</Link>
                    </div>
                    <div>
                        <Link to="/nft-marketplace" className="x-footer-link">NFT marketplace</Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className="Pet-world">
                    <img src={footerLogo} alt="footer logo" width="70%" />
                </Grid>
                <Grid item xs={6} sm={6} md={4} className="text-center pt-4">
                    <div className="connect-us">
                        <img src={connectTile} alt="connect us tile" className='x-footer-img' />
                    </div>
                    <div className="text-center">
                        <img src={mailIcon} alt="mail Icon" className="mr-3 x-footer-icon" />
                        <img src={facebookIcon} alt="facebook Icon" className="mr-3 x-footer-icon" />
                        <img src={instagramIcon} alt="instagram Icon" className="mr-3 x-footer-icon" />
                        <img src={twitterIcon} alt="twitter Icon" className="mr-3 x-footer-icon" />
                    </div>
                </Grid>
                <Grid item xs={12} className="x-footer-footer">
                    <div className="x-footer-font1">
                        Copyright © 2021 openpetworld.com
                    </div>
                    <div className="x-footer-font1">
                        All rights reserved
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;