// JavaScript code to open the default email client with a new email
document.querySelector('#Director').addEventListener('click', function() {
    // Replace 'yourEmailAddress' with the actual Gmail address
    var emailAddress = 'director@nitjsr.ac.in';
    var subject = "Concern Regarding Increased Mess Fee and Pending Fee Remissions
";
    var body = `
Respected Director Sir,

This email is to express our growing concern regarding the recent increase in the mess fee. 

Many students are already facing significant financial difficulties.  The sudden hike in the mess fee is overwhelming for those of us without scholarships or fee remissions. Moreover, several students who qualify for fee remission have not yet received it, which adds to their financial strain.

We kindly request your immediate intervention to address this issue and reduce the fee to a more reasonable amount. 

Thank you.

 `;
    
    
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
    // Open the default email client
    window.location.href = mailtoLink;
});


document.querySelector('#Dean').addEventListener('click', function() {
    // Replace 'yourEmailAddress' with the actual Gmail address
    var emailAddress = 'dean.sw@nitjsr.ac.in';
    var subject = "Concern Regarding Increased Mess Fee and Pending Fee Remissions
";
    var body = `
Respected Dean SW Sir,

This email is to express our growing concern regarding the recent increase in the mess fee. 

Many students are already facing significant financial difficulties.  The sudden hike in the mess fee is overwhelming for those of us without scholarships or fee remissions. Moreover, several students who qualify for fee remission have not yet received it, which adds to their financial strain.

We kindly request your immediate intervention to address this issue and reduce the fee to a more reasonable amount. 

Thank you.
 `;
    
    
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
    // Open the default email client
    window.location.href = mailtoLink;
});
