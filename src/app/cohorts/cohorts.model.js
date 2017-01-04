'use strict';

class CohortsModel {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    getCohorts() {
        return this.$http.get('http://localhost:3000/cohorts');
    }

    addCohort(cohort) {
        return this.$http.post('http://localhost:3000/cohorts', {
            name: cohort
        });
    }
}

export default CohortsModel;