const toggle = document.getElementById("theme-toggle");
const body = document.body;
const text = document.getElementById("mode-text");

// carregar tema salvo
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggle.classList.add("active");
  text.innerText = "ON";
}

// clique no botão
toggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  toggle.classList.toggle("active");

  if (body.classList.contains("light-mode")) {
    text.innerText = "ON";
    localStorage.setItem("theme", "light");
  } else {
    text.innerText = "OFF";
    localStorage.setItem("theme", "dark");
  }
});

emailjs.init("N9ziwX_xtVhMMNSX7");

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const now = new Date();
    const timeField = document.getElementById("time");
    if (timeField) {
      timeField.value = now.toLocaleString();
    }

    emailjs.sendForm("service_jl668yi", "template_tpbm4li", this).then(
      () => {
        const alertBox = document.getElementById("alert-msg");

        if (alertBox) {
          alertBox.classList.add("show");

          setTimeout(() => {
            alertBox.classList.remove("show");
          }, 3000);
        }

        form.reset();
      },
      (error) => {
        alert("Erro ao enviar: " + error.text);
      },
    );
  });
}

/*
// Serviço de email com node.js
// const nodemailer = require("nodemailer");

// const trasnporte = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, //true para 465, false para outras
//   auth: {
//     user: "",
//     pass: "",
//   },
// });

// trasnporte
//   .sendMail({
//     from: "teste <@gmail.com>",
//     to: "@gmail.com",
//     subject: "enviando email teste com nodeMailer",
//     html: "<h1>testesteste</h1> <p> testetsetsetse</p>",
//     text: "teste do text",
//   })

//   .then((response) => console.log("Email enviado com sucesso!"))
//   .catch((err) => console.log("Erro ao enviar o email ", err));
*/
