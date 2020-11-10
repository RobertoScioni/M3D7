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

let users=[]

window.onload=()={
    user=window.URLSearchParams
    console.log(user)
}