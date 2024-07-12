import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CWidgetStatsC,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
  cilBoltCircle,
  cilCarAlt,
  cilBattery3,
  cilLocationPin,
  cilClock,
} from '@coreui/icons'

const Status = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow xs={{ gutter: 4 }}>
      <CCol xs={6} lg={4} xxl={3}>
        <CWidgetStatsC
          icon={<CIcon icon={cilBoltCircle} height={36} />}
          value="236/253 "
          title="Total Grid Capacity (MW)"
          progress={{ color: 'info', value: 93 }}
        />
      </CCol>
      <CCol xs={6} lg={4} xxl={3}>
        <CWidgetStatsC
          icon={<CIcon icon={cilCarAlt} height={36} />}
          value="4/10 "
          title="Charging Station (Occupied)"
          progress={{ color: 'info', value: 40 }}
        />
      </CCol>
      <CCol xs={6} lg={4} xxl={3}>
        <CWidgetStatsC
          icon={<CIcon icon={cilBattery3} height={36} />}
          value="35.0"
          title="Charging Speed (kW)"
          progress={{ color: 'info', value: 100 }}
        />
      </CCol>
      <CCol xs={6} lg={4} xxl={3}>
        <CWidgetStatsC
          icon={<CIcon icon={cilLocationPin} height={36} />}
          value="5"
          title="Distance (KM)"
          progress={{ color: 'info', value: 100 }}
        />
      </CCol>
    </CRow>
  )
}

Status.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default Status
