// template_mdiov1z
// service_o2rb4xb
// lpAmGWo6wLF2IDyPN

function contact() {
    event.preventDefault();
    emailjs
    .sendForm(
       'service_o2rb4xb',
       'template_mdiov1z',
       event.target,
       'user_lpAmGWo6wLF2IDyPN'
    ).then(() => {
        console.log('this worked')
    })

}