import * as bootstrap from "bootstrap";
const { Modal, Collapse, Dropdown } = bootstrap;

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      bootstrap: {
        modal: (element) => new Modal(element),
        collapse: (element) => new Collapse(element),
        Dropdown: (element) => new Dropdown(element)
      }
    }
  };
});
