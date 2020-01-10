document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", addNewBurger);
}

function addNewBurger(e) {
  const burgerInput = document.querySelector("#newBurger");
  e.preventDefault();
  console.log(burgerInput.value);

  const data = {
    burger_name: burgerInput.value
  };

  fetch("/api/burgers", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(() => {
      console.log("Added new burger");
      location.reload();
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
