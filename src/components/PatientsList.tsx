import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
    
    const { patients } = usePatientStore();
    
    return (
      <div className="overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
        {patients.length ? (
          <>
            <h2 className="text-3xl font-black text-center">
              List of patients
            </h2>
            <p className="mt-5 mb-10 text-xl text-center">
              Manage your{" "}
              <span className="font-bold text-indigo-600">
                Patients and dates
              </span>
            </p>
            { patients.map((patient) => (
              <PatientDetails
                key={patient.id}
                patient={patient}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="text-3xl font-black text-center">
              Without patients yet
            </h2>
            <p className="mt-5 mb-10 text-xl text-center">
              Begin by adding patients{" "}
              <span className="font-bold text-indigo-600">
                {" "}
                and they will appear in this place
              </span>
            </p>
          </>
        )}
      </div>
    );
}
