import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const Calendar = ({ events, onSelectSlot, saveEvent, tomerDate }) => {

	return (
		   <div className="">
			    <BigCalendar
			      events={events}
			      timeslots={2}
			      onSelectSlot={onSelectSlot}
			      selectable={true}
			    />
			    <h2 onClick={saveEvent}>Save</h2>
			    <h2 onClick={saveEvent}>{moment(tomerDate).format('DD/MM/YYYY - HH:mm') + ' Tomti'}</h2>
			    <DatePicker
                />
		  </div>
);
}
export default Calendar;
