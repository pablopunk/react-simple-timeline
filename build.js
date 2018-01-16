'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFadeIn = require('react-fade-in');

var _reactFadeIn2 = _interopRequireDefault(_reactFadeIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrapper = function wrapper(fade) {
  return fade ? function (_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
      _reactFadeIn2.default,
      null,
      children
    );
  } : function (_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
      'div',
      null,
      children
    );
  };
};

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var FadeOrNot = wrapper(this.props.fade);

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-1688073742'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-1688073742' + ' ' + 'wrap-relative'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-1688073742' + ' ' + 'stories'
            },
            _react2.default.createElement(
              FadeOrNot,
              { className: this.props.fade ? 'story-fade' : '' },
              this.props.stories.map(function (story, i) {
                return _react2.default.createElement(
                  'div',
                  { key: i, className: 'jsx-1688073742' + ' ' + 'story'
                  },
                  story.image && _react2.default.createElement(
                    'div',
                    {
                      className: 'jsx-1688073742' + ' ' + 'story-image-wrapper'
                    },
                    _react2.default.createElement('img', { src: story.image, className: 'jsx-1688073742' + ' ' + 'story-image'
                    })
                  ),
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'jsx-1688073742'
                    },
                    _react2.default.createElement(
                      'a',
                      { href: story.link, className: 'jsx-1688073742' + ' ' + 'story-link'
                      },
                      _react2.default.createElement(
                        'div',
                        {
                          className: 'jsx-1688073742' + ' ' + 'story-title'
                        },
                        story.title
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      {
                        className: 'jsx-1688073742' + ' ' + 'story-subtitle'
                      },
                      story.subtitle
                    ),
                    _react2.default.createElement(
                      'div',
                      {
                        className: 'jsx-1688073742' + ' ' + 'story-date'
                      },
                      story.date
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '1688073742',
          css: '.wrap-relative.jsx-1688073742{position:relative;}.stories.jsx-1688073742:after{content:\'\';position:absolute;z-index:-1;top:0;bottom:0;left:50%;border-left:1px solid #ddd;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);}.story.jsx-1688073742{border:1px solid #eee;border-radius:5px;margin:0.5em 0 2em 0;padding:1em;width:210px;background-color:white;z-index:9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.story-image-wrapper.jsx-1688073742{height:50px;}.story-image.jsx-1688073742{height:100%;border-radius:4px;margin-right:10px;vertical-align:center;}.story-title.jsx-1688073742{font-size:1em;}.story-subtitle.jsx-1688073742{font-size:0.85em;color:#555;}.story-date.jsx-1688073742{font-size:0.85em;color:#888;}@media (max-width:768px){.story.jsx-1688073742{width:65vw;}.story-title.jsx-1688073742{font-size:1.2em;}.story-subtitle.jsx-1688073742{font-size:1em;}.story-date.jsx-1688073742{font-size:1em;}}'
        })
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
