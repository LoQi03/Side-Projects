import React from 'react';
import './Modal.css';


function Modal(props) {
    return (props.trigger) ? (
        <div className='modal'>
            <div className='modal-inner rounded popup-in-anim'>
                <div className="modal-header">
                    <h5 className="modal-title">{props.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.setTrigger(false)}></button>
                </div>
                <div className="mobile-header border-bottom">
                    <button type="button" className="mobile-back-button" onClick={() => props.setTrigger(false)}><i class="bi bi-chevron-left"></i>Close</button>
                    <h5 className="mobile-title">{props.title}</h5>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="mobile-footer border-top">
                    <button type="button" className="btn btn-primary btn-lg mobile-button">{props.button}</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => props.setTrigger(false)}>Close</button>
                    <button type="button" className="btn btn-primary">{props.button}</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default Modal;