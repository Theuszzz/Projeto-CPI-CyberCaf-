const tabelaMaquinaComponent = {
    template: /*html*/ `
      <table id="maquina-table">
        <thead id="st-table">
          <tr>
            <th colspan="4">Máquinas de Café</th>
          </tr>
          <tr>
            <th>Tipo</th>
            <th>Modelo</th>
            <th>Foto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody id="st-body">
          <tr v-for="item in itens" :key="item.id">
            <td>{{ item.tipo }}</td>
            <td>{{ item.modelo }}</td>
            <td><img id="img-maquinas" :src="item.foto" /></td>
            <td>{{ item.preco }}</td>
          </tr>
        </tbody>
      </table>
    `,
    data() {
      return {
        itens: [
          { id: 1, tipo: 'Dolce Gusto', modelo: 'Piccolo', foto: '/img/Dulce_Gusto.jpg', preco: 'R$ 340,00' },
          { id: 2, tipo: 'Nespresso', modelo: 'Inissia C40', foto: '/img/Nespresso_Inissia.jpg', preco: 'R$ 300,00' },
          { id: 3, tipo: 'Nespresso', modelo: 'U C50', foto: '/img/Nespresso_C50.jpg', preco: 'R$ 400,00' },
          { id: 4, tipo: 'Senso', modelo: 'HD7811/96', foto: '/img/Senseo.jpg', preco: 'R$ 230,00' }
        ],
      };
    },
  };
  
  export default tabelaMaquinaComponent;
  