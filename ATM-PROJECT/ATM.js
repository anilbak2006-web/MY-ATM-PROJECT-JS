let atm_input = document.querySelector('#atm_input');
let buttons_Style = document.querySelectorAll('.buttons_Style');
let current_total = document.querySelector('.current_total');
let plusebutton = document.querySelector('#plusebutton');
let minusebutton = document.querySelector('#minusebutton');

// firstly I created a variable keep to total count and it's for now variable is 0 //

let usertotal = 0;


//it's here save to make changes I gonna setup a localstroge // 
usertotal = localStorage.getItem('usertotal') ? Number(localStorage.getItem('usertotal')): 0;

// I got a varibale named "current_total" from html and I atachhed usertotal with textcontent to it beacuse it's both should be necessarry compatible 
current_total.textContent = usertotal;

function PluseTotal() {
    usertotal = usertotal + Number(atm_input.value);
    current_total.textContent = usertotal;
    // I set up localstorge to here save to withdraw total//
    localStorage.setItem('usertotal', usertotal);

    //if shorter from zero transforms to intenger //

    if(usertotal < 0) {
        usertotal = Math.abs(usertotal);
    } 
}

function MinuseTotal() {
usertotal = usertotal - Number(atm_input.value);


    
// if shorter from zero and named atm_input variable of value is empty that don't make any progress and give an alert//
    if(usertotal < 0 && atm_input.value !== "") {
        alert("Your Total Is Can't Be Lowest From 0")
        return;
    } 

    current_total.textContent = usertotal;
    localStorage.setItem('usertotal', usertotal);
}

// I connecing all buttons with foreach method to transform only one a button //

buttons_Style.forEach(atm_buttons => {
    atm_buttons.classList.add('atm_buttons')


    atm_buttons.addEventListener('click', function () {
        if(atm_input.value === "") {
            if(!document.querySelector('#errorinfo')) {
            let errorinfo = document.createElement('h2');
            errorinfo.id = 'errorinfo';
            errorinfo.textContent = "ERROR: Please Firstly Enter An Amount!";
            errorinfo.style.color = "red";
            errorinfo.style.fontSize = "larger"
            errorinfo.style.fontFamily = "Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif"
            document.querySelector('.atm_BOX').appendChild(errorinfo)
      }
        } else {
            let removeinput = document.querySelector('#errorinfo')
            if(removeinput) {
                removeinput.remove();
            }
        } 
})
});


document.addEventListener('keydown', function (e) {
    if(e.key === "+"  || e.key === "-" || e.key === "/" || e.key === "*") {
        e.preventDefault();
        


    }

})

// and I calling two funciton from top to start it  //

plusebutton.addEventListener('click', function () {
    PluseTotal();
})

minusebutton.addEventListener('click', function () {
    MinuseTotal();
})



    


