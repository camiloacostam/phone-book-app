import { useForm, Controller } from "react-hook-form";

function FilterForm({ onSubmit }) {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>
      <button type="submit">Filter</button>
    </form>
  );
}

export default FilterForm;
