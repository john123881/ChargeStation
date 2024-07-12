import React from 'react'
import { CAvatar, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/1.jpg'

const Dashboard = () => {
  const userInfo = [
    { title: 'Username', value: 'Alice' },
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
