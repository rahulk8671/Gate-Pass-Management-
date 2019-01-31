import moment from 'moment';

// Get visible expenses

export default (gatepasses, { text, startDate, endDate, sortBy, inOut }) => {
  return gatepasses.filter((gatepass) => {
    const createdAtMoment = moment(gatepass.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = gatepass.Name.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } 
  }).filter((gatepass) => {
    if(inOut === 'ALL') {
      return gatepass
    } else if(inOut === 'IN') {
      return gatepass.isOut === true
    } else {
      return gatepass.isOut === false
    }
  })
};
