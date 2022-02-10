const toDoList = document.querySelector('#to-do-list');

function checkToDoList(event){
    if(event.target.classList.contains('item')){
        event.target.classList.toggle('done');
    }
}

toDoList.addEventListener('click',checkToDoList);

const newToDoList = document.createElement('li');
newToDoList.textContent = 'go to home';
newToDoList.classList.add('item');
toDoList.append(newToDoList);

toDoList.children[1].addEventListener('click',function(event){
    event.stopPropagation(); // stopPropagation(): propagation to parents prevent        
    /**
     *  event.preventDefault(): a tag, button tag ... block unique events => (submit, new page going prevent)
     *  this page second to-do-list prevent event, using stopPropagation method. 
     */ 
});
