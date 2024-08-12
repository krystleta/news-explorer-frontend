import Modal from "../Modal/Modal";

const ConfirmationModal = ({ closeActiveModal, isOpen, handleLoginModal }) => {

  return (
    <Modal
      name="confirmation"
      title="Registration successfully completed!"
      activeModal={"confirmation"}
      onClose={closeActiveModal}
      isOpen={isOpen}
      spanText="Sign in"
      orModal={handleLoginModal}
    >
    </Modal>
  );
};

export default ConfirmationModal;
