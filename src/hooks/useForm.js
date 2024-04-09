import { useState } from "react";

export const useForm = (initForm = {}) => {
  const [formValues, setFormValues] = useState(initForm);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFormReset = () => {
    setFormValues(initForm);
  };

  return {
    formValues,
    onChangeInput,
    onFormReset,
  };
};
