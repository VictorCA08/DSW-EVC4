const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { suplementos: [], ventas: [] };
	}
	componentDidMount() {


		client({ method: 'GET', path: '/api/suplementos' }).done(response => {
			this.setState({ suplementos: response.entity._embedded.suplementos });
		});

		client({ method: 'GET', path: '/api/bandas' }).done(response => {
			this.setState({ ventas: response.entity._embedded.ventas });
		});

	}
	render() {
		return (
			<>
				<h1>Suplemetos Deportivos</h1>
				<div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Suplementos" emoji="💪" />
						<SuplementoList suplementos={this.state.suplementos} />
						<Link to="/nuevo-suplemento">Nuevo Suplemento</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Ventas" emoji="💰" />
						<VentaList ventas={this.state.ventas} />
						<Link to="/nueva-venta">Nueva Venta</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class SuplementoList extends React.Component {
	render() {
		const suplementos = this.props.suplementos.map(suplemento =>
			<Suplemento key={suplemento._links.self.href} suplemento={suplemento} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{suplementos}
				</tbody>
			</table>
		)
	}
}
class VentaList extends React.Component {
	render() {
		const ventas = this.props.ventas.map(venta =>
			<Venta key={venta._links.self.href} venta={venta} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Toal</th>
						<th>Acciones</th>
					</tr>
					{ventas}
				</tbody>
			</table>
		)
	}
}

class Suplemento extends React.Component {
	render() {
		const id = this.props.suplemento._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.suplemento.nombre}</td>
				<td>
					<Link to={"/ver-suplemento/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class Venta extends React.Component {
	render() {
		const id = this.props.venta._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.venta.nombre}</td>
				<td>
					<Link to={"/ver-venta/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;