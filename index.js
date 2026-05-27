let isModalOpen = false;

function toggleModal() {
  isModalOpen = !isModalOpen;
  document.body.classList.toggle("modal--open");
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
       'service_o2rb4xb',
       'template_mdiov1z',
       event.target,
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me directly at victoriawanko@gmail.com");
    })
}

function toggleContrast() {
  document.body.classList.toggle("dark-theme");
}