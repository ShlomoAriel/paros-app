import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ field, label, onUpdate, onSelect, placeholder, value, onKeyDownEnter, type, className }) => {

    function onKeyPress(event) {
        if(event.key == 'Enter'){
            onSelect(field, event.target.value )
            onKeyDownEnter();
        }
    }

    return (
        <div>
            { label && <label htmlFor={field} className="label">{label}</label> }
            <div className={className}>
                <input
                    className={className}
                    type={type}
                    name={field}
                    placeholder={placeholder}
                    value={value}
                    // onBlur={ event => { event.target.value != '' ? onSelect(field, event.target.value ) : null }}
                    onChange={ event => onUpdate(field, event.target.value) }
                    onKeyPress={onKeyPress}
                />
            </div>
        </div>
    );
    
}

TextInput.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    search: PropTypes.bool,
    onKeyPress: PropTypes.func,
}

TextInput.defaultProps = {
    type: "text", 
    onSelect: () => { return null },
    onKeyPress: () => {},
}

export default TextInput
