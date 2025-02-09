const data = [
  {
    simplified: '挨闷棍',
    pinyin: 'āi mēn gùn',
    explanation: '比喻受到突然的打击，使人痛苦难言，或使人感到莫名其妙。',
    explanationPinyin:
      'Bǐyù shòudào túrán de dǎjī, shǐ rén tòngkǔ nán yán, huò shǐ rén gǎndào mò míng qí miào.',
    meaning:
      'Diễn đạt việc bị đánh bất ngờ, khiến người ta đau khổ không nói nên lời, hoặc cảm thấy khó hiểu.',
    examples:
      '他信心十足，没想到首战就失利，真是挨了一闷棍。\n 财政部突然宣布提高印花税率，投机者挨了一闷棍。',
    examplePinyin:
      'Tā xìnxīn shízú, méi xiǎngdào shǒu zhàn jiù shīlì, zhēnshi āi le yī mèn gùn.\nCáizhèng bù túrán xuānbù tígāo yìnhuā shuìlǜ, tóujī zhě āi le yī mèn gùn.',
    exampleMeaning:
      'Anh ấy đầy tự tin, không ngờ ngay trận đầu đã thất bại, thật sự bị một đòn chí mạng."\nBộ Tài chính đột ngột tuyên bố tăng thuế tem, những kẻ đầu cơ bị một đòn chí mạng."',
    arrange:
      '信心十足 / 他 / 没想到 / ，/ 首战 / 就 / 失利 / 真是 / 挨了一闷棍 / 。/\n突然宣布 / 财政部 / 提高 / 印花税率 / 挨了一闷棍 / 投机者 / ，/ 。/',
  },
  {
    simplified: '爱面子',
    pinyin: 'ài miàn zi',
    explanation: '比喻怕损害自己的体面，被人看不起。',
    explanationPinyin: 'Bǐyù pà sǔnhài zìjǐ de tǐmiàn, bèi rén kànbùqǐ.',
    meaning: 'Sợ làm tổn hại đến thể diện của mình, bị người khác coi thường.',
    examples:
      '他很爱面子，宁愿自己吃亏也不愿意让别人知道。\n在聚会上，他为了显示自己的能力，不惜爱面子，硬是要承担所有的工作。',
    examplePinyin:
      'Tā hěn ài miàn zi, nìngyuàn zìjǐ chīkuī yě bù yuànyì ràng biérén zhīdào.\nZài jùhuì shàng, tā wèile xiǎnshì zìjǐ de nénglì, bùxī ài miàn zi, yìngshì yào chéngdān suǒyǒu de gōngzuò.',
    exampleMeaning:
      'Anh ta rất sĩ diện, thà chịu thiệt thòi chứ không muốn để người khác biết.\nTrong buổi tụ họp, anh ta để thể hiện năng lực của mình, bất chấp sĩ diện, nhất quyết nhận làm mọi việc.\n',
    arrange:
      '很爱面子 / 他 / 宁愿 / 自己 / 吃亏 / ，/也不愿意 / 让 / 别人 / 知道 / 。/\n在 / ，/ 他 / 为了 / 显示 / 能力 / ，/ 不惜 / 爱面子 / 硬是 / 要 / 承担 / 所有的 / 工作 / 聚会上 /自己的 / 能力 /。/',
  },
  {
    simplified: '安乐窝',
    pinyin: 'ān lè wō',
    explanation: '安逸的生活环境或小巧、温暖、舒适的处所或房间。',
    explanationPinyin: 'Ānyì de shēnghuó huánjìng huò xiǎoqiǎo, wēnnuǎn, shūshì de chùsuǒ huò fángjiān.',
    meaning: 'Nơi ở thoải mái, ấm áp, hoặc môi trường sống dễ chịu.',
    examples: '你倒好，躲在安乐窝里，什么事都不管。\n',
    examplePinyin: 'Nǐ dào hǎo, duǒ zài ān lè wō lǐ, shénme shì dōu bù guǎn.',
    exampleMeaning: 'Anh trốn trong “tổ ấm” của mình và chẳng quan tâm đến điều gì.',
    arrange: '倒好 / 你 /，/ 躲在 / 安乐窝里 / ，/ 什么事 / 都 / 不管 / 。/',
  },
  {
    simplified: '八辈子',
    pinyin: 'bā bèi zi',
    explanation: '指许多代。',
    explanationPinyin: 'Zhǐ xǔduō dài.',
    meaning: 'Chỉ nhiều thế hệ, đời sống.',
    examples: '倒了八辈子霉了，怎么碰上这号人!\n他这辈子都没见过这么奇怪的人，简直是倒了八辈子霉。',
    examplePinyin:
      'Dào le bā bèi zi méi le, zěnme pèng shàng zhè hào rén!\nTā zhè bèi zi dōu méi jiànguò zhème qíguài de rén, jiǎnzhí shì dào le bā bèizi méi.',
    exampleMeaning:
      'Xui tận tám đời, sao lại gặp phải loại người này!\nCả đời anh ta chưa từng gặp người nào kỳ lạ như vậy, đúng là xui xẻo tám đời.',
    arrange:
      '八辈子霉了/，/ 倒了 / 怎么 / 碰上 / 这号人 / ！/\n这辈子 / 都没 / 见过 / 他 / 这么 / 奇怪的 / 人 / ，/ 简直是 / 倒了 / 八辈子霉 / 。/',
  },
  {
    simplified: '白费蜡',
    pinyin: 'bái fèi là',
    explanation: '比喻白费力气，没有效果。',
    explanationPinyin: 'Bǐyù báifèi lìqì, méiyǒu xiàoguǒ.',
    meaning: 'Công dã tràng\n Phép ẩn dụ chỉ việc lãng phí công sức mà không hiệu quả.',
    examples: '你试图说服不讲理的人，你是白费蜡。\n 别再请家教了，他不努力，你所有的心思都是白费蜡。',
    examplePinyin:
      'Nǐ shìtú shuōfú bù jiǎnglǐ de rén, nǐ shì bái fèi là.\n Bié zài qǐng jiājiào le, tā bù nǔlì, nǐ suǒyǒu de xīnsī dōu shì bái fèi là.',
    exampleMeaning:
      'Bạn cố gắng thuyết phục người không lý lẽ, thật là uổng công.\n Đừng mời gia sư nữa, anh ta không nỗ lực, thì tấm lòng lo nghĩ của bạn đều là uổng công.',
    arrange:
      '试图 / 你 / 说服 / 不讲理 / 的人 / ，/ 你 / 是 / 白费蜡 / 。/\n请 / 别再 / 家教了 / ，/ 他 / 不努力 / ，/ 你 / 所有的 / 心思 / 都是 / 白费蜡 / 。/',
  },
  {
    simplified: '败家子',
    pinyin: 'bài jiā zǐ',
    explanation: '指不务正业、挥霍家产的子弟。',
    explanationPinyin: 'Zhǐ bù wù zhèngyè, huīhuò jiāchǎn de zǐdì.',
    meaning: 'Phá gia chi tử\n Chỉ con cái không lo làm ăn, tiêu xài hoang phí tài sản gia đình.',
    examples: '生出这个败家子，真倒霉。\n 没有能力就算了，可不能做败家子呀。',
    examplePinyin:
      'Shēngchū zhège bài jiā zǐ, zhēn dǎoméi.\n Méiyǒu nénglì jiù suànle, kě bù néng zuò bài jiā zǐ ya.',
    exampleMeaning:
      'Sinh ra đứa con phá của này, thật xui xẻo.\n Không có năng lực thì thôi, nhưng đừng làm kẻ phá của.',
    arrange:
      '败家子 / 生出 /，/ 这个 / 真 / 倒霉 / 。/\n能力 / 没有 / 就算了 / ，/ 可不能 / 做 / 败家子 / 呀 / 。/\n',
  },
  {
    simplified: '摆架子',
    pinyin: 'bǎi jià zi',
    explanation: '比喻故意显示资格、地位的高傲态度。自高自大、装腔作势。也说\n“拿架子”、“端着架子”。',
    explanationPinyin:
      'Bǐyù gùyì xiǎnshì zīgé, dìwèi de gāo\'ào tàidù. Zì gāo zì dà, zhuāngqiāngzuòshì. Yě shuō "ná jiàzi", "duānzhe jiàzi".',
    meaning:
      'Cố tình tỏ ra kiêu ngạo, phô trương địa vị hoặc quyền lực. Cũng gọi là “拿架子”: làm bộ hoặc “端着架子”: lên mặt.',
    examples: '摆什么架子，你得清醒一下了，你已经不再是领导了。\n',
    examplePinyin: 'Bǎi shénme jià zi, nǐ dé qīngxǐng yīxià le, nǐ yǐjīng bù zài shì lǐngdǎo le.',
    exampleMeaning: 'Đừng tỏ vẻ kiêu ngạo nữa, anh cần nhớ rằng mình không còn là lãnh đạo.',
    arrange: '什么 / 架子 / 摆 / ，/ 你 / 得 / 清醒 / 一下了 / ，/ 你 / 已经 / 不再是 / 领导了 / 。/',
  },
  {
    simplified: '白眼狼',
    pinyin: 'bái yǎn láng',
    explanation: '忘恩负义的人。',
    explanationPinyin: "Wàng'ēnfùyì de rén",
    meaning: 'Người vô ơn.',
    examples:
      '她真是个白眼狼，忘恩负义。\n丈夫现在嫌贫爱富，完全忘了妻子对他无私的奉献，想甩了结发妻去攀高枝，妻子大骂他是白眼狼。',
    examplePinyin:
      "Tā zhēnshi gè bái yǎn láng, wàng'ēn fùyì.\nZhàngfu xiànzài xián pín ài fù, wánquán wàngle qīzi duì tā wúsī de fèngxiàn, xiǎng shuǎi le jiéfàqī qù pān gāozhī, qīzi dà mà tā shì bái yǎn láng.\n",
    exampleMeaning:
      'Cô ấy đúng là đồ vong ân bội nghĩa, chẳng khác gì sói mắt trắng.\nNgười chồng giờ đây ghét nghèo mê giàu, hoàn toàn quên đi sự hy sinh vô tư của vợ, muốn bỏ người vợ tào khang để trèo cao, khiến người vợ giận dữ chửi anh ta là đồ sói mắt trắng.',
    arrange:
      '真是个 / 她 / 白眼狼 / ，/ 忘恩负义 / 。/\n嫌贫爱富 / 丈夫 / ，/现在 / 完全 / 忘了 / 妻子 / 对他 / 无私的 / 奉献 / ，/ 想 / 甩了 / 结发妻 / 去 / 攀高枝 / ，/ 妻子 / 大骂 / 他是 / 白眼狼 / 。/',
  },
  {
    simplified: '半边天',
    pinyin: 'bàn biān tiān',
    explanation: '形容妇女的地位跟男人一样。',
    explanationPinyin: 'Xíngróng fùnǚ de dìwèi gēn nánrén yīyàng.',
    meaning: 'Nói về sự bình đẳng giữa nam và nữ.',
    examples: '妇女在社会中扮演着半边天的角色，贡献巨大。\n中国人常说: 妇女要顶半边天。',
    examplePinyin:
      'Fùnǚ zài shèhuì zhōng bànyàn zhe bàn biān tiān de juésè, gòngxiàn jùdà.\nZhōngguó rén cháng shuō: fùnǚ yào dǐng bàn biān tiān.',
    exampleMeaning:
      'Phụ nữ đóng vai trò như một nửa bầu trời trong xã hội, đóng góp rất lớn.\nNgười Trung Quốc thường nói: Phụ nữ phải chống đỡ một nửa bầu trời.\n\n',
    arrange:
      '社会中 / 妇女 / 扮演着 / 半边天的 / 角色 / ，/ 贡献 / 巨大 / 。/\n常说 / 中国人 / 妇女 / 要 / 顶 / 半边天 / 。/',
  },
  {
    simplified: '半吊子',
    pinyin: 'bàn diào zi',
    explanation: '比喻不通事理、说话随便、举止轻浮的人。',
    explanationPinyin: 'Bǐyù bù tōng shìlǐ, shuōhuà suíbiàn, jǔzhǐ qīngfú de rén.',
    meaning: 'Nói về người không nghiêm túc, thiếu hiểu biết.',
    examples: '他对这个项目了解得不深，真是个半吊子。\n这人是个半吊子，做事说话没什么准头。',
    examplePinyin:
      'Tā duì zhège xiàngmù liǎojiě dé bù shēn, zhēnshi gè bàn diào zǐ.\nZhè rén shì gè bàn diào zǐ, zuòshì shuōhuà méi shénme zhǔntou.\n',
    exampleMeaning:
      'Anh ta hiểu biết về dự án này không sâu, đúng là tay mơ.\nNgười này là một tay mơ, làm việc và nói năng chẳng có đầu đuôi gì cả.',
    arrange:
      '对这个项目 / 了解得 / 他 / 不深 / ，/ 真是个 / 半吊子 / 。/\n半吊子 / 这人 / 是个 / ，/ 做事 / 说话 / 没什么 / 准头 / 。/',
  },
  {
    simplified: '半瓶醋 ',
    pinyin: 'bàn pínɡ cù\n',
    explanation: '比喻知识技术只知道一点儿的人。',
    explanationPinyin: 'Bǐyù zhīshì jìshù zhǐ zhīdào yīdiǎn er de rén.',
    meaning: 'Người chỉ biết chút ít về kiến thức hoặc kỹ năng.',
    examples: '半瓶醋，正因为不满，才容易发出声音。',
    examplePinyin: 'Bàn píng cù, zhèng yīnwèi bùmǎn, cái róngyì fāchū shēngyīn.',
    exampleMeaning: 'Người chỉ biết chút ít thường hay khoa trương.',
    arrange: '正因为 /，/ 半瓶醋 / 不满 / ，/ 才 / 容易 / 发出 / 声音 / 。/',
  },
  {
    simplified: '搬起石头砸自己的脚',
    pinyin: 'bān qǐ shí tou zá zì jǐ de jiǎo',
    explanation: '搬起石头准备砸别人却砸了自己的脚。比喻自作自受，害人终害己。',
    explanationPinyin:
      'Bān qǐ shítou zhǔnbèi zá biérén què zále zìjǐ de jiǎo. Bǐyù zìzuò zìshòu, hài rén zhōng hài jǐ.',
    meaning:
      'Gậy ông đập lưng ông\n Mang đá lên chuẩn bị đập người khác nhưng lại đập vào chân mình.\n So sánh việc tự làm hại mình, hại người cuối cùng cũng hại mình.',
    examples: '他设计了圈套，但没想到搬起石头砸了自己的脚。\n 我们要考虑得周全些，别搬起石头砸自己的脚。',
    examplePinyin:
      'Tā shè jì le quān tào, dàn méi xiǎng dào bān qǐ shí tóu zá le zì jǐ de jiǎo.\n Wǒ men yào kǎo lǜ de zhōu quán xiē, bié bān qǐ shí tóu zá zì jǐ de jiǎo.',
    exampleMeaning:
      'Anh ấy đã thiết kế một cái bẫy, nhưng không ngờ tự mình sẩy chân.\n Chúng ta cần xem xét kỹ lưỡng, đừng để tự làm hại mình.',
    arrange:
      '设计了 / 他 / 圈套 / ，/ 但 / 没想到 / 搬起 / 石头 / 砸了 / 自己的 / 脚 / 。/\n考虑得 / 我们 / 周全些 / ，/ 别 / 搬起 / 石头 / 砸 / 自己的 / 脚 / 。/',
  },
  {
    simplified: '帮倒忙',
    pinyin: 'bānɡ dào mánɡ',
    explanation: '形式上帮忙而实际上反添麻烦。',
    explanationPinyin: 'Xíngshì shàng bāngmáng ér shíjì shàng fǎntiān máfan.',
    meaning: 'Nhiệt tình nhưng thiếu hiểu biết\n Giúp đỡ về hình thức nhưng thực chất lại gây thêm rắc rối.',
    examples:
      '他要帮我修照相机，结果把小毛病修成了大问题，这不是帮倒忙吗?\n 要多鼓励孩子帮倒忙，要对孩子勇于尝试、热心参与的积极性给予肯定。',
    examplePinyin:
      'Tā yào bāng wǒ xiū zhàoxiàngjī, jiéguǒ bǎ xiǎo máobìng xiū chéng le dà wèntí, zhè bù shì bāng dào máng ma?\n Yào duō gǔlì háizi bāng dào máng, yào duì háizi yǒngyú chángshì, rèxīn cānyù de jījí xìng jǐyǔ kěndìng.',
    exampleMeaning:
      'Anh ta muốn giúp tôi sửa máy ảnh, nhưng lại biến lỗi nhỏ thành vấn đề lớn, đúng là chữa ngựa lành thành ngựa què.\n Chúng ta nên khuyến khích trẻ tham gia dù có thể giúp không đúng cách, vì sự cố gắng và nhiệt tình của trẻ rất đáng khen.',
    arrange:
      '帮我 / 他 / 修 / 照相机 / ，/ 结果 / 把 / 小毛病 / 修成了 / 大问题 / ，/ 这 / 不是 / 帮倒忙 / 吗 / 。/\n多鼓励 / 要 / 孩子 / 帮倒忙 / ，/ 要对 / 孩子 / 勇于 / 尝试 / 、/ 热心 / 参与 / 的 / 积极性 / 给予 / 肯定 / 。/',
  },
  {
    simplified: '抱粗腿',
    pinyin: 'bào cū tuǐ',
    explanation: '比喻投靠有权势的人。',
    explanationPinyin: 'Bǐyù tóukào yǒu quánshì de rén.',
    meaning: 'Cáo mượn oai hùm\n Ẩn dụ ý chỉ việc dựa vào người có quyền lực.',
    examples:
      '做了市委书记的女婿，他真是抱了个大粗腿，怪不得现在这么嚣张。\n 抱着了粗腿就牢牢不放，小张就是这样的人。',
    examplePinyin:
      'Zuò le shì wěi shū jì de nǚ xu, tā zhēn shì bào le gè dà cū tuǐ, guài bù dé xiàn zài zhè me xiāo zhāng.\n Bào zhe le cū tuǐ jiù láo láo bú fàng, xiǎo zhāng jiù shì zhè yàng de rén.',
    exampleMeaning:
      'Là con rể của bí thư thành ủy, anh ấy thật sự nắm được một chỗ dựa lớn, không ngạc nhiên khi giờ đây lại kiêu ngạo như vậy.\n Khi đã ôm chặt chỗ dựa thì không để ai vào mắt, anh Trương chính là người như vậy.',
    arrange:
      '市委书记 / 做了 / 的 / 女婿 / ，/ 他 / 真是 / 抱了个 / 大粗腿 / ，/ 怪不得 / 现在 / 这么 / 嚣张 / 。/\n抱着了 / 粗腿 / 就 / 牢牢 / 不放 / ，/ 小张 / 就是 / 这样 / 的 / 人 / 。/',
  },
  {
    simplified: '抱佛脚',
    pinyin: 'bào fó jiǎo',
    explanation:
      '谚语: “平时不烧香，急来抱佛脚。”原来比喻平时没有联系，临时慌忙恳求。\n 后来多指平时没有准备，临时慌忙应付。也指求助于上天。',
    explanationPinyin:
      'Yàn yǔ: "Píngshí bù shāo xiāng, jí lái bào Fó jiǎo." Yuán lái bǐyù píngshí méiyǒu liánxì, línshí huāngmáng kěnqiú.\n Hòulái duō zhǐ píngshí méiyǒu zhǔnbèi, línshí huāngmáng yìngfù. Yě zhǐ qiúzhù yú shàngtiān.',
    meaning:
      'Nước đến chân mới nhảy\n Tục ngữ: "Thời bình không thắp hương, lúc khẩn cấp ôm Phật." Nguyên gốc chỉ việc không có liên hệ thường xuyên, đến lúc cần mới cầu xin.\n Sau này thường chỉ việc không chuẩn bị trước, đến lúc cần mới hoảng hốt ứng phó. Cũng chỉ việc cầu cứu Thượng đế.',
    examples: '平时不努力，临时抱佛脚，是不行的。\n 你不依靠自己，一味地抱佛脚，怎么可以呢?',
    examplePinyin:
      'Píngshí bù nǔlì, línshí bào fó jiǎo, shì bù xíng de.\n Nǐ bù yīkào zìjǐ, yīwèi de bào fó jiǎo, zěnme kěyǐ ne?',
    exampleMeaning:
      'Không nỗ lực thường xuyên, đến phút chót mới cầu may thì không hiệu quả.\n Cậu không tự mình cố gắng mà cứ dựa vào may mắn, sao mà được?',
    arrange:
      '不努力 / 平时 / ，/ 临时 / 抱佛脚 / ，/ 是 / 不行的 / 。/\n依靠 / 你 / 不 / 自己 / ，/ 一味地 / 抱佛脚 / ，/ 怎么 / 可以 / 呢 ？',
  },
  {
    simplified: '保护伞 ',
    pinyin: 'bǎo hù sǎn',
    explanation: '比喻能起到保护作用的人或事物( 含贬义) 。',
    explanationPinyin: 'Bǐyù néng qǐ dào bǎohù zuòyòng de rén huò shìwù (hán biǎnyì).',
    meaning: 'Người hoặc vật có thể bảo vệ, nhưng mang hàm ý châm biếm hoặc khinh thường.',
    examples: '当地政府当了黑势力的保护伞，真让人气愤。',
    examplePinyin: 'Dāngdì zhèngfǔ dāng le hēi shìlì de bǎo hù sǎn, zhēn ràng rén qìfèn.',
    exampleMeaning:
      'Chính quyền địa phương đã trở thành “ô dù” che chở cho các thế lực đen tối, thật khiến người ta tức giận.',
    arrange: '黑势力 / 当地政府 / 当了 / 的 / 保护伞 / ，/ 真 / 让人 / 气愤 / 。/',
  },
  {
    simplified: '爆冷门',
    pinyin: 'bào lěng mén',
    explanation: '比喻突然出现人们意想不到的情况或结果。冷门，指赌博时很少有人下注的一门。',
    explanationPinyin:
      'Bǐyù túrán chūxiàn rénmen yì xiǎng bù dào de qíngkuàng huò jiéguǒ.\n Lěngmén, zhǐ dǔbò shí hěn shǎo yǒu rén zhùxià de yīmén.',
    meaning:
      'Ẩn dụ nói đến sự xuất hiện đột ngột của những tình huống hoặc kết quả mà mọi người không ngờ tới.\n "Việc bị bỏ bê" chỉ những lĩnh vực ít người quan tâm.',
    examples: '这支弱队今年爆了好几次冷门，是不是引进了厉害的外援?\n 既然能够爆冷门，就说明有一定的实力。',
    examplePinyin:
      'Zhè zhī ruò duì jīnnián bào le hǎo jǐ cì lěng mén, shì bù shì yǐnjìn le lìhài de wàiyuán?\n Jìrán nénggòu bào lěng mén, jiù shuōmíng yǒu yīdìng de shílì.',
    exampleMeaning:
      'Đội yếu này năm nay đã gây bất ngờ nhiều lần, có phải họ đã chiêu mộ ngoại binh giỏi không?\n Nếu có thể tạo bất ngờ, tức là họ có thực lực nhất định.',
    arrange:
      '这支/ 今年 /好几次 / 冷门 /弱队/ ，/ 是不是 / 引进了/爆了/ 厉害的 / 外援 / ？/\n能够 / 既然 / 爆冷门 / ，/ 就 / 说明 / 有 / 一定的 / 实力 / 。/',
  },
  {
    simplified: '饱眼福',
    pinyin: 'bǎo yǎn fú',
    explanation: '看得很满意。',
    explanationPinyin: 'Kàn dé hěn mǎnyì.',
    meaning: 'Vừa mắt\n Nhìn thấy rất hài lòng.',
    examples: '第一次来上海，真是饱了他的眼福。\n 今天我是来饱眼福的，不上场表演。',
    examplePinyin:
      'Dì yī cì lái Shànghǎi, zhēn shì bǎo le tā de yǎn fú.\n Jīntiān wǒ shì lái bǎo yǎn fú de, bù shàngchǎng biǎoyǎn.',
    exampleMeaning:
      'Lần đầu đến Thượng Hải, anh ấy đã được mãn nhãn.\n Hôm nay tôi đến đây chỉ để thưởng thức, không biểu diễn.',
    arrange: '上海/来/第一次/，/眼福/他/真是/饱了/。/\n今天/我/来/饱眼福的/，/不上场/表演/是/。/',
  },
  {
    simplified: '背包袱',
    pinyin: 'bēi bāo fu',
    explanation: '思想或经济上有负担。',
    explanationPinyin: 'Sīxiǎng huò jīngjì shàng yǒu fùdān.',
    meaning: 'Trách nhiệm nặng nề\n Có gánh nặng về tư tưởng hoặc kinh tế.',
    examples: '今天他很不在状态，大概是心里背上了包袱。\n 运动员上场，一定不能背包袱，否则，难以发挥水平。',
    examplePinyin:
      'Jīntiān tā hěn bù zài zhuàngtài, dàgài shì xīnlǐ bèi shàng le bāo fú.\n Yùndòngyuán shàngchǎng, yīdìng bù néng bèi bāo fú, fǒuzé, nán yǐ fāhuī shuǐpíng.',
    exampleMeaning:
      'Hôm nay anh ấy không được tập trung, có lẽ đang mang gánh nặng tâm lý.\n Vận động viên ra sân không được để tâm lý nặng nề, nếu không sẽ khó phát huy được phong độ.',
    arrange:
      '今天/他/不在状态/很/大概是/背上了/包袱/心里/。/\n运动员/，/上场/背包袱/，/一定/不能/否则，/发挥水平/难以/。/',
  },
  {
    simplified: '背黑锅',
    pinyin: 'bēi hēi ɡuō',
    explanation: '比喻代别人承担过错、罪名，泛指受到冤枉。',
    explanationPinyin: 'Bǐyù dài biérén chéngdān guòcuò, zuìmíng, fàn zhǐ shòudào yuānwǎng.',
    meaning: 'Người bị ép gánh chịu sai phạm hoặc tội danh thay người khác.',
    examples: '替别人背黑锅，我可不干。',
    examplePinyin: 'Tì biérén bēi hēi guō, wǒ kě bù gàn.',
    exampleMeaning: 'Tôi không bao giờ chịu làm “kẻ chịu tội thay” cho người khác.',
    arrange: '背 / 我 / 也 /，/ 可 / 不 / 别人 / 黑锅 / 干 / 替/。/',
  },
  {
    simplified: '笨鸟先飞',
    pinyin: 'bèn niǎo xiān fēi',
    explanation: '比喻笨的人应该先行动。常用来比喻自己。',
    explanationPinyin: 'Bǐyù bèn de rén yīnggāi xiān xíngdòng. Chángyòng lái bǐyù zìjǐ.',
    meaning: 'Biểu thị người ngu ngốc nên hành động trước. Thường được dùng để chỉ bản thân.\n\n',
    examples: '我的基础不好，就得笨鸟先飞嘛。\n我得笨鸟先飞，要不然，落后了怎么办?',
    examplePinyin:
      'Wǒ de jīchǔ bù hǎo, jiù dé bèn niǎo xiān fēi ma. \nWǒ dé bèn niǎo xiān fēi, yào bùrán, luòhòule zěnme bàn?',
    exampleMeaning:
      'Tôi có nền tảng không tốt, nên phải lấy cần cù bù thông minh.\nTôi phải cần cù bù thông minh, nếu không thì, tôi lạc hậu thì sao?',
    arrange:
      '不好 / 我的 /，/ 基础 / 就 / 得 / 笨鸟 / 先飞 / 嘛/。/\n得 / 笨鸟 /，/ 先飞 / 我 / 要不然/， / 怎么办？/ 落后 / 了 / 呢',
  },
  {
    simplified: '不成器',
    pinyin: 'bù chénɡ qì',
    explanation: '不能成为有用的器物。后用以比喻不成才，没出息，没有发展前途或志气。也说“不成才”。',
    explanationPinyin:
      'Bù néng chéngwéi yǒuyòng de qìwù, hòu yòng yǐ bǐyù bù chéng cái, méi chūxī, méiyǒu fāzhǎn qiántú huò zhìqì, yě shuō "bù chéng cái" .',
    meaning:
      'Không trở thành vật hữu dụng. Sau này dùng để chỉ không thành tài, không có triển vọng hoặc chí khí. Cũng nói là “不成才”.',
    examples: '被宠大的孩子，很难成器。\n不要天天数落孩子不成器，那样会挫伤他的自信心，打击他的积极性。',
    examplePinyin:
      'Bèi chǒng dà de háizi, hěn nán chéng qì. \nBùyào tiāntiān shǔoluò háizi bù chéng qì, nà yàng huì cuòshāng tā de zìxìn xīn, dǎjī tā de jījí xìng.',
    exampleMeaning:
      'Những đứa trẻ được nuông chiều rất khó trở thành người có ích. \nĐừng ngày nào cũng chê bai trẻ không có tương lai, như vậy sẽ làm tổn thương sự tự tin của chúng, đánh bại tinh thần tích cực của chúng.',
    arrange:
      '被 / 孩子 /，/ 成器 / 大 / 很 / 宠 / 的 / 难/。/\n不要/ ，/ 他 / 挫伤// ，/ 自信心 / 数落 / 孩子 / 那样 / 打击 / 积极性 / 天天 / 不成器 / 会/。/',
  },
  {
    simplified: '不吃那一套',
    pinyin: 'bù chī nà yī tào',
    explanation: '那种方法不管用。',
    explanationPinyin: 'Nà zhǒng fāngfǎ bù guǎn yòng.',
    meaning: 'Phương pháp đó không hiệu quả.',
    examples:
      '香港大学不吃应试教育那一套，它们今年拒录了好几个高分考生，包括几个省状元。\n不必劳驾来拍我马屁，我才不吃你那一套呢。',
    examplePinyin:
      'Xiānggǎng Dàxué bù chī yìngshì jiàoyù nà yī tào, tāmen jīnnián jùlùle hǎojǐ gāofēn kǎoshēng, bāokuò jǐ gè shěng zhuānjun. \nBùbì láojià lái pāi wǒ mǎpì, wǒ cái bù chī nǐ nà yī tào ne.',
    exampleMeaning:
      'Đại học Hồng Kông không theo cách giáo dục thi cử, năm nay họ đã từ chối nhận nhiều thí sinh điểm cao, bao gồm cả một vài thủ khoa các tỉnh.\nKhông cần phải mất công nịnh hót tôi, tôi không thích kiểu đó đâu.',
    arrange:
      '今年 / ，/高分 / 考生 / 录了 / ，/不 / 香港大学 / 吃 / 应试教育 / 套 / 它们 / 几个/。/\n拍 / 来 / 我 / 劳驾 / 不必 / 你/ ，/ 吃 / 套 / 那一 / 我才 / 马屁 / 不 / 的/。/',
  },
  {
    simplified: '不到家',
    pinyin: 'bú dào jiā',
    explanation: '比喻技艺没有达到尽善尽美的程度。',
    explanationPinyin: 'Bǐyù jìyì méiyǒu dádào jìnshàn jìnměi de chéngdù.',
    meaning: 'Nghệ thuật chưa đạt tới mức hoàn hảo.',
    examples: '小李学了两年裁缝，不过，他的手艺还不到家。\n我们厂制造的半导体，质量还有问题，技术还不到家。',
    examplePinyin:
      'Xiǎo Lǐ xuéle liǎng nián cáifeng, bùguò, tā de shǒuyì hái bù dào jiā. \nWǒmen chǎng zhìzào de bàn dǎo tǐ, zhìliàng hái yǒu wèntí, jìshù hái bù dào jiā.',
    exampleMeaning:
      'Tiểu Lý đã học cắt may hai năm, nhưng tay nghề của anh ấy vẫn chưa thành thạo. \nChất lượng của các linh kiện bán dẫn do nhà máy chúng tôi sản xuất vẫn còn vấn đề, công nghệ vẫn chưa hoàn thiện.',
    arrange:
      '学了 / 小李 /，/ 年 / 裁缝 / 两 / ，/不过 / 他 / 的 / 手艺 / 还 / 到家/。/\n问题 / 我们/ ，/ 质量 / 半导体 /，/ 还有 / 的 / 制造 / 厂 / 技术 / 不到家/。/',
  },
  {
    simplified: '不动窝',
    pinyin: 'bú dònɡ wō',
    explanation: '比喻不离开原来的地方。窝: 鸟兽、昆虫住的地方，借指人体或物体所占的地方。',
    explanationPinyin:
      'Bǐyù bù líkāi yuánlái de dìfāng. Wō: niǎoshòu, kūnchóng zhù de dìfāng, jièzhǐ réntǐ huò wùtǐ suǒ zhàn de dìfāng.',
    meaning: 'Không rời khỏi nơi cũ. “窝”ám chỉ nơi ở của động vật, cũng chỉ chỗ của con người hoặc vật thể.',
    examples: '他坐在电脑前炒股票，一坐两三个小时也不动窝。\n该做饭了，一家三口都在看电视，谁都不动窝。',
    examplePinyin:
      'Tā zuò zài diànnǎo qián chǎo gǔpiào, yī zuò liǎng sān gè xiǎoshí yě bù dòng wō. \nGāi zuò fàn le, yī jiā sān kǒu dōu zài kàn diànshì, shéi dōu bù dòng wō.',
    exampleMeaning:
      'Anh ấy ngồi trước máy tính giao dịch chứng khoán, ngồi liền hai ba tiếng mà không nhúc nhích. \nĐến giờ nấu ăn rồi, cả gia đình ba người đều đang xem ti vi, ai cũng không động đậy.',
    arrange:
      '他 / 炒股票/ ，/ 电脑前 / 坐在 / 一坐 / 两三个小时 / 不动窝/。/\n做饭 / 该 / 三口 / ，/一家 / 看电视 / 都 / ，/谁 / 都 / 不动窝/。/',
  },
  {
    simplified: '不对头',
    pinyin: 'bú duì tóu',
    explanation: '不正常，不正确，不合理。',
    explanationPinyin: 'Bù zhèngcháng, bù zhèngquè, bù hélǐ.',
    meaning: 'Không bình thường, không đúng, không hợp lý.',
    examples: '现在的天气越来越不对头了。\n情况有点儿不对头，怎么房子在晃啊?',
    examplePinyin:
      'Xiànzài de tiānqì yuè lái yuè bù duì tóu le. \nQíngkuàng yǒudiǎn er bù duì tóu, zěnme fángzi zài huǎng a?',
    exampleMeaning:
      'Thời tiết bây giờ ngày càng không bình thường. \nTình hình có chút không bình thường, sao nhà lại rung lắc vậy?',
    arrange:
      '天气 / 现在 / 越来越 / 不对头 / 了/。/\n房子 / 在 / 情况 / 不对头 /，/ 有点儿 / 怎么 / 晃啊/？/',
  },
  {
    simplified: '不感冒',
    pinyin: 'bù ɡǎn mào',
    explanation: '谑指对某人某事不感兴趣。',
    explanationPinyin: 'Xuèzhǐ duì mǒu rén mǒu shì bù gǎn xìngqù.',
    meaning: 'Châm biếm không quan tâm đến ai đó hoặc chuyện gì đó.',
    examples:
      '大部分女人都喜欢看电视剧，可男人往往对此并不感冒。\n人们在择偶时，对门第金钱已经不太感冒了，关键还是要人实在。',
    examplePinyin:
      "Dà bùfèn nǚrén dōu xǐhuān kàn diànshìjù, kě nánrén wǎngwǎng duì cǐ bìng bù gǎn mào. \nRénmen zài zhuó'ǒu shí, duìmén dì jīnqián yǐjīng bù tài gǎn mào le, guānjiàn háishì yào rén shízài.",
    exampleMeaning:
      'Phụ nữ phần lớn thích xem phim truyền hình, nhưng đàn ông thì thường không hứng thú. \nKhi chọn bạn đời, mọi người giờ đây không còn quá chú trọng đến gia thế và tiền bạc, điều quan trọng vẫn là con người thật thà.',
    arrange:
      '电视剧 / 都 / 看 /，/ 大部分女人 / 喜欢 / 可 / 往往 / 男人 / 对此 / 并不感冒/。/\n关键 / 实在 / 还是 / 对 /，/ 金钱 / 已经 /，/ 不太感冒 / 门第 / 人们 / 择偶时 / 人/。/',
  },
  {
    simplified: '不管三七二十一',
    pinyin: 'bù ɡuǎn sān qī èr shí yī',
    explanation: '比喻不顾一切，不问是非情由。',
    explanationPinyin: 'Bǐyù bù gù yīqiè, bù wèn shìfēi qíngyóu.',
    meaning: 'Không quan tâm đến mọi thứ, không phân biệt đúng sai.',
    examples:
      '遇到情况，不去调查研究，不管三七二十一就仓促下结论，是很容易出错的。\n不管三七二十一，先把前面的高地拿下来再说，再晚，就要被包围了。',
    examplePinyin:
      'Yù dào qíngkuàng, bù qù diàochá yánjiū, bù guǎn sān qī èr shí yī jiù cāngcū xià jiélùn, shì hěn róngyì chūcuò de. \nBù guǎn sān qī èr shí yī, xiān bǎ qiánmiàn de gāodì ná xiàlái zài shuō, zài wǎn, jiù yào bèi bāowéi le.',
    exampleMeaning:
      'Gặp tình huống, không đi điều tra nghiên cứu, bất kể mọi thứ mà vội vàng đưa ra kết luận, rất dễ sai lầm. \nBất kể mọi thứ, trước tiên phải chiếm lĩnh cao điểm phía trước đã, nếu không thì sẽ bị bao vây.',
    arrange:
      '情况 / 研究/，/ 调查 / 遇到 /，/ 不去 / 三七二十一 /，/ 就 / 仓促 / 下结论 / 是 / 很容易 / 出错/。/\n就 / ，/要 / 包围/，/ 被 / 再晚 / 不管三七二十一 / 拿下来 / 前面/ ，/ 高地 / 再说 / 先/。/',
  },
  {
    simplified: '不见得',
    pinyin: 'bú jiàn dé',
    explanation: '不一定。',
    explanationPinyin: 'Bù yídìng.',
    meaning: 'Không nhất định.',
    examples: '考试没考好，不见得是水平低，也可能是没发挥好。\n他没有提反对意见，不见得就是赞成。',
    examplePinyin:
      'Kǎoshì méi kǎo hǎo, bú jiàn dé shì shuǐpíng dī, yě kěnéng shì méi fāhuī hǎo. \nTā méiyǒu tí fǎnduì yìjiàn, bú jiàn dé shì jiànchéng.',
    exampleMeaning:
      'Thi không tốt chưa hẳn là do trình độ kém, cũng có thể là do không phát huy được tốt. \nAnh ấy không đưa ra ý kiến phản đối, chưa hẳn là đồng ý.',
    arrange:
      '没考好 / 考试/ ，/ 不见得 / 是 / 水平低 / 也可能/，/ 没 / 发挥好/。/\n提 / 反对意见 /，/ 他 / 没有 / 不见得 / 就是 / 赞成/。/',
  },
  {
    simplified: '不景气',
    pinyin: 'bù jǐnɡ qì',
    explanation: '指经济不繁荣的景象，泛指事业不兴旺。',
    explanationPinyin: 'Zhǐ jīngjì bù fánróng de jǐngxiàng, fànzhǐ shìyè bù xīngwàng.',
    meaning: 'Chỉ tình trạng kinh tế không phát triển, nói chung là công việc không thịnh vượng.',
    examples:
      '次贷危机使美国房地产市场从繁荣走向不景气。\n在经济不景气时，企业压缩生产，消费者钟情于较低价格的产品。',
    examplePinyin:
      'Cìdài wēijī shǐ Měiguó fángdìchǎn shìchǎng cóng fánróng zǒu xiàng bù jǐng qì. \nZài jīngjì bù jǐng qì shí, qǐyè yāsuō shēngchǎn, xiāofèi zhě zhōngqíng yú jiào dī jiàgé de chǎnpǐn.',
    exampleMeaning:
      'Khủng hoảng tín dụng đã khiến thị trường bất động sản Mỹ từ thịnh vượng chuyển sang suy thoái. \nTrong thời kỳ kinh tế suy thoái, các doanh nghiệp cắt giảm sản xuất, người tiêu dùng lại ưu tiên cho các sản phẩm có giá thấp hơn.',
    arrange:
      '危机 / 美国 / 次贷 / 使 / 房地产市场 / 从 / 繁荣 / 走向 / 不景气/。/\n在 / 时 / 不景气 / 经济/ ，/ 企业 / 生产 / 压缩 / 消费者 / 钟情于/，/ 较低 / 价格 / 的 / 产品/。/',
  },
  {
    simplified: '不买账',
    pinyin: 'bù mǎi zhànɡ',
    explanation: '比喻不承认对方的长处或力量，不佩服或不服从。',
    explanationPinyin: 'Bǐyù bù chéngrèn duìfāng de chángchù huò lìliàng, bù pèifú huò bù fúcóng.',
    meaning: 'Không công nhận điểm mạnh hoặc năng lực của đối phương, không tôn trọng hoặc không phục tùng.',
    examples:
      '处事不公平合理的话，员工就不会买你的账。\n汽车厂商和经销商集体降价，可消费者就是不买账，还是不买。',
    examplePinyin:
      'Chùshì bù gōngpíng hélǐ de huà, yuángōng jiù bù huì mǎi nǐ de zhàng. \nQìchē chǎngshāng hé jīngxiāoshāng jítǐ jiàngjià, kě xiāofèi zhě jiùshì bù mǎi zhàng, háishì bù mǎi.',
    exampleMeaning:
      'Nếu xử lý công việc không công bằng hợp lý, nhân viên sẽ không tin tưởng bạn. \nCác nhà sản xuất ô tô và đại lý cùng giảm giá, nhưng người tiêu dùng vẫn không tin tưởng, vẫn không mua.',
    arrange:
      '不公平 / 处事 / 不合理 / 的话 /，/ 就 / 不会 / 员工 / 买你的账/。/\n降价 / 集体 /，/ 汽车厂商 / 经销商 / 和/，/ 可 / 就是 / 不买账 / 消费者 / 还是 / 不买/。/',
  },
  {
    simplified: '不起眼',
    pinyin: 'bù qǐ yǎn',
    explanation: '不值得重视; 不引人注目。又作“不显眼”。',
    explanationPinyin: 'Bù zhídé zhòngshì; bù yǐnrén zhùmù, yòu zuò "bù xiǎn yǎn".',
    meaning: 'Không đáng chú ý; không nổi bật. Cũng gọi là “不显眼”.',
    examples: '这么一件不起眼的衣服，要五千块，太不值了。\n他很普通，在人群里一点儿也不起眼。',
    examplePinyin:
      'Zhème yī jiàn bù qǐ yǎn de yīfú, yào wǔqiān kuài, tài bù zhíle. \nTā hěn pǔtōng, zài rénqún lǐ yī diǎn er yě bù qǐ yǎn.',
    exampleMeaning:
      'Một bộ quần áo không có gì đặc biệt mà giá tới năm ngàn tệ, thật là không đáng. \nAnh ta rất bình thường, trong đám đông hoàn toàn không nổi bật.',
    arrange:
      '这么 / 一件 /，/ 衣服 / 不起眼 / 要 /，/ 五千块 / 太 / 不值了/。/\n他 / 很普通 / 一点儿 / 在 / 不起眼 /，/ 人群里 / 也 / 不/。/',
  },
  {
    simplified: '不清不白',
    pinyin: 'bù qīnɡ bù bái',
    explanation: '比喻关系暧昧，不正当。或者比喻不纯洁，有污点。',
    explanationPinyin: 'Bǐyù guānxì àimèi, bù zhèngdàng, huòzhě bǐyù bù chúnjié, yǒu wūdiǎn.',
    meaning: 'Quan hệ mơ hồ, không chính đáng; hoặc không trong sạch',
    examples: '我可不愿接受这不清不白的指控。\n她再也无法容忍不清不白的身份，开始逼婚了。',
    examplePinyin:
      'Wǒ kě bù yuàn jiēshòu zhè bù qīng bù bái de zhǐkòng. \nTā zài yě wúfǎ róngrèn bù qīng bù bái de shēnfèn, kāishǐ bī hūn le.',
    exampleMeaning:
      'Tôi không muốn chấp nhận những cáo buộc không rõ ràng này. \nCô ấy không thể chịu đựng được thân phận mập mờ nữa, bắt đầu thúc ép kết hôn.',
    arrange:
      '我 / 不愿 / 接受 / 可 / 这 / 不清不白 / 的 / 指控/。/\n她 / 无法 / 再也 / 不清不白 /，/ 的 / 容忍 / 身份 / 开始 / 逼婚 / 了/。/',
  },
  {
    simplified: '不认账',
    pinyin: 'bú rèn zhànɡ',
    explanation: '不承认多欠的账，比喻不承认所说过的话或做过的事。',
    explanationPinyin:
      'Bù chéngrèn duō qiàn de zhàng, bǐyù bù chéngrèn suǒ shuō guò de huà huò zuò guò de shì.',
    meaning: 'Không thừa nhận, ví dụ không thừa nhận những điều đã nói hoặc đã làm.',
    examples:
      '妈妈说过我考试考满分就带我去海南岛旅游一次，可现在她怎么不认账了呢?\n宠物狗咬了别人，可主人却不认账，真不道德。',
    examplePinyin:
      'Māmā shuōguò wǒ kǎo mǎnfēn jiù dài wǒ qù Hǎinán dǎo lǚyóu yīcì, kě xiànzài tā zěnme bù rèn zhàng le ne? \nChǒngwù gǒu yǎole biérén, kě zhǔrén què bù rèn zhàng, zhēn bù dàodé.',
    exampleMeaning:
      'Mẹ đã nói nếu tôi thi được điểm tối đa thì sẽ đưa tôi đi du lịch đảo Hải Nam một lần, vậy mà giờ bà sao không giữ lời hứa? \nChó cưng cắn người khác, nhưng chủ nó lại không nhận lỗi, thật là thiếu đạo đức.',
    arrange:
      '说过 / 妈妈 / 我 / 考试 / 满分 / 就 / 带我 / 去 /，/ 海南岛 / 旅游 / 一次 / 可 / 现在 / 她 / 怎么 / 不认账 / 了 / 呢/？/\n咬了 / 宠物狗 /，/ 别人 / 可 / 主人 /，/ 却 / 不认账 / 真 / 不道德/。/',
  },
  {
    simplified: '不是个儿',
    pinyin: 'bú shì gèr',
    explanation: '不是对手。',
    explanationPinyin: 'Bù shì duìshǒu.',
    meaning: 'Không phải đối thủ.',
    examples: '跟他摔跤，我看你根本不是个儿。\n想考进重点大学，不是尖子生恐怕不是个儿。',
    examplePinyin:
      'Gēn tā shuāijiāo, wǒ kàn nǐ gēnběn bù shì gè ér. \nXiǎng kǎo jìn zhòngdiǎn dàxué, bù shì jiānzi shēng kǒngpà bù shì gè ér.',
    exampleMeaning:
      'Đánh vật với anh ta, tôi thấy bạn hoàn toàn không có cơ hội. \nMuốn thi vào đại học trọng điểm, không phải học sinh xuất sắc thì e là không có cửa.',
    arrange:
      '摔跤 / 跟 / 看 / 他 /，/ 不是 / 个儿 / 根本 / 你 / 我/。/\n不是 / 重点大学 / 想 /，/ 个儿 / 考进 / 是 / 不 / 恐怕 / 尖子生/。/',
  },
  {
    simplified: '不是个事儿',
    pinyin: 'bú shì ɡe shìr',
    explanation: '指不正常。',
    explanationPinyin: 'Zhǐ bù zhèngcháng.',
    meaning: 'Không bình thường.',
    examples: '你这样总是不吃早饭可不是个事儿。\n不去上班，在家里混日子，可不是个事儿。',
    examplePinyin:
      'Nǐ zhèyàng zǒng shì bù chī zǎofàn kě bù shì gè shìr. \nBù qù shàngbān, zài jiālǐ hùn rìzi, kě bù shì gè shìr.',
    exampleMeaning:
      'Bạn cứ bỏ bữa sáng như vậy thì không ổn đâu. \nKhông đi làm, ở nhà lông bông, cũng không ổn đâu.',
    arrange:
      '总是 / 不吃 / 你 / 这样 / 早饭 / 可 / 不是 / 个事儿/。/\n混日子 / 不去 /，/上班 / 可 / 在家里 / ，/不是 / 个事儿/。/',
  },
  {
    simplified: '不是玩儿的',
    pinyin: 'bú shì wǎnr de',
    explanation: '不是儿戏; 不能轻视。',
    explanationPinyin: 'Bù shì érxì; bù néng qīngshì.',
    meaning: 'Không phải chuyện đùa; không thể xem thường.',
    examples: '这件事要慎重，可不是玩儿的。\n离不离婚要慎重，可不是闹着玩儿的。',
    examplePinyin:
      'Zhè jiàn shì yào shènzhòng, kě bùshì wán er de. \nLí bù líhūn yào shènzhòng, kě bùshì nàozhe wán er de.',
    exampleMeaning:
      'Việc này cần thận trọng, không phải là trò đùa. \nLy hôn hay không cũng cần thận trọng, không phải là đùa giỡn.',
    arrange:
      '玩儿的 / 这件 / 事 / 要/ , / 慎重 / 可 / 不是/。/\n离不离婚 / 慎重 / 要 / 玩儿的/ ，/ 闹着 / 可 / 不是/。/',
  },
  {
    simplified: '不是滋味',
    pinyin: 'bú shì zī wèi',
    explanation: '心里感到不好受。',
    explanationPinyin: 'Xīnlǐ gǎndào bù hǎoshòu.',
    meaning: 'Cảm thấy không thoải mái trong lòng.',
    examples:
      '看到电影里相爱的人却被迫分手时，心里真不是滋味。\n热心助人，却发现自己被骗了，心里很不是滋味。',
    examplePinyin:
      'Kàn dào diànyǐng lǐ xiāng ài de rén què bèi pò fēnshǒu shí, xīnlǐ zhēn bù shì zī wèi. \nRèxīn zhùrén, què fāxiàn zìjǐ bèi piàn le, xīnlǐ hěn bù shì zī wèi.',
    exampleMeaning:
      'Khi thấy những người yêu nhau trong phim bị ép chia tay, trong lòng thật khó chịu. \nNhiệt tình giúp đỡ người khác, nhưng phát hiện mình bị lừa, trong lòng cũng thật không dễ chịu.',
    arrange:
      '看到 / 电影里 / 被迫 / 分手时 / 相爱的人 / 却/，/ 心里 / 真 / 不是 / 滋味/。/\n自己 / 被骗了 / 热心 / 助人 / 心里 /，/ 发现 / 却/ ，/ 很 / 不是 / 滋味/。/',
  },
  {
    simplified: '不顺眼',
    pinyin: 'bú shùn yǎn',
    explanation: '看不惯，看着不舒服。',
    explanationPinyin: 'Kàn bùguàn, kànzhe bù shūfú.',
    meaning: 'Không vừa mắt, nhìn thấy không thoải mái.',
    examples:
      '婚前十全十美的丈夫，现在却让我越看越不顺眼了。虽然挑不出什么大毛病，但小毛病却有一大堆。\n有些思想比较保守的老人，看到年轻人时髦特别的装束，觉得很不顺眼。',
    examplePinyin:
      'Hūnqián shíquán shíměi de zhàngfū, xiànzài què ràng wǒ yuè kàn yuè bù shùn yǎn le. Suīrán tiāo bù chū shénme dà máobìng, dàn xiǎo máobìng què yǒu yī dà duī. \nYǒuxiē sīxiǎng bǐjiào bǎoshǒu de lǎorén, kàn dào niánqīngrén shímáo tèbié de zhuāngshù, juéde hěn bù shùn yǎn.',
    exampleMeaning:
      'Người chồng hoàn hảo trước hôn nhân giờ đây lại khiến tôi ngày càng khó chịu. Mặc dù không tìm ra được lỗi lớn, nhưng có rất nhiều điều nhỏ nhặt. \nMột số ông bà có tư tưởng bảo thủ, khi thấy người trẻ ăn mặc sành điệu, họ cảm thấy rất không vừa mắt.',
    arrange:
      '十全十美 / 丈夫 /，/ 不顺眼 / 越 / 现在 / 让我 / 越看 / 婚前 / 的 / 不 / 我/。/\n年轻人 / 看到 / 比较 / 老人 / 特别的 /，/ 思想 / 装束 /，/ 时髦 / 觉得 / 很不顺眼 / 有些 / 保守的/。/\n\n',
  },
  {
    simplified: '不忘本',
    pinyin: 'bú wànɡ běn',
    explanation: '境遇变好后不忘掉自己原来的情况和所以得到幸福的根源。',
    explanationPinyin:
      'Jìngyù biànhǎo hòu bù wàngdiào zìjǐ yuánlái de qíngkuàng hé suǒyǐ dédào xìngfú de gēnyuán.',
    meaning:
      'Khi hoàn cuộc sống trở nên tốt hơn nhưng không quên gốc rễ của mình và nguồn gốc của hạnh phúc.',
    examples:
      '他现在发达了，但不忘本，还经常去看望自己从前的那些老亲戚、老朋友。\n父亲教导我，在任何时候，人都不能忘本。',
    examplePinyin:
      'Tā xiànzài fādá le, dàn bù wàng běn, hái jīngcháng qù kànwàng zìjǐ cóngqián de nàxiē lǎo qīnqi, lǎo péngyǒu. \nFùqīn jiàodǎo wǒ, zài rènhé shíhòu, rén dōu bù kěn wàng běn.',
    exampleMeaning:
      'Giờ anh ấy đã thành đạt, nhưng không quên nguồn gốc, còn thường xuyên thăm bà con và bạn bè cũ. \nCha dạy tôi, trong bất kỳ lúc nào, con người cũng không được quên nguồn gốc.',
    arrange:
      '他 / 但 / 发达了 /，/ 从前的 / 不忘本 /，/ 那些 / 经常 / 老亲戚 / 看望 / 去 /、老朋友 / 现在 / 还/。/\n任何时候 /，/ 我 / 父亲 /，/ 教导 / 忘本 / 都 / 在 / 不能 / 人/。/\n',
  },
  {
    simplified: '不问青红皂白',
    pinyin: 'bù wèn qīng hónɡ zào bái',
    explanation: '比喻不分辨事情的是非、情由。',
    explanationPinyin: 'Bǐyù bù fēnbiàn shìqíng de shìfēi, qíngyóu.',
    meaning: 'Không phân biệt đúng sai, nguyên do của sự việc.',
    examples:
      '看到孩子考试成绩不好，你不问青红皂白就去骂他，这怎么行呢? \n航空业亏损，不能不问青红皂白的怪罪高油价。',
    examplePinyin:
      'Kàn dào háizi kǎoshì chéngjī bù hǎo, nǐ bù wèn qīng hóng zào bái jiù qù mà tā, zhè zěnme xíng ne? \nHángkōng yè kuīsǔn, bùnéng bù wèn qīng hóng zào bái de guàizuì gāo yóujià.',
    exampleMeaning:
      'Thấy con mình thi cử không tốt, bạn không hỏi han gì đã mắng mỏ, như vậy làm sao được? \nNgành hàng không thua lỗ, không thể không hỏi han rõ ràng mà trách móc giá dầu cao.',
    arrange:
      '不问 / 孩子 / 你 / 看到 / 就去 / 青红皂白/，/ 考试成绩 / 骂他 / 怎么行呢？/ 这 / 不好/，/\n航空业 / 怪罪 / 亏损 / 不问 /，/ 高油价 / 的 / 青红皂白 / 不能/。/\n',
  },
  {
    simplified: '不像话',
    pinyin: 'bú xiànɡ huà',
    explanation: '比喻言语、行动不合情理。也说“不成话”。',
    explanationPinyin: 'Bǐyù yányǔ, xíngwéi bù hé qínglǐ, yě shuō "bù chéng huà".',
    meaning: 'Hành động và lời nói không hợp lý. Cũng nói là “不成话”.',
    examples:
      '父母含辛茹苦，把他们拉扯大，可他们现在这么不孝顺老人，真不像话。\n随地吐痰、扔东西，太不像话了。',
    examplePinyin:
      'Fùmǔ hán xīn rú kǔ, bǎ tāmen lāchě dà, kě tāmen xiànzài zhème bù xiàoshùn lǎorén, zhēn bú xiànɡ huà. \nSuídì tǔ tǐ, rēng dōngxī, tài bú xiànɡ huà le.',
    exampleMeaning:
      'Cha mẹ đã vất vả nuôi nấng họ, mà giờ họ lại bất hiếu với ông bà, thật không thể chấp nhận. \nNhổ nước bọt, vứt rác bừa bãi, thật không thể chấp nhận.',
    arrange:
      '吃力不讨好 /，/ 现在 / 含辛茹苦 /，/ 拉扯大 / 父母 /，/ 不孝顺 / 把 / 他们 / 真 / 这么 / 像话 / 老人/。/\n吐痰、/ 随地 / 扔东西 / 太 /，/不像话了/。/\n',
  },
  {
    simplified: '不着边',
    pinyin: 'bù zháo biān',
    explanation: '比喻言论空泛，不切实际或离题太远。',
    explanationPinyin: 'Bǐyù yánlùn kōngfàn, bù qiè shíjì huò lí tí tài yuǎn.',
    meaning: 'Lời nói rỗng tuếch, không thực tế hoặc xa chủ đề.',
    examples: '这个句子的翻译和原著相差万里，太不着边了。\n公司要裁员一万人，这是不着边的胡说。',
    examplePinyin:
      'Zhège jùzi de fānyì hé yuánzhù xiāngchà wànlǐ, tài bù zháo biān le. \nGōngsī yào cáiyuán yī wàn rén, zhè shì bù zháo biān de húshuō.',
    exampleMeaning:
      'Bản dịch câu này và bản gốc chênh lệch xa, thật không liên quan. \nCông ty muốn sa thải một vạn người, điều đó thật là chuyện vô lý.',
    arrange:
      '翻译 / 这个 / 和原著 / 太 /，/ 句子 / 相差万里 / 不着边/。/\n一万人 / 这是 / 公司 / 胡说 / 裁员 /，/ 要 / 不着边/。/\n',
  },
  {
    simplified: '差不离儿',
    pinyin: 'chà bù lír',
    explanation: '差不多。',
    explanationPinyin: 'Chà bù duō.',
    meaning: 'Gần giống nhau, gần như.',
    examples: '时间差不离儿了，我们该去机场了。\n你沿这条路往前走十分钟，就差不离儿到了。',
    examplePinyin:
      'Shíjiān chà bù lír le, wǒmen gāi qù jīchǎngle. \nNǐ yán zhè tiáo lù wǎng qián zǒu shí fēnzhōng, jiù chà bù lír dào le.',
    exampleMeaning:
      'Thời gian gần đến rồi, chúng ta nên đi đến sân bay. \nBạn đi thẳng theo con đường này khoảng mười phút là sẽ đến gần nơi rồi.',
    arrange:
      '机场 / 我们 / 差不离儿 / 时间 / ，/ 该 / 去 / 了/。/\n沿 / 你 / 十分钟 / 差不离儿 / 路 / 往前 / 走 /，/ 就 / 这条 / 到了/。/\n',
  },
  {
    simplified: '拆穿西洋镜',
    pinyin: 'chāi chuān xī yánɡ jìnɡ',
    explanation:
      '西洋镜，亦作“西洋景”。民间一种供娱乐用的装置﹐匣子里装100着画片﹐匣子上有放大镜﹐可以放大画面。因最初画片多西洋画﹐故名。\n 比喻故弄玄虚借以骗人的行为或手法。拆穿西洋镜就是将用来骗人的事实真相揭露出来。',
    explanationPinyin:
      'Xīyáng jìng, yì zuò “xīyángjǐng”. Mínjiān yī zhǒng gōng yúlè yòng de zhuāngzhì, xiázi lǐ zhuāng 100 zhe huàpiàn, xiázi shàng yǒu fàngdàjìng, kěyǐ fàngdà huàmiàn. \n Yīn zuìchū huàpiàn duō xīyánghuà, gù míng. Bǐyù gùnòngxuánxū jièyǐ piàn rén de xíngwéi huò shǒufǎ.',
    meaning:
      'Kính Tây Dương hay còn gọi là "cảnh phương Tây". Là một trò chơi giải trí dân gian dạng hộp. Trong một hộp có 100 bức \ntranh, trên có một chiếc kính lúp để phóng to hình ảnh.Vì tranh vốn chủ yếu là tranh phương Tây nên mới có tên này. \nĐây là cụm từ ẩn dụ cho hành vi hoặc cách thức lừa dối mọi người.Lật kính Tây Dương là làm lộ mặt thật.',
    examples:
      '这家伙的西洋镜被揭穿了，他一言不发，收拾了自己的东西，灰溜溜地走了。\n 别拆穿他的西洋镜了，他已经出了一身冷汗了。',
    examplePinyin:
      'Zhè jiāhuo de xī yáng jìng bèi jiēchuān le, tā yī yán bù fā, shōushí le zìjǐ de dōngxī, huī liū liū de zǒu le.\n Bié chāi chuān tā de xī yáng jìng le, tā yǐjīng chū le yī shēn lěng hàn le.',
    exampleMeaning:
      'Gã này đã bị lộ bộ mặt thật, không nói một lời, thu dọn đồ đạc và lặng lẽ ra đi.\n Chưa cần làm lộ bộ mặt thật, anh ta đã toát mồ hôi lạnh rồi.',
    arrange:
      '西洋镜 / 他的 / 一身 / 了 /，/ 已经 / 出了 /，/ 拆穿 / 的 / 冷汗/。/\n自己的 / 他 / 这家伙 / 被揭穿了 / 西洋镜 / 收拾了 /，/ 一言不发 / 灰溜溜地 / 走了/。/\n',
  },
  {
    simplified: '拆台',
    pinyin: 'chāi tái',
    explanation: '有意破坏使人倒台或办不成事。',
    explanationPinyin: 'Yǒuyì pòhuài shǐ rén dǎotái huò bàn bù chéng shì.',
    meaning: 'Cố ý phá hoại khiến người khác thất bại.',
    examples: '他在关键时刻拆台，影响了大家的士气。\n他们两人互相攻击、互相拆台，结果谁也没捞到好处。',
    examplePinyin:
      'Tā zài guānjiàn shíkè chā tái, yǐngxiǎng le dàjiā de shìqì.\nTāmen liǎng rén hùxiāng gōngjī, hùxiāng chā tái, jiéguǒ shéi yě méi lāo dào hǎochù.',
    exampleMeaning:
      'Anh ta phá hoại đúng lúc quan trọng, làm ảnh hưởng đến tinh thần mọi người.\nHai người họ công kích và phá hoại lẫn nhau, cuối cùng chẳng ai được lợi.',
    arrange:
      '关键时刻 / 影响了 / 大家 / 拆台 / 的 /，/ 他 / 士气 / 在/。/\n互相 / 结果 / 攻击、 / 互相 / 谁也 / 拆台 / 没捞到 /，/ 两人 / 好处 / 的/。/\n',
  },
  {
    simplified: '唱对台戏',
    pinyin: 'chàng duì tái xì',
    explanation: '比喻采取与对方相反的行动，或有意搞垮对方。',
    explanationPinyin: 'Bǐyù cǎiqǔ yǔ duìfāng xiāngfǎn de xíngdòng, huò yǒuyì gǎo kuǎ duìfāng.',
    meaning: 'Hành động trái ngược với đối phương, hoặc cố tình làm sụp đổ đối phương.',
    examples:
      '孩子不听父母的话，常唱对台戏，弄得父母什么办法都没有。\n他故意和我唱“对台戏”，看来他很不服。\n你不要跟领导唱“对台戏”，有话就说出来。',
    examplePinyin:
      'Háizi bù tīng fùmǔ de huà, cháng chàng duì tái xì, nòng dé fùmǔ shénme bànfǎ dōu méiyǒu. \nTā gùyì hé wǒ chàng “duì tái xì”, kànlái tā hěn bù fú. \nNǐ bùyào gēn lǐngdǎo chàng “duì tái xì”, yǒu huà jiù shuō chūlái.',
    exampleMeaning:
      'Trẻ con không nghe lời cha mẹ, thường chơi trò đối đầu, khiến cha mẹ không còn cách nào. \nAnh ấy cố tình đối đầu với tôi, có vẻ như anh ta rất không phục. \nĐừng đối đầu với lãnh đạo, nếu có gì hãy nói ra.',
    arrange:
      '父母 / 孩子 / 什么 /，/ 对台戏 / 没有 / 父母 /，/ 弄得 / 常 / 的 / 办法/。/\n看来 / 他 / 故意 / 很 / 和我 /，/ 唱 / “对台戏” / 不服/。/\n就说 / 你 / 出来 / 不要 / 有话 /，/ 唱 / “对台戏” / 跟 / 领导/。/\n\n\n',
  },
  {
    simplified: '长舌妇',
    pinyin: 'cháng shé fù',
    explanation: '爱扯闲话、搬弄是非的女人。',
    explanationPinyin: 'Ài chě xiánhuà, bānnòng shìfēi de nǚrén.',
    meaning: 'Người phụ nữ thích buôn chuyện, bới móc.',
    examples: '这个长舌妇总是喜欢八卦别人的私事。\n她不愿成为男人眼中的长舌妇，所以，坚决不传播小道消息。',
    examplePinyin:
      'Zhège cháng shé fù zǒngshì xǐhuan bāguà biérén de sīshì.\nTā bù yuàn chéngwéi nánrén yǎnzhōng de cháng shé fù, suǒyǐ, jiānjué bù chuánbò xiǎodào xiāoxi.\n',
    exampleMeaning:
      'Bà tám này luôn thích đàm tiếu chuyện riêng tư của người khác.\nCô ấy không muốn trở thành kẻ lắm lời trong mắt đàn ông, nên kiên quyết không lan truyền tin đồn.',
    arrange:
      '长舌妇 / 这个 / 总是 / 喜欢 / 总是 / 八卦 / 别人的 / 私事 / 的/。/\n坚决 / 她 / 长舌妇 / 不愿 / 成为 /，/ 男人眼中的 /，/ 小道消息 / 所以 / 不传播/。/\n',
  },
  {
    simplified: '唱白脸',
    pinyin: 'chànɡ bái liǎn',
    explanation: '京剧中的反派角色。指扮演反面的角色，对事情采取尖酸苛刻的态度。',
    explanationPinyin:
      'Jīngjù zhōng de fǎnpài juésè. zhǐ bànyǎn fǎnmiàn de juésè, duì shìqíng cǎiqǔ jiānsuān kēkè de tàidù.',
    meaning:
      'Nhân vật phản diện trong kịch. Chỉ việc đóng vai trò tiêu cực, có thái độ châm biếm và khắt khe.',
    examples: '妈妈在家里总是唱白脸。\n在讨论会上，张经理总是唱白脸，努力缓解团队的紧张气氛。',
    examplePinyin:
      'Māmā zài jiālǐ zǒng shì chàng bái liǎn. \nZài tǎolùn huì shàng, Zhāng jīnglǐ zǒng shì chàng bái liǎn, nǔlì huǎnjiě tuánduì de jǐnzhāng qìfēn.',
    exampleMeaning:
      'Mẹ tôi ở nhà luôn là người khó tính. \nTrong cuộc họp thảo luận, Giám đốc Trương luôn là người khó tính, cố gắng giảm bớt bầu không khí căng thẳng của đội ngũ.',
    arrange:
      '总是 / 妈妈 / 在 / 唱 / 白脸 / 家里/。/\n总是 / 张经理 / 在 /，/ 讨论会上 / 唱 /，/ 白脸 / 缓解 / 团队 / 的 / 紧张气氛 / 努力/。/\n',
  },
  {
    simplified: '唱反调',
    pinyin: 'chànɡ fǎn diào',
    explanation: '发表完全对立的言论; 采取对立的举措。',
    explanationPinyin: 'Fābiǎo wánquán duìlì de yánlùn; cǎiqǔ duìlì de jùcuò.',
    meaning: 'Phát biểu ý kiến hoàn toàn đối lập; thực hiện những hành động trái ngược.',
    examples: '你不要总是跟领导唱反调，没什么好处。\n孩子正处在叛逆期，什么都跟我唱反调。',
    examplePinyin:
      'Nǐ bùyào zǒng shì gēn lǐngdǎo chàng fǎn diào, méi shénme hǎochù. \nHáizi zhèng chǔ zài pànnì qī, shénme dōu gēn wǒ chàng fǎn diào.',
    exampleMeaning:
      'Bạn đừng luôn đối lập với lãnh đạo, không có lợi gì đâu. \nTrẻ con đang trong giai đoạn nổi loạn, gì cũng phản đối tôi.',
    arrange:
      '总是 / 你 / 跟 / 领导 /，/ 不要 / 唱 / 反调 / 没什么 / 好处/。/\n孩子 / 正处在 / 叛逆期 / 什么 /，/ 都 / 唱 / 跟我 / 反调/。/\n',
  },
  {
    simplified: '唱高调',
    pinyin: 'chànɡ ɡāo diào',
    explanation: '发表似乎高明但脱离实际的论调，说得很好听而不实际去做。',
    explanationPinyin:
      'Fābiǎo sìhū gāomíng dàn tuōlí shíjì de lùndiào, shuō dé hěn hǎotīng ér bù shíjì qù zuò.',
    meaning:
      'Phát biểu những quan điểm có vẻ cao siêu nhưng không thực tế, nói nghe rất hay nhưng không thực hiện.',
    examples: '很多贪官都喜欢唱高调。\n你别光唱高调，我们听不惯，能不能来点实际的?',
    examplePinyin:
      'Hěn duō tān guān dōu xǐhuān chàng gāo diào. \nNǐ bié guāng chàng gāo diào, wǒmen tīng bù guàn, néng bùnéng lái diǎn shíjì de?',
    exampleMeaning:
      'Nhiều quan tham thích phát biểu cao siêu. \nĐừng chỉ nói lý thuyết suông, chúng tôi không quen nghe, có thể nói thực tế hơn không?',
    arrange:
      '贪官 / 很多 / 都 / 唱 / 喜欢 / 高调。\n听不惯 / 你 / 别 /，/ 唱 / 光 /，/ 高调 / 我们 / 能不能 / 来点 / 实际的？\n',
  },
  {
    simplified: '唱红脸',
    pinyin: 'chànɡ hónɡ liǎn',
    explanation: '就是装好人。比喻在批评或争斗中担当劝导、抚慰、缓冲等任务的角色。',
    explanationPinyin:
      'Jiùshì zhuāng hǎo rén. bǐyù zài pīpíng huò zhēngdòu zhōng dāndāng quàndǎo, fǔwèi, huǎnchōng děng rènwù de juésè.',
    meaning:
      'Đóng vai người tốt. Biểu thị vai trò trong việc khuyên giải, an ủi, hoặc làm dịu tình huống trong cuộc tranh cãi.',
    examples:
      '你们俩，一个唱红脸，一个唱白脸，配合得真默契。\n在这个项目中，王总唱红脸，努力鼓励团队成员，提升士气。',
    examplePinyin:
      'Nǐmen liǎ, yīgè chàng hóng liǎn, yīgè chàng báiliǎn, pèihé dé zhēn mòqì. \nZài zhège xiàngmù zhōng, Wáng zǒng chàng hóng liǎn, nǔlì gǔlì tuánduì chéngyuán, tíshēng shìqì.',
    exampleMeaning:
      'Hai người các bạn, một người dễ tính, một người khó tính, phối hợp thật ăn ý. \nTrong dự án này, Tổng Giám đốc Vương đóng vai trò khích lệ, cố gắng động viên các thành viên trong đội, nâng cao tinh thần.',
    arrange:
      '你们俩 / 真 /，/ 配合得 / 一个 /，/ 唱 / 一个 / 默契 / 白脸 / 红脸/。/\n在 / 王总 / 提升气 /，/ 鼓励 / 项目中 /，/ 唱 / 领导 /，/ 团队成员 / 红脸 / 这个/。/\n',
  },
  {
    simplified: '唱空城计',
    pinyin: 'chànɡ kōnɡ chénɡ jì',
    explanation: '比喻掩饰自己力量空虚、骗过对方的方法; 比喻某单位的人员全部或大部分不在; 形容肚子饿。',
    explanationPinyin:
      'Bǐyù yǎnshì zìjǐ lìliàng kōngxū, piàn guò duìfāng de fāngfǎ; bǐyù mǒu dānwèi de rényuán quánbù huò dà bùfèn bù zài; xíngróng dùzi è.',
    meaning:
      'Biểu thị cách che giấu sức lực yếu kém, lừa dối đối phương; chỉ việc một đơn vị không có người hoặc phần lớn không có mặt; cũng mô tả cảm giác đói bụng.',
    examples: '快上菜吧，我的肚子已经在唱空城计了。\n',
    examplePinyin: 'Kuài shàng cài ba, wǒ de dùzi yǐjīng zài chàng kōng chéng jì le. \n',
    exampleMeaning: 'Mau mang đồ ăn lên đi, bụng tôi đã réo gọi rồi. \n',
    arrange: '快 / 我的 /，/ 上菜吧 / 空城计 / 肚子 / 唱 / 在 / 已经/。/\n\n',
  },
  {
    simplified: '唱老调',
    pinyin: 'chànɡ lǎo diào',
    explanation: '谈不新鲜的话题。',
    explanationPinyin: 'Tán bù xīnxiān de huàtí.',
    meaning: 'Nói những chủ đề không có tính mới mẻ.',
    examples:
      '你别唱老调了，有没有新鲜的话题?\n单位分配制度改革已经是在唱老调了，没办法，问题不解决，只能反复地唱老调。',
    examplePinyin:
      'Nǐ bié chàng lǎo diào le, yǒu méiyǒu xīnxiān de huàtí?\nDānwèi fēnpèi zhìdù gǎigé yǐjīng shì zài chàng lǎo diào le, méi bànfǎ, wèntí bù jiějué, zhǐ néng fǎnfù de chàng lǎodiào.',
    exampleMeaning:
      'Đừng nói những điều cũ rích nữa, có chủ đề gì mới không? \nCải cách chế độ phân phối trong cơ quan đã là chuyện cũ, không còn cách nào khác, vấn đề không được giải quyết, chỉ có thể lặp đi lặp lại chuyện cũ.',
    arrange:
      '有没有 / 唱 /，/ 新鲜 / 的 / 明 / 话题？ / 别 / 老调了/。/\n老调了 / 问题 / 在 /，/ 改革 / 已经 / 反复地 /，/ 唱 / 单位 /，/ 分配制度 / 只能 / 不解决 / 没办法/。/\n',
  },
  {
    simplified: '唱双簧',
    pinyin: 'chànɡ shuānɡ huánɡ',
    explanation:
      '双簧，曲艺的一种。由一人在前面表演动作，另一个人藏在后面或说或唱，紧密配合。现在常把两人一唱一和比喻为唱双簧，有讽刺意味。',
    explanationPinyin:
      'Shuānghuáng, qǔyì de yī zhǒng. yóu yī rén zài qiánmiàn biǎoyǎn dòngzuò, lìng yī rén cáng zài hòumiàn huò shuō huò chàng, jǐnmì pèihé. xiànzài cháng bǎ liǎng rén yī chàng yī hé bǐyù wéi chàng shuānghuáng, yǒu fěngcì yìwèi.',
    meaning:
      'Nghệ thuật trình diễn của hai người, một người diễn xuất, người kia hỗ trợ từ phía sau, bây giờ thường dùng để chỉ hai người phối hợp ăn ý với ý nghĩa mỉa mai.',
    examples:
      '大会上，公司高层和中层就像唱双簧一样。\n两位高官落马后，拒不认罪，反而一唱一和的，尽量推脱责任，像是在唱双簧。',
    examplePinyin:
      "Dàhuì shàng, gōngsī gāocéng hé zhōngcéng jiù xiàng chàng shuānɡ huánɡ yīyàng. \nLiǎng wèi gāoguān luòmǎ hòu, jù bù rèn zuì, fǎn'ér yī chàng yī hé de, jǐnliàng tuītuō zérèn, xiàng shì zài chàng shuānɡ huánɡ.",
    exampleMeaning:
      'Trong cuộc họp lớn, các lãnh đạo công ty cấp cao và trung cấp như đang diễn một vở kịch ăn ý. \nSau khi hai quan chức cao cấp bị sa thải, họ từ chối nhận tội và còn phối hợp với nhau để đẩy trách nhiệm đi, giống như đang diễn một vở kịch.',
    arrange:
      '就像 / 双簧 / 唱 / 一样 /，/ 公司 / 中层 / 高层 / 大会上/。/\n高官 / 两位 / 落马后 /，/ 一唱一和的 /，/ 推脱 / 责任 /，/ 像是 /，/ 拒不认罪 / 在 / 反而 / 唱双簧/。/',
  },
  {
    simplified: '尝甜头',
    pinyin: 'chánɡ tián tou',
    explanation: '比喻得到好处、利益。',
    explanationPinyin: 'Bǐyù dédào hǎochù, lìyì.',
    meaning: 'Hưởng quả ngọt\n Ẩn dụ chỉ việc đạt được lợi ích.',
    examples:
      '人们从改革中尝到甜头，自然会更加拥护改革，支持改革。\n 他从股市中尝到了甜头后，把所有的存款都转入了股市，这难道不危险吗?',
    examplePinyin:
      'Rénmen cóng gǎigé zhōng cháng chánɡ tián tou, zìrán huì gèng jiā yōnghù gǎigé, zhīchí gǎigé.\n Tā cóng gǔshì zhōng cháng dào le tián tou hòu, bǎ suǒyǒu de cúnkuǎn dōu zhuǎn rù le gǔshì, zhè nán dào bù wēixiǎn ma?',
    exampleMeaning:
      'Mọi người đã nếm trải lợi ích từ cải cách, tất nhiên sẽ càng ủng hộ cải cách hơn.\n Sau khi hưởng lợi từ thị trường chứng khoán, anh ấy đã dồn hết tiền tiết kiệm vào đó, liệu có phải quá mạo hiểm không?',
    arrange:
      '人们 / 改革 / 拥护 / 从 /，/ 会 / 支持 /，/ 甜头 / 改革 / 自然 / 尝到 / 更加 / 中/。/\n转入 / 他 / 股市 / 后 /，/ 尝到了 / 股市 /，/ 的 / 甜头 / 存款 / 难道 / 不 / 从 / 一切 / 中 / 吗？\n',
  },
  {
    simplified: '炒冷饭',
    pinyin: 'chǎo lěnɡ fàn',
    explanation: '比喻重复已经说过的话或做过的事，没有新的内容。也说“炒剩饭”。',
    explanationPinyin:
      'Bǐyù chóngfù yǐjīng shuōguò de huà huò zuòguò de shì, méiyǒu xīn de nèiróng. Yě shuō "chǎo shèngfàn".',
    meaning:
      'Lặp lại điều đã nói hoặc làm trước đó, không có nội dung mới. Cũng gọi là “炒剩饭”: lặp lại điều cũ, đem chuyện cũ ra làm lại mà không có sáng tạo hay giá trị mới.',
    examples: '我不怕大家说我炒冷饭,因为这件事没有得到解决，问题依然存在，所以我不得不再说一遍。\n',
    examplePinyin:
      'wǒ bù pà dàjiā shuō wǒ chǎo lěng fàn, yīnwèi zhè jiàn shì méiyǒu dédào jiějué, wèntí yīrán cúnzài, suǒyǐ wǒ bùdébù zài shuō yībiàn.',
    exampleMeaning:
      'Tôi không ngại việc bị nói là “xào lại chuyện cũ,” vì vấn đề này chưa được giải quyết triệt để nên cần phải nhắc lại.',
    arrange:
      '因为 / 大家 / 存在 / 再说 /，/ 问题 / 一遍 /，/ 不怕 / 得到解决 /，/ 炒冷饭 / 没有 / 得不 /，/ 这件事 / 我/。/\n',
  },
  {
    simplified: '陈世美',
    pinyin: 'chén shì měi',
    explanation: '舍弃老婆或忘恩负义的人。',
    explanationPinyin: 'Shěqì lǎopó huò wàng ēn fùyì de rén.',
    meaning: 'Kẻ bỏ rơi vợ hoặc người bội bạc, vô ơn.',
    examples: '你可不能做陈世美，丢下她不管。',
    examplePinyin: 'nǐ kě bùnéng zuò chén shì měi, diūxià tā bùguǎn.',
    exampleMeaning: 'Đừng trở thành “kẻ bạc tình” như Trần Thế Mỹ, bỏ mặc cô ấy.',
    arrange: '做 / 你 / 丢下 / 陈世美 / 可不能 /，/ 不管 / 她/。/\n',
  },
  {
    simplified: '撑场面 ',
    pinyin: 'chēnɡ chǎnɡ miàn',
    explanation: '维持表面的排场。也说“撑门面”。',
    explanationPinyin: 'Wéichí biǎomiàn de páichǎng. Yě shuō “chēng ménmiàn”.',
    meaning: 'Giữ hình thức bên ngoài để tạo ấn tượng. Cũng gọi là “撑门面”: làm bộ mặt.',
    examples: '到时候你一定要来哦，帮我撑撑场面。\n',
    examplePinyin: 'dào shíhòu nǐ yīdìng yào lái ó, bāng wǒ chēng chēng chǎng miàn.',
    exampleMeaning: 'Nhớ đến sự kiện đó giúp tôi một tay giữ thể diện nhé.',
    arrange: '你 / 到时候 / 一定 / 撑撑 /，/ 场面 / 找 / 来哦 / 帮 / 要/。/\n',
  },
  {
    simplified: '吃白食',
    pinyin: 'chī bái shí',
    explanation: '指不付出任何代价而占有事物或钱财。',
    explanationPinyin: 'Zhǐ bú fùchū rènhé dàijià ér zhànyǒu shìwù huò qiáncái.',
    meaning: 'Nhặt của hời\n Ý chỉ việc sở hữu đồ vật hoặc của cải mà không cần làm gì để đánh đổi.',
    examples:
      '税务机关个别人有吃饭店白食的现象，已经引起了检察机关的注意。\n 自力更生、靠劳动吃饭才是正道，吃白食，吃不长久。',
    examplePinyin:
      'Shuìwù jīgān gè bùrén yǒu chī fàn diàn bái shí de xiànxiàng, yǐjīng yǐnqǐ le jiǎnchá jīgān de zhùyì.\n Zìlì gēngshēng, kào láodòng chī fàn cái shì zhèngdào, chī bái shí, chī bù chángjiǔ.',
    exampleMeaning:
      'Một số cá nhân trong cơ quan thuế có hiện tượng ăn quỵt ở quán ăn, điều này đã thu hút sự chú ý của cơ quan kiểm sát.\n Tự lực cánh sinh, sống bằng lao động mới là con đường đúng đắn, ăn chùa thì không thể lâu dài.',
    arrange:
      '税务机关 / 吃饭店 /，/ 现象 / 已经 / 引起了 / 个别人 / 检察机关 / 的 / 注意/。/\n吃不长久 / 自力更生、/ 吃饭 /，/ 靠劳动 / 吃白食 /，/ 长久 / 才是 / 正道。\n',
  },
  {
    simplified: '吃豹子胆',
    pinyin: 'chī bào zi dǎn',
    explanation: '比喻人的胆量非常大。',
    explanationPinyin: 'Bǐyù rén de dǎnliàng fēicháng dà.',
    meaning: 'Người có lòng can đảm rất lớn.',
    examples:
      '你吃了豹子胆是吧? 你敢给我脸上抹黑?\n私造武器是犯法的，说不定会杀头，我就是吃了豹子胆，也不会和你干这种事。',
    examplePinyin:
      'Nǐ chī le bào zi dǎn shì ba? Nǐ gǎn gěi wǒ liǎn shàng mǒ hēi?\nSī zào wǔqì shì fànfǎ de, shuō bù dìng huì shā tóu, wǒ jiù shì chī le bào zi dǎn, yě bù huì hé nǐ gàn zhè zhǒng shì.',
    exampleMeaning:
      'Bạn ăn gan hùm hả? Dám bôi nhọ tôi à?\nSản xuất vũ khí trái phép là phạm pháp, có thể bị xử án tử, dù có dám làm thì tôi cũng không dám làm chuyện đó.',
    arrange:
      '你 / 吃了 / 是吧 ？/ 胆 /豹子 /\n不会 / 我 / 吃了 /，/ 私造 / 武器 /，/ 胆 / 就是 / 说不定 /，/ 干 / 犯法的 / 和你/。/\n',
  },
  {
    simplified: '吃闭门羹',
    pinyin: 'chī bì mén gēnɡ',
    explanation: '比喻串门时，主人不在家，被拒绝进门或受其他冷遇。',
    explanationPinyin: 'Bǐyù chuànmén shí, zhǔrén bù zàijiā, bèi jùjué jìnmén huò shòu qítā lěngyù.',
    meaning: 'Khi đến thăm mà chủ nhà không có nhà, bị từ chối vào hoặc bị đối xử lạnh nhạt.',
    examples: '他想去看女朋友，未来的丈母娘让他吃了闭门羹。\n',
    examplePinyin: 'Tā xiǎng qù kàn nǚ péngyǒu, wèilái de zhàngmǔniáng ràng tā chīle bì mén gēng. \n',
    exampleMeaning: 'Anh ấy muốn đi gặp bạn gái, nhưng mẹ vợ tương lai đã đóng cửa không cho vào. \n',
    arrange: '想去 / 他 /，/ 女朋友 / 吃了 / 吃了 / 闭门羹 / 的 / 让他 / 看 / 未来 / 丈母娘/。/\n',
  },
  {
    simplified: '吃不开',
    pinyin: 'chī bu kāi',
    explanation: '不被周围的人接受或欢迎。',
    explanationPinyin: 'Bù bèi zhōuwéi de rén jiēshòu huò huānyíng.',
    meaning: 'Không nhận được sự chấp nhận hoặc chào đón bởi mọi người xung quanh.',
    examples: '这种工作作风到哪儿都吃不开。\n在深圳，最吃得开的是既懂英语又熟练掌握计算机技术的大学生。',
    examplePinyin:
      'Zhè zhǒng gōngzuò zuòfēng dào nǎr dōu chī bù kāi. \nZài Shēnzhèn, zuì chī dé kāi de shì jì dǒng yīngyǔ yòu shúliàn zhǎngwò jìsuànjī jìshù de dàxuéshēng.',
    exampleMeaning:
      'Cách làm việc kiểu này ở đâu cũng khó phát triển. \nTại Thâm Quyến, sinh viên vừa giỏi tiếng Anh vừa thành thạo công nghệ máy tính là người được ưa chuộng nhất.',
    arrange:
      '到哪儿 / 这种 / 工作 / 都 / 吃不开 / 作风/。/\n英语 / 计算机 /，/ 在 / 大学生 / 吃得开 / 深圳 / 既 / 懂 / 是 / 技术 / 熟练/。/\n',
  },
  {
    simplified: '吃不了兜着走',
    pinyin: 'chī bu liǎo dōu zhe zǒu',
    explanation: '指出了问题，要承担一切后果。',
    explanationPinyin: 'Zhǐ chūle wèntí, yào chéngdān yīqiè hòuguǒ.',
    meaning: 'Nói ra vấn đề thì phải chịu trách nhiệm mọi hậu quả.',
    examples: '你敢动我一根指头? 我让你吃不了兜着走。\n别惹他，他会让你吃不了兜着走的。',
    examplePinyin:
      'Nǐ gǎn dòng wǒ yī gēn zhǐtóu? Wǒ ràng nǐ chī bùvliǎo dōu zhe zǒu. \nBié rěn tā, tā huì ràng nǐ chī bù liǎo dōuvzhe zǒu de.',
    exampleMeaning:
      'Bạn dám động vào tôi một ngón tay à? Tôi sẽ khiến bạn không thể thoát được. \nĐừng chọc anh ấy, anh ta sẽ khiến bạn không thể thoát được.',
    arrange: '我 / 你 /让/ 兜着走/ 吃不了/。/\n让 / 你 / 别 / 吃不了 / 会 /，/ 他 / 的 / 惹 / 兜着走/。/\n',
  },
  {
    simplified: '吃不消',
    pinyin: 'chī bu xiāo',
    explanation: '指经受不住; 难以承受; 忍耐不了。',
    explanationPinyin: 'Zhǐ jīngshòu bù zhù; nányǐ chéngshòu; rěnnài bùliǎo.',
    meaning: 'Không chịu nổi; khó có thể chịu đựng; không thể kiên nhẫn.',
    examples: '挑那么重的担子走远路，很多人吃不消。\n任务很艰巨，吃不消也得挺住。',
    examplePinyin:
      'Tiāo nàme zhòng de dànzi zǒu yuǎn lù, hěn duō rén chī bù xiāo. \nRènwù hěn jiānjù, chī bù xiāo yě dé tǐng zhù.',
    exampleMeaning:
      'Vác gánh nặng nặng đi xa, nhiều người không chịu nổi. \nNhiệm vụ rất nặng nề, không chịu nổi cũng phải cố gắng chịu đựng.',
    arrange:
      '很多人 / 挑 / 吃不消 / 重的 /，/ 走 / 担 / 远路 / 那么/。/\n艰巨 / 很 / 任务 / 吃不消 /，/ 也得 / 挺住/。/\n',
  },
  {
    simplified: '吃不准',
    pinyin: 'chī bu zhǔn',
    explanation: '感到没有把握。',
    explanationPinyin: 'Gǎndào méiyǒu bǎwò.',
    meaning: 'Cảm thấy không chắc chắn.',
    examples: '股市下一步是涨是跌，我看谁都吃不准。\n老左吃不准董事长的意图，干什么都缩手缩脚。',
    examplePinyin:
      'Gǔshì xià yībù shì zhǎng shì diē, wǒ kàn shéi dōu chī bù zhǔn. \nLǎo zuǒ chī bù zhǔn dǒngshì zhǎng de yìtú, gàn shénme dōu suōshǒu suōjiǎo.',
    exampleMeaning:
      'Chứng khoán tiếp theo sẽ tăng hay giảm, tôi thấy ai cũng không thể đoán được. \nÔng Lão không đoán được ý định của chủ tịch, làm gì cũng phải dè dặt.',
    arrange:
      '是 / 股市 / 涨 / 跌 / 是 / 谁都 /，/ 下一步 / 吃不准 / 我看/。/\n老左 / 意图 / 都 / 的 / 干什么 / 吃不准 / 缩手缩脚 /，/ 董事长/。/\n',
  },
  {
    simplified: '吃醋',
    pinyin: 'chī cù',
    explanation: '比喻因嫉妒而引起的不快情绪，形容爱嫉妒别人。多指因男女关系而妒忌、争吵。',
    explanationPinyin:
      'Bǐyù yīn jídù ér yǐnqǐ de bùkuài qíngxù, xíngróng ài jídù biérén. duō zhǐ yīn nánnǚ guānxì ér dùjì, zhēngchǎo.',
    meaning:
      'Biểu thị cảm giác khó chịu do ghen tuông, chỉ sự ghen tị với người khác, thường liên quan đến mối quan hệ nam nữ.',
    examples: '他的妻子要吃醋了，你快走吧。\n大陈陪老婆逛街，看一眼别的女人他老婆都吃醋。',
    examplePinyin:
      'Tā de qīzi yào chī cù le, nǐ kuài zǒu ba. \nDà Chén péi lǎopó guàngjiē, kàn yī yǎn bié de nǚrén tā lǎopó dōu chī cù.',
    exampleMeaning:
      'Vợ anh ấy sẽ ghen đấy, bạn mau đi đi. \nĐại Trần đi shopping với vợ, chỉ cần nhìn một cô gái khác là vợ anh ấy đã ghen.',
    arrange:
      '快 / 走吧 / 你 / 他的 / 妻子 /，/ 吃醋 / 要/。/\n他老婆 / 看一眼 / 大陈 / 吃醋 /，/ 别的 / 女人 / 都 / 陪 / 老婆 / 逛街/。/\n',
  },
  {
    simplified: '吃错药 ',
    pinyin: 'chī cuò yào',
    explanation: '比喻说话办事有违常理。',
    explanationPinyin: 'Bǐyù shuōhuà bànshì yǒu wéi chánglǐ.',
    meaning: 'Nói năng hoặc hành động trái với lẽ thường, không hợp lý.',
    examples: '是不是吃错药了，怎么连我都不认识了?\n',
    examplePinyin: '"shì bùshì chī cuò yào le, zěnme lián wǒ dōu bù rènshí le?"',
    exampleMeaning: 'Có phải anh uống nhầm thuốc không mà ngay cả tôi anh cũng không nhận ra?',
    arrange: '我 / 连 / 都 / 吃错药 / 怎么 / 不认识了？ / 的',
  },
  {
    simplified: '吃大锅饭',
    pinyin: 'chī dà ɡuō fàn',
    explanation: '比喻企业不论盈亏，个人不分勤懒，全由国家包干的办法。',
    explanationPinyin: 'Bǐyù qǐyè bù lùn yíngkuī, gèrén bù fēn qínlǎn, quán yóu guójiā bāogān de bànfǎ.',
    meaning:
      'Doanh nghiệp không phân biệt lời lỗ, mọi người không phân biệt chăm chỉ hay lười biếng, đều do nhà nước lo.',
    examples:
      '公司总是奖罚不明，吃大锅饭，效益不好，只能怪改革步子太慢。\n过去的国有企业，盛行吃大锅饭，结果工厂都搞得半死不活，赔钱的多，盈利的少。',
    examplePinyin:
      'Gōngsī zǒng shì jiǎng fá bù míng, chī dà guō fàn, xiàoyì bù hǎo, zhǐ néng guài gǎigé bùzǐ tài màn. \nGuòqù de guóyǒu qǐyè, shèngxíng chī dà guō fàn, jiéguǒ gōngchǎng dōu gǎo dé bàn sǐ bù huó, péiqián de duō, yìnglì de shǎo.',
    exampleMeaning:
      'Công ty luôn thiếu rõ ràng trong việc thưởng phạt, mọi người đều như nhau, hiệu quả kém, chỉ có thể trách cải cách quá chậm. \nCác doanh nghiệp nhà nước trước đây thịnh hành cách làm việc không phân chia thưởng phạt, kết quả là nhà máy chết dở, lỗ nhiều hơn lãi.',
    arrange:
      '公司 / 总是 / 改革 /，/ 步子 / 太 /，/ 慢 / 效益 /，/ 不好 / 吃大锅饭 / 只能 / 怪 / 奖罚 / 不明/。/\n国有企业 / 搞得 /，/ 吃大锅饭 /，/ 工厂 / 盈利 /，/ 盛行 / 赔钱 /，/ 半死不活 / 过去 / 少 / 多 / 结果/。/\n',
  },
  {
    simplified: '吃得消',
    pinyin: 'chī de xiāo',
    explanation: '能经受得住。',
    explanationPinyin: 'Néng jīngshòu dé zhù.',
    meaning: 'Có thể chịu đựng được.',
    examples: '再干一个夜班，我也完全吃得消。\n又上课，又伺候病人，你吃得消吗? 我看还是请一个钟点工吧。',
    examplePinyin:
      'Zài gàn yīgè yèbān, wǒ yě wánquán chī de xiāo. \nYòu shàng kè, yòu sìhòu bìngrén, nǐ chī de xiāo ma? Wǒ kàn hái shì qǐng yīgè zhōngdiǎn gōng ba.',
    exampleMeaning:
      'Làm thêm một ca đêm, tôi hoàn toàn chịu được. \nVừa phải lên lớp, vừa phải chăm sóc bệnh nhân, bạn có chịu nổi không? Tôi thấy nên thuê một người giúp việc giờ.',
    arrange:
      '我也 / 吃得消 / 再干 /，/ 夜班 / 一个 / 完全/。/\n你 /又/ 吃得消 / 病人 /，/ 又 / 上课 /，/ 伺候 / 吗？ ',
  },
  {
    simplified: '吃独食',
    pinyin: 'chī dú shí',
    explanation: '有东西自己一个人吃，不给别人。比喻有好处自己一个人享用，不与别人分享。',
    explanationPinyin:
      'Yǒu dōngxī zìjǐ yīgèrén chī, bù gěi biérén. bǐyù yǒu hǎochù zìjǐ yīgèrén xiǎngyòng, bù yǔ biérén fēnxiǎng.',
    meaning:
      'Có thứ gì đó cũng chỉ để cho bản thân mình, không cho người khác. Nghĩa là hưởng lợi một mình, không chia sẻ với ai.',
    examples:
      '老王选到一只好股不告诉我们，这家伙从来就是吃独食。\n这个项目的成功是大家努力的结果，得到的奖金应该大家分享，我不能一个人吃独食。',
    examplePinyin:
      'Lǎo Wáng xuǎn dào yī zhī hǎo gǔ bù gàosù wǒmen, zhè jiāhuo cónglái jiù shì chī dú shí. \nZhège xiàngmù de chénggōng shì dàjiā nǔlì de jiéguǒ, dédào de jiǎngjīn yīnggāi dàjiā fēnxiǎng, wǒ bùnéng yīgè rén chī dú shí.',
    exampleMeaning:
      'Lão Vương chọn được một cổ phiếu tốt mà không nói cho chúng tôi, người này từ trước đến giờ luôn thích ăn một mình. \nSự thành công của dự án này là kết quả nỗ lực của tất cả mọi người, phần thưởng nên được chia sẻ, tôi không thể chỉ mình hưởng.',
    arrange:
      '老王 / 好股 / 一只 / 从来 / 吃独食 / 的 /，/ 不告诉 / 我们 / 这家伙 / 选到 / 他/。/\n项目 / 分享 / 大家的 / 一个 / 奖金 / 我不能 /，/ 吃独食 / 大家 / 努力的 /，/ 是 / 得到的 / 成功 / 的 / 结果 / 应该/。/\n',
  },
  {
    simplified: '吃官司',
    pinyin: 'chī ɡuān si',
    explanation: '旧时指被控告、受处罚或者关进监狱。',
    explanationPinyin: 'Jiùshí zhǐ bèi kònggào, shòu chǔfá huòzhě guān jìn jiānyù.',
    meaning: 'Trước đây chỉ việc bị cáo buộc, bị xử phạt hoặc bị giam vào tù.',
    examples: '在金钱上犯事是很严重的，弄不好要吃官司。\n因为伤人，他吃了几年官司。',
    examplePinyin:
      'Zài jīnqián shàng fàn shì shì hěn yánzhòng de, nòng bù hǎo yào chī guān sī. \nYīnwèi shāngrén, tā chīle jǐ nián guān sī.',
    exampleMeaning:
      'Việc phạm tội liên quan đến tiền bạc là rất nghiêm trọng, nếu không cẩn thận sẽ phải ra tòa. \nVì đã làm bị thương người khác, anh ấy đã phải ra tòa vài năm.',
    arrange:
      '吃官司 / 犯事 / 在 / 金钱上 / 弄不好 /，/ 很 / 的 / 严重/。/\n因为 / 官司 / 他 / 吃了 /，/ 伤人 / 几年/。/\n',
  },
  {
    simplified: '吃后悔药',
    pinyin: 'chī hòu huǐ yào',
    explanation: '比喻事后懊悔。',
    explanationPinyin: 'Bǐyù shìhòu àohuǐ.',
    meaning: 'Hối hận sau khi sự việc xảy ra.',
    examples:
      '这个世界上是没有后悔药好吃的。\n小明上学时不好好学习，工作后才知道学习的重要性，可是哪有后悔药吃? 失去的时间再也追不回来了。',
    examplePinyin:
      'Zhège shìjiè shàng shì méiyǒu hòu huǐ yào hǎochī de. \nXiǎo Míng shàngxué shí bù hǎohǎo xuéxí, gōngzuò hòu cái zhīdào xuéxí de zhòngyào xìng, kě shénme yǒu hòu huǐ yào chī? Shīqù de shíjiān zài yě zhuī bù huílái le.',
    exampleMeaning:
      'Trên thế giới này không có thuốc hối hận nào ngon cả. \nTiểu Minh thời đi học không chăm chỉ, đến khi đi làm mới biết tầm quan trọng của việc học, nhưng có thuốc hối hận nào để ăn? Thời gian đã mất không thể lấy lại được.',
    arrange:
      '世界上 / 没有 / 的 / 后悔药 / 是 / 好吃 / 这个/。/\n不好好 / 工作后 / 小明 / 才知道 / 学习的 / 学习 /，/ 重要性 / 上学时 /，/ 吃 / 哪有 / 后悔药 / 学习 / 时 / 不 / 可/？/\n\n',
  },
  {
    simplified: '吃皇粮',
    pinyin: 'chī huánɡ liánɡ',
    explanation: '比喻为国家工作，依靠国家给予薪俸生活。',
    explanationPinyin: 'Bǐyù wéi guójiā gōngzuò, yīkào guójiā jǐyǔ xīnfèng shēnghuó.',
    meaning: 'Làm việc cho nhà nước, sống dựa vào lương của nhà nước.',
    examples:
      '能吃上皇粮，是古代读书人的一大理想。\n在改革的潮流中，有的人情愿放弃吃皇粮的职位，到乡镇企业去大显身手。',
    examplePinyin:
      'Néng chī shàng huáng liáng, shì gǔdài dúshū rén de yī dà lǐxiǎng. \nZài gǎigé de cháoliú zhōng, yǒu de rén qīngyuàn fàngqì chī huáng liáng de zhíwèi, dào xiāngzhèn qǐyè qù dàxiǎn shēnshǒu.',
    exampleMeaning:
      'Được ăn lương của hoàng đế là một lý tưởng lớn của các trí thức cổ đại. \nTrong dòng chảy cải cách, có người sẵn sàng từ bỏ vị trí ăn lương của hoàng đế để đến doanh nghiệp tư nhân thể hiện bản thân.',
    arrange:
      '一大 / 吃上 / 是 / 能 /，/ 古代 / 读书人 / 理想 / 的 / 壁粮。\n放弃 / 有的 / 皇粮 / 职位 ，// 改革 / 的 /，/ 大显身手 / 潮流中 / 乡镇企业 / 人 / 情愿 / 的。\n',
  },
  {
    simplified: '吃老本',
    pinyin: 'chī lǎo běn',
    explanation: '比喻依赖原有的知识﹑本领或功劳过日子，没有新的贡献。',
    explanationPinyin: 'Bǐyù yīlài yuányǒu de zhīshì, běnlǐng huò gōngláo guò rìzi, méiyǒu xīn de gòngxiàn.',
    meaning: 'Dựa vào kiến thức, khả năng hoặc công lao đã có để sống, không có đóng góp mới.',
    examples: '同志啊，不要躺在革命的功劳簿上嘛，不要吃老本，要立新功。\n',
    examplePinyin:
      'Tóngzhì a, bùyào tǎng zài gémìng de gōngláo bù shàng ma, bùyào chī lǎo běn, yào lì xīngōng. \n',
    exampleMeaning:
      'Đồng chí à, đừng nằm trên chiến công của cách mạng, đừng sống bằng thành tích cũ, hãy lập công mới. \n',
    arrange: '革命 / 不要 /，/ 吃老本 /，/ 同志啊 / 立新功 /，/ 躺在 / 功劳簿 / 上 / 不要 / 嘛 / 要/。/\n',
  },
  {
    simplified: '吃枪药',
    pinyin: 'chī qiānɡ yào',
    explanation: '比喻说话时态度生硬或火气大。',
    explanationPinyin: 'Bǐyù shuōhuà shí tàidù shēngyìng huò huǒqì dà.',
    meaning: 'Nói chuyện với thái độ cứng rắn hoặc tức giận.',
    examples:
      '这小子吃了枪药，一大早说话就这么冲。\n即使你有理，说话也要注意分寸，不能像吃枪药似的，对人家发火。',
    examplePinyin:
      'Zhè xiǎozi chīle qiāng yào, yī dà zǎo shuōhuà jiù zhème chōng. \nJíshǐ nǐ yǒu lǐ, shuōhuà yě yào zhùyì fēncùn, bùnéng xiàng chī qiāng yào shì de, duì rénjiā fāhuǒ.',
    exampleMeaning:
      'Thằng nhóc này như bị thuốc nổ, sáng sớm đã nói chuyện rất hăng. \nDù bạn có lý, cũng phải chú ý đến cách nói, không thể như bị thuốc nổ, quát mắng người khác.',
    arrange:
      '一大早 / 吃了 / 这小子 /，/ 枪药 / 就这么 / 说话 / 冲/。/\n你 / 即使 / 注意 / 分寸 /，/ 不能 /，/ 吃枪药 /，/ 对人家 / 说话 / 有理 / 也要 / 似的/。/\n',
  },
  {
    simplified: '吃青春饭',
    pinyin: 'chī qīnɡ chūn fàn',
    explanation: '从事只能给年轻人做的职业。',
    explanationPinyin: 'Cóngshì zhǐ néng gěi niánqīng rén zuò de zhíyè.',
    meaning: 'Làm nghề chỉ phù hợp với người trẻ.',
    examples:
      '别看电视台的女主持人很风光，她们吃的是青春饭。\n芭蕾舞演员的舞台生命可以有多长? 难道他们只能吃青春饭吗?',
    examplePinyin:
      'Bié kàn diànshìtái de nǚ zhǔchí rén hěn fēngguāng, tāmen chī de shì qīng chūn fàn. \nBāléi wǔ yǎnyuán de wǔtái shēngmìng kěyǐ yǒu duō cháng? Nándào tāmen zhǐ néng chī qīng chūn fàn ma?',
    exampleMeaning:
      'Đừng thấy nữ MC của đài truyền hình hào nhoáng, họ chỉ sống bằng thanh xuân. \nThời gian trên sân khấu của các diễn viên ballet có thể kéo dài bao lâu? Họ không thể chỉ sống bằng thanh xuân sao?',
    arrange:
      '别看 / 电视台 / 女主持人 / 她们 / 吃 / 的 / 青春饭 / 很 / 风光/。/\n 只能 /难道 /青春饭/他们/吃/吗？\n',
  },
  {
    simplified: '吃透',
    pinyin: 'chī tòu',
    explanation: '捉摸透; 了解透彻。',
    explanationPinyin: 'Zhuōmō tòu; liǎojiě tòuchè.',
    meaning: 'Hiểu rõ, nắm bắt được.',
    examples: '要取得好的教学效果，教师首先自己要吃透教材。\n老杨吃透了董事会的精神，所以他敢甩开膀子干。',
    examplePinyin:
      'Yào qǔdé hǎo de jiàoxué xiàoguǒ, jiàoshī shǒuxiān zìjǐ yào chī tòu jiàocái. \nLǎo Yáng chī tòu le dǒngshì huì de jīngshén, suǒyǐ tā gǎn shuǎi kāi pángzi gàn.',
    exampleMeaning:
      'Để đạt được hiệu quả giảng dạy tốt, giáo viên trước hết phải nắm vững tài liệu giảng dạy. \nLão Dương đã hiểu rõ tinh thần của hội đồng quản trị, nên anh ấy dám làm một cách thoải mái.',
    arrange:
      '吃透 / 教师 / 自己 /，/ 要 / 教学效果 / 首先 / 材料 / 取得 / 好的/。/\n吃透了 / 老杨 / 他 / 精神 / 敢 / 甩开膀子 /，/ 所以 / 干 / 董事会 / 的/。/\n',
  },
  {
    simplified: '吃西北风',
    pinyin: 'chī xī běi fēnɡ',
    explanation: '比喻没有东西吃，挨饿; 或者闲着没事干，没有收入。也叫喝西北风。',
    explanationPinyin:
      'Bǐyù méiyǒu dōngxī chī, ái’è; huòzhě xiánzhe méi shì gàn, méiyǒu shōurù. yě jiào hē xīběi fēng.',
    meaning:
      'Không có gì để ăn, phải chịu đói; hoặc không có việc làm, không có thu nhập. Cũng gọi là 也叫“喝西北风”.',
    examples:
      '天哪，如果突然有一天宣布企业破产了，我只有吃西北风了。\n你尽管放心，干咱们这一行，只怕忙不过来，绝不会吃西北风。',
    examplePinyin:
      'Tiān nǎ, rúguǒ túrán yǒu yītiān xuānbù qǐyè pòchǎnle, wǒ zhǐyǒu chī xī běi fēng le. \nNǐ jǐnguǎn fàngxīn, gàn zánmen zhè yīháng, zhǐ pà máng bùguòlái, jué bù huì chī xī běi fēng.',
    exampleMeaning:
      'Trời ơi, nếu một ngày nào đó đột nhiên tuyên bố công ty phá sản, tôi chỉ có thể chịu đói thôi. \nBạn cứ yên tâm, làm ngành này, chỉ sợ bận không hết, tuyệt đối sẽ không phải chịu đói.',
    arrange:
      '西北风 / 吃 /，/ 天哪 / 突然 /，/ 破产 / 如果 / 企业 / 宣布 / 有一天 / 只有 / 我/。/\n咱们 /，/ 只怕 / 吃西北风 /，/ 忙不过来 / 放心 / 绝不会 /，/ 干 / 你 / 尽管 / 这一行/。/',
  },
  {
    simplified: '吃香',
    pinyin: 'chī xiānɡ',
    explanation: '指受重视; 到处受人欢迎。',
    explanationPinyin: 'Zhǐ shòu zhòngshì; dàochù shòu rén huānyíng.',
    meaning: 'Được coi trọng; được mọi người yêu mến.',
    examples: '听说近来荧屏上几部古装帝王大戏收视均不理想，不如以前那么吃香了。\n',
    examplePinyin:
      'Tīngshuō jìnlái yíngpíng shàng jǐ bù gǔzhuāng dìwáng dàxì shōushì jūn bù lǐxiǎng, bùrú yǐqián nàme chī xiāng le. \n',
    exampleMeaning:
      'Nghe nói gần đây vài bộ phim cổ trang về hoàng đế trên màn ảnh không còn được ưa chuộng như trước nữa. \n',
    arrange:
      '听说 / 几部 / 上 / 古装 / 荧屏 / 近来 /，/ 大戏 / 吃香了 / 不如 / 理想 / 收视 / 的 / 帝王/。/\n\n',
  },
  {
    simplified: '吃小灶',
    pinyin: 'chī xiǎo zào',
    explanation: '比喻享受到特殊照顾。',
    explanationPinyin: 'Bǐyù xiǎngshòu dào tèshū zhàogù.',
    meaning: 'Người được hưởng sự chăm sóc hoặc ưu đãi đặc biệt.',
    examples: '教练看他是个苗子，经常给他吃小灶。\n\n',
    examplePinyin: 'Jiàoliàn kàn tā shì ge miáozi, jīngcháng gěi tā chī xiǎo zào.',
    exampleMeaning: 'Huấn luyện viên thấy anh ấy có tiềm năng nên thường cho tập riêng.',
    arrange: '教练 / 给他 / 他 /,/ 是个 / 经常 / 吃小灶 / 看/。/\n',
  },
  {
    simplified: '吃一堑，长一智',
    pinyin: 'chī yī qiàn，zhǎnɡ yī zhì',
    explanation: '受一次挫折，增长一分见识。',
    explanationPinyin: 'Shòu yīcì cuòzhé, zēngzhǎng yī fēn jiànshí.',
    meaning: 'Trải qua một thất bại sẽ tích lũy thêm kinh nghiệm.',
    examples:
      '失败时深刻反省自己，善于总结经验教训，吃一堑，长一智，对以后的发展大有好处。\n你还敢顶撞总经理吗? 上次差点被炒鱿鱼，你该吃一堑，长一智啊。',
    examplePinyin:
      'Shībài shí shēnkè fǎnxǐng zìjǐ, shànyú zǒngjié jīngyàn jiàoxùn, chī yī qiàn, zhǎng yī zhì, duì yǐhòu de fāzhǎn dà yǒu hǎochù. \n Nǐ hái gǎn dǐngzhuàng zǒng jīnglǐ ma? Shàngcì chàdiǎn bèi chǎo yóuyú, nǐ gāi chī yī qiàn, zhǎng yī zhì a.',
    exampleMeaning:
      'Khi thất bại, nếu biết tự kiểm điểm sâu sắc, giỏi tổng kết kinh nghiệm và bài học, thì sẽ rất có lợi cho sự phát triển sau này. \nBạn còn dám cãi lại tổng giám đốc không? Lần trước suýt nữa bị sa thải, bạn nên rút kinh nghiệm từ thất bại.',
    arrange:
      '吃一堑长一智 / 善于 / 对 / 自己 /,/ 反省 / 经验 /,/ 失败时 / 教训 / 总结 /,/ 以后的 / 大有 /  深刻 / 好处 / 发展/。/\n你 / 吃一堑 / 上次 /,/ 差点 / 被炒鱿鱼 /,/ 啊 / 长一智 / 该 /。/\n',
  },
  {
    simplified: '丑八怪',
    pinyin: 'chǒu bā ɡuài',
    explanation: '指非常难看的人。',
    explanationPinyin: 'Zhǐ fēicháng nánkàn de rén.',
    meaning: 'Chỉ người rất xấu xí.\n',
    examples: '她长得还算可以，但她的男朋友“丑八怪”似的。 \n猪八戒可是个有名的丑八怪。',
    examplePinyin:
      'Tā zhǎng dé hái suàn kěyǐ, dàn tā de nán péngyǒu “chǒu bā guài” shì de. \nZhūbājiè kěshì gè yǒumíng de chǒubāguài.',
    exampleMeaning:
      'Cô ấy nhìn cũng tạm, nhưng bạn trai cô ấy thì giống như "quái vật".\nTrư Bát Giới là một ‘quái vật’ nổi tiếng.',
    arrange:
      '男朋友 / 她的 / “丑八怪” / 似的 /,/ 还算 / 长得 / 但 / 可以/。/\n是 / 丑八怪 / 有名 / 的 / 猪八戒 / 可是 / 个/。/\n',
  },
  {
    simplified: '丑小鸭',
    pinyin: 'chǒu xiǎo yā',
    explanation: '不为人知的人，或不被别人重视的人。',
    explanationPinyin: 'Bù wéi rénzhī de rén, huò bù bèi biérén zhòngshì de rén.',
    meaning: 'Người không được biết đến hoặc không được coi trọng.\n',
    examples:
      '当年他是一个不为人知的丑小鸭，现在已经是赫赫有名的人物了。\n我们要有这样的信念: 丑小鸭也能变成白天鹅。',
    examplePinyin:
      "Dāngnián tā shì yīgè bù wéi rénzhī de chǒu xiǎo yā, xiànzài yǐjīng shì hèhè yǒumíng de rénwùle. \nWǒmen yào yǒu zhèyàng de xìnniàn: Chǒu xiǎo yā yě néng biàn chéng bái tiān'é.",
    exampleMeaning:
      'Ngày đó anh ấy là một ‘thiên nga xấu xí’ không ai biết, giờ đã trở thành nhân vật nổi tiếng.\nChúng ta phải có niềm tin như vậy: ‘thiên nga xấu xí’ cũng có thể biến thành thiên nga trắng.',
    arrange:
      '他 / 的 / 不为人知 / 已经 / 当年 / 是个 / 赫赫有名 /,/ 现在 / 人物 / 是/。/\n丑小鸭 / 白天鹅 / 变成 / 的 / 我们 / 要有 / 这样的 / 信念: / 也能/。/\n',
  },
  {
    simplified: '出岔子',
    pinyin: 'chū chà zi',
    explanation: '比喻发生差错或事故。',
    explanationPinyin: 'Bǐyù fāshēng chācuò huò shìgù.',
    meaning: 'Ví dụ như xảy ra sai sót hoặc sự cố.',
    examples:
      '在项目实施中，领导的忽视导致了严重出岔子，大家都措手不及。\n昨天的会议上出岔子了，导致大家讨论不顺利。',
    examplePinyin:
      'Zài xiàngmù shíshī zhōng, lǐngdǎo de hūshì dǎozhì le yánzhòng chū chà zi, dàjiā dōu cuòshǒu bùjí.\nZuótiān de huìyì shàng chū chà zi le, dǎozhì dàjiā tǎolùn bù shùnlì.\n',
    exampleMeaning:
      'Trong quá trình triển khai dự án, sự lơ là của lãnh đạo đã dẫn đến sai sót nghiêm trọng, khiến mọi người trở tay không kịp.\nTrong cuộc họp hôm qua đã xảy ra sai sót, khiến cuộc thảo luận không suôn sẻ.',
    arrange:
      '忽视 / 出岔子 / 项目 /,/ 严重 / 的 / 导致 /,/ 实施中 / 领导 / 在 / 措手不及 / 大家 / 了/。/\n导致 / 出岔子 / 上 / 昨天 /,/ 不顺利 / 会议 / 的 / 讨论 / 大家 / 了/。/\n',
  },
  {
    simplified: '出风头',
    pinyin: 'chū fēnɡ tóu',
    explanation: '比喻出头露面，显示自己。',
    explanationPinyin: 'Bǐyù chūtóu lùmiàn, xiǎnshì zìjǐ.',
    meaning: 'Ý chỉ việc xuất đầu lộ diện, thể hiện bản thân.',
    examples: '我喜欢唱歌，也喜欢在聚会上表现一下，出出风头。\n ',
    examplePinyin: 'Wǒ xǐhuān chànggē, yě xǐhuān zài jùhuì shàng biǎoxiàn yīxià, chū chū fēng tóu.\n ',
    exampleMeaning: 'Tôi thích ca hát và thể hiện trong các buổi tụ tập.\n ',
    arrange: '喜欢 / 喜欢 / 我 / 唱歌 /，/ 聚会上 / 也 /，/ 出出风头 / 在 / 表现 / 一下/。/\n',
  },
  {
    simplified: '出花样',
    pinyin: 'chū huā yàng',
    explanation: '耍花招迷惑或欺骗人。',
    explanationPinyin: 'Shuǎ huāzhāo míhuò huò qīpiàn rén.',
    meaning: 'Ba hoa khoác lác\n Nói lời bịp bợm hoặc lừa dối người khác.',
    examples: '看他还能出什么花样，我们暂时别动手。\n 这个骗子花样百出，但破绽还是很明显的。',
    examplePinyin:
      'Kàn tā hái néng chū shén me huā yàng, wǒ men zàn shí bié dòng shǒu.\n Zhè gè piàn zi huā yàng bǎi chū, dàn pò zhàn hái shì hěn míng xiǎn de.',
    exampleMeaning:
      'Xem anh ta còn có thể làm trò gì nữa, tạm thời chúng ta không hành động.\n Kẻ lừa đảo này có nhiều chiêu trò, nhưng sơ hở vẫn rất rõ ràng.',
    arrange:
      '别动手 / 看 / 出 / 他 / 花样 /，/ 我们 / 还能 / 什么 / 暂时/。/\n骗子 / 这个 / 花样 / 明显 / 的 / 百出 /，/ 破绽 / 很 / 但 / 还是/。/\n',
  },
  {
    simplified: '出乱子',
    pinyin: 'chū luàn zi',
    explanation: '出现事故、差错或纠纷。',
    explanationPinyin: 'Chūxiàn shìgù, chācuò huò jiūfēn.',
    meaning: 'Xuất hiện sự cố, sai sót hoặc tranh chấp.',
    examples: '仔细一点儿，已经够烦的了，别再出乱子了。\n 半夜了，他怎么还没回来，不会是出什么乱子了吧!',
    examplePinyin:
      'Zǐxì yī diǎn er, yǐjīng gòu fán de le, bié zài chū luàn zi le.\n Bàn yè le, tā zěnme hái méi huílái, bù huì shì chū shénme luàn zi le ba!',
    exampleMeaning:
      'Cẩn thận chút, đã đủ phiền rồi, đừng để xảy ra chuyện nữa.\n Đêm khuya rồi, sao anh ấy chưa về, có phải đã gặp chuyện gì không?',
    arrange:
      '出乱子 / 别再 / 够 /，/ 已经 /，/ 仔细 / 一点儿 / 烦的了/。/\n半夜 / 出 / 乱子 /，/ 不会是 /，/ 他 / 还没 / 回来 / 吧！/ 什么\n',
  },
  {
    simplified: '出难题',
    pinyin: 'chū nán tí',
    explanation: '给学生出不容易解答的问题。比喻提出使人为难或难办的事情。',
    explanationPinyin:
      'Gěi xuéshēng chū bù róngyì jiědá de wèntí. Bǐyù tíchū shǐ rén wèi nán huò nán bàn de shìqíng.',
    meaning:
      'Làm khó làm dễ\n Đưa ra cho học sinh những câu hỏi khó giải quyết. Ẩn dụ cho việc đặt ra những điều làm người ta khó xử hoặc khó khăn.',
    examples: '儿子常常给我出难题，弄得我很尴尬。\n 少给我出难题，不违反政策的，我可以全力帮你。',
    examplePinyin:
      'Érzi chángcháng gěi wǒ chū nán tí, nòng de wǒ hěn gāngà.\n Shǎo gěi wǒ chū nán tí, bù wéifǎn zhèngcè de, wǒ kěyǐ quánlì bāng nǐ.',
    exampleMeaning:
      'Con trai tôi thường làm khó tôi, khiến tôi rất bối rối.\n Đừng làm khó tôi nữa, nếu không vi phạm chính sách, tôi sẽ giúp hết sức.',
    arrange:
      '出难题 / 儿子 / 弄得 / 我 / 很 / 常常 /，/ 给 / 我 / 尴尬/。/\n不违反 / 少给 / 出难题 / 我可以 /，/ 全力 / 你 /，/ 帮 / 政策 / 的/。/\n',
  },
  {
    simplified: '出气筒',
    pinyin: 'chū qì tǒnɡ',
    explanation: '比喻无故做别人发泄怨愤对象的人。',
    explanationPinyin: 'Bǐyù wúgù zuò biérén fāxiè yuànfèn duìxiàng de rén.',
    meaning: 'Giận cá chém thớt\n Ý nói việc vô cớ làm người khác thành đối tượng để phát tiết nỗi giận.',
    examples:
      '夫妻吵架的时候，千万别把孩子当出气筒，那样会让孩子幼小的心灵受到很大的伤害。\n 你们吵架，爱怎样就怎样，反正别把我当出气筒。',
    examplePinyin:
      'Fūqī chǎojià de shíhòu, qiānwàn bié bǎ háizi dāng chū qì tǒng, nà yàng huì ràng háizi yòuxiǎo de xīnlíng shòudào hěn dà de shānghài.\n Nǐmen chǎojià, ài zěnyàng jiù zěnyàng, fǎnzhèng bié bǎ wǒ dāng chū qì tǒng.',
    exampleMeaning:
      'Khi vợ chồng cãi nhau, đừng trút giận lên con cái, sẽ tổn thương tâm hồn non nớt của chúng.\n Hai người muốn cãi thế nào thì cãi, nhưng đừng lấy tôi ra trút giận.',
    arrange:
      '吵架 / 出气筒 / 夫妻 / 千万 /，/ 心灵 / 当 /，/ 让 / 孩子 / 幼小的 / 的 / 那样 / 不要 / 伤害 / 很大 / 受到/。/\n吵架 / 就怎样 / 我 /，/ 爱怎样 / 反正 /，/ 出气筒 / 别把 / 你们 / 当/。/\n',
  },
  {
    simplified: '出洋相',
    pinyin: 'chū yánɡ xiànɡ',
    explanation: '指因粗心大意或缺乏知识或经验而发生可笑的错误。\n捉弄耍笑使人露出丑相，使人难堪、丢脸。',
    explanationPinyin:
      'Zhǐ yīn cūxīn dàyì huò quēfá zhīshì huò jīngyàn ér fāshēng kěxiào de cuòwù.\nZhuōnòng shuǎxiào shǐ rén lùchū chǒuxiàng, shǐ rén nánkān, diū liǎn.',
    meaning:
      'Làm trò hề\nChỉ những sai lầm gây cười do cẩu thả hoặc thiếu kiến thức, kinh nghiệm.\nTrêu chọc, đùa giỡn khiến người khác lộ ra khuyết điểm, làm người ta khó xử, mất mặt.',
    examples:
      '她初到农村的时候，出了很多洋相，有一次，竟把麦苗当成了韭菜。\n 你别出洋相了，大热天穿个棉袄干啥?',
    examplePinyin:
      "Tā chū dào nóngcūn de shíhòu, chūle hěn duō yáng xiàng, yǒu yīcì, jìng bǎ mài miáo dāng chéng le jiǔcài.\n Nǐ bié chū yáng xiàng le, dà rè tiān chuān gè mián'ǎo gàn shà?",
    exampleMeaning:
      'Lần đầu đến nông thôn, cô ấy đã gặp nhiều tình huống dở khóc dở cười, có lần nhầm lúa non thành hẹ.\n Đừng làm trò cười nữa, trời nóng thế này mà mặc áo bông à?',
    arrange:
      '她 / 出了 /，/ 很多 / 洋相 /，/ 的 / 竟 /，/ 初到 / 农村 / 的 / 把 / 麦苗 / 当成 / 韭菜 / 的 / 一次 / 有 / 了/。/\n穿个 /，/ 大热天 / 干啥？/ 棉袄 / 你 / 出洋相 / 别 / 了\n',
  },
  {
    simplified: '穿连裆裤',
    pinyin: 'chuān lián dānɡ kù',
    explanation: '比喻臭味相投的人联合在一起。也说“穿一条裤子”。',
    explanationPinyin: 'Bǐyù chòuwèixiāngtóu de rén liánhé zài yīqǐ. Yě shuō “chuān yītiáo kùzi”.',
    meaning:
      'Gió tầng nào gặp mây tầng đó\n Là một phép ẩn dụ cho việc những người cùng chí hướng tề tựu lại với nhau. Còn cách nói khác là “穿一条裤子”: ngưu tầm ngưu, mã tầm mã.',
    examples:
      '一些专家和媒体穿连裆裤，真不知道他们的职业道德在哪里。\n 如果房产开发商与地方政府穿连裆裤的话，老百姓简直就没法活了。',
    examplePinyin:
      'Yīxiē zhuānjiā hé méitǐ chuān lián dāng kù, zhēn bù zhīdào tāmen de zhíyè dàodé zài nǎlǐ.\n Rúguǒ fángchǎn kāifā shāng yǔ dìfāng zhèngfǔ chuān lián dāng kù dehuà, lǎobǎixìng jiǎnzhí jiù méi fǎ huó le.',
    exampleMeaning:
      'Một số chuyên gia và phương tiện truyền thông thực sự không biết đạo đức nghề nghiệp của họ ở đâu.\n Nếu các nhà phát triển bất động sản và chính quyền địa phương hợp tác mờ ám, thì người dân sẽ không thể sống nổi.',
    arrange:
      '媒体 / 不知道 / 穿 / 他们的 /，/ 一些 / 连裆裤 / 专家 / 职业道德 / 和 / 在哪里/。/\n如果 / 地方政府 / 穿 / 老百姓 / 的话 /，/ 连裆裤 /了/ 就 / 与 / 房产开发商 / 没法活/。/\n',
  },
  {
    simplified: '穿小鞋',
    pinyin: 'chuān xiǎo xié',
    explanation: '比喻故意刁难。',
    explanationPinyin: 'Bǐyù gùyì diāonàn.',
    meaning: 'Chuyện bé xé ra to\n Một phép ẩn dụ cho việc cố tình làm cho mọi chuyện trở nên khó khăn.',
    examples: '你可别得罪他，他会给你穿小鞋的。\n 他经常给我穿小鞋，我也常打他小报告，谁也不欠谁。',
    examplePinyin:
      'Nǐ kě bié dézuì tā, tā huì gěi nǐ chuān xiǎo xié de.\n Tā jīngcháng gěi wǒ chuān xiǎo xié, wǒ yě cháng dǎ tā xiǎo bàogào, shuí yě bù qiàn shuí.',
    exampleMeaning:
      'Bạn đừng có làm phật lòng anh ta, anh ta sẽ làm khó bạn đấy.\n Anh ta thường gây khó dễ cho tôi, tôi cũng hay tố cáo anh ta, không ai nợ ai.',
    arrange:
      '别 / 你 / 得罪 / 他 / 穿小鞋 / 他 /，/ 会给 / 可 / 的/。/\n打他 / 他 / 我 / 穿小鞋 / 也 / 常 / 经常 / 的 /，/ 给我 / 小报告/，/ 谁也 / 欠谁 / 不/。/\n\n',
  },
  {
    simplified: '闯红灯',
    pinyin: 'chuǎnɡ hónɡ dēnɡ',
    explanation: '比喻无视纪律、制度、原则的限制，做不该做的事情。',
    explanationPinyin: 'Bǐyù wúshì jìlǜ, zhìdù, yuánzé de xiànzhì, zuò bù gāi zuò de shìqíng.',
    meaning:
      'Vượt đèn đỏ\n So sánh việc xem thường kỷ luật, chế độ, nguyên tắc, làm những điều không nên làm.',
    examples:
      '国家正在严格控制人口增长，张女士却连生三胎，这不是在闯红灯吗? 结果受到了严肃的处理。\n 偷拿国家的财产，无疑是闯了红灯，一定会受到处罚。',
    examplePinyin:
      'Guójiā zhèngzài yángé kòngzhì rénkǒu zēngzhǎng, Zhāng nǚshì què lián shēng sān tāi, zhè bù shì zài chuǎng hóng dēng ma? Jiéguǒ shòudào le yánsù de chǔlǐ.\n Tōu ná guójiā de cáichǎn, wúyí shì chuǎng le hóng dēng, yīdìng huì shòudào chǔfá.',
    exampleMeaning:
      'Nhà nước đang kiểm soát tăng trưởng dân số nghiêm ngặt , mà bà Trương lại sinh ba con, chẳng phải là vi phạm luật sao? Kết quả bà đã nhận hình phạt nghiêm khắc.\n Việc ăn cắp tài sản của nhà nước rõ ràng là phạm pháp, chắc chắn sẽ bị trừng phạt.',
    arrange:
      '张女士 / 闯红灯 / 严格 / 国家 /  连生  / 三胎 / 人口增长 /，/  这不是 / 在 / 正在 / 控制 / 吗？\n偷拿 / 闯了红灯 / 一定会 / 国家 /，/ 处罚 / 无疑是 /，/ 受到 / 财产/。/\n',
  },
  {
    simplified: '闯江湖',
    pinyin: 'chuǎnɡ jiānɡ hú',
    explanation:
      '旧时指奔走四方，流浪谋生，从事算卦、表演杂耍、卖药治病等职业。江湖，\n泛指四方各地。也说“闯荡江湖”。',
    explanationPinyin:
      'Jiùshí zhǐ bēnzǒu sìfāng, liúlàng móushēng, cóngshì suànguà, biǎoyǎn záshuǎ, mài yào zhìbìng děng zhíyè. Jiānghú, fàn zhǐ sìfāng gèdì. Yě shuō “chuǎngdàng jiānghú”.',
    meaning:
      'Chỉ người lang bạt, bôn ba kiếm sống bằng bói toán, biểu diễn trò ảo thuật, hoặc bán thuốc chữa bệnh. Cũng gọi là “chu du giang hồ”.',
    examples: '才十六岁，涉世未深，却吵着要闯江湖，真可笑。',
    examplePinyin: 'cái shíliù suì, shè shì wèi shēn, què chǎo zhe yào chuǎng jiāng hú, zhēn kěxiào.',
    exampleMeaning: 'Mới 16 tuổi, chưa hiểu đời mà đã muốn “phiêu bạt giang hồ,” thật là buồn cười.',
    arrange: '十六岁 / 闯江湖 / 吵着 /，/ 涉世未深 /，/ 其实 / 真 /，/ 才 / 可笑 / 要 / 却/。/',
  },
  {
    simplified: '吹胡子瞪眼',
    pinyin: 'chuī hú zi dènɡ yǎn',
    explanation: '比喻人发脾气时凶狠的样子。',
    explanationPinyin: 'bǐyù rén fā píqì shí xiōnghěn de yàngzi',
    meaning: 'Hình ảnh hung dữ khi ai đó tức giận.',
    examples: '你别对人吹胡子瞪眼的，你能不能温和一点儿? \n别看他会场上吹胡子瞪眼的，其实心虚得很。',
    examplePinyin:
      'Nǐ bié duì rén chuī hú zi dèng yǎn de, nǐ néng bùnéng wēnhé yīdiǎn er? \nBié kàn tā huìchǎng shàng chuī hú zi dèng yǎn de, qíshí xīnvǒu dé hěn.',
    exampleMeaning:
      'Bạn đừng có mặt mũi khó chịu với người khác, có thể nhẹ nhàng hơn một chút không? \nĐừng thấy anh ta có vẻ cứng rắn trong hội trường, thực ra tâm trạng rất không ổn.',
    arrange:
      '吹胡子瞪眼 / 能不能 /，/ 你 / 对人 / 一点儿？ / 别 / 温和 / 的 / 你\n吹胡子瞪眼 / 心虚 / 会场上 /，/ 他 / 很 / 别看 / 其实 / 的 / 得/。/\n',
  },
  {
    simplified: '吹牛皮',
    pinyin: 'chuī niú pí',
    explanation: '指吹牛，说大话。',
    explanationPinyin: 'Zhǐ chuīniú, shuō dàhuà.',
    meaning: 'Chỉ việc khoe khoang, nói chuyện phóng đại.\n',
    examples: '吹牛皮的人做不了什么大事。 \n小张就喜欢吹牛皮，别信他的。',
    examplePinyin:
      'Chuī niú pí de rén zuò bùliǎo shénme dàshì. \nXiǎo zhāng jiù xǐhuān chuī niú pí, bié xìn tā de.',
    exampleMeaning:
      'Những kẻ khoác lác không thể làm được việc lớn.\nTiểu Trương thích khoác lác, đừng tin vào anh ta.',
    arrange: '吹牛皮 / 大事 / 做不了 / 人 / 什么/。/\n小张 / 吹牛皮 / 别 / 喜欢 / 他 /，/ 就 / 的 / 信/。/\n',
  },
  {
    simplified: '催命判官',
    pinyin: 'cuī mìnɡ pàn ɡuān',
    explanation:
      '按迷信的说法，指阴曹地府里催人快死的鬼。比\n喻逼迫别人尽快做某事、使人不得安生的人。也说“催命鬼”。',
    explanationPinyin:
      'Àn míxìn de shuōfǎ, zhǐ Yīncáo Dìfǔ lǐ cuī rén kuài sǐ de guǐ. Bǐyù bīpò biérén jǐnkuài zuò mǒu shì, shǐ rén bùdé ānshēng de rén. Yě shuō "cuīmìng guǐ".',
    meaning:
      'Theo mê tín, “quỷ thúc mạng” là hồn ma từ địa phủ thúc giục người ta chết. Ám chỉ người thúc ép người khác làm nhanh, gây áp lực lớn. Cũng có thể nói là “催命鬼”',
    examples: '他很迷信，身体又不好，最怕催命判官来把他提走。\n',
    examplePinyin: 'Tā hěn míxìn, shēntǐ yòu bù hǎo, zuì pà cuī mìng pàn guān lái bǎ tā tí zǒu.',
    exampleMeaning: 'Anh ấy rất mê tín và sức khỏe yếu, sợ nhất là “phán quan tử thần” đến lấy mạng.',
    arrange: '迷信 / 最怕 / 他 /，/ 催命判官 / 很 /，/ 身体 / 又不好 / 来 / 把 / 提走 / 他/。/\n',
  },
  {
    simplified: '打白条',
    pinyin: 'dǎ bái tiáo',
    explanation: '特指只给欠条、不给现金的做法。',
    explanationPinyin: 'Tè zhǐ zhǐ gěi qiàntiáo, bù gěi xiànjīn de zuòfǎ.',
    meaning: 'Ghi giấy nợ\n Ý chỉ hành vi ghi nợ lại chứ không trả bằng hiện kim.',
    examples:
      '矿主只发给矿工每人两百元的生活费，其余的都打了白条。\n 农民工收到私企老板打的白条，可以运用劳动法来维护自己的权益。',
    examplePinyin:
      'Kuàngzhǔ zhǐ fā gěi kuànggōng měi rén liǎng bǎi yuán de shēnghuófèi, qíyú de dōu dǎ le bái tiáo.\n Nóngmín gōng shōudào sīqǐ lǎobǎn dǎ de bái tiáo, kěyǐ yùnyòng láodòngfǎ lái wéihù zìjǐ de quányì.',
    exampleMeaning:
      'Chủ mỏ chỉ phát cho công nhân mỗi người 200 tệ tiền sinh hoạt, phần còn lại thì ghi nợ hết.\n Chủ thuê không trả lương mà ghi nợ thì người nông dân có thể áp dụng luật lao động để bảo vệ quyền lợi của mình.',
    arrange:
      '生活费/两百元/每人/矿工/矿主/发给，其余的/打了/都/白条/。/\n劳动法/可以/运用/来/权益/维护/自己的/白条/的/农民工/私企老板/收到/。/',
  },
  {
    simplified: '打板子',
    pinyin: 'dǎ bǎn zi',
    explanation: '比喻打屁股。',
    explanationPinyin: 'Bǐyù dǎ pìgu.',
    meaning: 'Ám chỉ việc phạt bằng cách đánh vào mông.',
    examples: '小时候，爸爸经常打我们板子。',
    examplePinyin: 'Xiǎoshíhòu, bàba jīngcháng dǎ wǒmen bǎn zi.',
    exampleMeaning: 'Hồi nhỏ, cha thường phạt tôi bằng cách đánh vào mông.',
    arrange: '打/我们/经常/小时候/板子/爸爸/。/',
  },
  {
    simplified: '打包票',
    pinyin: 'dǎ bāo piào',
    explanation: '比喻保证。也说“打保票”',
    explanationPinyin: 'Bǐyù bǎozhèng. Yě shuō “dǎ bǎopiào”',
    meaning: 'Đảm bảo chắc chắn hoặc cam đoan về một điều gì đó sẽ xảy ra. Cũng gọi là "打保票".\n',
    examples: '我敢打包票，你们队准赢。\n他们俩肯定是恋人，我打包票。',
    examplePinyin:
      'Wǒ gǎn dǎ bāo piào, nǐmen duì zhǔn yíng. \nTāmen liǎ kěndìng shì liànrén, wǒ dǎ bāo piào.',
    exampleMeaning:
      'Tôi dám đảm bảo, đội các bạn chắc chắn sẽ thắng.\nĐừng có đùa giỡn với tôi, hãy nói chuyện nghiêm túc đi.',
    arrange: '准赢/我/打包票/敢/你们队/。/\n打包票/是/恋人/他们俩/肯定/我/。/\n',
  },
  {
    simplified: '大草包',
    pinyin: 'dà cǎo bāo',
    explanation: '比喻没有才能的人。',
    explanationPinyin: 'Bǐyù méiyǒu cáinéng de rén.',
    meaning: 'Ám chỉ người không có năng lực hoặc tài năng.',
    examples: '他自卑得很，常骂自己大草包。',
    examplePinyin: 'Tā zìbēi dé hěn, cháng mà zìjǐ dà cǎo bāo.',
    exampleMeaning: 'Anh ấy rất tự ti, thường tự chửi mình là đồ vô dụng.',
    arrange: '自卑/自己/是/草包/大/骂/常/很/他/。/',
  },
  {
    simplified: '打第一炮',
    pinyin: 'dǎ dì yī pào',
    explanation: '就是第一个发言，第一个讲话。也说“打头阵”、“打头炮”。',
    explanationPinyin: 'Jiùshì dì yī gè fāyán, dì yī gè jiǎnghuà. Yě shuō “dǎtóuzhèn”,“dǎtóu pào”.',
    meaning: 'Là người phát biểu đầu tiên, nói trước. Cũng gọi là “打头阵”、“打头炮”.\n',
    examples: '今天我来打第一炮，希望能抛砖引玉。\n我来打第一炮，你们多给我加加油。',
    examplePinyin:
      'Jīntiān wǒ lái dǎ dì yī pào, xīwàng néng pāozhuānyǐnyù. \nWǒ lái dǎ dì yī pào, nǐmen duō gěi wǒ jiā jiāyóu.',
    exampleMeaning:
      'Hôm nay tôi đến để ‘phát pháo đầu tiên’, hy vọng có thể ‘ném gạch để thu hút ngọc’.\nTôi đến để ‘phát pháo đầu tiên’, các bạn hãy ủng hộ tôi nhiều hơn.',
    arrange: ' 抛砖引玉/希望/我/来/第一炮/打/今天/能/。/\n加加油/多/来/第一炮/打/我/给/。/\n',
  },
  {
    simplified: '打掉牙齿往肚里咽',
    pinyin: 'dǎ diào yá chǐ wǎnɡ dù lǐ yàn',
    explanation: '因理亏等原因，受委屈，而不声张。',
    explanationPinyin: 'Yīn lǐkuī děng yuányīn, shòu wěiqu, ér bù shēngzhāng.',
    meaning: 'Ngậm bồ hòn làm ngọt\n Vì lý do gì đó mà phải chịu ấm ức nhưng lại không nói ra.',
    examples:
      '自知理亏，只好打掉牙齿往肚里咽，不敢发作。\n 他做了手脚，但搞错了，所以败得一塌涂地，但只能打掉牙齿往肚里咽。',
    examplePinyin:
      'Zì zhī lǐ kuī, zhǐ hǎo dǎ diào yá chǐ wǎng dù lǐ yān, bù gǎn fāzuò.\n Tā zuò le shǒujiǎo, dàn gǎo cuò le, suǒyǐ bài de yī tǎ tú dì, dàn zhǐ néng dǎ diào yá chǐ wǎng dù lǐ yān.',
    exampleMeaning:
      'Biết mình sai, chỉ còn cách cắn răng nuốt giận, không dám phát tác.\n Anh ta đã làm ăn gian dối, nhưng làm sai, nên thua thảm hại, chỉ còn cách cắn răng nuốt giận.',
    arrange:
      '理亏/只好/咽/往肚里/牙齿/打掉/自知/发作/不敢/。/\n搞错了/做了/手脚/他，但/一塌糊涂/败得，只能/往肚里/咽/牙齿/打掉/。/',
  },
  {
    simplified: '打底子',
    pinyin: 'dǎ dǐzi',
    explanation: '比喻打好基础，做好准备。',
    explanationPinyin: 'Bǐyù dǎ hǎo jīchǔ, zuò hǎo zhǔnbèi.',
    meaning: 'Biểu thị việc tạo dựng nền tảng tốt, chuẩn bị kỹ càng.\n',
    examples: '做什么事都要先打好底子，才能镇定自若。\n184\n学习汉语要好好打底子，急于求成是不行的。',
    examplePinyin:
      'Zuò shénme shì dōu yào xiān dǎ hǎo dǐ zi, cáinéng zhèndìng zìruò.  \nXuéxí hànyǔ yào hǎohǎo dǎ dǐ zi, jíyú qiú chéng shì bùxíng de.',
    exampleMeaning:
      'Học tiếng Trung phải ‘đặt nền tảng tốt’, không thể nóng vội.\nKhi thi, tôi thường ‘lên dàn ý trước’ rồi mới viết.',
    arrange: ' 镇定自若/才能/底子/打好/什么事/做/要/。/\n打好/底子/学习/汉语，要/是/不行的/急于求成/。/',
  },
  {
    simplified: '打腹稿',
    pinyin: 'dǎ fù ɡǎo',
    explanation: '比喻在心里先形成一个提纲。',
    explanationPinyin: 'Bǐyù zài xīnlǐ xiān xíngchéng yīgè tígāng.',
    meaning: 'Biểu thị việc hình thành một phác thảo trong đầu.\n',
    examples: '考试的时候，我常常先打腹稿，再动笔。\n你先打好腹稿再发言，别像上次那样出洋相。',
    examplePinyin:
      'Kǎoshì de shíhòu, wǒ chángcháng xiān dǎ fù gǎo, zài dòngbǐ. \nNǐ xiān dǎ hǎo fù gǎo zài fāyán, bié xiàng shàng cì nàyàng chūyángxiàng.',
    exampleMeaning:
      'Bạn hãy ‘lên dàn ý trước’ rồi hãy phát biểu, đừng như lần trước làm mất mặt."\nTối nay bạn tôi đã mời, lâu lắm rồi không ‘ăn tiệc’, hôm nay phải ăn cho đã.',
    arrange: '动笔/再/我/考试/的时候/常常/打/腹稿/。/\n发言/先/打好/腹稿，像/那样/别/上次/出洋相/再/。/',
  },
  {
    simplified: '打官腔',
    pinyin: 'dǎ guān qiāng',
    explanation: '比喻利用规章、手续等来推托或责备，不解决实际问题。官腔，指旧 时官场中说的门面话。',
    explanationPinyin:
      'Bǐyù lìyòng guīzhāng, shǒuxù děng lái tuītuō huò zébèi, bù jiějué shíjì wèntí. Guānqiāng, zhǐ jiùshí guānchǎng zhōng shuō de mén mian huà.',
    meaning:
      'Biểu thị việc lợi dụng quy định, thủ tục để từ chối hoặc đổ lỗi, không giải quyết vấn đề thực tế. “官腔” chỉ những lời nói mang tính hình thức, trong quan trường xưa.',
    examples:
      '他只会给你打官腔，讲一些大道理，实际问题一个也不解决。\n官员们若只知道打官腔，话说得又虚又空，怎么让老百姓信服?',
    examplePinyin:
      'Tā zhǐ huì gěi nǐ dǎ guān qiāng, jiǎng yīxiē dà dàolǐ, shíjì wèntí yīgè yě bù jiějué. \nGuānyuánmen ruò zhǐ zhīdào dǎ guān qiāng, huàshuō dé yòu xū yòu kōng, zěnme ràng lǎobǎixìng xìnfú?',
    exampleMeaning:
      'Nhanh chóng tìm bạn đời đi, cứ ‘độc thân’ lâu dài không được đâu.\nAnh ta chỉ biết ‘nói những lời lẽ quan chức’, nói những lý thuyết lớn lao, mà không giải quyết vấn đề thực tế nào.',
    arrange:
      ' 打官腔/只会/他/一些/给/大道理/讲/你，问题/实际/解决/不/一个/。/\n怎么/信服/老百姓，虚又空/又/的话/打官腔/只知道/若/官员们/?/',
  },
  {
    simplified: '打官司',
    pinyin: 'dǎ ɡuān sī',
    explanation: '指到司法机关调解纠纷，裁决是非。',
    explanationPinyin: 'Zhǐ dào sīfǎ jīguān tiáojiě jiūfēn, cáijué shìfēi.',
    meaning: 'Đưa tranh chấp đến cơ quan tư pháp để hòa giải và phân xử đúng sai.',
    examples: '小时候，我和弟弟之间有打不完的官司。',
    examplePinyin: 'Xiǎoshíhòu, wǒ hé dìdì zhījiān yǒu dǎ bù wán de guān si.',
    exampleMeaning: 'Hồi nhỏ, tôi và em trai thường xuyên cãi nhau liên miên.',
    arrange: '小时候/官司/打不完/之间/和弟弟/我/。/',
  },
  {
    simplified: '打光棍',
    pinyin: 'dǎ ɡuānɡ ɡùn',
    explanation: '指男人不结婚。',
    explanationPinyin: 'Zhǐ nánrén bù jiéhūn.',
    meaning: 'Chỉ việc đàn ông không lập gia đình.\n',
    examples: '因为没有钱，所以这里的很多男人都打光棍。\n快点儿找对象吧，老打光棍可不行。',
    examplePinyin:
      'Yīnwèi méiyǒu qián, suǒyǐ zhèlǐ de hěnduō nánrén dōu dǎ guāng gùn. \nKuài diǎn er zhǎo duìxiàng ba, lǎo dǎ guāng gùn kě bùxíng.',
    exampleMeaning:
      'Đừng có ‘đánh du kích’ như vậy nữa, hãy đến nhà tôi ở.\nBởi vì không có tiền, nên nhiều đàn ông ở đây đều ‘độc thân’.',
    arrange: ' 这里的/没有钱/所以/很多/男人/因为，打光棍/都/。/\n不行/老/找/快点儿/吧/对象，打光棍/可/。/',
  },
  {
    simplified: '打哈哈',
    pinyin: 'dǎ hā hā',
    explanation: '比喻顾左右而言他，故意说别的事情。',
    explanationPinyin: 'Bǐyù gù zuǒyòu ér yán tā, gùyì shuō bié de shìqíng.',
    meaning: 'Biểu thị việc nói vòng vo, cố ý nói những chuyện khác.',
    examples: '你别跟我打哈哈，快说正经事。\n上课的时候，那位老师经常和我们打哈哈，讲不出什么专业的知识。',
    examplePinyin:
      'Nǐ bié gēn wǒ dǎ hā hā, kuài shuō zhèngjīng shì. \nShàngkè de shíhòu, nà wèi lǎoshī jīngcháng hé wǒmen dǎ hā hā, jiǎng bù chū shénme zhuānyè de zhīshì.',
    exampleMeaning:
      'Đừng có đùa cợt với tôi, mau nói chuyện nghiêm túc đi.\nTrong giờ học, thầy giáo đó thường hay nói đùa với chúng tôi mà chẳng giảng dạy kiến thức chuyên môn gì cả.',
    arrange:
      ' 快别/ 说/正经事。/我/打哈哈，/跟\n都不讲/知识。/上课的时候，/什么专业的 /和我们/那位老师/经常/打哈哈，',
  },
  {
    simplified: '打黑枪',
    pinyin: 'dǎ hēi qiāng',
    explanation: '比喻暗里使坏，乘人不备时突然开枪。比喻暗中对人进行突然袭击。也说“打冷枪”。',
    explanationPinyin:
      'Bǐyù ànlǐ shǐhuài, chéng rén bù bèi shí túrán kāi qiāng. Bǐyù ànzhōng duì rén jìnxíng túrán xíjí. Yě shuō “dǎ lěngqiāng”.',
    meaning:
      'Đánh lén: Ẩn dụ cho việc lén lút làm điều ác và nổ súng bất ngờ khi người ta chưa chuẩn bị sẵn sàng.\n Nó là một phép ẩn dụ cho việc thực hiện một cuộc tấn công bất ngờ vào ai đó một cách bí mật. Nó cũng được nói cách khác là “打冷枪”:đâm sau lưng.',
    examples:
      '那个人很阴险，常常打黑枪，你得防备他。\n 有意见当面提出来，没必要在背后打冷枪。\n 改革者肯定要触犯到某些人的利益，引起一些人的不满，有人还可能会向他们打冷枪。',
    examplePinyin:
      'Nàgè rén hěn yīnxiǎn, chángcháng dǎ hēi qiāng, nǐ dé fángbèi tā. \nYǒu yìjiàn dāngmiàn tí chūlái, méi bìyào zài bèihòu dǎ lěng qiāng. \nGǎigé zhě kěndìng yào chùfàn dào mǒu xiē rén de lìyì, yǐnqǐ yīxiē rén de bùmǎn, yǒurén hái kěnéng huì xiàng tāmen dǎ lěng qiāng.',
    exampleMeaning:
      'Người đó rất nham hiểm, thường xuyên ngấm ngầm hãm hại người khác, anh phải đề phòng hắn.\nCó ý kiến thì cứ nói thẳng ra, không cần phải đâm sau lưng.\nNgười làm cải cách chắc chắn sẽ động chạm đến lợi ích của một số người, gây ra sự bất mãn, thậm chí có kẻ còn ngấm ngầm hãm hại họ.',
    arrange:
      '打黑枪，/ 他常常 //很阴险，/ 那个人 / 你 / 得防备他。\n有意见 / 当面 / 打冷枪。/ 没必要 /提出来，/ 在背后 \n改革者 / 要 / 一定 / 利益，/ 某些人的 / 触犯 / 的不满，/ 引起一些人 / 向他们 / 打冷枪。/ 可能',
  },
  {
    simplified: '大红人',
    pinyin: 'dà hóng rén',
    explanation: '指受到领导信任、重用的人。',
    explanationPinyin: 'Zhǐ shòudào lǐngdǎo xìnrèn, zhòngyòng de rén.',
    meaning: 'Thân tín: Chỉ những người được lãnh đạo tin tưởng, trọng dụng.',
    examples:
      '会耍嘴皮子、会拍马屁的人成为领导面前的大红人，可不是个好现象。\n 他可是公司的大红人，你敢得罪他吗?',
    examplePinyin:
      'Huì shuǎ zuǐ pí zi, huì pāimǎpì de rén chéngwéi lǐngdǎo miànqián de dà hóng rén, kěbù shìgè hǎo xiànxiàng. Tā kěshì gōngsī de dà hóng rén, nǐ gǎn dézuì tā ma?',
    exampleMeaning:
      'Những người biết nịnh bợ và nói khéo lại trở thành thân tính của lãnh đạo, đó không phải là hiện tượng tốt.\n Anh ta là người quan trọng của công ty, bạn có dám xúc phạm anh ta không?',
    arrange:
      '耍嘴皮子、/ 会 / 拍马屁的人 / 领导面前的 / 会成为 /个好现象。/ 大红人，/ 可不是 \n可是/ 他/ 公司 /他/ 公司的大红人，/ 得罪 /你敢/ 吗?',
  },
  {
    simplified: '打交道',
    pinyin: 'dǎ jiāo dào',
    explanation: '指交往。',
    explanationPinyin: 'Zhǐ jiāowǎng.',
    meaning: 'Chỉ việc giao tiếp, kết bạn.\n\n',
    examples: '我所在的单位常常和外国人打交道。\n我已经和他打了二十多年的交道了，彼此都很熟悉。\n',
    examplePinyin:
      'Wǒ suǒzài de dānwèi chángcháng hé wàiguó rén dǎ jiāo dào. \nWǒ yǐjīng hé tā dǎle èrshí duō nián de jiāo dào le, bǐcǐ dōu hěn shúxi.',
    exampleMeaning:
      'Cơ quan tôi thường xuyên làm việc với người nước ngoài.\nTôi đã làm việc với anh ấy hơn 20 năm, chúng tôi rất quen thuộc với nhau.',
    arrange:
      '我的单位 / 和外国人 / 打交道。/常常 /  所在\n我和他 / 打了 /彼此 / 已经/都/二十多年的交道了，/ 很熟悉。',
  },
  {
    simplified: '大老粗',
    pinyin: 'dà lǎo cū',
    explanation: '粗人一个。',
    explanationPinyin: 'Cū rén yīgè.',
    meaning:
      'Người thô lỗ, ít học, thường ám chỉ những người không có học thức, thiếu văn hóa hoặc cư xử cục cằn, dân chợ búa\n',
    examples: '你想，一个大老粗，能做针线活吗?\n 多认几个字吧，否则，长大后，就成大老粗了。',
    examplePinyin:
      'Nǐ xiǎng, yīgè dà lǎo cū, néng zuò zhēnxiàn huó ma? \nDuō rèn jǐ gè zì ba, fǒuzé, zhǎng dà hòu, jiù chéng dà lǎo cū le.',
    exampleMeaning:
      'Cậu nghĩ xem, một người thô lỗ có thể làm khâu vá không?\n Học thêm vài chữ đi, nếu không lớn lên sẽ thành người thô thiển.',
    arrange:
      '一个大老粗， / 能做 / 你想，/ 针线活 / 吗?\n多认 / 否则，/ 长大后 / 几个字吧，/ 就成 / 大老粗了。',
  },
  {
    simplified: '打擂台',
    pinyin: 'dǎ lèi tái',
    explanation: '比喻上台比武，当面竞争。',
    explanationPinyin: 'Bǐyù shàngtái bǐwǔ, dāngmiàn jìngzhēng.',
    meaning: 'Cạnh tranh trực tiếp hoặc đối đầu công khai.',
    examples: '现在找工作就是打擂台，一对一的公平竞争。',
    examplePinyin: 'Xiànzài zhǎo gōngzuò jiùshì dǎ lèi tái, yī duì yī de gōngpíng jìngzhēng.',
    exampleMeaning: 'Tìm việc bây giờ giống như thi đấu đối kháng, phải cạnh tranh công bằng.',
    arrange: '找工作 / 现在 / 就是 / 打擂台，/ 的/ 一对一/ 公平竞争。',
  },
  {
    simplified: '打落水狗',
    pinyin: 'dǎ luò shuǐ gǒu',
    explanation: '痛打落入水中的狗。比喻彻底打垮已经失势了的\n坏人。',
    explanationPinyin: 'Tòngdǎ luò rù shuǐzhōng de gǒu. Bǐyù chèdǐ dǎkuǎ yǐjīng shīshìle de huàirén.',
    meaning: 'Tấn công không khoan nhượng kẻ đã thất thế hoặc mất quyền lực.',
    examples: '从多年的斗争经验中认识到，落水狗还是要痛打的，因为它一旦上了岸，\n还会继续咬人。',
    examplePinyin:
      'Cóng duōnián de dòuzhēng jīngyàn zhōng rènshí dào, luò shuǐ gǒu háishì yào tòngdǎ di, yīnwèi tā yīdàn shàngle àn, hái huì jìxù yǎo rén.',
    exampleMeaning:
      'Từ kinh nghiệm đấu tranh nhiều năm, chúng ta phải đánh kẻ đã sa cơ thật mạnh, vì nếu nó lên bờ, nó sẽ lại cắn người.',
    arrange:
      '认识到，/从 / 斗争经验 / 多年的 / 落水狗 / 痛打的，/ 还是要的， /一旦 / 上了岸，/因为 / 会继续 / 咬人。',
  },
  {
    simplified: '打马虎眼',
    pinyin: 'dǎ mǎ hǔ yǎn',
    explanation: '比喻故意掩饰、装糊涂蒙骗人。',
    explanationPinyin: 'Bǐyù gùyì yǎnshì, zhuāng hútú mēngpiàn rén.',
    meaning: 'Biểu thị việc cố ý che giấu hoặc giả vờ ngu ngốc để lừa người khác.\n',
    examples:
      '他常常跟警察打马虎眼，有几次还真混了过去。 \n你别跟我打马虎眼，快点儿说实话。 \n坏人经常跟我们打马虎眼，我们绝不上当。',
    examplePinyin:
      'Tā chángcháng gēn jǐngchá dǎ mǎ hǔ yǎn, yǒu jǐ cì hái zhēn hùnle guòqù. \nNǐ bié gēn wǒ dǎ mǎ hǔ yǎn, kuài diǎnr shuō shíhuà. \nHuàirén jīngcháng gēn wǒmen dǎ mǎ hǔ yǎn, wǒmen jué bù shàngdàng.',
    exampleMeaning:
      'Anh ấy thường xuyên đánh lừa cảnh sát, có vài lần thật sự đã thoát.\nĐừng đánh lừa tôi, nhanh chóng nói sự thật đi.\nKẻ xấu thường xuyên đánh lừa chúng tôi, chúng tôi tuyệt đối không mắc bẫy.',
    arrange:
      '他常常/ 打马虎眼，/ 跟警察 / 有几次 / 混了过去。/ 还真\n别/ 你 / 打马虎眼，/跟我 / 快点儿 / 说 / 实话。\n坏人 / 经常 / 打马虎眼，/ 跟我们 / 我们 / 不上当。/ 绝',
  },
  {
    simplified: '打埋伏',
    pinyin: 'dǎ mái fú',
    explanation: '原指军事用语，指预先隐蔽起来，待机行动。比喻隐瞒某些事实或不\n暴露情况。',
    explanationPinyin:
      'Yuán zhǐ jūnshì yòngyǔ, zhǐ yùxiān yǐnbì qǐlái, dàijī xíngdòng. Bǐyù yǐnmán mǒu xiē shìshí huò bù bàolù qíngkuàng.',
    meaning:
      'Trong quân sự, ám chỉ việc ẩn mình, chờ thời cơ để hành động. Ví với việc che giấu sự thật hoặc không bộc lộ tình hình.',
    examples: '说评书的喜欢在结束的时候打埋伏，吸引听众每场都来听。\n\n',
    examplePinyin:
      'Shuō píngshū de xǐhuān zài jiéshù de shíhòu dǎ mái fú, xīyǐn tīngzhòng měi chǎng dōu lái tīng.',
    exampleMeaning:
      'Những người kể chuyện thường tạo tình tiết bất ngờ vào cuối buổi để giữ khán giả quay lại nghe lần sau.',
    arrange: '在结束 /喜欢/ 说评书的人/ 打埋伏，/ 的时候 / 吸引 / 每场 / 听众 / 都来听。',
  },
  {
    simplified: '打破铁饭碗',
    pinyin: 'dǎ pò tiě fàn wǎn',
    explanation: ' 指放弃固定的工作。',
    explanationPinyin: 'Zhǐ fàngqì gùdìng de gōngzuò.',
    meaning: 'Từ bỏ công việc ổn định.',
    examples: '现在很多企业都打破铁饭碗，重新竞争上岗。\n',
    examplePinyin: 'Xiànzài hěnduō qǐyè dōu dǎ pò tiě fàn wǎn, chóngxīn jìngzhēng shànggǎng.',
    exampleMeaning:
      'Nhiều doanh nghiệp hiện nay đã phá bỏ chế độ “việc làm trọn đời,” yêu cầu nhân viên cạnh tranh lại từ đầu.',
    arrange: '重新/ 很多企业 / 现在 / 打破铁饭碗，/ 都 / 竞争上岗。',
  },
  {
    simplified: '大气候',
    pinyin: 'dà qì hòu',
    explanation: '大环境。',
    explanationPinyin: 'Dà huánjìng.',
    meaning: 'Hoàn cảnh, tình thế chung.',
    examples: '在这样的大气候下，想廉洁也不容易哦。\n 在全球民族独立的大气候下，印度人民也站起来了。',
    examplePinyin:
      'Zài zhèyàng de dà qì hòu xià, xiǎng liánjié yě bù róngyì ó. \nZài quánqiú mínzú dúlì de dà qì hòu xià, yìn duó rénmín yě zhàn qǐláile.',
    exampleMeaning:
      'Trong bối cảnh thế này, muốn giữ liêm chính cũng không dễ.\n Trong bối cảnh toàn cầu độc lập dân tộc, người dân Ấn Độ cũng đứng lên.',
    arrange:
      '大气候下，/ 在这样 / 的 / 廉洁 / 想 / 也不容易 / 哦。\n在全球 / 的 / 大气候下，/ 站起来 / 民族独立/ 印度人民 / 了。',
  },
  {
    simplified: '打前站 ',
    pinyin: 'dǎ qián zhàn',
    explanation: '指行军或集体出发前，先派人到将要去的地点\n联系或安排有关事务。',
    explanationPinyin:
      'Zhǐ xíngjūn huò jítǐ chūfā qián, xiān pài rén dào jiāngyào qù dì dìdiǎn liánxì huò ānpái yǒuguān shìwù.',
    meaning: 'Phái người đi trước để liên hệ hoặc sắp xếp công việc cho đoàn.',
    examples: '这次去深圳实习，我们先派一个人去打前站。',
    examplePinyin: 'Zhè cì qù shēnzhèn shíxí, wǒmen xiān pài yīgè rén qù dǎ qián zhàn.',
    exampleMeaning: 'Lần này đi thực tập ở Thâm Quyến, chúng tôi sẽ cử người đi trước để chuẩn bị.',
    arrange: '去深圳 / 这次 / 实习，/ 我们先派 / 去打前站。/ 的人 / 一个',
  },
  {
    simplified: '搭鹊桥',
    pinyin: 'dā què qiáo',
    explanation: '指为男女牵线、撮合。',
    explanationPinyin: 'Zhǐ wèi nánnǚ qiānxiàn, cuòhé.',
    meaning: 'Se duyên\n Chỉ người làm trung gian cho việc kết nối nam nữ.',
    examples: '他经常给厂里的青年人搭鹊桥。\n 你喜欢谁呀? 我来给你们搭鹊桥。',
    examplePinyin:
      'Tā jīngcháng gěi chǎng lǐ de qīngnián rén dā què qiáo. \nNǐ xǐhuān shéi ya? Wǒ lái gěi nǐmen dā què qiáo.',
    exampleMeaning:
      'Anh ấy thường làm mai cho những người trẻ trong xưởng.\n Bạn thích ai? Để tôi làm mai cho hai người.',
    arrange: '经常 / 厂里的 /他/ 给 / 青年人 / 搭鹊桥。\n喜欢 / 谁 / 呀？/ 你 / 我给 / 来 / 你们 / 搭鹊桥。',
  },
  {
    simplified: '打入冷宫',
    pinyin: 'dǎ rù lěng gōng',
    explanation: '放到一边，不予理睬。',
    explanationPinyin: 'Fàng dào yībiān, bù yǔ lǐcǎi.',
    meaning: 'Để sang một bên, không để ý.\n\n',
    examples: '公司换了领导以后，小刘就被打入冷宫了。\n打入冷宫的滋味不好受，特别对于小王这样的活泼人士。',
    examplePinyin:
      'Gōngsī huàn le lǐngdǎo yǐhòu, xiǎo Liú jiù bèi dǎ rù lěng gōng le.\nDǎ rù lěng gōng de zīwèi bù hǎoshòu, tèbié duìyú xiǎo Wáng zhèyàng de huópō rénshì.',
    exampleMeaning:
      'Sau khi công ty thay lãnh đạo, Tiểu Lưu liền bị thất sủng.\nBị thất sủng không dễ chịu chút nào, đặc biệt là đối với người năng động như Tiểu Vương.',
    arrange:
      '换了 / 公司 / 领导 / 以后，/ 小刘就 / 被 / 打入冷宫了。\n的滋味 / 打入冷宫 / 不好受，/ 特别 / 对于 / 活泼的人士。/ 小王/ 这样的',
  },
  {
    simplified: '打入十八层地狱',
    pinyin: 'dǎ rù shí bā céng dì yù',
    explanation: '比喻境况十分困苦。',
    explanationPinyin: 'Bǐyù jìngkuàng shífēn kùnkǔ.',
    meaning: 'Rơi vào tình cảnh cực kỳ khó khăn và khốn khổ.',
    examples: '我要把经常打小报告的人打入十八层地狱。',
    examplePinyin: 'Wǒ yào bǎ jīngcháng dǎ xiǎo bàogào de rén dǎ rù shí bā céng dì yù.',
    exampleMeaning: 'Tôi muốn tống những kẻ hay mách lẻo xuống tầng thứ mười tám của địa ngục!',
    arrange: '打入十八层地狱。 /的人/ 我要 / 经常 / 打小报告',
  },
  {
    simplified: '打如意算盘',
    pinyin: 'dǎ rú yì suàn pán',
    explanation: '比喻做美梦，只从好的一方面去考虑、打算。',
    explanationPinyin: 'Bǐyù zuò měimèng, zhǐ cóng hǎo de yī fāngmiàn qù kǎolǜ, dǎsuàn.',
    meaning: 'Biểu thị việc mơ mộng, chỉ suy nghĩ về những mặt tốt.\n',
    examples:
      '他总喜欢打自己的如意算盘，但一心想着自己，难免与别人冲突。\n指望投资黄金赚钱，你就别打你的如意算盘了，你看最近金价跌了吧。\n他还在打他的如意算盘，但市场变化太快了，铜价掉头直下。',
    examplePinyin:
      'Tā zǒng xǐhuān dǎ zìjǐ de rú yì suàn pán, dàn yīxīn xiǎngzhe zìjǐ, nánmiǎn yǔ biérén chōngtū.\nZhǐwàng tóuzī huángjīn zhuànqián, nǐ jiù bié dǎ nǐ de rú yì suàn pán le, nǐ kàn zuìjìn jīnjià diē le ba.\nTā hái zài dǎ tā de rú yì suàn pán, dàn shìchǎng biànhuà tài kuài le, tóngjià diàotóu zhíxià.',
    exampleMeaning:
      'Anh ta luôn thích tính toán theo ý mình, nhưng chỉ nghĩ đến bản thân thì khó tránh khỏi xung đột với người khác.\nNếu mong đầu tư vàng để kiếm tiền, thì đừng tính toán viển vông nữa, cậu xem giá vàng gần đây đã giảm rồi đấy.\nAnh ta vẫn đang tính toán theo kế hoạch của mình, nhưng thị trường thay đổi quá nhanh, giá đồng đã lao dốc rồi.',
    arrange:
      '总喜欢 / 打自己的如意算盘，/他/ 但 / 想着自己，/一心 / 难免 / 冲突。/与别人 \n投资 / 赚钱，/ 黄金 / 指望 / 你/打如意算盘子， /就别/ 最近 / 跌了吧。 / 看金价\n市场变化 / 他 / 还在 / 但 / 太快了，/ 掉头直下。/铜价 / 打如意算盘，',
  },
  {
    simplified: '打时间差',
    pinyin: 'dǎ shí jiān chā',
    explanation: '比喻利用时间上的差数来实现某种目的。',
    explanationPinyin: 'Bǐyù lìyòng shíjiān shàng de chā shǔ lái shíxiàn mǒu zhǒng mùdì.',
    meaning: 'Biểu thị việc tận dụng chênh lệch về thời gian để đạt được mục tiêu nào đó.\n',
    examples: '他故意跟我打时间差，所以我没有见到他。\n我们公司跟他们打了一个时间差，挣到了许多钱。',
    examplePinyin:
      'Tā gùyì gēn wǒ dǎ shí jiān chā, suǒyǐ wǒ méiyǒu jiàndào tā.\nWǒmen gōngsī gēn tāmen dǎ le yī gè shí jiān chā, zhèng dào le xǔduō qián.',
    exampleMeaning:
      'Anh ta cố tình lợi dụng chênh lệch thời gian với tôi, nên tôi đã không gặp được anh ta.\nCông ty chúng tôi tận dụng chênh lệch thời gian với họ và kiếm được rất nhiều tiền.',
    arrange:
      '故意/ 跟我 / 打时间差，/ 所以 / 我/ 他/ 没有见到他。\n我们公司 / 打时间差， / 跟他们 / 了 / 挣到了 / 许多钱。',
  },
  {
    simplified: '打水漂',
    pinyin: 'dǎ shuǐ piào',
    explanation: '比喻没有了，白费。',
    explanationPinyin: 'Bǐyù méiyǒule, báifèi.',
    meaning: 'Biểu thị việc đã mất đi, trở thành vô nghĩa.\n',
    examples:
      '你要是买那个东西，那你的钱肯定打水漂了，因为那个东西一点儿用也没有。\n我今天去面试的车钱算是打水漂了。',
    examplePinyin:
      'Nǐ yàoshi mǎi nàgè dōngxī, nà nǐ de qián kěndìng dǎ shuǐ piào le, yīnwèi nàgè dōngxī yīdiǎn er yòng yě méiyǒu. \nWǒ jīntiān qù miànshì de chē qián suànshì dǎ shuǐ piào le.',
    exampleMeaning:
      'Nếu bạn mua cái đó, tiền của bạn chắc chắn sẽ ‘đánh nước trôi’, vì cái đó không có chút tác dụng nào.\nTiền xe tôi đi phỏng vấn hôm nay coi như ‘đánh nước trôi’.',
    arrange:
      '买那个东西，/ 你要是 / 你的钱 /那/ 肯定 / 打水漂了，/ 那个东西/ 都没有。/ 一点儿用 / 因为 \n今天 / 我 / 去面试/ 的车钱 / 打水漂了。 / 算是',
  },
  {
    simplified: '打死老虎',
    pinyin: 'dǎ sǐ lǎo hǔ',
    explanation: '比喻只能打死了的老虎，可是对活老虎却没有办法。',
    explanationPinyin: 'Bǐyù zhǐ néng dǎ sǐle de lǎohǔ, kěshì duì huó lǎohǔ què méiyǒu bànfǎ.',
    meaning:
      'Biểu thị việc chỉ có thể đối phó với những nguy hiểm đã qua, nhưng không thể đối phó với những nguy hiểm đang hiện hữu.',
    examples: '我们不能只会打死老虎，也要想办法打真老虎。\n他那点儿本事呀，就能打死老虎。',
    examplePinyin:
      'Wǒmen bùnéng zhǐ huì dǎ sǐ lǎo hǔ, yě yào xiǎng bànfǎ dǎ zhēn lǎohǔ. \nTā nà diǎnr běnshì ya, jiù néng dǎ sǐ lǎo hǔ.',
    exampleMeaning:
      'Chúng ta không thể chỉ biết đánh người thất thế, mà còn phải tìm cách đánh bại người mạnh thật sự.\nAnh ta thì có khả năng gì chứ, chỉ biết đánh người thất thế.',
    arrange:
      '只会 / 打死老虎，/ 我们 / 不能/ 也要 / 想办法 / 打真老虎。 \n他 / 那点儿本事 / 就能 / 打死老虎。/ 呀，',
  },
  {
    simplified: '打太极拳',
    pinyin: 'dǎ tài jí quán',
    explanation:
      '比喻遇事推托敷衍。常指政府各部门间把需解决的问题推给别的 部门，结果是效率低下，谁也不解决。 ',
    explanationPinyin:
      'Bǐyù yù shì tuītuō fūyǎn. Cháng zhǐ zhèngfǔ gè bùmén jiān bǎ xū jiějué de wèntí tuī gěi bié de bùmén, jiéguǒ shì xiàolǜ dīxià, shéi yě bù jiějué.',
    meaning:
      'Ví dụ khi gặp việc thì thoái thác và làm việc một cách qua loa. Thường chỉ các cơ quan chính phủ đùn đẩy vấn đề cần giải quyết cho cơ quan khác, kết quả là hiệu quả thấp, không ai giải quyết được vấn đề.',
    examples:
      '曾经有一段时间，政府部门常打太极拳，办点事真难。\n政府机构改革已经这么多年了，而这个小地方的政府官员还在打太极拳。',
    examplePinyin:
      'Céngjīng yǒu yīduàn shíjiān, zhèngfǔ bùmén cháng dǎ tài jí quán, bàn diǎn shì zhēn nán.\nZhèngfǔ jīgòu gǎigé yǐjīng zhème duō nián le, ér zhège xiǎo dìfāng de zhèngfǔ guānyuán hái zài dǎ tài jí quán.',
    exampleMeaning:
      'Đã có một thời gian, các cơ quan chính phủ thường đùn đẩy trách nhiệm, làm một chút việc thật là khó.\nCải cách cơ cấu chính phủ đã diễn ra nhiều năm rồi, vậy mà các quan chức chính quyền ở vùng nhỏ này vẫn còn đùn đẩy trách nhiệm.',
    arrange:
      ' 打太极拳， / 一段时间，/ 政府部门常 / 真难。/ 办点事/曾经有 \n政府机构 / 已经 /的政府官员 / 这么多年了，/ 这个 / 而/ 小地方 / 还在 /改革/ 打太极拳。',
  },
  {
    simplified: '打天下',
    pinyin: 'dǎ tiān xià',
    explanation: '比喻闯天下，创业。',
    explanationPinyin: 'Bǐyù chuǎng tiānxià, chuàngyè.',
    meaning: 'Mạo hiểm ra ngoài lập nghiệp, tự mình gây dựng sự nghiệp.',
    examples: '一个人打天下真的很难。',
    examplePinyin: 'Yīgè rén dǎ tiān xià zhēn de hěn nán.',
    exampleMeaning: 'Tự mình xây dựng sự nghiệp quả thực rất khó khăn.',
    arrange: '一个人 / 真的 / 很难。/打天下 ',
  },
  {
    simplified: '打头阵',
    pinyin: 'dǎ tóu zhèn',
    explanation: '比喻第一个上场。',
    explanationPinyin: 'Bǐyù dì yī gè shàngchǎng.',
    meaning: 'Biểu thị người đầu tiên tham gia.\n',
    examples: '今天小张打头阵，希望旗开得胜。\n打头阵的人需要有很好的心理素质，不能慌。',
    examplePinyin:
      'Jīntiān xiǎo zhāng dǎ tóu zhèn, xīwàng qíkāidéshèng. \nDǎ tóu zhèn de rén xūyào yǒu hěn hǎo de xīnlǐ sùzhì, bùnéng huāng.',
    exampleMeaning:
      'Người đi đầu cần có tâm lý tốt, không được hoảng loạn.\nBạn đang ‘đánh mặt mình cho tròn’ làm gì vậy?',
    arrange: '希望 / 今天 / 小张 / 打头阵，/ 旗开得胜。\n打头阵的人 / 心理素质，/ 需要 / 有很好的 / 不能慌。',
  },
  {
    simplified: '打退堂鼓',
    pinyin: 'dǎ tuì táng gǔ',
    explanation: '原指旧时官吏坐堂问事完了，打退堂鼓。比喻中途退缩，不想参加了。',
    explanationPinyin:
      'Yuán zhǐ jiùshí guānlì zuòtáng wèn shì wánliǎo, dǎtuìtánggǔ. Bǐyù zhōngtú tuìsuō, bùxiǎng cānjiāle.',
    meaning:
      'Chùn chân mỏi gối\n Ban đầu dùng để ám chỉ các quan chức ngày xưa đã ngồi trong tòa để thẩm vấn nhưng lại rút lui.\n Là phép ẩn dụ cho việc bỏ dở giữa chừng và không muốn tham gia nữa.',
    examples:
      '房贷新政频出，不少购房者开始打退堂鼓。\n他追求自己的心上人追了一年了，对方丝毫不为所动，他终于打起了退堂鼓。\n知道他想参加，我就想打退堂鼓了。',
    examplePinyin:
      'Fángdài xīnzhèng pín chū, bù shǎo gòufáng zhě kāishǐ dǎ tuì táng gǔ. \nTā zhuīqiú zìjǐ de xīnshàngrén zhuīle yī niánle, duìfāng sīháo bù wéi suǒ dòng, tā zhōngyú dǎ qǐle tuì táng gǔ. \nZhīdào tā xiǎng cānjiā, wǒ jiù xiǎng dǎ tuì táng gǔ le.',
    exampleMeaning:
      'Chính sách vay mua nhà mới liên tục được đưa ra, nhiều người mua nhà bắt đầu chùn bước.\n Anh ấy theo đuổi người mình thích đã một năm, nhưng người kia hoàn toàn không rung động, cuối cùng anh ấy đã chùn bước.\n Biết anh ấy muốn tham gia, tôi đã thấy chùn bước.',
    arrange:
      '房贷 / 频出，/ 不少 / 购房者 / 新政 / 开始 / 打退堂鼓。\n追了一年了，/ 他 / 自己的心上人 / 对方 /追求 / 丝毫 / 不为所动，/ 终于 /他/ 打起了退堂鼓。\n就想/ 他 / 想 / 参加，/ 知道 / 我 / 打退堂鼓了。',
  },
  {
    simplified: '打下手 ',
    pinyin: 'dǎ xià shǒu',
    explanation: '比喻给别人做辅助性的工作。',
    explanationPinyin: 'Bǐyù gěi biérén zuò fǔzhù xìng de gōngzuò.',
    meaning: 'Làm công việc phụ trợ cho người khác.',
    examples: '今天你炒菜，我给你打下手。',
    examplePinyin: 'Jīntiān nǐ chǎocài, wǒ gěi nǐ dǎ xià shǒu.',
    exampleMeaning: 'Hôm nay bạn nấu ăn, tôi sẽ làm trợ thủ cho bạn.',
    arrange: '炒菜，/ 今天 / 你 / 给你 / 打下手。/ 我 ',
  },
  {
    simplified: '打小报告',
    pinyin: 'dǎ xiǎo bào gào',
    explanation: '不怀好意地把别人的言行反映给领导。',
    explanationPinyin: 'Bù huái hǎoyì dì bǎ biérén de yánxíng fǎnyìng gěi lǐngdǎo.',
    meaning: 'Tố cáo hành vi của người khác với lãnh đạo với ý đồ xấu.',
    examples:
      '他总是在老师面前打小报告，真让人讨厌。\n有他在场，大家讲话都很谨慎，因为都知道他爱向领导打小报告。',
    examplePinyin:
      'Tā zǒng shì zài lǎoshī miànqián dǎ xiǎo bào gào, zhēn ràng rén tǎoyàn. \nYǒu tā zàichǎng, dàjiā jiǎnghuà dōu hěn jǐnshèn, yīnwèi dōu zhīdào tā ài xiàng lǐngdǎo dǎ xiǎo bào gào.',
    exampleMeaning:
      'Anh ta lúc nào cũng mách lẻo trước mặt thầy cô, thật đáng ghét.\nCó anh ta ở đó, mọi người đều nói chuyện rất cẩn thận vì biết anh ta thích mách với lãnh đạo.',
    arrange:
      '他 / 老师面前 / 打小报告，/总是 /在 / 让人 / 真 / 讨厌。\n都知道他 / 向领导 / 爱/ 打小报告。/ 有他在场，/因为/ 讲话 / 大家 / 都很谨慎，',
  },
  {
    simplified: '打牙祭',
    pinyin: 'dǎ yá jì',
    explanation: '就是解馋。',
    explanationPinyin: 'Jiùshì jiěchán.',
    meaning: 'Đơn giản là để thỏa mãn cơn thèm.\n',
    examples:
      '今天晚上朋友请客，好久没有打牙祭，今天可得好好吃它一顿。\n好久不打牙祭了，我觉得自己好像有点儿瘦了。',
    examplePinyin:
      'Jīntiān wǎnshàng péngyǒu qǐngkè, hǎojiǔ méiyǒu dǎ yá jì, jīntiān kě dé hǎo hào chī tā yī dùn. \nHǎojiǔ bù dǎ yá jì le, wǒ juédé zìjǐ hǎoxiàng yǒudiǎnr shòule.',
    exampleMeaning:
      'Tối nay bạn bè mời ăn, lâu rồi chưa được ăn ngon, hôm nay nhất định phải ăn một bữa thật đã.\nLâu rồi không được ăn uống thịnh soạn, tôi cảm thấy mình gầy đi một chút rồi.',
    arrange:
      '今天晚上 / 请客，/ 好久 /朋友 / 没有打牙祭，/ 可得 / 今天 /好好吃它一顿。\n好久 / 打牙祭了，/ 不 / 我 / 自己 / 好像 /觉得/ 有点儿瘦了。',
  },
  {
    simplified: '打哑谜',
    pinyin: 'dǎ yǎ mí',
    explanation: '故意不说出事情的真实情况而又让人难以猜测。',
    explanationPinyin: 'Gùyì bù shuō chū shìqíng de zhēnshí qíngkuàng ér yòu ràng rén nányǐ cāicè.',
    meaning: 'Cố tình che giấu sự thật, khiến người khác khó đoán được.',
    examples: '你别跟我打哑谜，快说话。',
    examplePinyin: 'Nǐ bié gēn wǒ dǎ yǎ mí, kuài shuōhuà.',
    exampleMeaning: 'Đừng chơi trò úp mở với tôi, nói thẳng ra đi.',
    arrange: '快/ 别 / 跟我 /你 / 打哑谜，/ 说话。',
  },
  {
    simplified: '打掩护 ',
    pinyin: 'dǎ yǎn hù',
    explanation: '比喻掩饰某种行为。',
    explanationPinyin: 'Bǐyù yǎnshì mǒu zhǒng xíngwéi.',
    meaning: 'Che đậy hoặc ngụy trang một hành vi nào đó.',
    examples: '小时候，他做坏事的时候，我常常给他打掩护。\n',
    examplePinyin: 'Xiǎoshíhòu, tā zuò huàishì de shíhòu, wǒ chángcháng gěi tā dǎ yǎn hù.',
    exampleMeaning: 'Hồi nhỏ, mỗi khi nó làm chuyện xấu, tôi thường giúp nó che giấu.',
    arrange: '他/ 小时候，/给他 / 做 / 的时候，/ 坏事 / 我常常 / 打掩护。',
  },
  {
    simplified: '打游击',
    pinyin: 'dǎ yóu jī',
    explanation: '到处跑，无固定的地方。',
    explanationPinyin: 'Dàochù pǎo, wú gùdìng dì dìfāng.',
    meaning: 'Đi khắp nơi, không có chỗ ở cố định.\n\n',
    examples: '我现在还没有固定的住所，到处打游击。\n别这样打游击了，到我家去住吧。',
    examplePinyin:
      'Wǒ xiànzài hái méiyǒu gùdìng de zhùsuǒ, dàochù dǎ yóu jī.\nBié zhèyàng dǎ yóu jī le, dào wǒ jiā qù zhù ba.',
    exampleMeaning:
      'Hiện tại tôi vẫn chưa có chỗ ở cố định, phải di chuyển khắp nơi như đánh du kích.\nĐừng sống kiểu du kích như vậy nữa, đến nhà tôi ở đi.',
    arrange: '现在 / 我 / 还没有 / 的住所，/固定 / 到处打游击。\n到我家 / 这样 / 打游击了，/ 别 / 去住吧。',
  },
  {
    simplified: '打预防针',
    pinyin: 'dǎ yù fáng zhēn',
    explanation: '指提前提醒。也说“打防疫针”。',
    explanationPinyin: 'Zhǐ tíqián tíxǐng. Yě shuō “dǎ fángyì zhēn”.',
    meaning: 'Cảnh báo hoặc nhắc nhở trước để đề phòng. Cũng gọi là “打防疫针”.',
    examples: '我妈妈爸爸经常给我打预防针。',
    examplePinyin: 'Wǒ māmā bàba jīngcháng gěi wǒ dǎ yù fáng zhēn.',
    exampleMeaning: 'Cha mẹ tôi thường nhắc nhở trước để tôi đề phòng những tình huống xấu.',
    arrange: '我妈妈爸爸 / 给我 / 打预防针。/ 经常 ',
  },
  {
    simplified: '打圆场',
    pinyin: 'dǎ yuán chǎng',
    explanation: '比喻为打开僵局而从中调解或提出折中办法。大事化小，小事化了。给别人一个台阶。',
    explanationPinyin:
      'Bǐyù wèi dǎkāi jiāngjú ér cóngzhōng tiáojiě huò tíchū zhé zhōng bànfǎ. Dàshì huà xiǎo, xiǎoshì huàle. Gěi biérén yīgè táijiē.',
    meaning:
      'Ẩn dụ việc mở nút thắt để hòa giải hoặc đưa ra giải pháp vừa lòng đôi bên.\n Làm việc lớn hóa nhỏ, việc nhỏ hóa không. Để cho người khác một lối thoát.',
    examples:
      '小夫妻又闹别扭了，我这个做长辈的只好出面打圆场。\n 《夜宴》首映式上，主角迟到，导演赶紧打圆场。',
    examplePinyin:
      'Xiǎo fūqī yòu nàobièniule, wǒ zhège zuò cháng bèi de zhǐ hào chūmiàn dǎ yuán chǎng.\n “Yèyàn” shǒu yìng shì shàng, zhǔjiǎo chídào, dǎoyǎn gǎnjǐn dǎ yuán chǎng.',
    exampleMeaning:
      'Vợ chồng trẻ lại giận dỗi nhau, tôi là bậc trưởng bối đành phải ra tay hòa giải.\n Tại buổi ra mắt "Dạ Yến", diễn viên chính đến muộn, đạo diễn phải vội vàng đứng ra xoa dịu tình hình.',
    arrange:
      '小夫妻 / 闹别扭了，/ 又 / 这个 / 只好 / 做长辈的 / 我 / 出面 / 打圆场。\n《夜宴》首映式上，/ 迟到，/ 导演 / 主角 /赶紧 / 打圆场。',
  },
  {
    simplified: '打照面',
    pinyin: 'dǎ zhào miàn',
    explanation: '指见面、不期而遇。',
    explanationPinyin: 'Zhǐ jiànmiàn, bù qī ér yù.',
    meaning: 'Chỉ việc gặp mặt, bất ngờ gặp nhau.\n\n',
    examples: '刚才我和小李打了个照面，他好像很忙。\n他和我们打了个照面就走了，没来得及说句话。',
    examplePinyin:
      'Gāngcái wǒ hé xiǎo lǐ dǎle gè zhào miàn, tā hǎoxiàng hěn máng. \nTā hé wǒmen dǎle gè zhào miàn jiù zǒule, méi láidéjí shuō jù huà.',
    exampleMeaning:
      'Anh ấy gặp chúng tôi rồi đi, không kịp nói chuyện.\nHôm nay Tiểu Trương đi đầu, hy vọng ‘cờ phát triển tốt’.',
    arrange:
      '好像 / 我和小李 / 打了个照面，/ 刚才 / 他 / 很忙。\n他 / 和我们 / 就走了, / 没来得及 / 打了个照面 / 说句话。',
  },
  {
    simplified: '打折扣',
    pinyin: 'dǎ zhé kòu',
    explanation:
      '原为商业用语，即降低商品价格。\n(1) 比喻达不到预定的标准。\n( 2) 比喻不完全按规矩来做。\n(3)比喻不能完全相信某种言论或做法。',
    explanationPinyin:
      'Yuán wèi shāngyè yòngyǔ, jí jiàngdī shāngpǐn jiàgé. \n(1) Bǐyù dá bù dào yùdìng de biāozhǔn. \n(2) Bǐyù bù wánquán àn guījǔ lái zuò. \n(3) Bǐyù bùnéng wánquán xiāngxìn mǒu zhǒng yánlùn huò zuòfǎ.',
    meaning:
      'Ban đầu là một thuật ngữ thương mại, nghĩa là giảm giá hàng hóa.\n(1) Ví dụ như không đạt được tiêu chuẩn dự kiến.\n(2) Ví dụ như không hoàn toàn tuân thủ quy tắc.\n(3) Ví dụ như không thể hoàn toàn tin tưởng vào một lời nói hoặc cách làm nào đó.',
    examples:
      '他说话喜欢夸张，你要打点折扣，不可以完全相信的。\n政策如果在执行过程中一层层地打折扣，那这个政策恐怕就不会有什么实际\n的效果了。',
    examplePinyin:
      'Tā shuōhuà xǐhuān kuāzhāng, nǐ yào dǎ diǎn zhé kòu, bù kěyǐ wánquán xiāngxìn de.\nZhèngcè rúguǒ zài zhíxíng guòchéng zhōng yī céng céng dì dǎ zhé kòu, nà zhège zhèngcè kǒngpà jiù bù huì yǒu shénme shíjì de xiàoguǒle. \n',
    exampleMeaning:
      'Anh ấy nói chuyện thích phóng đại, bạn cần phải giảm bớt một chút, không thể hoàn toàn tin tưởng được.\nNếu chính sách trong quá trình thực hiện bị giảm hiệu lực từng tầng một, thì chính sách đó e rằng sẽ không có hiệu quả thực tế nào.',
    arrange:
      '他说话 / 喜欢 / 你要 /夸张, / 不可以 / 完全 / 打点折扣, / 相信的。\n政策 / 在执行过程中 /如果 / 一层层地 / 打折扣，/ 那这个政策 / 就不会 / 有什么 / 恐怕 / 实际的效果了。\n',
  },
  {
    simplified: '打肿脸充胖子',
    pinyin: 'dǎ zhǒng liǎn chōng pàng zi',
    explanation: '没有那么大的能力却硬要装作有这样的能力。',
    explanationPinyin: 'Méiyǒu nàme dà de nénglì què yìng yào zhuāng zuò yǒu zhèyàng de nénglì.',
    meaning: 'Người không có khả năng lớn nhưng cố tình giả vờ có khả năng như vậy.\n',
    examples: '你这是打肿脸充胖子，何苦呢?\n你别打肿脸充胖子了，你有多少钱我还不知道?',
    examplePinyin:
      'Nǐ zhè shì dǎ zhǒng liǎn chōng pàng zi, hékǔ ne? \nNǐ bié dǎ zhǒng liǎn chōng pàng zi le, nǐ yǒu duōshǎo qián wǒ hái bù zhīdào?',
    exampleMeaning:
      'Đừng có ‘đánh mặt mình cho tròn’, tôi còn không biết bạn có bao nhiêu tiền.\nLàm bất cứ việc gì cũng phải ‘đặt nền tảng tốt’ trước, mới có thể bình tĩnh.',
    arrange:
      ' 这是 / 充胖子，/ 你 / 打肿脸 / 何苦呢? \n你 / 打肿脸 / 充胖子了, / 别 / 有多少钱 / 我还 / 你 / 不知道？',
  },
  {
    simplified: '打主意',
    pinyin: 'dǎ zhǔ yì',
    explanation: '就是想主意。',
    explanationPinyin: 'Jiùshì xiǎng zhǔyì.',
    meaning: 'Đơn giản là nghĩ ra ý tưởng.\n\n',
    examples: '我已经打好主意了，咱们就这么办。\n你千万别打他的主意，他不会同意的。',
    examplePinyin:
      'Wǒ yǐjīng dǎ hǎo zhǔ yì le, zánmen jiù zhème bàn. \nNǐ qiān wàn bié dǎ tā de zhǔ yì, tā bù huì tóngyì de.',
    exampleMeaning:
      'Tôi đã quyết định, chúng ta cứ làm như vậy.\nBạn đừng có đánh vào ý tưởng của anh ta, anh ấy sẽ không đồng ý đâu.',
    arrange:
      '打好主意了，/ 我 / 咱们 / 就 / 已经 / 这么办。\n你 / 别 / 千万 / 他不会 / 打他的主意,/ 同意的。',
  },
  {
    simplified: '大嘴巴',
    pinyin: 'dà zuǐ ba',
    explanation: '不能保守秘密的人。',
    explanationPinyin: 'Bùnéng bǎoshǒu mìmì de rén.',
    meaning: 'Người không thể giữ bí mật.',
    examples: '他是个大嘴巴，总喜欢说别人的秘密。\n你不要把所有的事都告诉他，他是个大嘴巴。',
    examplePinyin:
      'Tā shìgè dà zuǐ ba, zǒng xǐhuān shuō biérén de mìmì. \nNǐ bùyào bǎ suǒyǒu de shì dōu gàosù tā, tā shìgè dà zuǐ ba.',
    exampleMeaning:
      'Anh ta là người hay nói lộ chuyện, luôn thích tiết lộ bí mật của người khác.\nĐừng kể hết mọi chuyện cho anh ta, vì anh ta là kẻ hay ba hoa.\n',
    arrange:
      '他 / 是个 /说别人的/ 总喜欢 / 大嘴巴，/ 秘密。\n你 / 把所有的事 / 不要 / 告诉他，/ 他是个 / 都 / 大嘴巴。',
  },
  {
    simplified: '带头羊',
    pinyin: 'dài tóu yáng',
    explanation: '指带头的人。也说“领头羊”。',
    explanationPinyin: 'Zhǐ dàitóu de rén. Yě shuō “lǐngtóu yáng”.',
    meaning: 'Chỉ người dẫn đầu, cũng gọi là “领头羊”.',
    examples:
      '一个公司要想办好，必须得有一个好的“带头羊”。 \n小时候，我常做伙伴们的“带头羊”，什么事都走在前面。',
    examplePinyin:
      'Yīgè gōngsī yào xiǎng bàn hǎo, bìxū dé yǒu yīgè hǎo de “dài tóu yáng”. \nXiǎoshíhòu, wǒ cháng zuò huǒbànmen de “dài tóu yáng”, shénme shì dōu zǒu zài qiánmiàn.',
    exampleMeaning:
      'Một công ty muốn hoạt động tốt, cần phải có một ‘người dẫn đầu’ tốt.\nKhi còn nhỏ, tôi thường là ‘người dẫn đầu’ của bạn bè, luôn đi trước mọi việc.',
    arrange:
      '要想/ 办好，/ 必须 / 一个公司 / 一个 / 得有 / 好的“带头羊”。\n什么事 / 小时候，/ 我 / 伙伴们的 /常做 / “带头羊”，/ 都走在前面。',
  },
  {
    simplified: '担风险',
    pinyin: 'dān fēng xiǎn',
    explanation: '指承当可能发生的危险。',
    explanationPinyin: 'Zhǐ chéngdāng kěnéng fāshēng de wéixiǎn.',
    meaning: 'Bất chấp hiểm nguy\n Chỉ việc chấp nhận nguy hiểm có thể xảy ra.',
    examples:
      '生产新产品，肯定是要担风险的，但绝不能因此而停步不前。\n 开拓新的市场，是要担风险的，但只要做好市场调研，有的放矢，就很有希望成功。',
    examplePinyin:
      'Shēngchǎn xīn chǎnpǐn, kěndìng shì yào dān fēng xiǎn de, dàn jué bùnéng yīncǐ ér tíng bù bù qián. \nKāità xīn de shìchǎng, shì yào dān fēng xiǎn de, dàn zhǐyào zuò hǎo shìchǎng tiáo yán, yǒudìfàngshǐ, jiù hěn yǒu xīwàng chénggōng.',
    exampleMeaning:
      'Sản xuất sản phẩm mới chắc chắn phải đối mặt với rủi ro, nhưng tuyệt đối không thể vì thế mà dừng lại.\n Khai thác thị trường mới cũng phải chịu rủi ro, nhưng chỉ cần làm tốt nghiên cứu thị trường, nhắm đúng mục tiêu, thì rất có hy vọng thành công.',
    arrange:
      '生产 / 肯定是 /新产品，/  要担风险的，/ 而 / 但绝不能因此 / 停步不前。\n开拓 / 是要 / 新的市场，/ 担风险的, / 但只要做好 / 市场调研，/ 成功。/有的放矢, / 就很有希望',
  },
  {
    simplified: '担干系',
    pinyin: 'dān gān xì',
    explanation: '比喻承担责任。',
    explanationPinyin: 'Bǐyù chéngdān zérèn.',
    meaning: 'Nhận trách nhiệm\n Ý chỉ việc gánh vác trách nhiệm.',
    examples:
      '医院为了证明自己诊断无误，会让病人做很多检查，哪怕是一点小病, 他们不愿意担干系。\n 他不能做领导，遇到大事，他一点都不愿担干系。',
    examplePinyin:
      'Yīyuàn wèile zhèngmíng zìjǐ zhěnduàn wúwù, huì ràng bìngrén zuò hěnduō jiǎnchá, nǎpà shì yīdiǎn xiǎo bìng, tāmen bù yuànyì dān gān xì.\nTā bùnéng zuò lǐngdǎo, yù dào dàshì, tā yīdiǎn dōu bù yuàn dān gān xì.',
    exampleMeaning:
      'Bệnh viện để chứng minh chẩn đoán của mình là đúng, sẽ yêu cầu bệnh nhân làm rất nhiều xét nghiệm, dù chỉ là một căn bệnh nhỏ.\n Họ không muốn chịu trách nhiệm. Anh ấy không thể làm lãnh đạo, khi gặp việc lớn, anh ta hoàn toàn không muốn chịu trách nhiệm.',
    arrange:
      '医院 / 诊断无误, / 做很多检查，/ 为了证明自己 / 会让病人 / 哪怕是 / 一点小病，/ 不愿意 / 担干系。/他们 \n不能 / 他 / 遇到大事，/ 他 / 担干系。/ 做领导，/一点都不愿',
  },
  {
    simplified: '单身贵族',
    pinyin: 'dān shēn guì zú',
    explanation: '快乐的单身者。',
    explanationPinyin: 'Kuàilè de dānshēn zhě.',
    meaning: 'Người độc thân sống vui vẻ và thoải mái.',
    examples: '想做单身贵族，你似乎还缺点什么。\n',
    examplePinyin: 'Xiǎng zuò dān shēn guì zú, nǐ sìhū hái quēdiǎn shénme.',
    exampleMeaning: 'Nếu muốn trở thành người độc thân vui vẻ, có lẽ bạn còn thiếu chút gì đó.',
    arrange: '想做 / 你 / 似乎 / 还 / 单身贵族，/ 缺点什么。',
  },
  {
    simplified: '当红娘',
    pinyin: 'dāng hóng niáng',
    explanation: '指充当为男女婚姻或其他事情牵线搭桥的人。',
    explanationPinyin: 'Zhǐ chōngdāng wèi nánnǚ hūnyīn huò qítā shìqíng qiānxiàndāqiáo de rén.',
    meaning:
      'Ông Tơ bà Nguyệt\n Chỉ người đóng vai trò kết nối trong hôn nhân nam nữ hoặc những chuyện khác.',
    examples:
      '她很热衷于当红娘，成功介绍了好几对，看到新人们幸福地走进婚姻的殿堂，她也感到由衷的高兴。\n小张和小李结婚了，还是我牵的线，我当的红娘。',
    examplePinyin:
      'Tā hěn rèzhōng yú dāng hóng niáng, chénggōng jièshàole hǎojǐ duì, kàn dào xīnrénmen xìngfú dì zǒu jìn hūnyīn de diàntáng, tā yě gǎndào yóuzhōng de gāoxìng. \nXiǎo zhāng hé xiǎo lǐ jiéhūnle, háishì wǒ qiān de xiàn, wǒ dāng de hóng niáng.',
    exampleMeaning:
      'Cô ấy rất nhiệt tình làm mai, đã thành công giới thiệu nhiều cặp, thấy các cặp đôi hạnh phúc bước vào lễ đường, cô cũng cảm thấy vui vẻ từ đáy lòng.\n Anh Trương và cô Lý đã kết hôn, cũng chính là tôi đã se duyên cho họ.',
    arrange:
      '她/很热衷于/ 成功 /好几对, / 介绍了/ 走进婚姻的殿堂, / 当红娘，/看到新人们幸福地/ 也感到 /她 / 由衷的高兴。\n小张/ 结婚了，/ 和小李 / 还是 / 我牵的线，/ 我当的红娘。',
  },
  {
    simplified: '挡箭牌',
    pinyin: 'dǎng jiàn pái',
    explanation:
      '即盾牌，古代用来防护身体、遮挡刀箭的武器。比喻推脱责任的借\n口。或者比喻起遮掩、保护作用的人。',
    explanationPinyin:
      'Jí dùnpái, gǔdài yòng lái fánghù shēntǐ, zhēdǎng dāo jiàn de wǔqì. Bǐyù tuītuō zérèn de jièkǒu. Huòzhě bǐyù qǐ zhēyǎn, bǎohù zuòyòng de rén.',
    meaning:
      'Chiếc khiên thời cổ, ví với lời biện hộ để trốn tránh trách nhiệm hoặc người đóng vai trò bảo vệ, che chắn.',
    examples: '你别拿我当挡箭牌，我很无辜的，什么也不知道。\n\n',
    examplePinyin: 'Nǐ bié ná wǒ dāng dǎng jiàn pái, wǒ hěn wúgū de, shénme yě bù zhīdào.',
    exampleMeaning: 'Đừng lấy tôi làm “tấm khiên” để đỡ đòn, tôi vô can và chẳng biết gì cả.',
    arrange: '你 / 别 / 挡箭牌，/  拿我当/ 我 / 不知道。/ 很无辜的，/ 什么也 ',
  },
  {
    simplified: '倒打一耙',
    pinyin: 'dào dǎ yī pá',
    explanation:
      '现在多用来比喻自己干了坏事不承认，反而对检举人反咬一口;\n  或者是不接受别人的批评，反而指责批评的人。',
    explanationPinyin:
      "Xiànzài duōyòng lái bǐyù zìjǐ gànle huàishì bù chéngrèn, fǎn'ér duì jiǎnjǔ rén fǎnyǎo yīkǒu; huòzhě shì bù jiēshòu biérén de pīpíng, fǎn'ér zhǐzé pīpíng de rén.",
    meaning:
      'Trả đũa\n Hiện nay thường dùng để chỉ việc làm điều xấu nhưng không thừa nhận, mà còn quay lại làm hại người tố cáo;\n hoặc không tiếp thu sự phê phán của người khác mà lại chỉ trích đối phương.',
    examples:
      '他出于好心，在路上救了那个受伤的人，把他送到医院，可伤者家属却倒打一耙，说是他撞的，真是好人难做啊。\n',
    examplePinyin:
      'Tā chū yú hǎoxīn, zài lùshàng jiùle nàgè shòushāng de rén, bǎ tā sòng dào yīyuàn, kě shāng zhě jiāshǔ què dào dǎ yī pá, shuō shì tā zhuàng de, zhēnshi hǎorén nán zuò a. \n',
    exampleMeaning:
      'Vì lòng tốt, anh ấy đã cứu người bị thương trên đường và đưa họ đến bệnh viện, nhưng gia đình nạn nhân lại vu khống, nói rằng anh ta đã gây ra tai nạn, thật sự khó làm người tốt.\n ',
    arrange:
      '那个 / 他 / 好心，/ 在路上 / 出于 /救了/ 送到医院，/受伤的人，/ 把他 /倒打一耙，/ 可伤者家属 / 却 /好人 / 他撞的，/说是 / 真是 / 难做啊。\n ',
  },
  {
    simplified: '倒苦水',
    pinyin: 'dào kǔ shuǐ',
    explanation: '向别人诉说自己的痛苦或委屈。也说“吐苦水”。',
    explanationPinyin: 'Xiàng biérén sùshuō zìjǐ de tòngkǔ huò wěiqu. Yě shuō “tǔ kǔshuǐ”.',
    meaning:
      'Kể khổ\n Kể lể với người khác về những khó khăn hoặc oan ức của bản thân. Cũng có thể nói là “吐苦水”：kêu ca, than vãn.',
    examples: '亲人来了，小孩大倒苦水。\n 互倒苦水，成了现代白领流行的放松方式。',
    examplePinyin:
      'Qīnrén láile, xiǎohái dà dào kǔ shuǐ. \nHù dào kǔ shuǐ, chéngle xiàndài báilǐng liúxíng dì fàngsōng fāngshì.',
    exampleMeaning:
      'Người thân đến, đứa trẻ than khóc ầm ĩ.\n Việc than phiền lẫn nhau đã trở thành cách thư giãn phổ biến của giới văn phòng hiện đại.',
    arrange: '大倒苦水。/ 来了，/亲人 / 小孩 \n互倒苦水，/ 现代白领 / 流行的 / 成了 /放松方式。',
  },
  {
    simplified: '倒胃口',
    pinyin: 'dǎo wèi kǒu',
    explanation: '指因为腻味而不想再吃。比喻讲话、文章或演出等没有意思，令人腻烦，使人不愿听，不愿看。',
    explanationPinyin:
      'Zhǐ yīnwèi nìwèi ér bùxiǎng zài chī. Bǐyù jiǎnghuà, wénzhāng huò yǎnchū děng méiyǒu yìsi, lìng rén nìfán, shǐ rén bù yuàn tīng, bù yuàn kàn.',
    meaning:
      'Chỉ cảm thấy chán ăn vì ngấy. So với nói chuyện, bài viết hay buổi biểu diễn không có ý nghĩa, khiến người ta cảm thấy chán ghét, không muốn nghe, không muốn xem.',
    examples: '听到他讲的笑话，我感到有点倒胃口。\n你说的这些话，真让人倒胃口。',
    examplePinyin:
      'Tīng dào tā jiǎng de xiàohuà, wǒ gǎndào yǒudiǎn dǎo wèi kǒu. \nNǐ shuō de zhèxiē huà, zhēn ràng rén dǎo wèi kǒu.',
    exampleMeaning:
      'Nghe anh ta kể chuyện cười mà tôi thấy phát chán.\nNhững gì anh nói thật khiến người ta ngán ngẩm.',
    arrange: '感到 / 听到他讲的 / 我 / 笑话，/有点倒胃口。\n你说的 / 真让人 / 这些话，/ 倒胃口。',
  },
  {
    simplified: '倒吸一口冷气',
    pinyin: 'dào xī yī kǒu lěng qì',
    explanation: '表示恐惧，或躲过灾难，但想想仍害怕。',
    explanationPinyin: 'Biǎoshì kǒngjù, huò duǒguò zāinàn, dàn xiǎng xiǎng réng hàipà.',
    meaning:
      'Thở hắt ra một hơi\n Thể hiện sự sợ hãi, hoặc đã thoát khỏi tai nạn nhưng vẫn còn sợ hãi khi nghĩ lại.',
    examples:
      '一刀砍了过来，他低头躲了过去，好厉害，让他倒吸一口冷气。\n 看到树林里黑压压的全是敌人，他不禁倒吸一口冷气。',
    examplePinyin:
      'Yīdāo kǎnle guòlái, tā dītóu duǒle guòqù, hǎo lìhài, ràng tā dào xī yī kǒu lěng qì. \nKàn dào shùlín lǐ hēiyāyā de quán shì dírén, tā bùjīn dào xī yī kǒu lěng qì.',
    exampleMeaning:
      'Một nhát dao chém tới, anh cúi đầu tránh được, thật tài giỏi, làm anh phải hít một hơi lạnh.\n Nhìn thấy trong rừng đầy rẫy kẻ địch, anh không khỏi hít một hơi lạnh.',
    arrange:
      '砍了过来，/ 一刀 /躲了过去，/ 他 / 低头 / 倒吸一口冷气。/ 好厉害，/ 让他 \n敌人，/ 看到树林里 /全是 / 黑压压的 / 他 / 倒吸一口冷气。/ 不禁 ',
  },
  {
    simplified: '倒栽葱',
    pinyin: 'dào zāi cōng',
    explanation:
      '栽葱时不是根先入土，而是头先入土，倒着栽。比喻摔跟斗时头先着地。\n 或比喻从高处或空中头朝下摔下来。',
    explanationPinyin:
      'Zāi cōng shí bùshì gēn xiān rùtǔ, ér shì tóu xiān rùtǔ, dàozhe zāi. Bǐyù shuāi gēndou shí tóu xiān zhuó dì. Huò bǐyù cóng gāo chù huò kōngzhōng tóu cháo xià shuāi xiàlái.',
    meaning:
      'Ngã lộn nhào\n Khi trồng hành, không phải gốc vào đất trước, mà là đầu vào đất trước, trồng ngược.\n Ý chỉ việc ngã mà đầu chạm đất trước. Hoặc nói đến việc từ nơi cao hoặc trên không rơi xuống với đầu xuống dưới.',
    examples: '他一个倒栽葱，从树上掉了下来，把脸给摔破了。\n 演员表演了一个倒栽葱，把观众吓了一大跳。',
    examplePinyin:
      'Tā yīgè dào zāi cōng, cóng shù shàng diàole xiàlái, bǎ liǎn gěi shuāi pòle. \nYǎnyuán biǎoyǎnle yīgè dào zāi cōng, bǎ guānzhòng xiàle yī dà tiào.',
    exampleMeaning:
      'Anh ấy ngã nhào từ trên cây xuống, làm mặt bị thương.\n Diễn viên đã diễn một cảnh ngã nhào khiến khán giả hết hồn.',
    arrange:
      '他 / 倒栽葱，/ 从树上 /一个 /给摔破了。/ 掉了下来，/ 把脸 \n表演了 / 演员 /一个倒栽葱，/ 把观众 / 吓了一大跳。',
  },
  {
    simplified: '刀子嘴',
    pinyin: 'dāo zi zuǐ',
    explanation: '嘴巴凌厉尖刻。',
    explanationPinyin: 'Zuǐbā línglì jiānkè.',
    meaning: 'Miệng lưỡi sắc bén, chua ngoa.',
    examples: '她虽然刀子嘴，但内心其实很善良。\n老婆知道自己错了，收起了自己的刀子嘴。',
    examplePinyin:
      'Tā suīrán dāo zi zuǐ, dàn nèixīn qíshí hěn shànliáng. \nLǎopó zhīdào zìjǐ cuòle, shōu qǐle zìjǐ de dāo zi zuǐ.',
    exampleMeaning:
      'Mặc dù cô ấy nói năng sắc bén nhưng trong lòng lại rất tốt bụng.\nVợ biết mình sai, nên không nói năng gay gắt nữa.',
    arrange: '虽然 /她 / 刀子嘴，/ 但 / 其实 /内心/ 很善良。\n老婆/ 收起了 / 自己的 /知道自己错了，/刀子嘴。',
  },
  {
    simplified: '地头蛇',
    pinyin: 'dì tóu shé',
    explanation: '指在当地很有势力的人。',
    explanationPinyin: 'Zhǐ zài dāngdì hěn yǒu shìlì de rén.',
    meaning: 'Chỉ người có thế lực ở địa phương.\n',
    examples: '他是我们这一带有名的“地头蛇”，认识的人都不会去惹他。 \n“地头蛇”很有势力，我们也没有办法。',
    examplePinyin:
      'Tā shì wǒmen zhè yīdài yǒumíng de “dì tóu shé”, rènshí de rén dōu bù huì qù rě tā. \n“Dì tóu shé” hěn yǒu shìlì, wǒmen yě méiyǒu bànfǎ.',
    exampleMeaning:
      'Anh ấy là một "chúa đất" nổi tiếng trong khu vực này, những người quen biết không ai dám chọc giận anh ta.\n"Chúa đất" có quyền lực lớn, chúng tôi cũng không có cách nào.',
    arrange:
      '他 / 有名的 /是我们这一带/认识的人/ “地头蛇”，/ 都不会去惹他。\n“地头蛇”/ 我们 /很有势力, / 也 / 没有办法。',
  },
  {
    simplified: '点鬼火',
    pinyin: 'diǎn guǐ huǒ',
    explanation: '比喻鼓动别人做坏事。',
    explanationPinyin: 'Bǐyù gǔdòng biérén zuò huàishì.',
    meaning: 'Xúi giục người khác làm chuyện xấu.',
    examples: '是不是有人在背后点鬼火，这几个小孩，怎会搞破坏?',
    examplePinyin: 'Shì bùshì yǒurén zài bèihòu diǎn guǐ huǒ, zhè jǐ gè xiǎohái, zěn huì gǎo pòhuài?',
    exampleMeaning: 'Có phải ai đó đang ngấm ngầm xúi giục mấy đứa nhỏ phá phách không?',
    arrange: ' 有人 / 点鬼火, /是不是 / 在背后/ 这几个小孩，/ 怎会搞破坏?',
  },
  {
    simplified: '吊胃口',
    pinyin: 'diào wèi kǒu',
    explanation: '比喻诱使人产生兴趣、欲望。',
    explanationPinyin: 'Bǐyù yòu shǐ rén chǎnshēng xìngqù, yùwàng.',
    meaning: 'Ý chỉ việc khiến người khác sinh ra hứng thú, ham muốn.',
    examples:
      '这部电影的预告片吊胃口，让人期待。\n你的彩票中奖了? 别吊我的胃口了，快告诉我，你到底中了多少奖金？',
    examplePinyin:
      'Zhè bù diànyǐng de yùgào piàn diào wèi kǒu, ràng rén qídài. \nNǐ de cǎipiào zhòngjiǎngle? Bié diào wǒ de wèi kǒu le, kuài gàosù wǒ, nǐ dàodǐ zhōngle duōshǎo jiǎngjīn?',
    exampleMeaning:
      'Đoạn trailer của bộ phim này rất hấp dẫn, khiến người ta mong đợi.\nAnh trúng xổ số rồi sao? Đừng úp mở nữa, mau nói xem anh trúng bao nhiêu tiền?',
    arrange:
      '这部电影的 / 吊胃口，/ 让人 /预告片 / 期待。\n你的彩票 /别吊我的/ 中了? / 快告诉我，/ 你到底中了 /胃口了，/ 多少奖金? ',
  },
  {
    simplified: '跌眼镜',
    pinyin: 'diē yǎn jìng',
    explanation: '比喻与预想的出入很大，事情出乎意料，让人吃惊。',
    explanationPinyin: 'Bǐyù yǔ yùxiǎng de chūrù hěn dà, shìqíng chū hū yìliào, ràng rén chījīng.',
    meaning:
      'Ghé mắt mà nhìn\n Phép ẩn dụ khi sự việc diễn ra rất khác so với mong đợi, chuyện xảy đến bất ngờ và khiến người ta ngạc nhiên.',
    examples:
      '卫冕冠军竟然输给了无名小卒，没有进入预选赛，真是让人大跌眼镜。\n比赛成绩具有一定的偶然性，所以，常发生让人跌眼镜的情况。\n他个子这么大，胆子却这么小，真让人大跌眼镜。',
    examplePinyin:
      'Wèimiǎn guànjūn jìngrán shū gěi liǎo wúmíngxiǎozú, méiyǒu jìnrù yùxuǎn sài, zhēnshi ràng réndà diē yǎn jìng. \nBǐsài chéngjì jùyǒu yīdìng de ǒuránxìng, suǒyǐ, cháng fāshēng ràng rén diē yǎn jìng de qíngkuàng. \nTā gèzi zhème dà, dǎnzi què zhème xiǎo, zhēn ràng réndà diē yǎn jìng.',
    exampleMeaning:
      'Nhà vô địch phòng thủ lại thua trước một người vô danh, không lọt vào vòng loại, thực sự làm người ta kinh ngạc.\n Kết quả thi đấu có tính ngẫu nhiên nhất định, nên thường xảy ra những tình huống bất ngờ.\n Anh ấy cao to như vậy mà lại nhút nhát, thực sự làm mọi người ngạc nhiên.',
    arrange:
      '卫冕冠军 / 输给了 /进入预选赛，/竟然 / 大跌眼镜。/ 无名小卒，/ 没有/ 真是/ 让人 \n比赛成绩 / 偶然性，/ 所以，/ 让人 / / 具有一定的 /常发生 / 跌眼镜的 / 情况。\n他个子 / 胆子 / 却 /大跌眼镜。 / 这么大，/ 这么小，/ 真让人 ',
  },
  {
    simplified: '顶梁柱',
    pinyin: 'dǐng liáng zhù',
    explanation: '支撑房梁的柱子。比喻起主要作用的骨干力量。',
    explanationPinyin: 'Zhīchēng fáng liáng de zhùzǐ. Bǐyù qǐ zhǔyào zuòyòng de gǔgàn lìliàng.',
    meaning: 'Trụ cột chống đỡ mái nhà, ám chỉ người giữ vai trò chủ chốt.',
    examples: '家里的顶梁柱突然没了，这日子可怎么过呀?\n\n',
    examplePinyin: 'Jiālǐ de dǐng liáng zhù túrán méiliǎo, zhè rìzi kě zěnmeguò ya?',
    exampleMeaning: 'Trụ cột gia đình đột ngột qua đời, không biết gia đình sẽ xoay sở thế nào.',
    arrange: '家里的 / 可怎么过呀? / 突然没了，/顶梁柱 / 这日子 ',
  },
  {
    simplified: '定心丸',
    pinyin: 'dìng xīn wán',
    explanation: '指让人放心的消息。',
    explanationPinyin: 'Zhǐ ràng rén fàngxīn de xiāoxī.',
    meaning: 'Chỉ tin tức khiến người ta yên tâm.',
    examples:
      '老板的一句话让我吃了一颗定心丸，项目会继续进行。\n政府承诺提供保障性住房，让深圳低收入居民吃了颗定心丸。',
    examplePinyin:
      'Lǎobǎn de yījù huà ràng wǒ chīle yī kē dìng xīn wán, xiàngmù huì jìxù jìnxíng. \nZhèngfǔ chéngnuò tígōng bǎozhàng xìng zhùfáng, ràng shēnzhèn dī shōurù jūmín chīle kē dìng xīn wán.',
    exampleMeaning:
      'Một câu nói của sếp khiến tôi yên lòng, dự án sẽ được tiếp tục triển khai.\nChính phủ cam kết cung cấp nhà ở bảo đảm, khiến cư dân thu nhập thấp ở Thâm Quyến cảm thấy an tâm.',
    arrange:
      '老板的 / 吃了一颗 / 会继续进行。/ 让我 / 一句话 / 定心丸，/ 项目 \n吃了颗 / 政府 / 保障性住房，/ 让 /承诺提供 / 深圳低收入居民 /定心丸。',
  },
  {
    simplified: '底儿朝天',
    pinyin: 'dǐr cháo tiān',
    explanation: '用光、见底，形容完全、彻底没有了。',
    explanationPinyin: 'Yòng guāng, jiàn dǐ, xíngróng wánquán, chèdǐ méiyǒule.',
    meaning: 'Trắng tay\n Hết sạch, hết kiệt, mô tả việc hoàn toàn không còn gì.',
    examples: '他有上顿没下顿，家里的米缸早就底儿朝天了。\n 财政部长接手的是个烂摊子，国库早就底儿朝天了。',
    examplePinyin:
      'Tā yǒu shàng dùn méi xià dùn, jiālǐ de mǐ gāng zǎo jiù dǐr cháo tiān le. \nCáizhèng bùzhǎng jiēshǒu de shìgè làntānzǐ, guókù zǎo jiù dǐr cháo tiān le.',
    exampleMeaning:
      'Anh ta bữa đói bữa no, hũ gạo trong nhà trống không từ lâu.\n Bộ trưởng tài chính tiếp quản một mớ hỗn độn, ngân khố trống rỗng từ lâu.',
    arrange:
      '他 / 没下顿，/ 家里的米缸 /早就 / 有上顿 / 底儿朝天了。\n底儿朝天了。/ 财政部长 / 烂摊子，/ 国库 /接手的是个 / 早就 ',
  },
  {
    simplified: '丢面子',
    pinyin: 'diū miàn zi',
    explanation: '丧失体面。',
    explanationPinyin: 'Sàngshī tǐmiàn.',
    meaning: 'Mất đi danh dự.',
    examples: '他在会议上丢了面子，真让人尴尬。\n没什么比丢面子更让他受不了的了。',
    examplePinyin:
      'Tā zài huìyì shàng diūle miàn zi, zhēn ràng rén gāngà. \nMéishénme bǐ diū miàn zi gēng ràng tā shòu bùliǎo dele.',
    exampleMeaning:
      'Anh ta mất mặt trong cuộc họp, thật là khó xử.\nKhông gì khiến anh ta khó chịu hơn việc mất mặt.\n',
    arrange: '他 / 尴尬。/丢了面子，/ 真让人 /在会议上 \n没什么比 / 更让他 /丢面子 / 受不了的了。',
  },
  {
    simplified: '独木桥',
    pinyin: 'dú mù qiáo',
    explanation: '一根木头的桥，形容路窄。',
    explanationPinyin: 'Yī gēn mùtou de qiáo, xíngróng lù zhǎi.',
    meaning: 'Cây cầu bằng một khúc gỗ, hình dung con đường nhỏ hẹp, gian nan.',
    examples: '艺术的道路就是独木桥，能走过去的很少很少。 \n要你走阳关道，你偏走独木桥。',
    examplePinyin:
      'Yìshù de dàolù jiùshì dú mù qiáo, néng zǒu guòqù de hěn shǎo hěn shǎo. \nYào nǐ zǒu yángguāndào, nǐ piān zǒu dú mù qiáo.',
    exampleMeaning:
      'Con đường nghệ thuật giống như một cây cầu hẹp, rất ít người có thể vượt qua.\nMuốn bạn đi con đường sáng lạng, bạn lại đi con đường gian nan.',
    arrange: '艺术的道路 /独木桥，/ 能走过去的 / 就是 / 很少很少。\n要你 / 你偏 /走阳关道，/ 走独木桥。',
  },
  {
    simplified: '肚子里的蛔虫',
    pinyin: 'dù zi lǐ de huí chóng',
    explanation: '比喻很理解自己的人。',
    explanationPinyin: 'Bǐyù hěn lǐjiě zìjǐ de rén.',
    meaning: 'Biểu thị người rất hiểu bản thân.',
    examples: '你真是我肚子里的蛔虫，什么都瞒不了你。 \n你要是领导肚子里的蛔虫就好了。',
    examplePinyin:
      'Nǐ zhēnshi wǒ dù zi lǐ de huí chóng, shénme dōu mán bùliǎo nǐ. \nNǐ yàoshi lǐngdǎo dù zi lǐ de huí chóng jiù hǎole.',
    exampleMeaning:
      'Bạn thật sự hiểu tôi muốn gì, chẳng có gì giấu được bạn.\nNếu mà bạn hiểu rõ lãnh đạo như vậy thì tốt biết mấy.',
    arrange: '你真是 / 瞒不了你。/ 蛔虫，/ 什么都 / 我肚子里的 \n你要是 / 蛔虫 / 就好了。/领导肚子里的 ',
  },
  {
    simplified: '恶作剧',
    pinyin: 'è zuò jù',
    explanation: '捉弄耍笑，使人难堪。',
    explanationPinyin: 'Zhuōnòng shuǎxiào, shǐ rén nánkān.',
    meaning: 'Trêu chọc, đùa giỡn làm người khác khó xử.',
    examples:
      '把蜜蜂放到女孩子的课桌里，这种恶作剧你怎么做得出来呢?\n 以前，这个班秩序很混乱，学生经常跟老师搞恶作剧，谁也不愿接手这个班。',
    examplePinyin:
      'Bǎ mìfēng fàng dào nǚ háizi de kè zhuō lǐ, zhè zhǒng è zuò jù nǐ zěnme zuò dé chūlái ne? \nYǐqián, zhège bān zhìxù hěn hǔnluàn, xuéshēng jīngcháng gēn lǎoshī gǎo è zuò jù, shéi yě bù yuàn jiēshǒu zhège bān.',
    exampleMeaning:
      'Sao cậu có thể làm trò nghịch ngợm như thả ong vào bàn học của bạn gái?\n Trước đây, lớp này rất hỗn loạn, học sinh thường trêu chọc giáo viên, không ai muốn nhận lớp.',
    arrange:
      ' 放到女孩子的 /把蜜蜂 / 课桌里，/ 恶作剧 / 你怎么 /这种 / 做得出来呢?\n这种 / 以前，/ 不愿接受/ 这个班秩序 / 学生 / 很混乱，/ 跟老师 / 搞恶作剧，/ 经常 / 谁也 / 这个班。',
  },
  {
    simplified: '二百五',
    pinyin: 'èr bǎi wǔ',
    explanation: '比喻有些傻气、做事莽撞的人。',
    explanationPinyin: 'Bǐyù yǒuxiē shǎqì, zuòshì mǎngzhuàng de rén.',
    meaning: 'Mô tả người ngốc nghếch, hành động thiếu suy nghĩ.',
    examples: '你这样做真是二百五，完全没有头脑。\n正经点，这么多人看着，别耍二百五了。',
    examplePinyin:
      'Nǐ zhèyàng zuò zhēnshi èr bǎi wǔ, wánquán méiyǒu tóunǎo. \nZhèngjīng diǎn, zhème duō rén kànzhe, bié shuǎ èr bǎi wǔ le.',
    exampleMeaning:
      'Anh làm vậy đúng là đồ ngốc, hoàn toàn không có đầu óc.\nNghiêm túc chút đi, nhiều người đang nhìn kìa, đừng làm trò ngốc nữa.',
    arrange: '你这样做 / 二百五，/ 完全 /真是 / 没有头脑。\n耍 /二百五了。/ 这么多人 / 看着，/ 别 /正经点， ',
  },
  {
    simplified: '耳边风',
    pinyin: 'ěr biān fēng',
    explanation: '耳边吹过的风。比喻听过后不放在心上的话( 多指劝告、嘱咐)。也\n说“耳旁风”。',
    explanationPinyin:
      'Ěr biān chuīguò de fēng. Bǐyù tīng guòhòu bù fàng zàixīn shàng dehuà (duō zhǐ quàngào, zhǔfù). Yě shuō “ěrpángfēng”.',
    meaning:
      'Gió bên tai. Ý chỉ những lời nói (thường là lời khuyên, nhắc nhở) mà không để tâm. Cũng nói là “耳旁风”.',
    examples: '他的劝告对我来说只是耳边风，我并不在意。\n你别总把我的话当耳边风，听进去对你有好处。',
    examplePinyin:
      'Tā de quàngào duì wǒ lái shuō zhǐshì ěr biān fēng, wǒ bìng bù zàiyì. \nNǐ bié zǒng bǎ wǒ dehuà dàng ěr biān fēng, tīng jìnqù duì nǐ yǒu hǎochù.\n',
    exampleMeaning:
      'Lời khuyên của anh ta đối với tôi chỉ như gió thoảng bên tai, tôi không để tâm.\nĐừng luôn coi lời tôi như gió thoảng bên tai, nghe theo sẽ có lợi cho anh đấy.',
    arrange:
      ' 只是 / 他的劝告 / 耳边风，/对我来说 / 我并不在意。\n你别 /有好处。/ 总把我的话 / 听进去 /当耳边风，/ 对你 ',
  },
  {
    simplified: '二话没说',
    pinyin: 'èr huà méi shuō',
    explanation: '形容当机立断。',
    explanationPinyin: 'Xíngróng dāngjīlìduàn.',
    meaning: 'Không nói hai lời\n Dùng để diễn tả sự quyết định nhanh chóng, dứt khoát.',
    examples:
      '团长要他去送一份绝密情报，他二话没说，拿了点干粮就出发了。\n 被火包围的房子里传来哭声，消防队员二话没说，冲了进去。',
    examplePinyin:
      'Tuán zhǎng yào tā qù sòng yī fèn juémì qíngbào, tā èr huà méi shuō, nále diǎn gānliáng jiù chūfāle. \nBèi huǒ bāowéi de fángzi lǐ chuán lái kū shēng, xiāofáng duìyuán èr huà méi shuō, chōngle jìnqù.',
    exampleMeaning:
      'Đội trưởng yêu cầu anh ta đi giao một thông tin tuyệt mật, anh ta không nói một lời, chỉ cầm một ít lương khô rồi lên đường.\n Trong ngôi nhà bị lửa bao vây vang lên tiếng khóc, các nhân viên cứu hỏa không nói một lời, đã lao vào trong.',
    arrange:
      '要他 / 一份 / 绝密情报，/ 团长 /去送 / 就出发了。/ 他二话没说，/ 拿了点干粮 \n被火包围的 / 传来哭声，/ 房子里 / 二话没说，/消防队员 / 冲了进去。',
  },
  {
    simplified: '二进宫',
    pinyin: 'èr jìn gōng',
    explanation: '比喻再次到某个地方。',
    explanationPinyin: 'Bǐyù zàicì dào mǒu gè dìfāng.',
    meaning: 'Nói về việc quay lại một nơi nào đó.',
    examples: '他这次又进监狱，真是个二进宫的典型例子。\n',
    examplePinyin: 'Tā zhè cì yòu jìn jiānyù, zhēnshi gè èr jìn gōng de diǎnxíng lìzi. \n',
    exampleMeaning: 'Anh ta lại vào tù lần nữa, đúng là một ví dụ điển hình của kẻ tái phạm.\n',
    arrange: '这次 / 他 / 又进监狱，/ 二进宫的 / 典型例子。/真是个 \n',
  },
  {
    simplified: '二流子',
    pinyin: 'èr liú zi',
    explanation: '指游手好闲、不务正业的人。',
    explanationPinyin: 'Zhǐ yóushǒuhàoxián, bùwùzhèngyè de rén.',
    meaning: 'Mô tả người không có công việc ổn định, sống lêu lổng.',
    examples: '他总是游手好闲，大家都觉得他是个二流子。\n从小没人管，他后来成了这里有名的二流子。',
    examplePinyin:
      'Tā zǒng shì yóushǒuhàoxián, dàjiā dōu juédé tā shìgè èr liú zi. \nCóngxiǎo méi rén guǎn, tā hòulái chéngle zhè li yǒumíng de èr liú zi.',
    exampleMeaning:
      'Anh ta lúc nào cũng lười biếng, ai cũng cho rằng anh là kẻ vô công rồi nghề.\nTừ nhỏ không ai quản, về sau anh ta trở thành kẻ lêu lổng nổi tiếng ở đây.',
    arrange:
      ' 游手好闲，/他 / 大家都 / 总是 / 个二流子。/觉得 / 他是 \n从小 / 他后来 /这里有名的 / 没人管， / 成了 / 二流子。',
  },
  {
    simplified: '翻白眼',
    pinyin: 'fān bái yǎn',
    explanation: '心中为难、失望、憎恨或不满时眼睛的表情。',
    explanationPinyin: 'Xīnzhōng wéinán, shīwàng, zēnghèn huò bùmǎn shí yǎnjīng de biǎoqíng.',
    meaning: 'Biểu cảm của đôi mắt khi cảm thấy khó xử, thất vọng, thù hận hoặc không hài lòng.',
    examples: '她对他的无知翻了个白眼，真是不知道该说什么。\n他很不满，在一旁翻白眼，但没人注意到他。',
    examplePinyin:
      'Tā duì tā de wúzhī fānle gè bái yǎn, zhēnshi bù zhīdào gāi shuō shénme.  \nTā hěn bùmǎn, zài yīpáng fān bái yǎn, dàn méi rén zhùyì dào tā.',
    exampleMeaning:
      'Cô ấy lật mắt khinh bỉ vì sự ngu ngốc của anh ta, thật không biết phải nói gì.\nAnh ta rất khó chịu, ngồi một bên đảo mắt, nhưng không ai để ý đến anh.\n',
    arrange:
      '她 /不知道该说什么。/ 无知 / 翻了个白眼，/对他的 / 真是 \n他很不满， / 翻白眼，/ 但 /在一旁 / 没人 / 注意到他。',
  },
  {
    simplified: '犯牛脾气',
    pinyin: 'fàn niú pí qì',
    explanation: '比喻人的脾气很倔强，固执己见。',
    explanationPinyin: 'Bǐyù rén de píqì hěn juéjiàng, gùzhí jǐjiàn.',
    meaning: 'Biểu thị tính cách người rất bướng bỉnh, cố chấp.\n\n',
    examples: '他那个人当不了大官，因为他常常犯牛脾气。 \n怎么了，又犯牛脾气了吧?',
    examplePinyin:
      'Tā nàgè rén dāng bùliǎo dà guān, yīnwèi tā chángcháng fàn niú pí qì. \nZěnmele, yòu fàn niú pí qì le ba?',
    exampleMeaning:
      'Người ấy không thể làm quan lớn, vì anh ta thường nổi cơn tức giận.\nSao vậy, lại nổi cơn tức giận à?',
    arrange: '他 / 常常 /当不了大官，/那个人 / 因为他 / 犯牛脾气。\n又 /了 / 怎么了，/ 犯牛脾气/ 吧?',
  },
  {
    simplified: '放暗箭',
    pinyin: 'fàng àn jiàn',
    explanation: '乘人不备，暗中射箭。比喻暗地里施展害人的\n手段。也说“射冷箭”、“放冷箭”。',
    explanationPinyin:
      'Chéng rén bù bèi, ànzhōng shèjiàn. Bǐyù àndìlǐ shīzhǎn hài rén de shǒuduàn. Yě shuō “shè lěngjiàn”,“fànglěngjiàn”.',
    meaning: 'Lợi dụng lúc người khác không cảnh giác để hại họ. Cũng gọi là “射冷箭”、“放冷箭”.',
    examples: '有不少天才是被别人放出来的暗箭毁掉的。',
    examplePinyin: 'Yǒu bù shǎo tiāncái shì bèi biérén fàng chūlái de àn jiàn huǐ diào de.',
    exampleMeaning: 'Không ít tài năng bị hủy hoại bởi những mưu kế ngầm từ người khác.',
    arrange: '有不少天/ 被别人 / 放出来的 / 才是 / 暗箭毁掉的。',
  },
  {
    simplified: '放空炮',
    pinyin: 'fàng kōng pào',
    explanation: '比喻说内容空洞或不能实现的话。',
    explanationPinyin: 'Bǐyù shuō nèiróng kōngdòng huò bùnéng shíxiàn dehuà.',
    meaning: 'Biểu thị lời nói trống rỗng hoặc không thể thực hiện.',
    examples: '领导只顾放空炮，也没看看下面有多少人在认真听。 \n要有的放矢，不要乱放空炮，四处伤人。',
    examplePinyin:
      'Lǐngdǎo zhǐgù fàng kōng pào, yě méi kàn kàn xiàmiàn yǒu duōshǎo rén zài rènzhēn tīng. \nYào yǒudìfàngshǐ, bùyào luàn fàng kōng pào, sìchù shāng rén.',
    exampleMeaning:
      'Lãnh đạo chỉ lo đưa ra những chỉ đạo suông, mà không hề để ý xem có bao nhiêu người thực sự lắng nghe.\nPhải nhắm đúng mục tiêu, đừng nên đưa ra những chỉ đạo vô thưởng vô phạt, gây ảnh hưởng tiêu cực đến mọi người.',
    arrange:
      '领导只顾 / 也没看看 / 放空炮，/ 有多少人 /下面 / 在认真听。\n乱放空炮，/要有的/ 放矢，/不要/ 四处伤人。',
  },
  {
    simplified: '放下架子',
    pinyin: 'fàng xià jià zi',
    explanation: '比喻去掉自高自大、装腔作势的作风。',
    explanationPinyin: 'Bǐyù qùdiào zìgāozìdà, zhuāngqiāngzuòshì de zuòfēng.',
    meaning: 'Hạ thấp cái tôi\n Ẩn dụ cho việc bỏ thói kiêu căng và ngạo mạn.',
    examples: '下岗了，不放下架子不行。\n 他能放下架子，来向我们咨询吗?',
    examplePinyin:
      'Xiàgǎngle, bù fàng xià jià zi bùxíng. \nTā néng fàng xià jià zi, lái xiàng wǒmen zīxún ma?',
    exampleMeaning:
      'Bị sa thải rồi, không hạ mình thì không được.\n Anh ta có thể hạ mình, đến hỏi chúng tôi được không?',
    arrange: '不/ 下岗了，/不行。/ 放下架子 \n他 / 来向我们 / 能放下架子，/ 咨询吗?',
  },
  {
    simplified: '废物点心 ',
    pinyin: 'fèi wù diǎn xīn',
    explanation: '比喻无能、不会办事的人。',
    explanationPinyin: 'Bǐyù wúnéng, bù huì bànshì de rén.',
    meaning: 'Kẻ vô dụng, không biết cách làm việc hiệu quả.',
    examples: '老婆说他是废物点心，他也不生气。',
    examplePinyin: 'Lǎopó shuō tā shì fèi wù diǎn xīn, tā yě bù shēngqì.',
    exampleMeaning: 'Vợ gọi anh ấy là kẻ vô dụng, nhưng anh ấy chẳng hề tức giận.',
    arrange: '他是 /老婆说 / 不生气。/ 废物点心，/ 他也 ',
  },
  {
    simplified: '费周折',
    pinyin: 'fèi zhōu zhé',
    explanation: '指费力，事情办理的过程不顺利。',
    explanationPinyin: 'Zhǐ fèilì, shìqíng bànlǐ de guòchéng bù shùnlì.',
    meaning: 'Tốn công tốn sức\n Chỉ quá trình xử lý công việc không được thuận lợi, suôn sẻ.',
    examples:
      '他的临时住所很偏僻，找到他的住址，可费了大周折。\n 地下二手车市场，要最后成交，是要费很多周折的，毕竟那时，地下交易不合法。',
    examplePinyin:
      'Tā de línshí zhùsuǒ hěn piānpì, zhǎodào tā de zhùzhǐ, kě fèile dà zhōu zhé. \nDìxià èrshǒu chē shìchǎng, yào zuìhòu chéngjiāo, shì yào fèi hěnduō zhōu zhé de, bìjìng nà shí, dìxià jiāoyì bù héfǎ.',
    exampleMeaning:
      'Nơi ở tạm thời của anh ta rất hẻo lánh, tìm được địa chỉ của anh ta thật là tốn công.\n Thị trường xe cũ ngầm, để giao dịch thành công cuối cùng, phải tốn rất nhiều công sức, vì lúc đó, giao dịch ngầm là bất hợp pháp.',
    arrange:
      '他的临时住所 / 找到 / 他的住址，/可费了 / 很偏僻，/ 大周折。\n地下 / 很多周折的，/ 要最后成交，/ 是要费 / 毕竟那时，/ 地下交易不合法。/二手车市场，',
  },
  {
    simplified: '赴黄泉',
    pinyin: 'fù huáng quán',
    explanation: '比喻走向死亡。',
    explanationPinyin: 'Bǐyù zǒuxiàng sǐwáng.',
    meaning: 'Xuống suối vàng\n Phép ẩn dụ ý nói qua đời.',
    examples:
      '快赴黄泉的人了，我一个老头，已经没什么要求了。\n 他在犯罪的路上一直向前走，没有回头，最终命赴黄泉。',
    examplePinyin:
      'Kuài fù huáng quán de rénle, wǒ yīgè lǎotóu, yǐjīng méishénme yāoqiúle. \nTā zài fànzuì de lùshàng yīzhí xiàng qián zǒu, méiyǒu huítóu, zuìzhōng mìng fù huáng quán.',
    exampleMeaning:
      'Sắp phải xuống suối vàng rồi, tôi là một ông lão, không còn mong muốn gì nữa.\n Anh ta cứ đi trên con đường tội lỗi mà không biết hối cải, cuối cùng phải xuống địa ngục thôi.',
    arrange:
      '快赴黄泉的人了，/ 我一个/ 已经 /老头，/ 没什么要求了。\n他 / 命赴黄泉。/ 一直向前走，/在犯罪的路上 / 没有回头，/ 最终 ',
  },
  {
    simplified: '负心郎',
    pinyin: 'fù xīn láng',
    explanation: '玩弄爱情、抛弃痴心女子的男人。',
    explanationPinyin: 'Wànnòng àiqíng, pāoqì chīxīn nǚzǐ de nánrén.',
    meaning: 'Người đàn ông bội bạc trong tình yêu, bỏ rơi phụ nữ yêu mình.',
    examples: '她对那个负心郎感到非常痛心。\n她对你这么好，你以后发达了，可一定不能变成负心郎。',
    examplePinyin:
      'Tā duì nàgè fù xīn láng gǎndào fēicháng tòngxīn. \nTā duì nǐ zhème hǎo, nǐ yǐhòu fādále, kè yīdìng bùnéng biàn chéng fù xīn láng.',
    exampleMeaning:
      'Cô ấy rất đau lòng vì gã phụ tình kia.\nCô ấy đối xử với anh tốt như vậy, sau này nếu thành công, anh nhất định không được trở thành gã phụ tình.',
    arrange:
      '她对 /感到 / 负心郎 / 那个/非常痛心。\n她对/ 这么好，/你 /发达了，/ 不能变成/ 你以后 /可一定/ 负心郎。',
  },
  {
    simplified: '干瞪眼',
    pinyin: 'gān dèng yǎn',
    explanation: '在一旁着急而又无能为力。',
    explanationPinyin: 'Zài yīpáng zhāojí ér yòu wúnéngwéilì.',
    meaning: 'Cảm thấy lo lắng nhưng không thể làm gì.',
    examples:
      '他对这个问题干瞪眼，不知道该怎么解决。\n看到儿童落入急流，可我不会游泳，只能干瞪眼，真是急死人了。',
    examplePinyin:
      'Tā duì zhège wèntí gān dèng yǎn, bù zhīdào gāi zěnme jiějué. \nKàn dào értóng luò rù jíliú, kě wǒ bù huì yóuyǒng, zhǐ néng gān dèng yǎn, zhēnshi jísǐ rénle.',
    exampleMeaning:
      'Anh ta chỉ biết trơ mắt nhìn vấn đề này mà không biết giải quyết ra sao.\nNhìn thấy đứa trẻ rơi vào dòng nước xiết, nhưng tôi không biết bơi, chỉ đành đứng trơ mắt nhìn, thật khiến người ta lo lắng.',
    arrange:
      '他 / 不知道 /干瞪眼，/对这个问题 / 该怎么解决。\n看到 / 落入急流，/ 儿童 / 可我不会游泳，/急死人了。/ 只能干瞪眼，/ 真是 ',
  },
  {
    simplified: '干打雷不下雨',
    pinyin: 'gān dǎ léi bù xià yǔ',
    explanation: '比喻光说不动。',
    explanationPinyin: 'Bǐyù guāng shuō bu dòng.',
    meaning: 'Nói suông\n So sánh việc chỉ nói mà không hành động.',
    examples: '说好加工资的，没想到干打雷不下雨。\n 怎么还没出发，可不要干打雷不下雨啊。',
    examplePinyin:
      ' Shuō hǎo jiā gōngzī de, méi xiǎngdào gān dǎ léi bù xià yǔ. \nZěnme hái méi chūfā, kě bùyào gān dǎ léi bù xià yǔ a.',
    exampleMeaning:
      'Nói là sẽ tăng lương, nhưng không ngờ chỉ hứa suông.\n Sao vẫn chưa xuất phát, đừng có nói suông như vậy nhé.',
    arrange: '说好/ 没想到 /加工资的，/ 干打雷不下雨。\n怎么/ 没出发，/干打雷不下雨 / 还 / 可不要 / 啊。',
  },
  {
    simplified: '赶鸭子上架',
    pinyin: 'gǎn yā zi shàng jià',
    explanation: '比喻去做力不从心的事情。',
    explanationPinyin: 'Bǐyù qù zuò lìbùcóngxīn de shìqíng.',
    meaning: 'Biểu thị việc làm những việc vượt quá khả năng.\n',
    examples: '让我当所长真是赶鸭子上架啊。 \n让他当总经理不合适，这明明就是赶鸭子上架。',
    examplePinyin:
      'Ràng wǒ dāngsuǒ cháng zhēnshi gǎn yā zi shàng jià a. \nRàng tā dāng zǒng jīnglǐ bù héshì, zhè míngmíng jiùshì gǎn yā zi shàng jià.',
    exampleMeaning:
      'Để tôi làm trưởng phòng thật sự giống như ‘đuổi vịt lên giá’.\nĐể anh ta làm tổng giám đốc là không hợp lý, rõ ràng giống như ‘đuổi vịt lên giá’.',
    arrange: '真是 /让我当所长/ 赶鸭子上架 / 啊。\n让他/ 不合适，/ 赶鸭子上架。/当总经理 / 这明明就是 ',
  },
  {
    simplified: '告黑状',
    pinyin: 'gào hēi zhuàng',
    explanation: '歪曲或捏造事实向权力或检查机构控告别人。也指偷偷在上级面前诬告别人或说别人的坏话。',
    explanationPinyin:
      'Wāiqū huò niēzào shìshí xiàng quánlì huò jiǎnchá jīgòu kònggào biérén. Yě zhǐ tōutōu zài shàngjí miànqián wúgào biérén huò shuō biérén de huàihuà.',
    meaning:
      'Tố cáo sau lưng, mách lẻo\n Xuyên tạc hoặc bịa đặt sự thật để buộc tội ai đó trước cơ quan có thẩm quyền hoặc cơ quan kiểm tra.\n Nó còn ám chỉ việc ngấm ngầm vu cáo người khác hoặc nói xấu người khác trước mặt cấp trên.',
    examples: '据说他是被人告了黑状而下台的。\n 告黑状很可恶，无中生有，混淆黑白。',
    examplePinyin:
      'Jùshuō tā shì bèi rén gàole hēi zhuàng ér xiàtái de. \nGào hēi zhuàng hěn kěwù, wúzhōngshēngyǒu, hùnxiáo hēibái.',
    exampleMeaning:
      'Nghe nói anh ta bị hạ bệ vì bị ai đó tố cáo chuyện không hay.\n Việc tố cáo sai sự thật thật đáng ghét, dựng chuyện từ không thành có và làm rối loạn trắng đen.',
    arrange: '据说 / 被人告了/ 黑状而 / 他是 / 下台的。\n告黑状 / 无中生有，/ 混淆黑白。/ 很可恶，',
  },
  {
    simplified: '给点颜色看',
    pinyin: 'jǐ diǎn yán sè kàn',
    explanation: '把难看的脸色或做出某种严厉的行动给人看，以示警告或惩罚。',
    explanationPinyin:
      'Bǎ nánkàn de liǎnsè huò zuò chū mǒu zhǒng yánlì de xíngdòng jǐ rén kàn, yǐ shì jǐnggào huò chéngfá.',
    meaning:
      'Mặt nặng mày nhẹ\n Trưng ra sắc mặt khó coi hoặc hành động nghiêm khắc để cảnh cáo hoặc trừng phạt.',
    examples: '这孩子太不听话了，给他点颜色看看。\n 对方太嚣张了，我们得给他们点颜色看看。',
    examplePinyin:
      'Zhè háizi tài bù tīnghuàle, jǐ tā diǎn yán sè kàn kàn. \nDuìfāng tài xiāozhāngle, wǒmen dé jǐ tāmen diǎn yán sè kàn kàn.',
    exampleMeaning:
      'Đứa trẻ này thật không nghe lời, cho nó một bài học.\n Đối phương quá kiêu ngạo, chúng ta phải cho họ thấy sự nghiêm túc.',
    arrange: '点颜色看看。/ 这孩子 / 太不听话了，/给他 \n太嚣张了，/对方 /给他们 / 我们得 / 点颜色看看。',
  },
  {
    simplified: '跟风',
    pinyin: 'gēn fēng',
    explanation: '追随某种风气或潮流。',
    explanationPinyin: 'Zhuīsuí mǒu zhǒng fēngqì huò cháoliú.',
    meaning: 'Đu trend\n Theo đuổi một xu hướng hoặc trào lưu nào đó.',
    examples: '跟风是无知的人的不理性行为。\n 她喜欢跟风，追赶潮流，买了很多家里完全不需要的东西。',
    examplePinyin:
      'Gēn fēng shì wúzhī de rén de bù lǐxìng xíngwéi. \nTā xǐhuān gēn fēng, zhuīgǎn cháoliú, mǎile hěnduō jiālǐ wánquán bù xūyào de dōngxī.',
    exampleMeaning:
      'Chạy theo phong trào là hành vi thiếu lý trí của những người không hiểu biết.\n Cô ấy thích chạy theo mốt, mua nhiều thứ mà gia đình chẳng cần.',
    arrange:
      '跟风是 /理性行为。/不/无知的人的\n她 / 追赶潮流，/ 买了很多 /喜欢跟风，/不需要的东西。/ 家里 /完全 ',
  },
  {
    simplified: '跟屁虫',
    pinyin: 'gēn pì chóng',
    explanation: '比喻总是跟在人身后的人，多指孩子。',
    explanationPinyin: 'Bǐyù zǒng shì gēn zài rén shēnhòu de rén, duō zhǐ háizǐ.',
    meaning: 'Người luôn theo sau người khác, thường chỉ trẻ con.',
    examples: '儿子就像跟屁虫，甩不掉。',
    examplePinyin: 'Érzi jiù xiàng gēn pì chóng, shuǎi bù diào.',
    exampleMeaning: 'Con trai tôi cứ như cái đuôi, bám chặt không rời.',
    arrange: '儿子 /跟屁虫，/ 就像 / 甩不掉。',
  },
  {
    simplified: '狗头军师',
    pinyin: 'gǒu tóu jūn shī',
    explanation: '指给别人出坏主意的人。',
    explanationPinyin: 'Zhǐ gěi biérén chū huài zhǔyì de rén.',
    meaning: 'Chỉ người đưa ra ý tưởng xấu cho người khác.\n',
    examples: '哪个“狗头军师”给你出的坏主意? \n我就是我们这帮捣蛋鬼的“狗头军师”，许多主意是我出的。',
    examplePinyin:
      'Nǎge “gǒu tóu jūn shī” gěi nǐ chū de huài zhǔyì? \nWǒ jiùshì wǒmen zhè bāng dǎodàn guǐ de “gǒu tóu jūn shī”, xǔduō zhǔyì shì wǒ chū de.',
    exampleMeaning:
      'Ai là ‘người khôn ngoan’ đã cho bạn ý tưởng tồi tệ này?\nTôi chính là ‘người khôn ngoan’ trong nhóm những kẻ gây rối này, nhiều ý tưởng là do tôi đưa ra.',
    arrange:
      '哪个 / 给你出的 /“狗头军师”/坏主意?\n我就是 / 我们 /“狗头军师”，/ 是我出的。/ 这帮捣蛋鬼的 /许多主意 ',
  },
  {
    simplified: '狗腿子',
    pinyin: 'gǒu tuǐ zi',
    explanation: '指为主子跑腿办事的人。',
    explanationPinyin: 'Zhǐ wéi zhǔzǐ pǎotuǐ bànshì de rén.',
    meaning: 'Chỉ người làm tay sai cho người khác.',
    examples: '他在公司里就像个狗腿子，什么事都替老板做。\n他的祖父很有骨气，宁愿饿死，也不做坏人的狗腿子。',
    examplePinyin:
      'Tā zài gōngsī lǐ jiù xiàng gè gǒu tuǐ zi, shénme shì dōu tì lǎobǎn zuò. \nTā de zǔfù hěn yǒu gǔqì, nìngyuàn è sǐ, yě bù zuò huàirén de gǒu tuǐ zi.',
    exampleMeaning:
      'Anh ta trong công ty giống như kẻ nịnh bợ, việc gì cũng làm thay cho sếp.\nÔng nội của anh ta rất cứng cỏi, thà chết đói chứ không làm tay sai cho kẻ xấu.',
    arrange:
      '他 / 就像 /都替老板做。/ 个狗腿子，/ 什么事/ 在公司里  \n他的祖父 / 宁愿饿死，/ 也不做 /很有骨气，/  坏人的狗腿子。',
  },
  {
    simplified: '刮地皮',
    pinyin: 'guā dì pí',
    explanation: '比喻做官的人搜刮民财。',
    explanationPinyin: 'Bǐyù zuò guān de rén sōuguā mín cái.',
    meaning: 'Quan lại tham lam, chuyên vơ vét tài sản của dân.',
    examples: '为官三年，他刮了不少地皮，群众意见很大。\n\n',
    examplePinyin: 'Wèi guān sān nián, tā guā liǎo bù shǎo dì pí, qúnzhòng yìjiàn hěn dà. ',
    exampleMeaning: 'Làm quan ba năm, ông ta đã tham nhũng không ít, khiến dân chúng rất bất mãn.',
    arrange: '为官三年，/ 不少地皮，/ 群众意见 /他刮了 / 很大。',
  },
  {
    simplified: '挂羊头卖狗肉',
    pinyin: 'guà yáng tóu mài gǒu ròu',
    explanation: '比喻骗人的买卖。',
    explanationPinyin: 'Bǐyù piàn rén de mǎimài.',
    meaning: 'Biểu thị giao dịch lừa đảo.\n\n',
    examples: '你们怎么挂羊头卖狗肉啊? 这不是骗人吗?\n挂羊头卖狗肉的商店不会长久。',
    examplePinyin:
      'Nǐmen zěnme guà yáng tóu mài gǒu ròu a? Zhè bùshì piàn rén ma? \nGuà yáng tóu mài gǒu ròu de shāngdiàn bù huì chángjiǔ.',
    exampleMeaning:
      'Sao các bạn lại "treo đầu dê bán thịt chó" vậy? Không phải là lừa đảo sao?\nCửa hàng ‘treo đầu dê bán thịt chó’ sẽ không tồn tại lâu dài.',
    arrange: '你们怎么 / 啊? / 这不是 /挂羊头卖狗肉/ 骗人吗?\n商店 / 挂羊头卖狗肉/ 的 / 不会长久。',
  },
  {
    simplified: '灌米汤',
    pinyin: 'guàn mǐ tāng',
    explanation: '比喻用甜言蜜语奉承人迷惑人。',
    explanationPinyin: 'Bǐyù yòng tiányánmìyǔ fèngchéng rén míhuò rén.',
    meaning:
      'Nói ngon nói ngọt\n Phép ẩn dụ cho việc dùng những lời lẽ ngọt ngào để nịnh nọt và dụ dỗ người khác.',
    examples:
      '你少给我灌米汤，我可不吃你这一套。\n 你给他戴戴高帽，灌灌米汤，他就不知道东南西北了，就会答应你的要求了。',
    examplePinyin:
      'Nǐ shǎo gěi wǒ guàn mǐ tāng, wǒ kěbù chī nǐ zhè yī tào. \nNǐ gěi tā dài dài gāo mào, guàn guàn mǐ tāng, tā jiù bù zhīdào dōngnán xīběile, jiù huì dāyìng nǐ de yāoqiúle.',
    exampleMeaning:
      'Bạn đừng có nói lời ngọn tiếng ngọt với tôi, tôi không dễ bị lừa như vậy đâu.\n Bạn khen ngợi và nói ngọt nịnh nọt, thì anh ta sẽ không còn biết trời trăng gì nữa và sẽ đồng ý yêu cầu của bạn.',
    arrange:
      '少给/ 我可不吃 / 我灌米汤，/你 / 你这一套。\n你 / 戴戴高帽，/ 灌灌米汤，/ 他就 /东南西北了，/ 给他 / 不知道/ 就会答应你的要求了。',
  },
  {
    simplified: '鬼把戏 ',
    pinyin: 'guǐ bǎ xì',
    explanation: '阴险的手段或计策。',
    explanationPinyin: 'Yīnxiǎn de shǒuduàn huò jìcè.',
    meaning: 'Mưu kế thâm độc, hiểm ác.',
    examples: '少拿鬼把戏唬我，我不信邪。',
    examplePinyin: 'Shǎo ná guǐ bǎ xì hǔ wǒ, wǒ bùxìn xié.',
    exampleMeaning: 'Đừng dùng trò ma mãnh để hù tôi, tôi không tin đâu.',
    arrange: '鬼把戏 / 我 /少拿/不信邪。/唬我，',
  },
  {
    simplified: '鬼点子 ',
    pinyin: 'guǐ diǎn zi',
    explanation: '比喻坏主意。也可比喻出人意料的好点子。',
    explanationPinyin: 'Bǐyù huài zhǔyì. Yě kě bǐyù chūrényìliào de hǎo diǎnzǐ.',
    meaning: 'Ý tưởng xấu xa, nhưng cũng có thể ám chỉ ý tưởng bất ngờ mang lại hiệu quả tốt.',
    examples: '就他鬼点子多，有时还挺管用。',
    examplePinyin: 'Jiù tā guǐ diǎn zi duō, yǒushí hái tǐng guǎnyòng.',
    exampleMeaning: 'Anh ta có rất nhiều mưu mẹo, đôi khi lại khá hiệu quả.',
    arrange: '就/ 还 /鬼点子多，/ 有时/ 挺管用。/他',
  },
  {
    simplified: '鬼门关',
    pinyin: 'guǐ mén guān',
    explanation: '迷信传说中的阴阳交界的关口，比喻凶险的地方。',
    explanationPinyin: 'Míxìn chuánshuō zhōng de yīnyáng jiāojiè de guānkǒu, bǐyù xiōngxiǎn dì dìfāng.',
    meaning:
      'Nơi cực kỳ nguy hiểm, ám chỉ địa điểm đầy rủi ro, theo truyền thuyết là cổng giao nhau giữa âm và dương.',
    examples: '这就是传说中的鬼门关，敢不敢闯?\n',
    examplePinyin: 'Zhè jiùshì chuánshuō zhōng de guǐ mén guān, gǎn bù gǎn chuǎng?',
    exampleMeaning: 'Đây chính là “cửa tử” trong truyền thuyết, dám bước qua không?',
    arrange: '这就是 / 敢/ 传说中的 / 鬼门关，/ 不敢闯?',
  },
  {
    simplified: '滚刀肉',
    pinyin: 'gǔn dāo ròu',
    explanation: '死皮赖脸、很难打发的人。',
    explanationPinyin: 'Sǐpílàiliǎn, hěn nán dǎfā de rén.',
    meaning: 'Người lì lợm, dai dẳng, khó mà đuổi đi được.',
    examples: '离他远点，他是一块滚刀肉，很难打发的。',
    examplePinyin: 'Lí tā yuǎn diǎn, tā shì yīkuài gǔn dāo ròu, hěn nán dǎfā de.',
    exampleMeaning: 'Tránh xa anh ta ra, vì anh ấy như “kẻ lì lợm”, rất khó mà đuổi đi.',
    arrange: '离他远点，/一块滚刀肉，/打发的。//他是/很难',
  },
  {
    simplified: '哈巴狗',
    pinyin: 'hǎ ba gǒu',
    explanation: '指点头哈腰、溜须拍马的人。',
    explanationPinyin: 'Zhǐ diǎntóuhāyāo, liūxūpāimǎ de rén.',
    meaning: 'Chỉ những người cúi đầu, nịnh bợ.\n',
    examples:
      '我最讨厌像“哈巴狗”一样的人，这样的嘴脸实在看着不舒服。 \n“哈巴狗”最可恶，最没立场，还经常坏事。',
    examplePinyin:
      'Wǒ zuì tǎoyàn xiàng “hǎ bā gǒu” yīyàng de rén, zhèyàng de zuǐliǎn shízài kànzhe bú shūfú. \n“Hǎ bā gǒu” zuì kěwù, zuì méi lìchǎng, hái jīngcháng huàishì.',
    exampleMeaning:
      'Tôi ghét nhất những người giống như "chó hầu", cái mặt như vậy thật không dễ chịu.\n"Chó hầu" thì đáng ghét nhất, không có lập trường, còn thường làm việc xấu.',
    arrange:
      '最讨厌/我 / 一样的人，/ 这样的 /嘴脸/实在/看着/像“哈巴狗”/不舒服。\n“哈巴狗”/坏事。/经常/最可恶，/最没立场，/ 还',
  },
  {
    simplified: '喝倒彩 ',
    pinyin: 'hè dào cǎi',
    explanation: '看到别人失误时起哄。',
    explanationPinyin: 'Kàn dào biérén shīwù shí qǐhòng.',
    meaning: 'Chọc ghẹo khi thấy người khác mắc lỗi.',
    examples: '做艺人，要有经常被人喝倒彩的准备。',
    examplePinyin: 'Zuò yìrén, yào yǒu jīngcháng bèi rén hè dào cǎi de zhǔnbèi.',
    exampleMeaning: 'Nghề nghệ sĩ đòi hỏi phải sẵn sàng đối mặt với những lời chỉ trích từ khán giả.',
    arrange: '要有/ 做艺人，/ 准备。/经常/被人，/喝倒彩的 ',
  },
  {
    simplified: '喝黄汤',
    pinyin: 'hē huáng tāng',
    explanation: '泛指饮酒，黄汤指黄酒。',
    explanationPinyin: 'Fàn zhǐ yǐnjiǔ, huángtāng zhǐ huángjiǔ.',
    meaning: 'Chén chú chén anh\n Chỉ việc uống rượu nói chung, canh vàng ở đây ý nói đến rượu màu vàng.',
    examples: '你就知道喝黄汤，也不管管孩子的学习。\n你跌跌撞撞地回了家，满身酒气，肯定是喝了不少黄汤。',
    examplePinyin:
      'Nǐ jiù zhīdào hē huáng tāng, yě bù guǎn guǎn háizi de xuéxí.\nNǐ diēdiēzhuàngzhuàng de huí le jiā, mǎn shēn jiǔ qì, kěndìng shì hē le bù shǎo huáng tāng.',
    exampleMeaning:
      'Anh chỉ biết uống rượu, cũng chẳng quan tâm đến việc học hành của con.\nAnh loạng choạng về nhà, người đầy mùi rượu, chắc chắn là đã uống không ít rượu rồi.',
    arrange:
      '你就知道/ 也不管管 / 喝黄汤，/孩子的/学习。\n跌跌撞撞地 /你 / 回了家，/肯定是/喝了/满身酒气，/不少黄汤。',
  },
  {
    simplified: '和事佬',
    pinyin: 'hé shì lǎo',
    explanation: '指调停争端的人，特指无原则地进行调解的人。',
    explanationPinyin: 'Zhǐ tiáotíng zhēngduān dì rén, tè zhǐ wú yuánzé de jìnxíng tiáojiě de rén.',
    meaning: 'Chỉ người hòa giải, đặc biệt là người hòa giải không có nguyên tắc.',
    examples: '他总是充当和事佬，让大家的矛盾平息。\n清官难断家务事，夫妻吵架时，旁人只能做和事佬。',
    examplePinyin:
      'Tā zǒng shì chōngdāng hé shì lǎo, ràng dàjiā de máodùn píngxí. \nQīngguān nán duàn jiāwù shì, fūqī chǎojià shí, pángrén zhǐ néng zuò hé shì lǎo.',
    exampleMeaning:
      'Anh ta luôn đóng vai người hòa giải, giúp mọi người hạ nhiệt căng thẳng.\nQuan tòa còn khó xử chuyện gia đình, khi vợ chồng cãi nhau, người ngoài chỉ có thể làm người hòa giải.',
    arrange:
      '总是/他/ 充当和事佬，/平息。/大家的/矛盾/让\n清官/家务事，/难断/做和事佬。/夫妻吵架时，/ 旁人/只能',
  },
  {
    simplified: '黑社会',
    pinyin: 'hēi shè huì',
    explanation: '从事非法活动( 如走私、贩毒、赌博等) 的场所或组织。',
    explanationPinyin: 'Cóngshì fēifǎ huódòng (rú zǒusī, fàndú, dǔbó děng) de chǎngsuǒ huò zǔzhī.',
    meaning: 'Nơi hoặc tổ chức hoạt động phi pháp như buôn lậu, ma túy, cờ bạc.',
    examples: '很多国家有黑社会，包括北欧。',
    examplePinyin: "Hěnduō guójiā yǒu hēi shè huì, bāokuò běi'ōu.",
    exampleMeaning: 'Nhiều quốc gia, kể cả Bắc Âu, vẫn tồn tại các băng đảng xã hội đen.',
    arrange: '很多/有/黑社会，/国家/包括北欧。',
  },
  {
    simplified: '黑心肠',
    pinyin: 'hēi xīn cháng',
    explanation: '比喻用心阴险毒辣。也说“黑心肝”。',
    explanationPinyin: 'Bǐyù yòngxīn yīnxiǎn dúlà. Yě shuō “hēi xīngān”.',
    meaning: 'Ý chỉ những kẻ có tâm địa ác độc. Cũng nói là “黑心肝”.',
    examples:
      '那家餐厅的老板黑心肠，竟然用过期的食材。\n这些厂商真是黑心肠，竟然制造出劣质婴儿奶粉坑害消费者。',
    examplePinyin:
      "Nà jiā cāntīng de lǎobǎn hēi xīn cháng, jìngrán yòng guòqí de shícái. \nZhèxiē chǎngshāng zhēnshi hēi xīn cháng, jìngrán zhìzào chū lièzhì yīng'ér nǎifěn kēnghài xiāofèi zhě.",
    exampleMeaning:
      'Ông chủ của nhà hàng đó thật độc ác, dám sử dụng nguyên liệu quá hạn.\nNhững nhà sản xuất này thật ác độc, sản xuất sữa bột kém chất lượng gây hại cho người tiêu dùng.',
    arrange:
      '他/那家餐厅的/用/竟然/过期的/老板黑心肠，/食材。\n这些厂商/坑害/真是/黑心肠，/ 婴儿奶粉 /制造出劣质/竟然/消费者。',
  },
  {
    simplified: '恨铁不成钢',
    pinyin: 'hèn tiě bù chéng gāng',
    explanation: '比喻对人要求严格，希望他更好。',
    explanationPinyin: 'Bǐyù duì rén yāoqiú yángé, xīwàng tā gèng hǎo.',
    meaning: 'Đối với người có yêu cầu khắt khe, mong muốn họ tốt hơn.',
    examples:
      '很多父母都对子女期望很高，恨铁不成钢，孩子的压力很大。\n对于中国队的表现，球迷只能干着急，恨铁不成钢。',
    examplePinyin:
      'Hěnduō fùmǔ dōu duì zǐnǚ qīwàng hěn gāo, hèn tiě bù chéng gāng, háizǐ de yālì hěn dà. \nDuìyú zhōngguó duì de biǎoxiàn, qiúmí zhǐ néng gān zhāojí, hèn tiě bù chéng gāng.',
    exampleMeaning:
      'Nhiều bậc phụ huynh có kỳ vọng rất cao với con cái, như "không sắt cũng phải thành thép", khiến trẻ áp lực rất lớn. \nĐối với màn trình diễn của đội tuyển Trung Quốc, người hâm mộ chỉ có thể sốt ruột, như "không sắt cũng phải thành thép".',
    arrange:
      '期望很高/压力很大。/孩子的/都/父母 /恨铁不成钢，/对子女\n球迷/对于/只能/干着急，/恨铁不成钢。/表现/中国队的',
  },
  {
    simplified: '红眼病',
    pinyin: 'hóng yǎn bìng',
    explanation: '严重嫉妒的情绪。',
    explanationPinyin: 'Yánzhòng jídù de qíngxù.',
    meaning: 'Cảm giác ghen tỵ mạnh mẽ.',
    examples: '他对同事的成功感到红眼病，心里不舒服。\n看到别人中了大奖，他犯起了红眼病。',
    examplePinyin:
      'Tā duì tóngshì de chénggōng gǎndào hóng yǎn bìng, xīnlǐ bú shūfú. \nKàn dào biérén zhōngle dàjiǎng, tā fàn qǐle hóng yǎn bìng.',
    exampleMeaning:
      '\nAnh ta cảm thấy khó chịu vì ghen tị với thành công của đồng nghiệp.\nThấy người khác trúng giải lớn, anh ta bắt đầu nổi lòng đố kỵ.\n',
    arrange: '红眼病，/他对/感到/心里不舒服。/同事的/成功\n看到/他犯起了/别人/红眼病。/中大奖，',
  },
  {
    simplified: '鸿门宴 ',
    pinyin: 'hóng mén yàn',
    explanation: '喻指加害客人的宴会。',
    explanationPinyin: 'Yù zhǐ jiāhài kèrén de yànhuì.',
    meaning: 'Bữa tiệc có ý định hại khách, ám chỉ âm mưu gây tổn hại dưới vỏ bọc tiếp đãi.',
    examples: '今晚的饭局可能是鸿门宴，饭可不好吃啊。\n',
    examplePinyin: 'Jīn wǎn de fànjú kěnéng shì hóng mén yàn, fàn kěbù hào chī a. ',
    exampleMeaning: 'Bữa tiệc tối nay có lẽ là “bữa tiệc hại người,” đồ ăn chắc sẽ không ngon lành gì đâu.',
    arrange: '今晚的/饭局/鸿门宴，/ 不好吃啊。/饭可/可能是',
  },
  {
    simplified: '后遗症',
    pinyin: 'hòu yí zhèng',
    explanation: '受伤后遗留病症，常指处理不干净，留麻烦。',
    explanationPinyin: 'Shòushāng hòu yíliú bìngzhèng, cháng zhǐ chǔlǐ bù gānjìng, liú máfan.',
    meaning: 'Di chứng sau khi bị thương, thường chỉ việc xử lý không thấu triệt, để lại rắc rối.',
    examples: '他发热后怎么呆头呆脑的，是不是有了后遗症?\n 把猪圈全部彻底地消毒一遍，别留后遗症。',
    examplePinyin:
      'Tā fārè hòu zěnme dāitóudāinǎo de, shì bùshì yǒule hòu yí zhèng? \nBǎ zhū quān quánbù chèdǐ dì xiāodú yībiàn, bié liú hòu yí zhèng.',
    exampleMeaning:
      'Sau cơn sốt, sao anh ấy trở nên ngơ ngác, có phải để lại di chứng không?\n Hãy khử trùng toàn bộ chuồng lợn, đừng để lại bất kỳ nguy cơ nào.',
    arrange: '发热后/他/呆头呆脑的，/怎么/有了/后遗症？/是不是\n把猪圈 /彻底地/消毒一遍，/后遗症。/别留/全部',
  },
  {
    simplified: '狐狸精',
    pinyin: 'hú lí jīng',
    explanation:
      '传说中狐狸变成的精灵，极其狡猾，善于迷惑人。比喻诡计多端，极其狡猾的人，\n也说“老狐狸”。也比喻作风轻浮、善于用迷惑手段勾引人的女人，特指勾引、迷惑\n男子的女人。',
    explanationPinyin:
      'Chuánshuō zhōng húlí biàn chéng de jīnglíng, jíqí jiǎohuá, shànyú míhuò rén. Bǐyù guǐjì duōduān, jíqí jiǎohuá de rén, yě shuō “lǎohúlí”. Yě bǐyù zuòfēng qīngfú, shànyú yòng míhuò shǒuduàn gōuyǐn rén de nǚrén, tè zhǐ gōuyǐn, míhuò nánzǐ de nǚrén.',
    meaning:
      'Nghĩa gốc: Trong truyền thuyết, "狐狸精" là yêu tinh hồ ly, một loại tinh linh hóa thành từ cáo, nổi tiếng vì sự xảo quyệt và khả năng mê hoặc con người.\n\nNghĩa bóng: Chỉ những người đầy mưu kế, cực kỳ xảo quyệt như "老狐狸" (lǎo húli), tức "cáo già".Dùng để chỉ người phụ nữ có tính cách lả lơi, hay dùng vẻ đẹp và sự quyến rũ để mê hoặc và quyến rũ đàn ông, đặc biệt khi muốn ám chỉ đến người phụ nữ chuyên quyến rũ đàn ông.',
    examples: '有人常用狐狸精这个词来诽谤女人，直到今天，仍然如此。',
    examplePinyin: 'Yǒurén chángyòng hú lí jīng zhège cí lái fěibàng nǚrén, zhídào jīntiān, réngrán rúcǐ.',
    exampleMeaning:
      'Có người vẫn dùng từ “hồ ly tinh” để xúc phạm phụ nữ, và điều này vẫn tiếp diễn đến ngày nay.',
    arrange: '常用/这个词/ 狐狸精 /来诽谤女人，/有人 /直到今天，/仍然如此。',
  },
  {
    simplified: '花花肠子',
    pinyin: 'huā hua cháng zi',
    explanation: '比喻淫邪的念头或坏主意。',
    explanationPinyin: 'Bǐyù yínxié de niàntou huò huài zhǔyì.',
    meaning: 'Ý chỉ những tư tưởng xấu xa hoặc âm mưu đê hèn.',
    examples:
      '他的花花肠子让很多人都不敢信任他。\n他肚子里都是些花花肠子，对女孩子不怀好意，你小心提防着他。',
    examplePinyin:
      'Tā de huā hua cháng zi ràng hěnduō rén dōu bù gǎn xìnrèn tā. \nTā dùzi lǐ dōu shì xiē huā hua cháng zi, duì nǚ háizi bù huái hǎoyì, nǐ xiǎoxīn tífángzhe tā.',
    exampleMeaning:
      'Những mưu mẹo xảo trá của anh ta khiến nhiều người không dám tin tưởng.\nAnh ta chứa đầy mưu mô trong lòng, đối với con gái lại không có ý tốt, cậu phải cẩn thận với anh ta.',
    arrange:
      '他的/都/ 信任他。/花花肠子/让/不敢/很多人/他\n花花肠子，/他/ 都是/你 / 对女孩子/小心/不怀好意，/提防着他。/肚子里',
  },
  {
    simplified: '花架子',
    pinyin: 'huā jià zi',
    explanation:
      '指只能在舞台上耍的一种架势，看起来虽然很美，但真的打起来却没有什么用处。\n比喻表面上好看、而实际上无用的事物或人。',
    explanationPinyin:
      'Zhǐ zhǐ néng zài wǔtái shàng shuǎ de yī zhǒng jiàshì, kàn qǐlái suīrán hěn měi, dàn zhēn de dǎ qǐlái què méiyǒu shé me yòngchù. Bǐyù biǎomiàn shàng hǎokàn, ér shíjì shang wúyòng de shìwù huò rén.',
    meaning:
      'Điệu bộ biểu diễn trên sân khấu nhìn đẹp mắt nhưng vô dụng trong thực tế, ám chỉ những thứ chỉ tốt bề ngoài nhưng không có giá trị thực.',
    examples: '习武光有花架子不行，要有扎实的功夫，也要有抗击打的能力。\n',
    examplePinyin:
      'Xíwǔguāng yǒu huā jià zi bùxíng, yào yǒu zhāshi de gōngfū, yě yào yǒu kàngjí dǎ di nénglì.',
    exampleMeaning:
      'Học võ không chỉ cần chiêu thức đẹp, mà còn phải có kỹ năng thực tế và khả năng chịu đòn.',
    arrange: '习武光有/不行，/要有/花架子/扎实的功夫，/抗击打的能力。/也要有',
  },
  {
    simplified: '怀鬼胎',
    pinyin: 'huái guǐ tāi',
    explanation: '有坏心思。',
    explanationPinyin: 'Yǒu huài xīnsī.',
    meaning: 'Có ý đồ xấu.',
    examples: '他怀了鬼胎，鬼头鬼脑的，很让人怀疑。\n莫非他怀了鬼胎，怎么这么不自然?',
    examplePinyin:
      'Tā huáile guǐ tāi, guǐtóuguǐnǎo de, hěn ràng rén huáiyí. \nMòfēi tā huáile guǐ tāi, zěnme zhème bù zìrán?',
    exampleMeaning:
      'Anh ấy có ý đồ xấu, hành động lén lút, rất đáng nghi.\nLiệu anh ấy có ý đồ gì không, sao lại bất thường như vậy?',
    arrange: '鬼头鬼脑的，/怀疑。/让人/他/很/怀了鬼胎，\n怀了鬼胎，/莫非他/不自然？/怎么/这么',
  },
  {
    simplified: '黄昏恋',
    pinyin: 'huáng hūn liàn',
    explanation: '比喻丧偶或离异的老人再次恋爱。含褒义。',
    explanationPinyin: "Bǐyù sàng'ǒu huò líyì de lǎorén zàicì liàn'ài. Hán bāoyì.",
    meaning: 'Đi bước nữa\n So sánh người già mất vợ hoặc ly hôn lại yêu đương. Có nghĩa tích cực.',
    examples:
      '黄昏恋应该得到子女的支持，应该得到更多人的理解和支持。\n 老年人也需要黄昏恋，也有拥有爱情的权利。',
    examplePinyin:
      'Huáng hūn liàn yīnggāi dédào zǐnǚ de zhīchí, yīnggāi dédào gèng duō rén de lǐjiě hé zhīchí. \nLǎonián rén yě xūyào huáng hūn liàn, yěyǒu yǒngyǒu àiqíng de quánlì.',
    exampleMeaning:
      'Tình yêu ở tuổi xế chiều nên nhận được sự ủng hộ từ con cái, và cần được nhiều người khác hiểu và ủng hộ.\n Người già cũng cần tình yêu ở tuổi xế chiều, họ cũng có quyền được yêu thương.',
    arrange:
      '黄昏恋/应该得到/理解和支持。/应该/更多人的/子女的支持，/得到/黄昏恋\n老年人/黄昏恋，/ 爱情地权利。/也有 /拥有/也需要/老年人',
  },
  {
    simplified: '黄粱梦',
    pinyin: 'huáng liáng mèng',
    explanation: '比喻想实现的好事落空或幻想破灭。',
    explanationPinyin: 'Bǐyù xiǎng shíxiàn de hǎoshì luòkōng huò huànxiǎng pòmiè.',
    meaning:
      'Giấc mộng kê vàng\n Ẩn dụ chỉ những điều tốt đẹp mà bạn muốn không thể đạt được hoặc chỉ sự vỡ mộng.',
    examples: '指望炒股发财对大多数人来说只能是黄粱梦。\n 想彩票中奖那是在做黄粱梦。',
    examplePinyin:
      'Zhǐwàng chǎogǔ fācái duì dà duōshù rén lái shuō zhǐ néng shì huáng liáng mèng. \nXiǎng cǎipiào zhòngjiǎng nà shì zài zuò huáng liáng mèng.',
    exampleMeaning:
      'Trông mong làm giàu từ chứng khoán đối với hầu hết mọi người chỉ là giấc mơ hoang đường.\n Nghĩ đến trúng số cũng chỉ là giấc mơ hoang tưởng.',
    arrange: '对大多数人/只能是/炒股发财/黄粱梦。/指望/来说\n彩票中奖/那是在/做黄粱梦。/想',
  },
  {
    simplified: '黄毛丫头',
    pinyin: 'huáng máo yā tou',
    explanation: '指年幼的女孩子。含戏谑或轻侮意。',
    explanationPinyin: 'Zhǐ nián yòu de nǚ háizǐ. Hán xìxuè huò qīngwǔ yì.',
    meaning: 'Con nít miệng còn hôi sữa\n Chỉ những cô gái trẻ. Có ý chế nhạo hoặc coi thường.',
    examples: '黄毛丫头，能懂什么? 走远点!\n 一个黄毛丫头，竟然如此勇敢，真了不起。',
    examplePinyin:
      'Huáng máo yā tou, néng dǒng shénme? Zǒu yuǎn diǎn! \nYīgè huáng máo yā tou, jìngrán rúcǐ yǒnggǎn, zhēn liǎobùqǐ.',
    exampleMeaning:
      'Con nhóc này hiểu gì chứ? Đi chỗ khác đi!\n Một cô nhóc mà dũng cảm thế, thật đáng khâm phục.',
    arrange: '黄毛丫头，/什么？/能懂/走远点！\n黄毛丫头，/一个/了不起。/ 竟然/如此勇敢，/真',
  },
  {
    simplified: '混世魔王',
    pinyin: 'hùn shì mó wáng',
    explanation: '魔王的一种，比喻什么都不怕的人。',
    explanationPinyin: 'Mówáng de yī zhǒng, bǐyù shénme dōu bùpà de rén.',
    meaning: 'Kẻ không biết sợ gì cả, bất chấp mọi thứ.',
    examples: '他无恶不作，成了混世魔王。\n',
    examplePinyin: "Tā wú'èbùzuò, chéngle hùn shì mó wáng.",
    exampleMeaning: 'Anh ấy đã làm đủ mọi chuyện xấu xa và trở thành một “ma vương”.',
    arrange: '他/混世魔王。/无恶不作，/成了',
  },
  {
    simplified: '活雷锋',
    pinyin: 'huó léi fēng',
    explanation: '像雷锋一样乐于做好事的人。',
    explanationPinyin: 'Xiàng léifēng yīyàng lèyú zuò hǎoshì de rén.',
    meaning: 'Người luôn nhiệt tình giúp đỡ và làm việc tốt, giống như Lôi Phong.',
    examples: '他真是活雷锋，这样的人现在不多了。\n',
    examplePinyin: 'Tā zhēnshi huó léi fēng, zhèyàng de rén xiànzài bù duōle.',
    exampleMeaning: 'Anh ấy thực sự là một “Lôi Phong sống,” kiểu người tốt như vậy giờ rất hiếm.',
    arrange: '他/活雷锋，/真是/这样的人/现在/不多了。',
  },
  {
    simplified: '活菩萨',
    pinyin: 'huó pú sà',
    explanation: '菩萨，佛教中修行到一定程度、地位，仅次于佛的人。活菩萨是比喻心肠慈善或救人\n出苦难的人。',
    explanationPinyin:
      'Púsà, fójiào zhōng xiūxíng dào yīdìng chéngdù, dìwèi, jǐn cì yú fú de rén. Huó púsà shì bǐyù xīncháng císhàn huò jiù rén chū kǔnàn de rén.',
    meaning:
      'Phật Bà trong Phật giáo là người tu hành đạt được cảnh giới gần với Phật. “Bồ Tát sống” ám chỉ người có lòng nhân từ, hay giúp đỡ người khác thoát khỏi khổ đau.',
    examples: '她修行多年了，慈眉善目，真是个活菩萨。',
    examplePinyin: 'Tā xiūxíng duōniánle, címéishànmù, zhēnshi gè huó pú sà.',
    exampleMeaning:
      'Cô ấy đã tu hành nhiều năm, với dáng vẻ hiền từ và phúc hậu, thật sự là một “Bồ Tát sống”.',
    arrange: '她/修行/真是个/活菩萨。/多年了，/慈眉善目，',
  },
  {
    simplified: '和稀泥',
    pinyin: 'huò xī ní',
    explanation: '比喻无原则地调解或折中。',
    explanationPinyin: 'Bǐyù wú yuánzé dì tiáojiě huò zhé zhōng.',
    meaning: 'Dĩ hòa vi quý\n Ý chỉ việc hòa giải hoặc thỏa hiệp mà không có nguyên tắc.',
    examples: '\n 领导不想解决什么问题，所以在会上和起了稀泥。',
    examplePinyin: '\nLǐngdǎo bùxiǎng jiějué shénme wèntí, suǒyǐ zài huì shàng huò qǐle xī ní.',
    exampleMeaning: '\n Lãnh đạo không muốn giải quyết vấn đề gì, nên chỉ hòa giải qua loa trong cuộc họp.',
    arrange: '\n领导/所以/不想/解决/什么问题，/和/起了/在会上/稀泥。',
  },
  {
    simplified: '活阎王',
    pinyin: 'huó yán wɑnɡ',
    explanation: '比喻残害民众、极其凶恶的人。',
    explanationPinyin: 'Bǐyù cánhài mínzhòng, jíqí xiōng’è de rén.',
    meaning: 'Kẻ độc ác, tàn bạo, gây hại cho dân chúng.',
    examples: '那个活阎王被人民处决了。',
    examplePinyin: 'Nàgè huó yán wang bèi rénmín chǔjué le.',
    exampleMeaning: 'Tên bạo chúa đó đã bị nhân dân xử tử.',
    arrange: '人民/那个/被/活阎王/处决了。',
  },
  {
    simplified: '几斤几两',
    pinyin: 'jǐ jīn jǐ liǎnɡ',
    explanation: '比喻底细。',
    explanationPinyin: 'Bǐyù dǐxì.',
    meaning: 'Biểu thị những thông tin chi tiết hoặc bí mật.',
    examples: '他有几斤几两，我一清二楚。\n 我真看不出他有几斤几两，好像挺有实力的。',
    examplePinyin:
      "Tā yǒu jǐ jīn jǐ liǎng, wǒ yī qīng'èr chǔ. \n Wǒ zhēn kàn bù chū tā yǒu jǐ jīn jǐ liǎng, hǎoxiàng tǐng yǒu shílì de.",
    exampleMeaning:
      'Tôi rất rõ về khả năng của anh ta. \n Tôi thật sự không nhận ra anh ta có khả năng gì, có vẻ khá mạnh mẽ.',
    arrange: '一清二楚。/他/有/我/几斤几两，\n 我/有实力/有几斤几两，/真看不出/好像/挺/的。/他',
  },
  {
    simplified: '机灵鬼',
    pinyin: 'jī línɡ ɡuǐ',
    explanation: '很机灵的人。',
    explanationPinyin: 'Hěn jīling de rén.',
    meaning: 'Người rất thông minh.',
    examples: '我儿子是机灵鬼，老师很喜欢。\n 这个机灵鬼被首长看中了，做了警卫员。',
    examplePinyin:
      'Wǒ érzi shìjī línɡ ɡuǐ, lǎoshī hěn xǐhuān. \n Zhège jī línɡ ɡuǐ bèi shǒuzhǎng kàn zhòng le, zuòle jǐngwèi yuán.',
    exampleMeaning:
      'Con trai tôi là một đứa trẻ thông minh, được thầy giáo rất thích.\n Đứa trẻ thông minh này được lãnh đạo chú ý, đã trở thành vệ sĩ.',
    arrange: '老师/我儿子/机灵鬼，/很喜欢。/是\n 这个/警卫员。/机灵鬼/看中了，/被/做了/首长',
  },
  {
    simplified: '及时雨',
    pinyin: 'jí shí yǔ',
    explanation: '正赶上时候、适合需要的人或事。',
    explanationPinyin: 'Zhèng gǎnshàng shíhòu, shìhé xūyào de rén huò shì.',
    meaning: 'Người hoặc việc đúng lúc cần thiết.',
    examples: '资金到位了，真是一场及时雨。',
    examplePinyin: 'Zījīn dào wèi le, zhēn shì yī chǎng jí shí yǔ.',
    exampleMeaning:
      'Khoản vốn đến đúng lúc, đúng như một “cơn mưa kịp thời” giúp chúng tôi vượt qua khó khăn.',
    arrange: '真是/到位了，/一场/资金/及时雨。',
  },
  {
    simplified: '急先锋',
    pinyin: 'jí xiān fēnɡ',
    explanation: '打仗时冲锋在前的人。比喻积极领头的人。',
    explanationPinyin: 'Dǎzhàng shí chōngfēng zài qián de rén. Bǐyù jījí lǐngtóu de rén.',
    meaning: 'Người cầm cờ\n Người xung phong trong chiến đấu. So sánh với người chủ động, dẫn đầu.',
    examples: '冒充什么急先锋呀，你看，吃亏了吧。\n 想做单位的急先锋，你还嫩了点。',
    examplePinyin:
      'Màochōng shénme jí xiān fēng ya, nǐ kàn, chī kuīle ba.\n Xiǎng zuò dānwèi de jí xiān fēng, nǐ hái nènle diǎn.',
    exampleMeaning:
      'Làm gì mà tỏ ra tiên phong, thấy chưa, chịu thiệt rồi.\n Muốn làm người tiên phong của đơn vị, cậu còn non lắm.',
    arrange: '吃亏/急先锋/呀，/冒充什么/你看，/了吧。\n 还/想做/嫩了/急先锋，/单位的/你/点。',
  },
  {
    simplified: '挤牙膏',
    pinyin: 'jǐ yá ɡāo',
    explanation: '说话不痛快，或施加一点压力，说出一点情况。',
    explanationPinyin: 'Shuōhuà bù tòngkuài, huò shījiā yīdiǎn yālì, shuō chū yīdiǎn qíngkuàng.',
    meaning:
      'Nói chuyện không thẳng thắn, hoặc khi bị áp lực một chút thì mới tiết lộ được một chút thông tin.',
    examples:
      '犯罪嫌疑人交代情况吞吞吐吐，就像挤牙膏。 \n 他不愿出力，干活就像挤牙膏，别人盯得紧，就挤一点儿。',
    examplePinyin:
      'Fànzuì xiányí rén jiāodài qíngkuàng tūntūntǔtǔ, jiù xiàng jǐ yá ɡāo. \n Tā bù yuàn chūlì, gànhuó jiù xiàng jǐ yá ɡāo, biérén dīng de jǐn, jiù jǐ yīdiǎnr.',
    exampleMeaning:
      'Nghi phạm khai báo tình hình một cách ấp úng, giống như đang không tự nguyện.\n Anh ta không muốn bỏ công sức, làm việc như bị ép, người khác nhìn thì mới chịu tập trung một chút.',
    arrange:
      '就像/犯罪嫌疑人/情况/吞吞吐吐，/交代/挤牙膏。 \n 他/不愿/就挤/干活/就像挤牙膏，/别人/出力，/盯得紧，/一点儿。',
  },
  {
    simplified: '夹生饭',
    pinyin: 'jiā shēnɡ fàn',
    explanation:
      '本意为半生不熟的饭，比喻开始没做好再做也很难做好的事情，或开 \n 头没解决以后也很难解决的问题。',
    explanationPinyin:
      'Běnyì wèi bàn shēng bù shú de fàn, bǐyù kāishǐ méi zuò hǎo zài zuò yě hěn nán zuò hǎo de shìqíng, huò kāitóu méi jiějué yǐhòu yě hěn nán jiějué de wèntí.',
    meaning: 'Cơm nửa sống nửa chín, ám chỉ việc làm không tốt từ đầu thì khó sửa sau này.',
    examples: '你冒冒失失的，尽做些夹生饭，最后还要我去收拾。',
    examplePinyin: 'Nǐ mào mào shī shī de, jǐn zuò xiē jiā shēng fàn, zuìhòu hái yào wǒ qù shōushi.',
    exampleMeaning: 'Anh làm mọi thứ quá vụng về, để lại việc dở dang cho tôi phải dọn dẹp.',
    arrange: '你/冒冒失失的，/尽做/去收拾。/些/最后/夹生饭，/还要我',
  },
  {
    simplified: '夹着尾巴做人',
    pinyin: 'jiā zhe wěi bā zuò rén',
    explanation: '谨小慎微，不敢轻举妄动的样子。',
    explanationPinyin: 'Jǐn xiǎo shènwēi, bù gǎn qīngjǔwàngdòng de yàngzi.',
    meaning: 'Cẩn thận, không dám hành động mạo hiểm.',
    examples: '在公司里，他夹着尾巴做人，尽量不惹麻烦。\n 刚刚犯了错误被人揪着，只好夹着尾巴做人。',
    examplePinyin:
      'Zài gōngsī lǐ, tā jiā zhe wěi bā zuò rén, jǐnliàng bù rě máfan. \n Gānggāng fàn le cuòwù bèi rén jiū zhe, zhǐhǎo jiā zhe wěi bā zuò rén.',
    exampleMeaning:
      'Trong công ty, anh ta hành xử cẩn trọng từng chút, cố gắng tránh gây rắc rối. \n Vừa mắc sai lầm và bị bắt lỗi, anh ta chỉ còn cách lẳng lặng cẩn thận hành xử.',
    arrange: '在公司/不惹/里，/夹着尾巴做人，/尽量/他/麻烦。\n 刚刚/被人揪着，/犯了/错误/夹着尾巴做人。/只好',
  },
  {
    simplified: '交白卷',
    pinyin: 'jiāo bái juàn',
    explanation: '比喻承担的任务一点没完成。',
    explanationPinyin: 'Bǐyù chéngdān de rènwù yīdiǎn méi wánchéng.',
    meaning: 'Nộp giấy trắng\n Ý chỉ việc không hoàn thành nhiệm vụ được giao.',
    examples: '不好好学习，考试交白卷，怎么向家长交代呢?\n 明年的科研成果这项我可不能再交白卷了。',
    examplePinyin:
      'Bù hǎo hǎo xuéxí, kǎoshì jiāo bái juàn, zěnme xiàng jiāzhǎng jiāodài ne?\n Míngnián de kēyán chéngguǒ zhè xiàng wǒ kě bù néng zài jiāo bái juàn le.',
    exampleMeaning:
      'Không chịu học hành, thi cử nộp giấy trắng, thì làm sao giải thích với phụ huynh đây?\n Kết quả nghiên cứu năm sau, tôi không thể nộp bài trắng nữa.',
    arrange: '不好好/向家长/考试/学习，/交白卷，/怎么/交代呢?\n 科研成果/再/这项/我/明年的/可不能/交白卷了。',
  },
  {
    simplified: '交红运',
    pinyin: 'jiāo hónɡ yùn',
    explanation: '多指遇上涉及名利之类的好事。',
    explanationPinyin: 'Duō zhǐ yù shàng shèjí mínglì zhī lèi de hǎoshì.',
    meaning:
      'Gặp thời, gặp vận\n hủ yếu đề cập đến việc gặp được những chuyện tốt liên quan đến danh vọng và tiền tài.',
    examples:
      '他可是交了红运了，一路得到提拔，很快便成了市委书记了。\n 官场上，不确定因素太多，许多人都希望交红运，能平步青云。',
    examplePinyin:
      'Tā kěshì jiāo le hónɡ yùn le, yīlù dédào tíbá, hěn kuài biàn chéngle shìwěi shūjì le.\n Guānchǎng shàng, bù quèdìng yīnsù tài duō, xǔduō rén dōu xīwàng jiāo hónɡ yùn, néng píngbù qīngyún.',
    exampleMeaning:
      'Anh ta đã gặp vận may, thăng tiến một cách nhanh chóng và rất nhanh trở thành bí thư thành ủy.\n Trong quan trường, có quá nhiều yếu tố không chắc chắn, nhiều người đều hy vọng gặp vận may để thăng tiến.',
    arrange:
      '他/可是/很快/红运了，/一路/交了/得到提拔，/便/成了/市委书记了。\n 官场上，/不确定/能平步青云。/因素/太多，/都希望/交红运，/许多人',
  },
  {
    simplified: '叫花子 ',
    pinyin: 'jiào huā zi',
    explanation: '生活没有着落而专靠向人要饭要钱过活的人。也叫“叫化子”。',
    explanationPinyin:
      'Shēnghuó méiyǒu zhuólù ér zhuān kào xiàng rén yàofàn yào qián guòhuó de rén. Yě jiào “jiàohuāzi”.',
    meaning:
      'Người không có kế sinh nhai, phải đi xin ăn hoặc nhờ vào lòng tốt của người khác. Cũng có thể gọi là: “叫化子”',
    examples: '繁华的城市，散落着不少叫花子。',
    examplePinyin: 'Fánhuá de chéngshì, sànluò zhe bù shǎo jiào huā zi.',
    exampleMeaning: 'Trong những thành phố hoa lệ, vẫn có nhiều người ăn xin lang thang.',
    arrange: '繁华/着/不少/的城市，/散落/叫花子。',
  },
  {
    simplified: '嚼舌根',
    pinyin: 'jiáo shé ɡēn',
    explanation: '比喻说是非，或者说废话。又作“嚼舌头”',
    explanationPinyin: 'Bǐyù shuō shìfēi, huòzhě shuō fèihuà. yòu zuò “jiáo shétou”.',
    meaning: 'Nói xấu, hoặc nói chuyện không cần thiết. Cũng gọi là “嚼舌头”.',
    examples: '我不喜欢嚼舌根的人。\n 他们天天在一起嚼舌根。',
    examplePinyin: 'Wǒ bù xǐhuān jiáo shé gēn de rén. \n Tāmen tiāntiān zài yīqǐ jiáo shé gēn.',
    exampleMeaning:
      'Tôi không thích những người thích nói chuyện lung tung. \n Họ hàng ngày tụ tập lại để nói chuyện tầm phào.',
    arrange: '嚼舌根/我/不喜欢/的人。\n 在一起/天天/嚼舌根。/他们',
  },
  {
    simplified: '接班人 ',
    pinyin: 'jiē bān rén',
    explanation: '接替上一级工作的人。比喻接替上一辈继续从事某种事业的人。',
    explanationPinyin:
      'Jiētì shàng yī jí gōngzuò de rén. Bǐyù jiētì shàng yībèi jìxù cóngshì mǒu zhǒng shìyè de rén.',
    meaning: 'Người kế thừa công việc của thế hệ trước, tiếp nối sự nghiệp gia đình.',
    examples: '年轻人要做社会主义的接班人。',
    examplePinyin: 'Niánqīng rén yào zuò shèhuìzhǔyì de jiē bān rén.',
    exampleMeaning: 'Người trẻ cần trở thành thế hệ kế thừa sự nghiệp xã hội chủ nghĩa.',
    arrange: '接班人。/年轻人/的/社会主义/要做',
  },
  {
    simplified: '揭疮疤',
    pinyin: 'jiē chuānɡ bā',
    explanation: '指提及别人的痛处。',
    explanationPinyin: 'Zhǐ tí jí biérén de tòngchù.',
    meaning: 'Xát muối vào tim\n Đề cập đến việc nhắc về nỗi đau của người khác.',
    examples: '对正人君子而言，揭别人疮疤是不道德的。\n 别揭他的疮疤了，他已经很痛苦了。',
    examplePinyin:
      'Duì zhèng rén jūn zǐ ér yán, jiē bié rén chuāng bā shì bù dào dé de.\n Bié jiē tā de chuāng bā le, tā yǐ jīng hěn tòng kǔ le.',
    exampleMeaning:
      'Đối với người đàng hoàng, việc vạch trần khuyết điểm của người khác là không đạo đức.\n Đừng khơi lại vết thương của anh ấy nữa, anh ấy đã rất đau khổ rồi.',
    arrange: '对/是/而言，/揭/正人君子/别人/疮疤/不道德的。\n 别/他/揭他的/已经/很痛苦了。/疮疤了，',
  },
  {
    simplified: '节骨眼',
    pinyin: 'jié ɡǔ yǎn',
    explanation: '比喻紧要的、能起决定作用的环节或时机。',
    explanationPinyin: 'Bǐyù jǐnyào de, néng qǐ juédìng zuòyòng de huánjié huò shíjī.',
    meaning: 'Ý chỉ giai đoạn hoặc thời điểm rất quan trọng, có thể quyết định.',
    examples: '在这个节骨眼上，我们必须做出正确的决定。\n 他是一个稳重的人，不到节骨眼上不会主动发言。',
    examplePinyin:
      'Zài zhège jié ɡǔ yǎn shàng, wǒmen bìxū zuòchū zhèngquè de juédìng. \n Tā shì yīgè wěnzhòng de rén, bù dào jié ɡǔ yǎn shàng bù huì zhǔdòng fāyán.',
    exampleMeaning:
      'Ở thời điểm then chốt này, chúng ta phải đưa ra quyết định đúng đắn. \n Anh ta là người rất điềm tĩnh, không đến lúc quan trọng sẽ không lên tiếng.',
    arrange: '在这个/必须做出/节骨眼上，/我们/正确的决定。\n 不到节骨眼上/他是一个/稳重的人，/不会主动发言。',
  },
  {
    simplified: '揭老底',
    pinyin: 'jiē lǎo dǐ',
    explanation: '不愿被人知道的内情被揭露。',
    explanationPinyin: 'Bù yuàn bèi rén zhīdào de nèiqíng bèi jiēlù.',
    meaning: 'Sự thật không muốn người khác biết bị lộ ra.',
    examples: '他揭老底，让许多人的秘密曝光。\n 揭他老底，他可要发急的。',
    examplePinyin: 'Tā jiē lǎo dǐ, ràng xǔduō rén de mìmì pùguāng. \n Jiē tā lǎo dǐ, tā kě yào fā jí de.',
    exampleMeaning:
      'Anh ta vạch trần bí mật của nhiều người, khiến mọi thứ bị phơi bày. \n Nếu bóc mẽ anh ta, chắc chắn anh ta sẽ nổi giận.',
    arrange: '他/揭老底，/的/让/秘密曝光。/许多人\n 发急/揭他老底，/可要/他/的。',
  },
  {
    simplified: '揭谜底',
    pinyin: 'jiē mí dǐ',
    explanation: '公布谜语的结果。',
    explanationPinyin: 'Gōngbù míyǔ de jiéguǒ.',
    meaning: 'Công bố kết quả của câu đố.',
    examples: '再猜不出，我就要揭谜底了。 \n 他缠着我揭谜底，我就是不告诉他。',
    examplePinyin:
      'Zài cāi bù chū, wǒ jiù yào jiē mí dǐle. \n Tā chánzhe wǒ jiē mí dǐ, wǒ jiùshì bù gàosù tā.',
    exampleMeaning:
      'Nếu không đoán ra nữa, tôi sẽ phải tiết lộ đáp án.\n Anh ấy cứ quấn lấy tôi để tiết lộ đáp án, nhưng tôi không nói cho anh ấy biết.',
    arrange: '就要/我/猜不出，/再/揭谜底了。 \n 就是/他/缠着我/不/揭谜底，/我/告诉他。',
  },
  {
    simplified: '近视眼',
    pinyin: 'jìn shì yǎn',
    explanation: '目光短浅',
    explanationPinyin: 'Mùguāng duǎnqiǎn.',
    meaning: 'Nhìn nhận hạn hẹp.',
    examples: '他近视眼，做事总是看不清楚。\n 在处理客户关系的问题上，我们不能犯近视眼的错误。',
    examplePinyin:
      'Tā jìn shì yǎn, zuòshì zǒngshì kàn bù qīngchǔ. \n Zài chǔlǐ kèhù guānxì de wèntí shàng, wǒmen bùnéng fàn jìn shì yǎn de cuòwù.',
    exampleMeaning:
      'Anh ta bị cận, làm việc gì cũng không rõ ràng. \n Trong việc xử lý quan hệ khách hàng, chúng ta không được mắc sai lầm như người bị cận thị.',
    arrange: '总是/他/看/近视眼，/做事/不清楚。\n 在/近视眼/处理/客户关系/我们/的/问题上，/不能犯/的错误。',
  },
  {
    simplified: '救世主',
    pinyin: 'jiù shì zhǔ',
    explanation: '比喻拯救别人的人。',
    explanationPinyin: 'Bǐyù zhěngjiù biérén de rén.',
    meaning: 'Người cứu giúp, mang lại hy vọng cho người khác.',
    examples: '没什么救世主，一切都靠我们自己。',
    examplePinyin: 'Méi shénme jiù shì zhǔ, yīqiè dōu kào wǒmen zìjǐ.',
    exampleMeaning: 'Không có đấng cứu thế nào cả, mọi thứ đều phải dựa vào chính chúng ta.',
    arrange: '一切/没什么/靠我们/救世主，/都/自己。',
  },
  {
    simplified: '开空头支票',
    pinyin: 'kāi kōnɡ tou zhī piào',
    explanation: '比喻只承诺，不兑现。',
    explanationPinyin: 'Bǐyù zhǐ chéngnuò, bù duìxiàn.',
    meaning: 'Có nghĩa là chỉ hứa hẹn mà không thực hiện',
    examples:
      '财政部说要加工资的，但隔了一年都没结果，看来是开了一张空头支票。 \n 我已经不相信他了，他开了太多的空头支票。',
    examplePinyin:
      'Cáizhèng bù shuō yào jiā gōngzī de, dàn géle yī nián dōu méi jiéguǒ, kàn lái shì kāile yī zhāng kōnɡ tou zhī piào. \n Wǒ yǐjīng bù xiāngxìn tāle, tā kāile tài duō de kōnɡ tou zhī piào.',
    exampleMeaning:
      'Bộ Tài chính nói là sẽ tăng lương, nhưng đã một năm rồi mà vẫn chưa thấy đâu, xem ra là hứa suông rồi. \n Tôi không còn tin anh ta nữa, anh ta đã hứa suông quá nhiều rồi.',
    arrange:
      '财政部/说要加工资的，/但/一张/都/隔了一年/看来是/开了/没结果，/空头支票。 \n 我/太多的/已经/他/开了/空头支票。/不相信他了，',
  },
  {
    simplified: '开绿灯',
    pinyin: 'kāi lǜ dēnɡ',
    explanation: '比喻为做某事提供方便。',
    explanationPinyin: 'Bǐyù wèi zuò mǒu shì tígōng fāngbiàn.',
    meaning: 'Bật đèn xanh\n So sánh việc tạo điều kiện thuận lợi để thực hiện một việc gì đó.',
    examples: '为引进外资，地方政府一路开绿灯。\n 为官要清正廉洁，不能处处为自己的亲属开绿灯。',
    examplePinyin:
      'Wèi yǐn jìn wài zī, dì fāng zhèng fǔ yī lù kāi lǜ dēng.\n Wèi guān yào qīng zhèng lián jié, bù néng chù chù wèi zì jǐ de qīn shǔ kāi lǜ dēng.',
    exampleMeaning:
      'Để thu hút vốn đầu tư nước ngoài, chính quyền địa phương liên tục "mở đèn xanh".\n Làm quan phải trong sạch, không thể ở đâu cũng "bật đèn xanh" cho người thân.',
    arrange: '一路/为引进外资，/地方政府/开绿灯。\n 为官/处处/不能/为自己的/亲属/要清正廉洁，/开绿灯。',
  },
  {
    simplified: '开门红',
    pinyin: 'kāi mén hónɡ',
    explanation: '比喻一开始就取得好成绩，获得好效益。',
    explanationPinyin: 'Bǐyù yī kāishǐ jiù qǔdé hǎo chéngjī, huòqǔ hǎo xiàoyì.',
    meaning: 'Đầu xuôi đuôi lọt\n So sánh việc bắt đầu đã đạt được thành tích tốt, thu được lợi ích tốt.',
    examples:
      '新年节假后上班第一天，我们公司就接到一个大订单，真是个开门红。\n 新学期的第一次考试，我就取得了很好的成绩，这个开门红给我很大的鼓励。',
    examplePinyin:
      'Xīn nián jié jià hòu shàng bān dì yī tiān, wǒ men gōng sī jiù jiē dào yī gè dà dìng dān, zhēn shì gè kāi mén hóng.\n Xīn xué qī de dì yī cì kǎo shì, wǒ jiù qǔ dé le hěn hǎo de chéng jì, zhè gè kāi mén hóng gěi wǒ hěn dà de gǔ lì.',
    exampleMeaning:
      'Ngày làm việc đầu tiên sau kỳ nghỉ Tết, công ty chúng tôi đã nhận được một đơn hàng lớn, thật là khởi đầu tốt đẹp.\n Trong kỳ thi đầu tiên của học kỳ mới, tôi đã đạt được thành tích rất tốt, khởi đầu tốt đẹp này đã mang lại cho tôi rất nhiều động lực.',
    arrange:
      '新年节假后/我们公司/接到/就/一个大订单，/真是个/上班第一天，/开门红。\n 取得了/新学期的/第一次考试，/很好的成绩，/这个开门红/我就/给我很大的/鼓励。',
  },
  {
    simplified: '侃大山',
    pinyin: 'kǎn dà shān',
    explanation: '也作砍大山，比喻没完没了地聊天。',
    explanationPinyin: 'Yě zuò kǎn dàshān, bǐyù méi wán méi liǎo de liáotiān.',
    meaning: 'Nói chuyện phiếm không dứt, kéo dài vô tận.',
    examples: '精简机构后，责任到人，机关里喝茶、看报、侃大山的人少了。',
    examplePinyin:
      'Jīngjiǎn jīgòu hòu, zérèn dào rén, jīguān lǐ hē chá, kàn bào, kǎn dà shān de rén shǎo le.',
    exampleMeaning:
      'Sau khi tinh giản biên chế, trách nhiệm được phân rõ, những người chỉ ngồi uống trà, đọc báo và buôn chuyện đã giảm đi nhiều.',
    arrange: '的人/精简机构后，/责任到人，/喝茶、看报、侃大山/机关里/少了。',
  },
  {
    simplified: '看走眼',
    pinyin: 'kàn zǒu yǎn',
    explanation: '误看，看错，发生失误。',
    explanationPinyin: 'Wù kàn, kàn cuò, fāshēng shīwù.',
    meaning: 'Nhìn nhầm, hiểu sai, xảy ra sai sót.',
    examples: '我真是看走眼了，没想到他会做出这种事。\n 真是看走了眼，把女儿嫁给这么一个负心汉。',
    examplePinyin:
      "Wǒ zhēnshi kàn zǒu yǎn le, méi xiǎngdào tā huì zuòchū zhè zhǒng shì. \n Zhēnshi kàn zǒu le yǎn, bǎ nǚ'ér jià gěi zhème yīgè fùxīnhàn.",
    exampleMeaning:
      'Tôi thật sự nhìn nhầm rồi, không ngờ anh ta lại làm ra chuyện như vậy. \n Đúng là nhìn lầm người, gả con gái cho một kẻ bạc tình như vậy.',
    arrange: '会做出/我真是/看走眼了，/他/这种事。/没想到\n 真是/这么一个/看走了眼，/女儿/嫁给/把/负心汉。',
  },
  {
    simplified: '靠边站 ',
    pinyin: 'kào biān zhàn',
    explanation:
      '靠旁边站着，免得碍事。比喻让开道路，不要妨碍别人前进。也比喻 \n 负有某种责任的人被剥夺了权力，不能发挥作用了。',
    explanationPinyin:
      "Kào pángbiān zhànzhe, miǎnde àishì. Bǐyù ràng kāi dàolù, bùyào fáng'ài biérén qiánjìn. Yě bǐyù fù yǒu mǒu zhǒng zérèn de rén bèi bāoduóle quánlì, bùnéng fāhuī zuòyòng le.",
    meaning: 'Tránh sang bên, nhường đường cho người khác, hoặc mất quyền lực, không còn tác dụng gì.',
    examples: '他可挑不起这个大梁，让他靠边站，再找一个更有魄力的人来吧。',
    examplePinyin:
      'Tā kě tiāo bù qǐ zhège dàliáng, ràng tā kào biān zhàn, zài zhǎo yīgè gèng yǒu pòlì de rén lái ba.',
    exampleMeaning:
      'Anh ấy không thể đảm nhận vai trò quan trọng này, hãy để anh ấy đứng sang một bên và tìm người khác có năng lực hơn.',
    arrange: '他/再找一个/可挑不起/让他/靠边站，/更有魄力/的人/来吧。/这个大梁，',
  },
  {
    simplified: '靠山吃山',
    pinyin: 'kào shān chī shān',
    explanation: '比喻自己所在的地方有什么条件，就依靠什么条件生活。',
    explanationPinyin: 'Bǐyù zìjǐ suǒzài de dìfāng yǒu shénme tiáojiàn, jiù yīkào shénme tiáojiàn shēnghuó.',
    meaning: 'Dựa vào điều kiện có sẵn nơi mình sống để kiếm sống.',
    examples:
      '靠山吃山靠水吃水，靠着电信这棵大树，老伍不吃电信吃谁? \n 东北有三宝，人参、貂皮、鹿茸角。林文打算靠山吃山，靠家乡的资源———人参发财致富。',
    examplePinyin:
      'Kào shān chī shān, kào shuǐ chī shuǐ, kào zhe diànxìn zhè kē dàshù, lǎo Wǔ bù chī diànxìn chī shéi? \n Dōngběi yǒu sān bǎo, rénshēn, diāopí, lùróng jiǎo. Lín Wén dǎsuàn kào shān chī shān, kào jiāxiāng de zīyuán——rénshēn fācái zhìfù.',
    exampleMeaning:
      'Dựa núi ăn thổ sản, dựa nước ăn thủy sản; dựa vào ngành viễn thông, Lão Ngũ không kiếm sống trong ngành viễn thông thì kiếm từ ai? \n Đông Bắc có ba bảo vật: nhân sâm, da chồn và nhung hươu. Lâm Văn dự định dựa vào tài nguyên quê hương — nhân sâm — để làm giàu.',
    arrange:
      '靠山吃山/不吃电信/靠水吃水，/电信这棵大树，/老伍/靠着/吃谁? \n 人参、貂皮、鹿茸角。/———人参/林文/打算/靠山吃山，/靠家乡的资源/东北有三宝，/发财致富。',
  },
  {
    simplified: '啃老族',
    pinyin: 'kěn lǎo zú',
    explanation: '比喻没有生存能力、吃父母老本的年轻人。',
    explanationPinyin: 'Bǐyù méiyǒu shēngcún nénglì, chī fùmǔ lǎoběn de niánqīng rén.',
    meaning: 'Thanh niên không có khả năng tự lập, sống dựa vào gia đình.',
    examples: '买房问题上，很多年轻人成了啃老族。',
    examplePinyin: 'Mǎifáng wèntí shàng, hěn duō niánqīng rén chéngle kěn lǎo zú.',
    exampleMeaning: 'Về chuyện mua nhà, nhiều người trẻ trở thành “ký sinh” phụ thuộc vào cha mẹ.',
    arrange: '买房/成了/问题上，/很多/啃老族。/年轻人',
  },
  {
    simplified: '口头禅',
    pinyin: 'kǒu tóu chán',
    explanation: '指常挂在嘴边的话。',
    explanationPinyin: 'Zhǐ cháng guà zài zuǐ biān dehuà.',
    meaning:
      'Câu cửa miệng\n Ý nói đến những câu mà một người nói với tần suất rất thường xuyên, gần như mở miệng là sẽ thốt ra.',
    examples: '人不为己，天诛地灭，简直成了他的口头禅。\n 你得改掉你的口头禅了，实在很不雅。',
    examplePinyin:
      'Rén bù wéi jǐ, tiān zhū dì miè, jiǎn zhí chéng le tā de kǒu tóu chán.\n Nǐ děi gǎi diào nǐ de kǒu tóu chán le, shí zài hěn bù yǎ.',
    exampleMeaning:
      '“Người không vì mình, trời tru đất diệt” đã trở thành câu cửa miệng của anh ta.\n Bạn nên bỏ câu cửa miệng của mình đi, thực sự là rất không lịch sự.',
    arrange: '他的/人不为己，天诛地灭，/成了/口头禅。/简直\n 你/得改掉/很不雅。/口头禅了，/实在/你的',
  },
  {
    simplified: '拉帮结伙',
    pinyin: 'lā bānɡ jié huǒ',
    explanation: '组织帮派，搞小集团活动。',
    explanationPinyin: 'Zǔzhī bāngpài, gǎo xiǎo jítuán huódòng.',
    meaning: 'Tổ chức băng nhóm, hoạt động theo nhóm nhỏ.',
    examples: '他们这些人拉帮结伙，狼狈为奸。\n 不能搞小集团，拉帮结伙的，影响整体团结。',
    examplePinyin:
      'Tāmen zhèxiē rén lā bāng jié huǒ, láng bèi wéi jiān. \n Bù néng gǎo xiǎo jítuán, lā bāng jié huǒ de, yǐngxiǎng zhěngtǐ tǒngjié.',
    exampleMeaning:
      'Những người này kết bè kết phái, làm việc không chính đáng. \n Không nên hình thành các nhóm nhỏ, kết bè kết phái, ảnh hưởng đến sự đoàn kết chung.',
    arrange: '拉帮结伙，/他们/这些人/狼狈为奸。\n 影响/搞/小集团，/不能拉帮结伙的，/整体团结。',
  },
  {
    simplified: '拉不下脸',
    pinyin: 'lā bú xià liǎn',
    explanation: '碍于情面，不能拒绝或不便开口。',
    explanationPinyin: 'Ài yú qíngmiàn, bùnéng jùjué huò bùbiàn kāikǒu.',
    meaning: 'Vì ngại ngùng, không thể từ chối hoặc không tiện nói ra.',
    examples: '当众批评别人，我可拉不下脸。\n 他让我好厌烦，可是我拉不下脸赶他走。',
    examplePinyin:
      'Dāngzhòng pīpíng biérén, wǒ kě lā bù xià liǎn. \n Tā ràng wǒ hǎo yànfán, kěshì wǒ lā bù xià liǎn gǎn tā zǒu.',
    exampleMeaning:
      'Tôi không thể công khai phê bình người khác. \n Anh ấy làm tôi rất bực mình, nhưng tôi không thể đuổi anh ấy đi.',
    arrange: '可/当众/我/拉不下脸。/批评别人，\n 我拉不下脸/他/让我/可是/赶他走。/好厌烦，',
  },
  {
    simplified: '拉长线',
    pinyin: 'lā cháng xiàn',
    explanation: '比喻作长远打算。也说“放长线”。',
    explanationPinyin: 'Bǐyù zuò chángyuǎn dǎsuàn, yě shuō "fàng cháng xiàn".',
    meaning: 'Tính toán lâu dài, cũng gọi là “放长线”.',
    examples:
      '我们要拉长线，钓大鱼，派人卧底是为了揪住整个贩毒团伙。\n 不能目光短浅，要有长远的打算，要拉长线，才能钓大鱼。',
    examplePinyin:
      'Wǒmen yào lā cháng xiàn, diào dà yú, pài rén wò dǐ shì wèile jiū zhù zhěnggè fàn dú tuánhuǒ. \n Bù néng mùguāng duǎnqiǎn, yào yǒu chángyuǎn de dǎsuàn, yào lā cháng xiàn, cáinéng diào dà yú.',
    exampleMeaning:
      'Chúng ta phải kéo dài thời gian, câu cá lớn, cử người làm nội gián là để bắt trọn cả băng nhóm buôn ma túy. \n Không thể có cái nhìn thiển cận, phải có kế hoạch dài hạn, kéo dài thời gian mới có thể câu được cá lớn.',
    arrange:
      '揪住/拉长线，钓大鱼，/派人卧底/我们要/是为了/整个贩毒团伙。\n 要拉长线，/不能/目光短浅，/打算，/才能/要有长远的/钓大鱼。',
  },
  {
    simplified: '拉长脸',
    pinyin: 'lā chánɡ liǎn',
    explanation: '把脸拉长。指不高兴、生气的样子。',
    explanationPinyin: 'Bǎ liǎn lā cháng, zhǐ bù gāoxìng, shēngqì de yàngzi.',
    meaning: 'vẻ mặt cau có, chỉ thái độ không vui, tức giận.',
    examples: '我不答应给孩子买那个玩具，他就拉长了脸，撅起了嘴。\n 脸拉那么长，到底是谁让你不高兴了?',
    examplePinyin:
      'Wǒ bù dāyìng gěi háizi mǎi nàgè wánjù, tā jiù lā chánɡle liǎn, juē qǐle zuǐ. \n Liǎn lā nàme chánɡ, dào dǐ shì shéi ràng nǐ bù gāoxìngle?',
    exampleMeaning:
      'Khi tôi không đồng ý mua món đồ chơi cho đứa trẻ, nó đã làm mặt dài ra, bĩu môi. \n Sao mặt mày dài ra như vậy, rốt cuộc ai làm cho bạn không vui?',
    arrange:
      '我/不答应/拉长了脸，/给孩子/他就/撅起了嘴。/买那个玩具，\n 让你/脸拉那么长，/是谁/不高兴了?/到底',
  },
  {
    simplified: '拉大旗作虎皮',
    pinyin: 'lā dà qí zuò hǔ pí',
    explanation: '用名人的威望抬高或保护自己。',
    explanationPinyin: 'Yòng míngrén de wēiwàng táigāo huò bǎohù zìjǐ.',
    meaning: 'Dựa vào uy tín của người nổi tiếng để bảo vệ bản thân.',
    examples:
      '他总是拉大旗作虎皮，借别人的名声来抬高自己。\n 他做什么事都喜欢拉大旗作虎皮，喜欢借别人的威风，因为他觉得这样做事 情，遇到的阻力会很小，比较容易成功。',
    examplePinyin:
      'Tā zǒngshì lā dà qí zuò hǔ pí, jiè biérén de míngshēng lái táigāo zìjǐ. \n Tā zuò shénme shì dōu xǐhuān lā dà qí zuò hǔ pí, xǐhuān jiè biérén de wēifēng, yīnwèi tā juéde zhèyàng zuòshì, yù dào de zǔlì huì hěn xiǎo, bǐjiào róngyì chénggōng.',
    exampleMeaning:
      'Anh ta luôn thích dựa hơi người khác để nâng cao danh tiếng của mình. \n Anh ta làm gì cũng thích mượn danh người khác, bởi vì anh ta cho rằng làm vậy sẽ gặp ít trở ngại và dễ thành công hơn.',
    arrange:
      '他总是/名声/拉大旗作虎皮，/借别人的/来抬高自己。\n 都/喜欢拉大旗作虎皮，/他做什么事/喜欢借别人的威风，/这样做事 情，/遇到的阻力会很小，/比较容易成功。/因为他觉得',
  },
  {
    simplified: '拉关系',
    pinyin: 'lā ɡuān xi',
    explanation: '指为了达到某种目的，跟关系疏远的人或单位联系、拉拢，建立某种关系。',
    explanationPinyin:
      'Zhǐ wèile dádào mǒu zhǒng mùdì, gēn guānxì shūyuǎn de rén huò dānwèi liánxì, lālǒng, jiànlì mǒu zhǒng guānxì.',
    meaning:
      'Xây dựng quan hệ, làm thân (hàm ý xấu)\n Ý đề cập đến việc liên hệ, lôi kéo và thiết lập một mối quan hệ nhất định với một người hoặc đơn vị vốn không gần gũi để đạt được một mục đích nhất định.',
    examples: '老张很会拉关系，并且还大言不惭地自诩为一种才能。\n 拉关系，搞小集团，是中央明令禁止的。',
    examplePinyin:
      'Lǎo Zhāng hěn huì lā ɡuān xi, bìngqiě hái dàyán bùcán de zìxǔ wèi yī zhǒng cáinéng.\n lā ɡuān xi, gǎo xiǎo jítuán, shì zhōngyāng mínglìng jìnzhǐ de.',
    exampleMeaning:
      'Lão Trương rất biết xây dựng mối quan hệ, và còn tự phụ cho rằng đó là một tài năng mà không biết xấu hổ.\n Lôi kéo mối quan hệ, chia bè kết phái là điều bị trung ương nghiêm cấm.',
    arrange:
      '老张/自诩/很会拉关系，/还大言不惭地/并且/为一种才能。\n 是/拉关系，/搞小集团，/明令禁止的。/中央',
  },
  {
    simplified: '拉家常',
    pinyin: 'lā jiā chánɡ',
    explanation: '指谈论家庭的日常生活，也泛指随便聊天。也说“扯家常”。',
    explanationPinyin:
      'Zhǐ tánlùn jiātíng de rìcháng shēnghuó, yě fànzhǐ suíbiàn liáotiān. yě shuō “chě jiācháng”.',
    meaning:
      'Nói về cuộc sống gia đình hàng ngày, cũng có nghĩa là trò chuyện bình thường. Cũng nói là “扯家常”.',
    examples: '邻居阿姨们经常在一起拉家常。\n 大家一起拉拉家常，和和气气，亲亲热热，挺好的。',
    examplePinyin:
      'Línjū āyí men jīngcháng zài yīqǐ lā jiā chánɡ. \n Dàjiā yīqǐ lā lā jiā chánɡ, hé hé qìqì, qīn qīn rè rè, tǐng hǎo de.',
    exampleMeaning:
      'Những người hàng xóm thường xuyên nói chuyện phiếm với nhau. \n Mọi người cùng nhau trò chuyện, hòa thuận, thân mật, thật tuyệt.',
    arrange: '在一起/邻居阿姨们/拉家常。/经常\n 拉拉家常，/挺/和和气气，亲亲热热，/大家一起/好的。',
  },
  {
    simplified: '拉交情',
    pinyin: 'lā jiāo qinɡ',
    explanation: '拉关系; 套近乎。',
    explanationPinyin: 'Lā guānxi; tào jìnhu.',
    meaning: 'Thiết lập mối quan hệ; làm thân.',
    examples:
      '为了好办事，就跟仇人拉交情，你还真有一套。 \n 为了给儿子找到一个好工作，他动足了脑子，到处跟人拉交情。',
    examplePinyin:
      'Wèile hǎo bànshì, jiù gēn qiú rén lā jiāo qinɡ, nǐ hái zhēn yǒu yī tào. \n Wèile gěi érzi zhǎodào yīgè hǎo gōngzuò, tā dòng zúle nǎozi, dào chù gēn rén lā jiāo qinɡ.',
    exampleMeaning:
      'Để công việc dễ dàng hơn, bạn thật sự có tài, kết giao với kẻ thù. \n Để tìm một công việc tốt cho con trai, anh ấy đã rất nỗ lực, kết giao với nhiều người.',
    arrange:
      '好办事，/为了/就跟仇人/你/还真有一套。/拉交情， \n 为了给儿子/到处/好工作，/他动足了脑子，/找到一个/跟人拉交情。',
  },
  {
    simplified: '拉近乎',
    pinyin: 'lā jìn hu',
    explanation: '与关系一般的人有意拉扯，故表亲近。又作“套近乎”。',
    explanationPinyin: 'Yǔ guānxi yībān de rén yǒuyì lāchě, gù biǎo qīnjìn. yòu zuò “tào jìnhu”.',
    meaning: 'Cố tình tạo mối quan hệ với người bình thường để tỏ ra thân thiết. Cũng gọi là “套近乎”.',
    examples: '为了能接近她，张明想尽办法跟她拉近乎。\n 你别跟我拉近乎，我可不认识你，也不想认识。',
    examplePinyin:
      'Wèile néng jiējìn tā, Zhāng Míng xiǎng jǐn bànfǎ gēn tā lā jìn hu. \n Nǐ bié gēn wǒ lā jìn hu, wǒ kě bù rènshí nǐ, yě bù xiǎng rènshí.',
    exampleMeaning:
      'Để có thể gần gũi với cô ấy, Trương Minh đã tìm đủ mọi cách để làm quen. \n Đừng tìm cách thân thiết với tôi, tôi không quen bạn và cũng không muốn quen.',
    arrange: '想尽办法/为了/能接近她，/跟她/拉近乎。/张明\n 你/不认识你，/拉近乎，/别跟我/我可/也不想认识。',
  },
  {
    simplified: '拉锯战',
    pinyin: 'lā jù zhàn',
    explanation: '比喻双方来回往复。',
    explanationPinyin: 'Bǐyù shuāngfāng láihuí wǎngfù.',
    meaning: 'Cuộc chiến kéo dài qua lại giữa hai bên.',
    examples:
      '加息以后，一些城市的新房市场正在陷入一场多方博弈的“拉锯战”。\n 关于这个问题的辩论是个拉锯战，三言两语可讲不清。',
    examplePinyin:
      'Jiāxī yǐhòu, yīxiē chéngshì de xīnfáng shìchǎng zhèngzài xiànrù yī chǎng duōfāng bóyì de “lā jù zhàn”. \n Guānyú zhège wèntí de biànlùn shìgè lā jù zhàn, sān yán liǎng yǔ kě jiǎng bù qīng.',
    exampleMeaning:
      'Sau khi tăng lãi suất, thị trường nhà mới ở một số thành phố đang rơi vào cuộc chiến “kéo co” giữa nhiều bên. \n Cuộc tranh luận về vấn đề này giống như một cuộc chiến kéo co, không thể giải thích rõ ràng trong vài câu.',
    arrange:
      '一场/加息以后，/一些城市的/多方/新房市场/正在陷入/博弈的“拉锯战”。\n 拉锯战，/关于这个问题/的/是个/三言两语/可讲不清。/辩论',
  },
  {
    simplified: '拉亏空',
    pinyin: 'lā kuī kònɡ',
    explanation: '拖欠别人的钱财。',
    explanationPinyin: 'Tuōqiàn biérén de qiáncái.',
    meaning: 'Nợ nần tiền bạc của người khác.',
    examples: '妈妈生病时，家里花了很多钱，拉了很多亏空。\n 你不要做月光族，拉了亏空，我看你怎么办?',
    examplePinyin:
      'Māma shēngbìng shí, jiālǐ huāle hěnduō qián, lāle hěnduō kuī kònɡ. \n Nǐ bùyào zuò yuèguāngzú, lāle kuī kònɡ, wǒ kàn nǐ zěnme bàn?',
    exampleMeaning:
      'Khi mẹ bệnh, gia đình đã tiêu tốn nhiều tiền, để lại nhiều khoản thiếu hụt. \n Đừng trở thành người tiêu xài phung phí, nếu để lại khoản thiếu hụt, tôi xem bạn sẽ làm thế nào?',
    arrange:
      '妈妈/花了很多钱，/生病时，/拉了/很多/亏空。/家里\n 你/不要/拉了亏空，/我看你/做月光族，/怎么办?',
  },
  {
    simplified: '拉偏架',
    pinyin: 'lā piān jià',
    explanation: '指在双方发生冲突时偏袒一方。',
    explanationPinyin: 'Zhǐ zài shuāngfāng fāshēng chōngtū shí piāntǎn yī fāng.',
    meaning: 'Thiên vị một bên trong cuộc xung đột giữa hai bên.',
    examples: '孩子跟别人吵架时，妈妈不能拉偏架。\n 领导在处理纠纷时，要公正客观，不能拉偏架。',
    examplePinyin:
      'Háizi gēn biérén chǎojià shí, māma bùnéng lā piān jià. \n Lǐngdǎo zài chǔlǐ jiūfēn shí, yào gōngzhèng kèguān, bùnéng lā piān jià.',
    exampleMeaning:
      'Khi trẻ con cãi nhau với người khác, mẹ không được thiên vị. \n Lãnh đạo khi xử lý tranh chấp phải công bằng, khách quan, không được thiên vị.',
    arrange: '妈妈/孩子跟别人/不能/吵架时，/拉偏架。\n 在处理纠纷时，/要/不能/公正客观，/拉偏架。/领导',
  },
  {
    simplified: '拉下脸',
    pinyin: 'lā xià liǎn',
    explanation: '露出不高兴的表情。不顾情面。',
    explanationPinyin: 'Lùchū bù gāoxìng de biǎoqíng, bù gù qíngmiàn.',
    meaning: 'Thể hiện biểu cảm không vui, không màng đến tình cảm.',
    examples: '你的话太不客气，他的脸都拉下来了。\n 你没看见领导的脸都拉下来了吗? 别说了。',
    examplePinyin:
      'Nǐ de huà tài bù kèqì, tā de liǎn dōu lā xià láile. \n Nǐ méi kànjiàn lǐngdǎo de liǎn dōu lā xiàlái le ma? Bié shuōle.',
    exampleMeaning:
      'Lời nói của bạn quá thiếu lịch sự, mặt anh ấy đã sa sầm lại rồi. \n Bạn không thấy mặt lãnh đạo đã sa sầm xuống rồi sao? Đừng nói nữa.',
    arrange: '你的话/都/太不客气，/他的脸/拉下来了。\n 你没看见/领导的脸/吗?/都拉下来/ 别说了。/了',
  },
  {
    simplified: '拉下马',
    pinyin: 'lā xià mǎ',
    explanation: '比喻把人从统治地位上拉下来。',
    explanationPinyin: 'Bǐyù bǎ rén cóng tǒngzhì dìwèi shàng lā xiàlái.',
    meaning: 'Kéo ai đó từ vị trí quyền lực xuống.',
    examples: '我们一定要把这个贪官拉下马。\n 他工作做得不错，但因为得罪了一些人，被拉下了马。',
    examplePinyin:
      'Wǒmen yīdìng yào bǎ zhège tān guān lā xià mǎ. \n Tā gōngzuò zuò de bùcuò, dàn yīnwèi dézuìle yīxiē rén, bèi lā xiàle mǎ.',
    exampleMeaning:
      'Chúng ta nhất định phải hạ bệ quan tham này. \n Anh ấy làm việc rất tốt, nhưng vì đắc tội với một số người nên đã bị hạ bệ.',
    arrange: '我们/把这个贪官/要/拉下马。/一定\n 他工作/被/做得不错，/但/一些人，/拉下了马。/因为得罪了',
  },
  {
    simplified: '拉下水',
    pinyin: 'lā xià shuǐ',
    explanation: '使之卷入。把人拉入水中。比喻拉拢人一起去做坏事。也说“拖下水”。',
    explanationPinyin:
      'Shǐ zhī juǎnrù, bǎ rén lā rù shuǐ zhōng, bǐyù lālǒng rén yīqǐ qù zuò huàishì, yě shuō "tuō xià shuǐ".',
    meaning: 'Kéo người khác vào; chỉ việc lôi kéo ai đó tham gia vào việc xấu. Cũng nói là “拖下水”.',
    examples: '你不要把这么一个单纯的人拉下水。\n 官员要清正廉洁，不要被行贿的人拉下水。',
    examplePinyin:
      'Nǐ bùyào bǎ zhème yīgè dānchún de rén lā xià shuǐ. \n Guānyuán yào qīngzhèng liánjié, bùyào bèi xínghuì de rén lā xià shuǐ.',
    exampleMeaning:
      'Đừng kéo một người đơn giản như vậy vào chuyện xấu. \n Các quan chức cần phải liêm chính, không nên bị người hối lộ kéo vào chuyện xấu.',
    arrange: '单纯的/你不要/这么一个/把/人/拉下水。\n 官员/行贿的人/不要/要清正廉洁，/被/拉下水。',
  },
  {
    simplified: '拉闲篇',
    pinyin: 'lā xián piān',
    explanation: '谈一些与正事无关的话，闲聊。',
    explanationPinyin: 'Tán yīxiē yǔ zhèngshì wúguān de huà, xiánliáo.',
    meaning: 'Nói những chuyện không liên quan đến công việc, trò chuyện phiếm.',
    examples: '别拉闲篇了，快进入正题。\n 午饭过后，大家在一起拉拉闲篇，放松放松，也会提高下午的工作效率。',
    examplePinyin:
      'Bié lā xián piànle, kuài jìnrù zhèngtí. \n Wǔfàn guòhòu, dàjiā zài yīqǐ lā lā xián piàn, fàngsōng fàngsōng, yě huì tígāo xiàwǔ de gōngzuò xiàolǜ.',
    exampleMeaning:
      'Đừng nói chuyện lặt vặt nữa, nhanh vào vấn đề chính. \n Sau bữa trưa, mọi người cùng nói chuyện tán gẫu một chút để thư giãn, cũng sẽ nâng cao hiệu quả làm việc buổi chiều.',
    arrange:
      '快进入/别/拉闲篇了，/正题。\n 午饭过后，/提高下午的/大家/拉拉闲篇，/在一起/放松放松，/也会/工作效率。',
  },
  {
    simplified: '拉一把',
    pinyin: 'lā yì bǎ',
    explanation: '比喻帮助别人摆脱困境。',
    explanationPinyin: 'Bǐyù bāngzhù biérén bǎituō kùnjìng.',
    meaning: 'Giúp người khác thoát khỏi khó khăn.',
    examples: '别人困难时，你要能拉他一把。\n 咱们尽己所能，拉他一把吧，不能看着他为难。',
    examplePinyin:
      'Biérén kùnnán shí, nǐ yào néng lā tā yì bǎ. \n Zánmen jǐn jǐ suǒ néng, lā tā yì bǎ ba, bùnéng kànzhe tā wéinán.',
    exampleMeaning:
      'Khi người khác gặp khó khăn, bạn nên giúp họ một tay. \n Chúng ta hãy cố gắng hết sức, giúp đỡ họ một chút, không thể chỉ đứng nhìn họ gặp khó khăn.',
    arrange: '能/别人困难时，/你/要/拉他一把。\n 拉他一把/咱们/他/尽己所能，/吧，/不能/看着/为难。',
  },
  {
    simplified: '癞皮狗',
    pinyin: 'lài pí ɡǒu',
    explanation: '骂人的话，指没皮没脸的人，脸皮厚的人。',
    explanationPinyin: 'Màrén dehuà, zhǐ méi pí méiliǎn de rén, liǎnpí hòu de rén.',
    meaning: 'Lời mắng chửi, chỉ người không có sĩ diện, mặt dày.',
    examples: '你这条不要脸的“癞皮狗”，敢偷我的东西。 \n 他像“癞皮狗”一样，让人觉得很烦。',
    examplePinyin:
      'Nǐ zhè tiáo bùyào liǎn de “lài pí ɡǒu”, gǎn tōu wǒ de dōngxī. \n Tā xiàng “lài pí ɡǒu” yīyàng, ràng rén juédé hěn fán.',
    exampleMeaning:
      'Cái con "chó ghẻ" không biết xấu hổ này, dám ăn cắp đồ của tôi.\n Anh ta giống như một "chó bệnh", khiến người ta cảm thấy rất phiền.',
    arrange: '你/不要脸的/敢/“癞皮狗”，/偷我的/这条/东西。 \n 觉得/他/像/一样，/让人/很烦。/“癞皮狗”',
  },
  {
    simplified: '拦路虎',
    pinyin: 'lán lù hǔ',
    explanation: '拦住道路的老虎，过去指拦路抢劫的匪徒。现在多用来比喻前进路 上的障碍或困难。',
    explanationPinyin:
      "Lánzhù dàolù de lǎohǔ, guòqù zhǐ lánlù qiǎngjié de fěitú. Xiànzài duōyòng lái bǐyù qiánjìn lùshàng de zhàng'ài huò kùnnán.",
    meaning:
      'Con hổ chặn đường, trước đây dùng để chỉ bọn côn đồ cướp đường. Hiện nay thường được dùng nhiều để nói về những rào cản hoặc khó khăn trên con đường phía trước.',
    examples:
      '不自信的心理状态，成了他找工作的拦路虎，一定要克服。 \n 学习汉语的时候会遇到很多拦路虎，但是只要我们努力，都可以战胜它们',
    examplePinyin:
      'Bù zìxìn de xīnlǐ zhuàngtài, chéngle tā zhǎo gōngzuò de lán lù hǔ, yīdìng yào kèfú. \n Xuéxí hànyǔ de shíhòu huì yù dào hěnduō lán lù hǔ, dànshì zhǐyào wǒmen nǔlì, dōu kěyǐ zhànshèng tāmen',
    exampleMeaning:
      'Tâm lý thiếu tự tin đã trở thành rào cản trong quá trình tìm việc của anh ấy, nhất định phải khắc phục.\n Khi học tiếng Trung, chúng ta sẽ gặp phải rất nhiều chướng ngại, nhưng chỉ cần chúng ta nỗ lực thì đều có thể vượt qua.',
    arrange:
      '不自信的/一定/心理状态，/成了/找工作的/拦路虎，/要克服。/他 \n 会遇到/学习汉语/的时候/很多/努力，/拦路虎，/但是只要/我们/都可以战胜它们。',
  },
  {
    simplified: '浪子回头金不换',
    pinyin: 'lànɡ zi huí tóu jīn bú huàn',
    explanation: '形容犯错的人改过自新非常难得。',
    explanationPinyin: 'Xíngróng fàncuò de rén gǎiguò zìxīn fēicháng nándé.',
    meaning: 'Người biết sửa đổi lỗi lầm, rất đáng quý.',
    examples: '浪子回头金不换，他能改过，太难得了。',
    examplePinyin: 'Lànɡ zi huí tóu jīn bú huàn, tā néng gǎiguò, tài nándé le.',
    exampleMeaning: '“Lãng tử quay đầu là bờ” – việc anh ấy biết sửa sai thật đáng quý.',
    arrange: '能改过，/浪子回头金不换，/他/太难得了。',
  },
  {
    simplified: '老把戏',
    pinyin: 'lǎo bǎ xì',
    explanation: '老旧的一套，多指没有改变的思想、方式、方法。把戏，杂技的节目。',
    explanationPinyin:
      'Lǎojiù de yī tào, duō zhǐ méiyǒu gǎibiàn de sīxiǎng, fāngshì, fāngfǎ. Bǎxì, zájì de jiémù.',
    meaning:
      'Một chiêu dùng hoài\n Một hệ thống cũ kỹ, thường chỉ những tư tưởng, phương thức, cách làm không thay đổi.',
    examples: '没什么可看的，还是老把戏。\n 我早就识破了他的老把戏，只是没揭穿他而已。',
    examplePinyin:
      'Méi shén me kě kàn de, hái shì lǎo bǎ xì.\n Wǒ zǎo jiù shí pò le tā de lǎo bǎ xì, zhǐ shì méi jiē chuān tā ér yǐ.',
    exampleMeaning:
      'Chẳng có gì để xem, vẫn là chiêu cũ.\n Tôi đã sớm nhìn thấu mánh khóe cũ rích của anh ta, chỉ là chưa vạch trần ra thôi.',
    arrange: '没什么/还是/可看的，/老把戏。\n 没揭穿他/我/识破了/他的老把戏，/只是/而已。/早就',
  },
  {
    simplified: '老掉牙',
    pinyin: 'lǎo diào yá',
    explanation: '事物、言论等陈旧过时。',
    explanationPinyin: 'Shìwù, yánlùn děng chénjiù guòshí.',
    meaning: 'Sự vật, phát ngôn đã lỗi thời.',
    examples: '这个笑话真是老掉牙，听过很多次了。\n 这都是老掉牙的事情了，你还提它干什么呢?',
    examplePinyin:
      'Zhège xiàohuà zhēnshi lǎo diào yá, tīngguò hěn duō cì le.\n Zhè dōu shì lǎo diào yá de shìqíng le, nǐ hái tí tā gànshénme ne?',
    exampleMeaning:
      'Câu chuyện này đúng là cũ rích, nghe quá nhiều lần rồi.\n Những chuyện này đã quá xưa rồi, anh còn nhắc làm gì nữa?',
    arrange: '老掉牙，/这个笑话/听过/真是/很多次了。\n 这都是/还提它/老掉牙/事情了，/你/干什么呢?/的',
  },
  {
    simplified: '老封建',
    pinyin: 'lǎo fēnɡ jiàn',
    explanation: '指某人循规蹈矩、传统、保守。',
    explanationPinyin: 'Zhǐ mǒu rén xúnguī dǎojǔ, chuántǒng, bǎoshǒu.',
    meaning: 'Cổ hủ\n Chỉ người nào đó tuân thủ quy tắc, truyền thống, bảo thủ.',
    examples:
      '现代社会，还认为男女授受不亲，真是老封建。\n 认为女人不应该出外工作，抛头露面; 而应该待在家里，相夫教子，是老封建们的想法。',
    examplePinyin:
      'Xiàn dài shè huì, hái rèn wéi nán nǚ shòu shòu bù qīn, zhēn shì lǎo fēng jiàn.\n Rèn wéi nǚ rén bù yīng gāi chū wài gōng zuò, pāo tóu lù miàn; ér yīng gāi dài zài jiā lǐ, xiāng fū jiào zǐ, shì lǎo fēng jiàn men de xiǎng fǎ.',
    exampleMeaning:
      'Trong xã hội hiện đại, vẫn còn cho rằng nam nữ không nên thân mật, thật là tư tưởng phong kiến cổ hủ.\n Họ cho rằng phụ nữ không nên ra ngoài làm việc, không nên lộ mặt; mà nên ở nhà, chăm sóc chồng và dạy dỗ con cái, đó là quan điểm của những người phong kiến.',
    arrange:
      '男女授受不亲，/现代社会，/还认为/真是/老封建。\n 认为/是老封建们/女人/出外工作，/抛头露面;/不应该/ 而/应该待在家里，/相夫教子，/的想法。',
  },
  {
    simplified: '老狐狸',
    pinyin: 'lǎo hú li',
    explanation: '指老谋深算的人。',
    explanationPinyin: 'Zhǐ lǎomóushēnsuàn de rén.',
    meaning: 'Chỉ người giàu kinh nghiệm, tính toán kỹ lưỡng.',
    examples: '他是一只“老狐狸”，你要小心啊。 \n “老狐狸”也有失算的时候。',
    examplePinyin: 'Tā shì yī zhǐ “lǎo hú li”, nǐ yào xiǎoxīn a. \n “lǎo hú li” yěyǒu shīsuàn de shíhòu.',
    exampleMeaning:
      'Anh ấy là một "con cáo già", bạn phải cẩn thận đấy.\n Người xảo quyệt cũng có lúc sai lầm.',
    arrange: '一只/他是/你/“老狐狸”，/要小心啊。 \n 失算/“老狐狸”/的时候。/也有',
  },
  {
    simplified: '老黄牛',
    pinyin: 'lǎo huánɡ niú',
    explanation: '指勤劳肯干的人。',
    explanationPinyin: 'Zhǐ qínláo kěngàn de rén.',
    meaning: 'Con ong mật\n Chỉ những người chăm chỉ và chịu khó làm việc.',
    examples:
      '爸爸就是一个勤勤恳恳的“老黄牛”，家里家外，都包在他的身上。\n 他有“老黄牛”的精神，但缺少创造力。',
    examplePinyin:
      'Bàba jiùshì yīgè qínqín kěn kěn de “lǎo huánɡ niú”, jiālǐ jiāwài, dōu bāo zài tā de shēnshang.\n Tā yǒu “lǎo huánɡ niú” de jīngshén, dàn quēshǎo chuàngzàolì.',
    exampleMeaning:
      'Bố tôi là một “con ong” chăm chỉ, mọi việc trong và ngoài nhà đều do ông lo liệu.\n Ông ấy có tinh thần cần cù như “ong mật”, nhưng thiếu sự sáng tạo.',
    arrange:
      '爸爸/就是/包在/一个/“老黄牛”，/家里家外，/都/他的身上。/勤勤恳恳的\n 的/他/有/缺少/“老黄牛”/精神，/但/创造力。',
  },
  {
    simplified: '老妖精',
    pinyin: 'lǎo yāo jinɡ',
    explanation:
      '比喻打扮得妖里妖气的老年女子。妖精，神话、\n 传说、童话里所说的形状可怕、有妖术、常常\n 害人的精灵。',
    explanationPinyin:
      'Bǐyù dǎbàn dé yāo lǐ yāo qì de lǎonián nǚzǐ. Yāojīng, shénhuà, chuánshuō, tónghuà lǐ suǒ shuō de xíngzhuàng kěpà, yǒu yāoshù, chángcháng hàirén de jīnglíng.',
    meaning:
      'Người phụ nữ lớn tuổi ăn mặc lòe loẹt, cố tỏ ra trẻ trung. “Yêu tinh” ám chỉ nhân vật\n trong thần thoại hoặc truyền thuyết có hình dạng đáng sợ và thường làm hại người khác.',
    examples: '打扮得像个老妖精，也不照照镜子!',
    examplePinyin: 'Dǎbàn de xiàng ge lǎo yāo jīng, yě bù zhào zhào jìngzi!',
    exampleMeaning: 'Ăn mặc như mụ yêu già, không biết soi gương sao?',
    arrange: '打扮/得/不照照/老妖精，/也/镜子!/像个',
  },
  {
    simplified: '老一套',
    pinyin: 'lǎo yī tào',
    explanation: '指陈旧的一套。多指没有改变的习俗或工作方法。',
    explanationPinyin: 'Zhǐ chénjiù de yī tào. Duō zhǐ méiyǒu gǎibiàn de xí sú huò gōngzuò fāngfǎ.',
    meaning:
      'Bổn cũ soạn lại\n Chỉ một hệ thống cũ kỹ. Thường chỉ những tập quán hoặc phương pháp làm việc không thay đổi.',
    examples: '他没什么新意，还是老一套，我们都腻了。\n 虽然对方的发球总是老一套，但我还是接不住。',
    examplePinyin:
      'Tā méi shénme xīn yì, háishi lǎo yī tào, wǒmen dōu nìle.\n Suīrán duìfāng de fāqiú zǒng shì lǎo yī tào, dàn wǒ háishi jiē bù zhù.',
    exampleMeaning:
      'Anh ta không có gì mới, vẫn là chiêu cũ, chúng tôi đều chán rồi.\n Dù đối thủ vẫn chơi chiêu cũ, nhưng tôi lại không đỡ nổi.',
    arrange:
      '他//都腻了。/没什么/新意，/老一套，/我们/还是\n 总是/虽然/对方的/我还是/发球/老一套，/但/接不住。',
  },
  {
    simplified: '老油条',
    pinyin: 'lǎo yóu tiáo',
    explanation: '多用来借指熟谙世事、明哲保身的人。',
    explanationPinyin: 'Duō yòng lái jiè zhǐ shúhàn shìshì, míngzhé bǎoshēn de rén.',
    meaning: 'Lõi đời\n Thường dùng để chỉ người am hiểu đời sống, khôn khéo bảo vệ bản thân.',
    examples: '他可是个老油条了，不会轻易上当的。\n 他在大学里经常逃课，谁也管不了他，简直就是个老油条。',
    examplePinyin:
      'Tā kěshì gè lǎo yóu tiáo le, bù huì qīngyì shàng dàng de.\n Tā zài dàxué lǐ jīngcháng táo kè, shéi yě guǎn bù liǎo tā, jiǎnzhí jiùshì gè lǎo yóu tiáo.',
    exampleMeaning:
      'Anh ta là kẻ lão luyện, không dễ bị lừa.\n Ở đại học, anh ta thường xuyên trốn học, không ai quản nổi, đúng là người lõi đời.',
    arrange:
      '他/轻易/老油条了，/可是个/不会/上当的。\n 他/在大学里/简直就是/经常逃课，/也管不了/他，/个老油条。/谁',
  },
  {
    simplified: '冷不丁',
    pinyin: 'lěnɡ bu dīnɡ',
    explanation: '没有预料到，突然。也说“冷不防”、“冷孤丁”。',
    explanationPinyin: 'Méiyǒu yùliào dào, túrán. Yě shuō “lěng bù fáng”, “lěng gūdīng”.',
    meaning: 'Không lường trước được, bất ngờ. Cũng có thể diễn đạt là "khôn lường", "không ngờ".',
    examples:
      '前两天还二十多度呢，怎么冷不丁地就降到零度了呢?\n 我正骑车走着，突然有个人冷不丁地从胡同口窜出来，我连忙刹车。',
    examplePinyin:
      'Qián liǎng tiān hái èrshí duō dù ne, zěnme lěng bù dīng de jiù jiàng dào líng dù le ne?\n Wǒ zhèng qíchē zǒuzhe, túrán yǒu gèrén lěng bù dīng de cóng hútòng kǒu cuān chūlái, wǒ liánmáng shāchē.',
    exampleMeaning:
      'Vài ngày trước còn hơn 20 độ, sao đột nhiên giảm thẳng xuống 0 độ rồi?\n Tôi đang đi xe, bỗng có người từ hẻm lao thẳng ra, tôi phải phanh gấp.',
    arrange:
      '零度/前两天/还二十多度/呢，/冷不丁地/就降到/了呢?/怎么\n 冷不丁/我/正骑车走着，/突然/窜出来，/有个人/地/从胡同口/我连忙刹车。',
  },
  {
    simplified: '冷处理',
    pinyin: 'lěnɡ chù lǐ',
    explanation: '机械加工术语，即把工件淬火后立即放进低温空气中。比喻对某事 \n 不置可否，采取冷淡的态度。',
    explanationPinyin:
      'Jīxiè jiāgōng shùyǔ, jí bǎ gōngjiàn cuìhuǒ hòu lìjí fàng jìn dīwēn kōngqì zhōng. Bǐyù duì mǒu shì bù zhì kě fǒu, cǎiqǔ lěngdàn de tàidù.',
    meaning:
      'Thuật ngữ cơ khí ám chỉ việc làm lạnh nhanh sau khi nung nóng. Ám chỉ thái độ thờ ơ, không quan tâm.',
    examples: '对群众提出的意见，采取冷处理的方法，是极不负责任的态度。',
    examplePinyin: 'Duì qúnzhòng tíchū de yìjiàn, cǎiqǔ lěnɡ chù lǐ de fāngfǎ, shì jí bù fù zérèn de tàidù.',
    exampleMeaning: 'Dùng thái độ thờ ơ với ý kiến của người dân là vô cùng thiếu trách nhiệm.',
    arrange: '对/群众提出/极不负责任/的意见，/冷处理/的方法，/是/的态度。/采取',
  },
  {
    simplified: '愣头青',
    pinyin: 'lènɡ tóu qīnɡ',
    explanation: '性格倔强、不明事理、做事莽撞的年轻人。',
    explanationPinyin: 'Xìnggé juéjiàng, bù míng shìlǐ, zuò shì màngzhuàng de niánqīng rén.',
    meaning: 'Ngựa non háu đá\n Người trẻ tuổi tính cách cứng đầu, không hiểu chuyện, làm việc bừa bãi.',
    examples: '你再冲在最前面，就成愣头青了，没看见大家只是起起哄吗?\n 他给年轻人忠告，千万别做愣头青。',
    examplePinyin:
      'Nǐ zài chōng zài zuì qián miàn, jiù chéng lènɡ tóu qīnɡ le, méi kànjiàn dàjiā zhǐ shì qǐ qǐhǒng ma?\n Tā gěi niánqīng rén zhōnggào, qiānwàn bié zuò lèng tóu qīng.',
    exampleMeaning:
      'Nếu cứ lao lên đầu tiên, cậu sẽ thành kẻ nông nổi đấy, không thấy mọi người chỉ hùa theo thôi sao?\n Anh ấy khuyên các bạn thanh niên, đừng bao giờ làm điều bồng bột.',
    arrange:
      '你/只是/再/冲在最前面，/成愣头青了，/没看见/就/大家/起起哄吗?\n 别做/他/忠告，/千万/愣头青。/给年轻人',
  },
  {
    simplified: '冷心肠',
    pinyin: 'lěnɡ xīn chánɡ',
    explanation: '不同情别人，与“热心肠”相反。',
    explanationPinyin: 'Bù tóngqíng biérén, yǔ “rè xīn chánɡ” xiāngfǎn.',
    meaning: 'Không đồng cảm với người khác, trái ngược với “热心肠”.',
    examples: '他对同事们的冷心肠让人感到失望。\n 他是个冷心肠，看到可怜的人他也不会同情。',
    examplePinyin:
      'Tā duì tóngshìmen de lěnɡ xīn chánɡ ràng rén gǎndào shīwàng. \n Tā shì gè lěnɡ xīn chánɡ, kàndào kělián de rén tā yě bù huì tóngqíng.',
    exampleMeaning:
      'Sự lạnh lùng của anh ta đối với đồng nghiệp khiến mọi người thất vọng. \n Anh ta là người vô cảm, nhìn thấy người đáng thương cũng không mảy may động lòng.',
    arrange: '他/让人/对/同事们/感到失望。/的冷心肠\n 不会/他/是个/冷心肠，/可怜的人/他也/同情。/看到',
  },
  {
    simplified: '冷血动物',
    pinyin: 'lěnɡ xuè dònɡ wù',
    explanation: '比喻没有感情的人，不懂得知恩图报。',
    explanationPinyin: 'Bǐyù méiyǒu gǎnqíng de rén, bù dǒngdé zhī ēn tú bào.',
    meaning: 'Biểu thị người không có tình cảm, không biết cảm ơn.',
    examples: '我不是“冷血动物”，我知道知恩图报。 \n 他那个人啊，不知道好歹，是个“冷血动物”',
    examplePinyin:
      'Wǒ bùshì “lěnɡ xuè dònɡ wù”, wǒ zhīdào zhī ēn tú bào. \n Tā nàgè rén a, bù zhīdào hào dǎi, shìgè “lěnɡ xuè dònɡ wù”.',
    exampleMeaning:
      'Tôi không phải là "người máu lạnh", tôi biết nhớ ơn và báo đáp.\n Người ấy, không biết tốt xấu, là một "kẻ máu lạnh".',
    arrange: '知道/我不是/我/知恩图报。/“冷血动物”，\n 不知道/好歹，/他/那个人/“冷血动物”。/啊，/是个',
  },
  {
    simplified: '脸红脖子粗',
    pinyin: 'liǎn hóng bó zi cū',
    explanation: '形容人非常气愤的样子。',
    explanationPinyin: 'Xíngróng rén fēicháng qìfèn de yàngzi.',
    meaning: 'Hình dung người rất tức giận.',
    examples: '两人争论时，情绪激动得脸红脖子粗，旁边的人都不敢插嘴。\n 他们一争论，立刻就变得脸红脖子粗。',
    examplePinyin:
      'Liǎng rén zhēnglùn shí, qíngxù jīdòng de liǎn hóng bó zi cū, pángbiān de rén dōu bù gǎn chāzuǐ. \n Tāmen yī zhēnglùn, lìkè jiù biàn de liǎn hóng bó zi cū.',
    exampleMeaning:
      'Khi hai người tranh luận, họ tức giận đến đỏ mặt tía tai, khiến người khác không dám xen vào. \n Hễ họ tranh luận, lập tức trở nên đỏ mặt tía tai.',
    arrange:
      '旁边的人/两人争论时，/得/脸红脖子粗，/都/不敢插嘴。/情绪激动\n 他们/脸红脖子粗。/变得/一争论，/立刻/就',
  },
  {
    simplified: '脸皮薄',
    pinyin: 'liǎn pí báo',
    explanation: '比喻容易害羞或拉不开情面。',
    explanationPinyin: 'Bǐyù róngyì hàixiū huò lā bù kāi qíng miàn.',
    meaning: 'Biểu thị sự dễ dàng xấu hổ hoặc khó mở lòng.',
    examples: '小张不适合做保险推销员，因为他脸皮薄。\n 跟老板要求加工资，脸皮薄会吃亏的。',
    examplePinyin:
      'Xiǎo zhāng bù shìhé zuò bǎoxiǎn tuīxiāoyuán, yīnwèi tā liǎn pí báo. \n Gēn lǎobǎn yāoqiú jiā gōngzī, liǎn pí báo huì chīkuī de.',
    exampleMeaning:
      'Tiểu Trương không thích hợp làm nhân viên tư vấn bảo hiểm bởi vì anh ấy nhút nhát. \n Nếu yêu cầu sếp tăng lương, nhút nhát sẽ khiến anh ấy bị thiệt thòi.',
    arrange: '因为/小张/做/保险推销员，/他脸皮薄。/不适合\n 跟/会/加工资，/脸皮薄/吃亏的。/老板要求',
  },
  {
    simplified: '两面派',
    pinyin: 'liǎng miàn pài',
    explanation: '立场不坚定，耍两面手法的人。',
    explanationPinyin: 'Lìchǎng bù jiāndìng, shuǎ liǎngmiàn shǒufǎ de rén',
    meaning: 'Người không kiên định, hai mặt.',
    examples: '这个人真是个两面派，跟不同的人说不同的话。\n 你别做两面派，结果可能会两面都不讨好的。',
    examplePinyin:
      'Zhège rén zhēnshi gè liǎng miàn pài, gēn bùtóng de rén shuō bùtóng de huà. \n Nǐ bié zuòliǎng miàn pài, jiéguǒ kěnéng huì liǎngmiàn dōu bù tǎohǎo de.',
    exampleMeaning:
      'Người này đúng là kẻ hai mặt, nói chuyện với người khác không nhất quán chút nào. \n Đừng làm kẻ hai mặt, vì kết cục có thể sẽ chẳng làm vừa lòng bên nào.',
    arrange:
      '这个人/说/个两面派，/真是/跟不同的人/不同的话。\n 两面/你/别做/结果/可能/会/两面派，/都不讨好的。',
  },
  {
    simplified: '亮红牌',
    pinyin: 'liànɡ hónɡ pái',
    explanation: '借指取消资格、勒令停止。红牌是体育比赛中用来处罚严重犯规运动员的红色纸牌。',
    explanationPinyin:
      'Jiè zhǐ qǔxiāo zīgé, lèlìng tíngzhǐ.\n Hóngpái shì tǐyù bǐsài zhōng yòng lái chǔfá yán chóng fànguī yùndòngyuán de hóngsè zhǐpái.',
    meaning:
      'Phạt thẻ đỏ\n Chỉ việc tước tư cách, truất quyền. Thẻ đỏ ở đây chỉ tấm thẻ màu đỏ dùng để phạt truất quyền đối với các vận động viên vi phạm lỗi nghiêm trọng.',
    examples:
      '球星朝别人吐口水，被亮了红牌，下一场比赛他上不了了。\n 这家化工厂一直偷偷排放污水，被环保部门亮了红牌，停业了。',
    examplePinyin:
      'Qiúxīng cháo biérén tǔ kǒushuǐ, bèi liàngle hóng pái, xià yī chǎng bǐsài tā shàng bùliǎo le.\n Zhè jiā huàgōngchǎng yīzhí tōutōu páifàng wūshuǐ, bèi huánbǎo bùmén liàngle hóng pái, tíngyèle.',
    exampleMeaning:
      'Ngôi sao bóng đá nhổ nước bọt vào người khác, bị phạt thẻ đỏ, trận đấu tiếp theo anh ấy không thể tham gia.\n Nhà máy hóa chất này đã lén lút thải nước thải chưa qua xử lý, bị Bộ Môi trường phạt ngừng kinh doanh và đóng cửa.',
    arrange:
      '亮了红牌，/球星/吐口水，/了。/被/下一场比赛/他/上不了/朝别人\n 这家/一直/亮了红牌，/偷偷排放污水，/被环保部门/化工厂/停业了。',
  },
  {
    simplified: '亮黄牌',
    pinyin: 'liànɡ huánɡ pái',
    explanation: '借指提出警告。黄牌是体育比赛中裁判用来警告违规运动员的黄色标志。',
    explanationPinyin:
      'Jiè zhǐ tíchū jǐnggào. Huángpái shì tǐyù bǐsài zhōng cáipàn yòng lái jǐnggào wéiguī yùndòngyuán de huángsè biāozhì.',
    meaning:
      'Phát thẻ vàng\n Chỉ việc đưa ra cảnh cáo. Thẻ vàng ở đây chỉ tấm thẻ màu vàng dùng để cảnh cáo các vận động viên có hành vi phạm luật trong thi đấu thể thao.',
    examples:
      '城管部门给不卫生的摊贩亮了黄牌，得到了居民的认可。\n 他的旧伤对他的运动生涯亮起了黄牌，所以他能否参加奥运会目前还是未知数。',
    examplePinyin:
      'Chéngguǎn bùmén gěi bù wèishēng de tānfàn liàngle huáng pái, dédàole jūmín de rènkě.\n Tā de jiù shāng duì tā de yùndòng shēngyá liàng qǐ le huáng pái, suǒyǐ tā néng fǒu cānjiā Àoyùnhuì mùqián háishì wèizhī shù.',
    exampleMeaning:
      'Bộ phận quản lý đô thị đã rút thẻ vàng đối với những người bán hàng không vệ sinh, nhận được sự đồng tình của cư dân.\n Chấn thương cũ của anh ấy đã giáng một tấm thẻ vàng đối với sự nghiệp thể thao của anh ấy, vì vậy việc anh ấy có thể tham gia Thế vận hội hay không hiện vẫn chưa rõ.',
    arrange:
      '居民/城管部门/摊贩/亮了黄牌，/得到了/的认可。/给不卫生的\n 他的旧伤/亮起了黄牌，/还是/所以/他/能否/参加奥运会/对他的运动生涯/目前/未知数。',
  },
  {
    simplified: '凉了半截',
    pinyin: 'liánɡ le bàn jié',
    explanation: '失望，心灰意冷。',
    explanationPinyin: 'Shīwàng, xīn huī yì lěng.',
    meaning: 'Thất vọng, chán nản.',
    examples: '看到主力受伤下场，拉拉队的心凉了半截。 \n 听说竞赛取消了，大家的热情凉了半截。',
    examplePinyin:
      'Kàn dào zhǔlì shòushāng xiàchǎng, lālāduì de xīn liánɡ le bàn jié.\n Tīng shuō jìngsài qǔxiāole, dàjiā de rèqíng liáng le bàn jié.',
    exampleMeaning:
      'Chứng kiến cầu thủ chủ chốt rời sân vì chấn thương, tinh thần của đội cổ vũ giảm sút một nửa. \n Nghe tin cuộc thi bị hủy bỏ, tinh thần mọi người giảm sút hẳn.',
    arrange: '队的/看到/受伤下场，/主力/拉拉/心凉了半截。 \n 听说/热情/竞赛/大家的/取消了，/凉了半截。',
  },
  {
    simplified: '两张皮',
    pinyin: 'liǎnɡ zhānɡ pí',
    explanation: '比喻各说各的，或各做各的。',
    explanationPinyin: 'Bǐyù gè shuō gè de, huò gè zuò gè de.',
    meaning: 'Mô tả tình trạng mọi người không đồng lòng, không phối hợp.',
    examples:
      '领导和员工之间成了两张皮，沟通太少了。\n 领导不与职工沟通，不去了解职工的想法，领导和职工成了两张皮，工作怎么能搞好?',
    examplePinyin:
      'Lǐngdǎo hé yuángōng zhījiān chéng le liǎng zhāng pí, gōutōng tài shǎo le. \n Lǐngdǎo bù yǔ zhígōng gōutōng, bù qù liǎojiě zhígōng de xiǎngfǎ, lǐngdǎo hé zhígōng chéng le liǎng zhāng pí, gōngzuò zěnme néng gǎo hǎo?',
    exampleMeaning:
      'Giữa lãnh đạo và nhân viên như hai mặt của một đồng xu, giao tiếp rất ít. \n Lãnh đạo không giao tiếp với nhân viên, không hiểu ý họ, khiến công việc không thể tiến triển tốt.',
    arrange:
      '领导和员工/沟通/之间/成了/两张皮，/太少了。\n 领导/职工的想法，/不与职工/沟通，/不去了解/领导和职工/工作/成了两张皮，/怎么能搞好?',
  },
  {
    simplified: '撂挑子',
    pinyin: 'liào tiāo zi',
    explanation: '放下担子。比喻丢下应担负的工作，甩手不干。',
    explanationPinyin: 'Fàngxià dànzi. Bǐyù diū xià yīng dānfù de gōngzuò, shuǎishǒu bù gàn.',
    meaning: 'Buông bỏ trách nhiệm, từ chối làm công việc cần đảm nhận, bỏ mặc nhiệm vụ.',
    examples: '这里全靠你了，你得主持后面的工作，不能撂挑子。',
    examplePinyin: 'Zhèlǐ quán kào nǐ le, nǐ dé zhǔchí hòumiàn de gōngzuò, bùnéng liào tiāo zi.',
    exampleMeaning:
      'Mọi thứ ở đây phụ thuộc vào anh, anh cần phải đảm nhận tốt công việc, không thể bỏ cuộc giữa chừng.',
    arrange: '不能/全靠你了，/你/这里/得/主持后面/的工作，/撂挑子。',
  },
  {
    simplified: '留尾巴',
    pinyin: 'liú wěi bā',
    explanation: '比喻说话、做事不彻底，还留有一部分。',
    explanationPinyin: 'Bǐyù shuōhuà, zuòshì bù chèdǐ, hái liú yǒu yībùfèn.',
    meaning: 'Ẩn dụ cho việc nói và làm việc chưa trọn vẹn, còn thiếu sót, chưa đến nơi đến chốn.',
    examples: '道路施工留尾巴，会给车辆造成很大危险。\n 装修房子最好一步到位，别留尾巴。',
    examplePinyin:
      'Dàolù shīgōng liú wěi bā, huì gěi chēliàng zàochéng hěn dà wēixiǎn.\n Zhuāngxiū fángzi zuì hǎo yī bù dào wèi, bié liú wěi bā.',
    exampleMeaning:
      'Việc thi công đường cẩu thả sẽ gây ra nguy hiểm lớn cho các phương tiện.\n Cải tạo nhà cửa tốt nhất nên làm một lần cho xong, đừng để sót việc.',
    arrange: '造成/道路施工/留尾巴，/给车辆/很大危险。/会\n 一步到位，/装修房子/别/最好/留尾巴。',
  },
  {
    simplified: '留一手',
    pinyin: 'liú yī shǒu',
    explanation: '指不把本事、办法等全部拿出来。',
    explanationPinyin: 'Zhǐ bù bǎ běnshì, bànfǎ děng quánbù ná chūlái.',
    meaning: 'Chỉ không thể hiện ra hết toàn bộ khả năng, cách làm của bạn, v.v.',
    examples:
      '师傅在传授技艺的时候，有的人多少会留一手，生怕徒弟超过师傅而抢了 风头。 \n 看在你的分上，我对他留了一手，没使出全身力气。',
    examplePinyin:
      'Shīfù zài chuánshòu jìyì de shíhòu, yǒu de rén duōshǎo huì liú yī shǒu, shēngpà túdì chāoguò shīfù ér qiǎngle fēngtóu. \n Kàn zài nǐ de fēn shàng, wǒ duì tā liúle yī shǒu, méi shǐ chū quánshēn lìqì.',
    exampleMeaning:
      'Khi một người thầy truyền dạy một kỹ năng, một số người ít nhiều sẽ không bộc lộ hết khả năng của mình, vì sợ vượt qua mình mà giành hết danh tiếng.\n Nể tình bạn, tôi không đối đầu với anh ta, không sử dụng hết khả năng của mình.',
    arrange:
      '师傅/在传授技艺/而/有的人/多少会留一手，/生怕/的时候，/徒弟超过师傅/抢了 风头。 \n 你的分上，/没使出/我/对他留了一手，/看在/全身力气。',
  },
  {
    simplified: '露出狐狸尾巴',
    pinyin: 'lòu chū hú li wěi bā',
    explanation: '指露出破绽，被人发现。也说“露马脚”。',
    explanationPinyin: 'Zhǐ lùchū pòzhàn, bèi rén fà xiàn. Yě shuō “lòu mǎ jiǎo”.',
    meaning: 'Chỉ việc để lộ sai sót, bị người khác phát hiện. Cũng gọi là "lộ chân ngựa".',
    examples: '我相信: 坏人总有露出狐狸尾巴的时候。\n 特务终于露出狐狸尾巴了，该收网了。',
    examplePinyin:
      'Wǒ xiāngxìn: Huàirén zǒng yǒu lòu chū hú li wěi bā de shíhòu. \n Tèwù zhōngyú lòu chū hú li wěi bāle, gāi shōu wǎngle.',
    exampleMeaning:
      'Tôi tin rằng: Kẻ xấu luôn có lúc lộ đuôi cáo.\n Điệp viên cuối cùng cũng đã lộ đuôi cáo, đã đến lúc thu lưới.',
    arrange: '坏人/的时候。/总有/我相信: /露出狐狸尾巴\n 该/特务/露出狐狸尾巴了，/收网了。/终于',
  },
  {
    simplified: '没戏看',
    pinyin: 'lòu mǎ jiǎo',
    explanation: '隐蔽的事实真相泄露出来。',
    explanationPinyin: 'Yǐnbì de shìshí zhēnxiàng xièlù chūlái',
    meaning: 'Sự thật bị lộ ra.',
    examples: '他说谎时总会露马脚，瞒不过我。\n 他经常弄虚作假，这不露马脚了吧?',
    examplePinyin:
      'Tā shuō huǎng shí zǒng huì lòu mǎ jiǎo, mán bùguò wǒ. \n Tā jīngcháng nòngxūzuòjiǎ, zhè bù lòu mǎ jiǎo le ba?',
    exampleMeaning:
      'Khi nói dối, anh ta luôn để lộ sơ hở, không qua mắt được tôi. \n Anh ta thường gian dối, lần này không phải đã lộ tẩy rồi à?',
    arrange: '他/瞒不过我。/说谎时/总会/露马脚，\n 露马脚/他/弄虚作假，/这/经常/不/了吧?',
  },
  {
    simplified: '露馅儿',
    pinyin: 'lòu xiànr',
    explanation: '秘密等没保护好。',
    explanationPinyin: 'Mìmì děng méi bǎohù hǎo.',
    meaning: 'Bại lộ\n Bí mật hay các thông tin chưa được bảo mật tốt.',
    examples: '少说点，再说就要露馅儿了。\n 把文件绑在你身上，到时候你多穿点衣服，别露馅儿了。',
    examplePinyin:
      'Shǎo shuō diǎn, zài shuō jiù yào lòu xiànr le.\n Bǎ wénjiàn bǎng zài nǐ shēnshang, dào shíhòu nǐ duō chuān diǎn yīfu, bié lòu xiànr le.',
    exampleMeaning:
      'Nói ít thôi, nói nữa là lộ tẩy đấy.\n Buộc tài liệu vào người, rồi mặc thêm quần áo vào, đừng để lộ.',
    arrange: '就/再说/少说点，/要/露馅儿了。\n 把文件/多穿点/绑在你身上，/到时候/你/别/衣服，/露馅儿了。',
  },
  {
    simplified: '驴唇不对马嘴',
    pinyin: 'lǘ chún bú duì mǎ zuǐ',
    explanation: '比喻答非所问。',
    explanationPinyin: 'Bǐyù dáfēisuǒwèn.',
    meaning: 'Biểu thị việc trả lời không đúng câu hỏi.',
    examples: '他的回答常常驴唇不对马嘴。 \n 你说的是什么呀? 驴唇不对马嘴的。',
    examplePinyin:
      'Tā de huídá chángcháng lǘ chún bú duì mǎ zuǐ. \n Nǐ shuō de shì shénme ya? Lǘ chún bù duì mǎ zuǐ de.',
    exampleMeaning:
      'Câu trả lời của anh ấy thường hay không ăn khớp.\n Bạn đang nói gì vậy? Ông nói gà bà nói vịt rồi.',
    arrange: '常常/他的回答/驴唇不对马嘴。 \n 你/驴唇不对马嘴/说的/ 的。/是什么呀?',
  },
  {
    simplified: '露锋芒',
    pinyin: 'lù fēnɡ mánɡ',
    explanation: '刀剑的尖端。比喻显露出才干。',
    explanationPinyin: 'Dāojiàn de jiānduān. Bǐyù xiǎnlù chū cáigàn.',
    meaning: 'Phần đầu của đao hoặc gươm, ám chỉ tài năng vượt trội được bộc lộ.',
    examples: '平时他不怎么样，但关键时刻露了锋芒，令人刮目相看。',
    examplePinyin: 'Píngshí tā bù zěnmeyàng, dàn guānjiàn shíkè lùle fēnɡ mánɡ, lìng rén guāmù xiàngkàn.',
    exampleMeaning:
      'Bình thường anh ấy không quá nổi bật, nhưng vào thời khắc quyết định lại bộc lộ tài năng khiến ai cũng phải ngạc nhiên.',
    arrange: '他/不/怎么样，/平时/但关键时刻/令人/露了锋芒，/刮目相看。',
  },
  {
    simplified: '露原形 ',
    pinyin: 'lù yuán xínɡ',
    explanation: '显露出原来的形状，比喻暴露出原来的面目。',
    explanationPinyin: 'Xiǎnlù chū yuánlái de xíngzhuàng, bǐyù bàolù chū yuánlái de miànmù.',
    meaning: 'Lộ rõ bản chất thật, bộc lộ bộ mặt thật.',
    examples: '再等等，这个狡猾的家伙会露原形的。',
    examplePinyin: 'Zài děngděng, zhège jiǎohuá de jiāhuo huì lù yuán xíng de.',
    exampleMeaning: 'Chờ thêm chút nữa, gã xảo quyệt này sớm muộn cũng sẽ lộ bộ mặt thật.',
    arrange: '会/再/等等，/狡猾的家伙/露原形的。/这个',
  },
  {
    simplified: '乱放炮',
    pinyin: 'luàn fànɡ pào',
    explanation: '比喻不负责任地乱说。',
    explanationPinyin: 'Bǐyù bù fù zérèn de luàn shuō.',
    meaning: 'Nói năng tùy tiện, vô trách nhiệm.',
    examples: '没想好，就别乱放炮，小心得罪人。',
    examplePinyin: 'Méi xiǎng hǎo, jiù bié luàn fànɡ pào, xiǎoxīn dézuì rén.',
    exampleMeaning: 'Nếu chưa suy nghĩ kỹ thì đừng nói bừa, coi chừng gây rắc rối.',
    arrange: '小心/没想好，/别乱放炮，/得罪人。/就',
  },
  {
    simplified: '乱弹琴 ',
    pinyin: 'luàn tán qín',
    explanation: '比喻某人言论或行动不合情理，胡扯或胡闹。',
    explanationPinyin: 'Bǐyù mǒu rén yánlùn huò xíngdòng bù hé qínglǐ, húchě huò húnào.',
    meaning: 'Người nói năng hoặc hành động vô lý, làm chuyện nhảm nhí.',
    examples: '真是乱弹琴，滚开。',
    examplePinyin: 'Zhēn shì luàn tán qín, gǔn kāi.',
    exampleMeaning: 'Thật là nói năng nhảm nhí, đi chỗ khác.',
    arrange: '滚开。/真是/乱弹琴，',
  },
  {
    simplified: '捋虎须',
    pinyin: 'luō hǔ xū',
    explanation: '捋: 抚摸。比喻触犯有权势的人或冒着很大的风险。',
    explanationPinyin: 'Lǚ: fǔmō. Bǐyù chùfàn yǒu quánshì de rén huò màozhe hěn dà de fēngxiǎn.',
    meaning: '捋: vuốt ve. Mạo hiểm đối đầu với người có quyền lực hoặc thế lực.',
    examples: '敢捋虎须的人，一定要大智大勇。',
    examplePinyin: 'Gǎn luō hǔ xū de rén, yīdìng yào dàzhì dàyǒng.',
    exampleMeaning: 'Người dám vuốt râu hổ chắc chắn phải cực kỳ thông minh và dũng cảm.',
    arrange: '敢/要/捋虎须/一定/的人，/大智大勇。',
  },
  {
    simplified: '落水狗',
    pinyin: 'luò shuǐ ɡǒu',
    explanation: '骂人的话，指失败的人。',
    explanationPinyin: 'Màrén dehuà, zhǐ shībài de rén.',
    meaning: 'Lời mắng chửi, chỉ người đã thất bại.',
    examples: '他现在成了人人痛打的“落水狗”。 \n 他已经失败了，成了“落水狗”。',
    examplePinyin:
      'Tā xiànzài chéngle rén rén tòngdǎ di “luò shuǐ ɡǒu”. \n Tā yǐjīng shībàile, chéngle “luò shuǐ ɡǒu”.',
    exampleMeaning:
      'Hiện tại anh ấy đã trở thành ‘kẻ thất thế’ bị mọi người đánh đuổi.\n Anh ấy đã thất bại, trở thành ‘kẻ thất thế’.',
    arrange: '他/痛打的/现在/人人/“落水狗”。/成了 \n “落水狗”。/他/失败了，/成了/已经',
  },
  {
    simplified: '落汤鸡 ',
    pinyin: 'luò tānɡ jī',
    explanation: '比喻被雨淋得很厉害，全身都湿透了。',
    explanationPinyin: 'Bǐyù bèi yǔ lín dé hěn lìhài, quánshēn dōu shī tòule.',
    meaning: 'Biểu thị việc bị mưa dội rất mạnh, toàn thân ướt sũng.',
    examples: '没想到今天会下雨，早晨没带雨伞，结果被雨浇成了“落汤鸡”。\n 还是带上雨伞吧，免得被淋成“落汤鸡”',
    examplePinyin:
      'Méi xiǎngdào jīntiān huì xià yǔ, zǎochén mò dài yǔsǎn, jiéguǒ bèi yǔ jiāo chéngle “luò tānɡ jī”.\n Háishì dài shàng yǔsǎn ba, miǎndé bèi lín chéng “luò tānɡ jī”',
    exampleMeaning:
      'Không ngờ hôm nay trời lại mưa, sáng nay không mang ô, kết quả bị ướt như "gà ngâm nước".\n Nên mang theo ô, kẻo lại bị ướt như "gà ngâm nước".',
    arrange:
      '没想到/会下雨，/早晨/雨/没带雨伞，/结果/今天/被/浇成了/“落汤鸡”。\n 带上雨伞/“落汤鸡”。/吧，/免得/还是/被淋成',
  },
  {
    simplified: '马大哈',
    pinyin: 'mǎ dà hā',
    explanation: '做事马虎的人。',
    explanationPinyin: 'Zuòshì mǎhǔ de rén.',
    meaning: 'Người làm việc cẩu thả.',
    examples: '她是一个有名的“马大哈”，常常丢三落四。 \n 你这个“马大哈”，怎么又把钥匙弄丢了?',
    examplePinyin:
      'Tā shì yīgè yǒumíng de “mǎ dà hā”, chángcháng diūsānlàsì. \n Nǐ zhège “mǎ dà hā”, zěnme yòu bǎ yàoshi nòng diūle?',
    exampleMeaning:
      'Cô ấy nổi tiếng là một "người lơ đãng" nổi tiếng, thường hay làm mất đồ.\n Cô "đoảng" thật, sao lại làm mất chìa khóa nữa rồi?',
    arrange: '她/有名的/常常/“马大哈”，/是一个/丢三落四。 \n 你这个/把钥匙/“马大哈”，/弄丢了?/怎么/又',
  },
  {
    simplified: '马后炮',
    pinyin: 'mǎ hòu pào',
    explanation: '指事后诸葛亮。',
    explanationPinyin: 'Zhǐ shìhòu zhūgéliàng.',
    meaning: 'Chỉ người chỉ trích sau khi sự việc đã xảy ra.',
    examples: '他那个人啊，就是“马后炮”，早干什么了? \n 你可别“马后炮”，怎么不早说呀?',
    examplePinyin:
      'Tā nàgè rén a, jiùshì “mǎ hòu pào”, zǎo gànshénmeliǎo? \n Nǐ kě bié “mǎ hòu pào”, zěnme bù zǎo shuō ya?',
    exampleMeaning:
      'Người kia ấy, chính là "người thích chỉ trích chuyện cũ", trước đây đã làm gì rồi?\n Bạn đừng có "lôi chuyện cũ ra chì chiết" như vậy, sao không nói sớm đi?',
    arrange: '他/“马后炮”，/那个人啊，/就是/早/干什么了? \n 不/你/可别/怎么/“马后炮”，/早说呀?',
  },
  {
    simplified: '马拉松',
    pinyin: 'mǎ lā sōnɡ',
    explanation: '指长跑运动。',
    explanationPinyin: 'Zhǐ chángpǎo yùndòng.',
    meaning: 'Chỉ môn chạy đường dài.',
    examples: '他年年都获得“马拉松”赛跑的冠军。\n 做什么事都要有“马拉松”精神。',
    examplePinyin:
      'Tā nián nián dōu huòdé “mǎ lā sōnɡ” sàipǎo de guànjūn. \n Zuò shénme shì dōu yào yǒu “mǎ lā sōnɡ” jīngshén.',
    exampleMeaning:
      'Anh ấy hàng năm đều giành chiến thắng trong cuộc thi marathon.\n Làm bất cứ việc gì cũng cần có tinh thần "marathon".',
    arrange: '赛跑/他/都获得/“马拉松”/的冠军。/年年\n 做/都要有/精神。/什么事/“马拉松”',
  },
  {
    simplified: '马屁精',
    pinyin: 'mǎ pì jīnɡ',
    explanation: '指善于拍马屁的人。',
    explanationPinyin: 'Zhǐ shànyú pāimǎpì de rén.',
    meaning: 'Chỉ người giỏi nịnh bợ.',
    examples: '我们经理特喜欢“马屁精”。 \n 那个“马屁精”可真讨厌。',
    examplePinyin: 'Wǒmen jīnglǐ tè xǐhuān “mǎ pì jīnɡ”. \n Nàgè “mǎ pì jīng” kě zhēn tǎoyàn.',
    exampleMeaning:
      'Giám đốc của chúng tôi đặc biệt thích những "kẻ nịnh hót".\n "Tên nịnh thần" đó thật sự rất đáng ghét.',
    arrange: '我们/特喜欢/“马屁精”。/经理 \n 可/那个/“马屁精”/真讨厌。',
  },
  {
    simplified: '马前卒',
    pinyin: 'mǎ qián zú',
    explanation: '指什么事情都努力在前面做的人，努力为主人效力的人。',
    explanationPinyin: 'Zhǐ shénme shìqíng dōu nǔlì zài qiánmiàn zuò de rén, nǔlì wéi zhǔrén xiàolì de rén.',
    meaning: 'Chỉ người nỗ lực làm mọi việc ở phía trước, phục vụ cho người khác.',
    examples: '我们几个是我们总经理的“马前卒”，常打前哨。 \n 有事请吩咐，我甘当您的“马前卒”。',
    examplePinyin:
      'Wǒmen jǐ gè shì wǒmen zǒng jīnglǐ de “mǎ qián zú”, cháng dǎ qiánshào. \n Yǒushì qǐng fēnfù, wǒ gān dāng nín de “mǎ qián zú”.',
    exampleMeaning:
      'Chúng tôi là "người tiên phong" của giám đốc, thường đi trước mở đường.\n Nếu có việc gì, xin cứ dặn, tôi sẵn sàng làm "người tiên phong" cho bạn.',
    arrange: '是/我们总经理/“马前卒”，/我们几个/常/的/打前哨。 \n 您的/有事/我/请吩咐，/甘当/“马前卒”。',
  },
  {
    simplified: '卖狗皮膏药',
    pinyin: 'mài ɡǒu pí ɡāo yào',
    explanation: '指推销骗人的东西。',
    explanationPinyin: 'Zhǐ tuīxiāo piàn rén de dōngxī.',
    meaning: 'Chỉ việc bán hàng lừa đảo.',
    examples: '你怎么又在这儿卖狗皮膏药，昨天不是说最后一天吗?\n 你别卖狗皮膏药了，大家不会上当的。',
    examplePinyin:
      "Nǐ zěnme yòu zài zhè'er mài ɡǒu pí ɡāo yào, zuótiān bùshì shuō zuìhòu yītiān ma? \n Nǐ bié mài ɡǒu pí ɡāo yàole, dàjiā bù huì shàngdàng de.",
    exampleMeaning:
      'Sao bạn lại ở đây bán hàng giả, hôm qua không phải đã nói là ngày cuối cùng sao?\n Đừng bán đồ đểu nữa, mọi người sẽ không mắc bẫy đâu.',
    arrange:
      '你怎么/不是说/又/卖狗皮膏药，/昨天/最后一天/吗?/在这儿\n 你/别/不会/卖狗皮膏药了，/大家/上当的。',
  },
  {
    simplified: '卖关子',
    pinyin: 'mài ɡuān zi',
    explanation: '比喻说话做事在紧要时刻，故弄玄虚，使对方着急而答应自己的要 \n 求。',
    explanationPinyin:
      'Bǐyù shuōhuà zuòshì zài jǐnyào shíkè, gùnòngxuánxū, shǐ duìfāng zhāojí ér dāyìng zìjǐ de yāoqiú.',
    meaning:
      'Ngụ ý việc nói năng, hành động vào lúc quan trọng, cố tình làm ra vẻ bí ẩn để đối phương lo lắng mà đồng ý với yêu cầu của mình.',
    examples: '别卖关子了，快告诉我吧，我等急了。 \n 我不喜欢跟他交谈，总卖关子，很不直爽。',
    examplePinyin:
      'Bié mài ɡuān zile, kuài gàosù wǒ ba, wǒ děng jíle. \n Wǒ bù xǐhuān gēn tā jiāotán, zǒng mài ɡuān zi, hěn bù zhíshuǎng.',
    exampleMeaning:
      'Đừng có úp mở nữa, mau nói cho tôi đi, tôi đang sốt ruột.\n Tôi không thích nói chuyện với anh ấy, luôn úp mở, rất không thẳng thắn.',
    arrange: '别/我/快告诉我/吧，/卖关子了，/等急了。 \n 我/不喜欢/不直爽。/跟他/总/交谈，/卖关子，/很',
  },
  {
    simplified: '没底儿',
    pinyin: 'méi dǐr',
    explanation: '指不了解情况，心中无数。',
    explanationPinyin: 'Zhǐ bù liǎojiě qíngkuàng, xīn zhōng wúshù.',
    meaning: 'Không hiểu tình hình, không chắc chắn.',
    examples: '这次谈判能不能成功，说实话，我心里也没底儿。\n 自己觉得没底儿的事情，我不会去做。',
    examplePinyin:
      'Zhè cì tánpàn néng bùnéng chénggōng, shuō shíhuà, wǒ xīn lǐ yě méi dǐr. \n Zìjǐ juédé méi dǐr de shìqíng, wǒ bù huì qù zuò.',
    exampleMeaning:
      'Liệu cuộc đàm phán lần này có thành công không, thật lòng mà nói, tôi cũng không chắc chắn. \n Những chuyện mà mình cảm thấy không chắc chắn, tôi sẽ không làm.',
    arrange: '成功，/这次/谈判/也没底儿。/能不能/说实话，/我心里\n 自己/我/觉得/的事情，/不会去做。/没底儿',
  },
  {
    simplified: '没分寸',
    pinyin: 'méi fēn cùn',
    explanation: '比喻说话或做事不能掌握适当的限度。',
    explanationPinyin: 'Bǐyù shuōhuà huò zuòshì bùnéng zhǎngwò shìdàng de xiàndù.',
    meaning: 'Không biết giữ chừng mực khi nói hoặc làm.',
    examples: '批评人也要有个限度，不能没分寸。 \n 自己那么赚钱，在这个敏感时刻，还闹着要涨价，真没分寸。',
    examplePinyin:
      'Pīpíng rén yě yào yǒu gè xiàndù, bù néng méi fēn cùn. \n Zìjǐ nàme zhuànqián, zài zhège mǐngǎn shíkè, hái nàozhe yào zhǎngjià, zhēn méi fēn cùn.',
    exampleMeaning:
      'Khi phê bình người khác cũng cần có giới hạn, không thể thiếu chừng mực. \n Bản thân kiếm được nhiều tiền như vậy, trong thời điểm nhạy cảm này còn đòi tăng giá, thật sự là không biết chừng mực.',
    arrange:
      '也要/没分寸。/有个限度，/批评人/不能 \n 那么赚钱，/在这个/要涨价，/敏感时刻，/自己/还闹着/真没分寸。',
  },
  {
    simplified: '没规矩',
    pinyin: 'méi ɡuī ju',
    explanation: '比喻举止随便，不受常规或标准的限制。规矩: 画圆用的圆规和画直角或方形用的曲尺。',
    explanationPinyin: 'Bǐyù jǔzhǐ suíbiàn, bù shòu chángguī huò biāozhǔn de xiànzhì.',
    meaning: 'Hành động tuỳ tiện, không theo quy tắc hay chuẩn mực nào.',
    examples: '有的人很没规矩，喜欢插队。 \n 他家世代书香门第，重礼节，没想到他这么没规矩。',
    examplePinyin:
      'Yǒu de rén hěn méi ɡuī ju, xǐhuān chāiduì. \n Tā jiā shèngdài shūxiāngmén dìn, zhòng lǐjié, méi xiǎngdào tā zhème méi guī ju.',
    exampleMeaning:
      'Có người rất không có quy tắc, thích chen hàng. \n Gia đình anh ta thế hệ nào cũng trọng lễ nghĩa, không ngờ anh ta lại không có quy tắc như vậy.',
    arrange: '喜欢/有的人/没规矩，/插队。/很\n 他家/世代/重礼节，/这么/没想到/书香门第，/他/没规矩。',
  },
  {
    simplified: '没好气儿',
    pinyin: 'méi hǎo qìr',
    explanation: '说话生硬，脸色难看，指态度不好。',
    explanationPinyin: 'Shuōhuà shēngyìng, liǎnsè nánkàn, zhǐ tàidù bù hǎo.',
    meaning: 'Nói chuyện cứng nhắc, mặt mũi khó coi, chỉ thái độ không tốt.',
    examples: '一看到他那吊儿郎当的样子，我就没好气。 \n 他又一次闯了祸，惹得大家都没好气儿。',
    examplePinyin:
      'Yī kàn dào tā nà diào ér láng dāng de yàngzi, wǒ jiù méi hǎo qì. \n Tā yòu yī cì chuǎngle huò, rě dé dàjiā dōu méi hǎo qìr.',
    exampleMeaning:
      'Mỗi khi nhìn thấy bộ dạng lề mề của anh ấy, tôi đều cảm thấy không vui. \n Anh ta lại gây rắc rối lần nữa, khiến mọi người đều khó chịu.',
    arrange: '就/一看到他/的样子，/我/没好气。/那吊儿郎当 \n 他/惹得大家/闯了祸，/又一次/都/没好气儿。',
  },
  {
    simplified: '没红过脸',
    pinyin: 'méi hóng ɡuò liǎn',
    explanation: '指没有发生过口角、争执。',
    explanationPinyin: 'Zhǐ méiyǒu fāshēng guò kǒujiǎo, zhēngzhí.',
    meaning: 'Chưa xảy ra tranh cãi hay cãi vã.',
    examples: '她人品好，脾气好，跟单位同事从来没有红过脸。\n 她们婆媳之间关系很好，从来没有红过脸。',
    examplePinyin:
      'Tā rénpǐn hǎo, píqì hǎo, gēn dānwèi tóngshì cónglái méiyǒu hóng guò liǎn. \n Tāmen póxí zhī jiān guānxì hěn hǎo, cónglái méiyǒu hóng guò liǎn.',
    exampleMeaning:
      'Cô ấy nhân phẩm tốt, tính tình tốt, chưa bao giờ cãi nhau với đồng nghiệp trong cơ quan. \n Quan hệ giữa mẹ chồng và nàng dâu rất tốt, chưa bao giờ xảy ra cãi vã.',
    arrange:
      '脾气好，/她/人品好，/跟单位同事/没有/从来/红过脸。\n 她们/红过脸。/婆媳之间/很好，/从来/没有/关系',
  },
  {
    simplified: '眉毛胡子一把抓',
    pinyin: 'méi máo hú zi yī bǎ zhuā',
    explanation: '做事不分轻重缓急。',
    explanationPinyin: 'Zuòshì bù fēn qīngzhòng huǎnjí.',
    meaning: 'Không phân biệt giữa việc quan trọng và không quan trọng.',
    examples: '他处理事情总是眉毛胡子一把抓，缺乏条理。\n 做事情要分清轻重缓急，不要眉毛胡子一把抓。',
    examplePinyin:
      'Tā chǔlǐ shìqíng zǒngshì méi máo hú zi yī bǎ zhuā, quēfá tiáolǐ. \n Zuò shìqíng yào fēnqīng qīngzhòng huǎnjí, bùyào méi máo hú zi yī bǎ zhuā.',
    exampleMeaning:
      'Anh ta xử lý mọi việc một cách lộn xộn, không có trật tự. \n Làm việc phải phân biệt chuyện lớn chuyện bé, đừng làm mọi thứ một cách lộn xộn.',
    arrange:
      '他/眉毛胡子一把抓，/处理事情/缺乏/总是/条理。\n 不要/做事情/要/清轻重缓急，/眉毛胡子一把抓。/分',
  },
  {
    simplified: '没脑子',
    pinyin: 'méi nǎo zi',
    explanation: '比喻不善思考或记性不好。',
    explanationPinyin: 'Bǐyù bù shàn sīkǎo huò jìxìng bù hǎo.',
    meaning: 'Chỉ người không biết suy nghĩ hoặc trí nhớ kém.',
    examples: '你怎么没有脑子呢，这么重要的事情也会忘记?\n 这次失败，在于他没脑子，竟然在这种场合乱放炮。',
    examplePinyin:
      'Nǐ zěnme méiyǒu nǎo zi ne, zhème zhòngyào de shìqíng yě huì wàngjì?\n Zhè cì shībài, zài yú tā méi nǎo zi, jìngrán zài zhè zhǒng chǎnghé luàn fàng pào.',
    exampleMeaning:
      'Sao bạn lại lơ ngơ như vậy, chuyện quan trọng thế mà cũng quên? \n Lần này thất bại là do anh ấy thiếu suy nghĩ, lại phát ngôn lung tung trong hoàn cảnh như vậy.',
    arrange:
      '重要/你/怎么/也会忘记?/没有脑子呢，/这么/的事情\n 这次/失败，/他/在这种场合/没脑子，/竟然/乱放炮。/在于',
  },
  {
    simplified: '没头苍蝇',
    pinyin: 'méi tóu cānɡ yinɡ',
    explanation: '比喻乱闯乱碰的人。',
    explanationPinyin: 'Bǐyù luàn chǎng luàn pèng de rén.',
    meaning: 'Như rắn mất đầu\n Phép ẩn dụ chỉ những người xô xát, va chạm lung tung.',
    examples: '他被弄糊涂了，像个没头苍蝇，到处乱撞。\n 镇定点，别像没头苍蝇，丢不丢脸。',
    examplePinyin:
      'Tā bèi nòng hútu le, xiàng gè méi tóu cānɡ yinɡ, dào chù luàn zhuàng.\n Zhèn dìng diǎn, bié xiàng méi tóu cānɡ yinɡ, diū bù diū liǎn.',
    exampleMeaning:
      'Anh ta bị làm cho rối trí, giống như ruồi không đầu, chạy lung tung.\n Bình tĩnh lại, đừng như ruồi mất đầu, không thấy xấu hổ sao?',
    arrange: '像个/他/被/弄糊涂了，/到处/没头苍蝇，/乱撞。\n 别/镇定点，/像/脸。/没头苍蝇，/丢不丢',
  },
  {
    simplified: '没戏唱',
    pinyin: 'méi xì chànɡ',
    explanation: '比喻没有其他办法可想了，无法使某事继续进行下去了。也说“没戏”。',
    explanationPinyin:
      'Bǐyù méiyǒu qítā bànfǎ kě xiǎng le, wúfǎ shǐ mǒu shì jìxù jìnxíng xiàqù le, yě shuō "méi xì".',
    meaning: 'Không còn cách nào khác để tiếp tục, không thể tiến hành việc gì. Cũng nói là “没戏”.',
    examples: '小刘想提干，但基本没戏唱。\n 有没有戏唱，既要看他的表现，也要看领导的态度。',
    examplePinyin:
      'Xiǎo Liú xiǎng tí gàn, dàn jīběn méi xì chàng. \n Yǒu méiyǒu xì chàng, jì yào kàn tā de biǎoxiàn, yě yào kàn lǐngdǎo de tàidù.',
    exampleMeaning:
      'Tiểu Lưu muốn thăng chức, nhưng cơ hội gần như không có. \n Có cơ hội hay không, vừa phải xem sự thể hiện của anh ấy, vừa phải xem thái độ của lãnh đạo.',
    arrange: '基本/小刘/但/想提干，/没戏唱。\n 戏唱，/既要看/领导/他的表现，/有没有/也要看/的态度。',
  },
  {
    simplified: '没戏看',
    pinyin: 'méi xì kàn',
    explanation: '比喻没有笑话或热闹可看。',
    explanationPinyin: 'Bǐyù méiyǒu xiàohuà huò rènào kě kàn.',
    meaning: 'Không có chuyện thú vị hay ồn ào để xem.',
    examples: '他们弄不出什么花样，咱们也没好戏看。 \n 走吧，没戏看，两位拳手的实力相差太大了。',
    examplePinyin:
      'Tāmen nòng bù chū shénme huāyàng, zánmen yě méi hǎo xì kàn. \n Zǒu ba, méi xì kàn, liǎng wèi quánshǒu de shílì xiāngchà tài dàle.',
    exampleMeaning:
      'Họ không thể làm ra trò trống gì, chúng ta cũng không có gì hay để xem. \n Đi thôi, không có gì hay để xem, sức mạnh của hai võ sĩ chênh lệch quá lớn.',
    arrange: '弄不出/也/什么花样，/他们/咱们/没好戏看。 \n 相差/走吧，/没戏看，/的实力/太大了。/两位拳手',
  },
  {
    simplified: '没心没肺',
    pinyin: 'méi xīn méi fèi',
    explanation: '(1) 比喻没良心，品质恶劣。\n (2) 比喻头脑简单，不关心时势。',
    explanationPinyin: '(1) Bǐyù méi liángxīn, pǐnzhì èliè; \n (2) Bǐyù tóunǎo jiǎndān, bù guānxīn shíshì',
    meaning:
      '(1) Chỉ người không có lương tâm, phẩm hạnh kém. \n (2) Chỉ người đơn giản, không quan tâm đến tình hình.',
    examples:
      '他这种没心没肺的人，不会知道感恩的，你何必对他那么好! \n 你别没心没肺地傻笑了，人家是在讽刺你呢。',
    examplePinyin:
      "Tā zhè zhǒng méi xīn méi fèi de rén, bù huì zhīdào gǎn'ēn de, nǐ hébì duì tā nàme hǎo! \n Nǐ bié méi xīn méi fèi de shǎ xiào le, rén jiā shì zài fěngcì nǐ ne.",
    exampleMeaning:
      'Người không có lòng biết ơn như anh ta sẽ không hiểu giá trị của lòng tốt, bạn cần gì phải tốt với anh ta như vậy! \n Đừng có ngốc nghếch mà cười khúc khích, người ta đang chế nhạo bạn đấy.',
    arrange:
      '他/这种/对他/没心没肺/的人，/感恩的，/你/不会知道/何必/那么好! \n 讽刺/你/别/傻笑了，/人家/是在/你呢。/没心没肺地',
  },
  {
    simplified: '没星秤',
    pinyin: 'méi xīnɡ chènɡ',
    explanation: '比喻没有主见、没有固定看法的人。星: 指秤上标记斤、两、钱的小点子。',
    explanationPinyin:
      'Bǐyù méiyǒu zhǔjiàn, méiyǒu gùdìng kànfǎ de rén. xīng: zhǐ chèng shàng biāojì jīn, liǎng, qián de xiǎo diǎnzi.',
    meaning:
      'Chỉ người không có chính kiến, không có quan điểm cố định. “星” ám chỉ những dấu hiệu nhỏ trên cân.',
    examples:
      '他是杆没星秤，事情交给他去办，我不放心。\n 这么重要的事情，交给他这样的没星秤，不知道会办成什么样子。',
    examplePinyin:
      'Tā shì gǎn méi xīnɡ chènɡ, shìqíng jiāo gěi tā qù bàn, wǒ bù fàngxīn. \n Zhème zhòngyào de shìqíng, jiāo gěi tā zhèyàng de méi xīng chèng, bù zhīdào huì bàn chéng shénme yàngzi.',
    exampleMeaning:
      'Anh ấy là một người không có năng lực, giao việc cho anh ấy tôi không yên tâm. \n Những chuyện quan trọng như thế này, giao cho người không có năng lực như anh ấy, không biết sẽ làm ra kết quả gì.',
    arrange:
      '我/他是/事情/杆没星秤，/交给他/去办，/不放心。\n 的事情，/这么重要/交给他/没星秤，/不知道/办成/会/什么样子。/这样的',
  },
  {
    simplified: '没眼力',
    pinyin: 'méi yǎn lì',
    explanation: '比喻不善观察，没有辨别是非好坏的能力。也说“没眼光”。',
    explanationPinyin:
      'Bǐyù bù shàn guānchá, méiyǒu biànbié shìfēi hǎo huài de nénglì, yě shuō "méi yǎn guāng".',
    meaning: 'Không biết quan sát, không có khả năng phân biệt đúng sai. Cũng nói là “没眼光”.',
    examples:
      '这么好的潜力股，赚 5% 就抛了，真没眼力。\n 相处这么久，竟然没发现女朋友是个有名的作家，真是没眼力。',
    examplePinyin:
      'Zhème hǎo de qiánlì gǔ, zhuàn 5% jiù pāole, zhēn méi yǎn lì. \n Xiāngchǔ zhème jiǔ, jìngrán méi fāxiàn nǚ péngyǒu shìgè yǒumíng de zuòjiā, zhēn shì méi yǎn lì.',
    exampleMeaning:
      'Cổ phiếu tiềm năng tốt như vậy, chỉ kiếm 5% đã bán, thật là không biết nhìn xa trông rộng. \n Cùng ở bên nhau lâu như vậy mà không nhận ra bạn gái là một nhà văn nổi tiếng, thật sự là không biết nhìn người.',
    arrange:
      '的潜力股，/赚 5% /真/就抛了，/这么好/没眼力。\n 相处/这么久，/没发现/真是/女朋友/是个/有名的作家，/没眼力。/竟然',
  },
  {
    simplified: '没眼色',
    pinyin: 'méi yǎn sè',
    explanation: '比喻不会看情况办事，不知趣儿。',
    explanationPinyin: 'Bǐyù bù huì kàn qíngkuàng bànshì, bù zhīqùr.',
    meaning: 'Không biết cách nhìn nhận tình huống, không hiểu ý.',
    examples: '你别没眼色，人家正在气头上，少去招惹他。\n 你真没眼色，没看到领导已经不耐烦了吗? 还一直说。',
    examplePinyin:
      'Nǐ bié méi yǎn sè, rénjiā zhèngzài qì tóu shàng, shǎo qù zhāorǎo tā. \n Nǐ zhēn méi yǎn sè, méi kàn dào lǐngdǎo yǐjīng bù nàifán ma? Hái yīzhí shuō.',
    exampleMeaning:
      'Đừng có thiếu nhạy bén như vậy, người ta đang bực mình, bớt gây sự với anh ta đi. \n Bạn thật thiếu tinh ý, không thấy lãnh đạo đã không kiên nhẫn rồi sao? Còn nói mãi.',
    arrange:
      '你/少去招惹/别/没眼色，/正在/气头上，/他。/人家\n 真没眼色，/领导/没看到/已经/不耐烦/了吗?/ 还/你/一直说。',
  },
  {
    simplified: '没影儿的事',
    pinyin: 'méi yǐngr de shì',
    explanation: '比喻没有任何头绪或迹象。',
    explanationPinyin: 'Bǐyù méiyǒu rènhé tóuxù huò jìxiàng.',
    meaning: 'Vấn đề không có manh mối hoặc dấu hiệu nào.',
    examples:
      '你听谁说我买彩票中奖了，这是没影儿的事。\n 她最喜欢无中生有，添油加醋，没影儿的事情，她也会说得有鼻子有眼。',
    examplePinyin:
      'Nǐ tīng shéi shuō wǒ cǎipiào zhòngle jiǎng, zhè shì méi yǐngr de shì. \n Tā zuì xǐhuān wú zhōng shēng yǒu, tiān yóu jiā cù, méi yǐngr de shìqíng, tā yě huì shuō de yǒu bízi yǒu yǎn.',
    exampleMeaning:
      'Ai nói với bạn rằng tôi trúng số, đó là chuyện không có thật. \n Cô ấy thích bịa đặt, thổi phồng sự việc, chuyện không có thật cũng có thể nói ra rất thuyết phục.',
    arrange:
      '你/中奖了，/听谁说/没影儿/我买彩票/这是/的事。\n 没影儿/她/最喜欢/有鼻子有眼。/无中生有，/添油加醋，/的事情，/她也会/说得',
  },
  {
    simplified: '没有架子',
    pinyin: 'méi yǒu jià zi',
    explanation: '比喻待人和蔼诚恳，没有一点儿自高自大、装腔作势的样子。',
    explanationPinyin:
      "Bǐyù dài rén hé'ǎi chéngkěn, méiyǒu yīdiǎnr zìgāo zìdà, zhuāngqiāng zuòshì de yàngzi.",
    meaning: 'Chỉ người đối xử hòa nhã, chân thành, không có vẻ kiêu ngạo hay giả tạo.',
    examples:
      '别看他是个军长，可是对人一点儿架子也没有。\n 我就喜欢现在的局长，虽出身高干，但一点架子都没有。',
    examplePinyin:
      'Bié kàn tā shì gè jūn zhǎng, kě shì duì rén yīdiǎnr jià zi yě méiyǒu. \n Wǒ jiù xǐhuān xiànzài de júzhǎng, suī chūshēn gāo gàn, dàn yīdiǎn jià zi dōu méiyǒu.',
    exampleMeaning:
      'Dù anh ấy là một quân trưởng, nhưng không hề có chút kiêu ngạo nào.\n Tôi rất thích vị giám đốc hiện tại, dù xuất thân từ gia đình quan chức, nhưng không hề kiêu căng.',
    arrange:
      '别看/他/架子/军长，/可是/对人/一点儿/也没有。/是个\n 我/就/现在/的局长，/虽/都/出身高干，/但/喜欢/一点架子/没有。',
  },
  {
    simplified: '没遮没拦',
    pinyin: 'méi zhē méi lán',
    explanation: '没有阻挡的东西，比喻心直口快，有什么说什么。',
    explanationPinyin: 'Méiyǒu zǔdǎng de dōngxī, bǐyù xīnzhí kǒukuài, yǒu shénme shuō shénme.',
    meaning: 'Không có rào cản, chỉ người nói thẳng không ngại ngùng.',
    examples:
      '她说话没遮没拦，常得罪人，实际上她人心不坏。\n 探望病人时，不该说的你别说，你可不要没遮没拦的。',
    examplePinyin:
      'Tā shuōhuà méi zhē méi lán, cháng dézuì rén, shíjì shang tā rénxīn bù huài. \n Tànwàng bìngrén shí, bù gāi shuō de nǐ bié shuō, nǐ kě bùyào méi zhē méi lán de.',
    exampleMeaning:
      'Cô ấy nói năng không kiêng nể, thường làm mất lòng người khác, nhưng thực ra cô ấy không phải là người xấu. \n Khi thăm bệnh nhân, bạn không nên nói những điều không nên nói, đừng có nói năng bừa bãi.',
    arrange:
      '没遮没拦，/她人/常/得罪人，/她说话/实际上/心不坏。\n 探望/可不要/不该说的/你别说，/你/病人时，/没遮没拦的。',
  },
  {
    simplified: '闷葫芦',
    pinyin: 'mèn hú lu',
    explanation: '比喻很难猜透而令人纳闷的话或事情。也比喻沉默寡言的人。',
    explanationPinyin:
      'Bǐyù hěn nán cāi tòu ér lìng rén nàmèn de huà huò shìqíng. Yě bǐyù chénmò guǎyán de rén.',
    meaning:
      'Ẩn dụ cho những câu nói hoặc sự việc rất khó đoán, khiến người khác bối rối. Cũng dùng để chỉ người trầm lặng ít nói.',
    examples: '他习惯于做闷葫芦，谁也不知道他在想什么。\n 他这个闷葫芦，问不出什么情况，不问他也罢。',
    examplePinyin:
      'Tā xíguàn yú zuò mèn hú lu, shéi yě bù zhīdào tā zài xiǎng shénme.\n Tā zhège mèn hú lu, wèn bù chū shénme qíngkuàng, bù wèn tā yě hǎo.',
    exampleMeaning:
      'Anh ta quen làm người kín miệng, không ai biết anh đang nghĩ gì.\n Người kín tiếng như vậy, hỏi cũng không ra gì, thà đừng hỏi.',
    arrange:
      '他/做/闷葫芦，/他在/谁/也不知道/想什么。/习惯于\n 这个/也罢。/闷葫芦，/问不出/他/什么情况，/不问他',
  },
  {
    simplified: '蒙在鼓里',
    pinyin: 'ménɡ zài ɡǔ lǐ',
    explanation: '比喻不明真相，被人蒙骗。',
    explanationPinyin: 'Bǐyù bùmíng zhēnxiàng, bèi rén mēngpiàn.',
    meaning: 'Bị che mắt\n Đó là một phép ẩn dụ cho việc bị lừa dối, không biết sự thật.',
    examples:
      '骗子都已经把他的钱挥霍一空了，他却还蒙在鼓里，做着发财梦。\n 别人都走光了，他还蒙在鼓里，继续等。',
    examplePinyin:
      'Piànzi dōu yǐjīng bǎ tā de qián huīhuò yī kōng le, tā què hái méng zài gǔ lǐ, zuò zhe fācái mèng.\n Biérén dōu zǒu guāng le, tā hái méng zài gǔ lǐ, jìxù děng.',
    exampleMeaning:
      'Kẻ lừa đảo đã tiêu hết tiền của anh ta, nhưng anh ta vẫn không hay biết, đang mơ mộng làm giàu.\n Mọi người đã rời đi hết, anh ta vẫn không hay biết, tiếp tục chờ đợi.',
    arrange:
      '都已经/把/骗子/挥霍一空了，/他/却/做着/还蒙在鼓里，/发财梦。/他的钱\n 蒙在鼓里，/别人/都走光了，/还/继续等。/他',
  },
  {
    simplified: '迷魂阵',
    pinyin: 'mí hún zhèn',
    explanation: '使人迷惑的圈套、计谋，或迷惑不清的状况。',
    explanationPinyin: 'Shǐ rén míhuò de quāntào, jìmóu, huò míhuò bù qīng de zhuàngkuàng.',
    meaning: 'Bẫy hoặc tình huống gây nhầm lẫn.',
    examples: '他的谎言就像迷魂阵，让人难以分辨真相。\n 这是敌人摆的迷魂阵，千万别中他们的圈套。',
    examplePinyin:
      'Tā de huǎngyán jiù xiàng mí hún zhèn, ràng rén nányǐ fēnbiàn zhēnxiàng. \n Zhè shì dírén bǎi de mí hún zhèn, qiānwàn bié zhōng tāmen de quāntào.',
    exampleMeaning:
      'Lời nói dối của anh ta như một mê cung, khiến người khác khó phân biệt thật giả. \n Đây là cái bẫy mà kẻ thù đặt ra, nhất định không được rơi vào bẫy của chúng.',
    arrange: '难以/他的/谎言/迷魂阵，/让人/分辨真相。/就像\n 敌人/这是/迷魂阵，/中他们的/千万/摆的/别/圈套。',
  },
  {
    simplified: '命根子',
    pinyin: 'mìng gēn zi',
    explanation: '比喻最受人重视的晚辈或重要事物。',
    explanationPinyin: 'Bǐyù zuì shòu rén zhòngshì de wǎnbèi huò zhòngyào shìwù.',
    meaning: 'Hình ảnh ẩn dụ về người hoặc sự vật được coi trọng nhất.',
    examples: '对于他来说，事业就是他的命根子。\n 《红楼梦》里，贾宝玉是老祖宗的命根子。',
    examplePinyin:
      'Duìyú tā lái shuō, shìyè jiùshì tā de mìng gēn zi. \n 《Hónglóumèng》 lǐ, Jiǎ Bǎoyù shì lǎozǔzōng de mìng gēn zi.',
    exampleMeaning:
      'Đối với anh ta, sự nghiệp chính là lẽ sống. \n Trong "Hồng Lâu Mộng", Giả Bảo Ngọc là nguồn sống của gia đình tổ tiên.',
    arrange: '他的/对于/他/事业/来说，/就是/命根子。\n 命根子。/《红楼梦》/的/里，/是/老祖宗/贾宝玉',
  },
  {
    simplified: '摸不着头脑',
    pinyin: 'mō bù zháo tóu nǎo',
    explanation: '对事情或问题搞不清楚。',
    explanationPinyin: 'Duì shìqíng huò wèntí gǎo bù qīngchǔ.',
    meaning: 'Không rõ ràng về sự việc hoặc vấn đề.',
    examples: '她的行为让我摸不着头脑，真是难以理解。\n他的这番话让我有点儿摸不着头脑，他到底什么意思啊?',
    examplePinyin:
      'Tā de xíngwéi ràng wǒ mō bù zháo tóu nǎo, zhēnshi nányǐ lǐjiě.\nTā de zhè fān huà ràng wǒ yǒudiǎnr mō bù zháo tóu nǎo, tā dàodǐ shénme yìsi a?\n',
    exampleMeaning:
      'Hành vi của cô ấy khiến tôi hoàn toàn bối rối, thật khó để hiểu được.\nNhững lời nói của anh ấy khiến tôi không thể nào nắm bắt được ý nghĩa, rốt cuộc anh ấy muốn nói gì?',
    arrange:
      '行为/真是/让我/摸不着头脑，/难以理解/她的\n让我/他的/这番话/摸不着头脑，/到底/什么意思/有点儿/他\n',
  },
  {
    simplified: '莫须有',
    pinyin: 'mò xū yǒu',
    explanation:
      '宋朝奸臣秦桧诬陷岳飞谋反，韩世忠不平，去质问他有没有证据，秦桧回答说“莫须有”，意思是“也许有吧”。后来用此语表示凭空捏造。',
    explanationPinyin:
      'Sòng cháo jiān chén Qín Huì wūxiàn Yuè Fēi móufǎn, Hán Shìzhōng bùpíng, qù zhìwèn tā yǒu méiyǒu zhèngjù, Qín Huì huídá shuō "Mò xū yǒu", yìsi shì "yěxǔ yǒu ba". Hòulái yòng cǐ yǔ biǎoshì píngkōng nièzào.',
    meaning: 'Xuất phát từ việc Tần Hối vu cáo Nguyên Phi, ý chỉ sự bịa đặt không có căn cứ.',
    examples: '你没有真凭实据，你对他的控告，是莫须有的。\n那些流言蜚语毫无根据，全是莫须有的。',
    examplePinyin:
      'Nǐ méiyǒu zhēn píng shí zhèngjù, nǐ duì tā de kònggào, shì mò xū yǒu de. \nNàxiē liúyán huīyǔ máo wú gēnjù, quán shì mò xū yǒu de.',
    exampleMeaning:
      'Bạn không có bằng chứng xác thực, những cáo buộc của bạn đối với anh ấy là vô căn cứ. \nNhững lời đồn đãi hoàn toàn không có cơ sở, đều là vô căn cứ.',
    arrange: '真凭实证据，/你/没有/对他的/控告，/是/莫须有/的/你\n流言蜚语/莫须有/根据，/毫无/那些/全是/的\n',
  },
  {
    simplified: '磨洋工',
    pinyin: 'mó yánɡ gōnɡ',
    explanation: '工作时拖延时间，也泛指工作懒散拖沓。',
    explanationPinyin: 'Gōngzuò shí tuōyán shíjiān, yě fàn zhǐ gōngzuò lǎnsǎn tuōdá.',
    meaning:
      'Làm việc chểnh mảng\n Làm việc lâu lắc kém năng suất, thường ám chỉ sự lười biếng và trì hoãn trong công việc.',
    examples:
      '老板不愿提高工资，工人们磨起了洋工，用消极来对抗。\n 别在这磨洋工了，没本事早点说，快换个人来。',
    examplePinyin:
      'Lǎobǎn bù yuàn tígāo gōngzī, gōngrénmen mó qǐ le yáng gōng, yòng xiāojí lái duìkàng.\nBié zài zhè mó yáng gōng le, méi běnshì zǎodiǎn shuō, kuài huàn gèrén lái.',
    exampleMeaning:
      'Ông chủ không muốn tăng lương, công nhân đã bắt đầu làm việc chểnh mảng để phản đối.\n Đừng có làm việc chểnh mảng ở đây nữa, nếu không có khả năng thì nói sớm đi, để còn thay người khác.',
    arrange:
      '不愿/老板/工资，/提高/工人们/洋工，/磨起了/消极/用/对抗/来\n在这/没本事/早点/别/磨洋工了，/说，/快换/ 个人/来',
  },
  {
    simplified: '母老虎',
    pinyin: 'mǔ lǎo hǔ',
    explanation: '比喻特别凶的女人。',
    explanationPinyin: 'Bǐyù tèbié xiōng de nǚrén.',
    meaning: 'Hổ cái\n So sánh với những người phụ nữ rất dữ.',
    examples: '他太太简直就是一个“母老虎”。\n 我可不能找个“母老虎”一样的夫人。',
    examplePinyin:
      'Tā tàitài jiǎnzhí jiù shì yīgè “mǔ lǎo hǔ”.\n Wǒ kě bù néng zhǎo gè “mǔ lǎo hǔ” yīyàng de fūrén.',
    exampleMeaning:
      'Vợ anh ấy đúng là một "bà chằn".\n Tôi không thể lấy một người vợ dữ dằn như "bà chằn" được.',
    arrange: '他太太/就是/“母老虎”/一个/简直\n不能/“母老虎”/找个/一样的/我可/夫人\n',
  },
  {
    simplified: '木头人 ',
    pinyin: 'mù tou rén',
    explanation: '比喻愚笨或不灵活的人。',
    explanationPinyin: 'Bǐyù yúbèn huò bù línghuó de rén.',
    meaning: 'Người ngu ngốc hoặc không nhanh nhạy.',
    examples: '真是木头人一个，她的意思，你还没看出来吗?',
    examplePinyin: 'Zhēnshi mù tou rén yīgè, tā de yìsi, nǐ hái méi kàn chūlái ma?',
    exampleMeaning: 'Anh đúng là kẻ khờ, vẫn chưa hiểu ý cô ấy sao?',
    arrange: '木头人/你/真是/她的/还没/一个，/看出来吗/意思，',
  },
  {
    simplified: '母夜叉',
    pinyin: 'mǔ yè chā',
    explanation: '比喻相貌丑陋、凶恶的女人。夜叉，佛教指恶鬼。',
    explanationPinyin: 'Bǐyù xiàngmào chǒulòu, xiōng’è de nǚrén. Yèchā, fójiào zhǐ èguǐ.',
    meaning: 'Người phụ nữ xấu xí và hung dữ, giống như dạ xoa trong Phật giáo.',
    examples: '再不睡，母夜叉要来了，专吃小孩。\n',
    examplePinyin: 'Zàibu shuì, mǔ yè chā yào láile, zhuān chī xiǎohái.',
    exampleMeaning: 'Nếu không ngủ sớm, “mẹ dạ xoa” sẽ đến và bắt những đứa trẻ hư.',
    arrange: '再/母夜叉/要来了，/不睡，/小孩/吃/专',
  },
  {
    simplified: '拿不起来',
    pinyin: 'ná bù qǐ lái',
    explanation: '不能胜任某项工作。',
    explanationPinyin: 'bù néng shèngrèn mǒu xiàng gōngzuò.',
    meaning: 'Không thể đảm đương công việc nào đó.',
    examples:
      '虽然大学毕业，但他到公司实习时表现得不太好，很多工作都拿不起来。\n干了两天后我发现，这个工作需要电子方面的专业知识，而我对此一窍不通，根本拿不起来，只好辞职了。',
    examplePinyin:
      'Suīrán dàxué bìyè, dàn tā dào gōngsī shíxí shí biǎoxiàn de bù tài hǎo, hěnduō gōngzuò dōu ná bù qǐ lái.         \nGànle liǎng tiān hòu wǒ fāxiàn, zhège gōngzuò xūyào diànzǐ fāngmiàn de zhuānyè zhīshì, ér wǒ duìcǐ yī qiào bù tōng, gēn běn ná bù qǐ lái, zhǐhǎo cízhíle.',
    exampleMeaning:
      'Mặc dù đã tốt nghiệp đại học, nhưng khi thực tập ở công ty, anh ấy thể hiện không được tốt, nhiều công việc đều không làm nổi. \nSau hai ngày làm việc, tôi nhận ra công việc này cần kiến thức chuyên môn về điện tử, mà tôi thì hoàn toàn không biết gì, nên đành phải nghỉ việc.',
    arrange:
      '大学毕业，/表现得/不太好，/他/到公司/虽然/实习时/工作/很多/拿不起来/都/但\n两天后/工作/这个/需要/干了/我发现，/电子方面的/专业知识，/辞职了/只好/而我对此/拿不起来，/根本/一窍不通',
  },
  {
    simplified: '拿手戏',
    pinyin: 'ná shǒu xì',
    explanation: '戏剧演员最擅长的剧目。比喻最擅长的本领。也说“拿手好戏”。',
    explanationPinyin:
      'Xìjù yǎnyuán zuì shàncháng de jùmù. Bǐyù zuì shàncháng de běnlǐng. Yě shuō “náshǒu hǎoxì”.',
    meaning:
      'Kịch bản mà diễn viên kịch giỏi nhất. Biểu thị năng lực mà mình giỏi nhất. Cũng nói là“拿手好戏”',
    examples: '我学了几年舞蹈，现在的拿手戏是拉丁舞。\n我会做饭，番茄炒蛋是我的拿手戏。',
    examplePinyin:
      'Wǒ xuéle jǐ nián wǔdǎo, xiànzài de ná shǒu xì shì Lādīng wǔ.\nWǒ huì zuòfàn, fānqié chǎo dàn shì wǒ de ná shǒu xì.',
    exampleMeaning:
      'Tôi đã học nhảy vài năm và sở trường của tôi là nhảy Latin.\nTôi biết nấu ăn, và món ăn tôi nấu ngon nhất là trứng xào cà chua.',
    arrange: '拿手戏/我学了/现在的/几年/拉丁舞/舞蹈，/是\n是/番茄炒蛋/我会做饭，/拿手戏/我的\n',
  },
  {
    simplified: '闹别扭',
    pinyin: 'nào biè niu',
    explanation: '比喻彼此有意见而合不来或故意为难对方。',
    explanationPinyin: 'Bǐyù bǐcǐ yǒu yìjiàn ér hé bù lái huò gùyì wèinán duìfāng.',
    meaning: 'Ví dụ như có ý kiến khác nhau và không hòa hợp với nhau hoặc cố ý gây khó dễ cho đối phương.',
    examples: '他们的友情经常因为小事而闹别扭，然而很快又和好如初。\n她和朋友最近闹别扭，互不说话。',
    examplePinyin:
      'Tāmen de yǒuqíng jīngcháng yīnwèi xiǎoshì ér nào biè niu, ránhòu hěn kuài yòu héhǎo rúchū.\nTā hé péngyǒu zuìjìn nào biè niu, hù bù shuōhuà.\n',
    exampleMeaning:
      'Tình bạn của họ thường vì những chuyện nhỏ nhặt mà xảy ra xích mích, nhưng rồi nhanh chóng làm hòa như chưa từng có gì xảy ra.\nCô ấy và bạn mình gần đây đang giận dỗi, không ai chịu nói với ai.',
    arrange: '友情/小事/常/他们的/因为/而闹别扭，/和好如初/很快/又\n她和朋友/最近/闹别扭，/互不/说话\n',
  },
  {
    simplified: '闹饥荒',
    pinyin: 'nào jī huānɡ',
    explanation: '遇到荒年，比喻经济困难。',
    explanationPinyin: 'Yù dào huāngnián, bǐyù jīngjì kùnnán.',
    meaning: 'Gặp năm mất mùa, ví dụ như khó khăn kinh tế.',
    examples:
      '饮食问题导致的经济困难，让不少家庭开始闹饥荒，生活艰难。\n由于气候变化，很多地方又开始闹饥荒。',
    examplePinyin:
      'Yǐnshí wèntí dǎozhì de jīngjì kùnnán, ràng bù shǎo jiātíng kāishǐ nào jī huāng, shēnghuó jiānnán.\nYóuyú qìhòu biànhuà, hěn duō dìfāng yòu kāishǐ nào jī huāng.',
    exampleMeaning:
      'Các vấn đề liên quan đến thực phẩm đã gây ra khủng hoảng kinh tế, khiến nhiều gia đình rơi vào cảnh thiếu thốn lương thực, cuộc sống trở nên rất khó khăn.\nDo biến đổi khí hậu, nhiều khu vực lại rơi vào tình trạng thiếu ăn trầm trọng.',
    arrange:
      '饮食/不少/让/经济困难，/家庭/问题/生活/开始/艰难/导致的/闹饥荒，\n气候变化，/开始/很多/闹饥荒/又/地方/由于\n',
  },
  {
    simplified: '闹口舌',
    pinyin: 'nào kǒu shé',
    explanation: '比喻发生纠纷、争吵。',
    explanationPinyin: 'Bǐyù fāshēng jiūfēn, zhēngchǎo.',
    meaning: 'Gây ra tranh cãi, xô xát.',
    examples: '小区邻居们为了停车问题频繁闹口舌，大家都觉得很烦。\n他们为了小事闹口舌，真是没必要。',
    examplePinyin:
      'Xiǎoqū línjūmen wèile tíngchē wèntí pínfán nào kǒu shé, dàjiā dōu juéde hěn fán.\nTāmen wèile xiǎoshì nào kǒu shé, zhēnshi méi bìyào.',
    exampleMeaning:
      'Người dân trong khu phố thường xuyên tranh cãi về chỗ đậu xe, khiến ai nấy đều cảm thấy bực bội.\nHọ vì những chuyện không đáng mà tranh cãi, thực sự không cần thiết.',
    arrange:
      '停车问题/邻居们/闹口舌，/频繁/为了/小区/大家/很烦/都/觉得\n为了/小事/闹口舌，/他们/必要/没/真是\n',
  },
  {
    simplified: '闹乱子',
    pinyin: 'nào luàn zi',
    explanation: '惹祸，惹出麻烦。',
    explanationPinyin: 'Rě huò, rě chū máfan.',
    meaning: 'Gây rắc rối, tạo ra phiền phức.',
    examples: '最近项目进展不顺，团队里有人开始闹乱子，让人感到不安。\n不要再闹乱子了，我们需要专注于工作。',
    examplePinyin:
      "Zuìjìn xiàngmù jìnzhǎn bù shùn, tuánduì li yǒurén kāishǐ nào luàn zi, ràng rén gǎndào bù'ān.\nBùyào zài nào luàn zi le, wǒmen xūyào zhuānzhù yú gōngzuò.",
    exampleMeaning:
      'Dự án gần đây gặp nhiều khó khăn, và một số thành viên trong đội bắt đầu gây rối, làm mọi người lo lắng.\nĐừng gây thêm rối loạn nữa, chúng ta cần tập trung vào công việc để hoàn thành mục tiêu.',
    arrange:
      '不顺，/进展/项目/最近/闹乱子，/有人/开始/团队里/让人/感到/不安\n闹乱子了，/再/不要/我们/于/专注/工作/需要\n',
  },
  {
    simplified: '闹摩擦',
    pinyin: 'nào mó cā',
    explanation: '比喻个人或团体之间因彼此利害矛盾而蓄意制造事端，引起冲突。',
    explanationPinyin:
      'Bǐyù gèrén huò tuántǐ zhī jiān yīn bǐcǐ lìhài máodùn ér xùyì zhìzào shìduān, yǐnqǐ chōngtū.',
    meaning:
      'Ví dụ như giữa các cá nhân hoặc tập thể có mâu thuẫn lợi ích mà cố tình tạo ra sự cố, dẫn đến xung đột.',
    examples:
      '办公室内一团和气，大家却因一件小事闹摩擦，气氛变得微妙。\n公司内部有些员工总是闹摩擦，影响了团队合作。',
    examplePinyin:
      'Bàngōngshì nèi yītuán héqì, dàjiā què yīn yī jiàn xiǎoshì nào mócā, qìfēn biàn de wēimiào.\nGōngsī nèibù yǒuxiē yuángōng zǒngshì nào mócā, yǐngxiǎng le tuánduì hézuò.',
    exampleMeaning:
      'Không khí trong văn phòng vốn dĩ rất hòa thuận, nhưng chỉ vì một chuyện nhỏ mà phát sinh mâu thuẫn, khiến bầu không khí trở nên căng thẳng.\nMột số nhân viên trong công ty thường gây mâu thuẫn, ảnh hưởng tiêu cực đến tinh thần hợp tác của cả đội.',
    arrange:
      '和气，/大家/一团/小事/因/闹摩擦，/办公室内/气氛/一件/变得/微妙/却\n闹摩擦，/总是/内部/员工/公司/影响了/合作/有些/团队\n',
  },
  {
    simplified: '闹笑话',
    pinyin: 'nào xiào hua',
    explanation: '因粗心大意或缺乏常识、经验而发生可笑的错误。',
    explanationPinyin: 'Yīn cūxīn dàyì huò quēfá chángshí, jīngyàn ér fāshēng kěxiào de cuòwù.',
    meaning: 'Do bất cẩn hoặc thiếu kiến thức, kinh nghiệm mà gây ra lỗi lầm đáng cười.',
    examples:
      '她在婚礼上闹笑话，竟然把新郎的名字说错了，场面十分尴尬。\n她在派对上闹了个笑话，大家都忍不住笑了。',
    examplePinyin:
      'Tā zài hūnlǐ shàng nào xiào huà, jìngrán bǎ xīnláng de míngzì shuō cuòle, chǎngmiàn shífēn gāngà.\nTā zài pàiduì shàng nàole gè xiào huà, dàjiā dōu rěn bù zhù xiàole.',
    exampleMeaning:
      'Trong lễ cưới, cô ấy gây ra một tình huống ngượng ngùng khi đọc nhầm tên chú rể, khiến mọi người không khỏi bật cười.\nCô ấy đã gây ra một tình huống hài hước trong bữa tiệc, khiến tất cả mọi người phải cười nghiêng ngả.',
    arrange:
      '闹笑话，/在婚礼上/新郎的/她/名字/说错了/，把/场面/十分尴尬/竟然\n在派对上/她/闹了/个笑话，/忍不住/大家/笑了/都\n',
  },
  {
    simplified: '闹着玩儿',
    pinyin: 'nào zhe wánr',
    explanation: '做游戏或戏弄人，比喻用轻率的态度对待人或事情。',
    explanationPinyin: 'Zuò yóuxì huò xìnòng rén, bǐyù yòng qīngshuài de tàidù duìdài rén huò shìqíng.',
    meaning: 'Chơi đùa hoặc trêu chọc người khác, ví dụ như dùng thái độ nhẹ dạ đối với người hay việc.',
    examples: '孩子们在公园里嬉戏打闹，完全是闹着玩儿，笑声此起彼伏。\n我们只是闹着玩儿，并不是真的生气。',
    examplePinyin:
      'Háizimen zài gōngyuán lǐ xīxì dǎnào, wánquán shì nào zhe wánr, xiào shēng cǐqǐ bǐfú.\nWǒmen zhǐshì nào zhe wánr, bìng bùshì zhēn de shēngqì.',
    exampleMeaning:
      'Những đứa trẻ chơi đùa trong công viên, tiếng cười vang lên liên tục, tất cả chỉ là những trò chơi vô tư.\nChúng tôi chỉ đùa cho vui, không hề có ý định giận dỗi thật sự.',
    arrange:
      '嬉戏打闹，/是/孩子们/在公园里/完全/笑声/此起彼伏/的/闹着玩儿，\n真的/只是/不是/闹着玩儿/我们/并/生气\n',
  },
  {
    simplified: '泥腿子',
    pinyin: 'ní tuǐ zi',
    explanation: '指做农活的人。',
    explanationPinyin: 'Zhǐ zuò nónghuó de rén.',
    meaning: 'Chỉ người làm nông.',
    examples:
      '经过努力，他从一个泥腿子变成了成功的商人。\n我以前可是泥腿子，考上了大学，落户在城里，才算从农村中走了出来。',
    examplePinyin:
      'Jīngguò nǔlì, tā cóng yīgè ní tuǐ zi biàn chéngle chénggōng de shāngrén.\nWǒ yǐqián kěshì ní tuǐ zi, kǎo shàngle dàxué, luòhù zài chéng lǐ, cái suàn cóng nóngcūn zhōng zǒule chūlái.',
    exampleMeaning:
      'Sau nhiều nỗ lực, anh ấy đã thoát khỏi cuộc sống nghèo khó ở nông thôn để trở thành một doanh nhân thành công.\nTrước đây, tôi chỉ là một nông dân, nhưng sau khi đỗ đại học và có được chỗ đứng ở thành phố, tôi đã thực sự thoát khỏi cuộc sống làng quê.',
    arrange:
      '泥腿子/努力，/他/变成了/从一个/经过/商人/成功的\n泥腿子，/以前/我/可是/农村/考上了/走了/中/才算/大学，/出来/从/城里，/落户/在\n',
  },
  {
    simplified: '牛皮大王',
    pinyin: 'niú pí dà wánɡ',
    explanation: '指喜欢吹牛、说大话的人。',
    explanationPinyin: 'Zhǐ xǐhuān chuīniú, shuō dàhuà de rén.',
    meaning: 'Chỉ người thích khoe khoang, nói chuyện phóng đại.\n\n',
    examples: '你别相信他的话，他是有名的“牛皮大王”。 \n你这个“牛皮大王”，没有人会相信你。',
    examplePinyin:
      'Nǐ bié xiāngxìn tā dehuà, tā shì yǒumíng de “niú pí dà wáng”. \nNǐ zhège “niú pí dà wáng”, méiyǒu rén huì xiāngxìn nǐ.',
    exampleMeaning:
      'Đừng tin vào những gì anh ta nói, anh ta là một ‘kẻ ba hoa’ nổi tiếng.\nBạn là ‘kẻ ba hoa’, không ai sẽ tin bạn.',
    arrange: '你/他的话，/相信/“牛皮大王”/有名的/是/别/他\n没有人/你这个/“牛皮大王”，/会/相信/你\n',
  },
  {
    simplified: '扭转乾坤',
    pinyin: 'niǔ zhuǎn qián kūn',
    explanation: '指彻底改变局面。',
    explanationPinyin: 'Zhǐ chèdǐ gǎibiàn júmiàn.',
    meaning: 'Lật ngược tình thế\n Ý chỉ việc thay đổi tình hình một cách triệt để.',
    examples:
      '比分差距这么大，想在最后关头扭转乾坤的可能性已经不大了。\n 明王朝的气数已尽，就凭一个袁崇焕，想扭转乾坤，几乎不可能。',
    examplePinyin:
      'Bǐfēn chājù zhème dà, xiǎng zài zuìhòu guāntóu niǔ zhuǎn qián kūn de kěnéng xìng yǐjīng bù dàle.\nMíng wángcháo de qìshu yǐ jìn, jiù píng yīgè Yuán Chónghuàn, xiǎng niǔ zhuǎn qián kūn, jīhū bù kěnéng.',
    exampleMeaning:
      'Khoảng cách điểm số lớn như vậy, khả năng đảo ngược tình thế vào thời điểm cuối đã không còn nhiều.\n Vận mệnh của triều đại Minh đã kết thúc, chỉ dựa vào một người như Nguyên Trung Hoàn, muốn đảo ngược tình thế là gần như không thể.',
    arrange:
      '扭转乾坤/关头/比分/想在/这么大，/的/最后/可能性/已经/差距/不大了。\n气数/就/不可能 /已尽，/几乎/一个/明王朝的/扭转乾坤，/凭/袁崇焕，/想\n',
  },
  {
    simplified: '弄玄虚',
    pinyin: 'nòng xuán xū',
    explanation: '故意弄点花头，迷惑别人',
    explanationPinyin: 'Gùyì nòng diǎn huātóu, míhuò biérén.',
    meaning: 'Cố tình làm điều gì đó để đánh lừa người khác.',
    examples: '他总喜欢弄玄虚，让事情变得复杂。\n你别故弄玄虚了，不就是一个小技艺吗? 我也会。',
    examplePinyin:
      'Tā zǒng xǐhuan nòng xuán xū, ràng shìqíng biàn de fùzá.\nNǐ bié gù nòng xuán xū le, bù jiùshì yīgè xiǎo jìyì ma? Wǒ yě huì.',
    exampleMeaning:
      'Anh ấy luôn thích làm mọi thứ trở nên phức tạp và bí ẩn.\nĐừng cố làm phức tạp vấn đề, chẳng qua chỉ là một kỹ năng nhỏ thôi, tôi cũng biết làm mà.',
    arrange: '总喜欢/事情/变得/弄玄虚，/复杂/让/他\n不就是/故弄玄虚了，/一个/你别/小技艺/吗?/会/也/我\n',
  },
  {
    simplified: '弄潮儿',
    pinyin: 'nònɡ cháo ér',
    explanation: '比喻敢于在风险中拼搏的人。',
    explanationPinyin: 'Bǐyù gǎnyú zài fēngxiǎn zhōng pīnbó de rén.',
    meaning: 'Người dám đối mặt với rủi ro để chiến đấu.',
    examples: '想做时代的弄潮儿，跟我来。',
    examplePinyin: 'Xiǎng zuò shídài de nòng cháo ér, gēn wǒ lái.',
    exampleMeaning: 'Nếu muốn trở thành người dẫn đầu xu thế, hãy đi cùng tôi.',
    arrange: '弄潮儿，/的/跟我来/想做/时代',
  },
  {
    simplified: '拍马屁',
    pinyin: 'pāi mǎ pì',
    explanation: '比喻给别人说好话，谄媚奉承。',
    explanationPinyin: 'Bǐyù gěi biérén shuō hǎohuà, chǎnmèi fèngchéng.',
    meaning: 'Ý chỉ việc khen ngợi người khác, nịnh bợ, khúm núm.',
    examples: '他在会议上总是拍马屁，讨好领导。\n别看他满口原则，实际上谁拍他的马屁，他就把好处给谁。',
    examplePinyin:
      'Tā zài huìyì shàng zǒng shì pāi mǎ pì, tǎohǎo lǐngdǎo.\nBié kàn tā mǎnkǒu yuánzé, shíjì shàng shéi pāi tā de mǎpì, tā jiù bǎ hǎochù gěi shéi.\n',
    exampleMeaning:
      'Anh ấy trong các cuộc họp luôn tâng bốc và nịnh hót cấp trên.\nĐừng để vẻ ngoài nguyên tắc của anh ta đánh lừa, ai nịnh hót anh ta thì sẽ được hưởng lợi.\n',
    arrange:
      '拍马屁，/他/在会议上/总是/领导/讨好。\n原则，/别看/他/满口/实际上/给谁/他的/拍/谁/马屁，/好处/就把/他\n',
  },
  {
    simplified: '攀高枝',
    pinyin: 'pān ɡāo zhī',
    explanation: '比喻巴结或投靠有权势的人。也叫“爬高枝”。',
    explanationPinyin: 'Bǐyù bājié huò tóukào yǒu quánshì de rén. Yě jiào "pá gāo zhī".',
    meaning: 'Kẻ xu nịnh, bợ đỡ người có quyền lực. Cũng gọi là “爬高枝”:leo cành cao.',
    examples: '谁都想多少攀一点高枝，毕竟，竞争太激烈了，机会不多。\n',
    examplePinyin: 'Shuí dōu xiǎng duōshao pān yī diǎn gāo zhī, bìjìng, jìngzhēng tài jīlièle, jīhuì bù duō.',
    exampleMeaning: 'Ai cũng muốn leo lên “cành cao” để tìm cơ hội trong môi trường cạnh tranh khốc liệt.',
    arrange: '攀一点高枝，/太激烈了，/竞争/都想/机会/不多/谁/多少/毕竟，',
  },
  {
    simplified: '跑龙套',
    pinyin: 'pǎo lónɡ tào',
    explanation: '戏曲用语，即扮演随从或兵卒等不重要的角色，现在常用来比喻在人手下打杂。',
    explanationPinyin:
      'Xìqǔ yòngyǔ, jí bànyǎn suícóng huò bīngzú děng bù chóng yào de juésè, xiànzài chángyòng lái bǐyù zài rén shǒuxià dǎzá.',
    meaning:
      'Đóng vai phụ\n Một thuật ngữ opera dùng để chỉ việc đóng một vai trò không quan trọng như một người theo dõi hoặc một người lính. \n Ngày nay, nó thường được dùng để mô tả việc công việc như một người trợ thủ của người khác.',
    examples:
      '他只是个业余演员，常在电视剧里跑跑龙套，但他已经很满足了。\n 这位名导演经常在一些电影中露露脸，跑跑龙套',
    examplePinyin:
      'Tā zhǐshì gè yèyú yǎnyuán, cháng zài diànshìjù lǐ pǎo pǎo lóng tào, dàn tā yǐjīng hěn mǎnzúle.\n Zhè wèi míng dǎoyǎn jīngcháng zài yīxiē diànyǐng zhōng lù lòuliǎn, pǎo pǎo lóng tào.',
    exampleMeaning:
      'Anh ấy chỉ là một diễn viên nghiệp dư, thường đóng vai quần chúng trong phim truyền hình, nhưng anh ấy đã rất hài lòng.\n Vị đạo diễn nổi tiếng này thường xuất hiện với vai trò quần chúng trong một số bộ phim.',
    arrange:
      '跑跑龙套，/的/他/常在/他/个业余/已经/只是/演员，/电视剧里/满足了/很/但\n名导演/露露脸，/一些/电影中/跑跑龙套/这位/经常/在\n',
  },
  {
    simplified: '泡蘑菇',
    pinyin: 'pào mó ɡū',
    explanation: '比喻故意纠缠，拖延时间。',
    explanationPinyin: 'Bǐyù gùyì jiūchán, tuōyán shíjiān.',
    meaning: 'Cù nhầy cù nhựa\n Đó là ẩn dụ cho việc cố ý chậm trễ và trì hoãn thời gian.',
    examples:
      '你别跟他泡蘑菇了，他这人只要主意已定，你就是说破了嘴，他也不会改变的。\n 女儿又在跟她爸爸泡蘑菇了，她爸没办法，只好同意带她去公园。',
    examplePinyin:
      'Nǐ bié gēn tā pào mó gū le, tā zhè rén zhǐyào zhǔyi yǐ dìng, nǐ jiùshì shuōpòle zuǐ, tā yě bù huì gǎibiàn de.\n Nǚ’ér yòu zài gēn tā bàba pào mó gū le, tā bà méi bànfǎ, zhǐhǎo tóngyì dài tā qù gōngyuán.',
    exampleMeaning:
      'Đừng lằng nhằng với anh ta nữa, một khi anh ta đã quyết định thì bạn có nói rã miệng anh ta cũng không thay đổi đâu.\n Con gái lại đang năn nỉ bố, bố nó không còn cách nào khác, đành đồng ý dẫn cô bé đi công viên.',
    arrange:
      '泡蘑菇了，/主意/已定，/只要/别跟他/你/改变的/就是/不会/说破了嘴，/也/他/你/这个人\n爸爸/女儿/没办法，/只好/她爸/同意/带她/公园/她/又/泡蘑菇了，/在跟/去\n',
  },
  {
    simplified: '碰一鼻子灰',
    pinyin: 'pèng yī bí zi huī',
    explanation: '遭到拒绝或斥责，落得没趣。',
    explanationPinyin: 'Zāodào jùjué huò chìzé, luòdé méiqù',
    meaning: 'Bị từ chối hoặc quở trách, cảm thấy chán nản.',
    examples:
      '他去找老板却碰了一鼻子灰，什么都没得到。\n我原想找他借钱渡过难关，没想到碰了一鼻子灰，真是伤心啊。',
    examplePinyin:
      'Tā qù zhǎo lǎobǎn què pèngle yī bí zi huī, shénme dōu méi dédào.\nWǒ yuánxiǎng zhǎo tā jiè qián dùguò nánguān, méi xiǎngdào pèngle yī bí zi huī, zhēnshi shāngxīn a.',
    exampleMeaning:
      'Anh ấy đi tìm sếp nhưng lại bị từ chối thẳng thừng, chẳng được gì cả.\nTôi đã nghĩ anh ấy sẽ giúp tôi vượt qua khó khăn tài chính, nhưng cuối cùng chỉ nhận được sự từ chối lạnh nhạt, thật đau lòng.',
    arrange:
      '碰了/找老板/他去/一鼻子灰，/却/他/都/什么/没得到\n我/借钱/没想到/原想/他/难关，/渡过/一鼻子灰，/找他/真是/碰了/伤心/啊\n',
  },
  {
    simplified: '碰壁',
    pinyin: 'pènɡ bì',
    explanation: '比喻受到阻碍或遭到拒绝。也指事情行不通或达不到目的。',
    explanationPinyin: "Bǐyù shòudào zǔ'ài huò zāo dào jùjué. Yě zhǐ shìqíng xíng bùtōng huò dá bù dào mùdì.",
    meaning:
      'Gặp trở ngại\n Một phép ẩn dụ cho việc gặp chướng ngại hoặc bị từ chối. Cũng có nghĩa là hành động không thực hiện được hoặc không đạt được mục đích.',
    examples:
      '年轻的时候，碰点壁，也许不是坏事。\n 下海了，却四处碰壁，他很留恋过去的时光，毕竟那时，生活还是很安逸的。',
    examplePinyin:
      'Niánqīng de shíhòu, pèng diǎn bì, yěxǔ bù shì huàishì.\n Xiàhǎile, què sìchù pèng bì, tā hěn liúliàn guòqù de shíguāng, bìjìng nà shí, shēnghuó hái shì hěn ānyì de.',
    exampleMeaning:
      'Khi còn trẻ, gặp chút khó khăn, có lẽ không phải là điều xấu.\n Đã dấn thân vào thương trường, nhưng lại gặp khó khăn mọi nơi, anh ta rất nhớ những ngày tháng trước đây, vì lúc đó, cuộc sống vẫn rất an nhàn.',
    arrange:
      '年轻/碰点壁，/不是/坏事/也许/的/时候，\n下海了，/过去的/四处/碰壁，/留恋/却/很/他/毕竟/时光，/还是/生活/安逸/那时，/很\n',
  },
  {
    simplified: '碰钉子',
    pinyin: 'pènɡ dīnɡ zi',
    explanation: '比喻遭到拒绝或受斥责。也说“吃钉子”',
    explanationPinyin: 'bǐyù zāodào jùjué huò shòu chìzé',
    meaning: 'Bị từ chối hoặc bị khiển trách. Cũng nói là “吃钉子”.',
    examples: '简历没有做好，求职时容易碰钉子。\n他正在气头上，你别再去跟他提这事，否则你会碰钉子的。',
    examplePinyin:
      ' Jiǎnlì méiyǒu zuò hǎo, qiúzhí shí róngyì pèng dīng zi. \n Tā zhèngzài qìtóushàng, nǐ bié zài gēn tā tí zhè shì, fǒuzé nǐ huì pèng dīng zi de.',
    exampleMeaning:
      ' Nếu sơ yếu lý lịch không làm tốt, thì khi xin việc dễ gặp phải thất bại. \nAnh ấy đang bực bội, đừng nhắc đến chuyện này nữa, nếu không bạn sẽ gặp rắc rối.',
    arrange:
      '做好，/碰钉子/容易/没有/简历/求职时\n气头上，/正在/提/他/你别去/这事，/跟他/再/否则/碰钉子的/你会\n',
  },
  {
    simplified: '偏心眼',
    pinyin: 'piān xīn yǎn',
    explanation: '偏向、袒护一方面，不公正。',
    explanationPinyin: 'Piānxiàng, tǎnhù yī fāngmiàn, bù gōngzhèng.',
    meaning: 'Thiên vị, không công bằng, bênh vực một bên.',
    examples: '父母多少有点偏心眼，一般会护小的。',
    examplePinyin: 'Fùmǔ duōshǎo yǒudiǎn piān xīn yǎn, yībān huì hù xiǎo de.',
    exampleMeaning: 'Cha mẹ thường có chút thiên vị và hay bảo vệ đứa con nhỏ.',
    arrange: '偏心眼，/有点/父母/一般/会/护小的/多少',
  },
  {
    simplified: '拼命三郎 ',
    pinyin: 'pīn mìnɡ sān lánɡ',
    explanation: '把性命豁出去。谑指竭尽全力、甚至不惜生命去工作的人。',
    explanationPinyin:
      'Bǎ xìngmìng huōchū qù. Xuè zhǐ jiéjìn quánlì, shènzhì bù xī shēngmìng qù gōngzuò de rén.',
    meaning: 'Người làm việc hết sức, không tiếc mạng sống, cống hiến hết mình.',
    examples: '让他这个拼命三郎上场，或许可以反败为胜。',
    examplePinyin: 'Ràng tā zhège pīnmìng sān láng shàng chǎng, huòxǔ kěyǐ fǎnbài wéishèng.',
    exampleMeaning: 'Cho anh ấy ra sân, có lẽ chúng ta sẽ lật ngược tình thế.',
    arrange: '上场，/拼命三郎/反败为胜/他/这个/让/可以/或许',
  },
  {
    simplified: '泼辣货',
    pinyin: 'pō là huò',
    explanation: '谑指能干而又厉害的女人。',
    explanationPinyin: 'Xuè zhǐ néng gàn ér yòu lìhài de nǚrén.',
    meaning: 'Gà mái báo sáng\n Chế nhạo những người phụ nữ tài giỏi và mạnh mẽ.',
    examples: '他娶了个泼辣货，我真替他担心。\n 我们大院泼辣货可多了，可以凑一桌了。',
    examplePinyin:
      'Tā qǔle gè pō là huò, wǒ zhēn tì tā dānxīn.\n Wǒmen dà yuàn pō là huò kě duōle, kěyǐ còu yī zhuōle.',
    exampleMeaning:
      'Anh ta cưới phải người vợ đanh đá, tôi thật lo cho anh ấy.\n Ở khu tập thể này, người đanh đá không thiếu, đủ lập thành một bàn.',
    arrange: '泼辣货，/我/真/他/的/娶了/个/担心/替他\n泼辣货/我们/多了，/大院/的/可/凑一桌/可以/了\n',
  },
  {
    simplified: '泼冷水',
    pinyin: 'pō lěnɡ shuǐ',
    explanation: '用言语或行动打消某人做某事的积极性。',
    explanationPinyin: 'yòng yányǔ huò xíngdòng dǎxiāo mǒu rén zuò mǒu shì de jījíxìng',
    meaning: 'Dùng lời nói hoặc hành động để dập tắt sự hăng hái của ai đó.',
    examples:
      '孩子的这个小发明很有新意，你不要给他泼冷水。\n朋友想买那幅名画，我不忍心泼冷水说是假的，但最后还是忍不住如实告诉了他',
    examplePinyin:
      'Háizi de zhège xiǎo fā míng hěn yǒu xīnyì, nǐ búyào gěi tā pō lěng shuǐ. \nPéngyǒu xiǎng mǎi nà fú mínghuà, wǒ bù rěnxīn pō lěng shuǐ shuō shì jiǎ de, dàn zuìhòu háishì rěn bù zhù rúshí gàosùle tā.',
    exampleMeaning:
      ' Phát minh nhỏ của đứa trẻ này rất mới mẻ, bạn đừng làm nó thất vọng.\n Bạn bè muốn mua bức tranh nổi tiếng đó, tôi không nỡ nói thẳng rằng nó giả, nhưng cuối cùng vẫn không thể không nói thật với anh ấy.',
    arrange:
      '小发明/的/孩子/很有/你不要/新意，/这个/给他/泼冷水。\n那幅名画，/我/朋友/想买/不忍心/他/说/泼冷水/是假的，/但/最后/还是/如实/告诉了/忍不住\n',
  },
  {
    simplified: '破天荒',
    pinyin: 'pò tiān huānɡ',
    explanation: '打破从未开垦过的荒芜状态。比喻事情第一次出现。',
    explanationPinyin: 'Dǎpò cóng wèi kāikěnguò de huāngwú zhuàngtài. Bǐyù shìqíng dì yī cì chūxiàn.',
    meaning:
      'Phá vỡ trạng thái hoang vu chưa từng được khai thác. Biểu thị việc một sự việc xuất hiện lần đầu.',
    examples: '小孩终于开口了，真是破天荒第一次。\n他竟然敢抓小偷，真是破天荒第一次，太伟大了。',
    examplePinyin:
      'Xiǎohái zhōngyú kāikǒule, zhēnshi pò tiān huāng dì yī cì. \nTā jìngrán gǎn zhuā xiǎotōu, zhēnshi pò tiān huāng dì yī cì, tài wěidàle.',
    exampleMeaning:
      'Đứa trẻ cuối cùng đã lên tiếng, đúng là lần đầu tiên hiếm thấy.\nAnh ấy dám bắt kẻ trộm, đúng là lần đầu tiên hiếm thấy, thật vĩ đại.',
    arrange: '小孩/破天荒/真是/开口了，/第一次/终于\n破天荒/太伟大了/抓小偷，/竟然/真是/他/第一次，/敢\n',
  },
  {
    simplified: '菩萨心肠',
    pinyin: 'pú sɑ xīn chánɡ',
    explanation: '心肠像菩萨一样软，见不得人家受苦例。',
    explanationPinyin: 'Xīncháng xiàng Púsà yīyàng ruǎn, jiàn bù dé rénjiā shòu kǔ lì.',
    meaning: 'Tâm Phật\n Tấm lòng độ lượng như Bồ Tát, không chịu được cảnh người khác chịu khổ.',
    examples:
      '这老太太是个菩萨心肠，看不得别人受苦。\n 他怎么变成菩萨心肠了呢? 可能是经历过什么事，内心有了翻天覆地的变化了吧。',
    examplePinyin:
      'Zhè lǎo tàitai shìgè pú sà xīn cháng, kàn bùdé biérén shòukǔ.\nTā zěnme biàn chéng pú sà xīn cháng le ne? Kěnéng shì jīnglìguò shén me shì, nèixīn yǒule fāntiān fùdì de biànhuàle ba.',
    exampleMeaning:
      'Bà cụ này có tấm lòng bồ tát, không chịu được cảnh người khác khổ.\n Sao anh ấy lại có lòng bồ tát thế nhỉ? Có lẽ anh ấy đã trải qua chuyện gì đó và thay đổi hoàn toàn.',
    arrange:
      '看不得/是个/菩萨心肠，/受苦/别人/老太太/这\n菩萨心肠/变成/了呢？/怎么/他/了/是/什么事，/可能/经历过/翻天覆地/的/变化/了吧/内心/有了\n',
  },
  {
    simplified: '骑墙派',
    pinyin: 'qí qiánɡ pài',
    explanation: '比喻立场不明确、站在中间、向两方面讨好的人。',
    explanationPinyin: 'Bǐyù lìchǎng bù míngquè, zhàn zài zhōngjiān, xiàng liǎng fāngmiàn tǎohǎo de rén.',
    meaning: 'Kẻ không rõ lập trường, đứng giữa để lấy lòng cả hai bên.',
    examples: '这伙人是我们单位有名的骑墙派。\n',
    examplePinyin: 'Zhè huǒ rén shì wǒmen dānwèi yǒumíng de qí qiáng pài.',
    exampleMeaning: 'Nhóm này nổi tiếng là những kẻ “đứng giữa,” không đứng về bên nào.',
    arrange: '是/我们/有名的/这伙人/骑墙派/单位',
  },
  {
    simplified: '千里马',
    pinyin: 'qiān lǐ mǎ',
    explanation: '指很有才华、很有能力、很有前途的人。',
    explanationPinyin: 'Zhǐ hěn yǒu cáihuá, hěn yǒu nénglì, hěn yǒu qiántú de rén.',
    meaning: 'Chỉ người có tài năng, khả năng và triển vọng.\n\n',
    examples: '“千里马”也需要伯乐。 \n他是真正的“千里马”，只是暂时没人赏识。',
    examplePinyin:
      '“Qiān lǐ mǎ” yě xūyào bólè. \nTā shì zhēnzhèng de “qiān lǐ mǎ”, zhǐshì zhànshí méi rén shǎngshì.',
    exampleMeaning:
      'Ngựa tốt cũng cần có người biết nhìn.\nAnh ấy là một ‘ngựa tốt’ thực sự, chỉ là hiện tại không ai nhìn nhận.',
    arrange: '伯乐/也/需要/“千里马”\n真正的/他/赏识/没人/是/“千里马”，/只是/暂时\n',
  },
  {
    simplified: '千里眼',
    pinyin: 'qiān lǐ yǎn',
    explanation: '目光敏锐，看得远。',
    explanationPinyin: 'Mùguāng mǐnrui, kàn dé yuǎn',
    meaning: 'Tầm nhìn xa, sắc bén.',
    examples: '她的观察力像千里眼，什么都能看得很清楚。\n你真成千里眼了，我的一举一动你都知道。',
    examplePinyin:
      'Tā de guānchá lì xiàng qiān lǐ yǎn, shénme dōu néng kàn de hěn qīngchǔ.\nNǐ zhēn chéng qiān lǐ yǎn le, wǒ de yījǔ yídòng nǐ dōu zhīdào.',
    exampleMeaning:
      'Khả năng quan sát của cô ấy rất nhạy bén, giống như có "thiên lý nhãn", có thể nhìn thấu mọi việc.\nAnh đúng là có "thiên lý nhãn", việc gì của tôi anh cũng nắm rõ.',
    arrange: '像/千里眼，/观察力/她的/什么/都能/很清楚/看得\n你/真/成/我/的/都知道/你/一举一动/千里眼/了\n',
  },
  {
    simplified: '前怕狼，后怕虎',
    pinyin: 'qián pà lánɡ，hòu pà hǔ',
    explanation: '形容胆小怕事，畏缩不前。',
    explanationPinyin: 'Xíngróng dǎnxiǎo pà shì, wèisuō bù qián.',
    meaning: 'Người nhút nhát, sợ hãi, không dám tiến lên.',
    examples: '前怕狼，后怕虎，还能有什么出息。\n',
    examplePinyin: 'Qián pà láng, hòu pà hǔ, hái néng yǒu shénme chūxī.',
    exampleMeaning: 'Sợ trước sợ sau thì làm được gì chứ?',
    arrange: '出息/有什么/前怕狼，后怕虎，/还能',
  },
  {
    simplified: '牵着鼻子走',
    pinyin: 'qiān zhe bí zi zǒu',
    explanation: '控制、摆布。',
    explanationPinyin: 'Kòngzhì, bǎibù',
    meaning: 'Kiểm soát, điều khiển.',
    examples: '她总是牵着他的鼻子走，他一点主见都没有。\n人生地不熟的，胆子又小，她只能被骗子牵着鼻子走。',
    examplePinyin:
      'Tā zǒng shì qiānzhe tā de bí zi zǒu, tā yīdiǎn zhǔjiàn dōu méiyǒu.\nRénshēng dì bù shú de, dǎnzi yòu xiǎo, tā zhǐ néng bèi piànzi qiān zhe bí zi zǒu.',
    exampleMeaning:
      'Cô ấy luôn thao túng anh ta theo ý mình, anh ta chẳng có chút chính kiến nào.\nỞ nơi xa lạ, không quen ai, lại nhút nhát, cô ấy chỉ biết để kẻ xấu dẫn dắt mình.\n',
    arrange:
      '总是/她/他的/一点/主见/都没有/他/牵着鼻子走\n不熟的，/她/骗子/地/又小，/人生地/被/胆子/只能/牵着鼻子走\n',
  },
  {
    simplified: '枪打出头鸟',
    pinyin: 'qiānɡ dǎ chū tóu niǎo',
    explanation: '露出头来的鸟一定会遭到枪击。比喻首先打击带头的人。',
    explanationPinyin: 'Lùchū tóu lái de niǎo yīdìng huì zāo dào qiāngjī. Bǐyù shǒuxiān dǎjí dàitóu de rén.',
    meaning: 'Con chim ló đầu ra sẽ bị bắn. Biểu thị việc tấn công người dẫn đầu.',
    examples: '你听说过“枪打出头鸟”这句中国的俗语吗? \n我一直记着“枪打出头鸟”这句俗语，所以不想太冒尖了。',
    examplePinyin:
      'Nǐ tīng shuōguò “qiāng dǎ chū tóu niǎo” zhè jù zhōngguó de súyǔ ma? \nWǒ yīzhí jìzhe “qiāng dǎ chū tóu niǎo” zhè jù súyǔ, suǒyǐ bùxiǎng tài màojiānle.',
    exampleMeaning:
      'Bạn đã nghe câu tục ngữ Trung Quốc ‘khẩu súng bắn chim nổi bật’ chưa?\nTôi luôn nhớ câu tục ngữ ‘khẩu súng bắn chim nổi bật’, nên không muốn quá nổi bật.',
    arrange:
      '“枪打出头鸟”/的/听说过/俗语/中国/这句/你/吗?\n记着/“枪打出头鸟”/冒尖了/太/这句/我/一直/不想/所以/俗语，\n',
  },
  {
    simplified: '抢手货',
    pinyin: 'qiǎnɡ shǒu huò',
    explanation: '很受欢迎的东西。',
    explanationPinyin: 'Hěn shòu huānyíng de dōngxī.',
    meaning: 'Những thứ rất được ưa chuộng.',
    examples: '这个新款手机在市场上成为了抢手货。\n寒冬季节，羽绒服成了抢手货。',
    examplePinyin:
      'Zhège xīnkuǎn shǒujī zài shìchǎng shàng chéngwéile qiǎng shǒu huò.\nHándōng jìjié, yǔróngfú chéngle qiǎng shǒu huò.\n',
    exampleMeaning:
      'Chiếc điện thoại mới này trở thành món hàng cực kỳ được săn đón trên thị trường.\nTrong mùa đông lạnh giá, áo khoác lông vũ trở thành mặt hàng bán chạy nhất.',
    arrange: '成为了/新款/抢手货/市场上/在/手机/这个\n成了/抢手货/寒冬季节，/羽绒服\n',
  },
  {
    simplified: '墙头草 ',
    pinyin: 'qiánɡ tóu cǎo',
    explanation: '比喻立场不坚定、缺乏主见、左右动摇的人。',
    explanationPinyin: 'Bǐyù lìchǎng bù jiāndìng, quēfá zhǔjiàn, zuǒyòu dòngyáo de rén.',
    meaning: 'Người thiếu lập trường vững vàng, thiếu ý kiến riêng, dễ bị dao động.',
    examples: '在这个问题上，谁都要发表意见，不许做墙头草。\n',
    examplePinyin: 'Zài zhège wèntí shàng, shuí dōu yào fābiǎo yìjiàn, bùxǔ zuò qiáng tóu cǎo.',
    exampleMeaning: 'Trong chuyện này, ai cũng cần bày tỏ ý kiến, không được làm “cây cỏ đầu tường.”',
    arrange: '“墙头草”/做/意见，/在/谁/发表/问题上，/的/都要/不许/这个',
  },
  {
    simplified: '敲边鼓',
    pinyin: 'qiāo biān ɡǔ',
    explanation: '比喻从旁帮腔，从旁助势。也说“打边鼓”。',
    explanationPinyin: 'Bǐyù cóng páng bāngqiāng, cóng páng zhù shì. Yě shuō “dǎ biān gǔ”.',
    meaning:
      'Cổ vũ, cổ động\n Ẩn dụ cho việc có người khác ở bên cạnh khích lệ, giúp đỡ. Người ta còn gọi là "đánh trống trận".',
    examples: '你别愣着了，帮忙敲敲边鼓吧。\n 敲边鼓要恰到好处，还要不动声色，效果才好。\n ',
    examplePinyin:
      'Nǐ bié lèngzhele, bāngmáng qiāo qiāo biān gǔ ba.\n Qiāo biān gǔ yào qiàdào hǎochù, hái yào bù dòng shēngsè, xiàoguǒ cái hǎo.\n',
    exampleMeaning:
      'Đừng đứng ngẩn ra nữa, giúp tôi hò reo cổ vũ một chút đi.\n Cổ vũ phải đúng cách, lại không thể quá lộ liễu thì hiệu quả mới tốt.\n Đừng luôn cổ vũ tôi nữa, tôi tự biết rồi.',
    arrange:
      '帮忙/了/愣着了，/你别/敲敲边鼓/吧\n敲边鼓/要/才好/恰到好处，/效果/还要/不动声色，\n知道了/我/你别/打边鼓了，/总是/已经/自己\n',
  },
  {
    simplified: '敲门砖',
    pinyin: 'qiāo mén zhuān\n',
    explanation: '比喻谋取名利的初步手段。',
    explanationPinyin: 'Bǐyù móuqǔ mínglì de chūbù shǒuduàn.',
    meaning: 'Bước đầu tiên trong việc tìm kiếm danh lợi.',
    examples: '文凭似乎成了敲门砖，没有它，你就很难敲开一些大公司的门。\n',
    examplePinyin:
      'Wénpíng shìhū chéngle qiāo mén zhuān, méiyǒu tā, nǐ jiù hěn nán qiāo kāi yīxiē dà gōngsī de mén.',
    exampleMeaning: 'Bằng cấp đã trở thành “chìa khóa” mở ra cơ hội vào các công ty lớn.',
    arrange: '成了/敲门砖，/文凭/没有它，/一些/你/敲开/大公司的/就/很难/门/似乎',
  },
  {
    simplified: '翘尾巴',
    pinyin: 'qiào wěi bā',
    explanation: '比喻骄傲自大。',
    explanationPinyin: "Bǐyù jiāo'ào zìdà.",
    meaning: 'Nhìn đời bằng nửa con mắt\n Phép ẩn dụ ý nói việc kiêu ngạo tự phụ.',
    examples: '一点点成绩就翘尾巴，怎么会有大出息?\n 老师说，我儿子上次得了一百分，有点儿翘尾巴。',
    examplePinyin:
      'Yī diǎndiǎn chéngjì jiù qiào wěi bā, zěnme huì yǒu dà chūxī?\n Lǎoshī shuō, wǒ érzi shàng cì déle yībǎi fēn, yǒudiǎnr qiào wěi bā.',
    exampleMeaning:
      'Mới có chút thành tích đã vênh váo, sao mà tiến xa được?\n Cô giáo bảo, con trai tôi lần trước được 100 điểm nên có hơi tự mãn.',
    arrange: '怎么/大出息/一点点/翘尾巴，/成绩/就/会有\n得了/我儿子/一百分，/有点儿/翘尾巴/老师说，/上次\n',
  },
  {
    simplified: '敲竹杠',
    pinyin: 'qiāo zhú gànɡ',
    explanation: '利用别人的弱点敲诈勒索。',
    explanationPinyin: 'Lìyòng biérén de ruòdiǎn qiāozhà lèsuǒ.',
    meaning: 'Lợi dụng điểm yếu của người khác để tống tiền.',
    examples: '\n今天他又被朋友们敲了竹杠，肯定又有什么秘密被别人发现了。',
    examplePinyin:
      '\nJīntiān tā yòu bèi péngyǒumen qiāole zhú gàng, kěndìng yòu yǒu shé me mìmì bèi biérén fà xiàn le.',
    exampleMeaning:
      '\nHôm nay anh lại bị bạn bè tống tiền, chắc chắn lại có bí mật gì đó bị người khác phát hiện.',
    arrange: '\n被/敲了竹杠，/肯定/又/他/今天/朋友们/又有什么/发现了/秘密/被别人\n',
  },
  {
    simplified: '穷光蛋',
    pinyin: 'qiónɡ ɡuānɡ dàn\n',
    explanation: '很穷的人。',
    explanationPinyin: 'Hěn qióng de rén.',
    meaning: 'Người nghèo khổ, túng thiếu.',
    examples: '你嫁给他合适吗? 他可是穷光蛋一个。\n',
    examplePinyin: 'Nǐ jià gěi tā héshì ma? tā kěshì qióng guāng dàn yíge.',
    exampleMeaning: 'Cô chắc chắn muốn cưới anh ta? Anh ta là kẻ nghèo rớt mùng tơi đấy.',
    arrange: '合适/你/嫁给他/吗?/穷光蛋/一个/可是/他',
  },
  {
    simplified: '秋老虎',
    pinyin: 'qiū lǎo hǔ',
    explanation: '比喻立秋以后的炎热天气。',
    explanationPinyin: 'Bǐyù lìqiū yǐhòu de yánrè tiānqì.',
    meaning: 'Biểu thị thời tiết nóng bức sau tiết lập thu.',
    examples: '没想到今年的“秋老虎”这么厉害。 \n立秋以后也不见得凉爽，“秋老虎”厉害着呢。',
    examplePinyin:
      'Méi xiǎngdào jīnnián de “qiū lǎo hǔ” zhème lìhài. \nLìqiū yǐhòu yě bùjiàn dé liángshuǎng,“qiū lǎo hǔ” lìhài zhene.',
    exampleMeaning:
      'Không ngờ năm nay ‘thu muộn’ lại mạnh mẽ như vậy.\nSau khi thu sang cũng không nhất thiết mát mẻ, ‘thu muộn’ vẫn rất mạnh.',
    arrange: '今年的/这么/“秋老虎”/没想到/厉害\n凉爽，/厉害着呢/立秋/见得/以后/“秋老虎”/也不\n',
  },
  {
    simplified: '绕弯子',
    pinyin: 'rào wān zi',
    explanation: '比喻说话、办事不直截了当。也说“绕圈子”。',
    explanationPinyin: 'Bǐyù shuōhuà, bànshì bù zhíjiéliǎodāng. Yě shuō “ràoquānzi”.',
    meaning:
      'Nói vòng vo\n Nghĩa là không nói và làm việc một cách đơn giản trực tiếp. Hay còn gọi là "nói lan man".',
    examples: '有什么要求你就直接说吧，别绕弯子了。\n 他为人正直坦率，说话做事不会绕弯子。',
    examplePinyin:
      'Yǒu shénme yāoqiú nǐ jiù zhíjiē shuō ba, bié rào wān zi le.\n Tā wéirén zhèngzhí tǎnshuài, shuōhuà zuòshì bù huì rào wān zi.',
    exampleMeaning:
      'Có yêu cầu gì thì nói thẳng ra, đừng vòng vo nữa.\n Anh ấy là người chính trực thẳng thắn, không bao giờ nói năng hay làm việc vòng vo.',
    arrange: '绕弯子/有什么/别/你/就/要求/直接/说/吧，/了\n为人/正直/不会/他/说话/绕弯子/坦率，/做事\n',
  },
  {
    simplified: '惹是非',
    pinyin: 'rě shì fēi',
    explanation: '惹麻烦。',
    explanationPinyin: 'rě máfan',
    meaning: 'Gây rắc rối.',
    examples: '多听少动，少惹是非，是比较明智的。\n我不想惹是非，我只是表达我自己的意见而已，听不听由你。',
    examplePinyin:
      'Duō tīng shǎo dòng, shǎo rě shì fēi, shì bǐjiào míngzhì de. \nWǒ bùxiǎng rě shì fēi, wǒ zhǐshì biǎodá wǒ zìjǐ de yìjiàn éryǐ, tīng bù tīng yóu nǐ.',
    exampleMeaning:
      'Nghe nhiều, hành động ít, ít gây rắc rối, là điều khôn ngoan hơn.\nTôi không muốn gây rắc rối, tôi chỉ bày tỏ ý kiến của mình thôi, có nghe hay không thì tùy bạn.',
    arrange:
      '明智的/比较/少惹是非，/多听/是/少动，\n惹是非，/不想/听不听/我只是/由你/意见/表达/我自己的/而已，/我\n',
  },
  {
    simplified: '热心肠',
    pinyin: 'rè xīn chánɡ',
    explanation: '比喻待人处世热情积极。',
    explanationPinyin: 'Bǐyù dàirén chǔshì rèqíng jījí.',
    meaning: 'Ý chỉ người sống nhiệt tình và tích cực.',
    examples:
      '这个社区有很多热心肠的人，他们总是乐于助人。\n热心肠的核心是爱，是一种推己及人、博大无私的爱。',
    examplePinyin:
      'Zhège shèqū yǒu hěnduō rè xīn cháng de rén, tāmen zǒng shì lèyú zhùrén.\nRè xīn cháng de héxīn shì ài, shì yī zhǒng tuījǐ jírén, bódà wúsī de ài.',
    exampleMeaning:
      'Khu dân cư này có rất nhiều người tốt bụng, họ luôn sẵn lòng giúp đỡ người khác.\nLòng tốt thực sự bắt nguồn từ tình yêu thương, là sự yêu thương rộng mở và vô tư dành cho mọi người.\n',
    arrange:
      '有很多/总是/乐于/这个/热心肠/社区/的人，/助人/他们\n是爱，/一种/推己及人、/核心/热心肠/的爱/无私/博大/是\n',
  },
  {
    simplified: '肉中刺',
    pinyin: 'ròu zhōnɡ cì',
    explanation: '比喻最痛恨而急于除掉的人。常与“眼中钉”连用。',
    explanationPinyin: 'Bǐyù zuì tònghèn ér jíyú chúdiào de rén. Cháng yǔ “yǎnzhōng dīng” liányòng.',
    meaning: 'Chỉ người mà mình ghét nhất và muốn nhanh chóng loại bỏ. Thường đi kèm với “眼中钉”.',
    examples:
      '在公司的计划中，反对他的人成了肉中刺。\n他只喜欢听好话，反对他的人，就成了他的肉中刺了，他就会打击报复那些人。',
    examplePinyin:
      'Zài gōngsī de jìhuà zhōng, fǎnduì tā de rén chéngle ròu zhōng cì.\nTā zhǐ xǐhuān tīng hǎohuà, fǎnduì tā de rén, jiù chéngle tā de ròu zhōng cì le, tā jiù huì dǎjī bàofù nàxiē rén.',
    exampleMeaning:
      'Trong kế hoạch của công ty, những người phản đối anh ấy trở thành cái gai trong mắt.\nAnh ta chỉ thích nghe lời nịnh bợ, những ai phản đối sẽ bị coi là cái gai trong mắt và bị anh ta trả đũa.\n',
    arrange:
      '肉中刺/成了/反对他/在公司的/他/计划中，/的人\n听/只喜欢/的人，/好话，/反对他/他的/肉中刺了，/就成了/那些人/他/就会/打击报复\n',
  },
  {
    simplified: '软骨头',
    pinyin: 'ruǎn ɡǔ tou',
    explanation: '比喻没有气节的人。',
    explanationPinyin: 'Bǐyù méiyǒu qìjié de rén.',
    meaning: 'Ý chỉ người không có khí tiết.',
    examples: '在压力面前，他真是个软骨头，完全没有主见。\n他一威胁，你就害怕了，真是个软骨头。',
    examplePinyin:
      'Zài yālì miànqián, tā zhēnshi gè ruǎn gǔ tou, wánquán méiyǒu zhǔjiàn.\nTā yī wēixié, nǐ jiù hàipàle, zhēnshi gè ruǎn gǔ tou.\n',
    exampleMeaning:
      'Trước áp lực, anh ấy đúng là kẻ nhu nhược, chẳng có chút chính kiến nào.\nChỉ cần bị đe dọa một chút, anh đã sợ hãi lùi bước, đúng là kẻ yếu đuối.',
    arrange: '面前，/真是个/压力/软骨头，/完全/没有/他/主见/在\n一威胁，/他/害怕了，/真是/个/软骨头/你就\n',
  },
  {
    simplified: '软心肠',
    pinyin: 'ruǎn xīn chánɡ',
    explanation: '比喻富有同情心、容易受感动的人。',
    explanationPinyin: 'Bǐyù fùyǒu tóngqíngxīn, róngyì shòu gǎndòng de rén.',
    meaning: 'Ý chỉ người có tấm lòng nhân ái, dễ bị cảm động.',
    examples: '他虽然外表严厉，但其实是个软心肠的人。\n她是个软心肠，女儿一哭她就受不了。',
    examplePinyin:
      "Tā suīrán wàibiǎo yánlì, dàn qíshí shìgè ruǎn xīn cháng de rén.\nTā shìgè ruǎn xīn cháng, nǚ'ér yī kū tā jiù shòu bùliǎo.\n",
    exampleMeaning:
      'Dù bề ngoài nghiêm khắc, anh ấy thực chất là người rất mềm lòng.\nCô ấy rất dễ mềm lòng, mỗi khi con gái khóc, cô không thể chịu nổi.',
    arrange: '外表/他/其实/是个/软心肠/的人/严厉。/虽然\n女儿/软心肠，/受不了/一哭/是个/她/她就\n',
  },
  {
    simplified: '软硬不吃',
    pinyin: 'ruǎn yìnɡ bù chī',
    explanation: '指与对方谈判或处理问题时态度很强硬，什么方法均不能使其改变态度。',
    explanationPinyin: 'tàidù hěn qiángyìng, shénme fāngfǎ jūn bùnéng shǐ qí gǎibiàn tàidù',
    meaning: 'Chỉ thái độ cứng rắn trong thương lượng, không chịu thay đổi.',
    examples: '这家伙真是顽固，罚也罚了，好话也说了，他就是软硬不吃。\n这孩子，软硬不吃，真拿他没办法。',
    examplePinyin:
      'Zhè jiāhuo zhēnshi wángù, fá yě fále, hǎohuà yě shuōle, tā jiùshì ruǎn yì bù chī. \nZhè háizǐ, ruǎn yì bù chī, zhēn ná tā méi bànfǎ.',
    exampleMeaning:
      'Gã này thật bướng bỉnh, đã bị phạt, nói khéo cũng không nghe, anh ta thật sự không chịu nghe lời. \nĐứa trẻ này, thật sự là không dễ bảo, đúng là không có cách nào.',
    arrange:
      '软硬不吃/好话/这家伙/也说了，/罚也罚了/就是/真是/他/顽固，\n软硬不吃，/这孩子，/拿他/没办法/真\n',
  },
  {
    simplified: '撒手锏 ',
    pinyin: 'sā shǒu jiǎn\n',
    explanation:
      '锏，古代兵器。旧小说中指厮杀时出其不意地用锏投向敌人的招数。\n比喻最关键的时刻使出最拿手的招数。',
    explanationPinyin:
      'Jiǎn, gǔdài bīngqì. Jiù xiǎoshuō zhōng zhǐ sīshā shí chū qí yì dì yòng jiǎn tóu xiàng dírén de zhāoshù. Bǐyù zuì guānjiàn de shíkè shǐchū zuì náshǒu de zhāoshù.',
    meaning:
      'Tuyệt chiêu dùng trong thời khắc quan trọng, giống như trong tiểu thuyết cổ khi bất ngờ ném binh khí "chùy" vào đối thủ.',
    examples: '别看他现在处于劣势，说不定会有撒手锏。\n\n',
    examplePinyin: 'Bié kàn tā xiànzài chǔyú lièshì, shuō bu dìng huì yǒu sā shǒu jiǎn.',
    exampleMeaning:
      'Đừng vội coi thường vì anh ta đang yếu thế, chưa biết chừng anh ấy sẽ tung ra tuyệt chiêu bất ngờ.',
    arrange: '撒手锏/说不定/劣势，/处于/他/现在/别看/会有',
  },
  {
    simplified: '三只手',
    pinyin: 'sān zhī shǒu',
    explanation: '指小偷。',
    explanationPinyin: 'Zhǐ xiǎotōu.',
    meaning: 'Nói về kẻ trộm.',
    examples:
      '他在地铁上被小偷盯上，果然是个三只手。\n上车、下车是三只手施展手脚的高峰，你要小心身上带的钱啊!',
    examplePinyin:
      'Tā zài dìtiě shàng bèi xiǎotōu dīng shàng, guǒrán shìgè sān zhī shǒu.\nShàng chē, xià chē shì sān zhī shǒu shīzhǎn shǒujiǎo de gāofēng, nǐ yào xiǎoxīn shēnshang dài de qián a!',
    exampleMeaning:
      'Anh ta bị trộm để ý trên tàu điện ngầm, quả đúng là gặp phải tay móc túi chuyên nghiệp.\nGiờ cao điểm lên xuống tàu là thời điểm tốt nhất để bọn móc túi ra tay, hãy cẩn thận với tiền bạc của mình.',
    arrange:
      '三只手/他/被/是个/在地铁上/盯上，/小偷/果然\n三只手/的/高峰，/施展/身上/下车/小心/上车、/手脚/带的钱/啊/是/要\n',
  },
  {
    simplified: '丧门神',
    pinyin: 'sānɡ mén shén',
    explanation: '星相家所说的凶神，负责死丧哭泣。比喻给人带来灾祸、不祥的人。',
    explanationPinyin:
      'Xīngxiàng jiā suǒ shuō de xiōngshén, fùzé sǐ sāng kūqì. Bǐyù gěi rén dàilái zāihuò, bùxiáng de rén.',
    meaning: 'Kẻ mang đến xui xẻo, thường ám chỉ người gây tai họa cho người khác.',
    examples: '别哭了，丧门神一个，真晦气。\n',
    examplePinyin: 'Bié kūle, sāng mén shén yīge, zhēn huìqì.',
    exampleMeaning: 'Đừng khóc nữa, trông cậu chẳng khác gì một “thần xui xẻo”, thật không may mắn chút nào.',
    arrange: '丧门神/一个，/别哭了，/真/晦气',
  },
  {
    simplified: '煞风景',
    pinyin: 'shā fēnɡ jǐnɡ',
    explanation: '破坏美好的景色。比喻使人败兴。',
    explanationPinyin: 'Pòhuài měihǎo de jǐngsè. Bǐyù shǐ rén bàixìng.',
    meaning: 'Làm hỏng cảnh đẹp, khiến người khác mất hứng.',
    examples: '小区乱搭违章建筑，真是煞风景。',
    examplePinyin: 'Xiǎoqū luàn dā wēizhāng jiànzhù, zhēnshi shā fēng jǐng.',
    exampleMeaning: 'Những công trình trái phép mọc lên trong khu phố khiến cảnh quan thật xấu xí.',
    arrange: '违章建筑，/小区/真是/煞风景/乱搭',
  },
  {
    simplified: '煽风点火 ',
    pinyin: 'shān fēnɡ diǎn huǒ',
    explanation: '比喻怂恿鼓动，挑起事端; 煽动别人闹事。',
    explanationPinyin: 'Bǐyù sǒngyǒng gǔdòng, tiǎo qǐ shìduān; shāndòng biérén nào shì.',
    meaning: 'Xúi giục, kích động gây rối hoặc làm loạn.',
    examples: '都这么紧张了，你还煽风点火。',
    examplePinyin: 'Dōu zhème jǐnzhāngle, nǐ hái shān fēng diǎn huǒ.',
    exampleMeaning: 'Tình hình đã căng thẳng mà anh ấy còn xúi giục, khiến mọi chuyện tệ hơn.',
    arrange: '紧张了，/都这么/还/煽风点火/你',
  },
  {
    simplified: '伤脑筋',
    pinyin: 'shānɡ nǎo jīn',
    explanation: '比喻事情难办，费心思。',
    explanationPinyin: 'Bǐyù shìqíng nán bàn, fèi xīnsī.',
    meaning: 'Ngụ ý rằng việc khó khăn, tốn nhiều tâm sức.',
    examples: '资金链几乎要断裂，伤透了老板的脑筋。\n孩子不听管教，父母很伤脑筋。',
    examplePinyin:
      'Zījīn liàn jīhū yào duànliè, shāng tòule lǎobǎn de nǎo jīn. \nHáizǐ bù tīng guǎnjiào, fùmǔ hěn shāng nǎo jīn.',
    exampleMeaning:
      'Chuỗi tài chính gần như đứt gãy, khiến ông chủ đau đầu.\nĐứa trẻ không nghe lời, khiến cha mẹ rất đau đầu.',
    arrange: '\n资金链/伤透了/要/断裂，/脑筋/老板的/几乎\n孩子/不听/伤脑筋/父母/管教，/很',
  },
  {
    simplified: '上台阶 ',
    pinyin: 'shànɡ tái jiē\n',
    explanation: '比喻达到一个新的更高的水平。',
    explanationPinyin: 'Bǐyù dádào yīgè xīn de gèng gāo de shuǐpíng.',
    meaning: 'Đạt đến một trình độ hoặc đẳng cấp mới, cao hơn.',
    examples: '我们厂的产品质量要想再上一个新台阶，我们就必须集中力量进行技术攻关。\n',
    examplePinyin:
      'Wǒmen chǎng de chǎnpǐn zhì liàng yào xiǎng zài shàng yīge xīn táijiē, wǒmen jiù bìxū jízhōng lìliàng jìnxíng jìshù gōngguān."',
    exampleMeaning: 'Nếu muốn nâng cao chất lượng sản phẩm, chúng tôi phải tập trung phát triển công nghệ.',
    arrange: '质量/产品/我们厂的/新台阶，/一个/上/力量/要想/再/必须/攻关/技术/我们/进行/集中',
  },
  {
    simplified: '射冷箭',
    pinyin: 'shè lěnɡ jiàn',
    explanation: '比喻暗中害人。',
    explanationPinyin: 'Bǐyù ànzhōng hài rén.',
    meaning: 'Ném đá giấu tay\n Ý chỉ việc âm thầm hại người.',
    examples: '背后向人射冷箭，这是小人的做派。\n 官场不好混，常有人突射冷箭。',
    examplePinyin:
      'Bèihòu xiàng rén shè lěng jiàn, zhè shì xiǎo rén de zuò pài.\nGuānchǎng bù hǎo hùn, cháng yǒurén tú shè lěng jiàn.',
    exampleMeaning:
      'Đâm lén sau lưng là hành vi của kẻ tiểu nhân.\n Trên quan trường không dễ sống, thường có người chơi xấu bất ngờ.',
    arrange: '向人/背后/小人/的/射冷箭，/这是/做派\n常有人/官场/不好混，/射冷箭/突\n',
  },
  {
    simplified: '神不知，鬼不觉',
    pinyin: 'shén bù zhī ，guǐ bù jué',
    explanation: '形容做事极为隐秘，别人一点也不知道。',
    explanationPinyin: 'Xíngróng zuòshì jí wéi yǐnmì, biérén yīdiǎn yě bù zhīdào.',
    meaning: 'Làm việc kín đáo đến mức không ai biết.',
    examples: '我们的主力部队神不知，鬼不觉地，摸到了敌人的老窝。\n',
    examplePinyin: 'Wǒmen de zhǔlì bùduì shén bù zhī, guǐ bù jué de, mō dàole dírén de lǎowō.',
    exampleMeaning: 'Đội chủ lực của chúng tôi đã âm thầm tiến vào căn cứ địch mà không ai hay biết.',
    arrange: '主力/老窝/敌人的/摸到了/我们的/神不知，鬼不觉地，/部队',
  },
  {
    simplified: '神算子',
    pinyin: 'shén suàn zǐ',
    explanation: '算命准的人。',
    explanationPinyin: 'Suànmìng zhǔn de rén.',
    meaning: 'Người có khả năng xem bói chuẩn xác.',
    examples: '请镇上的神算子算算吧，近来有没有好运气。\n',
    examplePinyin: 'Qǐng zhèn shàng de shén suàn zǐ suàn suàn ba, jìnlái yǒu méiyǒu hǎo yùnqì.',
    exampleMeaning: 'Hãy nhờ thầy “神算子” của thị trấn tính xem liệu sắp tới có vận may nào không.',
    arrange: '算算吧，/有没有/运气/神算子/近来/请/镇上的/好',
  },
  {
    simplified: '事后诸葛亮',
    pinyin: 'shì hòu zhū gé liànɡ',
    explanation:
      '比喻事情过后才明白过来或想出主张或办法的人。诸葛亮是三国时蜀汉政治家，\n 《三国演义》对他的智谋多有渲染。后常用他代表足智多谋的人。',
    explanationPinyin:
      'Bǐyù shìqíng guòhòu cái míngbái guòlái huò xiǎngchū zhǔzhāng huò bànfǎ de rén.\n Zhūgě Liàng shì Sānguó shí Shǔ Hàn zhèngzhìjiā, “Sānguó yǎnyì” duì tā de zhìmó duō yǒu xuànrǎn. Hòu cháng yòng tā dàibiǎo zúzhì duōmóu de rén.',
    meaning:
      'Ẩn dụ nói đến những người chỉ hiểu ra hoặc nghĩ ra phương án sau khi sự việc đã xảy ra.\n Gia Cát Lượng là chính trị gia thời Tam Quốc, "Tam Quốc Diễn Nghĩa" đã ngợi ca trí tuệ của ông. Sau này thường dùng ông để đại biểu cho người khôn ngoan.',
    examples: '现在你事后诸葛亮了，刚才你怎么没想出办法呢?\n 我就知道你是事后诸葛亮，这谁不会呀?',
    examplePinyin:
      'Xiànzài nǐ shì shì hòu zhū gé liàngle, gāngcái nǐ zěnme méi xiǎng chū bànfǎ ne?\nWǒ jiù zhīdào nǐ shì shì hòu zhū gé liàng, zhè shéi bù huì a?',
    exampleMeaning:
      'Giờ cậu tỏ ra thông minh sau sự việc, lúc trước sao không nghĩ ra cách?\n Tôi biết ngay cậu chỉ giỏi sau sự việc, ai mà không làm được.',
    arrange:
      '事后诸葛亮了，/刚才/没想出/你怎么/知道/是/现在/办法/呢\n这谁/事后诸葛亮，/你是/我/一直/呀/不会/就/知道\n',
  },
  {
    simplified: '试金石',
    pinyin: 'shì jīn shí',
    explanation: '一种矿石，非常坚硬，可以用来检验黄金的成色。比喻精确可靠的检\n验方法或标准。',
    explanationPinyin:
      'Yī zhǒng kuàngshí, fēicháng jiānyìng, kěyǐ yòng lái jiǎnyàn huángjīn de chéngsè. Bǐyù jīngquè kěkào de jiǎnyàn fāngfǎ huò biāozhǔn.',
    meaning:
      'Một loại khoáng sản rất cứng dùng để kiểm tra độ tinh khiết của vàng, ví với phương pháp hoặc tiêu chuẩn đánh giá chính xác, đáng tin cậy.',
    examples: '实践是一块试金石，能检验一切。\n',
    examplePinyin: 'Shíjiàn shì yīkuài shì jīn shí, néng jiǎnyàn yīqiè."',
    exampleMeaning: 'Thực tiễn là “đá thử vàng”, giúp kiểm nghiệm mọi điều.',
    arrange: '试金石，/一切/能/实践/检验/是/一块',
  },
  {
    simplified: '势利眼',
    pinyin: 'shì lì yǎn',
    explanation: '按财产、地位对人采取不同态度。',
    explanationPinyin: 'Àn cáichǎn, dìwèi duì rén cǎiqǔ bùtóng tàidù',
    meaning: 'Đối xử với người khác theo tài sản và địa vị.',
    examples: '他是个势利眼，只喜欢跟有钱人交往。\n他原来很朴实，混迹官场几年后，居然变成了势利眼。',
    examplePinyin:
      'Tā shìgè shì lì yǎn, zhǐ xǐhuan gēn yǒu qián rén jiāowǎng.\nTā yuánlái hěn pǔshí, hùnjì guānchǎng jǐ nián hòu, jūrán biànn chéngle shì lì yǎn.',
    exampleMeaning:
      'Anh ấy là người thực dụng, chỉ thích giao du với người giàu có.\nTrước đây anh ta rất chất phác, nhưng sau vài năm trong chốn quan trường, lại biến thành kẻ thực dụng.\n',
    arrange:
      '只喜欢/有钱人/他/交往/势利眼，/是个/跟\n朴实，/他/很/原来/几年后，/混迹/居然/官场/势利眼/变成了\n',
  },
  {
    simplified: '实心眼儿',
    pinyin: 'shí xīn yǎnr',
    explanation: '老实忠厚、不滑头的人。',
    explanationPinyin: 'Lǎoshí zhōng hòu, bù huá tóu de rén.',
    meaning: 'Chân chất\n Người thật thà, chất phác, không lươn lẹo.',
    examples: '你应该相信他，他可是个实心眼儿。\n 实心眼儿的人靠得住，我推荐他，准没错。',
    examplePinyin:
      'Nǐ yīnggāi xiāngxìn tā, tā kěshìgè shí xīn yǎnr.\n Shí xīn yǎnr de rén kàodezhù, wǒ tuījiàn tā, zhǔn méi cuò.',
    exampleMeaning:
      'Cậu nên tin anh ta, vì anh ấy là người thật thà.\n Người thật thà đáng tin cậy, tôi bảo đảm anh ấy sẽ không làm cậu thất vọng.',
    arrange: '他/相信他，/你/可是个/实心眼儿/应该\n靠得住，/推荐他/实心眼儿/准没错/我/的人\n',
  },
  {
    simplified: '十一路',
    pinyin: 'shí yī lù',
    explanation: '谑指双腿。',
    explanationPinyin: 'Xuè zhǐ shuāng tuǐ.',
    meaning: 'Mô tả việc đi bộ.',
    examples:
      '我选择十一路出门，既锻炼身体又省钱。\n我不喜欢挤车，出门就是十一路，既锻炼身体，又节约车费，一举两得。',
    examplePinyin:
      'Wǒ xuǎnzé shí yī lù chūmén, jì duànliàn shēntǐ yòu shěng qián.\nWǒ bù xǐhuan jǐ chē, chūmén jiùshì shí yī lù, jì duànliàn shēntǐ, yòu jiéyuē chē fèi, yījǔliǎngdé.',
    exampleMeaning:
      'Tôi chọn đi bộ để rèn luyện sức khỏe và tiết kiệm tiền.\nTôi không thích chen chúc trên xe, đi bộ vừa tốt cho sức khỏe vừa tiết kiệm chi phí, một công đôi việc.',
    arrange:
      '十一路/身体/又省钱/既/锻炼/出门，/选择/我/了\n十一路，/身体，/挤车/节约/出门/锻炼/车费，/我/就是/不喜欢/一举两得/既/又\n',
  },
  {
    simplified: '守本分',
    pinyin: 'shǒu běn fèn',
    explanation: '老实，符合自己的身份。',
    explanationPinyin: 'Lǎoshí, fúhé zìjǐ de shēnfèn.',
    meaning: 'Thành thật, phù hợp với thân phận của bản thân.',
    examples: '守本分的女人，最受男人欣赏。 \n这个农民很守本分，不会胡来的。',
    examplePinyin:
      'Shǒu běn fèn de nǚrén, zuì shòu nánrén xīnshǎng. \nZhège nóngmín hěn shǒu běn fèn, bù huì húlái de.',
    exampleMeaning:
      'Người phụ nữ giữ đúng bổn phận, nhận được sự quý trọng nhất của đàn ông.\nNgười nông dân này rất giữ bổn phận, sẽ không làm bừa.',
    arrange: '最/守本分/男人/的/欣赏/受/女人/。/\n守本分/胡来/不会/农民/这个/很/的/。/',
  },
  {
    simplified: '书虫儿',
    pinyin: 'shū chónɡr',
    explanation: '指特别喜欢读书的人。',
    explanationPinyin: 'Zhǐ tèbié xǐhuān dúshū de rén.',
    meaning: 'Mọt sách\n Chỉ những người đặc biệt thích đọc sách.',
    examples: '这孩子就是个“书虫儿”，成天书不离手。\n 你怎么像“书虫儿”似的，出去透透气吧。',
    examplePinyin:
      'Zhè háizǐ jiùshì gè “shū chóngr”, chéng tiānshū bùlí shǒu.\n Nǐ zěnme xiàng “shū chóngr” sì de, chūqù tòu tòuqì ba.',
    exampleMeaning:
      'Đứa trẻ này đúng là "mọt sách", cả ngày không rời quyển sách.\n Sao cậu cứ như "mọt sách" thế, ra ngoài hít thở không khí đi chứ.',
    arrange: '书不离手/这孩子/的/成天/是个/就/书虫儿/。/\n出去/像/你/的/透透气/怎么/书虫儿/似的/。/',
  },
  {
    simplified: '书呆子',
    pinyin: 'shū dāi zi',
    explanation: '指不懂得联系实际、只知道啃书本的人。',
    explanationPinyin: 'Zhǐ bù dǒngdé liánxì shíjì, zhǐ zhīdào kěn shūběn de rén.',
    meaning: 'Người văn vở\n Chỉ những người không biết liên hệ thực tế, chỉ biết mải mê đọc sách.',
    examples:
      '他可是个书呆子，除了看书，别的一窍不通。\n 我是个书呆子，只知道探讨理论，遇到实际问题就束手无策了。',
    examplePinyin:
      'Tā kěshì gè shū dāi zi, chúle kàn shū, bié de yī qiào bù tōng.\n Wǒ shì gè shū dāi zi, zhǐ zhīdào tàntǎo lǐlùn, yù dào shíjì wèntí jiù shùshǒu wúcèle.',
    exampleMeaning:
      'Anh ta đúng là mọt sách, ngoài đọc sách ra không biết làm gì khác.\n Tôi cũng là mọt sách, chỉ biết bàn lý thuyết, gặp vấn đề thực tế thì bất lực.\n Don Quixote thực ra là một mọt sách rất thật thà.',
    arrange:
      '书呆子/他/是个/别的/懂/看书/一窍不/的/除了/。/\n探讨理论/我是/的/遇到/问题/束手无策/书呆子/只知道/实际/个/。/\n老实/书呆子/堂吉诃德/是个/的/其实/十分/。/',
  },
  {
    simplified: '耍把戏',
    pinyin: 'shuǎ bǎ xì',
    explanation: '表演魔术、杂技，比喻使用蒙骗人的手段。也说“玩把戏”。',
    explanationPinyin: 'Biǎoyǎn móshù, zájì, bǐyù shǐyòng mēng piàn rén de shǒuduàn.Yě shuō "wán bǎ xì"',
    meaning: 'Biểu diễn ảo thuật, xiếc; ví dụ như sử dụng thủ đoạn lừa gạt. Cũng nói là 也说“玩把戏”.',
    examples: '在街头表演时，他总能耍把戏，吸引了不少观众围观。\n他在舞台上耍把戏，观众们都看得很开心。',
    examplePinyin:
      'Zài jiētóu biǎoyǎn shí, tā zǒng néng shuǎ bǎ xì, xī yǐn le bù shǎo guānzhòng wéiguān.\nTā zài wǔtái shàng shuǎ bǎ xì, guānzhòngmen dōu kàn dé hěn kāixīn.\n',
    exampleMeaning:
      'Khi biểu diễn trên đường phố, anh ta luôn dùng những trò khéo léo, thu hút nhiều khán giả đến xem.\nTrên sân khấu, anh ta biểu diễn những trò vui nhộn, khiến khán giả cảm thấy rất thích thú.',
    arrange:
      '耍把戏/他/的/在/不少/吸引了/围观/街头表演/时/观众/总能/。/\n耍把戏/舞台上/看得/观众们/都/他/的/很/开心/。/',
  },
  {
    simplified: '耍笔杆',
    pinyin: 'shuǎ bǐ ɡǎn',
    explanation: '用笔写东西，比喻从事文秘工作或写文章。',
    explanationPinyin: 'Yòng bǐ xiě dōngxī, bǐyù cóngshì wénmì gōngzuò huò xiě wénzhāng.',
    meaning: 'Viết văn, giấy tờ; ví dụ như làm công việc văn phòng hoặc viết bài.',
    examples: '每当写报告时，他就开始耍笔杆，充分展示自己的文采。\n她在大学时耍笔杆，发表了很多优秀的文章。',
    examplePinyin:
      'Měi dāng xiě bàogào shí, tā jiù kāishǐ shuǎ bǐ gǎn, chōngfèn zhǎnshì zìjǐ de wéncǎi.\nTā zài dàxué shí shuǎ bǐ gǎn, fābiǎole hěnduō yōuxiù de wénzhāng.\n',
    exampleMeaning:
      'Mỗi lần viết báo cáo, anh ấy lại thể hiện khả năng viết lách tuyệt vời của mình.\nKhi còn học đại học, cô ấy thường viết nhiều bài báo xuất sắc và được đăng tải.',
    arrange:
      '耍笔杆/他/文采/充分/每当/写报告/自己的/时/开始/展示/。/\n耍笔杆/她/发表了/大学时/很多/优秀的/文章/的/在/。/',
  },
  {
    simplified: '耍花腔',
    pinyin: 'shuǎ huā qiānɡ',
    explanation: '比喻用花言巧语骗人。',
    explanationPinyin: 'Bǐyù yòng huāyán qiǎoyǔ piàn rén.',
    meaning: 'Dùng lời lẽ hoa mỹ để lừa người.',
    examples: '在辩论赛上，他总是耍花腔，试图用复杂的语言迷惑对手。\n他讲话总爱耍花腔，让人听得一头雾水。',
    examplePinyin:
      'Zài biànlùn sài shàng, tā zǒng shì shuǎ huā qiāng, shìtú yòng fùzá de yǔyán míhuò duìshǒu.\nTā jiǎnghuà zǒng ài shuǎ huā qiāng, ràng rén tīng de yītóu wùshuǐ.\n',
    exampleMeaning:
      'Trong cuộc thi tranh luận, anh ta thường dùng từ ngữ phức tạp để làm đối thủ bối rối.\nAnh ta luôn dùng lời nói phức tạp, khiến người nghe không hiểu được ý anh muốn truyền tải.\n',
    arrange:
      '耍花腔/他/语言/辩论赛上/用/在/的/迷惑/复杂的/对手/时/总是/。/\n耍花腔/一头雾水/他/的/总爱/讲话/让人/听得/。/',
  },
  {
    simplified: '耍滑头',
    pinyin: 'shuǎ huá tóu',
    explanation: '指使用手段使自己省力或免负责任。',
    explanationPinyin: 'Zhǐ shǐyòng shǒuduàn shǐ zìjǐ shěng lì huò miǎn fù zérèn.',
    meaning: 'Chỉ dùng phương pháp để làm cho bản thân đỡ mệt hoặc không chịu trách nhiệm.',
    examples: '他习惯性耍滑头，从不真正参与团队合作，总是想省力。\n他在工作中耍滑头，试图逃避责任。',
    examplePinyin:
      'Tā xíguàn xìng shuǎ huá tóu, cóng bù zhēnzhèng cānyù tuánduì hézuò, zǒng shì xiǎng shěnglì.\nTā zài gōngzuò zhōng shuǎ huá tóu, shìtú táobì zérèn.',
    exampleMeaning:
      'Anh ta thường tìm cách lẩn tránh công việc, không thực sự tham gia vào hợp tác nhóm.\nTrong công việc, anh ta luôn cố né tránh trách nhiệm và tìm cách thoái thác.',
    arrange:
      '耍滑头/团队/习惯性/他/从不/的/总是/参与/真正/合作/想/省力/。/\n耍滑头/他/逃避/在/工作中/试图/责任/。/',
  },
  {
    simplified: '耍花招',
    pinyin: 'shuǎ huā zhāo',
    explanation: '比喻玩弄欺骗手段、计策等。',
    explanationPinyin: 'Bǐyù wánnòng qīpiàn shǒuduàn, jìcè děng.',
    meaning: 'Chơi đùa bằng cách dùng thủ đoạn lừa gạt, mưu mẹo.',
    examples: '她在工作中耍花招，结果被同事们识破，失去了信任。\n她在比赛中耍花招，试图用不正当手段获胜。',
    examplePinyin:
      'Tā zài gōngzuò zhōng shuǎ huā zhāo, jiéguǒ bèi tóngshìmen shípò, shīqùle xìnrèn.\nTā zài bǐsài zhōng shuǎ huā zhāo, shìtú yòng bù zhèngdàng shǒuduàn huòshèng.',
    exampleMeaning:
      'Cô ấy sử dụng thủ đoạn trong công việc nhưng bị đồng nghiệp phát hiện, dẫn đến mất lòng tin.\nTrong cuộc thi, cô ấy dùng chiêu trò không hợp lệ để giành chiến thắng.\n',
    arrange:
      '耍花招/同事们/她/信任/识破/的/结果/工作中/失去/在/。/\n耍花招/她/比赛中/获胜/用/不正当手段/的/在/试图/。/',
  },
  {
    simplified: '耍赖皮',
    pinyin: 'shuǎ lài pí',
    explanation: '做事奸诈，不讲道理。',
    explanationPinyin: 'Zuòshì jiānzhà, bù jiǎng dàolǐ.',
    meaning: 'Làm việc gian xảo, không nói lý lẽ.',
    examples: '朋友间的争论，他却开始耍赖皮，不愿意承认自己的错误。\n他总是耍赖皮，根本不想承担责任。',
    examplePinyin:
      'Péngyǒu jiān de zhēnglùn, tā què kāishǐ shuǎ lài pí, bù yuànyì chéngrèn zìjǐ de cuòwù.\nTā zǒng shì shuǎ lài pí, gēnběn bùxiǎng chéngdān zérèn.',
    exampleMeaning:
      'Khi tranh cãi với bạn bè, anh ta lại giở trò ngang ngược, không chịu nhận lỗi.\nAnh ta luôn dùng mánh khóe để trốn tránh trách nhiệm, chẳng bao giờ chịu gánh vác.\n',
    arrange:
      '耍赖皮/争论/不愿意/朋友间/开始/自己的/他/承认/的/错误/。/\n耍赖皮/根本/他/责任/承担/总是/不想/。/',
  },
  {
    simplified: '耍流氓',
    pinyin: 'shuǎ liú mánɡ',
    explanation: '比喻施展下流的手段放刁、耍赖或调戏妇女等恶劣的行为。',
    explanationPinyin:
      'Bǐyù shīzhǎn xiàliú de shǒuduàn fàng diāo, shuǎlài huò tiáoqī fùnǚ děng èliè de xíngwéi.',
    meaning: 'Ví dụ như sử dụng những hành vi xấu xa, lừa đảo hoặc quấy rối phụ nữ.',
    examples:
      '他在酒吧里耍流氓，结果引来了保安的注意，被请了出去。\n那个人在公共场合耍流氓，让人感到非常不适。',
    examplePinyin:
      "Tā zài jiǔbā lǐ shuǎ liú máng, jiéguǒ yǐn láile bǎo'ān de zhùyì, bèi qǐngle chūqù.\nNàgè rén zài gōnggòng chǎnghé shuǎ liú máng, ràng rén gǎndào fēicháng bùshì.",
    exampleMeaning:
      'Anh ta gây rối trong quán bar và bị bảo vệ chú ý, cuối cùng bị mời ra ngoài.\nNgười đàn ông đó có hành vi không đứng đắn nơi công cộng, khiến mọi người cảm thấy khó chịu.',
    arrange:
      '耍流氓/被/保安/注意/结果/引来了/他/请了/在/了/酒吧里/出去/。/\n耍流氓/那个人/让人/的/公共场合/不适/感到/在/非常/。/',
  },
  {
    simplified: '耍脾气',
    pinyin: 'shuǎ pí qi',
    explanation: '因事情不如意而吵闹或骂人。',
    explanationPinyin: 'Yīn shìqíng bù rúyì ér chǎonào huò mà rén.',
    meaning: 'Gây ồn ào hoặc mắng chửi khi công việc không như ý.',
    examples: '每当遇到困难，他总是耍脾气，把问题推给别人。\n小孩耍脾气时，妈妈总是耐心地劝他。',
    examplePinyin:
      'Měidāng yù dào kùnnán, tā zǒng shì shuǎ pí qi, bǎ wèntí tuī gěi biérén.\nXiǎohái shuǎ pí qi shí, māma zǒng shì nàixīn de quàn tā.',
    exampleMeaning:
      'Khi gặp khó khăn, anh ta thường nổi giận và đổ lỗi cho người khác.\nKhi trẻ con cáu giận, mẹ chúng thường kiên nhẫn khuyên bảo.\n',
    arrange: '耍脾气/推给/他/遇到/困难/的/总是/别人/把问题/。/\n耍脾气/妈妈/小孩/耐心/劝他/总是/时/的/。/',
  },
  {
    simplified: '耍贫嘴',
    pinyin: 'shuǎ pín zuǐ',
    explanation: '指喜欢多说废话或玩笑话。',
    explanationPinyin: 'Zhǐ xǐhuān duō shuō fèihuà huò wánxiàohuà.',
    meaning: 'Chỉ thích nói nhiều lời vô nghĩa hoặc đùa cợt.',
    examples: '他总是耍贫嘴，逗得大家哈哈大笑，气氛变得轻松愉快。\n他总喜欢耍贫嘴，讲些无聊的笑话。',
    examplePinyin:
      'Tā zǒng shì shuǎ pín zuǐ, dòu de dàjiā hāhā dà xiào, qìfēn biàn de qīngsōng yúkuài.\nTā zǒng xǐhuan shuǎ pín zuǐ, jiǎng xiē wúliáo de xiàohuà.',
    exampleMeaning:
      'Anh ta luôn nói đùa, khiến mọi người cười không ngớt và tạo ra bầu không khí vui vẻ.\nAnh ấy thích pha trò nhưng đôi khi những câu nói lại chẳng có gì thú vị.',
    arrange:
      '耍贫嘴/大家/哈哈/他/的/总是/气氛/大笑/变得/逗得/轻松/愉快/。/\n耍贫嘴/他/讲些/总/的/无聊的/喜欢/笑话/。/',
  },
  {
    simplified: '耍手腕',
    pinyin: 'shuǎ shǒu wàn',
    explanation: '比喻使用不正当的方法。',
    explanationPinyin: 'Bǐyù shǐyòng bù zhèngdàng de fāngfǎ.',
    meaning: 'Ý chỉ việc sử dụng phương pháp không chính đáng.',
    examples:
      '在商场上，耍手腕的人经常能获得利益。\n别看他没什么本事，可他很会耍手腕，所以在单位里混得还不错。',
    examplePinyin:
      'Zài shāngchǎng shàng, shuǎ shǒu wàn de rén jīngcháng néng huòdé lìyì.\nBié kàn tā méishénme běnshì, kě tā hěn huì shuǎ shǒu wàn, suǒyǐ zài dānwèi lǐ hùn de hái bùcuò.',
    exampleMeaning:
      'Trong thương trường, những người biết cách ứng xử khéo léo thường đạt được nhiều lợi thế.\nDù không có năng lực nổi trội, anh ta vẫn biết cách khôn khéo để duy trì vị trí trong công ty.',
    arrange:
      '耍手腕/获得/的/商场上/经常/能/利益/人/在/。/\n耍手腕/他/单位/里/没什么/本事/混得/可/的/还/看/不错/别/。/',
  },
  {
    simplified: '耍威风',
    pinyin: 'shuǎ wēi fēnɡ',
    explanation: '指故意表现出使人敬畏的声势或气派。',
    explanationPinyin: 'Zhǐ gùyì biǎoxiàn chū shǐ rén jìngwèi de shēngshì huò qìpài.',
    meaning: 'Cố ý thể hiện ra sức mạnh hoặc phong thái khiến người khác kính nể.',
    examples:
      '他总是在同事面前耍威风，试图显示自己的权威，结果适得其反。\n他在公司里喜欢耍威风，常常让下属感到压力。',
    examplePinyin:
      'Tā zǒng shì zài tóngshì miànqián shuǎ wēi fēng, shìtú xiǎnshì zìjǐ de quánwēi, jiéguǒ shìdéqífǎn.\nTā zài gōngsī lǐ xǐhuan shuǎ wēi fēng, chángcháng ràng xiàshǔ gǎndào yālì.',
    exampleMeaning:
      'Anh ta luôn tỏ vẻ quyền uy trước mặt đồng nghiệp nhưng thường nhận kết quả ngược lại.\nTrong công ty, anh ta thường thích thể hiện quyền lực, khiến cấp dưới cảm thấy áp lực.',
    arrange:
      '耍威风/在/同事/自己的/他/面前/的/总是/权威/试图/显示/。/\n耍威风/感到/他/公司里/压力/的/在/下属/喜欢/常常/让/。/',
  },
  {
    simplified: '耍心眼儿',
    pinyin: 'shuǎ xīn yǎnr',
    explanation: '指为了维护个人利益而施展心计。',
    explanationPinyin: 'Zhǐ wèile wéihù gèrén lìyì ér shīzhǎn xīnjì.',
    meaning: 'Chỉ vì bảo vệ lợi ích cá nhân mà sử dụng mưu kế.',
    examples:
      '这个小女孩很聪明，时常在老师面前耍心眼儿，让人哭笑不得。\n他总是耍心眼儿，想从别人那里得到好处。',
    examplePinyin:
      'Zhège xiǎo nǚhái hěn cōngmíng, shícháng zài lǎoshī miànqián shuǎ xīn yǎnr, ràng rén kūxiàobùdé.\nTā zǒng shì shuǎ xīn yǎnr, xiǎng cóng biérén nàlǐ dédào hǎochù.',
    exampleMeaning:
      'Cô bé này rất thông minh, thường khiến giáo viên vừa giận vừa buồn cười với những trò tinh nghịch.\nAnh ta thường dùng mánh khóe để kiếm lợi từ người khác.\n',
    arrange:
      '耍心眼儿/老师/她/让人/的/面前/哭笑不得/在/时常/的/。/\n耍心眼儿/得到/别人/他/想/那里/总是/的/好处/从/。/',
  },
  {
    simplified: '耍嘴皮子',
    pinyin: 'shuǎ zuǐ pí zi',
    explanation: '卖弄口才，或者比喻只说不做',
    explanationPinyin: 'Màinòng kǒucái, huòzhě bǐyù zhǐ shuō bù zuò',
    meaning: 'Nói nhiều mà không làm gì.',
    examples: '他就是在耍嘴皮子，根本不想付诸行动。\n光会耍嘴皮子可不行，还必须要实干才行。',
    examplePinyin:
      'Tā jiùshì zài shuǎ zuǐ pí zi, gēnběn bùxiǎng fù zhū xíngdòng.\nGuāng huì shuǎ zuǐ pí zi kě bù xíng, hái bìxū yào shígàn cái xíng.',
    exampleMeaning:
      'Anh ta chỉ nói suông mà không muốn thực hiện hành động gì.\nChỉ nói suông thôi thì không đủ, cần phải thực hiện bằng hành động cụ thể.',
    arrange: '耍嘴皮子/他/付诸/的/只想/根本/行动/在/。/\n耍嘴皮子/实干/必须/行/会/可不/的/还/。/',
  },
  {
    simplified: '甩包袱',
    pinyin: 'shuǎi bāo fu',
    explanation: '推卸责任，不管事。',
    explanationPinyin: 'Tuīxiè zérèn, bùguǎn shì.',
    meaning: 'Khoanh tay đứng nhìn\n Trốn tránh trách nhiệm, mặc kệ công việc.',
    examples: '你的心态有点问题，遇到事情，怎么能总想着甩包袱呢?\n 小孩的事你可不能不管，不能甩包袱。',
    examplePinyin:
      'Nǐ de xīntài yǒudiǎn wèntí, yù dào shìqíng, zěnme néng zǒng xiǎngzhe shuǎi bāo fu ne?\nXiǎohái de shì nǐ kě bùnéng bùguǎn, bùnéng shuǎi bāo fu.',
    exampleMeaning:
      'âm lý của bạn có vấn đề rồi, khi gặp chuyện sao có thể luôn nghĩ đến việc trốn tránh trách nhiệm?\n Chuyện con cái không thể không quan tâm, không thể trốn tránh được.',
    arrange: '甩包袱/你的/怎么能/事情/的/心态/遇到/总/问题/想着/。/\n甩包袱/小孩/的/不管/你/不能/的/事/。/',
  },
  {
    simplified: '顺风耳',
    pinyin: 'shùn fēng ěr',
    explanation: '消息灵通的人。',
    explanationPinyin: 'Xiāoxī língtōng de rén',
    meaning: 'Người thông thạo tin tức.',
    examples: '他真是个顺风耳，总能听到别人的秘密。\n他消息特灵，简直是个顺风耳。',
    examplePinyin:
      'Tā zhēnshi gè shùn fēng ěr, zǒng néng tng dào biérén de mìmì.\nTā xiāoxī tè líng, jiǎnzhí shìgè shùn fēng ěr.',
    exampleMeaning:
      'Anh ta quả thực rất nhạy bén, luôn biết được những bí mật của người khác.\nAnh ấy có nguồn tin rất nhanh nhạy, giống như có "tai thính".',
    arrange: '顺风耳/听到/他/的/别人/真是/总能/秘密/个/他/。/\n顺风耳/他/消息/的/简直/特灵/是个/。/',
  },
  {
    simplified: '顺毛驴',
    pinyin: 'shùn máo lǘ',
    explanation: '比喻喜欢别人顺应自己的秉性、脾气、意愿的人。',
    explanationPinyin: 'Bǐyù xǐhuān biérén shùnyìng zìjǐ de bǐngxìng, píqì, yìyuàn de rén.',
    meaning: 'Biểu thị người thích người khác làm theo tính cách, tâm trạng và ý muốn của mình.\n',
    examples:
      '这个孩子是个“顺毛驴”，你哄着他点儿，他还是挺愿意干事儿的。\n他就是那么个“顺毛驴”的脾气，你多说点儿好话，他会答应的。',
    examplePinyin:
      'Zhège háizǐ shìgè “shùn máo lǘ”, nǐ hōngzhe tā diǎn er, tā háishì tǐng yuànyì gànshi er de. Tā jiùshì nàme gè “shùn máo lǘ” de píqì, nǐ duō shuō diǎn er hǎohuà, tā huì dāyìng de.',
    exampleMeaning:
      'Đứa trẻ này là một ‘con lừa ngoan’, bạn nói tốt với nó một chút, nó sẽ rất sẵn lòng làm việc.\nAnh ta chính là có tính cách như một ‘con lừa ngoan’, bạn nói vài câu tốt đẹp, anh ta sẽ đồng ý.',
    arrange:
      '顺毛驴/他/是个/还/的/愿意/你/干事儿/他/点儿/哄着/挺/。/\n顺毛驴/他/好话/会/多/说点儿/那么个/你/他/答应/脾气/。/',
  },
  {
    simplified: '说风凉话',
    pinyin: 'shuō fēnɡ liánɡ huà',
    explanation: '冷言冷语，表示不满或不屑。',
    explanationPinyin: 'Lěngyánlěngyǔ, biǎoshì bùmǎn huò bùxiè.',
    meaning: 'Nói mát, nói kháy\n Nói bóng nói gió, thể hiện sự không hài lòng hoặc khinh thường.',
    examples:
      '别人痛得要死，你还说什么风凉话，说他躲在医院里享清闲。\n 你风凉话也说够了吧，能不能让我安静一会儿。',
    examplePinyin:
      "Biérén tòng dé yàosǐ, nǐ hái shuō shénme fēng liáng huà, shuō tā duǒ zài yīyuàn lǐ xiǎng qīngxián.\n Nǐ fēng liáng huà yě shuō gòule ba, néng bùnéng ràng wǒ ānjìng yīhuǐ'er.",
    exampleMeaning:
      'Người khác đau đớn đến mức sắp chết, bạn vẫn nói mát nói kháy rằng anh ta trốn ở bệnh viện để hưởng thụ.\n Bạn đã mỉa mai châm chọc đủ rồi, có thể để tôi yên tĩnh một chút không?',
    arrange:
      '风凉话/痛得/别人/医院里/躲在/你/清闲/的/他/享/要死/还/说/什么/。/\n风凉话/你/够/说/的/了吧/听/让我/能/安静/一会儿/吗/?/',
  },
  {
    simplified: '说怪话',
    pinyin: 'shuō ɡuài huà',
    explanation: '指说些不着边际的牢骚话。',
    explanationPinyin: 'zhǐ shuō xiē bù zháo biānjì de láosāo huà',
    meaning: 'Nói những lời không liên quan, phàn nàn vớ vẩn.',
    examples: '你别尽说些怪话，说点有用的吧。\n他喜欢说怪话，你们别把他的话放在心上。',
    examplePinyin:
      'Nǐ bié jǐn shuō xiē guài huà, shuō diǎn yǒuyòng de ba. \nTā xǐhuān shuō guài huà, nǐmen bié bǎ tā de huà fàng zài xīn shàng.',
    exampleMeaning:
      'Đừng chỉ nói những điều kỳ quặc, hãy nói những điều hữu ích đi. \nAnh ấy thích nói những chuyện kỳ quặc, các bạn đừng để tâm đến lời anh ta.',
    arrange: '怪话/别尽/的/有用/说点/你/的/说些/。/\n怪话/他/喜欢/的/你们/说/他/别把/心上/放在/话/。/',
  },
  {
    simplified: '说鬼话',
    pinyin: 'shuō ɡuǐ huà',
    explanation: '指扯谎，说不真实的话。',
    explanationPinyin: 'zhǐ chěhuǎng, shuō bù zhēnshí de huà',
    meaning: 'Nói dối, nói những điều không có thật.',
    examples: '别听他说鬼话，他说得毫无根据。\n你让孩子回答一个问题，他回答不出来，就开始说鬼话了。',
    examplePinyin:
      'Bié tīng tā shuō guǐ huà, tā shuō de háo wú gēn jù. \nNǐ ràng háizi huídá yīgè wèntí, tā huídá bù chūlái, jiù kāishǐ shuō guǐ huà le.',
    exampleMeaning:
      'Đừng nghe anh ta nói những chuyện vô căn cứ, anh ta hoàn toàn không có chứng cứ. \nBạn hỏi trẻ con một câu, nếu nó không trả lời được, nó sẽ bắt đầu nói những chuyện vớ vẩn.',
    arrange:
      '他/说得/毫无/根据，别/听/他说/鬼话/。/\n他/回答/不出来，就/开始/说/鬼话/了，你/让/孩子/回答/一个/问题/。/',
  },
  {
    simplified: '说过头话',
    pinyin: 'shuō ɡuò tóu huà',
    explanation: '常指说了超出事实的话。',
    explanationPinyin: 'Cháng zhǐ shuōle chāochū shìshí dehuà.',
    meaning: 'Thường chỉ những lời nói vượt quá sự thật.',
    examples: '少说过头话，否则，完成不了，就难堪了。\n做领导了，少说过头话，要负责任的。',
    examplePinyin:
      'Shǎo shuō guò tóu huà, fǒuzé, wánchéng bùliǎo, jiù nánkānle. \nZuò lǐngdǎole, shǎo shuō guò tóu huà, yào fù zérèn de.',
    exampleMeaning:
      'Bớt nói lời quá sức, nếu không hoàn thành, sẽ rất khó xử.\nKhi làm lãnh đạo, hãy nói ít đi những lời thái quá, phải có trách nhiệm.',
    arrange: ' 完成/不了，就/难堪/了，少说/过头话，否则/。/\n要/负责任/的，少说/过头话，做/领导/了/。/',
  },
  {
    simplified: '说漏嘴',
    pinyin: 'shuō lòu zuǐ',
    explanation: '指说话不留神而泄露了机密或发生错误。也说“说走嘴”。',
    explanationPinyin: 'zhǐ shuōhuà bù liúshén ér xièlùle jīmì huò fāshēng cuòwù. Yě shuō "shuō zǒu zuǐ".',
    meaning: 'Nói không cẩn thận, lỡ miệng tiết lộ bí mật hoặc sai sót. Cũng nói là “说走嘴”.',
    examples:
      '你看你说漏嘴了吧，刚才你说不知道，怎么现在又知道了呢? \n说谎总有说漏嘴的时候，到那时，别人就不相信你了，所以，千万别说谎。',
    examplePinyin:
      'Nǐ kàn nǐ shuō lòu zuǐ le ba, gāngcái nǐ shuō bù zhīdào, zěnme xiànzài yòu zhīdàole ne? \nShuōhuǎng zǒng yǒu shuō lòu zuǐ de shíhòu, dào nà shí, biérén jiù bù xiāngxìn nǐle, suǒyǐ, qiān wàn bié shuōhuǎng.',
    exampleMeaning:
      'Bạn thấy đấy, bạn đã lỡ miệng rồi phải không? Vừa nãy bạn nói không biết, sao giờ lại biết? \nNói dối lúc nào cũng sẽ bị lộ, đến lúc đó, người khác sẽ không tin bạn nữa, nên đừng bao giờ nói dối.',
    arrange:
      '刚才/你/说/不知道，怎么/现在/又/知道/了/呢？你看/你/说漏嘴/了/吧/。/\n到/那时，别人/就/不/相信/你/了，所以，千万/别/说谎，说谎/总有/说漏嘴/的时候/。/\n',
  },
  {
    simplified: '说破嘴',
    pinyin: 'shuō pò zuǐ',
    explanation: '比喻费尽口舌。也说“说破嘴皮子”',
    explanationPinyin: 'Bǐyù fèi jìn kǒushé. Yě shuō “shuōpò zuǐpízi”.',
    meaning:
      'Nói hết nước hết cái\n Ý chỉ việc đã nói đến cùng nhưng không có tác dụng. Hay có cách diễn đạt khác là "nói hết lời".',
    examples: '他很死板的，跟他说破嘴都没用，我们另想办法。\n 我跟看门的说破了嘴，他也没让我进去看看。',
    examplePinyin:
      'Tā hěn sǐbǎn de, gēn tā shuō pò zuǐ dōu méi yòng, wǒmen lìng xiǎng bànfǎ.\nWǒ gēn kàn mén de shuō pò le zuǐ, tā yě méi ràng wǒ jìnqù kàn kàn.',
    exampleMeaning:
      'Anh ta rất cứng nhắc, nói với anh ta đến khô cả miệng cũng vô ích, chúng tôi phải nghĩ cách khác.\n Tôi đã nói với người canh cửa đến khô cả miệng, nhưng anh ta cũng không cho tôi vào xem.',
    arrange:
      '跟/他说/破嘴/都/没用，我们/另想/办法，他/很/死板/的/。/\n他/也/没/让我/进去/看看，我/跟/看门/的/说破/了嘴/。/',
  },
  {
    simplified: '四不像',
    pinyin: 'sì bú xiànɡ',
    explanation:
      '四不像: 即麋鹿，是一种稀有的哺乳动物，毛淡褐色，雄的有角，角像鹿，尾像\n驴，蹄像牛，颈像骆驼，但从整个来看哪一种动物都不像。比喻不伦不类的东\n西或情况。',
    explanationPinyin:
      'Sì bù xiàng: Jí mílù, shì yī zhǒng xīyǒu de bǔrǔ dòngwù, máo dàn hésè, xióng de yǒu jiǎo, jiǎo xiàng lù, wěi xiàng lǘ, tí xiàng niú, \njǐng xiàng luòtuó, dàn cóng zhěnggè lái kàn nǎ yī zhǒng dòngwù dōu bù xiàng. Bǐyù bùlún bùlèi de dōngxī huò qíngkuàng.',
    meaning:
      '"Tứ bất tượng: Chính là con nai sừng tấm (mílù), một loài động vật có vú quý hiếm, lông màu nâu nhạt. \nCon đực có sừng, sừng giống hươu, đuôi giống lừa, móng giống bò, cổ giống lạc đà, nhưng nhìn tổng \nthể lại không giống loài nào cả. Dùng để ví những thứ hoặc tình huống không rõ ràng, chẳng ra loại nào.',
    examples:
      '他的作品真是四不像，既不像画也不像雕塑。\n他闭门三天，搞了个不伦不类的规划，一公布，大家都说是个四不像。',
    examplePinyin:
      'Tā de zuòpǐn zhēnshi sì bù xiàng, jì bù xiàng huà yě bù xiàng diāosù.\nTā bì mén sān tiān, gǎole gè bùlún bùlèi de guīhuà, yī gōngbù, dàjiā dōu shuō shìgè sì bù xiàng.\n',
    exampleMeaning:
      'Tác phẩm của anh ta thật khó phân biệt, không giống tranh mà cũng chẳng phải điêu khắc.\nSau ba ngày đóng cửa, anh ta tạo ra một kế hoạch chẳng ra đâu vào đâu, khiến mọi người thất vọng.',
    arrange:
      '既/不像/画/也/不像/雕塑，他/的/作品/真是/四不像/。/\n一/公布，大家/都/说/是/个/四不像，他/闭门/三天，搞了/个/不伦不类/的/规划/。/',
  },
  {
    simplified: '私房钱',
    pinyin: 'sī fánɡ qián',
    explanation: '一般指属于妇女自己的财产，尤指绝对由她支配的财产。',
    explanationPinyin: 'Yībān zhǐ shǔyú fùnǚ zìjǐ de cáichǎn, yóu zhǐ juéduì yóu tā zhīpèi de cáichǎn.',
    meaning:
      'Tiền riêng\n Thông thường chỉ tài sản thuộc về phụ nữ, đặc biệt là tài sản hoàn toàn do họ quản lý.',
    examples: '藏私房钱，现代社会往往是男人。\n 母亲把私房钱拿了出来，为我买了个玩具。',
    examplePinyin:
      'Cáng sī fáng qián, xiàndài shèhuì wǎngwǎng shì nánrén.\n Mǔqīn bǎ sī fáng qián nále chūlái, wèi wǒ mǎile gè wánjù.',
    exampleMeaning:
      'Trong xã hội hiện đại, thường đàn ông giấu tiền riêng.\n Mẹ đã lấy tiền riêng ra để mua cho tôi một món đồ chơi.',
    arrange: '藏/私房钱，现代/社会/往往/是/男人/。/\n为/我/买了/个/玩具，母亲/把/私房钱/拿了/出来/。/',
  },
  {
    simplified: '死心眼',
    pinyin: 'sǐ xīn yǎn',
    explanation: '指思想固执，做事不灵活。',
    explanationPinyin: 'Zhǐ sīxiǎng gùzhí, zuòshì bù línghuó.',
    meaning: 'Chỉ người có tư tưởng cố chấp, làm việc không linh hoạt.',
    examples: '你怎么这么死心眼，不听别人的建议？\n你这人怎么这么死心眼，认定一件事就不改变了。',
    examplePinyin:
      'Nǐ zěnme zhème sǐ xīn yǎn, bù tīng biérén de jiànyì?\nNǐ zhè rén zěnme zhème sǐ xīn yǎn, rèndìng yī jiàn shì jiù bù gǎibiànle.\n',
    exampleMeaning:
      'Sao anh lại cố chấp như vậy, không chịu nghe lời khuyên của người khác?\nAnh thật bướng bỉnh, đã quyết điều gì thì không bao giờ thay đổi.',
    arrange:
      '不/听/别人/的/建议，你/怎么/这么/死心眼/?/\n认定/一件事/就/不/改变/了，你/这人/怎么/这么/死心眼/?/',
  },
  {
    simplified: '死爱面子活受罪',
    pinyin: 'sǐài miàn zi huó shòu zuì',
    explanation: '怕丢面子，甘受委屈。',
    explanationPinyin: 'Pà diūmiànzi, gānshòu wěiqu.',
    meaning: 'Sợ mất mặt, cam chịu ấm ức.',
    examples: '死爱面子活受罪，小张就是这样的人。 \n你还是跟领导坦白吧，别死爱面子活受罪。',
    examplePinyin:
      'Sǐài miàn zi huó shòu zuì, xiǎo zhāng jiùshì zhèyàng de rén. \nNǐ háishì gēn lǐngdǎo tǎnbái ba, bié sǐài miàn zi huó shòu zuì.',
    exampleMeaning:
      'Quá cả nể/ quá giữ thể diện mà phải chịu khổ, Tiểu Trương chính là người như vậy.\nBạn nên thẳng thắn với lãnh đạo, đừng vì giữ thể diện mà chịu đựng khổ .',
    arrange: '小张/就是/这样/的/人，死爱面子/活受罪/。/\n别/死爱面子/活受罪，你/还是/跟/领导/坦白/吧/。/',
  },
  {
    simplified: '抬轿子',
    pinyin: 'tái jiào zi',
    explanation: '比喻为别人的利益奔走效劳或奉承吹捧。',
    explanationPinyin: 'Bǐyù wèi biérén de lìyì bēnzǒu xiàoláo huò fèngchéng chuīpěng.',
    meaning: 'Biểu thị việc phục vụ hoặc nịnh bợ vì lợi ích của người khác.',
    examples: '他高位买进股票，给别人抬了轿子。\n想让我帮你抬轿子，没门。',
    examplePinyin:
      'Tā gāowèi mǎi jìn gǔpiào, gěi biérén táile jiào zi. \nXiǎng ràng wǒ bāng nǐ tái jiào zi, méimén.',
    exampleMeaning:
      '"Anh ấy mua cổ phiếu ở mức giá cao, làm cho người khác được lợi.\nNếu bạn muốn tôi giúp bạn nâng đỡ, thì không có cửa đâu."',
    arrange: ' 给/别人/抬了/轿子，他/高位/买进/股票/。/\n没门，想/让我/帮/你/抬轿子/。/\n',
  },
  {
    simplified: '台柱子',
    pinyin: 'tái zhù zi',
    explanation: '戏班中的主要演员，借指集体中的骨干。',
    explanationPinyin: 'Xìbān zhōng de zhǔyào yǎnyuán, jiè zhǐ jítǐ zhōng de gǔgàn.',
    meaning: 'Diễn viên chính trong gánh hát, ám chỉ người nòng cốt trong tập thể.',
    examples: '你想把李红挖走，我看那是不可能的。人家可是他们公司的台柱子。\n',
    examplePinyin:
      'Nǐ xiǎng bǎ lǐ hóng wā zǒu, wǒ kàn nà shì bù kěnéng de. Rénjiā kěshì tāmen gōngsī de tái zhù zi.',
    exampleMeaning:
      'Anh muốn lôi Lý Hồng ra khỏi công ty kia ư, tôi thấy điều đó không thể. Cô ấy là nhân vật chủ chốt của họ.',
    arrange: '人家/可是/他们/公司/的/台柱子，你/想/把/李红/挖走？我/看/那是/不可能/的/。/',
  },
  {
    simplified: '摊底牌',
    pinyin: 'tān dǐ pái',
    explanation: '拿出最厉害的武器或最后条件等。',
    explanationPinyin: 'Ná chū zuì lìhài de wǔqì huò zuìhòu tiáojiàn děng.',
    meaning: 'Đưa ra vũ khí mạnh nhất hoặc điều kiện cuối cùng.',
    examples: '他不肯摊底牌，我真不知他什么意思。\n真等到摊底牌的时候，大家又很不自在了。',
    examplePinyin:
      'Tā bù kěn tān dǐ pái, wǒ zhēn bùzhī tā shénme yìsi. \nZhēn děngdào tān dǐ pái de shíhòu, dàjiā yòu hěn bù zìzàile.',
    exampleMeaning:
      'Anh ấy không chịu bày tỏ nội tình, tôi thật sự không biết anh ấy có ý gì.\nKhi thật sự phải bày tỏ nỗi lòng, mọi người lại cảm thấy rất không thoải mái.',
    arrange: '我/真/不知/他/什么意思，他/不肯/摊底牌/。/\n大家/又/很/不自在/了，真/等到/摊底牌/的/时候/。/',
  },
  {
    simplified: '探口气',
    pinyin: 'tàn kǒu qì',
    explanation: '指设法引出对方的话，探听他对某人某事的态度或看法。也说“探口风”。',
    explanationPinyin:
      'Zhǐ shèfǎ yǐnchū duìfāng dehuà, tàntīng tā duì mǒu rén mǒu shì de tàidù huò kànfǎ. Yě shuō “tàn kǒufēng”.',
    meaning:
      'Chỉ việc khéo léo gợi ý để đối phương nói ra, thăm dò thái độ hoặc quan điểm của họ về một người hoặc một việc nào đó. Cũng nói là “探口风”.',
    examples: '别太冒失，你先去探探口气再说。 \n之前他已经探过对方的口气，所以，现在他胸有成竹。',
    examplePinyin:
      'Bié tài màoshī, nǐ xiān qù tàn tàn kǒu qì zàishuō. \nZhīqián tā yǐjīng tànguò duìfāng de kǒu qì, suǒyǐ, xiànzài tā xiōngyǒu chéngzhú.',
    exampleMeaning:
      'Đừng quá vội vàng, bạn hãy đi thăm dò tình hình trước đã. \nTrước đó, anh ấy đã thăm dò thái độ của đối phương, nên bây giờ anh ấy rất tự tin',
    arrange:
      '你/先去/探探/口气/再说，别/太/冒失/。/\n所以，现在/他/胸有成竹，之前/他/已经/探过/对方/的/口气/。/\n',
  },
  {
    simplified: '讨生活',
    pinyin: 'tǎo shēnɡ huó',
    explanation: '指谋求维持生活或生存的途径。',
    explanationPinyin: 'Zhǐ móuqiú wéichí shēnghuó huò shēngcún de tújìng.',
    meaning: 'Chỉ con đường tìm kiếm để duy trì cuộc sống hoặc sinh tồn.',
    examples: '他离开北京，到大上海来讨生活。\n旧社会，农民失去了土地，只好到城市做苦力，讨生活。',
    examplePinyin:
      'Tā líkāi běijīng, dào dà shànghǎi lái tǎo shēng huó. \nJiù shèhuì, nóngmín shīqùle tǔdì, zhǐhǎo dào chéngshì zuò kǔlì, tǎo shēng huó.',
    exampleMeaning:
      'Anh rời Bắc Kinh, đến Thượng Hải để kiếm sống.\nTrong xã hội cũ, nông dân mất đất, chỉ có thể vào thành phố làm lao động chân tay để kiếm sống.',
    arrange:
      '到/城市/做/苦力，讨生活，旧社会，农民/失去/了/土地，只好/。/\n到/大上海/来/讨生活，他/离开/北京/。/',
  },
  {
    simplified: '掏心窝子',
    pinyin: 'tāo xīn wō zi',
    explanation: '无保留地把心里话讲出来。',
    explanationPinyin: 'Wú bǎoliú de bǎ xīnlǐhuà jiǎng chūlái',
    meaning: 'Nói ra hết những điều trong lòng.',
    examples: '他跟我掏心窝子，讲了很多心里话。\n他对人很真诚，跟人谈话说的都是掏心窝子的话。',
    examplePinyin:
      'Tā gēn wǒ tāo xīn wō zi, jiǎngle hěnduō xīnlǐ huà.\nTā duì rén hěn zhēnchéng, gēn rén tánhuà shuō de dōu shì tāo xīn wō zi dehuà.\n',
    exampleMeaning:
      'Anh ta đã mở lòng với tôi, kể cho tôi nghe nhiều tâm sự thật lòng.\nAnh ấy rất chân thành, mọi lời nói đều là những chia sẻ từ trái tim.',
    arrange:
      '. 讲了/很多/心里话，他/跟我/掏心窝子/。/\n跟人/谈话/说的/都/是/掏心窝子/的话，他/对人/很/真诚/。/',
  },
  {
    simplified: '踢皮球',
    pinyin: 'tī pí qiú',
    explanation: '比喻互相推诿，把应该解决的事情推给别人。',
    explanationPinyin: 'Bǐyù hùxiāng tuīwěi, bǎ yīnggāi jiějué de shìqíng tuī gěi biérén.',
    meaning:
      'Đùn đẩy, trốn tránh\n Phép ẩn dụ chỉ hành vi đổ lỗi lẫn nhau và đẩy những việc đáng ra phải giải quyết cho người khác.',
    examples: '他们办事效率特别低，喜欢踢皮球。\n 他被政府部门的踢皮球惹毛了，直接上书政府总理。',
    examplePinyin:
      'Tāmen bànshì xiàolǜ tèbié dī, xǐhuān tī pí qiú.\n Tā bèi zhèngfǔ bùmén de tī pí qiú rě máole, zhíjiē shàngshū zhèngfǔ zǒnglǐ.',
    exampleMeaning:
      'Họ làm việc hiệu suất vô cùng thấp, thích đùn đẩy trách nhiệm.\n Anh ấy tức giận vì việc đùn đẩy trách nhiệm của các cơ quan chính phủ, đã trực tiếp gửi thư cho Thủ tướng.',
    arrange:
      '喜欢/踢皮球，他们/办事/效率/特别/低/。/\n直接/上书/政府总理，他/被/政府部门/的/踢皮球/惹毛/了/。/',
  },
  {
    simplified: '替死鬼',
    pinyin: 'tì sǐ ɡuǐ',
    explanation: '比喻代人受过或受害的人。',
    explanationPinyin: 'Bǐyù dài rén shòuguò huò shòuhài de rén.',
    meaning: 'Người phải gánh chịu tội thay hoặc bị đổ lỗi oan.',
    examples: '找几个替死鬼，不就可以了吗?',
    examplePinyin: 'Zhǎo jǐ ge tì sǐ guǐ, bù jiù kěyǐle ma?',
    exampleMeaning: 'Chỉ cần tìm vài người chịu tội thay là mọi chuyện được giải quyết.',
    arrange: '不就/可以/了/吗？找/几个/替死鬼/。/',
  },
  {
    simplified: '替罪羊',
    pinyin: 'tì zuì yánɡ',
    explanation: '替别人受过的人。',
    explanationPinyin: 'Tì biérén shòuguò de rén',
    meaning: 'Người chịu tội thay cho người khác.\n',
    examples: '他不是真正的坏人，只是一只“替罪羊”。\n我不想跟这事扯上关系，我才不当“替罪羊”呢。',
    examplePinyin:
      'Tā bùshì zhēnzhèng de huàirén, zhǐshì yī zhǐ “tì zuì yáng”. \nWǒ bùxiǎng gēn zhè shì chě shàng guānxì, wǒ cái bùdāng “tì zuì yáng” ne.',
    exampleMeaning:
      'Anh ấy không phải là người xấu thực sự, chỉ là một ‘kẻ gánh tội’.\nTôi không muốn liên quan đến việc này, tôi không muốn làm ‘kẻ gánh tội’.',
    arrange:
      '只是/一只/替罪羊，他/不/是/真正/的/坏人/。/\n我/才/不当/替罪羊/呢，我/不想/跟/这事/扯上/关系/。/',
  },
  {
    simplified: '挑鼻子挑眼',
    pinyin: 'tiāo bí zi tiāo yǎn',
    explanation: '形容特别挑剔。',
    explanationPinyin: 'Xíngróng tèbié tiāotì.',
    meaning: 'Kén cá chọn canh\n Miêu tả tính cách cực kỳ kén chọn.',
    examples:
      '你别对别人挑鼻子挑眼的，先看看自己有多少毛病再说吧。\n 从嫁进这个家门那天起，婆婆就对她挑鼻子挑眼，媳妇不好做啊。',
    examplePinyin:
      'Nǐ bié duì biérén tiāo bí zi tiāo yǎn de, xiān kàn kàn zìjǐ yǒu duōshǎo máobìng zàishuō ba.\nCóng jià jìn zhège jiāmén nàtiān qǐ, pópo jiù duì tā tiāo bí zi tiāo yǎn, xífù bù hǎo zuò a.',
    exampleMeaning:
      'Đừng bắt bẻ người khác, hãy tự nhìn lại mình trước.\n Từ ngày bước vào nhà này, mẹ chồng đã luôn soi mói cô ấy, làm dâu thật không dễ.',
    arrange:
      '先/看看/自己/有/多少/毛病/再说/吧，你/别/对/别人/挑鼻子/挑眼/的/。/\n婆婆/就/对/她/挑鼻子/挑眼，从/嫁进/这个/家门/那天/起，媳妇/不好/做/啊/。/',
  },
  {
    simplified: '挑破窗户纸',
    pinyin: 'tiǎo pò chuānɡ hu zhǐ',
    explanation: '把没公开的事挑明。',
    explanationPinyin: 'Bǎ méi gōngkāi de shì tiǎo míng.',
    meaning: 'Chỉ việc làm rõ những điều chưa được công khai.',
    examples:
      '他们之间的误会终于被挑破窗户纸，大家和好了。\n其实事情已经渐渐明了，但大家谁也不想捅破那层窗户纸，想给他留点面子。',
    examplePinyin:
      'Tāmen zhījiān de wùhuì zhōngyú bèi tiǎo pò chuāng hu zhǐ, dàjiā hé hǎole.\nQíshí shìqíng yǐjīng jiànjiàn míngliǎo, dàn dàjiā shéi yě bùxiǎng tǒng pò nà céng chuāng hu zhǐ, xiǎng gěi tā liú diǎn miànzǐ.\n',
    exampleMeaning:
      'Cuối cùng, hiểu lầm giữa họ đã được giải quyết và mọi người làm hòa.\nDù sự việc đã rõ ràng, nhưng không ai muốn phơi bày tất cả để giữ thể diện cho anh ấy.',
    arrange:
      '大家/和好/了，他们/之间/的/误会/终于/被/挑破/窗户纸/。/\n想/给/他/留点/面子，其实/事情/已经/渐渐/明了，但/大家/谁/也/不想/捅破/那层/窗户纸/。/',
  },
  {
    simplified: '铁饭碗',
    pinyin: 'tiě fàn wǎn',
    explanation: '比喻非常稳固的职业、职位。',
    explanationPinyin: 'Bǐyù fēicháng wěngù de zhíyè, zhíwèi.',
    meaning: 'Bát cơm sắt\n Một phép ẩn dụ cho thấy người được nói đến có sự nghiệp hoặc vị thế rất ổn định.',
    examples: '该不该打破铁饭碗，是改革中最大的问题，阻力也最大。\n 他打破了自己的铁饭碗，下海经商了。',
    examplePinyin:
      'Gāi bù gāi dǎpò tiě fàn wǎn, shì gǎigé zhōng zuìdà de wèntí, zǔlì yě zuìdà.\n Tā dǎpòle zìjǐ de tiě fàn wǎn, xiàhǎi jīngshāngle.',
    exampleMeaning:
      "Có nên phá vỡ 'bát cơm sắt' hay không, là vấn đề lớn nhất trong cải cách, và cũng là trở ngại lớn nhất.\n Anh ấy đã phá vỡ 'bát cơm sắt' của mình và khởi nghiệp kinh doanh.",
    arrange:
      '是/改革/中/最大/的/问题，该不该/打破/铁饭碗，阻力/也/最大/。/\n下海/经商/了，他/打破/了/自己/的/铁饭碗/。/',
  },
  {
    simplified: '铁了心',
    pinyin: 'tiě le xīn',
    explanation: '形容坚决。',
    explanationPinyin: 'Xíngróng jiānjué.',
    meaning: 'Mô tả sự kiên quyết.\n',
    examples: '我看她是铁了心了，再没有回头的余地了。\n他铁了心了要走，我没办法留住他。',
    examplePinyin:
      'Wǒ kàn tā shì tiě le xīn le, zài méiyǒu huítóu de yúdìle. \nTā tiě le xīn le yào zǒu, wǒ méi bànfǎ liú zhù tā.',
    exampleMeaning:
      'Tôi thấy cô ấy đã hạ quyết tâm, không còn cơ hội quay đầu lại.\nAnh ấy đã quyết tâm ra đi, tôi không cách nào giữ được anh ấy.',
    arrange: '再/没有/回头/的/余地/了，我/看/她/是/铁了心/了/。/\n我/没办法/留住/他，他/铁了心/了/要/走/。/',
  },
  {
    simplified: '通关节',
    pinyin: 'tōng guān jié',
    explanation: '为达到某种目的，利用关系、人情等手段逐步扫清障碍。',
    explanationPinyin:
      "Wèi dádào mǒu zhǒng mùdì, lìyòng guānxì, rénqíng děng shǒuduàn zhúbù sǎoqīng zhàng'ài",
    meaning: 'Từ từ dọn dẹp rào cản để đạt được mục đích.',
    examples: '这道题目需要通关节，才能顺利解答。\n钢材紧缺时期，要会通关节才能买到。',
    examplePinyin:
      'Zhè dào tímù xūyào tōng guān jié, cái néng shùnlì jiědá.\nGāngcái jǐnquē shíqī, yào huì tōng guān jié cái néng mǎi dào.',
    exampleMeaning:
      'Bài toán này cần phải có sự khéo léo mới giải được.\nTrong thời kỳ khan hiếm thép, cần biết cách ứng xử khôn ngoan mới mua được hàng.',
    arrange: '通关节/才能顺利解答/这道题目/需要/。/\n通关节/要会/才能买到/钢材紧缺时期/。/',
  },
  {
    simplified: '捅漏子',
    pinyin: 'tǒnɡ lòu zi',
    explanation: '比喻惹出乱子，引起纠纷。也作“捅娄子”。',
    explanationPinyin: 'Bǐyù rě chūluànzi, yǐnqǐ jiūfēn. Yě zuò “tǒng lóuzi”.',
    meaning:
      'Gây sự, làm hỏng việc\n Là phép ẩn dụ chỉ những người nhiệt tình nhưng thiếu hiểu biết, hay tạo rắc rối và gây tranh chấp. Hay còn nói là "kiếm chuyện".',
    examples: '你怎么总是捅娄子啊，让我怎么向经理交代呀!\n 这孩子很调皮，经常捅漏子。',
    examplePinyin:
      'Nǐ zěnme zǒng shì tǒng lòu zi a, ràng wǒ zěnme xiàng jīnglǐ jiāodài ya!\n Zhè háizi hěn tiáopí, jīngcháng tǒng lòu zi.',
    exampleMeaning:
      'Sao bạn lúc nào cũng gây rắc rối vậy, tôi phải báo cáo với giám đốc thế nào đây!\n Đứa trẻ này rất nghịch ngợm, thường xuyên gây rắc rối.',
    arrange: '捅娄子/你/怎么/总是/，/让我/怎么/向经理/交代/呀/! /\n捅漏子/这孩子/经常/，/很调皮/。/',
  },
  {
    simplified: '捅马蜂窝',
    pinyin: 'tǒnɡ mǎ fēnɡ wō',
    explanation: '比喻触犯厉害或不讲道理的人，会惹出麻烦或遭到报复。',
    explanationPinyin: 'bǐyù chùfàn lìhài huò bù jiǎng dàolǐ de rén, huì rě chū máfan huò zāodào bàofù',
    meaning: 'Chạm trán người có quyền lực hoặc hành động không hợp lý, sẽ gây rắc rối hoặc bị trả thù.',
    examples: '她可是有名的泼妇，你别去捅这个马蜂窝。\n',
    examplePinyin: 'Tā kěshì yǒumíng de pōfù, nǐ bié qù tǒng zhège mǎ fēng wō. \n',
    exampleMeaning: 'Cô ấy là người nổi tiếng hung dữ, bạn đừng có đụng vào vấn đề này. \n',
    arrange: '捅马蜂窝/你/别去/，/她/可是/有名的/泼妇/。/\n',
  },
  {
    simplified: '拖后腿',
    pinyin: 'tuō hòu tuǐ',
    explanation: '比喻牵制、阻挠别人或别的事物，使其不得前进。',
    explanationPinyin: 'Bǐyù qiānzhì, zǔnáo biérén huò bié de shìwù, shǐ qí bùdé qiánjìn.',
    meaning: 'Ý chỉ việc cản trở, làm cho người khác hoặc sự vật không thể tiến lên.',
    examples: '我希望你不要拖我的后腿，我们一起努力。\n我要积极进步，你应该支持我，千万别拖我的后腿。',
    examplePinyin:
      'Wǒ xīwàng nǐ bùyào tuō wǒ de hòu tuǐ, wǒmen yīqǐ nǔlì.\nWǒ yào jījí jìnbù, nǐ yīnggāi zhīchí wǒ, qiānwàn bié tuō wǒ de hòu tuǐ.',
    exampleMeaning:
      'Tôi hy vọng anh không làm cản trở tôi, chúng ta hãy cùng nhau cố gắng.\nTôi muốn tiến bộ, anh nên hỗ trợ tôi và đừng làm tôi tụt lại phía sau.',
    arrange:
      '拖后腿/你/不要/我希望/，/我们/一起/努力/。/\n拖我的后腿/千万别/，/我要/积极进步/，/你/应该/支持我/。/',
  },
  {
    simplified: '挖墙脚',
    pinyin: 'wā qiánɡ jiǎo',
    explanation: '比喻施行破坏手段使人或集体垮台或使事情不能顺利进行。',
    explanationPinyin:
      'Bǐyù shīxíng pòhuài shǒuduàn shǐ rén huò jítǐ kuǎtái huò shǐ shìqíng bùnéng shùnlì jìnxíng.',
    meaning:
      'Dùng thủ đoạn phá hoại để làm suy sụp người khác hoặc gây khó khăn cho tập thể, khiến công việc không thể diễn ra suôn sẻ.',
    examples: '又来挖墙脚了，快走，不然我可要翻脸了。\n',
    examplePinyin: 'Yòu lái wā qiáng jiǎo le, kuài zǒu, bùrán wǒ kě yào fān liǎn le.',
    exampleMeaning: 'Lại đến "đào góc tường" rồi, đi ngay, nếu không tôi sẽ trở mặt đấy.',
    arrange: '挖墙脚/又来/了/，/快走/，/不然/我/可要/翻脸/了/。/',
  },
  {
    simplified: '王老五',
    pinyin: 'wánɡ lǎo wǔ',
    explanation: '大龄未婚男子。',
    explanationPinyin: 'Dàlíng wèihūn nánzǐ.',
    meaning: 'Nam giới lớn tuổi nhưng chưa kết hôn.',
    examples: '他可是多年的王老五，快四十了，连女朋友都没有。\n',
    examplePinyin: 'Tā kě shì duōnián de wáng lǎo wǔ, kuài sìshí le, lián nǚ péngyǒu dōu méiyǒu.',
    exampleMeaning: 'Anh ấy là kẻ độc thân lâu năm, đã gần 40 tuổi mà vẫn chưa có bạn gái.',
    arrange: '王老五/他/可是/多年的/，/快/四十/了/，/连/女朋友/都/没有/。/',
  },
  {
    simplified: '窝里斗',
    pinyin: 'wō lǐ dòu',
    explanation: '比喻在内部进行的激烈斗争。',
    explanationPinyin: 'Bǐyù zài nèibù jìnxíng de jīliè dòuzhēng.',
    meaning: 'Nội đấu\n Ý chỉ việc tranh đấu trong nội bộ tập thể.',
    examples:
      '单位要想取得成绩，不能搞窝里斗，消耗内部能量。\n 窝里斗已经给我们造成了不少损失，不能再这样了。',
    examplePinyin:
      'Dānwèi yào xiǎng qǔdé chéngjì, bùnéng gǎo wō lǐ dòu, xiāohào nèibù néngliàng.\n Wō lǐ dòu yǐjīng gěi wǒmen zàochéngle bù shǎo sǔnshī, bùnéng zài zhèyàng le.',
    exampleMeaning:
      'Đơn vị muốn đạt được thành tích thì không thể đấu đá nội bộ, làm tiêu hao năng lượng.\n Việc đấu đá nội bộ đã gây cho chúng ta không ít tổn thất, không thể tiếp tục như vậy nữa.',
    arrange:
      '窝里斗/不能/搞/，/单位/要想/取得成绩/，/消耗/内部能量/。/\n窝里斗/不能/再/这样/了/，/已经/给我们/造成了/不少/损失/。/',
  },
  {
    simplified: '窝囊废',
    pinyin: 'wō nánɡ fèi',
    explanation: '指怯懦无能的人( 含讥讽义) 。',
    explanationPinyin: 'Zhǐ qiènuò wú néng de rén (hán jīfèng yì).',
    meaning: 'Kẻ vô dụng\n Chỉ những người nhút nhát, không có khả năng (mang nghĩa châm biếm).',
    examples: '小丁又被老婆骂成窝囊废了，一声都不敢吭。\n 我可不想做窝囊废，你别拉着我。',
    examplePinyin:
      'Xiǎo Dīng yòu bèi lǎopó mà chéng wō náng fèi le, yī shēng dōu bù gǎn kēng.\n Wǒ kě bù xiǎng zuò wō náng fèi, nǐ bié lāzhe wǒ.',
    exampleMeaning:
      'Tiểu Đinh lại bị vợ mắng là kẻ nhu nhược, không dám ho he một tiếng.\n Tôi không muốn làm kẻ nhu nhược, đừng kéo tôi vào.',
    arrange: '窝囊废/小丁/又被/老婆/骂成/了/，/一声/都/不敢/吭/。/\n窝囊废/我/可不想/做/，/你/别/拉着我/。/',
  },
  {
    simplified: '无底洞',
    pinyin: 'wú dǐ dònɡ',
    explanation: '永远填不满的洞。比喻永远满足不了的欲望和要求。',
    explanationPinyin: 'Yǒngyuǎn tián bù mǎn de dòng. Bǐyù yǒngyuǎn mǎnzú bùliǎo de yùwàng hé yāoqiú.',
    meaning: 'Ám chỉ lòng tham không đáy, không bao giờ thỏa mãn.',
    examples: '你别给他钱，他快成无底洞了。\n',
    examplePinyin: 'Nǐ bié gěi tā qián, tā kuài chéng wú dǐ dòng le.',
    exampleMeaning: 'Đừng đưa tiền cho anh ta nữa, anh ta giống như “hố không đáy”, không bao giờ biết đủ.',
    arrange: '无底洞/他/快成/了/，/你/别/给他/钱/。/',
  },
  {
    simplified: '乌纱帽',
    pinyin: 'wū shā mào',
    explanation: '旧时官员戴的一种帽子。喻指官位。',
    explanationPinyin: 'Jiùshí guānyuán dài de yī zhǒng màozi. Yù zhǐ guānwèi.',
    meaning: 'Chiếc mũ quan thời xưa, ám chỉ địa vị hoặc chức quan của một người.',
    examples: '他关心的不是群众的利益，而是自己头顶的乌纱帽。',
    examplePinyin: 'Tā guānxīn de bùshì qúnzhòng de lìyì, ér shì zìjǐ tóudǐng de wū shā mào.',
    exampleMeaning:
      'Điều anh ta quan tâm không phải là lợi ích của người dân mà chính là chiếc mũ quan trên đầu.',
    arrange: '乌纱帽/他/关心的/不是/群众的/利益/，/而是/自己头顶的/。/',
  },
  {
    simplified: '乌鸦嘴',
    pinyin: 'wū yā zuǐ',
    explanation: '比喻多嘴多舌的人，说倒霉话的人。',
    explanationPinyin: 'Bǐyù duōzuǐ duō shé de rén, shuō dǎoméi huà de rén.',
    meaning: 'Nói gở\n Phép ẩn dụ chỉ những người lắm lời, hay nói điều xui xẻo.',
    examples: '呸! 乌鸦嘴，你就不能说点儿吉利的话吗?\n 你这个乌鸦嘴，净说倒霉的话。',
    examplePinyin:
      'Pēi! Wū yā zuǐ, nǐ jiù bùnéng shuō diǎn er jílì de huà ma?\n Nǐ zhège wū yā zuǐ, jìng shuō dǎoméi de huà.',
    exampleMeaning:
      'Phi! Mồm quạ đen, cậu không thể nói gì may mắn hơn à?\n Cái miệng quạ đen này, toàn nói những lời xui xẻo.',
    arrange: '乌鸦嘴/呸/! /你/就/不能/说点儿/吉利的话/吗/？/\n乌鸦嘴/你这个/，/净/说/倒霉的话/。/',
  },
  {
    simplified: '乌眼鸡似的',
    pinyin: 'wū yǎn jī shì de',
    explanation: '像个好斗的鸡。',
    explanationPinyin: 'Xiàng gè hào dòu de jī.',
    meaning: 'Như gà chọi\n Ý mô tả đối tượng giống như một con gà hiếu chiến.',
    examples: '\n 这两天还是别去招惹他，我看他像个乌眼鸡似的，直想啄人。',
    examplePinyin:
      '\n Zhè liǎng tiān háishì bié qù zhāorě tā, wǒ kàn tā xiànggè wū yǎn jī shì de, zhí xiǎng zhuó rén.',
    exampleMeaning:
      '\n Mấy ngày nay đừng có chọc đến anh ta, trông anh ta như con gà chọi, chỉ muốn mổ người.',
    arrange:
      '\n他 / 招惹 / 去 / 别 / 还是 /这两天 / 人 / 啄 / 想 / 直 /乌眼鸡似的 / 个 / 像 / 他 / 看 / 我 / 。',
  },
  {
    simplified: '下不来台',
    pinyin: 'xià bù lái tái',
    explanation: '比喻处境尴尬窘迫。也说“下不了台”',
    explanationPinyin: 'bǐyù chǔjìng gāngà jiǒngpò, yě shuō "xià bù liǎo tái"',
    meaning: 'Ở trong tình huống khó xử, không thoát ra được. Cũng nói là “下不了台”.',
    examples: '给他留点儿面子，别让他下不来台。 \n他的演讲几次被打断，弄得他很窘迫，下不来台。',
    examplePinyin:
      'Gěi tā liú diǎn er miànzi, bié ràng tā xià bù lái tái. \nTā de yǎn jiǎng jǐ cì bèi dǎ duàn, nòng dé tā hěn jiǒngpò, xià bù lái tái.',
    exampleMeaning:
      'Hãy để lại chút thể diện cho anh ấy, đừng để anh ấy mất mặt. \nBài phát biểu của anh ấy bị gián đoạn nhiều lần, khiến anh ấy rất khó xử, không biết phải làm sao.',
    arrange: '下不来台/别让他/，/给他/留点儿/面子/。/\n下不来台/他的/演讲/几次/被打断/，/弄得/他/很窘迫/。/',
  },
  {
    simplified: '下毒手',
    pinyin: 'xià dú shǒu',
    explanation: '用不人道的、狠毒的方法、手段对待人和事。',
    explanationPinyin: 'yòng bù réndào de, hěndú de fāngfǎ, shǒuduàn duìdài rén héshì',
    meaning: 'Dùng phương pháp tàn nhẫn, không nhân đạo để đối xử với người hoặc một việc nào đó.',
    examples:
      '是谁向那只流浪狗下了毒手，杀死了它? \n在绝望的时候，他对自己的亲人下起了毒手。 \n敌人早晚要下毒手，我们要做好最坏的打算。',
    examplePinyin:
      'Shì shéi xiàng nà zhī liúlàng gǒu xià le dú shǒu, shā sǐ le tā? \nZài juéwàng de shíhòu, tā duì zìjǐ de qīnrén xià qǐ le dú shǒu. \nDírén zǎowǎn yào xià dú shǒu, wǒmen yào zhǔnbèi hǎo zuì huài de dǎsuàn.',
    exampleMeaning:
      'Ai đã ra tay ác độc với con chó hoang, khiến nó chết? \nTrong lúc tuyệt vọng, anh ta đã ra tay với người thân của mình. \nKẻ thù sớm muộn cũng sẽ ra tay, chúng ta phải chuẩn bị cho những điều tồi tệ nhất.',
    arrange:
      '下毒手/是谁/向那只/流浪狗/，/杀死了/它/？/\n下起了毒手/在/绝望的/时候/，/他/对/自己的/亲人/。/\n下毒手/敌人/早晚要/，/我们/要做好/最坏的/打算/。/',
  },
  {
    simplified: '下工夫',
    pinyin: 'xià gōnɡ fu',
    explanation: '下工夫: 努力，花力气。',
    explanationPinyin: 'Xià gōngfū: nǔlì, huā lìqì.',
    meaning: 'Dồn sức và nỗ lực để hoàn thành công việc.',
    examples: '你得下点工夫，把总结报告写好，上次的太糟糕了。\n',
    examplePinyin: 'Nǐ dé xià diǎn gōng fu, bǎ zǒngjié bàogào xiě hǎo, shàngcì de tài zāogāo le.',
    exampleMeaning: 'Anh cần bỏ công sức hơn nữa để hoàn thiện báo cáo, lần trước viết quá tệ.',
    arrange: '下点工夫/你/得/，/把/总结报告/写好/，/上次的/太糟糕了/。/',
  },
  {
    simplified: '下海',
    pinyin: 'xià hǎi\n',
    explanation: '从国有单位辞职。',
    explanationPinyin: 'Cóng guóyǒu dānwèi cízhí.',
    meaning: 'Từ chức tại đơn vị nhà nước.',
    examples: '八十年代，下海的人还真不少。',
    examplePinyin: 'bāshí niándài, xià hǎi de rén hái zhēn bù shǎo.',
    exampleMeaning: 'Vào thập niên 80, rất nhiều người bỏ nhà nước để ra ngoài làm ăn.',
    arrange: '下海/八十年代/，/的人/还真不少/。/',
  },
  {
    simplified: '下马威',
    pinyin: 'xià mǎ wēi',
    explanation:
      '原指官吏初到任时对下属显示的威风，现在泛指一开头就向对方显 示威力。比喻给他一点颜色看看，让他为难或难堪。',
    explanationPinyin:
      'Yuán zhǐ guānlì chū dào rèn shí duì xiàshǔ xiǎnshì de wēifēng, xiànzài fànzhǐ yī kāitóu jiù xiàng duìfāng xiǎnshì wēilì. Bǐyù gěi tā yīdiǎn yánsè kàn kàn, ràng tā wèinán huò nánkān.',
    meaning: 'Ban đầu thể hiện sức mạnh hoặc uy thế để khiến đối phương phải e dè.',
    examples: '他刚来公司就给了大家一个下马威，让人不敢反抗。\n敢和我对着干? 我非得给他一个下马威。',
    examplePinyin:
      'Tā gāng lái gōngsī jiù gěi le dàjiā yī gè xià mǎ wēi, ràng rén bù gǎn fǎnkǎng.\nGǎn hé wǒ duì zhe gàn? Wǒ fēi děi gěi tā yī gè xià mǎ wēi.\n',
    exampleMeaning:
      'Anh ta vừa vào công ty đã khiến mọi người e dè, không ai dám phản đối.\nAnh dám chống đối tôi sao? Tôi nhất định sẽ cho anh một bài học.',
    arrange:
      '下马威/他/刚来/公司/就/给了/大家/一个/，/让人/不敢/反抗/。/\n下马威/敢/和我/对着干/？/我/非得/给他/一个/。/',
  },
  {
    simplified: '吓破胆',
    pinyin: 'xià pò dǎn',
    explanation: '受大惊吓。',
    explanationPinyin: 'Shòu dà jīngxià',
    meaning: 'Bị hoảng sợ',
    examples: '敌人已经吓破了胆，再也不敢进攻了。\n看到蛇，他的胆都吓破了，一路奔了回来。',
    examplePinyin:
      'Bǐyù dǐxì. Dírén yǐjīng xià pò le dǎn, zài yě bù gǎn jìngōngle. \nKàn dào shé, tā de dǎn dōu xià pò le, yīlù bēnle huílái.',
    exampleMeaning:
      'Kẻ thù đã sợ đến mức mất hết can đảm, không dám tấn công nữa.\nThấy con rắn, anh ta sợ đến mức mất hết can đảm, chạy trở lại một mạch.',
    arrange:
      '吓破了胆/敌人/已经/，/再也/不敢/进攻了/。/\n吓破了胆/看到/蛇/，/他的/胆/都/，/一路/奔了回来/。/',
  },
  {
    simplified: '下台',
    pinyin: 'xià tái',
    explanation: '指失去职位。',
    explanationPinyin: 'Zhǐ shīqù zhíwèi.',
    meaning: 'Chỉ việc mất chức vụ.',
    examples:
      '他因为失误而被迫下台，真是可惜。\n担任这个职务一年来，他没有做出任何成绩，迫于舆论压力，他只好下台走人。',
    examplePinyin:
      'Tā yīnwèi shīwù ér bèipò xià tái, zhēnshi kěxí.\nDānrèn zhège zhíwù yī nián lái, tā méiyǒu zuòchū rènhé chéngjì, pòyú yúlùn yālì, tā zhǐhǎo xià tái zǒurén.\n',
    exampleMeaning:
      'Anh ta buộc phải từ chức vì mắc sai lầm, thật đáng tiếc.\nAnh ấy giữ chức này suốt một năm nhưng không đạt được thành tích gì, cuối cùng phải từ chức do áp lực dư luận.\n',
    arrange:
      '下台/他/因为/失误/而/被迫/，/真是/可惜/。/\n下台/担任/这个/职务/一年来/，/他/没有/做出/任何/成绩/，/迫于/舆论/压力/，/他/只好/走人/。/',
  },
  {
    simplified: '象牙塔',
    pinyin: 'xiànɡ yá tǎ',
    explanation: '比喻脱离现实生活的文艺家或知识分子的小天地。',
    explanationPinyin: 'Bǐyù tuōlí xiànshí shēnghuó de wényìjiā huò zhīshì fènzǐ de xiǎo tiāndì.',
    meaning: 'Ám chỉ người xa rời thực tế, chỉ sống trong thế giới nhỏ của riêng mình.',
    examples: '大学就是一座象牙塔，想进去，不容易。\n',
    examplePinyin: 'Dàxué jiùshì yī zuò xiàng yá tǎ, xiǎng jìnqù, bù róngyì.',
    exampleMeaning: 'Đại học giống như một tòa tháp ngà, vào được thì không hề dễ.',
    arrange: '象牙塔/大学/就是/一座/，/想/进去/，/不容易/。/',
  },
  {
    simplified: '小把戏',
    pinyin: 'xiǎo bǎ xì',
    explanation: '小花招，小手段。',
    explanationPinyin: 'Xiǎo huāzhāo, xiǎo shǒuduàn.',
    meaning: 'Khôn vặt\n Những mẹo nhỏ, thủ đoạn nhỏ.',
    examples:
      '他靠祖传的小把戏为生，过得比较艰苦。\n 收起你的小把戏，所有的证据我们都已经掌握，你没必要再耍花招了。',
    examplePinyin:
      'Tā kào zǔ chuán de xiǎo bǎ xì wéi shēng, guò de bǐ jiào jiān kǔ.\n Shōu qǐ nǐ de xiǎo bǎ xì, suǒ yǒu de zhèng jù wǒ men dōu yǐ jīng zhǎng wò, nǐ méi bì yào zài shuǎ huā zhāo le.',
    exampleMeaning:
      'Anh ấy sống nhờ vào những mánh khóe gia truyền, cuộc sống khá vất vả.\nCất đi những mánh khóe của bạn đi, tất cả các chứng cứ chúng tôi đều đã nắm trong tay, bạn không cần phải chơi trò mánh khóe nữa.',
    arrange:
      '小把戏/他/靠/祖传的/为生/，/过得/比较/艰苦/。/\n小把戏/收起/你/的/，/所有的/证据/我们/都已经/掌握/，/你/没必要/再/耍花招/了/。/',
  },
  {
    simplified: '小辫子',
    pinyin: 'xiǎo biàn zi',
    explanation: '比喻把柄。常与“抓”连用。',
    explanationPinyin: 'Bǐyù bǎbǐng. Cháng yǔ “zhuā” lián yòng.',
    meaning: 'Bắt thóp\n Ý chỉ việc nắm được sơ hở của người khác. Thường được dùng với từ "bắt".',
    examples:
      '有的领导就爱抓别人小辫子，搞得员工做什么都畏手畏脚，生怕出错。\n 跟同事不要什么都说，小心别人抓你小辫子。',
    examplePinyin:
      'Yǒu de lǐngdǎo jiù ài zhuā biérén xiǎo biàn zi, gǎo de yuán gōng zuò shén me dōu wèi shǒu wèi jiǎo, shēng pà chū cuò.\n Gēn tóng shì bù yào shén me dōu shuō, xiǎo xīn biérén zhuā nǐ xiǎo biàn zi.',
    exampleMeaning:
      'Một số lãnh đạo thích bắt lỗi người khác, khiến nhân viên làm gì cũng sợ sệt, lo lắng sai sót.\n Đừng nói quá nhiều với đồng nghiệp, cẩn thận kẻo bị bắt lỗi.',
    arrange:
      '抓小辫子/有的/领导/就爱/，/搞得/员工/做什么/都/畏手畏脚/，/生怕/出错/。/\n抓你小辫子/跟/同事/不要/什么/都说/，/小心/别人/。/',
  },
  {
    simplified: '小插曲',
    pinyin: 'xiǎo chā qǔ',
    explanation: '比喻连续进行的事情中插入小小的特殊情况。',
    explanationPinyin: 'Bǐyù liánxù jìnxíng de shìqíng zhōng chā rù xiǎo tèshū qíngkuàng.',
    meaning: 'Ý chỉ một chuỗi tình huống đặc thù liên tục chen ngang vào sự việc.',
    examples:
      '老师为了活跃课堂气氛，有时来个小插曲，说几句幽默话。\n APEC 会议期间，发生了一个小插曲，主人竟然把两国的总统给混淆了。',
    examplePinyin:
      'Lǎo shī wèi le huó yuè kè táng qì fēn, yǒu shí lái gè xiǎo chā qǔ, shuō jǐ jù yōu mò huà.\n APEC huì yì qī jiān, fāshēng le yí gè xiǎo chā qǔ, zhǔ rén jìng rán bǎ liǎng guó de zǒng tǒng gěi hùn xiáo le.',
    exampleMeaning:
      'Giáo viên để làm sống động không khí lớp học, thỉnh thoảng sẽ có một vài tình huống hài hước.\n Trong thời gian diễn ra hội nghị APEC, đã xảy ra một tình huống hài hước, chủ nhà lại nhầm lẫn giữa hai tổng thống của các nước.',
    arrange:
      '小插曲/老师/为了/活跃/课堂气氛/，/有时/来个/，/说几句/幽默话/。/\n小插曲/APEC会议期间/，/发生了/一个/，/主人/竟然/把/两国的/总统/给/混淆了/。/',
  },
  {
    simplified: '小聪明',
    pinyin: 'xiǎo cōnɡ ming',
    explanation: '在小事情上表现出来的聪明（多含贬义）。',
    explanationPinyin: 'Zài xiǎo shìqíng shàng biǎoxiàn chūlái de cōngmíng (duō hán biǎnyì).',
    meaning: 'Thể hiện sự thông minh trong những việc nhỏ (thường mang nghĩa tiêu cực).',
    examples:
      '他虽然有点小聪明，但面对真正的挑战，常常显得手足无措。\n他的确有点小聪明，但在大事上总是出错。',
    examplePinyin:
      'Tā suīrán yǒudiǎn xiǎo cōng ming, dàn miànduì zhēnzhèng de tiǎozhàn, chángcháng xiǎnde shǒuzú wúcuò.\nTā dí què yǒudiǎn xiǎo cōng ming, dàn zài dàshì shàng zǒng shì chūcuò.\n',
    exampleMeaning:
      'Mặc dù anh ta có chút thông minh vặt, nhưng khi đối diện với những thử thách thực sự, anh lại thường lúng túng không biết phải làm gì.\nAnh ấy quả thật thông minh ở những chuyện nhỏ, nhưng trong những việc lớn thì luôn mắc sai lầm.',
    arrange:
      '小聪明/他/虽然/有点/，/但/面对/真正的/挑战/，/常常/显得/手足无措/。/\n小聪明/他的确/有点/，/但在/大事上/总是/出错/。/',
  },
  {
    simplified: '小道消息',
    pinyin: 'xiǎo dào xiāo xi',
    explanation: '指道听途说的非正式消息。',
    explanationPinyin: 'Zhǐ dào tīng túshuō de fēi zhèngshì xiāoxī.',
    meaning: 'Tin lá cải, tin vỉa hè\n Chỉ những tin tức không chính thức được nghe từ người khác.',
    examples: '小道消息，半真半假，不能全信。\n 哪来的小道消息，说话可要负责的。',
    examplePinyin:
      'Xiǎo dào xiāo xi, bàn zhēn bàn jiǎ, bù néng quán xìn.\n Nǎ lái de xiǎo dào xiāo xi, shuōhuà kě yào fùzé de.',
    exampleMeaning:
      'Tin đồn, nửa thật nửa giả, không thể tin hết.\nTin đồn từ đâu ra vậy? Nói gì cũng phải có trách nhiệm.',
    arrange: '小道消息/半真半假/，/不能/全信/。/\n小道消息/哪来的/，/说话/可要/负责的/。/',
  },
  {
    simplified: '小儿科',
    pinyin: 'xiǎo ér kē',
    explanation: '本指医院中专门诊治儿童疾病的部门。比喻不重要的工作部门或事情。',
    explanationPinyin:
      'Běn zhǐ yīyuàn zhōng zhuānmén zhěnzhì ér tóng zhèngzhì bìng de bùmén.\n Bǐyù bù zhòngyào de gōngzuò bùmén huò shìqíng.',
    meaning:
      'Lông gà vỏ tỏi\n Vốn chỉ Khoa Nhi trong bệnh viện. Nay ẩn dụ để nói đến những công việc hoặc bộ phận công tác không quan trọng.',
    examples: '工会是代表广大职工利益的群众组织，它的作用是很大的，你把工会看成小儿科是不对的。\n ',
    examplePinyin:
      'Gōnghuì shì dàibiǎo guǎngdà zhígōng lìyì de qúnzhòng zǔzhī, tā de zuòyòng shì hěn dà de, nǐ bǎ gōnghuì kàn chéng xiǎo ér kē shì bù duì de.\n ',
    exampleMeaning:
      'Công đoàn là tổ chức quần chúng đại diện cho lợi ích người lao động, vai trò của nó rất quan trọng, xem thường công đoàn là sai lầm.\n ',
    arrange:
      '小儿科/工会/是/代表/广大职工/利益的/群众组织/，/它的/作用/是/很大的/，/你/把工会/看成/，/是不对的/。/\n',
  },
  {
    simplified: '小金库',
    pinyin: 'xiǎo jīn kù',
    explanation:
      '指国家机关、团体、企事业单位违反国家财经法规，弄虚作假，将应该\n 纳入账内核算的各种收入转移到账外，隐匿起来，使之变成小团体的“私产”的那部分资金。',
    explanationPinyin:
      'Zhǐ guójiā jīguān, tuántǐ, qǐyè shìyè dānwèi wéifǎn guójiā cáijīng fǎguī, nòng xū zuòjiǎ, jiāng yīnggāi\n nàrù zhàng nèi hésuàn de gè zhǒng shōurù zhuǎnyí dào zhàng wài, yǐn nì qǐlái, shǐ zhī biànchéng xiǎo tuántǐ de “sīchǎn” de nà bùfèn zījīn.',
    meaning:
      'Quỹ đen\n Chỉ phần tiền do các cơ quan nhà nước, tổ chức, đơn vị vi phạm quy định tài chính quốc gia, gian dối,\n chuyển các khoản thu nhập nên được tính vào sổ sách ra ngoài, che giấu, biến thành "tài sản riêng" của một bộ phận nhỏ.',
    examples: '老王藏小金库，被老婆发现了，挨了一顿骂。\n 中央一直在严查国有企业的小金库，收获不小。',
    examplePinyin:
      'Lǎo Wáng cáng xiǎo jīn kù, bèi lǎo pó fā xiàn le, āi le yī dùn mà. \n Zhōng yāng yī zhí zài yán chá guó yǒu qǐ yè de xiǎo jīn kù, shōu huò bù xiǎo.',
    exampleMeaning:
      'Ông Vương giấu quỹ đen, bị vợ phát hiện, bị mắng một trận.\n Trung ương luôn nghiêm tra quỹ đen của các doanh nghiệp nhà nước, thu được không ít.',
    arrange:
      '小金库/老王/藏/，/被/老婆/发现了/，/挨了一顿/骂/。/\n小金库/中央/一直在/严查/国有企业的/，/收获/不小/。/',
  },
  {
    simplified: '小九九',
    pinyin: 'xiǎo jiǔ jiu',
    explanation: '比喻心中的算计或打算。',
    explanationPinyin: 'Bǐyù xīnzhōng de suànjì huò dǎsuàn.',
    meaning: 'Mưu mẹo\n Ý nói những toan tính hoặc kế hoạch trong lòng.',
    examples: '方案还没正式出来，他心中已有了个小九九。\n 他坐着不吭声，正打他的小九九呢。',
    examplePinyin:
      "Fāng'àn hái méi zhèngshì chūlái, tā xīnzhōng yǐ yǒule gè xiǎo jiǔ jiu.\n Tā zuòzhe bù hēng shēng, zhèng dǎ tā de xiǎo jiǔ jiu ne.",
    exampleMeaning:
      'Kế hoạch chưa chính thức có, nhưng trong lòng anh ta đã có tính toán riêng.\n Anh ta ngồi im lặng, đang âm thầm tính toán.',
    arrange: '小九九/方案/还没/正式出来/，/他/心中/已有了/个/。/\n小九九/他/坐着/不吭声/，/正/打他的/呢/。/',
  },
  {
    simplified: '笑面虎',
    pinyin: 'xiào miàn hǔ',
    explanation: '比喻面带笑容的坏人。',
    explanationPinyin: 'Bǐyù miàn dài xiàoróng de huàirén.',
    meaning: 'Biểu thị người xấu nhưng có vẻ mặt tươi cười.\n',
    examples: '隔壁老李就是“笑面虎”，你千万别相信他。 \n你要小心那个“笑面虎”，弄不好也会伤人。',
    examplePinyin:
      'Gébì lǎo lǐ jiùshì “xiào miàn hǔ”, nǐ qiān wàn bié xiāngxìn tā. \nNǐ yào xiǎoxīn nàgè “xiào miàn hǔ”, nòng bù hǎo yě huì shāng rén.',
    exampleMeaning:
      'Ông Lý nhà bên là một ‘hổ miệng cười’, bạn tuyệt đối đừng tin ông ta.\nBạn phải cẩn thận với ‘hổ miệng cười’, không khéo cũng sẽ bị thương.',
    arrange:
      '笑面虎/隔壁/老李/就是/，/你/千万/别/相信/他/。/\n笑面虎/你/要/小心/那个/，/弄不好/也会/伤人/。/',
  },
  {
    simplified: '小算盘',
    pinyin: 'xiǎo suàn pan',
    explanation: '比喻为个人或局部利益的打算。',
    explanationPinyin: 'Bǐyù wèi gèrén huò júbù lìyì de dǎsuàn.',
    meaning: 'Tính toán tư lợi\n Ý chỉ những toan tính hoặc kế hoạch vì lợi ích cá nhân hoặc nhóm nhỏ.',
    examples:
      '打打小算盘，不能说就是不好，但要是侵犯集体或他人利益了，那肯定不合适。\n 看他平时一直打小算盘，不知道做了领导以后会不会还这么小家子气。',
    examplePinyin:
      'Dǎ dǎ xiǎo suàn pán, bù néng shuō jiù shì bù hǎo, dàn yào shì qīn fàn jí tǐ huò tārén lì yì le, nà kěn dìng bù hé shì.\n Kàn tā píng shí yī zhí dǎ xiǎo suàn pán, bù zhī dào zuò le lǐng dǎo yǐ hòu huì bù huì hái zhème xiǎo jiā zǐ qì.',
    exampleMeaning:
      'Toan tính một chút không thể nói là xấu, nhưng nếu xâm phạm lợi ích của tập thể hoặc người khác thì chắc chắn không ổn.\n Thấy anh ấy lúc nào cũng tính toán như vậy, không biết khi làm lãnh đạo có còn nhỏ nhen như thế không.',
    arrange:
      '打小算盘/打打/，/不能说/就是/不好/，/但/要是/侵犯/集体/或/他人/利益了/，/那/肯定/不合适/。/\n打小算盘/看他/平时/一直/，/不知道/做了/领导/以后/会不会/还这么/小家子气/。/',
  },
  {
    simplified: '小字辈',
    pinyin: 'xiǎo zì bèi',
    explanation: '指团体中一些年纪较小、资历较浅的人员。',
    explanationPinyin: 'Zhǐ tuántǐ zhōng yīxiē niánjì jiào xiǎo, zīlì jiào qiǎn de rényuán.',
    meaning: 'Em út\n Chỉ những thành viên trong tập thể có độ tuổi nhỏ, kinh nghiệm nông.',
    examples: '我们都是小字辈，少说多听总没错。\n 在您面前，我们永远是小字辈。',
    examplePinyin:
      'Wǒmen dōu shì xiǎo zì bèi, shǎo shuō duō tīng zǒng méi cuò.\n Zài nín miànqián, wǒmen yǒngyuǎn shì xiǎo zì bèi.',
    exampleMeaning:
      'Chúng tôi đều là lớp trẻ, nói ít nghe nhiều là đúng.\n Trước mặt ngài, chúng tôi mãi là lớp trẻ.',
    arrange: '小字辈/我们/都是/，/少说/多听/总没错/。/\n小字辈/在/您/面前/，/我们/永远是/。/',
  },
  {
    simplified: '心头肉',
    pinyin: 'xīn tóu ròu',
    explanation: '比喻非常宠爱、难以割舍的人和事物。',
    explanationPinyin: "Bǐyù fēicháng chǒng'ài, nányǐ gēshě de rén hé shìwù.",
    meaning: 'Ý chỉ người và sự vật rất được yêu thương và khó có thể từ bỏ.',
    examples:
      '对于父母来说，孩子永远是他们的心头肉。\n子女都是父母的心头肉，但疼爱只能疼在心里，可不能百依百顺。',
    examplePinyin:
      "Duìyú fùmǔ lái shuō, háizi yǒngyuǎn shì tāmen de xīn tóu ròu.\nZǐnǚ dōu shì fùmǔ de xīn tóu ròu, dàn téng'ài zhǐ néng téng zài xīn lǐ, kě bùnéng bǎiyī bǎishùn.",
    exampleMeaning:
      'Đối với cha mẹ, con cái mãi mãi là máu thịt của họ.\nCon cái là bảo bối của cha mẹ, nhưng tình thương phải đặt đúng chỗ, không thể nuông chiều vô điều kiện.',
    arrange:
      '心头肉/对于/父母/来说/，/孩子/永远是/他们的/。/\n心头肉/子女/都是/父母的/，/但/疼爱/只能/疼在/心里/，/可/不能/百依百顺/。/',
  },
  {
    simplified: '绣花枕头',
    pinyin: 'xiù huā zhěn tou',
    explanation: '比喻徒有外表而无学识、无才能的人。',
    explanationPinyin: 'Bǐyù túyǒu wàibiǎo ér wú xuézhī, wú cáinéng de rén.',
    meaning:
      'Thùng rỗng kêu to\n So sánh với những người chỉ có bề ngoài mà không có tri thức, không có tài năng.',
    examples: '单位里的博士只是绣花枕头，没什么大用处。\n 我看小美是个绣花枕头，没什么真本事。',
    examplePinyin:
      'Dānwèi lǐ de bóshì zhǐ shì xiù huā zhěn tou, méi shénme dà yòngchù.\n Wǒ kàn Xiǎoměi shì gè xiù huā zhěn tou, méi shénme zhēn běnshì.',
    exampleMeaning:
      'Tiến sĩ ở đơn vị chỉ như cái gối thêu hoa, chẳng hữu ích gì.\n Theo tôi, cô Mỹ chỉ là cái gối thêu hoa, không có thực tài.',
    arrange:
      '绣花枕头/单位里/的/博士/只是/，/没什么/大用处/。/\n绣花枕头/我看/小美/是个/，/没什么/真本事/。/',
  },
  {
    simplified: '演独角戏',
    pinyin: 'yǎn dú jiǎo xì',
    explanation: '一个人表演的戏，比喻没人帮忙。',
    explanationPinyin: 'yīgèrén biǎoyǎn de xì, bǐyù méi rén bāngmáng',
    meaning: 'Một người tự mình biểu diễn, chỉ việc không có ai giúp đỡ.',
    examples: '\n你们都撂挑子了，让他一个人演独角戏怎么行。',
    examplePinyin: '\nNǐmen dōu liào tiāozi le, ràng tā yīgè rén yǎn dú jiǎo xì zěnme xíng.',
    exampleMeaning: '\nMọi người đều bỏ cuộc, để anh ta một mình diễn đơn độc thì sao được.',
    arrange: '\n你们/都/演独角戏/撂挑子/了，让/他/一个人/怎么行。',
  },
  {
    simplified: '眼中钉',
    pinyin: 'yǎn zhōnɡ dīnɡ',
    explanation: '比喻心中最讨厌、最憎恨的人。',
    explanationPinyin: 'Bǐyù xīn zhōng zuì tǎoyàn, zuì zēnghèn de rén.',
    meaning: 'Người mình căm ghét hoặc ghét bỏ nhất.',
    examples: '小王成了他的眼中钉，一心想拔掉。\n',
    examplePinyin: 'xiǎo wáng chéngle tā de yǎn zhōng dīng, yīxīn xiǎng bá diào.',
    exampleMeaning: 'Tiểu Vương như cái gai trong mắt hắn, chỉ muốn loại bỏ cho bằng được.',
    arrange: '眼中钉/小王/成了/他的/，/一心/想/拔掉/。/',
  },
  {
    simplified: '摇钱树',
    pinyin: 'yáo qián shù',
    explanation: '神话中的一种宝树，一摇晃就会有很多钱落下来。比喻借以获取钱 财的人或物。',
    explanationPinyin:
      'Shénhuà zhōng de yī zhǒng bǎo shù, yī yáohuàng jiù huì yǒu hěnduō qián luòxià lái. Bǐyù jièyǐ huòqǔ qiáncái de rén huò wù.',
    meaning:
      'Một loại cây quý trong thần thoại, chỉ cần rung lắc sẽ có rất nhiều tiền rơi xuống. Dùng để so sánh với người hoặc vật giúp kiếm tiền.',
    examples: '这个养殖场给他们家带来了很可观的收益，是他们家的摇钱树。 \n新产品很热销，成了公司的摇钱树。',
    examplePinyin:
      'Zhège yǎngzhí chǎng gěi tāmen jiā dài láile hěn kěguān de shōuyì, shì tāmen jiā de yáo qián shù. \nXīn chǎnpǐn hěn rè xiāo, chéngle gōngsī de yáo qián shù.',
    exampleMeaning:
      'Trang trại chăn nuôi này đã mang lại thu nhập đáng kể cho gia đình họ, là cây tiền tài của gia đình họ.\nSản phẩm mới bán rất chạy, đã trở thành cây tiền thu tiền của công ty.',
    arrange:
      '摇钱树/这个/养殖场/给/他们家/带来了/很可观的/收益/，/是/他们家的/。/\n摇钱树/新产品/很热销/，/成了/公司的/。/',
  },
  {
    simplified: '夜猫子',
    pinyin: 'yè māo zi',
    explanation: '指特别喜欢熬夜的人。',
    explanationPinyin: 'Zhǐ tèbié xǐhuān áoyè de rén.',
    meaning: 'Chỉ những người đặc biệt thích thức khuya.',
    examples: '他是有名的“夜猫子”，不到 12 点不会睡觉。\n他那个“夜猫子”，现在准没睡，你看，灯还亮着呢。',
    examplePinyin:
      'Tā shì yǒumíng de “yè māo zi”, bù dào 12 diǎn bù huì shuìjiào. \nTā nàgè “yè māo zi”, xiànzài zhǔn méi shuì, nǐ kàn, dēng hái liàng zhene.',
    exampleMeaning:
      'Anh ấy là một ‘con cú đêm’ nổi tiếng, không ngủ trước 12 giờ.\nAnh ta là ‘con cú đêm’, chắc chắn giờ vẫn chưa ngủ, bạn xem, đèn vẫn sáng.',
    arrange:
      '夜猫子/他/是/有名的/“”/，/不到/12点/不会/睡觉/。/\n夜猫子/他/那个/“”/，/现在/准没睡/，/你看/，/灯/还亮着呢/。/',
  },
  {
    simplified: '一把鼻涕一把眼泪',
    pinyin: 'yī bǎ bí tì yī bǎ lèi',
    explanation: '伤心地哭。',
    explanationPinyin: 'Shāngxīn de kū.',
    meaning: 'Chỉ trạng thái khóc lóc, thể hiện sự đau buồn.',
    examples:
      '他看完电影后，一把鼻涕一把眼泪，特别感动。\n我在那儿一把鼻涕一把眼泪，可谁知结局并没有那么坏。',
    examplePinyin:
      'Tā kàn wán diànyǐng hòu, yī bǎ bí tì yī bǎ yǎn lèi, tèbié gǎndòng.\nWǒ zài nàr yī bǎ bí tì yī bǎ yǎn lèi, kě shéi zhī jiéjú bìng méiyǒu nàme huài.',
    exampleMeaning:
      'Sau khi xem xong bộ phim, anh ấy xúc động đến rơi nước mắt tèm lem.\nTôi cũng đã khóc hết nước mắt, nhưng cuối cùng kết cục lại không tệ như tôi tưởng.',
    arrange:
      '一把鼻涕一把眼泪/他/看完/电影后/，/，/特别/感动/。/\n一把鼻涕一把眼泪/我/在那儿/，/可/谁知/结局/并没有/那么坏/。/',
  },
  {
    simplified: '一把手',
    pinyin: 'yī bǎ shǒu',
    explanation: '指非常能干的人。也说“一把好手”。单位或组织的主要负责人。指带头人。',
    explanationPinyin:
      'Zhǐ fēicháng nénggàn de rén. Yě shuō “yī bǎ hǎoshǒu”. Dānwèi huò zǔzhī de zhǔyào fùzé rén. Zhǐ dàitóu rén.',
    meaning:
      'Chỉ người rất có năng lực. Cũng nói là “一把好手”.Cũng có thể chỉ người phụ trách chính trong một đơn vị hoặc tổ chức.',
    examples:
      '这个项目的负责人与客户沟通得非常顺利，真是一把手。\n我们单位的一把手处理问题时公平合理，很得人心。',
    examplePinyin:
      'Zhège xiàngmù de fùzé rén yǔ kèhù gōutōng dé fēicháng shùnlì, zhēnshi yī bǎ shǒu.\nWǒmen dānwèi de yī bǎ shǒu chǔlǐ wèntí shí gōngpíng hélǐ, hěn dé rénxīn.',
    exampleMeaning:
      'Người phụ trách dự án này giao tiếp rất suôn sẻ với khách hàng, quả thật là một chuyên gia tài giỏi.\nNgười đứng đầu cơ quan chúng tôi giải quyết vấn đề rất công bằng và hợp lý, được mọi người kính trọng.\n',
    arrange:
      '一把手/这个/项目的/负责人/与/客户/沟通得/非常/顺利/，/真是/。/\n一把手/我们/单位的/，/处理/问题时/公平/合理/，/很得/人心/。/',
  },
  {
    simplified: '一百八十度',
    pinyin: 'yī bǎi bā shí dù',
    explanation: '比喻与原来相反。',
    explanationPinyin: 'Bǐyù yǔ yuánlái xiāngfǎn.',
    meaning: 'Diễn tả sự thay đổi hoàn toàn, trái ngược với trạng thái trước đó.',
    examples:
      '她的态度一百八十度转变，让大家都感到意外。\n他来了个一百八十度的大转变，再也不喝酒赌博了，像是换了一个人。',
    examplePinyin:
      'Tā de tàidù yī bǎi bā shí dù zhuǎnbiàn, ràng dàjiā dōu gǎndào yìwài.\nTā lái le gè yī bǎi bā shí dù de dà zhuǎnbiàn, zài yě bù hējiǔ dǔbó le, xiàng shì huàn le yī gè rén.\n',
    exampleMeaning:
      'Thái độ của cô ấy thay đổi hoàn toàn, khiến mọi người rất ngạc nhiên.\nAnh ấy đã thay đổi 180 độ, bỏ rượu chè cờ bạc, như thể trở thành một con người mới.',
    arrange:
      '一百八十度/她的/态度/转变/，/让/大家/都/感到/意外/。/\n一百八十度/他/来了个/大转变/，/再也/不/喝酒/赌博了/，/像是/换了/一个人/。/',
  },
  {
    simplified: '一边倒',
    pinyin: 'yī biān dǎo',
    explanation: '一边倒: 朝一个方向倾斜。比喻人的立场、思想、情绪等都倾向一个方面。也\n说“一面倒”。',
    explanationPinyin:
      'Yībiān dǎo: Cháo yī gè fāngxiàng qīngxié. Bǐyù rén de lìchǎng, sīxiǎng, qíngxù děng dōu qīngxiàng yī gè fāngmiàn. Yě shuō "yīmiàn dǎo."\n',
    meaning:
      'Hoàn toàn nghiêng về một phía: Nghiêng hẳn về một hướng. Dùng để ví lập trường, tư tưởng, cảm xúc, v.v., của con người đều nghiêng về một phía. Cũng có cách nói là“一面倒”.',
    examples: '这场比赛的结果是一边倒，完全没有悬念。\n',
    examplePinyin: 'Zhè chǎng bǐsài de jiéguǒ shì yī biān dǎo, wánquán méiyǒu xuánniàn.\n',
    exampleMeaning: 'Kết quả của trận đấu này hoàn toàn nghiêng về một bên, không hề có gì bất ngờ.\n',
    arrange: '一边倒/这场/比赛的/结果/是/，/完全/没有/悬念/。/\n',
  },
  {
    simplified: '一刀切',
    pinyin: 'yī dāo qiē',
    explanation: '比喻用划一的办法处理情况或性质不同的事物。',
    explanationPinyin: 'Bǐyù yòng huàyī de bànfǎ chǔlǐ qíngkuàng huò xìngzhì bùtóng de shìwù.',
    meaning: 'Nói về việc áp dụng cùng một phương pháp cho những tình huống khác nhau.',
    examples: '对待不同情况不能一刀切，应该灵活处理。\n工作上不搞一刀切，但要协调一致。',
    examplePinyin:
      'Duìdài bùtóng qíngkuàng bùnéng yī dāo qiē, yīnggāi línghuó chǔlǐ.\nGōngzuò shàng bù gǎo yī dāo qiē, dàn yào xiétiáo yīzhì.',
    exampleMeaning:
      'Không thể áp dụng một quy tắc cho mọi trường hợp, cần xử lý linh hoạt theo tình huống.\nTrong công việc, không nên áp dụng quy định cứng nhắc, nhưng vẫn phải duy trì sự nhất quán.\n',
    arrange: '一刀切/对待/不同/情况/不能/，/应该/灵活/处理/。/\n一刀切/工作上/不搞/，/但要/协调/一致/。/',
  },
  {
    simplified: '一朵花',
    pinyin: 'yī duǒ huā',
    explanation: '指人有魅力。',
    explanationPinyin: 'Zhǐ rén yǒu mèilì.',
    meaning: 'Mô tả người có sức hấp dẫn, thu hút.',
    examples: '她的穿着真好看，宛如一朵花一样绚丽。\n人说姑娘十八一朵花，但她跟小时候一样，还是土得很。',
    examplePinyin:
      'Tā de chuānzhuó zhēn hǎokàn, wǎnrú yī duǒ huā yīyàng xuànlì.\nRén shuō gūniang shíbā yī duǒ huā, dàn tā gēn xiǎoshíhòu yīyàng, hái shì tǔ de hěn.',
    exampleMeaning:
      'Cô ấy ăn mặc rất đẹp, rực rỡ như một bông hoa nở rộ.\nNgười ta nói con gái tuổi mười tám là đẹp nhất, nhưng cô ấy vẫn giản dị như khi còn bé.',
    arrange:
      '一朵花/她的/穿着/真好看/，/宛如/一样/绚丽/。/\n一朵花/人说/姑娘/十八/，/但/她/跟/小时候/一样/，/还是/土得很/。/',
  },
  {
    simplified: '一个鼻子出气',
    pinyin: 'yī gè bí zi chū qì',
    explanation: '勾结在一起，对某事采取同样的态度和主张。',
    explanationPinyin: 'Gōujié zài yīqǐ, duì mǒu shì cǎiqǔ tóngyàng de tàidù hé zhǔzhāng',
    meaning: 'Thông đồng cùng nhau, có cùng lập trường về một vấn đề.',
    examples: '他们俩一个鼻子出气，关系很好。\n地方政府和房产商一个鼻孔出气的话，就太腐败了。',
    examplePinyin:
      'Tāmen liǎ yī gè bí zi chū qì, guānxì hěn hǎo.\nDìfāng zhèngfǔ hé fángchǎnshāng yī gè bízi chū qì de huà, jiù tài fǔbài le.',
    exampleMeaning:
      'Họ rất hòa hợp, giống như cùng một hơi thở.\nNếu chính quyền địa phương cấu kết với nhà đầu tư bất động sản, thì đó là biểu hiện của tham nhũng.',
    arrange: '一个鼻子出气/他们俩/，/关系/很好/。/\n一个鼻孔出气/地方政府/和/房产商/的话/，/就/太腐败了/。/',
  },
  {
    simplified: '一个劲儿',
    pinyin: 'yī gè jìnr',
    explanation: '表示不停地。',
    explanationPinyin: 'Biǎoshì bù tíng de.',
    meaning: 'Thể hiện sự liên tục, không ngừng nghỉ.',
    examples: '她一个劲儿地练习，终于通过了考试。\n他急得一个劲儿地提醒我。',
    examplePinyin: 'Tā yī gè jìnr de liànxí, zhōngyú tōngguò le kǎoshì.\nTā jí de yī gè jìnr de tíxǐng wǒ.\n',
    exampleMeaning:
      'Cô ấy chăm chỉ luyện tập không ngừng và cuối cùng đã vượt qua kỳ thi.\nAnh ta lo lắng đến mức liên tục nhắc nhở tôi không ngừng.\n',
    arrange: '一个劲儿/她/地/练习/，/终于/通过了/考试/。/\n一个劲儿/他/急得/地/提醒/我/。/',
  },
  {
    simplified: '一根筋',
    pinyin: 'yī gēn jīn',
    explanation: '指认死理，不妥协。',
    explanationPinyin: 'Zhǐ rèn sǐ lǐ, bù tuǒxié.',
    meaning: 'Mô tả người cứng nhắc, không linh hoạt trong tư tưởng.',
    examples: '他真是一根筋，偏执得连朋友都受不了。\n这些官员太死板，太一根筋，没有一点弹性。',
    examplePinyin:
      'Tā zhēnshi yī gēn jīn, piānzhí de lián péngyǒu dōu shòu bù liǎo.\nZhèxiē guānyuán tài sǐbǎn, tài yī gēn jīn, méiyǒu yīdiǎn tánxìng.\n',
    exampleMeaning:
      'Anh ta quả thật là một người cố chấp, đến bạn bè cũng không chịu nổi.\nNhững quan chức này quá bảo thủ và cứng nhắc, không có chút linh hoạt nào.\n',
    arrange:
      '一根筋/他/真是/，/偏执得/连/朋友/都/受不了/。/\n一根筋/这些/官员/太死板/，/太/，/没有/一点/弹性/。/',
  },
  {
    simplified: '一棍子打死 ',
    pinyin: 'yī gùn zi dǎ sǐ\n',
    explanation: '不问明原因就把对方打死，完全否决。',
    explanationPinyin: 'Bù wèn míng yuányīn jiù bǎ duìfāng dǎ sǐ, wánquán fǒujué.',
    meaning: 'Phủ nhận hoàn toàn mà không cần tìm hiểu lý do.',
    examples: '不要因为他曾经犯错就什么都错，我们不能把他一棍子打死。',
    examplePinyin: 'Bùyào yīnwèi tā céngjīng fàn cuò jiù shénme dōu cuò, wǒmen bùnéng bǎ tā yī gùn zi dǎ sǐ.',
    exampleMeaning:
      'Đừng vì anh ta từng phạm lỗi mà phủ nhận tất cả, không nên “đánh chết” người ta chỉ vì một lần sai lầm.',
    arrange: '一棍子打死/不要/因为/他/曾经/犯错/就/什么/都错/，/我们/不能/把/他/。/',
  },
  {
    simplified: '一锅粥',
    pinyin: 'yī guō zhōu',
    explanation: '比喻非常混乱，一团糟。',
    explanationPinyin: 'Bǐyù fēicháng hǔnluàn, yī tuán zāo.',
    meaning: 'Diễn tả sự hỗn độn, không có tổ chức.',
    examples: '这个项目进展得一锅粥，大家都不知所措。\n这个新来的会计，不熟悉业务，把公司账目搞成了一锅粥。',
    examplePinyin:
      'Zhège xiàngmù jìnzhǎn de yī guō zhōu, dàjiā dōu bù zhī suǒ cuò.\nZhège xīn lái de kuàijì, bù shúxī yèwù, bǎ gōngsī zhàngmù gǎo chéng le yī guō zhōu.',
    exampleMeaning:
      'Dự án này tiến triển rối ren, mọi người đều không biết phải làm gì.\nKế toán mới không quen việc, khiến sổ sách công ty trở thành một mớ hỗn độn.',
    arrange:
      '一锅粥/这个/项目/进展得/，/大家/都/不知所措/。/\n一锅粥/这个/新来的/会计/，/不熟悉/业务/，/把/公司/账目/搞成了/。/',
  },
  {
    simplified: '一路货',
    pinyin: 'yī lù huò',
    explanation: '同类或同等的货物。比喻同类的人或事物( 含贬义) 。也说“一路货\n色”。',
    explanationPinyin:
      'Tónglèi huò tóngděng de huòwù. Bǐyù tónglèi de rén huò shìwù (hán biǎnyì). Yě shuō "yīlù huòsè."',
    meaning:
      'Hàng hóa cùng loại hoặc tương đương. Dùng để ví von những người hoặc sự việc cùng một loại (mang ý nghĩa tiêu cực). Cũng có cách nói là 也说“一路货色”.',
    examples: '他们俩真是一一路货，都不愿意认真工作。\n他和小山是一路货，都不是什么好东西。',
    examplePinyin:
      'Tāmen liǎ zhēnshi yī lù huò, dōu bù yuànyì rènzhēn gōngzuò.\nTā hé xiǎo shān shì yī lù huò, dōu bù shì shénme hǎo dōngxī.',
    exampleMeaning:
      'Họ quả thật cùng một giuộc, không ai muốn làm việc nghiêm túc.\nAnh ta và Tiểu Sơn đều là những kẻ không ra gì.',
    arrange:
      '一路货/他们俩/真是/，/都/不/愿意/认真/工作/。/\n一路货/他/和/小山/是/，/都/不/是什么/好东西/。/',
  },
  {
    simplified: '一盘棋',
    pinyin: 'yī pán qí',
    explanation: '比喻一个整体或全局。',
    explanationPinyin: 'Bǐyù yīgè zhěngtǐ huò quánjú.',
    meaning: 'Mô tả toàn bộ, cái nhìn tổng thể về một vấn đề.',
    examples:
      '你不能只考虑眼前的利益，全局才是一盘棋。\n你只考虑你们系的情况，忘了全校是一盘棋，这是不妥当的。',
    examplePinyin:
      'Nǐ bùnéng zhǐ kǎolǜ yǎnqián de lìyì, quánjú cái shì yī pán qí.\nNǐ zhǐ kǎolǜ nǐmen xì de qíngkuàng, wàng le quán xiào shì yī pán qí, zhè shì bù tuǒdàng de.',
    exampleMeaning:
      'Không thể chỉ nhìn vào lợi ích trước mắt, mà phải cân nhắc toàn cục.\nAnh chỉ nghĩ đến lợi ích của khoa mình, mà quên rằng toàn trường là một chỉnh thể, điều này thật không hợp lý.\n',
    arrange:
      '一盘棋/你/不能/只/考虑/眼前的/利益/，/全局/才是/。/\n一盘棋/你/只/考虑/你们系的/情况/，/忘了/全校/是/，/这是/不妥当的/。/',
  },
  {
    simplified: '一条龙',
    pinyin: 'yī tiáo lónɡ',
    explanation: '比喻生产程序或工作上的紧密联系和配合。',
    explanationPinyin: 'Bǐyù shēngchǎn chéngxù huò gōngzuò shàng de jǐnmì liánxì hé pèihé.',
    meaning: 'Chỉ sự liên kết chặt chẽ trong quy trình sản xuất hoặc công việc.',
    examples: '这家酒店提供一条龙的服务，从接送到住宿都非常方便。\n机动车税收将实行“一条龙”管理。',
    examplePinyin:
      'Zhè jiā jiǔdiàn tígōng yī tiáo lóng de fúwù, cóng jiēsòng dào zhùsù dōu fēicháng fāngbiàn.\nJīdòngchē shuìshōu jiāng shíxíng “yī tiáo lóng” guǎnlǐ.\n',
    exampleMeaning:
      'Khách sạn này cung cấp dịch vụ trọn gói, từ đưa đón cho đến lưu trú, rất tiện lợi.\nViệc thu thuế xe cơ giới sẽ được quản lý theo quy trình khép kín.',
    arrange:
      '一条龙/这家/酒店/提供/的/服务/，/从/接送/到/住宿/都/非常/方便/。/\n一条龙/机动车/税收/将/实行/管理/。/',
  },
  {
    simplified: '一条心',
    pinyin: 'yī tiáo xīn',
    explanation: '携手共进的意思。',
    explanationPinyin: 'Xiéshǒu gòng jìn de yìsi.',
    meaning: 'Chỉ sự hợp tác, cùng nhau tiến bộ.',
    examples: '我们团队只有一条心，才能克服困难。\n只要大家一条心，我想我们能攻克这个难关的。',
    examplePinyin:
      'Wǒmen tuánduì zhǐyǒu yī tiáo xīn, cái néng kèfú kùnnán.\nZhǐyào dàjiā yī tiáo xīn, wǒ xiǎng wǒmen néng gōngkè zhège nán guān de.\n',
    exampleMeaning:
      'Chỉ khi đội ngũ cùng đồng lòng, chúng ta mới có thể vượt qua khó khăn.\nNếu tất cả mọi người cùng đồng tâm hiệp lực, tôi tin rằng chúng ta sẽ vượt qua thử thách này.',
    arrange:
      '一条心/我们/团队/只有/，/才能/克服/困难/。/\n一条心/只要/大家/，/我想/我们/能/攻克/这个/难关/的/。/',
  },
  {
    simplified: '一头雾水',
    pinyin: 'yī tóu wù shuǐ',
    explanation: '指糊涂不清。',
    explanationPinyin: 'Zhǐ hútú bù qīng.',
    meaning: 'Kẻ lẫn lộn, không rõ ràng.',
    examples: '还没起床，就被骂了一通，真是一头雾水。',
    examplePinyin: 'hái méi qǐchuáng, jiù bèi mà le yī tōng, zhēn shì yī tóu wù shuǐ.',
    exampleMeaning: 'Vừa thức dậy đã bị mắng, tôi chẳng hiểu chuyện gì đang xảy ra.',
    arrange: '一头雾水/还没/起床/，/就被/骂了/一通/，/真是/。/',
  },
  {
    simplified: '一团乱麻',
    pinyin: 'yī tuán luàn má',
    explanation: '比喻心绪或事物紊乱。',
    explanationPinyin: 'Bǐyù xīnxù huò shìwù wěnluàn.',
    meaning: 'Chỉ tâm trạng hoặc tình huống lộn xộn.',
    examples:
      '这个计划一开始就很混乱，现在变成了一团乱麻。\n事情本来可以顺利解决，这一下让你搅成了一团乱麻。',
    examplePinyin:
      'Zhège jìhuà yī kāishǐ jiù hěn hùnluàn, xiànzài biàn chéng le yī tuán luàn má.\nShìqíng běnlái kěyǐ shùnlì jiějué, zhè yī xià ràng nǐ jiǎo chéng le yī tuán luàn má.\n',
    exampleMeaning:
      'Kế hoạch này ngay từ đầu đã rối ren, và bây giờ nó trở thành một mớ bòng bong.\nMọi chuyện vốn dĩ có thể được giải quyết suôn sẻ, nhưng anh lại làm mọi thứ trở nên phức tạp.\n',
    arrange:
      '一团乱麻/这个/计划/一开始/就/很/混乱/，/现在/变成了/。/\n一团乱麻/事情/本来/可以/顺利/解决/，/这一下/让/你/搅成了/。/',
  },
  {
    simplified: '一团糟',
    pinyin: 'yī tuán zāo',
    explanation: '非常混乱、不整齐、肮脏。',
    explanationPinyin: 'Fēicháng hǔnluàn, bù zhěngqí, āngzāng.',
    meaning: 'Mô tả tình trạng lộn xộn, không gọn gàng, bẩn thỉu.',
    examples: '他的房间里一团糟，根本找不到东西。\n学校网站简直是一团糟，太难登录上去了!',
    examplePinyin:
      'Tā de fángjiān lǐ yī tuán zāo, gēnběn zhǎo bù dào dōngxī.\nXuéxiào wǎngzhàn jiǎnzhí shì yī tuán zāo, tài nán dēnglù shàng qù le!\n',
    exampleMeaning:
      'Phòng của anh ấy bừa bộn đến mức không thể tìm được thứ gì.\nTrang web của trường thật sự hỗn loạn, rất khó truy cập được!',
    arrange: '一团糟/他的/房间里/，/根本/找不到/东西/。/\n一团糟/学校/网站/简直是/，/太难/登录/上去了/！/',
  },
  {
    simplified: '一窝蜂',
    pinyin: 'yī wō fēnɡ',
    explanation: '一窝蜂: 比喻许多人乱哄哄地同时说话或行动。也比喻混乱的局面或烦乱的\n心情。',
    explanationPinyin:
      'Yī wō fēng: Bǐyù xǔduō rén luàn hōnghōng de tóngshí shuōhuà huò xíngdòng. Yě bǐyù hùnluàn de júmiàn huò fánluàn de xīnqíng.\n',
    meaning:
      'Như một tổ ong: Dùng để ví nhiều người ồn ào, náo loạn cùng nói chuyện hoặc hành động cùng lúc. Cũng dùng để chỉ tình cảnh hỗn loạn hoặc tâm trạng bối rối, rối ren.',
    examples: '大家听到消息后，一窝蜂地跑去参与活动。\n下课了，同学们一窝蜂地涌出了教室。',
    examplePinyin:
      'Dàjiā tīng dào xiāoxi hòu, yī wō fēng de pǎo qù cānyù huódòng.\nXiàkè le, tóngxuémen yī wō fēng de yǒng chū le jiàoshì.\n',
    exampleMeaning:
      'Nghe tin xong, mọi người đồng loạt kéo đến tham gia sự kiện.\nSau giờ học, học sinh ùa ra khỏi lớp như bầy ong vỡ tổ.',
    arrange: '一窝蜂/大家/听到/消息后/，/地/跑去/参与/活动/。/\n一窝蜂/下课了/，/同学们/地/涌出了/教室/。/',
  },
  {
    simplified: '一言堂',
    pinyin: 'yī yán tánɡ',
    explanation: '比喻领导缺乏民主作风。',
    explanationPinyin: 'Bǐyù lǐngdǎo quēfá mínzhǔ zuòfēng.',
    meaning: 'Mô tả tình trạng lãnh đạo độc tài, không có tinh thần dân chủ.',
    examples: '在这个部门里，经理独裁，一言堂的现象很严重。\n我们从这个案件中看到了一言堂的危害。',
    examplePinyin:
      'Zài zhège bùmén lǐ, jīnglǐ dúcái, yī yán táng de xiànxiàng hěn yánzhòng.\nWǒmen cóng zhège ànjiàn zhōng kàndào le yī yán táng de wèihài.',
    exampleMeaning:
      'Trong bộ phận này, giám đốc độc đoán và hiện tượng chuyên quyền rất nghiêm trọng.\nChúng ta có thể thấy rõ tác hại của việc chuyên quyền từ vụ việc này.',
    arrange:
      '一言堂/在/这个/部门里/，/经理/独裁/，/的/现象/很严重/。/\n一言堂/我们/从/这个/案件中/看到了/的/危害/。/',
  },
  {
    simplified: '一阵风',
    pinyin: 'yī zhèn fēnɡ',
    explanation: '比喻行动时间短，不能持久。',
    explanationPinyin: 'Bǐyù xíngdòng shíjiān duǎn, bùnéng chíjiǔ.',
    meaning: 'Chỉ hành động diễn ra trong thời gian ngắn, không bền vững.',
    examples: '他做事情总是一阵风，没什么长久的计划。\n',
    examplePinyin: 'Tā zuò shìqíng zǒng shì yī zhèn fēng, méi shénme chángjiǔ de jìhuà.\n',
    exampleMeaning: 'Anh ta làm việc như một cơn gió thoảng, không có kế hoạch dài hạn nào.\n',
    arrange: '一阵风/他/做事情/总是/，/没什么/长久的/计划/。/\n',
  },
  {
    simplified: '硬骨头',
    pinyin: 'yìng gǔ tou',
    explanation: '比喻坚强不屈的人或气概。也比喻艰巨的任务。',
    explanationPinyin: 'Bǐyù jiānqiáng bù qū de rén huò qìgài. Yě bǐyù jiānjù de rènwù.',
    meaning:
      'Vững như bàn thạch\n Ý ẩn dụ nói đến những người kiên cường không khuất phục hoặc khí phách. Cũng dùng để chỉ những nhiệm vụ gian nan.',
    examples: '前面是块硬骨头，敢不敢啃?\n 他是个硬骨头，从他嘴里搞不到什么消息的。',
    examplePinyin:
      'Qiánmiàn shì kuài yìng gǔ tou, gǎn bù gǎn kěn?\n Tā shì gè yìng gǔ tou, cóng tā zuǐ lǐ gǎo bù dào shénme xiāoxi de.',
    exampleMeaning:
      'Phía trước là thử thách khó nhằn, dám đương đầu không?\n Anh ấy là người cứng cỏi, không thể moi được thông tin từ anh ta.',
    arrange: '硬骨头/前面/是块/，/敢不敢/啃/？/\n硬骨头/他/是个/，/从/他/嘴里/搞不到/什么/消息的/。/',
  },
  {
    simplified: '硬着头皮',
    pinyin: 'yìng zhe tóu pí',
    explanation: '比喻勉强去做不愿做的事情。',
    explanationPinyin: 'Bǐyù miǎnqiáng qù zuò bù yuàn zuò de shìqíng.',
    meaning: 'Đó là một phép ẩn dụ cho việc miễn cưỡng làm điều không muốn làm.',
    examples:
      '明知不行，但迫于压力，只好硬着头皮上。\n 他很讨厌当官的，认为他们很官僚，但需要政府部门盖章，只好硬着头皮去了。',
    examplePinyin:
      'Míng zhī bù xíng, dàn pò yú yālì, zhǐ hǎo yìng zhe tóu pí shàng.\n Tā hěn tǎoyàn dāngguān de, rènwéi tāmen hěn guānliáo, dàn xūyào zhèngfǔ bùmén gàizhāng, zhǐ hǎo yìng zhe tóu pí qù le.',
    exampleMeaning:
      'Biết là không thể, nhưng do áp lực, chỉ còn cách cắn răng mà làm.\n Anh ta rất ghét quan chức, cho rằng họ rất quan liêu, nhưng cần có dấu của cơ quan nhà nước, đành phải cắn răng đi.',
    arrange:
      '硬着头皮/明知/不行/，/但/迫于/压力/，/只好/上/。/\n硬着头皮/他/很/讨厌/当官的/，/认为/他们/很/官僚/，/但/需要/政府部门/盖章/，/只好/去了/。/',
  },
  {
    simplified: '应声虫 ',
    pinyin: 'yìnɡ shēnɡ chónɡ',
    explanation: '比喻随声附和的人。',
    explanationPinyin: 'Bǐyù suíshēng fùhè de rén.',
    meaning: 'Kẻ a dua, luôn đồng tình và làm theo người khác.',
    examples: '你就是一个应声虫，很没劲。\n',
    examplePinyin: 'Nǐ jiùshì yī gè yìng shēng chóng, hěn méi jìn.',
    exampleMeaning: 'Bạn đúng là người chỉ biết hùa theo, chẳng có chút thú vị nào.',
    arrange: '应声虫/你/就是/一个/，/很/没劲/。/',
  },
  {
    simplified: '有板有眼',
    pinyin: 'yǒu bǎn yǒu yǎn',
    explanation:
      '比喻言语、行为有条理。板眼，指民族音乐和戏曲中的节拍，每小节中最强的拍子叫板，其余的拍子叫眼。',
    explanationPinyin:
      'bǐyù yányǔ, xíngwéi yǒu tiáolǐ. bǎnyǎn, zhǐ mínzú yīnyuè hé xìqǔ zhōng de jiépái, měi xiǎojié zhōng zuì qiáng de pàizi jiào bǎn, qíyú de pàizi jiào yǎn',
    meaning: 'Chỉ lời nói và hành động có hệ thống, có trật tự.',
    examples: '人家走南闯北，见过大世面，说话办事自然有板有眼。 \n她这个做秘书的，做事有板有眼，领导很放心。',
    examplePinyin:
      'Rénjiā zǒu nán chuǎng běi, jiàn guò dà shìmiàn, shuōhuà bàn shì zìrán yǒu bǎn yǒu yǎn. \nTā zhège zuò mìshū de, zuò shì yǒu bǎn yǒu yǎn, lǐngdǎo hěn fàngxīn.',
    exampleMeaning:
      'Họ đã đi khắp nơi, thấy nhiều điều lớn lao, nên nói năng và làm việc rất có trọng lượng. \nCô thư ký này, làm việc rất có quy tắc, lãnh đạo rất yên tâm về cô ấy.',
    arrange:
      '有板有眼/人家/走南闯北/，/见过/大世面/，/说话/办事/自然/。/\n有板有眼/她/这个/做秘书的/，/做事/，/领导/很/放心/。/',
  },
  {
    simplified: '有奔头',
    pinyin: 'yǒu bèn tou',
    explanation: '指有前途，有希望。',
    explanationPinyin: 'zhǐ yǒu qiántú, yǒu xīwàng.',
    meaning: 'Có tương lai, có hy vọng.',
    examples: '中国实行改革开放政策以后，老百姓感到生活很有奔头。 \n',
    examplePinyin:
      'Zhōngguó shíxíng gǎigé kāifàng zhèngcè yǐhòu, lǎobǎixìng gǎndào shēnghuó hěn yǒu bèn tou. \n',
    exampleMeaning:
      'Sau khi Trung Quốc thực hiện chính sách cải cách mở cửa, người dân cảm thấy cuộc sống có nhiều hy vọng. \n',
    arrange: '有奔头/中国/实行/改革开放/政策/以后/，/老百姓/感到/生活/很/。/\n',
  },
  {
    simplified: '有鼻子有眼',
    pinyin: 'yǒu bí zi yǒu yǎn',
    explanation: '比喻述说某事具体，活灵活现，仿佛真有其事。',
    explanationPinyin: 'bǐyù shùshuō mǒu shì jùtǐ, huó línghuó xiàn, fǎngfú zhēn yǒu qí shì.',
    meaning: 'Khi kể về một chuyện gì đó, có cách miêu tả cụ thể, sinh động, như thể có thật.',
    examples: '他说他昨天撞见鬼了，说得有鼻子有眼的，我看他是在自己吓自己。 \n',
    examplePinyin:
      'Tā shuō tā zuótiān zhuàngjiàn guǐ le, shuō de yǒu bí zi yǒu yǎn de, wǒ kàn tā shì zài zìjǐ xià zìjǐ. \n',
    exampleMeaning:
      'Anh ấy nói rằng hôm qua gặp ma, nói ra có vẻ rất thật, nhưng tôi nghĩ anh ấy chỉ tự dọa mình. \n',
    arrange: '有鼻子有眼/他说/他/昨天/撞见鬼了/，/说得/，/我/看/他/是/在/自己/吓/自己/。/',
  },
  {
    simplified: '有分寸',
    pinyin: 'yǒu fēn cùn',
    explanation: '比喻说话或做事能掌握适当的限度。',
    explanationPinyin: 'bǐyù shuōhuà huò zuòshì néng zhǎngwò shìdàng de xiàndù.',
    meaning: 'Biết giữ chừng mực khi nói hoặc làm.',
    examples:
      '开玩笑也要有个分寸，过火了就会起到相反的作用。\n批评的本意是为他好，但要掌握分寸，否则达不到理想的效果。',
    examplePinyin:
      'Kāi wánxiào yě yào yǒu gè fèn cùn, guò huǒ le jiù huì qǐ dào xiānfǎn de zuòyòng. \nPīpíng de běnyì shì wèi tā hǎo, dàn yào zhǎngwò fèn cùn, fǒuzé dá bù dào lǐxiǎng de xiàoguǒ.',
    exampleMeaning:
      'Khi đùa giỡn cũng cần có giới hạn, nếu quá trớn sẽ gây ra hiệu ứng ngược. \nMục đích của việc chỉ trích là để tốt cho anh ấy, nhưng cần phải biết điểm dừng, nếu không sẽ không đạt được hiệu quả mong muốn.',
    arrange:
      '有分寸/开玩笑/也要/，/过火了/就会/起到/相反的/作用/。/\n有分寸/批评的/本意/是/为/他/好/，/但要/掌握/，/否则/达不到/理想的/效果/。/',
  },
  {
    simplified: '有分量',
    pinyin: 'yǒu fèn liànɡ',
    explanation: '比喻某种事物具有重要的意义或价值。',
    explanationPinyin: 'bǐyù mǒu zhǒng shìwù jùyǒu zhòngyào de yìyì huò jiàzhí.',
    meaning: 'Chỉ sự vật có ý nghĩa hoặc giá trị quan trọng.',
    examples: '在单位民主大会上，职工说话越来越有分量。 \n他是中国物理学泰斗，在物理学界讲话很有分量。',
    examplePinyin:
      'Zài dānwèi mínzhǔ dàhuì shàng, zhígōng shuōhuà yuè lái yuè yǒu fèn liàng. \nTā shì Zhōngguó wùlǐxué tàidǒu, zài wùlǐxué jiè shuōhuà hěn yǒu fèn liàng.',
    exampleMeaning:
      'Trong cuộc họp dân chủ tại cơ quan, lời nói của công nhân ngày càng có trọng lượng. \nÔng ấy là bậc thầy vật lý ở Trung Quốc, lời nói của ông ấy trong giới vật lý rất có trọng lượng.',
    arrange:
      '有分量/在/单位/民主/大会上/，/职工/说话/越来越/。/\n有分量/他/是/中国/物理学/泰斗/，/在/物理学界/讲话/很/。/',
  },
  {
    simplified: '有杆秤',
    pinyin: 'yǒu ɡǎn chènɡ',
    explanation: '比喻有评判是非好坏的标准。',
    explanationPinyin: 'bǐyù yǒu píngpàn shìfēi hǎo huài de biāozhǔn.',
    meaning: 'Tiêu chuẩn để đánh giá đúng sai, tốt xấu.',
    examples:
      '近三十年的改革开放是好是坏，大家心里都有杆秤，会正确地衡量。 \n这个人工作做得如何，大家人人心里有杆秤。',
    examplePinyin:
      'Jìn sānshí nián de gǎigé kāifàng shì hǎo shì huài, dàjiā xīn lǐ dōu yǒu gǎn chèng. \nZhège rén gōngzuò zuò de rúhé, dàjiā rén rén xīn lǐ yǒu gǎn chèng.',
    exampleMeaning:
      'Gần ba mươi năm cải cách mở cửa là tốt hay xấu, mọi người đều có thang đo riêng, sẽ tự biết cách đánh giá. \nCách làm việc của người này thế nào, mọi người ai cũng có thang đo riêng trong lòng.',
    arrange:
      '心里/有杆秤/近三十年的/改革开放/是好是坏/，/大家/，/会/正确地/衡量/。/\n心里/有杆秤/这个人/工作/做得/如何/，/大家/人人/。/',
  },
  {
    simplified: '有瓜葛',
    pinyin: 'yǒu ɡuā gé',
    explanation: '比喻有互相牵连的关系。',
    explanationPinyin: 'bǐyù yǒu hùxiāng qiānlián de guānxì.',
    meaning: 'Có mối quan hệ liên quan, ràng buộc lẫn nhau.',
    examples: '我跟这件事没什么瓜葛，你们别盯着我看。 \n既然已经分了手，最好跟她别再有什么瓜葛。',
    examplePinyin:
      'Wǒ gēn zhè jiàn shì méi shénme guā gé, nǐmen bié dīngzhe wǒ kàn. \nJìrán yǐjīng fēnle shǒu, zuì hǎo gēn tā bié zài yǒu shénme guā gé.',
    exampleMeaning:
      'Tôi không có liên quan gì đến chuyện này, các bạn đừng nhìn chằm chằm vào tôi. \nMột khi đã chia tay, tốt nhất là không nên có liên quan gì thêm với cô ấy.',
    arrange:
      '我/跟/没/什么/瓜葛/你们/别/盯着/这件事/我看。 \n已经/分了手，最好/瓜葛/跟/她/别/再/有什么/既然/。',
  },
  {
    simplified: '有好戏看',
    pinyin: 'yǒu hǎo xì kàn',
    explanation: '也说“有好戏”。指事情越来越复杂，矛盾越来越尖锐或角逐越来越激烈。',
    explanationPinyin:
      'yě shuō “yǒu hǎo xì”, zhǐ shìqíng yuè lái yuè fùzá, máodùn yuè lái yuè jiānruì huò juézhú yuè lái yuè jīliè.',
    meaning:
      'Cũng nói là “有好戏”. Chỉ sự việc ngày càng phức tạp, mâu thuẫn ngày càng gay gắt hoặc cạnh tranh càng quyết liệt.',
    examples: '\n他当厂长，咱们这儿就有好戏看了，过不了多久，群众就得把他轰下台。',
    examplePinyin:
      '\nTā dāng chǎng zhǎng, zánmen zhèr jiù yǒu hǎo xì kàn le, guò bù liǎo duōjiǔ, qúnzhòng jiù déi bǎ tā hōng xià tái.',
    exampleMeaning:
      '\nKhi anh ta làm giám đốc, chúng ta sẽ có điều thú vị để xem, không lâu nữa, người dân sẽ buộc anh ta phải từ chức.',
    arrange: '\n有好戏看/他/当/厂长/，/咱们/这儿/就/，/过不了/多久/，/群众/就得/把/他/轰下台/。/',
  },
  {
    simplified: '有来头',
    pinyin: 'yǒu lái tou',
    explanation: '有来历( 多指人的资历或背景)。',
    explanationPinyin: 'Yǒu láilì (duō zhǐ rén de zīlì huò bèijǐng).',
    meaning: 'Có lai lịch, xuất thân (thường chỉ về năng lực hoặc bối cảnh của người khác).',
    examples: '不管来头有多大，犯了法，就应该依法得到惩处。 \n',
    examplePinyin: 'Bùguǎn lái tou yǒu duō dà, fànle fǎ, jiù yīnggāi yīfǎ dédào chéngchǔ. \n',
    exampleMeaning: 'Dù có thân thế lớn đến đâu, nếu phạm tội, cũng phải bị xử lý theo pháp luật. \n',
    arrange: '有来头/不管/来头/有多大/，/犯了法/，/就应该/依法/得到/惩处/。/\n',
  },
  {
    simplified: '有棱角',
    pinyin: 'yǒu lénɡ jiǎo',
    explanation: '比喻敢说敢做的锐气。',
    explanationPinyin: 'Bǐyù gǎn shuō gǎn zuò de ruìqì.',
    meaning: 'Chỉ sự dũng cảm trong hành động và lời nói.',
    examples:
      '选举领导，很多人喜欢选有棱角的，不喜欢选唯唯诺诺、唯命是从的人。 \n与同事相处，是有棱角好呢，还是圆滑一点儿更好?',
    examplePinyin:
      'Xuǎnjǔ lǐngdǎo, hěn duō rén xǐhuān xuǎn yǒu líng jiǎo de, bù xǐhuān xuǎn wéiwéi nuò nuò, wéimìng shì cóng de rén. \nYǔ tóngshì xiāngchǔ, shì yǒu líng jiǎo hǎo ne, hái shì yuán huá yīdiǎn er gèng hǎo?',
    exampleMeaning:
      'Khi bầu cử lãnh đạo, nhiều người thích chọn những người có cá tính, không thích những người chỉ biết vâng lời. \nTrong quan hệ với đồng nghiệp, có nên có cá tính hơn hay là nên linh hoạt hơn thì tốt hơn?',
    arrange:
      '有棱角/选举/领导/，/很多人/喜欢/选/，/不喜欢/选/唯唯诺诺/、/唯命是从/的人/。/\n有棱角/与/同事/相处/，/是/好呢/，/还是/圆滑/一点儿/更好/？/',
  },
  {
    simplified: '有两把刷子',
    pinyin: 'yǒu liǎnɡ bǎ shuā zi',
    explanation: '也说“有几把刷子”、“有两手”、“有两下子”。比喻有一些本领、本事、技能。',
    explanationPinyin:
      'Yě shuō “yǒu jǐ bǎ shuāzi”, “yǒu liǎng shǒu”, “yǒu liǎng xiàzi”, bǐyù yǒu yīxiē běnlǐng, běnshì, jìnéng.',
    meaning:
      'Cũng gọi là “有几把刷子”、“有两手”、“有两下子”. Chỉ có chút tài năng, khả năng, kỹ năng nhất định.',
    examples: '他在环境治理工作方面有两把刷子。 \n凭你那两把刷子，想搞定这件事，我看还差得远呢。',
    examplePinyin:
      'Tā zài huánjìng zhìlǐ gōngzuò fāngmiàn yǒu liǎng bǎ shuāzi. \nPíng nǐ nà liǎng bǎ shuāzi, xiǎng gǎodìng zhè jiàn shì, wǒ kàn hái chà dé yuǎn ne.',
    exampleMeaning:
      'Anh ấy có kinh nghiệm trong công việc bảo vệ môi trường. \nVới kỹ năng của bạn, tôi nghĩ bạn còn xa mới có thể giải quyết được chuyện này.',
    arrange:
      '有两把刷子/他/在/环境治理/工作/方面/确实/。/\n有两把刷子/凭/你/那/，/想/搞定/这件事/，/我/看/还/差得远呢/。/',
  },
  {
    simplified: '有两下子',
    pinyin: 'yǒu liǎnɡ xià zi',
    explanation: '有些本事。',
    explanationPinyin: 'Yǒu xiē běnshì.',
    meaning: 'Có chút tài năng, khả năng.',
    examples: '在处理邻里矛盾方面，居委会老李确实有两下子。 \n少林寺的武僧不是徒有虚名，他们的确有两下子。',
    examplePinyin:
      'Zài chǔlǐ línlǐ máodùn fāngmiàn, jūwěihuì lǎo lǐ quèshí yǒu liǎng xià zi. \nShàolínsì de wǔsēng bùshì tú yǒu xūmíng, tāmen díquè yǒu liǎng xià zi.',
    exampleMeaning:
      'Trong việc xử lý mâu thuẫn giữa hàng xóm, ông Lý ở ban quản lý khu phố thật sự có tài. \nCác võ sư ở Thiếu Lâm Tự không phải chỉ là danh tiếng, họ thực sự có tài năng.',
    arrange:
      '有两下子/在/处理/邻里/矛盾/方面/，/居委会/老李/确实/。/\n有两下子/少林寺的/武僧/不是/徒有虚名/，/他们的确/。/',
  },
  {
    simplified: '有眉目',
    pinyin: 'yǒu méi mù',
    explanation: '比喻事情有了头绪。',
    explanationPinyin: 'Bǐyù shìqíng yǒule tóuxù.',
    meaning: 'Sự việc đã có manh mối, có hướng đi.',
    examples: '找赞助的工作已经有眉目了，确定了赞助商之后，我们就可以大刀阔斧地干了。 \n',
    examplePinyin:
      'Zhǎo zànzhù de gōngzuò yǐjīng yǒu méi mù le, quèdìng le zànzhù shāng zhīhòu, wǒmen jiù kěyǐ dàdāo kuòfǔ de gànle. \n',
    exampleMeaning:
      'Công việc tìm kiếm nhà tài trợ đã có tín hiệu khả quan, sau khi xác định được nhà tài trợ, chúng ta có thể bắt tay vào làm một cách mạnh mẽ. \n',
    arrange: '有眉目/找/赞助的/工作/已经/，/确定了/赞助商/之后/，/我们/就可以/大刀阔斧地/干了/。/\n',
  },
  {
    simplified: '有门道',
    pinyin: 'yǒu mén dào',
    explanation: '比喻做事懂得诀窍，有办法，也说有门路。',
    explanationPinyin: 'Bǐyù zuòshì dǒng dé juéqiào, yǒu bànfǎ, yě shuō yǒu ménlù.',
    meaning: 'Người hiểu rõ cách làm việc, có mẹo, cũng gọi là có mối quan hệ.',
    examples:
      '修理计算机是要有点儿门道的，不是每个人都会的。 \n我觉得他有点门道，中央银行管得很紧，别人都弄不到指标，他却贷了这么多款回来。',
    examplePinyin:
      'Xiūlǐ jìsuànjī shì yào yǒudiǎn mén dào de, bùshì měi gèrén dōu huì de.\nWǒ juédé tā yǒudiǎn mén dào, zhōngyāng yínháng guǎn dé hěn jǐn, biérén dōu nòng bù dào zhǐbiāo, tā què dàile zhème duō kuǎn huílái.',
    exampleMeaning:
      'Việc sửa chữa máy tính cần có chút kỹ năng, không phải ai cũng làm được. \nTôi nghĩ anh ấy có chút kỹ năng, Ngân hàng Trung ương quản lý rất chặt chẽ, người khác đều không lấy được chỉ tiêu, nhưng anh ấy lại vay được rất nhiều tiền.',
    arrange:
      '有门道/修理/计算机/是要/，/不是/每个人/都会的/。/\n有门道/我觉得/他/，/中央银行/管得/很紧/，/别人/都/弄不到/指标/，/他/却/贷了/这么多款/回来/。/',
  },
  {
    simplified: '有苗头',
    pinyin: 'yǒu miáo tou',
    explanation: '比喻有略微显露出来的某种趋势或情况。',
    explanationPinyin: 'Bǐyù yǒu lüèwēi xiǎnlù chūlái de mǒu zhǒng qūshì huò qíngkuàng.',
    meaning: 'Có dấu hiệu hoặc xu hướng đang bắt đầu xuất hiện.',
    examples: '孩子最近的表现，让我觉得他有早恋的苗头，这可怎么办呢? \n',
    examplePinyin:
      'Háizi zuìjìn de biǎoxiàn, ràng wǒ juédé tā yǒu zǎoliàn de miáo tou, zhè kě zěnme bàn ne?  \n',
    exampleMeaning:
      'Gần đây, hành vi của đứa trẻ làm tôi cảm thấy nó có dấu hiệu yêu sớm, không biết phải làm sao? \n',
    arrange: '有苗头/孩子/最近的/表现/，/让我/觉得/他/有/早恋的/，/这可/怎么办呢/？/\n',
  },
  {
    simplified: '有谱儿',
    pinyin: 'yǒu pǔr',
    explanation: '指有大致的标准、打算或有把握。',
    explanationPinyin: 'Zhǐ yǒu dàzhì de biāozhǔn, dǎsuàn huò yǒu bǎwò.',
    meaning: 'Có mục tiêu, kế hoạch hoặc có sự đảm bảo.',
    examples: '这次选举，谁能被选上，其实大家心里都有谱儿。 \n这件事能成功吗? 我心里可是一点儿谱儿都没有。',
    examplePinyin:
      'Zhè cì xuǎnjǔ, shéi néng bèi xuǎn shàng, qíshí dàjiā xīn lǐ dōu yǒu pǔr. \nZhè jiàn shì néng chénggōng ma? Wǒ xīn lǐ kě shì yīdiǎnr pǔr dōu méiyǒu.',
    exampleMeaning:
      'Trong cuộc bầu cử lần này, ai có thể được bầu, thực ra mọi người đều có sự phán đoán riêng. \nLiệu việc này có thành công không? Tôi thì hoàn toàn không có chút phán đoán nào.',
    arrange:
      '有谱儿/这次/选举/，/谁/能/被选上/，/其实/大家/心里/都/。/\n有谱儿/这件事/能/成功吗/？/我/心里/可是/一点儿/都/没有/。/',
  },
  {
    simplified: '有起色',
    pinyin: 'yǒu qǐ sè',
    explanation: '指开始好转( 多指涣散的工作或严重的疾病)。',
    explanationPinyin: 'Zhǐ kāishǐ hǎozhuǎn (duō zhǐ huànsàn de gōngzuò huò yánzhòng de jíbìng).',
    meaning: 'Bắt đầu có sự cải thiện (thường chỉ công việc kém hoặc bệnh nặng).',
    examples: '都是这样的官，这个国家会有什么起色呢? \n通过治疗，他的病得到了控制，这两天总算有了一点起色。',
    examplePinyin:
      'Dōu shì zhèyàng de guān, zhège guójiā huì yǒu shénme qǐ sè ne? \nTōngguò zhìliáo, tā de bìng dédàole kòngzhì, zhè liǎng tiān zǒngsuàn yǒu le yīdiǎn qǐ sè.',
    exampleMeaning:
      'Với những quan chức như thế này, đất nước này sẽ có tiến triển gì? \nNhờ điều trị, bệnh của anh ấy đã được kiểm soát, trong mấy ngày nay cuối cùng cũng có chút tiến triển.',
    arrange:
      '有起色/都是/这样的/官/，/这个/国家/会/有什么/呢/？/\n有起色/通过/治疗/，/他的/病/得到了/控制/，/这两天/总算/了/一点/。/',
  },
  {
    simplified: '有人味儿',
    pinyin: 'yǒu rén wèir',
    explanation: '具有一个人起码应具有的品质。',
    explanationPinyin: 'jùyǒu yīgè rén qǐmǎ yīng jùyǒu de pǐnzhì.',
    meaning: 'Có những phẩm chất tối thiểu mà một con người cần có.',
    examples:
      '他虽然坏，但对自己的父母很孝顺，还算有点儿人味儿。 \n农民工的权益越来越受保护，政策更有人味儿了。',
    examplePinyin:
      'Tā suīrán huài, dàn duì zìjǐ de fùmǔ hěn xiàoshùn, hái suàn yǒudiǎn rén wèir.  \nNóngmíngōng de quányì yuè lái yuè shòu bǎohù, zhèngcè gèng yǒu rén wèir le.',
    exampleMeaning:
      'Dù anh ấy xấu, nhưng đối với cha mẹ mình rất hiếu thảo, cũng còn chút nhân tính. \nQuyền lợi của công nhân nông thôn ngày càng được bảo vệ, chính sách cũng ngày càng nhân văn hơn.',
    arrange:
      '坏/他/虽然/，/父母/自己/对/很/孝顺/的/，/人味儿/还算/有点儿。\n农民工/的/权益/受保护/越来越/，/政策/更有/人味儿/了。',
  },
  {
    simplified: '有色眼镜',
    pinyin: 'yǒu sè yǎn jìnɡ',
    explanation: '比喻具有个人主观色彩的眼光。',
    explanationPinyin: 'Bǐyù jùyǒu gèrén zhǔguān sècǎi de yǎnguāng.',
    meaning: 'Cái nhìn chủ quan, có màu sắc cá nhân.',
    examples:
      '你不能戴着有色眼镜看人，他以前是犯过错误，可现在已经改过自新了。 \n戴着有色眼镜看人，你就不可能公正、公平地评价一个人。',
    examplePinyin:
      'Nǐ bùnéng dài zhe yǒu sè yǎn jìng kàn rén, tā yǐqián shì fàn guò cuòwù, kě xiànzài yǐjīng gǎiguò zìxīn le. \nDài zhe yǒu sè yǎn jìng kàn rén, nǐ jiù bù kěnéng gōngzhèng, gōngpíng de píngjià yīgè rén.',
    exampleMeaning:
      'Bạn không thể nhìn người qua lăng kính sai lệch, trước đây anh ấy đã từng phạm lỗi, nhưng bây giờ đã cải tà quy chính. \nNếu bạn nhìn người qua lăng kính sai lệch, bạn sẽ không thể đánh giá một cách công bằng và chính xác.',
    arrange:
      '他/以前/是/犯过/错误/，/可是/现在/改过自新/了/，/你/不能/戴着/有色眼镜/看人。\n你/戴着/有色眼镜/看人/，/就/不/可能/公正/公平/地/评价/一个/人。',
  },
  {
    simplified: '有水分',
    pinyin: 'yǒu shuǐ fèn',
    explanation: '比喻有虚假或无价值的成分。',
    explanationPinyin: 'Bǐyù yǒu xūjiǎ huò wú jiàzhí de chéngfèn.',
    meaning: 'Chỉ có thành phần giả dối hoặc không có giá trị.',
    examples: '他说的话有太多水分，你不可全信。 \n',
    examplePinyin: 'Tā shuō de huà yǒu tài duō shuǐ fèn, nǐ bù kě quán xìn. \n',
    exampleMeaning: 'Những gì anh ấy nói có quá nhiều điều không đúng, bạn không thể hoàn toàn tin tưởng. \n',
    arrange: '他说/的话/太多/，/你/不可/全信/有水分/。\n',
  },
  {
    simplified: '有头有脸',
    pinyin: 'yǒu tóu yǒu liǎn',
    explanation: '比喻有身份，有声望。',
    explanationPinyin: 'Bǐyù yǒu shēnfèn, yǒu shēngwàng.',
    meaning: 'Có danh phận, có uy tín.',
    examples:
      '县长的儿子结婚，全县有头有脸的人都来参加婚礼了。 \n一个大学毕业生，在我们这个小地方，也算是有头有脸的人了。',
    examplePinyin:
      'Xiànzhǎng de érzi jiéhūn, quán xiàn yǒu tóu yǒu liǎn de rén dōu lái cānjiā hūnlǐ le. \nYīgè dàxué bìyè shēng, zài wǒmen zhège xiǎo dìfāng, yě suàn shì yǒu tóu yǒu liǎn de rén le.',
    exampleMeaning:
      'Con trai của huyện trưởng kết hôn, tất cả những người có tiếng tăm trong huyện đều đến tham dự lễ cưới. \nMột người tốt nghiệp đại học ở nơi nhỏ bé này cũng có thể coi là người có tiếng tăm.',
    arrange:
      '全县/有头有脸的人/都来参加婚礼了，/县长的儿子结婚。\n在我们这个/小地方，/一个大学毕业生，/也算是/有头有脸的人了。',
  },
  {
    simplified: '有文章',
    pinyin: 'yǒu wén zhānɡ',
    explanation: '比喻有暗含着的意思。',
    explanationPinyin: 'Bǐyù yǒu ànhán zhe de yìsi.',
    meaning: 'Chỉ có ý nghĩa ngầm, ý nghĩa sâu xa.',
    examples:
      '他原来坚决反对这个建议，现在突然改变立场，这里面是不是有什么文章?  \n他一反常态，肯定有文章。 ',
    examplePinyin:
      'Tā yuánlái jiānjué fǎnduì zhège jiànyì, xiànzài túrán gǎibiàn lìchǎng, zhè lǐmiàn shì bù shì yǒu shénme wénzhāng? \nTā yī fǎn chángtài, kěndìng yǒu wén zhāng.',
    exampleMeaning:
      'Anh ta từng kiên quyết phản đối đề xuất này, giờ lại đột nhiên thay đổi lập trường, liệu có điều gì đang ẩn giấu không? \nKhi anh ta hành xử không giống bình thường, chắc chắn có điều gì đó ẩn chứa.',
    arrange:
      '原来/坚决反对/这个建议，/他，现在/突然/改变立场，/这/里面/是不是/有什么/文章?\n肯定/有文章，/他/一反常态。',
  },
  {
    simplified: '有眼光',
    pinyin: 'yǒu yǎn ɡuānɡ',
    explanation: '指善于观察事物，看得准，看得远。',
    explanationPinyin: 'Zhǐ shànyú guānchá shìwù, kàn de zhǔn, kàn de yuǎn.',
    meaning: 'Chỉ người có khả năng quan sát tốt, nhìn xa trông rộng.',
    examples:
      '老板几年前着手开发中西部市场，这是很有眼光的。 \n发展工业不能以环境恶化为代价，发展要有长远眼光，不能只顾眼前的利益。',
    examplePinyin:
      'Lǎobǎn jǐ nián qián zhuóshǒu kāifā zhōngxī bù shìchǎng, zhè shì hěn yǒu yǎn guāng de. \nFāzhǎn gōngyè bù néng yǐ huánjìng èhuà wéi dàijià, fāzhǎn yào yǒu chángyuǎn yǎn guāng, bù néng zhǐ gù yǎnqián de lìyì.',
    exampleMeaning:
      'Ông chủ vài năm trước đã bắt đầu khai thác thị trường miền Trung và miền Tây, điều này rất có tầm nhìn. \nPhát triển công nghiệp không thể lấy sự suy giảm môi trường làm cái giá phải trả, phát triển cần có tầm nhìn lâu dài, không thể chỉ chăm chăm vào lợi ích trước mắt.',
    arrange:
      '几年前/老板着手/开发/中西部市场，/这是/很有眼光的。\n不能/以环境恶化为代价，/发展/工业，/要有长远眼光，/不能/只顾眼前的利益。',
  },
  {
    simplified: '有一搭没一搭 ',
    pinyin: 'yǒu yī dā méi yī dā',
    explanation: '形容漫不经心，没话找话说。',
    explanationPinyin: 'Xíngróng màn bù jīngxīn, méi huà zhǎo huà shuō.',
    meaning: 'Tỏ ra hời hợt, tìm chuyện nói cho có.',
    examples: '看他们有一搭没一搭地聊着，肯定心不在焉。\n',
    examplePinyin: 'Kàn tāmen yǒu yī tǎ méi yī tǎ de liáo zhe, kěndìng xīn bù zài yān.',
    exampleMeaning: 'Nhìn họ nói chuyện hời hợt như vậy, rõ ràng là không tập trung.',
    arrange: '他们/看/有一搭没一搭地/聊着，/肯定/心不在焉。',
  },
  {
    simplified: '有油水',
    pinyin: 'yǒu yóu shuǐ',
    explanation: '比喻可以得到的好处( 多指不正当的额外收入) 。油水，指饭菜里所含的脂肪质。',
    explanationPinyin:
      'Bǐyù kěyǐ dédào de hǎochù (duō zhǐ bù zhèngdàng de éwài shōurù). yóushuǐ, zhǐ fàncài lǐ suǒ hán de zhīfáng zhì.',
    meaning: 'Chỉ có lợi ích có thể đạt được (thường chỉ thu nhập không chính đáng).',
    examples:
      '青年志愿者热心公益事业，义务为别人服务，从没想过从中捞什么油水。\n目前，房产业是很有油水的行业。',
    examplePinyin:
      'Qīngnián zhìyuàn zhě rèxīn gōngyì shìyè, yìwù wèi biérén fúwù, cóng méi xiǎng guò cóng zhōng lāo shénme yóu shuǐ. \nMùqián, fángchǎn yè shì hěn yǒu yóu shuǐ de hángyè.',
    exampleMeaning:
      'Các tình nguyện viên trẻ rất nhiệt tình với công việc cộng đồng, phục vụ người khác một cách miễn phí, chưa bao giờ nghĩ đến việc kiếm lợi ích từ đó. \nHiện tại, ngành bất động sản là một ngành có nhiều lợi nhuận.',
    arrange:
      '青年志愿者热心公益事业，义务为别人服务，从没想过从中捞什么油水。\n目前，房产业是很有油水的行业。',
  },
  {
    simplified: '冤大头 ',
    pinyin: 'yuān dà tóu',
    explanation: '指枉费钱财或气力的人( 含讥讽意) 。',
    explanationPinyin: 'Zhǐ wǎngfèi qiáncái huò qìlì de rén (hán jīfèng yì).',
    meaning: 'Kẻ phí phạm tiền của hoặc công sức, mang hàm ý châm biếm.',
    examples: '我不会付这笔钱，我可不是冤大头。\n',
    examplePinyin: 'wǒ bù huì fù zhè bǐ qián, wǒ kě bùshì yuān dà tóu.',
    exampleMeaning: 'Tôi sẽ không trả tiền này, tôi không phải là kẻ khờ.',
    arrange: '我/冤大头/不会/付/这笔钱/我/可不是/。\n',
  },
  {
    simplified: '月下老人',
    pinyin: 'yuè xià lǎo rén',
    explanation: '为男女牵线、撮合的人。',
    explanationPinyin: 'Wèi nánnǚ qiānxiàn, cuòhé de rén.',
    meaning: 'Người làm mối cho nam nữ.\n',
    examples: '他就是给我们搭鹊桥的月下老人。\n她很喜欢当月下老人，但没成功过。',
    examplePinyin:
      'Tā jiùshì gěi wǒmen dā quèqiáo de yuè xià lǎo rén. \nTā hěn xǐhuān dàng yuè xià lǎo rén, dàn mò chénggōngguò.',
    exampleMeaning:
      'Anh ấy chính là ‘người mai mối’ cho chúng tôi.\nCô ấy rất thích làm ‘người mai mối’, nhưng chưa bao giờ thành công.',
    arrange: '他/给/搭鹊桥/就是//的/我们/月下老人。\n她/喜欢/当//但/没/很/成功过/月下老人。',
  },
  {
    simplified: '云里雾里',
    pinyin: 'yún lǐ wù lǐ',
    explanation: '表示看不清，不太明白。',
    explanationPinyin: 'Biǎo shì kàn bù qīng, bù tài míng bái.',
    meaning: 'Có nghĩa là không thể nhìn rõ, không hiểu',
    examples:
      '他刚进门，就被老婆骂了一通，简直是云里雾里。 \n做领导，需要思路清晰，不能云里雾里，理不出一个所以然来。',
    examplePinyin:
      'Tā gāng jìnmén, jiù bèi lǎopó màle yītōng, jiǎnzhí shì yún lǐ wù lǐ. \nZuò lǐngdǎo, xūyào sīlù qīngxī, bùnéng yún lǐ wù lǐ, lǐ bù chū yīgè suǒyǐrán lái.',
    exampleMeaning:
      'Anh ta vừa bước vào cửa đã bị vợ mắng té tát, đầu óc hoàn toàn mơ hồ.\nLàm lãnh đạo, cần phải có tư duy rõ ràng, không thể mơ hồ, phải có lý do hợp lý cho mọi việc.',
    arrange:
      '刚/进门，就/被/老婆骂了一通，/简直是/他/云里雾里。 \n做/领导/，/思路/清晰，/不能/云里雾里，/理不出/需要/一个/所以然来。',
  },
  {
    simplified: '砸场子',
    pinyin: 'zá chǎng zi',
    explanation: '恶人拆台，搞破坏。',
    explanationPinyin: 'Èrén chātái, gǎo pòhuài.',
    meaning: 'Kẻ xấu phá hoại.',
    examples: '他们在活动中砸场子，搞得一团糟。\n他曾经跟别人瞎闹，砸了一个摇滚乐团的场子。',
    examplePinyin:
      'Tāmen zài huódòng zhōng zá chǎng zi, gǎo dé yī tuánzāo.\nTā céngjīng gēn biérén xiā nào, zá le yī gè yáogǔn yuètuán de chǎng zi.',
    exampleMeaning:
      'Họ gây rối trong sự kiện, làm cho mọi thứ trở nên hỗn loạn.\nAnh ta từng gây náo loạn, phá hỏng một buổi biểu diễn nhạc rock.',
    arrange: '他们/在/活动中/砸场子，/搞得/一团糟。\n他/曾经/跟/别人/瞎闹，砸了一个摇滚乐团的场子。',
  },
  {
    simplified: '砸锅',
    pinyin: 'zá guō',
    explanation: '表演和做事的失败。',
    explanationPinyin: 'Biǎoyǎn hé zuòshì de shībài.',
    meaning: 'Thất bại trong biểu diễn hoặc công việc.',
    examples: '他这一行为真是砸锅，毁了大家的信任。\n他这次演砸锅了，引来嘘声一片。',
    examplePinyin:
      'Tā zhè yī xíngwéi zhēnshi zá guō, huǐ le dàjiā de xìnrèn.\nTā zhè cì yǎn zá guō le, yǐn lái xūshēng yī piàn.\n',
    exampleMeaning:
      'Hành động lần này của anh ấy đã làm đổ bể mọi chuyện, khiến mọi người mất hết niềm tin.\nAnh ta biểu diễn không thành công, khiến khán giả la ó không ngừng.\n',
    arrange: '他//大家/这一行为/真是/砸锅，/毁了/的/信任。\n他/演/砸锅了，引来//这次/嘘声一片。',
  },
  {
    simplified: '栽跟头',
    pinyin: 'zāi ɡēn tou',
    explanation: '指失误，受挫败。',
    explanationPinyin: 'Zhǐ shīwù, shòu cuòbài.',
    meaning: 'Chỉ sự sai lầm, gặp phải thất bại.',
    examples: '这次考试我栽了跟头，名次一落千丈。\n这下他可要栽跟头了，碰上了老对手。',
    examplePinyin:
      'Zhè cì kǎoshì wǒ zāi le gēn tou, míngcì yīluòqiānzhàng. \nZhè xià tā kě yào zāi gēn tou le, pèng shàngle lǎo duìshǒu.',
    exampleMeaning:
      'Lần thi này tôi đã thất bại, thứ hạng tụt dốc không phanh.\nLần này anh ấy chắc chắn sẽ gặp khó khăn, đã gặp phải đối thủ cũ.',
    arrange: '栽了跟头/这次考试/我/，/一落/名次/千丈/。\n碰上了/他/这下/老对手/，可要/栽跟头/了/。',
  },
  {
    simplified: '站得住脚',
    pinyin: 'zhàn de zhù jiǎo',
    explanation: '有道理，能被人接受。',
    explanationPinyin: 'Yǒu dàolǐ, néng bèi rén jiēshòu.',
    meaning: 'Hợp lý, có thể được người khác chấp nhận.',
    examples: '通过专家论证，他的理论是站得住脚的。 \n能不能站得住脚，还得等待实践的证明。',
    examplePinyin:
      'Tōngguò zhuānjiā lùnzhèng, tā de lǐlùn shì zhàn dé zhù jiǎo de.  \nNéng bù néng zhàn dé zhù jiǎo, hái dé děngdài shíjiàn de zhèngmíng.',
    exampleMeaning:
      'Thông qua sự chứng minh của chuyên gia, lý thuyết của anh ấy là có căn cứ.\nLiệu có đứng vững được hay không, còn phải được chứng minh bằng thực tiễn.',
    arrange: '站得住脚/通过专家/论证/，/的/他/理论/是/。\n能不能/站得住脚/，/得/等待/还/的/实践/证明/。',
  },
  {
    simplified: '占上风',
    pinyin: 'zhàn shànɡ fēnɡ',
    explanation: '有优势，处在优势地位。',
    explanationPinyin: 'Yǒu yōushì, chù zài yōushì dìwèi.',
    meaning: 'Có lợi thế, ở vị trí thuận lợi.',
    examples: '他块头这么大，明显占上风。\n几个回合下来，他开始占上风了。',
    examplePinyin:
      'Tā kuàitóu zhème dà, míngxiǎn zhàn shàng fēng. \nJǐ gè huíhé xiàlái, tā kāishǐ zhàn shàng fēng le.',
    exampleMeaning:
      'Anh ta to lớn như vậy, rõ ràng đã chiếm ưu thế.\nSau vài hiệp, anh ấy đã bắt đầu chiếm ưu thế.',
    arrange: '块头/这么/大/他/，/明显/占上风/。\n回合/几个/下来/，/占上风/他/开始/了/。',
  },
  {
    simplified: '站稳脚跟',
    pinyin: 'zhàn wěn jiǎo gēn',
    explanation: '指得以立足。',
    explanationPinyin: 'Zhǐ déyǐ lìzú.',
    meaning: 'Tạo dựng chỗ đứng vững chắc\n Nghĩa là giành được địa vị ổn định.',
    examples: '新到这家公司，还没站稳脚跟，处处得小心。\n ',
    examplePinyin: 'Xīn dào zhè jiā gōngsī, hái méi zhàn wěn jiǎo gēn, chùchù děi xiǎoxīn.\n ',
    exampleMeaning: 'Mới đến công ty này, vẫn chưa có chỗ đứng vững chắc, chỗ nào cũng phải cẩn thận.\n ',
    arrange: '新到/，/站稳脚跟/没/处处/得/这家公司/小心/。\n',
  },
  {
    simplified: '占小便宜，吃大亏',
    pinyin: 'zhàn xiáo pián yi, chī dà kuī',
    explanation: '指得到了小的好处却遭受了很大的损失。',
    explanationPinyin: 'Zhǐ dédàole xiǎo de hǎochù què zāoshòule hěn dà de sǔnshī.',
    meaning: 'Tham hạt vừng bỏ quả dưa hấu\n Chỉ việc nhận được lợi ích nhỏ nhưng lại chịu thiệt hại lớn.',
    examples:
      '他占了点单位的小便宜，结果吃了大亏，丢了官。\n 王阿姨想占点小便宜，结果吃了大亏，原来她遇上的人是骗子。',
    examplePinyin:
      'Tā zhàn le diǎn dānwèi de xiǎo pián yi, jiéguǒ chī le dà kuī, diū le guān.  \nWáng āyí xiǎng zhàn diǎn xiǎo pián yi, jiéguǒ chī le dà kuī, yuánlái tā yù shàng de rén shì piànzi.',
    exampleMeaning:
      'Anh ta lợi dụng chút lợi ích nhỏ của đơn vị, cuối cùng chịu thiệt lớn, mất cả chức.\n Dì Vương muốn tranh thủ kiếm chút lợi, ai ngờ chịu thiệt nặng, gặp phải kẻ lừa đảo.',
    arrange:
      '他/点/单位的/小便宜，/结果/吃了/占了/大亏，/丢了/官。\n王阿姨/想/占点/小便宜，/结果/吃了/大亏，/原来/她/遇上的/人是/骗子。\n',
  },
  {
    simplified: '丈二和尚摸不着头脑',
    pinyin: 'zhànɡ èr hé shànɡ mō bù zháo tóu nǎo\n',
    explanation: '比喻搞不清楚什么意思。',
    explanationPinyin: 'Bǐyù gǎo bù qīngchǔ shénme yìsi.',
    meaning: 'Không hiểu rõ ý nghĩa, rối rắm không biết xử lý ra sao.',
    examples: '他们是什么意思? 我现在是丈二和尚摸不着头脑。',
    examplePinyin: 'Tāmen shì shénme yìsi? Wǒ xiànzài shì zhàng èr hé shàng mō bù zháo tóu nǎo.',
    exampleMeaning: 'Tôi chẳng hiểu họ đang nói gì, cảm giác như thầy tu không biết đọc kinh vậy.',
    arrange: '他们/是什么意思?/我/丈二和尚摸不着头脑/现在/。',
  },
  {
    simplified: '找个台阶下',
    pinyin: 'zhǎo ɡe tái jiē xià',
    explanation: '比喻为避免受窘而寻找途径或机会',
    explanationPinyin: 'Bǐyù wéi bìmiǎn shòu jiǒng ér xúnzhǎo tújìng huò jīhuì.',
    meaning: 'Tìm kiếm cơ hội hoặc giải pháp để tránh tình huống khó xử.',
    examples: '尴尬的时候，得给自己找个台阶下。 \n面对不友好的听众，你要学会自己给自己找个台阶下。',
    examplePinyin:
      "Gān'gà de shíhòu, dé gěi zìjǐ zhǎo gè tái jiē xià. \nMiàn duì bù yǒuhǎo de tīngzhòng, nǐ yào xuéhuì zìjǐ gěi zìjǐ zhǎo gè tái jiē xià.",
    exampleMeaning:
      'Khi cảm thấy ngượng ngùng, cần tìm cho mình một lối thoát. \nĐối mặt với những khán giả không thân thiện, bạn phải biết tự tìm lối thoát cho mình.',
    arrange:
      '台阶 / 下 / 找个 / 自己 / 得 / 时候 / 尴尬 / 的 / 给 / 。\n下 / 台阶 / 找个 / 给 / 自己 / 自己 / 学会 / 要 / 你 / 听众 / 的 / 不友好 / 面对 / 。',
  },
  {
    simplified: '照妖镜',
    pinyin: 'zhào yāo jìnɡ',
    explanation: '原指能照出妖怪原形的镜子。现比喻能揭露丑恶现象或行为的武器。',
    explanationPinyin:
      "Yuán zhǐ néng zhàochū yāoguài yuánxíng de jìngzi. Xiàn bǐyù néng jiēlù chǒu'è xiànxiàng huò xíngwéi de wǔqì.",
    meaning: 'Gương soi yêu quái, ví với công cụ phơi bày sự xấu xa hoặc các hành vi tội lỗi.',
    examples: '邪恶最怕照妖镜，一照就现形了。\n',
    examplePinyin: "xié'è zuì pà zhào yāo jìng, yī zhào jiù xiàn xíng le.",
    exampleMeaning: 'Cái ác sợ nhất là “gương soi yêu,” chiếu vào là lộ rõ ngay bản chất.',
    arrange: '了 / 现形 / 就 / 一照 / 照妖镜 / 最怕 / 邪恶 / 。',
  },
  {
    simplified: '睁一只眼闭一只眼',
    pinyin: 'zhēng yīzhī yǎn bì yī zhī yǎn',
    explanation: '睁一只眼闭一只眼: 比喻对事物(多指不好的)看见了，装出没看见的样子，不 去过问。',
    explanationPinyin:
      'Zhēng yī zhī yǎn bì yī zhī yǎn: Bǐyù duì shìwù (duō zhǐ bù hǎo de) kànjiànle, zhuāng chūmò kànjiàn de yàngzi, bù qù guòwèn.',
    meaning:
      'Mở một mắt, nhắm một mắt": Biểu thị việc nhìn thấy sự việc (thường là xấu) nhưng giả vờ không thấy, không can thiệp.',
    examples: '睁一只眼闭一只眼算了，你也管不过来。\n有人偷盗，仓库保管员怎么可以睁一只眼闭一只眼?',
    examplePinyin:
      'Zhēng yī zhī yǎn bì yī zhī yǎn suànle, nǐ yě guǎn bùguò lái. \nYǒurén tōudào, cāngkù bǎoguǎn yuán zěnme kěyǐ zhēng yī zhī yǎn bì yī zhī yǎn?',
    exampleMeaning:
      'Cứ mở một mắt nhắm một mắt cho xong đi, bạn cũng không quản được hết đâu.\nCó người ăn cắp, làm sao người bảo quản kho có thể làm ngơ như vậy?',
    arrange:
      '过来 / 管 / 也 / 你 / 算了 / 一只眼 / 闭 / 一只眼 / 睁 / 。\n只眼 / 一 / 闭 / 一只眼 / 睁 / 可以 / 怎么 / 保管员 / 仓库 / 偷盗 / 有人 / ？',
  },
  {
    simplified: '争上游 ',
    pinyin: 'zhēnɡ shànɡ yóu',
    explanation: '争取向上。',
    explanationPinyin: 'Zhēngqǔ xiàng shàng.',
    meaning: 'Nỗ lực phấn đấu để vươn lên.',
    examples: '我们要力争上游，又快又好地完成任务。\n',
    examplePinyin: 'wǒmen yào lì zhēng shàng yóu, yòu kuài yòu hǎo de wánchéng rènwù.',
    exampleMeaning: 'Chúng ta cần nỗ lực vươn lên và hoàn thành nhiệm vụ một cách nhanh chóng và hiệu quả.',
    arrange: '任务 / 完成 / 地 / 好 / 又 / 快 / 又 / 上游 / 力争 / 要 / 我们 / 。',
  },
  {
    simplified: '智多星',
    pinyin: 'zhì duō xīnɡ',
    explanation: '原为古典小说《水浒传》中梁山军师吴用的绰号，\n现泛指聪明机智、计谋多的人。',
    explanationPinyin:
      'Yuán wéi gǔdiǎn xiǎoshuō "Shuǐhǔ Zhuàn" zhōng Liángshān jūnshī Wú Yòng de chuòhào, xiàn fànzhǐ cōngmíng jīzhì, jìmóu duō de rén.',
    meaning:
      'Biệt danh của Ngô Dụng, quân sư của Lương Sơn trong Thủy Hử, ám chỉ người thông minh, mưu lược.',
    examples: '人们都称他智多星，我看不怎么的。',
    examplePinyin: 'rénmen dōu chēng tā zhì duō xīng, wǒ kàn bù zěnme de.',
    exampleMeaning:
      'Mọi người đều ca ngợi anh ấy là “Ngôi sao trí tuệ”, nhưng tôi thấy cũng không quá đặc biệt.',
    arrange: '的 / 怎么 / 不 / 看 / 我 / 智多星 / 他 / 称 / 都 / 人们 / 。',
  },
  {
    simplified: '纸老虎 ',
    pinyin: 'zhǐ lǎo hǔ',
    explanation: '就是用纸做的老虎，一点儿都不可怕。',
    explanationPinyin: 'Jiùshì yòng zhǐ zuò de lǎohǔ, yīdiǎn er dōu bù kěpà.',
    meaning: 'Chỉ là con hổ được làm bằng giấy, một chút cũng không đáng sợ.',
    examples: '他是一个“纸老虎”，没有什么真本事，你别怕。 \n再大的困难，到他面前都变成了“纸老虎”。',
    examplePinyin:
      'Tā shì yīgè “zhǐ lǎo hǔ”, méiyǒu shé me zhēn běnshì, nǐ bié pà. \nZài dà de kùnnán, dào tā miànqián dōu biàn chéngle “zhǐ lǎo hǔ”.',
    exampleMeaning:
      'Anh ấy chỉ là một ‘hổ giấy’, không có khả năng thật sự, bạn đừng sợ.\nDù khó khăn đến đâu, khi đối diện với anh ta cũng trở thành ‘hổ giấy’.',
    arrange:
      '怕 / 别 / 你 / 真本事 / 什么 / 没有 / 纸老虎 / 一个 / 是 / 他 / 。 \n纸老虎 / 变成 / 都 / 面前 / 他 / 到 / 困难 / 的 / 大 / 再 / 。',
  },
  {
    simplified: '直筒子',
    pinyin: 'zhí tǒnɡ zi',
    explanation: '比喻性情直爽，有什么说什么; 也指性情直爽的人。',
    explanationPinyin: 'Bǐyù xìngqíng zhí shuǎng, yǒu shénme shuō shénme; yě zhǐ xìngqíng zhí shuǎng de rén.',
    meaning:
      'Ăn ngay nói thật\n Ẩn dụ chỉ tính cách thẳng thắn, có gì nói nấy; cũng chỉ những người thẳng thắn.',
    examples: '我可是个直筒子，有什么想法不吐不快。\n 我喜欢直筒子的性格，不喜欢拐弯抹角。',
    examplePinyin:
      'Wǒ kěshì gè zhí tǒng zi, yǒu shénme xiǎngfǎ bù tǔ bù kuài.\n Wǒ xǐhuān zhí tǒng zi de xìnggé, bù xǐhuān guǎiwān mǒjiǎo.',
    exampleMeaning:
      'Tôi là người thẳng thắn, có gì nghĩ là phải nói ngay.\n Tôi thích tính cách thẳng thắn, không ưa sự quanh co.',
    arrange:
      '不吐不快 / 想法 / 什么 / 有 / 直筒子 / 个 / 是 / 可是 / 我 / 。\n拐弯抹角 / 喜欢 / 不 / 性格 / 的 / 直筒子 / 喜欢 / 我 / 。',
  },
  {
    simplified: '主心骨',
    pinyin: 'zhǔ xīn ɡǔ',
    explanation: '比喻可依靠的人或事物。',
    explanationPinyin: 'Bǐyù kě yīkào de rén huò shìwù.',
    meaning: 'Ý chỉ người hay sự vật mà có thể dựa vào.',
    examples: '在这次活动中，她是我们团队的主心骨。\n谁是我们这个团队的主心骨，我想大家都很清楚。',
    examplePinyin:
      'Zài zhè cì huódòng zhōng, tā shì wǒmen tuánduì de zhǔ xīn gǔ.\nShéi shì wǒmen zhège tuánduì de zhǔ xīn gǔ, wǒ xiǎng dàjiā dōu hěn qīngchǔ.',
    exampleMeaning:
      'Trong sự kiện lần này, cô ấy là trụ cột của cả đội.\nAi là trụ cột của nhóm chúng ta, tôi nghĩ mọi người đều rõ.',
    arrange:
      '主心骨 / 的 / 团队 / 我们 / 是 / 她 / 中 / 活动 / 次 / 在 / 。\n清楚 / 很 / 都 / 大家 / 想 / 我 / 主心骨 / 的 / 团队 / 这个 / 我们 / 是 / 谁 / 。',
  },
  {
    simplified: '装门面',
    pinyin: 'zhuānɡ mén miàn',
    explanation: '比喻为了表面好看而做某事。也说“壮门面”。',
    explanationPinyin: 'Bǐyù wèile biǎomiàn hǎokàn ér zuò mǒu shì. Yě shuō "zhuàng ménmiàn".',
    meaning:
      'Làm việc để giữ thể diện, chỉ làm vì hình thức. Cũng có thể nói là “壮门面”: Làm tăng vẻ bề ngoài hoặc làm cho thêm phần hào nhoáng, ấn tượng.',
    examples: '他买了几棵圣诞树，装门面，哄哄小孩。\n',
    examplePinyin: 'Tā mǎi le jǐ kē shèngdàn shù, zhuāng mén miàn, hōng hōng xiǎohái.',
    exampleMeaning: 'Anh ấy mua vài cây thông Noel để trang trí và làm vui lòng trẻ em.',
    arrange: '小孩 / 哄哄 / 装门面 / 圣诞树 / 几棵 / 买 / 他 / 。',
  },
  {
    simplified: '装洋蒜',
    pinyin: 'zhuānɡ yánɡ suàn',
    explanation: '装糊涂。',
    explanationPinyin: 'Zhǐ shīwù, shòu cuòbài.',
    meaning: 'Giả vờ không biết',
    examples: '别装洋蒜了，你不行，谁行呀?\n别给我装洋蒜，我知道你的能耐，还不快上?',
    examplePinyin:
      'Bié zhuāng yáng suàn le, nǐ bùxíng, shéi xíng ya? \nBié gěi wǒ zhuāng yáng suàn, wǒ zhīdào nǐ de néngnài, hái bùkuài shàng?',
    exampleMeaning:
      'Đừng có giả vờ nữa, nếu bạn không làm được thì ai làm được? Đừng có giả vờ với tôi, tôi biết khả năng của bạn, còn không mau lên?',
    arrange:
      '行呀 / 谁 / 不行 / 你 / 了 / 装洋蒜 / 别 / 。\n上 / 快 / 不 / 还 / 能耐 / 的 / 你 / 知道 / 我 / 装洋蒜 / 给 / 别 / 。',
  },
  {
    simplified: '走过场',
    pinyin: 'zǒu guò chǎnɡ',
    explanation:
      '比喻做事敷衍了事，徒有形式，而无实际效果。过场: 在戏曲演出中，\n角色上场后，不多停留，就穿过舞台从另一侧下场。',
    explanationPinyin:
      'Bǐyù zuòshì fūyǎn liǎoshì, tú yǒu xíngshì, ér wú shíjì xiàoguǒ. Guòchǎng: zài xìqǔ yǎnchū zhōng, juésè shàngchǎng hòu, bù duō tíngliú, jiù chuānguò wǔtái cóng lìng yīcè xiàchǎng.',
    meaning:
      'Làm việc hời hợt, chỉ giữ hình thức mà không có hiệu quả thực sự. Trong kịch nghệ, "đi qua sân khấu" ám chỉ vai diễn xuất hiện nhanh chóng rồi rời đi mà không để lại dấu ấn.',
    examples: '这几个大牌出席晚会，不过是走过场，赚点钱而已。\n\n',
    examplePinyin: 'Zhè jǐ ge dà pái chūxí wǎnhuì, bùguò shì zǒu guò chǎng, zhuàn diǎn qián ér yǐ.',
    exampleMeaning:
      'Những người nổi tiếng tham gia buổi tiệc này cũng chỉ để “diễn qua loa” và kiếm chút tiền.',
    arrange: '而已 / 钱 / 赚点 / 走过场 / 是 / 不过 / 晚会 / 出席 / 大牌 / 几个 / 这 / 。',
  },
  {
    simplified: '走后门',
    pinyin: 'zǒu hòu mén',
    explanation: '比喻通过非法的不正当关系来达到某种目的。',
    explanationPinyin: 'Bǐyù tōngguò fēifǎ de bù zhèngdàng guānxì lái dádào mǒu zhǒng mùdì.',
    meaning:
      'Đi cửa sau\n Phép ẩn dụ về hành vi thông qua các mối quan hệ bất hợp pháp và không đúng đắn để đạt được một mục đích nhất định.',
    examples:
      '他是走后门进我们单位的，进来没多久，竟然当了干部。\n 他是走后门进来的，进来后不久他就发现，这个工作自己不能胜任。',
    examplePinyin:
      'Tā shì zǒu hòu mén jìn wǒmen dānwèi de, jìnlái méi duōjiǔ, jìngrán dāngle gànbù.\n Tā shì zǒu hòu mén jìnlái de, jìnlái hòu bùjiǔ tā jiù fāxiàn, zhège gōngzuò zìjǐ bùnéng shèngrèn.',
    exampleMeaning:
      'Anh ta vào cơ quan chúng tôi bằng cách đi cửa sau, chưa bao lâu thì đã trở thành cán bộ.\n Anh ta đi cửa sau vào, không lâu sau đã nhận ra rằng mình không thể đảm nhiệm công việc này.',
    arrange:
      '干部 / 了 / 当 / 竟然 / 多久 / 没 / 进来 / 的 / 单位 / 我们 / 进 / 走后门 / 是 / 他 / 。\n胜任 / 不能 / 自己 / 工作 / 这个 / 发现 / 就 / 他 / 不久 / 后 / 进来 / 的 / 走后门 / 是 / 他 / 。',
  },
  {
    simplified: '走下坡路',
    pinyin: 'zǒu xià pō lù',
    explanation: '比喻朝衰落、灭亡的方向发展。',
    explanationPinyin: 'Bǐyù cháo shuāiluò, mièwáng de fāngxiàng fāzhǎn.',
    meaning: 'Biểu thị sự phát triển theo hướng suy tàn, diệt vong.',
    examples:
      '过了四十，身体开始走下坡路了，要注意保养。 \n经济在持续繁荣了几年以后，出现走下坡路的苗头来了。',
    examplePinyin:
      'Guòle sìshí, shēntǐ kāishǐ zǒu xià pō lù le, yào zhùyì bǎoyǎng. \nJīngjì zài chíxù fánróngle jǐ nián yǐhòu, chūxiàn zǒu xià pō lù de miáotóu láile.',
    exampleMeaning:
      'Qua tuổi tứ tuần, sức khỏe bắt đầu suy giảm, cần chú ý giữ gìn.\nNền kinh tế sau vài năm tăng trưởng liên tục, đã xuất hiện dấu hiệu suy thoái.',
    arrange:
      '保养 / 注意 / 要 / 了 / 走下坡路 / 开始 / 身体 / 四十 / 了 / 过 / 。\n了 / 来 / 苗头 / 的 / 走下坡路 / 出现 / 以后 / 几年 / 了 / 繁荣 / 持续 / 在 / 经济 / 。',
  },
  {
    simplified: '钻空子',
    pinyin: 'zuān kònɡ zi',
    explanation: '比喻利用某种漏洞，进行对自己有利的活动。',
    explanationPinyin: 'Bǐyù lìyòng mǒu zhǒng lòudòng, jìnxíng duì zìjǐ yǒulì de huódòng.',
    meaning:
      'Lách luật\n Ẩn dụ cho việc lợi dụng sơ hở nào đó để thực hiện những hành vi trục lợi cho bản thân.',
    examples:
      '法律如果完善，就不会有人再钻法律的空子了。\n 盗窃团伙早就看到了我们管理上的漏洞，钻了我们的空子。',
    examplePinyin:
      'Fǎlǜ rúguǒ wánshàn, jiù bù huì yǒurén zài zuān fǎlǜ de kòng zi le.\n Dàoqiè tuánhuǒ zǎo jiù kàn dào le wǒmen guǎnlǐ shàng de lòudòng, zuān le wǒmen de kòng zi.',
    exampleMeaning:
      'Nếu pháp luật hoàn thiện, sẽ không còn ai lợi dụng kẽ hở của pháp luật nữa.\n Băng nhóm trộm cắp đã sớm phát hiện ra lỗ hổng trong quản lý của chúng tôi và đã lợi dụng nó.',
    arrange:
      '了 / 钻空子 / 的 / 法律 /  再 / 有人 / 不会 / 就 / 完善 / 如果 / 法律 / 。\n钻空子 / 的 / 我们 /了 / 漏洞 / 的 / 上 / 管理 / 我们 / 了 / 看到 / 早就 / 团伙 / 盗窃 / 。',
  },
  {
    simplified: '钻牛角尖',
    pinyin: 'zuān niú jiǎo jiān',
    explanation: '比喻特别认真或较真。',
    explanationPinyin: 'Bǐyù tèbié rènzhēn huò jiàozhēn.',
    meaning: 'Xoáy vào trọng điểm\n Một phép ẩn dụ cho thấy tính nghiêm túc hoặc nghiêm trọng của sự việc.',
    examples:
      '搞科学研究需要有钻牛角尖的精神。\n 你不要总是钻牛角尖，换个角度想想。\n 这个问题一点儿也不重要，你就别钻牛角尖了。',
    examplePinyin:
      'Gǎo kē xué yán jiū xū yào yǒu zuān niú jiǎo jiān de jīng shén.\n Nǐ bù yào zǒng shì zuān niú jiǎo jiān, huàn gè jiǎo dù xiǎng xiǎng.\n Zhè ge wèn tí yī diǎnr yě bù zhòng yào, nǐ jiù bié zuān niú jiǎo jiān le.',
    exampleMeaning:
      'Làm nghiên cứu khoa học cần có tinh thần kiên trì đến cùng.\n Bạn đừng cứ mãi mắc kẹt vào một vấn đề, hãy thử suy nghĩ từ góc độ khác.\n Vấn đề này chẳng quan trọng chút nào, bạn đừng cứ mãi khăng khăng nữa.',
    arrange:
      '精神 / 的 / 钻牛角尖 / 有 / 需要 / 科学研究 / 搞 / 。\n想想 / 角度 / 换个 / 钻牛角尖 / 总是 / 不要 / 你 / 。\n了 / 钻牛角尖 / 别 / 就 / 你 / 重要 / 不 / 也 / 一点儿 / 问题 / 这个 / 。',
  },
  {
    simplified: '钻死胡同',
    pinyin: 'zuān sǐ hú tòng',
    explanation: '死胡同指走不通的小街道，比喻走到绝路上了。',
    explanationPinyin: 'Sǐhútòng zhǐ zǒu bùtōng de xiǎo jiēdào, bǐyù zǒu dào jué lùshàngle.',
    meaning: 'Ngõ cụt là con đường nhỏ không lối thoát, ngụ ý cho việc đã đi đến đường cùng.',
    examples: '他的研究进入了误区，就像钻进了死胡同，出不来了。\n',
    examplePinyin: 'Tā de yánjiū jìnrùle wùqū, jiù xiàng zuān jìnle sǐ hú tòng, chū bù láile. \n',
    exampleMeaning:
      'Nghiên cứu của anh ấy đã vào ngõ cụt, giống như bị mắc kẹt trong một con hẻm không lối ra.\n',
    arrange: '的/进入了/误区，就像/研究/钻进了死胡同，/出/不来了/他/。\n',
  },
  {
    simplified: '坐冷板凳',
    pinyin: 'zuò lěnɡ bǎn dènɡ',
    explanation: '原为讽刺乡村私塾先生清冷职位的话。后来比喻不受重视，遭到冷遇。',
    explanationPinyin:
      'Yuán wèi fèngcì xiāngcūn sīshú xiānshēng qīnglěng zhíwèi dehuà. Hòulái bǐyù bù shòu zhòngshì, zāo dào lěngyù.',
    meaning:
      'Bị ghẻ lạnh\n Vốn là lời nhận xét châm biếm hoàn cảnh sống hiu quạnh của một giáo viên trường tư thục ở nông thôn.\n Về sau đã trở thành phép ẩn dụ cho việc không được coi trọng và bị tiếp đón một cách hời hợt, lạnh lùng.',
    examples: '即便是世界足球先生，也有坐冷板凳的时候。\n ',
    examplePinyin: 'Jíbiàn shì shìjiè zúqiú xiānshēng, yě yǒu zuò lěng bǎn dèng de shíhòu.\n ',
    exampleMeaning: 'Ngay cả cầu thủ xuất sắc nhất thế giới cũng có lúc ngồi dự bị.\n ',
    arrange: '即便/坐冷板凳/的/是/世界/足球先生，也/有/时候。\n ',
  },
  {
    simplified: '做手脚',
    pinyin: 'zuò shǒu jiǎo',
    explanation: '为了实现某种企图而暗中采取行动。',
    explanationPinyin: 'Wèile shíxiàn mǒu zhǒng tútú ér ànzhōng cǎiqǔ xíngdòng.',
    meaning: 'Hành động bí mật để đạt được mục đích nào đó.',
    examples: '他在比赛中做了手脚，被裁判抓住了。\n',
    examplePinyin: 'Tā zài bǐsài zhōng zuò le shǒu jiǎo, bèi cáipàn zhuā zhù le.\n\n',
    exampleMeaning: 'Anh ta gian lận trong cuộc thi và bị trọng tài phát hiện.\n\n',
    arrange: '他/在/裁判/做了手脚，/被/抓住/比赛中/了。\n',
  },
  {
    simplified: '左右手 ',
    pinyin: 'zuǒ yòu shǒu',
    explanation: '比喻得力的助手。',
    explanationPinyin: 'Bǐyù délì de zhùshǒu.',
    meaning: 'Trợ thủ đắc lực, giúp việc hiệu quả.',
    examples: '他最信任我，我成了他的左右手。',
    examplePinyin: 'Tā zuì xìnrèn wǒ, wǒ chéngle tā de zuǒ yòu shǒu.',
    exampleMeaning: 'Anh ấy tin tưởng tôi nhất, tôi đã trở thành cánh tay phải của anh ấy.',
    arrange: '他/最/信任我，/左右手/我/成了/他的。',
  },
];
function stringToSlug(str) {
  // remove accents
  var from = 'ɡǎāàáãảạăằắẳẵặâầấẩẫậēěèéẻẽẹêềếểễệđùúủũụưừứửữựōǒòóỏõọôồốổỗộơờớởỡợīìíỉĩịǐäëïîöüûñçýỳỹỵỷ',
    to = 'gaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooooiiiiiiiaeiiouuncyyyyy';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-');

  return str;
}
function getAllSubstrings(str) {
  var i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
const newData = data.map((item, dataIndex) => {
  const { arrange, simplified, meaning, pinyin, explanation, explanationPinyin } = item;
  const examplePinyin = item.examplePinyin
    ?.replaceAll('\n', '')
    .split('.')
    .map((example) => example.trim())
    .filter((example) => example);
  const exampleMeaning = item.exampleMeaning
    ?.replaceAll('\n', '')
    .split('.')
    .map((example) => example.trim())
    .filter((example) => example);
  const phrases = arrange?.split('\n').filter((phrase) => phrase);
  const examples = item.examples
    ?.replaceAll('\n', '')
    .split('。')
    .map((example) => example.trim())
    .filter((example) => example)
    .map((example, index) => {
      if (!examplePinyin?.[index]) {
        console.log('examplePinyin', examplePinyin);
        console.log(`cột ${dataIndex + 2} - có ${index} pinyin < số ví dụ`);
      }
      if (!exampleMeaning?.[index]) {
        console.log('exampleMeaning', exampleMeaning);
        console.log(`cột ${dataIndex + 2} - có ${index} nghĩa tiếng việt < số ví dụ`);
      }
      return {
        chinese: example.concat('。'),
        pinyin: examplePinyin?.[index],
        vietnamese: exampleMeaning?.[index],
        question: phrases?.[index],
      };
    });

  return {
    simplified,
    examples,
    meaning,
    pinyin,
    explanation,
    explanationPinyin,
    simplifiedTextSearch: getAllSubstrings(simplified).join(' '),
    pinyinTextSearch: stringToSlug(pinyin.replaceAll('\n', '')).replaceAll('-', ' '),
  };
});

const fs = require('fs');
fs.writeFileSync('data.json', JSON.stringify(newData, null, 2));
