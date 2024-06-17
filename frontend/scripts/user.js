// Variables
const $=document
const userName=$.querySelector(".user__name")
const userEmail=$.querySelector(".user__email")
const userUpdateBtn=$.querySelector(".user__update")
const userDeleteBtn=$.querySelector(".user__delete")
const userWrapper=$.querySelector(".wrapper")
const modal=$.querySelector(".modal")
const deleteModal=$.querySelector(".delete-modal")
const acceptBtn=$.querySelector(".accept")
const ignoreBtn=$.querySelector(".ignore")
const updateModal=$.querySelector(".update-modal")
const updateForm=$.querySelector(".update-form")
const updateUsername=$.querySelector(".update-username")
const updateEmail=$.querySelector(".update-email")
const updatePassword=$.querySelector(".update-password")
const updateSubmitFormBtn=$.querySelector(".submit-form")
const massageUpdateModal=$.querySelector(".massage-update-modal")
const massageUpdateText=$.querySelector(".massage-text")
const massageUpdateBtn=$.querySelector(".massage-btn")
const regexEmail=/.+@.+.com/
let userOldEmail=null

// Functions
const showModal=()=>{
    modal.classList.add("modal--active")
}
const hideModal=()=>{
    modal.classList.remove("modal--active")
}
const showDeleteModal=()=>{
    deleteModal.classList.add("delete-modal--active")
}
const hideDeleteModal=()=>{
    deleteModal.classList.remove("delete-modal--active")
}
const showUpdateModal=()=>{
    updateModal.classList.add("update-modal--active")
}
const hideUpdateModal=()=>{
    updateModal.classList.remove("update-modal--active")
}
const showMassageUpdateModal=()=>{
    updateModal.classList.add("massage-update-modal--active")
}
const hideMassageUpdateModal=()=>{
    updateModal.classList.remove("massage-update-modal--active")
}

const creatUserListStructure=data=>{
    userWrapper.innerHTML=""
    data.forEach(user => {
        let userElem=
        `
        <div class="user">
            <div class="user__detail">
                <div class="user__image">
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512.524936 0.008332C229.809447 0.008332 0.587428 229.230351 0.587428 511.94584c0 174.13291 86.976883 327.943301 219.835665 420.423679 25.99266-90.522283 91.847122-158.622304 181.419521-189.5102a331.426209 331.426209 0 0 1 8.557288-2.807991c1.3665-0.429114 2.716335-0.870727 4.091168-1.283176a323.077229 323.077229 0 0 1 12.802603-3.562066l0.254136-0.058326a327.101737 327.101737 0 0 1 12.910924-2.978803c1.383164-0.291631 2.778827-0.554099 4.166158-0.829065a341.275007 341.275007 0 0 1 14.160772-2.512194 346.915985 346.915985 0 0 1 9.682151-1.354001c1.424826-0.179145 2.84132-0.37912 4.274478-0.5416a355.210806 355.210806 0 0 1 14.039953-1.354002h18.539404c1.891436 0.112486 3.778705 0.112486 5.670141 0h1.533146c-133.117084 0-241.028911-107.911827-241.028911-241.028911 0-1.266512 0.074991-2.516359 0.095822-3.774539-1.31234-152.377233 141.516058-244.178526 241.17056-237.37519 102.270849-6.965816 250.006982 89.397421 241.383034 248.353017-0.254136 0.158314-0.529102 0.279133-0.783237 0.43328-4.04534 129.575849-110.286537 233.392343-240.841434 233.392343h25.980162c4.724423 0.354123 9.394687 0.820733 14.035786 1.354002 1.437325 0.16248 2.857984 0.362456 4.282811 0.5416a359.614435 359.614435 0 0 1 14.402408 2.124741c3.153782 0.533268 6.2784 1.11653 9.386355 1.733121 1.412328 0.279133 2.837154 0.545767 4.236982 0.841564a327.626673 327.626673 0 0 1 12.59013 2.903813c0.279133 0.070825 0.566598 0.137483 0.84573 0.212474a318.461125 318.461125 0 0 1 12.42765 3.457911c1.470654 0.437447 2.912145 0.912389 4.366134 1.3665 2.753831 0.866561 5.490996 1.758119 8.207331 2.691338 89.605728 30.850401 155.497685 98.921258 181.536173 189.426876 132.742129-92.497042 219.635689-246.236608 219.635689-420.286195 0.008332-282.719655-229.20952-511.937508-511.929175-511.937508z" fill="#A6D4AE" /><path d="M753.36637 492.185752c-70.674706 43.161398-216.244436-31.629472-240.603963-134.708556-24.326197 103.449872-170.645836 178.444884-240.912258 134.271109a243.574433 243.574433 0 0 1-0.258302-10.977826c-0.020831 1.262346-0.095822 2.512193-0.095822 3.774539 0 133.117084 107.911827 241.028911 241.028911 241.028911 130.554896 0.004166 236.796094-103.812328 240.841434-233.388177z" fill="#FCE9EA" /><path d="M623.290581 742.805159c0.916555 0.316628 1.824777 0.645755 2.733 0.966549a119.589568 119.589568 0 0 1-10.448724 22.122299c17.243728 26.317621 12.931755 141.561886-12.944254 123.359941l-45.11116-31.650303-44.994507-31.650303 2.953806-2.083079c-0.983213 0.024997-1.96226 0.074991-2.953806 0.074991-1.033207 0-2.04975-0.05416-3.074625-0.079157l2.953806 2.087245-44.994507 31.650303-45.11116 31.650303c-25.809349 18.222776-30.167151-97.300622-12.877595-123.451596a119.714553 119.714553 0 0 1-10.373733-21.95982c0.929053-0.333293 1.858107-0.666585 2.791325-0.987379-89.572399 30.887896-155.42686 98.992083-181.41952 189.5102 82.84822 57.672127 183.519264 91.513829 292.101843 91.513828 108.670068 0 209.420269-33.895862 292.301818-91.651312-26.030156-90.501452-91.926279-158.57231-181.532007-189.42271zM468.467814 727.473697c1.424826-0.179145 2.84132-0.37912 4.274478-0.5416-1.433158 0.16248-2.845486 0.362456-4.274478 0.5416zM454.077904 729.594272zM440.458733 732.168957c1.383164-0.291631 2.778827-0.554099 4.166158-0.829065-1.387331 0.274966-2.782994 0.537434-4.166158 0.829065zM427.293673 735.20192l0.254136-0.058326c-0.083323 0.024997-0.170812 0.041662-0.254136 0.058326zM580.616624 731.331559c1.412328 0.279133 2.837154 0.545767 4.236983 0.841564-1.399829-0.295797-2.824655-0.562431-4.236983-0.841564zM610.721282 738.747321c1.470654 0.437447 2.912145 0.912389 4.366134 1.3665-1.453989-0.454111-2.899646-0.929053-4.366134-1.3665zM597.443737 735.076936c0.279133 0.070825 0.566598 0.137483 0.84573 0.212474-0.279133-0.074991-0.562431-0.141649-0.84573-0.212474zM410.399902 740.051328c1.3665-0.429114 2.716335-0.870727 4.091168-1.283176-1.370666 0.41245-2.724667 0.854062-4.091168 1.283176zM552.545051 726.932097c1.437325 0.16248 2.857984 0.362456 4.28281 0.5416-1.424826-0.179145-2.845486-0.37912-4.28281-0.5416zM566.497514 728.827698z" fill="#F08E83" /><path d="M409.425021 765.802352c3.43708-5.199365 7.724057-6.886659 12.877595-3.262102l45.11116 31.650303 42.036535 29.67971c1.024875 0.024997 2.041417 0.079157 3.074625 0.079157 0.991546 0 1.970593-0.049994 2.953806-0.074991l42.040701-29.683876 45.11116-31.650303c5.178535-3.645388 9.490508-1.920599 12.944254 3.353757a119.464584 119.464584 0 0 0 10.448724-22.122299c-0.912389-0.320794-1.820611-0.649921-2.733-0.966549a325.843558 325.843558 0 0 0-8.207331-2.691338c-1.453989-0.454111-2.89548-0.929053-4.366134-1.3665a320.515041 320.515041 0 0 0-12.427649-3.457911c-0.279133-0.074991-0.566598-0.141649-0.84573-0.212474a329.443118 329.443118 0 0 0-12.59013-2.903813c-1.399829-0.295797-2.824655-0.562431-4.236983-0.841564a336.479759 336.479759 0 0 0-23.788763-3.857862c-1.428992-0.179145-2.849652-0.37912-4.28281-0.5416a355.760739 355.760739 0 0 0-14.035787-1.354002h-27.513308c-1.891436 0.112486-3.778705 0.112486-5.670141 0h-18.539404a356.739786 356.739786 0 0 0-14.039953 1.354002c-1.433158 0.16248-2.849652 0.362456-4.274478 0.5416-3.245437 0.41245-6.478376 0.858229-9.682151 1.354001a346.299394 346.299394 0 0 0-14.160772 2.512194c-1.387331 0.274966-2.78716 0.537434-4.166158 0.829065a327.101737 327.101737 0 0 0-12.910924 2.978803l-0.254135 0.058326a337.958745 337.958745 0 0 0-12.802604 3.562066c-1.374832 0.41245-2.728834 0.854062-4.091167 1.283176a316.086415 316.086415 0 0 0-8.557289 2.807991c-0.933219 0.320794-1.862273 0.654087-2.791326 0.987379a119.514577 119.514577 0 0 0 10.369567 21.955654z" fill="#FEFEFE" /><path d="M602.630603 762.54025l-45.11116 31.650303-42.040701 29.683876-2.953806 2.083079 44.994507 31.650304 45.11116 31.650303c25.880174 18.201945 30.187982-97.042321 12.944254-123.359942-3.449579-5.278522-7.761553-7.003312-12.944254-3.357923zM422.302616 762.54025c-5.149371-3.624558-9.440514-1.937264-12.877595 3.262102-17.289556 26.146808-12.931755 141.674372 12.877595 123.451596l45.11116-31.650303 44.994507-31.650303-2.953806-2.087245-42.036535-29.67971-45.115326-31.646137z" fill="#CFE07D" /><path d="M512.762407 357.477196V243.399455C413.107905 236.596119 270.279507 328.393246 271.591847 480.774645c0.029163 3.637056 0.062492 7.274112 0.258302 10.977827 70.266423 44.165442 216.586061-30.825404 240.912258-134.275276z" fill="#ADBE20" /><path d="M512.762407 357.477196c24.359526 103.079084 169.929257 177.869954 240.603963 134.708556 0.254136-0.154148 0.529102-0.274966 0.783237-0.43328 8.619781-158.955596-139.116351-255.318833-241.383034-248.353017v114.077741z" fill="#7EA701" /></svg>
                </div>
                <div class="user__property">
                    <span class="user__name">${user.username}</span>
                    <span class="user__email">${user.email}</span>
                </div>
            </div>
            <div class="user__btns">
                <div class="user__btn user__update">
                    <i class="fa fa-pencil"></i>
                    <button class="user__update-btn" onclick='showMassageUpdate(event)'user-email="${user.email}" >ویرایش</button>
                </div>
                <div class="user__btn user__delete">
                    <i class="fa fa-trash"></i>
                    <button class="user__delete-btn" onclick='showMassageDelete(event)' user-email="${user.email}">حذف</button>
                </div>
            </div>
        </div>
        
        `
        addElementToDom(userElem)
    });
}
const addElementToDom=userElem=>{
    userWrapper.insertAdjacentHTML("beforeend",userElem)
}
const getAllUser=()=>{
    fetch("http://localhost:3000/api/user")
    .then(res=>res.json())
    .then(data=>{
        creatUserListStructure(data)
    })
}
const showMassageDelete=(event)=>{
    showDeleteModal()
    showModal()
    userOldEmail=event.target.getAttribute("user-email")
}
const deleteUserHandeler=()=>{
    fetch(`http://localhost:3000/api/user/remove-user/${userOldEmail}`,{
        method:"DELETE",
    })
    .then(res=>res.text())
    .then(data=>{
        console.log(data)
        getAllUser()
        hideDeleteModal()
        hideModal()
    })
}
const showMassageUpdate=(event)=>{
    showUpdateModal()
    showModal()
    userOldEmail=event.target.getAttribute("user-email")
}
const updateUserHandeler=()=>{
    if(updateEmail.value.trim()!=="" && updatePassword.value.trim()!=="" && updateUsername.value.trim()!==""){
        if(regexEmail.test(updateEmail.value) && updatePassword.value.trim().length>10 && updateUsername.value.trim().length>8){
            let newValueUser={
                username:updateUsername.value.trim(),
                email:updateEmail.value.trim(),
                password:updatePassword.value.trim(),
            }
            sendNewUserData(newValueUser)
        }else{
            massageUpdateModal.innerHTML="لطفا ورودی ها را به درستی وارد کنید."
            showMassageUpdateModal()
            showModal()
        }
    }else{
        massageUpdateModal.innerHTML="فیلد ها نباید خالی باشند. لطفا به درستی پر کنید."
        showMassageUpdateModal()
        showModal()
    }
}
const sendNewUserData=(newValueUser)=>{
    fetch(`http://localhost:3000/api/user/update-user/${userOldEmail}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newValueUser)
    })
    .then(res=>res.text())
    .then(data=>{
        console.log(data);
        updateEmail.value=""
        updatePassword.value=""
        updateUsername.value=""
        getAllUser()
        hideUpdateModal()
        hideModal()
        
    })
    
}
// Events
window.addEventListener("load",()=>{
    getAllUser()
})
ignoreBtn.addEventListener("click",()=>{
    hideDeleteModal()
    hideModal()
})
acceptBtn.addEventListener("click",()=>{
    deleteUserHandeler()
})
updateForm.addEventListener("submit",e=>{
    e.preventDefault()
    updateUserHandeler()
})
massageUpdateBtn.addEventListener("click",()=>{
    hideMassageUpdateModal()
})


/* <button class="user__btn user__update" onclick='showMassageUpdate(event)'user-email="${user.email}" >ویرایش</button>
<button class="user__btn user__delete" onclick='showMassageDelete(event)' user-email="${user.email}">حذف</button> */