'use strict';

import angular from 'angular';
import GitService from './services/git.service';

const CommonModule = angular.module('common', [

]).service('gitService', GitService);

export default CommonModule;