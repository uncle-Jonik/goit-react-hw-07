import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};
