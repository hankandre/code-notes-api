'use strict';


import angular from 'angular';
import navbarComponent from './navbar.component';

const NavbarModule = angular.module('navbar', [

]).component('navbar', navbarComponent);

export default NavbarModule;