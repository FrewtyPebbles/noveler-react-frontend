import style from "./Projects.module.scss"


interface Props {
	Project:{Name:string, ID:number}
	Managers:{Email:string, FName:string}[]
}

export default function ProjectCard(props:Props) {
  return (
	<div className={style.CardRoot}>
		<div className={style.Name}>{props.Project.Name}</div>
		<div className={style.Header}>
			
			<div className={style.Managers}>
				<div>Managers</div> 
				<ul>
					{props.Managers.map((data, Id) => 
					<li key={Id}>
						<div className={style.ManagerName}>{data.FName} <span className={style.ToolTip}>{data.Email}</span></div>
					</li>)}
				</ul>
			</div>
		</div>
		
	</div>
  )
}
