import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilAccountLogout,
  cilCreditCard,
  cilSettings,
  cilFolderOpen,
  cilCash,
  cilTransfer,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'

import avatar1 from './../../assets/images/avatars/1.jpg'

const AppHeaderDropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const handleLogout = () => {
    console.log('state:', isAuthenticated)
    if (isAuthenticated) {
      Swal.fire({
        position: 'center',
        title: 'You are now logged out!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      })
        .then(() => {
          dispatch(logout())
          navigate('/login')
        })
        .catch((error) => {
          console.error('login error:', error)
        })
    }
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar1} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>

        <CDropdownItem to="/user" as={NavLink}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payment
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFolderOpen} className="me-2" />
          Invoice
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCash} className="me-2" />
          Top-up Records
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTransfer} className="me-2" />
          Transaction Records
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={handleLogout} style={{ cursor: 'pointer', userSelect: 'none' }}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
