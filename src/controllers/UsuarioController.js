
const {Pool} = require('pg');

const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'uigv',
    port: '5432'
});

exports.getUsuarios = async (req, res, next) => {
    try {
        const response = await pool.query('SELECT *  FROM USERS');

        res.status(200).json(response.rows);

        // res.send(response.rows);
    } catch (error) {
        console.log(error);
    }
}


exports.storeUsuario = async(req, res) =>{
    try {
        const {name, email} = req.body;

        const response = await pool.query('INSERT INTO USERS(name, email) VALUES( $1, $2)', [name, email]);

        res.send('Usuario Creado ✔️');
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const response = await pool.query('SELECT *  from Users where id = $1', [id]);
        res.send(response.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.updateUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        const response = await pool.query('UPDATE USERS SET name=$1 WHERE id=$2', [name, id]);
        res.status(200).json({mensaje: 'Usuario Actualizado ✔️'});
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await pool.query('DELETE FROM USERS WHERE id=$1', [id]);
        res.status(200).json({mensaje: 'Usuario ELIMINADO ✔️'});
    } catch (error) {
        console.log(error);
    }
}
