import './Page.css'
import logo from './assets/react-logo.png'; 

function Page() {
  return(
    <>
      <header>
        <img src={logo} width="40" height="40" alt="React logo" />
      </header>
      <main>
      <ol>
        <li>React is a popular library, so I will be able to
        fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer
        if I know React</li>
      </ol>
      </main>
      <footer>
        <small>© 2025 Zaripov development. All rights reserved.</small>
      </footer>
    </>
  )
}

export default Page