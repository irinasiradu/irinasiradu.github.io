import React, { Component } from 'react'
import axios from 'axios'

const GOOGLE_FORM_NAME_ID = 'entry.1795367464'
const GOOGLE_FORM_PRESENT_ID = 'entry.2140823696'
const GOOGLE_FORM_EMAIL_ID = 'entry.185174987'
const GOOGLE_FORM_PHONE_ID = 'entry.543897934'
const GOOGLE_FORM_MESSAGE_ID = 'entry.543897934'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScDq1t-GydjtoEoWMurdvacRDDmwc8p9-2J6LrD3wWuIOdKJw/formResponse'

class ContactBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      present: false,
      notPresent: false,
      email: '',
      phone: '',
      transport: false,
      accommodation: false,
      message: '',
      sendingMessage: false,
      messageSent: false,
      messageError: false
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'present') {
      this.setState({
        present: event.target.checked,
        notPresent: !event.target.checked
      })
    } else if (event.target.name === 'notPresent') {
      this.setState({
        present: !event.target.checked,
        notPresent: event.target.checked
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }


  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      sendingMessage: true
    })
    this.sendMessage()
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)
    formData.append(GOOGLE_FORM_NAME_ID, this.state.name)
    formData.append(GOOGLE_FORM_PRESENT_ID, (this.state.present ? 'Present' : ''))
    formData.append(GOOGLE_FORM_PHONE_ID, this.state.phone)

    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
      .then(() => {
        this.setState({
          name: '',
          present: false,
          notPresent: false,
          email: '',
          phone: '',
          transport: false,
          accommodation: false,
          message: '',
          sendingMessage: false,
          messageSent: true,
          messageError: false
        })
      }).catch(() => {
        this.setState({
          messageError: true,
          sendingMessage: false
        })
      })
  }

  render() {
    if (this.state.messageSent) {
      return (
        <div className='success-message'>Va multumim pentru raspuns!</div>
      )
    }

    if (this.state.messageError) {
      return (
        <div className='error-message'>Ne pare rau. A aparut o eroare. Va rugam contactati-ne la 0724 933 644</div>
      )
    }

    if (this.state.showForm === false) {
      return (
        <button id='contact-button' className='btn btn-sm' onClick={this.handleFormToggle}>Contact</button>
      )
    }

    return (
      <React.Fragment>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit} disabled={this.state.sendingMessage}>
            <div className='form-group row'>
              <label htmlFor='email' className='col-sm-2 col-form-label'>
                Nume:
              </label>
              <div className='col-sm-8'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='form-control'
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='present' className='col-sm-2 col-form-label'>
                Da, voi veni!
              </label>
              <div className='col-sm-2'>
                <input
                  type='radio'
                  name='present'
                  id='present'
                  className='form-control'
                  checked={this.state.present}
                  onChange={this.handleChange}
                />
              </div>
              <label htmlFor='notPresent' className='col-sm-2 col-form-label'>
                Nu, voi veni la urmatoarea!
              </label>
              <div className='col-sm-2'>
                <input
                  type='radio'
                  name='notPresent'
                  id='notPresent'
                  className='form-control'
                  checked={this.state.notPresent}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {this.state.present && (
              <React.Fragment>
                <div className='form-group row'>
                  <label htmlFor='email' className='col-sm-2 col-form-label'>
                    Email:
                  </label>
                  <div className='col-sm-8'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='form-control'
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className='form-group row'>
                  <label htmlFor='email' className='col-sm-2 col-form-label'>
                    Tel.:
                  </label>
                  <div className='col-sm-8'>
                    <input
                      type='phone'
                      name='phone'
                      id='phone'
                      className='form-control'
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className='form-group row'>
                  <label htmlFor='message' className='col-sm-2 col-form-label'>
                    Mesaj:
                  </label>
                  <div className='col-sm-8'>
                    <textarea
                      id='message'
                      name='message'
                      className='form-control'
                      value={this.state.message}
                      onChange={this.handleChange}
                      rows='6'
                    />
                  </div>
                </div>
              </React.Fragment>)}
            <div>
              <button type='submit' className='btn btn-sm btn-default btn-action'>Trimite</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default ContactBox