import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";

interface Inputs {
  firstName: string;
  lastName: string;
}

const FloatingInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        {...register("firstName", { required: true })}
        labelText="First Name"
        error={errors.firstName && "This field is required"}
      />
      <CustomInput
        {...register("lastName", { required: true })}
        labelText="Last Name"
        error={errors.lastName && "This field is required"}
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 text-white transition duration-500 rounded-md shadow active:scale-95 bg-violet-500 hover:bg-violet-700 shadow-violet-600/25 hover:shadow-violet-600/75"
      >
        Submit
      </button>
    </form>
  );
};

export default FloatingInputForm;
