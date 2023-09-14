import { useState } from "react";

export function useContacts() {
  const [contactsList, setContactList] = useState([
    { name: "Joseph Miller", phone: "2818420468" },
    { name: "Julia Loftis", phone: "9703276847" },
    { name: "Edward Bascom", phone: "5029691948" },
    { name: "Caroline Armenta", phone: "9259880510" },
    { name: "Lillian Dixon", phone: "2018977581" },
    { name: "Mark Friend", phone: "3015204707" },
    { name: "Presley Blanda", phone: "6246836725" },
  ]);

  const addContact = (data) => {
    return setContactList([...contactsList, data]);
  };

  const filterContact = (data) => {
    const filteredContacts = contactsList.filter((contact) => {
      // Verificar si se ingresó un nombre y si coincide con el nombre del contacto
      const nameMatch =
        !data.name ||
        contact.name.toLowerCase().includes(data.name.toLowerCase());

      // Verificar si se ingresó un teléfono y si coincide con el teléfono del contacto
      const phoneMatch = !data.phone || contact.phone.includes(data.phone);

      // Si al menos uno de los campos coincide, mantener el contacto
      return nameMatch || phoneMatch;
    });

    // Actualizar la lista de contactos con los resultados del filtrado
    setContactList(filteredContacts);
  };

  return { contactsList, addContact, filterContact };
}
