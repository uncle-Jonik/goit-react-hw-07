import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e0aa9ed3db23f76249d620.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkAPI) => {
  try {
    const responce = await axios.get('/contacts');
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteContacts = createAsyncThunk('contacts/delete', async (contactsId, thunkAPI) => {
  try {
    const responce = await axios.delete(`/contacts/${contactsId}`);
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
