'use strict';

import angular from 'angular';
import SearchComponent from './search.component';

const SearchModule = angular.module('search', [

]).component('search', SearchComponent);

export default SearchModule;
