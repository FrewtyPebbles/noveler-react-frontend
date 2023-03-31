import { useLayoutEffect, useState } from 'react'
import { fetch_api } from '../../utility'
import ProjectList from './components/ProjectListComponent/ProjectList'
import Profile from './components/Profile/Profile'

export default function ProfilePage() {
	const [projList, setProjList] = useState<any>([])
	const fetch_data = async () => {
		let data = await fetch_api("http://127.0.0.1:5000/project-list-by-manager",
	  	{})
		let json = await data.json()
		console.log(json);
		
		setProjList(json)
	}
	useLayoutEffect(() => {
		fetch_data()
	}, [])
	
  return (
	<>
		<Profile></Profile>
		<ProjectList project_list={projList["projects"]}/>
	</>
  )
}
