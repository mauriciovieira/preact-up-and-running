import { h } from 'preact'
import User from './User'

const users = [
    {
        image: "https://avatars3.githubusercontent.com/u/95258?v=3&s=460",
        name: "Mauricio Vieira"
    },
    {
        image: "https://avatars3.githubusercontent.com/u/19439353?v=3&s=460",
        name: "Elizabeth Ramos"
    },
]
function App () {
    return (
        <div class="app">
            {users.map(user => <User {...user} key={user.name} />)}
        </div>
    )
}

export default App