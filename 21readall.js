import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

const getAllItems = async(req, res) => {
    try{
        await connectDB()
        const allItems = await ItemModel.find()
        return res.status(200).json({message: "アイテム読み取り成功（オール）", allItems: allItems})
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗（オール）"})
    }
}
//await connectDB():この行は、connectDB関数を呼び出してMongoDBデータベースに接続しようとしています。awaitキーワードを使用して非同期でデータベース接続を待機しています。データベースへの接続が確立されると、次の処理に進みます。
//const allItems = await ItemModel.find():この行は、ItemModelを使用してMongoDB内のすべてのアイテムを検索しています。ItemModel.find()は、MongoDB内のドキュメントを検索するためのMongooseのメソッドで、非同期でデータベースからデータを取得します。検索結果はallItems変数に格納されます。
//catch(err):エラーハンドリングのためのtry...catchブロックを開始します。前述の処理でエラーが発生した場合、エラーオブジェクトがerrとしてキャッチされます。//
export default getAllItems