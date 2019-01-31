import React from 'react';
import { Link } from 'react-router-dom';
import moment, { max } from 'moment';
import { Card, Divider, Button } from 'antd';
import { Switch } from 'antd';
import { connect } from 'react-redux';
import { changeInStatus } from '../actions/gatepasses';
import jsPDF from 'jspdf';

export class GatePassListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      checkIn: props.isOut
    }
  }

  onChange = (checked) => {
    //this.setState(() => ({ checkIn: checked })); 
    const { id } = this.props;
    this.props.changeInStatus(id);
  }

  download = (e) => {
    e.preventDefault();

    var doc = new jsPDF('p', 'pt');
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text(`Name: ${this.props.Name}`, 30, 30);
    doc.addImage(this.props.image, 'Base64', 30, 40, 250, 160);
    doc.text(`In Date: ${moment(this.props.createdAt).format("L")}`,30,230);
    doc.text(`In Time: ${moment(this.props.createdAtTime).format('hh:mm A')}`,30,260);
    doc.text(`Purpose: ${this.props.Purpose}`,30,290);
    // doc.text(`PDF filename: ${this.state.judul}`, 0.5, 0.8)
    // doc.text(`Recipient: ${this.state.nama}`, 0.5, 1.1)
    // doc.text(`Message: ${this.state.pesan}`, 0.5, 1.4)
    // doc.addImage(this.state.gambar, 'JPEG', 0.5, 2, 2.5, 2.5)
    // format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)

    doc.save('gatepass.pdf');
  }
  render() {
    const { id, Name, createdAt, createdAtTime, image, Purpose, isOut } = this.props;
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
          <Switch checked={isOut} onChange={this.onChange}/>
          {isOut ? <p>IN</p> : <p>OUT</p>}
          <Button onClick={this.download}>Download Gatepass</Button>
        </Card>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInStatus: (id) => dispatch(changeInStatus(id))
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