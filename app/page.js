'use client';

import ContactsList from './components/ContactsList';

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold underline'>KVCore Contacts</h1>
      <ContactsList />
    </main>
  );
}
