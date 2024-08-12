import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ closeActiveModal, handleLogin, isOpen, handleSignUpModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen === true && isSubmitted) {
      setFormData({
        email: "",
        password: "",
      });
      setIsSubmitted(false);
    }
  }, [isOpen, isSubmitted]);

  const areAllFieldsFilled = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const allFieldsFilled = areAllFieldsFilled();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
    setIsSubmitted(true);
  };

  return (
    <ModalWithForm
      name="login"
      title="Sign In"
      buttonText="Sign In"
      activeModal={"login"}
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      spanText="Sign up"
      orModal={handleSignUpModal}
      allFieldsFilled={allFieldsFilled}
    >
      <label className="modal__label">
        Email{""}
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Enter email"
          className="modal__input modal__input_type_email"
          // required
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
          placeholder="Enter password"
          className="modal__input modal__input_type_password"
          // required
          value={formData.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="password-error"></span>
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
