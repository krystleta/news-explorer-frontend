import "./Modal.css";

function Modal({
  name,
  title,
  children,
  activeModal,
  spanText,
  onClose,
  orModal,
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
        {children}
        <div className="modal__links-group">
          <button className="modal__link" onClick={orModal}>
            {spanText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
