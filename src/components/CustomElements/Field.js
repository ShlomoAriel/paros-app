import PropTypes from 'prop-types'
import React from 'react'
// import AutoCompleteInput from './field/AutoCompleteInput'
// import SelectInput from './field/SelectInput'
import TextInput from './TextInput/TextInput'
// import Checkbox from './field/Checkbox'
import DateRangePicker from './DateRangePicker/DateRangePicker'
import TextAreaInput from 'components/CustomElements/TextAreaInput/TextAreaInput'

// import DateTime from './field/DateTime'
// import NumberRange from './field/NumberRange'
// import Slider from './field/Slider';
// import Dropzone from './field/Dropzone';
// import ButtonGroup from './field/ButtonGroup';
// import DateField from './field/DateField';

const Field = ({...props, value, type, fromValue, toValue, onEnter}) => {
    switch (type) {
        // case "auto-complete":
        //     return <AutoCompleteInput {...props} />;
        // case 'select':
        //     return <SelectInput {...props} />;
        // case 'number':
        // case 'email':
        // case 'text':
        //     return <TextInput {...props} onKeyDownEnter={onEnter}/>;
        // case 'dateTime':
        //     return <DateTime {...props} />;
        case 'date-range':
            return <DateRangePicker {...props} />;
        case 'text-area':
            return <TextAreaInput {...props} />;
        // case 'number-range':
        //     return <NumberRange{...props} />;
        // case 'checkbox':
        //     return <Checkbox {...props} />;
        // case 'slider':
        //     return <Slider {...props} min={fromValue} max={toValue}/>;
        // case 'dropzone':
        //     return <Dropzone {...props} files={value}/>;
        // case 'button-group':
        //     return <ButtonGroup {...props} />;
        // case 'date':
        //     return <DateField {...props} selected={value}/>;
        default:
            return <TextInput {...props} />;
    }
};

Field.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    onUpdate: PropTypes.func,
    defaultOption: PropTypes.any,
    value: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.object),
    clearable: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    autofocus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    maxlength: PropTypes.number,
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    minlength: PropTypes.number,
    name: PropTypes.string,
    pattern: PropTypes.string,
    readonly: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.number,
    src: PropTypes.string,
    step: PropTypes.number,
};

Field.defaultProps = {
    //
};


export default Field;