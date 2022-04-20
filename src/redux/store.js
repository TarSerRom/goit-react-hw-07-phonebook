import { configureStore } from '@reduxjs/toolkit';
import contactsSlice, { filterReducer } from './phonebook/phonebook-reducers';

const store = configureStore({
    reducer: {
        phoneBook: contactsSlice,
        filter: filterReducer,
    },
});

export default store;