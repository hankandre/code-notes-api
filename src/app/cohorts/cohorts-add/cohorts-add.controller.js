'use strict';

class AddCohortsController {
    constructor(CohortsModel) {
        'ngInject';
        this.CohortsModel = CohortsModel
    }

    add(cohort) {
        return this.CohortsModel.addCohort(cohort)
            .then((response)=> console.log(response));
    }
}

export default AddCohortsController;