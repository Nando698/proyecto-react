import Dialog from '@mui/material/Dialog';
import './modal.css'

const Modal = ({handleClose, open , children}) => {
    return(
        <div className='modal'>
            <Dialog onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </div>
    )
}
export default Modal