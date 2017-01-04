'use strict';


import angular from 'angular';
import HeaderComponent from './header.component';

const NavbarModule = angular.module('header', [

]).component('header', HeaderComponent);

export default HeaderModule;