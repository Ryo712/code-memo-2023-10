
export default function EditTopicForm() {
    return (
    <form className="flex flex-col gap-3"> 
    <input 
      className="border border-slate-500 px-8 py-2" 
      type="text"
      placeholder="Topic Title"
     />
//type: 入力フィールドの種類を指定します。ここではテキストフィールドとして設定されています。
placeholder: ユーザーに入力する内容を示すプレースホルダーテキストが設定されています。
     <input 
      className="border border-slate-500 px-8 py-2" 
      type="text"
      placeholder="Topic Description"
     />
     
    <button className="bg-green-600 font-bold
    text-white py-3 px-6 w-fit">
    Update Topic
    </button>
</form>
    );
}
//このボタンはフォームの送信をトリガーし、トピック情報の更新を要求します。
//className: CSSクラスを指定してボタンのスタイルを設定します。
//Update Topic: ボタンのテキストとして "Update Topic" が表示されます。