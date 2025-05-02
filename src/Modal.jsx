import ReactDOM from "react-dom";

const Modal = ({ children }) => {

    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            {children}
        </div>,
        document.getElementById("modal-root")
    )
}

export default Modal;