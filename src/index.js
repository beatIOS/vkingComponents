import Result from '../packages/result/index.js';

const components = [
    Result
];

const install = function(Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '1.0.0',
    install,
    Result
};
