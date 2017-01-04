'use strict';

import 'normalize.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import AppComponent from './app.component';
import NavbarModule from './navbar/navbar';
import FooterModule from './footer/footer';
import CohortsModule from './cohorts/cohorts';

const appModule = angular.module('app', [
    uirouter,
    CohortsModule.name,
    NavbarModule.name,
    FooterModule.name
]).component('app', AppComponent);

