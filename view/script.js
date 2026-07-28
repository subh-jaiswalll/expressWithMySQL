const form=document.getElementById("form");
const users=document.getElementById("users");

const API="http://localhost:3000/users";

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const user={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

phone:document.getElementById("phone").value

};

await axios.post(API,user);

form.reset();

loadUsers();

});


async function loadUsers(){

users.innerHTML="";

const res=await axios.get(API);

res.data.forEach(user=>{

const li=document.createElement("li");

li.innerHTML=`
${user.name} -
${user.email} -
${user.phone}

<button onclick="deleteUser(${user.id})">
Delete
</button>
`;

users.appendChild(li);

});

}

async function deleteUser(id){

await axios.delete(`${API}/${id}`);

loadUsers();

}

loadUsers();