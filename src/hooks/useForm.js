import { useState } from "react";

export function useForm(inputValues) {
  const [formData, setFormData] = useState(inputValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return { formData, handleChange, setFormData };
}