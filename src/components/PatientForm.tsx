import { useForm } from 'react-hook-form'
import Error from './Error';
import { DraftPatient } from '../types';

export default function PatientForm() {
  
    const { register, handleSubmit, formState: {errors} } = useForm<DraftPatient>();

    const registerPatient = (data: DraftPatient) => {
        console.log(data);
    }

    return (
      <div className="mx-5 md:w-1/2 lg:w-2/5">
        <h2 className="text-3xl font-black text-center">Patients follow up</h2>

        <p className="mt-5 mb-10 text-lg text-center">
          Add patients and {""}
          <span className="font-bold text-indigo-600">Management</span>
        </p>

        <form
          className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
          noValidate
          onSubmit={handleSubmit(registerPatient)}
        >
          <div className="mb-5">
            <label htmlFor="name" className="text-sm font-bold uppercase">
              Patient
            </label>
            <input
              id="name"
              className="w-full p-3 border border-gray-100"
              type="text"
              placeholder="Patient's name"
              {...register("name", {
                required: "The patient's name is required",
              })}
            />
            {errors.name?.message && (
              <Error>{errors.name?.message}</Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="caretaker" className="text-sm font-bold uppercase">
              Caretaker
            </label>
            <input
              id="caretaker"
              className="w-full p-3 border border-gray-100"
              type="text"
              placeholder="Carataker's name"
              {...register("caretaker", {
                required: "The patient's carataker is required",
              })}
            />
            {errors.caretaker?.message && (
              <Error>{errors.caretaker?.message}</Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="text-sm font-bold uppercase">
              Email
            </label>
            <input
              id="email"
              className="w-full p-3 border border-gray-100"
              type="email"
              placeholder="Registration email"
              {...register("email", {
                required: "The email is required",
              })}
            />
            {errors.email?.message && (
              <Error>{errors.email?.message}</Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="text-sm font-bold uppercase">
              Entry date
            </label>
            <input
              id="date"
              className="w-full p-3 border border-gray-100"
              type="date"
              {...register("date", {
                required: "The date is required",
              })}
            />
            {errors.date?.message && (
              <Error>{errors.date?.message}</Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="symptoms" className="text-sm font-bold uppercase">
              Síntomas
            </label>
            <textarea
              id="symptoms"
              className="w-full p-3 border border-gray-100"
              placeholder="Patient's symptoms"
              {...register("symptoms", {
                required: "The symptoms are required",
              })}
            ></textarea>
            {errors.symptoms?.message && (
              <Error>{errors.symptoms?.message}</Error>
            )}
          </div>

          <input
            type="submit"
            className="w-full p-3 font-bold text-white uppercase transition-colors bg-indigo-600 cursor-pointer hover:bg-indigo-700"
            value="Save Patient"
          />
        </form>
      </div>
    );
}
