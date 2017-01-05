'use strict';

class InfoController {
    constructor(gitService) {
        'ngInject';

        this.gitService = gitService;
    }

    getCommand(id){
        return this.gitService.getCommand(id)
            .then(response => console.log(response.data));
    }
}

export default InfoController;