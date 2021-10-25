const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
    name: false,
    email: false,
    phone: false
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "name":
            validateField(expresiones.name, e.target, 'name');
        break;
        case "phone":
            validateField(expresiones.phone, e.target, 'phone');
        break;
        case "email":
            validateField(expresiones.email, e.target, 'email');
        break;
    }
}
const validateField = (expresion, input, field) => {
    if(expresion.test(input.value)){
        document.getElementById(`group-${field}`).classList.remove('form-group-incorrect');
        document.getElementById(`group-${field}`).classList.add('form-group-correct');
        document.querySelector(`#group-${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group-${field} .form-input-error`).classList.remove('form-input-error-active');
        fields[field] = true;
    } else {
        document.getElementById(`group-${field}`).classList.add('form-group-incorrect');
        document.getElementById(`group-${field}`).classList.remove('form-group-correct');
        document.querySelector(`#group-${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group-${field} .form-input-error`).classList.add('form-input-error-active');
        fields[field] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(fields.name && fields.phone && fields.email ){
		form.reset();

		document.getElementById('form-message-success').classList.add('form-message-success-active');
		setTimeout(() => {
			document.getElementById('form-message-success').classList.remove('form-message-success-active');
		}, 5000);

		document.querySelectorAll('.form-group-correct').forEach((icono) => {
			icono.classList.remove('form-group-correct');
		});
	} else {
		document.getElementById('form-message').classList.add('form-message-active');
	}
});