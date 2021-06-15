import {Pool} from 'pg'

export const pool = new Pool({
    host: 'ec2-52-2-118-38.compute-1.amazonaws.com', 
    user : 'tgvohbkccqlnws',
    password:'438d7709d140de624020f2d4299d3673755930e11c69f89bf205163d5e4ce419',
    database: 'db7ea1ro54449v',
    port : 5432,
    ssl: {rejectUnauthorized:false}
})
