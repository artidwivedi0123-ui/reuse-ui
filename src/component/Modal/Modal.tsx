import styles from "./Modal.module.scss";
import Button from "../Button/Button";
interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  showFooter?: boolean;
}
export default function Modal({
  open,
  title,
  description,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onClose,
  showFooter = true,
}: ModalProps) {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
        {showFooter && (
          <div className={styles.footer}>
            <Button variant="outline" onClick={onClose}>
              {cancelText}
            </Button>
            <Button variant="primary" onClick={onConfirm}>
              {confirmText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
