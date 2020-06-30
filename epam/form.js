var submit = document.querySelector(".submit");
var form = document.querySelector("form");

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    alert('Your details have been successfully recorded');

}