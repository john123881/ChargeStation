import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import park1 from 'src/assets/images/park1.jpg'
import park2 from 'src/assets/images/park2.jpg'

const Favorite = () => {
  const userInfo = [
    { title: 'Uername', value: 'Alice' },
    { title: 'Email', value: 'XXX@mail.com' },
    { title: 'Car Model', value: 'Tesla' },
    { title: 'Charging Times', value: 10 },
    { title: 'Balance', value: 1000 + ' NTD' },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Favorite</CCardHeader>
            <CCardBody>
              {/* <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow className="d-flex  justify-content-center mt-5">
                    <CCardImage orientation="top" src={park1} />
                  </CRow>
                </CCol>
                <CCol
                  xs={12}
                  md={6}
                  xl={6}
                  className="d-flex row justify-content-center align-item-center mt-5"
                >
                  {userInfo.map((item, index) => (
                    <CRow key={index} className="mb-3">
                      <CCol xs={6} md={4} className="text-center text-md-start">
                        {item.title}:
                      </CCol>
                      <CCol xs={6} md={8}>
                        {item.value}
                      </CCol>
                    </CRow>
                  ))}
                </CCol>
              </CRow>

              <br /> */}
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Favorite
