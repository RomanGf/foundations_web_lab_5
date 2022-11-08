//task1

function validPIB(pib_name) {
  let result = pib_name.match("^[а-яА-ЯІі]+ +[А-ЯІ]+.[А-ЯІ]+.$");
  return result;
}
function validVariant(variant) {
  let result = variant.match("^[0-9]{2}$");
  return result;
}
function validGroup(group) {
  let result = group.match("^[А-ЯІ0-9-]{5}$");
  return result;
}
function validPhoneNumber(phone_number) {
  let result = phone_number.match("^[0-9()-]{13,15}$");
  return result;
}
function validIDCard(id_card) {
  let result = id_card.match("^[А-ЯІа-яі]+ №+[0-9]{6}$");
  return result;
}

function validFunc() {
  //валідність ПІБ
  const name = document.getElementById("name").value;
  if (validPIB(name)) {
    document.getElementById("name").style.border = "solid green";
    document.getElementById("nameValid").innerHTML = `ПІБ: ${name}`;
  } else {
    document.getElementById("name").style.border = "solid red";
    document.getElementById("nameValid").innerHTML = "Невірне ПІБ";
  }
  const group = document.getElementById("gruppa").value;
  if (validGroup(group)) {
    document.getElementById("gruppa").style.border = "solid green";
    document.getElementById("gruppaValid").innerHTML = `Група: ${group}`;
  } else {
    document.getElementById("gruppa").style.border = "solid red";
    document.getElementById("gruppaValid").innerHTML = "Невірна группа";
  } //валідність номеру варіанта
  const variant = document.getElementById("variant").value;
  if (validVariant(variant)) {
    document.getElementById("variant").style.border = "solid green";
    document.getElementById("variantValid").innerHTML = `Варіант:
    ${variant}`;
  } else {
    document.getElementById("variant").style.border = "solid red";
    document.getElementById("variantValid").innerHTML = "Невірний варіант";
  } //валідність номеру телефону
  const phone = document.getElementById("phone").value;
  if (validPhoneNumber(phone)) {
    document.getElementById("phone").style.border = "solid green";
    document.getElementById("phoneValid").innerHTML = `Номер телефону:
    ${phone}`;
  } else {
    document.getElementById("phone").style.border = "solid red";
    document.getElementById("phoneValid").innerHTML = "Невірний телефон";
  } //валідність пошти

  const id_card = document.getElementById("email").value;
  if (validIDCard(id_card)) {
    document.getElementById("email").style.border = "solid green";
    document.getElementById(
      "emailValid"
    ).innerHTML = `Номер картки: ${id_card}`;
  } else {
    document.getElementById("email").style.border = "solid red";
    document.getElementById("emailValid").innerHTML =
      "Неправильний номер id картки";
  }
}
//task2
const main = document.getElementsByName("main");
const row1 = document.getElementById("row1");
const row7 = document.getElementById("row7");
const row13 = document.getElementById("row13");
const row19 = document.getElementById("row19");
const row25 = document.getElementById("row25");
const row31 = document.getElementById("row31");
const colorInput = document.getElementById("colorInput");
//зміна рядка на рандомний колір при наведенні на першку клітинку
function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
main[0].addEventListener("mouseover", function () {
  row1.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},
    ${getRandom(0, 255)})`;
});
main[0].addEventListener("mouseout", function () {
  row1.style.backgroundColor = "white";
  row1.style.backgroundColor = "white";
  row7.style.backgroundColor = "white";
  row13.style.backgroundColor = "white";
  row19.style.backgroundColor = "white";
  row25.style.backgroundColor = "white";
  row31.style.backgroundColor = "white";
});
//зміна коліра на обраний при кліці на першу клітинку
main[0].addEventListener("click", function () {
  row1.style.backgroundColor = colorInput.value;
});

main[0].addEventListener("dblclick", function () {
  row1.style.backgroundColor = colorInput.value;
  row7.style.backgroundColor = colorInput.value;
  row13.style.backgroundColor = colorInput.value;
  row19.style.backgroundColor = colorInput.value;
  row25.style.backgroundColor = colorInput.value;
  row31.style.backgroundColor = colorInput.value;
});
