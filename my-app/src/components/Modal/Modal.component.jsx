import React from 'react';
import ContentContainer from '../Content Container/content.container.component';
import './Modal.css';


function Modal(props) {
    return (props.trigger) ? (
        <div className='modal'>
            <div className='modal-inner rounded popup-in-anim'>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.setTrigger(false)}></button>
                </div>
                <div className="mobile-header border-bottom">
                    <button type="button" className="mobile-back-button" onClick={() => props.setTrigger(false)}><i className="bi bi-chevron-left"></i>Close</button>
                    <h4 className="mobile-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    <ContentContainer>
                        {props.children}
                    </ContentContainer>
                    <div className="mobile-footer">
                        <button type="button" className="btn btn-primary btn-lg mobile-button">{props.button}</button>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-lg" data-bs-dismiss="modal" onClick={() => props.setTrigger(false)}>Close</button>
                    <button type="button" className="btn btn-primary btn-lg">{props.button}</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default Modal;