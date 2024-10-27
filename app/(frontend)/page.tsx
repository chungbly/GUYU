'use client';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const data = [
  {
    category: 'Artificial Intelligence',
    title: 'You can do more with AI.',
    src: '/images/class1.jpg',
  },
  {
    category: 'Productivity',
    title: 'Enhance your productivity.',
    src: '/images/class2.jpg',
  },
  {
    category: 'Product',
    title: 'Launching the new Apple Vision Pro.',
    src: '/images/class3.avif',
  },
];

function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Sẵn sàng làm quen với GUYU.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default function Home() {
  const words = 'Tra cứu và luyện tập mọi lúc, mọi nơi';

  // function toLowerCaseNonAccentVietnamese(str:string) {
  //   str = str.toLowerCase();
  //   //     We can also use this instead of from line 11 to line 17
  //   //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
  //   //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
  //   //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
  //   //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
  //   //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
  //   //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
  //   //     str = str.replace(/\u0111/g, "d");
  //   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ā|ǎ/g, 'a');
  //   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ē|ě/g, 'e');
  //   str = str.replace(/ì|í|ị|ỉ|ĩ|ǐ|ī/g, 'i');
  //   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ō|ǒ/g, 'o');
  //   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ū|ǔ/g, 'u');
  //   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  //   str = str.replace(/đ/g, 'd');
  //   // Some system encode vietnamese combining accent as individual utf-8 characters
  //   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  //   str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  //   return str;
  // }
  // function getAllSubstrings(str:string) {
  //   let i, j;
  //   const result = [];

  //   for (i = 0; i < str.length; i++) {
  //     for (j = i + 1; j < str.length + 1; j++) {
  //       result.push(str.slice(i, j));
  //     }
  //   }
  //   return result;
  // }
  // const error = [];
  // const migrate = data.map((item, index) => {
  //   const exs = item.examples
  //     ?.replaceAll('\n', '')
  //     ?.replaceAll('\\', '')
  //     ?.split('。')
  //     ?.filter((ex) => ex);
  //   const examplesPinyin = item.examplesPinyin
  //     ?.replaceAll('\n', '')
  //     ?.replaceAll('\\', '')
  //     ?.split('.')
  //     ?.filter((ex) => ex);
  //   const exampleVietnameseMeaning = item.exampleVietnameseMeaning
  //     ?.replaceAll('\n', '')
  //     ?.replaceAll('\\', '')
  //     ?.split('.')
  //     ?.filter((ex) => ex);
  //   if (exs.length !== examplesPinyin?.length || exs.length !== exampleVietnameseMeaning?.length) {
  //     console.log('length', exs?.length, examplesPinyin?.length, exampleVietnameseMeaning?.length);
  //     console.log('index', index, item.phrase);
  //     error.push(index + 2);
  //   }
  //   return {
  //     simplified: item.phrase,
  //     simplifiedTextSearch: getAllSubstrings(item.phrase).join(' '),
  //     pinyin: item.pinyin,
  //     meaning: item.vietnameseMeaning,
  //     explanation: item.chineseMeaning,
  //     examples: exs.reduce((acc, cur, index) => {
  //       if (cur) {
  //         acc.push({
  //           chinese: cur?.trim()?.replaceAll('(1)', '')?.replaceAll('(2)', '')?.replaceAll('(3)', '') + '。',
  //           pinyin:
  //             examplesPinyin?.[index]
  //               ?.trim()
  //               ?.replaceAll('(1)', '')
  //               ?.replaceAll('(2)', '')
  //               .replaceAll('(3)', '') + '.' || '',
  //           vietnamese:
  //             exampleVietnameseMeaning?.[index]
  //               ?.trim()
  //               ?.replaceAll('(1)', '')
  //               ?.replaceAll('(2)', '')
  //               .replaceAll('(3)', '') + '.' || '',
  //         });
  //       }
  //       return acc;
  //     }, []),
  //     pinyinTextSearch: toLowerCaseNonAccentVietnamese(item.pinyin),
  //   };
  // });

  // const gen = (dataa) => {
  //   for (let i = 0; i < dataa.length; i++) {
  //     const item = dataa[i];

  //     (async () => {
  //       const buffer = await createAudioStreamFromText(item.simplified);

  //       handleUploadAudio({
  //         src: new Blob([buffer], { type: 'audio/mpeg' }),
  //         id: item._id,
  //       });
  //     })();
  //     item.examples?.forEach(async (example) => {
  //       const buffer = await createAudioStreamFromText(example.chinese);
  //       handleUploadAudio({
  //         src: new Blob([buffer], { type: 'audio/mpeg' }),
  //         id: item._id,
  //         exampleId: example._id,
  //       });
  //     });
  //   }
  // };

  // console.log('migrate', migrate);
  // console.log('first error', error);
  return (
    <div>
      <BackgroundBeamsWithCollision>
        {/* <Button onClick={() => gen(migrate)}>Generate</Button> */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-7 h-full items-center">
          <div className="pt-5 sm:pt-0 col-span-1 flex flex-col text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Hệ thống ngữ liệu{' '}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Tự học thành ngữ</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Tự học thành ngữ</span>
              </div>
            </div>
            <TextGenerateEffect words={words} />
            <div className="flex gap-5 justify-center pt-5">
              <Button className="w-32">Luyện tập</Button>
              <Button className="w-32" variant="outline">
                Tra cứu
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <AppleCardsCarouselDemo />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
