import React, { Component } from 'react';

import styled from "styled-components";
import axios from 'axios';

import { style, colors } from "../shared/Common.js"
import { Form, Col, Row } from 'react-bootstrap';
import Collapse from "react-collapse";
import Confetti from './Confetti.js';

const sharedInputStyle = `
  width: 100%;
  padding-left: 0.8em;
  font-size: 21px;
  color: ${colors.grey};
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  
  &:focus {
    outline: none !important;
    box-shadow: 0 0 5px ${colors.grey};

  }`

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
  min-height: 75vh;

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

    &:hover:enabled {
      background: ${colors.white};
      color: ${colors.important};
    }
  }

  .form-row {
    padding-top: 10px;
    padding-bottom: 10px;
    @media (max-width: 767px) {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  input {
    ${sharedInputStyle}
  }

  textarea {
    ${sharedInputStyle}
  }

  input[type=text] {
    height: 2em;
  }

  .form-check {
    text-align: center;
  }

  input[type=checkbox]:focus, input[type=radio]:focus {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  input[type=checkbox]:hover, input[type=radio]:hover {
    cursor: pointer;
  }
  
  .custom-control-input:checked~.custom-control-label::before {
    color: ${colors.white};
    border-color: ${colors.lightGrey};
    background-color: ${colors.important};
  }

  .custom-control-input:focus:not(:checked)~.custom-control-label::before {
    border-color: ${colors.lightGrey};
  }

  .success-message {
    text-align: center;
    font-size: 21px;
    color: ${colors.important};
  }

  .title {
    font-size: 30px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  
  .important {
    color: ${colors.important};
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
      present: true,
      transport: false,
      accommodation: false,
      otherAttendees: "",
      message: '',
      sendingMessage: false,
      messageSent: false,
      messageError: false
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'present') {
      this.setState({
        present: event.target.checked
      })
    } else if (event.target.name === 'notPresent') {
      this.setState({
        present: !event.target.checked
      })
    } else if (event.target.name === 'transport') {
      this.setState(state => ({
        transport: !state.transport
      }))
    } else if (event.target.name === 'accommodation') {
      this.setState(state => ({
        accommodation: !state.accommodation
      }))
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
    console.log(JSON.stringify(this.state));
    this.setState({ messageSent: true });
    // const formData = new FormData()
    // formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
    // formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)
    // formData.append(GOOGLE_FORM_NAME_ID, this.state.name)
    // formData.append(GOOGLE_FORM_PRESENT_ID, (this.state.present ? 'Present' : ''))
    // formData.append(GOOGLE_FORM_PHONE_ID, this.state.phone)

    // axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
    //   .then(() => {
    //     this.setState({
    //       name: '',
    //       present: false,
    //       notPresent: false,
    //       email: '',
    //       phone: '',
    //       transport: false,
    //       accommodation: false,
    //       message: '',
    //       sendingMessage: false,
    //       messageSent: true,
    //       messageError: false
    //     })
    //   }).catch(() => {
    //     this.setState({
    //       messageError: true,
    //       sendingMessage: false
    //     })
    //   })
  }

  render() {
    const { localization } = this.props;
    const disabled = this.state.sendingMessage || this.state.messageSent || this.state.messageError;


    return (
      <Section className="row d-flex justify-content-center">
        <div className="col-md-12 title">
          {localization.rsvpTitle}
        </div>
        <div className="col-md-6">
          <Form onSubmit={this.handleSubmit}>
            <React.Fragment>
              <Row className="form-row">
                <Form.Control
                  type="text"
                  placeholder={localization.namePlaceholder}
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  id="name"
                  disabled={disabled}
                />
              </Row>
              <fieldset>
                <Form.Group as={Row} className="form-row">
                  <Col sm={6}>
                    <Form.Check
                      type="radio"
                      custom
                      label={localization.yesPresentLabel}
                      name='present'
                      id='present'
                      checked={this.state.present}
                      onChange={this.handleChange}
                      disabled={disabled}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Check
                      type="radio"
                      custom
                      label={localization.noPresentLabel}
                      name='notPresent'
                      id='notPresent'
                      checked={!this.state.present}
                      onChange={this.handleChange}
                      disabled={disabled}
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Collapse isOpened={this.state.present}>
                <Row className="form-row" >
                  <Col sm={6}>
                    <Form.Check
                      type="checkbox"
                      custom
                      label={localization.transportLabel}
                      name='transport'
                      id='transport'
                      checked={this.state.transport}
                      onChange={this.handleChange}
                      disabled={disabled}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Check
                      type="checkbox"
                      custom
                      label={localization.accommodationLabel}
                      name='accommodation'
                      id='accommodation'
                      checked={this.state.accommodation}
                      onChange={this.handleChange}
                      disabled={disabled}
                    />
                  </Col>
                </Row>
                <Row className="form-row">
                  <Form.Control
                    type="text"
                    placeholder={localization.otherAttendeesPlaceholder}
                    value={this.state.otherAttendees}
                    onChange={this.handleChange}
                    name="otherAttendees"
                    id="otherAttendees"
                    disabled={disabled}
                  />
                </Row>
                <Row className="form-row">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder={localization.messagePlaceholder}
                    value={this.state.message}
                    onChange={this.handleChange}
                    name="message"
                    id="message"
                    disabled={disabled}
                  />
                </Row>
              </Collapse>
            </React.Fragment>
            <div style={{ textAlign: "center" }}>
              <button type='submit' id="salut gabone" className='btn btn-sm btn-default btn-action rsvp-button' disabled={disabled}>
                <Confetti active={this.state.messageSent && this.state.present} />
                {localization.submitButton}
              </button>
            </div>
          </Form>
        </div>

        {this.state.messageSent && (
          <div className='col-md-12 success-message'>{localization.thankYou}
          </div>
        )}

        {!this.state.messageSent && this.state.messageError && (
          <div className='col-md-12 error-message'>{localization.submitError}</div>)}

      </Section >
    )
  }
}

export default Rsvp