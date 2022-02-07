const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // toDoForm을 변수 선언해놨기에 여기서 querySeletor를 해서 자식요소 input요소를 찾을 수도 있다.
//              = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos=[]; // toDoList를 작성할 때마다 localStore에 저장하기 위해 toDos[]에 입력한 data를 push.

function saveToDos(){ // localStore에 저장 , localStore에는 text만 저장가능. 
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // array형태로 저장하고 싶기에 JSON.stringify를 사용하여 string으로 형변환한 후 object처럼 보이는 text를 저장함.
}


function deleteToDo(event){

    const li = event.target.parentElement; // delete 하고 싶은 element
    li.remove(); // element제거
    // console.log(typeof li.id);
    /**
     *   ** HTML에서 id => 숫자를 가질 수 없다.
     *      즉, String만 가능.
     *      id="12345" 했다 하더라도 string으로 받아들인다.
     *      typeof X => string
     *       
     */
    toDos = toDos.filter(toDoId => toDoId.id !== Number(li.id)); // parseInt()보다 Number()가 속도가 더 빠름.
    saveToDos();

    console.dir(event.target.parentElement.innerText); // event 발생한 타켓 text를 가져온다.
    // console.log(event.target); => button
    // console.dir(event.target); => event발생 target을 알 수 있음. parentNode:li(부모), parentElement: event발생한 element의 부모.
    // HTML Element는 모두 하나 이상의 property를 가지고 있다.
}


function paintToDo(newTodo){
    //console.log("good",newTodo) => good ~~ ,를 사용하면 이렇게 문자열 연결된것 처럼 출력된다.
    const li = document.createElement("li"); 
    li.id = newTodo.id; // **li의 요소 id가 추가된다.
    const span = document.createElement("span");
    span.innerText = newTodo .text;
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);

    /**
     *  appendChild(): 객체만 추가 가능.
     *  append(): 문자열도 추가가능. => document.getElementById("good").append("input the String");
     * 
     *  append(): JavaScript함수
     *  appendChild(): DOM함수
     *  
     */
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj={
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);    
    paintToDo(newTodoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos){ // localStorage의 key를 지울경우 null로 나오기 때문..  = if(savedToDos !== null)
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // refresh할때마다 상단에서 array를 초기화했기 때문에 기존것이 저장안됨. localStorage가 null이 아니면 내부값을 array에 저장.
    // parsedToDos.forEach(sayHello);  -> function sayHello(item){} 
    // parsedToDos.forEach((item))  =>console.log("this item :",item)); // arrow function
    parsedToDos.forEach(paintToDo); // function paintToDo() JS가 array item을 forEach해서 매개변수로 넣어줌. -> painToDo를 parsedToDos배열의 요소마다 실행.
    

}

/**
 *  filter: true만 모아서 새로운 array에 저장.
 *  const friut = [{name:"apple",color:"red"},{name:"banana",color:"yellow"}];
 *  friut.filter(item=> item.name !== 'apple');
 *  => [{name:"banana",color:"yellow"}]
 * 
 *  const score = [90,100,80,97,99]
 *  function testing(item){return item > 95;}
 *  score.filter(testing) => [100,97,99]
 * 
 */
