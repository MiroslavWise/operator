import React from 'react';
import { useForm } from 'react-hook-form';


export default function FormValidate() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name / Имя" {...register("Name / Имя", {, min: 2})} />
      <input type="text" placeholder="Phone number /Номер телефона" {...register("Phone number /Номер телефона", {, max: 12, min: 11, maxLength: 12})} />
      <input type="email" placeholder="Email / Электронная почта " {...register("Email / Электронная почта ", {required: true, pattern: /@/i})} />

      <input type="submit" />
    </form>
  );
}