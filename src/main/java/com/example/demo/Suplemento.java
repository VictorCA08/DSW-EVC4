package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Suplemento {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private Double precio;

	private Suplemento() {}

	public Suplemento(String nombre, Double precio) {
		this.nombre = nombre;
		this.precio = precio;
	}

	

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Suplemento suplemento = (Suplemento) o;
		return Objects.equals(id, suplemento.id) &&
			Objects.equals(nombre, suplemento.nombre) &&
			Objects.equals(precio, suplemento.precio);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, precio);
	}


	@Override
	public String toString() {
		return "Suplemento{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", precio='" + precio + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

}