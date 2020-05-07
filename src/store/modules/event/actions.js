import EventService from '@/services/EventService.js'

export default {
    createEvent({ commit, dispatch }, event) {
        return EventService.postEvent(event).then(() => {
            commit('ADD_EVENT', event)
            const notification = {
                type: 'success',
                message: 'Your event has been created!'
            }
            dispatch('notification/add', notification, { root: true })
        })
        .catch(error => {
            const notification = {
                type: 'error',
                message: 'There was a problem creating your event: ' + error.message
            }
            dispatch('notification/add', notification, { root: true })
            throw error
        })
    },
    fetchEvents({ commit, dispatch }, { perPage, page }) {
        EventService.getEvents(perPage, page)
            .then(response => {
                commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
                        commit('SET_EVENTS', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching events: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
            })
    },
    fetchEvent({ commit, getters, dispatch }, id) {
        var event = getters.getEventById(id)

        if (event) {
            commit('SET_EVENT', event)
        } else {
            EventService.getEvent(id)
                .then(response => {
                    commit('SET_EVENT', response.data)
                })
                .catch(error => {
                    const notification = {
                        type: 'error',
                        message: 'There was a problem fetching event: ' + error.message
                    }
                    dispatch('notification/add', notification, { root: true })
                })
        }
    }
}