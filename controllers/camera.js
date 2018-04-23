'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:KYCCtrl
 * @description
 * # KYCCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('CamCtrl', function ($scope) {

        $scope.progress = 3;
        // Grab elements, create settings, etc.
        var video = document.getElementById('video');

        // Get access to the camera!
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(function (stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            });
        }

        /* Legacy code below: getUserMedia 
        else if(navigator.getUserMedia) { // Standard
            navigator.getUserMedia({ video: true }, function(stream) {
                video.src = stream;
                video.play();
            }, errBack);
        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
            navigator.webkitGetUserMedia({ video: true }, function(stream){
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errBack);
        } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
            navigator.mozGetUserMedia({ video: true }, function(stream){
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
        */

        $scope.snapshot = function () {
            // Elements for taking the snapshot
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var video = document.getElementById('video');
            context.drawImage(video, 0, 0, 320, 240);
        }

        function savePhoto() {
            var canvas = document.getElementById('canvasTag');
            var imgData = canvas.msToBlob("image/jpeg");
            navigator.msSaveBlob(imgData, "myPhoto.jpg");
        }
    });
