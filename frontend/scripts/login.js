// Variables
const $ = document
const form = $.querySelector(".form")
const email = $.querySelector(".email")
const password = $.querySelector(".password")
const submitLoginForm = $.querySelector(".form__submit")
const modal = $.querySelector(".modal")
const closeModalBtn = $.querySelector(".modal__close-btn")
const massageModal = $.querySelector(".modal__massage")
const regexEmail = /.+@.+.com/

// Function
const showModal = () => {
    modal.classList.add("modal--active")
}
const hideModal = () => {
    modal.classList.remove("modal--active")
}
const checkData = () => {
    console.log("hlo");
    fetch(`http://localhost:3000/api/user/${email.value}/${password.value}`)
        .then(res => res.text())
        .then(data => {
            console.log(data);
            if (data === "error") {
                massageModal.innerHTML = "نام کاربری یا رمز عبور اشتباه است. لطفا مجددا تلاش کنید."
                showModal()
            } else if (data === "ok") {
                massageModal.innerHTML = "تبریک میگویم شما با موفقیت وارد پنل خود شدید."
                email.value = ""
                password.value = ""
                showModal()
                clearAllData()
            }
        })
}
const checkValidation = () => {
    if (email.value !== "" && password.value !== "") {
        if (regexEmail.test(email.value) && password.value.trim().length > 10) {
            checkData()
        } else {
            massageModal.innerHTML = "فیلد ها را به درستی پر کنید"
            showModal()
        }
    } else {
        massageModal.innerHTML = "لطفا تمامی فیلد ها را پر کنید !!"
        showModal()
    }
}
// Events
form.addEventListener("submit", e => {
    e.preventDefault()
    checkValidation()
})
closeModalBtn.addEventListener("click", () => {
    hideModal()
})