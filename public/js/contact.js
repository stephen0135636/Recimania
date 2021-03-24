$('form').on('submit', (e)=>{
    e.preventDefault();
  
    const fullname = document.querySelector('#fullname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const text = document.querySelector('#text').value.trim();
  
    const data = {
      fullname,
      email,
      subject,
      text
    }
  
    $.post('/email', data, function(){
      console.log('server recieved our data')
    })
    
  })