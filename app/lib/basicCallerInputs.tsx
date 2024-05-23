import { useForm } from "react-hook-form";

interface Inputs {
  policy_claim: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const BasicCallerInputs = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <>
      <input defaultValue="PFL1234567" {...register("policy_claim")} />

      <input {...register("firstName")} />

      <input {...register("lastName")} />
      {/* {errors.policy_claim && <span>This field is required</span>} */}
    </>
  );
};

export default BasicCallerInputs;
