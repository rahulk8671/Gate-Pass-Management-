import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setInOut } from '../actions/filters';
import { DatePicker, Input, Select } from 'antd';
const { RangePicker } = DatePicker;
const Option = Select.Option;

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null,
      startOf: props.filters.startDate,
      endOf: props.filters.endDate,
      value: props.filters.inOut
    }
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  onChange = (value) => {
    this.props.setStartDate(value[0]);
    this.props.setEndDate(value[1]);
    this.setState(() => ({ startOf: value[0], endOf: value[1] }));
  }
  handleChange = (value) => {
    this.props.setInOut(value);
    this.setState(() => ({ value: value }))
  }
  render() {

    return (
      <div className="filter">

        <div className="ser"><Input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder='Search...'
        /></div>
        <RangePicker
          
          defaultValue={[this.state.startOf, this.state.endOf]}
          onChange={this.onChange}
        />
        <Select value={this.state.value} style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="IN">IN</Option>
          <Option value="OUT">OUT</Option>
          <Option value="ALL">ALL</Option>
        </Select>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setInOut: (inOut) => dispatch(setInOut(inOut))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);



// {<select
//   value={this.props.filters.sortBy}
//   onChange={this.onSortChange}
// >
//   <option value="date">Date</option>
//   <option value="amount">Amount</option>
// </select>}