export default ($mdThemingProvider) =>  {
    'ngInject';
    $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
};
