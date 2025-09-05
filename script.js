// Contact Form Submission (basic simulation)
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    document.getElementById("formMessage").innerText = "✅ Thank you, " + name + "! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById("formMessage").innerText = "⚠️ Please fill all fields!";
    document.getElementById("formMessage").style.color = "red";
  }
});
