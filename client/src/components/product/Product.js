import React from "react";
// import ProductCard from "./ProductCard";
import Specials from "../specials/Specials";
import "./style.scss";

//pass the cards to app.js


function Product(props) {
  const ProductsCard = (product) => {
    return (

      <div className="card-cont" key={product._id}>
        <div className="img-cont">
          <img alt={product.product_name} src={product.img} />
        </div>
        <div className="text-content">
          <h2>{product.product_name}</h2>
          <h3 className="price-modify">${product.price}</h3>
          <p>{product.products_description}</p>
          <button type="button" className="btn btn-success">Buy Now</button>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <Specials />
      <form className="filter" onSubmit={event => event.preventDefault()}>
        {/* <input className="typeFilter" type="text" onChange={event => props.nameFilter(event)} placeholder="Search for names.." title="Type in a name" /> */}

        <select className="category" onChange={ e => props.dropboxChange(e)}>
          <option value="Category">All Category</option>
          <option value="processor">Processor</option>
          <option value="watch">Watch</option>
          <option value="play console">Play Console</option>
          <option value="tv">TV</option>
          <option value="speakers">Speakers</option>
          <option value="drone">Drone</option>
          <option value="phone">Phone</option>
          <option value="alarm">Smart Alarm</option>
          <option value="computer">Computer</option>
          <option value="headphone">EarBuds</option>
          <option value="camera">Camera</option>
          <option value="iPad">iPad</option>
        </select>
        <select className="priceRange" onChange={e => props.priceChange(e)}>
          <option value="disable">Price Range</option>
          <option value="lessthan400">Highest to lower</option>
          <option value="morethan400">Lower to Highest</option>
        </select>
      </form>
      {props.products.map(product => ProductsCard(product))
      }
    </React.Fragment>
  )
}

export default Product;