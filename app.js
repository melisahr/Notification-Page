const unRead = document.querySelectorAll('.unread');
const total= document.querySelector('.total');
const mark = document.getElementById('mark');

total.innerText =unRead.length;

unRead.forEach((message) => {
    message.addEventListener('click', () => {
      message.classList.remove('unread');
      const newUnreads = document.querySelectorAll('.unread');
        total.innerText = newUnreads.length;
    })
  })

 mark.addEventListener('click', ()=>{
    unRead.forEach((message)=>{
        message.classList.remove('unread');
    })
    const newUnreads = document.querySelectorAll('.unread');
    total.innerText = newUnreads.length;
  })