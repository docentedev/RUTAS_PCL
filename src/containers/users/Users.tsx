import { useState } from "react"
import { Link } from "react-router-dom"

const Users = () => {
    const [users, setUsers] = useState<any>([])
    const [name, setName] = useState('')

    const handlerChangeName = (event: any) => {
        const value = event.target.value
        setName(value)
    }

    const handlerUserFormSubmit = (event: any) => {
        event.preventDefault()
        const user = {
            name,
            id: new Date().getTime(),
        }
        const newList = [...users, user]
        setUsers(newList);
    }

    return (
        <div>
            <form onSubmit={handlerUserFormSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handlerChangeName}
                />
                <button>Crear</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <Link to={`/users/${user.id}?name=${user.name}`}>Ver</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users