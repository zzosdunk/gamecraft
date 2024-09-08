import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type FormData = {
  phoneNumber: string;
};

const PHONE_REGEX = new RegExp(
  /"^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"/gim
);

const RegexPhoneNumberInput = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>();
  const onSubmit = (data: any) => {};

  const handleValidate = (phoneNumber: string) => {
    // if (PHONE_REGEX.test(phoneNumber)) {
    //   errors.phoneNumber = null;
    // } else {
    //   errors.phoneNumber?.message = "Invalid phone number. Please try again.";
    // }
    return PHONE_REGEX.test(phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
      <div>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            validate: (value) => handleValidate(value),
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="PL"
              id="phoneNumber"
            />
          )}
        />
        {!!errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber?.message}</p>
        )}
      </div>
    </form>
  );
};
export default RegexPhoneNumberInput;
