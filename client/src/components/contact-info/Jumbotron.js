import React from "react";
import "./jumbotron.scss"
import { Link } from 'react-router-dom';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Thank you for shopping with Us!</h1>
            <p className="lead">Please provide your feedback on the comment box. Feel free to give us a call if you have any questions you can reach our customers service line at 704-305-890 from 7 am to 10 pm Monday-Sunday. We appreciate your business with Us!</p>
            <hr className="my-4"></hr>
            <p>You can also check below for our newest product available. Click on the link and it will take you to our product page.</p>
            {/* linking to the product page */}
            <Link to="/products" className="btn btn-primary btn-lg">newest product</Link>
        </div>
    )
}

export default Jumbotron;