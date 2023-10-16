// pages/api/menus.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../app/db';
import Menu from '../../app/models/Menu';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const menus = await Menu.find();
      res.status(200).json(menus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).end();
  }
};
/* if (req.method === 'GET'):リクエストのメソッドが GET メソッドであるかどうかを確認します。GET メソッドのリクエストが対象となります。*/
/*メニューデータを取得するために、Menu モデルを使用してデータベースからデータを検索しています。
await Menu.find() は Mongoose を使用してデータベースから全てのメニューアイテムを取得します。*/
/* elseブロックGET メソッド以外のリクエストに対しては、ステータスコード 405 (Method Not Allowed) を返し、リクエストを拒否します。*/
