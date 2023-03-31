import { h } from 'preact'

import { StateUpdater } from "preact/hooks"
import style from "./header.module.scss"
import { Pages } from "../App"

interface Props {
	activePage: Pages,
	setActivePage: StateUpdater<Pages>
}

export default function Navbar(props:Props) {
	
	return (
	<nav class={style.navbar}>
		<div class={style.logowrapper}>
			Noveler
		</div>
		<div class={style.inner}>
			<div
				class={style.navbutton}
				onClick={() => props.setActivePage(Pages.editor)}
				active-page={props.activePage==Pages.editor}
			>Edit</div>
			<div 
				class={style.navbutton}
				onClick={() => props.setActivePage(Pages.browse)}
				active-page={props.activePage==Pages.browse}
			>Find</div>
			<div 
				class={style.navbutton}
				onClick={() => props.setActivePage(Pages.profile)}
				active-page={props.activePage==Pages.profile}
			>User</div>
			<div 
				class={style.navbutton}
				onClick={() => props.setActivePage(Pages.login)}
				active-page={props.activePage==Pages.login}
			>{localStorage.getItem("token") == "undefined" ? "Login" : "Logout"}</div>
		</div>
	</nav>
  )
}
