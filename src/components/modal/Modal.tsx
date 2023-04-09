import { FC, PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './modal.interface';

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  left,
  right,
  top,
  bottom,
}) => {
  const [modalElement, setModalElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let el = document.querySelector('#modal') as HTMLDivElement;

    if (!el) {
      el = document.createElement('div') as HTMLDivElement;
      el.setAttribute('id', 'modal');
      document.body.append(el);
    }

    el.style.position = 'fixed';
    setModalElement(el);

    return () => {
      el.remove();
    };
  }, []);

  if (!modalElement) return null;

  left && (modalElement.style.left = left + 'px');
  right && (modalElement.style.right = right + 'px');
  top && (modalElement.style.top = top + 'px');
  bottom && (modalElement.style.bottom = bottom + 'px');

  return ReactDOM.createPortal(<>{children}</>, modalElement);
};

export default Modal;
