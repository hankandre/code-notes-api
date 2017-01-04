'use strict';

import 'normalize.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import AppComponent from './app.component';
import navbarModule from './navbar/navbar';

const appModule = angular.module('app', [
    uirouter,
    navbarModule.name
]).component('app', AppComponent);

