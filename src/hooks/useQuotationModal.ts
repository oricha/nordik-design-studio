import { useState } from "react";

export interface QuotationModalState {
  isOpen: boolean;
  projectName?: string;
  serviceOption?: string;
  /** Texto libre que se vuelca al campo mensaje al abrir el modal */
  quotationContext?: string;
}

export const useQuotationModal = () => {
  const [modalState, setModalState] = useState<QuotationModalState>({
    isOpen: false,
  });

  const openModal = (projectName?: string, serviceOption?: string, quotationContext?: string) => {
    setModalState({
      isOpen: true,
      projectName,
      serviceOption,
      quotationContext,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
    });
  };

  return {
    ...modalState,
    openModal,
    closeModal,
  };
};
