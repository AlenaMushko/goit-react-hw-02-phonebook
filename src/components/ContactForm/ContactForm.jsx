import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({name: '', number: '',})
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    const { name, number } = this.state;
    const nameId = nanoid();
     const numberId = nanoid();
    return (
       <form onSubmit={this.handleSubmit}>
            <label htmlFor={nameId}>
              Name
          <input
            id={nameId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
              />
            </label>
            <label  htmlFor={numberId}>
              Numbe
          <input
            id={numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
     )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};