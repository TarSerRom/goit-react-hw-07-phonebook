import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { phonebookSelector, phonebookOperation } from "redux/phonebook";
import './ContactForm.css'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(phonebookSelector.getContacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} is already in contacts.`);
        } else if (!name.trim() || !number.trim()) {
            alert("Enter the contact's name and number phone!");
        } else {
            dispatch(phonebookOperation.addContact({ name, number }));
            setName('');
            setNumber('');
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={handleChange}
              placeholder="Enter new contact name"
            />
          </label>
          <label className="label">
            Number
            <input
              className="input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              value={number}
              placeholder="Enter new contact number"
            />
          </label>
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
      );


}