const { Pool } = require("pg");

const conexion = new Pool({
    host: "localhost",
    port: 5432,
    database: 'gestion_equipos',
    user: 'postgres',
    password: 'postgres'
});

module.exports = conexion;