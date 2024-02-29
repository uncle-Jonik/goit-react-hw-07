import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts, fetchContacts, addContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      // fetchContacts
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //deleteContacts
      .addCase(deleteContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addContact
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
