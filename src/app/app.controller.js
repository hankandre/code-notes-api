'use strict';

class AppController {
    constructor(gitService) {
        'ngInject';
        this.gitService = gitService;
    }

    $onInit () {
        this.gitService.getList()
            .then(response => this.commands = response.data.filter(function(note) {
                if(note.command){
                    return note;
                }
            }));
    }

    select(note) {
        this.gitService.getCommand(note.id)
            .then(response => console.log(response.data));
    }

    remove(note){
        this.gitService.deleteNote(note)
            .then(response => console.log(response.data));
    }
}

export default AppController;