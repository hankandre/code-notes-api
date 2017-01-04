'use strict';

// Third-party JavaScript libraries
import 'prismjs';

// Stylesheets
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import AppComponent from './app.component';
import NavbarModule from './navbar/navbar';
import FooterModule from './footer/footer';
import GitModule from './git/git';
import SearchModule from './search/search';
import InfoModule from './info/info';

const appModule = angular.module('app', [
    //  Third-party modules
    uirouter,

    // These modules contain logic all specific to themselves
    NavbarModule.name,
    FooterModule.name,
    GitModule.name,
    SearchModule.name,
    InfoModule.name
]).component('app', AppComponent);

