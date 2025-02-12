// import React from "react";
import s from "./ContactList..module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  console.log(contacts);

  return (
    <div className={s.div}>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact {...contact} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
