import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FilterContacts = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <label htmlFor={filterId}>
      Find contacts by name
      <input
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  )
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};