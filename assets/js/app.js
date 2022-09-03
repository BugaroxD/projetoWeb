console.log("Hello World");

// const button =

const stages = document.querySelectorAll(".stage");

stages.forEach((el) => {
  const h1 = el.querySelector("h1");
  const button = el.querySelector("button");
  const message = el.querySelector("div#message");
  button.addEventListener("click", (e) => {
    message.innerHTML = "Oi, Tudo bem?";
    //el.querySelectorAll("button");
    console.log("Este elemento", el);
  });
});
