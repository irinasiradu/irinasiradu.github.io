import React, { Component } from 'react';

import styled from "styled-components";
import axios from 'axios';

import { style, colors } from "../shared/Common.js"
import { Form, Col, Row } from 'react-bootstrap';
import Collapse from "react-collapse";
import Confetti from './Confetti.js';
import SimpleTooltip from './SimpleTooltip.js';

const sharedInputStyle = `
  width: 100%;
  padding-left: 0.8em;
  font-size: 21px;
  color: ${colors.grey};
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  
  &:-internal-autofill-selected {
    color: ${colors.grey} !important;
  }

  &:focus {
    outline: none !important;
    box-shadow: 0 0 5px ${colors.grey};
  }
  
  &.input-error {
    border: 2px solid ${colors.warning};
  }
  `

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
  //min-height: 75vh;

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

  .result-message {
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

const GOOGLE_FORM_NAME_ID = 'entry.1387862132'
const GOOGLE_FORM_PRESENT_ID = 'entry.845407748'
const GOOGLE_FORM_ACCOMMODATION_ID = 'entry.43798889'
const GOOGLE_FORM_TRANSPORT_ID = 'entry.1298124710'
const GOOGLE_FORM_MESSAGE_ID = 'entry.1485462238'
const GOOGLE_FORM_ATTENDANTS_ID = 'entry.1550750435'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScbLhlPuAsvFJZMGjoTecRRmO-jneDNitYl0enfhNg9L5bh5g/formResponse'

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
      messageError: false,
      nameRequiredError: false,
      formTouched: false,
      showConfetti: false
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'present') {
      this.setState({
        present: event.target.checked
      }, this.validate)
    } else if (event.target.name === 'notPresent') {
      this.setState({
        present: !event.target.checked
      }, this.validate)
    } else if (event.target.name === 'transport') {
      this.setState(state => ({
        transport: !state.transport
      }), this.validate)
    } else if (event.target.name === 'accommodation') {
      this.setState(state => ({
        accommodation: !state.accommodation
      }), this.validate)
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      }, this.validate)
    }
  }

  validate = () => {
    this.setState(state => ({
      ...state,
      nameRequiredError: !state.name,
      formTouched: true,
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      sendingMessage: true
    })
    this.sendMessage()
  }

  sendMessage = () => {
    this.setState(state => ({
      sendingMessage: true,
      showConfetti: state.present
    }));
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
    formData.append(GOOGLE_FORM_NAME_ID, this.state.name)
    formData.append(GOOGLE_FORM_ATTENDANTS_ID, this.state.otherAttendees)
    formData.append(GOOGLE_FORM_PRESENT_ID, (this.state.present ? 'True' : 'False'))
    formData.append(GOOGLE_FORM_ACCOMMODATION_ID, (this.state.present && this.state.accommodation ? 'True' : 'False'))
    formData.append(GOOGLE_FORM_TRANSPORT_ID, (this.state.present && this.state.transport ? 'True' : 'False'))

    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
      .then(() => {
        this.setState({
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
    const formDisabled = this.state.sendingMessage || this.state.messageSent || this.state.messageError;

    return (
      <Section className="row d-flex justify-content-center">
        <div className="col-md-12 title">
          <SimpleTooltip title={localization.rsvpTooltip}>
            {localization.rsvpTitle}
          </SimpleTooltip>
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
                  disabled={formDisabled}
                  onBlur={this.validate}
                  className={this.state.nameRequiredError ? "input-error" : ""}
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
                      disabled={formDisabled}
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
                      disabled={formDisabled}
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
                      disabled={formDisabled}
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
                      disabled={formDisabled}
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
                    disabled={formDisabled}
                    onBlur={this.validate}
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
                    disabled={formDisabled}
                    onBlur={this.validate}
                  />
                </Row>
              </Collapse>
            </React.Fragment>
            <div style={{ textAlign: "center" }}>
              <button type='submit' id="salut gabone" className='btn btn-sm btn-default btn-action rsvp-button' disabled={formDisabled || this.state.nameRequiredError || !this.state.formTouched}>
                <Confetti active={this.state.showConfetti} />
                {localization.submitButton}
              </button>
            </div>
          </Form>
        </div>

        {this.state.messageSent && (
          <div className='col-md-12 result-message'>{localization.thankYou}
          </div>
        )}

        {!this.state.messageSent && this.state.messageError && (
          <div className='col-md-12 result-message'>{localization.submitError}</div>)}

      </Section >
    )
  }
}

export default Rsvp