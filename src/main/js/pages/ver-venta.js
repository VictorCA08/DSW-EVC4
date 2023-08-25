const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerVentaPage = () => {

    let { id } = useParams();
    const [venta, setVenta] = useState({});
    const [detalleventa, setDetalleventa] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response => setVenta(response.entity))
        client({
            method: 'GET',
            path: '/api/ventas/' + id + '/informacion'
        }).done(response => setDetalleventa(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Venta</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{venta.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Información</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Suplemento</th>
                        <th>Detalle Venta</th>
                    </tr>
                </thead>
                <tbody>

                    {detalleventa.map(detalleventa=>{
                        return(
                            <tr key={detalleventa.ID}>
                                <td>{detalleventa.SUPLEMENTO}</td>
                                <td>{detalleventa.DETALLEVENTA}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-venta/${id}/nuevo-detalleventa`}>Nuevo Detalle de Venta</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerVentaPage;