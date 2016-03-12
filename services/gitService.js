angular.module("codeLibrary").service("gitService", function() {

    var git = {
        name: 'git',
        state: 'git'
    }

    this.getTopics = function() {
        return topics;
    }

});