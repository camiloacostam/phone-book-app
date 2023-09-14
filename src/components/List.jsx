import PropTypes from "prop-types";
import { ContactCard } from "./ContactCard";

export default function List({ contacts = [] }) {
  List.propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  return (
    <>
      <div className="bg-gray-800 p-4 rounded-xl overflow-auto max-h-[450px]">
        {contacts.map((contact, index) => (
          <ContactCard contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
