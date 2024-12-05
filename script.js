app.get('/produtos', (req, res) => {
    const { categoria, preco } = req.query;
    Produto.find({ categoria, preco: { $lte: preco } })
      .then(produtos => res.json(produtos));
  });
  const paypal = require('paypal-rest-sdk');
  
  paypal.configure({
    mode: 'sandbox',
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET'
  });
  