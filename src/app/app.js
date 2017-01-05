'use strict';

// Third-party JavaScript libraries
import 'prismjs';

// Stylesheets
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';

import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import ngMaterial from 'angular-material';

import uiRouter from 'angular-ui-router';


import AppRoutes from './app.routes';
import AppTheme from './app.theme';

import AppComponent from './app.component';
import NavbarModule from './navbar/navbar';
import FooterModule from './footer/footer';
import CommonModule from './common/common';
import SearchModule from './search/search';
import InfoModule from './info/info';
import AddModule from './add/add';

const appModule = angular.module('app', [
    //  Third-party modules
    uiRouter,
    ngMaterial,
    
    // These modules contain logic all specific to themselves
    NavbarModule.name,
    FooterModule.name,
    CommonModule.name,
    SearchModule.name,
    InfoModule.name,
    AddModule.name
]).component('app', AppComponent)
  .config(AppRoutes)
  .config(AppTheme);

