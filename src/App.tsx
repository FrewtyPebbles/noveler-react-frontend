import { useState } from 'react'
import Navbar from './header/Navbar'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'

export enum Pages {
  login,
  editor,
  profile,
  browse
}

export default function App() {
  const [activePage, setActivePage] = useState(Pages.login)

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage}/>
      <div style={{padding:"30px"}}></div>
      {
        function() {
          switch (+activePage) {
            case Pages.login:
              //login page
              return(
                <>
                  <LoginPage  activePage={activePage} setActivePage={setActivePage}></LoginPage>
                </>
              )
            case Pages.profile:
              //login page
              return(
                <>
                  <ProfilePage></ProfilePage>
                </>
              )
            case Pages.editor:
              //login page
              return(
                <>

                </>
              )
            case Pages.browse:
              //login page
              return(
                <>
                
                </>
              )
            default:

              return(<></>)
          }
        }()
      }
    </>
  )
}
