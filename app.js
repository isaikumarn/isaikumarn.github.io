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

    var btn = document.getElementById('rec_btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        
        var rec_name = document.getElementById("rec_name").value;
        var rec_email = document.getElementById("rec_email").value;
        var rec_subject = document.getElementById("rec_subject").value;
        var rec_message = document.getElementById("rec_message").value;
        var rec_body = '<hr><b>Name:</b> ' + rec_name + '<br><b>Email:</b> ' + rec_email + '<br><b>Subject: </b>' + rec_subject + '<br><hr>'+ '&nbsp;' + rec_message.replace(/\n/g, '<br>') +'<hr>';
    
        // Reset error messages
        var errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function (element) {
            element.textContent = '';
        });
    
        // Validate name
        if (rec_name.trim() === '') {
            document.getElementById('rec_name_error').textContent = 'Please enter your name.';
            return;
        }
    
        // Validate email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(rec_email)) {
            document.getElementById('rec_email_error').textContent = 'Invalid email format.';
            return;
        }
    
        // Validate subject
        if (rec_subject.trim() === '') {
            document.getElementById('rec_subject_error').textContent = 'Please enter a subject.';
            return;
        }
    
        // Validate message
        if (rec_message.trim() === '') {
            document.getElementById('rec_message_error').textContent = 'Please enter a message.';
            return;
        }
    
        // Send the email
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "dnd.onlymail@gmail.com",
            Password: "79CA55B926FC08B1D7F092335D8EB4C55ECB",
            To: 'isaikumarn@gmail.com',
            From: 'dnd.onlymail@gmail.com',
            Subject: rec_subject,
            Body: rec_body
        }).then(function (message) {
            alert('Mail Sent Successfully!');
            
            // Reset the form data
            document.getElementById("rec_form").reset();
        });
    });
    
})();
