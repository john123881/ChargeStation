import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'

const Contact = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Contact Us</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="container">
              <div className="mb-3">
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput type="name" id="name" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="email">Email address</CFormLabel>
                <CFormInput type="email" id="email" placeholder="Your email" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="email">Contact Number</CFormLabel>
                <CFormInput type="phone" id="number" placeholder="Your contact number" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  placeholder="How can we help?"
                  rows={3}
                ></CFormTextarea>
              </div>
              <div className="mt-4 row d-flex justify-content-end">
                <CButton color="primary" type="submit" className="col col-lg-1">
                  Send
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Contact
