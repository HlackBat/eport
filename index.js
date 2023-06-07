//template_4pogetx
// service_udszrf8
//-VmcSQfog9S_zUdBh
//

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientX * scaleFactor;
    
    for ( let i = 0 ; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
    document.body.classList.remove ("dark-theme")
    }
}

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


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
    