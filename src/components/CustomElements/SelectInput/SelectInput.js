import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const SelectInput = ({ name, label, onSelect, defaultOption, value, options, placeholder }) => {

    value = value || defaultOption

    function filterOption(option, filterString) {
        return option.label ? option.label.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 : false
    }

    return (
        <div>
            { label && <label htmlFor={name}>{label}</label> }
            <Select
                name={name}
                value={value}
                searchable={false}
                options={options}
                onChange={ option => onSelect(name, option.value) }
                filterOption={filterOption}
                noResultsText={'No results found'}
                placeholder={placeholder}
                clearable={false}
            />
        </div>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    placeholder: PropTypes.string
}

SelectInput.defaultProps = {
    options: [],
    defaultOption: ''
}

export default SelectInput
