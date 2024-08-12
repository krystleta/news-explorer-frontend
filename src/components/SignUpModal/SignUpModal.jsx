import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const SignUpModal = ({ closeActiveModal, handleSignUp, isOpen, handleLoginModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formData, handleChange, setFormData } = useForm({
    email: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    if (isOpen === true && isSubmitted) {
      setFormData({ email: "", password: "", name: "", });
      setIsSubmitted(false);
    }
  }, [isOpen, isSubmitted, setFormData]);

  const areAllFieldsFilled = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const allFieldsFilled = areAllFieldsFilled();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(formData);
    setIsSubmitted(true);
  }

  return (
    <ModalWithForm
      name="signup"
      title="Sign up"
      buttonText="Sign up"
      activeModal={"signup"}
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      spanText="Sign in"
      orModal={handleLoginModal}
      allFieldsFilled={allFieldsFilled}
    >
      <label className="modal__label">
        Email{""}
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Enter your email"
          className="modal__input modal__input_type_email"
          maxLength="40"
          minLength="2"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="email-error"></span>
      </label>
      <label className="modal__label">
        Password{""}
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="modal__input modal__input_type_password"
          value={formData.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="password-error"></span>
      </label>
      <label className="modal__label">
        Username{""}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your username"
          className="modal__input modal__input_type_name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="name-error"></span>
      </label>
    </ModalWithForm>
  );
};

export default SignUpModal;
