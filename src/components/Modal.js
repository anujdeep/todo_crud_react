function Modal(props){ //event props
    return (
        <div onClick={props.onHideModal}>
            Hello from modal
        </div>
    )
}
export default Modal;