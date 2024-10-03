import React, { useEffect } from 'react';

const PaymentForm = () => {
  useEffect(() => {
    // Verifica se o objeto MercadoPago está disponível globalmente
    if (window.MercadoPago) {
      const mp = new window.MercadoPago('APP_USR-40c2e66d-bd76-4b2c-9624-7df115ec1d11'); // Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública

      const cardForm = mp.cardForm({
        amount: "100.00",
        autoMount: true,
        form: {
          id: "paymentForm",
          cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Nome no Cartão",
          },
          cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do Cartão",
          },
          expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/AA",
          },
          securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "CVV",
          },
          cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
          },
        },
        callbacks: {
          onFormMounted: (error) => {
            if (error) return console.warn("Erro ao montar o formulário:", error);
            console.log("Formulário montado com sucesso.");
          },
          onSubmit: (event) => {
            event.preventDefault();
            
            const cardFormData = cardForm.getCardFormData();

            cardForm.createCardToken().then((response) => {
              console.log("Token gerado:", response.id);
              
              // Aqui você pode enviar o token ao backend para processar o pagamento
              // fetch('http://localhost:3000/api/pay', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     token: response.id,
              //     amount: cardFormData.amount,
              //     description: 'Pagamento de exemplo',
              //     email: cardFormData.cardholderEmail,
              //   }),
              // })
              // .then(res => res.json())
              // .then(data => console.log(data))
              // .catch(err => console.error('Erro ao processar pagamento:', err));
            }).catch((error) => {
              console.error("Erro ao gerar token:", error);
            });
          }
        },
      });
    }
  }, []);

  return (
    <form id="paymentForm">
      <div>
        <input type="text" id="form-checkout__cardholderName" placeholder="Nome no Cartão" />
      </div>
      <div>
        <input type="text" id="form-checkout__cardNumber" placeholder="Número do Cartão" />
      </div>
      <div>
        <input type="text" id="form-checkout__expirationDate" placeholder="MM/AA" />
      </div>
      <div>
        <input type="text" id="form-checkout__securityCode" placeholder="CVV" />
      </div>
      <div>
        <input type="email" id="form-checkout__cardholderEmail" placeholder="E-mail" />
      </div>
      <button type="submit">Pagar</button>
    </form>
  );
};

export default PaymentForm;
