//Variable
const $ = document
const form = $.querySelector(".form")
const userName = $.querySelector(".name")
const email = $.querySelector(".email")
const password = $.querySelector(".password")
const submitBtn = $.querySelector(".form__submit")
const modal = $.querySelector(".modal")
const massageModal = $.querySelector(".modal__massage")
const closeModalBtn = $.querySelector(".modal__close-btn")
const checkBoxCookie = $.querySelector(".checkbox")
let now = new Date()

// Functions

const showModal = () => {
    modal.classList.add("modal--active")
}
const hideModal = () => {
    modal.classList.remove("modal--active")
}
const clearAllData = () => {
    userName.value = ""
    email.value = ""
    password.value = ""
}
const setCookie = () => {
    if (checkBoxCookie.checked) {
        now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000)
        $.cookie = `username=${userName.value};path=/;expires=${now}`
    }
}
const getCookie = () => {
    let cookieArray = $.cookie.split(';')
    let mainCookie = null
    console.log(
        Boolean(cookieArray.includes(`username=${userName.value}`))
    );
    cookieArray.some(cookie => {
        if (cookie.includes(`username=${userName.value}`)) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })
    if (mainCookie === userName.value) {
        massageModal.innerHTML = ".شما کمتر از 30 روز پیش در سایت ما با همین اسم ثبت نام کرده اید. پس از قسمت پایین فرم گزینه ورود به حساب کاربری را بزنید"
        showModal()
    }
}
const snedData = (newUser) => {
    fetch("http://localhost:3000/api/user/new-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.text())
        .then(data => {
            console.log(data)
            if (data === "validate") {
                massageModal.innerHTML = "ایمیل وارد شده قبلا در سایت ثبت نام کرده است. لطفا مجددا ورودی های خود را کنترل کنید یا اگر حسابی دارید از بخش پایین فرم، اقدام به ورود به سایت کنید."
                showModal()
            }
            clearAllData()
        })
}
const validationInputs = () => {
    if (userName.value !== "" && email.value !== "" && password.value !== '') {
        if (userName.value.trim().length < 8 || password.value.trim().length < 10 || email.value.trim().length < 10) {
            massageModal.innerHTML = "طول عباراتی که وارد کردید کوتاه است. (طول نام باید از 8 کاراکتر و طول ایمیل و پسوورد باید از 10 کاراکتر بیشتر باشد)"
            showModal()
        } else {
            let newUser = {
                userName: userName.value.trim(),
                password: password.value.trim(),
                email: email.value.trim()
            }
            setCookie()
            snedData(newUser)
        }

    } else {
        massageModal.innerHTML = "لطفا تمامی فیلد ها را پر کنید !!"
        showModal()
    }
}
//Events
form.addEventListener("submit", event => {
    event.preventDefault()
    validationInputs()
})
closeModalBtn.addEventListener("click", () => {
    hideModal()
    clearAllData()
})
userName.addEventListener("input", () => {
    getCookie()
})
window.addEventListener("load", () => {
    setCookie()
})