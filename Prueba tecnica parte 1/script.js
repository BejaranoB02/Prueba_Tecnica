const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const select4 = document.getElementById("select4");
const select5 = document.getElementById("select5");
const select6 = document.getElementById("select6");
const message = document.getElementById("message");
let counter = 0;
let flag = false;

const checkFunction = () => {
  counter++;
  console.log(counter);
  if (select1.value === "modelo") {
    select1.style.border = "2px solid green";
    select1.disabled = true;
    flag = true;
  } else {
    select1.value = "Elige una opción";
    select1.style.border = "2px solid red";
    flag = false;
  }
  if (select2.value === "sistemas") {
    select2.style.border = "2px solid green";
    select2.disabled = true;
  } else {
    select2.value = "Elige una opción";
    select2.style.border = "2px solid red";
    flag = false;
  }
  if (select3.value === "distribuidos") {
    select3.style.border = "2px solid green";
    select3.disabled = true;
  } else {
    select3.value = "Elige una opción";
    select3.style.border = "2px solid red";
    flag = false;
  }
  if (select4.value === "sistema") {
    select4.style.border = "2px solid green";
    select4.disabled = true;
  } else {
    select4.value = "Elige una opción";
    select4.style.border = "2px solid red";
    flag = false;
  }
  if (select5.value === "procesos") {
    select5.style.border = "2px solid green";
    select5.disabled = true;
  } else {
    select5.value = "Elige una opción";
    select5.style.border = "2px solid red";
    flag = false;
  }
  if (select6.value === "arquitecturas") {
    select6.style.border = "2px solid green";
    select6.disabled = true;
  } else {
    select6.value = "Elige una opción";
    select6.style.border = "2px solid red";
    flag = false;
  }
  if (flag === true) {
    message.textContent =
      "¡Felicitaciones! Haz logrado organizar correctamente cada uno de los términos y así recordar la definición de la arquitectura multiprocesador. Sigue estudiando para ser cada vez mejor.";
    message.style.color = "green"
  } else if (counter > 1) {
    message.textContent =
      "Estudia una vez más la arquitectura procesador e inténtalo de nuevo.";
    message.style.color = "red"
    select1.disabled = true
    select2.disabled = true
    select3.disabled = true
    select4.disabled = true
    select5.disabled = true
    select6.disabled = true
  }
};
