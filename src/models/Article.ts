import * as mongoose from 'mongoose';
var Schema = mongoose.Schema;


export type ArticleModel = mongoose.Document & {
    id:number,
    _creator:string,
    title:string,
    time: Date,
    content:string,
    meta: {
        look: number,
        favs: number,
        comments: number,
    }
}


var articleSchema = new Schema({
    id: { type: Number, unique: true },
    _creator: { type: String, ref: 'User' },
    title: String,
    time: Date,
    content: String,
    meta: {
        look: Number,
        favs: Number,
        comments: Number,
    }
});

var Article = mongoose.model('Article', articleSchema);
export default Article;