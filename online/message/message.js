const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText(e) {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }
  
  input.value = '';
}

function sendEnterText(e){
  if(e.key === 'Enter' && !e.shiftKey){
    sendMyText();
    e.preventDefault();
  }
}

send.addEventListener('click', sendMyText);
input.addEventListener('keypress',sendEnterText);

// chatBox
let messageDiv1 =  document.createElement('div');
messageDiv1.classList.add('bubble','friend-bubble');

let messageDiv2 =  document.createElement('div');
messageDiv2.classList.add('bubble','friend-bubble');

let messageDiv3 =  document.createElement('div');
messageDiv3.classList.add('bubble','friend-bubble');

setTimeout(()=>{
  messageDiv1.innerText = '자니?';
  chatBox.append(messageDiv1);
},1500);

setTimeout(()=>{
  messageDiv2.innerText = '자나보네..ㅎ';
  chatBox.appendChild(messageDiv2);
},3000);

setTimeout(()=>{
  messageDiv3.innerText = '잘자 :-)';
  chatBox.appendChild(messageDiv3);
},4500);
