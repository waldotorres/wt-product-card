const postcss = require('rollup-plugin-postcss');
//import postcss from 'rollup-plugin-postcss'
const image = require('@rollup/plugin-image');
//import image  from '@rollup/plugin-image';

module.exports = {
rollup(config, options) {
config.plugins = [
postcss({ modules: true }),
image({ incude: ['**/*.png', '**/*.jpg'] } ),

...config.plugins,
];
return config;
},
};