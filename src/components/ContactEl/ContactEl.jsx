import PropTypes from 'prop-types';

export const ContactEl = ({name, number, onDelete}) => {
  return (
    <div>
      <p>{name}:</p>
        <span>{number}</span>
        <button type='buttn'
          onClick={onDelete}
        >Delete</button>
    </div>
  )
}

ContactEl.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};