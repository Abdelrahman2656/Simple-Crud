import { connect } from "mongoose";


export async function dbconnection  (){
    await connect('mongodb://localhost:27018/mvc1').then(()=>{
        console.log('db connected successfully');
        
    }).catch(()=>{
        console.log('failed to connected to db');
        
    })
}
