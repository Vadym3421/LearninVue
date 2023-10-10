import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/router";
import directives from "@/directives";
import store from "./store";

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
