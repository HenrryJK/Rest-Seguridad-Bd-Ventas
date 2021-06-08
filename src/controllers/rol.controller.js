import { response } from 'express'
import {pool} from '../database'

export const readAllRoles = async(req , res ) => {
    try {
        const response = await pool.query('select * from rol');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}

export const readRol = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from rol where idrol=$1' ,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const delRol = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from rol where idrol=$1', [id]);
        return res.status(200).json(
        `El Rol ${id} ha sido eliminado correctamente...!`
        );

    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const updateRol = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ nomrol } = req.body;
        await pool.query('update rol set nomrol=$1  where idrol=$2', [nomrol, id]);
        return res.status(200).json(
            `El Rol  ${ id } ha sido modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createRol = async(req, res)=>{
    try {
        const{ nomrol} = req.body;
        
        await pool.query('insert into rol(nomrol) values($1)', [nomrol]);
        return res.status(200).json(
            `El Rol  ${ nomrol } ha sido creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}