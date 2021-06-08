import {Pool} from 'pg'

export const pool = new Pool({
    host: 'ec2-54-224-194-214.compute-1.amazonaws.com', 
    user : 'klxhjjelvijozk',
    password:'d33e3112aff2a04de716e83d127fcfa6658b9d4b22d0d6379288f2095177e75c',
    database: 'db51no8u19mspq',
    port : 5432,
    ssl: {rejectUnauthorized:false}
})
