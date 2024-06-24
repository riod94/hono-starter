import { readFileSync } from "fs";
import Knex from "knex";
import { Model } from "objection";

const dbConfig = (dbName: string) => {
    // Multiple connections
    const fileConnections = readFileSync('./src/storage/database-config.json', 'utf8');
    if (!fileConnections || !dbName) {
        throw new Error('Database connections not found');
    }

    if (!JSON.parse(fileConnections)) {
        throw new Error('Database config not found');
    }

    // Check Connections
    const connections = JSON.parse(fileConnections)?.connections;
    if (!connections || !connections[dbName]) {
        throw new Error('Company not found');
    }

    // Set Connection
    const currentConnection = connections[dbName];

    const knex = Knex({
        client: 'mysql2',
        useNullAsDefault: true,
        connection: {
            host: currentConnection.host || 'localhost',
            port: currentConnection.port || 3306,
            user: currentConnection.user || 'root',
            password: currentConnection.password || '',
            database: currentConnection.database || 'db',
        },
        pool: {
            min: 0,
            max: 1000,
            idleTimeoutMillis: 1000,
        },
        debug: process.env.NODE_ENV === 'development',
    });

    Model.knex(knex);

    return knex;
}

export {
    dbConfig
}