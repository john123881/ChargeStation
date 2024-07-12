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
  cilLocationPin,
} from '@coreui/icons'
import { FaChargingStation } from 'react-icons/fa6'
import { GrStatusGoodSmall } from 'react-icons/gr'

const Site = () => {
  const rows = 5
  const cols = 4

  // 生成行和列內容
  const renderRows = () => {
    const rowElements = []

    for (let i = 0; i < rows; i++) {
      rowElements.push(
        <CRow className="text-center py-4" key={i}>
          {Array.from({ length: cols }).map((_, j) => (
            <CCol xs={3} key={j}>
              <FaChargingStation className="fs-2" />
            </CCol>
          ))}
        </CRow>,
      )
    }

    return rowElements
  }

  // 生成序號列
  const renderIndexColumn = () => {
    const indexElements = []

    for (let i = 0; i < rows; i++) {
      indexElements.push(
        <CRow className="text-center py-4" key={i}>
          <CCol style={{ height: '32px' }} xs={12}>
            {i + 1}
          </CCol>
        </CRow>,
      )
    }

    return indexElements
  }

  return (
    <>
      <CRow xs={{ gutter: 3 }}>
        <CCol xs={12}>
          <CIcon size="lg" icon={cilLocationPin} />
          <span className="ms-2">Taipei Park</span>
        </CCol>
        <CCol xs={12}>
          <CCard>
            <CCardBody className="d-flex flex-wrap justify-content-around">
              <div>
                <GrStatusGoodSmall className="pb-1 fs-4 text-success align-center" />
                <span className="ms-1">Available</span>
                <span className="ms-2">4</span>
              </div>
              <div className="mx-3">
                <GrStatusGoodSmall className="pb-1 fs-4 text-info align-center" />
                <span className="ms-1">Reserved</span>
                <span className="ms-2">4</span>
              </div>
              <div className="mx-3">
                <GrStatusGoodSmall className="pb-1 fs-4 text-warning align-center" />
                <span className="ms-1">Charging</span>
                <span className="ms-2">4</span>
              </div>
              <div className="mx-3">
                <GrStatusGoodSmall className="pb-1 fs-4 text-danger align-center" />
                <span className="ms-1">Malfunction</span>
                <span className="ms-2">4</span>
              </div>
              <div className="mx-3">
                <GrStatusGoodSmall className="pb-1 fs-4 text-secondary align-center" />
                <span className="ms-1">Unavailable</span>
                <span className="ms-2">4</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}></CCol>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CRow className="my-4">
                <CCol xs={1} md={1}>
                  <CRow className="text-center py-3">
                    <CCol xs={12} style={{ visibility: 'hidden' }}>
                      {'/'}
                    </CCol>
                  </CRow>
                  {renderIndexColumn()}
                </CCol>
                <CCol xs={11} md={8}>
                  <CRow className="text-center py-3">
                    <CCol xs={3}>A</CCol>
                    <CCol xs={3}>B</CCol>
                    <CCol xs={3}>C</CCol>
                    <CCol xs={3}>D</CCol>
                  </CRow>
                  {/* <CRow className="text-center py-3">
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                  </CRow>
                  <CRow className="text-center py-3">
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                  </CRow>{' '}
                  <CRow className="text-center py-3">
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                  </CRow>{' '}
                  <CRow className="text-center py-3">
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                  </CRow>{' '}
                  <CRow className="text-center py-3">
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>

                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                    <CCol xs={3}>
                      <FaChargingStation className="fs-2" />
                    </CCol>
                  </CRow> */}
                  {renderRows()}
                </CCol>

                <CCol xs={12} md={3} className="d-flex justify-content-center flex-column">
                  <div className="d-flex position-absolute" style={{ height: '300px' }}>
                    <div className="vr"></div>
                  </div>
                  <CRow>
                    <CCol
                      xs={11}
                      className="d-flex justify-content-center flex-column align-item-center px-3 ms-5"
                    >
                      <div className="fw-bolder mb-4 position-relative">
                        <FaChargingStation
                          className="fs-5 position-absolute"
                          style={{ top: '2px', left: '-25px' }}
                        />
                        EV Charger TPP 001
                      </div>
                      <div className="my-2 ">
                        Position: <span>A1</span>
                      </div>
                      <div className="my-2 ">
                        Status: <GrStatusGoodSmall className="fs-5 py-1 text-info align-middle" />
                        <span>Reserved</span>
                      </div>
                      <div className="my-2 ">
                        Name: <span>John</span>
                      </div>
                      <div className="my-2 ">
                        Phone: <span>0912-345-678</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Site
