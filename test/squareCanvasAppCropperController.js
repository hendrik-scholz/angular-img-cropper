angular.module('squareCanvasApp').controller("ImageCropperCtrl",[ '$scope', function($scope) 
{
        $scope.cropper = {};
        $scope.cropper.sourceImage = null;
        $scope.cropper.croppedImage = null;
        $scope.bounds = {};
        $scope.bounds.left = 0;
        $scope.bounds.right = 0;
        $scope.bounds.top = 0;
        $scope.bounds.bottom = 0;
        $scope.fileSizeInBytes = 0;
        $scope.dimensions = {};
        $scope.dimensions.width = undefined;
        $scope.dimensions.height = undefined;
}]);