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
        Connection.query(query,values,(err,res)=>{
            if (err) return reject(err)
            resolve(res)
        })
    })
}