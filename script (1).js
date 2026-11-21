// Theme toggle
document.getElementById("theme").addEventListener("click", function () {
  var r = document.documentElement, t = r.getAttribute("data-theme");
  var dark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.setAttribute("data-theme", dark ? "light" : "dark");
});

// Contact form: opens the visitor's email app
var form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = form.name.value, em = form.email.value, m = form.message.value;
    location.href = "mailto:your-email@example.com?subject=" +
      encodeURIComponent("Message from " + n) +
      "&body=" + encodeURIComponent(m + "\n\n– " + n + " (" + em + ")");
    document.getElementById("sent").textContent = "Thank you, " + n + ". Your email app should open now.";
  });
}