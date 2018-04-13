import {Button} from './Button';

$(document).ready(()=>{
    const button = new Button();
    $('body').append(button.el());
});