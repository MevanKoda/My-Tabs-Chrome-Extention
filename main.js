let tabs = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const tabBtn = document.getElementById('tab-btn')
const delBtn = document.getElementById('del-btn')
const outputEl = document.getElementById('output-el')







inputBtn.addEventListener("click", function(){
    console.log('clicked')
    
    render()
})

function render(){
    tabs.push(inputEl.value)
    console.log(tabs)
    let list = ''
    for(i=0; i<tabs.length; i++){
        list += `<li class="mt-2 text-2xl font-bold list-none">
        <a href = "${tabs[i]}" target="_blank">${tabs[i]}</a>
        </li>`
    }
    outputEl.innerHTML = list
    inputEl.value = " "
   
}

delBtn.addEventListener("click", function(){
    tabs = []
    outputEl.innerHTML = tabs
    
})

