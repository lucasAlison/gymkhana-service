import { createConnection } from 'typeorm';

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "gymkhana",
  entities: [
    process.env.ENTITIES_PATH as string
  ],
  migrations: [
    process.env.MIGRATION_PATH as string
  ],
  cli: {
    migrationsDir: process.env.MIGRATION_CLI_PATH as string
  }
});


/*

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));
  __dirname + "/entity/*.(js|ts)"
*/
