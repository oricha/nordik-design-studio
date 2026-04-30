import { useState } from "react";

export interface QuotationModalState {
  isOpen: boolean;
  projectName?: string;
  serviceOption?: string;
}

export const useQuotationModal = () => {
  const [modalState, setModalState] = useState<QuotationModalState>({
    isOpen: false,
  });

  const openModal = (projectName?: string, serviceOption?: string) => {
    setModalState({
      isOpen: true,
      projectName,
      serviceOption,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return {
    ...modalState,
    openModal,
    closeModal,
  };
};
