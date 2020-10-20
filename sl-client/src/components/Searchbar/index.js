import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete'

const Searchbar = (props) => {
    return <section>
        <input name={props.name} type="text" value={props.value} onChange={props.handleChange} />
        <Autocomplete select={props.handleSelectStation} suggestions={props.suggestions} />
    </section>
}

Searchbar.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSelectStation: PropTypes.func,
    suggestions: PropTypes.array
}

export default Searchbar