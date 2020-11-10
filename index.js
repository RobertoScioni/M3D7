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
/**
 *
 */
const handleFilter = (vector) => {
	console.log("vector", vector)
	const query = document.querySelector("#filter").value
	const qTarget = document.querySelector("#qTarget").value
	return vector.filter((element) => element[qtarget].includes(query))
	/*console.log(
		"result",
		vector.filter((element) => element[qTarget].includes(query))
	)*/
}

window.onload = async () => {
	document.title = config.title
	document.querySelector("#mainMenu").innerHTML = config.title
	loadusers()
  
	document
		.querySelector("#filter")
		.addEventListener("keyup", () => handleFilter(users))
}
