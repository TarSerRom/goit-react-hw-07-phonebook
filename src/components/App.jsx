import { useSelector } from "react-redux";
import { phonebookSelector } from "redux/phonebook";
import Container from "./Container/Container";
import ContactList from "./ContactList/ContactsList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

export default function App() {
  const loading = useSelector(phonebookSelector.getLoading);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      {loading && <h1>Loading...</h1>}
      <ContactList/>
    </Container>
  )
}

/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        backgroundColor: 'red'
      }}
    >
      React homework template
    </div>
  );
};*/
