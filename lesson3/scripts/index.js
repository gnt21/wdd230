const current_year = new Date();
const modified = new Date(document.lastModified);
const footer_name = `${current_year.getFullYear()} | José Meirelles | Last Updated: ${("0"+modified.getMonth()+1).slice(-2)}/${("0"+modified.getDate()).slice(-2)}/${modified.getFullYear()}
${("0"+modified.getHours()).slice(-2)}:${("0"+modified.getMinutes()).slice(-2)}:${("0"+modified.getSeconds()).slice(-2)}`;


document.querySelector("#name-footer").textContent = document.querySelector("#name-footer").textContent + footer_name;

