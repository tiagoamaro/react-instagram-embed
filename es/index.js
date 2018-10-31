function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import qs from 'query-string';

var InstagramEmbed =
/*#__PURE__*/
function (_Component) {
  _inherits(InstagramEmbed, _Component);

  function InstagramEmbed() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, InstagramEmbed);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InstagramEmbed)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "request", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "_timer", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      __html: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleFetchSuccess", function (response) {
      _this2.props.onSuccess && _this2.props.onSuccess(response);

      _this2.setState({
        __html: response.html
      }, function () {
        window.instgrm.Embeds.process();
        _this2.props.onAfterRender && _this2.props.onAfterRender();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleFetchFailure", function () {
      var _this2$props;

      clearTimeout(_this2._timer);
      _this2.props.onFailure && (_this2$props = _this2.props).onFailure.apply(_this2$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "cancel", function () {
      if (_this2.request) {
        _this2.request.cancel();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "createRequestPromise", function (url) {
      for (var _len2 = arguments.length, opts = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        opts[_key2 - 1] = arguments[_key2];
      }

      var request = {};
      request.promise = new Promise(function (resolve, reject) {
        var promise = fetch(new Request(url, _objectSpread({}, opts))).then(function (response) {
          return response.json();
        }).then(function (json) {
          return resolve(json);
        }).catch(function (err) {
          return reject(err);
        });

        request.cancel = function () {
          return reject(new Error('Cancelled'));
        };

        return promise;
      });
      return request;
    });

    return _this2;
  }

  _createClass(InstagramEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (window.instgrm || document.getElementById('react-instagram-embed-script')) {
        this.fetchEmbed(this.getQueryParams(this.props));
      } else {
        if (this.props.injectScript) {
          this.injectScript();
        }

        this.checkAPI().then(function () {
          return _this3.fetchEmbed(_this3.getQueryParams(_this3.props));
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          url = _this$props.url,
          hideCaption = _this$props.hideCaption,
          maxWidth = _this$props.maxWidth,
          containerTagName = _this$props.containerTagName;

      if (prevProps.url !== url || prevProps.hideCaption !== hideCaption || prevProps.maxWidth !== maxWidth || prevProps.containerTagName !== containerTagName) {
        this.request.cancel();
        this.fetchEmbed(this.getQueryParams(this.props));
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props2 = this.props,
          url = _this$props2.url,
          hideCaption = _this$props2.hideCaption,
          maxWidth = _this$props2.maxWidth,
          containerTagName = _this$props2.containerTagName,
          onLoading = _this$props2.onLoading,
          onSuccess = _this$props2.onSuccess,
          onAfterRender = _this$props2.onAfterRender,
          onFailure = _this$props2.onFailure;
      var __html = this.state.__html;

      if (nextProps.url !== url || nextProps.hideCaption !== hideCaption || nextProps.maxWidth !== maxWidth || nextProps.containerTagName !== containerTagName || nextProps.onLoading !== onLoading || nextProps.onSuccess !== onSuccess || nextProps.onAfterRender !== onAfterRender || nextProps.onFailure !== onFailure || nextState.__html !== __html) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var Tag = this.props.containerTagName;
      return React.createElement(Tag, _extends({}, this.omitComponentProps(), {
        dangerouslySetInnerHTML: {
          __html: this.state.__html
        }
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancel();
    }
  }, {
    key: "omitComponentProps",
    value: function omitComponentProps() {
      // eslint-disable-next-line no-unused-vars
      var _this$props3 = this.props,
          url = _this$props3.url,
          hideCaption = _this$props3.hideCaption,
          maxWidth = _this$props3.maxWidth,
          containerTagName = _this$props3.containerTagName,
          onLoading = _this$props3.onLoading,
          onSuccess = _this$props3.onSuccess,
          onAfterRender = _this$props3.onAfterRender,
          onFailure = _this$props3.onFailure,
          protocol = _this$props3.protocol,
          injectScript = _this$props3.injectScript,
          rest = _objectWithoutProperties(_this$props3, ["url", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"]);

      return rest;
    }
  }, {
    key: "injectScript",
    value: function injectScript() {
      var protocolToUse = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';
      var s = document.createElement('script');
      s.async = s.defer = true;
      s.src = "".concat(protocolToUse, "//platform.instagram.com/en_US/embeds.js");
      s.id = 'react-instagram-embed-script';
      var body = document.body;

      if (body) {
        body.appendChild(s);
      }
    }
  }, {
    key: "checkAPI",
    value: function checkAPI() {
      var _this4 = this;

      return new Promise(function (resolve) {
        (function checkAPI(_this) {
          _this._timer = setTimeout(function () {
            if (window.instgrm) {
              clearTimeout(_this._timer);
              resolve();
            } else {
              checkAPI(_this);
            }
          }, 20);
        })(_this4);
      });
    }
  }, {
    key: "fetchEmbed",
    value: function fetchEmbed(queryParams) {
      this.request = this.createRequestPromise("https://api.instagram.com/oembed/?".concat(queryParams));
      this.props.onLoading && this.props.onLoading();
      this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
    }
  }, {
    key: "getQueryParams",
    value: function getQueryParams(_ref) {
      var url = _ref.url,
          hideCaption = _ref.hideCaption,
          maxWidth = _ref.maxWidth;
      return qs.stringify({
        url: url,
        hidecaption: hideCaption,
        maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
        omitscript: true
      });
    }
  }]);

  return InstagramEmbed;
}(Component);

_defineProperty(InstagramEmbed, "defaultProps", {
  hideCaption: false,
  containerTagName: 'div',
  protocol: 'https:',
  injectScript: true
});

export { InstagramEmbed as default };