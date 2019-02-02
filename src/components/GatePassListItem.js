import React from 'react';
import { Link } from 'react-router-dom';
import moment, { max } from 'moment';
import { Card, Divider, Button } from 'antd';
import { Switch } from 'antd';
import { connect } from 'react-redux';
import { changeInStatus, changeOutTime, reset } from '../actions/gatepasses';
import jsPDF from 'jspdf';
import indi from '../../public/images/indi';

export class GatePassListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      checkIn: props.isOut,
      indianOil: indi()
    }
  }

  onChange = (checked) => {
    //this.setState(() => ({ checkIn: checked })); 
    const { id } = this.props;
    this.props.changeInStatus(id);
    this.props.changeOutTime(id);
  }

  reset = (e) => {
    e.preventDefault();
    const { id } = this.props;
    //alert('hi');
    this.props.reset(id);
    this.props.changeInStatus(id);
  }

  download = (e) => {
    e.preventDefault();

    var doc = new jsPDF('p', 'pt');
    doc.setFontSize(10);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.addImage(this.state.indianOil, 'Base64', 20,30, 70, 50);
    doc.setFontSize(15);
    doc.text('Indian Oil Corporation Ltd', 150, 50);
    doc.setFontSize(10);
    doc.text('Marketing Division, PBSO, Chandigarh', 150, 65);
    doc.addImage(this.props.image, 'Base64', 20, 110, 100, 80);
    doc.setTextColor('#C0C0C0');
    //doc.setFillColor(192,192,192, 0);
    doc.text('Visitor\'s signature', 25, 210);
    doc.text('Employee\'s signature', 25, 235);
    doc.text(`ID no                 ${this.props.createdAt}`, 150,115);
    doc.text(`Pass no             ${this.props.PassNo}`, 150,130);
    doc.text(`Name                ${this.props.Name}`, 150, 145);
    doc.text(`Date                  ${moment(this.props.createdAt).format("L")}`, 150, 160);
    doc.text(`To Meet             ${this.props.ToMeet}`, 150, 175);
    doc.text(`Purpose             ${this.props.Purpose}`, 150, 190);
    doc.text(`Time                  ${moment(this.props.createdAtTime).format('hh:mm A')}`, 150, 205);
    doc.text(`Address             ${this.props.Address}`, 150, 220);
    doc.text(`Mobile no           ${this.props.MobileNO}`, 150, 235);
    doc.setTextColor('#696969');
    doc.text(`Meet the instructed person only. Please cooperate with security gurd.`, 20, 260);
    doc.text(`Return the gate pass before you leave`, 70, 275);

    //doc.text(`Name: ${this.props.Name}      ${this.props.createdAt}`, 30, 30 );
    //doc.addImage(this.props.image, 'Base64', 30, 40, 250, 160);
    //doc.text(`In Date: ${moment(this.props.createdAt).format("L")}`,30,230);
    //doc.text(`In Time: ${moment(this.props.createdAtTime).format('hh:mm A')}`,30,260);
    //doc.text(`Purpose: ${this.props.Purpose}`,30,290);
    doc.save('gatepass.pdf');
  }
  render() {
    const { id, Name, createdAt, createdAtTime, image, Purpose, isOut, outTime } = this.props;
    return (
      <div> 
      <Divider/>
        <Card
          size="small"
          title={Name}
          style={{ width: max }}
        >
          <img src={image} alt="" width={250}/>
          <p>{moment(createdAt).format("L")}</p>
          <p>{moment(createdAtTime).format('hh:mm A')}</p>
          <p>{Purpose}</p>
          <Switch disabled={!!outTime} checked={isOut} onChange={this.onChange}/>
          {isOut ? <p>IN</p> : <p>OUT</p>}
          {outTime && <p>{moment(outTime).format('hh:mm A')}</p>}
          <div className="grbt"><Button onClick={this.download}>Download Gatepass</Button>{outTime && <Button type="danger" onClick={this.reset}>Reset</Button>}</div>
          
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInStatus: (id) => dispatch(changeInStatus(id)),
  changeOutTime: (id) => dispatch(changeOutTime(id)),
  reset: (id) => dispatch(reset(id))
});

export default connect(undefined, mapDispatchToProps)(GatePassListItem);
// <Link to={`/edit/${id}`}>
//       <h3>{Name} - {Purpose}</h3>
//     </Link>
//     <img src={image} alt=""/>
//     <p>{ moment(createdAt).format("L")} - {moment(createdAtTime).format('hh:mm')}</p>
// const GatePassListItem = ({ id, Name, createdAt, createdAtTime, image, Purpose, isOut }) => (
//   <div> 
//     <Card
//       size="small"
//       title={Name}
//       style={{ width: 300 }}
//     >
//       <img src={image} alt="" width={250}/>
//       <p>{moment(createdAt).format("L")}</p>
//       <p>{moment(createdAtTime).format('hh:mm A')}</p>
//       <p>{Purpose}</p>
//       {isOut && <Switch defaultChecked />}
//     </Card>
//     <Divider/>
//   </div>
// );

// export default GatePassListItem;