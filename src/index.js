import './style.css';

import Vue from "vue";

//导入图片
import Icon from './assets/logo.png';

import printMe from './print';

new Vue({
    el: '#app',
    data: {
        message: 'hello webpack'
    }
})