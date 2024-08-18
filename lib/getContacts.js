const url = '/api/v1/contacts';

export const getContacts = async () => {
  const res = await fetch(url);
  return res.json();
};
