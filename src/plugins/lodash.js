import Vue from 'vue';

import keyBy from 'lodash-es/keyBy';
import replace from 'lodash-es/replace';
import findIndex from 'lodash-es/findIndex';
import forEach from 'lodash-es/forEach';
import map from 'lodash-es/map';
import groupBy from 'lodash-es/groupBy';
import orderBy from 'lodash-es/orderBy';

Object.defineProperty(Vue.prototype, '$lodash', {
  value: {
    keyBy,
    replace,
    findIndex,
    forEach,
    map,
    groupBy,
    orderBy,
  },
});
