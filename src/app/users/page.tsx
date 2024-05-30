"use client"

import { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Rol = {
  id_rol: number;
  nombre_rol: string;
  descripcion: string;
};

type Usuario = {
  id_usuario: number;
  nombre: string;
  apellido: string;
  usuario: string;
  contrasenia: string;
  id_rol: number;
  rol: Rol;
};

const UserControl = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <h1 className="text-4xl text-black">Control de Usuarios</h1>
      <div className="p-4">
        <table className="min-w-full border-2 bg-white border-gray-100 text-black">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Nombre</th>
              <th className="py-2 px-4 border">Apellido</th>
              <th className="py-2 px-4 border">Usuario</th>
              <th className="py-2 px-4 border">Contraseña</th>
              <th className="py-2 px-4 border">ID Rol</th>
              <th className="py-2 px-4 border">Nombre Rol</th>
              <th className="py-2 px-4 border">Descripción Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length !== 0 ?
              usuarios.map((usuario) => (
                <tr key={usuario.id_usuario}>
                  <td className="py-2 px-4 border">{usuario.id_usuario}</td>
                  <td className="py-2 px-4 border">{usuario.nombre}</td>
                  <td className="py-2 px-4 border">{usuario.apellido}</td>
                  <td className="py-2 px-4 border">{usuario.usuario}</td>
                  <td className="py-2 px-4 border">{usuario.contrasenia}</td>
                  <td className="py-2 px-4 border">{usuario.id_rol}</td>
                  <td className="py-2 px-4 border">{usuario.rol.nombre_rol}</td>
                  <td className="py-2 px-4 border">{usuario.rol.descripcion}</td>
                </tr>
              )) : (
              <tr>
                <td className="py-2 px-4 border" colSpan={8}>Cargando...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

UserControl.getLayout = (page: React.ReactNode) => page;

export default UserControl;
