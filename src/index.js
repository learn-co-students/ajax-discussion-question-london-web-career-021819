const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

document.addEventListener('click', function(e) {
  if (e.target.className.includes('btn')) {
    getData()
  }
});

function getData () {
  fetch('https://randomuser.me/api/')
    .then (res => res.json())
    .then (json => json.results[0])
    .then (user => presentData(user))
}

function presentData(user) {
  document.querySelector('#profile_picture').src = user.picture.large
  document.querySelector('#fullname').innerText = user.name.title + ' ' + user.name.first + ' ' + user.name.last
  document.querySelector('#email').innerText = user.email;
  document.querySelectorAll('#address h4').forEach (function(el) {
	   el.innerText = user.location[el.id]
  })
  var fullDate = user.dob.date
  var goodDate = fullDate.substring(0,10)
  document.querySelector('#phone').innerText = user.phone;
  document.querySelector('#date_of_birth').innerText = goodDate;
  document.querySelector('#cell').innerText = 'N/a';
  // console.log(user)
}
