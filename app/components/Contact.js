import React from 'react';

const Contact = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      {contacts.map((contact) => {
        const { name, email, cell_phone_1, id } = contact;
        return (
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{cell_phone_1}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Contact;
