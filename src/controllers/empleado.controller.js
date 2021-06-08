import { response } from 'express'
import {pool} from '../database'

export const readAllEmpleados = async(req , res ) => {
    try {
        const response = await pool.query('select * from empleado');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}

export const readEmpleado = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from empleado where idempleado=$1' ,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const delEmpleado = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from empleado where idempleado=$1', [id]);
        return res.status(200).json(
        `El Empleado ${id} ha sido eliminado correctamente...!`
        );

    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const updateEmpleado = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ nombre , dni , telefono } = req.body;
        await pool.query('update empleado set nombre=$1 , dni=$2 , telefono=$3  where idempleado=$2', [nombre , dni , telefono]);
        return res.status(200).json(
            `El Empleado  ${ id } ha sido modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createEmpleado = async(req, res)=>{
    try {
        const{  nombre , dni , telefono} = req.body;
        
        await pool.query('insert into empleado(nombre , dni , telefono) values($1,$2, $3)', [ nombre , dni , telefono]);
        return res.status(200).json(
            `El Rol  ${ nombre } ha sido creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}