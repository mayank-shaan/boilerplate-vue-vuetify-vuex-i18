/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

export default {
  // User Auth
  createSession({ commit, dispatch }, userData) {
    if (userData && userData.authToken) {
      try {
        if (localStorage) {
          localStorage.setItem('OYEUSER', JSON.stringify(userData));
        }
        this.$axios.setHeader('X-Authorization', userData.authToken);
        commit('CREATE_SESSION', userData);
        dispatch('getUserInfoAndPrefrence');
        dispatch('getGlobalConfig');
      } catch (exception) {
        dispatch('updateSnackbar', {
          color: 'info',
          show: true,
          text: 'Please enable storage access permission for better performance',
        });
        console.log(exception);
      }
    } else {
      commit('UPDATE_SNACKBAR', {
        color: 'error',
        show: true,
        text: 'Something went wrong',
      });
    }
    dispatch('getTags');
  },

  checkSession({ commit, dispatch }) {
    try {
      if (localStorage && localStorage.getItem('OYEUSER')) {
        dispatch('createSession', JSON.parse(localStorage.getItem('OYEUSER')));
      } else {
        commit('DELETE_SESSION');
      }
    } catch (exception) {
      dispatch('updateSnackbar', {
        color: 'info',
        show: true,
        text: 'Please enable storage access permission for better performance',
      });
      console.log(exception);
    }
  },

  updateSessionKey({ commit }, [key, keyData]) {
    commit('UPDATE_SESSION_KEY', [key, keyData]);
  },

  deleteSession({ commit }) {
    this.$axios.setHeader('X-Authorization', undefined);
    if (localStorage) {
      localStorage.removeItem('OYEUSER');
    }
    commit('DELETE_SESSION');
  },

  logoutAction({ commit, dispatch }) {
    dispatch('deleteSession');
    // this.$router.push('/');
    commit('UPDATE_SNACKBAR', {
      color: 'info',
      show: true,
      text: 'Logged out successfully',
    });
  },

  updateUser({ commit }, fromFlag) {
    if (fromFlag === 'session' && localStorage && localStorage.getItem('OYEUSER')) {
      commit('CREATE_SESSION', JSON.parse(localStorage.getItem('OYEUSER')));
    }
    if (fromFlag === 'api') {
      this.$axios.$get(`${process.env.apiUrl}users/me`).then((res) => {
        if (res.result && res.result.info) {
          const data = res.result.info;
          commit('CREATE_SESSION', data);
        }
      }, (resp) => {
        console.log(resp);
      });
    }
  },

  getUserPrefrence({ commit }) {
    this.$axios.$get(`${process.env.apiUrl}users/me`).then((res) => {
      if (res.result && res.result.preference) {
        commit('UPDATE_USER_PREFRENCE', res.result.preference);
      }
    }, (resp) => {
      console.log(resp);
    });
  },

  updateUserPrefrence({ commit }, data) {
    commit('UPDATE_USER_PREFRENCE', data);
  },

  // View and layout
  changeTheme({ commit }, theme) {
    commit('CHANGE_THEME', theme);
  },

  // modals, dialouges, snackbar
  modalToggle({ commit }, modal) {
    commit('MODAL_TOGGLE', modal);
  },
  modalShow({ commit }, modal) {
    commit('MODAL_SHOW', modal);
  },
  modalHide({ commit }, modal) {
    commit('MODAL_HIDE', modal);
  },
  updateSnackbar({ commit }, snackbarData) {
    commit('UPDATE_SNACKBAR', snackbarData);
  },

  // misc
  superValueUpdater({ commit }, [stateVar, key, value]) {
    commit('SUPER_VALUE_UPDATER', [stateVar, key, value]);
  },
};
