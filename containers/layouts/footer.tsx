import { Facebook, HomeIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ffdead] py-8 mt-6">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Information */}
          <div className="space-y-2">
            <Link href="/" className="flex gap-2 items-center justify-center sm:justify-start">
              <Image
                src={'/images/logo.png'}
                width={160}
                height={100}
                alt="logo"
                className="mr-2 object-stretch w-fit h-20"
              />
            </Link>
            {/* <div className="flex items-start gap-2">
              <HomeIcon className="size-5 mt-1 flex-shrink-0" />
              <p>Khoa tiếng Trung trường Đại học Sư phạm Thành phố Hồ Chí Minh</p>
            </div> */}
            <div className="flex items-center gap-2">
              <MailIcon className="size-5" />
              <a href="mailto:websiteguyu@gmail.com" className="hover:underline">
                websiteguyu@gmail.com
              </a>
            </div>
            <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
              <h1 className="flex gap-2 ">
                <Facebook className="size-5" />
                Fanpage
              </h1>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61573048412604&tabs=timeline&width=350&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full h-[200px] "
              ></iframe>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 flex flex-col ">
            <h3 className="font-medium text-lg mb-4">Liên kết điều hướng</h3>
            <nav className="space-y-2">
              <Link href="/tra-cuu" className="block hover:underline">
                Tra cứu
              </Link>
              <Link href="/ghi-nho" className="block hover:underline">
                Luyện tập
              </Link>
              <Link href="/flash-cards" className="block hover:underline">
                Flash Cards
              </Link>
            </nav>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            Bản quyền thuộc về nhóm sinh viên nghiên cứu đề tài &quot;Xây dựng hệ thống bài tập Quán dụng ngữ
            trên website GUYU cho sinh viên ngành Ngôn Ngữ Trung Quốc&quot;
          </div>
        </div>
      </div>
    </footer>
  );
}
