import React, { Component } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
  <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  {/* <Filter /> */}
  <ContactList />
</div>
    );
  }
}
