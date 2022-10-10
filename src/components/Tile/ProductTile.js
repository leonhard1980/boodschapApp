import React from "react";
import './ProductTile.css';
import Counter from "../Counter";


function ProductTile({ price, description, productName, photo}){
    return(
    <>

    <article className="product-container">
       <h3> {productName} </h3>
        <img src={photo} alt="productfoto"/>
        <p className="product-price">{price}</p>
        <p className="product-description">
        <div className="product-text">{description}</div></p>

        <Counter/>

        <span className="bestel"> bestel nu </span>

    </article>

    </>


    );
}

export default ProductTile;