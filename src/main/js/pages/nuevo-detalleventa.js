const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoDetalleventaPage = () => {

    let { id } = useParams();

    const [suplementos, setSuplementos] = useState([])
    
    const [idSuplemento, setIdSuplemento] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/detalleventa',
            entity: {
                venta: 'http://localhost:8080/api/ventas/'+id,
                suplemento: 'http://localhost:8080/api/suplementos/'+idSuplemento,
            headers: {'Content-Type': 'application/json'}
            }}).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/suplementos'
        }).done(response=>{
            setSuplementos(response.entity._embedded.suplementos)
        })
    

    },[])

    return (
        <>
            <h1>Nuevo Detalle de Venta</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='suplemento'>Suplemento </label>
                <select name="suplemento" id="suplemento" onChange={(e)=>{setIdSuplemento(e.target.value)}}>
                    {suplementos.map(suplemento => {	
                        const value = suplemento._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{suplemento.nombre}]</option>
                        )
                    })}
                </select><br />
                

                <input type="submit" value="Nuevo Detalle de Venta" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoDetalleventaPage;