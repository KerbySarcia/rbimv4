import React from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import Photo from '../images/person.svg'
import Signature from '../images/language.svg'
import ThumbR from '../images/finger-print.svg'
import ThumbL from '../images/finger-print.svg'

export default function Modal({ open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {/* TODO: photo uploaded will reflect at html */}
      {/* TODO: fix the label being a button at photo upload */}
      <div className='overlay' />
      <div className='modal'>
        <button
          onClick={onClose}
          className='modal__close__btn'>
            &#10006;
        </button>
        <form>
          <div className='modal__upload__container'>
            <div className='modal__upload__input'>
              <img src={Photo} alt='Interviewee'/>
              <label 
                className='modal__upload__label' 
                for='photo__upload'> Upload Photo</label>
              <input 
                id='photo-upload'
                type='file'
                accept='image'
                />
            </div>
            <div className='modal__upload__input'>
              <img src={Signature} alt='Interviewee'/>
              <label 
                className='modal__upload__label' 
                for='signature__upload'> Upload Signature</label>
              <input 
                id='signature-upload'
                type='file'
                accept='image'
                />
            </div>
            <div className='modal__upload__input'>
              <img src={ThumbR} alt='Interviewee'/>
              <label 
                className='modal__upload__label' 
                for='left__thumb__upload'> Upload Left Thumb Mark</label>
              <input 
                id='left-thumb-upload'
                type='file'
                accept='image'
                />
            </div>
            <div className='modal__upload__input'>
              <img src={ThumbL} alt='Interviewee'/>
              <label 
                className='modal__upload__label' 
                for='right__thumb__upload'> Upload Right Thumb Mark</label>
              <input 
                id='right-thumb-upload'
                type='file'
                accept='image'
                />
            </div>
          </div>
          <div className="modal__submit__btn">
            <button 
              className='modal__upload__label'
              name='upload-submit-btn'
              id='upload-submit-btn'>
              Upload
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}