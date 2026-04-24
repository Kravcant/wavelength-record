import data from './data.json'
import './Header.css'

export default function Header() {
    return (
        <div id="header">
            <h1>{data.label}</h1>
            <h2><i>"{data.tagline}"</i></h2>
            <p>Founded in {data.founded} at {data.city}</p>
        </div>
    )
}