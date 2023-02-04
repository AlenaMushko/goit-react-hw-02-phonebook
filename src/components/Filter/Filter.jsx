import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {FilterLabel, FilterInput} from './Filter.styled'

export const FilterContacts = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <FilterLabel htmlFor={filterId}>
      Find contacts by name
      <FilterInput
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  )
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};