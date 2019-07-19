import './index.css';
import { getUsers, deleteUser } from "./api/userApi.js";

getUsers().then(result=>{
	let userBody = '';
	result.forEach(user=>{
		userBody +=`<tr>
				<td><a href="#" data-id=${user.id} class="deleteUser">Delete</a></td>
				<td>${user.id}</td>
				<td>${user.firstName}</td>
				<td>${user.email}</td>
			</tr>
		`;
		global.document.getElementById('userBody').innerHTML = userBody;
	});

	const deleteLinks = document.getElementsByClassName('deleteUser');
	Array.from(deleteLinks, link =>{
		link.onclick = (event)=>{
			event.preventDefault();
			const element = event.target;
			deleteUser(element.attributes['data-id'].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		};
	});
});


