'use strict';

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
      checkoutPage: true,
      firstPage: false,
      secondPage: false,
      thirdPage: false,
      confirmationPage: false,
      firstPageState: {},
      secondPageState: {},
      thirdPageState: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onCheckoutClick',
    value: function onCheckoutClick() {
      this.setState({
        checkoutPage: false,
        firstPage: true
      });
    }
  }, {
    key: 'onFirstPageClick',
    value: function onFirstPageClick(btn, state) {
      if (btn == 'previousBtn') {
        this.setState({
          checkoutPage: true,
          firstPage: false
        });
      } else if (btn == 'nextBtn') {
        this.setState({
          firstPage: false,
          secondPage: true,
          firstPageState: state
        });
        console.log(this.state);
      }
    }
  }, {
    key: 'onSecondPageClick',
    value: function onSecondPageClick(btn, state) {
      if (btn == 'previousBtn') {
        this.setState({
          firstPage: true,
          secondPage: false
        });
      } else if (btn == 'nextBtn') {
        this.setState({
          secondPage: false,
          thirdPage: true,
          secondPageState: state
        });
      }
    }
  }, {
    key: 'onThirdPageClick',
    value: function onThirdPageClick(btn, state) {
      if (btn == 'previousBtn') {
        this.setState({
          secondPage: true,
          thirdPage: false
        });
      } else if (btn == 'nextBtn') {
        this.setState({
          thirdPage: false,
          confirmationPage: true,
          thirdPageState: state
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var pageRendered;
      if (this.state.checkoutPage) {
        pageRendered = React.createElement(CheckoutPage, { click: this.onCheckoutClick.bind(this) });
      } else if (this.state.firstPage) {
        pageRendered = React.createElement(FirstPage, { click: this.onFirstPageClick.bind(this) });
      } else if (this.state.secondPage) {
        pageRendered = React.createElement(SecondPage, { click: this.onSecondPageClick.bind(this) });
      } else if (this.state.thirdPage) {
        pageRendered = React.createElement(ThirdPage, { click: this.onThirdPageClick.bind(this) });
      } else if (this.state.confirmationPage) {
        pageRendered = React.createElement(ConfirmationPage, { firstPageState: this.state.firstPageState, secondPageState: this.state.secondPageState, thirdPageState: this.state.thirdPageState });
      }

      return React.createElement(
        'div',
        null,
        pageRendered
      );
    }
  }]);

  return App;
}(React.Component);

// ------------------------------------------------------------


function CheckoutPage(props) {
  function handleClick() {
    return props.click();
  };
  return React.createElement(
    'div',
    { className: 'checkout', onClick: handleClick.bind(this) },
    'Checkout'
  );
};

// -------------------------------------------------------------

var FirstPage = function (_React$Component2) {
  _inherits(FirstPage, _React$Component2);

  function FirstPage(props) {
    _classCallCheck(this, FirstPage);

    var _this2 = _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).call(this, props));

    _this2.state = {
      name: '',
      email: '',
      password: ''
    };
    return _this2;
  }

  _createClass(FirstPage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }

    // handleClick(event) {
    //   this.setState
    // }

  }, {
    key: 'handleNavClick',
    value: function handleNavClick(event) {
      console.log(this.state);
      var state = this.state;
      return this.props.click(event.target.className, state);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'holderFirstPage' },
        React.createElement(
          'div',
          { className: 'css' },
          ' Name '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'name', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' Email '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'email', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' Password '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'password', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'navigator' },
          React.createElement(
            'span',
            { className: 'previousBtn', onClick: this.handleNavClick.bind(this) },
            ' Previous '
          ),
          React.createElement(
            'span',
            { className: 'submitBtn' },
            ' Submit '
          ),
          React.createElement(
            'span',
            { className: 'nextBtn', onClick: this.handleNavClick.bind(this) },
            ' Next '
          )
        )
      );
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
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    };
    return _this3;
  }

  _createClass(SecondPage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }

    // handleClick(event) {
    //   this.setState
    // }

  }, {
    key: 'handleNavClick',
    value: function handleNavClick(event) {
      return this.props.click(event.target.className, this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'holderSecondPage' },
        React.createElement(
          'div',
          { className: 'css' },
          ' Address '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'addressLine1', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'addressLine2', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' City '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'city', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' State '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'state', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' Zip Code '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'zipCode', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' Phone Number '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'phoneNumber', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'navigator' },
          React.createElement(
            'span',
            { className: 'previousBtn', onClick: this.handleNavClick.bind(this) },
            ' Previous '
          ),
          React.createElement(
            'span',
            { className: 'submitBtn' },
            ' Submit '
          ),
          React.createElement(
            'span',
            { className: 'nextBtn', onClick: this.handleNavClick.bind(this) },
            ' Next '
          )
        )
      );
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
      creditCard: '',
      expiryDate: '',
      cvv: '',
      billingZC: ''
    };
    return _this4;
  }

  _createClass(ThirdPage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }

    // handleClick(event) {
    //   this.setState
    // }

  }, {
    key: 'handleNavClick',
    value: function handleNavClick(event) {
      return this.props.click(event.target.className, this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'holderThirdPage' },
        React.createElement(
          'div',
          { className: 'css' },
          ' Credit Card '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'creditCard', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' Expiry Date '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'expiryDate', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' CVV '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'cvv', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'css' },
          ' Billing Zip '
        ),
        React.createElement(
          'div',
          { className: 'form' },
          React.createElement('input', { type: 'text', className: 'billingZC', onChange: this.handleChange.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'navigator' },
          React.createElement(
            'span',
            { className: 'previousBtn', onClick: this.handleNavClick.bind(this) },
            ' Previous '
          ),
          React.createElement(
            'span',
            { className: 'submitBtn' },
            ' Submit '
          ),
          React.createElement(
            'span',
            { className: 'nextBtn', onClick: this.handleNavClick.bind(this) },
            ' Next '
          )
        )
      );
    }
  }]);

  return ThirdPage;
}(React.Component);

// -------------------------------------------------------------


function ConfirmationPage(props) {
  console.log(props);
  return React.createElement(
    'div',
    { className: 'holderConfirmationPage' },
    React.createElement(
      'div',
      { className: 'css' },
      ' Name '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.name,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Email '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.email,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Password '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.password,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Address '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.addressLine1,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.addressLine2,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' City '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.city,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' State '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.state,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Zip '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.zipCode,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Phone Number '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.phoneNumber,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Credit Card Number '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.creditCard,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Expiry Date '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.expiryDate,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' CVV '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.cvv,
      ' '
    ),
    React.createElement(
      'div',
      { className: 'css' },
      ' Billing Zip '
    ),
    React.createElement(
      'div',
      { className: 'cssConf' },
      ' ',
      props.billingZC,
      ' '
    )
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
