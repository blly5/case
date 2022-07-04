import dialog from './dialog.vue';

const install = function(Vue) {
  Vue.component('Dialog', dialog);
  console.log(Vue);
  Vue.prototype.$dialog = '12';
}

export default install;