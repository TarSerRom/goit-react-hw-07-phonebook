import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { phonebookOperation, phonebookSelector } from "redux/phonebook";

export default function ContactList() {
    const contacts = useSelector(phonebookSelector.getFilterContacts);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(phonebookOperation.fetchContacts())
    }, [dispatch]);

    return (
        <ul className="list">
      {contacts.map(({ id, name, number }) => (
        <li className="item" key={id}>
          <p className="text">
            {name}: <span className="span">{number}</span>
          </p>
          <button
            className="button"
            type="button"
            onClick={() => dispatch(phonebookOperation.deleteContact(id))}
            title="Удалить"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    )
}