let subDiv = document.querySelector('.sub-div');
let form = document.querySelector('.form');
let subscribeButton = document.querySelector('.subscribe');
let emailInput= document.querySelector('.email');

function toggleMenu(){
    form.classList.toggle('closed');
    form.classList.toggle('open');
};

function formActive(){
    form.classList.add('active');
    form.classList.remove('inactive');
    form.classList.remove('error');
};

function formInactive(){
    form.classList.add('inactive');
    form.classList.remove('error');
    form.classList.remove('active');
};

function formError(){
    subscribeButton.value = "Error";
    console.log('made it here');
    form.classList.add('error');
    subDiv.classList.add('error');
    form.classList.remove('active');
    form.classList.remove('inactive');
};

function submitForm(event){
    subscribeButton.value = "Subscribing";
    event.preventDefault();
    formError();
}

form.addEventListener('click', formActive);
form.addEventListener('submit', submitForm);