import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {
    
    const { deletePatient, getPatientById } = usePatientStore();
    
    const handleClick = () => {
      deletePatient(patient.id);
      toast.error('The patient have been deleted');
    }

    return (
      <div className="px-5 py-10 mx-5 my-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Name" data={patient.name} />
        <PatientDetailItem label="Caretaker" data={patient.caretaker} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Date" data={patient.date.toString()} />
        <PatientDetailItem label="Date" data={patient.symptoms} />

        <div className="flex flex-col justify-between gap-3 mt-10 lg:flex-row">
          <button
            className="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700"
            type="button"
            onClick={() => getPatientById(patient.id)}
          >
            Edit
          </button>

          <button
            className="px-10 py-2 font-bold text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
            type="button"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    );
}
