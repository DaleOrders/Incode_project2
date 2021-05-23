document.addEventListener("DOMContentLoaded", () => {
    const phone = document.getElementById("phone")
    const name = document.getElementById("name")
    const surname = document.getElementById("surname")
    const form = document.querySelector("form")
    const message=document.getElementById("message")
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const close = document.getElementsByClassName("close")[0];


    form.addEventListener('submit', function (e) {

        e.preventDefault()

        const nameValidation = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i
        const phoneValidation=/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
        const emailValidation = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\-_\.]*@[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_\.]+$/

        const nameValid = nameValidation.test(name.value)
        const surnameValid=nameValidation.test(surname.value)
        const phoneValid=phoneValidation.test(phone.value)|| phone.value==="";
        const emailValid = emailValidation.test(email.value)

        const messageValid=message.value===""? false:true

        /*
        const key1=console.log(nameValid)

        const object = {
             key1: name.value, 
             surnameValid: surname.value, 
             phoneValid: phone.value,
             emailValid: email.value 
            };

        for (const key in object) {
            console.log(key)
        }
    */



        if (phoneValid&& nameValid && emailValid && surnameValid && messageValid) {
            // When the user clicks on the button, open the modal
            console.log({
                Name:name.value+" "+surname.value,
                Phone:phone.value,
                Email:email.value,
                Message:message.value
            })
            modal.style.display = "block"; 
            

            // When the user clicks on <span> (x), close the modal
            close.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            form.reset()
        }

        

    });



})