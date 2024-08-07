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

  <div class="flex-container">
    <fieldset>
      <legend>Produtos</legend>
      <label for="machines">Máquinas:</label>
      <select id="machines" name="machines">
        <option value="">Selecione...</option>
      </select><br>

      <label for="sachets">Sachês:</label>
      <select id="sachets" name="sachets">
        <option value="">Selecione...</option>
      </select><br>

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
  </div>

  <button type="submit">Enviar Pedido</button>
</form>



    `

}
export default formCompraComponent