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

  const openPopup = (content) => {
    setIsShowModal(true);
    setModalContent(content);
  }

  return (
    <ModalContext.Provider value={{ openPopup }}>
      {children}
      {isShowModal && (
        <div className="fixed inset-0 z-[501]">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShowModal(false)}
          >
            <div className="h-[40vw] w-[80vw]">
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
