/*global define*/
/*global test*/
/*global equal*/
define(['models/notebook'], function (Model) {
    'use strict';

    module('notebook model');

    test('Can be created with default values', function() {
        var notebook = new Model();
        equal(notebook.get('id'), 0, 'Default id for notebooks is 0');
    });

    test('Update attributes', function(){
        var notebook = new Model();
        notebook.set('name', 'new name');
        equal(notebook.get('name'), 'new name');
        equal(notebook.get('count'), 0, 'Default notebook id for notebooks is 0');
    });
});
