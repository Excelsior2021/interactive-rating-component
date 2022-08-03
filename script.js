const ratings = document.querySelectorAll(".rating")
const submit = document.getElementById("submit")
const sub1 = document.getElementById("sub1")
const sub2 = document.getElementById("sub2")
const chosen = document.getElementById("chosen")

ratings.forEach(rating => {
  rating.addEventListener("click", () => {
    removeActive()
    rating.classList.add("active")
    chosen.innerHTML = rating.innerHTML
  })
})

function removeActive() {
  ratings.forEach(rating => {
    rating.classList.remove("active")
  })
}


submit.addEventListener("click", () => {
  if (!chosen.innerHTML) {
    alert("Please select a rating!")
    return
  }
  sub1.classList.add("disable")
  sub2.classList.remove("disable")
})
