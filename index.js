new Typed("#typed-text", {
  strings: ["Hi! I am Gohar Nawaz Niazi, a Passionate Web Developer."],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 3000,
  loop: true,
  showCursor: false,
});

// Success message
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (response.ok) {
      form.reset();
      document.getElementById("thank-you-message").style.display = "block";
    } else {
      alert("Oops! Something went wrong.");
    }
  });
});
