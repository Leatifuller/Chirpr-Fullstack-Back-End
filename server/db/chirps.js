import * as mysql from 'mysql';
import {Query} from './index.js';
import db from './db';

const all = async ()=> Query('SELECT * from chirps')
const one =async ()=>  Query('SELECT * from chirps WHERE id=?', [id]);

export default {all,one};