'use strict';

class GitService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getList(){
        return this.$http.get('http://localhost:3000/git');
    }

    getCommand(id) {
        return this.$http.get('http://localhost:3000/git/' + id);
    }

    addNote(note){
        note.disabled = false;
        return this.$http.post('http://localhost:3000/git', note);
    }

    deleteNote(note){
        note.disabled = true;
        return this.$http.put('http://localhost:3000/git/' + note.id, note);
    }
}

export default GitService;