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
 * filter users by ui parameters
 * @param {Array} vector contains Objects representing users
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

/**
 * converts all the addresses into strings, drops the geo
 * @param {Array} vector contains Objects representing users
 */

const addressesStringArray = (vector) => {
	console.log(
		vector.map((user) => {
			const address = user.address
			delete address.geo
			return Object.values(address).toString()
		})
	)
}

/**
 * fetches the users
 */
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
}

/**
 * evaluates the alphabetical order of a pair of string
 * @param {String} usr1
 * @param {String} usr2
 * @returns -1 if usr1 precedes usr2 +1 if usr2 precedes usr1 0 otherwhise (same string)
 */
const evaluateStraigth = (usr1, usr2) => usr1.name.localeCompare(usr2.name)

/**
 * evaluates the alphabetical order of a pair of string
 * @param {String} usr1
 * @param {String} usr2
 * @returns -1 if usr2 precedes usr1 +1 if usr1 precedes usr2 0 otherwhise (same string)
 */
const evaluateReverse = (usr2, usr1) => usr1.name.localeCompare(usr2.name)

/**
 * togglable function that evaluates the order of a pair of strings, it alternates between direct alphabetical order and revers alphabetical order
 * @param {String} usr2
 * @param {String} usr1
 */
let evaluate = evaluateStraigth

/**
 * adds a button that sorts and reprints the users
 */
const sortUsers = () => {
	let buttonSort = document.createElement("button")
	let container = document.querySelector("#UI")
	buttonSort.id = "buttonSort"
	buttonSort.innerHTML = "sort users"
	buttonSort.className = "btn btn-secondary mt-3"

	buttonSort.onclick = () => {
		//console.log(extractNames(users).sort())
		printUsers(users.sort((user1, user2) => evaluate(user1, user2)))
		evaluate =
			evaluate === evaluateStraigth ? evaluateReverse : evaluateStraigth
	}
	container.appendChild(buttonSort)
}

/**
 * returns an array of all the names in the objects contained in a array
 * @param {Array} vector
 */
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
		let link = document.createElement("a")
		link.href = `user.html?${name}`
		link.innerText = "details"
		user.appendChild(link)
		target.appendChild(user)
	})
}

/**
 * initialize the page
 */

window.onload = async () => {
	document.title = config.title
	document.querySelector("#mainMenu").innerHTML = config.title
	loadusers()
	sortUsers()
	document
		.querySelector("#filter")
		.addEventListener("keyup", () => handleFilter(users))
}
