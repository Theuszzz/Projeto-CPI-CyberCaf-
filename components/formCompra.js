const formCompraComponent = {
    template: 
    /*html*/`
    <form id="order-form">
    
    <fieldset>
      <legend>Dados de Identificação</legend>
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" required><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>

      <label for="phone">Telefone:</label>
      <input type="tel" id="phone" name="phone" required><br>
    </fieldset>

    
    <fieldset>
      <legend>Produtos</legend>
      <label for="product1">Produto 1:</label>
      <input type="text" id="product1" name="product1" placeholder="Nome do Produto"><br>

      <label for="product2">Produto 2:</label>
      <input type="text" id="product2" name="product2" placeholder="Nome do Produto"><br>

      <label for="product3">Produto 3:</label>
      <input type="text" id="product3" name="product3" placeholder="Nome do Produto"><br>
      
      <label for="additional-products">Produtos Adicionais:</label>
      <textarea id="additional-products" name="additional-products" rows="4" cols="50" placeholder="Descreva outros produtos se necessário"></textarea><br>
    </fieldset>

    
    <fieldset>
      <legend>Formas de Pagamento</legend>
      <label for="payment-method">Método de Pagamento:</label>
      <select id="payment-method" name="payment-method" required>
        <option value="">Selecione...</option>
        <option value="credit-card">Cartão de Crédito</option>
        <option value="debit-card">Cartão de Débito</option>
        <option value="paypal">PayPal</option>
        <option value="bank-transfer">Transferência Bancária</option>
      </select><br>

      <label for="card-number">Número do Cartão:</label>
      <input type="text" id="card-number" name="card-number" placeholder="0000 0000 0000 0000"><br>

      <label for="expiration-date">Data de Validade:</label>
      <input type="month" id="expiration-date" name="expiration-date" required><br>

      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" placeholder="123" required><br>
    </fieldset>

    <button type="submit">Enviar Pedido</button>
  </form>
    `

}
export default formCompraComponent