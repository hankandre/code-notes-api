'use strict';

import 'normalize.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import AppComponent from './app.component';
import HeaderModule from './navbar/navbar';

const appModule = angular.module('app', [
    uirouter,
    HeaderModule.name
]).component('app', AppComponent);

