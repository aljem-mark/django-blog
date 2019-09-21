let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.sass('./blog/static/css/app.scss', './blog/static/dist/')
    .tailwind('./tailwind.config.js');
