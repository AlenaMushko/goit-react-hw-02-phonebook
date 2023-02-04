import PropTypes from 'prop-types';

export const ContactList = ({ contacts
// onDelete 
}) => {
  return <ul>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
        <p>{name}</p>
        <span>{number}</span>
        <button type='buttn'
          // onClick={() => onDelete(id)
        >Delete</button>
      </li>
    ))}</ul>;
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
