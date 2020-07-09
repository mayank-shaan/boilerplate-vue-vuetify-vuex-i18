import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:8000/api/',
});
