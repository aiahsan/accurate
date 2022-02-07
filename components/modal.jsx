import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export const ScheduleModal=({show,handleClose})=> {
   
  
    return (
      <>
        
  
        <Modal
          show={show}
          onHide={handleClose}
           keyboard={false}
           dialogClassName="modal-90w"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className='fw700 fs24 lh45'>Schedule a demo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe src="https://calendly.com/vorndran-1/45min" title=""></iframe>

          </Modal.Body>
          <Modal.Footer>
      
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 