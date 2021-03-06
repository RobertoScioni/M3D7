/**
 * @constant config
 * @description here i'll put any recurrently changing paramater of the template
 */
const config = {
	title: "hello,Strive!", ///that as of now means only the title but i belive this object will grow soon
}
/**
 *  this will contain all the users
 */
let users = []

/**
 * initialize the page
 *
 */

/**
 *	filter users by ui parameters
 */

const handleFilter = (vector) => {
	//console.log("vector", vector)
	const query = document.querySelector("#filter").value
	const qTarget = document.querySelector("#qTarget").value
	out = vector.filter((element) =>
		element[qTarget].toLowerCase().includes(query.toLowerCase())
	)
	console.log("result", out)
	printUsers(out)
	return out
}

const addressStringArray = (vector) => {
	console.log(
		vector.map((user) => {
			const address = user.address
			delete address.geo
			return Object.values(address).toString()
		})
	)
}
const loadusers = async () => {
	try {
		const loaddata = await fetch(`https://jsonplaceholder.typicode.com/users `)
		const users_data = await loaddata.json()
		users = users_data
		printUsers(users)
		return users_data
	} catch (err) {
		console.log(err)
	}
}   const sortUsers =()=>{
	
	 let buttonSort = document.createElement('button')
	 let container = document.querySelector('#UI')
	 buttonSort.id = 'buttonSort'
	 buttonSort.innerHTML='sort users'
	 buttonSort.className="btn btn-secondary mt-3"

	 buttonSort.onclick=()=>{
		extractNames().sort()

	 }
	 container.appendChild(buttonSort)


   }
 
  
 
const extractNames = (vector) => {
	return vector.map((user) => user.name)
}

const printUsers = (vector) => {
	const names = extractNames(vector)
	const target = document.querySelector("#userList")
	target.innerHTML = ""
	names.forEach((name) => {
		let user = document.createElement("li")
		user.classList.add("list-group-item")
		user.innerText = name
		target.appendChild(user)
	})
}


window.onload = async () => {
	document.title = config.title
	document.querySelector("#mainMenu").innerHTML = config.title
	loadusers()
	sortUsers()
	document
		.querySelector("#filter")
		.addEventListener("keyup", () => handleFilter(users))
}
