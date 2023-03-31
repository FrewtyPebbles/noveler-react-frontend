export const fetch_api = async (url:string, json:{[key:string]:any}, content_type = "application/json") => {
	let token:string = localStorage["token"]
	json["token"] = token
	console.log(json);
	return await fetch(url, {
		body:JSON.stringify(json),
		method:"POST",
		headers:{
			"Content-Type": content_type
		}
	})
}