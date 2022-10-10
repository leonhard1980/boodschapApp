import React, {useState} from "react";
import './ProductTile.css';
import Counter from "../Counter";


function ProductTile({ price, description, productName, photo}){
    const [amount, setAmount] = useState(0)

    function decrementCounter() {
        if(amount ===0) {
            return;
        }
        setAmount(prevCount => prevCount - 1)
    }

    function incrementCounter() {
        setAmount(prevCount => prevCount + 1)
    }

    return(
    <>

    <article className="product-container">
       <h3> {productName} </h3>
        <img src={photo} alt="productfoto"/>
        <p className="product-price">{price}</p>
        <p className="product-description">
        <div className="product-text">{description}</div></p>

        <p className="counter">
            <button onClick={decrementCounter}> - </button>
            <span> {amount} </span>
            <button onClick={incrementCounter}> + </button>
        </p>

        <span className="bestel"> voeg toe </span>

    </article>

    </>


    );
}

export default ProductTile;