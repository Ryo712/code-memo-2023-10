// db.jsサンプルコード

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
/*オブジェクトを取得して、接続エラーと接続が開かれたときのコールバックを設定します。接続エラーが発生すると、
エラーメッセージがコンソールに表示され、接続が開かれたときには成功メッセージが表示されます。*/

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});
/*itemSchemaという名前のMongooseスキーマを定義します。スキーマはMongoDBコレクション内のドキュメント構造を定義します。
このスキーマはnameとdescriptionという2つのフィールドを持つドキュメントを表します。*/
const Item = mongoose.model('Item', itemSchema);

module.exports = {
  Item,
};
/*mongoose.model()メソッドを使用してItemという名前のMongooseモデルを作成します。モデルはMongoDBのコレクションと1対1に対応し、
特定のスキーマを使用してデータの読み書きを行うためのオブジェクトです。*/