export default function getUrl(){
	let inDevelopemnt = window.location.hostname === "localhost";
	return inDevelopemnt? "http://localhost:3001/": "/";
}
