import React from 'react';
import itemImg from '../../assets/img/nftMarket/item1.jpg';
import avatarImg from '../../assets/img/nftMarket/avatar.jpg';

function ItemCard(props){
    const {data} = props;
    console.log(props)
    const {id,img,title,price,gene} = data;
    return(
        <div className = "x-nft-itemCard">
            <img src = {img} alt = "nft-item" width = "100%" style = {{borderRadius: "5px",}}/>
            <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">{title}</span>
                    <span className = "x-font6 float-right">{price} PWC</span>
                </div>
                <div className = "mt-2">
                <span className = "x-font6 ">Genome </span>
                <span className = "x-font6 float-right">{gene} </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;