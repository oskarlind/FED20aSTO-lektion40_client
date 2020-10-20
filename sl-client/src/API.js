const baseUrl = "https://evening-citadel-04519.herokuapp.com"

export const fetchStations = (search_string) => {
    return fetch(baseUrl+"/stations/"+search_string)
    .then((res) => res.json())
}

export const fetchDepartures = (siteId) => {
    return fetch(baseUrl+"/departures/"+siteId)
    .then((res) => res.json())
}