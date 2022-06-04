const prevBtn = document.querySelectorAll(".btn-prev");
const nextBtn = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progsesStep = document.querySelectorAll(".progress-step");
const progsess = document.getElementById("progsess");
const form = document.querySelector(".form")


let formstepnum = 0;
function validate (){
    const activepage = document.querySelector(".form-step-active")
    const field = activepage.querySelectorAll(".inputed")
    const inputFirst = field[0]
    const inputLast = field[1]
    if(inputFirst.value != '' && inputLast.value != ''){
       return true
    }
    
}
nextBtn.forEach((btn) => {
    btn.addEventListener("click" , ()=> {
        if(validate()){
            formstepnum++;
        updateFormStep();
        updateprogesessbar()
        }
        
    });
});
prevBtn.forEach((btn) => {
    btn.addEventListener("click" , ()=> {
        formstepnum--;
        updateFormStep();
        updateprogesessbar()
    });
});
function updateFormStep (){
    formSteps.forEach((formstep) => {
        formstep.classList.contains("form-step-active") &&
        formstep.classList.remove("form-step-active")
    })
    
    formSteps[formstepnum].classList.add("form-step-active")                
}
function updateprogesessbar(){
    progsesStep.forEach((progsess,index) => {
       if(index < formstepnum +1 ) {
        progsess.classList.add("progress-step-active")
       }else{
        progsess.classList.remove("progress-step-active")
       }
    })
    const progsessActive = document.querySelectorAll('.progress-step-active')
    progsess.style.width = ((progsessActive.length -1 )/(progsesStep.length -1)*100 +'%')
}
form.addEventListener("submit" , (e)=>{
    if(!validate()){
        e.preventDefault()
    }

})
