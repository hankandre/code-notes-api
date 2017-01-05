'use strict';


import angular from 'angular';
import navbarComponent from './navbar.component';

const NavbarModule = angular.module('header', [

]).component('header', navbarComponent);

export default NavbarModule;