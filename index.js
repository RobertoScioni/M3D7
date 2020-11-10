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
		return users_data
	} catch (err) {
		console.log(err)
	}
}
const extractNames = () => {
	return users.map((user) => user.name)
}

window.onload = async () => {
	document.title = config.title
	document.querySelector("#mainMenu").innerHTML = config.title
	loadusers()
	document
		.querySelector("#filter")
		.addEventListener("keyup", () => handleFilter(users))
}
