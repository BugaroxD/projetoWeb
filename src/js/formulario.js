//const form = document.getElementById("formCadastro");
//console.log(form);

const initForm = (whatForm) => {
  // buscou o elemento do DOM
  const formRequired = document.getElementById(whatForm);
  // buscamos os filhos de input
  const inputs = formRequired.querySelectorAll("input");

  // perguntamos se existe algum input
  if (inputs.length > 0) {
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (input.value === "") {
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });
    });
  }
};
export default initForm;
