export default {
    ADD_EVENT(state, event) {
        state.events.push(event)
    },
    SET_EVENTS(state, events) {
        state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
        state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
        state.event = event
    }
}