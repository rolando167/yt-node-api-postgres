# yt-node-api-postgres
Con faztCode se creó un CRUD con DB-Postgresql y NODEJS Api Rest


<hr/>
const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'igv',
    port: '5432'
});
