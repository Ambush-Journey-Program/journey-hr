export interface ModalProps {
  onConfirm: () => void;
  onClose: () => void;
  title: string;
  children: JSX.Element | string | JSX.Element[];
  cancelButtonText: string;
  confirmButtonText: string;
}
