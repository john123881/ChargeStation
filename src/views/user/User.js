import React from 'react'
import classNames from 'classnames'

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
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Dashboard = () => {
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
            <CCardHeader>User Profile</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow className="d-flex  justify-content-center mt-5">
                    <CAvatar
                      size="xl"
                      src={avatar1}
                      style={{ width: '150px', height: '150px' }}
                    ></CAvatar>
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

              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
