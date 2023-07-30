import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Delete } from 'components';

const ContactItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: inherit;
  font-weight: normal;
  font-size: 20px;

  &::before {
    display: inline-block;
    padding-right: 8px;
    color: inherit;
    content: '•';
  }
`;

export class ContactItems extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  render() {
    const { name, number, id } = this.props;
    return (
      <ContactItem>
        {name} : {number}
        <Delete type="button" id={id}>
          Delete
        </Delete>
      </ContactItem>
    );
  }
}
