import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[350px] border-t-[1px] border-black bg-[#FFF8EF]">
      <div className="mx-auto flex w-[85%] flex-col justify-center ">
        {/* フッター内一段目 */}
        <div className="flex justify-between">
          {/* ヘッダーロゴ画像 */}
          <div className="flex">
            <Image height={80} width={180} alt="header-logo" src="/header/cat-cafe-logo.png" />
          </div>
          {/* フッターメニュー */}
          <li className="mt-10 flex gap-16 text-lg font-semibold">
            <ul>
              <Link href="">CONCEPT</Link>
            </ul>
            <ul>
              <Link href="">NEWS</Link>
            </ul>
            <ul>
              <Link href="">SHOPLIST</Link>
            </ul>
            <ul>
              <Link href="">COMPANY</Link>
            </ul>
            <ul>
              <Link href="">RECRUIT</Link>
            </ul>
            <ul>
              <Link href="">CONTACT</Link>
            </ul>
          </li>
        </div>
        {/* フッター内二段目 */}
        <div className="mb-12 flex items-center justify-between">
          {/* コピーライト */}
          <div className="text-sm">
            <p>©2023 MARON All Rights Reserved.</p>
          </div>
          {/* SNSアイコン */}
          <div className="flex gap-4">
            <Link href="" className="flex rounded-full border-[1px] border-black bg-white p-2 ">
              <Image height={40} width={40} alt="instagram" src="/sns/instagram-icon.svg" />
            </Link>
            <Link href="" className="flex rounded-full border-[1px] border-black bg-white p-2">
              <Image height={40} width={40} alt="youtube" src="/sns/youtube-icon.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
