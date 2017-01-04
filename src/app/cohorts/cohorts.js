'use strict'

import angular from 'angular';
import AddCohortsModule from './cohorts-add/cohorts-add';
import CohortsModel from './cohorts.model';

const CohortsModule = angular.module('cohorts', [
    AddCohortsModule.name
]).service('CohortsModel', CohortsModel);


export default CohortsModule;