import { response } from 'express'
import {pool} from '../database'
export const readAllDetalles = async(req , res ) => {
    try {
        const response = await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}

export const readDetalle = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from detalle where iddetalle=$1' ,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const delDetalle = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle=$1', [id]);
        return res.status(200).json(
        `El Detalle ${id} ha sido eliminado correctamente...!`
        );

    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const updateDetalle = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ precio, cantidad  , idproducto ,idventa } = req.body;
        await pool.query('update detalle set precio=$1 , cantidad=$2, idproducto=$3 , idventa=$4  where iddetalle=$5', [ precio, cantidad , idproducto, idventa , id]);
        return res.status(200).json(
            `El detalle  ${ id } ha sido modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createDetalle = async(req, res)=>{
    try {
        const{ precio, cantidad  , idproducto ,idventa} = req.body;
        await pool.query('insert into detalle( precio, cantidad, idproducto, idventa) values($1,$2, $3,$4)', [ precio, cantidad ,idproducto , idventa ]);
        return res.status(200).json(
            `El Detalle ha sido creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}