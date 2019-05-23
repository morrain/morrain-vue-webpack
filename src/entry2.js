import { join } from "lodash";

console.log(join(['entry2:', 'second entry']));

import a  from './a';

import('jquery').then(component => {
    console.log(component);
    let c = document.createElement('div');
    c.innerHTML = 'Test Query Async Import!';
    document.body.appendChild(c);
})