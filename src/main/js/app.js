const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoSuplementoPage = require('./pages/nuevo-suplemento');
const VerSuplementoPage = require('./pages/ver-suplemento');
const VerVentaPage = require('./pages/ver-venta');
const NuevoDetalleventaPage = require('./pages/nuevo-detalleventa');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-suplemento/:id', element: <VerSuplementoPage /> },
	{ path: '/nuevo-suplemento', element: <NuevoSuplementoPage /> },
	{ path: '/ver-venta/:id', element: <VerVentaPage /> },
	{ path: '/ver-venta/:id/nuevo-detalleventa', element: <DetalleventaPage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
