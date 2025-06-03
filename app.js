

let paloStatus = [{'letter':'','num':0 }]

document.addEventListener('click', (event)=>{
    let rawPalo = event.target
    if (rawPalo.tagName == "path"){
        // TODO: el array se rellena al cargar el programa, NO al hacer click
        // let letter=rawPalo.className.baseVal.replace('cls-','')        
        // const palo = {
        //     letter: letter,
        //     num: rawPalo.getAttribute("d")
        // }
        // if(!paloStatus.includes(palo)){
        //     paloStatus.push(palo)
        // }
        // console.table(paloStatus) 
        
        const botones = document.getElementById('botones')
        if(botones){
            botones.classList.add('seve')
        }
        // TODO: gestionar como ocultar botone

    }

})
