class NavbarController {
    constructor(gitService) {
        'ngInject';
        gitService.getList()
            .then(response => console.log(JSON.stringify(response.data, null, 4)));
    }
}

export default NavbarController;