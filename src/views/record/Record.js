import React from 'react'

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CPagination,
  CPaginationItem,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

import park1 from 'src/assets/images/park1.jpg'
import park2 from 'src/assets/images/park2.jpg'

const Record = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Favorite</CCardHeader>
            <CCardBody>
              <CCard className="mb-3 w-100">
                <CRow className="g-0">
                  <CCol md={4}>
                    <CCardImage src={park1} />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody className="ms-1 ms-md-5 mt-3">
                      <CCardTitle>Taipei Park</CCardTitle>
                      <CCardText className="d-flex flex-column mt-3">
                        <small className="text-body-secondary">
                          <span>Date (yyyy/mm/dd) </span>: <span>2024/07/02</span>
                        </small>
                        <small className="text-body-secondary">
                          <span>Charging Duration (hh:mm)</span> : <span>02:21</span>
                        </small>
                        <small className="text-body-secondary">
                          <span>Charging Amount (kWh)</span> : <span>100</span>
                        </small>
                        <small className="text-body-secondary">
                          <span>Charging Fee (TWD)</span> : <span>1000</span>
                        </small>
                        <small className="text-body-secondary">
                          <span> License Plate Number </span> : <span>AEW-1243</span>
                        </small>
                      </CCardText>
                    </CCardBody>
                  </CCol>
                </CRow>
              </CCard>{' '}
              <CCard className="mb-3 w-100">
                <CRow className="g-0">
                  <CCol md={4}>
                    <CCardImage src={park2} />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody className="ms-1 ms-md-5 mt-3">
                      <CCardTitle>Neihu Park</CCardTitle>
                      <CCardText className="d-flex flex-column mt-3">
                        <small className="text-body-secondary">
                          <span>Date (yyyy/mm/dd) </span>: <span>2024/07/01</span>
                        </small>
                        <small className="text-body-secondary">
                          <span>Charging Duration (hh:mm)</span> : <span>02:33</span>
                        </small>
                        <small className="text-body-secondary">
                          <span>Charging Amount (kWh)</span> : <span>110</span>
                        </small>
                        <small className="text-body-secondary">
                          <span>Charging Fee (TWD)</span> : <span>1100</span>
                        </small>
                        <small className="text-body-secondary">
                          <span> License Plate Number </span> : <span>AEW-1243</span>
                        </small>
                      </CCardText>
                    </CCardBody>
                  </CCol>
                </CRow>
              </CCard>{' '}
              <div className="d-flex justify-content-center">
                <CPagination>
                  <CPaginationItem aria-label="Previous" disabled>
                    <span aria-hidden="true">&laquo;</span>
                  </CPaginationItem>
                  <CPaginationItem active>1</CPaginationItem>
                  <CPaginationItem>2</CPaginationItem>
                  <CPaginationItem>3</CPaginationItem>
                  <CPaginationItem aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </CPaginationItem>
                </CPagination>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Record
