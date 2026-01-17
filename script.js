// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Join Form Submit
const joinForm = document.getElementById("joinForm");
const successMsg = document.getElementById("successMsg");

if (joinForm) {
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;

    successMsg.innerText =
      "✅ Thank you " + name + "! Your request for " + plan + " has been submitted. We will contact you soon.";

    joinForm.reset();
  });
}
