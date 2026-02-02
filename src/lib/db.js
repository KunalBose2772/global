import mysql from 'mysql2/promise';

let pool;

export function getDb() {
    if (!pool) {
        pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'globalwebify',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }
    return pool;
}

export async function query(sql, params) {
    const db = getDb();
    const [rows] = await db.execute(sql, params);
    return rows;
}
