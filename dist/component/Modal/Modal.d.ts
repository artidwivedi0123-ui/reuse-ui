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
export default function Modal({ open, title, description, children, confirmText, cancelText, onConfirm, onClose, showFooter, }: ModalProps): import("react").JSX.Element | null;
export {};
