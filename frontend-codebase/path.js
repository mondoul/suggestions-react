var paths;

module.exports = paths = {
    js: {
        dataVendorBundle: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
            'bower_components/toastr/toastr.js'
        ],
        entries: 'main.js'
    },
    less: 'stylesheets/*.less',
    dist: 'dist/',
    deployFiles: ['dist/css/**/*.*',
                 'dist/fonts/*.*',
                 'dist/js/*.*',
                 'dist/favicon.ico'],
    deploy: '../backend-codebase/public/'
};