import * as mysql from 'mysql';



export const Connection=mysql.createConnection({
    host :'localhost',
    port:3306,

    user:'Lia',
    password:'abcd',
    database:'chirpapp'
})


export const Query= (query,values)=>{
    return new Promise ((resolve,reject)=>{
        Connection.query(query,values,(err,results)=>{
            if (err) throw err;
            resolve(results);
        })
    })
}
import chirps from './chirps';
 // this becomes db object in routes/chirps.js
export default {
    chirps
}