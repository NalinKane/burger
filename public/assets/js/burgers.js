document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", addNewBurger);
}

async function addNewBurger(e) {
  const burgerInput = document.querySelector("#newBurger");
  e.preventDefault();

  const burger = {
    burger_name: burgerInput.value
  };

  try {
    await createBurger(burger);
    location.reload();
  } catch (err) {
    console.error("Error: ", err);
  }
}

function createBurger(burger) {
  return fetch("/api/burgers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(burger)
  });
}
