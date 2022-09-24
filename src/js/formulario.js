//const form = document.getElementById("formCadastro");
//console.log(form);

const initForm = (whatForm) => {
  // buscou o elemento do DOM
  const formRequired = document.getElementById(whatForm);
  // buscamos os filhos de input
  const inputs = formRequired.querySelectorAll("input");

  // perguntamos se existe algum input
  if (inputs) {
    // se existir, percorremos o array de inputs
    inputs.forEach((input) => {
      // exibir no console o valor de cada input
      console.log(input.value);
    });
  } else {
    // se não existir, exibimos uma mensagem no console
    console.log("Não existe inputs neste formulário");
  }
};

const init = (whatForm) => {
  // recebe o elemento DOM de acordo com a String do ID
  const formRequerido = document.getElementById(whatForm);
  // busca o botão de submit para este formulário
  const submit = formRequerido.querySelector("input[type=submit]");
  // adiciona um evento de click no botão
  submit.addEventListener("click", (event) => {
    // previne que o elemento, no caso o input submit, faça o que ele faz por padrão
    event.preventDefault();
    // chama a função que criamos
    initForm(formRequerido);
  });
};
export default init;
