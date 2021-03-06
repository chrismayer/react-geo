import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Tooltip
} from 'antd';
import { Icon } from 'react-fa';

import Logger from '../../Util/Logger';

import './SimpleButton.less';

/**
 * The SimpleButton.
 *
 * @class The SimpleButton
 * @extends React.Component
 */
class SimpleButton extends React.Component {

  /**
   * The className added to this component.
   * @type {String}
   * @private
   */
  className = 'react-geo-simplebutton'

  /**
   * The properties.
   * @type {Object}
   */
  static propTypes = {
    /**
     * The className which should be added.
     * @type {String}
     */
    className: PropTypes.string,
    icon: PropTypes.string,
    fontIcon: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string,
    tooltipPlacement: PropTypes.string
  };

  /**
   * The default properties.
   * @type {Object}
   */
  static defaultProps = {
    type: 'primary',
    icon: ''
  }

  /**
   * Create the SimpleButton.
   *
   * @constructs SimpleButton
   */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Handles the given click callback.
   */
  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    } else {
      Logger.debug('No onClick method given. Please provide it as ' +
          'prop to this instance.');
    }
  }

  /**
   * The render function.
   */
  render() {
    const {
      className,
      icon,
      fontIcon,
      onClick,
      tooltip,
      tooltipPlacement,
      ...antBtnProps
    } = this.props;

    const finalClassName = className
      ? `${className} ${this.className}`
      : this.className;

    return (
      <Tooltip
        title={tooltip}
        placement={tooltipPlacement}
      >
        <Button
          className={finalClassName}
          onClick={this.onClick}
          {...antBtnProps}
        >
          <Icon
            name={icon}
            className={fontIcon}
            style={{
              display: icon || fontIcon ? 'inherit' : 'none'
            }}
          />
          {antBtnProps.children}
        </Button>
      </Tooltip>
    );
  }
}

export default SimpleButton;
