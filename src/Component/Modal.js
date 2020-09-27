
import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { modelOpen, modelClose } from '../Actions/ActionsCreators'

function Modal({isOpen, name, text, modelClose}) {
    return (
        <div className={`modal-overlay ${isOpen && 'isModalOpen'}`}>
            <div className="modal-container">
                <h4>{name}</h4>
                <p>{text}</p>
                <button 
                    onClick={modelClose}
                    className="btn"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default connect(( {modalState:{isOpen, name, text}} )=> (
    {isOpen, name, text}
    ), {
        modelOpen,
        modelClose
})(Modal)