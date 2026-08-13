
const nomeVisitante = prompt("Qual é o seu nome?");
const corIngles = prompt("Qual é a sua cor preferida? (Digitada em inglês)");

const boasVindas = document.querySelector("#boas-vindas");
const statusUsuario = document.querySelector("#status-usuario");

boasVindas.textContent = `Olá, ${nomeVisitante}! O painel é seu.`;
statusUsuario.textContent = `Usuário identificado com sucesso!`;

boasVindas.style.color = corIngles;
