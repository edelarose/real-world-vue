import a from './actions';
import m from './mutations';

export const namespaced = true

export const state = {
    notifications: []
}

export const actions = a;
export const mutations = m;
