import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'
const DateRangePicker = ({ field, label, onUpdate, endName, startName, placeholder, fromValue, toValue }) => {

    function buildDateRange(range, date){
        if(range == startName && (date <= toValue || !toValue)){
            onUpdate(startName,date)
        }
        else if(range == endName && (date >= fromValue || !fromValue)){
            onUpdate(endName, date)
        }
    }

    return(
        <div>
            { label && <label htmlFor={field} className="label">{label}</label> }
            <div className="date-range-picker">
                <div className="date-range-picker__label">From</div>
                <DatePicker
                    className="date-range-picker__picker"
                    dateFormat="DD-MMM-YYYY"
                    name={field}
                    selected={fromValue}
                    onChange={ date => buildDateRange(startName, date) }/>

                <div className="date-range-picker__label">To</div>
                <DatePicker
                    className="date-range-picker__picker"
                    dateFormat="DD-MMM-YYYY"
                    name={'To'}
                    selected={toValue}
                    onChange={ date => buildDateRange(endName, date) }/>
                    
            </div>
        </div>
    )
}

DateRangePicker.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    placeholder: PropTypes.string
}

export default DateRangePicker
