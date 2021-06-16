

var plusbtn=document.querySelectorAll('.plus-btn')
var minusbtn=document.querySelectorAll('.minus-btn')
var removebtns =document.querySelectorAll('.fa-trash-alt')
var hearts=document.querySelectorAll('.fa-heart')
console.log(plusbtn)
console.log(minusbtn)


for (let i=0; i<plusbtn.length; i++){

    plusbtn[i].addEventListener('click', function (){
        plusbtn[i].nextElementSibling.innerHTML++
        Total()
    })

minusbtn[i].addEventListener('click', function(){

if (minusbtn[i].previousElementSibling.innerHTML>0)
    minusbtn[i].previousElementSibling.innerHTML--
    Total()

})

}
for (let removebtn of removebtns){
    removebtn.addEventListener('click', function(){
        removebtn.parentElement.parentElement.parentElement.remove()
        Total()
    })
}
// for (   let removet of removebtns    ){
//     removebtns[i].addEventListener('click', function (){
//         removebtns[i].parentElement.parentElement.parentElement.remove()
//         Total()
//     })
// }
for (let heart of hearts ){
    heart.addEventListener('click', function (){
console.log(heart)
        heart.classList.toggle('hear')
    })
}


function Total (){
    
let unitprice=document.getElementsByClassName('unit-price')
let quaty=document.getElementsByClassName('qute')
let tot=document.querySelector('.total-price')
    let sum=0
for (let i=0; i<quaty.length; i++){
sum+=quaty[i].innerHTML*unitprice[i].innerHTML
}

tot.innerHTML=sum
}