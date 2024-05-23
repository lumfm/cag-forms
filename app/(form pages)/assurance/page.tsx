"use client";

import BasicCallerInputs from "@/app/lib/basicCallerInputs";
import { SubmitHandler, useForm } from "react-hook-form";

const Assurance = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm<Inputs>()
    //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div>
      <h1>Assurance Page</h1>
      <form>
        <BasicCallerInputs />
      </form>
    </div>
  );
};

export default Assurance;
