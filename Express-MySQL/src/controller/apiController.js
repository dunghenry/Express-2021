const pool = require('../configs/connectDB.js');

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM users");
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
let creatNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    if(!firstName || !lastName || !email || !address){
        return res.status(400).json({
            message: 'missing',
        })
    }
    await pool.execute(`INSERT INTO users(firstName, lastName, email, address) VALUES (?, ? , ?, ?) `, [firstName, lastName, email, address])
    return res.status(200).json({
        message: 'ok',
    })
}

let updateUser = async (req, res) => {
    let {firstName, lastName, email, address, id} = req.body;
    if(!firstName || !lastName || !email || !address || !id) {
        return res.status(400).json({
            message: 'missing',
        })
    }
    await pool.execute(`UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?`, [firstName, lastName, email, address, id])
    return res.status(200).json({
        message: 'ok',
    })
}

let deleteUser = async (req, res) => {
    let id = req.params.id;
    if(!id){
        return res.status(400).json({
            message: 'missing',
        })
    }
    await pool.execute(`DELETE FROM users WHERE id = ?`, [id]);
    return res.status(200).json({
        message: 'ok',
    })
}

module.exports = {
    getAllUsers,
    creatNewUser,
    updateUser,
    deleteUser
}