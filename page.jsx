export default function AddTopic() {
    return (
    <form className="flex flex-col gap-3">
        <input 
          className="border border-slate-500 px-8 py-2" 
          type="text"
          placeholder="Topic Title"
         />

         <input 
          className="border border-slate-500 px-8 py-2" 
          type="text"
          placeholder="Topic Description"
         />
         
        <button className="bg-green-600 font-bold
        text-white py-3 px-6 w-fit">
        Add Topic
        </button>
    </form>
    );
}
/*type 属性が "text" であるため、テキスト入力が受け付けられます。placeholder 属性は、入力フィールドにプレースホルダーテキスト（初期値）を提供します。*/
/*ボタン要素:フォーム内には、"Add Topic" というテキストを持つ <button> 要素も含まれています。このボタンをクリックすることで、新しいトピックを追加できます。*/