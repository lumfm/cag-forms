import { BasicInputs } from "@/app/lib/definitions";
import { SubmitHandler, useForm } from "react-hook-form";
import BasicCallerForm from "../formUtils/basicCallerForm";
import AssuranceStepper from "../steppers/assuranceStepper";

const AssuranceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInputs>();

  const onSubmit: SubmitHandler<BasicInputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col min-w-80">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* form inputs container */}
        {/* <BasicCallerForm /> */}
        <button
          type="submit"
          className="rounded-md bg-green-600 py-3 my-5 w-full text-slate-300 text-xl"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default AssuranceForm;
