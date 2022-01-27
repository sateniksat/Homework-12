function validation(input) {
  if (input.length < 3) {
    return false;
  } else {
    return true;
  }
}
function cleanred() {
  document
    .querySelectorAll(".red-border")
    .forEach((element) => element.classList.remove("red-border"));
  document.querySelectorAll(".red-text").forEach((element) => {
    if (!element.classList.contains("unvisible")) {
      element.classList.add("unvisible");
    }
  });
}
function clicksubmit(e) {
  e.preventDefault();
  cleanred();
  const fname = document.getElementById("fname");
  const fnamevalue = document.getElementById("fname").value;
  const lname = document.getElementById("lname");
  const lnamevalue = document.getElementById("lname").value;
  if (!validation(fnamevalue)) {
    document.querySelector(".fname-v").classList.remove("unvisible");
    fname.classList.add("red-border");
  }
  if (!validation(lnamevalue)) {
    document.querySelector(".lname-v").classList.remove("unvisible");
    lname.classList.add("red-border");
  }
  if (validation(fnamevalue) && validation(lnamevalue)) {
    document.querySelector(".modal").classList.remove("d-none");
    setTimeout(() => {
      document.querySelector("form").submit();
    }, 7999);
  }
}
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("d-none");
  document.querySelector("form").submit();
  cleanred();
});
document.querySelector(".modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("d-none");
  document.querySelector("form").submit();
  cleanred();
});
