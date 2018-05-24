class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      firstPageState: {},
      secondPageState: {},
      thirdPageState: {}
    };
  }

  postData(url, data) {
    return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
  }

  onNaviClick(btn, state, page) {
    if (btn == "previousBtn") {
      this.setState((prevState, props) => ({
        currentPage: --prevState.currentPage,
      }));
    } else if (btn == "nextBtn") {
      this.setState((prevState, props) => ({
        currentPage: ++prevState.currentPage,
      }));
      if (page == 1) {
        this.postData('http://127.0.0.1:3000/page1', state);
        this.setState({
          firstPageState: state
        })
      } else if (page == 2) {
        this.postData('http://127.0.0.1:3000/page2', state);
        this.setState({
          secondPageState: state
        })
      } else if (page == 3) {
        this.postData('http://127.0.0.1:3000/page3', state);
        this.setState({
          thirdPageState: state
        })
      }
    } else if (btn == "checkout") {
      this.setState((prevState, props) => ({
        currentPage: ++prevState.currentPage,
      }));
    }
  }

  render() {
    return (
      <div>
        <CheckoutPage
          click={this.onNaviClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <FirstPage
          click={this.onNaviClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <SecondPage
          click={this.onNaviClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <ThirdPage
          click={this.onNaviClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <ConfirmationPage
          firstPageState={this.state.firstPageState}
          secondPageState={this.state.secondPageState}
          thirdPageState={this.state.thirdPageState}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

// ------------------------------------------------------------
function CheckoutPage(props) {
  function handleClick() {
    return props.click('checkout');
  }

  if (props.currentPage === 0) {
    return (
      <div className="checkout" onClick={handleClick.bind(this)}>
        Checkout
      </div>
    );
  } else {
    return null;
  }
}

// -------------------------------------------------------------
class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleNavClick(event) {
    let state = this.state;
    return this.props.click(event.target.className, state, 1);
  }

  render() {
    if (this.props.currentPage === 1) {
      return (
        <div className="holderFirstPage">
          <div className="css"> Name </div>
          <div className="form">
            <input
              type="input"
              className="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Email </div>
          <div className="form">
            <input
              type="input"
              className="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Password </div>
          <div className="form">
            <input
              type="password"
              className="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="navigator">
            <span
              className="previousBtn"
              onClick={this.handleNavClick.bind(this)}
            >
              Previous
            </span>
            <span className="nextBtn" onClick={this.handleNavClick.bind(this)}>
              Next
            </span>
          </div>
          <img src="http://logo.pizza/img/cat-walk/cat-walk.png" className="logo" />
        </div>
      );
    } else {
      return null;
    }
  }
}

// ------------------------------------------------------------
class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleNavClick(event) {
    let state = this.state;
    return this.props.click(event.target.className, state, 2);
  }

  render() {
    if (this.props.currentPage === 2) {
      return (
        <div className="holderSecondPage">
          <div className="css"> Address </div>
          <div className="form">
            <input
              type="input"
              className="addressLine1"
              value={this.state.addressLine1}
              placeholder="Line 1"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form">
            <input
              type="input"
              className="addressLine2"
              value={this.state.addressLine2}
              placeholder="Line 2"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> City </div>
          <div className="form">
            <input
              type="input"
              className="city"
              value={this.state.city}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> State </div>
          <div className="form">
            <input
              type="input"
              className="state"
              value={this.state.state}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Zip Code </div>
          <div className="form">
            <input
              type="input"
              className="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Phone Number </div>
          <div className="form">
            <input
              type="input"
              className="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="XXX XXX  XXXX"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="navigator">
            <span
              className="previousBtn"
              onClick={this.handleNavClick.bind(this)}
            >
              Previous
            </span>
            <span className="nextBtn" onClick={this.handleNavClick.bind(this)}>
              Next
            </span>
          </div>
          <img src="http://logo.pizza/img/cat-walk/cat-walk.png" className="logo" />
        </div>
      );
    } else {
      return null;
    }
  }
}

// -------------------------------------------------------------
class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: "",
      expiryDate: "",
      cvv: "",
      billingZC: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleNavClick(event) {
    let state = this.state;
    return this.props.click(event.target.className, state, 3);
  }

  render() {
    if (this.props.currentPage === 3) {
      return (
        <div className="holderThirdPage">
          <div className="css"> Credit Card </div>
          <div className="form">
            <input
              type="input"
              className="creditCard"
              value={this.state.creditCard}
              placeholder="XXXX XXXX XXXX XXXX"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Expiry Date </div>
          <div className="form">
            <input
              type="input"
              className="expiryDate"
              value={this.state.expiryDate}
              placeholder="XX/XX"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> CVV </div>
          <div className="form">
            <input
              type="password"
              className="cvv"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Billing Zip </div>
          <div className="form">
            <input
              type="input"
              className="billingZC"
              value={this.state.billingZC}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="navigator">
            <span
              className="previousBtn"
              onClick={this.handleNavClick.bind(this)}
            >
              Previous
            </span>
            <span className="nextBtn" onClick={this.handleNavClick.bind(this)}>
              Next
            </span>
          </div>
          <img src="http://logo.pizza/img/cat-walk/cat-walk.png" className="logo" />
        </div>
      );
    } else {
      return null;
    }
  }
}

// -------------------------------------------------------------
function ConfirmationPage(props) {
  if (props.currentPage === 4) {
    return (
      <div className="holderConfirmationPage">

        <div className="cssConfMsg"> We've received your order! You will receive a confirmation email shortly. </div>
        <div className="cssConf"> {props.firstPageState.name} </div>
        <div className="cssLast"> Name </div>

        <div className="cssConf"> {props.firstPageState.email} </div>
        <div className="cssLast"> Email </div>

        {/* <div className="cssLast"> Password </div>
        <div className="cssConf"> {props.firstPageState.password} </div> */}

        <div className="cssConf"> {props.secondPageState.addressLine1} </div>
        <div className="cssConf"> {props.secondPageState.addressLine2} </div>
        <div className="cssLast"> Address </div>
        
        <div className="cssConf"> {props.secondPageState.city} </div>
        <div className="cssLast"> City </div>

        <div className="addressInfoHolder">
        <div className="addressInfo">
        <div className="cssConf"> {props.secondPageState.state} </div>
        <div className="cssLast"> State </div>
        </div>

        <div className="addressInfo">
        <div className="cssConf"> {props.secondPageState.zipCode} </div>
        <div className="cssLast"> Zip Code</div>
        </div>
        </div>

        <div className="cssConf"> {props.secondPageState.phoneNumber} </div>
        <div className="cssLast"> Phone Number </div>

        <div className="cssConf"> {props.thirdPageState.creditCard} </div>
        <div className="cssLast"> Credit Card Number </div>
        
        <div className="ccInfoHolder">
        <div className="ccInfo">
        <div className="cssConf"> {props.thirdPageState.expiryDate} </div>
        <div className="cssLast"> Expiry Date </div>
        </div>
        
        <div className="ccInfo">
        <div className="cssConf"> {props.thirdPageState.cvv} </div>
        <div className="cssLast"> CVV </div>
        </div>
        
        <div className="ccInfo">
        <div className="cssConf"> {props.thirdPageState.billingZC} </div>
        <div className="cssLast"> Billing Zip </div>
        </div>
        </div>
        
        <img src="http://logo.pizza/img/cat-walk/cat-walk.png" className="logo" />
      </div>
    );
  } else {
    return null;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));