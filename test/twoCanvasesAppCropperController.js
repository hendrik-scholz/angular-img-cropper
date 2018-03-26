angular.module('twoCanvasesApp').controller("ImageCropperCtrl",[ '$scope', function($scope) 
{
        $scope.cropperImageOne = {};
        $scope.cropperImageOne.sourceImage = null;
        $scope.cropperImageOne.croppedImage = null;
        $scope.boundsImageOne = {};
        $scope.boundsImageOne.left = 0;
        $scope.boundsImageOne.right = 0;
        $scope.boundsImageOne.top = 0;
        $scope.boundsImageOne.bottom = 0;
        $scope.fileSizeInBytesImageOne = 0;        
        $scope.dimensionsImageOne = {};
        $scope.dimensionsImageOne.width = undefined;
        $scope.dimensionsImageOne.height = undefined;        
        $scope.cropperImageTwo = {};
        $scope.cropperImageTwo.sourceImage = null;
        $scope.cropperImageTwo.croppedImage = null;
        $scope.boundsImageTwo = {};
        $scope.boundsImageTwo.left = 0;
        $scope.boundsImageTwo.right = 0;
        $scope.boundsImageTwo.top = 0;
        $scope.boundsImageTwo.bottom = 0;
        $scope.fileSizeInBytesImageTwo = 0;
        $scope.dimensionsImageTwo = {};
        $scope.dimensionsImageTwo.width = undefined;
        $scope.dimensionsImageTwo.height = undefined;
}]);