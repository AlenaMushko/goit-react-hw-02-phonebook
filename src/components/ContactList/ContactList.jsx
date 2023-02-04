import PropTypes from 'prop-types';
import { ContactEl } from 'components/ContactEl';
import phonebook from "../../img/phonebook.png"
import {WrapList} from './ContactList.styled'

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <WrapList>
      <img src={phonebook} alt={"phonebook"}/>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactEl
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
      </ul>
      </WrapList>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
