class NavbarController {
    constructor(CohortsModel) {
        'ngInject';
        CohortsModel.getCohorts()
            .then((response) => this.cohorts = response.data )
    }
}

export default NavbarController;