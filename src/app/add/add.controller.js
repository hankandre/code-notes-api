'use strict';

class AddController {
    constructor(gitService) {
        'ngInject';
        this.gitService = gitService;
    }

    addNote(note) {
        note.disabled = false;
        return this.gitService.addNote(note)
            .then(response => console.log(response.data));
    }
}

export default AddController;