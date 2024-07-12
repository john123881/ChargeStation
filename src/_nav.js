import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilSpeech, cilHeart, cilFile } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import { MdEvStation } from 'react-icons/md'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Services',
  },
  {
    component: CNavItem,
    name: 'Site',
    to: '/site',
    icon: <MdEvStation className="nav-icon text-light" />,
  },
  {
    component: CNavItem,
    name: 'Record',
    to: '/record',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contact',
    to: '/contact',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
  },
]

export default _nav
