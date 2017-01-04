'use strict';

import angular from 'angular';
import GitInitComponent from './git-init.component';

const GitInitModule = angular.module('git-init', [

]).component('gitInit', GitInitComponent);

export default GitInitModule;