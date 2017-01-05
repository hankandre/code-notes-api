'use strict';

import angular from 'angular';
import GitInitModule from './git-init/git-init';
import GitService from './git.service';

const GitModule = angular.module('git', [
    GitInitModule.name

]).service('gitService', GitService);

export default GitModule;