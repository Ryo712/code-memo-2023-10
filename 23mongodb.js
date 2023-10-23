import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB");
    }catch (error) {
     console.log(error);

    }
};

export default connectMongoDB;

/*接続には process.env.MONGODB_URI 環境変数の値が使用されます。環境変数は通常、MongoDBデータベースのURI（Uniform Resource Identifier）を含んでおり、
console.log():これによってアプリケーションはどのデータベースに接続するかを指定します。
MongoDBへの接続が成功した場合、コンソールに "Connected to MongoDB" というメッセージが表示されます。
catch (error):もし接続に問題が発生した場合、エラーメッセージがコンソールに表示されます。
catch ブロックは接続エラーの詳細を表示し、エラーをトラッキングします。*/