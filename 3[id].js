import connectDB from "../../../../utils/database" 
import { ItemModel } from "../../../../utils/schemaModels"
import auth from "../../../../utils/auth"
//ItemModelはMongoDBのスキーマモデルであり、アイテムデータをデータベースで操作するために使用されます。
const updateItem = async(req, res) => {
//updateItem関数:この関数は、HTTPリクエストを受け取り、アイテムを編集および更新するための処理を行います。
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(req.query.id)
        if(singleItem.email === req.body.email){
            await ItemModel.updateOne({_id: req.query.id}, req.body)
            return res.status(200).json({message: "アイテム編集成功"})
//成功した場合、HTTPステータスコード200と成功メッセージをJSON形式でクライアントに返します。
        }else{
            throw new Error()
        }
    }catch(err){
        return res.status(400).json({message: "アイテム編集失敗"})
    }
}

export default auth(updateItem)
//auth 関数を使用して、このエンドポイントを認証済みのユーザーに対して保護します。認証に失敗すると、エラーメッセージを返します。
