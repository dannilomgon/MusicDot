// Função para validar o formulário
function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var opiniao = document.getElementById('opiniao').value;
  
    // Verificar o campo "nome"
    if (nome.trim() === '' || nome.length < 10) {
      alert('O campo nome deve ter no mínimo 10 caracteres.');
      return false;
    }
  
    // Verificar o campo "telefone"
    if (telefone.trim() === '' || telefone.length !== 10) {
      alert('O campo telefone deve ter exatamente 10 caracteres.');
      return false;
    }
  
    // Verificar o campo "email"
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailRegex.test(email)) {
      alert('O campo e-mail deve ser preenchido com um e-mail válido.');
      return false;
    }
  
    // Verificar o campo "opiniao"
    if (opiniao.trim() === '' || opiniao.length < 10 || opiniao.length > 50) {
      alert('O campo opinião deve ter entre 10 e 50 caracteres.');
      return false;
    }
  
    // Todas as validações foram bem-sucedidas, enviar o formulário
    return true;
  }
  