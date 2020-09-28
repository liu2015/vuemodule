import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

//注册全局自定义指令
// 注册焦点控件指令
app.directive("focus", {
  inserted: function(el) {
    console.log(el);
    el.focus();
  },
});

//全局混入

app.mixin({
  //生命周期
  beforeCreate() {
    console.log("我是全局mixin");
  },
});
app.config.globalProperties.$axios = axios;
//注册插件
class Plugin {
  static install(_vue) {
    _vue.mixin({
      beforeCreate() {
        console.log("我是plugin");
      },
    });
  }
}
app.use(Plugin);

app
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
