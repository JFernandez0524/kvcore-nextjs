'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const fetchData = async () => {
    const res = await fetch('/api/v1/contacts');
    const contacts = await res.json();
    setContacts(contacts);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const logContacts = async () => {
    console.log(contacts);
  };

  return (
    <main>
      <h1>HEllo FRom Jose</h1>

      <button onClick={logContacts}>log Contacts</button>
      {contacts && 'Contacts Are Here!'}
    </main>
  );
}
