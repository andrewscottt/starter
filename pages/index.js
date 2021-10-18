import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style={{
      backgroundImage: "url('background.jpg')",
      width: "100%",
      backgroundRepeat: 'repeat-y',
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Head>
        <title>以及科技</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p style={{
          fontSize: '2.0em',
          display: 'inline',
          textAlign: 'center'
        }}>以及科技是一个服务于多变生活工作的健康智能家居品牌</p>

        <h1 style={{
          fontSize: '3em'
        }}>IT's COMING</h1>
        <img src="qrcode.svg" alt="扫描二维码获取详情" />
        <h1 style={{
          fontSize: '3em'
        }}>JOIN US!</h1>
        <h1 style={{
          fontSize: '3em'
        }}>来<p style={{
          display: 'inline',
          color: "black",
          background: "#F8D049",
          fontSize: '100%'
        }}>以及</p>至未来
        </h1>
      </main>
    </div>
  )
}
