export const selectItems = state => state.contacts.items;

export const selectLoding = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters.name;

export const selectVisibleUsers = state => {
  const items = selectItems(state);
  const filter = selectFilter(state);

  return items.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
};
