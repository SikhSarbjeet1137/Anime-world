// script.js
document.getElementById("checkoutForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const landmark = document.getElementById("landmark").value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    const orderDetails = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Pincode: ${pincode}
        State: ${state}
        Landmark: ${landmark}
        Payment Method: ${paymentMethod}
    `;

    // Send email to owner
    Email.send({
        SecureToken : "your-smtpjs-secure-token", // Get this token from smtpjs.com
        To : 'owner@example.com',
        From : email,
        Subject : "New Order Placed",
        Body : orderDetails
    }).then(
        message => {
            alert("Order placed successfully! Further details will be shared via email.");
            // Reset the form
            document.getElementById("checkoutForm").reset();
        }
    ).catch(
        error => alert("There was an error placing your order.")
    );
});
