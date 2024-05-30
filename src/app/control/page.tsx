"use client"

import { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Cliente = {
  id_clientes: number;
  cedula: number;
  apellidos: string;
  nombre: string;
  telefono: number;
  direccion: string;
};

type Sede = {
  id_sede: number;
  nombre_sede: string;
  direccion: string;
  telefono: number;
};

type Item = {
  id_items: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

type Orden = {
  id_ordenes: number;
  idCliente: number;
  idSede: number;
  idItem: number;
  estado: number;
  fechaCreacion: string;
  cliente: Cliente;
  sede: Sede;
  item: Item;
};

const Control = () => {
  const [ordenes, setOrdenes] = useState<Orden[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/orden')
      .then(res => res.json())
      .then(data => setOrdenes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
        <h1 className="text-4xl text-black">Control de Ordenes</h1>
        <div className="p-4">
            <table className="min-w-full border-2 bg-white border-gray-100 text-black">
                <thead>
                <tr>
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Estado</th>
                    <th className="py-2 px-4 border">Fecha Creación</th>
                    <th className="py-2 px-4 border">Nombre Cliente</th>
                    <th className="py-2 px-4 border">Apellidos Cliente</th>
                    <th className="py-2 px-4 border">Teléfono Cliente</th>
                    <th className="py-2 px-4 border">Dirección Cliente</th>
                    <th className="py-2 px-4 border">Nombre Sede</th>
                    <th className="py-2 px-4 border">Dirección Sede</th>
                    <th className="py-2 px-4 border">Teléfono Sede</th>
                    <th className="py-2 px-4 border">Nombre Item</th>
                    <th className="py-2 px-4 border">Precio Item</th>
                    <th className="py-2 px-4 border">Cantidad Item</th>
                </tr>
                </thead>
                <tbody>
                {ordenes.length !== 0 ?
                
                    (ordenes.map((orden) => (
                        <>
                        <tr key={orden.id_ordenes}>
                            <td className="py-2 px-4 border">{orden.id_ordenes}</td>
                            <td className="py-2 px-4 border">{orden.estado}</td>    
                            <td className="py-2 px-4 border">{orden.fechaCreacion}</td>           
                            <td className="py-2 px-4 border">{orden.cliente.nombre}</td>          
                            <td className="py-2 px-4 border">{orden.cliente.apellidos}</td>       
                            <td className="py-2 px-4 border">{orden.cliente.telefono}</td>         
                            <td className="py-2 px-4 border">{orden.cliente.direccion}</td>         
                            <td className="py-2 px-4 border">{orden.sede.nombre_sede}</td>       
                            <td className="py-2 px-4 border">{orden.sede.direccion}</td>         
                            <td className="py-2 px-4 border">{orden.sede.telefono}</td>     
                            <td className="py-2 px-4 border">{orden.item.nombre}</td>       
                            <td className="py-2 px-4 border">{orden.item.precio}</td>     
                            <td className="py-2 px-4 border">{orden.item.cantidad}</td>
                        </tr>
                        </>
                    ))
                    ) : (
                    <tr>
                        <td className="py-2 px-4 border" colSpan={13}>Cargando...</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </>
  );
};

Control.getLayout = (page: React.ReactNode) => page;

export default Control;
