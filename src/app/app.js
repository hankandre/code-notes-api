'use strict';

// Third-party JavaScript libraries
import 'prismjs';

// Stylesheets
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppRoutes from './app.routes';
import AppComponent from './app.component';
import NavbarModule from './navbar/navbar';
import FooterModule from './footer/footer';
import GitModule from './git/git';
import SearchModule from './search/search';
import InfoModule from './info/info';
import AddModule from './add/add';

const appModule = angular.module('app', [
    //  Third-party modules
    uiRouter,

    // These modules contain logic all specific to themselves
    NavbarModule.name,
    FooterModule.name,
    GitModule.name,
    SearchModule.name,
    InfoModule.name,
    AddModule.name
]).component('app', AppComponent)
  .config(AppRoutes);

