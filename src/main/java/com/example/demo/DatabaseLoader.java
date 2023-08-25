package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final SuplementoRepository repositoryS;
	private final VentaRepository repositoryV;
	private final DetalleventaRepository repositoryD;

	@Autowired
	public DatabaseLoader(
		SuplementoRepository repositoryS,
		VentaRepository repositoryV,
		DetalleventaRepository repositoryD
		) {
		this.repositoryS = repositoryS;
		this.repositoryV = repositoryV;
		this.repositoryD = repositoryD;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryS.save(new Suplemento("Creatina RC" , 75.2));
		Suplemento Creatina = new Suplemento("Creatina Kevin Levronne", 80.50);
		this.repositoryS.save(Creatina);
		Suplemento Proteina = new Suplemento("Proteina ISO Whey", 150.90);
		this.repositoryS.save(Proteina);

		Venta Venta1 = new Venta(80.50);
		this.repositoryV.save(Venta1);
		Venta Venta2 = new Venta(150.90);
		this.repositoryV.save(Venta2);

		this.repositoryD.save(new Detalleventa(Venta1, Creatina, 2));
		this.repositoryD.save(new Detalleventa(Venta2, Proteina, 1));


	}
}