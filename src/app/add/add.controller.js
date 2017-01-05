'use strict';

class AddController {
    constructor(gitService) {
        'ngInject';
        this.gitService = gitService;
        // 

        this.noteSchema = {
            disabled: false,
            command: '',
            data: {
                description: '',
                examples: []
            }
        }
        // The schema for an example object.
        this.exampleSchema = {
            context: '',
            input: '',
            output: ''
        }

        this.note = angular.copy(this.noteSchema);
        this.example = angular.copy(this.exampleSchema);
    }

    // addNote(note, example) {
    //     note.data.examples.push(example);
    //     return this.gitService.addNote(note)
    //         .then(response => console.log(response.data));
    // }

    addExample(){
        this.note.data.examples.push(this.exampleSchema);
        console.log(this.note.data.examples);
    }
}

export default AddController;