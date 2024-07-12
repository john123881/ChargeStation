import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
import Status from '../status/Status'
import MainMap from './MainMap'

const Home = () => {
  return (
    <>
      <Status className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <MainMap />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Home
