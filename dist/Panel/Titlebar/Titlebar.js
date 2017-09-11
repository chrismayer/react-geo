'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Titlebar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Titlebar.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representating the titlebar. Usually used in a panel.
 *
 * @class The TitleBar
 * @extends React.Component
 */
var Titlebar = exports.Titlebar = function (_React$Component) {
  _inherits(Titlebar, _React$Component);

  function Titlebar() {
    _classCallCheck(this, Titlebar);

    return _possibleConstructorReturn(this, (Titlebar.__proto__ || Object.getPrototypeOf(Titlebar)).apply(this, arguments));
  }

  _createClass(Titlebar, [{
    key: 'render',


    /**
     * The render function.
     */


    /**
     * The properties.
     * @type {Object}
     */
    value: function render() {
      var _props = this.props,
          className = _props.className,
          tools = _props.tools;

      className = className ? className + ' titlebar' : 'titlebar';

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'span',
          { className: 'title' },
          this.props.children
        ),
        _react2.default.createElement(
          'span',
          { className: 'controls' },
          tools
        )
      );
    }

    /**
     * The default props
     */

  }]);

  return Titlebar;
}(_react2.default.Component);

Titlebar.propTypes = {
  /**
   * The className which should be added.
   * @type {String}
   */
  className: _propTypes2.default.string,
  /**
   * The children to show in the Window.
   * @type {node}
   */
  children: _propTypes2.default.node,
  /**
   * The dispatch function.
    @type {Function}
   */
  dispatch: _propTypes2.default.func,
  /**
   * The object of the parent container of the titlebar class.
   * @type {object}
   */
  parent: _propTypes2.default.object,
  /**
   * Additional elements display besides the collapseButton.
   * @type {Array<object>}
   */
  tools: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * Whether to allow collasping or not.
   * @type {boolean}
   */
  collapsible: _propTypes2.default.bool,
  /**
   * Whether to allow closing or not.
   * @type {boolean}
   */
  closable: _propTypes2.default.bool,
  /**
   * The tooltip of the compress button.
   * @type {String}
   */
  compressTooltip: _propTypes2.default.string,
  /**
   * The tooltip of the close button.
   * @type {String}
   */
  closeTooltip: _propTypes2.default.string };
Titlebar.defaultProps = {
  compressTooltip: 'compress',
  closeTooltip: 'close' };
exports.default = Titlebar;