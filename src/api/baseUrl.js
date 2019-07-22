export default function getUrl(){
	return getQueryString('useMockApi') ? 'http://localhost:3001/': '/';
}


function getQueryString(name, url){
	if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");//eslint-disable-line  no-useless-escape
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
