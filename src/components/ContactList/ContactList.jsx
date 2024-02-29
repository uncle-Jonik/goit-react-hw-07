import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from './Contact/Contact';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, loading, error } = useSelector(state => state.contacts);

  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filters.name);

  const visibleUsers = contactsState.filter(user =>
    user.name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <div className={css.contactListBox}>
      {error && <b>{error}</b>}
      {loading && <b>Loading...</b>}
      {items.length > 0 && (
        <ul className={css.contactList}>
          {visibleUsers.length !== 0 ? (
            visibleUsers.map(({ id, name, phone }) => (
              <li key={id}>
                <Contact id={id} name={name} number={phone} />
              </li>
            ))
          ) : (
            <h2>Nothing:(</h2>
          )}
        </ul>
      )}
    </div>
  );
}
