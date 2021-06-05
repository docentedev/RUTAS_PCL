import { useState, useEffect } from 'react'
import {
    Link,
} from 'react-router-dom'
const Menu = () => {
    const [items, setItems] = useState<any>([])
    useEffect(() => {
        setItems([
            { to: '/', name: 'Home'},
            { to: '/users', name: 'Users'},
        ])
    }, [])

    return (
        <nav>
            <ul>
                {items.map((item: any, index: number) => (
                    <li key={index}>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
