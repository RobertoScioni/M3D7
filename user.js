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

const fillcard = (vector) => {
	console.log("vector", vector)
	let user = vector.filter(
		(usr) => usr.name === decodeURIComponent(location.search).substring(1)
	)
	console.log("user", user)
	document.querySelector("#name").innerText = user.name
}

window.onload = async () => {
	await loadusers()
	fillcard(users)
}
