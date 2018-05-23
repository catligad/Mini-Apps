class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checkoutPage: true,
      firstPage: false,
      secondPage: false,
      thirdPage: false,
      name:'',
      email:'',
      password:'',
      addressLine1:'',
      addressLine2:'',
      city:'',
      state:'',
      zipCode:'',
      phoneNumber:'',
      creditCard:'',
      expiryDate:'',
      cvv:'',
      billingZC:''
    };
  }

  onCheckoutClick() {
    this.setState({
      checkoutPage: false,
      firstPage:true,
    });
  }
  
  render(){
    var pageRendered;
    if (this.state.checkoutPage) {
      pageRendered = <CheckoutPage click={this.onCheckoutClick.bind(this)} />
    } else if (this.state.firstPage) {
      pageRendered = <FirstPage />
    } else if (this.state.secondPage) {
      pageRendered = <SecondPage />
    } else if (this.state.thirdPage) {
      pageRendered = <Thirdpage />
    }

    return(
      <div> 
        {pageRendered}
      </div>
    )
  }
}

function CheckoutPage (props) {
  function clickHandler(){
    console.log('I was clicked!')
    return props.click();
  };
  return(
    <div className="checkout" onClick={clickHandler.bind(this)}>
    Checkout
    </div>
  )
};

function FirstPage (){
  return(
    <div className="holderFirstPage">
    <div className="name"> 
      Name
    </div>
    <div className="email"> 
      Email
    </div>
    <div className="password"> 
      Password
    </div>
    <div className="password"> 
      Previous
    </div>
    <div className="password"> 
      Next
    </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
