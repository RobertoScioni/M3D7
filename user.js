let users = []

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

const addressStringArray = (vector) => {
	let tmp = {}
	Object.assign(tmp, vector)
	delete tmp.geo
	return Object.values(tmp).toString()
}

const fillcard = (vector) => {
	console.log("vector", vector)
	let user = vector.filter(
		(usr) => usr.name === decodeURIComponent(location.search).substring(1)
	)[0]
	console.log("usr")
	document.querySelector("#name").innerText = user.name
	document.querySelector("#username").innerText = user.username
	document.querySelector("#Email").innerText = user.email
	document.querySelector("#address").innerText = addressStringArray(
		user.address
	)
}

window.onload = async () => {
	await loadusers()
	fillcard(users)
}
