import List from "./components/List";
import { CreateContactForm } from "./components/Form";
import { useContacts } from "./hooks/useContacts";
import "./App.css";
import FilterForm from "./components/FilterForm";

function App() {
  const { contactsList, addContact, filterContact } = useContacts();
  return (
    <main>
      <header>
        <h1 className="text-5xl my-3">Contacts</h1>
      </header>
      <body className="flex flex-col place-items-center p-3">
        <section className="flex flex-col gap-3">
          <span className="flex flex-col  place-items-start border-2 border-gray-500 border-solid my-2 px-2 py-1  bg-gray-800 rounded-xl">
            <h3>Filter contacts: </h3>
            <FilterForm onSubmit={filterContact} />
          </span>
          <List contacts={contactsList} />
          <span className="flex flex-col  place-items-start border-2 border-gray-500 border-solid my-2 px-2 py-1  bg-gray-800 rounded-xl">
            <h3>Create new contact</h3>
            <CreateContactForm onSaveContact={addContact} />
          </span>
        </section>
      </body>
    </main>
  );
}

export default App;
