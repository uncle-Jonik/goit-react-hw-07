import css from './ContactList.module.css';
import Contact from './Contact/Contact';
import { useSelector } from 'react-redux';
import { selectError, selectLoding, selectVisibleUsers } from '../../redux/selectors';

export default function ContactList() {
  const contactsList = useSelector(selectVisibleUsers);
  const loading = useSelector(selectLoding);
  const error = useSelector(selectError);

  return (
    <div className={css.contactListBox}>
      {error && <b>{error}</b>}
      {loading && <b>Loading...</b>}
      {contactsList.length > 0 && (
        <ul className={css.contactList}>
          {contactsList.map(({ id, name, phone }) => (
            <li key={id}>
              <Contact id={id} name={name} number={phone} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
