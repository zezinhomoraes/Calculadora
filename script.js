const display = document.querySelector('#display')
const btnNum = [...document.querySelectorAll(".num")]
const btnOp = [...document.querySelectorAll(".teclaOp")]
const tecla = [...document.querySelectorAll(".tecla")]
const separador = document.querySelector('#tseparador')
const limpar = document.querySelector('#tlimpar')
const apagar =document.querySelector('#apagar')
const res = document.querySelector('.res')
let contador = false
let contadorOp = false

apagar.addEventListener('click',(evt)=>{
    const expr = display.innerHTML
    let arrExpr = expr.split('')
    arrExpr.pop()
    if(arrExpr.length==0){
        display.innerHTML="0"
    }else{
        arrExpr = arrExpr.join('')
        display.innerHTML=arrExpr
    }
})

limpar.addEventListener('click',(evt)=>{
    display.innerHTML="0"
})
btnNum.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const btnC = evt.target.innerHTML
        if(display.innerHTML=="0" || display.innerHTML=="ERRO"){
            display.innerHTML=""
        }
        display.innerHTML+=btnC        
        contadorOp = false
    })
})
 
btnOp.map((el)=>{
    el.addEventListener("click", (evt)=>{
        let btnC = evt.target.innerHTML
        if(btnC=="x"){
            btnC="*"
        }
        if(!contadorOp){
            display.innerHTML+=btnC 
            contador = false
            contadorOp = true
        }
        if(display.innerHTML=="ERRO"+btnC){
            display.innerHTML="0"
            contadorOp = false
        }
    })
})

separador.addEventListener("click", (evt)=>{
    const btnC = evt.target.innerHTML
    if(!contador){
        display.innerHTML+=btnC
        contador = true
    }else{}
    if(display.innerHTML=="ERRO"+btnC){
        display.innerHTML="0"
        contador = false
    }
})

res.addEventListener("click",(evt)=>{
    contador = false
    contadorOp = false
    try{
        const resultado = eval(display.innerHTML)
        display.innerHTML=resultado
    }catch(error){
        display.innerHTML="ERRO"
    }
})