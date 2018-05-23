class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checkoutPage: true,
      firstPage: false,
      secondPage: false,
      thirdPage: false,
      confirmationPage: false,
      firstPageState:{},
      secondPageState:{},
      thirdPageState:{}
    };
  }

  onCheckoutClick() {
    this.setState({
      checkoutPage: false,
      firstPage:true,
    });
  }

  onFirstPageClick(btn, state){
    if (btn == 'previousBtn') {
      this.setState({
        checkoutPage: true,
        firstPage:false,
      });
    } else if (btn == 'nextBtn') {
      this.setState({
        firstPage:false,
        secondPage:true,
        firstPageState: state,
      });
      console.log(this.state);
    }
  }

  onSecondPageClick(btn, state){
    if (btn == 'previousBtn') {
      this.setState({
        firstPage: true,
        secondPage:false,
      });
    } else if (btn == 'nextBtn') {
      this.setState({
        secondPage:false,
        thirdPage:true,
        secondPageState: state,
      });
    }
  }

  onThirdPageClick(btn, state){
    if (btn == 'previousBtn') {
      this.setState({
        secondPage: true,
        thirdPage:false,
      });
    } else if (btn == 'nextBtn') {
      this.setState({
        thirdPage:false,
        confirmationPage:true,
        thirdPageState: state,
      });
    }
  }
  
  render(){
    var pageRendered;
    if (this.state.checkoutPage) {
      pageRendered = <CheckoutPage click={this.onCheckoutClick.bind(this)} />
    } else if (this.state.firstPage) {
      pageRendered = <FirstPage click={this.onFirstPageClick.bind(this)} />
    } else if (this.state.secondPage) {
      pageRendered = <SecondPage click={this.onSecondPageClick.bind(this)} />
    } else if (this.state.thirdPage) {
      pageRendered = <ThirdPage click={this.onThirdPageClick.bind(this)} />
    } else if (this.state.confirmationPage) {
      pageRendered = <ConfirmationPage firstPageState={this.state.firstPageState} secondPageState={this.state.secondPageState} thirdPageState={this.state.thirdPageState} />
    }

    return(
      <div> 
        {pageRendered}
      </div>
    )
  }
}


// ------------------------------------------------------------
function CheckoutPage (props) {
  function handleClick(){
    return props.click();
  };
  return(
    <div className="checkout" onClick={handleClick.bind(this)}>
    Checkout
    </div>
  )
};

// -------------------------------------------------------------
class FirstPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      password:'',
    }
  }

  handleChange(event){
    this.setState({
      [event.target.className] : event.target.value
    });
  }

  // handleClick(event) {
  //   this.setState
  // }

  handleNavClick(event) {
    console.log(this.state);
    let state = this.state;
    return this.props.click(event.target.className, state);
  }


  render() {
    return(
    <div className="holderFirstPage">

    <div className="css"> Name </div>
    <div className="form">
      <input type="text" className="name" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> Email </div>
    <div className="form">
      <input type="text" className="email" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> Password </div>
    <div className="form">
      <input type="text" className="password" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="navigator">
      <span className="previousBtn" onClick={this.handleNavClick.bind(this)}> Previous </span>
      <span className="submitBtn"> Submit </span>
      <span className="nextBtn" onClick={this.handleNavClick.bind(this)}> Next </span>
    </div>

    </div>
  )} 
}


// ------------------------------------------------------------
class SecondPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      addressLine1:'',
      addressLine2:'',
      city:'',
      state:'',
      zipCode:'',
      phoneNumber:'',
    }
  }

  handleChange(event){
    this.setState({
      [event.target.className] : event.target.value
    });
  }

  // handleClick(event) {
  //   this.setState
  // }

  handleNavClick(event) {
    return this.props.click(event.target.className, this.state);
  }

  render() {
    return(
    <div className="holderSecondPage">

    <div className="css"> Address </div>
    <div className="form">
      <input type="text" className="addressLine1" onChange={this.handleChange.bind(this)}></input>
    </div>
    <div className="form">
      <input type="text" className="addressLine2" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> City </div>
    <div className="form">
      <input type="text" className="city" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> State </div>
    <div className="form">
      <input type="text" className="state" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> Zip Code </div>
    <div className="form">
      <input type="text" className="zipCode" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> Phone Number </div>
    <div className="form">
      <input type="text" className="phoneNumber" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="navigator">
      <span className="previousBtn" onClick={this.handleNavClick.bind(this)}> Previous </span>
      <span className="submitBtn" > Submit </span>
      <span className="nextBtn" onClick={this.handleNavClick.bind(this)}> Next </span>
    </div>

    </div>
  )} 
}

// -------------------------------------------------------------
class ThirdPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      creditCard:'',
      expiryDate:'',
      cvv:'',
      billingZC:''
    }
  }

  handleChange(event){
    this.setState({
      [event.target.className] : event.target.value
    });
  }

  // handleClick(event) {
  //   this.setState
  // }

  handleNavClick(event) {
    return this.props.click(event.target.className, this.state);
  }


  render() {
    return(
    <div className="holderThirdPage">

    <div className="css"> Credit Card </div>
    <div className="form">
      <input type="text" className="creditCard" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> Expiry Date </div>
    <div className="form">
      <input type="text" className="expiryDate" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> CVV </div>
    <div className="form">
      <input type="text" className="cvv" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="css"> Billing Zip </div>
    <div className="form">
      <input type="text" className="billingZC" onChange={this.handleChange.bind(this)}></input>
    </div>

    <div className="navigator">
      <span className="previousBtn" onClick={this.handleNavClick.bind(this)}> Previous </span>
      <span className="submitBtn"> Submit </span>
      <span className="nextBtn" onClick={this.handleNavClick.bind(this)}> Next </span>
    </div>

    </div>
  )} 
}


// -------------------------------------------------------------
function ConfirmationPage (props){
  console.log(props);
    return(
    <div className="holderConfirmationPage">
    
    <div className="css"> Name </div>
    <div className="cssConf"> {props.name} </div>

    <div className="css"> Email </div>
    <div className="cssConf"> {props.email} </div>

    <div className="css"> Password </div>
    <div className="cssConf"> {props.password} </div>

    <div className="css"> Address </div>
    <div className="cssConf"> {props.addressLine1} </div>
    <div className="cssConf"> {props.addressLine2} </div>

    <div className="css"> City </div>
    <div className="cssConf"> {props.city} </div>

    <div className="css"> State </div>
    <div className="cssConf"> {props.state} </div>

    <div className="css"> Zip </div>
    <div className="cssConf"> {props.zipCode} </div>

    <div className="css"> Phone Number </div>
    <div className="cssConf"> {props.phoneNumber} </div>

    <div className="css"> Credit Card Number </div>
    <div className="cssConf"> {props.creditCard} </div>

    <div className="css"> Expiry Date </div>
    <div className="cssConf"> {props.expiryDate} </div>

    <div className="css"> CVV </div>
    <div className="cssConf"> {props.cvv} </div>

    <div className="css"> Billing Zip </div>
    <div className="cssConf"> {props.billingZC} </div>

    </div>
  ) 
}





ReactDOM.render(<App />, document.getElementById('root'));
