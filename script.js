let servers=[]

function addServer(){

let name=document.getElementById("name").value
let link=document.getElementById("link").value

let data={name,link}

servers.push(data)

renderServers()

}

function renderServers(){

let container=document.getElementById("servers")

container.innerHTML=""

servers.forEach(server=>{

container.innerHTML+=`
<div class="server">

<h3>${server.name}</h3>

<a href="${server.link}" target="_blank">Join Server</a>

</div>
`

})

}

function searchServer(){

let search=document.getElementById("search").value.toLowerCase()

let container=document.getElementById("servers")

container.innerHTML=""

servers.filter(s=>s.name.toLowerCase().includes(search)).forEach(server=>{

container.innerHTML+=`
<div class="server">

<h3>${server.name}</h3>

<a href="${server.link}" target="_blank">Join Server</a>

</div>
`

})

}
