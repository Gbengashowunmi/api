const btn = document.querySelector('.button');
const fact = document.querySelector('.facts');

fetch('api.txt')
.then(function(data){
    return data.json();
})
.then(function(completedata){
    btn.addEventListener('click', function(){
        let number = Math.floor(Math.random() * completedata.length)
        console.log(number);
       let dat = `<h4 class="facts">${completedata[number].text}</h4>`
       fact.innerHTML = dat;
    })
    
})
