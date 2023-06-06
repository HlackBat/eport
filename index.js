//template_4pogetx
// service_udszrf8
//-VmcSQfog9S_zUdBh
//

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            "service_udszrf8",
            "template_4pogetx",
            event.target,
            "-VmcSQfog9S_zUdBh"
        ).then(() => {
            loading.classlist.remove("modal__overlay--visible");
        success.classlist += " modal__overlay--visible";
        }).catch(() => {
            loading.classlist.remove("modal__overlay--visible");
            alert(
                "the email service is temporarily unavailabale. Please contact me directly on jvidacak123@gmail.com"
            );
        })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
    