import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false, // Importante: deve ser 'true' apenas em desenvolvimento!
        poolSize: 20,
      });

      return dataSource.initialize();
    },
  },
];

// import { DataSource } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: process.env.DB_HOST,
//         port: parseInt(process.env.DB_PORT, 10),
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: false, // Importante: deve ser 'true' apenas em desenvolvimento!
//         poolSize: 20,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];
