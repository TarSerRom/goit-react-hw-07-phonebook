import { useDispatch, useSelector } from 'react-redux';
import { phonebookAction, phonebookSelector } from 'redux/phonebook';

export default function Filter(){
    const filter = useSelector(phonebookSelector.getFilter);
    const dispatch = useDispatch();

    return (
        <label className="label">
      Find contacts by name
      <input
        type="text"
        name="filter"
        className="input"
        value={filter}
        onChange={event => dispatch(phonebookAction.changeFilter(event.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
    )
}