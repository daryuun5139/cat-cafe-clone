import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="">
      {/* トップページ画像１つ目 */}
      <div className="relative my-[180px] flex h-[680px] items-center justify-center">
        <img
          src="/top-page/top-page-1.jpg"
          height="0"
          width="0"
          alt="top-page-image1"
          className="h-[680px] w-full object-cover"
        ></img>
        <div className="absolute top-0 flex w-[85%]">
          {/* メッセージ部分 */}
          <div className="absolute right-0 top-[40px] text-xl font-medium text-black">
            <p className="my-10 leading-8 tracking-tight">
              おしゃべり時間と、猫。
              <br /> 2人の時間と、猫。
              <br /> ひとり時間と、猫。
            </p>
            <p className="my-10 leading-8 tracking-tight">
              いつもの時間を猫と過ごすと、
              <br />
              いつもの時間がちょっと優しい。
            </p>
            <p className="my-10 leading-8 tracking-tight">
              猫カフェMARONで、
              <br />
              気ままに、たっぷりと、
              <br />
              猫といる幸せに包まれてください。
            </p>
          </div>
          <Link
            href=""
            className="absolute right-0 top-[460px] flex items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
          >
            もっと見る
            <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">➝</span>
          </Link>
        </div>
      </div>
      {/* トップページ画像２つ目 */}
      <div className="relative mb-[150px] flex h-[400px] items-center justify-center">
        <div className="absolute top-0 flex w-[85%]">
          <img
            src="/top-page/top-page-2.jpg"
            height="0"
            width="0"
            alt="top-page-image2"
            className="absolute right-0 top-0 z-10 h-[400px] w-[580px] object-cover"
          ></img>
          <div className="absolute left-[100px] top-[60px] flex h-[400px] w-[580px] flex-col bg-[#FFF8EF] pl-20 pt-16">
            <h2 className="mb-8 text-4xl leading-[50px] text-[#756659]">
              初めて
              <br />
              ご利用される方へ
            </h2>
            <p className="text-lg leading-8">
              猫カフェMARONは
              <br />
              初めての方でも安心して楽しめる猫カフェです。
            </p>
            <Link
              href=""
              className="absolute right-[100px] top-[290px] flex items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
            >
              詳しくはこちら
              <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                ➝
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* トップページ画像３つ目 */}
      <div className="relative mb-[150px] flex h-[400px] items-center justify-center">
        <div className="absolute top-0 flex w-[85%]">
          <img
            src="/top-page/top-page-3.jpg"
            height="0"
            width="0"
            alt="top-page-image3"
            className="absolute left-0 top-0 z-10 h-[400px] w-[580px] object-cover"
          ></img>
          <div className="absolute right-[100px] top-[60px] flex h-[400px] w-[580px] flex-col bg-[#FFF8EF] pl-20 pt-12">
            <h2 className="mb-8 text-4xl leading-[50px] text-[#756659]">
              猫カフェMARONの
              <br />
              過ごし方
            </h2>
            <p className="text-lg leading-8">
              猫と遊ぶのはもちろん、ゆっくり本を読んだり、大切な
              <br />
              人とおしゃべりしたり…
              <br />
              過ごし方は人それぞれ。
            </p>
            <Link
              href=""
              className="absolute right-[50px] top-[300px] flex items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
            >
              詳しくはこちら
              <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                ➝
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* トップページ画像４つ目(ビデオゾーン) */}
      <div className="mb-[180px] flex items-center justify-center">
        <img
          src="/top-page/top-page-4.jpg"
          height="0"
          width="0"
          alt="top-page-image4"
          className="h-[540px] w-[960px] object-cover"
        ></img>
      </div>
      {/* トップページ画像５つ目(帯ゾーン) */}
      <div className="mb-[200px] flex items-center justify-center">
        <img
          src="/top-page/top-page-5.jpg"
          height="0"
          width="0"
          alt="top-page-image5"
          className="h-[340px] w-full object-cover"
        ></img>
      </div>
      {/* ショップリストゾーン */}
      <div className="mb-[200px] flex h-[780px] justify-center">
        <div className="relative flex w-[85%] flex-col items-center">
          {/* タイトル */}
          <h2 className="absolute left-0 top-[-50px] z-10 text-8xl font-light text-[#756659]">
            SHOPLIST
          </h2>
          <div className="flex justify-between">
            {/* 関東リンク */}
            <Link href="" className="relative h-[530px]  w-[22%] rounded-3xl">
              <img
                src="/top-page/shoplist-1.jpg"
                height="0"
                width="0"
                alt="shoplist-1"
                className="h-full w-full rounded-3xl object-cover "
              ></img>
              <div className="absolute bottom-0 flex h-[20%] w-full items-center justify-center rounded-b-3xl bg-[#756659]/60 text-4xl font-medium text-white">
                <p>関東</p>
                <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1.5px]">
                  ➝
                </span>
              </div>
            </Link>
            {/* 中部リンク */}
            <Link href="" className="relative my-9 h-[530px] w-[22%] rounded-3xl">
              <img
                src="/top-page/shoplist-2.jpg"
                height="0"
                width="0"
                alt="shoplist-2"
                className="h-full w-full rounded-3xl object-cover "
              ></img>
              <div className="absolute bottom-0 flex h-[20%] w-full items-center justify-center rounded-b-3xl bg-[#756659]/60 text-4xl font-medium text-white">
                <p>中部</p>
                <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1.5px]">
                  ➝
                </span>
              </div>
            </Link>
            {/* 近畿リンク */}
            <Link href="" className="relative h-[530px]  w-[22%] rounded-3xl">
              <img
                src="/top-page/shoplist-3.jpg"
                height="0"
                width="0"
                alt="shoplist-3"
                className="h-full w-full rounded-3xl object-cover "
              ></img>
              <div className="absolute bottom-0 flex h-[20%] w-full items-center justify-center rounded-b-3xl bg-[#756659]/60 text-4xl font-medium text-white">
                <p>近畿</p>
                <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1.5px]">
                  ➝
                </span>
              </div>
            </Link>
            {/* 九州リンク */}
            <Link href="" className="relative my-9 h-[530px] w-[22%] rounded-3xl">
              <img
                src="/top-page/shoplist-4.jpg"
                height="0"
                width="0"
                alt="shoplist-4"
                className="h-full w-full rounded-3xl object-cover "
              ></img>
              <div className="absolute bottom-0 flex h-[20%] w-full items-center justify-center rounded-b-3xl bg-[#756659]/60 text-4xl font-medium text-white">
                <p>九州</p>
                <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1.5px]">
                  ➝
                </span>
              </div>
            </Link>
          </div>
          <Link
            href=""
            className="my-16 flex w-[450px] items-center justify-center rounded-full bg-[#756659] py-7 text-2xl text-white"
          >
            行きたいお店を探す
            <span className="ml-2 rounded-full border-[1px] border-white px-3 py-2">➝</span>
          </Link>
        </div>
      </div>
      {/* ニュース、メディアゾーン */}
      <div className="mb-[100px] flex h-[1000px] justify-center bg-[#FFF8EF]">
        <div className="flex w-[85%] flex-col ">
          <div className="mb-6 flex">
            {/* ニュースエリア */}
            <div className="relative flex h-[650px] w-[50%] flex-col pr-3">
              <h2 className="absolute left-0 top-[-50px] text-8xl font-light text-[#756659]">
                NEWS
              </h2>
              <div className="mt-28">
                <div className="flex h-[140px] flex-col items-start justify-center border-t-[1px] border-[#AFAFAF]">
                  <p className="text-md font-semibold">2023.08.14</p>
                  <Link href="" className="text-lg">
                    台風7号接近に伴う臨時休業のお知らせ ※追記あり
                  </Link>
                </div>
                <div className="flex h-[140px] flex-col items-start justify-center border-t-[1px] border-[#AFAFAF]">
                  <p className="text-md font-semibold">2023.08.12</p>
                  <Link href="" className="text-lg">
                    ばんばんざいさんのYoutubeで使用されました
                  </Link>
                </div>
                <div className="flex h-[140px] flex-col items-start justify-center border-y-[1px] border-[#AFAFAF]">
                  <p className="text-md font-semibold">2023.08.07</p>
                  <Link href="" className="text-lg">
                    お盆期間の営業についてのお知らせ
                  </Link>
                </div>
                <div className="mt-10 flex justify-end">
                  <Link
                    href=""
                    className=" flex w-[32%] items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
                  >
                    ニュース一覧
                    <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                      ➝
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* メディアエリア */}
            <div className="relative  flex h-[650px] w-[50%] pr-3">
              <h2 className="absolute left-0 top-[-50px] z-10 text-8xl font-light text-[#756659] ">
                MEDIA
              </h2>
              <div className="mt-28">
                <div className="flex h-[140px] flex-col items-start justify-center border-t-[1px] border-[#AFAFAF]">
                  <Link href="" className="text-lg">
                    テレビ朝日ドラマ「警視庁・捜査一課長season6」第9話で猫カフェモカラウンジ新宿店が使用されました！
                  </Link>
                </div>
                <div className="flex h-[140px] flex-col items-start justify-center border-t-[1px] border-[#AFAFAF]">
                  <Link href="" className="text-lg">
                    Fischer'sさんのYoutubeチャンネルで紹介されました！
                  </Link>
                </div>
                <div className="flex h-[140px] flex-col items-start justify-center border-y-[1px] border-[#AFAFAF]">
                  <Link href="" className="text-lg">
                    みちょぱさん・ノブコブ吉村さんのYoutubeチャンネルで紹介されました！
                  </Link>
                </div>
                <div className="mt-10 flex justify-end">
                  <Link
                    href=""
                    className=" flex w-[32%] items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
                  >
                    紹介事例一覧
                    <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                      ➝
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* その他リンクエリア */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex h-24 w-[35%] items-center justify-center border-2 border-[#AFAFAF]">
              <div>準備中 CAT CAFE MARON</div>
            </div>
            <div className="flex h-24 w-[35%] items-center justify-center border-2 border-[#AFAFAF]">
              <div>準備中 CAT CAFE MARON</div>
            </div>
            <div className="flex h-24 w-[35%] items-center justify-center border-2 border-[#AFAFAF]">
              <div>準備中 CAT CAFE MARON</div>
            </div>
            <div className="flex h-24 w-[35%] items-center justify-center border-2 border-[#AFAFAF]">
              <div>準備中 CAT CAFE MARON</div>
            </div>
          </div>
        </div>
      </div>
      {/* カンパニー、リクルートゾーン */}
      <div className="mb-[150px] flex h-[600px] justify-center">
        <div className="flex w-[85%] flex-col ">
          <div className="flex w-full items-center justify-evenly">
            {/* カンパニーエリア */}
            <Link
              href=""
              className="relative flex h-[320px] w-[49%] flex-col items-center justify-center"
            >
              <img
                src="/top-page/company.jpg"
                height="0"
                width="0"
                alt="company-image"
                className="h-full w-full object-cover "
              ></img>
              <div className="absolute top-0 flex h-full w-full flex-col px-7 py-5 text-white">
                <h2 className="my-5 text-7xl font-extralight">COMPANY</h2>
                <p className="mb-7 pl-2 text-lg">
                  猫カフェMARONの運営会社の情報や沿革をご覧いただけます。
                </p>
                <p className="absolute right-0 top-[200px] flex w-[32%] items-center justify-center font-light">
                  会社概要
                  <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1px]">
                    ➝
                  </span>
                </p>
              </div>
            </Link>
            {/* リクルートエリア */}
            <Link
              href=""
              className="relative flex h-[320px] w-[49%] flex-col items-center justify-center"
            >
              <img
                src="/top-page/recruit.jpg"
                height="0"
                width="0"
                alt="recruit-image"
                className="h-full w-full object-cover "
              ></img>
              <div className="absolute top-0 flex h-full w-full flex-col px-7 py-5 text-white">
                <h2 className="my-5 text-7xl font-extralight">RECRUIT</h2>
                <p className="mb-7 pl-2 text-lg">
                  猫カフェMOCHAでは大好きな猫と一緒に、
                  <br />
                  素敵なサービスをお届けするスタッフを募集しています。
                </p>
                <p className="absolute right-0 top-[200px] flex w-[32%] items-center justify-center font-light">
                  採用情報
                  <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1px]">
                    ➝
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="flex w-full items-center justify-center">
            {/* 安全への取り組みエリア */}
            <Link
              href=""
              className="relative mx-2 mt-4 flex h-[270px] w-full items-center justify-center"
            >
              <img
                src="/top-page/for-safety.jpg"
                height="0"
                width="0"
                alt="for-safety"
                className="h-full w-full object-cover "
              ></img>
              <div className="absolute top-0 flex h-full w-full flex-col px-7 py-5 text-white">
                <h2 className="my-5 text-5xl font-extralight">安心・安全への取り組み</h2>
                <p className="mb-7 pl-2 text-lg">
                  猫カフェMARONではお客様に安心して猫と過ごしていただくため、猫の安全と健康を第一に考えた取り組みを行っております。
                </p>
                <p className="absolute right-[-50px] top-[180px] flex w-[32%] items-center justify-center font-light">
                  詳しくはこちら
                  <span className="ml-2 rounded-full border-[1px] border-white px-2 py-[1px]">
                    ➝
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* コンタクトゾーン */}
      <div className="flex h-[450px] justify-center bg-[#FFF8EF]">
        <div className="relative flex w-[70%] flex-col text-[#756659]">
          {/* タイトル */}
          <h2 className="absolute top-[-30px] text-6xl font-light ">CONTACT</h2>
          {/* 各セクション */}
          <div className="mt-20 flex items-center justify-evenly font-semibold">
            {/* メディアセクション */}
            <div className="flex flex-col items-center ">
              <Image
                height={100}
                width={100}
                alt="media-icon"
                src="/media-icon.svg"
                className="m-6"
              />
              <p className="mb-5">
                取材・メディア掲載など、
                <br />
                各種お問い合わせはこちら
              </p>
              <Link
                href=""
                className="flex items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
              >
                お問い合わせ
                <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                  ➝
                </span>
              </Link>
            </div>
            {/* 不動産セクション */}
            <div className="flex flex-col items-center">
              <Image
                height={100}
                width={100}
                alt="media-icon"
                src="/shop-icon.svg"
                className="m-6"
              />
              <p className="mb-5">
                ディベロッパー・不動産業者の方など、
                <br />
                物件情報はこちら
              </p>
              <Link
                href=""
                className="flex items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
              >
                店舗物件募集
                <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                  ➝
                </span>
              </Link>
            </div>
            {/* フランチャイズセクション */}
            <div className="flex flex-col items-center">
              <Image height={100} width={100} alt="media-icon" src="/FC-icon.svg" className="m-6" />
              <p className="mb-11 ">FC加盟のお問い合わせはこちら</p>
              <Link
                href=""
                className="flex items-center justify-center rounded-full border-[1px] border-[#77695C] bg-white px-4 py-2 text-lg font-light"
              >
                FC募集
                <span className="ml-2 rounded-full border-[1px] border-[#77695C] px-2 py-[1px]">
                  ➝
                </span>
              </Link>
            </div>
          </div>
          {/* その他セクション */}
          <div className="mt-10 flex flex-col items-center text-sm font-semibold">
            <p>
              ※お店の利用方法や猫について知りたい方は「
              <span>
                <Link href="" className="text-lg text-[#E58669]">
                  よくあるご質問
                </Link>
              </span>
              」をご覧ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
