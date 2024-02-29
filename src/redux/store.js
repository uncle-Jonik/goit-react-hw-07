import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlise';
import { contactsReducer } from './contactSlise';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactsReducer,
  },
});
