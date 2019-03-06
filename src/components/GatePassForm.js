import React from 'react';
import moment from 'moment';
import { TimePicker, Select, DatePicker, Input, Button } from 'antd';
import Webcam from "react-webcam";
import { Row, Col } from 'antd';
import { inherits } from 'util';


export default class GatePassForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: props.gatepass ? props.gatepass.Name : '',
      MobileNO: props.gatepass ? props.gatepass.MobileNO : '',
      PassNo: props.gatepass ? props.gatepass.PassNo : null,
      createdAt: props.gatepass ? moment(props.gatepass.createdAt) : moment(),
      createdAtTime: props.gatepass ? moment(props.gatepass.createdAtTime) : moment(),
      ToMeet: props.gatepass ? props.gatepass.ToMeet : '',
      Purpose: props.gatepass ? props.gatepass.Purpose : '',
      Address: props.gatepass ? props.gatepass.Address : '',
      calendarFocused: false,
      error: '',
      image: null,
      isOut: true
    };
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    //localStorage.setItem('img', imageSrc);
    this.setState(() => ({ image: imageSrc }))
  };
  onChange = time => this.setState({ createdAtTime: time });
  
  onDateChange = (date, dateString) => {
    this.setState(() => ({ createdAt: date }))
  }
//   onDateChange = (createdAt) => {
//       alert('hola');
//     if (createdAt) {
//       this.setState(() => ({ createdAt }));
//     }
//   };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.Name || !this.state.MobileNO) {
      this.setState(() => ({ error: 'Please provide details.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        Name: this.state.Name,
        MobileNO: this.state.MobileNO,
        PassNo: this.state.PassNo,
        createdAt: this.state.createdAt.valueOf(),
        createdAtTime: this.state.createdAtTime.valueOf(),
        ToMeet: this.state.ToMeet,
        Purpose: this.state.Purpose,
        Address: this.state.Address,
        image: this.state.image,
        isOut: this.state.isOut
      });
    }
  };
  onMobileChange = (e) => {
    const MobileNO = e.target.value;
    this.setState(() => ({ MobileNO }));
  }
  onNameChange = (e) => {
    const Name = e.target.value;
    this.setState(() => ({ Name }));
  }
  onPassChange = (e) => {
      const PassNo = e.target.value;
      this.setState(() => ({ PassNo }));
  }
  onToMeetChange = (e) => {
      const ToMeet = e.target.value;
      this.setState(() => ({ ToMeet }));
  }
  onPurposeChange = (e) => {
      const Purpose = e.target.value;
      this.setState(() => ({ Purpose }));
  }
  onAddressChange = (e) => {
      const Address = e.target.value;
      this.setState(() => ({ Address }));
  }
  render() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    return (
    <div className="gate-pass-form">
        {this.state.error && <p>{this.state.error}</p>}
        <div className="cam">
          <Webcam
            audio={false}
            height={200}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <div className="capture_btn"><button className="button" onClick={this.capture}>Capture photo</button></div>
          <div className="pic"><img src={this.state.image} alt=""/></div>
        </div>

      <div className="form-div">
        <form onSubmit={this.onSubmit}>
              <Input
                  
                  style={{ width: 'inherit'}}
                  type="text"
                  placeholder="Name"
                  autoFocus
                  value={this.state.Name}
                  onChange={this.onNameChange}
              />
              <Input
                 
                  style={{ width: 'inherit'}}
                  type="text"
                  placeholder="Mobile number"
                  value={this.state.MobileNO}
                  onChange={this.onMobileChange}
              />
              <Input
                  
                  style={{ width: 'inherit'}}
                  type="text"
                  placeholder="Pass number"
                  value={this.state.PassNo}
                  onChange={this.onPassChange}
              />
              <DatePicker
                  className="inp"
                  defaultValue={this.state.createdAt}
                  onChange={this.onDateChange}
              />
              <TimePicker
                  className="inp"
                  defaultValue={this.state.createdAtTime}
                  onChange={this.onChange}
              />
              <Input
                  
                  style={{ width: 'inherit'}}
                  type="text"
                  placeholder="To Meet"
                  value={this.state.ToMeet}
                  onChange={this.onToMeetChange}
              />
              <Input
                  
                  style={{ width: 'inherit'}}
                  type="text"
                  placeholder="Purpose"
                  value={this.state.Purpose}
                  onChange={this.onPurposeChange}
              />
              <Input
                  
                  style={{ width: 'inherit'}}
                  type="text"
                  placeholder="Address"
                  value={this.state.Address}
                  onChange={this.onAddressChange}
              />
              <button className="button">Add Gatepass</button>
          </form>
        </div>
      </div>
    )
  }
}
