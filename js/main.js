const enter = document.querySelector('.btnOne');//majority of this code is a mix of different past projects from old students
const listItem = document.querySelector('#list');
const clearAll = document.querySelector('.btnTwo');
const clearComplete = document.querySelector('.btnThree'); 
const form = document.querySelector('#toDoForm')

function enterLi (e) { // create a function that allows user to enter list items 
     e.preventDefault() 
    let item = document.querySelector('#toDo').value// 
    if (item === ' '){
        return 
    }
    let list = document.createElement('li') // list element 
    let text = document.createTextNode(item) // put into HTML text
    list.appendChild(text) // putting the user text into the list
    listItem.appendChild(list) // putting the list created by the user into the UL
    listItem.addEventListener('click', crossOut )
    if (item != ' '){
        form.reset()
    }
}
enter.addEventListener('click', enterLi) 

function clearBtn(){ // create button to clear all items on the list. 

    form.reset() // reset the form so that lines are cleared
    listItem.innerText = '' // to make sure the html also clears the list
}
clearAll.addEventListener('click', clearBtn)


function crossOut(event){
    //toggle status done class on LI elements 
    const liElem = event.target // targeing the event and putting it into a variable
    const classes = liElem.classList; // making my li element into a class list with the varible classes
    const result = classes.toggle('crossOut') // creating class to target css and cross out the list 
    console.log(`li classes = ${result}`)
}

// create a button to clear all completed task and remove it from the list count
function clearCompleteBtn(){
    let completeTask = listItem.querySelectorAll('.crossOut') // grabbing all li's that have been crossed out 
    completeTask.forEach(task => { // creating a loop for each individual task 
        listItem.removeChild(task) // removing each task that has been crossed out
    })
}
clearComplete.addEventListener('click', clearCompleteBtn)