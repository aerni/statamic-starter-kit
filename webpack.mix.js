const mix = require('laravel-mix');

mix.postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('postcss-focus-visible'),
    require('autoprefixer'),
])

js('resources/js/app.js', 'public/js')

mix.browserSync({
    proxy: process.env.APP_URL,
    files: [
        'resources/views/**/*.(html|php)',
        'public/**/*.(css|js)',
        'content/**/*.(md|yaml)',
    ],
    notify: false,
})

if (mix.inProduction()) {
   mix.version();
}
