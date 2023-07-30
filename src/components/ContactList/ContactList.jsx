import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    contactsToList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    deleteContactsFromList: PropTypes.func.isRequired,
  };

  handleDeleteButton = e => {
    this.props.deleteContactsFromList(e.target.id);
  };

  render() {
    const { contactsToList } = this.props;
    return (
      <ContactListBox onClick={this.handleDeleteButton}>
        {contactsToList.map(({ id, name, number }) => (
          <ContactItems name={name} number={number} id={id} key={id} />
        ))}
      </ContactListBox>
    );
  }
}
