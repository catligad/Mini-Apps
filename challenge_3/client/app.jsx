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

  onCheckoutClick() {
    this.setState({
      currentPage: 1
    });
  }

  onFirstPageClick(btn, state) {
    if (btn == "previousBtn") {
      this.setState({
        currentPage: 0
      });
    } else if (btn == "nextBtn") {
      this.setState({
        currentPage: 2,
        firstPageState: state
      });
    }
  }

  onSecondPageClick(btn, state) {
    if (btn == "previousBtn") {
      this.setState({
        currentPage: 1
      });
    } else if (btn == "nextBtn") {
      this.setState({
        currentPage: 3,
        secondPageState: state
      });
    }
  }

  onThirdPageClick(btn, state) {
    if (btn == "previousBtn") {
      this.setState({
        currentPage: 2
      });
    } else if (btn == "nextBtn") {
      this.setState({
        currentPage: 4,
        thirdPageState: state
      });
    }
  }

  render() {
    return (
      <div>
        <CheckoutPage
          click={this.onCheckoutClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <FirstPage
          click={this.onFirstPageClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <SecondPage
          click={this.onSecondPageClick.bind(this)}
          currentPage={this.state.currentPage}
        />
        <ThirdPage
          click={this.onThirdPageClick.bind(this)}
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
    return props.click();
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

  // handleClick(event) {
  //   this.setState
  // }

  handleNavClick(event) {
    let state = this.state;
    return this.props.click(event.target.className, state);
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
            <span className="submitBtn"> Submit </span>
            <span className="nextBtn" onClick={this.handleNavClick.bind(this)}>
              Next
            </span>
          </div>
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

  // handleClick(event) {
  //   this.setState
  // }

  handleNavClick(event) {
    let state = this.state;
    return this.props.click(event.target.className, state);
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
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form">
            <input
              type="input"
              className="addressLine2"
              value={this.state.addressLine2}
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
            <span className="submitBtn"> Submit </span>
            <span className="nextBtn" onClick={this.handleNavClick.bind(this)}>
              Next
            </span>
          </div>
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

  // handleClick(event) {
  //   this.setState
  // }

  handleNavClick(event) {
    let state = this.state;
    return this.props.click(event.target.className, state);
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
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> Expiry Date </div>
          <div className="form">
            <input
              type="input"
              className="expiryDate"
              value={this.state.expiryDate}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="css"> CVV </div>
          <div className="form">
            <input
              type="password"
              className="cvv"
              value={this.state.cvv}
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
            <span className="submitBtn"> Submit </span>
            <span className="nextBtn" onClick={this.handleNavClick.bind(this)}>
              Next
            </span>
          </div>
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
        <div className="css"> Name </div>
        <div className="cssConf"> {props.firstPageState.name} </div>

        <div className="css"> Email </div>
        <div className="cssConf"> {props.firstPageState.email} </div>

        <div className="css"> Password </div>
        <div className="cssConf"> {props.firstPageState.password} </div>

        <div className="css"> Address </div>
        <div className="cssConf"> {props.secondPageState.addressLine1} </div>
        <div className="cssConf"> {props.secondPageState.addressLine2} </div>

        <div className="css"> City </div>
        <div className="cssConf"> {props.secondPageState.city} </div>

        <div className="css"> State </div>
        <div className="cssConf"> {props.secondPageState.state} </div>

        <div className="css"> Zip </div>
        <div className="cssConf"> {props.secondPageState.zipCode} </div>

        <div className="css"> Phone Number </div>
        <div className="cssConf"> {props.secondPageState.phoneNumber} </div>

        <div className="css"> Credit Card Number </div>
        <div className="cssConf"> {props.thirdPageState.creditCard} </div>

        <div className="css"> Expiry Date </div>
        <div className="cssConf"> {props.thirdPageState.expiryDate} </div>

        <div className="css"> CVV </div>
        <div className="cssConf"> {props.thirdPageState.cvv} </div>

        <div className="css"> Billing Zip </div>
        <div className="cssConf"> {props.thirdPageState.billingZC} </div>
      </div>
    );
  } else {
    return null;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
