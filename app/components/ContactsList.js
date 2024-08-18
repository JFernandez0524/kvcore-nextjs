'use client';
import { useState, useEffect } from 'react';
import { getContacts } from '@/lib/getContacts';
import Contact from './Contact';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  //fect contacts
  const fetchData = async () => {
    const data = await getContacts();
    console.log(data);
    setContacts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className='table-auto'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <Contact contacts={contacts} />
      </tbody>
    </table>
  );
};

export default ContactsList;
