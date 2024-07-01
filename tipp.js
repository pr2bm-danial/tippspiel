document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('tipp1').oninput = function(){
        console.log('input changed')
    }
    document.getElementById('tipp2').oninput = function(){
        console.log('input changed')
    }
})
