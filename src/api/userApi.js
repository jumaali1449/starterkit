import 'whatwg-fetch'; //create our polyfill for browsers which don't have the fetch api
import  getUrl  from "./baseUrl";


export  function getUsers(){
	return get('users');
}

export function deleteUser(id){
	return del(`users/${id}`);
}

function del(url){
	const baseUrl = getUrl();
	const request = new Request(baseUrl + url, {
		method: 'DELETE'
	});
	return fetch(request).then(onSuccess, onError);
}

function get(url){
	const baseUrl = getUrl();
	return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
	return response.json();
}

function onError(error){
	console.log(error)// eslint-disable-line no-console
}




