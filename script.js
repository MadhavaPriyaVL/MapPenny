/* 
   HAMBURGER MENU
   */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav_links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


/* CLOSE MOBILE MENU
   AFTER CLICKING A LINK
   */

const links = document.querySelectorAll(".navlinks a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});


/*  BUDGET CALCULATOR */

const budgetForm = document.getElementById("budget-form");

budgetForm.addEventListener("submit", function (event) {

  event.preventDefault();

  // Get income
  const income =
    Number(document.getElementById("mon-income").value) || 0;

  // Get expenses
  const rent =
    Number(document.getElementById("rent").value) || 0;

  const food =
    Number(document.getElementById("food").value) || 0;

  const transport =
    Number(document.getElementById("transport").value) || 0;

  const education =
    Number(document.getElementById("education").value) || 0;

  const otherExpenses =
    Number(document.getElementById("other-expenses").value) || 0;


  // Calculate total expenses
  const totalExpenses =
    rent +
    food +
    transport +
    education +
    otherExpenses;


  // Calculate remaining balance
  const remainingBalance =
    income - totalExpenses;


  // Display results
  document.getElementById("total-expenses").textContent =
    "₹" + totalExpenses.toFixed(2);

  document.getElementById("remaining-balance").textContent =
    "₹" + remainingBalance.toFixed(2);

});


/* 
   SAVINGS GOAL
    */

const savingsForm = document.getElementById("savings-form");

savingsForm.addEventListener("submit", function (event) {

  event.preventDefault();

  // Get values
  const goal =
    document.getElementById("goal").value;

  const targetAmount =
    Number(document.getElementById("target-amt").value) || 0;

  const amountSaved =
    Number(document.getElementById("amt-saved").value) || 0;


  // Calculate remaining amount
  let remainingAmount =
    targetAmount - amountSaved;

  if (remainingAmount < 0) {
    remainingAmount = 0;
  }


  // Calculate percentage
  let progressPercentage = 0;

  if (targetAmount > 0) {
    progressPercentage =
      (amountSaved / targetAmount) * 100;
  }

  // Maximum 100%
  if (progressPercentage > 100) {
    progressPercentage = 100;
  }


  // Display results
  document.getElementById("goal-name-result").textContent =
    goal || "Not set";

  document.getElementById("target-amt-result").textContent =
    "₹" + targetAmount.toFixed(2);

  document.getElementById("amt-saved-result").textContent =
    "₹" + amountSaved.toFixed(2);

  document.getElementById("remaining-balance-result").textContent =
    "₹" + remainingAmount.toFixed(2);

  document.getElementById("progress-percent-result").textContent =
    progressPercentage.toFixed(1) + "%";


  // Update progress bar
  document.getElementById("savings-progress").value =
    progressPercentage;

});


/* 
   CONTACT FORM
   */

const contactForm =
  document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  alert("Thank you! Your message has been submitted.");

  contactForm.reset();

});

/* 
   DARK / LIGHT MODE
    */

const themeToggle = document.getElementById("theme-toggle");

/* Check saved theme when page loads */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "Light Mode";
} else {
  themeToggle.textContent = "Dark Mode";
}


/* Change theme when button is clicked */

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    themeToggle.textContent = "Light Mode";

    localStorage.setItem("theme", "dark");

  } else {

    themeToggle.textContent = "Dark Mode";

    localStorage.setItem("theme", "light");

  }

});
