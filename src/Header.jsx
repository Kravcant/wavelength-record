import data from './data.json'

export default function Header() {
    return (
        <>
            <h1>{data.label}</h1>
            <p>Founded: {data.founded}</p>
            <p>City: {data.founded}</p>
        </>
    )
}