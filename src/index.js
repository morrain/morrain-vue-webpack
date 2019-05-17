import _ from 'lodash';
import './style.css';

//导入图片
import Icon from './logo.png';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //将图片添加到我们现有的元素
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());