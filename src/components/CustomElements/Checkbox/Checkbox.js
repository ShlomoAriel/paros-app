import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({name, onChange, value, className}) => {
    return (
            
                <input
                    type="checkbox"
                    name={name}
                    className={"form-control " + className}
                    value={value}
                    id={name + '_' + value}
                    checked={value}
                    onChange={onChange}/>
            
    );
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    error: PropTypes.string
};

export default Checkbox;
