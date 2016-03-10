angular.module("codeLibrary").service("landingService", function() {

    var landing = {
        name: 'landing',
        state: 'landing'
    }

    this.getTopics = function() {
        return topics;
    }

});