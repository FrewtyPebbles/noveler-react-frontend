
import { useEffect, useState } from "react"
import style from "./login.module.scss"
import { Pages } from "../../App"

interface Props {
	activePage: Pages,
	setActivePage: React.Dispatch<React.SetStateAction<Pages>>
}
enum Page {
  login,
  register
}

export default function LoginPage(props:Props) {
  const [page, changePage] = useState(Page.login);
  return (
    <>
      <div className={style.rootroot}>
        <div className={style.root}>
          {function(){
            switch (+page) {
              case Page.login:
                return(
                  <>
                    <Login items={props}></Login>
                    Dont have an account? <a className={style.changePage} onClick={()=> changePage(Page.register)}>Register</a>
                  </>
                );
              case Page.register:
                return(
                  <>
                    <Register></Register>
                    Already have an account? <a className={style.changePage} onClick={()=> changePage(Page.login)}>Login</a>
                  </>
                );
            
              default:
                break;
            }
          }()}
        </div>
      </div>
    </>
  )
}

export function Login(props:any) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginData, setLoginData] = useState<any>([]);

  useEffect(() => {
    localStorage.setItem("token", loginData["token"])
    if (loginData["valid"]) {
      props.items.setActivePage(Pages.profile)
    }
  }, [loginData])
  

  const onSubmit = (e:any) => {
    const fetchData = async () => {
      let data = await fetch("http://127.0.0.1:5000/login", {
        headers: {'Authorization': 'Basic ' + btoa(Email + ":" + Password)},
        method:"post"
      })
      let json_data = await data.json()
      console.log(json_data)
      setLoginData(json_data)
    }
    fetchData();
  }

  return (
    <form action="#" className={style.form}>
      <div>
        <label htmlFor="Email">Email </label>
        <input type="text" name="Email" onInput={(e:any) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="Password">Password </label>
        <input type="text" name="Password" onInput={(e:any) => setPassword(e.target.value)}/>
      </div>
      <input type="button" value={"Login"} onClick={onSubmit}/>
    </form>
  )
}

export function Register() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [loginData, setLoginData] = useState([]);


  const onSubmit = async (e:any) => {
    const fetchData = async () => {
      let input_data = new FormData();
      input_data.append("Email", Email);
      input_data.append("Password", Password);
      input_data.append("FName", FirstName);
      input_data.append("LName", LastName);
      let data = await fetch("http://127.0.0.1:5000/register", {
        body:input_data,
        method:"post"
      })
      let json_data = await data.json()
      console.log(json_data)
      setLoginData(json_data)
    }
    await fetchData();
  }

  return (
    <form action="#" className={style.form}>
      <div>
        <label htmlFor="Email">Email </label>
        <input type="text" name="Email" onInput={(e:any) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="Password">Password </label>
        <input type="text" name="Password" onInput={(e:any) => setPassword(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="FName">First Name </label>
        <input type="text" name="FName" onInput={(e:any) => setFirstName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="LName">Last Name </label>
        <input type="text" name="LName" onInput={(e:any) => setLastName(e.target.value)}/>
      </div>
      
      <input type="button" value={"Register"} onClick={onSubmit}/>
      
    </form>
  )
}

