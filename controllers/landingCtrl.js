angular.module("codeLibrary").controller('landingCtrl', function($scope, landingService) {


    $scope.topics = landingService.getLanding();

    $(document).ready(function() {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });


});