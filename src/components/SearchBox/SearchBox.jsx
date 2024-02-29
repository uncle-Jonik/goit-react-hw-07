import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../redux/filterSlise';
import { useId } from 'react';
import css from './SearchBox.module.css';
import { selectFilter } from '../../redux/selectors';

export default function SearchBox() {
  const lableFilter = useId();
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);

  return (
    <div className={css.filterBox}>
      <label htmlFor={lableFilter}>Find contacts by name</label>
      <input
        id={lableFilter}
        value={filterState}
        onChange={e => {
          dispatch(changeValue(e.target.value));
        }}
      />
    </div>
  );
}
