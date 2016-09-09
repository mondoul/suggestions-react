(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
    function NavbarActions() {
        _classCallCheck(this, NavbarActions);

        this.generateActions('updateAjaxAnimation', 'updateSearchQuery', 'findSuggestionSuccess', 'findSuggestionFail', 'login', 'logout', 'profileUpdated');
    }

    _createClass(NavbarActions, [{
        key: 'findSuggestions',
        value: function findSuggestions(payload) {
            // $.ajax({
            //     url: '/api/suggestions/search',
            //     data: { text: payload.searchQuery }
            // }).done((data) => {
            //     assignIn(payload, data);
            //     this.actions.findSuggestionSuccess(payload);
            // }).fail(() => {
            //     this.actions.findSuggestionsFail(payload);
            // });
        }
    }]);

    return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../utils/alt":302,"lodash":"lodash"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewSuggestionActions = function () {
    function NewSuggestionActions() {
        _classCallCheck(this, NewSuggestionActions);

        this.generateActions('addSuggestionSuccess', 'addSuggestionFail', 'updateTitle', 'updateContent', 'invalidTitle', 'invalidContent', 'openModal', 'closeModal');
    }

    _createClass(NewSuggestionActions, [{
        key: 'addSuggestion',
        value: function addSuggestion(title, content, token) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/api/suggestions',
                data: { title: title, content: content },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).done(function (data) {
                _this.actions.addSuggestionSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addSuggestionFail('Couldn\'t add the suggestion...');
            });
        }
    }]);

    return NewSuggestionActions;
}();

exports.default = _alt2.default.createActions(NewSuggestionActions);

},{"../utils/alt":302}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuggestionActions = function () {
    function SuggestionActions() {
        _classCallCheck(this, SuggestionActions);

        this.generateActions('getSuggestionSuccess', 'getSuggestionFail', 'likeSuggestionSuccess', 'likeSuggestionFail', 'dislikeSuggestionSuccess', 'dislikeSuggestionFail');
    }

    _createClass(SuggestionActions, [{
        key: 'likeSuggestion',
        value: function likeSuggestion(id, token) {
            var _this = this;

            $.ajax({
                type: 'PUT',
                url: '/api/suggestions/' + id + '/like',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).done(function (data) {
                _this.actions.likeSuggestionSuccess(data);
            }).fail(function () {
                _this.actions.likeSuggestionFail('Vote failed :(');
            });
        }
    }, {
        key: 'dislikeSuggestion',
        value: function dislikeSuggestion(id, token) {
            var _this2 = this;

            $.ajax({
                type: 'PUT',
                url: '/api/suggestions/' + id + '/dislike',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).done(function (data) {
                _this2.actions.dislikeSuggestionSuccess(data);
            }).fail(function () {
                _this2.actions.dislikeSuggestionFail('Vote failed :(');
            });
        }
    }, {
        key: 'getSuggestion',
        value: function getSuggestion(id) {
            var _this3 = this;

            $.ajax({
                type: 'GET',
                url: '/api/suggestions/' + id
            }).done(function (data) {
                _this3.actions.getSuggestionSuccess(data);
            }).fail(function (jqXhr) {
                _this3.actions.dislikeSuggestionFail('Couldn\'t retrieve suggestion.');
            });
        }
    }]);

    return SuggestionActions;
}();

exports.default = _alt2.default.createActions(SuggestionActions);

},{"../utils/alt":302}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuggestionListActions = function () {
    function SuggestionListActions() {
        _classCallCheck(this, SuggestionListActions);

        this.generateActions('getTopSuggestionsSuccess', 'getTopSuggestionsFail', 'getLastSuggestionsSuccess', 'getLastSuggestionsFail');
    }

    _createClass(SuggestionListActions, [{
        key: 'getTopSuggestions',
        value: function getTopSuggestions() {
            var _this = this;

            $.ajax({
                type: 'GET',
                url: '/api/suggestions/top/10'
            }).done(function (data) {
                _this.actions.getTopSuggestionsSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTopSuggestionsFail('Couldn\'t retrieve the top suggestions.');
            });
        }
    }, {
        key: 'getLastSuggestions',
        value: function getLastSuggestions() {
            var _this2 = this;

            $.ajax({
                type: 'GET',
                url: '/api/suggestions/last/5'
            }).done(function (data) {
                _this2.actions.getLastSuggestionsSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getLastSuggestionsFail('Couldn\'t retrieve the last created suggestions.');
            });
        }
    }]);

    return SuggestionListActions;
}();

exports.default = _alt2.default.createActions(SuggestionListActions);

},{"../utils/alt":302}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var children = null;
            if (this.props.children) {
                children = _react2.default.cloneElement(this.props.children, {
                    auth: this.props.route.auth // propagates the auth instance from route to all children
                });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Navbar2.default, { history: this.props.history, auth: this.props.route.auth }),
                children
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./Navbar":8,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeago = require('../utils/timeago');

var _timeago2 = _interopRequireDefault(_timeago);

var _SuggestionListStore = require('../stores/SuggestionListStore');

var _SuggestionListStore2 = _interopRequireDefault(_SuggestionListStore);

var _SuggestionListActions = require('../actions/SuggestionListActions');

var _SuggestionListActions2 = _interopRequireDefault(_SuggestionListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = _SuggestionListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _SuggestionListStore2.default.listen(this.onChange);
            _SuggestionListActions2.default.getTopSuggestions();
            _SuggestionListActions2.default.getLastSuggestions();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _SuggestionListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'navigate',
        value: function navigate(id) {
            this.props.history.pushState(null, '/suggestion/' + id);
        }
    }, {
        key: 'renderShortSuggestion',
        value: function renderShortSuggestion(suggestion, index) {
            var maxLength = 100;
            var title = suggestion.title;

            if (title.length > maxLength) {
                title = title.substring(0, maxLength) + '...';
            }

            return _react2.default.createElement(
                'div',
                { className: 'short-suggestion-component list-group-item', key: suggestion._id, onClick: this.navigate.bind(this, suggestion._id) },
                _react2.default.createElement(
                    'div',
                    { className: 'votes' },
                    _react2.default.createElement(
                        'span',
                        { className: 'likes' },
                        suggestion.likes
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'Points'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'span',
                        { className: 'title' },
                        title
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'created' },
                        'by ',
                        suggestion.author,
                        ', ',
                        (0, _timeago2.default)(suggestion.created),
                        ' ago'
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var topList = this.state.topSuggestions.map(this.renderShortSuggestion.bind(this));
            var lastCreatedList = this.state.lastCreated.map(this.renderShortSuggestion.bind(this));

            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Top 10'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'list-group animate fade-in' },
                            topList
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Most Recent'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'list-group' },
                            lastCreatedList
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/SuggestionListActions":4,"../stores/SuggestionListStore":299,"../utils/timeago":304,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            showModal: false
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'open',
        value: function open() {
            this.setState({ showModal: true });
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({ showModal: false });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            this.props.auth.login({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                email: _reactDom2.default.findDOMNode(this.refs.email).value,
                password: _reactDom2.default.findDOMNode(this.refs.password).value
            }, function (err) {
                if (err) toastr.error("something went wrong: " + err.message);
            });
        }
    }, {
        key: 'signUp',
        value: function signUp() {
            // calls auth0 signup api, sending new account data
            this.props.auth.signup({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                email: _reactDom2.default.findDOMNode(this.refs.email).value,
                password: _reactDom2.default.findDOMNode(this.refs.password).value
            }, function (err) {
                if (err) toastr.error("something went wrong: " + err.message);
            });
        }
    }, {
        key: 'googleLogin',
        value: function googleLogin() {
            this.props.auth.login({
                connection: 'google-oauth2'
            }, function (err) {
                if (err) toastr.error("something went wrong: " + err.message);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Modal,
                { show: this.state.showModal, onHide: this.close.bind(this) },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Title,
                        null,
                        'Login'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Form,
                        { onSubmit: this.handleSubmit.bind(this), className: 'form-horizontal login-form' },
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            { controlId: 'email' },
                            _react2.default.createElement(
                                _reactBootstrap.ControlLabel,
                                null,
                                'E-mail'
                            ),
                            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'email', ref: 'email', placeholder: 'email@example.com', required: true })
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            { controlId: 'password' },
                            _react2.default.createElement(
                                _reactBootstrap.ControlLabel,
                                null,
                                'Password'
                            ),
                            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', ref: 'password', placeholder: 'Password', required: true })
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.ButtonToolbar,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { type: 'submit', bsStyle: 'primary' },
                                'Sign In'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.signUp.bind(this) },
                                'Sign Up'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { bsStyle: 'link', onClick: this.googleLogin.bind(this) },
                                'Login with Google'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.default = Login;

},{"react":"react","react-bootstrap":129,"react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _NewSuggestion = require('./NewSuggestion');

var _NewSuggestion2 = _interopRequireDefault(_NewSuggestion);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _NavbarStore2.default.initAuthService(props.auth); // passign the AuthService to the Store
        _this.state = _NavbarStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _NavbarStore2.default.listen(this.onChange);

            $(document).ajaxStart(function () {
                _NavbarActions2.default.updateAjaxAnimation('fadeIn');
            });

            $(document).ajaxComplete(function () {
                setTimeout(function () {
                    _NavbarActions2.default.updateAjaxAnimation('fadeOut');
                }, 750);
            });

            $(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            $('[data-toggle="tooltip"]').tooltip();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _NavbarStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'newSuggestion',
        value: function newSuggestion(event) {
            this.refs.newSuggestionBtn.open();
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var searchQuery = this.state.searchQuery.trim();

            if (searchQuery) {
                _NavbarActions2.default.findSuggestions({
                    searchQuery: searchQuery,
                    searchForm: this.refs.searchForm,
                    history: this.props.history
                });
            }
        }
    }, {
        key: 'login',
        value: function login(event) {
            event.preventDefault();
            this.refs.loginBtn.open();
        }
    }, {
        key: 'logout',
        value: function logout(event) {
            event.preventDefault();
            this.props.auth.logout();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default navbar-static-top' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
                        _react2.default.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Toggle navigation'
                        ),
                        _react2.default.createElement('span', { className: 'icon-bar' }),
                        _react2.default.createElement('span', { className: 'icon-bar' }),
                        _react2.default.createElement('span', { className: 'icon-bar' })
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/', className: 'navbar-brand' },
                        _react2.default.createElement(
                            'span',
                            { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri' }),
                            _react2.default.createElement('div', { className: 'tri invert' })
                        ),
                        'Suggestions'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'navbar', className: 'navbar-collapse collapse' },
                    this.state.authenticated ? _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-success navbar-btn', onClick: this.newSuggestion.bind(this) },
                        'New'
                    ) : _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-success navbar-btn disabled', 'data-toggle': 'tooltip', 'data-placement': 'bottom', title: 'Login or Sign up to post a new suggestion' },
                        'New'
                    ),
                    this.state.authenticated ? _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-default navbar-btn navbar-right login', onClick: this.logout.bind(this) },
                        'Logout'
                    ) : _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-default navbar-btn navbar-right login', onClick: this.login.bind(this) },
                        'Login'
                    ),
                    _react2.default.createElement(
                        'form',
                        { ref: 'searchForm', className: 'navbar-form navbar-right animated', onSubmit: this.handleSubmit.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search suggestions...', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
                            _react2.default.createElement(
                                'span',
                                { className: 'input-group-btn' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_NewSuggestion2.default, { ref: 'newSuggestionBtn', auth: this.props.auth }),
                _react2.default.createElement(_Login2.default, { ref: 'loginBtn', auth: this.props.auth })
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":1,"../stores/NavbarStore":297,"./Login":7,"./NewSuggestion":9,"react":"react","react-bootstrap":129,"react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _NewSuggestionStore = require('../stores/NewSuggestionStore');

var _NewSuggestionStore2 = _interopRequireDefault(_NewSuggestionStore);

var _NewSuggestionActions = require('../actions/NewSuggestionActions');

var _NewSuggestionActions2 = _interopRequireDefault(_NewSuggestionActions);

var _SuggestionListActions = require('../actions/SuggestionListActions');

var _SuggestionListActions2 = _interopRequireDefault(_SuggestionListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewSuggestion = function (_React$Component) {
    _inherits(NewSuggestion, _React$Component);

    function NewSuggestion(props) {
        _classCallCheck(this, NewSuggestion);

        var _this = _possibleConstructorReturn(this, (NewSuggestion.__proto__ || Object.getPrototypeOf(NewSuggestion)).call(this, props));

        _this.state = _NewSuggestionStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(NewSuggestion, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _NewSuggestionStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _NewSuggestionStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'close',
        value: function close() {
            _NewSuggestionActions2.default.closeModal();
        }
    }, {
        key: 'open',
        value: function open() {
            _NewSuggestionActions2.default.openModal();
        }
    }, {
        key: 'save',
        value: function save(event) {
            event.preventDefault();

            var title = this.state.title.trim();
            var content = this.state.content.trim();
            var token = this.props.auth.getToken();

            if (!title) {
                _NewSuggestionActions2.default.invalidTitle();
                this.refs.titleTextField.focus();
            }

            if (!content) {
                _NewSuggestionActions2.default.invalidContent();
                this.refs.contentTextarea.focus();
            }

            if (title && content) {
                _NewSuggestionActions2.default.addSuggestion(title, content, token);
                _SuggestionListActions2.default.getLastSuggestions();
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Modal,
                { show: this.state.showModal, onHide: this.close.bind(this) },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Title,
                        null,
                        'New Suggestion'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2.default.createElement(
                        'form',
                        { className: 'form-horizontal' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group ' + this.state.titleValidationState },
                            _react2.default.createElement(
                                'label',
                                { form: 'title', className: 'col-sm-2 control-label' },
                                'Title'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-8' },
                                _react2.default.createElement('input', { type: 'text', id: 'title', placeholder: 'Suggestion Title', ref: 'titleTextField',
                                    value: this.state.title, className: 'form-control', onChange: _NewSuggestionActions2.default.updateTitle, autoFocus: true }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlockTitle
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group ' + this.state.contentValidationState },
                            _react2.default.createElement(
                                'label',
                                { form: 'suggestion', className: 'col-sm-2 control-label' },
                                'Suggestion'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-8' },
                                _react2.default.createElement('textarea', { id: 'suggestion', rows: '5', placeholder: 'Type your suggestion here...', ref: 'contentTextarea',
                                    value: this.state.content, className: 'form-control', onChange: _NewSuggestionActions2.default.updateContent }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlockContent
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.close.bind(this) },
                        'Cancel'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.save.bind(this), bsStyle: 'primary' },
                        'Save changes'
                    )
                )
            );
        }
    }]);

    return NewSuggestion;
}(_react2.default.Component);

exports.default = NewSuggestion;

},{"../actions/NewSuggestionActions":2,"../actions/SuggestionListActions":4,"../stores/NewSuggestionStore":298,"react":"react","react-bootstrap":129}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeago = require('../utils/timeago');

var _timeago2 = _interopRequireDefault(_timeago);

var _SuggestionStore = require('../stores/SuggestionStore');

var _SuggestionStore2 = _interopRequireDefault(_SuggestionStore);

var _SuggestionActions = require('../actions/SuggestionActions');

var _SuggestionActions2 = _interopRequireDefault(_SuggestionActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestion = function (_React$Component) {
    _inherits(Suggestion, _React$Component);

    function Suggestion(props) {
        _classCallCheck(this, Suggestion);

        var _this = _possibleConstructorReturn(this, (Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).call(this, props));

        _this.state = _SuggestionStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        _this.authToken = _this.props.auth.getToken();
        return _this;
    }

    _createClass(Suggestion, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _SuggestionStore2.default.listen(this.onChange);
            _SuggestionActions2.default.getSuggestion(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _SuggestionStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'like',
        value: function like() {
            _SuggestionActions2.default.likeSuggestion(this.props.params.id, this.authToken);
        }
    }, {
        key: 'dislike',
        value: function dislike() {
            _SuggestionActions2.default.dislikeSuggestion(this.props.params.id, this.authToken);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'suggestion-component-container' },
                _react2.default.createElement(
                    'h2',
                    null,
                    this.state.suggestion.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'votes-container' },
                    this.props.auth.loggedIn() ? _react2.default.createElement(
                        'button',
                        { type: 'button', onClick: this.like.bind(this), className: 'btn btn-link', 'aria-label': 'Like' },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up', 'aria-hidden': 'true' })
                    ) : _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-link', 'aria-label': 'Like', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Login or Sign up to vote for a suggestion' },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'likes' },
                        this.state.suggestion.likes
                    ),
                    this.props.auth.loggedIn() ? _react2.default.createElement(
                        'button',
                        { type: 'button', onClick: this.dislike.bind(this), className: 'btn btn-link', 'aria-label': 'Dislike' },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-down', 'aria-hidden': 'true' })
                    ) : _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-link', 'aria-label': 'Dislike', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Login or Sign up to vote for a suggestion' },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-down', 'aria-hidden': 'true' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    this.state.suggestion.content
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'author' },
                    'by ',
                    this.state.suggestion.author,
                    ', ',
                    (0, _timeago2.default)(this.state.suggestion.created),
                    ' ago'
                )
            );
        }
    }]);

    return Suggestion;
}(_react2.default.Component);

exports.default = Suggestion;

},{"../actions/SuggestionActions":3,"../stores/SuggestionStore":300,"../utils/timeago":304,"react":"react"}],11:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    callbackUrl: process.env.HOME_URL || 'http://localhost',
    auth0Domain: 'suggestions.auth0.com',
    auth0Secret: process.env.AUTH0_SECRET || 'xIOzOMRQX8tBgDKds9iEZLMWb72H2qovgDzUldgDanmaHes3vzancY9-zz58O4Bw',
    auth0ClientId: process.env.AUTH0_CLIENTID || 'ClohFBYJyM7q0Nc6y9tY5blht98wjaBw'
};

exports.default = config;

}).call(this,require('_process'))

},{"_process":39}],12:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default }), document.querySelector('#app'));

},{"./routes":296,"react":"react","react-dom":"react-dom","react-router":"react-router"}],13:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var Base64Url         = require('./lib/base64_url');
var assert_required   = require('./lib/assert_required');
var is_array          = require('./lib/is-array');
var index_of          = require('./lib/index-of');

var qs                = require('qs');
var xtend             = require('xtend');
var trim              = require('trim');
var reqwest           = require('reqwest');
var WinChan           = require('winchan');

var jsonp             = require('jsonp');
var jsonpOpts         = { param: 'cbx', timeout: 8000, prefix: '__auth0jp' };

var same_origin       = require('./lib/same-origin');
var json_parse        = require('./lib/json-parse');
var LoginError        = require('./lib/LoginError');
var use_jsonp         = require('./lib/use_jsonp');

/**
 * Check if running in IE.
 *
 * @returns {Number} -1 if not IE, IE version otherwise.
 */
function isInternetExplorer() {
  var rv = -1; // Return value assumes failure.
  var ua = navigator.userAgent;
  var re;
  if (navigator.appName === 'Microsoft Internet Explorer') {
    re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
    if (re.exec(ua) != null) {
      rv = parseFloat(RegExp.$1);
    }
  }
  // IE > 11
  else if (ua.indexOf('Trident') > -1) {
    re = new RegExp('rv:([0-9]{2,2}[\.0-9]{0,})');
    if (re.exec(ua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
  }

  return rv;
}

/**
 * Stringify popup options object into
 * `window.open` string options format
 *
 * @param {Object} popupOptions
 * @private
 */

function stringifyPopupSettings(popupOptions) {
  var settings = '';

  for (var key in popupOptions) {
    settings += key + '=' + popupOptions[key] + ',';
  }

  return settings.slice(0, -1);
}


/**
 * Check that a key has been set to something different than null
 * or undefined.
 *
 * @param {Object} obj
 * @param {String} key
 */
function checkIfSet(obj, key) {
  /*
   * false      != null -> true
   * true       != null -> true
   * undefined  != null -> false
   * null       != null -> false
   */
  return !!(obj && obj[key] != null);
}

function handleRequestError(err, callback) {
  var status = err.status;
  var responseText = 'string' === typeof err.responseText ? err.responseText : err;

  var isAffectedIEVersion = isInternetExplorer() === 10 || isInternetExplorer() === 11;
  var zeroStatus = (!status || status === 0);

  var onLine = !!window.navigator.onLine;

  // Request failed because we are offline.
  if (zeroStatus && !onLine ) {
    status = 0;
    responseText = {
      code: 'offline'
    };
  // http://stackoverflow.com/questions/23229723/ie-10-11-cors-status-0
  // XXX IE10 when a request fails in CORS returns status code 0
  // See: http://caniuse.com/#search=navigator.onLine
  } else if (zeroStatus && isAffectedIEVersion) {
    status = 401;
    responseText = {
      code: 'invalid_user_password'
    };
  // If not IE10/11 and not offline it means that Auth0 host is unreachable:
  // Connection Timeout or Connection Refused.
  } else if (zeroStatus) {
    status = 0;
    responseText = {
      code: 'connection_refused_timeout'
    };
  }

  var error = new LoginError(status, responseText);
  callback(error);
}

/**
 * join url from protocol
 */

function joinUrl(protocol, domain, endpoint) {
  return protocol + '//' + domain + endpoint;
}

/**
 * Create an `Auth0` instance with `options`
 *
 * @class Auth0
 * @constructor
 */
function Auth0 (options) {
  // XXX Deprecated: We prefer new Auth0(...)
  if (!(this instanceof Auth0)) {
    return new Auth0(options);
  }

  assert_required(options, 'clientID');
  assert_required(options, 'domain');

  this._useJSONP = null != options.forceJSONP ?
                    !!options.forceJSONP :
                    use_jsonp() && !same_origin('https:', options.domain);

  this._clientID = options.clientID;
  this._callbackURL = options.callbackURL || document.location.href;
  this._shouldRedirect = !!options.callbackURL;
  this._domain = options.domain;
  this._responseType = this._parseResponseType(options, true) || "code";
  this._responseMode = this._parseResponseMode(options, true);
  this._cordovaSocialPlugins = {
    facebook: this._phonegapFacebookLogin
  };
  this._useCordovaSocialPlugins = false || options.useCordovaSocialPlugins;
  this._sendClientInfo = null != options.sendSDKClientInfo ? options.sendSDKClientInfo : true;
}

/**
 * Export version with `Auth0` constructor
 *
 * @property {String} version
 */

Auth0.version = require('./version').str;

/**
 * Export client info object
 *
 *
 * @property {Hash}
 */

Auth0.clientInfo = { name: 'auth0.js', version: Auth0.version };


/**
 * Wraps calls to window.open so it can be overriden in Electron.
 *
 * In Electron, window.open returns an object which provides limited control
 * over the opened window (see
 * http://electron.atom.io/docs/v0.36.0/api/window-open/).
 */
Auth0.prototype.openWindow = function(url, name, options) {
  return window.open(url, name, stringifyPopupSettings(options));
}

/**
 * Redirect current location to `url`
 *
 * @param {String} url
 * @private
 */

Auth0.prototype._redirect = function (url) {
  global.window.location = url;
};

Auth0.prototype._getResponseType = function(opts) {
  return this._parseResponseType(opts) || this._responseType;
};

Auth0.prototype._getCallbackOnLocationHash = function(options) {
  return this._getResponseMode(options) !== "form_post"
    && this._getResponseType(options) !== "code";
};

Auth0.prototype._getResponseMode = function(opts) {
  var result = this._parseResponseMode(opts) || this._responseMode;
  return result === "form_post"
    ? "form_post"
    : null;
};

Auth0.prototype._getCallbackURL = function(options) {
  return (options && typeof options.callbackURL !== 'undefined') ?
    options.callbackURL : this._callbackURL;
};

Auth0.prototype._getClientInfoString = function () {
  var clientInfo = JSON.stringify(Auth0.clientInfo);
  return Base64Url.encode(clientInfo);
};

Auth0.prototype._getClientInfoHeader = function () {
  return this._sendClientInfo
    ? { 'Auth0-Client': this._getClientInfoString() }
    : {};
};

/**
 * Renders and submits a WSFed form
 *
 * @param {Object} options
 * @param {Function} formHtml
 * @private
 */

Auth0.prototype._renderAndSubmitWSFedForm = function (options, formHtml) {
  var div = document.createElement('div');
  div.innerHTML = formHtml;
  var form = document.body.appendChild(div).children[0];

  if (options.popup && !this._getCallbackOnLocationHash(options)) {
    form.target = 'auth0_signup_popup';
  }

  form.submit();
};

/**
 * Resolve response type as `token` or `code`
 *
 * @return {Object} `scope` and `response_type` properties
 * @private
 */

Auth0.prototype._getMode = function (options) {
  var result = {
    scope: 'openid',
    response_type: this._getResponseType(options)
  };

  var responseMode = this._getResponseMode(options);
  if (responseMode) {
    result.response_mode = responseMode;
  }

  return result;
};

Auth0.prototype._configureOfflineMode = function(options) {
  if (options.scope && options.scope.indexOf('offline_access') >= 0) {
    options.device = options.device || 'Browser';
  }
};

/**
 * Get user information from API
 *
 * @param {Object} profile
 * @param {String} id_token
 * @param {Function} callback
 * @private
 */

Auth0.prototype._getUserInfo = function (profile, id_token, callback) {

  if (!(profile && !profile.user_id)) {
    return callback(null, profile);
  }

  // the scope was just openid
  var _this = this;
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/tokeninfo';
  var url = joinUrl(protocol, domain, endpoint);

  var fail = function (status, description) {
    var error = new Error(status + ': ' + (description || ''));

    // These two properties are added for compatibility with old versions (no Error instance was returned)
    error.error = status;
    error.error_description = description;

    callback(error);
  };

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify({id_token: id_token}), jsonpOpts, function (err, resp) {
      if (err) {
        return fail(0, err.toString());
      }

      return resp.status === 200 ?
        callback(null, resp.user) :
        fail(resp.status, resp.err || resp.error);
    });
  }

  return reqwest({
    url:          same_origin(protocol, domain) ? endpoint : url,
    method:       'post',
    type:         'json',
    crossOrigin:  !same_origin(protocol, domain),
    data:         {id_token: id_token}
  }).fail(function (err) {
    fail(err.status, err.responseText);
  }).then(function (userinfo) {
    callback(null, userinfo);
  });

};

/**
 * Get profile data by `id_token`
 *
 * @param {String} id_token
 * @param {Function} callback
 * @method getProfile
 */

Auth0.prototype.getProfile = function (id_token, callback) {
  if ('function' !== typeof callback) {
    throw new Error('A callback function is required');
  }
  if (!id_token || typeof id_token !== 'string') {
    return callback(new Error('Invalid token'));
  }

  this._getUserInfo(this.decodeJwt(id_token), id_token, callback);
};

/**
 * Validate a user
 *
 * @param {Object} options
 * @param {Function} callback
 * @method validateUser
 */

Auth0.prototype.validateUser = function (options, callback) {
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/public/api/users/validate_userpassword';
  var url = joinUrl(protocol, domain, endpoint);

  var query = xtend(
    options,
    {
      client_id:    this._clientID,
      username:     trim(options.username || options.email || '')
    });

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp && resp.status !== 404) {
        return callback(new Error(resp.error));
      }
      callback(null, resp.status === 200);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'text',
    data:    query,
    crossOrigin: !same_origin(protocol, domain),
    error: function (err) {
      if (err.status !== 404) { return callback(new Error(err.responseText)); }
      callback(null, false);
    },
    success: function (resp) {
      callback(null, resp.status === 200);
    }
  });
};

/**
 * Decode Json Web Token
 *
 * @param {String} jwt
 * @method decodeJwt
 */

Auth0.prototype.decodeJwt = function (jwt) {
  var encoded = jwt && jwt.split('.')[1];
  return json_parse(Base64Url.decode(encoded));
};

/**
 * Given the hash (or a query) of an URL returns a dictionary with only relevant
 * authentication information. If succeeds it will return the following fields:
 * `profile`, `id_token`, `access_token` and `state`. In case of error, it will
 * return `error` and `error_description`.
 *
 * @method parseHash
 * @param {String} [hash=window.location.hash] URL to be parsed
 * @example
 *      var auth0 = new Auth0({...});
 *
 *      // Returns {profile: {** decoded id token **}, state: "good"}
 *      auth0.parseHash('#id_token=.....&state=good&foo=bar');
 *
 *      // Returns {error: "invalid_credentials", error_description: undefined}
 *      auth0.parseHash('#error=invalid_credentials');
 *
 *      // Returns {error: "invalid_credentials", error_description: undefined}
 *      auth0.parseHash('?error=invalid_credentials');
 *
 */

Auth0.prototype.parseHash = function (hash) {
  hash = hash || window.location.hash;
  hash = hash.substr(1).replace(/^\//, '');
  var parsed_qs = qs.parse(hash);

  if (parsed_qs.hasOwnProperty('error')) {
    var err = {
      error: parsed_qs.error,
      error_description: parsed_qs.error_description
    };

    if (parsed_qs.state) {
      err.state = parsed_qs.state;
    }

    return err;
  }

  if (!parsed_qs.hasOwnProperty('access_token')
       && !parsed_qs.hasOwnProperty('id_token')
       && !parsed_qs.hasOwnProperty('refresh_token')) {
    return null;
  }

  var prof;

  if (parsed_qs.id_token) {
    var invalidJwt = function (error) {
      var err = {
        error: 'invalid_token',
        error_description: error
      };
      return err;
    };

    prof = this.decodeJwt(parsed_qs.id_token);

    // aud should be the clientID
    var audiences = is_array(prof.aud) ? prof.aud : [ prof.aud ];
    if (index_of(audiences, this._clientID) === -1) {
      return invalidJwt(
        'The clientID configured (' + this._clientID + ') does not match with the clientID set in the token (' + audiences.join(', ') + ').');
    }

    // iss should be the Auth0 domain (i.e.: https://contoso.auth0.com/)
    if (prof.iss && prof.iss !== 'https://' + this._domain + '/') {
      return invalidJwt(
        'The domain configured (https://' + this._domain + '/) does not match with the domain set in the token (' + prof.iss + ').');
    }
  }

  return {
    accessToken: parsed_qs.access_token,
    idToken: parsed_qs.id_token,
    idTokenPayload: prof,
    refreshToken: parsed_qs.refresh_token,
    state: parsed_qs.state
  };
};

/**
 * Signup
 *
 * @param {Object} options Signup Options
 * @param {String} email New user email
 * @param {String} password New user password
 *
 * @param {Function} callback
 * @method signup
 */

Auth0.prototype.signup = function (options, callback) {
  var _this = this;

  var opts = {
    client_id: this._clientID,
    redirect_uri: this._getCallbackURL(options),
    email: trim(options.email || options.username || ''),
    tenant: this._domain.split('.')[0]
  };

  if (typeof options.username === 'string') {
     opts.username = trim(options.username);
   }

  var query = xtend(this._getMode(options), options, opts);

  this._configureOfflineMode(query);

  // TODO Change this to a property named 'disableSSO' for consistency.
  // By default, options.sso is true
  if (!checkIfSet(options, 'sso')) {
    options.sso = true;
  }

  if (!checkIfSet(options, 'auto_login')) {
    options.auto_login = true;
  }

  var popup;

  var will_popup = options.auto_login && options.popup
    && (!this._getCallbackOnLocationHash(options) || options.sso);

  if (will_popup) {
    popup = this._buildPopupWindow(options);
  }

  function success () {
    if (options.auto_login) {
      return _this.login(options, callback);
    }

    if ('function' === typeof callback) {
      return callback();
    }
  }

  function fail (status, resp) {
    var error = new LoginError(status, resp);

    // when failed we want the popup closed if opened
    if (popup && 'function' === typeof popup.kill) {
      popup.kill();
    }

    if ('function' === typeof callback) {
      return callback(error);
    }

    throw error;
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/dbconnections/signup';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return fail(0, err);
      }

      return resp.status == 200 ? success() :
              fail(resp.status, resp.err || resp.error);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'html',
    data:    query,
    success: success,
    crossOrigin: !same_origin(protocol, domain),
    error: function (err) {
      fail(err.status, err.responseText);
    }
  });
};

/**
 * Change password
 *
 * @param {Object} options
 * @param {Function} callback
 * @method changePassword
 */

Auth0.prototype.changePassword = function (options, callback) {
  var query = {
    tenant:         this._domain.split('.')[0],
    client_id:      this._clientID,
    connection:     options.connection,
    email:          trim(options.email || '')
  };

  if (typeof options.password === "string") {
    query.password = options.password;
  }

  function fail (status, resp) {
    var error = new LoginError(status, resp);
    if (callback) {
      return callback(error);
    }
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/dbconnections/change_password';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return fail(0, err);
      }
      return resp.status == 200 ?
              callback(null, resp.message) :
              fail(resp.status, resp.err || resp.error);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'html',
    data:    query,
    crossOrigin: !same_origin(protocol, domain),
    error: function (err) {
      fail(err.status, err.responseText);
    },
    success: function (r) {
      callback(null, r);
    }
  });
};

/**
 * Builds query string to be passed to /authorize based on dict key and values.
 *
 * @param {Array} args
 * @param {Array} blacklist
 * @private
 */

Auth0.prototype._buildAuthorizeQueryString = function (args, blacklist) {
  var query = this._buildAuthorizationParameters(args, blacklist);
  return qs.stringify(query);
};

/**
 * Builds parameter dictionary to be passed to /authorize based on dict key and values.
 *
 * @param {Array} args
 * @param {Array} blacklist
 * @private
 */

Auth0.prototype._buildAuthorizationParameters = function(args, blacklist) {
  var query = xtend.apply(null, args);

  // Adds offline mode to the query
  this._configureOfflineMode(query);

  // Adds client SDK information (when enabled)
  if ( this._sendClientInfo ) query['auth0Client'] = this._getClientInfoString();

  // Elements to filter from query string
  blacklist = blacklist || ['popup', 'popupOptions'];

  var i, key;

  for (i = 0; i < blacklist.length; i++) {
    key = blacklist[i];
    delete query[key];
  }

  if (query.connection_scope && is_array(query.connection_scope)){
    query.connection_scope = query.connection_scope.join(',');
  }

  return query;
};

/**
 * Login user
 *
 * @param {Object} options
 * @param {Function} callback
 * @method login
 */

Auth0.prototype.login = Auth0.prototype.signin = function (options, callback) {
  // TODO Change this to a property named 'disableSSO' for consistency.
  // By default, options.sso is true
  if (!checkIfSet(options, 'sso')) {
    options.sso = true;
  }

  if (typeof options.passcode !== 'undefined') {
    return this.loginWithPasscode(options, callback);
  }

  if (typeof options.username !== 'undefined' ||
      typeof options.email !== 'undefined') {
    return this.loginWithUsernamePassword(options, callback);
  }

  if (!!window.cordova || !!window.electron) {
    return this.loginPhonegap(options, callback);
  }

  if (!!options.popup && this._getCallbackOnLocationHash(options)) {
    return this.loginWithPopup(options, callback);
  }

  this._authorize(options);
};

Auth0.prototype._authorize = function(options) {
  var qs = [
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: this._getCallbackURL(options)
    }
  ];

  var query = this._buildAuthorizeQueryString(qs);

  var url = joinUrl('https:', this._domain, '/authorize?' + query);

  if (options.popup) {
    this._buildPopupWindow(options, url);
  } else {
    this._redirect(url);
  }
};

/**
 * Compute `options.width` and `options.height` for the popup to
 * open and return and extended object with optimal `top` and `left`
 * position arguments for the popup windows
 *
 * @param {Object} options
 * @private
 */

Auth0.prototype._computePopupPosition = function (options) {
  options = options || {};
  var width = options.width || 500;
  var height = options.height || 600;

  var screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft;
  var screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop;
  var outerWidth = typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.body.clientWidth;
  var outerHeight = typeof window.outerHeight !== 'undefined' ? window.outerHeight : (document.body.clientHeight - 22);
  // XXX: what is the 22?

  // Use `outerWidth - width` and `outerHeight - height` for help in
  // positioning the popup centered relative to the current window
  var left = screenX + (outerWidth - width) / 2;
  var top = screenY + (outerHeight - height) / 2;

  return { width: width, height: height, left: left, top: top };
};

/**
 * loginPhonegap method is triggered when !!window.cordova is true.
 *
 * @method loginPhonegap
 * @private
 * @param {Object}    options   Login options.
 * @param {Function}  callback  To be called after login happened. Callback arguments
 *                              should be:
 *                              function (err, profile, idToken, accessToken, state)
 *
 * @example
 *      var auth0 = new Auth0({ clientId: '...', domain: '...'});
 *
 *      auth0.signin({}, function (err, profile, idToken, accessToken, state) {
 *        if (err) {
 *         alert(err);
 *         return;
 *        }
 *
 *        alert('Welcome ' + profile.name);
 *      });
 */

Auth0.prototype.loginPhonegap = function (options, callback) {
  if (this._shouldAuthenticateWithCordovaPlugin(options.connection)) {
    this._socialPhonegapLogin(options, callback);
    return;
  }

  var mobileCallbackURL = joinUrl('https:', this._domain, '/mobile');
  var _this = this;
  var qs = [
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: mobileCallbackURL
    }
  ];

  if ( this._sendClientInfo ) {
    qs.push({ auth0Client: this._getClientInfoString() });
  }

  var query = this._buildAuthorizeQueryString(qs);

  var popupUrl = joinUrl('https:', this._domain, '/authorize?' + query);

  var popupOptions = xtend({location: 'yes'} ,
    options.popupOptions);

  // This wasn't send before so we don't send it now either
  delete popupOptions.width;
  delete popupOptions.height;

  var ref = this.openWindow(popupUrl, '_blank', popupOptions);
  var answered = false;

  function errorHandler(event) {
    if (answered) { return; }
    answered = true;
    ref.close();
    callback(new Error(event.message), null);
  }

  function startHandler(event) {
    if (answered) { return; }

    if ( event.url && !(event.url.indexOf(mobileCallbackURL + '#') === 0 ||
                       event.url.indexOf(mobileCallbackURL + '?') === 0)) { return; }

    var result = _this.parseHash(event.url.slice(mobileCallbackURL.length));

    if (!result) {
      answered = true;
      ref.close();
      callback(new Error('Error parsing hash'), null);
      return;
    }

    if (result.idToken) {
      answered = true;
      ref.close();
      callback(null, result);
      return;
    }


    // Case where we've found an error
    answered = true;
    ref.close();
    callback(new Error(result.err || result.error || 'Something went wrong'), null);
  }

  function exitHandler() {
    if (answered) { return; }

    ref.removeEventListener('loaderror', errorHandler);
    ref.removeEventListener('loadstart', startHandler);
    ref.removeEventListener('exit', exitHandler);

    callback(new Error('Browser window closed'), null);
  }

  ref.addEventListener('loaderror', errorHandler);
  ref.addEventListener('loadstart', startHandler);
  ref.addEventListener('exit', exitHandler);

};

/**
 * loginWithPopup method is triggered when login method receives a {popup: true} in
 * the login options.
 *
 * @method loginWithPopup
 * @param {Object}   options    Login options.
 * @param {function} callback   To be called after login happened (whether
 *                              success or failure). This parameter is mandatory when
 *                              option callbackOnLocationHash is truthy but should not
 *                              be used when falsy.
 * @example
 *       var auth0 = new Auth0({ clientId: '...', domain: '...', callbackOnLocationHash: true });
 *
 *       // Error! No callback
 *       auth0.login({popup: true});
 *
 *       // Ok!
 *       auth0.login({popup: true}, function () { });
 *
 * @example
 *       var auth0 = new Auth0({ clientId: '...', domain: '...'});
 *
 *       // Ok!
 *       auth0.login({popup: true});
 *
 *       // Error! No callback will be executed on response_type=code
 *       auth0.login({popup: true}, function () { });
 * @private
 */

Auth0.prototype.loginWithPopup = function(options, callback) {
  var _this = this;

  if (!callback) {
    throw new Error('popup mode should receive a mandatory callback');
  }

  var qs = [this._getMode(options), options, { client_id: this._clientID, owp: true }];

  if (this._sendClientInfo) {
    qs.push({ auth0Client: this._getClientInfoString() });
  }

  var query = this._buildAuthorizeQueryString(qs);
  var popupUrl = joinUrl('https:', this._domain, '/authorize?' + query);

  var popupPosition = this._computePopupPosition(options.popupOptions);
  var popupOptions = xtend(popupPosition, options.popupOptions);

  var popup = WinChan.open({
    url: popupUrl,
    relay_url: 'https://' + this._domain + '/relay.html',
    window_features: stringifyPopupSettings(popupOptions)
  }, function (err, result) {
    // Eliminate `_current_popup` reference manually because
    // Winchan removes `.kill()` method from window and also
    // doesn't call `.kill()` by itself
    _this._current_popup = null;

    // Winchan always returns string errors, we wrap them inside Error objects
    if (err) {
      return callback(new LoginError(err), null, null, null, null, null);
    }

    // Handle edge case with generic error
    if (!result) {
      return callback(new LoginError('Something went wrong'), null, null, null, null, null);
    }

    // Handle profile retrieval from id_token and respond
    if (result.id_token) {
      return callback(null, _this._prepareResult(result));
    }

    // Case where the error is returned at an `err` property from the result
    if (result.err) {
      return callback(new LoginError(result.err.status, result.err.details || result.err), null, null, null, null, null);
    }

    // Case for sso_dbconnection_popup returning error at result.error instead of result.err
    if (result.error) {
      return callback(new LoginError(result.status, result.details || result), null, null, null, null, null);
    }

    // Case we couldn't match any error, we return a generic one
    return callback(new LoginError('Something went wrong'), null, null, null, null, null);
  });

  popup.focus();
};

/**
 * _shouldAuthenticateWithCordovaPlugin method checks whether Auth0 is properly configured to
 * handle authentication of a social connnection using a phonegap plugin.
 *
 * @param {String}   connection    Name of the connection.
 * @private
 */

Auth0.prototype._shouldAuthenticateWithCordovaPlugin = function(connection) {
  var socialPlugin = this._cordovaSocialPlugins[connection];
  return this._useCordovaSocialPlugins && !!socialPlugin;
};

/**
 * _socialPhonegapLogin performs social authentication using a phonegap plugin
 *
 * @param {String}   connection   Name of the connection.
 * @param {function} callback     To be called after login happened (whether
 *                                success or failure).
 * @private
 */

Auth0.prototype._socialPhonegapLogin = function(options, callback) {
  var socialAuthentication = this._cordovaSocialPlugins[options.connection];
  var _this = this;
  socialAuthentication(options.connection_scope, function(error, accessToken, extras) {
    if (error) {
      callback(error, null, null, null, null);
      return;
    }
    var loginOptions = xtend({ access_token: accessToken }, options, extras);
    _this.loginWithSocialAccessToken(loginOptions, callback);
  });
};

/**
 * _phonegapFacebookLogin performs social authentication with Facebook using phonegap-facebook-plugin
 *
 * @param {Object}   scopes     FB scopes used to login. It can be an Array of String or a single String.
 *                              By default is ["public_profile"]
 * @param {function} callback   To be called after login happened (whether success or failure). It will
 *                              yield the accessToken and any extra information neeeded by Auth0 API
 *                              or an Error if the authentication fails. Callback should be:
 *                              function (err, accessToken, extras) { }
 * @private
 */

Auth0.prototype._phonegapFacebookLogin = function(scopes, callback) {
  if (!window.facebookConnectPlugin || !window.facebookConnectPlugin.login) {
    callback(new Error('missing plugin phonegap-facebook-plugin'), null, null);
    return;
  }

  var fbScopes;
  if (scopes && is_array(scopes)){
    fbScopes = scopes;
  } else if (scopes) {
    fbScopes = [scopes];
  } else {
    fbScopes = ['public_profile'];
  }
  window.facebookConnectPlugin.login(fbScopes, function (state) {
    callback(null, state.authResponse.accessToken, {});
  }, function(error) {
    callback(new Error(error), null, null);
  });
};

/**
 * This method handles the scenario where a db connection is used with
 * popup: true and sso: true.
 *
 * @private
 */
Auth0.prototype.loginWithUsernamePasswordAndSSO = function (options, callback) {
  var _this = this;
  var popupPosition = this._computePopupPosition(options.popupOptions);
  var popupOptions = xtend(popupPosition, options.popupOptions);

  var popup = WinChan.open({
    url: 'https://' + this._domain + '/sso_dbconnection_popup/' + this._clientID,
    relay_url: 'https://' + this._domain + '/relay.html',
    window_features: stringifyPopupSettings(popupOptions),
    popup: this._current_popup,
    params: {
      domain:                 this._domain,
      clientID:               this._clientID,
      options: {
        // TODO What happens with i18n?
        username:   trim(options.username || options.email || ''),
        password:   options.password,
        connection: options.connection,
        state:      options.state,
        scope:      options.scope
      }
    }
  }, function (err, result) {
    // Eliminate `_current_popup` reference manually because
    // Winchan removes `.kill()` method from window and also
    // doesn't call `.kill()` by itself
    _this._current_popup = null;

    // Winchan always returns string errors, we wrap them inside Error objects
    if (err) {
      return callback(new LoginError(err), null, null, null, null, null);
    }

    // Handle edge case with generic error
    if (!result) {
      return callback(new LoginError('Something went wrong'), null, null, null, null, null);
    }

    // Handle profile retrieval from id_token and respond
    if (result.id_token) {
      return callback(null, _this._prepareResult(result));
    }

    // Case where the error is returned at an `err` property from the result
    if (result.err) {
      return callback(new LoginError(result.err.status, result.err.details || result.err), null, null, null, null, null);
    }

    // Case for sso_dbconnection_popup returning error at result.error instead of result.err
    if (result.error) {
      return callback(new LoginError(result.status, result.details || result), null, null, null, null, null);
    }

    // Case we couldn't match any error, we return a generic one
    return callback(new LoginError('Something went wrong'), null, null, null, null, null);
  });

  popup.focus();
};

/**
 * Login with Resource Owner (RO)
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithResourceOwner
 */

Auth0.prototype.loginWithResourceOwner = function (options, callback) {
  var _this = this;
  var query = xtend(
    this._getMode(options),
    options,
    {
      client_id:    this._clientID,
      username:     trim(options.username || options.email || ''),
      grant_type:   'password'
    });

  this._configureOfflineMode(query);

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/oauth/ro';
  var url = joinUrl(protocol, domain, endpoint);

  if ( this._sendClientInfo && this._useJSONP ) {
    query['auth0Client'] = this._getClientInfoString();
  }

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error);
        return callback(error);
      }
      callback(null, _this._prepareResult(resp));
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'json',
    data:    query,
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      callback(null, _this._prepareResult(resp));
    },
    error: function (err) {
      handleRequestError(err, callback);
    }
  });
};

/**
 * Login with Social Access Token
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithSocialAccessToken
 */

Auth0.prototype.loginWithSocialAccessToken = function (options, callback) {
  var _this = this;
  var query = this._buildAuthorizationParameters([
      { scope: 'openid' },
      options,
      { client_id: this._clientID }
    ]);

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/oauth/access_token';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error);
        return callback(error);
      }
      callback(null, _this._prepareResult(resp));
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'json',
    data:    query,
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      callback(null, _this._prepareResult(resp));
    },
    error: function (err) {
      handleRequestError(err, callback);
    }
  });
};

/**
 * Open a popup, store the winref in the instance and return it.
 *
 * We usually need to call this method before any ajax transaction in order
 * to prevent the browser to block the popup.
 *
 * @param  {[type]}   options  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 * @private
 */

Auth0.prototype._buildPopupWindow = function (options, url) {
  if (this._current_popup && !this._current_popup.closed) {
    return this._current_popup;
  }

  url = url || 'about:blank'

  var _this = this;
  var defaults = { width: 500, height: 600 };
  var opts = xtend(defaults, options.popupOptions || {});
  var popupOptions = stringifyPopupSettings(opts);

  this._current_popup = window.open(url, 'auth0_signup_popup', popupOptions);

  if (!this._current_popup) {
    throw new Error('Popup window cannot not been created. Disable popup blocker or make sure to call Auth0 login or singup on an UI event.');
  }

  this._current_popup.kill = function () {
    this.close();
    _this._current_popup = null;
  };

  return this._current_popup;
};

/**
 * Login with Username and Password
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithUsernamePassword
 */

Auth0.prototype.loginWithUsernamePassword = function (options, callback) {
  // XXX: Warning: This check is whether callback arguments are
  // fn(err) case callback.length === 1 (a redirect should be performed) vs.
  // fn(err, profile, id_token, access_token, state) callback.length > 1 (no
  // redirect should be performed)
  //
  // Note: Phonegap/Cordova:
  // As the popup is launched using the InAppBrowser plugin the SSO cookie will
  // be set on the InAppBrowser browser. That's why the browser where the app runs
  // won't get the sso cookie. Therefore, we don't allow username password using
  // popup with sso: true in Cordova/Phonegap and we default to resource owner auth.
  if (callback && callback.length > 1 && (!options.sso || window.cordova)) {
    return this.loginWithResourceOwner(options, callback);
  }

  var _this = this;
  var popup;

  // TODO We should deprecate this, really hacky and confuses people.
  if (options.popup  && !this._getCallbackOnLocationHash(options)) {
    popup = this._buildPopupWindow(options);
  }

  // When a callback with more than one argument is specified and sso: true then
  // we open a popup and do authentication there.
  if (callback && callback.length > 1 && options.sso ) {
    return this.loginWithUsernamePasswordAndSSO(options, callback);
  }

  var query = xtend(
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: this._getCallbackURL(options),
      username: trim(options.username || options.email || ''),
      tenant: this._domain.split('.')[0]
    });

  this._configureOfflineMode(query);

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/usernamepassword/login';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        if (popup && popup.kill) { popup.kill(); }
        return callback(err);
      }
      if('error' in resp) {
        if (popup && popup.kill) { popup.kill(); }
        var error = new LoginError(resp.status, resp.error);
        return callback(error);
      }
      _this._renderAndSubmitWSFedForm(options, resp.form);
    });
  }

  function return_error (error) {
    if (callback) {
      return callback(error);
    }
    throw error;
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'html',
    data:    query,
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      _this._renderAndSubmitWSFedForm(options, resp);
    },
    error: function (err) {
      if (popup && popup.kill) {
        popup.kill();
      }
      handleRequestError(err, return_error);
    }
  });
};

/**
 * Login with phone number and passcode
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithPhoneNumber
 */
Auth0.prototype.loginWithPasscode = function (options, callback) {

  if (options.email == null && options.phoneNumber == null) {
    throw new Error('email or phoneNumber is required for authentication');
  }

  if (options.passcode == null) {
    throw new Error('passcode is required for authentication');
  }

  options.connection = options.email == null ? 'sms' : 'email';

  if (!this._shouldRedirect) {
    options = xtend(options, {
      username: options.email == null ? options.phoneNumber : options.email,
      password: options.passcode,
      sso: false
    });

    delete options.email;
    delete options.phoneNumber;
    delete options.passcode;

    return this.loginWithResourceOwner(options, callback);
  }

  var verifyOptions = {connection: options.connection};

  if (options.phoneNumber) {
    options.phone_number = options.phoneNumber;
    delete options.phoneNumber;

    verifyOptions.phone_number = options.phone_number;
  }

  if (options.email) {
    verifyOptions.email = options.email;
  }

  options.verification_code = options.passcode;
  delete options.passcode;

  verifyOptions.verification_code = options.verification_code;

  var _this = this;
  this._verify(verifyOptions, function(error) {
    if (error) {
      return callback(error);
    }
    _this._verify_redirect(options);
  });
};

Auth0.prototype._verify = function(options, callback) {
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/passwordless/verify';
  var url = joinUrl(protocol, domain, endpoint);

  var data = options;

  if (this._useJSONP) {
    if (this._sendClientInfo) {
      data['auth0Client'] = this._getClientInfoString();
    }

    return jsonp(url + '?' + qs.stringify(data), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(new Error(0 + ': ' + err.toString()));
      }
      // /**/ typeof __auth0jp0 === 'function' && __auth0jp0({"status":400});
      return resp.status === 200 ? callback(null, true) : callback({status: resp.status});
    });
  }

  return reqwest({
    url:          same_origin(protocol, domain) ? endpoint : url,
    method:       'post',
    headers:      this._getClientInfoHeader(),
    crossOrigin:  !same_origin(protocol, domain),
    data:         data
  })
  .fail(function (err) {
    try {
      callback(JSON.parse(err.responseText));
    } catch (e) {
      var error = new Error(err.status + '(' + err.statusText + '): ' + err.responseText);
      error.statusCode = err.status;
      error.error = err.statusText;
      error.message = err.responseText;
      callback(error);
    }
  })
  .then(function (result) {
    callback(null, result);
  });
}

Auth0.prototype._verify_redirect = function(options) {
  var qs = [
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: this._getCallbackURL(options)
    }
  ];

  var query = this._buildAuthorizeQueryString(qs);
  var url = joinUrl('https:', this._domain, '/passwordless/verify_redirect?' + query);

  this._redirect(url);
};

// TODO Document me
Auth0.prototype.renewIdToken = function (id_token, callback) {
  this.getDelegationToken({
    id_token: id_token,
    scope: 'passthrough',
    api: 'auth0'
  }, callback);
};

// TODO Document me
Auth0.prototype.refreshToken = function (refresh_token, callback) {
  this.getDelegationToken({
    refresh_token: refresh_token,
    scope: 'passthrough',
    api: 'auth0'
  }, callback);
};

/**
 * Get delegation token for certain addon or certain other clientId
 *
 * @example
 *
 *     auth0.getDelegationToken({
 *      id_token:   '<user-id-token>',
 *      target:     '<app-client-id>'
 *      api_type: 'auth0'
 *     }, function (err, delegationResult) {
 *        if (err) return console.log(err.message);
 *        // Do stuff with delegation token
 *        expect(delegationResult.id_token).to.exist;
 *        expect(delegationResult.token_type).to.eql('Bearer');
 *        expect(delegationResult.expires_in).to.eql(36000);
 *     });
 *
 * @example
 *
 *      // get a delegation token from a Firebase API App
  *     auth0.getDelegationToken({
 *      id_token:   '<user-id-token>',
 *      target:     '<app-client-id>'
 *      api_type: 'firebase'
 *     }, function (err, delegationResult) {
 *      // Use your firebase token here
 *    });
 *
 * @method getDelegationToken
 * @param {Object} [options]
 * @param {String} [id_token]
 * @param {String} [target]
 * @param {String} [api_type]
 * @param {Function} [callback]
 */
Auth0.prototype.getDelegationToken = function (options, callback) {
  options = options || {};

  if (!options.id_token && !options.refresh_token ) {
    throw new Error('You must send either an id_token or a refresh_token to get a delegation token.');
  }

  var query = xtend({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    client_id:  this._clientID,
    target: options.targetClientId || this._clientID,
    api_type: options.api
  }, options);

  delete query.hasOwnProperty;
  delete query.targetClientId;
  delete query.api;

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/delegation';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error_description || resp.error);
        return callback(error);
      }
      callback(null, resp);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'json',
    data:    query,
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      callback(null, resp);
    },
    error: function (err) {
      try {
        callback(JSON.parse(err.responseText));
      }
      catch (e) {
        var er = err;
        var isAffectedIEVersion = isInternetExplorer() === 10 || isInternetExplorer() === 11;
        var zeroStatus = (!er.status || er.status === 0);

        // Request failed because we are offline.
        // See: http://caniuse.com/#search=navigator.onLine
        if (zeroStatus && !window.navigator.onLine) {
          er = {};
          er.status = 0;
          er.responseText = {
            code: 'offline'
          };
        // http://stackoverflow.com/questions/23229723/ie-10-11-cors-status-0
        // XXX IE10 when a request fails in CORS returns status code 0
        // XXX This is not handled by handleRequestError as the errors are different
        } else if (zeroStatus && isAffectedIEVersion) {
          er = {};
          er.status = 401;
          er.responseText = {
            code: 'invalid_operation'
          };
        // If not IE10/11 and not offline it means that Auth0 host is unreachable:
        // Connection Timeout or Connection Refused.
        } else if (zeroStatus) {
          er = {};
          er.status = 0;
          er.responseText = {
            code: 'connection_refused_timeout'
          };
        } else {
          er.responseText = err;
        }
        callback(new LoginError(er.status, er.responseText));
      }
    }
  });
};

/**
 * Trigger logout redirect with
 * params from `query` object
 *
 * @example
 *
 *     auth0.logout();
 *     // redirects to -> 'https://yourapp.auth0.com/logout'
 *
 * @example
 *
 *     auth0.logout({returnTo: 'http://logout'});
 *     // redirects to -> 'https://yourapp.auth0.com/logout?returnTo=http://logout'
 *
 * @method logout
 * @param {Object} query
 */

Auth0.prototype.logout = function (query) {
  var url = joinUrl('https:', this._domain, '/logout');
  if (query) {
    url += '?' + qs.stringify(query);
  }
  this._redirect(url);
};

/**
 * Get single sign on Data
 *
 * @example
 *
 *     auth0.getSSOData(function (err, ssoData) {
 *       if (err) return console.log(err.message);
 *       expect(ssoData.sso).to.exist;
 *     });
 *
 * @example
 *
 *     auth0.getSSOData(false, fn);
 *
 * @method getSSOData
 * @param {Boolean} withActiveDirectories
 * @param {Function} cb
 */

Auth0.prototype.getSSOData = function (withActiveDirectories, cb) {
  if (typeof withActiveDirectories === 'function') {
    cb = withActiveDirectories;
    withActiveDirectories = false;
  }

  var noResult = {sso: false};

  if (this._useJSONP) {
    var error = new Error("The SSO data can't be obtained using JSONP");
    setTimeout(function() { cb(error, noResult) }, 0);
    return;
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/user/ssodata';
  var url = joinUrl(protocol, domain, endpoint);
  var sameOrigin = same_origin(protocol, domain);
  var data = {};

  if (withActiveDirectories) {
    data = {ldaps: 1, client_id: this._clientID};
  }

  return reqwest({
    url:             sameOrigin ? endpoint : url,
    method:          'get',
    type:            'json',
    data:            data,
    crossOrigin:     !sameOrigin,
    withCredentials: !sameOrigin,
    timeout:         3000
  }).fail(function(err) {
    var error = new Error("There was an error in the request that obtains the user's SSO data.");
    error.cause = err;
    cb(error, noResult);
  }).then(function(resp) {
    cb(null, resp);
  });
};

/**
 * Get all configured connections for a client
 *
 * @example
 *
 *     auth0.getConnections(function (err, conns) {
 *       if (err) return console.log(err.message);
 *       expect(conns.length).to.be.above(0);
 *       expect(conns[0].name).to.eql('Apprenda.com');
 *       expect(conns[0].strategy).to.eql('adfs');
 *       expect(conns[0].status).to.eql(false);
 *       expect(conns[0].domain).to.eql('Apprenda.com');
 *       expect(conns[0].domain_aliases).to.eql(['Apprenda.com', 'foo.com', 'bar.com']);
 *     });
 *
 * @method getConnections
 * @param {Function} callback
 */
// XXX We may change the way this method works in the future to use client's s3 file.

Auth0.prototype.getConnections = function (callback) {
  return jsonp('https://' + this._domain + '/public/api/' + this._clientID + '/connections', jsonpOpts, callback);
};

/**
 * Send email or SMS to do passwordless authentication
 *
 * @example
 *     // To send an email
 *     auth0.startPasswordless({email: 'foo@bar.com'}, function (err, result) {
 *       if (err) return console.log(err.error_description);
 *       console.log(result);
 *     });
 *
 * @example
 *     // To send a SMS
 *     auth0.startPasswordless({phoneNumber: '+14251112222'}, function (err, result) {
 *       if (err) return console.log(err.error_description);
 *       console.log(result);
 *     });
 *
 * @method startPasswordless
 * @param {Object} options
 * @param {Function} callback
 */

Auth0.prototype.startPasswordless = function (options, callback) {
  if ('object' !== typeof options) {
    throw new Error('An options object is required');
  }
  if ('function' !== typeof callback) {
    throw new Error('A callback function is required');
  }
  if (!options.email && !options.phoneNumber) {
    throw new Error('An `email` or a `phoneNumber` is required.');
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/passwordless/start';
  var url = joinUrl(protocol, domain, endpoint);

  var data = {client_id: this._clientID};
  if (options.email) {
    data.email = options.email;
    data.connection = 'email';
    if (options.authParams) {
      data.authParams = options.authParams;
    }

    if (!options.send || options.send === "link") {
      if (!data.authParams) {
        data.authParams = {};
      }

      data.authParams.redirect_uri = this._callbackURL;
      data.authParams.response_type = this._shouldRedirect && !this._callbackOnLocationHash ?
        "code" : "token";
    }

    if (options.send) {
      data.send = options.send;
    }
  } else {
    data.phone_number = options.phoneNumber;
    data.connection = 'sms';
  }

  if (this._useJSONP) {
    if (this._sendClientInfo) {
      data['auth0Client'] = this._getClientInfoString();
    }

    return jsonp(url + '?' + qs.stringify(data), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(new Error(0 + ': ' + err.toString()));
      }
      return resp.status === 200 ? callback(null, true) : callback(resp.err || resp.error);
    });
  }

  return reqwest({
    url:          same_origin(protocol, domain) ? endpoint : url,
    method:       'post',
    type:         'json',
    headers:      this._getClientInfoHeader(),
    crossOrigin:  !same_origin(protocol, domain),
    data:         data
  })
  .fail(function (err) {
    try {
      callback(JSON.parse(err.responseText));
    } catch (e) {
      var error = new Error(err.status + '(' + err.statusText + '): ' + err.responseText);
      error.statusCode = err.status;
      error.error = err.statusText;
      error.message = err.responseText;
      callback(error);
    }
  })
  .then(function (result) {
    callback(null, result);
  });
};

Auth0.prototype.requestMagicLink = function(attrs, cb) {
  return this.startPasswordless(attrs, cb);
};

Auth0.prototype.requestEmailCode = function(attrs, cb) {
  attrs.send = "code";
  return this.startPasswordless(attrs, cb);
};

Auth0.prototype.verifyEmailCode = function(attrs, cb) {
  attrs.passcode = attrs.code;
  delete attrs.code;
  return this.login(attrs, cb);
};

Auth0.prototype.requestSMSCode = function(attrs, cb) {
  return this.startPasswordless(attrs, cb);
};

Auth0.prototype.verifySMSCode = function(attrs, cb) {
  attrs.passcode = attrs.code;
  delete attrs.code;
  return this.login(attrs, cb);
};

/**
 * Returns the ISO 3166-1 code for the country where the request is
 * originating.
 *
 * Fails if the request has to be made using JSONP.
 *
 * @private
 */
Auth0.prototype.getUserCountry = function(cb) {
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = "/user/geoloc/country";
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    var error = new Error("The user's country can't be obtained using JSONP");
    setTimeout(function() { cb(error) }, 0);
    return;
  }

  reqwest({
    url: same_origin(protocol, domain) ? endpoint : url,
    method: "get",
    type: "json",
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function(resp) {
      cb(null, resp.country_code)
    },
    error: function(err) {
      var error = new Error("There was an error in the request that obtains the user's country");
      error.cause = err;
      cb(error);
    }
  });
}

Auth0.prototype._prepareResult = function(result) {
  if (!result || typeof result !== "object") {
    return;
  }

  var idTokenPayload = result.profile
    ? result.profile
    : this.decodeJwt(result.id_token);

  return {
    accessToken: result.access_token,
    idToken: result.id_token,
    idTokenPayload: idTokenPayload,
    refreshToken: result.refresh_token,
    state: result.state
  };
}

Auth0.prototype._parseResponseType = function(opts, setFlags) {
  if (!opts) opts = {};

  if (setFlags
       && !this._providedResponseOptions
       && opts.hasOwnProperty("callbackOnLocationHash")) {
    this._providedCallbackOnLocationHash = true;
  }

  if (setFlags
       && !this._providedCallbackOnLocationHash
       && opts.hasOwnProperty("responseType")) {
    this._providedResponseOptions = true;
  }

  if (!this._providedCallbackOnLocationHash
       && !this._providedResponseOptions
       && opts.hasOwnProperty("callbackOnLocationHash")
       && opts.hasOwnProperty("responseType")) {
    warn("The responseType option will be ignored. Both callbackOnLocationHash and responseType options were provided and they can't be used together.");
  }

  if (this._providedCallbackOnLocationHash
       && opts.hasOwnProperty("responseType")) {
    warn("The responseType option will be ignored. The callbackOnLocationHash option was provided to the constructor and they can't be mixed.");
  }

  if (this._providedResponseOptions
       && opts.hasOwnProperty("callbackOnLocationHash")) {
    warn("The callbackOnLocationHash option will be ignored. The responseType option was provided to the constructor and they can't be mixed.");
  }

  if (!this._providedCallbackOnLocationHash
       && !opts.hasOwnProperty("callbackOnLocationHash")
       && opts.responseType
       && !validResponseType(opts.responseType)) {
    warn("The responseType option will be ignored. Its valid values are \"code\", \"id_token\", \"token\" or any combination of them.");
  }

  var result = undefined;

  if (!this._providedResponseOptions
       && null != opts.callbackOnLocationHash) {
    result = callbackOnLocationHashToResponseType(opts.callbackOnLocationHash);
  }

  if (!this._providedCallbackOnLocationHash
       && !opts.hasOwnProperty("callbackOnLocationHash")
       && opts.responseType
       && validResponseType(opts.responseType)) {
    result = opts.responseType;
  }

  return result;
}

Auth0.prototype._parseResponseMode = function(opts, setFlags) {
  if (!opts) opts = {};

  if (setFlags
       && !this._providedCallbackOnLocationHash
       && opts.hasOwnProperty("responseMode")) {
    this._providedResponseOptions = true;
  }

  if (this._providedCallbackOnLocationHash
       && opts.hasOwnProperty("responseMode")) {
    warn("The responseMode option will be ignored. The callbackOnLocationHash option was provided to the constructor and they can't be mixed.");
  }

  if (!this._providedCallbackOnLocationHash
       && !this._providedResponseOptions
       && opts.hasOwnProperty("callbackOnLocationHash")
       && opts.hasOwnProperty("responseMode")) {
    warn("The responseMode option will be ignored. Both callbackOnLocationHash and responseMode options were provided and they can't be used together.");
  }

  var result = undefined;

  if (!this._providedCallbackOnLocationHash
       && opts.responseMode
       && !validResponseMode(opts.responseMode)) {
    warn("The responseMode option will be ignored. Its only valid value is \"form_post\".");
  }

  if (!this._providedCallbackOnLocationHash
       && validResponseMode(opts.responseMode)) {
    result = opts.responseMode;
  }

  return result;
}

function callbackOnLocationHashToResponseType(x) {
  return x ? "token" : "code";
}

function validResponseType(str) {
  if (typeof str !== "string") return false;

  var RESPONSE_TYPES = ["code", "id_token", "token"];
  var parts = str.split(" ");

  for (var i = 0; i < parts.length; i++) {
    if (RESPONSE_TYPES.indexOf(parts[i]) === -1) return false;
  }

  return parts.length >= 1;
}

function validResponseMode(str) {
  return str === "form_post";
}


function warn(str) {
  if (console && console.warn) {
    console.warn(str);
  }
}

/**
 * Expose `Auth0` constructor
 */

module.exports = Auth0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/LoginError":14,"./lib/assert_required":15,"./lib/base64_url":16,"./lib/index-of":17,"./lib/is-array":18,"./lib/json-parse":19,"./lib/same-origin":20,"./lib/use_jsonp":21,"./version":38,"jsonp":24,"qs":28,"reqwest":29,"trim":30,"winchan":31,"xtend":33}],14:[function(require,module,exports){
/**
 * Module dependencies.
 */

var json_parse = require('./json-parse');

/**
 * Expose `LoginError`
 */

module.exports = LoginError;

/**
 * Create a `LoginError` by extend of `Error`
 *
 * @param {Number} status
 * @param {String} details
 * @public
 */

function LoginError(status, details) {
  var obj;

  if (typeof details == 'string') {
    try {
      obj = json_parse(details);
    } catch (er) {
      obj = { message: details };
    }
  } else {
    obj = details || { description: 'server error' };
  }

  if (!obj.code) {
    obj.code = obj.error;
  }

  if ('unauthorized' === obj.code) {
    status = 401;
  }

  var message = obj.description || obj.message || obj.error;

  if ('PasswordStrengthError' === obj.name) {
    message = "Password is not strong enough.";
  }

  var err = Error.call(this, message);

  err.status = status;
  err.name = obj.code;
  err.code = obj.code;
  err.details = obj;

  if (status === 0) {
    if (!err.code || err.code !== 'offline') {
      err.code = 'Unknown';
      err.message = 'Unknown error.';
    }
  }

  return err;
}

/**
 * Extend `LoginError.prototype` with `Error.prototype`
 * and `LoginError` as constructor
 */

if (Object && Object.create) {
  LoginError.prototype = Object.create(Error.prototype, {
    constructor: { value: LoginError }
  });
}

},{"./json-parse":19}],15:[function(require,module,exports){
/**
 * Expose `required`
 */

module.exports = required;

/**
 * Assert `prop` as requirement of `obj`
 *
 * @param {Object} obj
 * @param {prop} prop
 * @public
 */

function required (obj, prop) {
  if (!obj[prop]) {
    throw new Error(prop + ' is required.');
  }
}

},{}],16:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Base64 = require('Base64');

/**
 * Expose `base64_url_decode`
 */

module.exports = {
  encode: encode,
  decode: decode
};

/**
 * Encode a `base64` `encodeURIComponent` string
 *
 * @param {string} str
 * @public
 */

function encode(str) {
  return Base64.btoa(str)
      .replace(/\+/g, '-') // Convert '+' to '-'
      .replace(/\//g, '_') // Convert '/' to '_'
      .replace(/=+$/, ''); // Remove ending '='
}

/**
 * Decode a `base64` `encodeURIComponent` string
 *
 * @param {string} str
 * @public
 */

function decode(str) {
  // Add removed at end '='
  str += Array(5 - str.length % 4).join('=');

  str = str
    .replace(/\-/g, '+') // Convert '-' to '+'
    .replace(/\_/g, '/'); // Convert '_' to '/'

  return Base64.atob(str);
}
},{"Base64":22}],17:[function(require,module,exports){
/**
 * Resolve `isArray` as native or fallback
 */

module.exports = Array.prototype.indexOf
  ? nativeIndexOf
  : polyfillIndexOf;


function nativeIndexOf(array, searchElement, fromIndex) {
  return array.indexOf(searchElement, fromIndex);
}


function polyfillIndexOf(array, searchElement, fromIndex) {
  // Production steps of ECMA-262, Edition 5, 15.4.4.14
  // Reference: http://es5.github.io/#x15.4.4.14

  var k;

  // 1. Let O be the result of calling ToObject passing
  //    the array value as the argument.
  if (array == null) {
    throw new TypeError('"array" is null or not defined');
  }

  var O = Object(array);

  // 2. Let lenValue be the result of calling the Get
  //    internal method of O with the argument "length".
  // 3. Let len be ToUint32(lenValue).
  var len = O.length >>> 0;

  // 4. If len is 0, return -1.
  if (len === 0) {
    return -1;
  }

  // 5. If argument fromIndex was passed let n be
  //    ToInteger(fromIndex); else let n be 0.
  var n = +fromIndex || 0;

  if (Math.abs(n) === Infinity) {
    n = 0;
  }

  // 6. If n >= len, return -1.
  if (n >= len) {
    return -1;
  }

  // 7. If n >= 0, then Let k be n.
  // 8. Else, n<0, Let k be len - abs(n).
  //    If k is less than 0, then let k be 0.
  k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

  // 9. Repeat, while k < len
  while (k < len) {
    // a. Let Pk be ToString(k).
    //   This is implicit for LHS operands of the in operator
    // b. Let kPresent be the result of calling the
    //    HasProperty internal method of O with argument Pk.
    //   This step can be combined with c
    // c. If kPresent is true, then
    //    i.  Let elementK be the result of calling the Get
    //        internal method of O with the argument ToString(k).
    //   ii.  Let same be the result of applying the
    //        Strict Equality Comparison Algorithm to
    //        searchElement and elementK.
    //  iii.  If same is true, return k.
    if (k in O && O[k] === searchElement) {
      return k;
    }
    k++;
  }
  return -1;
};

},{}],18:[function(require,module,exports){
/**
 * Module dependencies.
 */

var toString = Object.prototype.toString;

/**
 * Resolve `isArray` as native or fallback
 */

module.exports = null != Array.isArray
  ? Array.isArray
  : isArray;

/**
 * Wrap `Array.isArray` Polyfill for IE9
 * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 * @param {Array} array
 * @public
 */

function isArray (array) {
  return toString.call(array) === '[object Array]';
};

},{}],19:[function(require,module,exports){
/**
 * Expose `JSON.parse` method or fallback if not
 * exists on `window`
 */

module.exports = 'undefined' === typeof window.JSON
  ? require('json-fallback').parse
  : window.JSON.parse;

},{"json-fallback":23}],20:[function(require,module,exports){
/**
 * Check for same origin policy
 */

var protocol = window.location.protocol;
var domain = window.location.hostname;
var port = window.location.port;

module.exports = same_origin;

function same_origin (tprotocol, tdomain, tport) {
  tport = tport || '';
  return protocol === tprotocol && domain === tdomain && port === tport;
}

},{}],21:[function(require,module,exports){
/**
 * Expose `use_jsonp`
 */

module.exports = use_jsonp;

/**
 * Return true if `jsonp` is required
 *
 * @return {Boolean}
 * @public
 */

function use_jsonp() {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : null;

  if (xhr && 'withCredentials' in xhr) {
    return false;
  }

  // We no longer support XDomainRequest for IE8 and IE9 for CORS because it has many quirks.
  // if ('XDomainRequest' in window && window.location.protocol === 'https:') {
  //   return false;
  // }

  return true;
}
},{}],22:[function(require,module,exports){
;(function () {

  var
    object = typeof exports != 'undefined' ? exports : this, // #8: web workers
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    INVALID_CHARACTER_ERR = (function () {
      // fabricate a suitable error object
      try { document.createElement('$'); }
      catch (error) { return error; }}());

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) throw INVALID_CHARACTER_ERR;
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '')
    if (input.length % 4 == 1) throw INVALID_CHARACTER_ERR;
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());

},{}],23:[function(require,module,exports){
/*
    json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = {};

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

module.exports = JSON
},{}],24:[function(require,module,exports){
/**
 * Module dependencies
 */

var debug = require('debug')('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';
  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;

  // generate a unique id for this request
  var id = prefix + (count++);

  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    script.parentNode.removeChild(script);
    window[id] = noop;
  }

  window[id] = function(data){
    debug('jsonp got', data);
    if (timer) clearTimeout(timer);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);
}

},{"debug":25}],25:[function(require,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage(){
  try {
    return window.localStorage;
  } catch (e) {}
}

},{"./debug":26}],26:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":27}],27:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],28:[function(require,module,exports){
/**
 * Object#toString() ref for stringify().
 */

var toString = Object.prototype.toString;

/**
 * Object#hasOwnProperty ref
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Array#indexOf shim.
 */

var indexOf = typeof Array.prototype.indexOf === 'function'
  ? function(arr, el) { return arr.indexOf(el); }
  : function(arr, el) {
      if (typeof arr == 'string' && typeof "a"[0] == 'undefined') {
        arr = arr.split('');
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i;
      }
      return -1;
    };

/**
 * Array.isArray shim.
 */

var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == '[object Array]';
};

/**
 * Object.keys shim.
 */

var objectKeys = Object.keys || function(obj) {
  var ret = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret.push(key);
    }
  }
  return ret;
};

/**
 * Array#forEach shim.
 */

var forEach = typeof Array.prototype.forEach === 'function'
  ? function(arr, fn) { return arr.forEach(fn); }
  : function(arr, fn) {
      for (var i = 0; i < arr.length; i++) fn(arr[i]);
    };

/**
 * Array#reduce shim.
 */

var reduce = function(arr, fn, initial) {
  if (typeof arr.reduce === 'function') return arr.reduce(fn, initial);
  var res = initial;
  for (var i = 0; i < arr.length; i++) res = fn(res, arr[i]);
  return res;
};

/**
 * Cache non-integer test regexp.
 */

var isint = /^[0-9]+$/;

function promote(parent, key) {
  if (parent[key].length == 0) return parent[key] = {}
  var t = {};
  for (var i in parent[key]) {
    if (hasOwnProperty.call(parent[key], i)) {
      t[i] = parent[key][i];
    }
  }
  parent[key] = t;
  return t;
}

function parse(parts, parent, key, val) {
  var part = parts.shift();

  // illegal
  if (hasOwnProperty.call(Object.prototype, key)) return;

  // end
  if (!part) {
    if (isArray(parent[key])) {
      parent[key].push(val);
    } else if ('object' == typeof parent[key]) {
      parent[key] = val;
    } else if ('undefined' == typeof parent[key]) {
      parent[key] = val;
    } else {
      parent[key] = [parent[key], val];
    }
    // array
  } else {
    var obj = parent[key] = parent[key] || [];
    if (']' == part) {
      if (isArray(obj)) {
        if ('' != val) obj.push(val);
      } else if ('object' == typeof obj) {
        obj[objectKeys(obj).length] = val;
      } else {
        obj = parent[key] = [parent[key], val];
      }
      // prop
    } else if (~indexOf(part, ']')) {
      part = part.substr(0, part.length - 1);
      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
      parse(parts, obj, part, val);
      // key
    } else {
      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
      parse(parts, obj, part, val);
    }
  }
}

/**
 * Merge parent key/val pair.
 */

function merge(parent, key, val){
  if (~indexOf(key, ']')) {
    var parts = key.split('[')
      , len = parts.length
      , last = len - 1;
    parse(parts, parent, 'base', val);
    // optimize
  } else {
    if (!isint.test(key) && isArray(parent.base)) {
      var t = {};
      for (var k in parent.base) t[k] = parent.base[k];
      parent.base = t;
    }
    set(parent.base, key, val);
  }

  return parent;
}

/**
 * Compact sparse arrays.
 */

function compact(obj) {
  if ('object' != typeof obj) return obj;

  if (isArray(obj)) {
    var ret = [];

    for (var i in obj) {
      if (hasOwnProperty.call(obj, i)) {
        ret.push(obj[i]);
      }
    }

    return ret;
  }

  for (var key in obj) {
    obj[key] = compact(obj[key]);
  }

  return obj;
}

/**
 * Parse the given obj.
 */

function parseObject(obj){
  var ret = { base: {} };

  forEach(objectKeys(obj), function(name){
    merge(ret, name, obj[name]);
  });

  return compact(ret.base);
}

/**
 * Parse the given str.
 */

function parseString(str, options){
  var ret = reduce(String(str).split(options.separator), function(ret, pair){
    var eql = indexOf(pair, '=')
      , brace = lastBraceInKey(pair)
      , key = pair.substr(0, brace || eql)
      , val = pair.substr(brace || eql, pair.length)
      , val = val.substr(indexOf(val, '=') + 1, val.length);

    // ?foo
    if ('' == key) key = pair, val = '';
    if ('' == key) return ret;

    return merge(ret, decode(key), decode(val));
  }, { base: {} }).base;

  return compact(ret);
}

/**
 * Parse the given query `str` or `obj`, returning an object.
 *
 * @param {String} str | {Object} obj
 * @return {Object}
 * @api public
 */

exports.parse = function(str, options){
  if (null == str || '' == str) return {};
  options = options || {};
  options.separator = options.separator || '&';
  return 'object' == typeof str
    ? parseObject(str)
    : parseString(str, options);
};

/**
 * Turn the given `obj` into a query string
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

var stringify = exports.stringify = function(obj, prefix) {
  if (isArray(obj)) {
    return stringifyArray(obj, prefix);
  } else if ('[object Object]' == toString.call(obj)) {
    return stringifyObject(obj, prefix);
  } else if ('string' == typeof obj) {
    return stringifyString(obj, prefix);
  } else {
    return prefix + '=' + encodeURIComponent(String(obj));
  }
};

/**
 * Stringify the given `str`.
 *
 * @param {String} str
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyString(str, prefix) {
  if (!prefix) throw new TypeError('stringify expects an object');
  return prefix + '=' + encodeURIComponent(str);
}

/**
 * Stringify the given `arr`.
 *
 * @param {Array} arr
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyArray(arr, prefix) {
  var ret = [];
  if (!prefix) throw new TypeError('stringify expects an object');
  for (var i = 0; i < arr.length; i++) {
    ret.push(stringify(arr[i], prefix + '[' + i + ']'));
  }
  return ret.join('&');
}

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyObject(obj, prefix) {
  var ret = []
    , keys = objectKeys(obj)
    , key;

  for (var i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    if ('' == key) continue;
    if (null == obj[key]) {
      ret.push(encodeURIComponent(key) + '=');
    } else {
      ret.push(stringify(obj[key], prefix
        ? prefix + '[' + encodeURIComponent(key) + ']'
        : encodeURIComponent(key)));
    }
  }

  return ret.join('&');
}

/**
 * Set `obj`'s `key` to `val` respecting
 * the weird and wonderful syntax of a qs,
 * where "foo=bar&foo=baz" becomes an array.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @api private
 */

function set(obj, key, val) {
  var v = obj[key];
  if (hasOwnProperty.call(Object.prototype, key)) return;
  if (undefined === v) {
    obj[key] = val;
  } else if (isArray(v)) {
    v.push(val);
  } else {
    obj[key] = [v, val];
  }
}

/**
 * Locate last brace in `str` within the key.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function lastBraceInKey(str) {
  var len = str.length
    , brace
    , c;
  for (var i = 0; i < len; ++i) {
    c = str[i];
    if (']' == c) brace = false;
    if ('[' == c) brace = true;
    if ('=' == c && !brace) return i;
  }
}

/**
 * Decode `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function decode(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (err) {
    return str;
  }
}

},{}],29:[function(require,module,exports){
/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2014
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
}('reqwest', this, function () {

  var win = window
    , doc = document
    , httpsRe = /^http/
    , protocolRe = /(^\w+):\/\//
    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    , byTag = 'getElementsByTagName'
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , head = doc[byTag]('head')[0]
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded'
        , 'requestedWith': xmlHttpRequest
        , 'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , 'xml':  'application/xml, text/xml'
            , 'html': 'text/html'
            , 'text': 'text/plain'
            , 'json': 'application/json, text/javascript'
            , 'js':   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o['crossOrigin'] === true) {
          var xhr = win[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (win[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (win[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function succeed(r) {
    var protocol = protocolRe.exec(r.url);
    protocol = (protocol && protocol[1]) || window.location.protocol;
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response;
  }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (succeed(r)) success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o['headers'] || {}
      , h

    headers['Accept'] = headers['Accept']
      || defaultHeaders['accept'][o['type']]
      || defaultHeaders['accept']['*']

    var isAFormData = typeof FormData === 'function' && (o['data'] instanceof FormData);
    // breaks cross-origin requests with legacy browsers
    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials']
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    win[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o['method'] || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o['url']
      // convert non-string objects to query-string form unless o['processData'] is false
      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
        ? reqwest.toQueryString(o['data'])
        : (o['data'] || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

    // get the xhr from the factory if passed
    // if the factory returns null, fall-back to ours
    http = (o.xhr && o.xhr(o)) || xhr(o)

    http.open(method, url, o['async'] === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o['before'] && o['before'](http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(header) {
    // json, javascript, text/plain, text/html, xml
    if (header.match('json')) return 'json'
    if (header.match('javascript')) return 'js'
    if (header.match('text')) return 'html'
    if (header.match('xml')) return 'xml'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o['url']
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this

    fn = fn || function () {}

    if (o['timeout']) {
      this.timeout = setTimeout(function () {
        timedOut()
      }, o['timeout'])
    }

    if (o['success']) {
      this._successHandler = function () {
        o['success'].apply(o, arguments)
      }
    }

    if (o['error']) {
      this._errorHandlers.push(function () {
        o['error'].apply(o, arguments)
      })
    }

    if (o['complete']) {
      this._completeHandlers.push(function () {
        o['complete'].apply(o, arguments)
      })
    }

    function complete (resp) {
      o['timeout'] && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function timedOut() {
      self._timedOut = true
      self.request.abort()      
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  , 'catch': function (fn) {
      return this.fail(fn)
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type']
      o['dataType'] && (o['type'] = o['dataType'])
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});

},{}],30:[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],31:[function(require,module,exports){
var WinChan = (function() {
  var RELAY_FRAME_NAME = "__winchan_relay_frame";
  var CLOSE_CMD = "die";

  // a portable addListener implementation
  function addListener(w, event, cb) {
    if(w.attachEvent) w.attachEvent('on' + event, cb);
    else if (w.addEventListener) w.addEventListener(event, cb, false);
  }

  // a portable removeListener implementation
  function removeListener(w, event, cb) {
    if(w.detachEvent) w.detachEvent('on' + event, cb);
    else if (w.removeEventListener) w.removeEventListener(event, cb, false);
  }


  // checking for IE8 or above
  function isInternetExplorer() {
    var rv = -1; // Return value assumes failure.
    var ua = navigator.userAgent;
    if (navigator.appName === 'Microsoft Internet Explorer') {
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
        rv = parseFloat(RegExp.$1);
    }
    // IE > 11
    else if (ua.indexOf("Trident") > -1) {
      var re = new RegExp("rv:([0-9]{2,2}[\.0-9]{0,})");
      if (re.exec(ua) !== null) {
        rv = parseFloat(RegExp.$1);
      }
    }

    return rv >= 8;
  }

  // checking Mobile Firefox (Fennec)
  function isFennec() {
    try {
      // We must check for both XUL and Java versions of Fennec.  Both have
      // distinct UA strings.
      var userAgent = navigator.userAgent;
      return (userAgent.indexOf('Fennec/') != -1) ||  // XUL
             (userAgent.indexOf('Firefox/') != -1 && userAgent.indexOf('Android') != -1);   // Java
    } catch(e) {}
    return false;
  }

  // feature checking to see if this platform is supported at all
  function isSupported() {
    return (window.JSON && window.JSON.stringify &&
            window.JSON.parse && window.postMessage);
  }

  // given a URL, extract the origin. Taken from: https://github.com/firebase/firebase-simple-login/blob/d2cb95b9f812d8488bdbfba51c3a7c153ba1a074/js/src/simple-login/transports/WinChan.js#L25-L30
  function extractOrigin(url) {
    if (!/^https?:\/\//.test(url)) url = window.location.href;
    var m = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(url);
    if (m) return m[1];
    return url;
  }

  // find the relay iframe in the opener
  function findRelay() {
    var loc = window.location;
    var frames = window.opener.frames;
    for (var i = frames.length - 1; i >= 0; i--) {
      try {
        if (frames[i].location.protocol === window.location.protocol &&
            frames[i].location.host === window.location.host &&
            frames[i].name === RELAY_FRAME_NAME)
        {
          return frames[i];
        }
      } catch(e) { }
    }
    return;
  }

  var isIE = isInternetExplorer();

  if (isSupported()) {
    /*  General flow:
     *                  0. user clicks
     *  (IE SPECIFIC)   1. caller adds relay iframe (served from trusted domain) to DOM
     *                  2. caller opens window (with content from trusted domain)
     *                  3. window on opening adds a listener to 'message'
     *  (IE SPECIFIC)   4. window on opening finds iframe
     *                  5. window checks if iframe is "loaded" - has a 'doPost' function yet
     *  (IE SPECIFIC5)  5a. if iframe.doPost exists, window uses it to send ready event to caller
     *  (IE SPECIFIC5)  5b. if iframe.doPost doesn't exist, window waits for frame ready
     *  (IE SPECIFIC5)  5bi. once ready, window calls iframe.doPost to send ready event
     *                  6. caller upon reciept of 'ready', sends args
     */
    return {
      open: function(opts, cb) {
        if (!cb) throw "missing required callback argument";

        // test required options
        var err;
        if (!opts.url) err = "missing required 'url' parameter";
        if (!opts.relay_url) err = "missing required 'relay_url' parameter";
        if (err) setTimeout(function() { cb(err); }, 0);

        // supply default options
        if (!opts.window_name) opts.window_name = null;
        if (!opts.window_features || isFennec()) opts.window_features = undefined;

        // opts.params may be undefined

        var iframe;

        // sanity check, are url and relay_url the same origin?
        var origin = extractOrigin(opts.url);
        if (origin !== extractOrigin(opts.relay_url)) {
          return setTimeout(function() {
            cb('invalid arguments: origin of url and relay_url must match');
          }, 0);
        }

        var messageTarget;

        if (isIE) {
          // first we need to add a "relay" iframe to the document that's served
          // from the target domain.  We can postmessage into a iframe, but not a
          // window
          iframe = document.createElement("iframe");
          // iframe.setAttribute('name', framename);
          iframe.setAttribute('src', opts.relay_url);
          iframe.style.display = "none";
          iframe.setAttribute('name', RELAY_FRAME_NAME);
          document.body.appendChild(iframe);
          messageTarget = iframe.contentWindow;
        }

        var w = opts.popup || window.open(opts.url, opts.window_name, opts.window_features);
        if (opts.popup) {
          w.location.href = opts.url;
        }

        if (!messageTarget) messageTarget = w;

        // lets listen in case the window blows up before telling us
        var closeInterval = setInterval(function() {
          if (w && w.closed) {
            cleanup();
            if (cb) {
              cb('User closed the popup window');
              cb = null;
            }
          }
        }, 500);

        var req = JSON.stringify({a: 'request', d: opts.params});

        // cleanup on unload
        function cleanup() {
          if (iframe) document.body.removeChild(iframe);
          iframe = undefined;
          if (closeInterval) closeInterval = clearInterval(closeInterval);
          removeListener(window, 'message', onMessage);
          removeListener(window, 'unload', cleanup);
          if (w) {
            try {
              w.close();
            } catch (securityViolation) {
              // This happens in Opera 12 sometimes
              // see https://github.com/mozilla/browserid/issues/1844
              messageTarget.postMessage(CLOSE_CMD, origin);
            }
          }
          w = messageTarget = undefined;
        }

        addListener(window, 'unload', cleanup);

        function onMessage(e) {
          if (e.origin !== origin) { return; }
          try {
            var d = JSON.parse(e.data);
            if (d.a === 'ready') messageTarget.postMessage(req, origin);
            else if (d.a === 'error') {
              cleanup();
              if (cb) {
                cb(d.d);
                cb = null;
              }
            } else if (d.a === 'response') {
              cleanup();
              if (cb) {
                cb(null, d.d);
                cb = null;
              }
            }
          } catch(err) { }
        }

        addListener(window, 'message', onMessage);

        return {
          close: cleanup,
          focus: function() {
            if (w) {
              try {
                w.focus();
              } catch (e) {
                // IE7 blows up here, do nothing
              }
            }
          }
        };
      },
      onOpen: function(cb) {
        var o = "*";
        var msgTarget = isIE ? findRelay() : window.opener;
        if (!msgTarget) throw "can't find relay frame";
        function doPost(msg) {
          msg = JSON.stringify(msg);
          if (isIE) msgTarget.doPost(msg, o);
          else msgTarget.postMessage(msg, o);
        }

        function onMessage(e) {
          // only one message gets through, but let's make sure it's actually
          // the message we're looking for (other code may be using
          // postmessage) - we do this by ensuring the payload can
          // be parsed, and it's got an 'a' (action) value of 'request'.
          var d;
          try {
            d = JSON.parse(e.data);
          } catch(err) { }
          if (!d || d.a !== 'request') return;
          removeListener(window, 'message', onMessage);
          o = e.origin;
          if (cb) {
            // this setTimeout is critically important for IE8 -
            // in ie8 sometimes addListener for 'message' can synchronously
            // cause your callback to be invoked.  awesome.
            setTimeout(function() {
              cb(o, d.d, function(r) {
                cb = undefined;
                doPost({a: 'response', d: r});
              });
            }, 0);
          }
        }

        function onDie(e) {
          if (e.data === CLOSE_CMD) {
            try { window.close(); } catch (o_O) {}
          }
        }
        addListener(isIE ? msgTarget : window, 'message', onMessage);
        addListener(isIE ? msgTarget : window, 'message', onDie);

        // we cannot post to our parent that we're ready before the iframe
        // is loaded. (IE specific possible failure)
        try {
          doPost({a: "ready"});
        } catch(e) {
          // this code should never be exectued outside IE
          addListener(msgTarget, 'load', function(e) {
            doPost({a: "ready"});
          });
        }

        // if window is unloaded and the client hasn't called cb, it's an error
        var onUnload = function() {
          try {
            // IE8 doesn't like this...
            removeListener(isIE ? msgTarget : window, 'message', onDie);
          } catch (ohWell) { }
          if (cb) doPost({ a: 'error', d: 'client closed window' });
          cb = undefined;
          // explicitly close the window, in case the client is trying to reload or nav
          try { window.close(); } catch (e) { }
        };
        addListener(window, 'unload', onUnload);
        return {
          detach: function() {
            removeListener(window, 'unload', onUnload);
          }
        };
      }
    };
  } else {
    return {
      open: function(url, winopts, arg, cb) {
        setTimeout(function() { cb("unsupported browser"); }, 0);
      },
      onOpen: function(cb) {
        setTimeout(function() { cb("unsupported browser"); }, 0);
      }
    };
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WinChan;
}

},{}],32:[function(require,module,exports){
module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}

},{}],33:[function(require,module,exports){
var Keys = require("object-keys")
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        var keys = Keys(source)

        for (var j = 0; j < keys.length; j++) {
            var name = keys[j]
            target[name] = source[name]
        }
    }

    return target
}

},{"./has-keys":32,"object-keys":35}],34:[function(require,module,exports){
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var isFunction = function (fn) {
	var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString.call(fn) === '[object Function]';
	if (!isFunc && typeof window !== 'undefined') {
		isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
	}
	return isFunc;
};

module.exports = function forEach(obj, fn) {
	if (!isFunction(fn)) {
		throw new TypeError('iterator must be a function');
	}
	var i, k,
		isString = typeof obj === 'string',
		l = obj.length,
		context = arguments.length > 2 ? arguments[2] : null;
	if (l === +l) {
		for (i = 0; i < l; i++) {
			if (context === null) {
				fn(isString ? obj.charAt(i) : obj[i], i, obj);
			} else {
				fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
			}
		}
	} else {
		for (k in obj) {
			if (hasOwn.call(obj, k)) {
				if (context === null) {
					fn(obj[k], k, obj);
				} else {
					fn.call(context, obj[k], k, obj);
				}
			}
		}
	}
};


},{}],35:[function(require,module,exports){
module.exports = Object.keys || require('./shim');


},{"./shim":37}],36:[function(require,module,exports){
var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toString.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString.call(value.callee) === '[object Function]';
	}
	return isArguments;
};


},{}],37:[function(require,module,exports){
(function () {
	"use strict";

	// modified from https://github.com/kriskowal/es5-shim
	var has = Object.prototype.hasOwnProperty,
		toString = Object.prototype.toString,
		forEach = require('./foreach'),
		isArgs = require('./isArguments'),
		hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
		hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
		dontEnums = [
			"toString",
			"toLocaleString",
			"valueOf",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"constructor"
		],
		keysShim;

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object',
			isFunction = toString.call(object) === '[object Function]',
			isArguments = isArgs(object),
			theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError("Object.keys called on a non-object");
		}

		if (isArguments) {
			forEach(object, function (value) {
				theKeys.push(value);
			});
		} else {
			var name,
				skipProto = hasProtoEnumBug && isFunction;

			for (name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(name);
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor,
				skipConstructor = ctor && ctor.prototype === object;

			forEach(dontEnums, function (dontEnum) {
				if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
					theKeys.push(dontEnum);
				}
			});
		}
		return theKeys;
	};

	module.exports = keysShim;
}());


},{"./foreach":34,"./isArguments":36}],38:[function(require,module,exports){
module.exports = { str: "7.1.0" };

},{}],39:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],40:[function(require,module,exports){
/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;

},{}],41:[function(require,module,exports){
var atob = require('./atob');

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};

},{"./atob":40}],42:[function(require,module,exports){
'use strict';

var base64_url_decode = require('./base64_url_decode');

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new Error('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  return JSON.parse(base64_url_decode(token.split('.')[pos]));
};

},{"./base64_url_decode":41}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PanelGroup = require('./PanelGroup');

var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Accordion = function (_React$Component) {
  (0, _inherits3['default'])(Accordion, _React$Component);

  function Accordion() {
    (0, _classCallCheck3['default'])(this, Accordion);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Accordion.prototype.render = function render() {
    return _react2['default'].createElement(
      _PanelGroup2['default'],
      (0, _extends3['default'])({}, this.props, { accordion: true }),
      this.props.children
    );
  };

  return Accordion;
}(_react2['default'].Component);

exports['default'] = Accordion;
module.exports = exports['default'];
},{"./PanelGroup":111,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react"}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  onDismiss: _react2['default'].PropTypes.func,
  closeLabel: _react2['default'].PropTypes.string
};

var defaultProps = {
  closeLabel: 'Close alert'
};

var Alert = function (_React$Component) {
  (0, _inherits3['default'])(Alert, _React$Component);

  function Alert() {
    (0, _classCallCheck3['default'])(this, Alert);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Alert.prototype.renderDismissButton = function renderDismissButton(onDismiss) {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        onClick: onDismiss,
        'aria-hidden': 'true',
        tabIndex: '-1'
      },
      _react2['default'].createElement(
        'span',
        null,
        '×'
      )
    );
  };

  Alert.prototype.renderSrOnlyDismissButton = function renderSrOnlyDismissButton(onDismiss, closeLabel) {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close sr-only',
        onClick: onDismiss
      },
      closeLabel
    );
  };

  Alert.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var onDismiss = _props.onDismiss;
    var closeLabel = _props.closeLabel;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['onDismiss', 'closeLabel', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var dismissable = !!onDismiss;
    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'dismissable')] = dismissable, _extends2));

    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, elementProps, {
        role: 'alert',
        className: (0, _classnames2['default'])(className, classes)
      }),
      dismissable && this.renderDismissButton(onDismiss),
      children,
      dismissable && this.renderSrOnlyDismissButton(onDismiss, closeLabel)
    );
  };

  return Alert;
}(_react2['default'].Component);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsStyles)((0, _values2['default'])(_StyleConfig.State), _StyleConfig.State.INFO, (0, _bootstrapUtils.bsClass)('alert', Alert));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/core-js/object/values":145,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],45:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: `pullRight` doesn't belong here. There's no special handling here.

var propTypes = {
  pullRight: _react2['default'].PropTypes.bool
};

var defaultProps = {
  pullRight: false
};

var Badge = function (_React$Component) {
  (0, _inherits3['default'])(Badge, _React$Component);

  function Badge() {
    (0, _classCallCheck3['default'])(this, Badge);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Badge.prototype.hasContent = function hasContent(children) {
    var result = false;

    _react2['default'].Children.forEach(children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  Badge.prototype.render = function render() {
    var _props = this.props;
    var pullRight = _props.pullRight;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['pullRight', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      'pull-right': pullRight,

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return _react2['default'].createElement(
      'span',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      children
    );
  };

  return Badge;
}(_react2['default'].Component);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('badge', Badge);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],46:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BreadcrumbItem = require('./BreadcrumbItem');

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Breadcrumb = function (_React$Component) {
  (0, _inherits3['default'])(Breadcrumb, _React$Component);

  function Breadcrumb() {
    (0, _classCallCheck3['default'])(this, Breadcrumb);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Breadcrumb.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('ol', (0, _extends3['default'])({}, elementProps, {
      role: 'navigation',
      'aria-label': 'breadcrumbs',
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Breadcrumb;
}(_react2['default'].Component);

Breadcrumb.Item = _BreadcrumbItem2['default'];

exports['default'] = (0, _bootstrapUtils.bsClass)('breadcrumb', Breadcrumb);
module.exports = exports['default'];
},{"./BreadcrumbItem":47,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],47:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * If set to true, renders `span` instead of `a`
   */
  active: _react2['default'].PropTypes.bool,
  /**
   * `href` attribute for the inner `a` element
   */
  href: _react2['default'].PropTypes.string,
  /**
   * `title` attribute for the inner `a` element
   */
  title: _react2['default'].PropTypes.node,
  /**
   * `target` attribute for the inner `a` element
   */
  target: _react2['default'].PropTypes.string
};

var defaultProps = {
  active: false
};

var BreadcrumbItem = function (_React$Component) {
  (0, _inherits3['default'])(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    (0, _classCallCheck3['default'])(this, BreadcrumbItem);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  BreadcrumbItem.prototype.render = function render() {
    var _props = this.props;
    var active = _props.active;
    var href = _props.href;
    var title = _props.title;
    var target = _props.target;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'href', 'title', 'target', 'className']);

    // Don't try to render these props on non-active <span>.

    var linkProps = { href: href, title: title, target: target };

    return _react2['default'].createElement(
      'li',
      { className: (0, _classnames2['default'])(className, { active: active }) },
      active ? _react2['default'].createElement('span', props) : _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, props, linkProps))
    );
  };

  return BreadcrumbItem;
}(_react2['default'].Component);

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

exports['default'] = BreadcrumbItem;
module.exports = exports['default'];
},{"./SafeAnchor":117,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],48:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  active: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  block: _react2['default'].PropTypes.bool,
  onClick: _react2['default'].PropTypes.func,
  componentClass: _elementType2['default'],
  href: _react2['default'].PropTypes.string,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: _react2['default'].PropTypes.oneOf(['button', 'reset', 'submit'])
};

var defaultProps = {
  active: false,
  block: false,
  disabled: false
};

var Button = function (_React$Component) {
  (0, _inherits3['default'])(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3['default'])(this, Button);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Button.prototype.renderAnchor = function renderAnchor(elementProps, className) {
    return _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends4['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, elementProps.disabled && 'disabled')
    }));
  };

  Button.prototype.renderButton = function renderButton(_ref, className) {
    var componentClass = _ref.componentClass;
    var elementProps = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass']);

    var Component = componentClass || 'button';

    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, elementProps, {
      type: elementProps.type || 'button',
      className: className
    }));
  };

  Button.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var active = _props.active;
    var block = _props.block;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'block', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {
      active: active
    }, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'block')] = block, _extends2));
    var fullClassName = (0, _classnames2['default'])(className, classes);

    if (elementProps.href) {
      return this.renderAnchor(elementProps, fullClassName);
    }

    return this.renderButton(elementProps, fullClassName);
  };

  return Button;
}(_react2['default'].Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('btn', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL, _StyleConfig.Size.XSMALL], (0, _bootstrapUtils.bsStyles)([].concat((0, _values2['default'])(_StyleConfig.State), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY, _StyleConfig.Style.LINK]), _StyleConfig.Style.DEFAULT, Button)));
module.exports = exports['default'];
},{"./SafeAnchor":117,"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/core-js/object/values":145,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],49:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _all = require('react-prop-types/lib/all');

var _all2 = _interopRequireDefault(_all);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  vertical: _react2['default'].PropTypes.bool,
  justified: _react2['default'].PropTypes.bool,

  /**
   * Display block buttons; only useful when used with the "vertical" prop.
   * @type {bool}
   */
  block: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
    var block = _ref.block;
    var vertical = _ref.vertical;
    return block && !vertical ? new Error('`block` requires `vertical` to be set to have any effect') : null;
  })
};

var defaultProps = {
  block: false,
  justified: false,
  vertical: false
};

var ButtonGroup = function (_React$Component) {
  (0, _inherits3['default'])(ButtonGroup, _React$Component);

  function ButtonGroup() {
    (0, _classCallCheck3['default'])(this, ButtonGroup);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ButtonGroup.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var block = _props.block;
    var justified = _props.justified;
    var vertical = _props.vertical;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['block', 'justified', 'vertical', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps)] = !vertical, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'vertical')] = vertical, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'justified')] = justified, _extends2[(0, _bootstrapUtils.prefix)(_Button2['default'].defaultProps, 'block')] = block, _extends2));

    return _react2['default'].createElement('div', (0, _extends4['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ButtonGroup;
}(_react2['default'].Component);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('btn-group', ButtonGroup);
module.exports = exports['default'];
},{"./Button":48,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/all":287}],50:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ButtonToolbar = function (_React$Component) {
  (0, _inherits3['default'])(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    (0, _classCallCheck3['default'])(this, ButtonToolbar);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ButtonToolbar.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      role: 'toolbar',
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ButtonToolbar;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('btn-toolbar', (0, _bootstrapUtils.bsSizes)(_Button2['default'].SIZES, ButtonToolbar));
module.exports = exports['default'];
},{"./Button":48,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],51:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CarouselCaption = require('./CarouselCaption');

var _CarouselCaption2 = _interopRequireDefault(_CarouselCaption);

var _CarouselItem = require('./CarouselItem');

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: `slide` should be `animate`.

// TODO: Use uncontrollable.

var propTypes = {
  slide: _react2['default'].PropTypes.bool,
  indicators: _react2['default'].PropTypes.bool,
  interval: _react2['default'].PropTypes.number,
  controls: _react2['default'].PropTypes.bool,
  pauseOnHover: _react2['default'].PropTypes.bool,
  wrap: _react2['default'].PropTypes.bool,
  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any) => any | (eventKey: any, event: Object) => any
   * ```
   *
   * If this callback takes two or more arguments, the second argument will
   * be a persisted event object with `direction` set to the direction of the
   * transition.
   */
  onSelect: _react2['default'].PropTypes.func,
  onSlideEnd: _react2['default'].PropTypes.func,
  activeIndex: _react2['default'].PropTypes.number,
  defaultActiveIndex: _react2['default'].PropTypes.number,
  direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
  prevIcon: _react2['default'].PropTypes.node,
  nextIcon: _react2['default'].PropTypes.node
};

var defaultProps = {
  slide: true,
  interval: 5000,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  prevIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: 'chevron-left' }),
  nextIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: 'chevron-right' })
};

var Carousel = function (_React$Component) {
  (0, _inherits3['default'])(Carousel, _React$Component);

  function Carousel(props, context) {
    (0, _classCallCheck3['default'])(this, Carousel);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);
    _this.handlePrev = _this.handlePrev.bind(_this);
    _this.handleNext = _this.handleNext.bind(_this);
    _this.handleItemAnimateOutEnd = _this.handleItemAnimateOutEnd.bind(_this);

    var defaultActiveIndex = props.defaultActiveIndex;


    _this.state = {
      activeIndex: defaultActiveIndex != null ? defaultActiveIndex : 0,
      previousActiveIndex: null,
      direction: null
    };

    _this.isUnmounted = false;
    return _this;
  }

  Carousel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);

      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  };

  Carousel.prototype.componentDidMount = function componentDidMount() {
    this.waitForNext();
  };

  Carousel.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  Carousel.prototype.handleMouseOver = function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };

  Carousel.prototype.handleMouseOut = function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  };

  Carousel.prototype.handlePrev = function handlePrev(e) {
    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }
      index = _ValidComponentChildren2['default'].count(this.props.children) - 1;
    }

    this.select(index, e, 'prev');
  };

  Carousel.prototype.handleNext = function handleNext(e) {
    var index = this.getActiveIndex() + 1;
    var count = _ValidComponentChildren2['default'].count(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }
      index = 0;
    }

    this.select(index, e, 'next');
  };

  Carousel.prototype.handleItemAnimateOutEnd = function handleItemAnimateOutEnd() {
    var _this2 = this;

    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      _this2.waitForNext();

      if (_this2.props.onSlideEnd) {
        _this2.props.onSlideEnd();
      }
    });
  };

  Carousel.prototype.getActiveIndex = function getActiveIndex() {
    var activeIndexProp = this.props.activeIndex;
    return activeIndexProp != null ? activeIndexProp : this.state.activeIndex;
  };

  Carousel.prototype.getDirection = function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  };

  Carousel.prototype.select = function select(index, e, direction) {
    clearTimeout(this.timeout);

    // TODO: Is this necessary? Seems like the only risk is if the component
    // unmounts while handleItemAnimateOutEnd fires.
    if (this.isUnmounted) {
      return;
    }

    var previousActiveIndex = this.getActiveIndex();
    direction = direction || this.getDirection(previousActiveIndex, index);

    var onSelect = this.props.onSelect;


    if (onSelect) {
      if (onSelect.length > 1) {
        // React SyntheticEvents are pooled, so we need to remove this event
        // from the pool to add a custom property. To avoid unnecessarily
        // removing objects from the pool, only do this when the listener
        // actually wants the event.
        if (e) {
          e.persist();
          e.direction = direction;
        } else {
          e = { direction: direction };
        }

        onSelect(index, e);
      } else {
        onSelect(index);
      }
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queueing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  };

  Carousel.prototype.waitForNext = function waitForNext() {
    var _props = this.props;
    var slide = _props.slide;
    var interval = _props.interval;
    var activeIndexProp = _props.activeIndex;


    if (!this.isPaused && slide && interval && activeIndexProp == null) {
      this.timeout = setTimeout(this.handleNext, interval);
    }
  };

  // This might be a public API.


  Carousel.prototype.pause = function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  };

  // This might be a public API.


  Carousel.prototype.play = function play() {
    this.isPaused = false;
    this.waitForNext();
  };

  Carousel.prototype.renderIndicators = function renderIndicators(children, activeIndex, bsProps) {
    var _this3 = this;

    var indicators = [];

    _ValidComponentChildren2['default'].forEach(children, function (child, index) {
      indicators.push(_react2['default'].createElement('li', {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this3.select(index, e);
        }
      }),

      // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });

    return _react2['default'].createElement(
      'ol',
      { className: (0, _bootstrapUtils.prefix)(bsProps, 'indicators') },
      indicators
    );
  };

  Carousel.prototype.renderControls = function renderControls(wrap, children, activeIndex, prevIcon, nextIcon, bsProps) {
    var controlClassName = (0, _bootstrapUtils.prefix)(bsProps, 'control');
    var count = _ValidComponentChildren2['default'].count(children);

    return [(wrap || activeIndex !== 0) && _react2['default'].createElement(
      _SafeAnchor2['default'],
      {
        key: 'prev',
        className: (0, _classnames2['default'])(controlClassName, 'left'),
        onClick: this.handlePrev
      },
      prevIcon
    ), (wrap || activeIndex !== count - 1) && _react2['default'].createElement(
      _SafeAnchor2['default'],
      {
        key: 'next',
        className: (0, _classnames2['default'])(controlClassName, 'right'),
        onClick: this.handleNext
      },
      nextIcon
    )];
  };

  Carousel.prototype.render = function render() {
    var _this4 = this;

    var _props2 = this.props;
    var slide = _props2.slide;
    var indicators = _props2.indicators;
    var controls = _props2.controls;
    var wrap = _props2.wrap;
    var prevIcon = _props2.prevIcon;
    var nextIcon = _props2.nextIcon;
    var className = _props2.className;
    var children = _props2.children;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['slide', 'indicators', 'controls', 'wrap', 'prevIcon', 'nextIcon', 'className', 'children']);
    var _state = this.state;
    var previousActiveIndex = _state.previousActiveIndex;
    var direction = _state.direction;

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['interval', 'pauseOnHover', 'onSelect', 'onSlideEnd', 'activeIndex', // Accessed via this.getActiveIndex().
    'defaultActiveIndex', 'direction']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    var activeIndex = this.getActiveIndex();

    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      slide: slide
    });

    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }),
      indicators && this.renderIndicators(children, activeIndex, bsProps),
      _react2['default'].createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'inner') },
        _ValidComponentChildren2['default'].map(children, function (child, index) {
          var active = index === activeIndex;
          var previousActive = slide && index === previousActiveIndex;

          return (0, _react.cloneElement)(child, {
            active: active,
            index: index,
            animateOut: previousActive,
            animateIn: active && previousActiveIndex != null && slide,
            direction: direction,
            onAnimateOutEnd: previousActive ? _this4.handleItemAnimateOutEnd : null
          });
        })
      ),
      controls && this.renderControls(wrap, children, activeIndex, prevIcon, nextIcon, bsProps)
    );
  };

  return Carousel;
}(_react2['default'].Component);

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

Carousel.Caption = _CarouselCaption2['default'];
Carousel.Item = _CarouselItem2['default'];

exports['default'] = (0, _bootstrapUtils.bsClass)('carousel', Carousel);
module.exports = exports['default'];
},{"./CarouselCaption":52,"./CarouselItem":53,"./Glyphicon":69,"./SafeAnchor":117,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],52:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div'
};

var CarouselCaption = function (_React$Component) {
  (0, _inherits3['default'])(CarouselCaption, _React$Component);

  function CarouselCaption() {
    (0, _classCallCheck3['default'])(this, CarouselCaption);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  CarouselCaption.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return CarouselCaption;
}(_react2['default'].Component);

CarouselCaption.propTypes = propTypes;
CarouselCaption.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('carousel-caption', CarouselCaption);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],53:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TransitionEvents = require('./utils/TransitionEvents');

var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: This should use a timeout instead of TransitionEvents, or else just
// not wait until transition end to trigger continuing animations.

var propTypes = {
  direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
  onAnimateOutEnd: _react2['default'].PropTypes.func,
  active: _react2['default'].PropTypes.bool,
  animateIn: _react2['default'].PropTypes.bool,
  animateOut: _react2['default'].PropTypes.bool,
  index: _react2['default'].PropTypes.number
};

var defaultProps = {
  active: false,
  animateIn: false,
  animateOut: false
};

var CarouselItem = function (_React$Component) {
  (0, _inherits3['default'])(CarouselItem, _React$Component);

  function CarouselItem(props, context) {
    (0, _classCallCheck3['default'])(this, CarouselItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleAnimateOutEnd = _this.handleAnimateOutEnd.bind(_this);

    _this.state = {
      direction: null
    };

    _this.isUnmounted = false;
    return _this;
  }

  CarouselItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({ direction: null });
    }
  };

  CarouselItem.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var active = this.props.active;

    var prevActive = prevProps.active;

    if (!active && prevActive) {
      _TransitionEvents2['default'].addEndEventListener(_reactDom2['default'].findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (active !== prevActive) {
      setTimeout(function () {
        return _this2.startAnimation();
      }, 20);
    }
  };

  CarouselItem.prototype.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  CarouselItem.prototype.handleAnimateOutEnd = function handleAnimateOutEnd() {
    if (this.isUnmounted) {
      return;
    }

    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  };

  CarouselItem.prototype.startAnimation = function startAnimation() {
    if (this.isUnmounted) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  };

  CarouselItem.prototype.render = function render() {
    var _props = this.props;
    var direction = _props.direction;
    var active = _props.active;
    var animateIn = _props.animateIn;
    var animateOut = _props.animateOut;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['direction', 'active', 'animateIn', 'animateOut', 'className']);


    delete props.onAnimateOutEnd;
    delete props.index;

    var classes = {
      item: true,
      active: active && !animateIn || animateOut
    };
    if (direction && active && animateIn) {
      classes[direction] = true;
    }
    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, props, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return CarouselItem;
}(_react2['default'].Component);

CarouselItem.propTypes = propTypes;
CarouselItem.defaultProps = defaultProps;

exports['default'] = CarouselItem;
module.exports = exports['default'];
},{"./utils/TransitionEvents":132,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-dom":"react-dom"}],54:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  inline: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  /**
   * Only valid if `inline` is not set.
   */
  validationState: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _react2['default'].PropTypes.func
};

var defaultProps = {
  inline: false,
  disabled: false
};

var Checkbox = function (_React$Component) {
  (0, _inherits3['default'])(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3['default'])(this, Checkbox);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Checkbox.prototype.render = function render() {
    var _props = this.props;
    var inline = _props.inline;
    var disabled = _props.disabled;
    var validationState = _props.validationState;
    var inputRef = _props.inputRef;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['inline', 'disabled', 'validationState', 'inputRef', 'className', 'style', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var input = _react2['default'].createElement('input', (0, _extends3['default'])({}, elementProps, {
      ref: inputRef,
      type: 'checkbox',
      disabled: disabled
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[(0, _bootstrapUtils.prefix)(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2);

      // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!validationState, '`validationState` is ignored on `<Checkbox inline>`. To display ' + 'validation state on an inline checkbox, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;

      return _react2['default'].createElement(
        'label',
        { className: (0, _classnames2['default'])(className, _classes), style: style },
        input,
        children
      );
    }

    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      disabled: disabled
    });
    if (validationState) {
      classes['has-' + validationState] = true;
    }

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])(className, classes), style: style },
      _react2['default'].createElement(
        'label',
        null,
        input,
        children
      )
    );
  };

  return Checkbox;
}(_react2['default'].Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('checkbox', Checkbox);
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./utils/bootstrapUtils":134,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","warning":295}],55:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _capitalize = require('./utils/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default'],

  /**
   * Apply clearfix
   *
   * on Extra small devices Phones
   *
   * adds class `visible-xs-block`
   */
  visibleXsBlock: _react2['default'].PropTypes.bool,
  /**
   * Apply clearfix
   *
   * on Small devices Tablets
   *
   * adds class `visible-sm-block`
   */
  visibleSmBlock: _react2['default'].PropTypes.bool,
  /**
   * Apply clearfix
   *
   * on Medium devices Desktops
   *
   * adds class `visible-md-block`
   */
  visibleMdBlock: _react2['default'].PropTypes.bool,
  /**
   * Apply clearfix
   *
   * on Large devices Desktops
   *
   * adds class `visible-lg-block`
   */
  visibleLgBlock: _react2['default'].PropTypes.bool
};

var defaultProps = {
  componentClass: 'div'
};

var Clearfix = function (_React$Component) {
  (0, _inherits3['default'])(Clearfix, _React$Component);

  function Clearfix() {
    (0, _classCallCheck3['default'])(this, Clearfix);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Clearfix.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    _StyleConfig.DEVICE_SIZES.forEach(function (size) {
      var propName = 'visible' + (0, _capitalize2['default'])(size) + 'Block';
      if (elementProps[propName]) {
        classes['visible-' + size + '-block'] = true;
      }

      delete elementProps[propName];
    });

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Clearfix;
}(_react2['default'].Component);

Clearfix.propTypes = propTypes;
Clearfix.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('clearfix', Clearfix);
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"./utils/capitalize":135,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],56:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default'],

  /**
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<768px)
   *
   * class-prefix `col-xs-`
   */
  xs: _react2['default'].PropTypes.number,
  /**
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥768px)
   *
   * class-prefix `col-sm-`
   */
  sm: _react2['default'].PropTypes.number,
  /**
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥992px)
   *
   * class-prefix `col-md-`
   */
  md: _react2['default'].PropTypes.number,
  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-lg-`
   */
  lg: _react2['default'].PropTypes.number,
  /**
   * Hide column
   *
   * on Extra small devices Phones
   *
   * adds class `hidden-xs`
   */
  xsHidden: _react2['default'].PropTypes.bool,
  /**
   * Hide column
   *
   * on Small devices Tablets
   *
   * adds class `hidden-sm`
   */
  smHidden: _react2['default'].PropTypes.bool,
  /**
   * Hide column
   *
   * on Medium devices Desktops
   *
   * adds class `hidden-md`
   */
  mdHidden: _react2['default'].PropTypes.bool,
  /**
   * Hide column
   *
   * on Large devices Desktops
   *
   * adds class `hidden-lg`
   */
  lgHidden: _react2['default'].PropTypes.bool,
  /**
   * Move columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-offset-`
   */
  xsOffset: _react2['default'].PropTypes.number,
  /**
   * Move columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-offset-`
   */
  smOffset: _react2['default'].PropTypes.number,
  /**
   * Move columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-offset-`
   */
  mdOffset: _react2['default'].PropTypes.number,
  /**
   * Move columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-offset-`
   */
  lgOffset: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-push-`
   */
  xsPush: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-push-`
   */
  smPush: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-push-`
   */
  mdPush: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-push-`
   */
  lgPush: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-pull-`
   */
  xsPull: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-pull-`
   */
  smPull: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-pull-`
   */
  mdPull: _react2['default'].PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-pull-`
   */
  lgPull: _react2['default'].PropTypes.number
};

var defaultProps = {
  componentClass: 'div'
};

var Col = function (_React$Component) {
  (0, _inherits3['default'])(Col, _React$Component);

  function Col() {
    (0, _classCallCheck3['default'])(this, Col);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Col.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = [];

    _StyleConfig.DEVICE_SIZES.forEach(function (size) {
      function popProp(propSuffix, modifier) {
        var propName = '' + size + propSuffix;
        var propValue = elementProps[propName];

        if (propValue != null) {
          classes.push((0, _bootstrapUtils.prefix)(bsProps, '' + size + modifier + '-' + propValue));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');

      var hiddenPropName = size + 'Hidden';
      if (elementProps[hiddenPropName]) {
        classes.push('hidden-' + size);
      }
      delete elementProps[hiddenPropName];
    });

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Col;
}(_react2['default'].Component);

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('col', Col);
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],57:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _capitalize = require('./utils/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem['offset' + (0, _capitalize2['default'])(dimension)];
  var margins = MARGINS[dimension];

  return value + parseInt((0, _style2['default'])(elem, margins[0]), 10) + parseInt((0, _style2['default'])(elem, margins[1]), 10);
}

var propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  'in': _react2['default'].PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: _react2['default'].PropTypes.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2['default'].PropTypes.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: _react2['default'].PropTypes.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to expand
   */
  onEntering: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has expanded
   */
  onEntered: _react2['default'].PropTypes.func,
  /**
   * Callback fired before the component collapses
   */
  onExit: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has collapsed
   */
  onExited: _react2['default'].PropTypes.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['height', 'width']), _react2['default'].PropTypes.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: _react2['default'].PropTypes.func,

  /**
   * ARIA role of collapsible element
   */
  role: _react2['default'].PropTypes.string
};

var defaultProps = {
  'in': false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false,

  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse = function (_React$Component) {
  (0, _inherits3['default'])(Collapse, _React$Component);

  function Collapse(props, context) {
    (0, _classCallCheck3['default'])(this, Collapse);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleEnter = _this.handleEnter.bind(_this);
    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleEntered = _this.handleEntered.bind(_this);
    _this.handleExit = _this.handleExit.bind(_this);
    _this.handleExiting = _this.handleExiting.bind(_this);
    return _this;
  }

  /* -- Expanding -- */


  Collapse.prototype.handleEnter = function handleEnter(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = '0';
  };

  Collapse.prototype.handleEntering = function handleEntering(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
  };

  Collapse.prototype.handleEntered = function handleEntered(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = null;
  };

  /* -- Collapsing -- */


  Collapse.prototype.handleExit = function handleExit(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
  };

  Collapse.prototype.handleExiting = function handleExiting(elem) {
    var dimension = this._dimension();

    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';
  };

  Collapse.prototype._dimension = function _dimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  };

  // for testing


  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    return elem['scroll' + (0, _capitalize2['default'])(dimension)] + 'px';
  };

  Collapse.prototype.render = function render() {
    var _props = this.props;
    var onEnter = _props.onEnter;
    var onEntering = _props.onEntering;
    var onEntered = _props.onEntered;
    var onExit = _props.onExit;
    var onExiting = _props.onExiting;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);


    delete props.dimension;
    delete props.getDimensionValue;

    var handleEnter = (0, _createChainedFunction2['default'])(this.handleEnter, onEnter);
    var handleEntering = (0, _createChainedFunction2['default'])(this.handleEntering, onEntering);
    var handleEntered = (0, _createChainedFunction2['default'])(this.handleEntered, onEntered);
    var handleExit = (0, _createChainedFunction2['default'])(this.handleExit, onExit);
    var handleExiting = (0, _createChainedFunction2['default'])(this.handleExiting, onExiting);

    var classes = {
      width: this._dimension() === 'width'
    };

    return _react2['default'].createElement(_Transition2['default'], (0, _extends3['default'])({}, props, {
      'aria-expanded': props.role ? props['in'] : null,
      className: (0, _classnames2['default'])(className, classes),
      exitedClassName: 'collapse',
      exitingClassName: 'collapsing',
      enteredClassName: 'collapse in',
      enteringClassName: 'collapsing',
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }));
  };

  return Collapse;
}(_react2['default'].Component);

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

exports['default'] = Collapse;
module.exports = exports['default'];
},{"./utils/capitalize":135,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"dom-helpers/style":260,"react":"react","react-overlays/lib/Transition":278}],58:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: _react2['default'].PropTypes.string,
  srOnly: _react2['default'].PropTypes.bool
};

var defaultProps = {
  srOnly: false
};

var contextTypes = {
  $bs_formGroup: _react2['default'].PropTypes.object
};

var ControlLabel = function (_React$Component) {
  (0, _inherits3['default'])(ControlLabel, _React$Component);

  function ControlLabel() {
    (0, _classCallCheck3['default'])(this, ControlLabel);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ControlLabel.prototype.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props;
    var _props$htmlFor = _props.htmlFor;
    var htmlFor = _props$htmlFor === undefined ? controlId : _props$htmlFor;
    var srOnly = _props.srOnly;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['htmlFor', 'srOnly', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(controlId == null || htmlFor === controlId, '`controlId` is ignored on `<ControlLabel>` when `htmlFor` is specified.') : void 0;

    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      'sr-only': srOnly
    });

    return _react2['default'].createElement('label', (0, _extends3['default'])({}, elementProps, {
      htmlFor: htmlFor,
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ControlLabel;
}(_react2['default'].Component);

ControlLabel.propTypes = propTypes;
ControlLabel.defaultProps = defaultProps;
ControlLabel.contextTypes = contextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('control-label', ControlLabel);
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./utils/bootstrapUtils":134,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","warning":295}],59:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _all = require('react-prop-types/lib/all');

var _all2 = _interopRequireDefault(_all);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _isRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = require('./DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _PropTypes = require('./utils/PropTypes');

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TOGGLE_ROLE = _DropdownToggle2['default'].defaultProps.bsRole;
var MENU_ROLE = _DropdownMenu2['default'].defaultProps.bsRole;

var propTypes = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: _react2['default'].PropTypes.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: (0, _isRequiredForA11y2['default'])(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  componentClass: _elementType2['default'],

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle>` or a `<Dropdown.Menu>`.
   * @type {node}
   */
  children: (0, _all2['default'])((0, _PropTypes.requiredRoles)(TOGGLE_ROLE, MENU_ROLE), (0, _PropTypes.exclusiveRoles)(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: _react2['default'].PropTypes.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: _react2['default'].PropTypes.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: _react2['default'].PropTypes.bool,

  /**
   * A callback fired when the Dropdown closes.
   */
  onClose: _react2['default'].PropTypes.func,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value.
   *
   * ```js
   * function(Boolean isOpen) {}
   * ```
   * @controllable open
   */
  onToggle: _react2['default'].PropTypes.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: _react2['default'].PropTypes.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: _react2['default'].PropTypes.string
};

var defaultProps = {
  componentClass: _ButtonGroup2['default']
};

var Dropdown = function (_React$Component) {
  (0, _inherits3['default'])(Dropdown, _React$Component);

  function Dropdown(props, context) {
    (0, _classCallCheck3['default'])(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);

    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  Dropdown.prototype.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  Dropdown.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = (0, _contains2['default'])(_reactDom2['default'].findDOMNode(this.menu), (0, _activeElement2['default'])(document));
    }
  };

  Dropdown.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var open = this.props.open;

    var prevOpen = prevProps.open;

    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }

    if (!open && prevOpen) {
      // if focus hasn't already moved from the menu lets return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  Dropdown.prototype.handleClick = function handleClick() {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen('click');
  };

  Dropdown.prototype.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case _keycode2['default'].codes.down:
        if (!this.props.open) {
          this.toggleOpen('keydown');
        } else if (this.menu.focusNext) {
          this.menu.focusNext();
        }
        event.preventDefault();
        break;
      case _keycode2['default'].codes.esc:
      case _keycode2['default'].codes.tab:
        this.handleClose(event);
        break;
      default:
    }
  };

  Dropdown.prototype.toggleOpen = function toggleOpen(eventType) {
    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventType;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open);
    }
  };

  Dropdown.prototype.handleClose = function handleClose() {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen(null);
  };

  Dropdown.prototype.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.menu;

    if (!menu.focusNext) {
      return;
    }

    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
      menu.focusNext();
    }
  };

  Dropdown.prototype.focus = function focus() {
    var toggle = _reactDom2['default'].findDOMNode(this.toggle);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  Dropdown.prototype.renderToggle = function renderToggle(child, props) {
    var _this2 = this;

    var ref = function ref(c) {
      _this2.toggle = c;
    };

    if (typeof child.ref === 'string') {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(false, 'String refs are not supported on `<Dropdown.Toggle>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = (0, _createChainedFunction2['default'])(child.ref, ref);
    }

    return (0, _react.cloneElement)(child, (0, _extends3['default'])({}, props, {
      ref: ref,
      bsClass: (0, _bootstrapUtils.prefix)(props, 'toggle'),
      onClick: (0, _createChainedFunction2['default'])(child.props.onClick, this.handleClick),
      onKeyDown: (0, _createChainedFunction2['default'])(child.props.onKeyDown, this.handleKeyDown)
    }));
  };

  Dropdown.prototype.renderMenu = function renderMenu(child, _ref) {
    var _this3 = this;

    var id = _ref.id;
    var onClose = _ref.onClose;
    var onSelect = _ref.onSelect;
    var props = (0, _objectWithoutProperties3['default'])(_ref, ['id', 'onClose', 'onSelect']);

    var ref = function ref(c) {
      _this3.menu = c;
    };

    if (typeof child.ref === 'string') {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(false, 'String refs are not supported on `<Dropdown.Menu>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = (0, _createChainedFunction2['default'])(child.ref, ref);
    }

    return (0, _react.cloneElement)(child, (0, _extends3['default'])({}, props, {
      ref: ref,
      labelledBy: id,
      bsClass: (0, _bootstrapUtils.prefix)(props, 'menu'),
      onClose: (0, _createChainedFunction2['default'])(child.props.onClose, onClose, this.handleClose),
      onSelect: (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect, this.handleClose)
    }));
  };

  Dropdown.prototype.render = function render() {
    var _classes,
        _this4 = this;

    var _props = this.props;
    var Component = _props.componentClass;
    var id = _props.id;
    var dropup = _props.dropup;
    var disabled = _props.disabled;
    var pullRight = _props.pullRight;
    var open = _props.open;
    var onClose = _props.onClose;
    var onSelect = _props.onSelect;
    var role = _props.role;
    var bsClass = _props.bsClass;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'id', 'dropup', 'disabled', 'pullRight', 'open', 'onClose', 'onSelect', 'role', 'bsClass', 'className', 'children']);


    delete props.onToggle;

    var classes = (_classes = {}, _classes[bsClass] = true, _classes.open = open, _classes.disabled = disabled, _classes);

    if (dropup) {
      classes[bsClass] = false;
      classes.dropup = true;
    }

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    return _react2['default'].createElement(
      Component,
      (0, _extends3['default'])({}, props, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        switch (child.props.bsRole) {
          case TOGGLE_ROLE:
            return _this4.renderToggle(child, {
              id: id, disabled: disabled, open: open, role: role, bsClass: bsClass
            });
          case MENU_ROLE:
            return _this4.renderMenu(child, {
              id: id, open: open, pullRight: pullRight, bsClass: bsClass, onClose: onClose, onSelect: onSelect
            });
          default:
            return child;
        }
      })
    );
  };

  return Dropdown;
}(_react2['default'].Component);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

(0, _bootstrapUtils.bsClass)('dropdown', Dropdown);

var UncontrolledDropdown = (0, _uncontrollable2['default'])(Dropdown, { open: 'onToggle' });

UncontrolledDropdown.Toggle = _DropdownToggle2['default'];
UncontrolledDropdown.Menu = _DropdownMenu2['default'];

exports['default'] = UncontrolledDropdown;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./ButtonGroup":49,"./DropdownMenu":61,"./DropdownToggle":62,"./utils/PropTypes":130,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"dom-helpers/activeElement":241,"dom-helpers/query/contains":251,"keycode":271,"react":"react","react-dom":"react-dom","react-prop-types/lib/all":287,"react-prop-types/lib/elementType":289,"react-prop-types/lib/isRequiredForA11y":290,"uncontrollable":293,"warning":295}],60:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _splitComponentProps2 = require('./utils/splitComponentProps');

var _splitComponentProps3 = _interopRequireDefault(_splitComponentProps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _Dropdown2['default'].propTypes, {

  // Toggle props.
  bsStyle: _react2['default'].PropTypes.string,
  bsSize: _react2['default'].PropTypes.string,
  title: _react2['default'].PropTypes.node.isRequired,
  noCaret: _react2['default'].PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: _react2['default'].PropTypes.node
});

var DropdownButton = function (_React$Component) {
  (0, _inherits3['default'])(DropdownButton, _React$Component);

  function DropdownButton() {
    (0, _classCallCheck3['default'])(this, DropdownButton);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  DropdownButton.prototype.render = function render() {
    var _props = this.props;
    var bsSize = _props.bsSize;
    var bsStyle = _props.bsStyle;
    var title = _props.title;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['bsSize', 'bsStyle', 'title', 'children']);

    var _splitComponentProps = (0, _splitComponentProps3['default'])(props, _Dropdown2['default'].ControlledComponent);

    var dropdownProps = _splitComponentProps[0];
    var toggleProps = _splitComponentProps[1];


    return _react2['default'].createElement(
      _Dropdown2['default'],
      (0, _extends3['default'])({}, dropdownProps, {
        bsSize: bsSize,
        bsStyle: bsStyle
      }),
      _react2['default'].createElement(
        _Dropdown2['default'].Toggle,
        (0, _extends3['default'])({}, toggleProps, {
          bsSize: bsSize,
          bsStyle: bsStyle
        }),
        title
      ),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        children
      )
    );
  };

  return DropdownButton;
}(_react2['default'].Component);

DropdownButton.propTypes = propTypes;

exports['default'] = DropdownButton;
module.exports = exports['default'];
},{"./Dropdown":59,"./utils/splitComponentProps":139,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react"}],61:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _RootCloseWrapper = require('react-overlays/lib/RootCloseWrapper');

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  open: _react2['default'].PropTypes.bool,
  pullRight: _react2['default'].PropTypes.bool,
  onClose: _react2['default'].PropTypes.func,
  labelledBy: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  onSelect: _react2['default'].PropTypes.func
};

var defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

var DropdownMenu = function (_React$Component) {
  (0, _inherits3['default'])(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    (0, _classCallCheck3['default'])(this, DropdownMenu);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  DropdownMenu.prototype.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case _keycode2['default'].codes.down:
        this.focusNext();
        event.preventDefault();
        break;
      case _keycode2['default'].codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;
      case _keycode2['default'].codes.esc:
      case _keycode2['default'].codes.tab:
        this.props.onClose(event);
        break;
      default:
    }
  };

  DropdownMenu.prototype.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeIndex = items.indexOf(document.activeElement);

    return { items: items, activeIndex: activeIndex };
  };

  DropdownMenu.prototype.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = _reactDom2['default'].findDOMNode(this);
    if (!node) {
      return [];
    }

    return (0, _from2['default'])(node.querySelectorAll('[tabIndex="-1"]'));
  };

  DropdownMenu.prototype.focusNext = function focusNext() {
    var _getItemsAndActiveInd = this.getItemsAndActiveIndex();

    var items = _getItemsAndActiveInd.items;
    var activeIndex = _getItemsAndActiveInd.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  DropdownMenu.prototype.focusPrevious = function focusPrevious() {
    var _getItemsAndActiveInd2 = this.getItemsAndActiveIndex();

    var items = _getItemsAndActiveInd2.items;
    var activeIndex = _getItemsAndActiveInd2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  DropdownMenu.prototype.render = function render() {
    var _extends2,
        _this2 = this;

    var _props = this.props;
    var open = _props.open;
    var pullRight = _props.pullRight;
    var onClose = _props.onClose;
    var labelledBy = _props.labelledBy;
    var onSelect = _props.onSelect;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['open', 'pullRight', 'onClose', 'labelledBy', 'onSelect', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'right')] = pullRight, _extends2));

    var list = _react2['default'].createElement(
      'ul',
      (0, _extends4['default'])({}, elementProps, {
        role: 'menu',
        className: (0, _classnames2['default'])(className, classes),
        'aria-labelledby': labelledBy
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        return _react2['default'].cloneElement(child, {
          onKeyDown: (0, _createChainedFunction2['default'])(child.props.onKeyDown, _this2.handleKeyDown),
          onSelect: (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect)
        });
      })
    );

    if (open) {
      return _react2['default'].createElement(
        _RootCloseWrapper2['default'],
        { noWrap: true, onRootClose: onClose },
        list
      );
    }

    return list;
  };

  return DropdownMenu;
}(_react2['default'].Component);

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('dropdown-menu', DropdownMenu);
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"babel-runtime/core-js/array/from":140,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"keycode":271,"react":"react","react-dom":"react-dom","react-overlays/lib/RootCloseWrapper":277}],62:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  noCaret: _react2['default'].PropTypes.bool,
  open: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.string,
  useAnchor: _react2['default'].PropTypes.bool
};

var defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

var DropdownToggle = function (_React$Component) {
  (0, _inherits3['default'])(DropdownToggle, _React$Component);

  function DropdownToggle() {
    (0, _classCallCheck3['default'])(this, DropdownToggle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  DropdownToggle.prototype.render = function render() {
    var _props = this.props;
    var noCaret = _props.noCaret;
    var open = _props.open;
    var useAnchor = _props.useAnchor;
    var bsClass = _props.bsClass;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['noCaret', 'open', 'useAnchor', 'bsClass', 'className', 'children']);


    delete props.bsRole;

    var Component = useAnchor ? _SafeAnchor2['default'] : _Button2['default'];
    var useCaret = !noCaret;

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    // FIXME: Should this really fall back to `title` as children?

    return _react2['default'].createElement(
      Component,
      (0, _extends3['default'])({}, props, {
        role: 'button',
        className: (0, _classnames2['default'])(className, bsClass),
        'aria-haspopup': true,
        'aria-expanded': open
      }),
      children || props.title,
      useCaret && ' ',
      useCaret && _react2['default'].createElement('span', { className: 'caret' })
    );
  };

  return DropdownToggle;
}(_react2['default'].Component);

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('dropdown-toggle', DropdownToggle);
module.exports = exports['default'];
},{"./Button":48,"./SafeAnchor":117,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],63:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  'in': _react2['default'].PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: _react2['default'].PropTypes.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2['default'].PropTypes.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: _react2['default'].PropTypes.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: _react2['default'].PropTypes.func,
  /**
   * Callback fired before the component fades out
   */
  onExit: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: _react2['default'].PropTypes.func
};

var defaultProps = {
  'in': false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false
};

var Fade = function (_React$Component) {
  (0, _inherits3['default'])(Fade, _React$Component);

  function Fade() {
    (0, _classCallCheck3['default'])(this, Fade);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Fade.prototype.render = function render() {
    return _react2['default'].createElement(_Transition2['default'], (0, _extends3['default'])({}, this.props, {
      className: (0, _classnames2['default'])(this.props.className, 'fade'),
      enteredClassName: 'in',
      enteringClassName: 'in'
    }));
  };

  return Fade;
}(_react2['default'].Component);

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

exports['default'] = Fade;
module.exports = exports['default'];
},{"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-overlays/lib/Transition":278}],64:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  horizontal: _react2['default'].PropTypes.bool,
  inline: _react2['default'].PropTypes.bool,
  componentClass: _elementType2['default']
};

var defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form'
};

var Form = function (_React$Component) {
  (0, _inherits3['default'])(Form, _React$Component);

  function Form() {
    (0, _classCallCheck3['default'])(this, Form);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Form.prototype.render = function render() {
    var _props = this.props;
    var horizontal = _props.horizontal;
    var inline = _props.inline;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['horizontal', 'inline', 'componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = [];
    if (horizontal) {
      classes.push((0, _bootstrapUtils.prefix)(bsProps, 'horizontal'));
    }
    if (inline) {
      classes.push((0, _bootstrapUtils.prefix)(bsProps, 'inline'));
    }

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Form;
}(_react2['default'].Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('form', Form);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],65:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _FormControlFeedback = require('./FormControlFeedback');

var _FormControlFeedback2 = _interopRequireDefault(_FormControlFeedback);

var _FormControlStatic = require('./FormControlStatic');

var _FormControlStatic2 = _interopRequireDefault(_FormControlStatic);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default'],
  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: _react2['default'].PropTypes.string,
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: _react2['default'].PropTypes.string
};

var defaultProps = {
  componentClass: 'input'
};

var contextTypes = {
  $bs_formGroup: _react2['default'].PropTypes.object
};

var FormControl = function (_React$Component) {
  (0, _inherits3['default'])(FormControl, _React$Component);

  function FormControl() {
    (0, _classCallCheck3['default'])(this, FormControl);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  FormControl.prototype.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props;
    var Component = _props.componentClass;
    var type = _props.type;
    var _props$id = _props.id;
    var id = _props$id === undefined ? controlId : _props$id;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'type', 'id', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;

    // input[type="file"] should not have .form-control.
    var classes = void 0;
    if (type !== 'file') {
      classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    }

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      type: type,
      id: id,
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return FormControl;
}(_react2['default'].Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
FormControl.contextTypes = contextTypes;

FormControl.Feedback = _FormControlFeedback2['default'];
FormControl.Static = _FormControlStatic2['default'];

exports['default'] = (0, _bootstrapUtils.bsClass)('form-control', FormControl);
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./FormControlFeedback":66,"./FormControlStatic":67,"./utils/bootstrapUtils":134,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289,"warning":295}],66:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = {
  bsRole: 'feedback'
};

var contextTypes = {
  $bs_formGroup: _react2['default'].PropTypes.object
};

var FormControlFeedback = function (_React$Component) {
  (0, _inherits3['default'])(FormControlFeedback, _React$Component);

  function FormControlFeedback() {
    (0, _classCallCheck3['default'])(this, FormControlFeedback);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  FormControlFeedback.prototype.getGlyph = function getGlyph(validationState) {
    switch (validationState) {
      case 'success':
        return 'ok';
      case 'warning':
        return 'warning-sign';
      case 'error':
        return 'remove';
      default:
        return null;
    }
  };

  FormControlFeedback.prototype.renderDefaultFeedback = function renderDefaultFeedback(formGroup, className, classes, elementProps) {
    var glyph = this.getGlyph(formGroup && formGroup.validationState);
    if (!glyph) {
      return null;
    }

    return _react2['default'].createElement(_Glyphicon2['default'], (0, _extends3['default'])({}, elementProps, {
      glyph: glyph,
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  FormControlFeedback.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    if (!children) {
      return this.renderDefaultFeedback(this.context.$bs_formGroup, className, classes, elementProps);
    }

    var child = _react2['default'].Children.only(children);
    return _react2['default'].cloneElement(child, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(child.props.className, className, classes)
    }));
  };

  return FormControlFeedback;
}(_react2['default'].Component);

FormControlFeedback.defaultProps = defaultProps;
FormControlFeedback.contextTypes = contextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('form-control-feedback', FormControlFeedback);
module.exports = exports['default'];
},{"./Glyphicon":69,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],67:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'p'
};

var FormControlStatic = function (_React$Component) {
  (0, _inherits3['default'])(FormControlStatic, _React$Component);

  function FormControlStatic() {
    (0, _classCallCheck3['default'])(this, FormControlStatic);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  FormControlStatic.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return FormControlStatic;
}(_react2['default'].Component);

FormControlStatic.propTypes = propTypes;
FormControlStatic.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('form-control-static', FormControlStatic);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],68:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: _react2['default'].PropTypes.string,
  validationState: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error'])
};

var childContextTypes = {
  $bs_formGroup: _react2['default'].PropTypes.object.isRequired
};

var FormGroup = function (_React$Component) {
  (0, _inherits3['default'])(FormGroup, _React$Component);

  function FormGroup() {
    (0, _classCallCheck3['default'])(this, FormGroup);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  FormGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props;
    var controlId = _props.controlId;
    var validationState = _props.validationState;


    return {
      $bs_formGroup: {
        controlId: controlId,
        validationState: validationState
      }
    };
  };

  FormGroup.prototype.hasFeedback = function hasFeedback(children) {
    var _this2 = this;

    return _ValidComponentChildren2['default'].some(children, function (child) {
      return child.props.bsRole === 'feedback' || child.props.children && _this2.hasFeedback(child.props.children);
    });
  };

  FormGroup.prototype.render = function render() {
    var _props2 = this.props;
    var validationState = _props2.validationState;
    var className = _props2.className;
    var children = _props2.children;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['validationState', 'className', 'children']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['controlId']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      'has-feedback': this.hasFeedback(children)
    });
    if (validationState) {
      classes['has-' + validationState] = true;
    }

    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      children
    );
  };

  return FormGroup;
}(_react2['default'].Component);

FormGroup.propTypes = propTypes;
FormGroup.childContextTypes = childContextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('form-group', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], FormGroup));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],69:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * An icon name. See e.g. http://getbootstrap.com/components/#glyphicons
   */
  glyph: _react2['default'].PropTypes.string.isRequired
};

var Glyphicon = function (_React$Component) {
  (0, _inherits3['default'])(Glyphicon, _React$Component);

  function Glyphicon() {
    (0, _classCallCheck3['default'])(this, Glyphicon);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Glyphicon.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var glyph = _props.glyph;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['glyph', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, glyph)] = true, _extends2));

    return _react2['default'].createElement('span', (0, _extends4['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Glyphicon;
}(_react2['default'].Component);

Glyphicon.propTypes = propTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('glyphicon', Glyphicon);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],70:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: _react2['default'].PropTypes.bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div',
  fluid: false
};

var Grid = function (_React$Component) {
  (0, _inherits3['default'])(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck3['default'])(this, Grid);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Grid.prototype.render = function render() {
    var _props = this.props;
    var fluid = _props.fluid;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['fluid', 'componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.prefix)(bsProps, fluid && 'fluid');

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Grid;
}(_react2['default'].Component);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('container', Grid);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],71:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var HelpBlock = function (_React$Component) {
  (0, _inherits3['default'])(HelpBlock, _React$Component);

  function HelpBlock() {
    (0, _classCallCheck3['default'])(this, HelpBlock);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  HelpBlock.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('span', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return HelpBlock;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('help-block', HelpBlock);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],72:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Sets image as responsive image
   */
  responsive: _react2['default'].PropTypes.bool,

  /**
   * Sets image shape as rounded
   */
  rounded: _react2['default'].PropTypes.bool,

  /**
   * Sets image shape as circle
   */
  circle: _react2['default'].PropTypes.bool,

  /**
   * Sets image shape as thumbnail
   */
  thumbnail: _react2['default'].PropTypes.bool
};

var defaultProps = {
  responsive: false,
  rounded: false,
  circle: false,
  thumbnail: false
};

var Image = function (_React$Component) {
  (0, _inherits3['default'])(Image, _React$Component);

  function Image() {
    (0, _classCallCheck3['default'])(this, Image);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Image.prototype.render = function render() {
    var _classes;

    var _props = this.props;
    var responsive = _props.responsive;
    var rounded = _props.rounded;
    var circle = _props.circle;
    var thumbnail = _props.thumbnail;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['responsive', 'rounded', 'circle', 'thumbnail', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (_classes = {}, _classes[(0, _bootstrapUtils.prefix)(bsProps, 'responsive')] = responsive, _classes[(0, _bootstrapUtils.prefix)(bsProps, 'rounded')] = rounded, _classes[(0, _bootstrapUtils.prefix)(bsProps, 'circle')] = circle, _classes[(0, _bootstrapUtils.prefix)(bsProps, 'thumbnail')] = thumbnail, _classes);

    return _react2['default'].createElement('img', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Image;
}(_react2['default'].Component);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('img', Image);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],73:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputGroupAddon = require('./InputGroupAddon');

var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);

var _InputGroupButton = require('./InputGroupButton');

var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var InputGroup = function (_React$Component) {
  (0, _inherits3['default'])(InputGroup, _React$Component);

  function InputGroup() {
    (0, _classCallCheck3['default'])(this, InputGroup);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  InputGroup.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('span', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return InputGroup;
}(_react2['default'].Component);

InputGroup.Addon = _InputGroupAddon2['default'];
InputGroup.Button = _InputGroupButton2['default'];

exports['default'] = (0, _bootstrapUtils.bsClass)('input-group', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], InputGroup));
module.exports = exports['default'];
},{"./InputGroupAddon":74,"./InputGroupButton":75,"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],74:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var InputGroupAddon = function (_React$Component) {
  (0, _inherits3['default'])(InputGroupAddon, _React$Component);

  function InputGroupAddon() {
    (0, _classCallCheck3['default'])(this, InputGroupAddon);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  InputGroupAddon.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('span', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return InputGroupAddon;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('input-group-addon', InputGroupAddon);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],75:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var InputGroupButton = function (_React$Component) {
  (0, _inherits3['default'])(InputGroupButton, _React$Component);

  function InputGroupButton() {
    (0, _classCallCheck3['default'])(this, InputGroupButton);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  InputGroupButton.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('span', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return InputGroupButton;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('input-group-btn', InputGroupButton);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],76:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div'
};

var Jumbotron = function (_React$Component) {
  (0, _inherits3['default'])(Jumbotron, _React$Component);

  function Jumbotron() {
    (0, _classCallCheck3['default'])(this, Jumbotron);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Jumbotron.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Jumbotron;
}(_react2['default'].Component);

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('jumbotron', Jumbotron);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],77:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Label = function (_React$Component) {
  (0, _inherits3['default'])(Label, _React$Component);

  function Label() {
    (0, _classCallCheck3['default'])(this, Label);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Label.prototype.hasContent = function hasContent(children) {
    var result = false;

    _react2['default'].Children.forEach(children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  Label.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return _react2['default'].createElement(
      'span',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      children
    );
  };

  return Label;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('label', (0, _bootstrapUtils.bsStyles)([].concat((0, _values2['default'])(_StyleConfig.State), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY]), _StyleConfig.Style.DEFAULT, Label));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/core-js/object/values":145,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],78:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _ListGroupItem = require('./ListGroupItem');

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: _elementType2['default']
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (_ValidComponentChildren2['default'].some(children, function (child) {
    return child.type !== _ListGroupItem2['default'] || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }

  return 'ul';
}

var ListGroup = function (_React$Component) {
  (0, _inherits3['default'])(ListGroup, _React$Component);

  function ListGroup() {
    (0, _classCallCheck3['default'])(this, ListGroup);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ListGroup.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var _props$componentClass = _props.componentClass;
    var Component = _props$componentClass === undefined ? getDefaultComponent(children) : _props$componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['children', 'componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    var useListItem = Component === 'ul' && _ValidComponentChildren2['default'].every(children, function (child) {
      return child.type === _ListGroupItem2['default'];
    });

    return _react2['default'].createElement(
      Component,
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      useListItem ? _ValidComponentChildren2['default'].map(children, function (child) {
        return (0, _react.cloneElement)(child, { listItem: true });
      }) : children
    );
  };

  return ListGroup;
}(_react2['default'].Component);

ListGroup.propTypes = propTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('list-group', ListGroup);
module.exports = exports['default'];
},{"./ListGroupItem":79,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],79:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  active: _react2['default'].PropTypes.any,
  disabled: _react2['default'].PropTypes.any,
  header: _react2['default'].PropTypes.node,
  listItem: _react2['default'].PropTypes.bool,
  onClick: _react2['default'].PropTypes.func,
  href: _react2['default'].PropTypes.string,
  type: _react2['default'].PropTypes.string
};

var defaultProps = {
  listItem: false
};

var ListGroupItem = function (_React$Component) {
  (0, _inherits3['default'])(ListGroupItem, _React$Component);

  function ListGroupItem() {
    (0, _classCallCheck3['default'])(this, ListGroupItem);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ListGroupItem.prototype.renderHeader = function renderHeader(header, headingClassName) {
    if (_react2['default'].isValidElement(header)) {
      return (0, _react.cloneElement)(header, {
        className: (0, _classnames2['default'])(header.props.className, headingClassName)
      });
    }

    return _react2['default'].createElement(
      'h4',
      { className: headingClassName },
      header
    );
  };

  ListGroupItem.prototype.render = function render() {
    var _props = this.props;
    var active = _props.active;
    var disabled = _props.disabled;
    var className = _props.className;
    var header = _props.header;
    var listItem = _props.listItem;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'disabled', 'className', 'header', 'listItem', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      active: active,
      disabled: disabled
    });

    var Component = void 0;

    if (elementProps.href) {
      Component = 'a';
    } else if (elementProps.onClick) {
      Component = 'button';
      elementProps.type = elementProps.type || 'button';
    } else if (listItem) {
      Component = 'li';
    } else {
      Component = 'span';
    }

    elementProps.className = (0, _classnames2['default'])(className, classes);

    // TODO: Deprecate `header` prop.
    if (header) {
      return _react2['default'].createElement(
        Component,
        elementProps,
        this.renderHeader(header, (0, _bootstrapUtils.prefix)(bsProps, 'heading')),
        _react2['default'].createElement(
          'p',
          { className: (0, _bootstrapUtils.prefix)(bsProps, 'text') },
          children
        )
      );
    }

    return _react2['default'].createElement(
      Component,
      elementProps,
      children
    );
  };

  return ListGroupItem;
}(_react2['default'].Component);

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('list-group-item', (0, _bootstrapUtils.bsStyles)((0, _values2['default'])(_StyleConfig.State), ListGroupItem));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/core-js/object/values":145,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],80:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _MediaBody = require('./MediaBody');

var _MediaBody2 = _interopRequireDefault(_MediaBody);

var _MediaHeading = require('./MediaHeading');

var _MediaHeading2 = _interopRequireDefault(_MediaHeading);

var _MediaLeft = require('./MediaLeft');

var _MediaLeft2 = _interopRequireDefault(_MediaLeft);

var _MediaList = require('./MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

var _MediaListItem = require('./MediaListItem');

var _MediaListItem2 = _interopRequireDefault(_MediaListItem);

var _MediaRight = require('./MediaRight');

var _MediaRight2 = _interopRequireDefault(_MediaRight);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div'
};

var Media = function (_React$Component) {
  (0, _inherits3['default'])(Media, _React$Component);

  function Media() {
    (0, _classCallCheck3['default'])(this, Media);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Media.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Media;
}(_react2['default'].Component);

Media.propTypes = propTypes;
Media.defaultProps = defaultProps;

Media.Heading = _MediaHeading2['default'];
Media.Body = _MediaBody2['default'];
Media.Left = _MediaLeft2['default'];
Media.Right = _MediaRight2['default'];
Media.List = _MediaList2['default'];
Media.ListItem = _MediaListItem2['default'];

exports['default'] = (0, _bootstrapUtils.bsClass)('media', Media);
module.exports = exports['default'];
},{"./MediaBody":81,"./MediaHeading":82,"./MediaLeft":83,"./MediaList":84,"./MediaListItem":85,"./MediaRight":86,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],81:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div'
};

var MediaBody = function (_React$Component) {
  (0, _inherits3['default'])(MediaBody, _React$Component);

  function MediaBody() {
    (0, _classCallCheck3['default'])(this, MediaBody);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  MediaBody.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return MediaBody;
}(_react2['default'].Component);

MediaBody.propTypes = propTypes;
MediaBody.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('media-body', MediaBody);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],82:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'h4'
};

var MediaHeading = function (_React$Component) {
  (0, _inherits3['default'])(MediaHeading, _React$Component);

  function MediaHeading() {
    (0, _classCallCheck3['default'])(this, MediaHeading);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  MediaHeading.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return MediaHeading;
}(_react2['default'].Component);

MediaHeading.propTypes = propTypes;
MediaHeading.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('media-heading', MediaHeading);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],83:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom'])
};

var MediaLeft = function (_React$Component) {
  (0, _inherits3['default'])(MediaLeft, _React$Component);

  function MediaLeft() {
    (0, _classCallCheck3['default'])(this, MediaLeft);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  MediaLeft.prototype.render = function render() {
    var _props = this.props;
    var align = _props.align;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['align', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[(0, _bootstrapUtils.prefix)(_Media2['default'].defaultProps, align)] = true;
    }

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return MediaLeft;
}(_react2['default'].Component);

MediaLeft.propTypes = propTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('media-left', MediaLeft);
module.exports = exports['default'];
},{"./Media":80,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],84:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MediaList = function (_React$Component) {
  (0, _inherits3['default'])(MediaList, _React$Component);

  function MediaList() {
    (0, _classCallCheck3['default'])(this, MediaList);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  MediaList.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('ul', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return MediaList;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('media-list', MediaList);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],85:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MediaListItem = function (_React$Component) {
  (0, _inherits3['default'])(MediaListItem, _React$Component);

  function MediaListItem() {
    (0, _classCallCheck3['default'])(this, MediaListItem);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  MediaListItem.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('li', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return MediaListItem;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('media', MediaListItem);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],86:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom'])
};

var MediaRight = function (_React$Component) {
  (0, _inherits3['default'])(MediaRight, _React$Component);

  function MediaRight() {
    (0, _classCallCheck3['default'])(this, MediaRight);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  MediaRight.prototype.render = function render() {
    var _props = this.props;
    var align = _props.align;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['align', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-right-top`.
      classes[(0, _bootstrapUtils.prefix)(_Media2['default'].defaultProps, align)] = true;
    }

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return MediaRight;
}(_react2['default'].Component);

MediaRight.propTypes = propTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('media-right', MediaRight);
module.exports = exports['default'];
},{"./Media":80,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],87:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _all = require('react-prop-types/lib/all');

var _all2 = _interopRequireDefault(_all);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: _react2['default'].PropTypes.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: _react2['default'].PropTypes.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
    var divider = _ref.divider;
    var children = _ref.children;
    return divider && children ? new Error('Children will not be rendered for dividers') : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: _react2['default'].PropTypes.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: _react2['default'].PropTypes.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: _react2['default'].PropTypes.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: _react2['default'].PropTypes.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: _react2['default'].PropTypes.func
};

var defaultProps = {
  divider: false,
  disabled: false,
  header: false
};

var MenuItem = function (_React$Component) {
  (0, _inherits3['default'])(MenuItem, _React$Component);

  function MenuItem(props, context) {
    (0, _classCallCheck3['default'])(this, MenuItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  MenuItem.prototype.handleClick = function handleClick(event) {
    var _props = this.props;
    var href = _props.href;
    var disabled = _props.disabled;
    var onSelect = _props.onSelect;
    var eventKey = _props.eventKey;


    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  MenuItem.prototype.render = function render() {
    var _props2 = this.props;
    var active = _props2.active;
    var disabled = _props2.disabled;
    var divider = _props2.divider;
    var header = _props2.header;
    var onClick = _props2.onClick;
    var className = _props2.className;
    var style = _props2.style;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['active', 'disabled', 'divider', 'header', 'onClick', 'className', 'style']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['eventKey', 'onSelect']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;

      return _react2['default'].createElement('li', (0, _extends3['default'])({}, elementProps, {
        role: 'separator',
        className: (0, _classnames2['default'])(className, 'divider'),
        style: style
      }));
    }

    if (header) {
      return _react2['default'].createElement('li', (0, _extends3['default'])({}, elementProps, {
        role: 'heading',
        className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(bsProps, 'header')),
        style: style
      }));
    }

    return _react2['default'].createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
        style: style
      },
      _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, elementProps, {
        role: 'menuitem',
        tabIndex: '-1',
        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
      }))
    );
  };

  return MenuItem;
}(_react2['default'].Component);

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('dropdown', MenuItem);
module.exports = exports['default'];
},{"./SafeAnchor":117,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/all":287}],88:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _events = require('dom-helpers/events');

var _events2 = _interopRequireDefault(_events);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('react-overlays/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _isOverflowing = require('react-overlays/lib/utils/isOverflowing');

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _splitComponentProps2 = require('./utils/splitComponentProps');

var _splitComponentProps3 = _interopRequireDefault(_splitComponentProps2);

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _Modal2['default'].propTypes, _ModalDialog2['default'].propTypes, {

  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _react2['default'].PropTypes.bool,

  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: _react2['default'].PropTypes.bool,

  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogComponentClass: _elementType2['default'],

  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: _react2['default'].PropTypes.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: _react2['default'].PropTypes.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: _react2['default'].PropTypes.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: _react2['default'].PropTypes.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _react2['default'].PropTypes.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _react2['default'].PropTypes.func,

  /**
   * @private
   */
  container: _Modal2['default'].propTypes.container
});

var defaultProps = (0, _extends3['default'])({}, _Modal2['default'].defaultProps, {
  animation: true,
  dialogComponentClass: _ModalDialog2['default']
});

var childContextTypes = {
  $bs_modal: _react2['default'].PropTypes.shape({
    onHide: _react2['default'].PropTypes.func
  })
};

var Modal = function (_React$Component) {
  (0, _inherits3['default'])(Modal, _React$Component);

  function Modal(props, context) {
    (0, _classCallCheck3['default'])(this, Modal);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleDialogClick = _this.handleDialogClick.bind(_this);

    _this.state = {
      style: {}
    };
    return _this;
  }

  Modal.prototype.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide
      }
    };
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  Modal.prototype.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    _events2['default'].on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  Modal.prototype.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    _events2['default'].off(window, 'resize', this.handleWindowResize);
  };

  Modal.prototype.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  Modal.prototype.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  Modal.prototype.updateStyle = function updateStyle() {
    if (!_inDOM2['default']) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();
    var dialogHeight = dialogNode.scrollHeight;

    var document = (0, _ownerDocument2['default'])(dialogNode);
    var bodyIsOverflowing = (0, _isOverflowing2['default'])(_reactDom2['default'].findDOMNode(this.props.container || document.body));
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize2['default'])() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize2['default'])() : undefined
      }
    });
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var backdrop = _props.backdrop;
    var animation = _props.animation;
    var show = _props.show;
    var Dialog = _props.dialogComponentClass;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var onEntering = _props.onEntering;
    var onExited = _props.onExited;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['backdrop', 'animation', 'show', 'dialogComponentClass', 'className', 'style', 'children', 'onEntering', 'onExited']);

    var _splitComponentProps = (0, _splitComponentProps3['default'])(props, _Modal2['default']);

    var baseModalProps = _splitComponentProps[0];
    var dialogProps = _splitComponentProps[1];


    var inClassName = show && !animation && 'in';

    return _react2['default'].createElement(
      _Modal2['default'],
      (0, _extends3['default'])({}, baseModalProps, {
        ref: function ref(c) {
          _this2._modal = c;
        },
        show: show,
        onEntering: (0, _createChainedFunction2['default'])(onEntering, this.handleEntering),
        onExited: (0, _createChainedFunction2['default'])(onExited, this.handleExited),
        backdrop: backdrop,
        backdropClassName: (0, _classnames2['default'])((0, _bootstrapUtils.prefix)(props, 'backdrop'), inClassName),
        containerClassName: (0, _bootstrapUtils.prefix)(props, 'open'),
        transition: animation ? _Fade2['default'] : undefined,
        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
      }),
      _react2['default'].createElement(
        Dialog,
        (0, _extends3['default'])({}, dialogProps, {
          style: (0, _extends3['default'])({}, this.state.style, style),
          className: (0, _classnames2['default'])(className, inClassName),
          onClick: backdrop === true ? this.handleDialogClick : null
        }),
        children
      )
    );
  };

  return Modal;
}(_react2['default'].Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

Modal.Body = _ModalBody2['default'];
Modal.Header = _ModalHeader2['default'];
Modal.Title = _ModalTitle2['default'];
Modal.Footer = _ModalFooter2['default'];

Modal.Dialog = _ModalDialog2['default'];

Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;

exports['default'] = (0, _bootstrapUtils.bsClass)('modal', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], Modal));
module.exports = exports['default'];
},{"./Fade":63,"./ModalBody":89,"./ModalDialog":90,"./ModalFooter":91,"./ModalHeader":92,"./ModalTitle":93,"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"./utils/splitComponentProps":139,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"dom-helpers/events":247,"dom-helpers/ownerDocument":250,"dom-helpers/util/inDOM":268,"dom-helpers/util/scrollbarSize":269,"react":"react","react-dom":"react-dom","react-overlays/lib/Modal":272,"react-overlays/lib/utils/isOverflowing":284,"react-prop-types/lib/elementType":289}],89:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ModalBody = function (_React$Component) {
  (0, _inherits3['default'])(ModalBody, _React$Component);

  function ModalBody() {
    (0, _classCallCheck3['default'])(this, ModalBody);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ModalBody.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ModalBody;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('modal-body', ModalBody);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],90:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: _react2['default'].PropTypes.string
};

var ModalDialog = function (_React$Component) {
  (0, _inherits3['default'])(ModalDialog, _React$Component);

  function ModalDialog() {
    (0, _classCallCheck3['default'])(this, ModalDialog);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ModalDialog.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var dialogClassName = _props.dialogClassName;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['dialogClassName', 'className', 'style', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var bsClassName = (0, _bootstrapUtils.prefix)(bsProps);

    var modalStyle = (0, _extends4['default'])({ display: 'block' }, style);

    var dialogClasses = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[bsClassName] = false, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'dialog')] = true, _extends2));

    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, elementProps, {
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: (0, _classnames2['default'])(className, bsClassName)
      }),
      _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(dialogClassName, dialogClasses) },
        _react2['default'].createElement(
          'div',
          { className: (0, _bootstrapUtils.prefix)(bsProps, 'content'), role: 'document' },
          children
        )
      )
    );
  };

  return ModalDialog;
}(_react2['default'].Component);

ModalDialog.propTypes = propTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('modal', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], ModalDialog));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],91:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ModalFooter = function (_React$Component) {
  (0, _inherits3['default'])(ModalFooter, _React$Component);

  function ModalFooter() {
    (0, _classCallCheck3['default'])(this, ModalFooter);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ModalFooter.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ModalFooter;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('modal-footer', ModalFooter);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],92:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: `aria-label` should be `closeLabel`.

var propTypes = {
  /**
   * The 'aria-label' attribute provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  'aria-label': _react2['default'].PropTypes.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: _react2['default'].PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: _react2['default'].PropTypes.func
};

var defaultProps = {
  'aria-label': 'Close',
  closeButton: false
};

var contextTypes = {
  $bs_modal: _react2['default'].PropTypes.shape({
    onHide: _react2['default'].PropTypes.func
  })
};

var ModalHeader = function (_React$Component) {
  (0, _inherits3['default'])(ModalHeader, _React$Component);

  function ModalHeader() {
    (0, _classCallCheck3['default'])(this, ModalHeader);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ModalHeader.prototype.render = function render() {
    var _props = this.props;
    var label = _props['aria-label'];
    var closeButton = _props.closeButton;
    var onHide = _props.onHide;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['aria-label', 'closeButton', 'onHide', 'className', 'children']);


    var modal = this.context.$bs_modal;

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      closeButton && _react2['default'].createElement(
        'button',
        {
          type: 'button',
          className: 'close',
          'aria-label': label,
          onClick: (0, _createChainedFunction2['default'])(modal.onHide, onHide)
        },
        _react2['default'].createElement(
          'span',
          { 'aria-hidden': 'true' },
          '×'
        )
      ),
      children
    );
  };

  return ModalHeader;
}(_react2['default'].Component);

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('modal-header', ModalHeader);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],93:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ModalTitle = function (_React$Component) {
  (0, _inherits3['default'])(ModalTitle, _React$Component);

  function ModalTitle() {
    (0, _classCallCheck3['default'])(this, ModalTitle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ModalTitle.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('h4', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ModalTitle;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('modal-title', ModalTitle);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],94:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _all = require('react-prop-types/lib/all');

var _all2 = _interopRequireDefault(_all);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?

// TODO: This `bsStyle` is very unlike the others. Should we rename it?

// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

var propTypes = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: _react2['default'].PropTypes.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: _react2['default'].PropTypes.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: _react2['default'].PropTypes.bool,

  justified: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
    var justified = _ref.justified;
    var navbar = _ref.navbar;
    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   */
  onSelect: _react2['default'].PropTypes.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is set to "tablist" NavItem focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: _react2['default'].PropTypes.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: _react2['default'].PropTypes.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: _react2['default'].PropTypes.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: _react2['default'].PropTypes.bool
};

var defaultProps = {
  justified: false,
  pullRight: false,
  pullLeft: false,
  stacked: false
};

var contextTypes = {
  $bs_navbar: _react2['default'].PropTypes.shape({
    bsClass: _react2['default'].PropTypes.string
  }),

  $bs_tabContainer: _react2['default'].PropTypes.shape({
    activeKey: _react2['default'].PropTypes.any,
    onSelect: _react2['default'].PropTypes.func.isRequired,
    getTabId: _react2['default'].PropTypes.func.isRequired,
    getPaneId: _react2['default'].PropTypes.func.isRequired
  })
};

var Nav = function (_React$Component) {
  (0, _inherits3['default'])(Nav, _React$Component);

  function Nav() {
    (0, _classCallCheck3['default'])(this, Nav);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Nav.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    if (!this._needsRefocus) {
      return;
    }

    this._needsRefocus = false;

    var children = this.props.children;

    var _getActiveProps = this.getActiveProps();

    var activeKey = _getActiveProps.activeKey;
    var activeHref = _getActiveProps.activeHref;


    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
      return _this2.isActive(child, activeKey, activeHref);
    });

    var childrenArray = _ValidComponentChildren2['default'].toArray(children);
    var activeChildIndex = childrenArray.indexOf(activeChild);

    var childNodes = _reactDom2['default'].findDOMNode(this).children;
    var activeNode = childNodes && childNodes[activeChildIndex];

    if (!activeNode || !activeNode.firstChild) {
      return;
    }

    activeNode.firstChild.focus();
  };

  Nav.prototype.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
    var nextActiveChild = void 0;

    switch (event.keyCode) {
      case _keycode2['default'].codes.left:
      case _keycode2['default'].codes.up:
        nextActiveChild = this.getNextActiveChild(-1);
        break;
      case _keycode2['default'].codes.right:
      case _keycode2['default'].codes.down:
        nextActiveChild = this.getNextActiveChild(1);
        break;
      default:
        // It was a different key; don't handle this keypress.
        return;
    }

    event.preventDefault();

    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey) {
      onSelect(nextActiveChild.props.eventKey);
    }

    this._needsRefocus = true;
  };

  Nav.prototype.getNextActiveChild = function getNextActiveChild(offset) {
    var _this3 = this;

    var children = this.props.children;

    var validChildren = children.filter(function (child) {
      return child.props.eventKey && !child.props.disabled;
    });

    var _getActiveProps2 = this.getActiveProps();

    var activeKey = _getActiveProps2.activeKey;
    var activeHref = _getActiveProps2.activeHref;


    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
      return _this3.isActive(child, activeKey, activeHref);
    });

    // This assumes the active child is not disabled.
    var activeChildIndex = validChildren.indexOf(activeChild);
    if (activeChildIndex === -1) {
      // Something has gone wrong. Select the first valid child we can find.
      return validChildren[0];
    }

    var nextIndex = activeChildIndex + offset;
    var numValidChildren = validChildren.length;

    if (nextIndex >= numValidChildren) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = numValidChildren - 1;
    }

    return validChildren[nextIndex];
  };

  Nav.prototype.getActiveProps = function getActiveProps() {
    var tabContainer = this.context.$bs_tabContainer;

    if (tabContainer) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(this.props.activeKey == null && !this.props.activeHref, 'Specifying a `<Nav>` `activeKey` or `activeHref` in the context of ' + 'a `<TabContainer>` is not supported. Instead use `<TabContainer ' + ('activeKey={' + this.props.activeKey + '} />`.')) : void 0;

      return tabContainer;
    }

    return this.props;
  };

  Nav.prototype.isActive = function isActive(_ref2, activeKey, activeHref) {
    var props = _ref2.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    return props.active;
  };

  Nav.prototype.getTabProps = function getTabProps(child, tabContainer, navRole, active, onSelect) {
    var _this4 = this;

    if (!tabContainer && navRole !== 'tablist') {
      // No tab props here.
      return null;
    }

    var _child$props = child.props;
    var id = _child$props.id;
    var controls = _child$props['aria-controls'];
    var eventKey = _child$props.eventKey;
    var role = _child$props.role;
    var onKeyDown = _child$props.onKeyDown;
    var tabIndex = _child$props.tabIndex;


    if (tabContainer) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!id && !controls, 'In the context of a `<TabContainer>`, `<NavItem>`s are given ' + 'generated `id` and `aria-controls` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly, provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;

      id = tabContainer.getTabId(eventKey);
      controls = tabContainer.getPaneId(eventKey);
    }

    if (navRole === 'tablist') {
      role = role || 'tab';
      onKeyDown = (0, _createChainedFunction2['default'])(function (event) {
        return _this4.handleTabKeyDown(onSelect, event);
      }, onKeyDown);
      tabIndex = active ? tabIndex : -1;
    }

    return {
      id: id,
      role: role,
      onKeyDown: onKeyDown,
      'aria-controls': controls,
      tabIndex: tabIndex
    };
  };

  Nav.prototype.render = function render() {
    var _extends2,
        _this5 = this;

    var _props = this.props;
    var stacked = _props.stacked;
    var justified = _props.justified;
    var onSelect = _props.onSelect;
    var propsRole = _props.role;
    var propsNavbar = _props.navbar;
    var pullRight = _props.pullRight;
    var pullLeft = _props.pullLeft;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['stacked', 'justified', 'onSelect', 'role', 'navbar', 'pullRight', 'pullLeft', 'className', 'children']);


    var tabContainer = this.context.$bs_tabContainer;
    var role = propsRole || (tabContainer ? 'tablist' : null);

    var _getActiveProps3 = this.getActiveProps();

    var activeKey = _getActiveProps3.activeKey;
    var activeHref = _getActiveProps3.activeHref;

    delete props.activeKey; // Accessed via this.getActiveProps().
    delete props.activeHref; // Accessed via this.getActiveProps().

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'stacked')] = stacked, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'justified')] = justified, _extends2));

    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
    var pullLeftClassName = void 0;
    var pullRightClassName = void 0;

    if (navbar) {
      var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

      classes[(0, _bootstrapUtils.prefix)(navbarProps, 'nav')] = true;

      pullRightClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'right');
      pullLeftClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'left');
    } else {
      pullRightClassName = 'pull-right';
      pullLeftClassName = 'pull-left';
    }

    classes[pullRightClassName] = pullRight;
    classes[pullLeftClassName] = pullLeft;

    return _react2['default'].createElement(
      'ul',
      (0, _extends4['default'])({}, elementProps, {
        role: role,
        className: (0, _classnames2['default'])(className, classes)
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        var active = _this5.isActive(child, activeKey, activeHref);
        var childOnSelect = (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect, tabContainer && tabContainer.onSelect);

        return (0, _react.cloneElement)(child, (0, _extends4['default'])({}, _this5.getTabProps(child, tabContainer, role, active, childOnSelect), {
          active: active,
          activeKey: activeKey,
          activeHref: activeHref,
          onSelect: childOnSelect
        }));
      })
    );
  };

  return Nav;
}(_react2['default'].Component);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.contextTypes = contextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('nav', (0, _bootstrapUtils.bsStyles)(['tabs', 'pills'], Nav));
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"keycode":271,"react":"react","react-dom":"react-dom","react-prop-types/lib/all":287,"warning":295}],95:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _splitComponentProps2 = require('./utils/splitComponentProps');

var _splitComponentProps3 = _interopRequireDefault(_splitComponentProps2);

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _Dropdown2['default'].propTypes, {

  // Toggle props.
  title: _react2['default'].PropTypes.node.isRequired,
  noCaret: _react2['default'].PropTypes.bool,
  active: _react2['default'].PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: _react2['default'].PropTypes.node
});

var NavDropdown = function (_React$Component) {
  (0, _inherits3['default'])(NavDropdown, _React$Component);

  function NavDropdown() {
    (0, _classCallCheck3['default'])(this, NavDropdown);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavDropdown.prototype.isActive = function isActive(_ref, activeKey, activeHref) {
    var props = _ref.props;

    var _this2 = this;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    if (props.children) {
      return _ValidComponentChildren2['default'].some(props.children, function (child) {
        return _this2.isActive(child, activeKey, activeHref);
      });
    }

    return props.active;
  };

  NavDropdown.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props;
    var title = _props.title;
    var activeKey = _props.activeKey;
    var activeHref = _props.activeHref;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['title', 'activeKey', 'activeHref', 'className', 'style', 'children']);


    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().
    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = (0, _splitComponentProps3['default'])(props, _Dropdown2['default'].ControlledComponent);

    var dropdownProps = _splitComponentProps[0];
    var toggleProps = _splitComponentProps[1];

    // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.

    return _react2['default'].createElement(
      _Dropdown2['default'],
      (0, _extends3['default'])({}, dropdownProps, {
        componentClass: 'li',
        className: (0, _classnames2['default'])(className, { active: active }),
        style: style
      }),
      _react2['default'].createElement(
        _Dropdown2['default'].Toggle,
        (0, _extends3['default'])({}, toggleProps, { useAnchor: true }),
        title
      ),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        _ValidComponentChildren2['default'].map(children, function (child) {
          return _react2['default'].cloneElement(child, {
            active: _this3.isActive(child, activeKey, activeHref)
          });
        })
      )
    );
  };

  return NavDropdown;
}(_react2['default'].Component);

NavDropdown.propTypes = propTypes;

exports['default'] = NavDropdown;
module.exports = exports['default'];
},{"./Dropdown":59,"./utils/ValidComponentChildren":133,"./utils/splitComponentProps":139,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],96:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  active: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  role: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func,
  onSelect: _react2['default'].PropTypes.func,
  eventKey: _react2['default'].PropTypes.any
};

var defaultProps = {
  active: false,
  disabled: false
};

var NavItem = function (_React$Component) {
  (0, _inherits3['default'])(NavItem, _React$Component);

  function NavItem(props, context) {
    (0, _classCallCheck3['default'])(this, NavItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  NavItem.prototype.handleClick = function handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, e);
      }
    }
  };

  NavItem.prototype.render = function render() {
    var _props = this.props;
    var active = _props.active;
    var disabled = _props.disabled;
    var onClick = _props.onClick;
    var className = _props.className;
    var style = _props.style;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'disabled', 'onClick', 'className', 'style']);


    delete props.onSelect;
    delete props.eventKey;

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey;
    delete props.activeHref;

    if (!props.role) {
      if (props.href === '#') {
        props.role = 'button';
      }
    } else if (props.role === 'tab') {
      props['aria-selected'] = active;
    }

    return _react2['default'].createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
        style: style
      },
      _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, props, {
        disabled: disabled,
        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
      }))
    );
  };

  return NavItem;
}(_react2['default'].Component);

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

exports['default'] = NavItem;
module.exports = exports['default'];
},{"./SafeAnchor":117,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],97:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _NavbarBrand = require('./NavbarBrand');

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarCollapse = require('./NavbarCollapse');

var _NavbarCollapse2 = _interopRequireDefault(_NavbarCollapse);

var _NavbarHeader = require('./NavbarHeader');

var _NavbarHeader2 = _interopRequireDefault(_NavbarHeader);

var _NavbarToggle = require('./NavbarToggle');

var _NavbarToggle2 = _interopRequireDefault(_NavbarToggle);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: _react2['default'].PropTypes.bool,
  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: _react2['default'].PropTypes.bool,
  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: _react2['default'].PropTypes.bool,
  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: _react2['default'].PropTypes.bool,
  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: _react2['default'].PropTypes.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: _elementType2['default'],
  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `navExpanded`
   * boolean value.
   *
   * @controllable navExpanded
   */
  onToggle: _react2['default'].PropTypes.func,

  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: _react2['default'].PropTypes.bool,

  role: _react2['default'].PropTypes.string
}; // TODO: Remove this pragma once we upgrade eslint-config-airbnb.
/* eslint-disable react/no-multi-comp */

var defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false
};

var childContextTypes = {
  $bs_navbar: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    expanded: _react.PropTypes.bool,
    onToggle: _react.PropTypes.func.isRequired
  })
};

var Navbar = function (_React$Component) {
  (0, _inherits3['default'])(Navbar, _React$Component);

  function Navbar(props, context) {
    (0, _classCallCheck3['default'])(this, Navbar);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  Navbar.prototype.getChildContext = function getChildContext() {
    var _props = this.props;
    var bsClass = _props.bsClass;
    var expanded = _props.expanded;


    return {
      $bs_navbar: {
        bsClass: bsClass,
        expanded: expanded,
        onToggle: this.handleToggle
      }
    };
  };

  Navbar.prototype.handleToggle = function handleToggle() {
    var _props2 = this.props;
    var onToggle = _props2.onToggle;
    var expanded = _props2.expanded;


    onToggle(!expanded);
  };

  Navbar.prototype.render = function render() {
    var _extends2;

    var _props3 = this.props;
    var Component = _props3.componentClass;
    var fixedTop = _props3.fixedTop;
    var fixedBottom = _props3.fixedBottom;
    var staticTop = _props3.staticTop;
    var inverse = _props3.inverse;
    var fluid = _props3.fluid;
    var className = _props3.className;
    var children = _props3.children;
    var props = (0, _objectWithoutProperties3['default'])(_props3, ['componentClass', 'fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'fluid', 'className', 'children']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['expanded', 'onToggle']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];

    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one

    if (elementProps.role === undefined && Component !== 'nav') {
      elementProps.role = 'navigation';
    }

    if (inverse) {
      bsProps.bsStyle = _StyleConfig.Style.INVERSE;
    }

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'fixed-top')] = fixedTop, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'fixed-bottom')] = fixedBottom, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'static-top')] = staticTop, _extends2));

    return _react2['default'].createElement(
      Component,
      (0, _extends4['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _react2['default'].createElement(
        _Grid2['default'],
        { fluid: fluid },
        children
      )
    );
  };

  return Navbar;
}(_react2['default'].Component);

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.childContextTypes = childContextTypes;

(0, _bootstrapUtils.bsClass)('navbar', Navbar);

var UncontrollableNavbar = (0, _uncontrollable2['default'])(Navbar, { expanded: 'onToggle' });

function createSimpleWrapper(tag, suffix, displayName) {
  var Wrapper = function Wrapper(_ref, _ref2) {
    var Component = _ref.componentClass;
    var className = _ref.className;
    var pullRight = _ref.pullRight;
    var pullLeft = _ref.pullLeft;
    var props = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass', 'className', 'pullRight', 'pullLeft']);
    var _ref2$$bs_navbar = _ref2.$bs_navbar;
    var navbarProps = _ref2$$bs_navbar === undefined ? { bsClass: 'navbar' } : _ref2$$bs_navbar;
    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, props, {
      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, suffix), pullRight && (0, _bootstrapUtils.prefix)(navbarProps, 'right'), pullLeft && (0, _bootstrapUtils.prefix)(navbarProps, 'left'))
    }));
  };

  Wrapper.displayName = displayName;

  Wrapper.propTypes = {
    componentClass: _elementType2['default'],
    pullRight: _react2['default'].PropTypes.bool,
    pullLeft: _react2['default'].PropTypes.bool
  };

  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false
  };

  Wrapper.contextTypes = {
    $bs_navbar: _react.PropTypes.shape({
      bsClass: _react.PropTypes.string
    })
  };

  return Wrapper;
}

UncontrollableNavbar.Brand = _NavbarBrand2['default'];
UncontrollableNavbar.Header = _NavbarHeader2['default'];
UncontrollableNavbar.Toggle = _NavbarToggle2['default'];
UncontrollableNavbar.Collapse = _NavbarCollapse2['default'];

UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');

// Set bsStyles here so they can be overridden.
exports['default'] = (0, _bootstrapUtils.bsStyles)([_StyleConfig.Style.DEFAULT, _StyleConfig.Style.INVERSE], _StyleConfig.Style.DEFAULT, UncontrollableNavbar);
module.exports = exports['default'];
},{"./Grid":70,"./NavbarBrand":98,"./NavbarCollapse":99,"./NavbarHeader":100,"./NavbarToggle":101,"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289,"uncontrollable":293}],98:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var contextTypes = {
  $bs_navbar: _react2['default'].PropTypes.shape({
    bsClass: _react2['default'].PropTypes.string
  })
};

var NavbarBrand = function (_React$Component) {
  (0, _inherits3['default'])(NavbarBrand, _React$Component);

  function NavbarBrand() {
    (0, _classCallCheck3['default'])(this, NavbarBrand);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarBrand.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'brand');

    if (_react2['default'].isValidElement(children)) {
      return _react2['default'].cloneElement(children, {
        className: (0, _classnames2['default'])(children.props.className, className, bsClassName)
      });
    }

    return _react2['default'].createElement(
      'span',
      (0, _extends3['default'])({}, props, { className: (0, _classnames2['default'])(className, bsClassName) }),
      children
    );
  };

  return NavbarBrand;
}(_react2['default'].Component);

NavbarBrand.contextTypes = contextTypes;

exports['default'] = NavbarBrand;
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],99:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var contextTypes = {
  $bs_navbar: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    expanded: _react.PropTypes.bool
  })
};

var NavbarCollapse = function (_React$Component) {
  (0, _inherits3['default'])(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    (0, _classCallCheck3['default'])(this, NavbarCollapse);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarCollapse.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'collapse');

    return _react2['default'].createElement(
      _Collapse2['default'],
      (0, _extends3['default'])({ 'in': navbarProps.expanded }, props),
      _react2['default'].createElement(
        'div',
        { className: bsClassName },
        children
      )
    );
  };

  return NavbarCollapse;
}(_react2['default'].Component);

NavbarCollapse.contextTypes = contextTypes;

exports['default'] = NavbarCollapse;
module.exports = exports['default'];
},{"./Collapse":57,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react"}],100:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var contextTypes = {
  $bs_navbar: _react2['default'].PropTypes.shape({
    bsClass: _react2['default'].PropTypes.string
  })
};

var NavbarHeader = function (_React$Component) {
  (0, _inherits3['default'])(NavbarHeader, _React$Component);

  function NavbarHeader() {
    (0, _classCallCheck3['default'])(this, NavbarHeader);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarHeader.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'header');

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, props, { className: (0, _classnames2['default'])(className, bsClassName) }));
  };

  return NavbarHeader;
}(_react2['default'].Component);

NavbarHeader.contextTypes = contextTypes;

exports['default'] = NavbarHeader;
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],101:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  onClick: _react.PropTypes.func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: _react.PropTypes.node
};

var contextTypes = {
  $bs_navbar: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    expanded: _react.PropTypes.bool,
    onToggle: _react.PropTypes.func.isRequired
  })
};

var NavbarToggle = function (_React$Component) {
  (0, _inherits3['default'])(NavbarToggle, _React$Component);

  function NavbarToggle() {
    (0, _classCallCheck3['default'])(this, NavbarToggle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarToggle.prototype.render = function render() {
    var _props = this.props;
    var onClick = _props.onClick;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['onClick', 'className', 'children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var buttonProps = (0, _extends3['default'])({
      type: 'button'
    }, props, {
      onClick: (0, _createChainedFunction2['default'])(onClick, navbarProps.onToggle),
      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, 'toggle'), !navbarProps.expanded && 'collapsed')
    });

    if (children) {
      return _react2['default'].createElement(
        'button',
        buttonProps,
        children
      );
    }

    return _react2['default'].createElement(
      'button',
      buttonProps,
      _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation'
      ),
      _react2['default'].createElement('span', { className: 'icon-bar' }),
      _react2['default'].createElement('span', { className: 'icon-bar' }),
      _react2['default'].createElement('span', { className: 'icon-bar' })
    );
  };

  return NavbarToggle;
}(_react2['default'].Component);

NavbarToggle.propTypes = propTypes;
NavbarToggle.contextTypes = contextTypes;

exports['default'] = NavbarToggle;
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],102:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Overlay = require('react-overlays/lib/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _Overlay2['default'].propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _react2['default'].PropTypes.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _react2['default'].PropTypes.bool,
  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: _react2['default'].PropTypes.func,

  /**
   * Use animation
   */
  animation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _elementType2['default']]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _react2['default'].PropTypes.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _react2['default'].PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _react2['default'].PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _react2['default'].PropTypes.func
});

var defaultProps = {
  animation: _Fade2['default'],
  rootClose: false,
  show: false
};

var Overlay = function (_React$Component) {
  (0, _inherits3['default'])(Overlay, _React$Component);

  function Overlay() {
    (0, _classCallCheck3['default'])(this, Overlay);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Overlay.prototype.render = function render() {
    var _props = this.props;
    var animation = _props.animation;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['animation', 'children']);


    var transition = animation === true ? _Fade2['default'] : animation || null;

    var child = void 0;

    if (!transition) {
      child = (0, _react.cloneElement)(children, {
        className: (0, _classnames2['default'])(children.props.className, 'in')
      });
    } else {
      child = children;
    }

    return _react2['default'].createElement(
      _Overlay2['default'],
      (0, _extends3['default'])({}, props, {
        transition: transition
      }),
      child
    );
  };

  return Overlay;
}(_react2['default'].Component);

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

exports['default'] = Overlay;
module.exports = exports['default'];
},{"./Fade":63,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-overlays/lib/Overlay":274,"react-prop-types/lib/elementType":289}],103:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var triggerType = _react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']);

var propTypes = (0, _extends3['default'])({}, _Overlay2['default'].propTypes, {

  /**
  * Specify which action or actions trigger Overlay visibility
  */
  trigger: _react2['default'].PropTypes.oneOfType([triggerType, _react2['default'].PropTypes.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: _react2['default'].PropTypes.number,
  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: _react2['default'].PropTypes.number,
  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: _react2['default'].PropTypes.number,

  // FIXME: This should be `defaultShow`.
  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: _react2['default'].PropTypes.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: _react2['default'].PropTypes.node.isRequired,

  /**
   * @private
   */
  onBlur: _react2['default'].PropTypes.func,
  /**
   * @private
   */
  onClick: _react2['default'].PropTypes.func,
  /**
   * @private
   */
  onFocus: _react2['default'].PropTypes.func,
  /**
   * @private
   */
  onMouseOut: _react2['default'].PropTypes.func,
  /**
   * @private
   */
  onMouseOver: _react2['default'].PropTypes.func,

  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: _react2['default'].PropTypes.oneOf([null]),
  /**
  * @private
  */
  onHide: _react2['default'].PropTypes.oneOf([null]),
  /**
   * @private
   */
  show: _react2['default'].PropTypes.oneOf([null])
});

var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
};

var OverlayTrigger = function (_React$Component) {
  (0, _inherits3['default'])(OverlayTrigger, _React$Component);

  function OverlayTrigger(props, context) {
    (0, _classCallCheck3['default'])(this, OverlayTrigger);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleDelayedShow = _this.handleDelayedShow.bind(_this);
    _this.handleDelayedHide = _this.handleDelayedHide.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);

    _this.handleMouseOver = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedShow, e);
    };
    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e);
    };

    _this._mountNode = null;

    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  OverlayTrigger.prototype.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  OverlayTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };

  OverlayTrigger.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom2['default'].unmountComponentAtNode(this._mountNode);
    this._mountNode = null;

    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };

  OverlayTrigger.prototype.handleToggle = function handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  };

  OverlayTrigger.prototype.handleDelayedShow = function handleDelayedShow() {
    var _this2 = this;

    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }

    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = setTimeout(function () {
      _this2._hoverShowDelay = null;
      _this2.show();
    }, delay);
  };

  OverlayTrigger.prototype.handleDelayedHide = function handleDelayedHide() {
    var _this3 = this;

    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }

    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = setTimeout(function () {
      _this3._hoverHideDelay = null;
      _this3.hide();
    }, delay);
  };

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.


  OverlayTrigger.prototype.handleMouseOverOut = function handleMouseOverOut(handler, e) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent.toElement;

    if (!related || related !== target && !(0, _contains2['default'])(target, related)) {
      handler(e);
    }
  };

  OverlayTrigger.prototype.handleHide = function handleHide() {
    this.hide();
  };

  OverlayTrigger.prototype.show = function show() {
    this.setState({ show: true });
  };

  OverlayTrigger.prototype.hide = function hide() {
    this.setState({ show: false });
  };

  OverlayTrigger.prototype.makeOverlay = function makeOverlay(overlay, props) {
    return _react2['default'].createElement(
      _Overlay2['default'],
      (0, _extends3['default'])({}, props, {
        show: this.state.show,
        onHide: this.handleHide,
        target: this
      }),
      overlay
    );
  };

  OverlayTrigger.prototype.renderOverlay = function renderOverlay() {
    _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };

  OverlayTrigger.prototype.render = function render() {
    var _props = this.props;
    var trigger = _props.trigger;
    var overlay = _props.overlay;
    var children = _props.children;
    var onBlur = _props.onBlur;
    var onClick = _props.onClick;
    var onFocus = _props.onFocus;
    var onMouseOut = _props.onMouseOut;
    var onMouseOver = _props.onMouseOver;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['trigger', 'overlay', 'children', 'onBlur', 'onClick', 'onFocus', 'onMouseOut', 'onMouseOver']);


    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;

    var child = _react2['default'].Children.only(children);
    var childProps = child.props;

    var triggerProps = {
      'aria-describedby': overlay.props.id
    };

    // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.

    triggerProps.onClick = (0, _createChainedFunction2['default'])(childProps.onClick, onClick);

    if (isOneOf('click', trigger)) {
      triggerProps.onClick = (0, _createChainedFunction2['default'])(triggerProps.onClick, this.handleToggle);
    }

    if (isOneOf('hover', trigger)) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!(trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : void 0;

      triggerProps.onMouseOver = (0, _createChainedFunction2['default'])(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
      triggerProps.onMouseOut = (0, _createChainedFunction2['default'])(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
    }

    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = (0, _createChainedFunction2['default'])(childProps.onFocus, onFocus, this.handleDelayedShow);
      triggerProps.onBlur = (0, _createChainedFunction2['default'])(childProps.onBlur, onBlur, this.handleDelayedHide);
    }

    this._overlay = this.makeOverlay(overlay, props);

    return (0, _react.cloneElement)(child, triggerProps);
  };

  return OverlayTrigger;
}(_react2['default'].Component);

OverlayTrigger.propTypes = propTypes;
OverlayTrigger.defaultProps = defaultProps;

exports['default'] = OverlayTrigger;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Overlay":102,"./utils/createChainedFunction":136,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"dom-helpers/query/contains":251,"react":"react","react-dom":"react-dom","warning":295}],104:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PageHeader = function (_React$Component) {
  (0, _inherits3['default'])(PageHeader, _React$Component);

  function PageHeader() {
    (0, _classCallCheck3['default'])(this, PageHeader);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  PageHeader.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _react2['default'].createElement(
        'h1',
        null,
        children
      )
    );
  };

  return PageHeader;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('page-header', PageHeader);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],105:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PagerItem = require('./PagerItem');

var _PagerItem2 = _interopRequireDefault(_PagerItem);

var _deprecationWarning = require('./utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _deprecationWarning2['default'].wrapper(_PagerItem2['default'], '`<PageItem>`', '`<Pager.Item>`');
module.exports = exports['default'];
},{"./PagerItem":107,"./utils/deprecationWarning":137}],106:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PagerItem = require('./PagerItem');

var _PagerItem2 = _interopRequireDefault(_PagerItem);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  onSelect: _react2['default'].PropTypes.func
};

var Pager = function (_React$Component) {
  (0, _inherits3['default'])(Pager, _React$Component);

  function Pager() {
    (0, _classCallCheck3['default'])(this, Pager);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Pager.prototype.render = function render() {
    var _props = this.props;
    var onSelect = _props.onSelect;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['onSelect', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(
      'ul',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        return (0, _react.cloneElement)(child, {
          onSelect: (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect)
        });
      })
    );
  };

  return Pager;
}(_react2['default'].Component);

Pager.propTypes = propTypes;

Pager.Item = _PagerItem2['default'];

exports['default'] = (0, _bootstrapUtils.bsClass)('pager', Pager);
module.exports = exports['default'];
},{"./PagerItem":107,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],107:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  disabled: _react2['default'].PropTypes.bool,
  previous: _react2['default'].PropTypes.bool,
  next: _react2['default'].PropTypes.bool,
  onClick: _react2['default'].PropTypes.func,
  onSelect: _react2['default'].PropTypes.func,
  eventKey: _react2['default'].PropTypes.any
};

var defaultProps = {
  disabled: false,
  previous: false,
  next: false
};

var PagerItem = function (_React$Component) {
  (0, _inherits3['default'])(PagerItem, _React$Component);

  function PagerItem(props, context) {
    (0, _classCallCheck3['default'])(this, PagerItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  PagerItem.prototype.handleSelect = function handleSelect(e) {
    var _props = this.props;
    var disabled = _props.disabled;
    var onSelect = _props.onSelect;
    var eventKey = _props.eventKey;


    if (onSelect || disabled) {
      e.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, e);
    }
  };

  PagerItem.prototype.render = function render() {
    var _props2 = this.props;
    var disabled = _props2.disabled;
    var previous = _props2.previous;
    var next = _props2.next;
    var onClick = _props2.onClick;
    var className = _props2.className;
    var style = _props2.style;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['disabled', 'previous', 'next', 'onClick', 'className', 'style']);


    delete props.onSelect;
    delete props.eventKey;

    return _react2['default'].createElement(
      'li',
      {
        className: (0, _classnames2['default'])(className, { disabled: disabled, previous: previous, next: next }),
        style: style
      },
      _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, props, {
        disabled: disabled,
        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleSelect)
      }))
    );
  };

  return PagerItem;
}(_react2['default'].Component);

PagerItem.propTypes = propTypes;
PagerItem.defaultProps = defaultProps;

exports['default'] = PagerItem;
module.exports = exports['default'];
},{"./SafeAnchor":117,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],108:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _PaginationButton = require('./PaginationButton');

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  activePage: _react2['default'].PropTypes.number,
  items: _react2['default'].PropTypes.number,
  maxButtons: _react2['default'].PropTypes.number,

  /**
   * When `true`, will display the first and the last button page
   */
  boundaryLinks: _react2['default'].PropTypes.bool,

  /**
   * When `true`, will display the default node value ('&hellip;').
   * Otherwise, will display provided node (when specified).
   */
  ellipsis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),

  /**
   * When `true`, will display the default node value ('&laquo;').
   * Otherwise, will display provided node (when specified).
   */
  first: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),

  /**
   * When `true`, will display the default node value ('&raquo;').
   * Otherwise, will display provided node (when specified).
   */
  last: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),

  /**
   * When `true`, will display the default node value ('&lsaquo;').
   * Otherwise, will display provided node (when specified).
   */
  prev: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),

  /**
   * When `true`, will display the default node value ('&rsaquo;').
   * Otherwise, will display provided node (when specified).
   */
  next: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),

  onSelect: _react2['default'].PropTypes.func,

  /**
   * You can use a custom element for the buttons
   */
  buttonComponentClass: _elementType2['default']
};

var defaultProps = {
  activePage: 1,
  items: 1,
  maxButtons: 0,
  first: false,
  last: false,
  prev: false,
  next: false,
  ellipsis: true,
  boundaryLinks: false
};

var Pagination = function (_React$Component) {
  (0, _inherits3['default'])(Pagination, _React$Component);

  function Pagination() {
    (0, _classCallCheck3['default'])(this, Pagination);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Pagination.prototype.renderPageButtons = function renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps) {
    var pageButtons = [];

    var startPage = void 0;
    var endPage = void 0;
    var hasHiddenPagesAfter = void 0;

    if (maxButtons) {
      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
      startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
      hasHiddenPagesAfter = startPage + maxButtons <= items;

      if (!hasHiddenPagesAfter) {
        endPage = items;
        startPage = items - maxButtons + 1;
        if (startPage < 1) {
          startPage = 1;
        }
      } else {
        endPage = startPage + maxButtons - 1;
      }
    } else {
      startPage = 1;
      endPage = items;
    }

    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
      pageButtons.push(_react2['default'].createElement(
        _PaginationButton2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          key: pagenumber,
          eventKey: pagenumber,
          active: pagenumber === activePage
        }),
        pagenumber
      ));
    }

    if (boundaryLinks && ellipsis && startPage !== 1) {
      pageButtons.unshift(_react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'ellipsisFirst',
          disabled: true,
          componentClass: buttonProps.componentClass
        },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'More' },
          ellipsis === true ? '…' : ellipsis
        )
      ));

      pageButtons.unshift(_react2['default'].createElement(
        _PaginationButton2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          key: 1,
          eventKey: 1,
          active: false
        }),
        '1'
      ));
    }

    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
      pageButtons.push(_react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'ellipsis',
          disabled: true,
          componentClass: buttonProps.componentClass
        },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'More' },
          ellipsis === true ? '…' : ellipsis
        )
      ));

      if (boundaryLinks && endPage !== items) {
        pageButtons.push(_react2['default'].createElement(
          _PaginationButton2['default'],
          (0, _extends3['default'])({}, buttonProps, {
            key: items,
            eventKey: items,
            active: false
          }),
          items
        ));
      }
    }

    return pageButtons;
  };

  Pagination.prototype.render = function render() {
    var _props = this.props;
    var activePage = _props.activePage;
    var items = _props.items;
    var maxButtons = _props.maxButtons;
    var boundaryLinks = _props.boundaryLinks;
    var ellipsis = _props.ellipsis;
    var first = _props.first;
    var last = _props.last;
    var prev = _props.prev;
    var next = _props.next;
    var onSelect = _props.onSelect;
    var buttonComponentClass = _props.buttonComponentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['activePage', 'items', 'maxButtons', 'boundaryLinks', 'ellipsis', 'first', 'last', 'prev', 'next', 'onSelect', 'buttonComponentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    var buttonProps = {
      onSelect: onSelect,
      componentClass: buttonComponentClass
    };

    return _react2['default'].createElement(
      'ul',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      first && _react2['default'].createElement(
        _PaginationButton2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          eventKey: 1,
          disabled: activePage === 1
        }),
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'First' },
          first === true ? '«' : first
        )
      ),
      prev && _react2['default'].createElement(
        _PaginationButton2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          eventKey: activePage - 1,
          disabled: activePage === 1
        }),
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'Previous' },
          prev === true ? '‹' : prev
        )
      ),
      this.renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps),
      next && _react2['default'].createElement(
        _PaginationButton2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          eventKey: activePage + 1,
          disabled: activePage >= items
        }),
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'Next' },
          next === true ? '›' : next
        )
      ),
      last && _react2['default'].createElement(
        _PaginationButton2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          eventKey: items,
          disabled: activePage >= items
        }),
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'Last' },
          last === true ? '»' : last
        )
      )
    );
  };

  return Pagination;
}(_react2['default'].Component);

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('pagination', Pagination);
module.exports = exports['default'];
},{"./PaginationButton":109,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],109:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: This should be `<Pagination.Item>`.

// TODO: This should use `componentClass` like other components.

var propTypes = {
  componentClass: _elementType2['default'],
  className: _react2['default'].PropTypes.string,
  eventKey: _react2['default'].PropTypes.any,
  onSelect: _react2['default'].PropTypes.func,
  disabled: _react2['default'].PropTypes.bool,
  active: _react2['default'].PropTypes.bool,
  onClick: _react2['default'].PropTypes.func
};

var defaultProps = {
  componentClass: _SafeAnchor2['default'],
  active: false,
  disabled: false
};

var PaginationButton = function (_React$Component) {
  (0, _inherits3['default'])(PaginationButton, _React$Component);

  function PaginationButton(props, context) {
    (0, _classCallCheck3['default'])(this, PaginationButton);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  PaginationButton.prototype.handleClick = function handleClick(event) {
    var _props = this.props;
    var disabled = _props.disabled;
    var onSelect = _props.onSelect;
    var eventKey = _props.eventKey;


    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  PaginationButton.prototype.render = function render() {
    var _props2 = this.props;
    var Component = _props2.componentClass;
    var active = _props2.active;
    var disabled = _props2.disabled;
    var onClick = _props2.onClick;
    var className = _props2.className;
    var style = _props2.style;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['componentClass', 'active', 'disabled', 'onClick', 'className', 'style']);


    if (Component === _SafeAnchor2['default']) {
      // Assume that custom components want `eventKey`.
      delete props.eventKey;
    }

    delete props.onSelect;

    return _react2['default'].createElement(
      'li',
      {
        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
        style: style
      },
      _react2['default'].createElement(Component, (0, _extends3['default'])({}, props, {
        disabled: disabled,
        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
      }))
    );
  };

  return PaginationButton;
}(_react2['default'].Component);

PaginationButton.propTypes = propTypes;
PaginationButton.defaultProps = defaultProps;

exports['default'] = PaginationButton;
module.exports = exports['default'];
},{"./SafeAnchor":117,"./utils/createChainedFunction":136,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],110:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: Use uncontrollable.

var propTypes = {
  collapsible: _react2['default'].PropTypes.bool,
  onSelect: _react2['default'].PropTypes.func,
  header: _react2['default'].PropTypes.node,
  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  footer: _react2['default'].PropTypes.node,
  defaultExpanded: _react2['default'].PropTypes.bool,
  expanded: _react2['default'].PropTypes.bool,
  eventKey: _react2['default'].PropTypes.any,
  headerRole: _react2['default'].PropTypes.string,
  panelRole: _react2['default'].PropTypes.string,

  // From Collapse.
  onEnter: _react2['default'].PropTypes.func,
  onEntering: _react2['default'].PropTypes.func,
  onEntered: _react2['default'].PropTypes.func,
  onExit: _react2['default'].PropTypes.func,
  onExiting: _react2['default'].PropTypes.func,
  onExited: _react2['default'].PropTypes.func
};

var defaultProps = {
  defaultExpanded: false
};

var Panel = function (_React$Component) {
  (0, _inherits3['default'])(Panel, _React$Component);

  function Panel(props, context) {
    (0, _classCallCheck3['default'])(this, Panel);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClickTitle = _this.handleClickTitle.bind(_this);

    _this.state = {
      expanded: _this.props.defaultExpanded
    };
    return _this;
  }

  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
    // FIXME: What the heck? This API is horrible. This needs to go away!
    e.persist();
    e.selected = true;

    if (this.props.onSelect) {
      this.props.onSelect(this.props.eventKey, e);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.setState({ expanded: !this.state.expanded });
    }
  };

  Panel.prototype.shouldRenderFill = function shouldRenderFill(child) {
    return _react2['default'].isValidElement(child) && child.props.fill != null;
  };

  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, bsProps) {
    var titleClassName = (0, _bootstrapUtils.prefix)(bsProps, 'title');

    if (!collapsible) {
      if (!_react2['default'].isValidElement(header)) {
        return header;
      }

      return (0, _react.cloneElement)(header, {
        className: (0, _classnames2['default'])(header.props.className, titleClassName)
      });
    }

    if (!_react2['default'].isValidElement(header)) {
      return _react2['default'].createElement(
        'h4',
        { role: 'presentation', className: titleClassName },
        this.renderAnchor(header, id, role, expanded)
      );
    }

    return (0, _react.cloneElement)(header, {
      className: (0, _classnames2['default'])(header.props.className, titleClassName),
      children: this.renderAnchor(header.props.children, id, role, expanded)
    });
  };

  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
    return _react2['default'].createElement(
      'a',
      {
        role: role,
        href: id && '#' + id,
        onClick: this.handleClickTitle,
        'aria-controls': id,
        'aria-expanded': expanded,
        'aria-selected': expanded
      },
      header
    );
  };

  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, bsProps, animationHooks) {
    return _react2['default'].createElement(
      _Collapse2['default'],
      (0, _extends3['default'])({ 'in': expanded }, animationHooks),
      _react2['default'].createElement(
        'div',
        {
          id: id,
          role: role,
          className: (0, _bootstrapUtils.prefix)(bsProps, 'collapse'),
          'aria-hidden': !expanded
        },
        this.renderBody(children, bsProps)
      )
    );
  };

  Panel.prototype.renderBody = function renderBody(rawChildren, bsProps) {
    var children = [];
    var bodyChildren = [];

    var bodyClassName = (0, _bootstrapUtils.prefix)(bsProps, 'body');

    function maybeAddBody() {
      if (!bodyChildren.length) {
        return;
      }

      // Derive the key from the index here, since we need to make one up.
      children.push(_react2['default'].createElement(
        'div',
        { key: children.length, className: bodyClassName },
        bodyChildren
      ));

      bodyChildren = [];
    }

    // Convert to array so we can re-use keys.
    _react2['default'].Children.toArray(rawChildren).forEach(function (child) {
      if (_react2['default'].isValidElement(child) && child.props.fill) {
        maybeAddBody();

        // Remove the child's unknown `fill` prop.
        children.push((0, _react.cloneElement)(child, { fill: undefined }));

        return;
      }

      bodyChildren.push(child);
    });

    maybeAddBody();

    return children;
  };

  Panel.prototype.render = function render() {
    var _props = this.props;
    var collapsible = _props.collapsible;
    var header = _props.header;
    var id = _props.id;
    var footer = _props.footer;
    var propsExpanded = _props.expanded;
    var headerRole = _props.headerRole;
    var panelRole = _props.panelRole;
    var className = _props.className;
    var children = _props.children;
    var onEnter = _props.onEnter;
    var onEntering = _props.onEntering;
    var onEntered = _props.onEntered;
    var onExit = _props.onExit;
    var onExiting = _props.onExiting;
    var onExited = _props.onExited;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'headerRole', 'panelRole', 'className', 'children', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['defaultExpanded', 'eventKey', 'onSelect']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;

    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes),
        id: collapsible ? null : id
      }),
      header && _react2['default'].createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'heading') },
        this.renderHeader(collapsible, header, id, headerRole, expanded, bsProps)
      ),
      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, bsProps, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, bsProps),
      footer && _react2['default'].createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'footer') },
        footer
      )
    );
  };

  return Panel;
}(_react2['default'].Component);

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('panel', (0, _bootstrapUtils.bsStyles)([].concat((0, _values2['default'])(_StyleConfig.State), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY]), _StyleConfig.Style.DEFAULT, Panel));
module.exports = exports['default'];
},{"./Collapse":57,"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/core-js/object/values":145,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],111:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  accordion: _react2['default'].PropTypes.bool,
  activeKey: _react2['default'].PropTypes.any,
  defaultActiveKey: _react2['default'].PropTypes.any,
  onSelect: _react2['default'].PropTypes.func,
  role: _react2['default'].PropTypes.string
};

var defaultProps = {
  accordion: false
};

// TODO: Use uncontrollable.

var PanelGroup = function (_React$Component) {
  (0, _inherits3['default'])(PanelGroup, _React$Component);

  function PanelGroup(props, context) {
    (0, _classCallCheck3['default'])(this, PanelGroup);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleSelect = _this.handleSelect.bind(_this);

    _this.state = {
      activeKey: props.defaultActiveKey
    };
    return _this;
  }

  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
    e.preventDefault();

    if (this.props.onSelect) {
      this.props.onSelect(key, e);
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({ activeKey: key });
  };

  PanelGroup.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var accordion = _props.accordion;
    var propsActiveKey = _props.activeKey;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['accordion', 'activeKey', 'className', 'children']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['defaultActiveKey', 'onSelect']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    var activeKey = void 0;
    if (accordion) {
      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
      elementProps.role = elementProps.role || 'tablist';
    }

    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        var childProps = {
          bsStyle: child.props.bsStyle || bsProps.bsStyle
        };

        if (accordion) {
          (0, _assign2['default'])(childProps, {
            headerRole: 'tab',
            panelRole: 'tabpanel',
            collapsible: true,
            expanded: child.props.eventKey === activeKey,
            onSelect: (0, _createChainedFunction2['default'])(_this2.handleSelect, child.props.onSelect)
          });
        }

        return (0, _react.cloneElement)(child, childProps);
      })
    );
  };

  return PanelGroup;
}(_react2['default'].Component);

PanelGroup.propTypes = propTypes;
PanelGroup.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('panel-group', PanelGroup);
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"babel-runtime/core-js/object/assign":141,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],112:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: (0, _isRequiredForA11y2['default'])(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * The "left" position value for the Popover.
   */
  positionLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),

  /**
   * Title content
   */
  title: _react2['default'].PropTypes.node
};

var defaultProps = {
  placement: 'right'
};

var Popover = function (_React$Component) {
  (0, _inherits3['default'])(Popover, _React$Component);

  function Popover() {
    (0, _classCallCheck3['default'])(this, Popover);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Popover.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var placement = _props.placement;
    var positionTop = _props.positionTop;
    var positionLeft = _props.positionLeft;
    var arrowOffsetTop = _props.arrowOffsetTop;
    var arrowOffsetLeft = _props.arrowOffsetLeft;
    var title = _props.title;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'title', 'className', 'style', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = (0, _extends4['default'])({
      display: 'block',
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };

    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, elementProps, {
        role: 'tooltip',
        className: (0, _classnames2['default'])(className, classes),
        style: outerStyle
      }),
      _react2['default'].createElement('div', { className: 'arrow', style: arrowStyle }),
      title && _react2['default'].createElement(
        'h3',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'title') },
        title
      ),
      _react2['default'].createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'content') },
        children
      )
    );
  };

  return Popover;
}(_react2['default'].Component);

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('popover', Popover);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/isRequiredForA11y":290}],113:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ROUND_PRECISION = 1000;

/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */
function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];
  if (!children) {
    return null;
  }

  var error = null;

  _react2['default'].Children.forEach(children, function (child) {
    if (error) {
      return;
    }

    if (child.type === ProgressBar) {
      // eslint-disable-line no-use-before-define
      return;
    }

    var childIdentifier = _react2['default'].isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error('Children of ' + componentName + ' can contain only ProgressBar ' + ('components. Found ' + childIdentifier + '.'));
  });

  return error;
}

var propTypes = {
  min: _react.PropTypes.number,
  now: _react.PropTypes.number,
  max: _react.PropTypes.number,
  label: _react.PropTypes.node,
  srOnly: _react.PropTypes.bool,
  striped: _react.PropTypes.bool,
  active: _react.PropTypes.bool,
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: _react.PropTypes.bool
};

var defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar = function (_React$Component) {
  (0, _inherits3['default'])(ProgressBar, _React$Component);

  function ProgressBar() {
    (0, _classCallCheck3['default'])(this, ProgressBar);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ProgressBar.prototype.renderProgressBar = function renderProgressBar(_ref) {
    var _extends2;

    var min = _ref.min;
    var now = _ref.now;
    var max = _ref.max;
    var label = _ref.label;
    var srOnly = _ref.srOnly;
    var striped = _ref.striped;
    var active = _ref.active;
    var className = _ref.className;
    var style = _ref.style;
    var props = (0, _objectWithoutProperties3['default'])(_ref, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'className', 'style']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {
      active: active
    }, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'striped')] = active || striped, _extends2));

    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, elementProps, {
        role: 'progressbar',
        className: (0, _classnames2['default'])(className, classes),
        style: (0, _extends4['default'])({ width: getPercentage(now, min, max) + '%' }, style),
        'aria-valuenow': now,
        'aria-valuemin': min,
        'aria-valuemax': max
      }),
      srOnly ? _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        label
      ) : label
    );
  };

  ProgressBar.prototype.render = function render() {
    var _props = this.props;
    var isChild = _props.isChild;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['isChild']);


    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min;
    var now = props.now;
    var max = props.max;
    var label = props.label;
    var srOnly = props.srOnly;
    var striped = props.striped;
    var active = props.active;
    var bsClass = props.bsClass;
    var bsStyle = props.bsStyle;
    var className = props.className;
    var children = props.children;
    var wrapperProps = (0, _objectWithoutProperties3['default'])(props, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'bsClass', 'bsStyle', 'className', 'children']);


    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, wrapperProps, {
        className: (0, _classnames2['default'])(className, 'progress')
      }),
      children ? _ValidComponentChildren2['default'].map(children, function (child) {
        return (0, _react.cloneElement)(child, { isChild: true });
      }) : this.renderProgressBar({
        min: min, now: now, max: max, label: label, srOnly: srOnly, striped: striped, active: active, bsClass: bsClass, bsStyle: bsStyle
      })
    );
  };

  return ProgressBar;
}(_react2['default'].Component);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('progress-bar', (0, _bootstrapUtils.bsStyles)((0, _values2['default'])(_StyleConfig.State), ProgressBar));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"babel-runtime/core-js/object/values":145,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],114:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  inline: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  /**
   * Only valid if `inline` is not set.
   */
  validationState: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Radio inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _react2['default'].PropTypes.func
};

var defaultProps = {
  inline: false,
  disabled: false
};

var Radio = function (_React$Component) {
  (0, _inherits3['default'])(Radio, _React$Component);

  function Radio() {
    (0, _classCallCheck3['default'])(this, Radio);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Radio.prototype.render = function render() {
    var _props = this.props;
    var inline = _props.inline;
    var disabled = _props.disabled;
    var validationState = _props.validationState;
    var inputRef = _props.inputRef;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['inline', 'disabled', 'validationState', 'inputRef', 'className', 'style', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var input = _react2['default'].createElement('input', (0, _extends3['default'])({}, elementProps, {
      ref: inputRef,
      type: 'radio',
      disabled: disabled
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[(0, _bootstrapUtils.prefix)(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2);

      // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!validationState, '`validationState` is ignored on `<Radio inline>`. To display ' + 'validation state on an inline radio, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;

      return _react2['default'].createElement(
        'label',
        { className: (0, _classnames2['default'])(className, _classes), style: style },
        input,
        children
      );
    }

    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      disabled: disabled
    });
    if (validationState) {
      classes['has-' + validationState] = true;
    }

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])(className, classes), style: style },
      _react2['default'].createElement(
        'label',
        null,
        input,
        children
      )
    );
  };

  return Radio;
}(_react2['default'].Component);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('radio', Radio);
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./utils/bootstrapUtils":134,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","warning":295}],115:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: This should probably take a single `aspectRatio` prop.

var propTypes = {
  /**
   * This component requires a single child element
   */
  children: _react.PropTypes.element.isRequired,
  /**
   * 16by9 aspect ratio
   */
  a16by9: _react.PropTypes.bool,
  /**
   * 4by3 aspect ratio
   */
  a4by3: _react.PropTypes.bool
};

var defaultProps = {
  a16by9: false,
  a4by3: false
};

var ResponsiveEmbed = function (_React$Component) {
  (0, _inherits3['default'])(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    (0, _classCallCheck3['default'])(this, ResponsiveEmbed);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ResponsiveEmbed.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var a16by9 = _props.a16by9;
    var a4by3 = _props.a4by3;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['a16by9', 'a4by3', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(a16by9 || a4by3, 'Either `a16by9` or `a4by3` must be set.') : void 0;
    process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!(a16by9 && a4by3), 'Only one of `a16by9` or `a4by3` can be set.') : void 0;

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, '16by9')] = a16by9, _extends2[(0, _bootstrapUtils.prefix)(bsProps, '4by3')] = a4by3, _extends2));

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])(classes) },
      (0, _react.cloneElement)(children, (0, _extends4['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(bsProps, 'item'))
      }))
    );
  };

  return ResponsiveEmbed;
}(_react2['default'].Component);

ResponsiveEmbed.propTypes = propTypes;
ResponsiveEmbed.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('embed-responsive', ResponsiveEmbed);
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./utils/bootstrapUtils":134,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","warning":295}],116:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div'
};

var Row = function (_React$Component) {
  (0, _inherits3['default'])(Row, _React$Component);

  function Row() {
    (0, _classCallCheck3['default'])(this, Row);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Row;
}(_react2['default'].Component);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('row', Row);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],117:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  href: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func,
  disabled: _react2['default'].PropTypes.bool,
  role: _react2['default'].PropTypes.string,
  tabIndex: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * this is sort of silly but needed for Button
   */
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */

var SafeAnchor = function (_React$Component) {
  (0, _inherits3['default'])(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    (0, _classCallCheck3['default'])(this, SafeAnchor);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  SafeAnchor.prototype.handleClick = function handleClick(event) {
    var _props = this.props;
    var disabled = _props.disabled;
    var href = _props.href;
    var onClick = _props.onClick;


    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  SafeAnchor.prototype.render = function render() {
    var _props2 = this.props;
    var Component = _props2.componentClass;
    var disabled = _props2.disabled;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['componentClass', 'disabled']);


    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = (0, _extends3['default'])({ pointerEvents: 'none' }, props.style);
    }

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, props, {
      onClick: this.handleClick
    }));
  };

  return SafeAnchor;
}(_react2['default'].Component);

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

exports['default'] = SafeAnchor;
module.exports = exports['default'];
},{"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react","react-prop-types/lib/elementType":289}],118:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _SplitToggle = require('./SplitToggle');

var _SplitToggle2 = _interopRequireDefault(_SplitToggle);

var _splitComponentProps2 = require('./utils/splitComponentProps');

var _splitComponentProps3 = _interopRequireDefault(_splitComponentProps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _Dropdown2['default'].propTypes, {

  // Toggle props.
  bsStyle: _react2['default'].PropTypes.string,
  bsSize: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func,
  /**
   * The content of the split button.
   */
  title: _react2['default'].PropTypes.node.isRequired,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: _react2['default'].PropTypes.string,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: _react2['default'].PropTypes.node
});

var SplitButton = function (_React$Component) {
  (0, _inherits3['default'])(SplitButton, _React$Component);

  function SplitButton() {
    (0, _classCallCheck3['default'])(this, SplitButton);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  SplitButton.prototype.render = function render() {
    var _props = this.props;
    var bsSize = _props.bsSize;
    var bsStyle = _props.bsStyle;
    var title = _props.title;
    var toggleLabel = _props.toggleLabel;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['bsSize', 'bsStyle', 'title', 'toggleLabel', 'children']);

    var _splitComponentProps = (0, _splitComponentProps3['default'])(props, _Dropdown2['default'].ControlledComponent);

    var dropdownProps = _splitComponentProps[0];
    var buttonProps = _splitComponentProps[1];


    return _react2['default'].createElement(
      _Dropdown2['default'],
      (0, _extends3['default'])({}, dropdownProps, {
        bsSize: bsSize,
        bsStyle: bsStyle
      }),
      _react2['default'].createElement(
        _Button2['default'],
        (0, _extends3['default'])({}, buttonProps, {
          disabled: props.disabled,
          bsSize: bsSize,
          bsStyle: bsStyle
        }),
        title
      ),
      _react2['default'].createElement(_SplitToggle2['default'], {
        'aria-label': toggleLabel || title,
        bsSize: bsSize,
        bsStyle: bsStyle
      }),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        children
      )
    );
  };

  return SplitButton;
}(_react2['default'].Component);

SplitButton.propTypes = propTypes;

SplitButton.Toggle = _SplitToggle2['default'];

exports['default'] = SplitButton;
module.exports = exports['default'];
},{"./Button":48,"./Dropdown":59,"./SplitToggle":119,"./utils/splitComponentProps":139,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react"}],119:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropdownToggle = require('./DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SplitToggle = function (_React$Component) {
  (0, _inherits3['default'])(SplitToggle, _React$Component);

  function SplitToggle() {
    (0, _classCallCheck3['default'])(this, SplitToggle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  SplitToggle.prototype.render = function render() {
    return _react2['default'].createElement(_DropdownToggle2['default'], (0, _extends3['default'])({}, this.props, {
      useAnchor: false,
      noCaret: false
    }));
  };

  return SplitToggle;
}(_react2['default'].Component);

SplitToggle.defaultProps = _DropdownToggle2['default'].defaultProps;

exports['default'] = SplitToggle;
module.exports = exports['default'];
},{"./DropdownToggle":62,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react"}],120:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabContainer = require('./TabContainer');

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _TabPane2['default'].propTypes, {

  disabled: _react2['default'].PropTypes.bool,

  title: _react2['default'].PropTypes.node,

  /**
   * tabClassName is used as className for the associated NavItem
   */
  tabClassName: _react2['default'].PropTypes.string
});

var Tab = function (_React$Component) {
  (0, _inherits3['default'])(Tab, _React$Component);

  function Tab() {
    (0, _classCallCheck3['default'])(this, Tab);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Tab.prototype.render = function render() {
    var props = (0, _extends3['default'])({}, this.props);

    // These props are for the parent `<Tabs>` rather than the `<TabPane>`.
    delete props.title;
    delete props.disabled;
    delete props.tabClassName;

    return _react2['default'].createElement(_TabPane2['default'], props);
  };

  return Tab;
}(_react2['default'].Component);

Tab.propTypes = propTypes;

Tab.Container = _TabContainer2['default'];
Tab.Content = _TabContent2['default'];
Tab.Pane = _TabPane2['default'];

exports['default'] = Tab;
module.exports = exports['default'];
},{"./TabContainer":121,"./TabContent":122,"./TabPane":123,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react"}],121:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TAB = 'tab';
var PANE = 'pane';

var idPropType = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);

var propTypes = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(undefined, [props].concat(args));

      if (!error && !props.id) {
        error = new Error('In order to properly initialize Tabs in a way that is accessible ' + 'to assistive technologies (such as screen readers) an `id` or a ' + '`generateChildId` prop to TabContainer is required');
      }
    }

    return error;
  },


  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: _react.PropTypes.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: _react.PropTypes.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: _react.PropTypes.any
};

var childContextTypes = {
  $bs_tabContainer: _react2['default'].PropTypes.shape({
    activeKey: _react.PropTypes.any,
    onSelect: _react.PropTypes.func.isRequired,
    getTabId: _react.PropTypes.func.isRequired,
    getPaneId: _react.PropTypes.func.isRequired
  })
};

var TabContainer = function (_React$Component) {
  (0, _inherits3['default'])(TabContainer, _React$Component);

  function TabContainer() {
    (0, _classCallCheck3['default'])(this, TabContainer);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  TabContainer.prototype.getChildContext = function getChildContext() {
    var _props = this.props;
    var activeKey = _props.activeKey;
    var onSelect = _props.onSelect;
    var generateChildId = _props.generateChildId;
    var id = _props.id;


    var getId = generateChildId || function (key, type) {
      return id ? id + '-' + type + '-' + key : null;
    };

    return {
      $bs_tabContainer: {
        activeKey: activeKey,
        onSelect: onSelect,
        getTabId: function getTabId(key) {
          return getId(key, TAB);
        },
        getPaneId: function getPaneId(key) {
          return getId(key, PANE);
        }
      }
    };
  };

  TabContainer.prototype.render = function render() {
    var _props2 = this.props;
    var children = _props2.children;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['children']);


    delete props.generateChildId;
    delete props.onSelect;
    delete props.activeKey;

    return _react2['default'].cloneElement(_react2['default'].Children.only(children), props);
  };

  return TabContainer;
}(_react2['default'].Component);

TabContainer.propTypes = propTypes;
TabContainer.childContextTypes = childContextTypes;

exports['default'] = (0, _uncontrollable2['default'])(TabContainer, { activeKey: 'onSelect' });
module.exports = exports['default'];
},{"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react","uncontrollable":293}],122:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  componentClass: _elementType2['default'],

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or any
   * `<Transition>` component.
   */
  animation: _react.PropTypes.oneOfType([_react.PropTypes.bool, _elementType2['default']]),

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: _react.PropTypes.bool
};

var defaultProps = {
  componentClass: 'div',
  animation: true,
  unmountOnExit: false
};

var contextTypes = {
  $bs_tabContainer: _react.PropTypes.shape({
    activeKey: _react.PropTypes.any
  })
};

var childContextTypes = {
  $bs_tabContent: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    animation: _react.PropTypes.oneOfType([_react.PropTypes.bool, _elementType2['default']]),
    activeKey: _react.PropTypes.any,
    unmountOnExit: _react.PropTypes.bool,
    onPaneEnter: _react.PropTypes.func.isRequired,
    onPaneExited: _react.PropTypes.func.isRequired,
    exiting: _react.PropTypes.bool.isRequired
  })
};

var TabContent = function (_React$Component) {
  (0, _inherits3['default'])(TabContent, _React$Component);

  function TabContent(props, context) {
    (0, _classCallCheck3['default'])(this, TabContent);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handlePaneEnter = _this.handlePaneEnter.bind(_this);
    _this.handlePaneExited = _this.handlePaneExited.bind(_this);

    // Active entries in state will be `null` unless `animation` is set. Need
    // to track active child in case keys swap and the active child changes
    // but the active key does not.
    _this.state = {
      activeKey: null,
      activeChild: null
    };
    return _this;
  }

  TabContent.prototype.getChildContext = function getChildContext() {
    var _props = this.props;
    var bsClass = _props.bsClass;
    var animation = _props.animation;
    var unmountOnExit = _props.unmountOnExit;


    var stateActiveKey = this.state.activeKey;
    var containerActiveKey = this.getContainerActiveKey();

    var activeKey = stateActiveKey != null ? stateActiveKey : containerActiveKey;
    var exiting = stateActiveKey != null && stateActiveKey !== containerActiveKey;

    return {
      $bs_tabContent: {
        bsClass: bsClass,
        animation: animation,
        activeKey: activeKey,
        unmountOnExit: unmountOnExit,
        onPaneEnter: this.handlePaneEnter,
        onPaneExited: this.handlePaneExited,
        exiting: exiting
      }
    };
  };

  TabContent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.animation && this.state.activeChild) {
      this.setState({ activeKey: null, activeChild: null });
    }
  };

  TabContent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  TabContent.prototype.handlePaneEnter = function handlePaneEnter(child, childKey) {
    if (!this.props.animation) {
      return false;
    }

    // It's possible that this child should be transitioning out.
    if (childKey !== this.getContainerActiveKey()) {
      return false;
    }

    this.setState({
      activeKey: childKey,
      activeChild: child
    });

    return true;
  };

  TabContent.prototype.handlePaneExited = function handlePaneExited(child) {
    // This might happen as everything is unmounting.
    if (this.isUnmounted) {
      return;
    }

    this.setState(function (_ref) {
      var activeChild = _ref.activeChild;

      if (activeChild !== child) {
        return null;
      }

      return {
        activeKey: null,
        activeChild: null
      };
    });
  };

  TabContent.prototype.getContainerActiveKey = function getContainerActiveKey() {
    var tabContainer = this.context.$bs_tabContainer;
    return tabContainer && tabContainer.activeKey;
  };

  TabContent.prototype.render = function render() {
    var _props2 = this.props;
    var Component = _props2.componentClass;
    var className = _props2.className;
    var props = (0, _objectWithoutProperties3['default'])(_props2, ['componentClass', 'className']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['animation', 'unmountOnExit']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(bsProps, 'content'))
    }));
  };

  return TabContent;
}(_react2['default'].Component);

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.contextTypes = contextTypes;
TabContent.childContextTypes = childContextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('tab', TabContent);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289}],123:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Uniquely identify the `<TabPane>` among its siblings.
   */
  eventKey: _react.PropTypes.any,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or any `<Transition>`
   * component.
   */
  animation: _react.PropTypes.oneOfType([_react.PropTypes.bool, _elementType2['default']]),

  /** @private **/
  id: _react.PropTypes.string,

  /** @private **/
  'aria-labelledby': _react.PropTypes.string,

  /**
   * If not explicitly specified and rendered in the context of a
   * `<TabContent>`, the `bsClass` of the `<TabContent>` suffixed by `-pane`.
   * If otherwise not explicitly specified, `tab-pane`.
   */
  bsClass: _react2['default'].PropTypes.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: _react.PropTypes.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: _react.PropTypes.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: _react.PropTypes.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: _react.PropTypes.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: _react.PropTypes.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: _react.PropTypes.func,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: _react.PropTypes.bool
};

var contextTypes = {
  $bs_tabContainer: _react.PropTypes.shape({
    getId: _react.PropTypes.func,
    unmountOnExit: _react.PropTypes.bool
  }),
  $bs_tabContent: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    animation: _react.PropTypes.oneOfType([_react.PropTypes.bool, _elementType2['default']]),
    activeKey: _react.PropTypes.any,
    unmountOnExit: _react.PropTypes.bool,
    onPaneEnter: _react.PropTypes.func.isRequired,
    onPaneExited: _react.PropTypes.func.isRequired,
    exiting: _react.PropTypes.bool.isRequired
  })
};

/**
 * We override the `<TabContainer>` context so `<Nav>`s in `<TabPane>`s don't
 * conflict with the top level one.
 */
var childContextTypes = {
  $bs_tabContainer: _react.PropTypes.oneOf([null])
};

var TabPane = function (_React$Component) {
  (0, _inherits3['default'])(TabPane, _React$Component);

  function TabPane(props, context) {
    (0, _classCallCheck3['default'])(this, TabPane);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleEnter = _this.handleEnter.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);

    _this['in'] = false;
    return _this;
  }

  TabPane.prototype.getChildContext = function getChildContext() {
    return {
      $bs_tabContainer: null
    };
  };

  TabPane.prototype.componentDidMount = function componentDidMount() {
    if (this.shouldBeIn()) {
      // In lieu of the action event firing.
      this.handleEnter();
    }
  };

  TabPane.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this['in']) {
      if (!this.shouldBeIn()) {
        // We shouldn't be active any more. Notify the parent.
        this.handleExited();
      }
    } else if (this.shouldBeIn()) {
      // We are the active child. Notify the parent.
      this.handleEnter();
    }
  };

  TabPane.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this['in']) {
      // In lieu of the action event firing.
      this.handleExited();
    }
  };

  TabPane.prototype.handleEnter = function handleEnter() {
    var tabContent = this.context.$bs_tabContent;
    if (!tabContent) {
      return;
    }

    this['in'] = tabContent.onPaneEnter(this, this.props.eventKey);
  };

  TabPane.prototype.handleExited = function handleExited() {
    var tabContent = this.context.$bs_tabContent;
    if (!tabContent) {
      return;
    }

    tabContent.onPaneExited(this);
    this['in'] = false;
  };

  TabPane.prototype.getAnimation = function getAnimation() {
    if (this.props.animation != null) {
      return this.props.animation;
    }

    var tabContent = this.context.$bs_tabContent;
    return tabContent && tabContent.animation;
  };

  TabPane.prototype.isActive = function isActive() {
    var tabContent = this.context.$bs_tabContent;
    var activeKey = tabContent && tabContent.activeKey;

    return this.props.eventKey === activeKey;
  };

  TabPane.prototype.shouldBeIn = function shouldBeIn() {
    return this.getAnimation() && this.isActive();
  };

  TabPane.prototype.render = function render() {
    var _props = this.props;
    var eventKey = _props.eventKey;
    var className = _props.className;
    var onEnter = _props.onEnter;
    var onEntering = _props.onEntering;
    var onEntered = _props.onEntered;
    var onExit = _props.onExit;
    var onExiting = _props.onExiting;
    var onExited = _props.onExited;
    var propsUnmountOnExit = _props.unmountOnExit;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['eventKey', 'className', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'unmountOnExit']);
    var _context = this.context;
    var tabContent = _context.$bs_tabContent;
    var tabContainer = _context.$bs_tabContainer;

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['animation']);

    var bsProps = _splitBsPropsAndOmit[0];
    var elementProps = _splitBsPropsAndOmit[1];


    var active = this.isActive();
    var animation = this.getAnimation();

    var unmountOnExit = propsUnmountOnExit != null ? propsUnmountOnExit : tabContent && tabContent.unmountOnExit;

    if (!active && !animation && unmountOnExit) {
      return null;
    }

    var Transition = animation === true ? _Fade2['default'] : animation || null;

    if (tabContent) {
      bsProps.bsClass = (0, _bootstrapUtils.prefix)(tabContent, 'pane');
    }

    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      active: active
    });

    if (tabContainer) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!elementProps.id && !elementProps['aria-labelledby'], 'In the context of a `<TabContainer>`, `<TabPanes>` are given ' + 'generated `id` and `aria-labelledby` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;

      elementProps.id = tabContainer.getPaneId(eventKey);
      elementProps['aria-labelledby'] = tabContainer.getTabId(eventKey);
    }

    var pane = _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      role: 'tabpanel',
      'aria-hidden': !active,
      className: (0, _classnames2['default'])(className, classes)
    }));

    if (Transition) {
      var exiting = tabContent && tabContent.exiting;

      return _react2['default'].createElement(
        Transition,
        {
          'in': active && !exiting,
          onEnter: (0, _createChainedFunction2['default'])(this.handleEnter, onEnter),
          onEntering: onEntering,
          onEntered: onEntered,
          onExit: onExit,
          onExiting: onExiting,
          onExited: (0, _createChainedFunction2['default'])(this.handleExited, onExited),
          unmountOnExit: unmountOnExit
        },
        pane
      );
    }

    return pane;
  };

  return TabPane;
}(_react2['default'].Component);

TabPane.propTypes = propTypes;
TabPane.contextTypes = contextTypes;
TabPane.childContextTypes = childContextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('tab-pane', TabPane);
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Fade":63,"./utils/bootstrapUtils":134,"./utils/createChainedFunction":136,"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/elementType":289,"warning":295}],124:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  striped: _react2['default'].PropTypes.bool,
  bordered: _react2['default'].PropTypes.bool,
  condensed: _react2['default'].PropTypes.bool,
  hover: _react2['default'].PropTypes.bool,
  responsive: _react2['default'].PropTypes.bool
};

var defaultProps = {
  bordered: false,
  condensed: false,
  hover: false,
  responsive: false,
  striped: false
};

var Table = function (_React$Component) {
  (0, _inherits3['default'])(Table, _React$Component);

  function Table() {
    (0, _classCallCheck3['default'])(this, Table);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Table.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var striped = _props.striped;
    var bordered = _props.bordered;
    var condensed = _props.condensed;
    var hover = _props.hover;
    var responsive = _props.responsive;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['striped', 'bordered', 'condensed', 'hover', 'responsive', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'striped')] = striped, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'bordered')] = bordered, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'condensed')] = condensed, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'hover')] = hover, _extends2));

    var table = _react2['default'].createElement('table', (0, _extends4['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));

    if (responsive) {
      return _react2['default'].createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'responsive') },
        table
      );
    }

    return table;
  };

  return Table;
}(_react2['default'].Component);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('table', Table);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],125:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _TabContainer = require('./TabContainer');

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _ValidComponentChildren = require('./utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabContainer = _TabContainer2['default'].ControlledComponent;

var propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: _react2['default'].PropTypes.any,

  /**
   * Navigation style
   */
  bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),

  animation: _react2['default'].PropTypes.bool,

  id: (0, _isRequiredForA11y2['default'])(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: _react2['default'].PropTypes.func,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: _react2['default'].PropTypes.bool
};

var defaultProps = {
  bsStyle: 'tabs',
  animation: true,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey = void 0;
  _ValidComponentChildren2['default'].forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var Tabs = function (_React$Component) {
  (0, _inherits3['default'])(Tabs, _React$Component);

  function Tabs() {
    (0, _classCallCheck3['default'])(this, Tabs);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Tabs.prototype.renderTab = function renderTab(child) {
    var _child$props = child.props;
    var title = _child$props.title;
    var eventKey = _child$props.eventKey;
    var disabled = _child$props.disabled;
    var tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return _react2['default'].createElement(
      _NavItem2['default'],
      {
        eventKey: eventKey,
        disabled: disabled,
        className: tabClassName
      },
      title
    );
  };

  Tabs.prototype.render = function render() {
    var _props = this.props;
    var id = _props.id;
    var onSelect = _props.onSelect;
    var animation = _props.animation;
    var unmountOnExit = _props.unmountOnExit;
    var bsClass = _props.bsClass;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var _props$activeKey = _props.activeKey;
    var activeKey = _props$activeKey === undefined ? getDefaultActiveKey(children) : _props$activeKey;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['id', 'onSelect', 'animation', 'unmountOnExit', 'bsClass', 'className', 'style', 'children', 'activeKey']);


    return _react2['default'].createElement(
      TabContainer,
      {
        id: id,
        activeKey: activeKey,
        onSelect: onSelect,
        className: className,
        style: style
      },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _Nav2['default'],
          (0, _extends3['default'])({}, props, {
            role: 'tablist'
          }),
          _ValidComponentChildren2['default'].map(children, this.renderTab)
        ),
        _react2['default'].createElement(
          _TabContent2['default'],
          {
            bsClass: bsClass,
            animation: animation,
            unmountOnExit: unmountOnExit
          },
          children
        )
      )
    );
  };

  return Tabs;
}(_react2['default'].Component);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

(0, _bootstrapUtils.bsClass)('tab', Tabs);

exports['default'] = (0, _uncontrollable2['default'])(Tabs, { activeKey: 'onSelect' });
module.exports = exports['default'];
},{"./Nav":94,"./NavItem":96,"./TabContainer":121,"./TabContent":122,"./utils/ValidComponentChildren":133,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"react":"react","react-prop-types/lib/isRequiredForA11y":290,"uncontrollable":293}],126:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  src: _react2['default'].PropTypes.string,
  alt: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string
};

var Thumbnail = function (_React$Component) {
  (0, _inherits3['default'])(Thumbnail, _React$Component);

  function Thumbnail() {
    (0, _classCallCheck3['default'])(this, Thumbnail);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Thumbnail.prototype.render = function render() {
    var _props = this.props;
    var src = _props.src;
    var alt = _props.alt;
    var className = _props.className;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['src', 'alt', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var Component = elementProps.href ? _SafeAnchor2['default'] : 'div';
    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement(
      Component,
      (0, _extends3['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _react2['default'].createElement('img', { src: src, alt: alt }),
      children && _react2['default'].createElement(
        'div',
        { className: 'caption' },
        children
      )
    );
  };

  return Thumbnail;
}(_react2['default'].Component);

Thumbnail.propTypes = propTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('thumbnail', Thumbnail);
module.exports = exports['default'];
},{"./SafeAnchor":117,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],127:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _bootstrapUtils = require('./utils/bootstrapUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: (0, _isRequiredForA11y2['default'])(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  /**
   * Sets the direction the Tooltip is positioned towards.
   */
  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Tooltip.
   */
  positionTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * The "left" position value for the Tooltip.
   */
  positionLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),

  /**
   * The "top" position value for the Tooltip arrow.
   */
  arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * The "left" position value for the Tooltip arrow.
   */
  arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string])
};

var defaultProps = {
  placement: 'right'
};

var Tooltip = function (_React$Component) {
  (0, _inherits3['default'])(Tooltip, _React$Component);

  function Tooltip() {
    (0, _classCallCheck3['default'])(this, Tooltip);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Tooltip.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var placement = _props.placement;
    var positionTop = _props.positionTop;
    var positionLeft = _props.positionLeft;
    var arrowOffsetTop = _props.arrowOffsetTop;
    var arrowOffsetLeft = _props.arrowOffsetLeft;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'className', 'style', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = (0, _extends4['default'])({
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };

    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, elementProps, {
        role: 'tooltip',
        className: (0, _classnames2['default'])(className, classes),
        style: outerStyle
      }),
      _react2['default'].createElement('div', { className: (0, _bootstrapUtils.prefix)(bsProps, 'arrow'), style: arrowStyle }),
      _react2['default'].createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'inner') },
        children
      )
    );
  };

  return Tooltip;
}(_react2['default'].Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('tooltip', Tooltip);
module.exports = exports['default'];
},{"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react","react-prop-types/lib/isRequiredForA11y":290}],128:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('./utils/bootstrapUtils');

var _StyleConfig = require('./utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Well = function (_React$Component) {
  (0, _inherits3['default'])(Well, _React$Component);

  function Well() {
    (0, _classCallCheck3['default'])(this, Well);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Well.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Well;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('well', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], Well));
module.exports = exports['default'];
},{"./utils/StyleConfig":131,"./utils/bootstrapUtils":134,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/extends":149,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/objectWithoutProperties":151,"babel-runtime/helpers/possibleConstructorReturn":152,"classnames":240,"react":"react"}],129:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.utils = exports.Well = exports.Tooltip = exports.Thumbnail = exports.Tabs = exports.TabPane = exports.Table = exports.TabContent = exports.TabContainer = exports.Tab = exports.SplitButton = exports.SafeAnchor = exports.Row = exports.ResponsiveEmbed = exports.Radio = exports.ProgressBar = exports.Popover = exports.PanelGroup = exports.Panel = exports.Pagination = exports.Pager = exports.PageItem = exports.PageHeader = exports.OverlayTrigger = exports.Overlay = exports.NavItem = exports.NavDropdown = exports.NavbarBrand = exports.Navbar = exports.Nav = exports.ModalTitle = exports.ModalHeader = exports.ModalFooter = exports.ModalBody = exports.Modal = exports.MenuItem = exports.Media = exports.ListGroupItem = exports.ListGroup = exports.Label = exports.Jumbotron = exports.InputGroup = exports.Image = exports.HelpBlock = exports.Grid = exports.Glyphicon = exports.FormGroup = exports.FormControl = exports.Form = exports.Fade = exports.DropdownButton = exports.Dropdown = exports.Collapse = exports.Col = exports.ControlLabel = exports.Clearfix = exports.Checkbox = exports.CarouselItem = exports.Carousel = exports.ButtonToolbar = exports.ButtonGroup = exports.Button = exports.BreadcrumbItem = exports.Breadcrumb = exports.Badge = exports.Alert = exports.Accordion = undefined;

var _Accordion2 = require('./Accordion');

var _Accordion3 = _interopRequireDefault(_Accordion2);

var _Alert2 = require('./Alert');

var _Alert3 = _interopRequireDefault(_Alert2);

var _Badge2 = require('./Badge');

var _Badge3 = _interopRequireDefault(_Badge2);

var _Breadcrumb2 = require('./Breadcrumb');

var _Breadcrumb3 = _interopRequireDefault(_Breadcrumb2);

var _BreadcrumbItem2 = require('./BreadcrumbItem');

var _BreadcrumbItem3 = _interopRequireDefault(_BreadcrumbItem2);

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

var _ButtonGroup2 = require('./ButtonGroup');

var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

var _ButtonToolbar2 = require('./ButtonToolbar');

var _ButtonToolbar3 = _interopRequireDefault(_ButtonToolbar2);

var _Carousel2 = require('./Carousel');

var _Carousel3 = _interopRequireDefault(_Carousel2);

var _CarouselItem2 = require('./CarouselItem');

var _CarouselItem3 = _interopRequireDefault(_CarouselItem2);

var _Checkbox2 = require('./Checkbox');

var _Checkbox3 = _interopRequireDefault(_Checkbox2);

var _Clearfix2 = require('./Clearfix');

var _Clearfix3 = _interopRequireDefault(_Clearfix2);

var _ControlLabel2 = require('./ControlLabel');

var _ControlLabel3 = _interopRequireDefault(_ControlLabel2);

var _Col2 = require('./Col');

var _Col3 = _interopRequireDefault(_Col2);

var _Collapse2 = require('./Collapse');

var _Collapse3 = _interopRequireDefault(_Collapse2);

var _Dropdown2 = require('./Dropdown');

var _Dropdown3 = _interopRequireDefault(_Dropdown2);

var _DropdownButton2 = require('./DropdownButton');

var _DropdownButton3 = _interopRequireDefault(_DropdownButton2);

var _Fade2 = require('./Fade');

var _Fade3 = _interopRequireDefault(_Fade2);

var _Form2 = require('./Form');

var _Form3 = _interopRequireDefault(_Form2);

var _FormControl2 = require('./FormControl');

var _FormControl3 = _interopRequireDefault(_FormControl2);

var _FormGroup2 = require('./FormGroup');

var _FormGroup3 = _interopRequireDefault(_FormGroup2);

var _Glyphicon2 = require('./Glyphicon');

var _Glyphicon3 = _interopRequireDefault(_Glyphicon2);

var _Grid2 = require('./Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

var _HelpBlock2 = require('./HelpBlock');

var _HelpBlock3 = _interopRequireDefault(_HelpBlock2);

var _Image2 = require('./Image');

var _Image3 = _interopRequireDefault(_Image2);

var _InputGroup2 = require('./InputGroup');

var _InputGroup3 = _interopRequireDefault(_InputGroup2);

var _Jumbotron2 = require('./Jumbotron');

var _Jumbotron3 = _interopRequireDefault(_Jumbotron2);

var _Label2 = require('./Label');

var _Label3 = _interopRequireDefault(_Label2);

var _ListGroup2 = require('./ListGroup');

var _ListGroup3 = _interopRequireDefault(_ListGroup2);

var _ListGroupItem2 = require('./ListGroupItem');

var _ListGroupItem3 = _interopRequireDefault(_ListGroupItem2);

var _Media2 = require('./Media');

var _Media3 = _interopRequireDefault(_Media2);

var _MenuItem2 = require('./MenuItem');

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

var _Modal2 = require('./Modal');

var _Modal3 = _interopRequireDefault(_Modal2);

var _ModalBody2 = require('./ModalBody');

var _ModalBody3 = _interopRequireDefault(_ModalBody2);

var _ModalFooter2 = require('./ModalFooter');

var _ModalFooter3 = _interopRequireDefault(_ModalFooter2);

var _ModalHeader2 = require('./ModalHeader');

var _ModalHeader3 = _interopRequireDefault(_ModalHeader2);

var _ModalTitle2 = require('./ModalTitle');

var _ModalTitle3 = _interopRequireDefault(_ModalTitle2);

var _Nav2 = require('./Nav');

var _Nav3 = _interopRequireDefault(_Nav2);

var _Navbar2 = require('./Navbar');

var _Navbar3 = _interopRequireDefault(_Navbar2);

var _NavbarBrand2 = require('./NavbarBrand');

var _NavbarBrand3 = _interopRequireDefault(_NavbarBrand2);

var _NavDropdown2 = require('./NavDropdown');

var _NavDropdown3 = _interopRequireDefault(_NavDropdown2);

var _NavItem2 = require('./NavItem');

var _NavItem3 = _interopRequireDefault(_NavItem2);

var _Overlay2 = require('./Overlay');

var _Overlay3 = _interopRequireDefault(_Overlay2);

var _OverlayTrigger2 = require('./OverlayTrigger');

var _OverlayTrigger3 = _interopRequireDefault(_OverlayTrigger2);

var _PageHeader2 = require('./PageHeader');

var _PageHeader3 = _interopRequireDefault(_PageHeader2);

var _PageItem2 = require('./PageItem');

var _PageItem3 = _interopRequireDefault(_PageItem2);

var _Pager2 = require('./Pager');

var _Pager3 = _interopRequireDefault(_Pager2);

var _Pagination2 = require('./Pagination');

var _Pagination3 = _interopRequireDefault(_Pagination2);

var _Panel2 = require('./Panel');

var _Panel3 = _interopRequireDefault(_Panel2);

var _PanelGroup2 = require('./PanelGroup');

var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

var _Popover2 = require('./Popover');

var _Popover3 = _interopRequireDefault(_Popover2);

var _ProgressBar2 = require('./ProgressBar');

var _ProgressBar3 = _interopRequireDefault(_ProgressBar2);

var _Radio2 = require('./Radio');

var _Radio3 = _interopRequireDefault(_Radio2);

var _ResponsiveEmbed2 = require('./ResponsiveEmbed');

var _ResponsiveEmbed3 = _interopRequireDefault(_ResponsiveEmbed2);

var _Row2 = require('./Row');

var _Row3 = _interopRequireDefault(_Row2);

var _SafeAnchor2 = require('./SafeAnchor');

var _SafeAnchor3 = _interopRequireDefault(_SafeAnchor2);

var _SplitButton2 = require('./SplitButton');

var _SplitButton3 = _interopRequireDefault(_SplitButton2);

var _Tab2 = require('./Tab');

var _Tab3 = _interopRequireDefault(_Tab2);

var _TabContainer2 = require('./TabContainer');

var _TabContainer3 = _interopRequireDefault(_TabContainer2);

var _TabContent2 = require('./TabContent');

var _TabContent3 = _interopRequireDefault(_TabContent2);

var _Table2 = require('./Table');

var _Table3 = _interopRequireDefault(_Table2);

var _TabPane2 = require('./TabPane');

var _TabPane3 = _interopRequireDefault(_TabPane2);

var _Tabs2 = require('./Tabs');

var _Tabs3 = _interopRequireDefault(_Tabs2);

var _Thumbnail2 = require('./Thumbnail');

var _Thumbnail3 = _interopRequireDefault(_Thumbnail2);

var _Tooltip2 = require('./Tooltip');

var _Tooltip3 = _interopRequireDefault(_Tooltip2);

var _Well2 = require('./Well');

var _Well3 = _interopRequireDefault(_Well2);

var _utils2 = require('./utils');

var _utils = _interopRequireWildcard(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Accordion = _Accordion3['default'];
exports.Alert = _Alert3['default'];
exports.Badge = _Badge3['default'];
exports.Breadcrumb = _Breadcrumb3['default'];
exports.BreadcrumbItem = _BreadcrumbItem3['default'];
exports.Button = _Button3['default'];
exports.ButtonGroup = _ButtonGroup3['default'];
exports.ButtonToolbar = _ButtonToolbar3['default'];
exports.Carousel = _Carousel3['default'];
exports.CarouselItem = _CarouselItem3['default'];
exports.Checkbox = _Checkbox3['default'];
exports.Clearfix = _Clearfix3['default'];
exports.ControlLabel = _ControlLabel3['default'];
exports.Col = _Col3['default'];
exports.Collapse = _Collapse3['default'];
exports.Dropdown = _Dropdown3['default'];
exports.DropdownButton = _DropdownButton3['default'];
exports.Fade = _Fade3['default'];
exports.Form = _Form3['default'];
exports.FormControl = _FormControl3['default'];
exports.FormGroup = _FormGroup3['default'];
exports.Glyphicon = _Glyphicon3['default'];
exports.Grid = _Grid3['default'];
exports.HelpBlock = _HelpBlock3['default'];
exports.Image = _Image3['default'];
exports.InputGroup = _InputGroup3['default'];
exports.Jumbotron = _Jumbotron3['default'];
exports.Label = _Label3['default'];
exports.ListGroup = _ListGroup3['default'];
exports.ListGroupItem = _ListGroupItem3['default'];
exports.Media = _Media3['default'];
exports.MenuItem = _MenuItem3['default'];
exports.Modal = _Modal3['default'];
exports.ModalBody = _ModalBody3['default'];
exports.ModalFooter = _ModalFooter3['default'];
exports.ModalHeader = _ModalHeader3['default'];
exports.ModalTitle = _ModalTitle3['default'];
exports.Nav = _Nav3['default'];
exports.Navbar = _Navbar3['default'];
exports.NavbarBrand = _NavbarBrand3['default'];
exports.NavDropdown = _NavDropdown3['default'];
exports.NavItem = _NavItem3['default'];
exports.Overlay = _Overlay3['default'];
exports.OverlayTrigger = _OverlayTrigger3['default'];
exports.PageHeader = _PageHeader3['default'];
exports.PageItem = _PageItem3['default'];
exports.Pager = _Pager3['default'];
exports.Pagination = _Pagination3['default'];
exports.Panel = _Panel3['default'];
exports.PanelGroup = _PanelGroup3['default'];
exports.Popover = _Popover3['default'];
exports.ProgressBar = _ProgressBar3['default'];
exports.Radio = _Radio3['default'];
exports.ResponsiveEmbed = _ResponsiveEmbed3['default'];
exports.Row = _Row3['default'];
exports.SafeAnchor = _SafeAnchor3['default'];
exports.SplitButton = _SplitButton3['default'];
exports.Tab = _Tab3['default'];
exports.TabContainer = _TabContainer3['default'];
exports.TabContent = _TabContent3['default'];
exports.Table = _Table3['default'];
exports.TabPane = _TabPane3['default'];
exports.Tabs = _Tabs3['default'];
exports.Thumbnail = _Thumbnail3['default'];
exports.Tooltip = _Tooltip3['default'];
exports.Well = _Well3['default'];
exports.utils = _utils;
},{"./Accordion":43,"./Alert":44,"./Badge":45,"./Breadcrumb":46,"./BreadcrumbItem":47,"./Button":48,"./ButtonGroup":49,"./ButtonToolbar":50,"./Carousel":51,"./CarouselItem":53,"./Checkbox":54,"./Clearfix":55,"./Col":56,"./Collapse":57,"./ControlLabel":58,"./Dropdown":59,"./DropdownButton":60,"./Fade":63,"./Form":64,"./FormControl":65,"./FormGroup":68,"./Glyphicon":69,"./Grid":70,"./HelpBlock":71,"./Image":72,"./InputGroup":73,"./Jumbotron":76,"./Label":77,"./ListGroup":78,"./ListGroupItem":79,"./Media":80,"./MenuItem":87,"./Modal":88,"./ModalBody":89,"./ModalFooter":91,"./ModalHeader":92,"./ModalTitle":93,"./Nav":94,"./NavDropdown":95,"./NavItem":96,"./Navbar":97,"./NavbarBrand":98,"./Overlay":102,"./OverlayTrigger":103,"./PageHeader":104,"./PageItem":105,"./Pager":106,"./Pagination":108,"./Panel":110,"./PanelGroup":111,"./Popover":112,"./ProgressBar":113,"./Radio":114,"./ResponsiveEmbed":115,"./Row":116,"./SafeAnchor":117,"./SplitButton":118,"./Tab":120,"./TabContainer":121,"./TabContent":122,"./TabPane":123,"./Table":124,"./Tabs":125,"./Thumbnail":126,"./Tooltip":127,"./Well":128,"./utils":138}],130:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.requiredRoles = requiredRoles;
exports.exclusiveRoles = exclusiveRoles;

var _createChainableTypeChecker = require('react-prop-types/lib/utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

var _ValidComponentChildren = require('./ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function requiredRoles() {
  for (var _len = arguments.length, roles = Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }

  return (0, _createChainableTypeChecker2['default'])(function (props, propName, component) {
    var missing = void 0;

    roles.every(function (role) {
      if (!_ValidComponentChildren2['default'].some(props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error('(children) ' + component + ' - Missing a required child with bsRole: ' + (missing + '. ' + component + ' must have at least one child of each of ') + ('the following bsRoles: ' + roles.join(', ')));
    }

    return null;
  });
}

function exclusiveRoles() {
  for (var _len2 = arguments.length, roles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return (0, _createChainableTypeChecker2['default'])(function (props, propName, component) {
    var duplicate = void 0;

    roles.every(function (role) {
      var childrenWithRole = _ValidComponentChildren2['default'].filter(props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error('(children) ' + component + ' - Duplicate children detected of bsRole: ' + (duplicate + '. Only one child each allowed with the following ') + ('bsRoles: ' + roles.join(', ')));
    }

    return null;
  });
}
},{"./ValidComponentChildren":133,"react-prop-types/lib/utils/createChainableTypeChecker":291}],131:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var Size = exports.Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};

var SIZE_MAP = exports.SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

var DEVICE_SIZES = exports.DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

var State = exports.State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
};

var Style = exports.Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse'
};
},{}],132:[function(require,module,exports){
'use strict';

exports.__esModule = true;
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    // eslint-disable-line guard-for-in
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = ReactTransitionEvents;
module.exports = exports['default'];
},{}],133:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */
function map(children, func, context) {
  var index = 0;

  return _react2['default'].Children.map(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}

/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */
// TODO: This module should be ElementChildren, and should use named exports.

function forEach(children, func, context) {
  var index = 0;

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function count(children) {
  var result = 0;

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    ++result;
  });

  return result;
}

/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */
function filter(children, func, context) {
  var index = 0;
  var result = [];

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });

  return result;
}

function find(children, func, context) {
  var index = 0;
  var result = undefined;

  _react2['default'].Children.forEach(children, function (child) {
    if (result) {
      return;
    }
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });

  return result;
}

function every(children, func, context) {
  var index = 0;
  var result = true;

  _react2['default'].Children.forEach(children, function (child) {
    if (!result) {
      return;
    }
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });

  return result;
}

function some(children, func, context) {
  var index = 0;
  var result = false;

  _react2['default'].Children.forEach(children, function (child) {
    if (result) {
      return;
    }
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });

  return result;
}

function toArray(children) {
  var result = [];

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    result.push(child);
  });

  return result;
}

exports['default'] = {
  map: map,
  forEach: forEach,
  count: count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
};
module.exports = exports['default'];
},{"react":"react"}],134:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports._curry = exports.bsSizes = exports.bsStyles = exports.bsClass = undefined;

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.prefix = prefix;
exports.getClassSet = getClassSet;
exports.splitBsProps = splitBsProps;
exports.splitBsPropsAndOmit = splitBsPropsAndOmit;
exports.addStyle = addStyle;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _StyleConfig = require('./StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];
    if (typeof last === 'function') {
      return fn.apply(undefined, args);
    }
    return function (Component) {
      return fn.apply(undefined, args.concat([Component]));
    };
  };
} // TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.

function prefix(props, variant) {
  !(props.bsClass != null) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2['default'])(false, 'A `bsClass` prop is required for this component') : (0, _invariant2['default'])(false) : void 0;
  return props.bsClass + (variant ? '-' + variant : '');
}

var bsClass = exports.bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});

  propTypes.bsClass = _react.PropTypes.string;
  defaultProps.bsClass = defaultClass;

  return Component;
});

var bsStyles = exports.bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};

  styles.forEach(function (style) {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });

  var propType = _react.PropTypes.oneOf(existing);

  // expose the values on the propType function for documentation
  Component.STYLES = propType._values = existing;

  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});

var bsSizes = exports.bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};

  sizes.forEach(function (size) {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });

  var values = [];
  existing.forEach(function (size) {
    var mappedSize = _StyleConfig.SIZE_MAP[size];
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = _react.PropTypes.oneOf(values);
  propType._values = values;

  // expose the values on the propType function for documentation
  Component.SIZES = existing;

  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }
    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});

function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = _StyleConfig.SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}

function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var elementProps = {};
  (0, _entries2['default'])(props).forEach(function (_ref) {
    var propName = _ref[0];
    var propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

function splitBsPropsAndOmit(props, omittedPropNames) {
  var isOmittedProp = {};
  omittedPropNames.forEach(function (propName) {
    isOmittedProp[propName] = true;
  });

  var elementProps = {};
  (0, _entries2['default'])(props).forEach(function (_ref2) {
    var propName = _ref2[0];
    var propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */
function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant, Component);
}

var _curry = exports._curry = curry;
}).call(this,require('_process'))

},{"./StyleConfig":131,"_process":39,"babel-runtime/core-js/object/entries":143,"babel-runtime/helpers/extends":149,"invariant":270,"react":"react"}],135:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = capitalize;
function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];
},{}],136:[function(require,module,exports){
'use strict';

exports.__esModule = true;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports['default'] = createChainedFunction;
module.exports = exports['default'];
},{}],137:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports._resetWarned = _resetWarned;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message = void 0;

  if ((typeof oldname === 'undefined' ? 'undefined' : (0, _typeof3['default'])(oldname)) === 'object') {
    message = oldname.message;
  } else {
    message = oldname + ' is deprecated. Use ' + newname + ' instead.';

    if (link) {
      message += '\nYou can read more about it at ' + link;
    }
  }

  if (warned[message]) {
    return;
  }

  process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(false, message) : void 0;
  warned[message] = true;
}

deprecationWarning.wrapper = function (Component) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (_Component) {
    (0, _inherits3['default'])(DeprecatedComponent, _Component);

    function DeprecatedComponent() {
      (0, _classCallCheck3['default'])(this, DeprecatedComponent);
      return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
    }

    DeprecatedComponent.prototype.componentWillMount = function componentWillMount() {
      deprecationWarning.apply(undefined, args);

      if (_Component.prototype.componentWillMount) {
        var _Component$prototype$;

        for (var _len2 = arguments.length, methodArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          methodArgs[_key2] = arguments[_key2];
        }

        (_Component$prototype$ = _Component.prototype.componentWillMount).call.apply(_Component$prototype$, [this].concat(methodArgs));
      }
    };

    return DeprecatedComponent;
  }(Component);
};

exports['default'] = deprecationWarning;
function _resetWarned() {
  warned = {};
}
}).call(this,require('_process'))

},{"_process":39,"babel-runtime/helpers/classCallCheck":148,"babel-runtime/helpers/inherits":150,"babel-runtime/helpers/possibleConstructorReturn":152,"babel-runtime/helpers/typeof":153,"warning":295}],138:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.ValidComponentChildren = exports.createChainedFunction = exports.bootstrapUtils = undefined;

var _bootstrapUtils2 = require('./bootstrapUtils');

var _bootstrapUtils = _interopRequireWildcard(_bootstrapUtils2);

var _createChainedFunction2 = require('./createChainedFunction');

var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

var _ValidComponentChildren2 = require('./ValidComponentChildren');

var _ValidComponentChildren3 = _interopRequireDefault(_ValidComponentChildren2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

exports.bootstrapUtils = _bootstrapUtils;
exports.createChainedFunction = _createChainedFunction3['default'];
exports.ValidComponentChildren = _ValidComponentChildren3['default'];
},{"./ValidComponentChildren":133,"./bootstrapUtils":134,"./createChainedFunction":136}],139:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

exports["default"] = splitComponentProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;

  var parentProps = {};
  var childProps = {};

  (0, _entries2["default"])(props).forEach(function (_ref) {
    var propName = _ref[0];
    var propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}
module.exports = exports["default"];
},{"babel-runtime/core-js/object/entries":143}],140:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":154}],141:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":155}],142:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":156}],143:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":157}],144:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":158}],145:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/values"), __esModule: true };
},{"core-js/library/fn/object/values":159}],146:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":160}],147:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":161}],148:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],149:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":141}],150:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":142,"../core-js/object/set-prototype-of":144,"../helpers/typeof":153}],151:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],152:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":153}],153:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":146,"../core-js/symbol/iterator":147}],154:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":168,"../../modules/es6.array.from":227,"../../modules/es6.string.iterator":233}],155:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":168,"../../modules/es6.object.assign":229}],156:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":168,"../../modules/es6.object.create":230}],157:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;
},{"../../modules/_core":168,"../../modules/es7.object.entries":235}],158:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":168,"../../modules/es6.object.set-prototype-of":231}],159:[function(require,module,exports){
require('../../modules/es7.object.values');
module.exports = require('../../modules/_core').Object.values;
},{"../../modules/_core":168,"../../modules/es7.object.values":236}],160:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":168,"../../modules/es6.object.to-string":232,"../../modules/es6.symbol":234,"../../modules/es7.symbol.async-iterator":237,"../../modules/es7.symbol.observable":238}],161:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":224,"../../modules/es6.string.iterator":233,"../../modules/web.dom.iterable":239}],162:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],163:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],164:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":186}],165:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":216,"./_to-iobject":218,"./_to-length":219}],166:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":167,"./_wks":225}],167:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],168:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],169:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":198,"./_property-desc":209}],170:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":162}],171:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],172:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":177}],173:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":178,"./_is-object":186}],174:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],175:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":203,"./_object-keys":206,"./_object-pie":207}],176:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":168,"./_ctx":170,"./_global":178,"./_hide":180}],177:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],178:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],179:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],180:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":172,"./_object-dp":198,"./_property-desc":209}],181:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":178}],182:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":172,"./_dom-create":173,"./_fails":177}],183:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":167}],184:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":192,"./_wks":225}],185:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":167}],186:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],187:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":164}],188:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":180,"./_object-create":197,"./_property-desc":209,"./_set-to-string-tag":212,"./_wks":225}],189:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":176,"./_has":179,"./_hide":180,"./_iter-create":188,"./_iterators":192,"./_library":194,"./_object-gpo":204,"./_redefine":210,"./_set-to-string-tag":212,"./_wks":225}],190:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":225}],191:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],192:[function(require,module,exports){
module.exports = {};
},{}],193:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":206,"./_to-iobject":218}],194:[function(require,module,exports){
module.exports = true;
},{}],195:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":177,"./_has":179,"./_is-object":186,"./_object-dp":198,"./_uid":222}],196:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":177,"./_iobject":183,"./_object-gops":203,"./_object-keys":206,"./_object-pie":207,"./_to-object":220}],197:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":164,"./_dom-create":173,"./_enum-bug-keys":174,"./_html":181,"./_object-dps":199,"./_shared-key":213}],198:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":164,"./_descriptors":172,"./_ie8-dom-define":182,"./_to-primitive":221}],199:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":164,"./_descriptors":172,"./_object-dp":198,"./_object-keys":206}],200:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":172,"./_has":179,"./_ie8-dom-define":182,"./_object-pie":207,"./_property-desc":209,"./_to-iobject":218,"./_to-primitive":221}],201:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":202,"./_to-iobject":218}],202:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":174,"./_object-keys-internal":205}],203:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],204:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":179,"./_shared-key":213,"./_to-object":220}],205:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":165,"./_has":179,"./_shared-key":213,"./_to-iobject":218}],206:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":174,"./_object-keys-internal":205}],207:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],208:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject')
  , isEnum    = require('./_object-pie').f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./_object-keys":206,"./_object-pie":207,"./_to-iobject":218}],209:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],210:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":180}],211:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":164,"./_ctx":170,"./_is-object":186,"./_object-gopd":200}],212:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":179,"./_object-dp":198,"./_wks":225}],213:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":214,"./_uid":222}],214:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":178}],215:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":171,"./_to-integer":217}],216:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":217}],217:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],218:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":171,"./_iobject":183}],219:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":217}],220:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":171}],221:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":186}],222:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],223:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":168,"./_global":178,"./_library":194,"./_object-dp":198,"./_wks-ext":224}],224:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":225}],225:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":178,"./_shared":214,"./_uid":222}],226:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":166,"./_core":168,"./_iterators":192,"./_wks":225}],227:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":169,"./_ctx":170,"./_export":176,"./_is-array-iter":184,"./_iter-call":187,"./_iter-detect":190,"./_to-length":219,"./_to-object":220,"./core.get-iterator-method":226}],228:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":163,"./_iter-define":189,"./_iter-step":191,"./_iterators":192,"./_to-iobject":218}],229:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":176,"./_object-assign":196}],230:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":176,"./_object-create":197}],231:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":176,"./_set-proto":211}],232:[function(require,module,exports){

},{}],233:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":189,"./_string-at":215}],234:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":164,"./_descriptors":172,"./_enum-keys":175,"./_export":176,"./_fails":177,"./_global":178,"./_has":179,"./_hide":180,"./_is-array":185,"./_keyof":193,"./_library":194,"./_meta":195,"./_object-create":197,"./_object-dp":198,"./_object-gopd":200,"./_object-gopn":202,"./_object-gopn-ext":201,"./_object-gops":203,"./_object-keys":206,"./_object-pie":207,"./_property-desc":209,"./_redefine":210,"./_set-to-string-tag":212,"./_shared":214,"./_to-iobject":218,"./_to-primitive":221,"./_uid":222,"./_wks":225,"./_wks-define":223,"./_wks-ext":224}],235:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export  = require('./_export')
  , $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./_export":176,"./_object-to-array":208}],236:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export')
  , $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
},{"./_export":176,"./_object-to-array":208}],237:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":223}],238:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":223}],239:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":178,"./_hide":180,"./_iterators":192,"./_wks":225,"./es6.array.iterator":228}],240:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],241:[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

/**
 * document.activeElement
 */
exports['default'] = activeElement;

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

function activeElement() {
  var doc = arguments[0] === undefined ? document : arguments[0];

  try {
    return doc.activeElement;
  } catch (e) {}
}

module.exports = exports['default'];
},{"./ownerDocument":250,"./util/babelHelpers.js":263}],242:[function(require,module,exports){
'use strict';
var hasClass = require('./hasClass');

module.exports = function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element)) element.className = element.className + ' ' + className;
};
},{"./hasClass":243}],243:[function(require,module,exports){
'use strict';
module.exports = function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
};
},{}],244:[function(require,module,exports){
'use strict';

module.exports = {
  addClass: require('./addClass'),
  removeClass: require('./removeClass'),
  hasClass: require('./hasClass')
};
},{"./addClass":242,"./hasClass":243,"./removeClass":245}],245:[function(require,module,exports){
'use strict';

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};
},{}],246:[function(require,module,exports){
'use strict';

var contains = require('../query/contains'),
    qsa = require('../query/querySelectorAll');

module.exports = function (selector, handler) {
  return function (e) {
    var top = e.currentTarget,
        target = e.target,
        matches = qsa(top, selector);

    if (matches.some(function (match) {
      return contains(match, target);
    })) handler.call(this, e);
  };
};
},{"../query/contains":251,"../query/querySelectorAll":256}],247:[function(require,module,exports){
'use strict';
var on = require('./on'),
    off = require('./off'),
    filter = require('./filter');

module.exports = { on: on, off: off, filter: filter };
},{"./filter":246,"./off":248,"./on":249}],248:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');
var off = function off() {};

if (canUseDOM) {

  off = (function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  })();
}

module.exports = off;
},{"../util/inDOM":268}],249:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');
var on = function on() {};

if (canUseDOM) {
  on = (function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, handler);
    };
  })();
}

module.exports = on;
},{"../util/inDOM":268}],250:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];
},{}],251:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');

var contains = (function () {
  var root = canUseDOM && document.documentElement;

  return root && root.contains ? function (context, node) {
    return context.contains(node);
  } : root && root.compareDocumentPosition ? function (context, node) {
    return context === node || !!(context.compareDocumentPosition(node) & 16);
  } : function (context, node) {
    if (node) do {
      if (node === context) return true;
    } while (node = node.parentNode);

    return false;
  };
})();

module.exports = contains;
},{"../util/inDOM":268}],252:[function(require,module,exports){
'use strict';

module.exports = function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
};
},{}],253:[function(require,module,exports){
'use strict';
var contains = require('./contains'),
    getWindow = require('./isWindow'),
    ownerDocument = require('../ownerDocument');

module.exports = function offset(node) {
  var doc = ownerDocument(node),
      win = getWindow(doc),
      docElem = doc && doc.documentElement,
      box = { top: 0, left: 0, height: 0, width: 0 };

  if (!doc) return;

  // Make sure it's not a disconnected DOM node
  if (!contains(docElem, node)) return box;

  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();

  if (box.width || box.height) {

    box = {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
      width: (box.width == null ? node.offsetWidth : box.width) || 0,
      height: (box.height == null ? node.offsetHeight : box.height) || 0
    };
  }

  return box;
};
},{"../ownerDocument":250,"./contains":251,"./isWindow":252}],254:[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

exports.__esModule = true;
exports['default'] = offsetParent;

var _ownerDocument = require('../ownerDocument');

var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

var _style = require('../style');

var _style2 = babelHelpers.interopRequireDefault(_style);

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument2['default'])(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style2['default'])(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}

module.exports = exports['default'];
},{"../ownerDocument":250,"../style":260,"../util/babelHelpers.js":263}],255:[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

exports.__esModule = true;
exports['default'] = position;

var _offset = require('./offset');

var _offset2 = babelHelpers.interopRequireDefault(_offset);

var _offsetParent = require('./offsetParent');

var _offsetParent2 = babelHelpers.interopRequireDefault(_offsetParent);

var _scrollTop = require('./scrollTop');

var _scrollTop2 = babelHelpers.interopRequireDefault(_scrollTop);

var _scrollLeft = require('./scrollLeft');

var _scrollLeft2 = babelHelpers.interopRequireDefault(_scrollLeft);

var _style = require('../style');

var _style2 = babelHelpers.interopRequireDefault(_style);

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = { top: 0, left: 0 },
      offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if ((0, _style2['default'])(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent2['default'])(node);
    offset = (0, _offset2['default'])(node);

    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset2['default'])(offsetParent);

    parentOffset.top += parseInt((0, _style2['default'])(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop2['default'])(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style2['default'])(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft2['default'])(offsetParent) || 0;
  }

  // Subtract parent offsets and node margins
  return babelHelpers._extends({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style2['default'])(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style2['default'])(node, 'marginLeft'), 10) || 0)
  });
}

module.exports = exports['default'];
},{"../style":260,"../util/babelHelpers.js":263,"./offset":253,"./offsetParent":254,"./scrollLeft":257,"./scrollTop":258}],256:[function(require,module,exports){
'use strict';
//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/,
    toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

module.exports = function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));

    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
};
},{}],257:[function(require,module,exports){
'use strict';
var getWindow = require('./isWindow');

module.exports = function scrollTop(node, val) {
  var win = getWindow(node);

  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;

  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
};
},{"./isWindow":252}],258:[function(require,module,exports){
'use strict';
var getWindow = require('./isWindow');

module.exports = function scrollTop(node, val) {
  var win = getWindow(node);

  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
};
},{"./isWindow":252}],259:[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

var _utilCamelizeStyle = require('../util/camelizeStyle');

var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

module.exports = function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _utilCamelizeStyle2['default'])(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
};
},{"../util/babelHelpers.js":263,"../util/camelizeStyle":265}],260:[function(require,module,exports){
'use strict';

var camelize = require('../util/camelizeStyle'),
    hyphenate = require('../util/hyphenateStyle'),
    _getComputedStyle = require('./getComputedStyle'),
    removeStyle = require('./removeStyle');

var has = Object.prototype.hasOwnProperty;

module.exports = function style(node, property, value) {
  var css = '',
      props = property;

  if (typeof property === 'string') {

    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
  }

  for (var key in props) if (has.call(props, key)) {
    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
  }

  node.style.cssText += ';' + css;
};
},{"../util/camelizeStyle":265,"../util/hyphenateStyle":267,"./getComputedStyle":259,"./removeStyle":261}],261:[function(require,module,exports){
'use strict';

module.exports = function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
};
},{}],262:[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');

var has = Object.prototype.hasOwnProperty,
    transform = 'transform',
    transition = {},
    transitionTiming,
    transitionDuration,
    transitionProperty,
    transitionDelay;

if (canUseDOM) {
  transition = getTransitionProperties();

  transform = transition.prefix + transform;

  transitionProperty = transition.prefix + 'transition-property';
  transitionDuration = transition.prefix + 'transition-duration';
  transitionDelay = transition.prefix + 'transition-delay';
  transitionTiming = transition.prefix + 'transition-timing-function';
}

module.exports = {
  transform: transform,
  end: transition.end,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};

function getTransitionProperties() {
  var endEvent,
      prefix = '',
      transitions = {
    O: 'otransitionend',
    Moz: 'transitionend',
    Webkit: 'webkitTransitionEnd',
    ms: 'MSTransitionEnd'
  };

  var element = document.createElement('div');

  for (var vendor in transitions) if (has.call(transitions, vendor)) {
    if (element.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-';
      endEvent = transitions[vendor];
      break;
    }
  }

  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = 'transitionend';

  return { end: endEvent, prefix: prefix };
}
},{"../util/inDOM":268}],263:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports === "object") {
    factory(exports);
  } else {
    factory(root.babelHelpers = {});
  }
})(this, function (global) {
  var babelHelpers = global;

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  };

  babelHelpers._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
})
},{}],264:[function(require,module,exports){
"use strict";

var rHyphen = /-(.)/g;

module.exports = function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
};
},{}],265:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */

'use strict';
var camelize = require('./camelize');
var msPattern = /^-ms-/;

module.exports = function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
};
},{"./camelize":264}],266:[function(require,module,exports){
'use strict';

var rUpper = /([A-Z])/g;

module.exports = function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
};
},{}],267:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

"use strict";

var hyphenate = require("./hyphenate");
var msPattern = /^ms-/;

module.exports = function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
};
},{"./hyphenate":266}],268:[function(require,module,exports){
'use strict';
module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
},{}],269:[function(require,module,exports){
'use strict';

var canUseDOM = require('./inDOM');

var size;

module.exports = function (recalc) {
  if (!size || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};
},{"./inDOM":268}],270:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":39}],271:[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}],272:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-disable react/prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _ownerDocument = require('./utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _addEventListener = require('./utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _addFocusListener = require('./utils/addFocusListener');

var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _getContainer = require('./utils/getContainer');

var _getContainer2 = _interopRequireDefault(_getContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */
var Modal = _react2.default.createClass({
  displayName: 'Modal',


  propTypes: _extends({}, _Portal2.default.propTypes, {

    /**
     * Set the visibility of the Modal
     */
    show: _react2.default.PropTypes.bool,

    /**
     * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
     *
     * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
     * page content can be placed behind a virtual backdrop as well as a visual one.
     */
    container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func]),

    /**
     * A callback fired when the Modal is opening.
     */
    onShow: _react2.default.PropTypes.func,

    /**
     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
     *
     * The `onHide` callback only signals intent from the Modal,
     * you must actually set the `show` prop to `false` for the Modal to close.
     */
    onHide: _react2.default.PropTypes.func,

    /**
     * Include a backdrop component.
     */
    backdrop: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['static'])]),

    /**
     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
     */
    onEscapeKeyUp: _react2.default.PropTypes.func,

    /**
     * A callback fired when the backdrop, if specified, is clicked.
     */
    onBackdropClick: _react2.default.PropTypes.func,

    /**
     * A style object for the backdrop component.
     */
    backdropStyle: _react2.default.PropTypes.object,

    /**
     * A css class or classes for the backdrop component.
     */
    backdropClassName: _react2.default.PropTypes.string,

    /**
     * A css class or set of classes applied to the modal container when the modal is open,
     * and removed when it is closed.
     */
    containerClassName: _react2.default.PropTypes.string,

    /**
     * Close the modal when escape key is pressed
     */
    keyboard: _react2.default.PropTypes.bool,

    /**
     * A `<Transition/>` component to use for the dialog and backdrop components.
     */
    transition: _elementType2.default,

    /**
     * The `timeout` of the dialog transition if specified. This number is used to ensure that
     * transition callbacks are always fired, even if browser transition events are canceled.
     *
     * See the Transition `timeout` prop for more infomation.
     */
    dialogTransitionTimeout: _react2.default.PropTypes.number,

    /**
     * The `timeout` of the backdrop transition if specified. This number is used to
     * ensure that transition callbacks are always fired, even if browser transition events are canceled.
     *
     * See the Transition `timeout` prop for more infomation.
     */
    backdropTransitionTimeout: _react2.default.PropTypes.number,

    /**
     * When `true` The modal will automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes. This also
     * works correctly with any Modal children that have the `autoFocus` prop.
     *
     * Generally this should never be set to `false` as it makes the Modal less
     * accessible to assistive technologies, like screen readers.
     */
    autoFocus: _react2.default.PropTypes.bool,

    /**
     * When `true` The modal will prevent focus from leaving the Modal while open.
     *
     * Generally this should never be set to `false` as it makes the Modal less
     * accessible to assistive technologies, like screen readers.
     */
    enforceFocus: _react2.default.PropTypes.bool,

    /**
     * Callback fired before the Modal transitions in
     */
    onEnter: _react2.default.PropTypes.func,

    /**
     * Callback fired as the Modal begins to transition in
     */
    onEntering: _react2.default.PropTypes.func,

    /**
     * Callback fired after the Modal finishes transitioning in
     */
    onEntered: _react2.default.PropTypes.func,

    /**
     * Callback fired right before the Modal transitions out
     */
    onExit: _react2.default.PropTypes.func,

    /**
     * Callback fired as the Modal begins to transition out
     */
    onExiting: _react2.default.PropTypes.func,

    /**
     * Callback fired after the Modal finishes transitioning out
     */
    onExited: _react2.default.PropTypes.func

  }),

  getDefaultProps: function getDefaultProps() {
    var noop = function noop() {};

    return {
      show: false,
      backdrop: true,
      keyboard: true,
      autoFocus: true,
      enforceFocus: true,
      onHide: noop
    };
  },
  getInitialState: function getInitialState() {
    return { exited: !this.props.show };
  },
  render: function render() {
    var _props = this.props;
    var show = _props.show;
    var container = _props.container;
    var children = _props.children;
    var Transition = _props.transition;
    var backdrop = _props.backdrop;
    var dialogTransitionTimeout = _props.dialogTransitionTimeout;
    var className = _props.className;
    var style = _props.style;
    var onExit = _props.onExit;
    var onExiting = _props.onExiting;
    var onEnter = _props.onEnter;
    var onEntering = _props.onEntering;
    var onEntered = _props.onEntered;


    var dialog = _react2.default.Children.only(children);

    var mountModal = show || Transition && !this.state.exited;
    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props;
    var role = _dialog$props.role;
    var tabIndex = _dialog$props.tabIndex;


    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(
        Transition,
        {
          transitionAppear: true,
          unmountOnExit: true,
          'in': show,
          timeout: dialogTransitionTimeout,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        dialog
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      {
        ref: this.setMountNode,
        container: container
      },
      _react2.default.createElement(
        'div',
        {
          ref: 'modal',
          role: role || 'dialog',
          style: style,
          className: className
        },
        backdrop && this.renderBackdrop(),
        dialog
      )
    );
  },
  renderBackdrop: function renderBackdrop() {
    var _props2 = this.props;
    var Transition = _props2.transition;
    var backdropTransitionTimeout = _props2.backdropTransitionTimeout;


    var backdrop = _react2.default.createElement('div', { ref: 'backdrop',
      style: this.props.backdropStyle,
      className: this.props.backdropClassName,
      onClick: this.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(
        Transition,
        { transitionAppear: true,
          'in': this.props.show,
          timeout: backdropTransitionTimeout
        },
        backdrop
      );
    }

    return backdrop;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  },
  componentWillUpdate: function componentWillUpdate(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.checkForFocus();
    }
  },
  componentDidMount: function componentDidMount() {
    if (this.props.show) {
      this.onShow();
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var transition = this.props.transition;


    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    var _props3 = this.props;
    var show = _props3.show;
    var transition = _props3.transition;


    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  },
  onShow: function onShow() {
    var doc = (0, _ownerDocument2.default)(this);
    var container = (0, _getContainer2.default)(this.props.container, doc.body);

    modalManager.add(this, container, this.props.containerClassName);

    this._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleDocumentKeyUp);

    this._onFocusinListener = (0, _addFocusListener2.default)(this.enforceFocus);

    this.focus();

    if (this.props.onShow) {
      this.props.onShow();
    }
  },
  onHide: function onHide() {
    modalManager.remove(this);

    this._onDocumentKeyupListener.remove();

    this._onFocusinListener.remove();

    this.restoreLastFocus();
  },
  setMountNode: function setMountNode(ref) {
    this.mountNode = ref ? ref.getMountNode() : ref;
  },
  handleHidden: function handleHidden() {
    this.setState({ exited: true });
    this.onHide();

    if (this.props.onExited) {
      var _props4;

      (_props4 = this.props).onExited.apply(_props4, arguments);
    }
  },
  handleBackdropClick: function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (this.props.onBackdropClick) {
      this.props.onBackdropClick(e);
    }

    if (this.props.backdrop === true) {
      this.props.onHide();
    }
  },
  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
      if (this.props.onEscapeKeyUp) {
        this.props.onEscapeKeyUp(e);
      }
      this.props.onHide();
    }
  },
  checkForFocus: function checkForFocus() {
    if (_inDOM2.default) {
      this.lastFocus = (0, _activeElement2.default)();
    }
  },
  focus: function focus() {
    var autoFocus = this.props.autoFocus;
    var modalContent = this.getDialogElement();
    var current = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
    var focusInModal = current && (0, _contains2.default)(modalContent, current);

    if (modalContent && autoFocus && !focusInModal) {
      this.lastFocus = current;

      if (!modalContent.hasAttribute('tabIndex')) {
        modalContent.setAttribute('tabIndex', -1);
        (0, _warning2.default)(false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
      }

      modalContent.focus();
    }
  },
  restoreLastFocus: function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  },
  enforceFocus: function enforceFocus() {
    var enforceFocus = this.props.enforceFocus;


    if (!enforceFocus || !this.isMounted() || !this.isTopModal()) {
      return;
    }

    var active = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
    var modal = this.getDialogElement();

    if (modal && modal !== active && !(0, _contains2.default)(modal, active)) {
      modal.focus();
    }
  },


  //instead of a ref, which might conflict with one the parent applied.
  getDialogElement: function getDialogElement() {
    var node = this.refs.modal;
    return node && node.lastChild;
  },
  isTopModal: function isTopModal() {
    return modalManager.isTopModal(this);
  }
});

Modal.manager = modalManager;

exports.default = Modal;
module.exports = exports['default'];
},{"./ModalManager":273,"./Portal":275,"./utils/addEventListener":279,"./utils/addFocusListener":280,"./utils/getContainer":283,"./utils/ownerDocument":286,"dom-helpers/activeElement":241,"dom-helpers/query/contains":251,"dom-helpers/util/inDOM":268,"react":"react","react-prop-types/lib/componentOrElement":288,"react-prop-types/lib/elementType":289,"warning":295}],273:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _class = require('dom-helpers/class');

var _class2 = _interopRequireDefault(_class);

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = require('./utils/isOverflowing');

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = require('./utils/manageAriaHidden');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}

/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function () {
  function ModalManager() {
    var hideSiblingNodes = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    _classCallCheck(this, ModalManager);

    this.hideSiblingNodes = hideSiblingNodes;
    this.modals = [];
    this.containers = [];
    this.data = [];
  }

  _createClass(ModalManager, [{
    key: 'add',
    value: function add(modal, container, className) {
      var modalIdx = this.modals.indexOf(modal);
      var containerIdx = this.containers.indexOf(container);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = this.modals.length;
      this.modals.push(modal);

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
      }

      if (containerIdx !== -1) {
        this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        //right now only the first modal of a container will have its classes applied
        classes: className ? className.split(/\s+/) : [],
        //we are only interested in the actual `style` here becasue we will override it
        style: {
          overflow: container.style.overflow,
          paddingRight: container.style.paddingRight
        }
      };

      var style = { overflow: 'hidden' };

      data.overflowing = (0, _isOverflowing2.default)(container);

      if (data.overflowing) {
        // use computed style, here to get the real padding
        // to add our scrollbar width
        style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
      }

      (0, _style2.default)(container, style);

      data.classes.forEach(_class2.default.addClass.bind(null, container));

      this.containers.push(container);
      this.data.push(data);

      return modalIdx;
    }
  }, {
    key: 'remove',
    value: function remove(modal) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return;
      }

      var containerIdx = findContainer(this.data, modal);
      var data = this.data[containerIdx];
      var container = this.containers[containerIdx];

      data.modals.splice(data.modals.indexOf(modal), 1);

      this.modals.splice(modalIdx, 1);

      // if that was the last modal in a container,
      // clean up the container stylinhg.
      if (data.modals.length === 0) {
        Object.keys(data.style).forEach(function (key) {
          return container.style[key] = data.style[key];
        });

        data.classes.forEach(_class2.default.removeClass.bind(null, container));

        if (this.hideSiblingNodes) {
          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
        }
        this.containers.splice(containerIdx, 1);
        this.data.splice(containerIdx, 1);
      } else if (this.hideSiblingNodes) {
        //otherwise make sure the next top modal is visible to a SR
        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
      }
    }
  }, {
    key: 'isTopModal',
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();

exports.default = ModalManager;
module.exports = exports['default'];
},{"./utils/isOverflowing":284,"./utils/manageAriaHidden":285,"dom-helpers/class":244,"dom-helpers/style":260,"dom-helpers/util/scrollbarSize":269}],274:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = require('./RootCloseWrapper');

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */
var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, props, context));

    _this.state = { exited: !props.show };
    _this.onHiddenListener = _this.handleHidden.bind(_this);
    return _this;
  }

  _createClass(Overlay, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show) {
        this.setState({ exited: false });
      } else if (!nextProps.transition) {
        // Otherwise let handleHidden take care of marking exited.
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var container = _props.container;
      var containerPadding = _props.containerPadding;
      var target = _props.target;
      var placement = _props.placement;
      var shouldUpdatePosition = _props.shouldUpdatePosition;
      var rootClose = _props.rootClose;
      var children = _props.children;
      var Transition = _props.transition;

      var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'shouldUpdatePosition', 'rootClose', 'children', 'transition']);

      // Don't un-render the overlay while it's transitioning out.


      var mountOverlay = props.show || Transition && !this.state.exited;
      if (!mountOverlay) {
        // Don't bother showing anything if we don't have to.
        return null;
      }

      var child = children;

      // Position is be inner-most because it adds inline styles into the child,
      // which the other wrappers don't forward correctly.
      child = _react2.default.createElement(
        _Position2.default,
        { container: container, containerPadding: containerPadding, target: target, placement: placement, shouldUpdatePosition: shouldUpdatePosition },
        child
      );

      if (Transition) {
        var onExit = props.onExit;
        var onExiting = props.onExiting;
        var onEnter = props.onEnter;
        var onEntering = props.onEntering;
        var onEntered = props.onEntered;

        // This animates the child node by injecting props, so it must precede
        // anything that adds a wrapping div.

        child = _react2.default.createElement(
          Transition,
          {
            'in': props.show,
            transitionAppear: true,
            onExit: onExit,
            onExiting: onExiting,
            onExited: this.onHiddenListener,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered
          },
          child
        );
      }

      // This goes after everything else because it adds a wrapping div.
      if (rootClose) {
        child = _react2.default.createElement(
          _RootCloseWrapper2.default,
          { onRootClose: props.onHide },
          child
        );
      }

      return _react2.default.createElement(
        _Portal2.default,
        { container: container },
        child
      );
    }
  }, {
    key: 'handleHidden',
    value: function handleHidden() {
      this.setState({ exited: true });

      if (this.props.onExited) {
        var _props2;

        (_props2 = this.props).onExited.apply(_props2, arguments);
      }
    }
  }]);

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _Portal2.default.propTypes, _Position2.default.propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _react2.default.PropTypes.bool,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _react2.default.PropTypes.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _react2.default.PropTypes.func;
    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(undefined, [props].concat(args));
  },


  /**
   * A `<Transition/>` component used to animate the overlay changes visibility.
   */
  transition: _elementType2.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _react2.default.PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _react2.default.PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _react2.default.PropTypes.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _react2.default.PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _react2.default.PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _react2.default.PropTypes.func
});

exports.default = Overlay;
module.exports = exports['default'];
},{"./Portal":275,"./Position":276,"./RootCloseWrapper":277,"react":"react","react-prop-types/lib/elementType":289}],275:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _ownerDocument = require('./utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _getContainer = require('./utils/getContainer');

var _getContainer2 = _interopRequireDefault(_getContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = _react2.default.createClass({

  displayName: 'Portal',

  propTypes: {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func])
  },

  componentDidMount: function componentDidMount() {
    this._renderOverlay();
  },
  componentDidUpdate: function componentDidUpdate() {
    this._renderOverlay();
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  },
  _mountOverlayTarget: function _mountOverlayTarget() {
    if (!this._overlayTarget) {
      this._overlayTarget = document.createElement('div');
      this._portalContainerNode = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  },
  _unmountOverlayTarget: function _unmountOverlayTarget() {
    if (this._overlayTarget) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
    this._portalContainerNode = null;
  },
  _renderOverlay: function _renderOverlay() {

    var overlay = !this.props.children ? null : _react2.default.Children.only(this.props.children);

    // Save reference for future access.
    if (overlay !== null) {
      this._mountOverlayTarget();
      this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
    } else {
      // Unrender if the component is null for transitions to null
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    }
  },
  _unrenderOverlay: function _unrenderOverlay() {
    if (this._overlayTarget) {
      _reactDom2.default.unmountComponentAtNode(this._overlayTarget);
      this._overlayInstance = null;
    }
  },
  render: function render() {
    return null;
  },
  getMountNode: function getMountNode() {
    return this._overlayTarget;
  },
  getOverlayDOMNode: function getOverlayDOMNode() {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
    }

    if (this._overlayInstance) {
      if (this._overlayInstance.getWrappedDOMNode) {
        return this._overlayInstance.getWrappedDOMNode();
      } else {
        return _reactDom2.default.findDOMNode(this._overlayInstance);
      }
    }

    return null;
  }
});

exports.default = Portal;
module.exports = exports['default'];
},{"./utils/getContainer":283,"./utils/ownerDocument":286,"react":"react","react-dom":"react-dom","react-prop-types/lib/componentOrElement":288}],276:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _calculatePosition = require('./utils/calculatePosition');

var _calculatePosition2 = _interopRequireDefault(_calculatePosition);

var _getContainer = require('./utils/getContainer');

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = require('./utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Position component calculates the coordinates for its child, to position
 * it relative to a `target` component or node. Useful for creating callouts
 * and tooltips, the Position component injects a `style` props with `left` and
 * `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows
 * for giving your components a sense of directionality.
 */
var Position = function (_React$Component) {
  _inherits(Position, _React$Component);

  function Position(props, context) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Position).call(this, props, context));

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };

    _this._needsFlush = false;
    _this._lastTarget = null;
    return _this;
  }

  _createClass(Position, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updatePosition(this.getTarget());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this._needsFlush = true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this._needsFlush) {
        this._needsFlush = false;
        this.maybeUpdatePosition(this.props.placement !== prevProps.placement);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['children', 'className']);

      var _state = this.state;
      var positionLeft = _state.positionLeft;
      var positionTop = _state.positionTop;

      var arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);

      // These should not be forwarded to the child.


      delete props.target;
      delete props.container;
      delete props.containerPadding;
      delete props.shouldUpdatePosition;

      var child = _react2.default.Children.only(children);
      return (0, _react.cloneElement)(child, _extends({}, props, arrowPosition, {
        // FIXME: Don't forward `positionLeft` and `positionTop` via both props
        // and `props.style`.
        positionLeft: positionLeft,
        positionTop: positionTop,
        className: (0, _classnames2.default)(className, child.props.className),
        style: _extends({}, child.props.style, {
          left: positionLeft,
          top: positionTop
        })
      }));
    }
  }, {
    key: 'getTarget',
    value: function getTarget() {
      var target = this.props.target;

      var targetElement = typeof target === 'function' ? target() : target;
      return targetElement && _reactDom2.default.findDOMNode(targetElement) || null;
    }
  }, {
    key: 'maybeUpdatePosition',
    value: function maybeUpdatePosition(placementChanged) {
      var target = this.getTarget();

      if (!this.props.shouldUpdatePosition && target === this._lastTarget && !placementChanged) {
        return;
      }

      this.updatePosition(target);
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition(target) {
      this._lastTarget = target;

      if (!target) {
        this.setState({
          positionLeft: 0,
          positionTop: 0,
          arrowOffsetLeft: null,
          arrowOffsetTop: null
        });

        return;
      }

      var overlay = _reactDom2.default.findDOMNode(this);
      var container = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);

      this.setState((0, _calculatePosition2.default)(this.props.placement, overlay, target, container, this.props.containerPadding));
    }
  }]);

  return Position;
}(_react2.default.Component);

Position.propTypes = {
  /**
   * A node, element, or function that returns either. The child will be
   * be positioned next to the `target` specified.
   */
  target: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func]),

  /**
   * "offsetParent" of the component
   */
  container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func]),
  /**
   * Minimum spacing in pixels between container border and component border
   */
  containerPadding: _react2.default.PropTypes.number,
  /**
   * How to position the component relative to the target
   */
  placement: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * Whether the position should be changed on each update
   */
  shouldUpdatePosition: _react2.default.PropTypes.bool
};

Position.displayName = 'Position';

Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};

exports.default = Position;
module.exports = exports['default'];
},{"./utils/calculatePosition":281,"./utils/getContainer":283,"./utils/ownerDocument":286,"classnames":240,"react":"react","react-dom":"react-dom","react-prop-types/lib/componentOrElement":288}],277:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = require('./utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _createChainedFunction = require('./utils/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ownerDocument = require('./utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: Consider using an ES6 symbol here, once we use babel-runtime.
var CLICK_WAS_INSIDE = '__click_was_inside';

var counter = 0;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function getSuppressRootClose() {
  var id = CLICK_WAS_INSIDE + '_' + counter++;
  return {
    id: id,
    suppressRootClose: function suppressRootClose(event) {
      // Tag the native event to prevent the root close logic on document click.
      // This seems safer than using event.nativeEvent.stopImmediatePropagation(),
      // which is only supported in IE >= 9.
      event.nativeEvent[id] = true;
    }
  };
}

var RootCloseWrapper = function (_React$Component) {
  _inherits(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props) {
    _classCallCheck(this, RootCloseWrapper);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RootCloseWrapper).call(this, props));

    _this.handleDocumentMouse = _this.handleDocumentMouse.bind(_this);
    _this.handleDocumentKeyUp = _this.handleDocumentKeyUp.bind(_this);

    var _getSuppressRootClose = getSuppressRootClose();

    var id = _getSuppressRootClose.id;
    var suppressRootClose = _getSuppressRootClose.suppressRootClose;


    _this._suppressRootId = id;

    _this._suppressRootCloseHandler = suppressRootClose;
    return _this;
  }

  _createClass(RootCloseWrapper, [{
    key: 'bindRootCloseHandlers',
    value: function bindRootCloseHandlers() {
      var doc = (0, _ownerDocument2.default)(this);

      this._onDocumentMouseListener = (0, _addEventListener2.default)(doc, this.props.event, this.handleDocumentMouse);

      this._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleDocumentKeyUp);
    }
  }, {
    key: 'handleDocumentMouse',
    value: function handleDocumentMouse(e) {
      // This is now the native event.
      if (e[this._suppressRootId]) {
        return;
      }

      if (this.props.disabled || isModifiedEvent(e) || !isLeftClickEvent(e)) {
        return;
      }

      this.props.onRootClose && this.props.onRootClose();
    }
  }, {
    key: 'handleDocumentKeyUp',
    value: function handleDocumentKeyUp(e) {
      if (e.keyCode === 27 && this.props.onRootClose) {
        this.props.onRootClose();
      }
    }
  }, {
    key: 'unbindRootCloseHandlers',
    value: function unbindRootCloseHandlers() {
      if (this._onDocumentMouseListener) {
        this._onDocumentMouseListener.remove();
      }

      if (this._onDocumentKeyupListener) {
        this._onDocumentKeyupListener.remove();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindRootCloseHandlers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var event = _props.event;
      var noWrap = _props.noWrap;
      var children = _props.children;

      var child = _react2.default.Children.only(children);

      var handlerName = event == 'click' ? 'onClick' : 'onMouseDown';

      if (noWrap) {
        return _react2.default.cloneElement(child, _defineProperty({}, handlerName, (0, _createChainedFunction2.default)(this._suppressRootCloseHandler, child.props[handlerName])));
      }

      // Wrap the child in a new element, so the child won't have to handle
      // potentially combining multiple onClick listeners.
      return _react2.default.createElement(
        'div',
        _defineProperty({}, handlerName, this._suppressRootCloseHandler),
        child
      );
    }
  }, {
    key: 'getWrappedDOMNode',
    value: function getWrappedDOMNode() {
      // We can't use a ref to identify the wrapped child, since we might be
      // stealing the ref from the owner, but we know exactly the DOM structure
      // that will be rendered, so we can just do this to get the child's DOM
      // node for doing size calculations in OverlayMixin.
      var node = _reactDom2.default.findDOMNode(this);
      return this.props.noWrap ? node : node.firstChild;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindRootCloseHandlers();
    }
  }]);

  return RootCloseWrapper;
}(_react2.default.Component);

exports.default = RootCloseWrapper;


RootCloseWrapper.displayName = 'RootCloseWrapper';

RootCloseWrapper.propTypes = {
  onRootClose: _react2.default.PropTypes.func,

  /**
   * Disable the the RootCloseWrapper, preventing it from triggering
   * `onRootClose`.
   */
  disabled: _react2.default.PropTypes.bool,
  /**
   * Passes the suppress click handler directly to the child component instead
   * of placing it on a wrapping div. Only use when you can be sure the child
   * properly handle the click event.
   */
  noWrap: _react2.default.PropTypes.bool,
  /**
   * Choose which document mouse event to bind to
   */
  event: _react2.default.PropTypes.oneOf(['click', 'mousedown'])
};

RootCloseWrapper.defaultProps = {
  event: 'click'
};
module.exports = exports['default'];
},{"./utils/addEventListener":279,"./utils/createChainedFunction":282,"./utils/ownerDocument":286,"react":"react","react-dom":"react-dom"}],278:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _properties = require('dom-helpers/transition/properties');

var _properties2 = _interopRequireDefault(_properties);

var _on = require('dom-helpers/events/on');

var _on2 = _interopRequireDefault(_on);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionEndEvent = _properties2.default.end;

var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Transition).call(this, props, context));

    var initialStatus = void 0;
    if (props.in) {
      // Start enter transition in componentDidMount.
      initialStatus = props.transitionAppear ? EXITED : ENTERED;
    } else {
      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
    }
    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  _createClass(Transition, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.transitionAppear && this.props.in) {
        this.performEnter(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.in && this.props.unmountOnExit) {
        if (this.state.status === UNMOUNTED) {
          // Start enter transition in componentDidUpdate.
          this.setState({ status: EXITED });
        }
      } else {
        this._needsUpdate = true;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var status = this.state.status;

      if (this.props.unmountOnExit && status === EXITED) {
        // EXITED is always a transitional state to either ENTERING or UNMOUNTED
        // when using unmountOnExit.
        if (this.props.in) {
          this.performEnter(this.props);
        } else {
          this.setState({ status: UNMOUNTED });
        }

        return;
      }

      // guard ensures we are only responding to prop changes
      if (this._needsUpdate) {
        this._needsUpdate = false;

        if (this.props.in) {
          if (status === EXITING) {
            this.performEnter(this.props);
          } else if (status === EXITED) {
            this.performEnter(this.props);
          }
          // Otherwise we're already entering or entered.
        } else {
          if (status === ENTERING || status === ENTERED) {
            this.performExit(this.props);
          }
          // Otherwise we're already exited or exiting.
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancelNextCallback();
    }
  }, {
    key: 'performEnter',
    value: function performEnter(props) {
      var _this2 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      // Not this.props, because we might be about to receive new props.
      props.onEnter(node);

      this.safeSetState({ status: ENTERING }, function () {
        _this2.props.onEntering(node);

        _this2.onTransitionEnd(node, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node);
          });
        });
      });
    }
  }, {
    key: 'performExit',
    value: function performExit(props) {
      var _this3 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      // Not this.props, because we might be about to receive new props.
      props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, function () {
          _this3.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    }
  }, {
    key: 'cancelNextCallback',
    value: function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    }
  }, {
    key: 'safeSetState',
    value: function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      this.setState(nextState, this.setNextCallback(callback));
    }
  }, {
    key: 'setNextCallback',
    value: function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd(node, handler) {
      this.setNextCallback(handler);

      if (node) {
        (0, _on2.default)(node, transitionEndEvent, this.nextCallback);
        setTimeout(this.nextCallback, this.props.timeout);
      } else {
        setTimeout(this.nextCallback, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;

      var childProps = _objectWithoutProperties(_props, ['children', 'className']);

      Object.keys(Transition.propTypes).forEach(function (key) {
        return delete childProps[key];
      });

      var transitionClassName = void 0;
      if (status === EXITED) {
        transitionClassName = this.props.exitedClassName;
      } else if (status === ENTERING) {
        transitionClassName = this.props.enteringClassName;
      } else if (status === ENTERED) {
        transitionClassName = this.props.enteredClassName;
      } else if (status === EXITING) {
        transitionClassName = this.props.exitingClassName;
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, _extends({}, childProps, {
        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
      }));
    }
  }]);

  return Transition;
}(_react2.default.Component);

Transition.propTypes = {
  /**
   * Show the component; triggers the enter or exit animation
   */
  in: _react2.default.PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is not shown
   */
  unmountOnExit: _react2.default.PropTypes.bool,

  /**
   * Run the enter animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2.default.PropTypes.bool,

  /**
   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
   * transition indefinately if the browser transitionEnd events are
   * canceled or interrupted.
   *
   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
   * setting this to the duration of your animation (or a bit above it).
   */
  timeout: _react2.default.PropTypes.number,

  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _react2.default.PropTypes.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _react2.default.PropTypes.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  enteredClassName: _react2.default.PropTypes.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _react2.default.PropTypes.string,

  /**
   * Callback fired before the "entering" classes are applied
   */
  onEnter: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "entering" classes are applied
   */
  onEntering: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "enter" classes are applied
   */
  onEntered: _react2.default.PropTypes.func,
  /**
   * Callback fired before the "exiting" classes are applied
   */
  onExit: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "exiting" classes are applied
   */
  onExiting: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "exited" classes are applied
   */
  onExited: _react2.default.PropTypes.func
};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.displayName = 'Transition';

Transition.defaultProps = {
  in: false,
  unmountOnExit: false,
  transitionAppear: false,

  timeout: 5000,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

exports.default = Transition;
},{"classnames":240,"dom-helpers/events/on":249,"dom-helpers/transition/properties":262,"react":"react","react-dom":"react-dom"}],279:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, event, handler) {
  (0, _on2.default)(node, event, handler);
  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler);
    }
  };
};

var _on = require('dom-helpers/events/on');

var _on2 = _interopRequireDefault(_on);

var _off = require('dom-helpers/events/off');

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
},{"dom-helpers/events/off":248,"dom-helpers/events/on":249}],280:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addFocusListener;
/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 */
function addFocusListener(handler) {
  var useFocusin = !document.addEventListener;
  var remove = void 0;

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function remove() {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function remove() {
      return document.removeEventListener('focus', handler, true);
    };
  }

  return { remove: remove };
}
module.exports = exports['default'];
},{}],281:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculatePosition;

var _offset = require('dom-helpers/query/offset');

var _offset2 = _interopRequireDefault(_offset);

var _position = require('dom-helpers/query/position');

var _position2 = _interopRequireDefault(_position);

var _scrollTop = require('dom-helpers/query/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainerDimensions(containerNode) {
  var width = void 0,
      height = void 0,
      scroll = void 0;

  if (containerNode.tagName === 'BODY') {
    width = window.innerWidth;
    height = window.innerHeight;

    scroll = (0, _scrollTop2.default)((0, _ownerDocument2.default)(containerNode).documentElement) || (0, _scrollTop2.default)(containerNode);
  } else {
    var _getOffset = (0, _offset2.default)(containerNode);

    width = _getOffset.width;
    height = _getOffset.height;

    scroll = (0, _scrollTop2.default)(containerNode);
  }

  return { width: width, height: height, scroll: scroll };
}

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;

  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerWidth = containerDimensions.width;

  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  }

  return 0;
}

function calculatePosition(placement, overlayNode, target, container, padding) {
  var childOffset = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  var _getOffset2 = (0, _offset2.default)(overlayNode);

  var overlayHeight = _getOffset2.height;
  var overlayWidth = _getOffset2.width;


  var positionLeft = void 0,
      positionTop = void 0,
      arrowOffsetLeft = void 0,
      arrowOffsetTop = void 0;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = void 0;
  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);

    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = void 0;
  } else {
    throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
  }

  return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
}
module.exports = exports['default'];
},{"./ownerDocument":286,"dom-helpers/query/offset":253,"dom-helpers/query/position":255,"dom-helpers/query/scrollTop":258}],282:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports.default = createChainedFunction;
module.exports = exports['default'];
},{}],283:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContainer;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}
module.exports = exports['default'];
},{"react-dom":"react-dom"}],284:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOverflowing;

var _isWindow = require('dom-helpers/query/isWindow');

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument2.default)(node);
  var win = (0, _isWindow2.default)(doc);
  var fullWidth = win.innerWidth;

  // Support: ie8, no innerWidth
  if (!fullWidth) {
    var documentElementRect = doc.documentElement.getBoundingClientRect();
    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  return doc.body.clientWidth < fullWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow2.default)(container);

  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
module.exports = exports['default'];
},{"dom-helpers/ownerDocument":250,"dom-helpers/query/isWindow":252}],285:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;

var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType;
  var tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}
},{}],286:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
},{"dom-helpers/ownerDocument":250,"react-dom":"react-dom"}],287:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = all;

var _createChainableTypeChecker = require('./utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
},{"./utils/createChainableTypeChecker":291}],288:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = require('./utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
},{"./utils/createChainableTypeChecker":291,"react":"react"}],289:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = require('./utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
},{"./utils/createChainableTypeChecker":291,"react":"react"}],290:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
},{}],291:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
},{}],292:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createUncontrollable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createUncontrollable(mixins, set) {

  return uncontrollable;

  function uncontrollable(Component, controlledValues) {
    var methods = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    var displayName = Component.displayName || Component.name || 'Component',
        basePropTypes = utils.getType(Component).propTypes,
        isCompositeComponent = utils.isReactComponent(Component),
        controlledProps = Object.keys(controlledValues),
        propTypes;

    var OMIT_PROPS = ['valueLink', 'checkedLink'].concat(controlledProps.map(utils.defaultKey));

    propTypes = utils.uncontrolledPropTypes(controlledValues, basePropTypes, displayName);

    (0, _invariant2.default)(isCompositeComponent || !methods.length, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', '));

    methods = utils.transform(methods, function (obj, method) {
      obj[method] = function () {
        var _refs$inner;

        return (_refs$inner = this.refs.inner)[method].apply(_refs$inner, arguments);
      };
    }, {});

    var component = _react2.default.createClass(_extends({

      displayName: 'Uncontrolled(' + displayName + ')',

      mixins: mixins,

      propTypes: propTypes

    }, methods, {
      componentWillMount: function componentWillMount() {
        var _this = this;

        var props = this.props;

        this._values = {};

        controlledProps.forEach(function (key) {
          _this._values[key] = props[utils.defaultKey(key)];
        });
      },


      /**
       * If a prop switches from controlled to Uncontrolled
       * reset its value to the defaultValue
       */
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var props = this.props;

        controlledProps.forEach(function (key) {
          if (utils.getValue(nextProps, key) === undefined && utils.getValue(props, key) !== undefined) {
            _this2._values[key] = nextProps[utils.defaultKey(key)];
          }
        });
      },
      getControlledInstance: function getControlledInstance() {
        return this.refs.inner;
      },
      render: function render() {
        var _this3 = this;

        var newProps = {},
            props = omitProps(this.props);

        utils.each(controlledValues, function (handle, propName) {
          var linkPropName = utils.getLinkName(propName),
              prop = _this3.props[propName];

          if (linkPropName && !isProp(_this3.props, propName) && isProp(_this3.props, linkPropName)) {
            prop = _this3.props[linkPropName].value;
          }

          newProps[propName] = prop !== undefined ? prop : _this3._values[propName];

          newProps[handle] = setAndNotify.bind(_this3, propName);
        });

        newProps = _extends({}, props, newProps, {
          ref: isCompositeComponent ? 'inner' : null
        });

        return _react2.default.createElement(Component, newProps);
      }
    }));

    component.ControlledComponent = Component;

    /**
     * useful when wrapping a Component and you want to control
     * everything
     */
    component.deferControlTo = function (newComponent) {
      var additions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var nextMethods = arguments[2];

      return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
    };

    return component;

    function setAndNotify(propName, value) {
      var linkName = utils.getLinkName(propName),
          handler = this.props[controlledValues[propName]];

      if (linkName && isProp(this.props, linkName) && !handler) {
        handler = this.props[linkName].requestChange;
      }

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      set(this, propName, handler, value, args);
    }

    function isProp(props, prop) {
      return props[prop] !== undefined;
    }

    function omitProps(props) {
      var result = {};

      utils.each(props, function (value, key) {
        if (OMIT_PROPS.indexOf(key) === -1) result[key] = value;
      });

      return result;
    }
  }
}
module.exports = exports['default'];
},{"./utils":294,"invariant":270,"react":"react"}],293:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _createUncontrollable = require('./createUncontrollable');

var _createUncontrollable2 = _interopRequireDefault(_createUncontrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mixin = {
  shouldComponentUpdate: function shouldComponentUpdate() {
    //let the forceUpdate trigger the update
    return !this._notifying;
  }
};

function set(component, propName, handler, value, args) {
  if (handler) {
    component._notifying = true;
    handler.call.apply(handler, [component, value].concat(args));
    component._notifying = false;
  }

  component._values[propName] = value;

  if (component.isMounted()) component.forceUpdate();
}

exports.default = (0, _createUncontrollable2.default)([mixin], set);
module.exports = exports['default'];
},{"./createUncontrollable":292}],294:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.version = undefined;
exports.uncontrolledPropTypes = uncontrolledPropTypes;
exports.getType = getType;
exports.getValue = getValue;
exports.getLinkName = getLinkName;
exports.defaultKey = defaultKey;
exports.chain = chain;
exports.transform = transform;
exports.each = each;
exports.has = has;
exports.isReactComponent = isReactComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, basePropTypes, displayName) {
  var propTypes = {};

  if (process.env.NODE_ENV !== 'production' && basePropTypes) {
    transform(controlledValues, function (obj, handler, prop) {
      (0, _invariant2.default)(typeof handler === 'string' && handler.trim().length, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop);

      obj[prop] = readOnlyPropType(handler, displayName);
    }, propTypes);
  }

  return propTypes;
}

var version = exports.version = _react2.default.version.split('.').map(parseFloat);

function getType(component) {
  if (version[0] >= 15 || version[0] === 0 && version[1] >= 13) return component;

  return component.type;
}

function getValue(props, name) {
  var linkPropName = getLinkName(name);

  if (linkPropName && !isProp(props, name) && isProp(props, linkPropName)) return props[linkPropName].value;

  return props[name];
}

function isProp(props, prop) {
  return props[prop] !== undefined;
}

function getLinkName(name) {
  return name === 'value' ? 'valueLink' : name === 'checked' ? 'checkedLink' : null;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function chain(thisArg, a, b) {
  return function chainedFunction() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    a && a.call.apply(a, [thisArg].concat(args));
    b && b.call.apply(b, [thisArg].concat(args));
  };
}

function transform(obj, cb, seed) {
  each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
  return seed;
}

function each(obj, cb, thisArg) {
  if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

  for (var key in obj) {
    if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
  }
}

function has(o, k) {
  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
function isReactComponent(component) {
  return !!(component && component.prototype && component.prototype.isReactComponent);
}
}).call(this,require('_process'))

},{"_process":39,"invariant":270,"react":"react"}],295:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":39}],296:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Suggestion = require('./components/Suggestion');

var _Suggestion2 = _interopRequireDefault(_Suggestion);

var _AuthService = require('./utils/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = new _AuthService2.default(_config2.default.auth0ClientId, _config2.default.auth0Domain, _config2.default.callbackUrl);

// onEnter callback to validate authentication in private routes
var requireAuth = function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

// OnEnter for callback url to parse access_token
var parseAuthHash = function parseAuthHash(nextState, replace) {
    if (nextState.location.hash) {
        var returnUrl = auth.parseHash(nextState.location.hash);
        replace({ pathname: returnUrl });
    }
};

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default, auth: auth, onEnter: parseAuthHash },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'suggestion/:id', component: _Suggestion2.default })
);

},{"./components/App":5,"./components/Home":6,"./components/Suggestion":10,"./config":11,"./utils/AuthService":301,"react":"react","react-router":"react-router"}],297:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
    function NavbarStore() {
        _classCallCheck(this, NavbarStore);

        this.bindActions(_NavbarActions2.default);
        this.searchResultsCount = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
        this.authService = null;
        this.exportPublicMethods({
            initAuthService: function (authService) {
                this.authService = authService;
                this.authenticated = this.authService.loggedIn();
            }.bind(this)
        });
    }

    _createClass(NavbarStore, [{
        key: 'onLogout',
        value: function onLogout() {
            this.authenticated = this.authService.loggedIn();
        }
    }, {
        key: 'onProfileUpdated',
        value: function onProfileUpdated() {
            this.authenticated = this.authService.loggedIn();
        }
    }, {
        key: 'onFindSuggestionSuccess',
        value: function onFindSuggestionSuccess(payload) {
            //payload.history.pushState(null, '/characters/' + payload.characterId);
        }
    }, {
        key: 'onFindSuggestionFail',
        value: function onFindSuggestionFail(payload) {
            payload.searchForm.classList.add('shake');
            setTimeout(function () {
                payload.searchForm.classList.remove('shake');
            }, 1000);
        }
    }, {
        key: 'onUpdateAjaxAnimation',
        value: function onUpdateAjaxAnimation(className) {
            this.ajaxAnimationClass = className; //fadein or fadeout
        }
    }, {
        key: 'onUpdateSearchQuery',
        value: function onUpdateSearchQuery(event) {
            this.searchQuery = event.target.value;
        }
    }]);

    return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":1,"../utils/alt":302}],298:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

var _NewSuggestionActions = require('../actions/NewSuggestionActions');

var _NewSuggestionActions2 = _interopRequireDefault(_NewSuggestionActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewSuggestionStore = function () {
    function NewSuggestionStore() {
        _classCallCheck(this, NewSuggestionStore);

        this.bindActions(_NewSuggestionActions2.default);
        this.title = '';
        this.content = '';
        this.helpBlockTitle = '';
        this.helpBlockContent = '';
        this.titleValidationState = '';
        this.contentValidationState = '';
        this.showModal = false;
    }

    _createClass(NewSuggestionStore, [{
        key: 'onOpenModal',
        value: function onOpenModal() {
            this.showModal = true;
        }
    }, {
        key: 'onCloseModal',
        value: function onCloseModal() {
            this.showModal = false;
            setTimeout(this.reset.bind(this), 400);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.title = '';
            this.content = '';
            this.helpBlockTitle = '';
            this.helpBlockContent = '';
            this.titleValidationState = '';
            this.contentValidationState = '';
        }
    }, {
        key: 'onAddSuggestionSuccess',
        value: function onAddSuggestionSuccess(successMsg) {
            this.contentValidationState = 'has-success';
            this.showModal = false;
            this.reset();
            toastr.success(successMsg);
        }
    }, {
        key: 'onAddSuggestionFail',
        value: function onAddSuggestionFail(errMsg) {
            this.contentValidationState = 'has-error';
            toastr.error(errMsg);
        }
    }, {
        key: 'onUpdateTitle',
        value: function onUpdateTitle(event) {
            this.title = event.target.value;
            this.titleValidationState = '';
            this.helpBlockTitle = '';
        }
    }, {
        key: 'onUpdateContent',
        value: function onUpdateContent(event) {
            this.content = event.target.value;
            this.contentValidationState = '';
            this.helpBlockContent = '';
        }
    }, {
        key: 'onInvalidTitle',
        value: function onInvalidTitle() {
            this.titleValidationState = 'has-error';
            this.helpBlockTitle = 'Please enter a title.';
        }
    }, {
        key: 'onInvalidContent',
        value: function onInvalidContent() {
            this.contentValidationState = 'has-error';
            this.helpBlockContent = 'Please enter a suggestion.';
        }
    }]);

    return NewSuggestionStore;
}();

exports.default = _alt2.default.createStore(NewSuggestionStore);

},{"../actions/NewSuggestionActions":2,"../utils/alt":302}],299:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

var _lodash = require('lodash');

var _SuggestionListActions = require('../actions/SuggestionListActions');

var _SuggestionListActions2 = _interopRequireDefault(_SuggestionListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuggestionListStore = function () {
    function SuggestionListStore() {
        _classCallCheck(this, SuggestionListStore);

        this.bindActions(_SuggestionListActions2.default);
        this.topSuggestions = [];
        this.lastCreated = [];
        this.topSuggestionDefault = '';
        this.lastSuggestionDefault = '';
    }

    _createClass(SuggestionListStore, [{
        key: 'onGetTopSuggestionsSuccess',
        value: function onGetTopSuggestionsSuccess(data) {
            this.topSuggestions = data;
        }
    }, {
        key: 'onGetTopSuggestionsFail',
        value: function onGetTopSuggestionsFail(message) {
            this.topSuggestionDefault = message;
        }
    }, {
        key: 'onGetLastSuggestionsSuccess',
        value: function onGetLastSuggestionsSuccess(data) {
            this.lastCreated = data;
        }
    }, {
        key: 'onGetLastSuggestionsFail',
        value: function onGetLastSuggestionsFail(message) {
            this.lastSuggestionDefault = message;
        }
    }]);

    return SuggestionListStore;
}();

exports.default = _alt2.default.createStore(SuggestionListStore);

},{"../actions/SuggestionListActions":4,"../utils/alt":302,"lodash":"lodash"}],300:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../utils/alt');

var _alt2 = _interopRequireDefault(_alt);

var _lodash = require('lodash');

var _SuggestionActions = require('../actions/SuggestionActions');

var _SuggestionActions2 = _interopRequireDefault(_SuggestionActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuggestionStrore = function () {
    function SuggestionStrore() {
        _classCallCheck(this, SuggestionStrore);

        this.bindActions(_SuggestionActions2.default);
        this.suggestion = {
            title: '',
            content: '',
            likes: ''
        };
    }

    _createClass(SuggestionStrore, [{
        key: 'onGetSuggestionSuccess',
        value: function onGetSuggestionSuccess(data) {
            (0, _lodash.assignIn)(this, data);
        }
    }, {
        key: 'onGetSuggestionFail',
        value: function onGetSuggestionFail(message) {
            toastr.error(message);
        }
    }, {
        key: 'onLikeSuggestionSuccess',
        value: function onLikeSuggestionSuccess(data) {
            if (data.type === 'success') {
                this.suggestion.likes++;
                toastr.success(data.message);
            } else {
                toastr.warning(data.message);
            }
        }
    }, {
        key: 'onLikeSuggestionFail',
        value: function onLikeSuggestionFail(message) {
            toastr.error(message);
        }
    }, {
        key: 'onDislikeSuggestionSuccess',
        value: function onDislikeSuggestionSuccess(data) {
            if (data.type === 'success') {
                this.suggestion.likes--;
                toastr.success(data.message);
            } else {
                toastr.warning(data.message);
            }
        }
    }, {
        key: 'onDislikeSuggestionFail',
        value: function onDislikeSuggestionFail(message) {
            toastr.error(message);
        }
    }]);

    return SuggestionStrore;
}();

exports.default = _alt2.default.createStore(SuggestionStrore);

},{"../actions/SuggestionActions":3,"../utils/alt":302,"lodash":"lodash"}],301:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jwtHelpers = require('./jwtHelpers');

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
    function AuthService(clientId, domain, callbackUrl) {
        _classCallCheck(this, AuthService);

        // Configure Auth0
        this.auth0 = new _auth0Js2.default({
            clientID: clientId,
            domain: domain,
            responseType: 'token',
            callbackURL: callbackUrl
        });

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    _createClass(AuthService, [{
        key: 'login',
        value: function login(params, onError) {
            localStorage.setItem('returnUrl', window.location.pathname);
            params.scope = 'openid email'; // adding the email to the JWT
            this.auth0.login(params, onError);
        }
    }, {
        key: 'signup',
        value: function signup(params, onError) {
            this.auth0.signup(params, onError);
        }
    }, {
        key: 'parseHash',
        value: function parseHash(hash) {
            var _this = this;

            var authResult = this.auth0.parseHash(hash);
            if (authResult && authResult.idToken) {
                this.setToken(authResult.idToken);
                this.auth0.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        console.log('Error loading the Profile', error);
                    } else {
                        _this.setProfile(profile);
                    }
                });
                return localStorage.getItem('returnUrl');
            } else {
                return '/';
            }
        }
    }, {
        key: 'loggedIn',
        value: function loggedIn() {
            // Checks if there is a saved token and it's still valid
            var token = this.getToken();
            return !!token && !(0, _jwtHelpers.isTokenExpired)(token);
        }
    }, {
        key: 'setProfile',
        value: function setProfile(profile) {
            // Saves profile data to localStorage
            localStorage.setItem('profile', JSON.stringify(profile));
            // Triggers profile_updated event to update the UI
            _NavbarActions2.default.profileUpdated();
        }
    }, {
        key: 'getProfile',
        value: function getProfile() {
            // Retrieves the profile data from localStorage
            var profile = localStorage.getItem('profile');
            return profile ? JSON.parse(localStorage.profile) : {};
        }
    }, {
        key: 'setToken',
        value: function setToken(idToken) {
            // Saves user token to localStorage
            localStorage.setItem('id_token', idToken);
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            // Retrieves the user token from localStorage
            return localStorage.getItem('id_token');
        }
    }, {
        key: 'logout',
        value: function logout() {
            // Clear user token and profile data from localStorage
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            _NavbarActions2.default.logout();
        }
    }]);

    return AuthService;
}();

exports.default = AuthService;

},{"../actions/NavbarActions":1,"./jwtHelpers":303,"auth0-js":13}],302:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],303:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTokenExpirationDate = getTokenExpirationDate;
exports.isTokenExpired = isTokenExpired;

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTokenExpirationDate(token) {
    var decoded = (0, _jwtDecode2.default)(token);
    if (!decoded.exp) {
        return null;
    }

    var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
}

function isTokenExpired(token) {
    var date = getTokenExpirationDate(token);
    var offsetSeconds = 0;
    if (date === null) {
        return false;
    }
    return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
}

},{"jwt-decode":42}],304:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var timeSince = function timeSince(date) {
    if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) !== 'object') {
        date = new Date(date);
    }

    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }

    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }

    return interval + ' ' + intervalType;
};

exports.default = timeSince;

},{}]},{},[12])


//# sourceMappingURL=bundle.js.map
