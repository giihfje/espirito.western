
document.querySelectorAll('.comprar-btn').forEach(button => {
  button.addEventListener('click', () => {
      const nomeProduto = button.getAttribute('data-nome');
      alert(`Você comprou: ${nomeProduto}`);
  });
});

document.getElementById('contato-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Mensagem enviada! Obrigado por entrar em contato.');
  event.target.reset();
});

  