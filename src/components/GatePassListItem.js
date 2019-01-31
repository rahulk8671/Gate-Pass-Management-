import React from 'react';
import { Link } from 'react-router-dom';
import moment, { max } from 'moment';
import { Card, Divider } from 'antd';
import { Switch } from 'antd';
import { connect } from 'react-redux';
import { changeInStatus } from '../actions/gatepasses';

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