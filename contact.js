document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    emailjs.send(
      "service_iihewcc",
      "template_zxp2izl",
      {
        from_name: name,
        from_email: email,
        message: message,
      }
    )
    .then(() => {
      alert(`✅ Thank you, ${name}! Your message has been sent.`);
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Please try again later.");
    });
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  }
});
