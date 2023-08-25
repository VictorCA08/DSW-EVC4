const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');




const NuevoSuplementoPage = () => {

    const [nombre, setNombre] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/suplementos',
            entity: {nombre: nombre},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Suplemento</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            <input type="submit" value="Nuevo Suplemento" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoSuplementoPage;