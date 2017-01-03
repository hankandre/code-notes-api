'use strict';

import controller  from './navbar.controller'; 
import template from './navbar.html';
import './navbar.scss';

const navbarComponent = {
    template,
    controller,
    controllerAs: 'navbarCtrl'
};

export default navbarComponent;