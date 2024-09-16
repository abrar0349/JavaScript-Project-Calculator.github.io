let Input = document.getElementById('Inpt');
let buttons = document.querySelectorAll('button')

let string = ""
let arr = Array.from(buttons)

// console.log(Input,buttons,arr)

arr.forEach( button => {
    button.addEventListener('click', e => {

        if(e.target.innerHTML == '='){
            string = eval(string);
            Input.value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            Input.value = string
        }
        else if(e.target.innerHTML == 'DEL'){
            // string = string.substring(0, string.length - 1)
            // console.log(string)
            string = string.slice(0,string.length-1)
            Input.value = string
        }
        else{
        string += e.target.innerHTML
        Input.value = string
        }
        
    })
})

// console.log(eval("2 + 2"))
// console.log("2 + 2")