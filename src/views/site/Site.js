import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CRow, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLocationPin } from '@coreui/icons'
import { FaChargingStation } from 'react-icons/fa6'
import { GrStatusGoodSmall } from 'react-icons/gr'

const chargerInfo = [
  { status: 'Charging', position: 'A1', userName: 'Alice', userPhone: '0912-345-679' },
  { status: 'Charging', position: 'B1', userName: 'Bob', userPhone: '0912-345-680' },
  { status: 'Reserved', position: 'C1', userName: 'Dave', userPhone: '0912-345-682' },
  { status: 'Unavailable', position: 'D1', userName: 'Null', userPhone: 'Null' },
  { status: 'Reserved', position: 'A2', userName: 'Carol', userPhone: '0912-345-681' },
  { status: 'Unavailable', position: 'B2', userName: 'Null', userPhone: 'Null' },
  { status: 'Available', position: 'C2', userName: '', userPhone: '' },
  { status: 'Available', position: 'D2', userName: '', userPhone: '' },
  { status: 'Unavailable', position: 'A3', userName: 'Null', userPhone: 'Null' },
  { status: 'Reserved', position: 'B3', userName: 'Bob', userPhone: '0912-345-680' },
  { status: 'Available', position: 'C3', userName: '', userPhone: '' },
  { status: 'Available', position: 'D3', userName: '', userPhone: '' },
  { status: 'Malfunction', position: 'A4', userName: 'Null', userPhone: 'Null' },
  { status: 'Charging', position: 'B4', userName: 'Alice', userPhone: '0912-345-679' },
  { status: 'Malfunction', position: 'C4', userName: 'Null', userPhone: 'Null' },
  { status: 'Reserved', position: 'D4', userName: 'Alice', userPhone: '0912-345-679' },
  { status: 'Malfunction', position: 'A5', userName: 'Null', userPhone: 'Null' },
  { status: 'Charging', position: 'B5', userName: 'Dave', userPhone: '0912-345-682' },
  { status: 'Malfunction', position: 'C5', userName: 'Null', userPhone: 'Null' },
  { status: 'Unavailable', position: 'D5', userName: 'Null', userPhone: 'Null' },
]

const Site = () => {
  const [chargerData, setChargeData] = useState(chargerInfo)
  const [chargerDetail, setChargerDetail] = useState({})
  const rows = 5
  const cols = 4

  //顏色
  const getColorByStatus = (status) => {
    switch (status) {
      case 'Available':
        return 'text-success'
      case 'Reserved':
        return 'text-info'
      case 'Charging':
        return 'text-warning'
      case 'Malfunction':
        return 'text-danger'
      case 'Unavailable':
        return 'text-secondary'
      default:
        return 'text-dark'
    }
  }

  const getChargerNumber = (position) => {
    const rows = ['A', 'B', 'C', 'D']
    const row = position[0]
    const col = parseInt(position[1])
    const rowIndex = rows.indexOf(row)
    const number = rowIndex * 5 + col
    return number.toString().padStart(3, '0')
  }

  //處理Detail
  const handleDataDetail = (charger) => {
    setChargerDetail({
      ...charger,
      chargerName: `EV Charger TPP ${getChargerNumber(charger.position)}`,
    })
  }

  // 生成行和列內容
  const renderRows = () => {
    const rowElements = []

    for (let i = 0; i < rows; i++) {
      rowElements.push(
        <CRow className="text-center py-4" key={i}>
          {/* 每i個row生成j個column */}
          {Array.from({ length: cols }).map((_, j) => {
            const index = i * 4 + j
            const charger = chargerData[index]
            const colorClass = getColorByStatus(charger.status)
            const cursorClass = charger.status === 'Unavailable' ? 'not-allowed' : 'pointer'
            return (
              <CCol xs={3} key={j}>
                <FaChargingStation
                  style={{ cursor: `${cursorClass}` }}
                  className={`fs-2 ${colorClass} `}
                  onClick={() => charger.status !== 'Unavailable' && handleDataDetail(charger)}
                />
              </CCol>
            )
          })}
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
        <CRow className="text-end py-4 d-flex align-items-center" key={i}>
          <CCol style={{ height: '32px', verticalAlign: 'middle' }} xs={12}>
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
                  {renderRows()}
                </CCol>

                <CCol xs={12} md={3} className="d-flex justify-content-center flex-column">
                  <div className="d-none d-md-flex position-absolute" style={{ height: '300px' }}>
                    <div className="vr"></div>
                  </div>
                  <CRow>
                    {chargerDetail.chargerName && (
                      <CCol
                        xs={11}
                        className="d-flex justify-content-center flex-column align-items-center px-3 ms-md-3"
                      >
                        <div className="fw-bolder mb-4 position-relative">
                          <FaChargingStation
                            className="fs-5 position-absolute"
                            style={{ top: '2px', left: '-25px' }}
                          />
                          {chargerDetail.chargerName}
                        </div>
                        <div className="my-2 ">
                          Position: <span>{chargerDetail.position}</span>
                        </div>
                        <div className="my-2 ">
                          Status:{' '}
                          <GrStatusGoodSmall
                            className={`fs-5 py-1 ${getColorByStatus(chargerDetail.status)} align-middle`}
                          />
                          <span>{chargerDetail.status}</span>
                        </div>
                        <div className="my-2 ">
                          User Name: <span>{chargerDetail.userName}</span>
                        </div>
                        <div className="my-2 ">
                          User Phone: <span>{chargerDetail.userPhone}</span>
                        </div>
                        {chargerDetail.status === 'Available' && (
                          <CButton className="w-50 mt-2" color="primary">
                            Reserve
                          </CButton>
                        )}
                      </CCol>
                    )}
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
