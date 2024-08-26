import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowModal]);

  return (
    <ModalContext.Provider value={{ setIsShowModal, setModalContent }}>
      {children}
      {isShowModal && (
        <div className="fixed inset-0 z-[501]">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShowModal(false)}
          >
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
