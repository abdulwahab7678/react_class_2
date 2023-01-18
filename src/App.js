import { Component } from "react"
import UserForm from "./components/UserForm"
import UserLists from "./components/UserLists"
export default class App extends Component {

  constructor() {
    super()
    // initial state
    this.state = {
      users: []
    }
  }

  addUser = (newUser) => {
    this.setState({ users: [...this.state.users, newUser]})
  }

  componentWillMount() {
    // alert("component will mount")
  }
  componentDidMount() {
    // alert("Component mounted")
  }
  // shouldComponentUpdate() {
  //   if ( this.state.age < 25 ) {
  //     return true
  //   }
  //   return false
  // }
  componentWillUpdate() {
    console.log('updating a state')
  }
  componentDidUpdate() {
    console.log("after updateing a state")
  }
  render() {
    let { users } = this.state
    return (
      <div className="app">
        <div className="grid">
          <div className="col-1">
            <UserForm addUser={this.addUser} />
          </div>
          <div className="col-2">
            <UserLists list={users} />
          </div>
        </div>
      </div>
    )
  }
}

// name export
// export default function App() {
//       return (
//         <div>
//           <HelloWorld />
//         </div>
//       )
//     }
// export function App2(){
//   return (
//     <div>
//       App2
//     </div>
//   )
// }
