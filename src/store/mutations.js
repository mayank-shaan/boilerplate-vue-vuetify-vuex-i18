/* eslint-disable no-param-reassign */
export default {
  // User and Auth
  CREATE_SESSION(state, userData) {
    state.user = userData;
  },
  UPDATE_USER_PREFRENCE(state, data) {
    state.userPrefrences = data;
  },
  UPDATE_SESSION_KEY(state, [key, keyData]) {
    state.user[key] = keyData;
  },
  DELETE_SESSION(state) {
    state.user = null;
  },

  // View and layout
  CHANGE_THEME(state, theme) {
    state.theme = theme;
  },

  // modals, dialouges, snackbar
  MODAL_TOGGLE(state, modal) {
    state.modals[modal] = !state.modals[modal];
  },
  MODAL_SHOW(state, modal) {
    state.modals[modal] = true;
  },
  MODAL_HIDE(state, modal) {
    state.modals[modal] = false;
  },
  MODAL_UPDATE_VALUE(state, [modal, value]) {
    state.modals[modal] = value;
  },
  UPDATE_SNACKBAR(state, snackbarData) {
    state.snackbar = snackbarData;
  },

  // misc
  SUPER_VALUE_UPDATER(state, [stateVar, key, value]) {
    if (key) {
      state[stateVar][key] = value;
    } else {
      state[stateVar] = value;
    }
  },
};
/* eslint-enable no-param-reassign */
