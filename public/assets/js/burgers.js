document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", addNewBurger);
  window.addEventListener("click", function(e) {
    if (!e.target.matches(".devour-burger")) return;
    e.preventDefault();
    eatBurger(e);
  });
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

async function eatBurger(e) {
  e.preventDefault();
  const butgerId = e.target.getAttribute("data-id");
  await devourBurger(butgerId);
  location.reload();
}

// SERVICES

function createBurger(burger) {
  return fetch("/api/burgers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(burger)
  });
}

function devourBurger(id) {
  return fetch(`/api/burgers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  });
}
