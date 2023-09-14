import PropTypes from "prop-types";

export function ContactCard({ contact }) {
  ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
  };

  return (
    <div className="flex-col text-start border-2 border-gray-500 border-solid my-2 px-2 py-1 min-w-[400px] bg-slate-700 rounded-xl">
      <h2 className="text-2xl text-gray-300">{contact?.name || ""}</h2>
      <p className=" text-sm text-gray-400">{contact?.phone || ""}</p>
    </div>
  );
}
