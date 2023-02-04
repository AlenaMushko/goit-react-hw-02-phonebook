import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';

import {Container, } from './App.styled'
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    for (let contact of contacts) {
      if (contact.name === name) {
        alert(`${name} is alreadi in contacts`);
        return;
      }
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  visibleContacts = () => {
    const { contacts } = this.state;
    const { filter } = this.state;
    const normolizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deliteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(
      contact => contact.id !== contactId
    )}))
  }
  render() {
    const { filter } = this.state;
 
    return (
      <Container >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <FilterContacts value={filter} onChange={this.changeFilter} />
        <ContactList contacts={this.visibleContacts()} onDelete={ this.deliteContact} />
      </Container>
    );
  }
}