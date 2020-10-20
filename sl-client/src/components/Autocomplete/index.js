import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Autocomplete = (props) => {
    if (props.suggestions.length > 0) {
        return <ul>
            {props.suggestions.map((suggestion) => (
                <li key={suggestion.SiteId}>
                    <Link onClick={props.select} id={suggestion.SiteId} name={suggestion.Name}>{suggestion.Name}</Link>
                </li>
            )
            )}
        </ul>
    } else {
        return <div></div>
    }
}

Autocomplete.propTypes = {
    suggestions: PropTypes.array,
    select: PropTypes.func
}

export default Autocomplete