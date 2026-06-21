document
.getElementById("loginForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const data={
email:email.value,
password:password.value
};

const response=
await fetch(
"http://localhost:5000/api/users/login",
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

alert(result.message);

});