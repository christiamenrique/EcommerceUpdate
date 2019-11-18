import React from "react";
import Product from "./components/product/Product";
import Contact from "./components/contact-info/Contact";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/Wrapper/index";
import AfterSubmit from "./components/after-submit/AfterSubmit";
// import products from "./products.json";
import "./App.scss";
import Navegation from "./components/nav/Nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./components/main-page/MainPage";
import httpClient from './components/user/httpClient'
import LogIn from './components/user/LogIn'
import LogOut from './components/user/LogOut'
import SignUp from './components/user/SignUp'
// import axios from "axios";



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: httpClient.getCurrentUser(),
      products: [],
      type: "null",
      price: true
    }
  }

  onLoginSuccess(user) {

    this.setState({ currentUser: httpClient.getCurrentUser() })
  }

  logOut() {
    httpClient.logOut()
    this.setState({ currentUser: null })
  }

  componentDidMount() {
    const { type, price } = this.state
    fetch(`/products/${type}/${price ? "acsend" : "descend"}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        })
      })
  }

  componentDidUpdate(prevProps, prevState,){
    if(this.state.type !== prevState.type || this.state.price !== prevState.price){
      const { type, price } = this.state
      fetch(`/products/${type}/${price ? "acsend" : "descend"}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            products: data
          })
        })
    }
  }


  // dropBox filter
  dropboxChange = (event) => {
    this.setState({
      type: event.target.value
    })
  }
  // price filter
  priceChange = (event) => {
    const types = [ "lessthan400", "morethan400" ]
    let value = event.target.value === types[0]
    this.setState({
      price: value
    })
  }

  render() {
    console.log(this.state.price)
    return (
      <Wrapper>
        <Router>
          <React.Fragment>
            <Navegation currentUser={this.state.currentUser}/>
            <Switch>
              <Route path="/login" render={(props) => {
                return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
              }} />
              <Route path="/logout" render={(props) => {
                return <LogOut onLogOut={this.logOut.bind(this)} />
              }} />
              <Route path="/signup" render={(props) => {
                return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
              }} />
              <Route path="/contact" render={() => <Contact />} />
              <Route path="/products" render={() => <Product priceChange={ this.priceChange } dropboxChange={ this.dropboxChange } products={this.state.products} />} />
              <Route path="/" render={() => <MainPage />} />
              {/* <Route path="/contacts/add" render={() => <AfterSubmit />} /> */}
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </Wrapper>
    );
  }
}

export default App;


