import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";

export function CreateContactForm({ onSaveContact }) {
  const { handleSubmit, control, errors } = useForm();

  CreateContactForm.propTypes = {
    onSaveContact: PropTypes.any.isRequired,
  };

  const onSubmit = (data) => {
    onSaveContact(data);
  };

  return (
    <form
      className="flex flex-col place-items-start gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="flex flex-row place-items-start gap-3">
        <div className="flex flex-col place-items-start">
          <label className="text-sm" htmlFor="name">
            Nombre:
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors?.name && <span>{errors.name.message}</span>}
        </div>

        <div className="flex flex-col place-items-start">
          <label className="text-sm" htmlFor="phone">
            Número de Teléfono:
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors?.phone && <p>{errors.phone.message}</p>}
        </div>
      </span>

      <div>
        <button
          className="flex-col text-start border-2 border-gray-400 border-solid my-2 px-2 py-1  bg-slate-400 rounded-xl hover:bg-slate-800"
          type="submit"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
}
