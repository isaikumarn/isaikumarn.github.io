(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Get the Download CV button element
var downloadBtn = document.querySelector('.btn-con .main-btn');

// Add a click event listener to the button
downloadBtn.addEventListener('click', function(event) {
  // Prevent the default behavior of the button
  event.preventDefault();

  // Create a link element
  var link = document.createElement('a');
  
  // Set the download URL for the file
  link.href = 'My_Resume.pdf';
  
  // Set the file name for the download
  link.download = 'My_Resume.pdf';
  
  // Programmatically trigger the download
  link.click();
});


var btn= document.getElementById('rec_btn');
btn.addEventListener('click',function(e) {
    e.preventDefault()
    var rec_name= document.getElementById("rec_name").value ;
    var rec_email= document.getElementById("rec_email").value ;
    var rec_subject= document.getElementById("rec_subject").value ;
    var rec_message= document.getElementById("rec_message").value ;
    var rec_body = 'Name: ' + rec_name + '<br/> Email: ' + rec_email + '<br/> Subject: ' + rec_subject + '<br/> Message: ' + rec_message;

    
    
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "saikumarn012@gmail.com",
        Password : "A03B9495352D44E321087BB1BB6719FDA5A7",
        To : 'cynophilejourney@gmail.com',
        From : "saikumarn012@gmail.com",
        Subject : rec_subject,
        Body : rec_body
    }).then(
       message => {
            return alert('Mail Sent Successfully!');
        
        }
    );
    // to clear the form data once mail is
    var element = document.getElementById("rec_form");
            element.reset()

})
