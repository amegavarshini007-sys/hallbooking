document
.getElementById("registerForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const data={
name:name.value,
email:email.value,
password:password.value
};

const response=
await fetch(
"http://localhost:5000/api/users/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
}
);

const result=
await response.json();

alert("Registered Successfully");

});