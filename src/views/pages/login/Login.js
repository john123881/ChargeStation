import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/authSlice'

const Login = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    const getStoredFormData = () => {
      const storedFormData = localStorage.getItem('formData')
      if (!storedFormData) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'It is required to register!',
        })
        return null
      }
      return JSON.parse(storedFormData)
    }

    const storedData = getStoredFormData()
    let usernameDB, passwordDB
    if (storedData) {
      ;({ username: usernameDB, password: passwordDB } = storedData)

      if (password !== passwordDB || username !== usernameDB) {
        // Handle mismatch error (you can set an error state here if needed)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or Password Error!',
        })
        return
      }
    }

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      // Handle form submission
      localStorage.setItem('formData', JSON.stringify(formData))
      Swal.fire({
        position: 'center',
        title: 'Register Success!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      })
        .then(() => {
          dispatch(login())
          navigate('/')
        })
        .catch((error) => {
          console.error('login error:', error)
        })
    }
    setValidated(true)

    // Handle form submission
    // Example: dispatch registration action or API call
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    className="needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <h1 style={{ userSelect: 'none' }}>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="username"
                        placeholder="Username"
                        autoComplete="username"
                        feedbackValid="Success!"
                        feedbackInvalid="Error!"
                        required
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        feedbackValid="Success!"
                        feedbackInvalid="Error!"
                        required
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <Link to="/register">
                      <CButton color="primary" className="mt-5" size="lg" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
