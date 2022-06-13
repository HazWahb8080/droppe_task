import React, { ReactNode } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import styles from "../../shopApp.module.css";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClick: () => void;
}

function ModalItem({ children, isOpen, handleClick }: ModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        className={styles.reactModalContent}
        overlayClassName={styles.reactModalOverlay}
      >
        <div className={styles.modalContentHelper}>
          <span className={styles.modalClose} onClick={handleClick}>
            <FaTimes />
          </span>
          {children}
        </div>
      </Modal>
    </>
  );
}

export default ModalItem;
