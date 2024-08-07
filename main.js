import sacheTemplateComponent from "./components/saches_template.js";
import menuTemplateComponent from "./components/menuComponent.js";
import tabelaMaquinaComponent from "./components/tabelaMaquinas.js";
import formCompraComponent from "./components/formCompra.js"; 

const app = Vue.createApp({
    
    
    components: {
        'menu-template': menuTemplateComponent,
        'sache-template': sacheTemplateComponent,
        'tabela-maquina': tabelaMaquinaComponent,
        'form-compra': formCompraComponent
    }
});

const mountedApp = app.mount('#app');
