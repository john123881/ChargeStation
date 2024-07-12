import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilEnvelopeClosed, cilArrowThickLeft } from '@coreui/icons'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  })
  const { username, email, password, repeatPassword } = formData
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

    if (password !== repeatPassword) {
      event.stopPropagation()
      // Handle mismatch error (you can set an error state here if needed)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      })
      return
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
      }).then(() => {
        navigate('/login')
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
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                  className="needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <h1 style={{ userSelect: 'none' }}>
                    <CIcon
                      icon={cilArrowThickLeft}
                      size="xxl"
                      className="me-2"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        navigate('/login')
                      }}
                    />
                    Register
                  </h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      id="username"
                      feedbackValid="Success!"
                      feedbackInvalid="Error!"
                      required
                      placeholder="Username"
                      autoComplete="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilEnvelopeClosed} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      id="email"
                      placeholder="Email"
                      feedbackValid="Success!"
                      feedbackInvalid="Error!"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password"
                      feedbackValid="Success!"
                      feedbackInvalid="Error!"
                      required
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="repeatPassword"
                      feedbackValid="Success!"
                      feedbackInvalid="Error!"
                      required
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      value={repeatPassword}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
