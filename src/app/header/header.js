'use strict';


import angular from 'angular';
import navbarComponent from './header.component';

const NavbarModule = angular.module('header', [

]).component('header', navbarComponent);

export default NavbarModule;