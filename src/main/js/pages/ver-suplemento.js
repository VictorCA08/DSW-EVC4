const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerSuplementoPage = () => {

    let { id } = useParams();
    const [suplemento, setSuplemento] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/suplementos/' + id
        }).done(response=>setSuplemento(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Suplemento</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{suplemento.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerSuplementoPage;