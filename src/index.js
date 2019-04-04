const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchData()
});

function fetchData() {
  const url = "https://randomuser.me/api/"
  fetch(url)
  .then(response => response.json())
  .then(json => displayData(json))
}


function displayData(json) {

  let person = json["results"][0]
  let pFullName = json["results"][0]["name"]["first"] + " " + json["results"][0]["name"]["last"]
  let pEmail = json["results"][0]["email"]
  let pStreet = json["results"][0]["location"]["street"]
  let pCity = json["results"][0]["location"]["city"]
  let pState = json["results"][0]["location"]["state"]
  let pPostcode = json["results"][0]["location"]["postcode"]
  let pPhone = json["results"][0]["phone"]
  let pCell = json["results"][0]["cell"]
  let pDob = json["results"][0]["dob"]["date"]

  let fullName = document.getElementById('fullname')
  let email = document.getElementById('email')
  let street = document.getElementById('street')
  let city = document.getElementById('city')
  let state = document.getElementById('state')
  let postcode = document.getElementById('postcode')
  let phone = document.getElementById('phone')
  let cell = document.getElementById('cell')
  let dob = document.getElementById('date_of_birth')

  fullName.innerText = pFullName
  email.innerText = pEmail
  street.innerText = pStreet
  city.innerText = pCity
  state.innerText = pState
  postcode.innerText = pPostcode
  phone.innerText = pPhone
  cell.innerText = pCell
  dob.innerText = pDob
}
