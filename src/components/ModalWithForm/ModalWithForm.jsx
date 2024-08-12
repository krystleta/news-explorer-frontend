import "./ModalWithForm.css";

function ModalWithForm({
  name,
  title,
  buttonText,
  children,
  activeModal,
  spanText,
  onClose,
  onSubmit,
  orModal,
  allFieldsFilled,
}) {
  
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === `${name}` ? "modal_opened" : ""
      }`}
      onClick={onClose}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__heading">{title}</h2>
        <button className="modal__close" onClick={onClose} />
        <form
          className="modal__form form"
          id={name}
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <div className="modal__button-group">
            <button
              className={`modal__button${!allFieldsFilled ? "-disabled" : ""}`}
              disabled={!allFieldsFilled}
            >
              {buttonText}
            </button>
            <span className="modal__alt-text">
              or &nbsp;
              <button className="modal__button-span" onClick={orModal}>
                {spanText}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
