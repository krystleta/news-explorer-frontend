import "./SearchForm.css";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";

function SearchForm({ handleSearch }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [errors, setErrors] = useState({});
  const { formData, handleChange, setFormData } = useForm({
    search: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(formData);
    setIsSubmitted(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm(formData);
  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     handleSearch(formData);
  //     setIsSubmitted(true);
  //   }
  // };

  useEffect(() => {
    if (isSubmitted) {
      setFormData({ search: "" });
      setIsSubmitted(false);
    }
  }, [setFormData, isSubmitted]);

  return (
    <div className="searchform__section">
      <h1 className="searchform__section-title">
        What&apos;s going on in the world?
      </h1>
      <p className="searchform__section-content">
        Find the latest news on any topic and save them in your personal
        account.
      </p>

      <div className="searchform__section-container">
        <form className="searchform__section-form" onSubmit={handleSubmit}>
          <input
            id="search"
            type="text"
            name="search"
            className="searchform__section-input"
            placeholder="Enter topic"
            value={formData.search}
            onChange={handleChange}
            required
          />
          {/* {errors.username && (
            <span className="searchform__section-input-error-message">
              {errors.username}
            </span>
          )} */}
          <button className="searchform__section-button" name="search">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
