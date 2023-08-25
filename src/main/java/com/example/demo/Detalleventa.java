package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Detalleventa {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_venta")
    private Venta venta;

    @ManyToOne()
    @JoinColumn(name = "id_suplemento")
    private Suplemento suplemento;

    private int cantidad;
	public Detalleventa(Integer cantidad) {
		this.cantidad = cantidad;
	}


    public Detalleventa() {}

    public Detalleventa(Venta venta, Suplemento suplemento, int cantidad) {
        this.venta = venta;
        this.suplemento = suplemento;
		this.cantidad = cantidad;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	public Suplemento getSuplemento() {
		return suplemento;
	}

	public void setSuplemento(Suplemento suplemento) {
		this.suplemento = suplemento;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}


}
