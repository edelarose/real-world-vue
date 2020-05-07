import a from './actions';
import g from './getters';
import m from './mutations';

export const namespaced = true

export const state = {
    events: [],
    eventsTotal: 0,
    event: {}
}

export const actions = a;
export const getters = g;
export const mutations = m;