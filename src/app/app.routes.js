import addTemplate from './add/add.html';

export default function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    console.log(angular.module('add').component('add'));
    const states = [
        {
            name: 'home',
            url: '/home',
            template: `<div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--4-col mdl-cell--1-offset">
                                <search>

                                </search>
                            </div>
                            <div class="mdl-cell mdl-cell--6-col">
                                <info></info>
                            </div>
                        </div>`
        },
        {
            name: 'add',
            url: '/add',
            template: '<add class="mdl-grid"></add>',
            resolve: {
                list: function list(gitService){
                    return gitService.getList()
                        .then(response => console.log(response.data));
                }
            }
        }

    ]

    states.forEach(function(state) { $stateProvider.state(state); });

    $urlRouterProvider.otherwise('/home');
};
