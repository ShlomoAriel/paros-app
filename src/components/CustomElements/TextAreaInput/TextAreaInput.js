import React from 'react'
import PropTypes from 'prop-types'

const TextAreaInput = ({ field, label, onUpdate, onSelect, placeholder, section, value, onKeyDownEnter, type, fieldClass }) => {

    // function onKeyPress(event) {
    //     if(event.key == 'Enter'){
    //         onSelect(field, event.target.value )
    //         onKeyDownEnter();
    //     }
    // }

    return (
        <div>
            { label && <label htmlFor={field} className="label">{label}</label> }
            <div>
                <textarea
                   className={fieldClass}
                    type={type}
                    name={field}
                    placeholder={placeholder}
                    value={value}
                    // onBlur={ event => { event.target.value != '' ? onSelect(field, event.target.value ) : null }}
                    onChange={ event => onUpdate(field, event.target.value, section) }
                    // onKeyPress={onKeyPress}
                />
            </div>
        </div>
    );
    
}

TextAreaInput.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    search: PropTypes.bool,
    onKeyPress: PropTypes.func,
}

TextAreaInput.defaultProps = {
    type: "text", 
    onSelect: () => { return null },
    onKeyPress: () => {},
}

export default TextAreaInput
