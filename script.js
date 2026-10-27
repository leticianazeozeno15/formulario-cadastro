const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzcSOzOXm1P10hevy3JD_ISfTYsxhR0P7eFdQuPMdb7Uq8VCRh3Pm8S1IJlRfQiBAFUmA/exec";

const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit", function (evento){
    evento.preventDefault();

    aviso.textContent = "Enviando..."

    fetch(URL_PLANILHA, {
        method: "POST",
        mode:"no-cors",
        body: new FormData(form)

    })
    then(function () {
      aviso.textContent = "Enviado com sucesso!";
      form.reset(); // limpa os campos
    })
    .catch(function () {
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });

})