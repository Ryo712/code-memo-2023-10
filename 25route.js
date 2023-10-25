import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
//NextResponse は、Next.jsフレームワークの next/server モジュールから Response オブジェクトをインポートしています。
export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create(title, description);
    return NextResponse.json({message: "Topic Created"}, { status: 201 });
}
/* export async:この関数は、HTTP POSTリクエストを処理するための非同期関数です。
Next.jsでは、HTTPメソッド（GET、POSTなど）に対応する関数を特定の形式でエクスポートすることで、APIエンドポイントを定義します。*/
/**リクエストボディから title と description のデータを取り出しています。リクエストはJSON形式でデータを含むことが期待されています。
 * await キーワードは、非同期操作が完了するまで待機するために使用されます。 */
/**HTTPレスポンスを返します。NextResponse.json メソッドを使用して、JSON形式のレスポンスを返し、ステータスコード201（作成成功）を設定しています。
 * 返されるJSONオブジェクトには、"Topic Created" というメッセージが含まれています。 */