async function loadHalls(){

const response=
await fetch(
"http://localhost:5000/api/halls"
);

const halls=
await response.json();

let output="";

halls.forEach(hall=>{

output+=`

<div class="hall-card">

<img src="${hall.image}">

<h2>${hall.hallName}</h2>

<p>📍 ${hall.location}</p>

<p>👥 Capacity:
${hall.capacity}</p>

<p>💰 ₹${hall.price}</p>

<a href="booking.html">

<button>

Book Now

</button>

</a>

</div>

`;

});

document
.getElementById(
"hallContainer"
).innerHTML=output;

}

loadHalls();
function searchHall(){

let input=
document.getElementById("searchBox")
.value.toLowerCase();

let halls=
document.querySelectorAll(".hall-card");

halls.forEach(hall=>{

let name=
hall.querySelector("h3")
.innerText.toLowerCase();

if(name.includes(input))
hall.style.display="block";
else
hall.style.display="none";

});

}
fetch(
"http://localhost:5000/api/halls"
)