import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import Calendar from '../display/Calendar';
import * as calendarActions from '../../../redux/actions/calendarActions'
import moment from 'moment';

class CalendarComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    componentWillMount(){
        // this.props.getSessionByTrainee()
    }
    componentDidUpdate(prevProps, prevState) {
      // if(this.props.traineeId != prevProps.traineeId){
      //    this.props.getSessionByTrainee()
      // }
    }

    render() {
        return <Calendar{...this.props}/>
    }
}

function mapStateToProps(state) {
    let events = state.calendar.events
    if(events.length > 0){
        events = events.map(event =>{ return {
            start:new Date(event.start),
            end:new Date(event.end),
            title:event.title,
            allDay:event.allDay
        }})
    }
    let tomerDate = Date()
    return {
        events,
        tomerDate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputFieldChange(field, value){
            dispatch( calendarActions.updateInputField(field, value) )
        },
        onSelectSlot(slot){
            dispatch( calendarActions.updateInputField('start', moment(slot.start)) )
            dispatch( calendarActions.updateInputField('end', moment(slot.end)) )
            dispatch( calendarActions.updateInputField('title', 'Some Random Title') )
            dispatch( calendarActions.addEvent() )
        },
        onSelecting(range){
            console.log(range)
        },
        saveEvent(){
            dispatch( calendarActions.addEvent() )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(CalendarComponent)

