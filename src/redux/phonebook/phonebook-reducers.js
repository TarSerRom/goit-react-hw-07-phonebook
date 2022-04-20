import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    deleteContact,
    addContact,
} from './phonebook-operations';
import { changeFilter } from './phonebook-actions';

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState: {
        contactsItems: [],
        loading: false,
        error: null,
    },
    extraReducers : {
        [fetchContacts.fulfilled] : (state, {payload}) => ({
            ...state,
            contactsItems: payload,
            loading: false,
            error: null,
        }),
        [fetchContacts.rejected] : (state, {payload}) => ({
            ...state,
            loading: false,
            error: payload,
        }),
        [fetchContacts.pending] : state => ({
            ...state,
            loading: true,
            error: null,
        }),

        [deleteContact.fulfilled] : (state, {payload}) => ({
            ...state,
            contactsItems: state.contactsItems.filter(
                ({id}) => id !==payload,
            )
        }),
        [deleteContact.rejected] : (state, {payload}) => ({
            ...state,
            loading: false,
            error:payload,
        }),
        [deleteContact.pending] : state => ({
            ...state,
            loading: false,
            error: null,
        }),
        [addContact.fulfilled] : (state, {payload}) => ({
            ...state,
            contactsItems: [...state.contactsItems, payload],
            loading: false,
            error: null,
        }),
        [addContact.rejected] : (state, {payload}) => ({
            ...state,
            loading: false,
            error: payload,
        }),
        [addContact.pending] : state => ({
            ...state,
            loading: true,
            error:null,
        }),        
        
    },
})
export default contactsSlice.reducer;

export const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});