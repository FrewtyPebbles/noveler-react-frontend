import style from "./Projects.module.scss"

import ProjectCard from "./ProjectCard"

interface Props {
	project_list:{Project:{ID:number, Name:string}, Managers:{Email:string, FName:string}[]}[]
}

export default function ProjectList(props:Props) {
	console.log(props)
  return (
	<div className={style.ListRoot}>
		<h1>Projects</h1>
		{props.project_list?.map((data, Id)=> <ProjectCard key={Id} Project={data.Project} Managers={data.Managers}/>)}
	</div>
  )
}
