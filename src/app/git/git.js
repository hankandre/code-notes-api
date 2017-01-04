'use strict';

import angular from 'angular';
import GitInitModule from './git-init/git-init';

const GitModule = angular.module('git', [
    GitInitModule.name
]);

export default GitModule;