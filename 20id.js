import connectDB from "../../../utils/database"  
import { ItemModel } from "../../../utils/schemaModels"

const getSingleItem = async(req, res) => {  
    try{
        await connectDB()//await connectDB()を呼び出すことで、データベースへの接続が確立されます。これはMongooseを使用してMongoDBに接続するための関数です。//
        const singleItem = await ItemModel.findById(req.query.id) 
//await ItemModel.findById(req.query.id)を使用して、HTTPリクエストのクエリパラメータから取得したidに一致するアイテムをデータベースから取得しています。//
        return res.status(200).json({message: "アイテム読み取り成功（シングル）", singleItem: singleItem})
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗（シングル）"})
    }
}
export default getSingleItem
/*アイテムの取得に成功した場合、HTTPステータスコード200とともに、JSONレスポンスを返します。
このJSONレスポンスには、「アイテム読み取り成功（シングル）」というメッセージと、取得したアイテムの情報が含まれます。
失敗した場合はHTTPステータスコード400とエラーメッセージを含むJSONレスポンスを返します。*/