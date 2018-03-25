import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({name, label, options, onChange, value, error, className}) => {
    options = options || [];
    value = value || '';
    
    let wrapperClass = 'form-group '+ className;
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="radioButtons">
                {options.map(option =>
                    <div key={option.value} className="field">
                        <input
                            type="radio"
                            name={name}
                            className="form-control"
                            value={option.value}
                            id={name + '_' + option.value}
                            checked={(value == option.value) ? true : false}
                            onChange={onChange}/>
                        <label htmlFor={name + '_' + option.value}>{option.text}</label>
                    </div>
                )}
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string
};

export default RadioInput;
