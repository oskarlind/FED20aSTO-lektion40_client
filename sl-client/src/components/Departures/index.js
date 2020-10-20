import PropTypes from 'prop-types'
import React from 'react'
import './index.css'

const Departures = (props) => {
    if (props.departures) {
        return <div>
            <h1>Avgångar från {props.stationName}</h1>
            {props.departures.Metros.length > 0 &&
                <section>
                    <h2>Tunnelbana</h2>
                    <ul>
                        {props.departures.Metros
                            .map(metro => <li>{metro.LineNumber} - {metro.DisplayTime}</li>)}
                    </ul>
                </section>
            }
            {props.departures.Buses.length > 0 &&
                <section>
                    <h2>Bussar</h2>
                    <ul>
                        {props.departures.Buses
                            .map(bus => <li>{bus.LineNumber} - {bus.DisplayTime}</li>)}
                    </ul>
                </section>
            }
        </div>
    } else {
        return <div>Please search for a station</div>
    }
}

Departures.propTypes = {
    stationName: PropTypes.string,
    departures: PropTypes.array
}

export default Departures