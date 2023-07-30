import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationBox = styled.div`
  padding: ${props => props.theme.spacing(2)};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.colors.alert};
`;

const Message = styled.div`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  color: inherit;
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes.large};
  text-transform: none;
  text-align: center;
`;

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    children: PropTypes.element,
  };

  render() {
    return (
      <NotificationBox>
        <Message>{this.props.message}</Message>
        {this.props.children}
      </NotificationBox>
    );
  }
}
