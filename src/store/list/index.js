export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async _test({ rootState }, payload) {
      return await rootState.axios.post(rootState.api.TEST, payload);
    }
  }
};
