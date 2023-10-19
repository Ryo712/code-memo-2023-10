import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const ReadAllItems = (props) => {
  return (
    <div>
      <Head><title>Next Market</title></Head>
      <div className="grid-container-in">
      {props.allItems.map(item => //propsから受け取った商品一覧データ（allItems）をマップして各商品を表示しています。//
        <Link href={`/item/${item._id}`} key={item._id}>
        <a className="card">
          <Image src={item.image} width="750px" height="500px" alt="item-image"/>
          <div className="texts-area">
          <h2>¥{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description.substring(0, 80)}...</p> 
          </div>
        </a>
        </Link>
        )}
        </div>
        </div>  
  ) 
 }
//商品の価格、タイトル、および短い説明が<h2>、<h3>、および<p>要素内で表示されています。価格は¥{item.price}として表示されています。//
export default ReadAllItems

export const getServerSideProps = async() => {
//getServerSidePropsはNext.jsの関数で、サーバーサイドでデータを取得し、コンポーネントに渡すために使用されます。この関数内では、fetchを使用して商品データを取得し、propsオブジェクトにデータを詰めて返しています。//
  const response = await fetch("http://localhost:3000/api/item/readall")   
    const allItems = await response.json()
  return{
    props:allItems
  }
}