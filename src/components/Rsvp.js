import React, { Component } from 'react';

import styled from "styled-components";
import axios from 'axios';

import { style, colors } from "../shared/Common.js"

const Section = styled.div`
  padding-top: 2%;
  padding-bottom: 5%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${colors.white};
  color: ${colors.grey};
  font-family: ${style.fontFamily};
  overflow: hidden;
  align-items: normal;

  .title {
    text-align: center;
    font-size: 50px;
    font-weight: 100;
    
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }

  .rsvp-button {
    background: ${colors.important};
    border: solid 2px ${colors.important};
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.important};
    }
  }
`;

const GOOGLE_FORM_NAME_ID = 'entry.1795367464'
const GOOGLE_FORM_PRESENT_ID = 'entry.2140823696'
const GOOGLE_FORM_EMAIL_ID = 'entry.185174987'
const GOOGLE_FORM_PHONE_ID = 'entry.543897934'
const GOOGLE_FORM_MESSAGE_ID = 'entry.543897934'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScDq1t-GydjtoEoWMurdvacRDDmwc8p9-2J6LrD3wWuIOdKJw/formResponse'

class Rsvp extends Component {
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
    const { localization } = this.props;
    if (this.state.messageSent) {
      return (
        <div className='success-message'>{localization.thankYou}</div>
      )
    }

    if (this.state.messageError) {
      return (
        <div className='error-message'>{localization.submitError}</div>
      )
    }

    return (
      <Section className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit} disabled={this.state.sendingMessage}>
            <div className='form-group row'>
              <label htmlFor='email' className='col-sm-2 col-form-label'>
                {localization.nameLabel}:
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
              <div className='col-sm-4'>
                <input
                  type='radio'
                  name='present'
                  id='present'
                  className='form-control'
                  checked={this.state.present}
                  onChange={this.handleChange}
                />
                <label htmlFor='present' className='col-form-label'>
                  {localization.confirmAction}
                </label>
              </div>
              <div className='col-sm-4'>
                <input
                  type='radio'
                  name='notPresent'
                  id='notPresent'
                  className='form-control'
                  checked={this.state.notPresent}
                  onChange={this.handleChange}
                />
                <label htmlFor='notPresent' className='col-form-label'>
                  {localization.rejectAction}
                </label>
              </div>
            </div>
            {this.state.present && (
              <React.Fragment>
                <div className='form-group row'>
                  <label htmlFor='email' className='col-sm-2 col-form-label'>
                    {localization.emailLabel}:
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
                  <label htmlFor='phone' className='col-sm-2 col-form-label'>
                    {localization.phoneLabel}:
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
                    {localization.messageLabel}:
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
              <button type='submit' className='btn btn-sm btn-default btn-action rsvp-button'>{localization.submitButton}</button>
            </div>
          </form>
        </div>
      </Section >
    )
  }
}

export default Rsvp