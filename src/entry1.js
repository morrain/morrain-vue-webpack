import Vue from "vue";

import _ from 'lodash';

new Vue({
    el: '#app',
    data: {
        message: _.join(['Hello', 'WebPack!'], '~')
    }
})
