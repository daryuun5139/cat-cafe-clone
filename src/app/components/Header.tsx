import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[1000px] bg-[url('/header/header-big-image.jpg')]">
      <div className="relative mx-auto flex w-[85%] flex-col justify-center">
        {/* 一番上の欄 */}
        <div className="mb-12 mt-5 flex h-[150px] w-full items-center justify-between">
          <div className="flex items-center">
            {/* ヘッダーロゴ画像 */}
            <Link href="" className="flex">
              <Image
                height={80}
                width={180}
                alt="header-logo"
                priority={true}
                src="/header/cat-cafe-logo.png"
              />
            </Link>
            {/* 言語切替ラベル */}
            <div className="flex items-center justify-center rounded-full border-2 border-[#77695C] px-2 py-1 text-[10px] font-semibold text-[#77695C]">
              <p>LANGUAGE</p>
              <span>▼</span>
            </div>
          </div>
          {/* ハンバーガーメニュー */}
          <div className="flex items-center">
            <p className="rounded-full bg-[#756659] px-8 py-10 text-sm font-semibold text-white ">
              MENU
            </p>
          </div>
        </div>
        {/* ２段目の欄 */}
        <div className="flex w-full  justify-between">
          {/* メインメッセージ */}
          <h1 className="text-7xl font-medium leading-[130px] tracking-tight text-[#756659]">
            猫といる
            <br />
            幸せでいっぱい。
          </h1>
          {/* SNSアイコン */}
          <div className="mr-6 flex flex-col gap-4">
            <Link href="" className="flex rounded-full bg-white p-2 ">
              <Image
                height={40}
                width={40}
                alt="instagram"
                priority={true}
                src="/sns/instagram-icon.svg"
              />
            </Link>
            <Link href="" className="flex rounded-full bg-white p-2 ">
              <Image
                height={40}
                width={40}
                alt="youtube"
                priority={true}
                src="/sns/youtube-icon.svg"
              />
            </Link>
          </div>
        </div>
        {/* スクロール矢印 */}
        <div className="absolute bottom-[-230px] left-[-30px] ml-0 flex rotate-90 gap-2 font-semibold">
          <p>SCROLL</p>
          <p>⇨</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
