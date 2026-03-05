// const toggle = document.getElementById("theme-toggle");
// const body = document.body;
// const text = document.getElementById("mode-text");

// toggle.addEventListener("click", () => {

//   body.classList.toggle("light-mode");
//   toggle.classList.toggle("active");

//   if(body.classList.contains("light-mode")){
//     text.innerText = "ON";
//   }else{
//     text.innerText = "OFF";
//   }

// });

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
