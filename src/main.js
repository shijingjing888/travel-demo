import Vue from 'vue';
import App from './App';
import router from './router';
import fastClick from 'fastclick';//解决300ms点击事件延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'styles/reset.css';
import 'styles/border.css';//解决1px问题
import 'styles/iconfont.css';
import 'Swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
