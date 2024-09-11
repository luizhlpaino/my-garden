import { DataSource } from "typeorm";

export const MongoDBDataSource = new DataSource({
    type: "mongodb",
    host: process.env.MONGODB_HOST,
    port: +process.env.MONGODB_PORT || 27017,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE
});