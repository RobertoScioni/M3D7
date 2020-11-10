/**
 * @constant config
 * @description here i'll put any recurrently changing paramater of the template
 */
const config = {
	title: "hello,Strive!", ///that as of now means only the title but i belive this object will grow soon
}
/**
 * initialize the page
 *
 */

const loadusers = async () => {
	try{
	  const loaddata = await fetch(`https://jsonplaceholder.typicode.com/users `)
	  users_data = await loaddata.json()
	  
	 
	  return users_data;
	}
	  
	  catch(err){
		(console.log(err));
	  }
   
	 
	  
	  
  };
window.onload = () => {
	document.title = config.title
	document.querySelector("#mainMenu").innerHTML = config.title
	loadusers()
}
