function showForm(){
document.getElementById("server-form").classList.toggle("hidden")
}

function addServer(){

let name=document.getElementById("name").value
let link=document.getElementById("link").value

let server=document.createElement("div")
server.className="server"

server.innerHTML=`
<h3>${name}</h3>
<a href="${link}" target="_blank">Join Server</a>
`

document.getElementById("server-list").appendChild(server)

}
