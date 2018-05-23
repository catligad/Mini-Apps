"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentPage: 0,
      firstPageState: {},
      secondPageState: {},
      thirdPageState: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: "onCheckoutClick",
    value: function onCheckoutClick() {
      this.setState({
        currentPage: 1
      });
    }
  }, {
    key: "onFirstPageClick",
    value: function onFirstPageClick(btn, state) {
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
  }, {
    key: "onSecondPageClick",
    value: function onSecondPageClick(btn, state) {
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
  }, {
    key: "onThirdPageClick",
    value: function onThirdPageClick(btn, state) {
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
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(CheckoutPage, {
          click: this.onCheckoutClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(FirstPage, {
          click: this.onFirstPageClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(SecondPage, {
          click: this.onSecondPageClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(ThirdPage, {
          click: this.onThirdPageClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(ConfirmationPage, {
          firstPageState: this.state.firstPageState,
          secondPageState: this.state.secondPageState,
          thirdPageState: this.state.thirdPageState,
          currentPage: this.state.currentPage
        })
      );
    }
  }]);

  return App;
}(React.Component);

// ------------------------------------------------------------


function CheckoutPage(props) {
  function handleClick() {
    return props.click();
  }

  if (props.currentPage === 0) {
    return React.createElement(
      "div",
      { className: "checkout", onClick: handleClick.bind(this) },
      "Checkout"
    );
  } else {
    return null;
  }
}

// -------------------------------------------------------------

var FirstPage = function (_React$Component2) {
  _inherits(FirstPage, _React$Component2);

  function FirstPage(props) {
    _classCallCheck(this, FirstPage);

    var _this2 = _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).call(this, props));

    _this2.state = {
      name: "",
      email: "",
      password: ""
    };
    return _this2;
  }

  _createClass(FirstPage, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }

    // handleClick(event) {
    //   this.setState
    // }

  }, {
    key: "handleNavClick",
    value: function handleNavClick(event) {
      var state = this.state;
      return this.props.click(event.target.className, state);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.currentPage === 1) {
        return React.createElement(
          "div",
          { className: "holderFirstPage" },
          React.createElement(
            "div",
            { className: "css" },
            " Name "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "name",
              value: this.state.name,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " Email "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "email",
              value: this.state.email,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " Password "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "password",
              className: "password",
              value: this.state.password,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "navigator" },
            React.createElement(
              "span",
              {
                className: "previousBtn",
                onClick: this.handleNavClick.bind(this)
              },
              "Previous"
            ),
            React.createElement(
              "span",
              { className: "submitBtn" },
              " Submit "
            ),
            React.createElement(
              "span",
              { className: "nextBtn", onClick: this.handleNavClick.bind(this) },
              "Next"
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return FirstPage;
}(React.Component);

// ------------------------------------------------------------


var SecondPage = function (_React$Component3) {
  _inherits(SecondPage, _React$Component3);

  function SecondPage(props) {
    _classCallCheck(this, SecondPage);

    var _this3 = _possibleConstructorReturn(this, (SecondPage.__proto__ || Object.getPrototypeOf(SecondPage)).call(this, props));

    _this3.state = {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    };
    return _this3;
  }

  _createClass(SecondPage, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }

    // handleClick(event) {
    //   this.setState
    // }

  }, {
    key: "handleNavClick",
    value: function handleNavClick(event) {
      var state = this.state;
      return this.props.click(event.target.className, state);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.currentPage === 2) {
        return React.createElement(
          "div",
          { className: "holderSecondPage" },
          React.createElement(
            "div",
            { className: "css" },
            " Address "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "addressLine1",
              value: this.state.addressLine1,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "addressLine2",
              value: this.state.addressLine2,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " City "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "city",
              value: this.state.city,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " State "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "state",
              value: this.state.state,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " Zip Code "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "zipCode",
              value: this.state.zipCode,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " Phone Number "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "phoneNumber",
              value: this.state.phoneNumber,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "navigator" },
            React.createElement(
              "span",
              {
                className: "previousBtn",
                onClick: this.handleNavClick.bind(this)
              },
              "Previous"
            ),
            React.createElement(
              "span",
              { className: "submitBtn" },
              " Submit "
            ),
            React.createElement(
              "span",
              { className: "nextBtn", onClick: this.handleNavClick.bind(this) },
              "Next"
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return SecondPage;
}(React.Component);

// -------------------------------------------------------------


var ThirdPage = function (_React$Component4) {
  _inherits(ThirdPage, _React$Component4);

  function ThirdPage(props) {
    _classCallCheck(this, ThirdPage);

    var _this4 = _possibleConstructorReturn(this, (ThirdPage.__proto__ || Object.getPrototypeOf(ThirdPage)).call(this, props));

    _this4.state = {
      creditCard: "",
      expiryDate: "",
      cvv: "",
      billingZC: ""
    };
    return _this4;
  }

  _createClass(ThirdPage, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }

    // handleClick(event) {
    //   this.setState
    // }

  }, {
    key: "handleNavClick",
    value: function handleNavClick(event) {
      var state = this.state;
      return this.props.click(event.target.className, state);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.currentPage === 3) {
        return React.createElement(
          "div",
          { className: "holderThirdPage" },
          React.createElement(
            "div",
            { className: "css" },
            " Credit Card "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "creditCard",
              value: this.state.creditCard,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " Expiry Date "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "expiryDate",
              value: this.state.expiryDate,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " CVV "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "password",
              className: "cvv",
              value: this.state.cvv,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "css" },
            " Billing Zip "
          ),
          React.createElement(
            "div",
            { className: "form" },
            React.createElement("input", {
              type: "input",
              className: "billingZC",
              value: this.state.billingZC,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            "div",
            { className: "navigator" },
            React.createElement(
              "span",
              {
                className: "previousBtn",
                onClick: this.handleNavClick.bind(this)
              },
              "Previous"
            ),
            React.createElement(
              "span",
              { className: "submitBtn" },
              " Submit "
            ),
            React.createElement(
              "span",
              { className: "nextBtn", onClick: this.handleNavClick.bind(this) },
              "Next"
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return ThirdPage;
}(React.Component);

// -------------------------------------------------------------


function ConfirmationPage(props) {
  if (props.currentPage === 4) {
    return React.createElement(
      "div",
      { className: "holderConfirmationPage" },
      React.createElement(
        "div",
        { className: "css" },
        " Name "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.firstPageState.name,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Email "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.firstPageState.email,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Password "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.firstPageState.password,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Address "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.secondPageState.addressLine1,
        " "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.secondPageState.addressLine2,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " City "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.secondPageState.city,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " State "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.secondPageState.state,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Zip "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.secondPageState.zipCode,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Phone Number "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.secondPageState.phoneNumber,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Credit Card Number "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.thirdPageState.creditCard,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Expiry Date "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.thirdPageState.expiryDate,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " CVV "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.thirdPageState.cvv,
        " "
      ),
      React.createElement(
        "div",
        { className: "css" },
        " Billing Zip "
      ),
      React.createElement(
        "div",
        { className: "cssConf" },
        " ",
        props.thirdPageState.billingZC,
        " "
      )
    );
  } else {
    return null;
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
