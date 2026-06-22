import mysql from 'mysql2/promise.js';

async function conectar() {
    const conexao = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '14113',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    return conexao;
}

    async function executarQuery(query, params=[]) {
     const conexao = await conectar();

    try {
        const resultado = await conexao.execute(query, params);
        return resultado[0];
    }
    catch (error) {
        console.log('Erro ao Executar Query:', error);
        throw error;
    }
    finally {
        await conexao.end();
    }    
}
    export { executarQuery };