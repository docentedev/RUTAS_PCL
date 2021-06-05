import { useEffect, useState } from 'react';
import {
    useParams,
    useLocation,
    useHistory,
} from 'react-router-dom'

const User = () => {
    const [name, setName] = useState('')
    const location = useLocation()
    const params: any = useParams()
    const history = useHistory()

    useEffect(() => {
        const qs = new URLSearchParams(location.search)
        const n: string = qs.get('name') || '- No existe parametro name -'
        setName(n)
    }, [location])

    const handlerClick = () => {
        history.push('/users')
    }

    return (
        <div>
            Container User {name} {params.userId}<br />
            <button onClick={handlerClick}>Goto Users list</button>
        </div>
    )
}

export default User