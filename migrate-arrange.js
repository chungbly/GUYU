const data = [
  {
    "STT": 1,
    "CHỮ": "A",
    "CỤM": "阿出来再委回去",
    "PINYIN": "ā chūlái zài wěi huíqù",
    "NGHĨA": "比喻作出决定或承诺之后又反悔了。",
    "SẮP XẾP CÂU": "真是 / 让人 / 头疼。/ 这 / 项目 / 阿出来再委回去，",
    "ĐÁP ÁN": "这项目阿出来再委回去，真是让人头疼。",
    "PHIÊN ÂM": "Zhè xiàngmù ā chū lái zài wěi huí qù, zhēnshi ràng rén tóuténg."
  },
  {
    "STT": 2,
    "SẮP XẾP CÂU": "这份 / 经理要求 / 小李 / 把 / 报告 / 阿出来再委回去。",
    "ĐÁP ÁN": "经理要求小李把这份报告阿出来再委回去。",
    "PHIÊN ÂM": "Jīnglǐ yāoqiú Xiǎo Lǐ bǎ zhè fèn bàogào ā chū lái zài wěi huí qù."
  },
  {
    "STT": 3,
    "CHỮ": "A",
    "CỤM": "阿到人头,上拿尿浇",
    "PINYIN": "ā dào réntóu, shàng ná niào jiāo",
    "NGHĨA": "形容欺人太甚。",
    "SẮP XẾP CÂU": "被 / 开除了。/ 他 / 得罪了 / 老板，/阿到人头，/ 上拿尿浇，",
    "ĐÁP ÁN": "他得罪了老板，阿到人头，上拿尿浇，被开除了。",
    "PHIÊN ÂM": "Tā dézuì le lǎobǎn, ā dào rén tóu, shàng ná niào jiāo, bèi kāichú le."
  },
  {
    "STT": 4,
    "SẮP XẾP CÂU": "把 / 阿到人头上拿尿浇了。 / 水 / 他不小心",
    "ĐÁP ÁN": "他不小心把水阿到人头上拿尿浇了。",
    "PHIÊN ÂM": "Tā bù xiǎoxīn bǎ shuǐ ā dào rén tóu shàng ná niào jiāo le."
  },
  {
    "STT": 5,
    "CHỮ": "A",
    "CỤM": "阿几儿寸高的尿",
    "PINYIN": "ā jǐ ér cùn gāo de niào",
    "NGHĨA": "见“撒不出…丈的尿”。",
    "SẮP XẾP CÂU": "得 / 赶紧 / 去看 / 医生。/ 孩子 / 生病了，/ 阿几儿寸高的尿，",
    "ĐÁP ÁN": "孩子生病了，阿几儿寸高的尿，得赶紧去看医生。",
    "PHIÊN ÂM": "Háizi shēngbìng le, ā jǐ ér cùn gāo de niào, děi gǎnjǐn qù kàn yīshēng."
  },
  {
    "STT": 6,
    "SẮP XẾP CÂU": "了 / 墙角 / 小狗 / 在 / 阿几儿寸高的尿。",
    "ĐÁP ÁN": "小狗在墙角阿了几儿寸高的尿。",
    "PHIÊN ÂM": "Xiǎo gǒu zài qiángjiǎo ā le jǐ ér cùn gāo de niào."
  },
  {
    "STT": 7,
    "CHỮ": "A",
    "CỤM": "矮爱碍安鞍",
    "PINYIN": "ǎi ài ài ān ān",
    "NGHĨA": "用来形容出家人慈悲的心肠,后多形容 人心地过于善良,甚至有点迂腐。\r\n也作“矮半头”、“矮二寸”、“矮三分”、“矮一头”、“矮一截”。",
    "SẮP XẾP CÂU": "简直 / 是 / 矮子面前说矮话，/ 气氛 / 一下子 / 就 / 尴尬了。/ 聚会上 / 她 / 当着 / 秃头的 / 老板 / 聊 / 脱发的 / 话题，",
    "ĐÁP ÁN": "聚会上她当着秃头的老板聊脱发的话题，简直是矮子面前说矮话，气氛一下子就尴尬了。",
    "PHIÊN ÂM": "Jùhuì shàng tā dāngzhe tūtou de lǎobǎn liáo tuōfà de huàtí, jiǎnzhí shì ǎizi miànqián shuō ǎi huà, qìfēn yīxiàzi jiù gānggà le."
  },
  {
    "STT": 8,
    "SẮP XẾP CÂU": "有点 / 但不 / 矮， / 他的个子 / 影响 / 矮爱碍安鞍 / 工作。",
    "ĐÁP ÁN": "他的个子有点矮爱碍安鞍，但不影响他工作。",
    "PHIÊN ÂM": "Tā de gèzi yǒudiǎn ǎi ài ài ān ān, dàn bù yǐngxiǎng tā gōngzuò."
  },
  {
    "STT": 9,
    "CHỮ": "A",
    "CỤM": "矮半截",
    "PINYIN": "ǎi bàn jié",
    "NGHĨA": "半截:半段,物体总长度的一半。 指因感到身份、地位、气势等不如别人而产生了强烈的自卑感。",
    "SẮP XẾP CÂU": "矮半截。/ 他/ 比/ 我",
    "ĐÁP ÁN": "他比我矮半截。",
    "PHIÊN ÂM": "Tā bǐ wǒ ǎi bàn jié."
  },
  {
    "STT": 10,
    "SẮP XẾP CÂU": "\r\n比起来， / 总是 / 哥哥 / 他和 / 矮半截。",
    "ĐÁP ÁN": "他和哥哥比起来，总是矮半截。",
    "PHIÊN ÂM": "Tā hé gēge bǐ qǐlái, zǒng shì ǎi bàn jié."
  },
  {
    "STT": 11,
    "CHỮ": "A",
    "CỤM": "挨板子",
    "PINYIN": "ái bǎn zi",
    "NGHĨA": "遭到,遭受。板子:长条形木板 或竹片,旧时常用作拷打或体罚的工具。\r\n比喻遭受严厉的批评、指责或处罚。\r\n也作“挨巴掌”、“吃板子”。",
    "SẮP XẾP CÂU": "要 / 挨板子。/ 过去 / 犯错的人",
    "ĐÁP ÁN": "过去犯错的人要挨板子。",
    "PHIÊN ÂM": "Guòqù fàncuò de rén yào ái bǎn zi."
  },
  {
    "STT": 12,
    "SẮP XẾP CÂU": "挨了 / 犯了错， / 今天 / 他 / 因为 / 挨板子。",
    "ĐÁP ÁN": "因为犯了错，他今天挨了板子。",
    "PHIÊN ÂM": "Yīnwèi fàn le cuò, tā jīntiān ái le bǎn zi."
  },
  {
    "STT": 13,
    "CHỮ": "A",
    "CỤM": "挨鼻头",
    "PINYIN": "ái bí tóu",
    "NGHĨA": "鼻头:鼻子尖。\r\n被人指着鼻子(骂)。指挨骂,受指责。",
    "SẮP XẾP CÂU": "批评了一顿。/ 他 / 挨鼻头地",
    "ĐÁP ÁN": "他挨鼻头地批评了一顿。",
    "PHIÊN ÂM": "Tā ái bí tou de pīpíng le yī dùn."
  },
  {
    "STT": 14,
    "SẮP XẾP CÂU": "迟到 / 挨了 / 开会时， / 他因为 / 而 / 挨鼻头。",
    "ĐÁP ÁN": "开会时，他因为迟到而挨了鼻头。",
    "PHIÊN ÂM": "Kāihuì shí, tā yīnwèi chídào ér ái le bí tou."
  },
  {
    "STT": 15,
    "CHỮ": "A",
    "CỤM": "挨不上边",
    "PINYIN": "āi bù shàng biān",
    "NGHĨA": "形容彼此相差很远,无法接近。\r\n形容双方关系疏远,毫无关联。\r\n也作“挨不上来”、“挨不着边”。",
    "SẮP XẾP CÂU": "挨不上边。/ 这件事/ 和他",
    "ĐÁP ÁN": "这件事和他挨不上边。",
    "PHIÊN ÂM": "Zhè jiàn shì hé tā āi bù shàng biān."
  },
  {
    "STT": 16,
    "SẮP XẾP CÂU": "和 / 你的 / 挨不上边。 / 这件事 / 说法",
    "ĐÁP ÁN": "这件事和你的说法挨不上边。",
    "PHIÊN ÂM": "Zhè jiàn shì hé nǐ de shuōfǎ āi bù shàng biān."
  },
  {
    "STT": 17,
    "CHỮ": "A",
    "CỤM": "爱财不要命",
    "PINYIN": "ài cái bù yào mìng",
    "NGHĨA": "为了金钱连命都可以不要。形容人极 端贪财。",
    "SẮP XẾP CÂU": "什么坏事/ 都 / 敢做。/ 他 / 爱财不要命，",
    "ĐÁP ÁN": "他爱财不要命，什么坏事都敢做。",
    "PHIÊN ÂM": "Tā ài cái bù yào mìng, shénme huàishì dōu gǎncuò."
  },
  {
    "STT": 18,
    "SẮP XẾP CÂU": "为了钱 / 都敢做， / 真是 / 什么 / 他 / 爱财不要命。",
    "ĐÁP ÁN": "他为了钱什么都敢做，真是爱财不要命。",
    "PHIÊN ÂM": "Tā wèile qián shénme dōu gǎnduò, zhēnshi ài cái bù yào mìng."
  },
  {
    "STT": 19,
    "CHỮ": "A",
    "CỤM": "爱吃好的怕动弹,提起做活干叫唤",
    "PINYIN": "ài chī hǎo de pà dòng tan ，tí qǐ zuò huó gàn jiào huàn",
    "NGHĨA": "动弹:方言,指劳动。 讽刺人好吃懒做,贪图享受。",
    "SẮP XẾP CÂU": "提起做活干 / 叫唤的人。/ 他就是个 / 爱吃好的怕动弹，",
    "ĐÁP ÁN": "他就是个爱吃好的怕动弹，提起做活干叫唤的人。",
    "PHIÊN ÂM": "Tā jiùshì ge ài chī hǎo de pà dòng tan, tí qǐ zuò huó gàn jiào huàn de rén."
  },
  {
    "STT": 20,
    "SẮP XẾP CÂU": "就 / 很少 / 他平时 / 爱吃好的怕动弹,提起做活干叫唤， / 运动。 ",
    "ĐÁP ÁN": "他平时爱吃好的怕动弹,提起做活干就叫唤，很少运动。",
    "PHIÊN ÂM": "Tā píngshí ài chī hǎo de pà dòngtan, tí qǐ zuò huó gàn jiù jiào huàn, hěn shǎo yùndòng."
  },
  {
    "STT": 21,
    "CHỮ": "A",
    "CỤM": "挨锄头,不挨针头",
    "PINYIN": "āi chú tou，bù āi zhēn tóu",
    "NGHĨA": "镊头:刨土用的一种农具,类 似镐。\r\n比喻宁可明着吃大亏,也不愿暗着吃 小亏。",
    "SẮP XẾP CÂU": "但好歹是 / 挨锄头，不挨针头。/ 这活儿/ 虽然累，",
    "ĐÁP ÁN": "这活儿虽然累，但好歹是挨锄头，不挨针头。",
    "PHIÊN ÂM": "Zhè huór suīrán lèi, dàn hǎodǎi shì ái chú tou, bù ái zhēn tóu."
  },
  {
    "STT": 22,
    "SẮP XẾP CÂU": "不怕 / 吃苦。 / 习惯了 / 孩子 / 农村的 / 挨锄头,不挨针头，",
    "ĐÁP ÁN": "农村的孩子习惯了挨锄头,不挨针头，不怕吃苦。",
    "PHIÊN ÂM": "Nóngcūn de háizi xíguàn le ái chú tou, bù ái zhēn tóu, bù pà chīkǔ."
  },
  {
    "STT": 23,
    "CHỮ": "A",
    "CỤM": "挨打不记数",
    "PINYIN": "ái dǎ bù jì shù",
    "NGHĨA": "指遭受批评、处罚或吃亏上当之后,还 不知道接受教训。",
    "SẮP XẾP CÂU": "练就了一副 / 不怕吃苦的性格。/ 他从小/ 挨打不记数，",
    "ĐÁP ÁN": "他从小挨打不记数，练就了一副不怕吃苦的性格。",
    "PHIÊN ÂM": "Tā cóngxiǎo ái dǎ bù jì shù, liànjiù le yī fù bù pà chīkǔ de xìnggé."
  },
  {
    "STT": 24,
    "SẮP XẾP CÂU": "总是 / 让人 / 脾气很倔， / 头疼。 / 他 / 挨打不记数，",
    "ĐÁP ÁN": "他脾气很倔，总是挨打不记数，让人头疼。",
    "PHIÊN ÂM": "Tā píqi hěn jué, zǒngshì ái dǎ bù jì shù, ràng rén tóuténg."
  },
  {
    "STT": 25,
    "CHỮ": "A",
    "CỤM": "矮冬瓜",
    "PINYIN": "ǎi dōng guā",
    "NGHĨA": "戏称又矮又胖的人。有戏谑、自嘲、嘲笑他人的意味。",
    "SẮP XẾP CÂU": "长得像个 / 矮冬瓜。/ 他个子不高，",
    "ĐÁP ÁN": "他个子不高，长得像个矮冬瓜。",
    "PHIÊN ÂM": "Tā gèzi bù gāo, zhǎng de xiàng ge ǎi dōng guā."
  },
  {
    "STT": 26,
    "SẮP XẾP CÂU": "经常 / 矮， / 同学 / 矮冬瓜。 / 个子 / 被 / 小明因为 / 叫作",
    "ĐÁP ÁN": "小明因为个子矮，经常被同学叫作矮冬瓜。",
    "PHIÊN ÂM": "Xiǎomíng yīnwèi gèzi ǎi, jīngcháng bèi tóngxué jiào zuò ǎi dōng guā."
  },
  {
    "STT": 27,
    "CHỮ": "A",
    "CỤM": "挨黑枪",
    "PINYIN": "ái hēi qiāng",
    "NGHĨA": "黑枪:暗中射出的子弹。\r\n被人暗中枪击。比喻遭人暗算。",
    "SẮP XẾP CÂU": "被陷害了。/ 他在公司里 / 挨黑枪，",
    "ĐÁP ÁN": "他在公司里挨黑枪，被陷害了。",
    "PHIÊN ÂM": "Tā zài gōngsī lǐ ái hēi qiāng, bèi xiànhài le."
  },
  {
    "STT": 28,
    "SẮP XẾP CÂU": "竞争中， / 损失 / 商场 / 不幸 / 惨重。 / 他 / 在 / 挨了黑枪，",
    "ĐÁP ÁN": "在商场竞争中，他不幸挨了黑枪，损失惨重。",
    "PHIÊN ÂM": "Zài shāngchǎng jìngzhēng zhōng, tā bùxìng ái le hēi qiāng, sǔnshī cánzhòng."
  },
  {
    "STT": 29,
    "CHỮ": "A",
    "CỤM": "挨烙铁",
    "PINYIN": "āi lào tiě",
    "NGHĨA": "烙铁:熨斗。 比喻遭受批评和打击。",
    "SẮP XẾP CÂU": "挨烙铁。/ 古代犯人 / 常常要",
    "ĐÁP ÁN": "古代犯人常常要挨烙铁。",
    "PHIÊN ÂM": "Gǔdài fàngrén chángcháng yào āi lào tiě."
  },
  {
    "STT": 30,
    "SẮP XẾP CÂU": "不小心 / 被 / 手。 / 烫伤了 / 工人师傅 / 挨烙铁",
    "ĐÁP ÁN": "工人师傅不小心被挨烙铁烫伤了手。",
    "PHIÊN ÂM": "Gōngrén shīfù bù xiǎoxīn bèi āi lào tiě tàngshāng le shǒu."
  },
  {
    "STT": 31,
    "CHỮ": "A",
    "CỤM": "挨了電子又霜打",
    "PINYIN": "ái le diàn zi yòu shuāng dǎ",
    "NGHĨA": "比喻接连遭受打击。",
    "SẮP XẾP CÂU": "又霜打，/ 颗粒无收。/ 今年庄稼 / 先挨了电子，",
    "ĐÁP ÁN": "今年庄稼先挨了电子，又霜打，颗粒无收。",
    "PHIÊN ÂM": "Jīnnián zhuāngjia xiān ái le diàn zi yòu shuāng dǎ, kēlí wú shōu."
  },
  {
    "STT": 32,
    "SẮP XẾP CÂU": "很难 / 活下来。 / 那株小树苗 / 挨了电子又霜打， / 今年 / 估计",
    "ĐÁP ÁN": "那株小树苗今年挨了电子又霜打，估计很难活下来。",
    "PHIÊN ÂM": "Nà zhū xiǎoshùmiáo jīnnián ái le diàn zi yòu shuāng dǎ, gūjì hěn nán huó xiàlái."
  },
  {
    "STT": 33,
    "CHỮ": "A",
    "CỤM": "挨闷棍",
    "PINYIN": "ái mèn gùn",
    "NGHĨA": "闷棍:古代的一种兵器,拦路抢劫的强盗常从背后给人一闷棍,把 人打昏或打死,抢东西。\r\n比喻遭到暗中的或突如其来的打击。\r\n也作“挨闷棒”、“挨闷雷”。",
    "SẮP XẾP CÂU": "被挨了闷棍。/ 他/ 走/ 在路上",
    "ĐÁP ÁN": "他走在路上被挨了闷棍。",
    "PHIÊN ÂM": "Tā zǒu zài lùshàng bèi ái le mèn gùn."
  },
  {
    "STT": 34,
    "SẮP XẾP CÂU": "坏话， / 结果 / 在背后 / 说了 / 别人 / 他 / 挨闷棍。",
    "ĐÁP ÁN": "他在背后说了别人坏话，结果挨闷棍。",
    "PHIÊN ÂM": "Tā zài bèihòu shuō le biérén huàihuà, jiéguǒ ái mèn gùn."
  },
  {
    "STT": 35,
    "CHỮ": "A",
    "CỤM": "爱面子",
    "PINYIN": "ài miàn zi",
    "NGHĨA": "比喻怕损害自己的体面，被人看不起。",
    "SẮP XẾP CÂU": "丢不起人。/ 他很 / 爱面子，",
    "ĐÁP ÁN": "他很爱面子，丢不起人。",
    "PHIÊN ÂM": "Tā hěn ài miàn zi, diū bu qǐ rén."
  },
  {
    "STT": 36,
    "SẮP XẾP CÂU": "很好。 / 爱面子， / 总是 / 表现得 / 这个人 / 非常 / 小王",
    "ĐÁP ÁN": "小王这个人非常爱面子，总想表现得很好。",
    "PHIÊN ÂM": "Xiǎo Wáng zhège rén fēicháng ài miàn zi, zǒng xiǎng biǎoxiàn de hěn hǎo."
  },
  {
    "STT": 37,
    "CHỮ": "A",
    "CỤM": "爱盘不击鼠",
    "PINYIN": "ài pán bù jī shǔ",
    "NGHĨA": "击:打。\r\n因怕打碎盘子而不打旁边的老鼠。 喻因有所顾忌而不打击坏人。",
    "SẮP XẾP CÂU": "错过了很多机会。/ 他 / 爱盘不击鼠，",
    "ĐÁP ÁN": "他爱盘不击鼠，错过了很多机会。",
    "PHIÊN ÂM": "Tā ài pán bù jī shǔ, cuòguò le hěn duō jīhuì."
  },
  {
    "STT": 38,
    "SẮP XẾP CÂU": "否则 / 不能 / 就 / 没用了。 / 养猫 / 爱盘不击鼠，",
    "ĐÁP ÁN": "养猫不能爱盘不击鼠，否则就没用了。",
    "PHIÊN ÂM": "Yǎng māo bù néng ài pán bù jī shǔ, fǒuzé jiù méi yòng le."
  },
  {
    "STT": 39,
    "CHỮ": "A",
    "CỤM": "挨千刀",
    "PINYIN": "ái qiān dāo",
    "NGHĨA": "千刀:本指古代凌迟的酷刑,后亦常用 为咒骂语。\r\n诅咒人不得好死,没有好下场。",
    "SẮP XẾP CÂU": "害死我了！/ 你个 / 挨千刀的，",
    "ĐÁP ÁN": "你个挨千刀的，害死我了！",
    "PHIÊN ÂM": "Nǐ ge ái qiān dāo de, hàisǐ wǒ le!"
  },
  {
    "STT": 40,
    "SẮP XẾP CÂU": "罪该万死， / 这种人 / 都不为过。 / 真是 / 挨千刀",
    "ĐÁP ÁN": "这种人真是罪该万死，挨千刀都不为过。",
    "PHIÊN ÂM": "Zhè zhǒng rén zhēnshi zuì gāi wànsǐ, ái qiān dāo dōu bù wéiguò."
  },
  {
    "STT": 41,
    "CHỮ": "A",
    "CỤM": "挨枪子",
    "PINYIN": "ái qiāng zi",
    "NGHĨA": "枪子:子弹。\r\n指被子弹打中而毙命。\r\n也作“吃枪子”。",
    "SẮP XẾP CÂU": "挨枪子。/ 战士们 / 在战场上",
    "ĐÁP ÁN": "战士们在战场上挨枪子。",
    "PHIÊN ÂM": "Zhànshìmen zài zhànchǎng shàng ái qiāngzi."
  },
  {
    "STT": 42,
    "SẮP XẾP CÂU": "都 / 战争年代， / 很多人 / 非常 / 挨枪子， / 可能 / 在 / 危险。",
    "ĐÁP ÁN": "在战争年代，很多人都可能挨枪子，非常危险。",
    "PHIÊN ÂM": "Zài zhànzhēng niándài, hěn duō rén dōu kěnéng ái qiāngzi, fēicháng wēixiǎn."
  },
  {
    "STT": 43,
    "CHỮ": "A",
    "CỤM": "挨软棍",
    "PINYIN": "ái ruǎn gùn",
    "NGHĨA": "比喻遭到委婉的批评或反击。",
    "SẮP XẾP CÂU": "挨软棍。/ 他在单位里 / 总是",
    "ĐÁP ÁN": "他在单位里总是挨软棍。 ",
    "PHIÊN ÂM": "Tā zài dānwèi lǐ zǒngshì ái ruǎn gùn."
  },
  {
    "STT": 44,
    "SẮP XẾP CÂU": "比 / 有时候 / 硬碰硬 / 挨软棍 / 更有效。 / 年轻人， / 对待",
    "ĐÁP ÁN": "对待年轻人，有时候挨软棍比硬碰硬更有效。",
    "PHIÊN ÂM": "Duìdài niánqīngrén, yǒushíhou ái ruǎn gùn bǐ yìngpèngyìng gèng yǒuxiào."
  },
  {
    "STT": 45,
    "CHỮ": "A",
    "CỤM": "挨上门",
    "PINYIN": "āi shàng mén",
    "NGHĨA": "指主动上门,不请自来。",
    "SẮP XẾP CÂU": "来借钱。/ 他整天 / 挨上门",
    "ĐÁP ÁN": "他整天挨上门来借钱。",
    "PHIÊN ÂM": "Tā zhěngtiān āi shàng mén lái jièqián."
  },
  {
    "STT": 46,
    "SẮP XẾP CÂU": "推销产品， / 一家家 / 他 / 不得不 / 为了 / 挨上门 / 去。",
    "ĐÁP ÁN": "为了推销产品，他不得不一家家挨上门去。",
    "PHIÊN ÂM": "Wèile tuīxiāo chǎnpǐn, tā bùdébù yī jiājiā āi shàng mén qù."
  },
  {
    "STT": 47,
    "CHỮ": "A",
    "CỤM": "挨一刻似三秋",
    "PINYIN": "āi yī kè sì sān qiū",
    "NGHĨA": "形容等待的心情非常焦急或迫切。",
    "SẮP XẾP CÂU": "觉得 / 挨一刻似三秋。/ 他焦急地 / 等待着消息，",
    "ĐÁP ÁN": "他焦急地等待着消息，觉得挨一刻似三秋。",
    "PHIÊN ÂM": "Tā jiāojí de děngdài zhe xiāoxi, juéde āi yī kè sì sān qiū."
  },
  {
    "STT": 48,
    "SẮP XẾP CÂU": "真是 / 每一天 / 难熬， / 离别之后， / 都 / 挨一刻似三秋。",
    "ĐÁP ÁN": "离别之后，每一天都难熬，真是挨一刻似三秋。",
    "PHIÊN ÂM": "Líbié zhīhòu, měi yī tiān dōu nán'áo, zhēnshi āi yī kè sì sān qiū."
  },
  {
    "STT": 49,
    "CHỮ": "A",
    "CỤM": "挨一天算一天",
    "PINYIN": "āi yī tiān suàn yī tiān",
    "NGHĨA": "见“过一天算一天”。",
    "SẮP XẾP CÂU": "过着 / 浑浑噩噩的生活。/ 他现在就 / 挨一天算一天，",
    "ĐÁP ÁN": "他现在就挨一天算一天，过着浑浑噩噩的生活。",
    "PHIÊN ÂM": "Tā xiànzài jiù āi yī tiān suàn yī tiān, guòzhe húnhún'è'è de shēnghuó."
  },
  {
    "STT": 50,
    "SẮP XẾP CÂU": "很多人 / 挨一天算一天。 / 现在 / 工作 / 不好找， / 都是",
    "ĐÁP ÁN": "现在工作不好找，很多人都是挨一天算一天。",
    "PHIÊN ÂM": "Xiànzài gōngzuò bù hǎo zhǎo, hěn duō rén dōu shì āi yī tiān suàn yī tiān."
  },
  {
    "STT": 51,
    "CHỮ": "A",
    "CỤM": "挨砖不挨瓦",
    "PINYIN": "āi zhuān bù āi wǎ",
    "NGHĨA": "宁可被砖头打,也不愿意挨瓦片打。\r\n比喻人不明事理,不知轻重、好坏。",
    "SẮP XẾP CÂU": "经常出错。/ 他做事 / 挨砖不挨瓦，",
    "ĐÁP ÁN": "他做事挨砖不挨瓦，经常出错。",
    "PHIÊN ÂM": "Tā zuòshì āi zhuān bù āi wǎ, jīngcháng chūcuò."
  },
  {
    "STT": 52,
    "SẮP XẾP CÂU": "总是 / 劝。 / 听不进 / 别人的 / 挨砖不挨瓦， / 很固执， / 他 / 这个人",
    "ĐÁP ÁN": "他这个人很固执，总是挨砖不挨瓦，听不进别人的劝。",
    "PHIÊN ÂM": "Tā zhège rén hěn gùzhí, zǒngshì āi zhuān bù āi wǎ, tīng bu jìn biérén de quàn."
  },
  {
    "STT": 53,
    "CHỮ": "A",
    "CỤM": "矮子里面选将军",
    "PINYIN": "ǎi zi lǐ miàn xuǎn jiāng jūn",
    "NGHĨA": "矮子:身材矮小的人。\r\n比喻在条件较差的人群里面挑选比较 好的。\r\n也作“矮子队里选将军”、“矮子里头拔 大个”。",
    "SẮP XẾP CÂU": "但我们也要在 / 矮子里面选将军。/ 虽然条件有限，",
    "ĐÁP ÁN": "虽然条件有限，但我们也要在矮子里面选将军。",
    "PHIÊN ÂM": "Suīrán tiáojiàn yǒuxiàn, dàn wǒmen yě yào zài ǎi zi lǐ miàn xuǎn jiāng jūn."
  },
  {
    "STT": 54,
    "SẮP XẾP CÂU": "矮子里面选将军了。 / 现在 / 紧急， / 情况 / 只能",
    "ĐÁP ÁN": "现在情况紧急，只能矮子里面选将军了。",
    "PHIÊN ÂM": "Xiànzài qíngkuàng jǐnjí, zhǐ néng ǎi zi lǐ miàn xuǎn jiāng jūn le."
  },
  {
    "STT": 55,
    "CHỮ": "A",
    "CỤM": "矮子面前说矬话",
    "PINYIN": "ǎi zi miàn qián shuō cuó huà",
    "NGHĨA": "矬:cuó,(身体)短小,短。\r\n指说话不注意对象,触到了听者的 短处。\r\n也作“矮子面前说短话”、“当着矮子说 矮话”。",
    "SẮP XẾP CÂU": "是在 / 矮子面前说矬话！/ 你这样说，",
    "ĐÁP ÁN": "你这样说，是在矮子面前说矬话！",
    "PHIÊN ÂM": "Nǐ zhèyàng shuō, shì zài ǎi zi miàn qián shuō cuó huà! "
  },
  {
    "STT": 56,
    "SẮP XẾP CÂU": "太不礼貌了。 / 你 / 个子矮， / 矮子面前说矬话， / 明知道 / 还",
    "ĐÁP ÁN": "你明知道他个子矮，还矮子面前说矬话，太不礼貌了。",
    "PHIÊN ÂM": "Nǐ míngzhīdào tā gèzi ǎi, hái ǎi zi miàn qián shuō cuó huà, tài bù lǐmào le."
  },
  {
    "STT": 57,
    "CHỮ": "A",
    "CỤM": "安本分",
    "PINYIN": "ān běn fèn",
    "NGHĨA": "指做事遵规守矩,不敢违反相关的 规定。",
    "SẮP XẾP CÂU": "踏实肯干。/ 他为人 / 安本分，",
    "ĐÁP ÁN": "他为人安本分，踏实肯干。",
    "PHIÊN ÂM": "Tā wéirén ān běn fen, tāshi kěngàn."
  },
  {
    "STT": 58,
    "SẮP XẾP CÂU": "从不 / 老王 / 惹事生非。 / 一向 / 安本分守己，",
    "ĐÁP ÁN": "老王一向安本分守己，从不惹事生非。",
    "PHIÊN ÂM": "Lǎo Wáng yīxiàng ān běn fen shǒujǐ, cóng bù rěshì shēngfēi."
  },
  {
    "STT": 59,
    "CHỮ": "A",
    "CỤM": "安翅膀",
    "PINYIN": "ān chì bǎng",
    "NGHĨA": "喻指在原来的基础上,凭借某种有利 或优越的条件得到迅速的发展。\r\n也作“插翅膀”。",
    "SẮP XẾP CÂU": "让他 / 飞得更高。/ 给他 / 安上翅膀，",
    "ĐÁP ÁN": "给他安上翅膀，让他飞得更高。",
    "PHIÊN ÂM": "Gěi tā ān shàng chì bǎng, ràng tā fēi dé gèng gāo."
  },
  {
    "STT": 60,
    "SẮP XẾP CÂU": "束缚。 / 飞走， / 喜欢被 / 安翅膀 / 总想 / 不 / 他",
    "ĐÁP ÁN": "他总想安翅膀飞走，不喜欢被束缚。",
    "PHIÊN ÂM": "Tā zǒng xiǎng ān chì bǎng fēizǒu, bù xǐhuan bèi shùfù."
  },
  {
    "STT": 61,
    "CHỮ": "A",
    "CỤM": "安钉子",
    "PINYIN": "ān dīng zi",
    "NGHĨA": "安:安设。\r\n比喻给对手设置障碍或在对手内部安 插自己的人进行监视。",
    "SẮP XẾP CÂU": "收集情报。/ 他们在公司里 / 安钉子，",
    "ĐÁP ÁN": "他们在公司里安钉子，收集情报。",
    "PHIÊN ÂM": "Tāmen zài gōngsī lǐ ān dīng zi, shōují qíngbào."
  },
  {
    "STT": 62,
    "SẮP XẾP CÂU": "矛盾。 / 制造 / 总想 / 这个团队里， / 安钉子， / 有人 / 在",
    "ĐÁP ÁN": "在这个团队里，有人总想安钉子，制造矛盾。",
    "PHIÊN ÂM": "Zài zhège tuánduì lǐ, yǒurén zǒng xiǎng ān dīng zi, zhìzào máodùn."
  },
  {
    "STT": 63,
    "CHỮ": "A",
    "CỤM": "安坏心眼",
    "PINYIN": "ān huài xīn yǎn",
    "NGHĨA": "指人心术不正,使坏害人。\r\n也作“使黑心”。",
    "SẮP XẾP CÂU": "想骗取我的钱。/ 他 / 安坏心眼，",
    "ĐÁP ÁN": "他安坏心眼，想骗取我的钱。",
    "PHIÊN ÂM": "Tā ān huài xīn yǎn, xiǎng piànqǔ wǒ de qián."
  },
  {
    "STT": 64,
    "SẮP XẾP CÂU": "没想到 / 很善良， / 背地里 / 安坏心眼。 / 看起来 / 她",
    "ĐÁP ÁN": "她看起来很善良，没想到背地里安坏心眼。",
    "PHIÊN ÂM": "Tā kàn qǐlái hěn shànliáng, méi xiǎngdào bèidì lǐ ān huài xīn yǎn."
  },
  {
    "STT": 65,
    "CHỮ": "A",
    "CỤM": "按老方子吃药",
    "PINYIN": "àn lǎo fāng zi chī yào",
    "NGHĨA": "\"方子:处方。\r\n 比喻用旧方法处理新问题。\"",
    "SẮP XẾP CÂU": "病就好了。/ 他一直 / 按老方子吃药，",
    "ĐÁP ÁN": "他一直按老方子吃药，病就好了。",
    "PHIÊN ÂM": "Tā yīzhí àn lǎo fāng zi chī yào, bìng jiù hǎo le."
  },
  {
    "STT": 66,
    "SẮP XẾP CÂU": "新问题， / 我们 / 总是 / 不能 / 创新。 / 按老方子吃药， / 面对 / 要",
    "ĐÁP ÁN": "面对新问题，我们不能总是按老方子吃药，要创新。",
    "PHIÊN ÂM": "Miànduì xīn wèntí, wǒmen bù néng zǒngshì àn lǎo fāng zi chī yào, yào chuàngxīn."
  },
  {
    "STT": 67,
    "CHỮ": "A",
    "CỤM": "安乐死",
    "PINYIN": "ān lè sǐ",
    "NGHĨA": "指无痛苦的死亡。现一般指无痛致死 术,即为结束患者的痛苦而采取致死的 措施。比喻让无可挽救的事物自然 了结。",
    "SẮP XẾP CÂU": "是合法的。/ 安乐死 / 在一些国家",
    "ĐÁP ÁN": "安乐死在一些国家是合法的。",
    "PHIÊN ÂM": "Ān lè sǐ zài yīxiē guójiā shì héfǎ de."
  },
  {
    "STT": 68,
    "SẮP XẾP CÂU": "安乐死。 / 动物 / 巨大痛苦时， / 有时 / 考虑 / 在遭受 / 会",
    "ĐÁP ÁN": "动物在遭受巨大痛苦时，有时会考虑安乐死。",
    "PHIÊN ÂM": "Dòngwù zài zāoshòu jùdà tòngkǔ shí, yǒushí huì kǎolǜ ān lè sǐ."
  },
  {
    "STT": 69,
    "CHỮ": "A",
    "CỤM": "安乐窝",
    "PINYIN": "ān lè wō",
    "NGHĨA": "安逸的生活环境或小巧、温暖、舒适的处所或房间。",
    "SẮP XẾP CÂU": "不思进取。/ 他过着 / 安乐窝的生活，",
    "ĐÁP ÁN": "他过着安乐窝的生活，不思进取。",
    "PHIÊN ÂM": "Tā guòzhe ān lè wō de shēnghuó, bù sī jìnqǔ."
  },
  {
    "STT": 70,
    "SẮP XẾP CÂU": "终于 / 一辈子， / 辛苦 / 有了 / 自己的 / 打拼 / 他 / 安乐窝。",
    "ĐÁP ÁN": "他辛苦打拼一辈子，终于有了自己的安乐窝。",
    "PHIÊN ÂM": "Tā xīnkǔ dǎpīn yī bèizi, zhōngyú yǒu le zìjǐ de ān lè wō."
  },
  {
    "STT": 71,
    "CHỮ": "A",
    "CỤM": "安下脚",
    "PINYIN": "ān xià jiǎo",
    "NGHĨA": "安排下住处。喻指站稳脚根。",
    "SẮP XẾP CÂU": "终于 / 安下脚了。/ 在异地他乡 / 他们 ",
    "ĐÁP ÁN": "他们在异地他乡终于安下脚了。",
    "PHIÊN ÂM": "Tāmen zài yìdì tāxiāng zhōngyú ān xià jiǎo le."
  },
  {
    "STT": 72,
    "SẮP XẾP CÂU": "刚到 / 陌生。 / 还没 / 这个城市， / 一切 / 都很 / 他 / 安下脚，",
    "ĐÁP ÁN": "他刚到这个城市，还没安下脚，一切都很陌生。",
    "PHIÊN ÂM": "Tā gāng dào zhège chéngshì, hái méi ān xià jiǎo, yīqiè dōu hěn mòshēng."
  },
  {
    "STT": 73,
    "CHỮ": "B",
    "CỤM": "八辈子",
    "PINYIN": "bā bèi zi",
    "NGHĨA": "指许多代。",
    "SẮP XẾP CÂU": "都没见过 / 这么大的雪。/ 我们 / 八辈子",
    "ĐÁP ÁN": "我们八辈子都没见过这么大的雪。",
    "PHIÊN ÂM": "Wǒmen bā bèi zi dōu méi jiànguò zhème dà de xuě."
  },
  {
    "STT": 74,
    "SẮP XẾP CÂU": "这件事 / 干什么？ / 八辈子了， / 你还 / 提它 / 都过去",
    "ĐÁP ÁN": "这件事都过去八辈子了，你还提它干什么？",
    "PHIÊN ÂM": "Zhè jiàn shì dōu guòqù bā bèi zi le, nǐ hái tí tā gàn shénme?"
  },
  {
    "STT": 75,
    "CHỮ": "B",
    "CỤM": "把不住关",
    "PINYIN": "bǎ bù zhù guān",
    "NGHĨA": "指不能理智地控制自己的思想和行为。",
    "SẮP XẾP CÂU": "把事情搞砸了。/ 他 / 把不住关，",
    "ĐÁP ÁN": "他把不住关，把事情搞砸了。",
    "PHIÊN ÂM": "Tā bǎ bù zhù guān, bǎ shìqíng gǎozá le."
  },
  {
    "STT": 76,
    "SẮP XẾP CÂU": "可能会 / 这个项目 / 出 / 质量 / 大问题。 / 把不住关，",
    "ĐÁP ÁN": "这个项目的质量把不住关，可能会出大问题。",
    "PHIÊN ÂM": "Zhège xiàngmù de zhìliàng bǎ bù zhù guān, kěnéng huì chū dà wèntí."
  },
  {
    "STT": 77,
    "CHỮ": "B",
    "CỤM": "把关口",
    "PINYIN": "bǎ guān kǒu",
    "NGHĨA": "比喻对人或事物进行严格审核,以确保不\r\n出差错。",
    "SẮP XẾP CÂU": "守得很严。/ 他们 / 把关口",
    "ĐÁP ÁN": "他们把关口守得很严。",
    "PHIÊN ÂM": "Tāmen bǎ guān kǒu shǒu de hěn yán."
  },
  {
    "STT": 78,
    "SẮP XẾP CÂU": "产品 / 确保 / 严格 / 质量。 / 出厂前， / 每次 / 我们 / 都会 / 把关口，",
    "ĐÁP ÁN": "每次产品出厂前，我们都会严格把关口，确保质量。",
    "PHIÊN ÂM": "Měi cì chǎnpǐn chūchǎng qián, wǒmen dōu huì yángé bǎ guān kǒu, quèbǎo zhìliàng."
  },
  {
    "STT": 79,
    "CHỮ": "B",
    "CỤM": "拔了刀子忘了疼",
    "PINYIN": "bá le dāo zi wàng le téng",
    "NGHĨA": "刚把刀拔出来就忘记了疼痛。比喻人 很快就忘记了过去的痛苦或不吸取以前 的教训。",
    "SẮP XẾP CÂU": "又犯了 / 同样的错误。/ 他 / 拔了刀子忘了疼，",
    "ĐÁP ÁN": "他拔了刀子忘了疼，又犯了同样的错误。",
    "PHIÊN ÂM": "Tā bá le dāo zi wàng le téng, yòu fàn le tóngyàng de cuòwù."
  },
  {
    "STT": 80,
    "SẮP XẾP CÂU": "有些人 / 忘了痛。 / 好了 / 伤疤 / 就是 / 拔了刀子忘了疼，",
    "ĐÁP ÁN": "有些人就是拔了刀子忘了疼，好了伤疤忘了痛。",
    "PHIÊN ÂM": "Yǒuxiē rén jiùshì bá le dāo zi wàng le téng, hǎo le shāngbā wàng le tòng."
  },
  {
    "STT": 81,
    "CHỮ": "B",
    "CỤM": "把门槛都踩低了",
    "PINYIN": "bǎ mén kǎn dōu cǎi dī le",
    "NGHĨA": "形容来的人极多或人来的次数极多。",
    "SẮP XẾP CÂU": "很多人都考过了。/ 这次考试 / 把门槛都踩低了，",
    "ĐÁP ÁN": "这次考试把门槛都踩低了，很多人都考过了。",
    "PHIÊN ÂM": "Zhè cì kǎoshì bǎ mén kǎn dōu cǎi dī le, hěn duō rén dōu kǎoguò le."
  },
  {
    "STT": 82,
    "SẮP XẾP CÂU": "跑来跑去， / 每天 / 找工作， / 他为了 / 把门槛都踩低了。",
    "ĐÁP ÁN": "他为了找工作，每天跑来跑去，把门槛都踩低了。",
    "PHIÊN ÂM": "Tā wèile zhǎo gōngzuò, měitiān pǎolái pǎoqù, bǎ mén kǎn dōu cǎi dī le."
  },
  {
    "STT": 83,
    "CHỮ": "B",
    "CỤM": "八面不着底儿",
    "PINYIN": "bā miàn bù zhuó dǐ er",
    "NGHĨA": "\"底儿:物体的最下部分。\r\n 指由于无法预计事情会有什么样的结 果而心中不安。\"",
    "SẮP XẾP CÂU": "不知道怎么办。/ 他 / 八面不着底儿，",
    "ĐÁP ÁN": "他八面不着底儿，不知道怎么办。",
    "PHIÊN ÂM": "Tā bā miàn bù zhuó dǐ er, bù zhīdào zěnme bàn."
  },
  {
    "STT": 84,
    "SẮP XẾP CÂU": "总是 / 让人 / 说话 / 摸不着头脑。 / 这个人 / 八面不着底儿，",
    "ĐÁP ÁN": "这个人说话总是八面不着底儿，让人摸不着头脑。",
    "PHIÊN ÂM": "Zhège rén shuōhuà zǒngshì bā miàn bù zhuó dǐ er, ràng rén mō bù zháo tóunǎo."
  },
  {
    "STT": 85,
    "CHỮ": "B",
    "CỤM": "把晴天说下雨来",
    "PINYIN": "bǎ qíng tiān shuō xià yǔ lái",
    "NGHĨA": "形容人嘴巴灵活,能言善辩。 也作“把死蛤蟆说出尿来”。",
    "SẮP XẾP CÂU": "挑拨离间。/ 他总是 / 把晴天说下雨来，",
    "ĐÁP ÁN": "他总是把晴天说下雨来，挑拨离间。",
    "PHIÊN ÂM": "Tā zǒngshì bǎ qíng tiān shuō xià yǔ lái, tiǎobō líjiàn."
  },
  {
    "STT": 86,
    "SẮP XẾP CÂU": "/ 啊， / 能 / 别信 / 他 / 他这张嘴 / 把晴天说下雨来，",
    "ĐÁP ÁN": "他这张嘴啊，能把晴天说下雨来，别信他。",
    "PHIÊN ÂM": "Tā zhè zhāng zuǐ a, néng bǎ qíng tiān shuō xià yǔ lái, bié xìn tā."
  },
  {
    "STT": 87,
    "CHỮ": "B",
    "CỤM": "白费蜡",
    "PINYIN": "bái fèi là",
    "NGHĨA": "比喻白费力气，没有效果。",
    "SẮP XẾP CÂU": "都 / 白费了，/ 真是 / 白费蜡。/ 所有的 / 努力",
    "ĐÁP ÁN": "所有的努力都白费了，真是白费蜡。",
    "PHIÊN ÂM": "Suǒyǒu de nǔlì dōu báifèi le, zhēnshi bái fèi là."
  },
  {
    "STT": 88,
    "SẮP XẾP CÂU": "你这样 / 根本 / 劝他 / 白费蜡， / 听不进去。 / 他 / 简直是",
    "ĐÁP ÁN": "你这样劝他简直是白费蜡，他根本听不进去。",
    "PHIÊN ÂM": "Nǐ zhèyàng quàn tā jiǎnzhí shì bái fèi là, tā gēnběn tīng bu jìnqù."
  },
  {
    "STT": 89,
    "CHỮ": "B",
    "CỤM": "败家子",
    "PINYIN": "bài jiā zǐ",
    "NGHĨA": "指不务正业、挥霍家产的子弟。",
    "SẮP XẾP CÂU": "不折不扣的 / 败家子。/ 他 / 真是 /个",
    "ĐÁP ÁN": "他真是个不折不扣的败家子。",
    "PHIÊN ÂM": "Tā zhēnshi ge bù zhé bù kòu de bài jiā zǐ."
  },
  {
    "STT": 90,
    "SẮP XẾP CÂU": "从小 / 大手大脚， / 花钱 / 真是个 / 败家子。 / 他",
    "ĐÁP ÁN": "他从小花钱大手大脚，真是个败家子。",
    "PHIÊN ÂM": "Tā cóngxiǎo huāqián dàshǒu dàjiǎo, zhēnshi ge bài jiā zǐ."
  },
  {
    "STT": 91,
    "CHỮ": "B",
    "CỤM": "摆架子",
    "PINYIN": "bǎi jià zi",
    "NGHĨA": "比喻故意显示资格、地位的高傲态度。自高自大、装腔作势。也说\r\n“拿架子”、“端着架子”。",
    "SẮP XẾP CÂU": "让人 / 感觉 / 难以 / 相处。/ 他 / 总是 / 摆架子，",
    "ĐÁP ÁN": "他总是摆架子，让人感觉难以相处。",
    "PHIÊN ÂM": "Tā zǒngshì bǎi jià zi, ràng rén gǎnjué nányǐ xiāngchǔ."
  },
  {
    "STT": 92,
    "SẮP XẾP CÂU": "摆架子， / 总是 / 领导 / 意见。 / 不应该 / 多听取 / 要 / 下属的",
    "ĐÁP ÁN": "领导不应该总是摆架子，要多听取下属的意见。",
    "PHIÊN ÂM": "Lǐngdǎo bù yìnggāi zǒngshì bǎi jià zi, yào duō tīngqǔ xiàshǔ de yìjiàn."
  },
  {
    "STT": 93,
    "CHỮ": "B",
    "CỤM": "白眼狼",
    "PINYIN": "bái yǎn láng",
    "NGHĨA": "忘恩负义的人。",
    "SẮP XẾP CÂU": "真是 / 个 / 白眼狼。/ 他 / 觉得 / 这个 / 年轻人",
    "ĐÁP ÁN": "他觉得这个年轻人真是个白眼狼。",
    "PHIÊN ÂM": "Tā juéde zhège niánqīngrén zhēnshi ge bái yǎn láng."
  },
  {
    "STT": 94,
    "SẮP XẾP CÂU": "那么好， / 没想到 / 是个 / 他对那个人 / 白眼狼。 / 对方",
    "ĐÁP ÁN": "他对那个人那么好，没想到对方是个白眼狼。",
    "PHIÊN ÂM": "Tā duì nà ge rén nàme hǎo, méi xiǎngdào duìfāng shì ge bái yǎn láng."
  },
  {
    "STT": 95,
    "CHỮ": "B",
    "CỤM": "摆开手",
    "PINYIN": "bǎi kāi shǒu",
    "NGHĨA": "指分手,断绝关系。\r\n指对某事不管或作罢。",
    "SẮP XẾP CÂU": "积极地 / 参与到 / 改革中来。/ 他 / 鼓励 / 员工们 / 摆开手，",
    "ĐÁP ÁN": "他鼓励员工们摆开手，积极地参与到改革中来。",
    "PHIÊN ÂM": "Tā gǔlì yuángōngmen bǎi kāi shǒu, jījí de cānyù dào gǎigé zhōng lái."
  },
  {
    "STT": 96,
    "SẮP XẾP CÂU": "摆开手 / 有什么 / 困难 / 尽管说， / 我会尽量 / 帮忙。 / 大家",
    "ĐÁP ÁN": "大家有什么困难尽管说，我会尽量摆开手帮忙。",
    "PHIÊN ÂM": "Dàjiā yǒu shénme kùnnan jǐnguǎn shuō, wǒ huì jìnliàng bǎi kāi shǒu bāngmáng."
  },
  {
    "STT": 97,
    "CHỮ": "B",
    "CỤM": "半边天",
    "PINYIN": "bàn biān tiān",
    "NGHĨA": "形容妇女的地位跟男人一样。",
    "SẮP XẾP CÂU": "是 / 真正的 / 半边天。/ 妇女 / 是 / 社会 / 发展的 / 一半 / 力量，",
    "ĐÁP ÁN": "妇女是社会发展的一半力量，是真正的半边天。",
    "PHIÊN ÂM": "Fùnǚ shì shèhuì fāzhǎn de yī bàn lìliàng, shì zhēnzhèng de bàn biān tiān."
  },
  {
    "STT": 98,
    "SẮP XẾP CÂU": "女性 / 现代社会， / 半边天， / 作用。 / 发挥着 / 重要 / 撑起了",
    "ĐÁP ÁN": "现代社会，女性撑起了半边天，发挥着重要作用。",
    "PHIÊN ÂM": "Xiàndài shèhuì, nǚxìng chēng qǐ le bàn biān tiān, fāhuī zhe zhòngyào zuòyòng."
  },
  {
    "STT": 99,
    "CHỮ": "B",
    "CỤM": "半吊子",
    "PINYIN": "bàn diào zi",
    "NGHĨA": "比喻不通事理、说话随便、举止轻浮的人。",
    "SẮP XẾP CÂU": "做 / 这活儿 / 还 / 差得远呢！/ 他 / 只是 / 个 / 半吊子，",
    "ĐÁP ÁN": "他只是个半吊子，做这活儿还差得远呢！",
    "PHIÊN ÂM": "Tā zhǐshì ge bàn diào zi, zuò zhè huór hái chà de yuǎn ne!"
  },
  {
    "STT": 100,
    "SẮP XẾP CÂU": "懂一点， / 但都 / 不够精通。 / 半吊子， / 什么 / 是 / 他",
    "ĐÁP ÁN": "他什么都懂一点，但都是半吊子，不够精通。",
    "PHIÊN ÂM": "Tā shénme dōu dǒng yī diǎn, dàn dōu shì bàn diào zi, bù gòu jīngtōng."
  },
  {
    "STT": 101,
    "CHỮ": "B",
    "CỤM": "半瓶醋 ",
    "PINYIN": "bàn pínɡ cùn",
    "NGHĨA": "比喻知识技术只知道一点儿的人。",
    "SẮP XẾP CÂU": "其实 / 就是 / 个 / 半瓶醋。/ 他 / 只会 / 说些 / 皮毛，",
    "ĐÁP ÁN": "他只会说些皮毛，其实就是个半瓶醋。",
    "PHIÊN ÂM": "Tā zhǐ huì shuō xiē pímáo, qíshí jiùshì ge bàn píng cù."
  },
  {
    "STT": 102,
    "SẮP XẾP CÂU": "吹牛， / 没什么 / 其实 / 别看他 / 半瓶醋， / 爱 / 真本事。 / 平时 / 是个",
    "ĐÁP ÁN": "别看他平时爱吹牛，其实是个半瓶醋，没什么真本事。",
    "PHIÊN ÂM": "Bié kàn tā píngshí ài chuīniú, qíshí shì ge bàn píng cù, méi shénme zhēnběnshì."
  },
  {
    "STT": 103,
    "CHỮ": "B",
    "CỤM": "搬起石头砸自己的脚",
    "PINYIN": "bān qǐ shí tou zá zì jǐ de jiǎo",
    "NGHĨA": "搬起石头准备砸别人却砸了自己的脚。比喻自作自受，害人终害己。",
    "SẮP XẾP CÂU": "结果 / 搬起石头砸了自己的脚。/ 他为了/ 陷害别人，",
    "ĐÁP ÁN": "他为了陷害别人，结果搬起石头砸了自己的脚。",
    "PHIÊN ÂM": "Tā wèile xiànhài biérén, jiéguǒ bān qǐ shí tou zá zì jǐ de jiǎo."
  },
  {
    "STT": 104,
    "SẮP XẾP CÂU": "搬起石头砸自己的脚， / 最终 / 这种行为 / 还是 / 受害的 / 简直是 / 自己。",
    "ĐÁP ÁN": "这种行为简直是搬起石头砸自己的脚，最终受害的还是自己。",
    "PHIÊN ÂM": "Zhè zhǒng xíngwéi jiǎnzhí shì bān qǐ shí tou zá zì jǐ de jiǎo, zuìzhōng shòuhài de háishì zìjǐ."
  },
  {
    "STT": 105,
    "CHỮ": "B",
    "CỤM": "帮倒忙",
    "PINYIN": "bānɡ dào mánɡ",
    "NGHĨA": "形式上帮忙而实际上反添麻烦。",
    "SẮP XẾP CÂU": "事情更糟了。/ 他好心帮我， / 结果 / 帮倒忙，",
    "ĐÁP ÁN": "他好心帮我，结果帮倒忙，事情更糟了。",
    "PHIÊN ÂM": "Tā hǎoxīn bāng wǒ, jiéguǒ bāng dào máng, shìqíng gèng zāo le."
  },
  {
    "STT": 106,
    "SẮP XẾP CÂU": "坏事。 / 你本想 / 办 / 帮倒忙了， / 结果却 / 真是 / 好心 / 帮我，",
    "ĐÁP ÁN": "你本想帮我，结果却帮倒忙了，真是好心办坏事。",
    "PHIÊN ÂM": "Nǐ běn xiǎng bāng wǒ, jiéguǒ què bāng dào máng le, zhēnshi hǎoxīn bàn huàishì."
  },
  {
    "STT": 107,
    "CHỮ": "B",
    "CỤM": "抱粗腿",
    "PINYIN": "bào cū tuǐ",
    "NGHĨA": "比喻投靠有权势的人。",
    "SẮP XẾP CÂU": "巴结领导。/ 他整天 / 抱粗腿，",
    "ĐÁP ÁN": "他整天抱粗腿，巴结领导。",
    "PHIÊN ÂM": "Tā zhěngtiān bào cū tuǐ, bājie lǐngdǎo."
  },
  {
    "STT": 108,
    "SẮP XẾP CÂU": "让人 / 不齿。 / 抱粗腿， / 升职， / 不惜 / 他为了 / 去",
    "ĐÁP ÁN": "他为了升职，不惜去抱粗腿，让人不齿。",
    "PHIÊN ÂM": "Tā wèile shēngzhí, bù xī qù bào cū tuǐ, ràng rén bùchǐ."
  },
  {
    "STT": 109,
    "CHỮ": "B",
    "CỤM": "抱佛脚",
    "PINYIN": "bào fó jiǎo",
    "NGHĨA": "谚语: “平时不烧香，急来抱佛脚。”原来比喻平时没有联系，临时慌忙恳求。\r\n 后来多指平时没有准备，临时慌忙应付。也指求助于上天。",
    "SẮP XẾP CÂU": "临时抱佛脚。/ 考试前一天晚上， / 他/ 还抱着佛脚",
    "ĐÁP ÁN": "考试前一天晚上，他还抱着佛脚临时抱佛脚。",
    "PHIÊN ÂM": "Kǎoshì qián yī tiān wǎnshàng, tā hái bàozhe fójiǎo bào fó jiǎo."
  },
  {
    "STT": 110,
    "SẮP XẾP CÂU": "考试前 / 不会 / 抱佛脚， / 平时 / 不努力， / 好成绩的。 / 才 / 是",
    "ĐÁP ÁN": "平时不努力，考试前才抱佛脚，是不会有好成绩的。",
    "PHIÊN ÂM": "Píngshí bù nǔlì, kǎoshì qián cái bào fó jiǎo, shì bù huì yǒu hǎo chéngjī de."
  },
  {
    "STT": 111,
    "CHỮ": "B",
    "CỤM": "保护伞 ",
    "PINYIN": "bǎo hù sǎn",
    "NGHĨA": "比喻能起到保护作用的人或事物( 含贬义) 。",
    "SẮP XẾP CÂU": "所以一直 / 逍遥法外。/ 他们背后有 / 保护伞，",
    "ĐÁP ÁN": "他们背后有保护伞，所以一直逍遥法外。",
    "PHIÊN ÂM": "Tāmen bèihòu yǒu bǎo hù sǎn, suǒyǐ yīzhí xiāoyáo fǎwài."
  },
  {
    "STT": 112,
    "SẮP XẾP CÂU": "不法分子 / 充当 / 有些 / 腐败分子 / 利用 / 职权 / 保护伞。 / 为",
    "ĐÁP ÁN": "有些腐败分子利用职权为不法分子充当保护伞。",
    "PHIÊN ÂM": "Yǒuxiē fǔbài fēnzǐ lìyòng zhíquán wèi bùfǎ fēnzǐ chōngdāng bǎo hù sǎn."
  },
  {
    "STT": 113,
    "CHỮ": "B",
    "CỤM": "爆冷门",
    "PINYIN": "bào lěng mén",
    "NGHĨA": "比喻突然出现人们意想不到的情况或结果。冷门，指赌博时很少有人下注的一门。",
    "SẮP XẾP CÂU": "冠军居然是他！/ 这次比赛 / 爆冷门，",
    "ĐÁP ÁN": "这次比赛爆冷门，冠军居然是他！",
    "PHIÊN ÂM": "Zhè cì bǐsài bào lěng mén, guànjūn jūrán shì tā!"
  },
  {
    "STT": 114,
    "SẮP XẾP CÂU": "比赛结果 / 谁也没想到。 / 这场 / 爆冷门，",
    "ĐÁP ÁN": "这场比赛结果爆冷门，谁也没想到。",
    "PHIÊN ÂM": "Zhè chǎng bǐsài jiéguǒ bào lěng mén, shuí yě méi xiǎngdào."
  },
  {
    "STT": 115,
    "CHỮ": "B",
    "CỤM": "饱眼福",
    "PINYIN": "bǎo yǎn fú",
    "NGHĨA": "看得很满意。",
    "SẮP XẾP CÂU": "看到了 / 美丽的风景。/ 今天我们 / 饱眼福了，",
    "ĐÁP ÁN": "今天我们饱眼福了，看到了美丽的风景。",
    "PHIÊN ÂM": "Jīntiān wǒmen bǎo yǎn fú le, kàndào le měilì de fēngjǐng."
  },
  {
    "STT": 116,
    "SẮP XẾP CÂU": "珍贵的 / 博物馆 / 文物。 / 参观 / 许多 / 让我 / 看到了 / 饱眼福，",
    "ĐÁP ÁN": "参观博物馆让我饱眼福，看到了许多珍贵的文物。",
    "PHIÊN ÂM": "Cānguān bówùguǎn ràng wǒ bǎo yǎn fú, kàndào le xǔduō zhēnguì de wénwù."
  },
  {
    "STT": 117,
    "CHỮ": "B",
    "CỤM": "背包袱",
    "PINYIN": "bēi bāo fu",
    "NGHĨA": "思想或经济上有负担。",
    "SẮP XẾP CÂU": "不敢 / 放开手脚 / 去做事。/ 他总是 / 背包袱，",
    "ĐÁP ÁN": "他总是背包袱，不敢放开手脚去做事。",
    "PHIÊN ÂM": "Tā zǒngshì bēi bāo fu, bù gǎn fàngkāi shǒujiǎo qù zuòshì."
  },
  {
    "STT": 118,
    "SẮP XẾP CÂU": "向前看。 / 不要 / 已经过去， / 过去的 / 再 / 错误 / 背包袱了，",
    "ĐÁP ÁN": "过去的错误已经过去，不要再背包袱了，向前看。",
    "PHIÊN ÂM": "Guòqù de cuòwù yǐjīng guòqù, bù yào zài bēi bāo fu le, xiàng qián kàn."
  },
  {
    "STT": 119,
    "CHỮ": "B",
    "CỤM": "背黑锅",
    "PINYIN": "bēi hēi ɡuō",
    "NGHĨA": "比喻代别人承担过错、罪名，泛指受到冤枉。",
    "SẮP XẾP CÂU": "替别人承担责任。/ 他总是 / 背黑锅，",
    "ĐÁP ÁN": "他总是背黑锅，替别人承担责任。",
    "PHIÊN ÂM": "Tā zǒngshì bēi hēi guō, tì biérén chéngdān zérèn."
  },
  {
    "STT": 120,
    "SẮP XẾP CÂU": "处分。 / 替 / 朋友 / 背黑锅， / 自己 / 结果 / 受了 / 他",
    "ĐÁP ÁN": "他替朋友背黑锅，结果自己受了处分。",
    "PHIÊN ÂM": "Tā tì péngyou bēi hēi guō, jiéguǒ zìjǐ shòu le chǔfèn."
  },
  {
    "STT": 121,
    "CHỮ": "B",
    "CỤM": "笨鸟先飞",
    "PINYIN": "bèn niǎo xiān fēi",
    "NGHĨA": "比喻笨的人应该先行动。常用来比喻自己。",
    "SẮP XẾP CÂU": "比别人 / 更努力学习。/ 他学习能力差， / 所以 / 笨鸟先飞，",
    "ĐÁP ÁN": "他学习能力差，所以笨鸟先飞，比别人更努力学习。",
    "PHIÊN ÂM": "Tā xuéxí nénglì chà, suǒyǐ bèn niǎo xiān fēi, bǐ biérén gèng nǔlì xuéxí."
  },
  {
    "STT": 122,
    "SẮP XẾP CÂU": "勤能补拙。 / 笨鸟先飞， / 资质一般， / 但他 / 懂得 / 虽然",
    "ĐÁP ÁN": "虽然资质一般，但他懂得笨鸟先飞，勤能补拙。",
    "PHIÊN ÂM": "Suīrán zīzhì yìbān, dàn tā dǒngde bèn niǎo xiān fēi, qín néng bǔ zhuō."
  },
  {
    "STT": 123,
    "CHỮ": "B",
    "CỤM": "不成器",
    "PINYIN": "bù chénɡ qì",
    "NGHĨA": "不能成为有用的器物。后用以比喻不成才，没出息，没有发展前途或志气。也说“不成才”。",
    "SẮP XẾP CÂU": "长大后 / 果然 / 不成器。/ 他从小就 /不爱学习，",
    "ĐÁP ÁN": "他从小就不爱学习，长大后果然不成器。",
    "PHIÊN ÂM": "Tā cóngxiǎo jiù bù ài xuéxí, zhǎngdà hòu guǒrán bù chéng qì."
  },
  {
    "STT": 124,
    "SẮP XẾP CÂU": "不学无术， / 长大后 / 这孩子 / 真是 / 从小 / 就不 / 不成器。",
    "ĐÁP ÁN": "这孩子从小就不学无术，长大后真是不成器。",
    "PHIÊN ÂM": "Zhè háizi cóngxiǎo jiù bù xuéwúshù, zhǎngdà hòu zhēnshi bù chéng qì."
  },
  {
    "STT": 125,
    "CHỮ": "B",
    "CỤM": "不吃那一套",
    "PINYIN": "bù chī nà yī tào",
    "NGHĨA": "那种方法不管用。",
    "SẮP XẾP CÂU": "你跟他讲道理 / 没用。/ 他这个人 / 不吃那一套，",
    "ĐÁP ÁN": "他这个人不吃那一套，你跟他讲道理没用。",
    "PHIÊN ÂM": "Tā zhège rén bù chī nà yī tào, nǐ gēn tā jiǎng dàolǐ méi yòng."
  },
  {
    "STT": 126,
    "SẮP XẾP CÂU": "奉承拍马屁 / 经理 / 不吃那一套。 / 行为 / 对这种 / 的",
    "ĐÁP ÁN": "经理对这种奉承拍马屁的行为不吃那一套。",
    "PHIÊN ÂM": "Jīnglǐ duì zhè zhǒng fèngcheng pāimǎpì de xíngwéi bù chī nà yī tào."
  },
  {
    "STT": 127,
    "CHỮ": "B",
    "CỤM": "不到家",
    "PINYIN": "bú dào jiā",
    "NGHĨA": "比喻技艺没有达到尽善尽美的程度。",
    "SẮP XẾP CÂU": "还需要 / 继续学习。/ 他的技术 / 不到家，",
    "ĐÁP ÁN": "他的技术不到家，还需要继续学习。",
    "PHIÊN ÂM": "Tā de jìshù bú dào jiā, hái xūyào jìxù xuéxí."
  },
  {
    "STT": 128,
    "SẮP XẾP CÂU": "厨艺 / 多加 / 他的 / 练习。 / 还有点 / 不到家， / 需要",
    "ĐÁP ÁN": "他的厨艺还有点不到家，需要多加练习。",
    "PHIÊN ÂM": "Tā de chúyì hái yǒudiǎn bú dào jiā, xūyào duō jiā liànxí."
  },
  {
    "STT": 129,
    "CHỮ": "B",
    "CỤM": "不动窝",
    "PINYIN": "bú dònɡ wō",
    "NGHĨA": "比喻不离开原来的地方。窝: 鸟兽、昆虫住的地方，借指人体或物体所占的地方。",
    "SẮP XẾP CÂU": "一辈子都 / 住在这个地方。/ 他这个人 / 不动窝，",
    "ĐÁP ÁN": "他这个人不动窝，一辈子都住在这个地方。",
    "PHIÊN ÂM": "Tā zhège rén bú dòng wō, yī bèizi dōu zhù zài zhège dìfang."
  },
  {
    "STT": 130,
    "SẮP XẾP CÂU": "都在 / 他 / 基本 / 不动窝， / 家里。 / 这个人 / 很宅， / 周末",
    "ĐÁP ÁN": "他这个人很宅，周末基本不动窝，都在家里。",
    "PHIÊN ÂM": "Tā zhège rén hěn zhái, zhōumò jīběn bú dòng wō, dōu zài jiālǐ."
  },
  {
    "STT": 131,
    "CHỮ": "B",
    "CỤM": "不对头",
    "PINYIN": "bú duì tóu",
    "NGHĨA": "不正常，不正确，不合理。",
    "SẮP XẾP CÂU": "好像有什么心事。/ 今天他的状态 / 不对头，",
    "ĐÁP ÁN": "今天他的状态不对头，好像有什么心事。",
    "PHIÊN ÂM": "Jīntiān tā de zhuàngtài bú duì tóu, hǎoxiàng yǒu shénme xīnshì."
  },
  {
    "STT": 132,
    "SẮP XẾP CÂU": "大家 / 不对头， / 沉默。 / 今天的 / 气氛 / 有点 / 都很",
    "ĐÁP ÁN": "今天的气氛有点不对头，大家都很沉默。",
    "PHIÊN ÂM": "Jīntiān de qìfēn yǒudiǎn bú duì tóu, dàjiā dōu hěn chénmò."
  },
  {
    "STT": 133,
    "CHỮ": "B",
    "CỤM": "不感冒",
    "PINYIN": "bù ɡǎn mào",
    "NGHĨA": "谑指对某人某事不感兴趣。",
    "SẮP XẾP CÂU": "一点兴趣都没有。/ 他对这个话题 / 不感冒，",
    "ĐÁP ÁN": "他对这个话题不感冒，一点兴趣都没有。",
    "PHIÊN ÂM": "Tā duì zhège huàtí bù gǎn mào, yī diǎn xìngqù dōu méiyǒu."
  },
  {
    "STT": 134,
    "SẮP XẾP CÂU": "虚伪的 / 一点也 / 不感冒。 / 对那种 / 客套话 / 不 / 我",
    "ĐÁP ÁN": "我对那种虚伪的客套话一点也不感冒。",
    "PHIÊN ÂM": "Wǒ duì nà zhǒng xūwěi de kètàohuà yī diǎn yě bù gǎn mào."
  },
  {
    "STT": 135,
    "CHỮ": "B",
    "CỤM": "不管三七二十一",
    "PINYIN": "bù ɡuǎn sān qī èr shí yī",
    "NGHĨA": "比喻不顾一切，不问是非情由。",
    "SẮP XẾP CÂU": "冲了/ 上去。/ 他 / 不管三七二十一，",
    "ĐÁP ÁN": "他不管三七二十一，冲了上去。",
    "PHIÊN ÂM": "Tā bù guǎn sān qī èr shí yī, chōng le shàngqù."
  },
  {
    "STT": 136,
    "SẮP XẾP CÂU": "乱作 / 不管三七二十一， / 他一遇到 / 决定。 / 喜欢 / 麻烦就",
    "ĐÁP ÁN": "他一遇到麻烦就喜欢不管三七二十一，乱作决定。",
    "PHIÊN ÂM": "Tā yī yùdào máfan jiù xǐhuan bù guǎn sān qī èr shí yī, luàn zuò juédìng."
  },
  {
    "STT": 137,
    "CHỮ": "B",
    "CỤM": "不见得",
    "PINYIN": "bú jiàn dé",
    "NGHĨA": "不一定。",
    "SẮP XẾP CÂU": "会成功。/ 这件事 / 不见得",
    "ĐÁP ÁN": "这件事不见得会成功。",
    "PHIÊN ÂM": "Zhè jiàn shì bú jiàn dé huì chénggōng."
  },
  {
    "STT": 138,
    "SẮP XẾP CÂU": "他还有 / 你说 / 不见得， / 不足。 / 很多 / 会成功， / 我看那",
    "ĐÁP ÁN": "你说他会成功，我看那不见得，他还有很多不足。",
    "PHIÊN ÂM": "Nǐ shuō tā huì chénggōng, wǒ kàn nà bú jiàn dé, tā hái yǒu hěn duō bùzú."
  },
  {
    "STT": 139,
    "CHỮ": "B",
    "CỤM": "不景气",
    "PINYIN": "bù jǐnɡ qì",
    "NGHĨA": "指经济不繁荣的景象，泛指事业不兴旺。",
    "SẮP XẾP CÂU": "生意不好做。/ 最近经济 / 不景气，",
    "ĐÁP ÁN": "最近经济不景气，生意不好做。",
    "PHIÊN ÂM": "Zuìjìn jīngjì bù jǐng qì, shēngyi bù hǎo zuò."
  },
  {
    "STT": 140,
    "SẮP XẾP CÂU": "公司/裁员了/最近/不景气/经济/都/很多",
    "ĐÁP ÁN": "最近经济不景气，很多公司都裁员了。",
    "PHIÊN ÂM": "Zuìjìn jīngjì bù jǐng qì, hěn duō gōngsī dōu cáiyuán le."
  },
  {
    "STT": 141,
    "CHỮ": "B",
    "CỤM": "不买账",
    "PINYIN": "bù mǎi zhànɡ",
    "NGHĨA": "比喻不承认对方的长处或力量，不佩服或不服从。",
    "SẮP XẾP CÂU": "别人都 / 不买账。/ 他说了半天，",
    "ĐÁP ÁN": "他说了半天，别人都不买账。",
    "PHIÊN ÂM": "Tā shuō le bàntiān, biérén dōu bù mǎi zhàng."
  },
  {
    "STT": 142,
    "SẮP XẾP CÂU": "员工们/方案/这个/还是/领导/不买账/一再/解释/尽管/但/对",
    "ĐÁP ÁN": "尽管领导一再解释，但员工们对这个方案还是不买账。",
    "PHIÊN ÂM": "Jǐnguǎn lǐngdǎo yīzài jiěshì, dàn yuángōngmen duì zhège fāng'àn háishì bù mǎi zhàng."
  },
  {
    "STT": 143,
    "CHỮ": "B",
    "CỤM": "不起眼",
    "PINYIN": "bù qǐ yǎn",
    "NGHĨA": "不值得重视; 不引人注目。又作“不显眼”。",
    "SẮP XẾP CÂU": "很容易 / 被人忽略。/ 他这个人 / 不起眼，",
    "ĐÁP ÁN": "他这个人不起眼，很容易被人忽略。",
    "PHIÊN ÂM": "Tā zhège rén bù qǐ yǎn, hěn róngyì bèi rén hūlüè."
  },
  {
    "STT": 144,
    "SẮP XẾP CÂU": "非常/东西/这/家/却/小店/里面/不起眼/虽然/美味/的",
    "ĐÁP ÁN": "这家小店虽然不起眼，但里面的东西却非常美味。",
    "PHIÊN ÂM": "Zhè jiā xiǎodiàn suīrán bù qǐ yǎn, dàn lǐmiàn de dōngxi què fēicháng měiwèi."
  },
  {
    "STT": 145,
    "CHỮ": "B",
    "CỤM": "不清不白",
    "PINYIN": "bù qīnɡ bù bái",
    "NGHĨA": "比喻关系暧昧，不正当。或者比喻不纯洁，有污点。",
    "SẮP XẾP CÂU": "需要 / 进一步调查。/ 这件事 / 不清不白，",
    "ĐÁP ÁN": "这件事不清不白，需要进一步调查。",
    "PHIÊN ÂM": "Zhè jiàn shì bù qīng bù bái, xūyào jìnyībù diàochá."
  },
  {
    "STT": 146,
    "SẮP XẾP CÂU": "来历/他/的/不清不白 /敢/大家/不/都/和/深交",
    "ĐÁP ÁN": "他的来历不清不白，大家都不敢和他深交。",
    "PHIÊN ÂM": "Tā de láilì bù qīng bù bái, dàjiā dōu bù gǎn hé tā shēnjiāo."
  },
  {
    "STT": 147,
    "CHỮ": "B",
    "CỤM": "不认账",
    "PINYIN": "bú rèn zhànɡ",
    "NGHĨA": "不承认多欠的账，比喻不承认所说过的话或做过的事。",
    "SẮP XẾP CÂU": "却 / 不认账。/ 他做了错事，",
    "ĐÁP ÁN": "他做了错事，却不认账。",
    "PHIÊN ÂM": "Tā zuò le cuòshì, què bú rèn zhàng."
  },
  {
    "STT": 148,
    "SẮP XẾP CÂU": "钱/我/的/他/明明/现在/借/却/了/不认账",
    "ĐÁP ÁN": "他明明借了我的钱，现在却不认账。",
    "PHIÊN ÂM": "Tā míngmíng jiè le wǒ de qián, xiànzài què bú rèn zhàng."
  },
  {
    "STT": 149,
    "CHỮ": "B",
    "CỤM": "不是个儿",
    "PINYIN": "bú shì gèr",
    "NGHĨA": "不是对手。",
    "SẮP XẾP CÂU": "需要 / 重新修改。/ 这个方案 / 不是个儿，",
    "ĐÁP ÁN": "这个方案不是个儿，需要重新修改。",
    "PHIÊN ÂM": "Zhège fāng'àn bú shì gèr, xūyào chóngxīn xiūgǎi."
  },
  {
    "STT": 150,
    "SẮP XẾP CÂU": "实力/他/ 不是个儿/我/根本 / 的 /太/强/了",
    "ĐÁP ÁN": "他的实力太强了，我根本不是个儿。",
    "PHIÊN ÂM": "Tā de shílì tài qiáng le, wǒ gēnběn bú shì gèr."
  },
  {
    "STT": 151,
    "CHỮ": "B",
    "CỤM": "不是个事儿",
    "PINYIN": "bú shì ɡe shìr",
    "NGHĨA": "指不正常。",
    "SẮP XẾP CÂU": "必须 / 认真对待。/ 这件事 / 不是个事儿，",
    "ĐÁP ÁN": "这件事不是个事儿，必须认真对待。",
    "PHIÊN ÂM": "Zhè jiàn shì bú shì ge shìr, bìxū rènzhēn dàidài."
  },
  {
    "STT": 152,
    "SẮP XẾP CÂU": "你/心上/这么/不用/点/根本/ 不是个事儿 /放/小事儿/在",
    "ĐÁP ÁN": "这么点小事儿，根本不是个事儿，你不用放在心上。",
    "PHIÊN ÂM": "Zhème diǎn xiǎoshìr, gēnběn bú shì ge shìr, nǐ bùyòng fàng zài xīn shàng."
  },
  {
    "STT": 153,
    "CHỮ": "B",
    "CỤM": "不是玩儿的",
    "PINYIN": "bú shì wǎnr de",
    "NGHĨA": "不是儿戏; 不能轻视。",
    "SẮP XẾP CÂU": "后果很严重。/ 这件事 / 不是玩儿的，",
    "ĐÁP ÁN": "这件事不是玩儿的，后果很严重。",
    "PHIÊN ÂM": "Zhè jiàn shì bú shì wánr de, hòuguǒ hěn yánzhòng."
  },
  {
    "STT": 154,
    "SẮP XẾP CÂU": "对待/ 不是玩儿的 /认/技术/高/得 /含量/这/项/真/工作/很",
    "ĐÁP ÁN": "这项工作技术含量很高，不是玩儿的，得认真对待。",
    "PHIÊN ÂM": "Zhè xiàng gōngzuò jìshù hánliàng hěn gāo, bú shì wánr de, děi rènzhēn dàidài."
  },
  {
    "STT": 155,
    "CHỮ": "B",
    "CỤM": "不是滋味",
    "PINYIN": "bú shì zī wèi",
    "NGHĨA": "心里感到不好受。",
    "SẮP XẾP CÂU": "很苦闷。/ 他心里 / 不是滋味，",
    "ĐÁP ÁN": "他心里不是滋味，很苦闷。",
    "PHIÊN ÂM": "Tā xīnlǐ bú shì zī wèi, hěn kǔmèn."
  },
  {
    "STT": 156,
    "SẮP XẾP CÂU": "不是滋味 /消息/心里/很/这个/我/到/听",
    "ĐÁP ÁN": "听到这个消息，我心里很不是滋味。",
    "PHIÊN ÂM": "Tīngdào zhège xiāoxi, wǒ xīnlǐ hěn bú shì zī wèi."
  },
  {
    "STT": 157,
    "CHỮ": "B",
    "CỤM": "不顺眼",
    "PINYIN": "bú shùn yǎn",
    "NGHĨA": "看不惯，看着不舒服。",
    "SẮP XẾP CÂU": "他这个人/ 很不顺眼。/ 我 ",
    "ĐÁP ÁN": "我对他这个人很不顺眼。",
    "PHIÊN ÂM": "Wǒ duì tā zhège rén hěn bú shùn yǎn."
  },
  {
    "STT": 158,
    "SẮP XẾP CÂU": "人/他/总是/ 很 / 不顺眼 /这个/喜欢/让人/看着/挑毛病",
    "ĐÁP ÁN": "他这个人总是喜欢挑毛病，让人看着很不顺眼。",
    "PHIÊN ÂM": "Tā zhège rén zǒngshì xǐhuan tiāo máobìng, ràng rén kànzhe hěn bú shùn yǎn."
  },
  {
    "STT": 159,
    "CHỮ": "B",
    "CỤM": "不忘本",
    "PINYIN": "bú wànɡ běn",
    "NGHĨA": "境遇变好后不忘掉自己原来的情况和所以得到幸福的根源。",
    "SẮP XẾP CÂU": "但始终 / 不忘本。/ 他虽然发达了，",
    "ĐÁP ÁN": "他虽然发达了，但始终不忘本。",
    "PHIÊN ÂM": "Tā suīrán fādá le, dàn shǐzhōng bú wàng běn."
  },
  {
    "STT": 160,
    "SẮP XẾP CÂU": "都/我们/不忘本/应该/无论/哪里/走到",
    "ĐÁP ÁN": "无论走到哪里，我们都应该不忘本。",
    "PHIÊN ÂM": "Wúlùn zǒu dào nǎlǐ, wǒmen dōu yīnggāi bú wàng běn."
  },
  {
    "STT": 161,
    "CHỮ": "B",
    "CỤM": "不问青红皂白",
    "PINYIN": "bù wèn qīng hónɡ zào bái",
    "NGHĨA": "比喻不分辨事情的是非、情由。",
    "SẮP XẾP CÂU": "让人很生气。/ 他总是 /不问青红皂白地/ 批评别人，",
    "ĐÁP ÁN": "他总是不问青红皂白地批评别人，让人很生气。",
    "PHIÊN ÂM": "Tā zǒngshì bù wèn qīng hóng zào bái de pīpíng biérén, ràng rén hěn shēngqì."
  },
  {
    "STT": 162,
    "SẮP XẾP CÂU": "不问青红皂白 /麻烦/他/这个人/惹出/办事/不少/总是/喜欢/结果/了",
    "ĐÁP ÁN": "他这个人办事总是喜欢不问青红皂白，结果惹出了不少麻烦。",
    "PHIÊN ÂM": "Tā zhège rén bànshì zǒngshì xǐhuan bù wèn qīng hóng zào bái, jiéguǒ rě chū le bù shǎo máfan."
  },
  {
    "STT": 163,
    "CHỮ": "B",
    "CỤM": "不像话",
    "PINYIN": "bú xiànɡ huà",
    "NGHĨA": "比喻言语、行动不合情理。也说“不成话”。",
    "SẮP XẾP CÂU": "太不像话了！/ 的行为真是 / 不像话，/ 他",
    "ĐÁP ÁN": "他的行为真是不像话，太不像话了！",
    "PHIÊN ÂM": "Tā de xíngwéi zhēnshi bú xiàng huà, tài bú xiànghuà le!"
  },
  {
    "STT": 164,
    "SẮP XẾP CÂU": "太/你/了/做/这样/不像话/真/是",
    "ĐÁP ÁN": "你这样做真是太不像话了！",
    "PHIÊN ÂM": "Nǐ zhèyàng zuò zhēnshi tài bú xiàng huà le!"
  },
  {
    "STT": 165,
    "CHỮ": "C",
    "CỤM": "差不离儿",
    "PINYIN": "chà bù lír",
    "NGHĨA": "差不多。",
    "SẮP XẾP CÂU": "够用了。/ 这个 / 数量 / 差不离儿，",
    "ĐÁP ÁN": "这个数量差不离儿，够用了。",
    "PHIÊN ÂM": "Zhège shùliàng chà bù lír, gòu yòng le."
  },
  {
    "STT": 166,
    "SẮP XẾP CÂU": "难/差不离儿，/分辨。/两/这/件/衣/服/的/和/颜色/款式/很",
    "ĐÁP ÁN": "这两件衣服的款式和颜色差不离儿，很难分辨。",
    "PHIÊN ÂM": "Zhè liǎng jiàn yīfu de kuǎnshì hé yánsè chà bù lír, hěn nán fēnbiàn."
  },
  {
    "STT": 167,
    "CHỮ": "C",
    "CỤM": "拆穿西洋镜",
    "PINYIN": "chāi chuān xī yánɡ jìnɡ",
    "NGHĨA": "西洋镜，亦作“西洋景”。民间一种供娱乐用的装置﹐匣子里装100着画片﹐匣子上有放大镜﹐可以放大画面。因最初画片多西洋画﹐故名。\r\n 比喻故弄玄虚借以骗人的行为或手法。拆穿西洋镜就是将用来骗人的事实真相揭露出来。",
    "SẮP XẾP CÂU": "他 /拆穿了西洋镜。/ 很快 / 就被",
    "ĐÁP ÁN": "他很快就被拆穿了西洋镜。",
    "PHIÊN ÂM": "Tā hěn kuài jiù bèi chāi chuān le xī yáng jìng."
  },
  {
    "STT": 168,
    "SẮP XẾP CÂU": "很快/了。/就/谎言/他/的/被/拆穿西洋镜",
    "ĐÁP ÁN": "他的谎言很快就被拆穿西洋镜了。",
    "PHIÊN ÂM": "Tā de huǎngyán hěn kuài jiù bèi chāi chuān xī yáng jìng le."
  },
  {
    "STT": 169,
    "CHỮ": "C",
    "CỤM": "拆台",
    "PINYIN": "chāi tái",
    "NGHĨA": "有意破坏使人倒台或办不成事。",
    "SẮP XẾP CÂU": "让我的计划失败了。/ 他故意 / 拆台，",
    "ĐÁP ÁN": "他故意拆台，让我的计划失败了。",
    "PHIÊN ÂM": "Tā gùyì chāi tái, ràng wǒ de jìhuà shībài le."
  },
  {
    "STT": 170,
    "SẮP XẾP CÂU": "团结/拆台，/互/相/要/不/要/你们/合作。",
    "ĐÁP ÁN": "你们不要互相拆台，要团结合作。",
    "PHIÊN ÂM": "Nǐmen bù yào hùxiāng chāi tái, yào tuánjié hézuò."
  },
  {
    "STT": 171,
    "CHỮ": "C",
    "CỤM": "唱对台戏",
    "PINYIN": "chàng duì tái xì",
    "NGHĨA": "比喻采取与对方相反的行动，或有意搞垮对方。",
    "SẮP XẾP CÂU": "竞争激烈。/ 这两家公司正在 / 唱对台戏，",
    "ĐÁP ÁN": "这两家公司正在唱对台戏，竞争\r\n激烈。",
    "PHIÊN ÂM": "Zhè liǎng jiā gōngsī zhèngzài chàng duì tái xì, jìngzhēng jīliè."
  },
  {
    "STT": 172,
    "SẮP XẾP CÂU": "唱对台戏，/竞争/两家公司/喜欢/他们/非常/激烈。/总是",
    "ĐÁP ÁN": "他们两家公司总是喜欢唱对台戏，竞争非常激烈。",
    "PHIÊN ÂM": "Tāmen liǎng jiā gōngsī zǒngshì xǐhuan chàng duì tái xì, jìngzhēng fēicháng jīliè."
  },
  {
    "STT": 173,
    "CHỮ": "C",
    "CỤM": "长舌妇",
    "PINYIN": "cháng shé fù",
    "NGHĨA": "爱扯闲话、搬弄是非的女人。",
    "SẮP XẾP CÂU": "整天 / 说长道短。/ 她是个 / 长舌妇，",
    "ĐÁP ÁN": "她是个长舌妇，整天说长道短。",
    "PHIÊN ÂM": "Tā shì ge cháng shé fù, zhěngtiān shuōchángdàoduǎn."
  },
  {
    "STT": 174,
    "SẮP XẾP CÂU": "说/她/个/是/三 道四。/ 长舌妇， /总是/喜欢",
    "ĐÁP ÁN": "她是个长舌妇，总是喜欢说三道四。",
    "PHIÊN ÂM": "Tā shì ge cháng shé fù, zǒngshì xǐhuan shuōsāndàosì."
  },
  {
    "STT": 175,
    "CHỮ": "C",
    "CỤM": "唱白脸",
    "PINYIN": "chànɡ bái liǎn",
    "NGHĨA": "京剧中的反派角色。指扮演反面的角色，对事情采取尖酸苛刻的态度。",
    "SẮP XẾP CÂU": "批评了几个人的错误。/ 这次会议上， / 他不得不 / 唱白脸，",
    "ĐÁP ÁN": "这次会议上，他不得不唱白脸，\r\n批评了几个人的错误。",
    "PHIÊN ÂM": "Zhè cì huìyì shàng, tā bùdébù chàng bái liǎn, pīpíng le jǐ ge rén de cuòwù."
  },
  {
    "STT": 176,
    "SẮP XẾP CÂU": "唱白脸。/由/比较/合适，/来/他/来/红脸/我/唱/这/件/事",
    "ĐÁP ÁN": "这件事由他来唱白脸比较合适，我来唱红脸。",
    "PHIÊN ÂM": "Zhè jiàn shì yóu tā lái chàng bái liǎn bǐjiào héshì, wǒ lái chàng hóngliǎn."
  },
  {
    "STT": 177,
    "CHỮ": "C",
    "CỤM": "唱反调",
    "PINYIN": "chànɡ fǎn diào",
    "NGHĨA": "发表完全对立的言论; 采取对立的举措。",
    "SẮP XẾP CÂU": "让人很讨厌。/ 他总是 / 唱反调，",
    "ĐÁP ÁN": "他总是唱反调，让人很讨厌。",
    "PHIÊN ÂM": "Tā zǒngshì chàng fǎn diào, ràng rén hěn tǎoyàn."
  },
  {
    "STT": 178,
    "SẮP XẾP CÂU": "头疼。/每次/让人/很/他/都/喜欢/唱反调，/开会",
    "ĐÁP ÁN": "每次开会他都喜欢唱反调，让人很头疼。",
    "PHIÊN ÂM": "Měi cì kāihuì tā dōu xǐhuan chàng fǎn diào, ràng rén hěn tóuténg."
  },
  {
    "STT": 179,
    "CHỮ": "C",
    "CỤM": "唱高调",
    "PINYIN": "chànɡ ɡāo diào",
    "NGHĨA": "发表似乎高明但脱离实际的论调，说得很好听而不实际去做。",
    "SẮP XẾP CÂU": "根本做不到。/ 他只会 / 唱高调，",
    "ĐÁP ÁN": "他只会唱高调，根本做不到。",
    "PHIÊN ÂM": "Tā zhǐ huì chàng gāo diào, gēnběn zuòbùdào."
  },
  {
    "STT": 180,
    "SẮP XẾP CÂU": "总是/在会议上/他/喜欢/唱高调，/说一些不切实际的话。",
    "ĐÁP ÁN": "他总是喜欢在会议上唱高调，说一些不切实际的话。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan zài huìyì shàng chàng gāo diào, shuō yīxiē bùqiè shíjì de huà."
  },
  {
    "STT": 181,
    "CHỮ": "C",
    "CỤM": "唱红脸",
    "PINYIN": "chànɡ hónɡ liǎn",
    "NGHĨA": "就是装好人。比喻在批评或争斗中担当劝导、抚慰、缓冲等任务的角色。",
    "SẮP XẾP CÂU": "安抚了大家的情绪。/ 他 / 唱红脸，",
    "ĐÁP ÁN": "他唱红脸，安抚了大家的情绪。",
    "PHIÊN ÂM": "Tā chàng hóng liǎn, ānfǔ le dàjiā de qíngxù."
  },
  {
    "STT": 182,
    "SẮP XẾP CÂU": "他负责 /这次谈判 /我来/唱白脸。/唱红脸，",
    "ĐÁP ÁN": "这次谈判他负责唱红脸，我来唱白脸。",
    "PHIÊN ÂM": "Zhè cì tánpàn tā fùzé chàng hóng liǎn, wǒ lái chàng báiliǎn."
  },
  {
    "STT": 183,
    "CHỮ": "C",
    "CỤM": "唱空城计",
    "PINYIN": "chànɡ kōnɡ chénɡ jì",
    "NGHĨA": "比喻掩饰自己力量空虚、骗过对方的方法; 比喻某单位的人员全部或大部分不在; 形容肚子饿。",
    "SẮP XẾP CÂU": "吓退了敌人。/ 他 / 唱空城计，",
    "ĐÁP ÁN": "他唱空城计，吓退了敌人。",
    "PHIÊN ÂM": "Tā chàng kōng chéng jì, xiàtuì le dírén."
  },
  {
    "STT": 184,
    "SẮP XẾP CÂU": "敌人以为/ 唱空城计。/ 我们兵力不足，/没想到/我们是",
    "ĐÁP ÁN": "敌人以为我们兵力不足，没想到我们是唱空城计。",
    "PHIÊN ÂM": "Dírén yǐwéi wǒmen bīnglì bùzú, méi xiǎngdào wǒmen shì chàng kōng chéng jì."
  },
  {
    "STT": 185,
    "CHỮ": "C",
    "CỤM": "唱老调",
    "PINYIN": "chànɡ lǎo diào",
    "NGHĨA": "谈不新鲜的话题。",
    "SẮP XẾP CÂU": "真是烦人！/ 他又开始 / 唱老调了，",
    "ĐÁP ÁN": "他又开始唱老调了，真是烦人！",
    "PHIÊN ÂM": "Tā yòu kāishǐ chàng lǎo diào le, zhēnshi fánrén!"
  },
  {
    "STT": 186,
    "SẮP XẾP CÂU": "的演讲/ 唱老调，/ 总是/ 他 /没有任何新意。",
    "ĐÁP ÁN": "他的演讲总是唱老调，没有任何新意。",
    "PHIÊN ÂM": "Tā de yǎnjiǎng zǒngshì chàng lǎo diào, méiyǒu rènhé xīnyì."
  },
  {
    "STT": 187,
    "CHỮ": "C",
    "CỤM": "唱双簧",
    "PINYIN": "chànɡ shuānɡ huánɡ",
    "NGHĨA": "双簧，曲艺的一种。由一人在前面表演动作，另一个人藏在后面或说或唱，紧密配合。现在常把两人一唱一和比喻为唱双簧，有讽刺意味。",
    "SẮP XẾP CÂU": "骗取了我的信任。/ 他们两人 / 唱双簧，",
    "ĐÁP ÁN": "他们两人唱双簧，骗取了我的信任。",
    "PHIÊN ÂM": "Tāmen liǎng rén chàng shuāng huáng, piànqǔ le wǒ de xìnrèn."
  },
  {
    "STT": 188,
    "SẮP XẾP CÂU": "一唱一和，/ 简直 / 他们两个人 / 就是/在唱双簧。",
    "ĐÁP ÁN": "他们两个人一唱一和，简直就是在唱双簧。",
    "PHIÊN ÂM": "Tāmen liǎng ge rén yī chàng yī hè, jiǎnzhí jiùshì zài chàng shuāng huáng."
  },
  {
    "STT": 189,
    "CHỮ": "C",
    "CỤM": "尝甜头",
    "PINYIN": "chánɡ tián tou",
    "NGHĨA": "比喻得到好处、利益。",
    "SẮP XẾP CÂU": "更加努力了。/ 他 / 尝到了甜头，",
    "ĐÁP ÁN": "他尝到了甜头，更加努力了。",
    "PHIÊN ÂM": "Tā cháng dào le tián tou, gèngjiā nǔlì le."
  },
  {
    "STT": 190,
    "SẮP XẾP CÂU": "投资/ 第一次 /让他/ 就尝到了甜头，/信心大增。",
    "ĐÁP ÁN": "第一次投资就尝到了甜头，让他信心大增。",
    "PHIÊN ÂM": "Dì yī cì tóuzī jiù cháng dào le tián tou, ràng tā xìnxīn dàzēng."
  },
  {
    "STT": 191,
    "CHỮ": "C",
    "CỤM": "炒冷饭",
    "PINYIN": "chǎo lěnɡ fàn",
    "NGHĨA": "比喻重复已经说过的话或做过的事，没有新的内容。也说“炒剩饭”。",
    "SẮP XẾP CÂU": "没什么新意。/ 他又开始 / 炒冷饭了，",
    "ĐÁP ÁN": "他又开始炒冷饭了，没什么新意。",
    "PHIÊN ÂM": "Tā yòu kāishǐ chǎo lěng fàn le, méi shénme xīnyì."
  },
  {
    "STT": 192,
    "SẮP XẾP CÂU": "总是/ 他的报告/ 炒冷饭，/没有新的观点。",
    "ĐÁP ÁN": "他的报告总是炒冷饭，没有新的观点。",
    "PHIÊN ÂM": "Tā de bàogào zǒngshì chǎo lěng fàn, méiyǒu xīn de guāndiǎn."
  },
  {
    "STT": 193,
    "CHỮ": "C",
    "CỤM": "炒螺蛳",
    "PINYIN": "chǎo luó sī",
    "NGHĨA": "螺蛳: 淡水螺的通称,一般较小。\r\n比喻指故意找茬、吵闹。也作“炒螺丝”。",
    "SẮP XẾP CÂU": "简直是 / 炒螺蛳！/ 这次的活动， / 他搞砸了，",
    "ĐÁP ÁN": "这次的活动，他搞砸了，简直是炒\r\n螺蛳！",
    "PHIÊN ÂM": "Zhè cì de huódòng, tā gǎozá le, jiǎnzhí shì chǎo luó sī!"
  },
  {
    "STT": 194,
    "SẮP XẾP CÂU": "这道菜的做法/ 就是/很简单，/炒螺蛳",
    "ĐÁP ÁN": "这道菜的做法很简单，就是炒螺蛳。",
    "PHIÊN ÂM": "Zhè dào cài de zuòfǎ hěn jiǎndān, jiùshì chǎo luó sī."
  },
  {
    "STT": 195,
    "CHỮ": "C",
    "CỤM": "炒虾等不得红",
    "PINYIN": "chǎo xiā děng bù dé hóng",
    "NGHĨA": "生虾呈透明色,熟虾呈红色。虾很快会熟,却等不得。形容人性子急。",
    "SẮP XẾP CÂU": "赶紧 / 签 / 合同。/ 这笔 / 生意 / 炒虾等不得红，/ 得",
    "ĐÁP ÁN": "这笔生意炒虾等不得红，得赶紧签\r\n合同。",
    "PHIÊN ÂM": "Zhè bǐ shēngyi chǎo xiā děng bù dé hóng, děi gǎnjǐn qiān hétong."
  },
  {
    "STT": 196,
    "SẮP XẾP CÂU": "要讲究时机，/ 做事 /错过了就来不及了。/炒虾等不得红，",
    "ĐÁP ÁN": "做事要讲究时机，炒虾等不得红，错过了就来不及了。",
    "PHIÊN ÂM": "Zuòshì yào jiǎngjiù shíjī, chǎo xiā děng bù dé hóng, cuòguò le jiù lái bu jí le."
  },
  {
    "STT": 197,
    "CHỮ": "C",
    "CỤM": "炒下豆子自己吃，打破砂锅让人赔",
    "PINYIN": "chǎo xià dòu zi zì jǐ chī, dǎ pò shā guō ràng rén péi",
    "NGHĨA": "比喻占了利益、成绩都归自己,出了问题却把责任推给别人。",
    "SẮP XẾP CÂU": "真是 / 无赖！/ 他 / 炒下豆子自己吃，打破砂锅让人赔，",
    "ĐÁP ÁN": "他炒下豆子自己吃，打破砂锅让\r\n人赔，真是无赖！",
    "PHIÊN ÂM": "Tā chǎo xià dòu zi zì jǐ chī, dǎ pò shā guō ràng rén péi, zhēnshi wúlài!"
  },
  {
    "STT": 198,
    "SẮP XẾP CÂU": "自作自受 / 他这个人/ 就像 /总是 /炒下豆子自己吃, 打破砂锅让人赔",
    "ĐÁP ÁN": "他这个人总是自作自受，就像炒下豆子自己吃，打破砂锅让人赔。",
    "PHIÊN ÂM": "Tā zhège rén zǒngshì zìzuò zìshòu, jiù xiàng chǎo xià dòu zi zì jǐ chī, dǎ pò shā guō ràng rén péi."
  },
  {
    "STT": 199,
    "CHỮ": "C",
    "CỤM": "炒鱿鱼",
    "PINYIN": "chǎo yóu yú",
    "NGHĨA": "鱿鱼一炒就会卷起来,转指卷铺盖走人。\r\n比喻被解雇或主动辞职。",
    "SẮP XẾP CÂU": "被/老板 / 炒鱿鱼了。/公司业绩不好，/他",
    "ĐÁP ÁN": "公司业绩不好，他被老板炒鱿鱼了。",
    "PHIÊN ÂM": "Gōngsī yèjī bù hǎo, tā bèi lǎobǎn chǎo yóu yú le."
  },
  {
    "STT": 200,
    "SẮP XẾP CÂU": "工作失误，/他/因为/被经理/ 炒鱿鱼了。",
    "ĐÁP ÁN": "他因为工作失误，被经理炒鱿鱼了。",
    "PHIÊN ÂM": "Tā yīnwèi gōngzuò shīwù, bèi jīnglǐ chǎo yóu yú le."
  },
  {
    "STT": 201,
    "CHỮ": "C",
    "CỤM": "扯簸箕",
    "PINYIN": "chě bò ji",
    "NGHĨA": "比喻到处张扬、散播。",
    "SẮP XẾP CÂU": "赶紧/把事情/解决。 /别再扯簸箕了，",
    "ĐÁP ÁN": "别再扯簸箕了，赶紧把事情解决。",
    "PHIÊN ÂM": "Bié zài chě bò ji le, gǎnjǐn bǎ shìqíng jiějué."
  },
  {
    "STT": 202,
    "SẮP XẾP CÂU": "影响/效率。 /每次开会/他都扯簸箕，",
    "ĐÁP ÁN": "每次开会他都扯簸箕，影响效率。",
    "PHIÊN ÂM": "Měi cì kāihuì tā dōu chě bò ji, yǐngxiǎng xiàolǜ."
  },
  {
    "STT": 203,
    "CHỮ": "C",
    "CỤM": "扯长绊",
    "PINYIN": "chě cháng bàn",
    "NGHĨA": "指无休止地说话或哭闹。",
    "SẮP XẾP CÂU": "有话/直说。 /你们不要扯长绊，",
    "ĐÁP ÁN": "你们不要扯长绊，有话直说。",
    "PHIÊN ÂM": "Nǐmen bù yào chě cháng bàn, yǒu huà zhí shuō."
  },
  {
    "STT": 204,
    "SẮP XẾP CÂU": "这种事情/没必要扯长绊，/直接/拒绝/就好。",
    "ĐÁP ÁN": "这种事情没必要扯长绊，直接拒绝就好。",
    "PHIÊN ÂM": "Zhè zhǒng shìqíng méi bìyào chě cháng bàn, zhíjiē jùjué jiù hǎo."
  },
  {
    "STT": 205,
    "CHỮ": "C",
    "CỤM": "扯大旗",
    "PINYIN": "chě dà qí",
    "NGHĨA": "喻指借某个大名义办事。",
    "SẮP XẾP CÂU": "实际行动/很少。 /他老是喜欢扯大旗，/但",
    "ĐÁP ÁN": "他老是喜欢扯大旗，但实际行动很少。",
    "PHIÊN ÂM": "Tā lǎoshì xǐhuan chě dà qí, dàn shíjì xíngdòng hěn shǎo."
  },
  {
    "STT": 206,
    "SẮP XẾP CÂU": "都是/些/ 他扯大旗，/ 空话。 /别听",
    "ĐÁP ÁN": "别听他扯大旗，都是些空话。",
    "PHIÊN ÂM": "Bié tīng tā chě dà qí, dōu shì xiē kōnghuà."
  },
  {
    "STT": 207,
    "CHỮ": "C",
    "CỤM": "扯淡话",
    "PINYIN": "chě dàn huà",
    "NGHĨA": "指说的一些没用的话。",
    "SẮP XẾP CÂU": "说点/正经的。 / 我扯淡话，/别 /跟",
    "ĐÁP ÁN": "别跟我扯淡话，说点正经的。",
    "PHIÊN ÂM": "Bié gēn wǒ chě dàn huà, shuō diǎn zhèngjīng de."
  },
  {
    "STT": 208,
    "SẮP XẾP CÂU": "活跃/气氛。 /每次聚会/他都喜欢扯淡话，",
    "ĐÁP ÁN": "每次聚会他都喜欢扯淡话，活跃气氛。",
    "PHIÊN ÂM": "Měi cì jùhuì tā dōu xǐhuan chě dàn huà, huóyuè qìfēn."
  },
  {
    "STT": 209,
    "CHỮ": "C",
    "CỤM": "扯东边,顾不得西首",
    "PINYIN": "chě dōng biān，gù bù dé xī shǒu",
    "NGHĨA": "形容手忙脚乱,顾了这头,顾不了那头。",
    "SẮP XẾP CÂU": "分身/乏术。 /他现在/忙得 / 扯东边,顾不得西首，",
    "ĐÁP ÁN": "他现在忙得扯东边,顾不得西首，分身乏术。",
    "PHIÊN ÂM": "Tā xiànzài máng de chě dōng biān, gù bù dé xī shǒu, fēnshēnfáshù."
  },
  {
    "STT": 210,
    "SẮP XẾP CÂU": "搞得/他扯东边,顾不得西首。 /公司业务/太多，",
    "ĐÁP ÁN": "公司业务太多，搞得他扯东边,顾不得西首。",
    "PHIÊN ÂM": "Gōngsī yèwù tài duō, gǎo de tā chě dōng biān, gù bù dé xī shǒu."
  },
  {
    "STT": 211,
    "CHỮ": "C",
    "CỤM": "车动铃铛响",
    "PINYIN": "chē dòng líng dāng xiǎng",
    "NGHĨA": "比喻为首的人一行动,大家就立即跟着行动。 形容行动时声势和影响大。",
    "SẮP XẾP CÂU": "生怕/别人/不知道。 /他一说话/就车动铃铛响，",
    "ĐÁP ÁN": "他一说话就车动铃铛响，生怕别人不知道。",
    "PHIÊN ÂM": "Tā yī shuōhuà jiù chē dòng líng dāng xiǎng, shēngpà biérén bù zhīdào."
  },
  {
    "STT": 212,
    "SẮP XẾP CÂU": "关键时候车动铃铛响。 /别看他/平时/不声不响，",
    "ĐÁP ÁN": "别看他平时不声不响，关键时候车动铃铛响。",
    "PHIÊN ÂM": "Bié kàn tā píngshí bù shēng bù xiǎng, guānjiàn shíhou chē dòng líng dāng xiǎng."
  },
  {
    "STT": 213,
    "CHỮ": "C",
    "CỤM": "扯反线",
    "PINYIN": "chě fǎn xiàn",
    "NGHĨA": "比喻采取与某人相反的态度或做法。",
    "SẮP XẾP CÂU": "有意见/直接/提。 /别在/背后扯反线，",
    "ĐÁP ÁN": "别在背后扯反线，有意见直接提。",
    "PHIÊN ÂM": "Bié zài bèihòu chě fǎn xiàn, yǒu yìjiàn zhíjiē tí."
  },
  {
    "STT": 214,
    "SẮP XẾP CÂU": "挑拨/离间。 /这种人/就喜欢扯反线，",
    "ĐÁP ÁN": "这种人就喜欢扯反线，挑拨离间。",
    "PHIÊN ÂM": "Zhè zhǒng rén jiù xǐhuan chě fǎn xiàn, tiǎobō líjiàn."
  },
  {
    "STT": 215,
    "CHỮ": "C",
    "CỤM": "车干水捉鱼",
    "PINYIN": "chē gān shuǐ zhuō yú",
    "NGHĨA": "用水车把水抽干了再捉鱼。\r\n比喻把对手彻底消灭或把问题彻底解决。",
    "SẮP XẾP CÂU": "简直/是车干水捉鱼。 /他为了/成功/不择手段，",
    "ĐÁP ÁN": "他为了成功不择手段，简直是车干水捉鱼。",
    "PHIÊN ÂM": "Tā wèile chénggōng bù zé shǒuduàn, jiǎnzhí shì chē gān shuǐ zhuō yú."
  },
  {
    "STT": 216,
    "SẮP XẾP CÂU": "对环境/破坏/很大。 /这种做法/无异于 / 车干水捉鱼，",
    "ĐÁP ÁN": "这种做法无异于车干水捉鱼，对环境破坏很大。",
    "PHIÊN ÂM": "Zhè zhǒng zuòfǎ wúyìyú chē gān shuǐ zhuō yú, duì huánjìng pòhuài hěn dà."
  },
  {
    "STT": 217,
    "CHỮ": "C",
    "CỤM": "扯公脚婆脚",
    "PINYIN": "chě gōng jiǎo pó jiǎo",
    "NGHĨA": "比喻拿错了薪柴来偿还旧债。",
    "SẮP XẾP CÂU": "赶紧/把事情/ 你们俩/定下来。 / 别再 / 扯公脚婆脚了，",
    "ĐÁP ÁN": "你们俩别再扯公脚婆脚了，赶紧把事情定下来。",
    "PHIÊN ÂM": "Nǐmen liǎ bié zài chě gōng jiǎo pó jiǎo le, gǎnjǐn bǎ shìqíng dìng xiàlái."
  },
  {
    "STT": 218,
    "SẮP XẾP CÂU": "下属扯公脚婆脚，/影响/决策。 /领导/最/不/喜欢",
    "ĐÁP ÁN": "领导最不喜欢下属扯公脚婆脚，影响决策。",
    "PHIÊN ÂM": "Lǐngdǎo zuì bù xǐhuan xiàshǔ chě gōng jiǎo pó jiǎo, yǐngxiǎng juécè."
  },
  {
    "STT": 219,
    "CHỮ": "C",
    "CỤM": "扯瓜蔓",
    "PINYIN": "chě guā màn",
    "NGHĨA": "比喻几方互相牵扯。",
    "SẮP XẾP CÂU": "说清楚。/赶紧/把事情/别再扯瓜蔓了。/你",
    "ĐÁP ÁN": "你别再扯瓜蔓了，赶紧把事情说清楚。",
    "PHIÊN ÂM": "Nǐ bié zài chě guā màn le, gǎnjǐn bǎ shìqíng shuō qīngchu."
  },
  {
    "STT": 220,
    "SẮP XẾP CÂU": "绕来绕去。/他这个人/就是/喜欢扯瓜蔓",
    "ĐÁP ÁN": "他这个人就是喜欢扯瓜蔓，绕来绕去。",
    "PHIÊN ÂM": "Tā zhège rén jiùshì xǐhuan chě guā màn, rào lái rào qù."
  },
  {
    "STT": 221,
    "CHỮ": "C",
    "CỤM": "扯后腿",
    "PINYIN": "chě hòu tuǐ",
    "NGHĨA": "见“拉后腿”。",
    "SẮP XẾP CÂU": "你/别扯后腿。/大家/都/在/努力",
    "ĐÁP ÁN": "大家都在努力，你别扯后腿。",
    "PHIÊN ÂM": "Dàjiā dōu zài nǔlì, nǐ bié chě hòu tuǐ."
  },
  {
    "STT": 222,
    "SẮP XẾP CÂU": "很难/成功。/他/的/计划/总/被/别人扯后腿",
    "ĐÁP ÁN": "他的计划总被别人扯后腿，很难成功。",
    "PHIÊN ÂM": "Tā de jìhuà zǒng bèi biérén chě hòu tuǐ, hěn nán chénggōng."
  },
  {
    "STT": 223,
    "CHỮ": "C",
    "CỤM": "扯葫芦倒秧",
    "PINYIN": "chě hú lú dào yāng",
    "NGHĨA": "秧:某些植物的茎。 把葫芦拽下来,再把茎拔掉。形容说话东拉西扯,没完没了。",
    "SẮP XẾP CÂU": "你/别扯葫芦倒秧。/本来/很/简单，/这/件/事",
    "ĐÁP ÁN": "这件事本来很简单，你别扯葫芦倒秧。",
    "PHIÊN ÂM": "Zhè jiàn shì běnlái hěn jiǎndān, nǐ bié chě hú lú dào yāng."
  },
  {
    "STT": 224,
    "SẮP XẾP CÂU": "把/事情/ 他搞 /复杂。/ 总是/喜欢扯葫芦倒秧",
    "ĐÁP ÁN": "他总是喜欢扯葫芦倒秧，把事情搞复杂。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chě hú lú dào yāng, bǎ shìqíng gǎo fùzá."
  },
  {
    "STT": 225,
    "CHỮ": "C",
    "CỤM": "扯话把子",
    "PINYIN": "chě huà bà zi",
    "NGHĨA": "指漫无边际地闲扯。",
    "SẮP XẾP CÂU": "没完没了。/他/ 一 /酒/就/ 喝点 /喜欢扯话把子",
    "ĐÁP ÁN": "他一喝点酒就喜欢扯话把子，没完没了。",
    "PHIÊN ÂM": "Tā yī hē diǎn jiǔ jiù xǐhuan chě huà bà zi, méi wán méi liǎo."
  },
  {
    "STT": 226,
    "SẮP XẾP CÂU": "他/根本/ 他扯话把子/ 了 / 听不进去。/ 别跟 ",
    "ĐÁP ÁN": "别跟他扯话把子了，他根本听不进去。",
    "PHIÊN ÂM": "Bié gēn tā chě huà bà zi le, tā gēnběn tīng bu jìnqù."
  },
  {
    "STT": 227,
    "CHỮ": "C",
    "CỤM": "扯了龙袍也是死，打了太子也是死",
    "PINYIN": "chě le lóng páo yě shì sǐ, dǎ le tài zǐ yě shì sǐ",
    "NGHĨA": "龙袍:皇帝穿的衣服。太子:皇帝的儿子中已确定为继承皇位的。\r\n指反正不会有什么好结果,干脆就无所顾忌,什么都不怕了。\r\n也作“撕了龙袍也是死,打死太子也是死”。",
    "SẮP XẾP CÂU": "这次/ 很大，/简直/ 任务 / 是扯了龙袍也是死，打了太子也是死/风险",
    "ĐÁP ÁN": "这次任务风险很大，简直是扯了龙袍也是死，打了太子也是死。",
    "PHIÊN ÂM": "Zhè cì rènwù fēngxiǎn hěn dà, jiǎnzhí shì chě le lóng páo yě shì sǐ, dǎ le tài zǐ yě shì sǐ."
  },
  {
    "STT": 228,
    "SẮP XẾP CÂU": "已经 / 反正扯了龙袍也是死，打了太子也是死。/他 /豁/出去了",
    "ĐÁP ÁN": "他已经豁出去了，反正扯了龙袍也是死，打了太子也是死。",
    "PHIÊN ÂM": "Tā yǐjīng huō chūqù le, fǎnzhèng chě le lóng páo yě shì sǐ, dǎ le tài zǐ yě shì sǐ."
  },
  {
    "STT": 229,
    "CHỮ": "C",
    "CỤM": "扯破天",
    "PINYIN": "chě pò tiān",
    "NGHĨA": "讽刺人吹牛、说大话过了头。",
    "SẮP XẾP CÂU": "闹/得/扯破天/了，/赶紧/想/办法/解决。/这件事/已经",
    "ĐÁP ÁN": "这件事已经闹得扯破天了，赶紧想办法解决。",
    "PHIÊN ÂM": "Zhè jiàn shì yǐjīng nào de chě pò tiān le, gǎnjǐn xiǎng bànfǎ jiějué."
  },
  {
    "STT": 230,
    "SẮP XẾP CÂU": "再也/ 谎言 / 无法/隐瞒。/他的 /被扯破天",
    "ĐÁP ÁN": "他的谎言被扯破天，再也无法隐瞒。",
    "PHIÊN ÂM": "Tā de huǎngyán bèi chě pò tiān, zài yě wúfǎ yǐnmán."
  },
  {
    "STT": 231,
    "CHỮ": "C",
    "CỤM": "扯舌头",
    "PINYIN": "chě shé tou",
    "NGHĨA": "指胡乱说话闲话,发议论。",
    "SẮP XẾP CÂU": "办好。/你们/别再扯舌头了，/赶紧/把/正事",
    "ĐÁP ÁN": "你们别再扯舌头了，赶紧把正事办好。",
    "PHIÊN ÂM": "Nǐmen bié zài chě shé tou le, gǎnjǐn bǎ zhèngshì bàn hǎo."
  },
  {
    "STT": 232,
    "SẮP XẾP CÂU": "搬弄是非。/他/总是/喜欢/在/背后扯舌头",
    "ĐÁP ÁN": "他总是喜欢在背后扯舌头，搬弄是非。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan zài bèihòu chě shé tou, bānnòng shìfēi."
  },
  {
    "STT": 233,
    "CHỮ": "C",
    "CỤM": "扯顺风旗",
    "PINYIN": "chě shùn fēng qí",
    "NGHĨA": "见“打顺风旗”。",
    "SẮP XẾP CÂU": "随风倒。/他这个人/ 喜欢扯顺风旗 /就是 ",
    "ĐÁP ÁN": "他这个人就是喜欢扯顺风旗，随风倒。",
    "PHIÊN ÂM": "Tā zhège rén jiùshì xǐhuan chě shùn fēng qí, suífēngdǎo."
  },
  {
    "STT": 234,
    "SẮP XẾP CÂU": "一到/关键/时刻/ 大义凛然 /就扯顺风旗。/别看他/平时",
    "ĐÁP ÁN": "别看他平时大义凛然，一到关键时刻就扯顺风旗。",
    "PHIÊN ÂM": "Bié kàn tā píngshí dàyì lǐnrán, yī dào guānjiàn shíhou jiù chě shùn fēng qí."
  },
  {
    "STT": 235,
    "CHỮ": "C",
    "CỤM": "扯下水",
    "PINYIN": "chě xià shuǐ",
    "NGHĨA": "见“拉下水”。",
    "SẮP XẾP CÂU": "可不 / 我 /参与。/别想扯下水 / 这事",
    "ĐÁP ÁN": "别想扯我下水，这事我可不参与。",
    "PHIÊN ÂM": "Bié xiǎng chě wǒ xià shuǐ, zhè shì wǒ kě bù cānyù."
  },
  {
    "STT": 236,
    "SẮP XẾP CÂU": "他/ 自保，/不惜/ 为了 / 把/朋友扯下水",
    "ĐÁP ÁN": "他为了自保，不惜把朋友扯下水。",
    "PHIÊN ÂM": "Tā wèile zìbǎo, bù xī bǎ péngyou chě xià shuǐ."
  },
  {
    "STT": 237,
    "CHỮ": "C",
    "CỤM": "扯闲篇",
    "PINYIN": "chě xián piān",
    "NGHĨA": "指没事瞎聊,说闲话。也作“扯闲条”。",
    "SẮP XẾP CÂU": "没事/ 多做点/有意义/的/事。/ 别 /老扯闲篇",
    "ĐÁP ÁN": "没事别老扯闲篇，多做点有意义的事。",
    "PHIÊN ÂM": "Méishì bié lǎo chě xián piān, duō zuò diǎn yǒu yìyì de shì."
  },
  {
    "STT": 238,
    "SẮP XẾP CÂU": "让人/ 觉得 / 很 / 他都 /无聊。/每次 /聊天 / 喜欢扯闲篇",
    "ĐÁP ÁN": "每次聊天他都喜欢扯闲篇，让人觉得很无聊。",
    "PHIÊN ÂM": "Měi cì liáotiān tā dōu xǐhuan chě xián piān, ràng rén juéde hěn wúliáo."
  },
  {
    "STT": 239,
    "CHỮ": "C",
    "CỤM": "扯羊角疯",
    "PINYIN": "chě yáng jiǎo fēng",
    "NGHĨA": "羊角疯:癫痫病的俗称。斥责人胡闹。",
    "SẮP XẾP CÂU": "就扯羊角疯。/谁也/他/激动起来/拦不住。",
    "ĐÁP ÁN": "他激动起来就扯羊角疯，谁也拦不住。",
    "PHIÊN ÂM": "Tā jīdòng qǐlái jiù chě yáng jiǎo fēng, shuí yě lán bu zhù."
  },
  {
    "STT": 240,
    "SẮP XẾP CÂU": "争了/ 他/又要扯羊角疯了。/别 /跟",
    "ĐÁP ÁN": "别跟他争了，他又要扯羊角疯了。",
    "PHIÊN ÂM": "Bié gēn tā zhēng le, tā yòu yào chě yáng jiǎo fēng le."
  },
  {
    "STT": 241,
    "CHỮ": "C",
    "CỤM": "扯硬弓",
    "PINYIN": "chě yìng gōng",
    "NGHĨA": "比喻故意摆谱儿,显示自己的威风与气势。",
    "SẮP XẾP CÂU": "不然/解决不了。/这事/得扯硬弓",
    "ĐÁP ÁN": "这事得扯硬弓，不然解决不了。",
    "PHIÊN ÂM": "Zhè shì děi chě yìng gōng, bùrán jiějué bù liǎo."
  },
  {
    "STT": 242,
    "SẮP XẾP CÂU": "不达目的/ 喜欢扯硬弓，/ 不罢休。/就是/他这个人",
    "ĐÁP ÁN": "他这个人就是喜欢扯硬弓，不达目的不罢休。",
    "PHIÊN ÂM": "Tā zhège rén jiùshì xǐhuan chě yìng gōng, bù dá mùdì bù bàxiū."
  },
  {
    "STT": 243,
    "CHỮ": "C",
    "CỤM": "扯着耳朵腮动弹",
    "PINYIN": "chě zhe ěr duo sāi dòng tán",
    "NGHĨA": "比喻双方关系密切,一有问题就会互相牵连。也作“扯着耳朵腮帮动”。",
    "SẮP XẾP CÂU": "话/一/也/说不出来。/他/被批评得扯着耳朵腮动弹",
    "ĐÁP ÁN": "他被批评得扯着耳朵腮动弹，一句话也说不出来。",
    "PHIÊN ÂM": "Tā bèi pīpíng de chě zhe ěr duo sāi dòng tán, yī jù huà yě shuō bu chūlái."
  },
  {
    "STT": 244,
    "SẮP XẾP CÂU": "他/ 听到/ 气得扯着耳朵腮动弹。/这个/消息",
    "ĐÁP ÁN": "听到这个消息，他气得扯着耳朵腮动弹。",
    "PHIÊN ÂM": "Tīngdào zhège xiāoxi, tā qì de chě zhe ěr duo sāi dòng tán."
  },
  {
    "STT": 245,
    "CHỮ": "C",
    "CỤM": "扯着老虎尾巴抖威风",
    "PINYIN": "chě zhe lǎo hǔ wěi ba dǒu wēi fēng",
    "NGHĨA": "比喻依仗强者的威势横行霸道,胡作非为。",
    "SẮP XẾP CÂU": "到处 / 扯着老虎尾巴抖威风。/ 他 /有后台/仗着",
    "ĐÁP ÁN": "他仗着有后台，到处扯着老虎尾巴抖威风。",
    "PHIÊN ÂM": "Tā zhàngzhe yǒu hòutái, dàochù chě zhe lǎo hǔ wěi ba dǒu wēi fēng."
  },
  {
    "STT": 246,
    "SẮP XẾP CÂU": "这种/ 无异于扯着老虎尾巴抖威风，/ 行为 /迟早/要/吃亏。",
    "ĐÁP ÁN": "这种行为无异于扯着老虎尾巴抖威风，迟早要吃亏。",
    "PHIÊN ÂM": "Zhè zhǒng xíngwéi wúyìyú chě zhe lǎo hǔ wěi ba dǒu wēi fēng, chízǎo yào chīkuī."
  },
  {
    "STT": 247,
    "CHỮ": "C",
    "CỤM": "扯着藤数瓜动",
    "PINYIN": "chě zhe téng shǔ guā dòng",
    "NGHĨA": "比喻相互之间联系紧密,有问题就互相牵扯。",
    "SẮP XẾP CÂU": "甚广。/这件事/牵扯/真是扯着藤数瓜动",
    "ĐÁP ÁN": "这件事牵扯甚广，真是扯着藤数瓜动。",
    "PHIÊN ÂM": "Zhè jiàn shì qiānchě shènguǎng, zhēnshi chě zhe téng shǔ guā dòng."
  },
  {
    "STT": 248,
    "SẮP XẾP CÂU": "定能扯着藤数瓜动，/找到/主使。/顺着/这条线索/ 幕后/查下去",
    "ĐÁP ÁN": "顺着这条线索查下去，定能扯着藤数瓜动，找到幕后主使。",
    "PHIÊN ÂM": "Shùnzhe zhè tiáo xiànsuǒ chá xiàqù, dìng néng chě zhe téng shǔ guā dòng, zhǎodào mùhòu zhǔshǐ."
  },
  {
    "STT": 249,
    "CHỮ": "C",
    "CỤM": "车子不动铃先响",
    "PINYIN": "chē zi bù dòng líng xiān xiǎng",
    "NGHĨA": "比喻还未开始行动,就因声势太大而走漏了消息。也作“车轮没转,铃铛先响”。",
    "SẮP XẾP CÂU": "车子不动铃先响，/ 做，/ 他/还没/开始/ 生怕/别人/不知道。",
    "ĐÁP ÁN": "他还没开始做，就车子不动铃先响，生怕别人不知道。",
    "PHIÊN ÂM": "Tā hái méi kāishǐ zuò, jiù chē zi bù dòng líng xiān xiǎng, shēngpà biérén bù zhīdào."
  },
  {
    "STT": 250,
    "SẮP XẾP CÂU": "其实/是车子不动铃先响。/别看/他/嘴上/说得/好听，",
    "ĐÁP ÁN": "别看他嘴上说得好听，其实是车子不动铃先响。",
    "PHIÊN ÂM": "Bié kàn tā zuǐshàng shuō de hǎotīng, qíshí shì chē zi bù dòng líng xiān xiǎng."
  },
  {
    "STT": 251,
    "CHỮ": "C",
    "CỤM": "车走车路，马走马路",
    "PINYIN": "chē zǒu chē lù, mǎ zǒu mǎ lù",
    "NGHĨA": "比喻各自管好自己的事,互不干扰。 \r\n比喻各奔前程。",
    "SẮP XẾP CÂU": "咱们/各走/各的路，/车走车路，马走马路",
    "ĐÁP ÁN": "咱们各走各的路，车走车路，马走马路。",
    "PHIÊN ÂM": "Zánmen gè zǒu gè de lù, chē zǒu chē lù, mǎ zǒu mǎ lù."
  },
  {
    "STT": 252,
    "SẮP XẾP CÂU": "你们/互相/别/干涉。/车走车路，马走马路",
    "ĐÁP ÁN": "你们别互相干涉，车走车路，马走马路。",
    "PHIÊN ÂM": "Nǐmen bié hùxiāng gānshè, chē zǒu chē lù, mǎ zǒu mǎ lù."
  },
  {
    "STT": 253,
    "CHỮ": "C",
    "CỤM": "陈谷子，烂麻子",
    "PINYIN": "chén gǔ zi, làn má zi",
    "NGHĨA": "比喻陈旧的、无关紧要的往事或话题。也作“陈芝麻烂谷子”、“陈糠烂谷子”、“陈年烂芝麻”。",
    "SẮP XẾP CÂU": "向前/看吧。/那些陈谷子，烂麻子了/别再提",
    "ĐÁP ÁN": "别再提那些陈谷子，烂麻子了，向前看吧。",
    "PHIÊN ÂM": "Bié zài tí nàxiē chén gǔ zi, làn má zi le, xiàng qián kàn ba."
  },
  {
    "STT": 254,
    "SẮP XẾP CÂU": "没什么/新意。/他/的/文章/总是/些陈谷子，烂麻子，/写",
    "ĐÁP ÁN": "他的文章总是写些陈谷子，烂麻子，没什么新意。",
    "PHIÊN ÂM": "Tā de wénzhāng zǒngshì xiě xiē chén gǔ zi, làn má zi, méi shénme xīnyì."
  },
  {
    "STT": 255,
    "CHỮ": "C",
    "CỤM": "趁火添把柴",
    "PINYIN": "chèn huǒ tiān bǎ chái",
    "NGHĨA": "比喻趁机把事态扩大,使问题更严重或矛盾更激化。",
    "SẮP XẾP CÂU": "你/别再趁火添把柴了。/事情/已经/够糟了",
    "ĐÁP ÁN": "事情已经够糟了，你别再趁火添把柴了。",
    "PHIÊN ÂM": "Shìqíng yǐjīng gòu zāo le, nǐ bié zài chèn huǒ tiān bǎ chái le."
  },
  {
    "STT": 256,
    "SẮP XẾP CÂU": "让人/心寒。/他/不但/不安慰，/反而趁火添把柴",
    "ĐÁP ÁN": "他不但不安慰，反而趁火添把柴，让人心寒。",
    "PHIÊN ÂM": "Tā bùdàn bù ānwèi, fǎn'ér chèn huǒ tiān bǎ chái, ràng rén xīnhán."
  },
  {
    "STT": 257,
    "CHỮ": "C",
    "CỤM": "沉了一船芝麻，水面上撒花",
    "PINYIN": "chén le yī chuán zhī ma, shuǐ miàn shàng sā huā",
    "NGHĨA": "见“大篓撒油,满地捡芝麻”。",
    "SẮP XẾP CÂU": "水面上/撒花。/他/损失/惨重，/虽然/却/表现得沉了一船芝麻",
    "ĐÁP ÁN": "他虽然损失惨重，却表现得沉了一船芝麻，水面上撒花。",
    "PHIÊN ÂM": "Tā suīrán sǔnshī cǎnzòng, què biǎoxiàn de chén le yī chuán zhī ma, shuǐ miàn shàng sā huā."
  },
  {
    "STT": 258,
    "SẮP XẾP CÂU": "强颜/欢笑。/ 对他/打击/很大，/但/ 他/ 这件事/还是沉了一船芝麻，水面上撒花",
    "ĐÁP ÁN": "这件事对他打击很大，但他还是沉了一船芝麻，水面上撒花，强颜欢笑。",
    "PHIÊN ÂM": "Zhè jiàn shì duì tā dǎjí hěn dà, dàn tā háishì chén le yī chuán zhī ma, shuǐ miàn shàng sā huā, qiángyán huānxiào."
  },
  {
    "STT": 259,
    "CHỮ": "C",
    "CỤM": "陈猫古老鼠",
    "PINYIN": "chén māo gǔ lǎo shǔ",
    "NGHĨA": "比喻陈旧过时的东西。",
    "SẮP XẾP CÂU": "了，/毫无意义。/别再提/那些陈猫古老鼠",
    "ĐÁP ÁN": "别再提那些陈猫古老鼠了，毫无意义。",
    "PHIÊN ÂM": "Bié zài tí nàxiē chén māo gǔ lǎo shǔ le, háowú yìyì."
  },
  {
    "STT": 260,
    "SẮP XẾP CÂU": "没有任何/新意。/他的理论/都/是陈猫古老鼠",
    "ĐÁP ÁN": "他的理论都是陈猫古老鼠，没有任何新意。",
    "PHIÊN ÂM": "Tā de lǐlùn dōu shì chén māo gǔ lǎo shǔ, méiyǒu rènhé xīnyì."
  },
  {
    "STT": 261,
    "CHỮ": "C",
    "CỤM": "趁热打火",
    "PINYIN": "chèn rè dǎ huǒ",
    "NGHĨA": "趁着灶还热着再加火升温比较容易。\r\n比喻利用有利时机办事。也作“趁热劲”、“趁热灶”。",
    "SẮP XẾP CÂU": "不能/拖延。/这件/事/要趁热打火",
    "ĐÁP ÁN": "这件事要趁热打火，不能拖延。",
    "PHIÊN ÂM": "Zhè jiàn shì yào chèn rè dǎ huǒ, bù néng tuōyán."
  },
  {
    "STT": 262,
    "SẮP XẾP CÂU": "赶紧/行动。/机会/难得，/我们/得趁热打火",
    "ĐÁP ÁN": "机会难得，我们得趁热打火，赶紧行动。",
    "PHIÊN ÂM": "Jīhuì nándé, wǒmen děi chèn rè dǎ huǒ, gǎnjǐn xíngdòng."
  },
  {
    "STT": 263,
    "CHỮ": "C",
    "CỤM": "趁打铁",
    "PINYIN": "chèn rè dǎ tiě",
    "NGHĨA": "指凑热闹。也作“趁打哄”。",
    "SẮP XẾP CÂU": "赶紧/把这个/项目/完成。/趁打铁",
    "ĐÁP ÁN": "趁打铁，赶紧把这个项目完成。",
    "PHIÊN ÂM": "Chèn rè dǎ tiě, gǎnjǐn bǎ zhège xiàngmù wánchéng."
  },
  {
    "STT": 264,
    "SẮP XẾP CÂU": "不能/三天打鱼/两天晒网。/学习/要趁打铁",
    "ĐÁP ÁN": "学习要趁打铁，不能三天打鱼两天晒网。",
    "PHIÊN ÂM": "Xuéxí yào chèn rè dǎ tiě, bù néng sān tiān dǎ yú liǎng tiān shài wǎng."
  },
  {
    "STT": 265,
    "CHỮ": "C",
    "CỤM": "陈世美",
    "PINYIN": "chén shì měi",
    "NGHĨA": "舍弃老婆或忘恩负义的人。",
    "SẮP XẾP CÂU": "就是/个陈世美。/他/抛弃/妻子，/简直",
    "ĐÁP ÁN": "他抛弃妻子，简直就是个陈世美。",
    "PHIÊN ÂM": "Tā pāoqì qīzi, jiǎnzhí jiùshì ge chén shì měi."
  },
  {
    "STT": 266,
    "SẮP XẾP CÂU": "就是/现代/ 的人 / 的陈世美。/这种/忘恩负义",
    "ĐÁP ÁN": "这种忘恩负义的人，就是现代的陈世美。",
    "PHIÊN ÂM": "Zhè zhǒng wàng'ēnfùyì de rén, jiùshì xiàndài de chén shì měi."
  },
  {
    "STT": 267,
    "CHỮ": "C",
    "CỤM": "趁台阶下驴",
    "PINYIN": "chèn tái jiē xià lǘ",
    "NGHĨA": "比喻借机摆脱某种尴尬、难堪的局面。",
    "SẮP XẾP CÂU": "你/就趁台阶下驴吧。/既然/他/给/了/台阶，",
    "ĐÁP ÁN": "既然他给了台阶，你就趁台阶下驴吧。",
    "PHIÊN ÂM": "Jìrán tā gěi le táijiē, nǐ jiù chèn tái jiē xià lǘ ba."
  },
  {
    "STT": 268,
    "SẮP XẾP CÂU": "他现在/ 趁台阶下驴。/ 正好 / 骑虎难下，",
    "ĐÁP ÁN": "他现在骑虎难下，正好趁台阶下驴。",
    "PHIÊN ÂM": "Tā xiànzài qíhǔ nán xià, zhènghǎo chèn tái jiē xià lǘ."
  },
  {
    "STT": 269,
    "CHỮ": "C",
    "CỤM": "趁眼错",
    "PINYIN": "chèn yǎn cuò",
    "NGHĨA": "见“眨眼错”。",
    "SẮP XẾP CÂU": "赶紧/别被/发现/了。/ 溜走，/趁眼错",
    "ĐÁP ÁN": "趁眼错，赶紧溜走，别被发现了。",
    "PHIÊN ÂM": "Chèn yǎn cuò, gǎnjǐn liūzǒu, bié bèi fāxiàn le."
  },
  {
    "STT": 270,
    "SẮP XẾP CÂU": "把/ 藏了/起来。/ 东西 / 他趁眼错",
    "ĐÁP ÁN": "他趁眼错，把东西藏了起来。",
    "PHIÊN ÂM": "Tā chèn yǎn cuò, bǎ dōngxi cáng le qǐlái."
  },
  {
    "STT": 271,
    "CHỮ": "C",
    "CỤM": "趁着浑水摸泥鳅",
    "PINYIN": "chèn zhe hún shuǐ mō ní qiū",
    "NGHĨA": "比喻趁混乱之机捞取好处。也作“趁浑水捞虾”、“趁混水打野鸡”。",
    "SẮP XẾP CÂU": "捞/了/ 好处。/他趁着浑水摸泥鳅，/ 不少",
    "ĐÁP ÁN": "他趁着浑水摸泥鳅，捞了不少好处。",
    "PHIÊN ÂM": "Tā chèn zhe hún shuǐ mō ní qiū, lāo le bù shǎo hǎochù."
  },
  {
    "STT": 272,
    "SẮP XẾP CÂU": "我可/不/是/傻子。/别想趁着浑水摸泥鳅，",
    "ĐÁP ÁN": "别想趁着浑水摸泥鳅，我可不是傻子。",
    "PHIÊN ÂM": "Bié xiǎng chèn zhe hún shuǐ mō ní qiū, wǒ kě bù shì shǎzi."
  },
  {
    "STT": 273,
    "CHỮ": "C",
    "CỤM": "趁着火候补漏锅",
    "PINYIN": "chèn zhe huǒ hòu bǔ lòu guō",
    "NGHĨA": "比喻抓住有利时机,趁势做事。",
    "SẮP XẾP CÂU": "赶紧/行动。/现在/正是趁着火候补漏锅的/时候，",
    "ĐÁP ÁN": "现在正是趁着火候补漏锅的时候，赶紧行动。",
    "PHIÊN ÂM": "Xiànzài zhèngshì chèn zhe huǒ hòu bǔ lòu guō de shíhou, gǎnjǐn xíngdòng."
  },
  {
    "STT": 274,
    "SẮP XẾP CÂU": "出了/及时/解决，/趁着火候补漏锅。/ 问题/要",
    "ĐÁP ÁN": "出了问题要及时解决，趁着火候补漏锅。",
    "PHIÊN ÂM": "Chū le wèntí yào jíshí jiějué, chèn zhe huǒ hòu bǔ lòu guō."
  },
  {
    "STT": 275,
    "CHỮ": "C",
    "CỤM": "撑场面",
    "PINYIN": "chēng chǎng miàn",
    "NGHĨA": "维持表面的排场。也说“撑门面”。",
    "SẮP XẾP CÂU": "结果/ 一屁股债。/他/借钱撑场面，/欠了",
    "ĐÁP ÁN": "他借钱撑场面，结果欠了一屁股债。",
    "PHIÊN ÂM": "Tā jièqián chēng chǎng miàn, jiéguǒ qiàn le yī pìgǔ zhài."
  },
  {
    "STT": 276,
    "SẮP XẾP CÂU": "实事求是/就/ /这种 / 好。/ 小事/没/必要撑场面，",
    "ĐÁP ÁN": "这种小事没必要撑场面，实事求是就好。",
    "PHIÊN ÂM": "Zhè zhǒng xiǎoshì méi bìyào chēng chǎng miàn, shíshì qiúshì jiù hǎo."
  },
  {
    "STT": 277,
    "CHỮ": "C",
    "CỤM": "成大器",
    "PINYIN": "chéng dà qì",
    "NGHĨA": "指有大成就、大作为。",
    "SẮP XẾP CÂU": "从小 /将来/一定/能成大器。/他 /就/刻苦/努力，",
    "ĐÁP ÁN": "他从小就刻苦努力，将来一定能成大器。",
    "PHIÊN ÂM": "Tā cóngxiǎo jiù kèkǔ nǔlì, jiānglái yīdìng néng chéng dà qì."
  },
  {
    "STT": 278,
    "SẮP XẾP CÂU": "父母/都/ 自己/ 的 / 孩子希望 / 能成大器。",
    "ĐÁP ÁN": "父母都希望自己的孩子能成大器。",
    "PHIÊN ÂM": "Fùmǔ dōu xīwàng zìjǐ de háizi néng chéng dà qì."
  },
  {
    "STT": 279,
    "CHỮ": "C",
    "CỤM": "撑的撑死，饿的饿死",
    "PINYIN": "chēng de chēng sǐ, è de è sǐ",
    "NGHĨA": "形容分配不均。",
    "SẮP XẾP CÂU": "饿的饿死。/这个/社会，/在/真是撑的撑死",
    "ĐÁP ÁN": "在这个社会，真是撑的撑死，饿的饿死。",
    "PHIÊN ÂM": "Zài zhège shèhuì, zhēnshi chēng de chēng sǐ, è de è sǐ."
  },
  {
    "STT": 280,
    "SẮP XẾP CÂU": "撑的撑死，饿的饿死。/资源/分配/不均，/导致",
    "ĐÁP ÁN": "资源分配不均，导致撑的撑死，饿的饿死。",
    "PHIÊN ÂM": "Zīyuán fēnpèi bù jūn, dǎozhì chēng de chēng sǐ, è de è sǐ."
  },
  {
    "STT": 281,
    "CHỮ": "C",
    "CỤM": "成风气",
    "PINYIN": "chéng fēng qì",
    "NGHĨA": "指成为一种潮流或流行习惯。",
    "SẮP XẾP CÂU": "成风气。/让/不能/这种/不良风气",
    "ĐÁP ÁN": "这种不良风气不能让它成风气。",
    "PHIÊN ÂM": "Zhè zhǒng bùliáng fēngqì bù néng ràng tā chéng fēng qì."
  },
  {
    "STT": 282,
    "SẮP XẾP CÂU": "养成/了/好习惯。/节约粮食/已经成风气，/大家/都",
    "ĐÁP ÁN": "节约粮食已经成风气，大家都养成了好习惯。",
    "PHIÊN ÂM": "Jiéyuē liángshí yǐjīng chéng fēng qì, dàjiā dōu yǎngchéng le hǎo xíguàn."
  },
  {
    "STT": 283,
    "CHỮ": "C",
    "CỤM": "成画饼",
    "PINYIN": "chéng huà bǐng",
    "NGHĨA": "画的饼子不能充饥。比喻理想或愿望没有实现。",
    "SẮP XẾP CÂU": "他的 / 成画饼，/没/兑现过。/承诺/总是/从来",
    "ĐÁP ÁN": "他的承诺总是成画饼，从来没兑现过。",
    "PHIÊN ÂM": "Tā de chéngnuò zǒngshì chéng huà bǐng, cónglái méi duìxiàn guò."
  },
  {
    "STT": 284,
    "SẮP XẾP CÂU": "项目/ 就/只能成画饼。/这个 /如果/只/停留在/计划阶段",
    "ĐÁP ÁN": "这个项目如果只停留在计划阶段，就只能成画饼。",
    "PHIÊN ÂM": "Zhège xiàngmù rúguǒ zhǐ tíngliú zài jìhuà jiēduàn, jiù zhǐ néng chéng huà bǐng."
  },
  {
    "STT": 285,
    "CHỮ": "C",
    "CỤM": "城隍老爷上了小鬼的当",
    "PINYIN": "chéng huáng lǎo yé shàng le xiǎo guǐ de dàng",
    "NGHĨA": "城隍老爷:迷信传说指主管某个城的神。比喻大人物被小人物所欺骗、吃了亏。",
    "SẮP XẾP CÂU": "城隍老爷上了小鬼的当。/老实了，/他/太",
    "ĐÁP ÁN": "他太老实了，城隍老爷上了小鬼的当。",
    "PHIÊN ÂM": "Tā tài lǎoshí le, chéng huáng lǎo yé shàng le xiǎo guǐ de dàng."
  },
  {
    "STT": 286,
    "SẮP XẾP CÂU": "就是城隍老爷上了小鬼的当。/这种/事情，/简直",
    "ĐÁP ÁN": "这种事情，简直就是城隍老爷上了小鬼的当。",
    "PHIÊN ÂM": "Zhè zhǒng shìqíng, jiǎnzhí jiùshì chéng huáng lǎo yé shàng le xiǎo guǐ de dàng."
  },
  {
    "STT": 287,
    "CHỮ": "C",
    "CỤM": "撑空架子",
    "PINYIN": "chēng kōng jià zi",
    "NGHĨA": "喻指内里已经虚空,只能勉强支撑。",
    "SẮP XẾP CÂU": "没/有/真本事。/他/总是/喜欢撑空架子",
    "ĐÁP ÁN": "他总是喜欢撑空架子，没有真本事。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chēng kōng jià zi, méiyǒu zhēnběnshì."
  },
  {
    "STT": 288,
    "SẮP XẾP CÂU": "其实/都/是撑空架子。/他/平时/排场/大，/别看",
    "ĐÁP ÁN": "别看他平时排场大，其实都是撑空架子。",
    "PHIÊN ÂM": "Bié kàn tā píngshí páichǎng dà, qíshí dōu shì chēng kōng jià zi."
  },
  {
    "STT": 289,
    "CHỮ": "C",
    "CỤM": "城里也败了，乡里也耽了",
    "PINYIN": "chéng lǐ yě bài le, xiāng lǐ yě dān le",
    "NGHĨA": "指两头都耽赶上,什么也没办成。",
    "SẮP XẾP CÂU": "城里也败了，乡里也耽了。/他/创业/失败，/真是",
    "ĐÁP ÁN": "他创业失败，真是城里也败了，乡里也耽了。",
    "PHIÊN ÂM": "Tā chuàngyè shībài, zhēnshi chéng lǐ yě bài le, xiāng lǐ yě dān le."
  },
  {
    "STT": 290,
    "SẮP XẾP CÂU": "结果城里也败了，乡里也耽了。/两头/都/顾不好，",
    "ĐÁP ÁN": "两头都顾不好，结果城里也败了，乡里也耽了。",
    "PHIÊN ÂM": "Liǎngtóu dōu gù bù hǎo, jiéguǒ chéng lǐ yě bài le, xiāng lǐ yě dān le."
  },
  {
    "STT": 291,
    "CHỮ": "C",
    "CỤM": "撑门户",
    "PINYIN": "chēng mén hù",
    "NGHĨA": "喻指支撑起一个家庭。",
    "SẮP XẾP CÂU": "撑门户，/不/容易。/他/一个/很/人",
    "ĐÁP ÁN": "他一个人撑门户，很不容易。",
    "PHIÊN ÂM": "Tā yī ge rén chēng mén hù, hěn bù róngyì."
  },
  {
    "STT": 292,
    "SẮP XẾP CÂU": "撑门户。/他/必须/父母/年纪/大了",
    "ĐÁP ÁN": "父母年纪大了，他必须撑门户。",
    "PHIÊN ÂM": "Fùmǔ niánjì dà le, tā bìxū chēng mén hù."
  },
  {
    "STT": 293,
    "CHỮ": "C",
    "CỤM": "撑门面",
    "PINYIN": "chēng mén miàn",
    "NGHĨA": "喻指勉强维持表面的排场与体面。也作“撑场面”。",
    "SẮP XẾP CÂU": "撑门面，/日子/过得/很/艰难。/他/借钱",
    "ĐÁP ÁN": "他借钱撑门面，日子过得很艰难。",
    "PHIÊN ÂM": "Tā jièqián chēng mén miàn, rìzi guò de hěn jiānnán."
  },
  {
    "STT": 294,
    "SẮP XẾP CÂU": "没必要/为了撑门面，/打肿脸充胖子",
    "ĐÁP ÁN": "没必要为了撑门面，打肿脸充胖子。",
    "PHIÊN ÂM": "Méi bìyào wèile chēng mén miàn, dǎ zhǒng liǎn chōng pàngzi."
  },
  {
    "STT": 295,
    "CHỮ": "C",
    "CỤM": "成泡影",
    "PINYIN": "chéng pào yǐng",
    "NGHĨA": "喻指计划或希望落空。",
    "SẮP XẾP CÂU": "成泡影，/他/的/梦想/最终/令人/惋惜",
    "ĐÁP ÁN": "他的梦想最终成泡影，令人惋惜。",
    "PHIÊN ÂM": "Tā de mèngxiǎng zuìzhōng chéng pào yǐng, lìng rén wǎnxī."
  },
  {
    "STT": 296,
    "SẮP XẾP CÂU": "成泡影，/沮丧。/所有/的/努力/都/让/他/很",
    "ĐÁP ÁN": "所有的努力都成泡影，让他很沮丧。",
    "PHIÊN ÂM": "Suǒyǒu de nǔlì dōu chéng pào yǐng, ràng tā hěn jǔsàng."
  },
  {
    "STT": 297,
    "CHỮ": "C",
    "CỤM": "成气候",
    "PINYIN": "chéng qì hòu",
    "NGHĨA": "比喻有出息,有成就或有发展前途。\r\n比喻成为一种趋势或潮流。",
    "SẮP XẾP CÂU": "成气候了。/经过/多年/努力，/他/的/事业/终于",
    "ĐÁP ÁN": "经过多年努力，他的事业终于成气候了。",
    "PHIÊN ÂM": "Jīngguò duō nián nǔlì, tā de shìyè zhōngyú chéng qì hòu le."
  },
  {
    "STT": 298,
    "SẮP XẾP CÂU": "成气候。/只要/坚持/下去，/你们/的/团队/一定/能",
    "ĐÁP ÁN": "只要坚持下去，你们的团队一定能成气候。",
    "PHIÊN ÂM": "Zhǐyào jiānchí xiàqù, nǐmen de tuánduì yīdìng néng chéng qì hòu."
  },
  {
    "STT": 299,
    "CHỮ": "C",
    "CỤM": "逞强梁",
    "PINYIN": "chěng qiáng liáng",
    "NGHĨA": "指争强好胜,要强逞能。",
    "SẮP XẾP CÂU": "逞强梁，/总是/结果/反而/吃/了/亏。/他/喜欢",
    "ĐÁP ÁN": "他总是喜欢逞强梁，结果反而吃了亏。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chěng qiáng liáng, jiéguǒ fǎn'ér chī le kuī."
  },
  {
    "STT": 300,
    "SẮP XẾP CÂU": "丢人。/免得/没/那个/本事/就/别逞强梁，/",
    "ĐÁP ÁN": "没那个本事就别逞强梁，免得丢人。",
    "PHIÊN ÂM": "Méi nà ge běnshì jiù bié chěng qiáng liáng, miǎndé diūrén."
  },
  {
    "STT": 301,
    "CHỮ": "C",
    "CỤM": "成事不足，败事有余",
    "PINYIN": "chéng shì bù zú, bài shì yǒu yú",
    "NGHĨA": "嘲讽或指责人无能,办不成事还坏了事。",
    "SẮP XẾP CÂU": "成事不足，败事有余，/不能/委以重任。/他这个人",
    "ĐÁP ÁN": "他这个人成事不足，败事有余，不能委以重任。",
    "PHIÊN ÂM": "Tā zhège rén chéng shì bù zú, bài shì yǒu yú, bù néng wěiyǐ zhòngrèn."
  },
  {
    "STT": 302,
    "SẮP XẾP CÂU": "肯定/是成事不足，败事有余。/交/给/他/办/这件事",
    "ĐÁP ÁN": "交给他办这件事，肯定是成事不足，败事有余。",
    "PHIÊN ÂM": "Jiāo gěi tā bàn zhè jiàn shì, kěndìng shì chéng shì bù zú, bài shì yǒu yú."
  },
  {
    "STT": 303,
    "CHỮ": "C",
    "CỤM": "撑顺风船",
    "PINYIN": "chēng shùn fēng chuán",
    "NGHĨA": "比喻借助有利时机或形势办事。也作“开顺风船”。",
    "SẮP XẾP CÂU": "成功。/一举/遇到/好机会/就/要撑顺风船，",
    "ĐÁP ÁN": "遇到好机会就要撑顺风船，一举成功。",
    "PHIÊN ÂM": "Yùdào hǎo jīhuì jiù yào chēng shùn fēng chuán, yī jǔ chénggōng."
  },
  {
    "STT": 304,
    "SẮP XẾP CÂU": "撑顺风船。/善于/抓住/机遇，/他/总是/能",
    "ĐÁP ÁN": "他善于抓住机遇，总是能撑顺风船。",
    "PHIÊN ÂM": "Tā shànyú zhuāzhù jīyù, zǒngshì néng chēng shùn fēng chuán."
  },
  {
    "STT": 305,
    "CHỮ": "C",
    "CỤM": "撑死眼，饿死嘴",
    "PINYIN": "chēng sǐ yǎn, è sǐ zuǐ",
    "NGHĨA": "撑:吃得太多,肚子容不下了。指能看到却吃不到。也作“饿死嘴,撑死眼”。",
    "SẮP XẾP CÂU": "撑死眼，饿死嘴，/ 想占 / 什么/ 都 /便宜。/他这个人/就是",
    "ĐÁP ÁN": "他这个人就是撑死眼，饿死嘴，什么都想占便宜。",
    "PHIÊN ÂM": "Tā zhège rén jiùshì chēng sǐ yǎn, è sǐ zuǐ, shénme dōu xiǎng zhàn piányi."
  },
  {
    "STT": 306,
    "SẮP XẾP CÂU": "撑死眼，饿死嘴的/典型。/别/指望/他/会/大方，/他是",
    "ĐÁP ÁN": "别指望他会大方，他是撑死眼，饿死嘴的典型。",
    "PHIÊN ÂM": "Bié zhǐwàng tā huì dàfang, tā shì chēng sǐ yǎn, è sǐ zuǐ de diǎnxíng."
  },
  {
    "STT": 307,
    "CHỮ": "C",
    "CỤM": "成体统",
    "PINYIN": "chéng tǐ tǒng",
    "NGHĨA": "体统:指体制、格局、规矩等。指符合规范或规矩。",
    "SẮP XẾP CÂU": "成体统，/不能/没/规矩。/孩子/们/说话/要/讲究",
    "ĐÁP ÁN": "孩子们说话要讲究成体统，不能没规矩。",
    "PHIÊN ÂM": "Háizimen shuōhuà yào jiǎngjiu chéng tǐ tǒng, bù néng méi guīju."
  },
  {
    "STT": 308,
    "SẮP XẾP CÂU": "成体统，/会/让/人/笑话的。/这种/行为/不",
    "ĐÁP ÁN": "这种行为不成体统，会让人笑话的。",
    "PHIÊN ÂM": "Zhè zhǒng xíngwéi bù chéng tǐ tǒng, huì ràng rén xiàohua de."
  },
  {
    "STT": 309,
    "CHỮ": "C",
    "CỤM": "秤砣放在定盘星上",
    "PINYIN": "chèng tuó fàng zài dìng pán xīng shàng",
    "NGHĨA": "定盘星:秤杆上标志起算点(重量为零)的星儿。比喻拿定主意,不再更改。",
    "SẮP XẾP CÂU": "秤砣放在定盘星上，/让/人/信服。/他/办事/公正",
    "ĐÁP ÁN": "他办事公正，秤砣放在定盘星上，让人信服。",
    "PHIÊN ÂM": "Tā bànshì gōngzhèng, chèng tuó fàng zài dìng pán xīng shàng, ràng rén xìnfú."
  },
  {
    "STT": 310,
    "SẮP XẾP CÂU": "秤砣放在定盘星上，/公平/得很。/这件事/由/他/来/处理，/绝对/是",
    "ĐÁP ÁN": "这件事由他来处理，绝对是秤砣放在定盘星上，公平得很。",
    "PHIÊN ÂM": "Zhè jiàn shì yóu tā lái chǔlǐ, juéduì shì chèng tuó fàng zài dìng pán xīng shàng, gōngpíng hěn de."
  },
  {
    "STT": 311,
    "CHỮ": "C",
    "CỤM": "乘兴而来，败兴而去",
    "PINYIN": "chéng xìng ér lái, bài xìng ér qù",
    "NGHĨA": "指兴致勃勃而来,却受到了打击或拒绝,只得扫兴而归。也作“乘兴而去,败兴而归”。",
    "SẮP XẾP CÂU": "乘兴而来，/败兴/而/去。/聚会/气氛/不好，/大家",
    "ĐÁP ÁN": "聚会气氛不好，大家乘兴而来，败兴而去。",
    "PHIÊN ÂM": "Jùhuì qìfēn bù hǎo, dàjiā chéng xìng ér lái, bài xìng ér qù."
  },
  {
    "STT": 312,
    "SẮP XẾP CÂU": "乘兴而来，败兴而去。/没想到/会/是/这样/的/结果，/真是",
    "ĐÁP ÁN": "没想到会是这样的结果，真是乘兴而来，败兴而去。",
    "PHIÊN ÂM": "Méi xiǎngdào huì shì zhèyàng de jiéguǒ, zhēnshi chéng xìng ér lái, bài xìng ér qù."
  },
  {
    "STT": 313,
    "CHỮ": "C",
    "CỤM": "撑腰板",
    "PINYIN": "chēng yāo bǎn",
    "NGHĨA": "比喻给予支持或鼓励。也作“撑腰杆”。",
    "SẮP XẾP CÂU": "撑腰板，/他/办事/就/更/有/底气了。/有/了/领导",
    "ĐÁP ÁN": "有了领导撑腰板，他办事就更有底气了。",
    "PHIÊN ÂM": "Yǒu le lǐngdǎo chēng yāo bǎn, tā bànshì jiù gèng yǒu dǐqì le."
  },
  {
    "STT": 314,
    "SẮP XẾP CÂU": "撑腰板。/父母/永远/是/孩子/的",
    "ĐÁP ÁN": "父母永远是孩子的撑腰板。",
    "PHIÊN ÂM": "Fùmǔ yǒngyuǎn shì háizi de chēng yāo bǎn."
  },
  {
    "STT": 315,
    "CHỮ": "C",
    "CỤM": "成也萧何，败也萧何",
    "PINYIN": "chéng yě xiāo hé, bài yě xiāo hé",
    "NGHĨA": "指事情的成败、好坏都由同一个人或同样原因造成。",
    "SẮP XẾP CÂU": "成也萧何，败也萧何。/他/的/成功/和/失败/都/与/那个/人/有关，/真是",
    "ĐÁP ÁN": "他的成功和失败都与那个人有关，真是成也萧何，败也萧何。",
    "PHIÊN ÂM": "Tā de chénggōng hé shībài dōu yǔ nà ge rén yǒuguān, zhēnshi chéng yě xiāo hé, bài yě xiāo hé."
  },
  {
    "STT": 316,
    "SẮP XẾP CÂU": "成也萧何，败也萧何。/可以说/是/这个/项目/团队/的/兴衰",
    "ĐÁP ÁN": "这个项目团队的兴衰，可以说是成也萧何，败也萧何。",
    "PHIÊN ÂM": "Zhège xiàngmù tuánduì de xīngshuāi, kěyǐ shuō shì chéng yě xiāo hé, bài yě xiāo hé."
  },
  {
    "STT": 317,
    "CHỮ": "C",
    "CỤM": "撑硬船",
    "PINYIN": "chēng yìng chuán",
    "NGHĨA": "比喻态度强硬,不肯迁就或让步。",
    "SẮP XẾP CÂU": "撑硬船。/遇到/困难/要/学会/变通，/别/老是",
    "ĐÁP ÁN": "遇到困难要学会变通，别老是撑硬船。",
    "PHIÊN ÂM": "Yùdào kùnnan yào xuéhuì biàntōng, bié lǎoshì chēng yìng chuán."
  },
  {
    "STT": 318,
    "SẮP XẾP CÂU": "撑硬船。/一根筋，/他/总是/喜欢",
    "ĐÁP ÁN": "他一根筋，总是喜欢撑硬船。",
    "PHIÊN ÂM": "Tā yī gēnjīn, zǒngshì xǐhuan chēng yìng chuán."
  },
  {
    "STT": 319,
    "CHỮ": "C",
    "CỤM": "逞英雄",
    "PINYIN": "chěng yīng xióng",
    "NGHĨA": "指显示自己勇敢无畏,不怕事。",
    "SẮP XẾP CÂU": "帮倒忙。/反而/结果/喜欢逞英雄。/他/总是",
    "ĐÁP ÁN": "他总是喜欢逞英雄，结果反而帮倒忙。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chěng yīng xióng, jiéguǒ fǎn'ér bāng dàománg."
  },
  {
    "STT": 320,
    "SẮP XẾP CÂU": "能/解决的。/不/是/你/逞英雄了，/这/件/事/别",
    "ĐÁP ÁN": "别逞英雄了，这件事不是你能解决的。",
    "PHIÊN ÂM": "Bié chěng yīng xióng le, zhè jiàn shì bù shì nǐ néng jiějué de."
  },
  {
    "STT": 321,
    "CHỮ": "C",
    "CỤM": "成正果",
    "PINYIN": "chéng zhèng guǒ",
    "NGHĨA": "佛教称修行得道为成正果。比喻取得成功或改邪归正。",
    "SẮP XẾP CÂU": "终于/修成正果。/他/努力，/经过/多年",
    "ĐÁP ÁN": "经过多年努力，他终于修成正果。",
    "PHIÊN ÂM": "Jīngguò duō nián nǔlì, tā zhōngyú xiū chéng zhèng guǒ."
  },
  {
    "STT": 322,
    "SẮP XẾP CÂU": "你们/的/爱情/一定/能成正果。/只要/坚持/下去",
    "ĐÁP ÁN": "只要坚持下去，你们的爱情一定能成正果。",
    "PHIÊN ÂM": "Zhǐyào jiānchí xiàqù, nǐmen de àiqíng yīdìng néng chéng zhèng guǒ."
  },
  {
    "STT": 323,
    "CHỮ": "C",
    "CỤM": "撑场面 ",
    "PINYIN": "chēnɡ chǎnɡ miàn",
    "NGHĨA": "维持表面的排场。也说“撑门面”。",
    "SẮP XẾP CÂU": "欠/了/一屁股债。/结果/他/借钱撑场面",
    "ĐÁP ÁN": "他借钱撑场面，结果欠了一屁股债。",
    "PHIÊN ÂM": "Tā jièqián chēng chǎng miàn, jiéguǒ qiàn le yī pìgǔ zhài."
  },
  {
    "STT": 324,
    "SẮP XẾP CÂU": "打肿脸/充胖子。/没必要/为了撑场面",
    "ĐÁP ÁN": "没必要为了撑场面，打肿脸充胖子。",
    "PHIÊN ÂM": "Méi bìyào wèile chēng chǎng miàn, dǎ zhǒng liǎn chōng pàngzi."
  },
  {
    "STT": 325,
    "CHỮ": "C",
    "CỤM": "吃八方",
    "PINYIN": "chī bā fāng",
    "NGHĨA": "指自己不劳动,靠各方面的人养活。也作“吃四方”。",
    "SẮP XẾP CÂU": "都能吃八方。/ 会做 / 他这个人/很 / 生意，/走到/哪里",
    "ĐÁP ÁN": "他这个人很会做生意，走到哪里都能吃八方。",
    "PHIÊN ÂM": "Tā zhège rén hěn huì zuò shēngyi, zǒu dào nǎlǐ dōu néng chī bā fāng."
  },
  {
    "STT": 326,
    "SẮP XẾP CÂU": "才能/在/社会/ 真本事 / 上吃八方。/有了",
    "ĐÁP ÁN": "有了真本事，才能在社会上吃八方。",
    "PHIÊN ÂM": "Yǒu le zhēnběnshì, cái néng zài shèhuì shàng chī bā fāng."
  },
  {
    "STT": 327,
    "CHỮ": "C",
    "CỤM": "吃白板",
    "PINYIN": "chī bái bǎn",
    "NGHĨA": "指被拒绝。 指没生意或没收入。",
    "SẮP XẾP CÂU": "吃白板了。/算是/这次/考试/我/一题/都/没会",
    "ĐÁP ÁN": "这次考试我一题都没会，算是吃白板了。",
    "PHIÊN ÂM": "Zhè cì kǎoshì wǒ yī tí dōu méi huì, suànshì chī bái bǎn le."
  },
  {
    "STT": 328,
    "SẮP XẾP CÂU": "吃白板。/结果/还是/他/学/了/半天",
    "ĐÁP ÁN": "他学了半天，结果还是吃白板。",
    "PHIÊN ÂM": "Tā xué le bàntiān, jiéguǒ háishì chī bái bǎn."
  },
  {
    "STT": 329,
    "CHỮ": "C",
    "CỤM": "吃白饭",
    "PINYIN": "chī bái fàn",
    "NGHĨA": "指白吃饭,不做事。",
    "SẮP XẾP CÂU": "吃白饭。/整天/在/家/他/游手好闲",
    "ĐÁP ÁN": "他游手好闲，整天在家吃白饭。",
    "PHIÊN ÂM": "Tā yóushǒuhàoxián, zhěngtiān zài jiā chī bái fàn."
  },
  {
    "STT": 330,
    "SẮP XẾP CÂU": "不是 / 之计。/靠/父母吃白饭 / 长久",
    "ĐÁP ÁN": "靠父母吃白饭，不是长久之计。",
    "PHIÊN ÂM": "Kào fùmǔ chī bái fàn, bù shì chángjiǔ zhī jì."
  },
  {
    "STT": 331,
    "CHỮ": "C",
    "CỤM": "吃白酒",
    "PINYIN": "chī bái jiǔ",
    "NGHĨA": "指白吃酒席不掏钱。",
    "SẮP XẾP CÂU": "吃白酒。/ 在家/他/今天/心情/不好 / 一个人",
    "ĐÁP ÁN": "他今天心情不好，一个人在家吃白酒。",
    "PHIÊN ÂM": "Tā jīntiān xīnqíng bù hǎo, yī ge rén zài jiā chī bái jiǔ."
  },
  {
    "STT": 332,
    "SẮP XẾP CÂU": "对/身体/ 少吃白酒 / 不好。/医生/建议/他",
    "ĐÁP ÁN": "医生建议他少吃白酒，对身体不好。",
    "PHIÊN ÂM": "Yīshēng jiànyì tā shǎo chī bái jiǔ, duì shēntǐ bù hǎo."
  },
  {
    "STT": 333,
    "CHỮ": "C",
    "CỤM": "吃白食",
    "PINYIN": "chī bái shí",
    "NGHĨA": "指不付出任何代价而占有事物或钱财。",
    "SẮP XẾP CÂU": "从不 /给钱。/他 / 喜欢 / 到/ 朋友/ 总是/家吃白食",
    "ĐÁP ÁN": "他总是喜欢到朋友家吃白食，从不给钱。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan dào péngyou jiā chī bái shí, cóng bù gěi qián."
  },
  {
    "STT": 334,
    "SẮP XẾP CÂU": "行为 / 很/可耻。/这种吃白食的",
    "ĐÁP ÁN": "这种吃白食的行为很可耻。",
    "PHIÊN ÂM": "Zhè zhǒng chī bái shí de xíngwéi hěn kěchǐ."
  },
  {
    "STT": 335,
    "CHỮ": "C",
    "CỤM": "吃白眼",
    "PINYIN": "chī bái yǎn",
    "NGHĨA": "指受到歧视或冷遇。",
    "SẮP XẾP CÂU": "被/ 错了话 / 大家吃白眼。/他/因为/说",
    "ĐÁP ÁN": "他因为说错了话，被大家吃白眼。",
    "PHIÊN ÂM": "Tā yīnwèi shuō cuò le huà, bèi dàjiā chī bái yǎn."
  },
  {
    "STT": 336,
    "SẮP XẾP CÂU": "让人吃白眼的/ 那些 / 事情。/别 /做 ",
    "ĐÁP ÁN": "别做那些让人吃白眼的事情。",
    "PHIÊN ÂM": "Bié zuò nàxiē ràng rén chī bái yǎn de shìqíng."
  },
  {
    "STT": 337,
    "CHỮ": "C",
    "CỤM": "吃白斋",
    "PINYIN": "chī bái zhāi",
    "NGHĨA": "信仰宗教的人所吃的素食。指吃素菜。",
    "SẮP XẾP CÂU": "吃白斋了？/他/平时/大鱼大肉，/今天/怎么",
    "ĐÁP ÁN": "他平时大鱼大肉，今天怎么吃白斋了？",
    "PHIÊN ÂM": "Tā píngshí dàyúdàròu, jīntiān zěnme chī bái zhāi le?"
  },
  {
    "STT": 338,
    "SẮP XẾP CÂU": "吃白斋一天。/为了/健康，/他/决定/每周",
    "ĐÁP ÁN": "为了健康，他决定每周吃白斋一天。",
    "PHIÊN ÂM": "Wèile jiànkāng, tā juédìng měi zhōu chī bái zhāi yī tiān."
  },
  {
    "STT": 339,
    "CHỮ": "C",
    "CỤM": "吃板刀面",
    "PINYIN": "chī bǎn dāo miàn",
    "NGHĨA": "江湖隐语,指被砍杀。也作“吃刀头面”。",
    "SẮP XẾP CÂU": "吃了板刀面，/自作自受。/ 最后 / 他 /不听/劝告",
    "ĐÁP ÁN": "他不听劝告，最后吃了板刀面，自作自受。",
    "PHIÊN ÂM": "Tā bù tīng quàngào, zuìhòu chī bǎn dāo miàn, zìzuò zìshòu."
  },
  {
    "STT": 340,
    "SẮP XẾP CÂU": "吃板刀面了。/ 这件事 / 你 / 就要 / 办不好",
    "ĐÁP ÁN": "这件事办不好，你就要吃板刀面了。",
    "PHIÊN ÂM": "Zhè jiàn shì bàn bù hǎo, nǐ jiù yào chī bǎn dāo miàn le."
  },
  {
    "STT": 341,
    "CHỮ": "C",
    "CỤM": "吃板子",
    "PINYIN": "chī bǎn zi",
    "NGHĨA": "见“挨板子”。",
    "SẮP XẾP CÂU": "吃板子了。/他/犯了/错，/被/老师",
    "ĐÁP ÁN": "他犯了错，被老师吃板子了。",
    "PHIÊN ÂM": "Tā fàn le cuò, bèi lǎoshī chī bǎn zi le."
  },
  {
    "STT": 342,
    "SẮP XẾP CÂU": "要/ 不听话 / 吃板子的。/不然/别",
    "ĐÁP ÁN": "别不听话，不然要吃板子的。",
    "PHIÊN ÂM": "Bié bù tīnghuà, bùrán yào chī bǎn zi de."
  },
  {
    "STT": 343,
    "CHỮ": "C",
    "CỤM": "吃饱饭骂厨子",
    "PINYIN": "chī bǎo fàn mà chúzi",
    "NGHĨA": "比喻达到目的以后就打击有功的人。也作“吃饱了骂厨子”、“酒足饭饱骂厨子”。",
    "SẮP XẾP CÂU": "吃饱饭骂厨子的/行为，/让人/很不齿。/他/这种",
    "ĐÁP ÁN": "他这种吃饱饭骂厨子的行为，让人很不齿。",
    "PHIÊN ÂM": "Tā zhè zhǒng chī bǎo fàn mà chú zi de xíngwéi, ràng rén hěn bùchǐ."
  },
  {
    "STT": 344,
    "SẮP XẾP CÂU": "要/懂得/感恩。/别吃饱饭骂厨子",
    "ĐÁP ÁN": "别吃饱饭骂厨子，要懂得感恩。",
    "PHIÊN ÂM": "Bié chī bǎo fàn mà chú zi, yào dǒngde gǎn'ēn."
  },
  {
    "STT": 345,
    "CHỮ": "C",
    "CỤM": "吃饱了肚子不叫娘",
    "PINYIN": "chī bǎo le dùzi bù jiào niáng",
    "NGHĨA": "指人忘恩负义,要求或目的达到了就不认恩人。",
    "SẮP XẾP CÂU": "吃饱了肚子不叫娘的/人，/忘恩负义。/他/就是/那种",
    "ĐÁP ÁN": "他就是那种吃饱了肚子不叫娘的人，忘恩负义。",
    "PHIÊN ÂM": "Tā jiùshì nà zhǒng chī bǎo le dù zi bù jiào niáng de rén, wàng'ēnfùyì."
  },
  {
    "STT": 346,
    "SẮP XẾP CÂU": "他/会/记得/你的/好，/别/指望/吃饱了肚子不叫娘。/他",
    "ĐÁP ÁN": "别指望他会记得你的好，他吃饱了肚子不叫娘。",
    "PHIÊN ÂM": "Bié zhǐwàng tā huì jìde nǐ de hǎo, tā chī bǎo le dù zi bù jiào niáng."
  },
  {
    "STT": 347,
    "CHỮ": "C",
    "CỤM": "吃饱了就不认得大铁勺",
    "PINYIN": "chī bǎo le jiù bù rènde dà tiěsháo",
    "NGHĨA": "比喻情况好转就把有恩于己的人忘了。",
    "SẮP XẾP CÂU": "吃饱了就不认得大铁勺。/他/一/有钱/就/变了，/真是",
    "ĐÁP ÁN": "他一有钱就变了，真是吃饱了就不认得大铁勺。",
    "PHIÊN ÂM": "Tā yī yǒu qián jiù biàn le, zhēnshi chī bǎo le jiù bù rèn de dà tiě sháo."
  },
  {
    "STT": 348,
    "SẮP XẾP CÂU": "吃饱了就不认得大铁勺。/别/信/他的话，/他/这种/人/就是",
    "ĐÁP ÁN": "别信他的话，他这种人就是吃饱了就不认得大铁勺。",
    "PHIÊN ÂM": "Bié xìn tā de huà, tā zhè zhǒng rén jiùshì chī bǎo le jiù bù rèn de dà tiě sháo."
  },
  {
    "STT": 349,
    "CHỮ": "C",
    "CỤM": "吃饱了一家不饿,锁住门不悄锁死板凳",
    "PINYIN": "chī bǎo le yījiā bù è, suǒzhù mén bù qiāo suǒ sǐ bǎndèng",
    "NGHĨA": "指家里只有孤身一人(光棍汉)。也作“出了门不怕家里饿死小板凳”。",
    "SẮP XẾP CÂU": "吃饱了一家不饿,锁住门不悄锁死板凳。/他/只顾/自己，/真是",
    "ĐÁP ÁN": "他只顾自己，真是吃饱了一家不饿,锁住门不悄锁死板凳。",
    "PHIÊN ÂM": "Tā zhǐgù zìjǐ, zhēnshi chī bǎo le yī jiā bù è, suǒ zhù mén bù qiāo suǒ sǐ bǎn dèng."
  },
  {
    "STT": 350,
    "SẮP XẾP CÂU": "吃饱了一家不饿,锁住门不悄锁死板凳。/这种/自私的/行为，/就是",
    "ĐÁP ÁN": "这种自私的行为，就是吃饱了一家不饿,锁住门不悄锁死板凳。",
    "PHIÊN ÂM": "Zhè zhǒng zìsī de xíngwéi, jiùshì chī bǎo le yī jiā bù è, suǒ zhù mén bù qiāo suǒ sǐ bǎn dèng."
  },
  {
    "STT": 351,
    "CHỮ": "C",
    "CỤM": "吃豹子胆",
    "PINYIN": "chī bào zi dǎn",
    "NGHĨA": "比喻人的胆量非常大。",
    "SẮP XẾP CÂU": "吃豹子胆了。/他/竟敢/顶撞/老板，/真是",
    "ĐÁP ÁN": "他竟敢顶撞老板，真是吃了豹子胆了。",
    "PHIÊN ÂM": "Tā jìng gǎn dǐngzhuàng lǎobǎn, zhēnshi chī le bào zi dǎn le."
  },
  {
    "STT": 352,
    "SẮP XẾP CÂU": "吃豹子胆了，/敢/一个/人/去/那儿？/你",
    "ĐÁP ÁN": "你吃了豹子胆了，敢一个人去那儿？",
    "PHIÊN ÂM": "Nǐ chī le bào zi dǎn le, gǎn yī ge rén qù nà'er?"
  },
  {
    "STT": 353,
    "CHỮ": "C",
    "CỤM": "吃闭门羹",
    "PINYIN": "chī bì mén gēnɡ",
    "NGHĨA": "比喻串门时，主人不在家，被拒绝进门或受其他冷遇。",
    "SẮP XẾP CÂU": "吃闭门羹。/结果/我/去/拜访/他",
    "ĐÁP ÁN": "我去拜访他，结果吃了闭门羹。",
    "PHIÊN ÂM": "Wǒ qù bàifǎng tā, jiéguǒ chī le bì mén gēng."
  },
  {
    "STT": 354,
    "SẮP XẾP CÂU": "吃闭门羹，/真/尴尬。/第一/次/上门/就/被/吃了",
    "ĐÁP ÁN": "第一次上门就被吃了闭门羹，真尴尬。",
    "PHIÊN ÂM": "Dì yī cì shàngmén jiù bèi chī le bì mén gēng, zhēn gānggà."
  },
  {
    "STT": 355,
    "CHỮ": "C",
    "CỤM": "吃瘪子",
    "PINYIN": "chī biězi",
    "NGHĨA": "指遭受挫折或打击,处境窘迫、难堪。",
    "SẮP XẾP CÂU": "吃瘪子。/结果/却/他/想/占便宜",
    "ĐÁP ÁN": "他想占便宜，结果却吃了瘪子。",
    "PHIÊN ÂM": "Tā xiǎng zhàn piányi, jiéguǒ què chī le biě zi."
  },
  {
    "STT": 356,
    "SẮP XẾP CÂU": "吃瘪子。/我们/让/对手/这/次/交锋",
    "ĐÁP ÁN": "这次交锋，我们让对手吃了瘪子。",
    "PHIÊN ÂM": "Zhè cì jiāofēng, wǒmen ràng duìshǒu chī le biě zi."
  },
  {
    "STT": 357,
    "CHỮ": "C",
    "CỤM": "吃弊喽蟹，还嫌蟹不体贴",
    "PINYIN": "chī bìlou xiè, hái xián xiè bù tǐtiē",
    "NGHĨA": "甲鱼,俗称王八。常用来骂人。比喻从他人身上谋了利还要抱怨(含嘲讽义)。",
    "SẮP XẾP CÂU": "吃弊喽蟹，还嫌蟹不体贴。/他/得了/便宜/还/卖乖，/真是",
    "ĐÁP ÁN": "他得了便宜还卖乖，真是吃弊喽蟹，还嫌蟹不体贴。",
    "PHIÊN ÂM": "Tā dé le piányi hái màiguāi, zhēnshi chī bì lou xiè, hái xián xiè bù tǐ tiē."
  },
  {
    "STT": 358,
    "SẮP XẾP CÂU": "吃弊喽蟹，还嫌蟹不体贴，/不知足。/这种/人/就是",
    "ĐÁP ÁN": "这种人就是吃弊喽蟹，还嫌蟹不体贴，不知足。",
    "PHIÊN ÂM": "Zhè zhǒng rén jiùshì chī bì lou xiè, hái xián xiè bù tǐ tiē, bù zhīzú."
  },
  {
    "STT": 359,
    "CHỮ": "C",
    "CỤM": "吃不饱，穿不暖",
    "PINYIN": "chī bù bǎo, chuān bù nuǎn",
    "NGHĨA": "形容生活困难,温饱都无法解决。",
    "SẮP XẾP CÂU": "经常/吃不饱，穿不暖。/很苦/过去/的/日子",
    "ĐÁP ÁN": "过去的日子很苦，经常吃不饱，穿不暖。",
    "PHIÊN ÂM": "Guòqù de rìzi hěn kǔ, jīngcháng chī bù bǎo, chuān bù nuǎn."
  },
  {
    "STT": 360,
    "SẮP XẾP CÂU": "吃不饱，穿不暖。/战乱/年代，/都/老百姓们",
    "ĐÁP ÁN": "战乱年代，老百姓们都吃不饱，穿不暖。",
    "PHIÊN ÂM": "Zhànluàn niándài, lǎobǎixìngmen dōu chī bù bǎo, chuān bù nuǎn."
  },
  {
    "STT": 361,
    "CHỮ": "C",
    "CỤM": "吃不饱，饿不死",
    "PINYIN": "chī bù bǎo, è bù sǐ",
    "NGHĨA": "见“饿不死也撑不着”。",
    "SẮP XẾP CÂU": "没有/奔头。/就是吃不饱，饿不死，/这种/生活/状态",
    "ĐÁP ÁN": "这种生活状态就是吃不饱，饿不死，没有奔头。",
    "PHIÊN ÂM": "Zhè zhǒng shēnghuó zhuàngtài jiùshì chī bù bǎo, è bù sǐ, méiyǒu bèntou."
  },
  {
    "STT": 362,
    "SẮP XẾP CÂU": "吃不饱，饿不死。/也/算是/清贫，/虽然/日子/但",
    "ĐÁP ÁN": "虽然日子清贫，但也算是吃不饱，饿不死。",
    "PHIÊN ÂM": "Suīrán rìzi qīngpín, dàn yě suànshì chī bù bǎo, è bù sǐ."
  },
  {
    "STT": 363,
    "CHỮ": "C",
    "CỤM": "吃不好睡不好",
    "PINYIN": "chī bù hǎo shuì bù hǎo",
    "NGHĨA": "形容极度焦虑、担忧。也作“吃不好睡不香”。",
    "SẮP XẾP CÂU": "吃不好睡不好。/他/最近/压力/大，/弄/得/工作",
    "ĐÁP ÁN": "他最近工作压力大，弄得吃不好睡不好。",
    "PHIÊN ÂM": "Tā zuìjìn gōngzuò yālì dà, nòng de chī bù hǎo shuì bù hǎo."
  },
  {
    "STT": 364,
    "SẮP XẾP CÂU": "身体/越来越/差。/生病/后，/她/总是吃不好睡不好",
    "ĐÁP ÁN": "生病后，她总是吃不好睡不好，身体越来越差。",
    "PHIÊN ÂM": "Shēngbìng hòu, tā zǒngshì chī bù hǎo shuì bù hǎo, shēntǐ yuè lái yuè chà."
  },
  {
    "STT": 365,
    "CHỮ": "C",
    "CỤM": "吃不开",
    "PINYIN": "chī bu kāi",
    "NGHĨA": "不被周围的人接受或欢迎。",
    "SẮP XẾP CÂU": "脾气/太/坏，/他这个人/在/哪里/都吃不开",
    "ĐÁP ÁN": "他这个人脾气太坏，在哪里都吃不开。",
    "PHIÊN ÂM": "Tā zhège rén píqi tài huài, zài nǎlǐ dōu chī bu kāi."
  },
  {
    "STT": 366,
    "SẮP XẾP CÂU": "已经/吃不开了。/这种/老一套/的/做法，/现在",
    "ĐÁP ÁN": "这种老一套的做法，现在已经吃不开了。",
    "PHIÊN ÂM": "Zhè zhǒng lǎo yī tào de zuòfǎ, xiànzài yǐjīng chī bu kāi le."
  },
  {
    "STT": 367,
    "CHỮ": "C",
    "CỤM": "吃不了兜着走",
    "PINYIN": "chī bu liǎo dōu zhe zǒu",
    "NGHĨA": "指出了问题，要承担一切后果。",
    "SẮP XẾP CÂU": "吃不了兜着走吧。/你/要是/胡来，/就/敢/等着",
    "ĐÁP ÁN": "你要是敢胡来，就等着吃不了兜着走吧。",
    "PHIÊN ÂM": "Nǐ yàoshì gǎn húlái, jiù děngzhe chī bu liǎo dōu zhe zǒu ba."
  },
  {
    "STT": 368,
    "SẮP XẾP CÂU": "吃不了兜着走。/犯/了/这么/大/的/错误，/他/肯定/要",
    "ĐÁP ÁN": "犯了这么大的错误，他肯定要吃不了兜着走。",
    "PHIÊN ÂM": "Fàn le zhème dà de cuòwù, tā kěndìng yào chī bu liǎo dōu zhe zǒu."
  },
  {
    "STT": 369,
    "CHỮ": "C",
    "CỤM": "吃不上葡萄说葡萄酸",
    "PINYIN": "chī bù shàng pútao shuō pútao suān",
    "NGHĨA": "比喻得不到某人(或物)就开始说人家坏话。",
    "SẮP XẾP CÂU": "吃不上葡萄说葡萄酸。/他/自己/没/能力，/还",
    "ĐÁP ÁN": "他自己没能力，还吃不上葡萄说葡萄酸。",
    "PHIÊN ÂM": "Tā zìjǐ méi nénglì, hái chī bu shàng pú tao shuō pú tao suān."
  },
  {
    "STT": 370,
    "SẮP XẾP CÂU": "很/可笑。/就是吃不上葡萄说葡萄酸，/这种/行为",
    "ĐÁP ÁN": "这种行为就是吃不上葡萄说葡萄酸，很可笑。",
    "PHIÊN ÂM": "Zhè zhǒng xíngwéi jiùshì chī bu shàng pú tao shuō pú tao suān, hěn kěxiào."
  },
  {
    "STT": 371,
    "CHỮ": "C",
    "CỤM": "吃不透包的是什么馅",
    "PINYIN": "chī bù tòu bāo de shì shénme xiàn",
    "NGHĨA": "比喻弄不清对方的用意是什么。",
    "SẮP XẾP CÂU": "吃不透包的是什么馅。/他/心思/缜密，/让/人",
    "ĐÁP ÁN": "他心思缜密，让人吃不透包的是什么馅。",
    "PHIÊN ÂM": "Tā xīnsī zhěnmì, ràng rén chī bu tòu bāo de shì shénme xiàn."
  },
  {
    "STT": 372,
    "SẮP XẾP CÂU": "我/暂时/吃不透包的是什么馅。/这/件/事/很/复杂",
    "ĐÁP ÁN": "这件事很复杂，我暂时吃不透包的是什么馅。",
    "PHIÊN ÂM": "Zhè jiàn shì hěn fùzá, wǒ zànshí chī bu tòu bāo de shì shénme xiàn."
  },
  {
    "STT": 373,
    "CHỮ": "C",
    "CỤM": "吃不消",
    "PINYIN": "chī bu xiāo",
    "NGHĨA": "指经受不住; 难以承受; 忍耐不了。",
    "SẮP XẾP CÂU": "吃不消。/这/项/工作/强度/太大，/我/有点",
    "ĐÁP ÁN": "这项工作强度太大，我有点吃不消。",
    "PHIÊN ÂM": "Zhè xiàng gōngzuò qiángdù tài dà, wǒ yǒudiǎn chī bu xiāo."
  },
  {
    "STT": 374,
    "SẮP XẾP CÂU": "吃不消了。/他/年纪/大了，/身体",
    "ĐÁP ÁN": "他年纪大了，身体吃不消了。",
    "PHIÊN ÂM": "Tā niánjì dà le, shēntǐ chī bu xiāo le."
  },
  {
    "STT": 375,
    "CHỮ": "C",
    "CỤM": "吃不着肉有骨头啃",
    "PINYIN": "chī bù zháo ròu yǒu gǔtou kěn",
    "NGHĨA": "比喻虽然没有大利可图,但也得可得一些。",
    "SẮP XẾP CÂU": "吃不着肉有骨头啃，/不能/放弃。/即使/情况/再/糟，/也/要",
    "ĐÁP ÁN": "即使情况再糟，也要吃不着肉有骨头啃，不能放弃。",
    "PHIÊN ÂM": "Jíshǐ qíngkuàng zài zāo, yě yào chī bù zháo ròu yǒu gǔ tou kěn, bù néng fàngqì."
  },
  {
    "STT": 376,
    "SẮP XẾP CÂU": "总/比/没有/强。/穷日子/也/得/过，吃不着肉有骨头啃",
    "ĐÁP ÁN": "穷日子也得过，吃不着肉有骨头啃总比没有强。",
    "PHIÊN ÂM": "Qióng rìzi yě děi guò, chī bù zháo ròu yǒu gǔ tou kěn zǒng bǐ méiyǒu qiáng."
  },
  {
    "STT": 377,
    "CHỮ": "C",
    "CỤM": "吃不准",
    "PINYIN": "chī bu zhǔn",
    "NGHĨA": "感到没有把握。",
    "SẮP XẾP CÂU": "吃不准。/这/件/事/的/走向，/我/暂时/还",
    "ĐÁP ÁN": "这件事的走向，我暂时还吃不准。",
    "PHIÊN ÂM": "Zhè jiàn shì de zǒuxiàng, wǒ zànshí hái chī bu zhǔn."
  },
  {
    "STT": 378,
    "SẮP XẾP CÂU": "我/有点/吃不准。/他/到底/是/什么/意思",
    "ĐÁP ÁN": "他到底是什么意思，我有点吃不准。",
    "PHIÊN ÂM": "Tā dàodǐ shì shénme yìsi, wǒ yǒudiǎn chī bu zhǔn."
  },
  {
    "STT": 379,
    "CHỮ": "C",
    "CỤM": "吃醋",
    "PINYIN": "chī cù",
    "NGHĨA": "比喻因嫉妒而引起的不快情绪，形容爱嫉妒别人。多指因男女关系而妒忌、争吵。",
    "SẮP XẾP CÂU": "他/就吃醋了。/看到/别的/男生/和/女朋友/说话",
    "ĐÁP ÁN": "他看到女朋友和别的男生说话，就吃醋了。",
    "PHIÊN ÂM": "Tā kàndào nǚpéngyǒu hé bié de nánshēng shuōhuà, jiù chī cù le."
  },
  {
    "STT": 380,
    "SẮP XẾP CÂU": "很/无奈。/她/就吃醋，/让人/一点/小事",
    "ĐÁP ÁN": "她一点小事就吃醋，让人很无奈。",
    "PHIÊN ÂM": "Tā yī diǎn xiǎoshì jiù chī cù, ràng rén hěn wúnài."
  },
  {
    "STT": 381,
    "CHỮ": "C",
    "CỤM": "吃错药 ",
    "PINYIN": "chī cuò yào",
    "NGHĨA": "比喻说话办事有违常理。",
    "SẮP XẾP CÂU": "怎么了？/你/今天/是不是吃错药了",
    "ĐÁP ÁN": "你今天怎么了，是不是吃错药了？",
    "PHIÊN ÂM": "Nǐ jīntiān zěnme le, shì bu shì chī cuò yào le?"
  },
  {
    "STT": 382,
    "SẮP XẾP CÂU": "吃错药了/一样。/他/好像/说的话/颠三倒四",
    "ĐÁP ÁN": "他说的话颠三倒四，好像吃错药了一样。",
    "PHIÊN ÂM": "Tā shuō de huà diānsāndàosì, hǎoxiàng chī cuò yào le yīyàng."
  },
  {
    "STT": 383,
    "CHỮ": "C",
    "CỤM": "吃大锅饭",
    "PINYIN": "chī dà ɡuō fàn",
    "NGHĨA": "比喻企业不论盈亏，个人不分勤懒，全由国家包干的办法。",
    "SẮP XẾP CÂU": "以前/都/是吃大锅饭，/大家/没有/积极性",
    "ĐÁP ÁN": "以前大家都是吃大锅饭，没有积极性。",
    "PHIÊN ÂM": "Yǐqián dàjiā dōu shì chī dà guō fàn, méiyǒu jījíxìng."
  },
  {
    "STT": 384,
    "SẮP XẾP CÂU": "不利于/竞争。/这种吃大锅饭的/制度",
    "ĐÁP ÁN": "这种吃大锅饭的制度，不利于竞争。",
    "PHIÊN ÂM": "Zhè zhǒng chī dà guō fàn de zhìdù, bù lìyú jìngzhēng."
  },
  {
    "STT": 385,
    "CHỮ": "C",
    "CỤM": "吃得消",
    "PINYIN": "chī de xiāo",
    "NGHĨA": "能经受得住。",
    "SẮP XẾP CÂU": "没问题。/他吃得消，/这点/苦",
    "ĐÁP ÁN": "这点苦他吃得消，没问题。",
    "PHIÊN ÂM": "Zhè diǎn kǔ tā chī de xiāo, méi wèntí."
  },
  {
    "STT": 386,
    "SẮP XẾP CÂU": "肯定吃不消。/身体/几天/连续/熬夜",
    "ĐÁP ÁN": "连续熬夜几天，身体肯定吃不消。",
    "PHIÊN ÂM": "Liánxù áoyè jǐ tiān, shēntǐ kěndìng chī bu xiāo."
  },
  {
    "STT": 387,
    "CHỮ": "C",
    "CỤM": "吃独食",
    "PINYIN": "chī dú shí",
    "NGHĨA": "有东西自己一个人吃，不给别人。比喻有好处自己一个人享用，不与别人分享。",
    "SẮP XẾP CÂU": "不/和/大家/分享。/他/喜欢吃独食，/总是",
    "ĐÁP ÁN": "他总是喜欢吃独食，不和大家分享。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chī dú shí, bù hé dàjiā fēnxiǎng."
  },
  {
    "STT": 388,
    "SẮP XẾP CÂU": "懂得/分享。/要/别想吃独食",
    "ĐÁP ÁN": "别想吃独食，要懂得分享。",
    "PHIÊN ÂM": "Bié xiǎng chī dú shí, yào dǒngde fēnxiǎng."
  },
  {
    "STT": 389,
    "CHỮ": "C",
    "CỤM": "吃官司",
    "PINYIN": "chī ɡuān si",
    "NGHĨA": "旧时指被控告、受处罚或者关进监狱。",
    "SẮP XẾP CÂU": "吃官司。/他/最后/因为/非法/经营，/吃了",
    "ĐÁP ÁN": "他因为非法经营，最后吃了官司。",
    "PHIÊN ÂM": "Tā yīnwèi fēifǎ jīngyíng, zuìhòu chī le guān si."
  },
  {
    "STT": 390,
    "SẮP XẾP CÂU": "要吃官司的。/别/做/违法/的/事情，/不然",
    "ĐÁP ÁN": "别做违法的事情，不然要吃官司的。",
    "PHIÊN ÂM": "Bié zuò wéifǎ de shìqíng, bùrán yào chī guān si de."
  },
  {
    "STT": 391,
    "CHỮ": "C",
    "CỤM": "吃后悔药",
    "PINYIN": "chī hòu huǐ yào",
    "NGHĨA": "比喻事后懊悔。",
    "SẮP XẾP CÂU": "没/用/了。/事已至此，/吃后悔药也",
    "ĐÁP ÁN": "事已至此，吃后悔药也没用了。",
    "PHIÊN ÂM": "Shì yǐ zhìcǐ, chī hòu huǐ yào yě méi yòng le."
  },
  {
    "STT": 392,
    "SẮP XẾP CÂU": "也/来不及了。/当初/不听/劝，/现在/想吃后悔药",
    "ĐÁP ÁN": "当初不听劝，现在想吃后悔药也来不及了。",
    "PHIÊN ÂM": "Dāngchū bù tīng quàn, xiànzài xiǎng chī hòu huǐ yào yě lái bu jí le."
  },
  {
    "STT": 393,
    "CHỮ": "C",
    "CỤM": "吃皇粮",
    "PINYIN": "chī huánɡ liánɡ",
    "NGHĨA": "比喻为国家工作，依靠国家给予薪俸生活。",
    "SẮP XẾP CÂU": "吃皇粮了。/他/考上/了/公务员，/算是",
    "ĐÁP ÁN": "他考上了公务员，算是吃皇粮了。",
    "PHIÊN ÂM": "Tā kǎo shàng le gōngwùyuán, suànshì chī huáng liáng le."
  },
  {
    "STT": 394,
    "SẮP XẾP CÂU": "旱涝/保收。/很多/人都/羡慕/他/能吃皇粮",
    "ĐÁP ÁN": "很多人都羡慕他能吃皇粮，旱涝保收。",
    "PHIÊN ÂM": "Hěn duō rén dōu xiànmù tā néng chī huáng liáng, hànlào bǎoshōu."
  },
  {
    "STT": 395,
    "CHỮ": "C",
    "CỤM": "吃老本",
    "PINYIN": "chī lǎo běn",
    "NGHĨA": "比喻依赖原有的知识﹑本领或功劳过日子，没有新的贡献。",
    "SẮP XẾP CÂU": "没有/创新。/他/就/一直吃老本，/自从/成功后",
    "ĐÁP ÁN": "他自从成功后就一直吃老本，没有创新。",
    "PHIÊN ÂM": "Tā zìcóng chénggōng hòu jiù yīzhí chī lǎo běn, méiyǒu chuàngxīn."
  },
  {
    "STT": 396,
    "SẮP XẾP CÂU": "要/不断/发展。/企业/不能/光吃老本",
    "ĐÁP ÁN": "企业不能光吃老本，要不断发展。",
    "PHIÊN ÂM": "Qǐyè bù néng guāng chī lǎo běn, yào bùduàn fāzhǎn."
  },
  {
    "STT": 397,
    "CHỮ": "C",
    "CỤM": "吃枪药",
    "PINYIN": "chī qiānɡ yào",
    "NGHĨA": "比喻说话时态度生硬或火气大。",
    "SẮP XẾP CÂU": "脾气/这么/暴躁。/他/今天/怎么吃枪药了",
    "ĐÁP ÁN": "他今天怎么吃枪药了，脾气这么暴躁。",
    "PHIÊN ÂM": "Tā jīntiān zěnme chī qiāng yào le, píqi zhème bàozào."
  },
  {
    "STT": 398,
    "SẮP XẾP CÂU": "吃枪药一样。/别/惹/他，/他/好像",
    "ĐÁP ÁN": "别惹他，他好像吃了枪药一样。",
    "PHIÊN ÂM": "Bié rě tā, tā hǎoxiàng chī le qiāng yào yīyàng."
  },
  {
    "STT": 399,
    "CHỮ": "C",
    "CỤM": "吃青春饭",
    "PINYIN": "chī qīnɡ chūn fàn",
    "NGHĨA": "从事只能给年轻人做的职业。",
    "SẮP XẾP CÂU": "比较/短。/都吃青春饭，/生涯/很多/模特/职业",
    "ĐÁP ÁN": "很多模特都吃青春饭，职业生涯比较短。",
    "PHIÊN ÂM": "Hěn duō mótè dōu chī qīng chūn fàn, zhíyè shēngyá bǐjiào duǎn."
  },
  {
    "STT": 400,
    "SẮP XẾP CÂU": "吃青春饭，/越老/越/吃香。/医生/这个/行业/不是",
    "ĐÁP ÁN": "医生这个行业不是吃青春饭，越老越吃香。",
    "PHIÊN ÂM": "Yīshēng zhège hángyè bù shì chī qīng chūn fàn, yuè lǎo yuè chīxiāng."
  },
  {
    "STT": 401,
    "CHỮ": "C",
    "CỤM": "吃透",
    "PINYIN": "chī tòu",
    "NGHĨA": "捉摸透; 了解透彻。",
    "SẮP XẾP CÂU": "回答/得/这么好。/这份 / 彻底吃透了，/ 他把 /文件/所以/才能",
    "ĐÁP ÁN": "他把这份文件彻底吃透了，所以才能回答得这么好。",
    "PHIÊN ÂM": "Tā bǎ zhè fèn wénjiàn chèdǐ chī tòu le, suǒyǐ cái néng huídá de zhème hǎo."
  },
  {
    "STT": 402,
    "SẮP XẾP CÂU": "实践。/更好地/才能/只有/把/理论/知识吃透，/应用于",
    "ĐÁP ÁN": "只有把理论知识吃透，才能更好地应用于实践。",
    "PHIÊN ÂM": "Zhǐyǒu bǎ lǐlùn zhīshi chī tòu, cái néng gèng hǎo de yìngyú shíjiàn."
  },
  {
    "STT": 403,
    "CHỮ": "C",
    "CỤM": "吃西北风",
    "PINYIN": "chī xī běi fēnɡ",
    "NGHĨA": "比喻没有东西吃，挨饿; 或者闲着没事干，没有收入。也叫喝西北风。",
    "SẮP XẾP CÂU": "没/找/到/工作，/失业/后/一直/他/只能吃西北风",
    "ĐÁP ÁN": "他失业后一直没找到工作，只能吃西北风。",
    "PHIÊN ÂM": "Tā shīyè hòu yīzhí méi zhǎodào gōngzuò, zhǐ néng chī xī běi fēng."
  },
  {
    "STT": 404,
    "SẮP XẾP CÂU": "要吃西北风了。/再不 /我们/ 就 /努力，/如果",
    "ĐÁP ÁN": "如果再不努力，我们就要吃西北风了。",
    "PHIÊN ÂM": "Rúguǒ zài bù nǔlì, wǒmen jiù yào chī xī běi fēng le."
  },
  {
    "STT": 405,
    "CHỮ": "C",
    "CỤM": "吃香",
    "PINYIN": "chī xiānɡ",
    "NGHĨA": "指受重视; 到处受人欢迎。",
    "SẮP XẾP CÂU": "哪里/都吃香。/人缘/也/好，/他/性格/好，/在",
    "ĐÁP ÁN": "他性格好，人缘也好，在哪里都吃香。",
    "PHIÊN ÂM": "Tā xìnggé hǎo, rényuán yě hǎo, zài nǎlǐ dōu chī xiāng."
  },
  {
    "STT": 406,
    "SẮP XẾP CÂU": "供/不/应/求。/很吃香，/这种/技术/人才/现在",
    "ĐÁP ÁN": "这种技术人才现在很吃香，供不应求。",
    "PHIÊN ÂM": "Zhè zhǒng jìshù réncái xiànzài hěn chī xiāng, gōng bù yìng qiú."
  },
  {
    "STT": 407,
    "CHỮ": "C",
    "CỤM": "吃小灶",
    "PINYIN": "chī xiǎo zào",
    "NGHĨA": "比喻享受到特殊照顾。",
    "SẮP XẾP CÂU": "吃小灶。/他/是/领导/的/亲戚，/所以/总/能",
    "ĐÁP ÁN": "他是领导的亲戚，所以总能吃小灶。",
    "PHIÊN ÂM": "Tā shì lǐngdǎo de qīnqi, suǒyǐ zǒng néng chī xiǎo zào."
  },
  {
    "STT": 408,
    "SẮP XẾP CÂU": "得靠/自己/努力。/一切/ 都 /别/指望吃小灶，",
    "ĐÁP ÁN": "别指望吃小灶，一切都得靠自己努力。",
    "PHIÊN ÂM": "Bié zhǐwàng chī xiǎo zào, yīqiè dōu děi kào zìjǐ nǔlì."
  },
  {
    "STT": 409,
    "CHỮ": "C",
    "CỤM": "吃一堑，长一智",
    "PINYIN": "chī yī qiàn，zhǎnɡ yī zhì",
    "NGHĨA": "受一次挫折，增长一分见识。",
    "SẮP XẾP CÂU": "吃一堑，长一智嘛。/不/可怕/ 并 /失败",
    "ĐÁP ÁN": "失败并不可怕，吃一堑，长一智嘛。",
    "PHIÊN ÂM": "Shībài bìng bù kěpà, chī yī qiàn, zhǎng yī zhì ma."
  },
  {
    "STT": 410,
    "SẮP XẾP CÂU": "吃一堑，长一智了。/他/ 这次教训，/ 算是 /经过",
    "ĐÁP ÁN": "经过这次教训，他算是吃一堑，长一智了。",
    "PHIÊN ÂM": "Jīngguò zhè cì jiàoxùn, tā suànshì chī yī qiàn, zhǎng yī zhì le."
  },
  {
    "STT": 411,
    "CHỮ": "C",
    "CỤM": "丑八怪",
    "PINYIN": "chǒu bā ɡuài",
    "NGHĨA": "指非常难看的人。",
    "SẮP XẾP CÂU": "躲着/他。/都/大家/像个丑八怪，/长得 / 他",
    "ĐÁP ÁN": "他长得像个丑八怪，大家都躲着他。",
    "PHIÊN ÂM": "Tā zhǎng de xiàng ge chǒu bā guài, dàjiā dōu duǒzhe tā."
  },
  {
    "STT": 412,
    "SẮP XẾP CÂU": "不/礼貌的。/别/用丑八怪来/形容/别人，/这是",
    "ĐÁP ÁN": "别用丑八怪来形容别人，这是不礼貌的。",
    "PHIÊN ÂM": "Bié yòng chǒu bā guài lái xíngróng biérén, zhè shì bù lǐmào de."
  },
  {
    "STT": 413,
    "CHỮ": "C",
    "CỤM": "丑小鸭",
    "PINYIN": "chǒu xiǎo yā",
    "NGHĨA": "不为人知的人，或不被别人重视的人。",
    "SẮP XẾP CÂU": "丑小鸭，/变成/了/白天鹅。/她/ 小时候 / 是个 / 长大 /后却",
    "ĐÁP ÁN": "她小时候是个丑小鸭，长大后却变成了白天鹅。",
    "PHIÊN ÂM": "Tā xiǎoshíhou shì ge chǒu xiǎo yā, zhǎngdà hòu què biànchéng le báitiān'é."
  },
  {
    "STT": 414,
    "SẮP XẾP CÂU": "丑小鸭都/有/变成/白天鹅/的/潜力。/每个",
    "ĐÁP ÁN": "每个丑小鸭都有变成白天鹅的潜力。",
    "PHIÊN ÂM": "Měi ge chǒu xiǎo yā dōu yǒu biànchéng báitiān'é de qiánlì."
  },
  {
    "STT": 415,
    "CHỮ": "C",
    "CỤM": "出岔子",
    "PINYIN": "chū chà zi",
    "NGHĨA": "比喻发生差错或事故。",
    "SẮP XẾP CÂU": "出岔子，/否则/后果/ 这次任务 / 不堪设想。/千万/不能",
    "ĐÁP ÁN": "这次任务千万不能出岔子，否则后果不堪设想。",
    "PHIÊN ÂM": "Zhè cì rènwù qiānwàn bù néng chū chà zi, fǒuzé hòuguǒ bùkān xiǎngxiàng."
  },
  {
    "STT": 416,
    "SẮP XẾP CÂU": "出岔子。/才没/及时/发现，/幸好",
    "ĐÁP ÁN": "幸好及时发现，才没出岔子。",
    "PHIÊN ÂM": "Xìnghǎo jíshí fāxiàn, cái méi chū chà zi."
  },
  {
    "STT": 417,
    "CHỮ": "C",
    "CỤM": "出风头",
    "PINYIN": "chū fēnɡ tóu",
    "NGHĨA": "比喻出头露面，显示自己。",
    "SẮP XẾP CÂU": "出风头，/小事/都/ 总是/ 要/炫耀。/ 他 /喜欢/一点",
    "ĐÁP ÁN": "他总是喜欢出风头，一点小事都要炫耀。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chū fēng tóu, yī diǎn xiǎoshì dōu yào xuànyào."
  },
  {
    "STT": 418,
    "SẮP XẾP CÂU": "多做点/ 老想 / 实事。/别/ 着出风头",
    "ĐÁP ÁN": "别老想着出风头，多做点实事。",
    "PHIÊN ÂM": "Bié lǎo xiǎngzhe chū fēng tóu, duō zuò diǎn shíshì."
  },
  {
    "STT": 419,
    "CHỮ": "C",
    "CỤM": "出花样",
    "PINYIN": "chū huā yàng",
    "NGHĨA": "耍花招迷惑或欺骗人。",
    "SẮP XẾP CÂU": "搞得/措手不及。/他/大家/总是/喜欢出花样",
    "ĐÁP ÁN": "他总是喜欢出花样，搞得大家措手不及。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chū huā yàng, gǎo de dàjiā cuòshǒubùjí."
  },
  {
    "STT": 420,
    "SẮP XẾP CÂU": "出花样了，/ 规矩 / 办事/别再/按",
    "ĐÁP ÁN": "别再出花样了，按规矩办事。",
    "PHIÊN ÂM": "Bié zài chū huā yàng le, àn guīju bànshì."
  },
  {
    "STT": 421,
    "CHỮ": "C",
    "CỤM": "出乱子",
    "PINYIN": "chū luàn zi",
    "NGHĨA": "出现事故、差错或纠纷。",
    "SẮP XẾP CÂU": "出乱子，/谁/ 要是 / 都/承担不起。/这件事 /出了",
    "ĐÁP ÁN": "这件事要是出了乱子，谁都承担不起。",
    "PHIÊN ÂM": "Zhè jiàn shì yàoshì chū le luàn zi, shéi dōu chéngdān bù qǐ."
  },
  {
    "STT": 422,
    "SẮP XẾP CÂU": "出乱子的。/会/不然/别/瞎/指挥",
    "ĐÁP ÁN": "别瞎指挥，不然会出乱子的。",
    "PHIÊN ÂM": "Bié xiā zhīhuī, bùrán huì chū luàn zi de."
  },
  {
    "STT": 423,
    "CHỮ": "C",
    "CỤM": "出难题",
    "PINYIN": "chū nán tí",
    "NGHĨA": "给学生出不容易解答的问题。比喻提出使人为难或难办的事情。",
    "SẮP XẾP CÂU": "出难题，/考验/我们/的/能力。/老师/总是/喜欢",
    "ĐÁP ÁN": "老师总是喜欢出难题，考验我们的能力。",
    "PHIÊN ÂM": "Lǎoshī zǒngshì xǐhuan chū nán tí, kǎoyàn wǒmen de nénglì."
  },
  {
    "STT": 424,
    "SẮP XẾP CÂU": "没/及格。/这次/考试/出/了难题，/很多/人都",
    "ĐÁP ÁN": "这次考试出了难题，很多人都没及格。",
    "PHIÊN ÂM": "Zhè cì kǎoshì chū le nán tí, hěn duō rén dōu méi jíɡé."
  },
  {
    "STT": 425,
    "CHỮ": "C",
    "CỤM": "出气筒",
    "PINYIN": "chū qì tǒnɡ",
    "NGHĨA": "比喻无故做别人发泄怨愤对象的人。",
    "SẮP XẾP CÂU": "出气筒。/他/心情/不好，/当成/我/把",
    "ĐÁP ÁN": "他心情不好，把我当成出气筒。",
    "PHIÊN ÂM": "Tā xīnqíng bù hǎo, bǎ wǒ dàngchéng chū qì tǒng."
  },
  {
    "STT": 426,
    "SẮP XẾP CÂU": "别把/ 当成/别人/ 自己/ 的出气筒",
    "ĐÁP ÁN": "别把自己当成别人的出气筒。",
    "PHIÊN ÂM": "Bié bǎ zìjǐ dàngchéng biérén de chū qì tǒng."
  },
  {
    "STT": 427,
    "CHỮ": "C",
    "CỤM": "出洋相",
    "PINYIN": "chū yánɡ xiànɡ",
    "NGHĨA": "(1) 指因粗心大意或缺乏知识或经验而发生可笑的错误。\r\n(2) 捉弄耍笑使人露出丑相，使人难堪、丢脸。",
    "SẮP XẾP CÂU": "让人/ 很尴尬。/他在 / 出洋相 / 会上",
    "ĐÁP ÁN": "他在会上出洋相，让人很尴尬。",
    "PHIÊN ÂM": "Tā zài huì shàng chū yáng xiàng, ràng rén hěn gānggà."
  },
  {
    "STT": 428,
    "SẮP XẾP CÂU": "出洋相了，/别再/注意/形象",
    "ĐÁP ÁN": "别再出洋相了，注意形象。",
    "PHIÊN ÂM": "Bié zài chū yáng xiàng le, zhùyì xíngxiàng."
  },
  {
    "STT": 429,
    "CHỮ": "C",
    "CỤM": "穿连裆裤",
    "PINYIN": "chuān lián dānɡ kù",
    "NGHĨA": "比喻臭味相投的人联合在一起。也说“穿一条裤子”。",
    "SẮP XẾP CÂU": "谁也/ 他们俩/分不开。/ 总是 / 穿连裆裤",
    "ĐÁP ÁN": "他们俩总是穿连裆裤，谁也分不开。",
    "PHIÊN ÂM": "Tāmen liǎng liǎ zǒngshì chuān lián dāng kù, shuí yě fēn bu kāi."
  },
  {
    "STT": 430,
    "SẮP XẾP CÂU": "穿连裆裤。/ 既然/ 就得/决定/要/合作",
    "ĐÁP ÁN": "既然决定要合作，就得穿连裆裤。",
    "PHIÊN ÂM": "Jìrán juédìng yào hézuò, jiù děi chuān lián dāng kù."
  },
  {
    "STT": 431,
    "CHỮ": "C",
    "CỤM": "穿小鞋",
    "PINYIN": "chuān xiǎo xié",
    "NGHĨA": "比喻故意刁难。",
    "SẮP XẾP CÂU": "穿小鞋。/他 / 因为 / 领导，/ 得罪了/ 所以/总被",
    "ĐÁP ÁN": "他因为得罪了领导，所以总被穿小鞋。",
    "PHIÊN ÂM": "Tā yīnwèi dézuì le lǐngdǎo, suǒyǐ zǒng bèi chuān xiǎo xié."
  },
  {
    "STT": 432,
    "SẮP XẾP CÂU": "穿小鞋，/坚持/自己/的/原则。/别怕 /被",
    "ĐÁP ÁN": "别怕被穿小鞋，坚持自己的原则。",
    "PHIÊN ÂM": "Bié pà bèi chuān xiǎo xié, jiānchí zìjǐ de yuánzé."
  },
  {
    "STT": 433,
    "CHỮ": "C",
    "CỤM": "闯红灯",
    "PINYIN": "chuǎnɡ hónɡ dēnɡ",
    "NGHĨA": "比喻无视纪律、制度、原则的限制，做不该做的事情。",
    "SẮP XẾP CÂU": "闯红灯。/千万/不要/ 的行为 / 做。/是/很危险",
    "ĐÁP ÁN": "闯红灯是很危险的行为，千万不要做。",
    "PHIÊN ÂM": "Chuǎng hóng dēng shì hěn wēixiǎn de xíngwéi, qiānwàn bù yào zuò."
  },
  {
    "STT": 434,
    "SẮP XẾP CÂU": "被/交警/罚款了。/ 因为闯红灯 /他",
    "ĐÁP ÁN": "他因为闯红灯，被交警罚款了。",
    "PHIÊN ÂM": "Tā yīnwèi chuǎng hóng dēng, bèi jiāojǐng fákuǎn le."
  },
  {
    "STT": 435,
    "CHỮ": "C",
    "CỤM": "闯江湖",
    "PINYIN": "chuǎnɡ jiānɡ hú",
    "NGHĨA": "旧时指奔走四方，流浪谋生，从事算卦、表演杂\r\n耍、卖药治病等职业。江湖，泛指四方各地。\r\n也说“闯荡江湖”。",
    "SẮP XẾP CÂU": "闯江湖，/ 年轻时/ 见多识广。/ 他 /就",
    "ĐÁP ÁN": "他年轻时就闯江湖，见多识广。",
    "PHIÊN ÂM": "Tā niánqīng shí jiù chuǎng jiāng hú, jiànduō shíguǎng."
  },
  {
    "STT": 436,
    "SẮP XẾP CÂU": "闯江湖需要/ 勇气 / 智慧。/和",
    "ĐÁP ÁN": "闯江湖需要勇气和智慧。",
    "PHIÊN ÂM": "Chuǎng jiāng hú xūyào yǒngqì hé zhìhuì."
  },
  {
    "STT": 437,
    "CHỮ": "C",
    "CỤM": "吹胡子瞪眼",
    "PINYIN": "chuī hú zi dènɡ yǎn",
    "NGHĨA": "比喻人发脾气时凶狠的样子。",
    "SẮP XẾP CÂU": "吹胡子瞪眼，/一生气/ 很/吓人。/ 爸爸 /就",
    "ĐÁP ÁN": "爸爸一生气就吹胡子瞪眼，很吓人。",
    "PHIÊN ÂM": "Bàba yī shēngqì jiù chuī hú zi dèng yǎn, hěn xiàrén."
  },
  {
    "STT": 438,
    "SẮP XẾP CÂU": "别老/ 要耐心。/ 对着/孩子吹胡子瞪眼",
    "ĐÁP ÁN": "别老对着孩子吹胡子瞪眼，要耐心。",
    "PHIÊN ÂM": "Bié lǎo duìzhe háizi chuī hú zi dèng yǎn, yào nàixīn."
  },
  {
    "STT": 439,
    "CHỮ": "C",
    "CỤM": "吹牛皮",
    "PINYIN": "chuī niú pí",
    "NGHĨA": "指吹牛，说大话。",
    "SẮP XẾP CÂU": "总是 / 吹牛皮，/说/大话。/ 他 /喜欢",
    "ĐÁP ÁN": "他总是喜欢吹牛皮，说大话。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan chuī niú pí, shuō dàhuà."
  },
  {
    "STT": 440,
    "SẮP XẾP CÂU": "吹牛皮，/他/根本/ 本事。/别/ 没那个/ 听他",
    "ĐÁP ÁN": "别听他吹牛皮，他根本没那个本事。",
    "PHIÊN ÂM": "Bié tīng tā chuī niú pí, tā gēnběn méi nà ge běnshì."
  },
  {
    "STT": 441,
    "CHỮ": "D",
    "CỤM": "打白条",
    "PINYIN": "dǎ bái tiáo",
    "NGHĨA": "特指只给欠条、不给现金的做法。",
    "SẮP XẾP CÂU": "他/不/是/个/很/讲/信用/的/人。/借钱/从/不打白条",
    "ĐÁP ÁN": "他借钱从不打白条，是个很讲信用的人。",
    "PHIÊN ÂM": "Tā jièqián cóng bù dǎ bái tiáo, shì ge hěn jiǎng xìnyòng de rén."
  },
  {
    "STT": 442,
    "SẮP XẾP CÂU": "资金/紧张，/公司/经常打白条",
    "ĐÁP ÁN": "公司资金紧张，经常打白条。",
    "PHIÊN ÂM": "Gōngsī zījīn jǐnzhāng, jīngcháng dǎ bái tiáo."
  },
  {
    "STT": 443,
    "CHỮ": "D",
    "CỤM": "打板子",
    "PINYIN": "dǎ bǎn zi",
    "NGHĨA": "比喻打屁股。",
    "SẮP XẾP CÂU": "了。/他/错误，/被/领导打板子",
    "ĐÁP ÁN": "他犯了错误，被领导打板子了。",
    "PHIÊN ÂM": "Tā fàn le cuòwù, bèi lǐngdǎo dǎ bǎn zi le."
  },
  {
    "STT": 444,
    "SẮP XẾP CÂU": "不然/要打板子的。/听话，/别不",
    "ĐÁP ÁN": "别不听话，不然要打板子的。",
    "PHIÊN ÂM": "Bié bù tīnghuà, bùrán yào dǎ bǎn zi de."
  },
  {
    "STT": 445,
    "CHỮ": "D",
    "CỤM": "打包票",
    "PINYIN": "dǎ bāo piào",
    "NGHĨA": "比喻保证。也说“打保票”",
    "SẮP XẾP CÂU": "没问题。/这/件/事/我/能打包票，/肯定",
    "ĐÁP ÁN": "这件事我能打包票，肯定没问题。",
    "PHIÊN ÂM": "Zhè jiàn shì wǒ néng dǎ bāo piào, kěndìng méi wèntí."
  },
  {
    "STT": 446,
    "SẮP XẾP CÂU": "兑现。/他/ 喜欢打包票，/总是 /但 /很少",
    "ĐÁP ÁN": "他总是喜欢打包票，但很少兑现。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan dǎ bāo piào, dàn hěn shǎo duìxiàn."
  },
  {
    "STT": 447,
    "CHỮ": "D",
    "CỤM": "大草包",
    "PINYIN": "dà cǎo bāo",
    "NGHĨA": "比喻没有才能的人。",
    "SẮP XẾP CÂU": "什么/事/都/办/不好。/他/就是/个大草包",
    "ĐÁP ÁN": "他就是个大草包，什么事都办不好。",
    "PHIÊN ÂM": "Tā jiùshì ge dà cǎo bāo, shénme shì dōu bàn bù hǎo."
  },
  {
    "STT": 448,
    "SẮP XẾP CÂU": "他/是/个大草包。/别/指望/他 /能 /帮上忙",
    "ĐÁP ÁN": "别指望他能帮上忙，他是个大草包。",
    "PHIÊN ÂM": "Bié zhǐwàng tā néng bāng shàng máng, tā shì ge dà cǎo bāo."
  },
  {
    "STT": 449,
    "CHỮ": "D",
    "CỤM": "打第一炮",
    "PINYIN": "dǎ dì yī pào",
    "NGHĨA": "就是第一个发言，第一个讲话。也说“打头阵”、“打头炮”。",
    "SẮP XẾP CÂU": "表现/得很/ 这次活动 /出色。/ 他打第一炮",
    "ĐÁP ÁN": "这次活动他打第一炮，表现得很出色。",
    "PHIÊN ÂM": "Zhè cì huódòng tā dǎ dì yī pào, biǎoxiàn de hěn chūsè."
  },
  {
    "STT": 450,
    "SẮP XẾP CÂU": "决定/ 的/成败。/谁/来打第一炮 / 这次行动",
    "ĐÁP ÁN": "谁来打第一炮，决定这次行动的成败。",
    "PHIÊN ÂM": "Shuí lái dǎ dì yī pào, juédìng zhè cì xíngdòng de chéngbài."
  },
  {
    "STT": 451,
    "CHỮ": "D",
    "CỤM": "打掉牙齿往肚里咽",
    "PINYIN": "dǎ diào yá chǐ wǎnɡ dù lǐ yàn",
    "NGHĨA": "因理亏等原因，受委屈，而不声张。",
    "SẮP XẾP CÂU": "打掉牙齿往肚里咽。/ 受了/ 尽管 /委屈，/他/还是",
    "ĐÁP ÁN": "尽管受了委屈，他还是打掉牙齿往肚里咽。",
    "PHIÊN ÂM": "Jǐnguǎn shòu le wěiqu, tā háishì dǎ diào yá chǐ wǎng dù lǐ yàn."
  },
  {
    "STT": 452,
    "SẮP XẾP CÂU": "有些苦/ 为了/只能打掉牙齿往肚里咽。/ 大局",
    "ĐÁP ÁN": "为了大局，有些苦只能打掉牙齿往肚里咽。",
    "PHIÊN ÂM": "Wèile dàjú, yǒuxiē kǔ zhǐ néng dǎ diào yá chǐ wǎng dù lǐ yàn."
  },
  {
    "STT": 453,
    "CHỮ": "D",
    "CỤM": "打底子",
    "PINYIN": "dǎ dǐzi",
    "NGHĨA": "比喻打好基础，做好准备。",
    "SẮP XẾP CÂU": "打底子开始。/学好/英语/ 要从",
    "ĐÁP ÁN": "学好英语要从打底子开始。",
    "PHIÊN ÂM": "Xué hǎo Yīngyǔ yào cóng dǎ dǐ zi kāishǐ."
  },
  {
    "STT": 454,
    "SẮP XẾP CÂU": "才能/更好/ 工作。/身体/ 底子好 / 地应对 ",
    "ĐÁP ÁN": "身体底子好，才能更好地应对工作。",
    "PHIÊN ÂM": "Shēntǐ dǐ zi hǎo, cái néng gèng hǎo de yìngduì gōngzuò."
  },
  {
    "STT": 455,
    "CHỮ": "D",
    "CỤM": "打腹稿",
    "PINYIN": "dǎ fù ɡǎo",
    "NGHĨA": "比喻在心里先形成一个提纲。",
    "SẮP XẾP CÂU": "都会/先打腹稿。/每次/写/文章/前，/他",
    "ĐÁP ÁN": "每次写文章前，他都会先打腹稿。",
    "PHIÊN ÂM": "Měi cì xiě wénzhāng qián, tā dōu huì xiān dǎ fù gǎo."
  },
  {
    "STT": 456,
    "SẮP XẾP CÂU": "已经打腹稿了，/你就/放心/吧。/这件事/他",
    "ĐÁP ÁN": "这件事他已经打好腹稿了，你就放心吧。",
    "PHIÊN ÂM": "Zhè jiàn shì tā yǐjīng dǎ hǎo fù gǎo le, nǐ jiù fàngxīn ba."
  },
  {
    "STT": 457,
    "CHỮ": "D",
    "CỤM": "打官腔",
    "PINYIN": "dǎ guān qiāng",
    "NGHĨA": "比喻利用规章、手续等来推托或责备，不解决实际问题。官腔，指旧 时官场中说的门面话。",
    "SẮP XẾP CÂU": "总是/喜欢打官腔，/说/些/套话。/他",
    "ĐÁP ÁN": "他总是喜欢打官腔，说些套话。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan dǎ guān qiāng, shuō xiē tàohuà."
  },
  {
    "STT": 458,
    "SẮP XẾP CÂU": "直接/ 别跟/ 说重点。/ 他打官腔",
    "ĐÁP ÁN": "别跟他打官腔，直接说重点。",
    "PHIÊN ÂM": "Bié gēn tā dǎ guān qiāng, zhíjiē shuō zhòngdiǎn."
  },
  {
    "STT": 459,
    "CHỮ": "D",
    "CỤM": "打光棍",
    "PINYIN": "dǎ ɡuānɡ ɡùn",
    "NGHĨA": "指男人不结婚。",
    "SẮP XẾP CÂU": "打光棍。/他/一直/ 还在 / 忙于事业，/到现在",
    "ĐÁP ÁN": "他一直忙于事业，到现在还在打光棍。",
    "PHIÊN ÂM": "Tā yīzhí mángyú shìyè, dào xiànzài hái zài dǎ guāng gùn."
  },
  {
    "STT": 460,
    "SẮP XẾP CÂU": "打光棍。/ 的玩笑，/ 别开/他 /他/是/不想",
    "ĐÁP ÁN": "别开他的玩笑，他是不想打光棍。",
    "PHIÊN ÂM": "Bié kāi tā de wánxiào, tā shì bù xiǎng dǎ guāng gùn."
  },
  {
    "STT": 461,
    "CHỮ": "D",
    "CỤM": "打哈哈",
    "PINYIN": "dǎ hā hā",
    "NGHĨA": "比喻顾左右而言他，故意说别的事情。",
    "SẮP XẾP CÂU": "总是/喜欢打哈哈。/他这个人/很/随和",
    "ĐÁP ÁN": "他这个人很随和，总是喜欢打哈哈。",
    "PHIÊN ÂM": "Tā zhège rén hěn suíhe, zǒngshì xǐhuan dǎ hā hā."
  },
  {
    "STT": 462,
    "SẮP XẾP CÂU": "尴尬/场面，/他/就/会打哈哈。/遇到",
    "ĐÁP ÁN": "遇到尴尬场面，他就会打哈哈。",
    "PHIÊN ÂM": "Yùdào gānggà chǎngmiàn, tā jiù huì dǎ hā hā."
  },
  {
    "STT": 463,
    "CHỮ": "D",
    "CỤM": "打黑枪",
    "PINYIN": "dǎ hēi qiāng",
    "NGHĨA": "比喻暗里使坏，乘人不备时突然开枪。比喻暗中对人进行突然袭击。也说“打冷枪”。",
    "SẮP XẾP CÂU": "让人/防不胜防。/他/在/背后打黑枪",
    "ĐÁP ÁN": "他在背后打黑枪，让人防不胜防。",
    "PHIÊN ÂM": "Tā zài bèihòu dǎ hēi qiāng, ràng rén fáng bù shèng fáng."
  },
  {
    "STT": 464,
    "SẮP XẾP CÂU": "更/不要打黑枪。/别/搞/小动作",
    "ĐÁP ÁN": "别搞小动作，更不要打黑枪。",
    "PHIÊN ÂM": "Bié gǎo xiǎodòngzuò, gèng bù yào dǎ hēi qiāng."
  },
  {
    "STT": 465,
    "CHỮ": "D",
    "CỤM": "大红人",
    "PINYIN": "dà hóng rén",
    "NGHĨA": "指受到领导信任、重用的人。",
    "SẮP XẾP CÂU": "走到/哪里/ 都 / 他/最近/ 受欢迎。/ 成了大红人",
    "ĐÁP ÁN": "他最近成了大红人，走到哪里都受欢迎。",
    "PHIÊN ÂM": "Tā zuìjìn chéng le dà hóng rén, zǒu dào nǎlǐ dōu shòu huānyíng."
  },
  {
    "STT": 466,
    "SẮP XẾP CÂU": "如今/却/默默无闻。/曾经/的大红人",
    "ĐÁP ÁN": "曾经的大红人，如今却默默无闻。",
    "PHIÊN ÂM": "Céngjīng de dà hóng rén, rújīn què mòmòwúwén."
  },
  {
    "STT": 467,
    "CHỮ": "D",
    "CỤM": "打交道",
    "PINYIN": "dǎ jiāo dào",
    "NGHĨA": "指交往。",
    "SẮP XẾP CÂU": "所以/英语/很/好。/我/经常/和/外国人打交道",
    "ĐÁP ÁN": "我经常和外国人打交道，所以英语很好。",
    "PHIÊN ÂM": "Wǒ jīngcháng hé wàiguórén dǎ jiāo dào, suǒyǐ Yīngyǔ hěn hǎo."
  },
  {
    "STT": 468,
    "SẮP XẾP CÂU": "各种/人打交道。/他/善于/和",
    "ĐÁP ÁN": "他善于和各种人打交道。",
    "PHIÊN ÂM": "Tā shànyú hé gè zhǒng rén dǎ jiāo dào."
  },
  {
    "STT": 469,
    "CHỮ": "D",
    "CỤM": "大老粗",
    "PINYIN": "dà lǎo cū",
    "NGHĨA": "粗人一个。",
    "SẮP XẾP CÂU": "其实/ 很细腻。/别 看/ 心思 / 他/是/个大老粗",
    "ĐÁP ÁN": "别看他是个大老粗，其实心思很细腻。",
    "PHIÊN ÂM": "Bié kàn tā shì ge dà lǎo cū, qíshí xīnsī hěn xìnì."
  },
  {
    "STT": 470,
    "SẮP XẾP CÂU": "为人/很仗义。/ 是个大老粗，/ 他 / 虽然 /但",
    "ĐÁP ÁN": "他虽然是个大老粗，但为人很仗义。",
    "PHIÊN ÂM": "Tā suīrán shì ge dà lǎo cū, dàn wéirén hěn zhàngyì."
  },
  {
    "STT": 471,
    "CHỮ": "D",
    "CỤM": "打擂台",
    "PINYIN": "dǎ lèi tái",
    "NGHĨA": "比喻上台比武，当面竞争。",
    "SẮP XẾP CÂU": "打擂台，/ 高手 / 精彩/纷呈。/ 在比赛中/ 两位",
    "ĐÁP ÁN": "两位高手在比赛中打擂台，精彩纷呈。",
    "PHIÊN ÂM": "Liǎng wèi gāoshǒu zài bǐsài zhōng dǎ lèi tái, jīngcǎi fēnfèng."
  },
  {
    "STT": 472,
    "SẮP XẾP CÂU": "打擂台。/争取/市场，/他们/决定/为了/和/竞争对手",
    "ĐÁP ÁN": "为了争取市场，他们决定和竞争对手打擂台。",
    "PHIÊN ÂM": "Wèile zhēngqǔ shìchǎng, tāmen juédìng hé jìngzhēng duìshǒu dǎ lèi tái."
  },
  {
    "STT": 473,
    "CHỮ": "D",
    "CỤM": "打落水狗",
    "PINYIN": "dǎ luò shuǐ gǒu",
    "NGHĨA": "痛打落入水中的狗。比喻彻底打垮已经失势了的\r\n坏人。",
    "SẮP XẾP CÂU": "打落水狗。/对待/ 错误的人，/ 犯了 /我们 / 不能",
    "ĐÁP ÁN": "对待犯了错误的人，我们不能打落水狗。",
    "PHIÊN ÂM": "Duìdài fàn le cuòwù de rén, wǒmen bù néng dǎ luò shuǐ gǒu."
  },
  {
    "STT": 474,
    "SẮP XẾP CÂU": "打落水狗的/小人。/ 趁之危，/他 /落井下石，/真是 / 个",
    "ĐÁP ÁN": "他趁人之危，落井下石，真是个打落水狗的小人。",
    "PHIÊN ÂM": "Tā chènrénzhīwēi, luòjǐngxiàshí, zhēnshi ge dǎ luò shuǐ gǒu de xiǎorén."
  },
  {
    "STT": 475,
    "CHỮ": "D",
    "CỤM": "打马虎眼",
    "PINYIN": "dǎ mǎ hǔ yǎn",
    "NGHĨA": "比喻故意掩饰、装糊涂蒙骗人。",
    "SẮP XẾP CÂU": "打马虎眼，/你/必须 /交代。/别想/ 给个/这件事",
    "ĐÁP ÁN": "别想打马虎眼，这件事你必须给个交代。",
    "PHIÊN ÂM": "Bié xiǎng dǎ mǎ hǔ yǎn, zhè jiàn shì nǐ bìxū gěi ge jiāodài."
  },
  {
    "STT": 476,
    "SẮP XẾP CÂU": "敷衍了事。/他/总是 / 打马虎眼",
    "ĐÁP ÁN": "他总是打马虎眼，敷衍了事。",
    "PHIÊN ÂM": "Tā zǒngshì dǎ mǎ hǔ yǎn, fūyǎn liǎo shì."
  },
  {
    "STT": 477,
    "CHỮ": "D",
    "CỤM": "打埋伏",
    "PINYIN": "dǎ mái fú",
    "NGHĨA": "原指军事用语，指预先隐蔽起来，待机行动。比喻隐瞒某些事实或不\r\n暴露情况。",
    "SẮP XẾP CÂU": "打埋伏，/将/犯罪/分子/一网打尽。/警方/提前",
    "ĐÁP ÁN": "警方提前打埋伏，将犯罪分子一网打尽。",
    "PHIÊN ÂM": "Jǐngfāng tíqián dǎ mái fú, jiāng fànzuì fēnzǐ yī wǎng dǎ jìn."
  },
  {
    "STT": 478,
    "SẮP XẾP CÂU": "打埋伏，/我们/得/小心。/敌人/在/这里",
    "ĐÁP ÁN": "敌人在这里打埋伏，我们得小心。",
    "PHIÊN ÂM": "Dírén zài zhèlǐ dǎ mái fú, wǒmen děi xiǎoxīn."
  },
  {
    "STT": 479,
    "CHỮ": "D",
    "CỤM": "打破铁饭碗",
    "PINYIN": "dǎ pò tiě fàn wǎn",
    "NGHĨA": " 指放弃固定的工作。",
    "SẮP XẾP CÂU": "打破铁饭碗，/下海/经商。/改革开放/后，/很多人",
    "ĐÁP ÁN": "改革开放后，很多人打破铁饭碗，下海经商。",
    "PHIÊN ÂM": "Gǎigé kāifàng hòu, hěn duō rén dǎ pò tiě fàn wǎn, xiàhǎi jīngshāng."
  },
  {
    "STT": 480,
    "SẮP XẾP CÂU": "打破铁饭碗，/才能/激发/ 积极性。/只有/ 大家的",
    "ĐÁP ÁN": "只有打破铁饭碗，才能激发大家的积极性。",
    "PHIÊN ÂM": "Zhǐyǒu dǎ pò tiě fàn wǎn, cái néng jīfā dàjiā de jījíxìng."
  },
  {
    "STT": 481,
    "CHỮ": "D",
    "CỤM": "大气候",
    "PINYIN": "dà qì hòu",
    "NGHĨA": "大环境。",
    "SẮP XẾP CÂU": "大气候，/才能/获得/发展。/顺应",
    "ĐÁP ÁN": "顺应大气候，才能获得发展。",
    "PHIÊN ÂM": "Shùnyìng dà qì hòu, cái néng huòdé fāzhǎn."
  },
  {
    "STT": 482,
    "SẮP XẾP CÂU": "大气候把握/ 他/对/经济 / 得很准。",
    "ĐÁP ÁN": "他对经济大气候把握得很准。",
    "PHIÊN ÂM": "Tā duì jīngjì dà qì hòu bǎwò de hěn zhǔn."
  },
  {
    "STT": 483,
    "CHỮ": "D",
    "CỤM": "打前站 ",
    "PINYIN": "dǎ qián zhàn",
    "NGHĨA": "指行军或集体出发前，先派人到将要去的地点\r\n联系或安排有关事务。",
    "SẮP XẾP CÂU": "打前站。/每次/出差，/他/都/提前/去",
    "ĐÁP ÁN": "每次出差，他都提前去打前站。",
    "PHIÊN ÂM": "Měi cì chūchāi, tā dōu tíqián qù dǎ qián zhàn."
  },
  {
    "STT": 484,
    "SẮP XẾP CÂU": "打前站。/为了/项目的 /去 /顺利/进行，/我们/派人",
    "ĐÁP ÁN": "为了项目的顺利进行，我们派人去打前站。",
    "PHIÊN ÂM": "Wèile xiàngmù de shùnlì jìnxíng, wǒmen pài rén qù dǎ qián zhàn."
  },
  {
    "STT": 485,
    "CHỮ": "D",
    "CỤM": "搭鹊桥",
    "PINYIN": "dā què qiáo",
    "NGHĨA": "指为男女牵线、撮合。",
    "SẮP XẾP CÂU": "搭鹊桥才/走到/ 他们俩 / 一起/的。/ 是/经人",
    "ĐÁP ÁN": "他们俩是经人搭鹊桥才走到一起的。",
    "PHIÊN ÂM": "Tāmen liǎ shì jīng rén dā què qiáo cái zǒu dào yīqǐ de."
  },
  {
    "STT": 486,
    "SẮP XẾP CÂU": "搭鹊桥，/促成 / 希望/有人/  这段姻缘。/能 /为他们",
    "ĐÁP ÁN": "希望有人能为他们搭鹊桥，促成这段姻缘。",
    "PHIÊN ÂM": "Xīwàng yǒurén néng wèi tāmen dā què qiáo, cùchéng zhè duàn yīnyuán."
  },
  {
    "STT": 487,
    "CHỮ": "D",
    "CỤM": "打入冷宫",
    "PINYIN": "dǎ rù lěng gōng",
    "NGHĨA": "放到一边，不予理睬。",
    "SẮP XẾP CÂU": "打入冷宫了。/ 失宠，/ 她 /因为",
    "ĐÁP ÁN": "她因为失宠，被打入冷宫了。",
    "PHIÊN ÂM": "Tā yīnwèi shīchǒng, bèi dǎ rù lěng gōng le."
  },
  {
    "STT": 488,
    "SẮP XẾP CÂU": "打入冷宫了。/这个/项目/因为/没有/前景，",
    "ĐÁP ÁN": "这个项目因为没有前景，被打入冷宫了。",
    "PHIÊN ÂM": "Zhège xiàngmù yīnwèi méiyǒu qiánjǐng, bèi dǎ rù lěng gōng le."
  },
  {
    "STT": 489,
    "CHỮ": "D",
    "CỤM": "打入十八层地狱",
    "PINYIN": "dǎ rù shí bā céng dì yù",
    "NGHĨA": "比喻境况十分困苦。",
    "SẮP XẾP CÂU": "打入十八层地狱。/这种/ /就该被 / 罪大恶极/的人，",
    "ĐÁP ÁN": "这种罪大恶极的人，就该被打入十八层地狱。",
    "PHIÊN ÂM": "Zhè zhǒng zuìdà'èjí de rén, jiù gāi bèi dǎ rù shí bā céng dì yù."
  },
  {
    "STT": 490,
    "SẮP XẾP CÂU": "打入十八层地狱。/ 仇人 /他 / 发誓/ 要把",
    "ĐÁP ÁN": "他发誓要把仇人打入十八层地狱。",
    "PHIÊN ÂM": "Tā fāshì yào bǎ chóurén dǎ rù shí bā céng dì yù."
  },
  {
    "STT": 491,
    "CHỮ": "D",
    "CỤM": "打如意算盘",
    "PINYIN": "dǎ rú yì suàn pán",
    "NGHĨA": "比喻做美梦，只从好的一方面去考虑、打算。",
    "SẮP XẾP CÂU": "打如意算盘，/凡事/ 都要/ 想着 / 脚踏实地。/别总",
    "ĐÁP ÁN": "别总想着打如意算盘，凡事都要脚踏实地。",
    "PHIÊN ÂM": "Bié zǒng xiǎngzhe dǎ rú yì suàn pán, fánshì dōu yào jiǎotàshídì."
  },
  {
    "STT": 492,
    "SẮP XẾP CÂU": "打如意算盘，/没想到/ 以为/ 却/失算了。/他 / 自己 ",
    "ĐÁP ÁN": "他以为自己打如意算盘，没想到却失算了。",
    "PHIÊN ÂM": "Tā yǐwéi zìjǐ dǎ rú yì suàn pán, méi xiǎngdào què shīsuàn le."
  },
  {
    "STT": 493,
    "CHỮ": "D",
    "CỤM": "打时间差",
    "PINYIN": "dǎ shí jiān chā",
    "NGHĨA": "比喻利用时间上的差数来实现某种目的。",
    "SẮP XẾP CÂU": "打时间差，/提高/工作/效率。/我们/要/学会",
    "ĐÁP ÁN": "我们要学会打时间差，提高工作效率。",
    "PHIÊN ÂM": "Wǒmen yào xuéhuì dǎ shí jiān chā, tígāo gōngzuò xiàolǜ."
  },
  {
    "STT": 494,
    "SẮP XẾP CÂU": "打时间差，/成功/ 高峰期。/避开了 /他/利用 ",
    "ĐÁP ÁN": "他利用打时间差，成功避开了高峰期。",
    "PHIÊN ÂM": "Tā lìyòng dǎ shí jiān chā, chénggōng bìkāi le gāofēngqī."
  },
  {
    "STT": 495,
    "CHỮ": "D",
    "CỤM": "打水漂",
    "PINYIN": "dǎ shuǐ piào",
    "NGHĨA": "比喻没有了，白费。",
    "SẮP XẾP CÂU": "打水漂了。/ 投资/如果/失败了，/钱就 / 这笔",
    "ĐÁP ÁN": "这笔投资如果失败了，钱就打水漂了。",
    "PHIÊN ÂM": "Zhè bǐ tóuzī rúguǒ shībài le, qián jiù dǎ shuǐ piào le."
  },
  {
    "STT": 496,
    "SẮP XẾP CÂU": "打水漂了，/一无所获。/ 的努力/ 他/ 最终/都 ",
    "ĐÁP ÁN": "他的努力最终都打水漂了，一无所获。",
    "PHIÊN ÂM": "Tā de nǔlì zuìzhōng dōu dǎ shuǐ piào le, yī wú huò."
  },
  {
    "STT": 497,
    "CHỮ": "D",
    "CỤM": "打死老虎",
    "PINYIN": "dǎ sǐ lǎo hǔ",
    "NGHĨA": "比喻只能打死了的老虎，可是对活老虎却没有办法。",
    "SẮP XẾP CÂU": "打死老虎。/欺软怕硬/的人，/就/喜欢 ",
    "ĐÁP ÁN": "欺软怕硬的人，就喜欢打死老虎。",
    "PHIÊN ÂM": "Qī ruǎn pà yìng de rén, jiù xǐhuan dǎ sǐ lǎo hǔ."
  },
  {
    "STT": 498,
    "SẮP XẾP CÂU": "打死老虎，/有/本事/去/挑战/强者。/别只会",
    "ĐÁP ÁN": "别只会打死老虎，有本事去挑战强者。",
    "PHIÊN ÂM": "Bié zhǐ huì dǎ sǐ lǎo hǔ, yǒu běnshì qù tiǎozhàn qiángzhě."
  },
  {
    "STT": 499,
    "CHỮ": "D",
    "CỤM": "打太极拳",
    "PINYIN": "dǎ tài jí quán",
    "NGHĨA": "比喻遇事推托敷衍。常指政府各部门间把需解决的问题推给别的 部门，结果是效率低下，谁也不解决。 ",
    "SẮP XẾP CÂU": "打太极拳，/ 回答问题。/他/ 不直接/ 总是/喜欢 ",
    "ĐÁP ÁN": "他总是喜欢打太极拳，不直接回答问题。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan dǎ tài jí quán, bù zhíjiē huídá wèntí."
  },
  {
    "STT": 500,
    "SẮP XẾP CÂU": "打太极拳。/他 /就会/ 遇到/这类/问题",
    "ĐÁP ÁN": "遇到这类问题，他就会打太极拳。",
    "PHIÊN ÂM": "Yùdào zhè lèi wèntí, tā jiù huì dǎ tài jí quán."
  },
  {
    "STT": 501,
    "CHỮ": "D",
    "CỤM": "打天下",
    "PINYIN": "dǎ tiān xià",
    "NGHĨA": "比喻闯天下，创业。",
    "SẮP XẾP CÂU": "打下了天下。/他靠/ 的努力/ 自己/ 白手起家，",
    "ĐÁP ÁN": "他白手起家，靠自己的努力打下了天下。",
    "PHIÊN ÂM": "Tā báishǒu qǐjiā, kào zìjǐ de nǔlì dǎ xià le tiān xià."
  },
  {
    "STT": 502,
    "SẮP XẾP CÂU": "打天下。/就是/一场/ 创业/  硬仗，/ 要/敢于",
    "ĐÁP ÁN": "创业就是一场硬仗，要敢于打天下。",
    "PHIÊN ÂM": "Chuàngyè jiùshì yī chǎng yìngzhàng, yào gǎnyú dǎ tiān xià."
  },
  {
    "STT": 503,
    "CHỮ": "D",
    "CỤM": "打头阵",
    "PINYIN": "dǎ tóu zhèn",
    "NGHĨA": "比喻第一个上场。",
    "SẮP XẾP CÂU": "打头阵。/每次/困难，/他都/敢于/遇到",
    "ĐÁP ÁN": "每次遇到困难，他都敢于打头阵。",
    "PHIÊN ÂM": "Měi cì yùdào kùnnan, tā dōu gǎnyú dǎ tóu zhèn."
  },
  {
    "STT": 504,
    "SẮP XẾP CÂU": "打头阵。/我/任务，/这次/自告奋勇",
    "ĐÁP ÁN": "这次任务，我自告奋勇打头阵。",
    "PHIÊN ÂM": "Zhè cì rènwù, wǒ zìgàofènyǒng dǎ tóu zhèn."
  },
  {
    "STT": 505,
    "CHỮ": "D",
    "CỤM": "打退堂鼓",
    "PINYIN": "dǎ tuì táng gǔ",
    "NGHĨA": "原指旧时官吏坐堂问事完了，打退堂鼓。比喻中途退缩，不想参加了。",
    "SẮP XẾP CÂU": "打退堂鼓，/怎么/能/成功？/就/遇到/一点/挫折",
    "ĐÁP ÁN": "遇到一点挫折就打退堂鼓，怎么能成功？",
    "PHIÊN ÂM": "Yùdào yī diǎn cuòzhé jiù dǎ tuì táng gǔ, zěnme néng chénggōng?"
  },
  {
    "STT": 506,
    "SẮP XẾP CÂU": "打退堂鼓，/坚持/就是/胜利。/别",
    "ĐÁP ÁN": "别打退堂鼓，坚持就是胜利。",
    "PHIÊN ÂM": "Bié dǎ tuì táng gǔ, jiānchí jiùshì shènglì."
  },
  {
    "STT": 507,
    "CHỮ": "D",
    "CỤM": "打下手 ",
    "PINYIN": "dǎ xià shǒu",
    "NGHĨA": "比喻给别人做辅助性的工作。",
    "SẮP XẾP CÂU": "打下手。/他/ 很乐意/ 是新手，/但 / 虽然",
    "ĐÁP ÁN": "他虽然是新手，但很乐意打下手。",
    "PHIÊN ÂM": "Tā suīrán shì xīnshǒu, dàn hěn lèyì dǎ xià shǒu."
  },
  {
    "STT": 508,
    "SẮP XẾP CÂU": "打下手。/我/ 负责 / 师傅/ 给他 / 在教/我 ",
    "ĐÁP ÁN": "师傅在教我，我负责给他打下手。",
    "PHIÊN ÂM": "Shīfù zài jiāo wǒ, wǒ fùzé gěi tā dǎ xià shǒu."
  },
  {
    "STT": 509,
    "CHỮ": "D",
    "CỤM": "打小报告",
    "PINYIN": "dǎ xiǎo bào gào",
    "NGHĨA": "不怀好意地把别人的言行反映给领导。",
    "SẮP XẾP CÂU": "打小报告，/有/意见/ 别在/ 当面提。/背后 ",
    "ĐÁP ÁN": "别在背后打小报告，有意见当面提。",
    "PHIÊN ÂM": "Bié zài bèihòu dǎ xiǎo bào gào, yǒu yìjiàn dāngmiàn tí."
  },
  {
    "STT": 510,
    "SẮP XẾP CÂU": "打小报告，/破坏/同事/关系。/他/总是/喜欢 ",
    "ĐÁP ÁN": "他总是喜欢打小报告，破坏同事关系。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan dǎ xiǎo bào gào, pòhuài tóngshì guānxì."
  },
  {
    "STT": 511,
    "CHỮ": "D",
    "CỤM": "打牙祭",
    "PINYIN": "dǎ yá jì",
    "NGHĨA": "就是解馋。",
    "SẮP XẾP CÂU": "打牙祭吧。/ 发工资了，/今天 /我们/去/饭店",
    "ĐÁP ÁN": "今天发工资了，我们去饭店打牙祭吧。",
    "PHIÊN ÂM": "Jīntiān fā gōngzī le, wǒmen qù fàndiàn dǎ yá jì ba."
  },
  {
    "STT": 512,
    "SẮP XẾP CÂU": "打牙祭了。/好久/ 终于 / 没吃肉了，/今天 /可以",
    "ĐÁP ÁN": "好久没吃肉了，今天终于可以打牙祭了。",
    "PHIÊN ÂM": "Hǎojiǔ méi chī ròu le, jīntiān zhōngyú kěyǐ dǎ yá jì le."
  },
  {
    "STT": 513,
    "CHỮ": "D",
    "CỤM": "打哑谜",
    "PINYIN": "dǎ yǎ mí",
    "NGHĨA": "故意不说出事情的真实情况而又让人难以猜测。",
    "SẮP XẾP CÂU": "打哑谜，/让人/摸不着/头脑。/他/说话/总是",
    "ĐÁP ÁN": "他说话总是打哑谜，让人摸不着头脑。",
    "PHIÊN ÂM": "Tā shuōhuà zǒngshì dǎ yǎ mí, ràng rén mō bu zháo tóunǎo."
  },
  {
    "STT": 514,
    "SẮP XẾP CÂU": "打哑谜了，/ 直说。/ 有话/ 别",
    "ĐÁP ÁN": "别打哑谜了，有话直说。",
    "PHIÊN ÂM": "Bié dǎ yǎ mí le, yǒu huà zhí shuō."
  },
  {
    "STT": 515,
    "CHỮ": "D",
    "CỤM": "打掩护 ",
    "PINYIN": "dǎ yǎn hù",
    "NGHĨA": "比喻掩饰某种行为。",
    "SẮP XẾP CÂU": "打掩护，/成功/ 任务。/队友们/ 完成了/ 互相",
    "ĐÁP ÁN": "队友们互相打掩护，成功完成了任务。",
    "PHIÊN ÂM": "Duìyǒu men hùxiāng dǎ yǎn hù, chénggōng wánchéng le rènwù."
  },
  {
    "STT": 516,
    "SẮP XẾP CÂU": "打掩护。/他/为了/保护/我，/给我",
    "ĐÁP ÁN": "他为了保护我，给我打掩护。",
    "PHIÊN ÂM": "Tā wèile bǎohù wǒ, gěi wǒ dǎ yǎn hù."
  },
  {
    "STT": 517,
    "CHỮ": "D",
    "CỤM": "打游击",
    "PINYIN": "dǎ yóu jī",
    "NGHĨA": "到处跑，无固定的地方。",
    "SẮP XẾP CÂU": "打游击。/ 强大 /他们/ 的敌人，/只能/面对",
    "ĐÁP ÁN": "面对强大的敌人，他们只能打游击。",
    "PHIÊN ÂM": "Miànduì qiángdà de dírén, tāmen zhǐ néng dǎ yóu jī."
  },
  {
    "STT": 518,
    "SẮP XẾP CÂU": "打游击。/简直/ 这种/不稳定/的 / 是在/ 工作/状态",
    "ĐÁP ÁN": "这种不稳定的工作状态，简直是在打游击。",
    "PHIÊN ÂM": "Zhè zhǒng bù wěndìng de gōngzuò zhuàngtài, jiǎnzhí shì zài dǎ yóu jī."
  },
  {
    "STT": 519,
    "CHỮ": "D",
    "CỤM": "打预防针",
    "PINYIN": "dǎ yù fáng zhēn",
    "NGHĨA": "指提前提醒。也说“打防疫针”。",
    "SẮP XẾP CÂU": "打预防针，/免得/ 他  / 提前 /到时候/ 犯错误。/ 给他 ",
    "ĐÁP ÁN": "提前给他打预防针，免得他到时候犯错误。",
    "PHIÊN ÂM": "Tíqián gěi tā dǎ yù fáng zhēn, miǎndé tā dàoshíhou fàn cuòwù."
  },
  {
    "STT": 520,
    "SẮP XẾP CÂU": "打预防针，/教我 / 保护 / 自己。/ 如何 /父母/从小/就/给我",
    "ĐÁP ÁN": "父母从小就给我打预防针，教我如何保护自己。",
    "PHIÊN ÂM": "Fùmǔ cóngxiǎo jiù gěi wǒ dǎ yù fáng zhēn, jiāo wǒ rúhé bǎohù zìjǐ."
  },
  {
    "STT": 521,
    "CHỮ": "D",
    "CỤM": "打圆场",
    "PINYIN": "dǎ yuán chǎng",
    "NGHĨA": "比喻为打开僵局而从中调解或提出折中办法。大事化小，小事化了。给别人一个台阶。",
    "SẮP XẾP CÂU": "打圆场。/气氛/尴尬/时，/他/总是/出来 / 能",
    "ĐÁP ÁN": "气氛尴尬时，他总是能出来打圆场。",
    "PHIÊN ÂM": "Qìfēn gānggà shí, tā zǒngshì néng chūlái dǎ yuán chǎng."
  },
  {
    "STT": 522,
    "SẮP XẾP CÂU": "打圆场，/才没/让/ 闹大。/幸亏/ 事情 /有他",
    "ĐÁP ÁN": "幸亏有他打圆场，才没让事情闹大。",
    "PHIÊN ÂM": "Xìngkuī yǒu tā dǎ yuán chǎng, cái méi ràng shìqíng nào dà."
  },
  {
    "STT": 523,
    "CHỮ": "D",
    "CỤM": "打照面",
    "PINYIN": "dǎ zhào miàn",
    "NGHĨA": "指见面、不期而遇。",
    "SẮP XẾP CÂU": "打照面，/不是/ 我们/只打/ 很熟悉。/ 过一次",
    "ĐÁP ÁN": "我们只打过一次照面，不是很熟悉。",
    "PHIÊN ÂM": "Wǒmen zhǐ dǎ guò yī cì zhào miàn, bù shì hěn shúxī."
  },
  {
    "STT": 524,
    "SẮP XẾP CÂU": "打照面了。/ 在这里 / 没想到/ 又 /和她 ",
    "ĐÁP ÁN": "没想到在这里又和她打照面了。",
    "PHIÊN ÂM": "Méi xiǎngdào zài zhèlǐ yòu hé tā dǎ zhào miàn le."
  },
  {
    "STT": 525,
    "CHỮ": "D",
    "CỤM": "打折扣",
    "PINYIN": "dǎ zhé kòu",
    "NGHĨA": "原为商业用语，即降低商品价格。\r\n(1) 比喻达不到预定的标准。\r\n(2) 比喻不完全按规矩来做。\r\n(3)比喻不能完全相信某种言论或做法。",
    "SẮP XẾP CÂU": "打折扣，/很划算。/这次 / 活动/  商品/ 所有 /都",
    "ĐÁP ÁN": "这次活动所有商品都打折扣，很划算。",
    "PHIÊN ÂM": "Zhè cì huódòng suǒyǒu shāngpǐn dōu dǎ zhé kòu, hěn huásuàn."
  },
  {
    "STT": 526,
    "SẮP XẾP CÂU": "打折扣，/不能/完全/ 承诺 /相信。/他的 /总是",
    "ĐÁP ÁN": "他的承诺总是打折扣，不能完全相信。",
    "PHIÊN ÂM": "Tā de chéngnuò zǒngshì dǎ zhé kòu, bù néng wánquán xiāngxìn."
  },
  {
    "STT": 527,
    "CHỮ": "D",
    "CỤM": "打肿脸充胖子",
    "PINYIN": "dǎ zhǒng liǎn chōng pàng zi",
    "NGHĨA": "没有那么大的能力却硬要装作有这样的能力。",
    "SẮP XẾP CÂU": "打肿脸充胖子。/他/ 非要 /请客，/没钱 /还 /简直/是",
    "ĐÁP ÁN": "他没钱还非要请客，简直是打肿脸充胖子。",
    "PHIÊN ÂM": "Tā méi qián hái fēiyào qǐngkè, jiǎnzhí shì dǎ zhǒng liǎn chōng pàng zi."
  },
  {
    "STT": 528,
    "SẮP XẾP CÂU": "打肿脸充胖子，/量力/而行。/别/为了/面子",
    "ĐÁP ÁN": "别为了面子打肿脸充胖子，量力而行。",
    "PHIÊN ÂM": "Bié wèile miànzi dǎ zhǒng liǎn chōng pàng zi, liànglì ér xíng."
  },
  {
    "STT": 529,
    "CHỮ": "D",
    "CỤM": "打主意",
    "PINYIN": "dǎ zhǔ yì",
    "NGHĨA": "就是想主意。",
    "SẮP XẾP CÂU": "在打主意，/不知道/肯定 / 想 /干什么。/他/心里",
    "ĐÁP ÁN": "他心里肯定在打主意，不知道想干什么。",
    "PHIÊN ÂM": "Tā xīnlǐ kěndìng zài dǎ zhǔ yì, bù zhīdào xiǎng gàn shénme."
  },
  {
    "STT": 530,
    "SẮP XẾP CÂU": "打主意，/老老实实 / 做人。/别 ",
    "ĐÁP ÁN": "别打歪主意，老老实实做人。",
    "PHIÊN ÂM": "Bié dǎ wāi zhǔ yi, lǎolǎoshíshí zuòrén."
  },
  {
    "STT": 531,
    "CHỮ": "D",
    "CỤM": "大嘴巴",
    "PINYIN": "dà zuǐ ba",
    "NGHĨA": "不能保守秘密的人。",
    "SẮP XẾP CÂU": "什么/秘密/都/藏/不住。/他/是/个大嘴巴",
    "ĐÁP ÁN": "他是个大嘴巴，什么秘密都藏不住。",
    "PHIÊN ÂM": "Tā shì ge dà zuǐ ba, shénme mìmì dōu cáng bu zhù."
  },
  {
    "STT": 532,
    "SẮP XẾP CÂU": "他/可是/个大嘴巴。/别/告诉",
    "ĐÁP ÁN": "别告诉他，他可是个大嘴巴。",
    "PHIÊN ÂM": "Gàosu tā, tā kěshì ge dà zuǐ ba."
  },
  {
    "STT": 533,
    "CHỮ": "D",
    "CỤM": "带头羊",
    "PINYIN": "dài tóu yáng",
    "NGHĨA": "指带头的人。也说“领头羊”。",
    "SẮP XẾP CÂU": "是带头羊，/他/在/团队里 /大家/都很/信任",
    "ĐÁP ÁN": "他在团队里是带头羊，大家都很信任他。",
    "PHIÊN ÂM": "Tā zài tuánduì lǐ shì dài tóu yáng, dàjiā dōu hěn xìnrèn tā."
  },
  {
    "STT": 534,
    "SẮP XẾP CÂU": "带头羊来/领导。/这个/项目/需要/一个",
    "ĐÁP ÁN": "这个项目需要一个带头羊来领导。",
    "PHIÊN ÂM": "Zhège xiàngmù xūyào yī ge dài tóu yáng lái lǐngdǎo."
  },
  {
    "STT": 535,
    "CHỮ": "D",
    "CỤM": "担风险",
    "PINYIN": "dān fēng xiǎn",
    "NGHĨA": "指承当可能发生的危险。",
    "SẮP XẾP CÂU": "需/谨慎，/要/敢于担风险。/投资/有/风险，/入市",
    "ĐÁP ÁN": "投资有风险，入市需谨慎，要敢于担风险。",
    "PHIÊN ÂM": "Tóuzī yǒu fēng xiǎn, rùshì xū jǐnshèn, yào gǎnyú dān fēngxiǎn."
  },
  {
    "STT": 536,
    "SẮP XẾP CÂU": "我/不敢担风险。/ 的 /风险/太大 / 这件事",
    "ĐÁP ÁN": "这件事的风险太大，我不敢担。",
    "PHIÊN ÂM": "Zhè jiàn shì de fēng xiǎn tài dà, wǒ bù gǎn dān."
  },
  {
    "STT": 537,
    "CHỮ": "D",
    "CỤM": "担干系",
    "PINYIN": "dān gān xì",
    "NGHĨA": "比喻承担责任。",
    "SẮP XẾP CÂU": "担干系？/问题，/出了 /谁/来",
    "ĐÁP ÁN": "出了问题，谁来担干系？",
    "PHIÊN ÂM": "Chū le wèntí, shuí lái dān gān xì?"
  },
  {
    "STT": 538,
    "SẮP XẾP CÂU": "不惜担干系。/ 为了 /他 /朋友",
    "ĐÁP ÁN": "他为了朋友，不惜担干系。",
    "PHIÊN ÂM": "Tā wèile péngyou, bù xī dān gān xì."
  },
  {
    "STT": 539,
    "CHỮ": "D",
    "CỤM": "单身贵族",
    "PINYIN": "dān shēn guì zú",
    "NGHĨA": "快乐的单身者。",
    "SẮP XẾP CÂU": "享受/自由。/如今/很多/年轻人/选择/做单身贵族",
    "ĐÁP ÁN": "如今很多年轻人选择做单身贵族，享受自由。",
    "PHIÊN ÂM": "Rújīn hěn duō niánqīngrén xuǎnzé zuò dān shēn guì zú, xiǎngshòu zìyóu."
  },
  {
    "STT": 540,
    "SẮP XẾP CÂU": "单身贵族，/她 /是个 /生活/ 得很/滋润",
    "ĐÁP ÁN": "她是个单身贵族，生活得很滋润。",
    "PHIÊN ÂM": "Tā shì ge dān shēn guì zú, shēnghuó de hěn zīrùn."
  },
  {
    "STT": 541,
    "CHỮ": "D",
    "CỤM": "当红娘",
    "PINYIN": "dāng hóng niáng",
    "NGHĨA": "指充当为男女婚姻或其他事情牵线搭桥的人。",
    "SẮP XẾP CÂU": "当红娘，/促成了/ 对姻缘。/他/ 好几 /热衷/于给/别人",
    "ĐÁP ÁN": "他热衷于给别人当红娘，促成了好几对姻缘。",
    "PHIÊN ÂM": "Tā rèzhōng yú gěi biérén dāng hóng niáng, cùchéng le hǎo jǐ duì yīnyuán."
  },
  {
    "STT": 542,
    "SẮP XẾP CÂU": "当红娘，/你/觉得/ 想给 / 怎么样？/我 /他俩",
    "ĐÁP ÁN": "我想给他俩当红娘，你觉得怎么样？",
    "PHIÊN ÂM": "Wǒ xiǎng gěi tā liǎ dāng hóng niáng, nǐ juéde zěnmeyàng?"
  },
  {
    "STT": 543,
    "CHỮ": "D",
    "CỤM": "挡箭牌",
    "PINYIN": "dǎng jiàn pái",
    "NGHĨA": "即盾牌，古代用来防护身体、遮挡刀箭的武器。比喻推脱责任的借\r\n口。或者比喻起遮掩、保护作用的人。",
    "SẮP XẾP CÂU": "自己/承担。/别把/我/当挡箭牌，/有事",
    "ĐÁP ÁN": "别把我当挡箭牌，有事自己承担。",
    "PHIÊN ÂM": "Bié bǎ wǒ dāng dǎng jiàn pái, yǒu shì zìjǐ chéngdān."
  },
  {
    "STT": 544,
    "SẮP XẾP CÂU": "逃避/责任。/他 /个借口 /找了/当挡箭牌",
    "ĐÁP ÁN": "他找了个借口当挡箭牌，逃避责任。",
    "PHIÊN ÂM": "Tā zhǎo le ge jièkǒu dāng dǎng jiàn pái, táobì zérèn."
  },
  {
    "STT": 545,
    "CHỮ": "D",
    "CỤM": "倒打一耙",
    "PINYIN": "dào dǎ yī pá",
    "NGHĨA": "现在多用来比喻自己干了坏事不承认，反而对检举人反咬一口;\r\n  或者是不接受别人的批评，反而指责批评的人。",
    "SẮP XẾP CÂU": "还倒打一耙，/真是/无耻。/他/非/但/不认错",
    "ĐÁP ÁN": "他非但不认错，还倒打一耙，真是无耻。",
    "PHIÊN ÂM": "Tā fēidàn bù rèncuò, hái dào dǎ yī pá, zhēnshi wúchǐ."
  },
  {
    "STT": 546,
    "SẮP XẾP CÂU": "要/据理力争。/遇到/这种倒打一耙的/人",
    "ĐÁP ÁN": "遇到这种倒打一耙的人，要据理力争。",
    "PHIÊN ÂM": "Yùdào zhè zhǒng dào dǎ yī pá de rén, yào jùlǐ lìzhēng."
  },
  {
    "STT": 547,
    "CHỮ": "D",
    "CỤM": "倒苦水",
    "PINYIN": "dào kǔ shuǐ",
    "NGHĨA": "向别人诉说自己的痛苦或委屈。也说“吐苦水”。",
    "SẮP XẾP CÂU": "他/都/要倒苦水。/每次/见到",
    "ĐÁP ÁN": "每次见到他，他都要倒苦水。",
    "PHIÊN ÂM": "Měi cì jiàndào tā, tā dōu yào dào kǔ shuǐ."
  },
  {
    "STT": 548,
    "SẮP XẾP CÂU": "我/也/感到/很/难过。/听/他倒苦水",
    "ĐÁP ÁN": "听他倒苦水，我也感到很难过。",
    "PHIÊN ÂM": "Tīng tā dào kǔ shuǐ, wǒ yě gǎndào hěn nánguò."
  },
  {
    "STT": 549,
    "CHỮ": "D",
    "CỤM": "倒胃口",
    "PINYIN": "dǎo wèi kǒu",
    "NGHĨA": "指因为腻味而不想再吃。比喻讲话、文章或演出等没有意思，令人腻烦，使人不愿听，不愿看。",
    "SẮP XẾP CÂU": "真让/人倒胃口。/看到/ 那副/ 他 / 德行",
    "ĐÁP ÁN": "看到他那副德行，真让人倒胃口。",
    "PHIÊN ÂM": "Kàndào tā nà fù déxíng, zhēn ràng rén dǎo wèi kǒu."
  },
  {
    "STT": 550,
    "SẮP XẾP CÂU": "他的/言行/ 很让 / 举止 /人倒胃口",
    "ĐÁP ÁN": "他的言行举止很让人倒胃口。",
    "PHIÊN ÂM": "Tā de yánxíng jǔzhǐ hěn ràng rén dǎo wèi kǒu."
  },
  {
    "STT": 551,
    "CHỮ": "D",
    "CỤM": "倒吸一口冷气",
    "PINYIN": "dào xī yī kǒu lěng qì",
    "NGHĨA": "表示恐惧，或躲过灾难，但想想仍害怕。",
    "SẮP XẾP CÂU": "倒吸一口冷气。/听到/这个/消息，/他",
    "ĐÁP ÁN": "听到这个消息，他倒吸一口冷气。",
    "PHIÊN ÂM": "Tīngdào zhège xiāoxi, tā dào xī yī kǒu lěng qì."
  },
  {
    "STT": 552,
    "SẮP XẾP CÂU": "倒吸一口冷气。/看到/眼前/ 景象，/ 的 /我/不禁",
    "ĐÁP ÁN": "看到眼前的景象，我不禁倒吸一口冷气。",
    "PHIÊN ÂM": "Kàndào yǎnqián de jǐngxiàng, wǒ bùjīn dào xī yī kǒu lěng qì."
  },
  {
    "STT": 553,
    "CHỮ": "D",
    "CỤM": "倒栽葱",
    "PINYIN": "dào zāi cōng",
    "NGHĨA": "栽葱时不是根先入土，而是头先入土，倒着栽。比喻摔跟斗时头先着地。\r\n 或比喻从高处或空中头朝下摔下来。",
    "SẮP XẾP CÂU": "引得 / 哈哈/大笑。/他不 / 大家/ 小心/ 摔了/个倒栽葱",
    "ĐÁP ÁN": "他不小心摔了个倒栽葱，引得大家哈哈大笑。",
    "PHIÊN ÂM": "Tā bù xiǎoxīn shuāi le ge dào zāi cōng, yǐndé dàjiā hāhā dà xiào."
  },
  {
    "STT": 554,
    "SẮP XẾP CÂU": "我/这次/ 栽了/个倒栽葱。/股票/暴跌 /算是",
    "ĐÁP ÁN": "股票暴跌，我这次算是栽了个倒栽葱。",
    "PHIÊN ÂM": "Gǔpiào bàodiē, wǒ zhè cì suànshì zāi le ge dào zāi cōng."
  },
  {
    "STT": 555,
    "CHỮ": "D",
    "CỤM": "刀子嘴",
    "PINYIN": "dāo zi zuǐ",
    "NGHĨA": "嘴巴凌厉尖刻。",
    "SẮP XẾP CÂU": "但/豆腐/心。/她/虽然刀子嘴",
    "ĐÁP ÁN": "她虽然刀子嘴，但豆腐心。",
    "PHIÊN ÂM": "Tā suīrán dāo zi zǔi, dàn dòufuxīn."
  },
  {
    "STT": 556,
    "SẮP XẾP CÂU": "其实/人 / 他刀子嘴 / 很好。/别看",
    "ĐÁP ÁN": "别看他刀子嘴，其实人很好。",
    "PHIÊN ÂM": "Bié kàn tā dāo zi zǔi, qíshí rén hěn hǎo."
  },
  {
    "STT": 557,
    "CHỮ": "D",
    "CỤM": "等到驴年马月",
    "PINYIN": "děng dào lǘ nián mǎ yuè",
    "NGHĨA": "形容期望的时间太长，不知何时才能实现。",
    "SẮP XẾP CÂU": "等到驴年马月了。/等他/这事/ 把 /办好，/那得",
    "ĐÁP ÁN": "等他把这事办好，那得等到驴年马月了。",
    "PHIÊN ÂM": "Děng tā bǎ zhè shì bàn hǎo, nà děi děng dào lǘ nián mǎ yuè le."
  },
  {
    "STT": 558,
    "SẮP XẾP CÂU": "简直/是等到驴年马月。/指望/ 主动/ 他/能 / 帮忙",
    "ĐÁP ÁN": "指望他能主动帮忙，简直是等到驴年马月。",
    "PHIÊN ÂM": "Zhǐwàng tā néng zhǔdòng bāngmáng, jiǎnzhí shì děng dào lǘ nián mǎ yuè."
  },
  {
    "STT": 559,
    "CHỮ": "D",
    "CỤM": "等到日头从西出",
    "PINYIN": "děng dào rì tou cóng xī chū",
    "NGHĨA": "太阳不可能从西边升起。指事情永远不可能实现。",
    "SẮP XẾP CÂU": "他/可能 / 才有/ 改变/主意。/除非等到日头从西出",
    "ĐÁP ÁN": "除非等到日头从西出，他才有可能改变主意。",
    "PHIÊN ÂM": "Chúfēi děng dào rì tou cóng xī chū, tā cái yǒu kěnéng gǎibiàn zhǔyì."
  },
  {
    "STT": 560,
    "SẮP XẾP CÂU": "等到日头从西出了。/要想/让他/主动/道歉，/那得",
    "ĐÁP ÁN": "要想让他主动道歉，那得等到日头从西出了。",
    "PHIÊN ÂM": "Yàoxiǎng ràng tā zhǔdòng dàoqiàn, nà děi děng dào rì tou cóng xī chū le."
  },
  {
    "STT": 561,
    "CHỮ": "D",
    "CỤM": "等米下锅",
    "PINYIN": "děng mǐ xià guō",
    "NGHĨA": "形容家庭贫困，没粮食吃。\r\n比喻急需得到原材料或素材。",
    "SẮP XẾP CÂU": "等米下锅。/揭不开锅/了，/家里/真是",
    "ĐÁP ÁN": "家里揭不开锅了，真是等米下锅。",
    "PHIÊN ÂM": "Jiālǐ jiē bu kāi guō le, zhēnshi děng mǐ xià guō."
  },
  {
    "STT": 562,
    "SẮP XẾP CÂU": "等米下锅呢。/他/现在/这笔钱 / 急需",
    "ĐÁP ÁN": "他现在急需这笔钱，等米下锅呢。",
    "PHIÊN ÂM": "Tā xiànzài jíxū zhè bǐ qián, děng mǐ xià guō ne."
  },
  {
    "STT": 563,
    "CHỮ": "D",
    "CỤM": "瞪眼吹胡子",
    "PINYIN": "dèng yǎn chuī hú zi",
    "NGHĨA": "见“吹胡子瞪眼”。",
    "SẮP XẾP CÂU": "瞪眼吹胡子，/很/吓人。/爸爸/一生气/就",
    "ĐÁP ÁN": "爸爸一生气就瞪眼吹胡子，很吓人。",
    "PHIÊN ÂM": "Bàba yī shēngqì jiù dèng yǎn chuī hú zi, hěn xiàrén."
  },
  {
    "STT": 564,
    "SẮP XẾP CÂU": "要/耐心。/别/老/对着/孩子瞪眼吹胡子",
    "ĐÁP ÁN": "别老对着孩子瞪眼吹胡子，要耐心。",
    "PHIÊN ÂM": "Bié lǎo duìzhe háizi dèng yǎn chuī hú zi, yào nàixīn."
  },
  {
    "STT": 565,
    "CHỮ": "D",
    "CỤM": "等于零",
    "PINYIN": "děng yú líng",
    "NGHĨA": "指完全不起作用。",
    "SẮP XẾP CÂU": "别人/看来等于零。/他/ 在 / 的努力",
    "ĐÁP ÁN": "他的努力在别人看来等于零。",
    "PHIÊN ÂM": "Tā de nǔlì zài biérén kànlái děng yú líng."
  },
  {
    "STT": 566,
    "SẮP XẾP CÂU": "等于零。/没有/你/的/帮助，/我/的/一切/都",
    "ĐÁP ÁN": "没有你的帮助，我的一切都等于零。",
    "PHIÊN ÂM": "Méiyǒu nǐ de bāngzhù, wǒ de yīqiè dōu děng yú líng."
  },
  {
    "STT": 567,
    "CHỮ": "D",
    "CỤM": "蹬着鼻子撒尿",
    "PINYIN": "dēng zhe bí zi sā niào",
    "NGHĨA": "形容欺人太甚。",
    "SẮP XẾP CÂU": "得寸进尺。/他/这个/人蹬着鼻子撒尿",
    "ĐÁP ÁN": "他这个人蹬着鼻子撒尿，得寸进尺。",
    "PHIÊN ÂM": "Tā zhège rén dēng zhe bí zi sā niào, décùnjìnchǐ."
  },
  {
    "STT": 568,
    "SẮP XẾP CÂU": "不能/心软。/对/这种蹬着鼻子撒尿的/人",
    "ĐÁP ÁN": "对这种蹬着鼻子撒尿的人，不能心软。",
    "PHIÊN ÂM": "Duì zhè zhǒng dēngzhe bí zi sā niào de rén, bù néng xīnruǎn."
  },
  {
    "STT": 569,
    "CHỮ": "D",
    "CỤM": "蹬着鼻子上脸",
    "PINYIN": "dēng zhe bí zi shàng liǎn",
    "NGHĨA": "形容人得寸进尺，越来越过分。",
    "SẮP XẾP CÂU": "他/会蹬着鼻子上脸的。/别/给/他/好脸色",
    "ĐÁP ÁN": "别给他好脸色，他会蹬着鼻子上脸的。",
    "PHIÊN ÂM": "Bié gěi tā hǎo liǎnsè, tā huì dēng zhe bí zi shàng liǎn de."
  },
  {
    "STT": 570,
    "SẮP XẾP CÂU": "不知/ 好歹。/这种人/就是蹬着鼻子上脸",
    "ĐÁP ÁN": "这种人就是蹬着鼻子上脸，不知好歹。",
    "PHIÊN ÂM": "Zhè zhǒng rén jiùshì dēng zhe bí zi shàng liǎn, bù zhī hǎodǎi."
  },
  {
    "STT": 571,
    "CHỮ": "D",
    "CỤM": "等着天上掉馅饼",
    "PINYIN": "děng zhe tiān shàng diào xiàn bing",
    "NGHĨA": "比喻不肯努力就想白白获取。",
    "SẮP XẾP CÂU": "要靠/ 光等着天上掉馅饼 / 自己/努力。/别",
    "ĐÁP ÁN": "别光等着天上掉馅饼，要靠自己努力。",
    "PHIÊN ÂM": "Bié guāng děngzhe tiān shàng diào xiàn bing, yào kào zìjǐ nǔlì."
  },
  {
    "STT": 572,
    "SẮP XẾP CÂU": "就等着天上掉馅饼。/他/什么/都/不做",
    "ĐÁP ÁN": "他什么都不做，就等着天上掉馅饼。",
    "PHIÊN ÂM": "Tā shénme dōu bù zuò, jiù děng zhe tiān shàng diào xiànbing."
  },
  {
    "STT": 573,
    "CHỮ": "D",
    "CỤM": "瞪着眼挨饿",
    "PINYIN": "dèng zhe yǎn āi è",
    "NGHĨA": "指于饿肚子,想不出解决的办法。",
    "SẮP XẾP CÂU": "只能瞪着眼挨饿。/面对/饥荒，/老百姓",
    "ĐÁP ÁN": "面对饥荒，老百姓只能瞪着眼挨饿。",
    "PHIÊN ÂM": "Miànduì jīhuang, lǎobǎixìng zhǐ néng dèng zhe yǎn āi è."
  },
  {
    "STT": 574,
    "SẮP XẾP CÂU": "瞪着眼挨饿。/没钱/买饭，/他/只好",
    "ĐÁP ÁN": "没钱买饭，他只好瞪着眼挨饿。",
    "PHIÊN ÂM": "Méi qián mǎi fàn, tā zhǐhǎo dèng zhe yǎn āi è."
  },
  {
    "STT": 575,
    "CHỮ": "D",
    "CỤM": "瞪着眼扯谎",
    "PINYIN": "dèng zhe yǎn chě huǎng",
    "NGHĨA": "讽刺人不顾事实，胡说骗人。",
    "SẮP XẾP CÂU": "还瞪着眼扯谎。/他/明明/知道/真相",
    "ĐÁP ÁN": "他明明知道真相，还瞪着眼扯谎。",
    "PHIÊN ÂM": "Tā míngmíng zhī dào zhēn xiàng, hái dèng zhe yǎn chě huǎng."
  },
  {
    "STT": 576,
    "SẮP XẾP CÂU": "让人/不齿。/这种瞪着眼扯谎的/行为",
    "ĐÁP ÁN": "这种瞪着眼扯谎的行为，让人不齿。",
    "PHIÊN ÂM": "Zhè zhǒng dèng zhe yǎn chě huǎng de xíngwéi, ràng rén bùchǐ."
  },
  {
    "STT": 577,
    "CHỮ": "D",
    "CỤM": "瞪着眼瞅着",
    "PINYIN": "dèng zhe yǎn chǒu zhe",
    "NGHĨA": "指冷眼旁观，不愿插手或不施以援助。",
    "SẮP XẾP CÂU": "我/只能瞪着眼瞅着，/无能为力。/看到/这/一切",
    "ĐÁP ÁN": "看到这一切，我只能瞪着眼瞅着，无能为力。",
    "PHIÊN ÂM": "Kàndào yīqiè, wǒ zhǐ néng dèng zhe yǎn chǒu zhe, wúnéngwúlì."
  },
  {
    "STT": 578,
    "SẮP XẾP CÂU": "什么/也/没做。/他/就/这么瞪着眼瞅着",
    "ĐÁP ÁN": "他就这么瞪着眼瞅着，什么也没做。",
    "PHIÊN ÂM": "Tā jiù zhème dèng zhe yǎn chǒu zhe, shénme yě méi zuò."
  },
  {
    "STT": 579,
    "CHỮ": "D",
    "CỤM": "瞪着眼粗了筋",
    "PINYIN": "dèng zhe yǎn cū le jīn",
    "NGHĨA": "形容人发脾气时青筋暴起，怒目圆睁的样子。",
    "SẮP XẾP CÂU": "说不出 /他/ 话来。/气得瞪着眼粗了筋",
    "ĐÁP ÁN": "他气得瞪着眼粗了筋，说不出话来。",
    "PHIÊN ÂM": "Tā qì de dèng zhe yǎn cū le jīn, shuō bu chū huà lái."
  },
  {
    "STT": 580,
    "SẮP XẾP CÂU": "我瞪着眼粗了筋。/看着/眼前/的/一幕",
    "ĐÁP ÁN": "看着眼前的一幕，我瞪着眼粗了筋。",
    "PHIÊN ÂM": "Kànzhe yǎn qián de yī mù, wǒ dèng zhe yǎn cū le jīn."
  },
  {
    "STT": 581,
    "CHỮ": "D",
    "CỤM": "地不栽，天不盖",
    "PINYIN": "dì bù zāi，tiān bù gài",
    "NGHĨA": "形容人身世孤单，连天地间再无庇护他。",
    "SẮP XẾP CÂU": "真是地不栽，天不盖。/他/无家可归",
    "ĐÁP ÁN": "他无家可归，真是地不栽，天不盖。",
    "PHIÊN ÂM": "Tā wú jiā kě guī, zhēnshi dì bù zāi, tiān bù gài."
  },
  {
    "STT": 582,
    "SẮP XẾP CÂU": "就像地不栽，天不盖。/这种/漂泊/的/日子",
    "ĐÁP ÁN": "这种漂泊的日子，就像地不栽，天不盖。",
    "PHIÊN ÂM": "Zhè zhǒng piāobó de rìzi, jiù xiàng dì bù zāi, tiān bù gài."
  },
  {
    "STT": 583,
    "CHỮ": "D",
    "CỤM": "底儿朝天",
    "PINYIN": "dǐ er cháo tiān",
    "NGHĨA": "用光、见底，形容完全、彻底没有了。",
    "SẮP XẾP CÂU": "底儿朝天都/翻遍/了，/也没找到 / 那件/东西。/他/把/家",
    "ĐÁP ÁN": "他把家底儿朝天都翻遍了，也没找到那件东西。",
    "PHIÊN ÂM": "Tā bǎ jiā dǐ er cháo tiān dōu fānbiàn le, yě méi zhǎodào nà jiàn dōngxi."
  },
  {
    "STT": 584,
    "SẮP XẾP CÂU": "都底儿朝天了。/经过/一/番/搜查，/ 东西 / 桌子上/的 ",
    "ĐÁP ÁN": "经过一番搜查，桌子上的东西都底儿朝天了。",
    "PHIÊN ÂM": "Jīngguò yī fān sōuchá, zhuōzi shàng de dōngxi dōu dǐ er cháo tiān le."
  },
  {
    "STT": 585,
    "CHỮ": "D",
    "CỤM": "递和气",
    "PINYIN": "dì hé qì",
    "NGHĨA": "指主动与人接近，想把关系搞好。",
    "SẮP XẾP CÂU": "人缘/好。/他/这个人/ 很 / 会递和气，/所以",
    "ĐÁP ÁN": "他这个人很会递和气，所以人缘好。",
    "PHIÊN ÂM": "Tā zhège rén hěn huì dì hé qì, suǒyǐ rényuán hǎo."
  },
  {
    "STT": 586,
    "SẮP XẾP CÂU": "递和气。/遇到/矛盾/时，/要/学会",
    "ĐÁP ÁN": "遇到矛盾时，要学会递和气。",
    "PHIÊN ÂM": "Yùdào máodùn shí, yào xuéhuì dì hé qì."
  },
  {
    "STT": 587,
    "CHỮ": "D",
    "CỤM": "递门包",
    "PINYIN": "dì mén bāo",
    "NGHĨA": "指给看门人或通报人送礼。",
    "SẮP XẾP CÂU": "递门包。/他/为了/办事/顺利，/给/领导/递/了",
    "ĐÁP ÁN": "他为了办事顺利，给领导递了门包。",
    "PHIÊN ÂM": "Tā wèile bànshì shùnlì, gěi lǐngdǎo dì le mén bāo."
  },
  {
    "STT": 588,
    "SẮP XẾP CÂU": "是/不/道德的。/这种递门包的/行为",
    "ĐÁP ÁN": "这种递门包的行为，是不道德的。",
    "PHIÊN ÂM": "Zhè zhǒng dì mén bāo de xíngwéi, shì bù dàodé de."
  },
  {
    "STT": 589,
    "CHỮ": "D",
    "CỤM": "低门户",
    "PINYIN": "dī mén hù",
    "NGHĨA": "指出身卑微或家庭贫寒。",
    "SẮP XẾP CÂU": "但/为了/就业，/还是低门户了。/他/虽然/是高材生",
    "ĐÁP ÁN": "他虽然是高材生，但为了就业，还是低门户了。",
    "PHIÊN ÂM": "Tā suīrán shì gāocáishēng, dàn wèile jiùyè, háishì dī mén hù le."
  },
  {
    "STT": 590,
    "SẮP XẾP CÂU": "需要/很/大/的/勇气。/嫁/给/一个低门户的/人",
    "ĐÁP ÁN": "嫁给一个低门户的人，需要很大的勇气。",
    "PHIÊN ÂM": "Jià gěi yī ge dī mén hù de rén, xūyào hěn dà de yǒngqì."
  },
  {
    "STT": 591,
    "CHỮ": "D",
    "CỤM": "地面硬",
    "PINYIN": "dì miàn yìng",
    "NGHĨA": "比喻某地的人难以管理。",
    "SẮP XẾP CÂU": "没人/敢/惹。/他/这个/人地面硬",
    "ĐÁP ÁN": "他这个人地面硬，没人敢惹。",
    "PHIÊN ÂM": "Tā zhège rén dì miàn yìng, méi rén gǎn rě."
  },
  {
    "STT": 592,
    "SẮP XẾP CÂU": "做事/要/小心。/在/这种地面硬的/地方",
    "ĐÁP ÁN": "在这种地面硬的地方，做事要小心。",
    "PHIÊN ÂM": "Zài zhè zhǒng dì miàn yìng de dìfang, zuòshì yào xiǎoxīn."
  },
  {
    "STT": 593,
    "CHỮ": "D",
    "CỤM": "低三下四",
    "PINYIN": "dī sān xià sì",
    "NGHĨA": "指条件或身份等不如他人。",
    "SẮP XẾP CÂU": "低三下四。/他/为了/求/人，/不/得不",
    "ĐÁP ÁN": "他为了求人，不得不低三下四。",
    "PHIÊN ÂM": "Tā wèile qiú rén, bùdébù dī sān xià sì."
  },
  {
    "STT": 594,
    "SẮP XẾP CÂU": "低三下四，/要/有/骨气。/别/总是",
    "ĐÁP ÁN": "别总是低三下四，要有骨气。",
    "PHIÊN ÂM": "Bié zǒngshì dī sān xià sì, yào yǒu gǔqì."
  },
  {
    "STT": 595,
    "CHỮ": "D",
    "CỤM": "第三者插足",
    "PINYIN": "dì sān zhě chā zú",
    "NGHĨA": "指夫妻某一方的感情中出现了另外的人,干扰正常的家庭生活。",
    "SẮP XẾP CÂU": "而/破裂/了。/他们/的/婚姻/因为第三者插足",
    "ĐÁP ÁN": "他们的婚姻因为第三者插足而破裂了。",
    "PHIÊN ÂM": "Tāmen de hūnyīn yīnwèi dì sān zhě chā zú ér pòliè le."
  },
  {
    "STT": 596,
    "SẮP XẾP CÂU": "维护/家庭/稳定。/坚决/反对第三者插足",
    "ĐÁP ÁN": "坚决反对第三者插足，维护家庭稳定。",
    "PHIÊN ÂM": "Jiānjué fǎnduì dì sān zhě chā zú, wéihù jiātíng wěndìng."
  },
  {
    "STT": 597,
    "CHỮ": "D",
    "CỤM": "地上往来人金子",
    "PINYIN": "dì shàng wǎng lái rén jīn zi",
    "NGHĨA": "指意外获得财富。",
    "SẮP XẾP CÂU": "知道地上往来人金子。/他/这个/人/很/精明",
    "ĐÁP ÁN": "他这个人很精明，知道地上往来人金子。",
    "PHIÊN ÂM": "Tā zhège rén hěn jīngmíng, zhīdào dì shàng wǎng lái rén jīn zi."
  },
  {
    "STT": 598,
    "SẮP XẾP CÂU": "有/钱/能/使/鬼/推磨。/俗话说地上往来人金子",
    "ĐÁP ÁN": "俗话说地上往来人金子，有钱能使鬼推磨。",
    "PHIÊN ÂM": "Súhuàshuō dì shàng wǎng lái rén jīn zi, yǒu qián néng shǐ guǐ tuī mó."
  },
  {
    "STT": 599,
    "CHỮ": "D",
    "CỤM": "地生不熟",
    "PINYIN": "dì shēng bù shú",
    "NGHĨA": "指对某地的环境和道路不熟悉。",
    "SẮP XẾP CÂU": "一切/都地生不熟。/初来乍到，/这里/的",
    "ĐÁP ÁN": "初来乍到，这里的一切都地生不熟。",
    "PHIÊN ÂM": "Chūlái zhàdào, zhèlǐ de yīqiè dōu dì shēng bù shú."
  },
  {
    "STT": 600,
    "SẮP XẾP CÂU": "需要/地方 / 人 /这片/带路。/他对/ 地生不熟",
    "ĐÁP ÁN": "他对这片地方地生不熟，需要人带路。",
    "PHIÊN ÂM": "Tā duì zhè piàn dìfang dì shēng bù shú, xūyào rén dàilù."
  },
  {
    "STT": 601,
    "CHỮ": "D",
    "CỤM": "递条子",
    "PINYIN": "dì tiáo zi",
    "NGHĨA": "指为私事写蜜密信说情。",
    "SẮP XẾP CÂU": "递条子。/递/了/他/想/走/后门，/就/给/领导",
    "ĐÁP ÁN": "他想走后门，就给领导递了条子。",
    "PHIÊN ÂM": "Tā xiǎng zǒu hòumén, jiù gěi lǐngdǎo dì le tiáo zi."
  },
  {
    "STT": 602,
    "SẮP XẾP CÂU": "递条子的/行为，/是/不正/之/风。/这种",
    "ĐÁP ÁN": "这种递条子的行为，是不正之风。",
    "PHIÊN ÂM": "Zhè zhǒng dì tiáo zi de xíngwéi, shì bù zhèngzhīfēng."
  },
  {
    "STT": 603,
    "CHỮ": "D",
    "CỤM": "低头不见抬头见",
    "PINYIN": "dī tóu bù jiàn tái tóu jiàn",
    "NGHĨA": "见“抬头不见低头见”。",
    "SẮP XẾP CÂU": "低头不见抬头见的，/何必/闹僵？/都/是/邻居",
    "ĐÁP ÁN": "都是邻居，低头不见抬头见的，何必闹僵？",
    "PHIÊN ÂM": "Dōu shì línjū, dī tóu bù jiàn tái tóu jiàn de, hébì nàojiāng?"
  },
  {
    "STT": 604,
    "SẮP XẾP CÂU": "低头不见抬头见，/没/必要/把/关系/搞僵。/既然/在/一个/单位，/就",
    "ĐÁP ÁN": "既然在一个单位，就低头不见抬头见，没必要把关系搞僵。",
    "PHIÊN ÂM": "Jìrán zài yī ge dānwèi, jiù dī tóu bù jiàn tái tóu jiàn, méi bìyào bǎ guānxì gǎo jiāng."
  },
  {
    "STT": 605,
    "CHỮ": "D",
    "CỤM": "低头而进，仰面而出",
    "PINYIN": "dī tóu ér jìn, yǎng miàn ér chū",
    "NGHĨA": "指虽然处于一室，但谁都不理谁。",
    "SẮP XẾP CÂU": "低头而进，仰面而出。/他/为人/谦逊，/总是/而/出/仰面",
    "ĐÁP ÁN": "他为人谦逊，总是低头而进，仰面而出。",
    "PHIÊN ÂM": "Tā wéirén qiānxùn, zǒngshì dī tóu ér jìn, yǎng miàn ér chū."
  },
  {
    "STT": 606,
    "SẮP XẾP CÂU": "低头而进，仰面而出，/才/能/有所/成就。/做/学问/要",
    "ĐÁP ÁN": "做学问要低头而进，仰面而出，才能有所成就。",
    "PHIÊN ÂM": "Zuò xuéwèn yào dī tóu ér jìn, yǎng miàn ér chū, cái néng yǒu suǒ chéngjiù."
  },
  {
    "STT": 607,
    "CHỮ": "D",
    "CỤM": "低头进，低头出",
    "PINYIN": "dī tóu jìn, dī tóu chū",
    "NGHĨA": "形容为人谦逊，讲求礼数。",
    "SẮP XẾP CÂU": "低头进，低头出。/他/做事/低调，/总是/低头",
    "ĐÁP ÁN": "他做事低调，总是低头进，低头出。",
    "PHIÊN ÂM": "Tā zuòshì dīdiào, zǒngshì dī tóu jìn, dī tóu chū."
  },
  {
    "STT": 608,
    "SẮP XẾP CÂU": "低头进，低头出，/其实/心里/明白/得很。/别/看/他/平时",
    "ĐÁP ÁN": "别看他平时低头进，低头出，其实心里明白得很。",
    "PHIÊN ÂM": "Bié kàn tā píngshí dī tóu jìn, dī tóu chū, qíshí xīnlǐ míngbái de hěn."
  },
  {
    "STT": 609,
    "CHỮ": "D",
    "CỤM": "地头蛇",
    "PINYIN": "dì tóu shé",
    "NGHĨA": "指在当地很有势力的人。",
    "SẮP XẾP CÂU": "地头蛇，/势力/很/大。/他/是/当地/的",
    "ĐÁP ÁN": "他是当地的地头蛇，势力很大。",
    "PHIÊN ÂM": "Tā shì dāngdì de dì tóu shé, shìlì hěn dà."
  },
  {
    "STT": 610,
    "SẮP XẾP CÂU": "地头蛇，/我们/还是/小心/为/妙。/强龙/不/压",
    "ĐÁP ÁN": "强龙不压地头蛇，我们还是小心为妙。",
    "PHIÊN ÂM": "Qiánglóng bù yā dì tóu shé, wǒmen háishì xiǎoxīn wéimiào."
  },
  {
    "STT": 611,
    "CHỮ": "D",
    "CỤM": "地无三尺，山无一寸",
    "PINYIN": "dì wú sān chǐ, shān wú yī cùn",
    "NGHĨA": "形容极端贫困，一无所有。",
    "SẮP XẾP CÂU": "地无三尺，山无一寸。/这里/的/土地/贫瘠，/真是",
    "ĐÁP ÁN": "这里的土地贫瘠，真是地无三尺，山无一寸。",
    "PHIÊN ÂM": "Zhèlǐ de tǔdì pínjí, zhēnshi dì wú sān chǐ, shān wú yī cùn."
  },
  {
    "STT": 612,
    "SẮP XẾP CÂU": "地无三尺，山无一寸。/他/一无所有，/穷/得",
    "ĐÁP ÁN": "他一无所有，穷得地无三尺，山无一寸。",
    "PHIÊN ÂM": "Tā yīwúsuǒyǒu, qióng de dì wú sān chǐ, shān wú yī cùn."
  },
  {
    "STT": 613,
    "CHỮ": "D",
    "CỤM": "地下冒出来",
    "PINYIN": "dì xià mào chū lái",
    "NGHĨA": "指凭空出现。",
    "SẮP XẾP CÂU": "地下冒出来，/让/人/措手不及。/这个/问题/突然",
    "ĐÁP ÁN": "这个问题突然地下冒出来，让人措手不及。",
    "PHIÊN ÂM": "Zhè ge wèntí tūrán dì xià mào chū lái, ràng rén cuòshǒubùjí."
  },
  {
    "STT": 614,
    "SẮP XẾP CÂU": "地下冒出来，/搞/得/人心/惶惶。/谣言/不知/从/哪里",
    "ĐÁP ÁN": "谣言不知从哪里地下冒出来，搞得人心惶惶。",
    "PHIÊN ÂM": "Yáoyán bù zhī cóng nǎlǐ dì xià mào chū lái, gǎo de rénxīn huánghuáng."
  },
  {
    "STT": 615,
    "CHỮ": "D",
    "CỤM": "递眼色",
    "PINYIN": "dì yǎn sè",
    "NGHĨA": "指用眼神示意。",
    "SẮP XẾP CÂU": "递眼色，/示意/我/不要/说话。/他/给/我/递/了/个",
    "ĐÁP ÁN": "他给我递了个眼色，示意我不要说话。",
    "PHIÊN ÂM": "Tā gěi wǒ dì le ge yǎn sè, shìyì wǒ bù yào shuōhuà."
  },
  {
    "STT": 616,
    "SẮP XẾP CÂU": "递眼色，/但/我/没/明白。/她/用/眼神/给/我",
    "ĐÁP ÁN": "她用眼神给我递眼色，但我没明白。",
    "PHIÊN ÂM": "Tā yòng yǎnshén gěi wǒ dì yǎn sè, dàn wǒ méi míngbai."
  },
  {
    "STT": 617,
    "CHỮ": "D",
    "CỤM": "低着脑袋过日子",
    "PINYIN": "dī zhe nǎo dai guò rì zi",
    "NGHĨA": "指过一种忍让、屈从的生活。",
    "SẮP XẾP CÂU": "低着脑袋过日子，/从/不/争抢。/他/这/辈子/就/喜欢",
    "ĐÁP ÁN": "他这辈子就喜欢低着脑袋过日子，从不争抢。",
    "PHIÊN ÂM": "Tā zhè bèizi jiù xǐhuan dī zhe nǎo dai guò rì zi, cóng bù zhēngqiǎng."
  },
  {
    "STT": 618,
    "SẮP XẾP CÂU": "低着脑袋过日子，/我/要/活/出/精彩。/我/不/想",
    "ĐÁP ÁN": "我不想低着脑袋过日子，我要活出精彩。",
    "PHIÊN ÂM": "Wǒ bù xiǎng dīzhe nǎo dai guò rì zi, wǒ yào huó chū jīngcǎi."
  },
  {
    "STT": 619,
    "CHỮ": "D",
    "CỤM": "低着头吃哑巴亏",
    "PINYIN": "dī zhe tóu chī yǎ ba kuī",
    "NGHĨA": "指甘愿受欺负，吃了亏却不反抗。",
    "SẮP XẾP CÂU": "低着头吃哑巴亏，/要/学会/反抗。/别/总是",
    "ĐÁP ÁN": "别总是低着头吃哑巴亏，要学会反抗。",
    "PHIÊN ÂM": "Bié zǒngshì dī zhe tóu chī yǎ ba kuī, yào xuéhuì fǎnkàng."
  },
  {
    "STT": 620,
    "SẮP XẾP CÂU": "哑巴亏，/但/又/不能/说。/这/件/事/我/吃/了",
    "ĐÁP ÁN": "这件事我吃了哑巴亏，但又不能说。",
    "PHIÊN ÂM": "Zhè jiàn shì wǒ chī le yǎ ba kuī, dàn yòu bù néng shuō."
  },
  {
    "STT": 621,
    "CHỮ": "D",
    "CỤM": "底子薄",
    "PINYIN": "dǐ zi báo",
    "NGHĨA": "指物质基础或文化水平太差。",
    "SẮP XẾP CÂU": "底子薄，/进步/很/慢。/他/虽然/努力，/但",
    "ĐÁP ÁN": "他虽然努力，但底子薄，进步很慢。",
    "PHIÊN ÂM": "Tā suīrán nǔlì, dàn dǐ zi báo, jìnbù hěn màn."
  },
  {
    "STT": 622,
    "SẮP XẾP CÂU": "底子薄。/这/项/工作/对/专业/知识/要求/高，/我",
    "ĐÁP ÁN": "这项工作对专业知识要求高，我底子薄。",
    "PHIÊN ÂM": "Zhè xiàng gōngzuò duì zhuānyè zhīshi yāoqiú gāo, wǒ dǐ zi báo."
  },
  {
    "STT": 623,
    "CHỮ": "D",
    "CỤM": "底子厚",
    "PINYIN": "dǐ zi hòu",
    "NGHĨA": "指物质基础或文化基础良好。",
    "SẮP XẾP CÂU": "底子厚，/学/什么/都/快。/他/从小/学习/好",
    "ĐÁP ÁN": "他从小学习好，底子厚，学什么都快。",
    "PHIÊN ÂM": "Tā cóngxiǎo xuéxí hǎo, dǐ zi hòu, xué shénme dōu kuài."
  },
  {
    "STT": 624,
    "SẮP XẾP CÂU": "底子厚，/实力/强劲。/这/支/球队",
    "ĐÁP ÁN": "这支球队底子厚，实力强劲。",
    "PHIÊN ÂM": "Zhè zhī qiúduì dǐ zi hòu, shílì qiángjìng."
  },
  {
    "STT": 625,
    "CHỮ": "D",
    "CỤM": "点半截灯",
    "PINYIN": "diǎn bàn jié dēng",
    "NGHĨA": "比喻说话语中透露一点儿真意，但不挑明。",
    "SẮP XẾP CÂU": "点半截灯，/半途而废。/他/做事/总是",
    "ĐÁP ÁN": "他做事总是点半截灯，半途而废。",
    "PHIÊN ÂM": "Tā zuòshì zǒngshì diǎn bàn déng, bàntú'érfèi."
  },
  {
    "STT": 626,
    "SẮP XẾP CÂU": "点半截灯，/要/善始善终。/别",
    "ĐÁP ÁN": "别点半截灯，要善始善终。",
    "PHIÊN ÂM": "Bié diǎn bàn déng, yào shànshǐshànzhōng."
  },
  {
    "STT": 627,
    "CHỮ": "D",
    "CỤM": "垫刀背",
    "PINYIN": "diàn dāo bèi",
    "NGHĨA": "比喻替人辩解或替人承担责任、罪名。",
    "SẮP XẾP CÂU": "垫刀背。/他/为了/朋友/两肋插刀，/甚至/甘愿",
    "ĐÁP ÁN": "他为了朋友两肋插刀，甚至甘愿垫刀背。",
    "PHIÊN ÂM": "Tā wèile péngyou liǎnglèi chādāo, shènzhì gānyuàn diàn dāo bèi."
  },
  {
    "STT": 628,
    "SẮP XẾP CÂU": "垫刀背的/行为，/令/人/感动。/这种/牺牲/自己",
    "ĐÁP ÁN": "这种牺牲自己垫刀背的行为，令人感动。",
    "PHIÊN ÂM": "Zhè zhǒng xīshēng zìjǐ diàn dāo bèi de xíngwéi, lìng rén gǎndòng."
  },
  {
    "STT": 629,
    "CHỮ": "D",
    "CỤM": "点得着火的运气",
    "PINYIN": "diǎn de zhe huǒ de yùn qì",
    "NGHĨA": "形容运气非常好。",
    "SẮP XẾP CÂU": "点得着火的运气。/他/今天/的/运气/真/好",
    "ĐÁP ÁN": "他今天的运气真好，点得着火的运气。",
    "PHIÊN ÂM": "Tā jīntiān de yùnqì zhēn hǎo, diǎn de zhé huǒ de yùn qì."
  },
  {
    "STT": 630,
    "SẮP XẾP CÂU": "点得着火的运气，/顺利/通过/考试。/希望/我/能/有",
    "ĐÁP ÁN": "希望我能有点得着火的运气，顺利通过考试。",
    "PHIÊN ÂM": "Xīwàng wǒ néng yǒu diǎn de zhé huǒ de yùn qì, shùnlì tōngguò kǎoshì."
  },
  {
    "STT": 631,
    "CHỮ": "D",
    "CỤM": "垫底子",
    "PINYIN": "diàn dǐ zi",
    "NGHĨA": "比喻打基础。",
    "SẮP XẾP CÂU": "垫底子，/没/什么/突出/表现。/他/在/公司/里/总是",
    "ĐÁP ÁN": "他在公司里总是垫底子，没什么突出表现。",
    "PHIÊN ÂM": "Tā zài gōngsī lǐ zǒngshì diàn dǐ zi, méi shénme túchū biǎoxiàn."
  },
  {
    "STT": 632,
    "SẮP XẾP CÂU": "垫底子，/要/努力/争取/进步。/别/总是",
    "ĐÁP ÁN": "别总是垫底子，要努力争取进步。",
    "PHIÊN ÂM": "Bié zǒngshì diàn dǐ zi, yào nǔlì zhēngqǔ jìnbù."
  },
  {
    "STT": 633,
    "CHỮ": "D",
    "CỤM": "垫肚子",
    "PINYIN": "diàn dù zi",
    "NGHĨA": "指胡乱吃点东西暂时解饿。\r\n指代人受过或陪人受死。",
    "SẮP XẾP CÂU": "垫肚子吧。/饿/了/先/吃/点/东西/垫/垫",
    "ĐÁP ÁN": "饿了先吃点东西垫垫肚子吧。",
    "PHIÊN ÂM": "È le xiān chī diǎn dōngxi diàndian dù zi ba."
  },
  {
    "STT": 634,
    "SẮP XẾP CÂU": "垫肚子。/路上/买/点/零食",
    "ĐÁP ÁN": "路上买点零食垫肚子。",
    "PHIÊN ÂM": "Lùshàng mǎi diǎn língshí diàn dù zi."
  },
  {
    "STT": 635,
    "CHỮ": "D",
    "CỤM": "掂分量",
    "PINYIN": "diān fèn liàng",
    "NGHĨA": "指估量人能力的大小。\r\n比喻内心反复考虑、斟酌。",
    "SẮP XẾP CÂU": "掂分量。/他/说话/很/有/分量，/没/人/敢/不",
    "ĐÁP ÁN": "他说话很有分量，没人敢不掂分量。",
    "PHIÊN ÂM": "Tā shuōhuà hěn yǒu fènliàng, méi rén gǎn bù diān fèn liàng."
  },
  {
    "STT": 636,
    "SẮP XẾP CÂU": "掂量掂量分量。/这/件/事/你/得/好好",
    "ĐÁP ÁN": "这件事你得好好掂量掂量分量。",
    "PHIÊN ÂM": "Zhè jiàn shì nǐ děi hǎohǎo diānliang diān liàng fèn liàng."
  },
  {
    "STT": 637,
    "CHỮ": "D",
    "CỤM": "点根香，怕出烟",
    "PINYIN": "diǎn gēn xiāng, pà chū yān",
    "NGHĨA": "形容人胆小怕事或过于谨慎小心。",
    "SẮP XẾP CÂU": "点根香，怕出烟。/他/做贼心虚",
    "ĐÁP ÁN": "他做贼心虚，点根香，怕出烟。",
    "PHIÊN ÂM": "Tā zuòzéixīnxū, diǎn gēn xiāng, pà chū yān."
  },
  {
    "STT": 638,
    "SẮP XẾP CÂU": "点根香，怕出烟。/简直/是/这种/小心翼翼/的/样子",
    "ĐÁP ÁN": "这种小心翼翼的样子，简直是点根香，怕出烟。",
    "PHIÊN ÂM": "Zhè zhǒng xiǎoxīnyìyì de yàngzi, jiǎnzhí shì diǎn gēn xiāng, pà chū yān."
  },
  {
    "STT": 639,
    "CHỮ": "D",
    "CỤM": "垫棺材底",
    "PINYIN": "diàn guān cai dǐ",
    "NGHĨA": "指陪人一起死。",
    "SẮP XẾP CÂU": "垫棺材底了。/他/把/毕生/积蓄/都/拿/出/来",
    "ĐÁP ÁN": "他把毕生积蓄都拿出来垫棺材底了。",
    "PHIÊN ÂM": "Tā bǎ bìshēng jīxù dōu ná chūlái diàn guān cai dǐ le."
  },
  {
    "STT": 640,
    "SẮP XẾP CÂU": "垫棺材底的/钱，/不能/乱花。/这种/钱/是",
    "ĐÁP ÁN": "这种钱是垫棺材底的钱，不能乱花。",
    "PHIÊN ÂM": "Zhè zhǒng qián shì diàn guān cai dǐ de qián, bù néng luànhuā."
  },
  {
    "STT": 641,
    "CHỮ": "D",
    "CỤM": "点鬼火",
    "PINYIN": "diǎn guǐ huǒ",
    "NGHĨA": "比喻鼓动别人做坏事。",
    "SẮP XẾP CÂU": "点鬼火，/搞/些/歪门/邪道。/他/总是/喜欢",
    "ĐÁP ÁN": "他总是喜欢点鬼火，搞些歪门邪道。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan diǎn guǐ huǒ, gǎo xiē wāimén xiédào."
  },
  {
    "STT": 642,
    "SẮP XẾP CÂU": "点鬼火，/走/正道。/别",
    "ĐÁP ÁN": "别点鬼火，走正道。",
    "PHIÊN ÂM": "Bié diǎn guǐ huǒ, zǒu zhèngdào."
  },
  {
    "STT": 643,
    "CHỮ": "D",
    "CỤM": "掂过子",
    "PINYIN": "diān guò zi",
    "NGHĨA": "指反复提起。",
    "SẮP XẾP CÂU": "掂量掂量，/觉得/这/事/可行，/他/就/去/做/了",
    "ĐÁP ÁN": "他掂量掂量，觉得这事可行，就去做了。",
    "PHIÊN ÂM": "Tā diānliang diānliang, juéde zhè shì kěxíng, jiù qù zuò le."
  },
  {
    "STT": 644,
    "SẮP XẾP CÂU": "掂量掂量自己的/斤两。/你/得/先",
    "ĐÁP ÁN": "你得先掂量掂量自己的斤两。",
    "PHIÊN ÂM": "Nǐ děi xiān diānliang diānliang zìjǐ de jīnliàng."
  },
  {
    "STT": 645,
    "CHỮ": "D",
    "CỤM": "垫脚根儿",
    "PINYIN": "diàn jiǎo gēn er",
    "NGHĨA": "比喻给人家垫底，供人向上爬。",
    "SẮP XẾP CÂU": "垫脚根儿，/才/够/到/高/处/的/书。/他/踮着/脚尖",
    "ĐÁP ÁN": "他踮着脚尖垫脚根儿，才够到高处的书。",
    "PHIÊN ÂM": "Tā diǎnzhe jiǎojiān diàn jiǎo gēn er, cái gòu dào gāochù de shū."
  },
  {
    "STT": 646,
    "SẮP XẾP CÂU": "垫脚根儿，/要/找/个/梯子。/别/老/是",
    "ĐÁP ÁN": "别老是垫脚根儿，要找个梯子。",
    "PHIÊN ÂM": "Bié lǎoshì diàn jiǎo gēn er, yào zhǎo ge tīzi."
  },
  {
    "STT": 647,
    "CHỮ": "D",
    "CỤM": "掂斤拨两",
    "PINYIN": "diān jīn bō liǎng",
    "NGHĨA": "比喻试探人的水平、本领。\r\n比喻内心反复权衡、考虑。 \r\n比喻和人打交道过分计较或过分在意得失。",
    "SẮP XẾP CÂU": "掂斤拨两，/精打细算。/他/做事/总是",
    "ĐÁP ÁN": "他做事总是掂斤拨两，精打细算。",
    "PHIÊN ÂM": "Tā zuòshì zǒngshì diān jīn bō liǎng, jīngdáxìsuàn."
  },
  {
    "STT": 648,
    "SẮP XẾP CÂU": "掂斤拨两，/要/大气/一点。/别/总",
    "ĐÁP ÁN": "别总掂斤拨两，要大气一点。",
    "PHIÊN ÂM": "Bié zǒng diān jīn bō liǎng, yào dàqì yī diǎn."
  },
  {
    "STT": 649,
    "CHỮ": "D",
    "CỤM": "点迷津",
    "PINYIN": "diǎn mí jīn",
    "NGHĨA": "指为他人指明疑难的方法、途径。",
    "SẮP XẾP CÂU": "点迷津，/让/我/茅塞顿开。/感谢/老师/为/我",
    "ĐÁP ÁN": "感谢老师为我点迷津，让我茅塞顿开。",
    "PHIÊN ÂM": "Gǎnxiè lǎoshī wèi wǒ diǎn mí jīn, ràng wǒ máosèdùnkāi."
  },
  {
    "STT": 650,
    "SẮP XẾP CÂU": "点迷津。/遇到/困惑/时，/希望/有/人/能",
    "ĐÁP ÁN": "遇到困惑时，希望能有人点迷津。",
    "PHIÊN ÂM": "Yùdào kùnhuò shí, xīwàng néng yǒu rén diǎn mí jīn."
  },
  {
    "STT": 651,
    "CHỮ": "D",
    "CỤM": "掂人分量放小菜碟儿",
    "PINYIN": "diān rén fèn liàng fàng xiǎo cài dié er",
    "NGHĨA": "比喻根据对方身份、地位的不同而采取不同的态度。",
    "SẮP XẾP CÂU": "掂人分量放小菜碟儿，/见/人/说/人/话。/他/这个/人/很/会",
    "ĐÁP ÁN": "他这个人很会掂人分量放小菜碟儿，见人说人话。",
    "PHIÊN ÂM": "Tā zhège rén hěn huì diān rén fèn liàng fàng xiǎo cài dié er, jiàn rén shuō rénhuà."
  },
  {
    "STT": 652,
    "SẮP XẾP CÂU": "掂人分量放小菜碟儿。/别/指望/他/能/一视同仁，/他/总是",
    "ĐÁP ÁN": "别指望他能一视同仁，他总是掂人分量放小菜碟儿。",
    "PHIÊN ÂM": "Bié zhǐwàng tā néng yīshìtóngrén, tā zǒngshì diān rén fèn liàng fàng xiǎo cài dié er."
  },
  {
    "STT": 653,
    "CHỮ": "D",
    "CỤM": "垫舌根",
    "PINYIN": "diàn shé gēn",
    "NGHĨA": "比喻被人背后指责、议论。",
    "SẮP XẾP CÂU": "垫舌根，/拖泥带水。/他/说话/总是",
    "ĐÁP ÁN": "他说话总是垫舌根，拖泥带水。",
    "PHIÊN ÂM": "Tā shuōhuà zǒngshì diàn shé gēn, tuōnídàishuǐ."
  },
  {
    "STT": 654,
    "SẮP XẾP CÂU": "垫舌根，/直接/说。/别",
    "ĐÁP ÁN": "别垫舌根，直接说。",
    "PHIÊN ÂM": "Bié diàn shé gēn, zhíjiē shuō."
  },
  {
    "STT": 655,
    "CHỮ": "D",
    "CỤM": "点天灯",
    "PINYIN": "diǎn tiān dēng",
    "NGHĨA": "旧时一种酷刑。把人吊起来，身上浇油活活烧死。",
    "SẮP XẾP CÂU": "点天灯。/他/做/了/坏事，/迟早/要/被",
    "ĐÁP ÁN": "他做了坏事，迟早要被点天灯。",
    "PHIÊN ÂM": "Tā zuò le huàishì, chízǎo yào bèi diǎn tiān dēng."
  },
  {
    "STT": 656,
    "SẮP XẾP CÂU": "点天灯。/这种/残忍/的/行为，/简直/是",
    "ĐÁP ÁN": "这种残忍的行为，简直是点天灯。",
    "PHIÊN ÂM": "Zhè zhǒng cánrěn de xíngwéi, jiǎnzhí shì diǎn tiān dēng."
  },
  {
    "STT": 657,
    "CHỮ": "D",
    "CỤM": "点邪火",
    "PINYIN": "diǎn xié huǒ",
    "NGHĨA": "见“放邪火”。",
    "SẮP XẾP CÂU": "点邪火，/煽动/别人/做/坏事。/他/总是/喜欢",
    "ĐÁP ÁN": "他总是喜欢点邪火，煽动别人做坏事。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan diǎn xié huǒ, shāndòng biérén zuò huàishì."
  },
  {
    "STT": 658,
    "SẮP XẾP CÂU": "点邪火，/要/传播/正/能量。/别",
    "ĐÁP ÁN": "别点邪火，要传播正能量。",
    "PHIÊN ÂM": "Bié diǎn xié huǒ, yào chuánbò zhèng néngliàng."
  },
  {
    "STT": 659,
    "CHỮ": "D",
    "CỤM": "点子多",
    "PINYIN": "diǎn zi duō",
    "NGHĨA": "指人思维灵活，主意或计谋多。",
    "SẮP XẾP CÂU": "点子多的/人，/总/能/想/出/好/办法。/他/是/个",
    "ĐÁP ÁN": "他是个点子多的人，总能想出好办法。",
    "PHIÊN ÂM": "Tā shì ge diǎn zi duō de rén, zǒng néng xiǎng chū hǎo bànfǎ."
  },
  {
    "STT": 660,
    "SẮP XẾP CÂU": "点子多的/人/来/解决/这个/问题。/我们/需要/一个",
    "ĐÁP ÁN": "我们需要一个点子多的人来解决这个问题。",
    "PHIÊN ÂM": "Wǒmen xūyào yī ge diǎn zi duō de rén lái jiějué zhège wèntí."
  },
  {
    "STT": 661,
    "CHỮ": "D",
    "CỤM": "吊膀子",
    "PINYIN": "diào bǎng zi",
    "NGHĨA": "比喻人说话、做事反复无常,一会儿一个样儿。",
    "SẮP XẾP CÂU": "吊膀子，/很/不/检点。/她/喜欢/和/男人",
    "ĐÁP ÁN": "她喜欢和男人吊膀子，很不检点。",
    "PHIÊN ÂM": "Tā xǐhuan hé nánrén diào bǎng zi, hěn bù jiǎndiǎn."
  },
  {
    "STT": 662,
    "SẮP XẾP CÂU": "吊膀子，/这/是/不对/的。/别/和/已婚/男人",
    "ĐÁP ÁN": "别和已婚男人吊膀子，这是不对的。",
    "PHIÊN ÂM": "Bié hé yǐhūn nánrén diào bǎng zi, zhè shì bù duì de."
  },
  {
    "STT": 663,
    "CHỮ": "D",
    "CỤM": "钓大鱼",
    "PINYIN": "diào dà yú",
    "NGHĨA": "比喻获得极大的利益。",
    "SẮP XẾP CÂU": "钓大鱼，/等待/合适/的/时机。/他/一直/在",
    "ĐÁP ÁN": "他一直在钓大鱼，等待合适的时机。",
    "PHIÊN ÂM": "Tā yīzhí zài diào dà yú, děngdài héshì de shíjī."
  },
  {
    "STT": 664,
    "SẮP XẾP CÂU": "钓大鱼的/机会，/不能/错过。/这次/合作/是/个",
    "ĐÁP ÁN": "这次合作是个钓大鱼的机会，不能错过。",
    "PHIÊN ÂM": "Zhè cì hézuò shì ge diào dà yú de jīhuì, bù néng cuòguò."
  },
  {
    "STT": 665,
    "CHỮ": "D",
    "CỤM": "吊到喉咙的心放下",
    "PINYIN": "diào dào hóu lóng de xīn fàng xià",
    "NGHĨA": "指不再担忧、惊恐。",
    "SẮP XẾP CÂU": "吊到喉咙的心放下了。/听到/他/平安/的/消息，/我",
    "ĐÁP ÁN": "听到他平安的消息，我吊到喉咙的心放下了。",
    "PHIÊN ÂM": "Tīngdào tā píng'ān de xiāoxi, wǒ diào dào hóu lóng de xīn fàng xià le."
  },
  {
    "STT": 666,
    "SẮP XẾP CÂU": "吊到喉咙的心放下了。/考试/成绩/出来/后，/我",
    "ĐÁP ÁN": "考试成绩出来后，我吊到喉咙的心放下了。",
    "PHIÊN ÂM": "Kǎoshì chéngjī chūlái hòu, wǒ diào dào hóu lóng de xīn fàng xià le."
  },
  {
    "STT": 667,
    "CHỮ": "D",
    "CỤM": "掉到黄河也洗不清",
    "PINYIN": "diào dào huáng hé yě xǐ bù qīng",
    "NGHĨA": "比喻永远无法向人澄清事实，洗刷冤屈。",
    "SẮP XẾP CÂU": "掉到黄河也洗不清了。/这/件/事/他/说/不清，/真是",
    "ĐÁP ÁN": "这件事他说不清，真是掉到黄河也洗不清了。",
    "PHIÊN ÂM": "Zhè jiàn shì tā shuō bu qīng, zhēnshi diào dào huáng hé yě xǐ bu qīng le."
  },
  {
    "STT": 668,
    "SẮP XẾP CÂU": "掉到黄河也洗不清。/他/被/冤枉/了，/跳/进/黄河/也/洗/不清",
    "ĐÁP ÁN": "他被冤枉了，跳进黄河也洗不清。",
    "PHIÊN ÂM": "Tā bèi yuānwǎng le, tiào jìn huáng hé yě xǐ bu qīng."
  },
  {
    "STT": 669,
    "CHỮ": "D",
    "CỤM": "掉个灰堆也怕碰破头",
    "PINYIN": "diào gè huī duī yě pà pèng pò tóu",
    "NGHĨA": "讽刺人胆小怕事或过分谨慎。",
    "SẮP XẾP CÂU": "掉个灰堆也怕碰破头。/他/这个/人/太/胆小/了",
    "ĐÁP ÁN": "他这个人太胆小了，掉个灰堆也怕碰破头。",
    "PHIÊN ÂM": "Tā zhège rén tài dǎnxiǎo le, diào ge huī duī yě pà pèng pò tóu."
  },
  {
    "STT": 670,
    "SẮP XẾP CÂU": "掉个灰堆也怕碰破头。/别/那么/小心翼翼",
    "ĐÁP ÁN": "别那么小心翼翼，掉个灰堆也怕碰破头。",
    "PHIÊN ÂM": "Bié nàme xiǎoxīnyìyì, diào ge huī duī yě pà pèng pò tóu."
  },
  {
    "STT": 671,
    "CHỮ": "D",
    "CỤM": "掉海不泛泡",
    "PINYIN": "diào hǎi bù fàn pào",
    "NGHĨA": "掉进海里都不会泛起泡沫。咒人不得好死。",
    "SẮP XẾP CÂU": "掉海不泛泡。/他/这个/人/深藏不露",
    "ĐÁP ÁN": "他这个人深藏不露，掉海不泛泡。",
    "PHIÊN ÂM": "Tā zhège rén shēncángbùlù, diào hǎi bù fàn pào."
  },
  {
    "STT": 672,
    "SẮP XẾP CÂU": "掉海不泛泡。/别/看/他/平时/不/声/不/响，/其实",
    "ĐÁP ÁN": "别看他平时不声不响，其实掉海不泛泡。",
    "PHIÊN ÂM": "Bié kàn tā píngshí bù shēng bù xiǎng, qíshí diào hǎi bù fàn pào."
  },
  {
    "STT": 673,
    "CHỮ": "D",
    "CỤM": "掉花枪",
    "PINYIN": "diào huā qiāng",
    "NGHĨA": "喻指玩弄技巧，卖弄小聪明。",
    "SẮP XẾP CÂU": "掉花枪，/不/认真/办事。/他/总是/喜欢",
    "ĐÁP ÁN": "他总是喜欢掉花枪，不认真办事。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan diào huā qiāng, bù rènzhēn bànshì."
  },
  {
    "STT": 674,
    "SẮP XẾP CÂU": "掉花枪了，/快点/把/事情/做/完。/别",
    "ĐÁP ÁN": "别掉花枪了，快点把事情做完。",
    "PHIÊN ÂM": "Bié diào huā qiāng le, kuài diǎn bǎ shìqíng zuò wán."
  },
  {
    "STT": 675,
    "CHỮ": "D",
    "CỤM": "掉架子",
    "PINYIN": "diào jià zi",
    "NGHĨA": "指有失身份，尊严。",
    "SẮP XẾP CÂU": "掉架子。/他/自从/当/上/领导，/就/再/也/没/掉/过",
    "ĐÁP ÁN": "他自从当上领导，就再也没掉过架子。",
    "PHIÊN ÂM": "Tā zìcóng dāng shàng lǐngdǎo, jiù zài yě méi diào guò jià zi."
  },
  {
    "STT": 676,
    "SẮP XẾP CÂU": "掉掉架子。/别/老/端着，/适当",
    "ĐÁP ÁN": "别老端着，适当掉掉架子。",
    "PHIÊN ÂM": "Bié lǎo duānzhe, shìdàng diào diào jià zi."
  },
  {
    "STT": 677,
    "CHỮ": "D",
    "CỤM": "钓金龟婿",
    "PINYIN": "diào jīn guī xù",
    "NGHĨA": "比喻找有钱或有前途的好女婿。",
    "SẮP XẾP CÂU": "钓金龟婿，/嫁/入/豪门。/她/一心/想",
    "ĐÁP ÁN": "她一心想钓金龟婿，嫁入豪门。",
    "PHIÊN ÂM": "Tā yīxīn xiǎng diào jīn guī xù, jià rù háomén."
  },
  {
    "STT": 678,
    "SẮP XẾP CÂU": "钓金龟婿，/要/靠/自己/奋斗。/别/指望",
    "ĐÁP ÁN": "别指望钓金龟婿，要靠自己奋斗。",
    "PHIÊN ÂM": "Bié zhǐwàng diào jīn guī xù, yào kào zìjǐ fèndòu."
  },
  {
    "STT": 679,
    "CHỮ": "D",
    "CỤM": "掉进葫芦里",
    "PINYIN": "diào jìn hú lú lǐ",
    "NGHĨA": "葫芦：上窄下宽。东西掉进去很难出来。比喻有进无出。",
    "SẮP XẾP CÂU": "掉进葫芦里。/他/这个/人/太/单纯，/总是/掉/进",
    "ĐÁP ÁN": "他这个人太单纯，总是掉进葫alo里。",
    "PHIÊN ÂM": "Tā zhège rén tài dānchún, zǒngshì diào jìn hú lú lǐ."
  },
  {
    "STT": 680,
    "SẮP XẾP CÂU": "掉进葫芦里。/小心/别/被/他/的/花言巧语/迷惑，/掉/进",
    "ĐÁP ÁN": "别被他的花言巧语迷惑，小心掉进葫芦里。",
    "PHIÊN ÂM": "Bié bèi tā de huāyányǎoyǔ míhuò, xiǎoxīn diào jìn hú lú lǐ."
  },
  {
    "STT": 681,
    "CHỮ": "D",
    "CỤM": "掉进火坑里",
    "PINYIN": "diào jìn huǒ kēng lǐ",
    "NGHĨA": "比喻处于危险或痛苦的境地。",
    "SẮP XẾP CÂU": "掉进火坑里。/她/为了/爱情，/不顾/一切/掉/进",
    "ĐÁP ÁN": "她为了爱情，不顾一切掉进火坑里。",
    "PHIÊN ÂM": "Tā wèile àiqíng, bù gù yīqiè diào jìn huǒ kēng lǐ."
  },
  {
    "STT": 682,
    "SẮP XẾP CÂU": "掉进火坑里。/这种/生意/风险/太大，/简直/是/掉/进",
    "ĐÁP ÁN": "这种生意风险太大，简直是掉进火坑里。",
    "PHIÊN ÂM": "Zhè zhǒng shēngyì fēngxiǎn tài dà, jiǎnzhí shì diào jìn huǒ kēng lǐ."
  },
  {
    "STT": 683,
    "CHỮ": "D",
    "CỤM": "掉链子",
    "PINYIN": "diào liàn zi",
    "NGHĨA": "比喻关键时刻出了问题。",
    "SẮP XẾP CÂU": "掉链子了，/导致/任务/失败。/关键/时刻/他",
    "ĐÁP ÁN": "关键时刻他掉链子了，导致任务失败。",
    "PHIÊN ÂM": "Guānjiàn shíhou tā diào liàn zi le, dǎozhì rènwù shībài."
  },
  {
    "STT": 684,
    "SẮP XẾP CÂU": "掉链子，/一定/要/完成/任务。/我/可/不能",
    "ĐÁP ÁN": "我可不能掉链子，一定要完成任务。",
    "PHIÊN ÂM": "Wǒ kě bù néng diào liàn zi, yīdìng yào wánchéng rènwù."
  },
  {
    "STT": 685,
    "CHỮ": "D",
    "CỤM": "掉脸子",
    "PINYIN": "diào liǎn zi",
    "NGHĨA": "指因生气而把脸沉下来。",
    "SẮP XẾP CÂU": "掉脸子，/让/人/很/尴尬。/他/一/生气/就",
    "ĐÁP ÁN": "他一生气就掉脸子，让人很尴尬。",
    "PHIÊN ÂM": "Tā yī shēngqì jiù diào liǎn zi, ràng rén hěn gānggà."
  },
  {
    "STT": 686,
    "SẮP XẾP CÂU": "掉脸子，/要/学会/控制/情绪。/别/动不动/就",
    "ĐÁP ÁN": "别动不动就掉脸子，要学会控制情绪。",
    "PHIÊN ÂM": "Bié dòng bù dòng jiù diào liǎn zi, yào xuéhuì kòngzhì qíngxù."
  },
  {
    "STT": 687,
    "CHỮ": "D",
    "CỤM": "掉脑袋",
    "PINYIN": "diào nǎo dai",
    "NGHĨA": "指失去性命。",
    "SẮP XẾP CÂU": "掉脑袋的。/这种/事情/要是/被/发现，/是/要",
    "ĐÁP ÁN": "这种事情要是被发现，是要掉脑袋的。",
    "PHIÊN ÂM": "Zhè zhǒng shìqíng yàoshì bèi fāxiàn, shì yào diào nǎo dai de."
  },
  {
    "STT": 688,
    "SẮP XẾP CÂU": "掉脑袋。/为了/保住/秘密，/他/甚至/不惜/掉",
    "ĐÁP ÁN": "为了保住秘密，他甚至不惜掉脑袋。",
    "PHIÊN ÂM": "Wèile bǎozhù mìmì, tā shènzhì bù xī diào nǎo dai."
  },
  {
    "STT": 689,
    "CHỮ": "D",
    "CỤM": "吊起铁锅当钟敲",
    "PINYIN": "diào qǐ tiě guō dāng zhōng qiāo",
    "NGHĨA": "吊起锅来不能做饭。形容生活贫困，无米下锅。",
    "SẮP XẾP CÂU": "吊起铁锅当钟敲。/他/为了/吸引/顾客，/竟然/吊/起/铁/锅/当/钟/敲",
    "ĐÁP ÁN": "他为了吸引顾客，竟然吊起铁锅当钟敲。",
    "PHIÊN ÂM": "Tā wèile xīyǐn gùkè, jìngrán diào qǐ tiě guō dāng zhōng qiāo."
  },
  {
    "STT": 690,
    "SẮP XẾP CÂU": "吊起铁锅当钟敲。/这种/哗众取宠/的/行为，/简直/是/吊/起/铁/锅/当/钟/敲",
    "ĐÁP ÁN": "这种哗众取宠的行为，简直是吊起铁锅当钟敲。",
    "PHIÊN ÂM": "Zhè zhǒng huázhòngqǔchǒng de xíngwéi, jiǎnzhí shì diào qǐ tiě guō dāng zhōng qiāo."
  },
  {
    "STT": 691,
    "CHỮ": "D",
    "CỤM": "吊起下巴乱说话",
    "PINYIN": "diào qǐ xià bā luàn shuō huà",
    "NGHĨA": "指不顾事实，不计后果胡乱说话。",
    "SẮP XẾP CÂU": "吊起下巴乱说话。/他/喝醉/酒/后，/总是/吊/起/下巴/乱/说/话",
    "ĐÁP ÁN": "他喝醉酒后，总是吊起下巴乱说话。",
    "PHIÊN ÂM": "Tā hēzuì jiǔ hòu, zǒngshì diào qǐ xià bā luàn shuō huà."
  },
  {
    "STT": 692,
    "SẮP XẾP CÂU": "吊起下巴乱说话，/要/对/自己/的/言行/负责。/别/吊/起/下巴/乱/说/话",
    "ĐÁP ÁN": "别吊起下巴乱说话，要对自己的言行负责。",
    "PHIÊN ÂM": "Bié diào qǐ xià bā luàn shuō huà, yào duì zìjǐ de yánxíng fùzé."
  },
  {
    "STT": 693,
    "CHỮ": "D",
    "CỤM": "掉三寸之舌",
    "PINYIN": "diào sān cùn zhī shé",
    "NGHĨA": "指巧言辩解。",
    "SẮP XẾP CÂU": "掉三寸之舌说服/了/对方。/他/能言善辩，/凭着",
    "ĐÁP ÁN": "他能言善辩，凭着掉三寸之舌说服了对方。",
    "PHIÊN ÂM": "Tā néngyánshànbiàn, píngzhe diào sān cùn zhī shé shuōfú le duìfāng."
  },
  {
    "STT": 694,
    "SẮP XẾP CÂU": "掉三寸之舌就/能/成功，/还要/有/真/本事。/别/指望/靠",
    "ĐÁP ÁN": "别指望靠掉三寸之舌就能成功，还要有真本事。",
    "PHIÊN ÂM": "Bié zhǐwàng kào diào sān cùn zhī shé jiù néng chénggōng, hái yào yǒu zhēnběnshì."
  },
  {
    "STT": 695,
    "CHỮ": "D",
    "CỤM": "掉书袋",
    "PINYIN": "diào shū dài",
    "NGHĨA": "形容说话,做事非常认真,一点儿也不马虎。",
    "SẮP XẾP CÂU": "掉书袋，/显得/很/迂腐。/他/总是/喜欢",
    "ĐÁP ÁN": "他总是喜欢掉书袋，显得很迂腐。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan diào shū dài, xiǎnde hěn yūfǔ."
  },
  {
    "STT": 696,
    "SẮP XẾP CÂU": "掉书袋，/要/通俗易懂。/说话/别/老",
    "ĐÁP ÁN": "说话别老掉书袋，要通俗易懂。",
    "PHIÊN ÂM": "Shuōhuà bié lǎo diào shū dài, yào tōngsú yìdǒng."
  },
  {
    "STT": 697,
    "CHỮ": "D",
    "CỤM": "吊桶落在井里",
    "PINYIN": "diào tǒng luò zài jǐng lǐ",
    "NGHĨA": "比喻使人落空，无法摆脱。",
    "SẮP XẾP CÂU": "吊桶落在井里，/七上八下。/他/的/心/就/像/吊/桶/落/在/井/里",
    "ĐÁP ÁN": "他的心就像吊桶落在井里，七上八下。",
    "PHIÊN ÂM": "Tā de xīn jiù xiàng diào tǒng luò zài jǐng lǐ, qī shàng bā xià."
  },
  {
    "STT": 698,
    "SẮP XẾP CÂU": "吊桶落在井里。/听到/这个/消息，/我/的/心/就/像/吊/桶/落/在/井/里",
    "ĐÁP ÁN": "听到这个消息，我的心就像吊桶落在井里。",
    "PHIÊN ÂM": "Tīngdào zhège xiāoxi, wǒ de xīn jiù xiàng diào tǒng luò zài jǐng lǐ."
  },
  {
    "STT": 699,
    "CHỮ": "D",
    "CỤM": "吊胃口",
    "PINYIN": "diào wèi kǒu",
    "NGHĨA": "比喻诱使人产生兴趣、欲望。",
    "SẮP XẾP CÂU": "吊胃口，/不/说/重点。/他/总是/喜欢",
    "ĐÁP ÁN": "他总是喜欢吊胃口，不说重点。",
    "PHIÊN ÂM": "Tā zǒngshì xǐhuan diào wèi kǒu, bù shuō zhòngdiǎn."
  },
  {
    "STT": 700,
    "SẮP XẾP CÂU": "吊胃口了，/快点/把/谜底/揭开/吧。/别",
    "ĐÁP ÁN": "别吊胃口了，快点把谜底揭开吧。",
    "PHIÊN ÂM": "Bié diào wèi kǒu le, kuài diǎn bǎ mídǐ jiēkāi ba."
  },
  {
    "STT": 701,
    "CHỮ": "D",
    "CỤM": "掉眼线",
    "PINYIN": "diào yǎn xiàn",
    "NGHĨA": "指暗地里探听消息。",
    "SẮP XẾP CÂU": "结果 / 我们 / 因为 / 白忙活一场。/ 本来 / 对方 / “掉眼线” 了，/ 谈好了合作，/ 临时变卦，",
    "ĐÁP ÁN": "本来谈好了合作，结果因为对方临时变卦，我们 “掉眼线” 了，白忙活一场。",
    "PHIÊN ÂM": "Běnlái tánhǎo le hézuò, jiéguǒ yīnwèi duìfāng línshí biànguà, wǒmen “diào yǎn xiàn” le, bái mánghuó yī chǎng."
  },
  {
    "STT": 702,
    "SẮP XẾP CÂU": "却因为 / 很多简单的题 / “掉眼线” 了，/ 考试前 / 都做错了。/ 准备充分，/ 粗心大意，",
    "ĐÁP ÁN": "考试前准备充分，却因为粗心大意，“掉眼线” 了，很多简单的题都做错了。",
    "PHIÊN ÂM": "Kǎoshì qián zhǔnbèi chōngfèn, què yīnwèi cūxīn dàyì, “diào yǎn xiàn” le, hěn duō jiǎndān de tí dōu zuòcuò le."
  },
  {
    "STT": 703,
    "CHỮ": "D",
    "CỤM": "吊油嘴",
    "PINYIN": "diào yóu zuǐ",
    "NGHĨA": "指说些无聊的或开玩笑的话。",
    "SẮP XẾP CÂU": "最后 / 让人很失望。/ 他 / 却都 / 总是 / 办不成，/ “吊油嘴”，/ 夸下海口 / 说能办成的事，",
    "ĐÁP ÁN": "他总是 “吊油嘴”，夸下海口说能办成的事，最后却都办不成，让人很失望。",
    "PHIÊN ÂM": "Tā zǒngshì “diào yóu zuǐ”, kuā xià hǎikǒu shuō néng bànchéng de shì, zuìhòu què dōu bàn bù chéng, ràng rén hěn shīwàng."
  },
  {
    "STT": 704,
    "SẮP XẾP CÂU": "结果 / 他 / 在面试中 / 吹嘘 / 被问得 / 自己的能力，/ “吊油嘴” / 哑口无言。",
    "ĐÁP ÁN": "他 “吊油嘴” 吹嘘自己的能力，结果在面试中被问得哑口无言。",
    "PHIÊN ÂM": "Tā “diào yóu zuǐ” chuīxū zìjǐ de nénglì, jiéguǒ zài miànshì zhōng bèi wèn de yǎkǒuwúyán."
  },
  {
    "STT": 705,
    "CHỮ": "D",
    "CỤM": "钓鱼跑了鱼钩，卖面翻了笸箩",
    "PINYIN": "diào yú pǎo le yú gōu, mài miàn fān le pǒ luo",
    "NGHĨA": "形容倒霉透顶，事事不顺。",
    "SẮP XẾP CÂU": "回家路上又摔了一跤。/“钓鱼跑了鱼钩，/卖面翻了笸箩”，/真倒霉！/今天考试没考好，",
    "ĐÁP ÁN": "今天考试没考好，回家路上又摔了一跤。“钓鱼跑了鱼钩，卖面翻了笸箩”，真倒霉！",
    "PHIÊN ÂM": "Jīntiān kǎoshì méi kǎo hǎo, huíjiā lùshàng yòu shuāi le yī jiāo. “Diào yú pǎo le yú gōu, mài miàn fān le pǒ luo”, zhēn dǎoméi!"
  },
  {
    "STT": 706,
    "SẮP XẾP CÂU": "“钓鱼跑了鱼钩，/卖面翻了笸箩”，/辛辛苦苦做的菜，/真是白忙活一场。/不小心打翻了。",
    "ĐÁP ÁN": "辛辛苦苦做的菜，不小心打翻了。“钓鱼跑了鱼钩，卖面翻了笸箩”，真是白忙活一场。",
    "PHIÊN ÂM": "Xīnkǔ xīnkǔ zuò de cài, bù xiǎoxīn dǎ fān le. “Diào yú pǎo le yú gōu, mài miàn fān le pǒ luo”, zhēnshi bái mánghuó yī chǎng."
  },
  {
    "STT": 707,
    "CHỮ": "D",
    "CỤM": "掉在地上摔三截",
    "PINYIN": "diào zài dì shàng shuāi sān jié",
    "NGHĨA": "形容人喝醉后摇摇晃晃。",
    "SẮP XẾP CÂU": "不小心 / 精心制作的 / 掉在地上摔得粉碎。 / 陶艺作品，",
    "ĐÁP ÁN": "精心制作的陶艺作品，不小心掉在地上摔得粉碎。",
    "PHIÊN ÂM": "Jīngxīn zhìzuò de táoyì zuòpǐn, bù xiǎoxīn diào zài dì shàng shuāi de fěn suì."
  },
  {
    "STT": 708,
    "SẮP XẾP CÂU": "不小心掉在地上摔三截，/真是心疼死了！/我新买的瓷器花瓶，",
    "ĐÁP ÁN": "我新买的瓷器花瓶，不小心掉在地上摔三截，真是心疼死了！",
    "PHIÊN ÂM": "Wǒ xīn mǎi de cíqì huāpíng, bù xiǎoxīn diào zài dì shàng shuāi sān jié, zhēnshi xīnténg sǐ le!"
  },
  {
    "STT": 709,
    "CHỮ": "D",
    "CỤM": "掉在井里没人问，丢在道上没人捡",
    "PINYIN": "diào zài jǐng lǐ méi rén wèn, diū zài dào shàng méi rén jiǎn",
    "NGHĨA": "指没人管，没人关心或没人愿意搭理。",
    "SẮP XẾP CÂU": "朋友们 / 感觉自己 / 都 / 他 / 疏远了他，/ 被公司辞退后，/ 很孤独无助。",
    "ĐÁP ÁN": "他被公司辞退后，朋友们都疏远了他，感觉自己很孤独无助。",
    "PHIÊN ÂM": "Tā zài gōngsī méi shénme dìwèi, chū le shì yě méi rén guānxīn, zhēn shì diào zài jǐng lǐ méi rén wèn, diū zài dào shàng méi rén jiǎn."
  },
  {
    "STT": 710,
    "SẮP XẾP CÂU": "无人理睬， / 在 / 掉在井里没人问，丢在道上没人捡一样， / 他 / 令人心酸。 / 那个流浪汉 / 就像 / 街头 / 乞讨，",
    "ĐÁP ÁN": "那个流浪汉在街头乞讨，无人理睬，他就像掉在井里没人问，丢在道上没人捡一样，令人心酸。",
    "PHIÊN ÂM": "Nà ge liúlànghàn zài jiētóu qǐtǎo, wú rén lǐcǎi, tā jiù xiàng diào zài jǐng lǐ méi rén wèn, diū zài dào shàng méi rén jiǎn yīyàng, lìng rén xīnsuān."
  },
  {
    "STT": 711,
    "CHỮ": "D",
    "CỤM": "掉在面糊盆内",
    "PINYIN": "diào zài miàn hú pén nèi",
    "NGHĨA": "形容人头脑糊涂,请不请是非。",
    "SẮP XẾP CÂU": "感觉 / 复杂的 / 难以脱身。 / 他 / 掉在面糊盆内， / 自己 / 卷入了 / 官司，",
    "ĐÁP ÁN": "他卷入了复杂的官司，感觉自己掉在面糊盆内，难以脱身。",
    "PHIÊN ÂM": "Tā juǎnrù le fùzá de guānsi, gǎnjué zìjǐ diào zài miàn hú pén nèi, nányǐ tuōshēn."
  },
  {
    "STT": 712,
    "SẮP XẾP CÂU": "不知道 / 我们 / 问题重重， / 就像 / 这个项目 / 该如何解决。 / 现在 / 掉在面糊盆内，",
    "ĐÁP ÁN": "这个项目问题重重，我们现在就像掉在面糊盆内，不知道该如何解决。",
    "PHIÊN ÂM": "Zhè ge xiàng mù wèntí chóng chóng, wǒmen xiàn zài jiù xiàng diào zài miàn hú pén nèi, bù zhīdào gāi rúhé jiějué."
  },
  {
    "STT": 713,
    "CHỮ": "D",
    "CỤM": "掉在脑后",
    "PINYIN": "diào zài nǎo hòu",
    "NGHĨA": "见“撇在脑后”。",
    "SẮP XẾP CÂU": "掉在脑后了， / 结果 / 我 / 还书的事儿 / 把 / 超过了 / 期限。",
    "ĐÁP ÁN": "我把还书的事儿掉在脑后了，结果超过了期限。",
    "PHIÊN ÂM": "Wǒ bǎ huán shū de shìr diào zài nǎo hòu le, jiéguǒ chāoguò le qíxiàn."
  },
  {
    "STT": 714,
    "SẮP XẾP CÂU": "掉在脑后了， / 他 / 让人 / 答应别人的事情 / 把 / 很失望。",
    "ĐÁP ÁN": "他把答应别人的事情掉在脑后了，让人很失望。",
    "PHIÊN ÂM": "Tā bǎ dāyìng biérén de shìqíng diào zài nǎo hòu le, ràng rén hěn shīwàng."
  },
  {
    "STT": 715,
    "CHỮ": "D",
    "CỤM": "掉在泥坑里头",
    "PINYIN": "diào zài ní kēng lǐ tou",
    "NGHĨA": "比喻遭遇困境。",
    "SẮP XẾP CÂU": "掉在泥坑里头， / 他 / 贪污受贿， / 声名扫地。 / 因为",
    "ĐÁP ÁN": "他因为贪污受贿，掉在泥坑里头，声名扫地。",
    "PHIÊN ÂM": "Tā yīnwèi tānwū shòuhuì, diào zài ní kēng lǐ tou, shēngmíng sǎodì."
  },
  {
    "STT": 716,
    "SẮP XẾP CÂU": "身心俱疲。 / 这场官司 / 掉在泥坑里头， / 让他",
    "ĐÁP ÁN": "这场官司让他掉在泥坑里头，身心俱疲。",
    "PHIÊN ÂM": "Zhè chǎng guānsi ràng tā diào zài ní kēng lǐ tou, shēnxīn jù pí."
  },
  {
    "STT": 717,
    "CHỮ": "D",
    "CỤM": "掉在自己挖的坑子里",
    "PINYIN": "diào zài zì jǐ wā de kēng zi lǐ",
    "NGHĨA": "比喻害人不成终害己。",
    "SẮP XẾP CÂU": "最终 / 掉在自己挖的坑里， / 他 / 输掉了比赛。 / 因为 / 轻敌，",
    "ĐÁP ÁN": "他因为轻敌，最终掉在自己挖的坑里，输掉了比赛。\r\n",
    "PHIÊN ÂM": "Tā yīnwèi qīngdí, zuìzhōng diào zài zì jǐ wā de kēng zi lǐ, shū diào le bǐsài."
  },
  {
    "STT": 718,
    "SẮP XẾP CÂU": "损失惨重。 / 结果 / 贪图小便宜， / 他 / 掉在自己挖的坑里， / 为了",
    "ĐÁP ÁN": "他为了贪图小便宜，结果掉在自己挖的坑里，损失惨重。",
    "PHIÊN ÂM": "Tā wèile tāntú xiǎo piányi, jiéguǒ diào zài zì jǐ wā de kēng zi lǐ, sǔnshī cánzhòng."
  },
  {
    "STT": 719,
    "CHỮ": "D",
    "CỤM": "吊着老虎胡子打秋千",
    "PINYIN": "diào zhe lǎo hǔ hú zi dǎ qiū qiān",
    "NGHĨA": "比喻临死前极度享乐。",
    "SẮP XẾP CÂU": "挑战 / 简直是 / 他 / 太冒险了！ / 竟然敢 / 公司老板， / 这 / 吊着老虎胡子打秋千，",
    "ĐÁP ÁN": "他竟然敢挑战公司老板，这简直是吊着老虎胡子打秋千，太冒险了！",
    "PHIÊN ÂM": "Tā jìngrán gǎn tiǎozhàn gōngsī lǎobǎn, zhè jiǎnzhí shì diào zhe lǎo hǔ hú zi dǎ qiū qiān, tài màoxiǎn le!"
  },
  {
    "STT": 720,
    "SẮP XẾP CÂU": "胆子真大！ / 却 / 孤注一掷， / 简直是 / 他 / 依然 / 吊着老虎胡子打秋千， / 明知 / 风险很大，",
    "ĐÁP ÁN": "他明知风险很大，却依然孤注一掷，简直是吊着老虎胡子打秋千，胆子真大！\r\n",
    "PHIÊN ÂM": "Tā míngzhī fēngxiǎn hěn dà, què yīrán gūzhùyīzhì, jiǎnzhí shì diào zhe lǎo hǔ hú zi dǎ qiū qiān, dǎnzi zhēn dà!"
  },
  {
    "STT": 721,
    "CHỮ": "D",
    "CỤM": "跌眼镜",
    "PINYIN": "diē yǎn jìng",
    "NGHĨA": "比喻与预想的出入很大，事情出乎意料，让人吃惊。",
    "SẮP XẾP CÂU": "真是 / 他 / 不及格， / 跌眼镜！ / 考试 / 竟然",
    "ĐÁP ÁN": "他考试竟然不及格，真是跌眼镜！",
    "PHIÊN ÂM": "Tā kǎoshì jìngrán bù jíge, zhēnshi diē yǎn jìng!"
  },
  {
    "STT": 722,
    "SẮP XẾP CÂU": "让我们 / 出乎意料， / 大跌眼镜。 / 比赛结果",
    "ĐÁP ÁN": "比赛结果出乎意料，让我们大跌眼镜。",
    "PHIÊN ÂM": "Bǐsài jiéguǒ chūhūyìliào, ràng wǒmen dà diē yǎn jìng."
  },
  {
    "STT": 723,
    "CHỮ": "D",
    "CỤM": "顶半边天",
    "PINYIN": "dǐng bàn biān tiān",
    "NGHĨA": "指新社会妇女能起重要作用。",
    "SẮP XẾP CÂU": "顶半边天， / 既要 / 在这个家里， / 她 / 工作 / 一个人 / 又要 / 照顾孩子。",
    "ĐÁP ÁN": "在这个家里，她一个人顶半边天，既要工作又要照顾孩子。",
    "PHIÊN ÂM": "Zài zhège jiālǐ, tā yī ge rén dǐng bàn biān tiān, jì yào gōngzuò yòu yào zhàogù háizi."
  },
  {
    "STT": 724,
    "SẮP XẾP CÂU": "全靠 / 顶半边天。 / 公司 / 今天的成就， / 能有 / 他",
    "ĐÁP ÁN": "公司能有今天的成就，全靠他顶半边天。",
    "PHIÊN ÂM": "Gōngsī néng yǒu jīntiān de chéngjiù, quán kào tā dǐng bàn biān tiān."
  },
  {
    "STT": 725,
    "CHỮ": "D",
    "CỤM": "定不住锤",
    "PINYIN": "dìng bù zhù chuí",
    "NGHĨA": "比喻心里没底,拿不定主意。",
    "SẮP XẾP CÂU": "定不住锤。 / 这个计划 / 漏洞百出，",
    "ĐÁP ÁN": "个计划漏洞百出，定不住锤。",
    "PHIÊN ÂM": "Ge jìhuà lòudòng bǎichū, dìng bu zhù chuí."
  },
  {
    "STT": 726,
    "SẮP XẾP CÂU": "定不住锤。 / 他这个人 / 没计划， / 做事",
    "ĐÁP ÁN": "他这个人做事没计划，定不住锤。",
    "PHIÊN ÂM": "Tā zhège rén zuòshì méi jìhuà, dìng bu zhù chuí."
  },
  {
    "STT": 727,
    "CHỮ": "D",
    "CỤM": "定雌雄",
    "PINYIN": "dìng cí xióng",
    "NGHĨA": "比喻决出胜负,高下。",
    "SẮP XẾP CÂU": "鹿死谁手 / 定雌雄， / 今晚的 / 尚未可知。 / 比赛 / 将",
    "ĐÁP ÁN": "今晚的比赛将定雌雄，鹿死谁手尚未可知。",
    "PHIÊN ÂM": "Jīn wǎn de bǐsài jiāng dìng cí xióng, lù sǐ shuí shǒu shàngwèi kězhī."
  },
  {
    "STT": 728,
    "SẮP XẾP CÂU": "看 / 论点 / 这场 / 将定雌雄， / 谁的 / 辩论赛 / 更强。",
    "ĐÁP ÁN": "这场辩论赛将定雌雄，看谁的论点更强。",
    "PHIÊN ÂM": "Zhè chǎng biàn lùn sài jiāng dìng cí xióng, kàn shuí de lùndiǎn gèng qiáng."
  },
  {
    "STT": 729,
    "CHỮ": "D",
    "CỤM": "定调子",
    "PINYIN": "dìng diào zi",
    "NGHĨA": "比喻事先确定观点和做法。",
    "SẮP XẾP CÂU": "基调。 / 就 / 发展的 / 会议 / 定下了 / 一开始",
    "ĐÁP ÁN": "会议一开始就定下了发展的基调。",
    "PHIÊN ÂM": "Huìyì yī kāishǐ jiù dìng xià le fāzhǎn de jīdiào."
  },
  {
    "STT": 730,
    "SẮP XẾP CÂU": "调子。 / 批评的 / 这篇报道 / 定下了",
    "ĐÁP ÁN": "这篇报道定下了批评的调子。",
    "PHIÊN ÂM": "Zhè piān bàodǎo dìng xià le pīpíng de diào zi."
  },
  {
    "STT": 731,
    "CHỮ": "D",
    "CỤM": "钉对钉，铆对钢铆",
    "PINYIN": "dīng duì dīng, mǎo duì gāng mǎo",
    "NGHĨA": "形容做事认真,丝毫不差。",
    "SẮP XẾP CÂU": "真是 / 实力相当， / 两家公司 / 竞争 / 钉对钉，铆对钢铆。 / 非常激烈，",
    "ĐÁP ÁN": "两家公司实力相当，竞争非常激烈，真是钉对钉，铆对钢铆。",
    "PHIÊN ÂM": "Liǎng jiā gōngsī shílì xiāngdāng, jìngzhēng fēicháng jīliè, zhēnshi dīng duì dīng, mǎo duì gāng mǎo."
  },
  {
    "STT": 732,
    "SẮP XẾP CÂU": "谁胜谁负 / 钉对钉，铆对钢铆， / 实力相当， / 难以预料。 / 这场比赛 / 双方",
    "ĐÁP ÁN": "场比赛双方实力相当，钉对钉，铆对钢铆，谁胜谁负难以预料。",
    "PHIÊN ÂM": "Chǎng bǐsài shuāngfāng shílì xiāngdāng, dīng duì dīng, mǎo duì gāng mǎo, shuí shèng shuí fù nányǐ yùliào."
  },
  {
    "STT": 733,
    "CHỮ": "D",
    "CỤM": "顶风臭四十里",
    "PINYIN": "dǐng fēng chòu sì shí lǐ",
    "NGHĨA": "见“打个喷嚏,顶风臭十里”。",
    "SẮP XẾP CÂU": "人人皆知。 / 他的 / 顶风臭四十里， / 恶行",
    "ĐÁP ÁN": "他的恶行顶风臭四十里，人人皆知。",
    "PHIÊN ÂM": "Tā de èxíng dǐngfēng chòu sì shí lǐ, rénrén jiē zhī."
  },
  {
    "STT": 734,
    "SẮP XẾP CÂU": "谁都 / 顶风臭四十里， / 避之不及。 / 他的 / 坏名声",
    "ĐÁP ÁN": "他的坏名声顶风臭四十里，谁都避之不及。",
    "PHIÊN ÂM": "Tā de huài míngshēng dǐngfēng chòu sì shí lǐ, shuí dōu bì zhī bù jí."
  },
  {
    "STT": 735,
    "CHỮ": "D",
    "CỤM": "顶风上",
    "PINYIN": "dǐng fēng shàng",
    "NGHĨA": "指迎着困难做工作。 \r\n指违反有关的政策、法规行事。",
    "SẮP XẾP CÂU": "领导的 / 他 / 批评了 / 错误。 / 顶风上，",
    "ĐÁP ÁN": "他顶风上，批评了领导的错误。",
    "PHIÊN ÂM": "Tā dǐng fēng shàng, pīpíng le lǐngdǎo de cuòwù."
  },
  {
    "STT": 736,
    "SẮP XẾP CÂU": "自己的 / 他们 / 观点。 / 顶风上， / 坚持",
    "ĐÁP ÁN": "他们顶风上，坚持自己的观点。",
    "PHIÊN ÂM": "Tāmen dǐng fēng shàng, jiānchí zìjǐ de guāndiǎn."
  },
  {
    "STT": 737,
    "CHỮ": "D",
    "CỤM": "顶杠子",
    "PINYIN": "dǐng gàng zi",
    "NGHĨA": "指林人接受批评,处罚。",
    "SẮP XẾP CÂU": "对着干。 / 他 / 跟 / 总是 / 领导 / 顶杠子，",
    "ĐÁP ÁN": "他总是顶杠子，跟领导对着干。",
    "PHIÊN ÂM": "Tā zǒngshì dǐng gàng zi, gēn lǐngdǎo duìzhe gàn."
  },
  {
    "STT": 738,
    "SẮP XẾP CÂU": "不肯 / 他 / 批评。 / 接受 / 顶杠子，",
    "ĐÁP ÁN": "他顶杠子，不肯接受批评。",
    "PHIÊN ÂM": "Tā dǐng gàng zi, bù kěn jiēshòu pīpíng."
  },
  {
    "STT": 739,
    "CHỮ": "D",
    "CỤM": "顶黑锅",
    "PINYIN": "dǐng hēi guō",
    "NGHĨA": "见“背黑锅”。",
    "SẮP XẾP CÂU": "却 / 他做的， / 顶了黑锅。 / 这件事 / 明明 / 不是 / 让他",
    "ĐÁP ÁN": "这件事明明不是他做的，却让他顶了黑锅。",
    "PHIÊN ÂM": "Zhè jiàn shì míngmíng bù shì tā zuò de, què ràng tā dǐng le hēi guō."
  },
  {
    "STT": 740,
    "SẮP XẾP CÂU": "保护朋友， / 他 / 顶了黑锅。 / 为了",
    "ĐÁP ÁN": "他为了保护朋友，顶了黑锅。",
    "PHIÊN ÂM": "Tā wèile bǎohù péngyou, dǐng le hēi guō."
  },
  {
    "STT": 741,
    "CHỮ": "D",
    "CỤM": "顶梁柱",
    "PINYIN": "dǐng liáng zhù",
    "NGHĨA": "支撑房梁的柱子。比喻起主要作用的骨干力量。",
    "SẮP XẾP CÂU": "承担着 / 家里的 / 家庭的 / 他 / 重担。 / 是 / 顶梁柱，",
    "ĐÁP ÁN": "他是家里的顶梁柱，承担着家庭的重担。",
    "PHIÊN ÂM": "Tā shì jiālǐ de dǐng liáng zhù, chéngdān zhe jiātíng de zhòngdàn."
  },
  {
    "STT": 742,
    "SẮP XẾP CÂU": "是 / 对 / 他的 / 巨大的 / 他 / 顶梁柱， / 损失。 / 离开 / 公司的 / 公司来说",
    "ĐÁP ÁN": "他是公司的顶梁柱，他的离开对公司来说是巨大的损失。",
    "PHIÊN ÂM": "Tā shì gōngsī de dǐng liáng zhù, tā de líkāi duì gōngsī lái shuō shì jùdà de sǔnshī."
  },
  {
    "STT": 743,
    "CHỮ": "D",
    "CỤM": "丢在脖子后头",
    "PINYIN": "diū zài bó zi hòu tou",
    "NGHĨA": "见”仍在脖子后边”。",
    "SẮP XẾP CÂU": "这件事 / 我 / 把 / 丢在脖子后头了。",
    "ĐÁP ÁN": "我把这件事丢在脖子后头了。",
    "PHIÊN ÂM": "Wǒ bǎ zhè jiàn shì diū zài bó zi hòu tou le."
  },
  {
    "STT": 744,
    "SẮP XẾP CÂU": "答应别人的事 / 他 / 把 / 丢在脖子后头了。",
    "ĐÁP ÁN": "他把答应别人的事丢在脖子后头了。",
    "PHIÊN ÂM": "Tā bǎ dāyìng biérén de shì diū zài bó zi hòu tou le."
  },
  {
    "STT": 745,
    "CHỮ": "D",
    "CỤM": "丢在九霄云外",
    "PINYIN": "diū zài jiǔ xiāo yún wài",
    "NGHĨA": "形容事情忘得一干二净。",
    "SẮP XẾP CÂU": "他的话 / 我 / 把 / 丢在九霄云外了。",
    "ĐÁP ÁN": "我把他的话丢在九霄云外了。",
    "PHIÊN ÂM": "Wǒ bǎ tā de huà diū zài jiǔ xiāo yún wài le."
  },
  {
    "STT": 746,
    "SẮP XẾP CÂU": "都 / 我 / 以前的烦恼 / 把 / 丢在九霄云外了。",
    "ĐÁP ÁN": "我把以前的烦恼都丢在九霄云外了。",
    "PHIÊN ÂM": "Wǒ bǎ yǐqián de fánnǎo dōu diū zài jiǔ xiāo yún wài le."
  },
  {
    "STT": 747,
    "CHỮ": "D",
    "CỤM": "丢在水里",
    "PINYIN": "diū zài shuǐ lǐ",
    "NGHĨA": "比喻把财物扔掉,没有一点回报。",
    "SẮP XẾP CÂU": "最终 / 这个计划 / 丢在水里了。",
    "ĐÁP ÁN": "这个计划最终丢在水里了。",
    "PHIÊN ÂM": "Zhège jìhuà zuìzhōng diū zài shuǐ lǐ le."
  },
  {
    "STT": 748,
    "SẮP XẾP CÂU": "都 / 他的 / 努力 / 丢在水里了。",
    "ĐÁP ÁN": "他的努力都丢在水里了。",
    "PHIÊN ÂM": "Tā de nǔlì dōu diū zài shuǐ lǐ le."
  },
  {
    "STT": 749,
    "CHỮ": "D",
    "CỤM": "东不成,西不就",
    "PINYIN": "dōng bù chéng, xī bù jiù",
    "NGHĨA": "什么样的都不合适。多指选择配偶时的窘境,好的高攀不上,差的又不想要。",
    "SẮP XẾP CÂU": "都不成功， / 真是 / 他 / 东不成西不就。 / 做什么事情",
    "ĐÁP ÁN": "他做什么事情都不成功，真是东不成西不就。",
    "PHIÊN ÂM": "Tā zuò shénme shìqíng dōu bù chénggōng, zhēnshi dōng bù chéng, xī bù jiù."
  },
  {
    "STT": 750,
    "SẮP XẾP CÂU": "东不成西不就。 / 他最近 / 运气很差，",
    "ĐÁP ÁN": "他最近运气很差，东不成西不就。",
    "PHIÊN ÂM": "Tā zuìjìn yùnqì hěn chà, dōng bù chéng, xī bù jiù."
  },
  {
    "STT": 751,
    "CHỮ": "D",
    "CỤM": "冬不论三九，夏不论三伏",
    "PINYIN": "dōng bù lùn sān jiǔ, xià bù lùn sān fú",
    "NGHĨA": "形容工作非常辛苦,在气候最恶劣的时候都得坚持。指只说嘴而不行动。",
    "SẮP XẾP CÂU": "冬不论三九，夏不论三伏。 / 都 / 他 / 坚持锻炼， / 每天",
    "ĐÁP ÁN": "他每天都坚持锻炼，冬不论三九，夏不论三伏。",
    "PHIÊN ÂM": "Tā měitiān dōu jiānchí duànliàn, dōng bù lùn sān jiǔ, xià bù lùn sān fú."
  },
  {
    "STT": 752,
    "SẮP XẾP CÂU": "都营业， / 这家店 / 一年四季 / 冬不论三九，夏不论三伏。",
    "ĐÁP ÁN": "这家店一年四季都营业，冬不论三九，夏不论三伏。",
    "PHIÊN ÂM": "Zhè jiā diàn yī nián sìjì dōu yíngyè, dōng bù lùn sān jiǔ, xià bù lùn sān fú."
  },
  {
    "STT": 753,
    "CHỮ": "D",
    "CỤM": "东不是,西不是",
    "PINYIN": "dōng bù shì, xī bù shì",
    "NGHĨA": "形容对人或环境要求苛刻,怎么都不满意。",
    "SẮP XẾP CÂU": "左右为难。 / 他 / 东也不是西也不是， / 夹在中间，",
    "ĐÁP ÁN": "他夹在中间，东也不是西也不是，左右为难。",
    "PHIÊN ÂM": "Tā jiā zài zhōngjiān, dōng bù shì, xī bù shì, zuǒyòuwéinán."
  },
  {
    "STT": 754,
    "SẮP XẾP CÂU": "东也不是西也不是。 / 他 / 左右为难，",
    "ĐÁP ÁN": "他左右为难，东也不是西也不是。",
    "PHIÊN ÂM": "Tā zuǒyòuwéinán, dōng bù shì, xī bù shì."
  },
  {
    "STT": 755,
    "CHỮ": "D",
    "CỤM": "动不着一根毫毛",
    "PINYIN": "dòng bù zháo yī gēn háo máo",
    "NGHĨA": "比喻不能对某人造成极微小的伤害。",
    "SẮP XẾP CÂU": "对他 / 动不着一根毫毛。 / 他的 / 一点影响都没有， / 批评",
    "ĐÁP ÁN": "他的批评对他一点影响都没有，动不着一根毫毛。",
    "PHIÊN ÂM": "Tā de pīpíng duì tā yī diǎn yǐngxiǎng dōu méiyǒu, dòng bù zháo yī gēn háo máo."
  },
  {
    "STT": 756,
    "SẮP XẾP CÂU": "一点作用都没有， / 对他 / 他的 / 动不着一根毫毛。 / 威胁",
    "ĐÁP ÁN": "他的威胁对他一点作用都没有，动不着一根毫毛。",
    "PHIÊN ÂM": "Tā de wēixié duì tā yī diǎn zuòyòng dōu méiyǒu, dòng bù zháo yī gēn háo máo."
  },
  {
    "STT": 757,
    "CHỮ": "D",
    "CỤM": "东扯葫芦西扯瓢",
    "PINYIN": "dōng chě hú lú xī chě piáo",
    "NGHĨA": "比喻说话东拉西扯,不着边际,没有主题。",
    "SẮP XẾP CÂU": "东扯葫芦西扯瓢， / 人 / 他 / 听不懂。 / 说话 / 让",
    "ĐÁP ÁN": "他说话东扯葫芦西扯瓢，让人听不懂。",
    "PHIÊN ÂM": "Tā shuōhuà dōng chě hú lú xī chě piáo, ràng rén tīng bu dǒng."
  },
  {
    "STT": 758,
    "SẮP XẾP CÂU": "毫无逻辑。 / 他讲的 / 故事 / 东扯葫芦西扯瓢，",
    "ĐÁP ÁN": "他讲的故事东扯葫芦西扯瓢，毫无逻辑。",
    "PHIÊN ÂM": "Tā jiǎng de gùshì dōng chě hú lú xī chě piáo, háowú luójí."
  },
  {
    "STT": 759,
    "CHỮ": "D",
    "CỤM": "动醋火",
    "PINYIN": "dòng cù huǒ",
    "NGHĨA": "指因嫉妒而发愁。",
    "SẮP XẾP CÂU": "都 / 把 / 他 / 摔坏了。 / 动醋火了， / 东西",
    "ĐÁP ÁN": "他动醋火了，把东西都摔坏了。",
    "PHIÊN ÂM": "Tā dòng cù huǒ le, bǎ dōngxi dōu shuāi huài le."
  },
  {
    "STT": 760,
    "SẮP XẾP CÂU": "就 / 他 / 动醋火。 / 因为 / 一点小事",
    "ĐÁP ÁN": "他因为一点小事就动醋火。",
    "PHIÊN ÂM": "Tā yīnwèi yī diǎn xiǎoshì jiù dòng cù huǒ."
  },
  {
    "STT": 761,
    "CHỮ": "D",
    "CỤM": "东倒吃猪头，西倒吃羊头",
    "PINYIN": "dōng dǎo chī zhū tóu, xī dǎo chī yáng tóu",
    "NGHĨA": "向东倒可以吃到猪头,向西倒可以吃到羊头。比喻做事两边倒,哪边有利投向哪边。",
    "SẮP XẾP CÂU": "把 / 东倒吃猪头，西倒吃羊头， / 他 / 家产 / 挥金如土， / 败光了。",
    "ĐÁP ÁN": "他挥金如土，东倒吃猪头，西倒吃羊头，把家产败光了。",
    "PHIÊN ÂM": "Tā huījīnrútǔ, dōng dǎo chī zhū tóu, xī dǎo chī yáng tóu, bǎ jiāchǎn bàiguāng le."
  },
  {
    "STT": 762,
    "SẮP XẾP CÂU": "日子过得 / 他 / 东倒吃猪头，西倒吃羊头， / 极其奢侈。 / 整天 / 寻欢作乐，",
    "ĐÁP ÁN": "他整天寻欢作乐，东倒吃猪头，西倒吃羊头，日子过得极其奢侈。",
    "PHIÊN ÂM": "Tā zhěngtiān xúnhuānzuòlè, dōng dǎo chī zhū tóu, xī dǎo chī yáng tóu, rìzi guò de jíqí shēchǐ."
  },
  {
    "STT": 763,
    "CHỮ": "D",
    "CỤM": "动恶念",
    "PINYIN": "dòng è niàn",
    "NGHĨA": "指产生邪恶的念头或想法。",
    "SẮP XẾP CÂU": "想要 / 他 / 偷窃财物。 / 动了恶念，",
    "ĐÁP ÁN": "他动了恶念，想要偷窃财物。",
    "PHIÊN ÂM": "Tā dòng le è niàn, xiǎng yào tōuqiè cáiwù."
  },
  {
    "STT": 764,
    "SẮP XẾP CÂU": "否则 / 千万别 / 后果自负。 / 动恶念，",
    "ĐÁP ÁN": "千万别动恶念，否则后果自负。",
    "PHIÊN ÂM": "Qiānwàn bié dòng è niàn, fǒuzé hòuguǒ zìfù."
  },
  {
    "STT": 765,
    "CHỮ": "D",
    "CỤM": "东耳朵进，西耳朵出",
    "PINYIN": "dōng ěr duo jìn, xī ěr duo chū",
    "NGHĨA": "见“这个耳朵进来,那个耳朵出去”。",
    "SẮP XẾP CÂU": "从来 / 别人的 / 他 / 不听 / 劝告。 / 总是 / 东耳朵进，西耳朵出，",
    "ĐÁP ÁN": "他总是东耳朵进，西耳朵出，从来不听别人的劝告。",
    "PHIÊN ÂM": "Tā zǒngshì dōng ěr duo jìn, xī ěr duo chū, cónglái bù tīng biérén de quàngào."
  },
  {
    "STT": 766,
    "SẮP XẾP CÂU": "根本 / 他 / 领导的指示， / 没放在心上。 / 东耳朵进，西耳朵出，",
    "ĐÁP ÁN": "领导的指示，他东耳朵进，西耳朵出，根本没放在心上。",
    "PHIÊN ÂM": "Lǐngdǎo de zhǐshì, tā dōng ěr duo jìn, xī ěr duo chū, gēnběn méi fàng zài xīn shàng."
  },
  {
    "STT": 767,
    "CHỮ": "D",
    "CỤM": "东房凉儿没有了，到西房凉里歇",
    "PINYIN": "dōng fáng liáng er méi yǒu le, dào xī fáng liáng lǐ xiē",
    "NGHĨA": "比喻哪边有利就到哪边去。",
    "SẮP XẾP CÂU": "他 / 即使 / 还有 / 这家公司不行了， / 其他选择， / 东房凉儿没有了，到西房凉里歇。",
    "ĐÁP ÁN": "即使这家公司不行了，他还有其他选择，东房凉儿没有了，到西房凉里歇。",
    "PHIÊN ÂM": "Jíshǐ zhè jiā gōngsī bù xíng le, tā hái yǒu qítā xuǎnzé, dōng fáng liáng ér méi yǒu le, dào xī fáng liáng lǐ xiē."
  },
  {
    "STT": 768,
    "SẮP XẾP CÂU": "因为 / 他 / 还有 / 不用担心失业， / 其他工作机会， / 东房凉儿没有了，到西房凉里歇。",
    "ĐÁP ÁN": "他不用担心失业，因为还有其他工作机会，东房凉儿没有了，到西房凉里歇。",
    "PHIÊN ÂM": "Tā bù yòng dānxīn shīyè, yīnwèi hái yǒu qítā gōngzuò jīhuì, dōng fáng liáng ér méi yǒu le, dào xī fáng liáng lǐ xiē."
  },
  {
    "STT": 769,
    "CHỮ": "D",
    "CỤM": "东风吹来往西倒,西风吹来往东倒",
    "PINYIN": "dōng fēng chuī lái wǎng xī dǎo, xī fēng chuī lái wǎng dōng dǎo",
    "NGHĨA": "比喻人做事没主见,常随着情势的发展改变态度和立场。",
    "SẮP XẾP CÂU": "没有 / 他 / 东风吹来往西倒，西风吹来往东倒， / 自己的想法。 / 总是 / 随波逐流，",
    "ĐÁP ÁN": "他总是随波逐流，东风吹来往西倒，西风吹来往东倒，没有自己的想法。",
    "PHIÊN ÂM": "Tā zǒngshì suíbōzhúliú, dōng fēng chuī lái wǎng xī dǎo, xī fēng chuī lái wǎng dōng dǎo, méiyǒu zìjǐ de xiǎngfǎ."
  },
  {
    "STT": 770,
    "SẮP XẾP CÂU": "让人 / 他 / 东风吹来往西倒，西风吹来往东倒， / 不可靠。 / 毫无主见，",
    "ĐÁP ÁN": "他毫无主见，东风吹来往西倒，西风吹来往东倒，让人不可靠。",
    "PHIÊN ÂM": "Tā háowú zhǔjiàn, dōng fēng chuī lái wǎng xī dǎo, xī fēng chuī lái wǎng dōng dǎo, ràng rén bù kěkào."
  },
  {
    "STT": 771,
    "CHỮ": "D",
    "CỤM": "东风压倒西风",
    "PINYIN": "dōng fēng yā dǎo xī fēng",
    "NGHĨA": "比喻一方的势力压倒另一方。",
    "SẮP XẾP CÂU": "中国 / 东风压倒西风， / 发生了 / 变化。 / 改革开放后， / 翻天覆地的",
    "ĐÁP ÁN": "改革开放后，东风压倒西风，中国发生了翻天覆地的变化。",
    "PHIÊN ÂM": "Gǎigé kāifàng hòu, dōng fēng yā dǎo xī fēng, Zhōngguó fāshēng le fāntiānfùdì de biànhuà."
  },
  {
    "STT": 772,
    "SẮP XẾP CÂU": "东风压倒西风 / 新技术 / 是 / 最终会 / 历史发展的必然规律。 / 取代旧技术，",
    "ĐÁP ÁN": "新技术最终会取代旧技术，东风压倒西风是历史发展的必然规律。",
    "PHIÊN ÂM": "Xī jìshù zuìzhōng huì qǔdài jiù jìshù, dōng fēng yā dǎo xī fēng shì lìshǐ fāzhǎn de bìrán guīlǜ."
  },
  {
    "STT": 773,
    "CHỮ": "D",
    "CỤM": "动干戈",
    "PINYIN": "dòng gān gē",
    "NGHĨA": "指发生武力冲突或战争。",
    "SẮP XẾP CÂU": "爆发了战争。 / 两国 / 为了 / 领土问题 / 动干戈，",
    "ĐÁP ÁN": "两国为了领土问题动干戈，爆发了战争。",
    "PHIÊN ÂM": "Liǎng guó wèile lǐngtǔ wèntí dòng gān gē, bàofā le zhànzhēng."
  },
  {
    "STT": 774,
    "SẮP XẾP CÂU": "就 / 他们 / 大打出手。 / 因为 / 动干戈， / 一点小事",
    "ĐÁP ÁN": "他们因为一点小事就动干戈，大打出手。",
    "PHIÊN ÂM": "Tāmen yī diǎn xiǎoshì jiù dòng gān gē, dàdǎ chūshǒu."
  },
  {
    "STT": 775,
    "CHỮ": "D",
    "CỤM": "动肝火",
    "PINYIN": "dòng gān huǒ",
    "NGHĨA": "指动怒生气,发泄不满。",
    "SẮP XẾP CÂU": "脸色铁青。 / 他 / 因为 / 这件事 / 动肝火，",
    "ĐÁP ÁN": "他因为这件事动肝火，脸色铁青。",
    "PHIÊN ÂM": "Tā yīnwèi zhè jiàn shì dòng gān huǒ, liǎnsè tiěqīng."
  },
  {
    "STT": 776,
    "SẮP XẾP CÂU": "都 / 他 / 把 / 拍烂了。 / 动肝火， / 桌子",
    "ĐÁP ÁN": "他动肝火，把桌子都拍烂了。",
    "PHIÊN ÂM": "Tā dòng gān huǒ, bǎ zhuōzi dōu pāilàn le."
  },
  {
    "STT": 777,
    "CHỮ": "D",
    "CỤM": "东沟犁，西沟杷",
    "PINYIN": "dōng gōu lí, xī gōu pá",
    "NGHĨA": "形容说话或做事没有条理。",
    "SẮP XẾP CÂU": "效率很低。 / 他 / 东沟犁，西沟杷， / 做事 / 没有计划，",
    "ĐÁP ÁN": "他做事没有计划，东沟犁，西沟杷，效率很低。",
    "PHIÊN ÂM": "Tā zuòshì méiyǒu jìhuà, dōng gōu lí, xī gōu pá, xiàolǜ hěn dī."
  },
  {
    "STT": 778,
    "SẮP XẾP CÂU": "什么都 / 他 / 做不好。 / 东沟犁，西沟杷，",
    "ĐÁP ÁN": "他东沟犁，西沟杷，什么都做不好。",
    "PHIÊN ÂM": "Tā dōng gōu lí, xī gōu pá, shénme dōu zuò bù hǎo."
  },
  {
    "STT": 779,
    "CHỮ": "D",
    "CỤM": "冬瓜拉到茄子地里",
    "PINYIN": "dōng guā lā dào qié zi dì lǐ",
    "NGHĨA": "比喻说话或做事胡牵亂扯。",
    "SẮP XẾP CÂU": "简直是 / 他 / 安排给他， / 不擅长的 / 把 / 冬瓜拉到茄子地里。 / 事情",
    "ĐÁP ÁN": "把他不擅长的事情安排给他，简直是冬瓜拉到茄子地里。",
    "PHIÊN ÂM": "Bǎ tā bù shàncháng de shìqíng ānpái gěi tā, jiǎnzhí shì dōng guā lā dào qié zi dì lǐ."
  },
  {
    "STT": 780,
    "SẮP XẾP CÂU": "简直是 / 这次的 / 冬瓜拉到茄子地里。 / 安排 / 很不合理，",
    "ĐÁP ÁN": "这次的安排很不合理，简直是冬瓜拉到茄子地里。",
    "PHIÊN ÂM": "Zhè cì de ānpái hěn bù hélǐ, jiǎnzhí shì dōng guā lā dào qié zi dì lǐ."
  },
  {
    "STT": 781,
    "CHỮ": "D",
    "CỤM": "冬瓜推在葫芦帐上",
    "PINYIN": "dōng guā tuī zài hú lú zhàng shàng",
    "NGHĨA": "比喻把责任推给别人,自己不愿承担。",
    "SẮP XẾP CÂU": "安排给他， / 把 / 简直是 / 这个任务 / 冬瓜推在葫芦帐上。",
    "ĐÁP ÁN": "把这个任务安排给他，简直是冬瓜推在葫芦帐上。",
    "PHIÊN ÂM": "Bǎ zhège rènwù ānpái gěi tā, jiǎnzhí shì dōng guā tuī zài hú lú zhàng shàng."
  },
  {
    "STT": 782,
    "SẮP XẾP CÂU": "简直是 / 这种安排 / 冬瓜推在葫芦帐上。 / 不合适，",
    "ĐÁP ÁN": "这种安排不合适，简直是冬瓜推在葫芦帐上。",
    "PHIÊN ÂM": "Zhè zhǒng ānpái bù héshì, jiǎnzhí shì dōng guā tuī zài hú lú zhàng shàng."
  },
  {
    "STT": 783,
    "CHỮ": "D",
    "CỤM": "东海起了灰尘，西天出了太阳",
    "PINYIN": "dōng hǎi qǐ le huī chén, xī tiān chū le tài yáng",
    "NGHĨA": "海里不可能起灰尘,太阳也不可能从西边出来,指事情永远不可能发生。",
    "SẮP XẾP CÂU": "让人 / 形势 / 东海起了灰尘，西天出了太阳， / 难以捉摸。 / 变化太快，",
    "ĐÁP ÁN": "形势变化太快，东海起了灰尘，西天出了太阳，让人难以捉摸。",
    "PHIÊN ÂM": "Xíngshì biànhuà tài kuài, dōng hǎi qǐ le huī chén, xī tiān chū le tài yáng, ràng rén nányǐ zhuōmō."
  },
  {
    "STT": 784,
    "SẮP XẾP CÂU": "谁也 / 局势 / 无法预测未来。 / 东海起了灰尘，西天出了太阳， / 瞬息万变，",
    "ĐÁP ÁN": "局势瞬息万变，东海起了灰尘，西天出了太阳，谁也无法预测未来。",
    "PHIÊN ÂM": "Júshì shùnxīwànbiàn, dōng hǎi qǐ le huī chén, xī tiān chū le tài yáng, shuí yě wúfǎ yùcè wèilái."
  },
  {
    "STT": 785,
    "CHỮ": "D",
    "CỤM": "东葫芦爬西架",
    "PINYIN": "dōng hú lú pá xī jià",
    "NGHĨA": "比喻两者相距太远,沾不上边。",
    "SẮP XẾP CÂU": "他 / 把事情 / 安排得 / 乱七八糟， / 东葫芦爬西架。",
    "ĐÁP ÁN": "他把事情安排得乱七八糟，东葫芦爬西架。",
    "PHIÊN ÂM": "Tā bǎ shìqíng ānpái de luànqībāzāo, dōng hú lú pá xī jià."
  },
  {
    "STT": 786,
    "SẮP XẾP CÂU": "他 / 把人 / 安排错了 / 岗位， / 东葫芦爬西架。",
    "ĐÁP ÁN": "他把人安排错了岗位，东葫芦爬西架。",
    "PHIÊN ÂM": "Tā bǎ rén ānpái cuò le gǎngwèi, dōng hú lú pá xī jià."
  },
  {
    "STT": 787,
    "CHỮ": "D",
    "CỤM": "东集赶到西集",
    "PINYIN": "dōng jí gǎn dào xī jí",
    "NGHĨA": "指人不务正业,到处乱跑。",
    "SẮP XẾP CÂU": "却 / 他 / 忙忙碌碌， / 一无所获。 / 东集赶到西集，",
    "ĐÁP ÁN": "他东集赶到西集，忙忙碌碌，却一无所获。",
    "PHIÊN ÂM": "Tā dōng jí gǎn dào xī jí, mángmánglùlù, què yī wú suǒ huò."
  },
  {
    "STT": 788,
    "SẮP XẾP CÂU": "却 / 他 / 什么也没得到。 / 到处奔波， / 东集赶到西集，",
    "ĐÁP ÁN": "他到处奔波，东集赶到西集，却什么也没得到。",
    "PHIÊN ÂM": "Tā dàochù bēnbō, dōng jí gǎn dào xī jí, què shénme yě méi dédào."
  },
  {
    "STT": 789,
    "CHỮ": "D",
    "CỤM": "东家瓷，西家短",
    "PINYIN": "dōng jiā cháng, xī jiā duǎn",
    "NGHĨA": "见“张家长,李家短”。",
    "SẮP XẾP CÂU": "每个家庭 / 都有 / 东家瓷，西家短。/ 自己的难处，",
    "ĐÁP ÁN": "每个家庭都有自己的难处，东家瓷，西家短。",
    "PHIÊN ÂM": "Měi ge jiātíng dōu yǒu zìjǐ de nánchù, dōng jiā cháng, xī jiā duǎn."
  },
  {
    "STT": 790,
    "SẮP XẾP CÂU": "都有 / 每个公司 / 自己的问题， / 东家瓷，西家短。",
    "ĐÁP ÁN": "每个公司都有自己的问题，东家瓷，西家短。",
    "PHIÊN ÂM": "Měi ge gōngsī dōu yǒu zìjǐ de wèntí, dōng jiā cháng, xī jiā duǎn."
  },
  {
    "STT": 791,
    "CHỮ": "D",
    "CỤM": "东家点灯，西家暗坐",
    "PINYIN": "dōng jiā diǎn dēng, xī jiā àn zuò",
    "NGHĨA": "比喻双方互不相干。",
    "SẮP XẾP CÂU": "真是 / 而 / 那家公司 / 东家点灯，西家暗坐。 / 这家公司 / 却 / 发展迅速， / 日渐衰落，",
    "ĐÁP ÁN": "这家公司发展迅速，而那家公司却日渐衰落，真是东家点灯，西家暗坐。",
    "PHIÊN ÂM": "Zhè jiā gōngsī fāzhǎn xùnsù, ér nà jiā gōngsī què rìjiàn shuāiluò, zhēnshi dōng jiā diǎn dēng, xī jiā àn zuò."
  },
  {
    "STT": 792,
    "SẮP XẾP CÂU": "而 / 一个地区 / 东家点灯，西家暗坐。 / 另一个地区 / 经济繁荣， / 却 / 很落后，",
    "ĐÁP ÁN": "一个地区经济繁荣，而另一个地区却很落后，东家点灯，西家暗坐。",
    "PHIÊN ÂM": "Yī ge dìqū jīngjì fánróng, ér lìng yī ge dìqū què hěn luòhòu, dōng jiā diǎn dēng, xī jiā àn zuò."
  },
  {
    "STT": 793,
    "CHỮ": "D",
    "CỤM": "东家子摘，西家子借",
    "PINYIN": "dōng jiā zi zhāi, xī jiā zi jiè",
    "NGHĨA": "指四处向人伸手求借。",
    "SẮP XẾP CÂU": "关系复杂。 / 他们 / 互相利用， / 东家子摘，西家子借，",
    "ĐÁP ÁN": "他们互相利用，东家子摘，西家子借，关系复杂。",
    "PHIÊN ÂM": "Tāmen hùxiāng lìyòng, dōng jiā zi zhāi, xī jiā zi jiè, guānxì fùzá."
  },
  {
    "STT": 794,
    "SẮP XẾP CÂU": "共同发展。 / 两家公司 / 互相合作， / 东家子摘，西家子借，",
    "ĐÁP ÁN": "两家公司互相合作，东家子摘，西家子借，共同发展。",
    "PHIÊN ÂM": "Liǎng jiā gōngsī hùxiāng hézuò, dōng jiā zi zhāi, xī jiā zi jiè, gòngtóng fāzhǎn."
  },
  {
    "STT": 795,
    "CHỮ": "D",
    "CỤM": "动了豆腐、白菜，便是开斋",
    "PINYIN": "dòng le dòu fu、bái cài, biàn shì kāi zhāi",
    "NGHĨA": "形容生活非常穷困。",
    "SẮP XẾP CÂU": "便是开斋了。 / 他们 / 终于 / 斋戒结束， / 可以 / 动了豆腐、白菜，",
    "ĐÁP ÁN": "斋戒结束，他们终于可以动了豆腐、白菜，便是开斋了。",
    "PHIÊN ÂM": "Zhāijiè jiéshù, tāmen zhōngyú kěyǐ dòng le dòu fu, bái cài, biàn shì kāi zhāi le."
  },
  {
    "STT": 796,
    "SẮP XẾP CÂU": "好好享受美食。 / 经过 / 他们 / 长时间的节食后， / 终于 / 可以 / 动了豆腐、白菜，便是开斋了，",
    "ĐÁP ÁN": "经过长时间的节食后，他们终于可以动了豆腐、白菜，便是开斋了，好好享受美食。",
    "PHIÊN ÂM": "Jīngguò cháng shíjiān de jiéshí hòu, tāmen zhōngyú kěyǐ dòng le dòu fu, bái cài, biàn shì kāi zhāi le, hǎohǎo xiǎngshòu měishí."
  },
  {
    "STT": 797,
    "CHỮ": "D",
    "CỤM": "懂门道",
    "PINYIN": "dǒng mén dào",
    "NGHĨA": "指掌握做事的技巧和达到目的的途径。",
    "SẮP XẾP CÂU": "做生意 / 他 / 很成功。 / 很懂门道，",
    "ĐÁP ÁN": "他很懂门道，做生意很成功。",
    "PHIÊN ÂM": "Tā hěn dǒng mén dào, zuò shēngyi hěn chénggōng."
  },
  {
    "STT": 798,
    "SẮP XẾP CÂU": "修理东西 / 他 / 很在行。 / 很懂门道，",
    "ĐÁP ÁN": "他很懂门道，修理东西很在行。",
    "PHIÊN ÂM": "Tā hěn dǒng mén dào, xiūlǐ dōngxi hěn zàiháng."
  },
  {
    "STT": 799,
    "CHỮ": "D",
    "CỤM": "东庙里烧香，西庙里许愿",
    "PINYIN": "dōng miào lǐ shāo xiāng，xī miào lǐ xǔ yuàn",
    "NGHĨA": "比喻到处请客送礼,求人办事。",
    "SẮP XẾP CÂU": "左右逢源。 / 他 / 为人处世圆滑， / 东庙里烧香，西庙里许愿，",
    "ĐÁP ÁN": "他为人处世圆滑，东庙里烧香，西庙里许愿，左右逢源。",
    "PHIÊN ÂM": "Tā wéirén chǔshì yuánhuá, dōng miào lǐ shāo xiāng, xī miào lǐ xǔ yuàn, zuǒyòuféngyuán."
  },
  {
    "STT": 800,
    "SẮP XẾP CÂU": "人缘很好。 / 他 / 左右逢源， / 东庙里烧香，西庙里许愿，",
    "ĐÁP ÁN": "他左右逢源，东庙里烧香，西庙里许愿，人缘很好。",
    "PHIÊN ÂM": "Tā zuǒyòuféngyuán, dōng miào lǐ shāo xiāng, xī miào lǐ xǔ yuàn, rényuán hěn hǎo."
  },
  {
    "STT": 801,
    "CHỮ": "D",
    "CỤM": "动脑筋",
    "PINYIN": "dòng nǎo jīn",
    "NGHĨA": "指仔细考虑问题。",
    "SẮP XẾP CÂU": "必须 / 要解决 / 动脑筋。 / 这个问题，",
    "ĐÁP ÁN": "要解决这个问题，必须动脑筋。",
    "PHIÊN ÂM": "Yào jiějué zhège wèntí, bìxū dòng nǎo jīn."
  },
  {
    "STT": 802,
    "SẮP XẾP CÂU": "才能 / 你 / 想出 / 得多动脑筋， / 好办法。",
    "ĐÁP ÁN": "你得多动脑筋，才能想出好办法。",
    "PHIÊN ÂM": "Nǐ děi duō dòng nǎo jīn, cái néng xiǎng chū hǎo bànfǎ."
  },
  {
    "STT": 803,
    "CHỮ": "D",
    "CỤM": "东跑西钻，横搂竖扒",
    "PINYIN": "dōng pǎo xī zuān，héng lōu shù bā",
    "NGHĨA": "形容想尽办法,用尽手段。",
    "SẮP XẾP CÂU": "为了 / 东跑西钻，横搂竖扒。/ 找工作，/ 他 ",
    "ĐÁP ÁN": "他为了找工作，东跑西钻，横搂竖扒。",
    "PHIÊN ÂM": "Tā wèile zhǎo gōngzuò, dōng pǎo xī zuān, héng lǒu shù bā."
  },
  {
    "STT": 804,
    "SẮP XẾP CÂU": "为了/ 东跑西钻，横搂竖扒。 / 寻找线索，/ 他  ",
    "ĐÁP ÁN": "他为了寻找线索，东跑西钻，横搂竖扒。\r\n",
    "PHIÊN ÂM": "Tā wèile xúnzhǎo xiànsuǒ, dōng pǎo xī zuān, héng lǒu shù bā."
  },
  {
    "STT": 805,
    "CHỮ": "D",
    "CỤM": "东墙拆块砖，西墙揭片瓦",
    "PINYIN": "dōng qiáng chāi kuài zhuān，xī qiáng jiē piàn wǎ",
    "NGHĨA": "比喻为解燃眉之急而到处拼凑或挪借",
    "SẮP XẾP CÂU": "顾此失彼， / 他 / 什么也 / 做不好。 / 总是 / 拆东墙补西墙，",
    "ĐÁP ÁN": "他总是拆东墙补西墙，顾此失彼，什么也做不好。",
    "PHIÊN ÂM": "Wèile huán fángdài, tā měi ge yuè dōu děi dōng qiáng chāi kuài zhuān, xī qiáng jiē piàn wǎ, lián shēnghuófèi dōu búgòu le."
  },
  {
    "STT": 806,
    "SẮP XẾP CÂU": "只能 / 公司 / 拆东墙补西墙。 / 资金周转困难，",
    "ĐÁP ÁN": "公司资金周转困难，只能拆东墙补西墙。",
    "PHIÊN ÂM": "Xuéxiào jīngfèi jǐnzhāng, xiū zhè ge lóu de qián hái shì kào dōng qiáng chāi kuài zhuān, xī qiáng jiē piàn wǎ cái còu chū lái de."
  },
  {
    "STT": 807,
    "CHỮ": "D",
    "CỤM": "东墙缺了西墙补",
    "PINYIN": "dōng qiáng quē le xī qiáng bǔ",
    "NGHĨA": "见“拆东墙补西墙”。",
    "SẮP XẾP CÂU": "总是 / 处理这个问题， / 解决不了 / 东墙缺了西墙补， / 根本问题。",
    "ĐÁP ÁN": "处理这个问题，东墙缺了西墙补，总是解决不了根本问题。",
    "PHIÊN ÂM": "Chǔlǐ zhège wèntí, dōngqiáng quē le xī qiáng bǔ, zǒngshì jiějué bù liǎo gēnběn wèntí."
  },
  {
    "STT": 808,
    "SẮP XẾP CÂU": "公司的 / 问题 / 东墙缺了西墙补。 / 一个接一个，",
    "ĐÁP ÁN": "公司的问题一个接一个，东墙缺了西墙补。",
    "PHIÊN ÂM": "Gōngsī de wèntí yī ge jiē yī ge, dōngqiáng quē le xī qiáng bǔ."
  },
  {
    "STT": 809,
    "CHỮ": "D",
    "CỤM": "东山口头多似树叶",
    "PINYIN": "dōng shān kǒu tóu duō sì shù yè",
    "NGHĨA": "形容日子还很长,时间还很多。",
    "SẮP XẾP CÂU": "让人 / 他 / 听得烦。 / 说话 / 东山口头多似树叶，",
    "ĐÁP ÁN": "他说话东山口头多似树叶，让人听得烦。",
    "PHIÊN ÂM": "Tā shuōhuà dōng shān kǒu tóu duō sì shù yè, ràng rén tīng de fán."
  },
  {
    "STT": 810,
    "SẮP XẾP CÂU": "让人 / 他 / 难以忍受。 / 总是 / 东山口头多似树叶，",
    "ĐÁP ÁN": "他总是东山口头多似树叶，让人难以忍受。\r\n",
    "PHIÊN ÂM": "Tā zǒngshì dōng shān kǒu tóu duō sì shù yè, ràng rén nányǐ rěshòu."
  },
  {
    "STT": 811,
    "CHỮ": "D",
    "CỤM": "动手脚",
    "PINYIN": "dòng shǒu jiǎo",
    "NGHĨA": "指暗中采取行动。",
    "SẮP XẾP CÂU": "作弊 / 他 / 被抓住了。 / 在考试中 / 动手脚，",
    "ĐÁP ÁN": "他在考试中动手脚，作弊被抓住了。",
    "PHIÊN ÂM": "Tā zài kǎoshì zhōng dòng shǒu jiǎo, zuòbì bèi zhuāzhù le."
  },
  {
    "STT": 812,
    "SẮP XẾP CÂU": "想要 / 他 / 蒙混过关。 / 偷偷地 / 动手脚，",
    "ĐÁP ÁN": "他偷偷地动手脚，想要蒙混过关。\r\n",
    "PHIÊN ÂM": "Tā tōutōu de dòng shǒu jiǎo, xiǎng yào ménghùn guòguān."
  },
  {
    "STT": 813,
    "CHỮ": "D",
    "CỤM": "东手接钱西手送",
    "PINYIN": "dōng shǒu jiē qián xī shǒu sòng",
    "NGHĨA": "一只手接过来,只手送出去。指棒人转手钱财。",
    "SẮP XẾP CÂU": "去得也快。 / 他 / 钱来得快， / 东手接钱西手送，",
    "ĐÁP ÁN": "他东手接钱西手送，钱来得快，去得也快。",
    "PHIÊN ÂM": "Tā dōng shǒu jiē qián xī shǒu sòng, qián lái de kuài, qù de yě kuài."
  },
  {
    "STT": 814,
    "SẮP XẾP CÂU": "挣多少 / 他 /  就  / 东手接钱西手送。/ 花多少，",
    "ĐÁP ÁN": "他挣多少就花多少，东手接钱西手送。\r\n",
    "PHIÊN ÂM": "Tā zhēng duōshǎo jiù huā duōshǎo, dōng shǒu jiē qián xī shǒu sòng."
  },
  {
    "STT": 815,
    "CHỮ": "D",
    "CỤM": "动手术",
    "PINYIN": "dòng shǒu shù",
    "NGHĨA": "比喻对某个机构进行体制、制度或人三平等方面的改革或对文章进行修改。",
    "SẮP XẾP CÂU": "治疗疾病。 / 他 / 需要 / 动手术，",
    "ĐÁP ÁN": "他需要动手术，治疗疾病。",
    "PHIÊN ÂM": "Tā xūyào dòng shǒu shù, zhìliáo jí bìng."
  },
  {
    "STT": 816,
    "SẮP XẾP CÂU": "医生 / 动手术。/ 给他 / 决定",
    "ĐÁP ÁN": "医生决定给他动手术。",
    "PHIÊN ÂM": "Yīshēng juédìng gěi tā dòng shǒu shù."
  },
  {
    "STT": 817,
    "CHỮ": "D",
    "CỤM": "东说东有理，西说西有理",
    "PINYIN": "dōng shuō dōng yǒu lǐ, xī shuō xī yǒu lǐ",
    "NGHĨA": "见“反说反有理,正说正有理”。",
    "SẮP XẾP CÂU": "谁也 / 东说东有理，西说西有理， / 关于 / 说服不了 / 谁。 / 这件事，",
    "ĐÁP ÁN": "关于这件事，东说东有理，西说西有理，谁也说服不了谁。",
    "PHIÊN ÂM": "Guānyú zhè jiàn shì, dōng shuō dōng yǒu lǐ, xī shuō xī yǒu lǐ, shuí yě shuōfú bù liǎo shuí."
  },
  {
    "STT": 818,
    "SẮP XẾP CÂU": "没有结果。 / 这场辩论， / 东说东有理，西说西有理，",
    "ĐÁP ÁN": "这场辩论，东说东有理，西说西有理，没有结果。",
    "PHIÊN ÂM": "Zhè chǎng biànlùn, dōng shuō dōng yǒu lǐ, xī shuō xī yǒu lǐ, méiyǒu jiéguǒ."
  },
  {
    "STT": 819,
    "CHỮ": "D",
    "CỤM": "东说向东，西说向西",
    "PINYIN": "dōng shuō xiàng dōng, xī shuō xiàng xī",
    "NGHĨA": "形容人没有主见,任人指使。",
    "SẮP XẾP CÂU": "东说向东，西说向西。 / 大家 / 意见不统一，",
    "ĐÁP ÁN": "大家意见不统一，东说向东，西说向西。",
    "PHIÊN ÂM": "Dàjiā yìjiàn bù tǒngyī, dōng shuō xiàng dōng, xī shuō xiàng xī."
  },
  {
    "STT": 820,
    "SẮP XẾP CÂU": "大家 / 关于这件事， / 各执己见， / 东说向东，西说向西。",
    "ĐÁP ÁN": "关于这件事，大家各执己见，东说向东，西说向西。",
    "PHIÊN ÂM": "Guānyú zhè jiàn shì, dàjiā gè zhí jǐ jiàn, dōng shuō xiàng dōng, xī shuō xiàng xī."
  },
  {
    "STT": 821,
    "CHỮ": "D",
    "CỤM": "冻死迎风站，饿死不折腰",
    "PINYIN": "dòng sǐ yíng fēng zhàn, è sǐ bù zhé yāo",
    "NGHĨA": "形容人意志坚定、性格刚强,决不屈服。",
    "SẮP XẾP CÂU": "冻死迎风站，饿死不折腰。 / 他 / 宁死不屈，",
    "ĐÁP ÁN": "他宁死不屈，冻死迎风站，饿死不折腰。",
    "PHIÊN ÂM": "Tā níngsǐbùqū, dòng sǐ yíng fēng zhàn, è sǐ bù zhé yāo."
  },
  {
    "STT": 822,
    "SẮP XẾP CÂU": "他 / 冻死迎风站，饿死不折腰。 / 面对 / 宁死不屈， / 强权，",
    "ĐÁP ÁN": "面对强权，他宁死不屈，冻死迎风站，饿死不折腰。\r\n",
    "PHIÊN ÂM": "Miànduì qiángquán, tā níngsǐbùqū, dòng sǐ yíng fēng zhàn, è sǐ bù zhé yāo."
  },
  {
    "STT": 823,
    "CHỮ": "D",
    "CỤM": "东踢一脚，西踢一脚",
    "PINYIN": "dōng tī yī jiǎo, xī tī yī jiǎo",
    "NGHĨA": "比喻手忙脚乱、打着应付、处理各种事情。",
    "SẮP XẾP CÂU": "一直 / 他的事情 / 没有解决。 / 被 / 各个部门 / 东踢一脚，西踢一脚，",
    "ĐÁP ÁN": "他的事情被各个部门东踢一脚，西踢一脚，一直没有解决。",
    "PHIÊN ÂM": "Tā de shìqíng bèi gège bùmén dōng tī yī jiǎo, xī tī yī jiǎo, yīzhí méiyǒu jiějué."
  },
  {
    "STT": 824,
    "SẮP XẾP CÂU": "无人理会。 / 他的建议 / 被 / 领导们 / 东踢一脚，西踢一脚，",
    "ĐÁP ÁN": "他的建议被领导们东踢一脚，西踢一脚，无人理会。",
    "PHIÊN ÂM": "Tā de jiànyì bèi lǐngdǎo men dōng tī yī jiǎo, xī tī yī jiǎo, wú rén lǐhuì."
  },
  {
    "STT": 825,
    "CHỮ": "D",
    "CỤM": "东托人，西送礼",
    "PINYIN": "dōng tuō rén, xī sòng lǐ",
    "NGHĨA": "指到处找关系,请人帮忙。",
    "SẮP XẾP CÂU": "费尽心思。 / 他 / 为了 / 东托人，西送礼， / 办成 / 这件事，",
    "ĐÁP ÁN": "他为了办成这件事，东托人，西送礼，费尽心思。",
    "PHIÊN ÂM": "Tā wèile bànchéng zhè jiàn shì, dōng tuō rén, xī sòng lǐ, fèi jìn xīnsī."
  },
  {
    "STT": 826,
    "SẮP XẾP CÂU": "不择手段。 / 他 / 为了 / 升职， / 东托人，西送礼，",
    "ĐÁP ÁN": "他为了升职，东托人，西送礼，不择手段。",
    "PHIÊN ÂM": "Tā wèile shēngzhí, dōng tuō rén, xī sòng lǐ, bùzé shǒuduàn."
  },
  {
    "STT": 827,
    "CHỮ": "D",
    "CỤM": "东下来，西手去",
    "PINYIN": "dōng xià lái, xī shǒu qù",
    "NGHĨA": "见“这下来,那下去”。",
    "SẮP XẾP CÂU": "效率低下。 / 他 / 做事 / 没有条理， / 东下来，西手去，",
    "ĐÁP ÁN": "他做事没有条理，东下来，西手去，效率低下。",
    "PHIÊN ÂM": "Tā zuòshì méiyǒu tiáolǐ, dōng xià lái, xī shǒu qù, xiàolǜ dīxià."
  },
  {
    "STT": 828,
    "SẮP XẾP CÂU": "把事情 / 他 / 搞砸了。 / 手忙脚乱， / 东下来，西手去，",
    "ĐÁP ÁN": "他手忙脚乱，东下来，西手去，把事情搞砸了。",
    "PHIÊN ÂM": "Tā shǒumángjiǎoluàn, dōng xià lái, xī shǒu qù, bǎ shìqíng gǎozá le."
  },
  {
    "STT": 829,
    "CHỮ": "D",
    "CỤM": "动一根毫毛",
    "PINYIN": "dòng yī gēn háo máo",
    "NGHĨA": "比喻对人或事物造成轻微的损伤。",
    "SẮP XẾP CÂU": "静静地 / 他 / 等待着。 / 一动一根毫毛 / 也没有，",
    "ĐÁP ÁN": "他一动一根毫毛也没有，静静地等待着。",
    "PHIÊN ÂM": "Tā yī dòng yī gēn háo máo yě méiyǒu, jìngjìng de děngdài zhe."
  },
  {
    "STT": 830,
    "SẮP XẾP CÂU": "他 / 这件事 / 没有 / 对他 / 造成 / 任何影响， / 一动一根毫毛也没有。",
    "ĐÁP ÁN": "这件事没有对他造成任何影响，他一动一根毫毛也没有。\r\n",
    "PHIÊN ÂM": "Zhè jiàn shì méiyǒu duì tā zàochéng rènhé yǐngxiǎng, tā yī dòng yī gēn háo máo yě méiyǒu."
  },
  {
    "STT": 831,
    "CHỮ": "D",
    "CỤM": "东一句，西一句",
    "PINYIN": "dōng yī jù, xī yī jù",
    "NGHĨA": "形容人说话东拉西扯,没有逻辑。",
    "SẮP XẾP CÂU": "让人 / 他 / 听不懂。 / 说话 / 东一句，西一句，",
    "ĐÁP ÁN": "他说话东一句，西一句，让人听不懂。",
    "PHIÊN ÂM": "Tā shuōhuà dōng yī jù, xī yī jù, ràng rén tīng bu dǒng."
  },
  {
    "STT": 832,
    "SẮP XẾP CÂU": "毫无逻辑。 / 他讲的 / 故事 / 东一句，西一句，",
    "ĐÁP ÁN": "他讲的故事东一句，西一句，毫无逻辑。",
    "PHIÊN ÂM": "Tā jiǎng de gùshì dōng yī jù, xī yī jù, háowú luójí."
  },
  {
    "STT": 833,
    "CHỮ": "D",
    "CỤM": "东一榔头，西一棒子",
    "PINYIN": "dōng yī láng tóu, xī yī bàng zi",
    "NGHĨA": "比喻说话东拉西扯、不着边际,或做事没有计划。",
    "SẮP XẾP CÂU": "效率很低。 / 东一榔头，西一棒子， / 他 / 没有计划， / 学习",
    "ĐÁP ÁN": "他学习没有计划，东一榔头，西一棒子，效率很低。",
    "PHIÊN ÂM": "Tā xuéxí méiyǒu jìhuà, dōng yī láng tóu, xī yī bàng zi, xiàolǜ hěn dī."
  },
  {
    "STT": 834,
    "SẮP XẾP CÂU": "他 / 做事 / 三天打鱼两天晒网， / 东一榔头，西一棒子。",
    "ĐÁP ÁN": "他做事三天打鱼两天晒网，东一榔头，西一棒子。",
    "PHIÊN ÂM": "Tā zuòshì sān tiān dǎ yú liǎng tiān shài wǎng, dōng yī láng tóu, xī yī bàng zi."
  },
  {
    "STT": 835,
    "CHỮ": "D",
    "CỤM": "动嘴皮子",
    "PINYIN": "dòng zuǐ pí zi",
    "NGHĨA": "指只说嘴而不行动。",
    "SẮP XẾP CÂU": "从来 / 他 / 不做 / 只会动嘴皮子， / 实事。",
    "ĐÁP ÁN": "他只会动嘴皮子，从来不做实事。",
    "PHIÊN ÂM": "Tā zhǐ huì dòng zuǐ pí zi, cónglái bù zuò shíshì."
  },
  {
    "STT": 836,
    "SẮP XẾP CÂU": "只会动嘴皮子。 / 他 / 光说不练，",
    "ĐÁP ÁN": "他光说不练，只会动嘴皮子。",
    "PHIÊN ÂM": "Tā guāng shuō bù liàn, zhǐ huì dòng zuǐ pí zi."
  },
  {
    "STT": 837,
    "CHỮ": "D",
    "CỤM": "斗不过鸭斗鸡",
    "PINYIN": "dòu bù guò yā duì jī",
    "NGHĨA": "比喻斗不过厉害的,就来欺负软弱的。",
    "SẮP XẾP CÂU": "自不量力地 / 他 / 挑战高手。 / 斗不过鸭斗鸡，",
    "ĐÁP ÁN": "他斗不过鸭斗鸡，自不量力地挑战高手。",
    "PHIÊN ÂM": "Tā dòu bu guò yā duì jī, zì bù liànglì de tiǎozhàn gāoshǒu."
  },
  {
    "STT": 838,
    "SẮP XẾP CÂU": "斗不过鸭斗鸡。 / 他 / 自不量力，",
    "ĐÁP ÁN": "他自不量力，斗不过鸭斗鸡。\r\n",
    "PHIÊN ÂM": "Tā zì bù liànglì, dòu bu guò yā duì jī."
  },
  {
    "STT": 839,
    "CHỮ": "D",
    "CỤM": "兜不上下颏",
    "PINYIN": "dōu bù shàng xià kē",
    "NGHĨA": "形容人高兴得合不拢嘴。",
    "SẮP XẾP CÂU": "兜不上下颏。 / 这件事 / 太难了，",
    "ĐÁP ÁN": "这件事太难了，兜不上下颏。",
    "PHIÊN ÂM": "Zhè jiàn shì tài nán le, dōu bu shàng xià kē."
  },
  {
    "STT": 840,
    "SẮP XẾP CÂU": "兜不上下颏。 / 这个计划 / 根本 / 行不通，",
    "ĐÁP ÁN": "这个计划根本行不通，兜不上下颏。",
    "PHIÊN ÂM": "Zhège jìhuà gēnběn xíng bu tōng, dōu bu shàng xià kē."
  },
  {
    "STT": 841,
    "CHỮ": "D",
    "CỤM": "斗大的字不识一升",
    "PINYIN": "dǒu dà de zì bù shí yī shēng",
    "NGHĨA": "形容人文化水平低,识字少或不识字。",
    "SẮP XẾP CÂU": "连 / 他 / 自己的名字 / 斗大的字不识一升， / 都写不好。",
    "ĐÁP ÁN": "他斗大的字不识一升，连自己的名字都写不好。",
    "PHIÊN ÂM": "Tā dǒu dà de zì bù shí yī shēng, lián zìjǐ de míngzi dōu xiě bù hǎo."
  },
  {
    "STT": 842,
    "SẮP XẾP CÂU": "但 / 过去 / 他们 / 却 / 农村有些老人 / 有着丰富的阅历和智慧。 / 斗大的字不识一升，",
    "ĐÁP ÁN": "过去农村有些老人斗大的字不识一升，但他们却有着丰富的阅历和智慧。",
    "PHIÊN ÂM": "Guòqù nóngcūn yǒuxiē lǎorén dǒu dà de zì bù shí yī shēng, dàn tāmen què yǒu zhe fēngfù de yuèlì hé zhìhuì."
  },
  {
    "STT": 843,
    "CHỮ": "D",
    "CỤM": "豆腐拌成了肉价钱",
    "PINYIN": "dòu fu bàn chéng le ròu jià qián",
    "NGHĨA": "比喻由于某种原因,本来价值很小的商品价格一下子提高了很多。",
    "SẮP XẾP CÂU": "价格 / 简直是 / 却 / 豆腐拌成了肉价钱。 / 很高， / 这件衣服 / 做工粗糙，",
    "ĐÁP ÁN": "这件衣服做工粗糙，价格却很高，简直是豆腐拌成了肉价钱。",
    "PHIÊN ÂM": "Zhè jiàn yīfu zuògōng cūcāo, jiàgé què hěn gāo, jiǎnzhí shì dòu fu bàn chéng le ròu jià qián."
  },
  {
    "STT": 844,
    "SẮP XẾP CÂU": "完全是 / 其实 / 豆腐拌成了肉价钱。 / 这个所谓的 / “高级茶叶”， / 很普通，",
    "ĐÁP ÁN": "这个所谓的 “高级茶叶”，其实很普通，完全是豆腐拌成了肉价钱。",
    "PHIÊN ÂM": "Zhège suǒwèi de “gāojí cháyè”, qíshí hěn pǔtōng, wánquán shì dòu fu bàn chéng le ròu jià qián."
  },
  {
    "STT": 845,
    "CHỮ": "D",
    "CỤM": "豆腐块",
    "PINYIN": "dòu fu kuài",
    "NGHĨA": "比喻指小文章。",
    "SẮP XẾP CÂU": "像 / 他 / 一块 / 为人 / 豆腐块。 / 方方正正，",
    "ĐÁP ÁN": "他为人方方正正，像一块豆腐块。",
    "PHIÊN ÂM": "Tā wéirén fāngfāngzhèngzhèng, xiàng yī kuài dòu fu kuài."
  },
  {
    "STT": 846,
    "SẮP XẾP CÂU": "像 / 他的字 / 一个个 / 写得 / 豆腐块。 / 方方正正，",
    "ĐÁP ÁN": "他的字写得方方正正，像一个个豆腐块。",
    "PHIÊN ÂM": "Tā de zì xiě de fāngfāngzhèngzhèng, xiàng yī ge ge dòu fu kuài."
  },
  {
    "STT": 847,
    "CHỮ": "D",
    "CỤM": "豆腐里挑出骨头来",
    "PINYIN": "dòu fu lǐ tiāo chū gǔ tou lái",
    "NGHĨA": "形容对人或物过分挑剔。\r\n形容检查得特别仔细、严格。",
    "SẮP XẾP CÂU": "让人 / 总是 / 很反感。 / 他 / 鸡蛋里挑骨头， / 豆腐里挑出骨头来，",
    "ĐÁP ÁN": "他总是鸡蛋里挑骨头，豆腐里挑出骨头来，让人很反感。",
    "PHIÊN ÂM": "Tā zǒngshì jīdàn lǐ tiāo gǔtou, dòu fu lǐ tiāo chū gǔ tou lái, ràng rén hěn fǎngǎn."
  },
  {
    "STT": 848,
    "SẮP XẾP CÂU": "想要 / 他 / 刁难别人。 / 故意找茬， / 豆腐里挑出骨头来，",
    "ĐÁP ÁN": "他故意找茬，豆腐里挑出骨头来，想要刁难别人。",
    "PHIÊN ÂM": "Tā gùyì zhǎochá, dòu fu lǐ tiāo chū gǔ tou lái, xiǎng yào diāonán biérén."
  },
  {
    "STT": 849,
    "CHỮ": "D",
    "CỤM": "豆腐一碗，一碗豆腐",
    "PINYIN": "dòu fu yī wǎn, yī wǎn dòu fu",
    "NGHĨA": "比喻两者一样,没有区别。",
    "SẮP XẾP CÂU": "看起来 / 桌子上 / 很壮观。 / 摆满了碗， / 豆腐一碗，一碗豆腐，",
    "ĐÁP ÁN": "桌子上摆满了碗，豆腐一碗，一碗豆腐，看起来很壮观。",
    "PHIÊN ÂM": "Zhuōzi shàng bǎi mǎn le wǎn, dòu fu yī wǎn, yī wǎn dòu fu, kàn qǐlái hěn zhuàngguān."
  },
  {
    "STT": 850,
    "SẮP XẾP CÂU": "豆腐一碗，一碗豆腐。 / 这些产品 / 都是 / 一样的，",
    "ĐÁP ÁN": "这些产品都是一样的，豆腐一碗，一碗豆腐。",
    "PHIÊN ÂM": "Zhèxiē chǎnpǐn dōu shì yīyàng de, dòu fu yī wǎn, yī wǎn dòu fu."
  },
  {
    "STT": 851,
    "CHỮ": "D",
    "CỤM": "豆腐账",
    "PINYIN": "dòu fu zhàng",
    "NGHĨA": "比喻很琐碎的账目。",
    "SẮP XẾP CÂU": "简直就是 / 他的 / 豆腐账。 / 账目 / 乱七八糟，",
    "ĐÁP ÁN": "他的账目乱七八糟，简直就是豆腐账。",
    "PHIÊN ÂM": "Tā de zhàngmù luànqībāzāo, jiǎnzhí jiùshì dòu fu zhàng."
  },
  {
    "STT": 852,
    "SẮP XẾP CÂU": "账目 / 公司的 / 像 / 财务状况 / 豆腐账一样 / 很糟糕， / 混乱。",
    "ĐÁP ÁN": "公司的财务状况很糟糕，账目像豆腐账一样混乱。",
    "PHIÊN ÂM": "Gōngsī de cáiwù zhuàngkuàng hěn zāogāo, zhàngmù xiàng dòu fu zhàng yīyàng hùnluàn."
  },
  {
    "STT": 853,
    "CHỮ": "D",
    "CỤM": "豆腐嘴，刀子心",
    "PINYIN": "dòu fu zuǐ, dāo zi xīn",
    "NGHĨA": "指嘴上说得动听,内心却阴险毒辣。",
    "SẮP XẾP CÂU": "没想到 / 他 / 却是 / 说话 / 豆腐嘴，刀子心。 / 轻声细语的，",
    "ĐÁP ÁN": "他说话轻声细语的，没想到却是豆腐嘴，刀子心。",
    "PHIÊN ÂM": "Tā shuōhuà qīngshēng xìyǔ de, méi xiǎngdào què shì dòu fu zǔi, dāo zi xīn."
  },
  {
    "STT": 854,
    "SẮP XẾP CÂU": "其实 / 她 / 心肠很歹毒。 / 表面上 / 豆腐嘴，刀子心， / 很善良，",
    "ĐÁP ÁN": "她表面上很善良，其实豆腐嘴，刀子心，心肠很歹毒。",
    "PHIÊN ÂM": "Tā biǎomiàn shàng hěn shànliáng, qíshí dòu fu zǔi, dāo zi xīn, xīncháng hěn dǎidú."
  },
  {
    "STT": 855,
    "CHỮ": "D",
    "CỤM": "抖搂包袱底儿",
    "PINYIN": "dǒu lou bāo fu dǐ er",
    "NGHĨA": "比喻全部拿出来,毫无保留。",
    "SẮP XẾP CÂU": "把陈年旧事 / 都说出来了。/ 他喝醉了，/ 抖搂包袱底儿，/ 就开始",
    "ĐÁP ÁN": "他喝醉了，就开始抖搂包袱底儿，把陈年旧事都说出来了。",
    "PHIÊN ÂM": "Tā hēzuì le, jiù kāishǐ dǒu lou bāo fu dǐ er, bǎ chénnián jiùshì dōu shuō chūlái le."
  },
  {
    "STT": 856,
    "SẮP XẾP CÂU": "千万不要 / 抖搂包袱底儿。/ 在会议上 / 你可别乱说话，",
    "ĐÁP ÁN": "在会议上你可别乱说话，千万不要抖搂包袱底儿。",
    "PHIÊN ÂM": "Zài huìyì shàng nǐ kě bié luàn shuōhuà, qiānwàn bù yào dǒu lou bāo fu dǐ er."
  },
  {
    "STT": 857,
    "CHỮ": "D",
    "CỤM": "兜圈子",
    "PINYIN": "dōu quān zi",
    "NGHĨA": "见“绕圈子”。",
    "SẮP XẾP CÂU": "别跟我 / 兜圈子。/ 有话 / 就直说，",
    "ĐÁP ÁN": "有话就直说，别跟我兜圈子。",
    "PHIÊN ÂM": "Yǒu huà jiù zhí shuō, bié gēn wǒ dōu quān zi."
  },
  {
    "STT": 858,
    "SẮP XẾP CÂU": "就是不说 / 重点。/ 他问了半天，/ 兜圈子，/ 一直在",
    "ĐÁP ÁN": "他问了半天，一直在兜圈子，就是不说重点。",
    "PHIÊN ÂM": "Tā wèn le bàntiān, yīzhí zài dōu quān zi, jiùshì bù shuō zhòngdiǎn."
  },
  {
    "STT": 859,
    "CHỮ": "D",
    "CỤM": "兜头一盆冷水",
    "PINYIN": "dōu tóu yī pén lěng shuǐ",
    "NGHĨA": "比喻在正高兴、得意的时候遭到打击。",
    "SẮP XẾP CÂU": "让他彻底愣住了。/ 正当他兴高采烈的时候，/ 兜头一盆冷水，/ 这个坏消息如",
    "ĐÁP ÁN": "正当他兴高采烈的时候，这个坏消息如兜头一盆冷水，让他彻底愣住了。",
    "PHIÊN ÂM": "Zhèngdāng tā xìnggāocǎiliè de shíhou, zhège huài xiāoxi rú dōu tóu yī pén lěng shuǐ, ràng tā chèdǐ lèngzhù le."
  },
  {
    "STT": 860,
    "SẮP XẾP CÂU": "他的热情被领导的几句话 / 兜头一盆冷水，/ 瞬间没了干劲。/",
    "ĐÁP ÁN": "他的热情被领导的几句话兜头一盆冷水，瞬间没了干劲。",
    "PHIÊN ÂM": "Tā de rèqíng bèi lǐngdǎo de jǐ jù huà dōu tóu yī pén lěng shuǐ, shùnjiān méi le gànjìn."
  },
  {
    "STT": 861,
    "CHỮ": "D",
    "CỤM": "抖威风",
    "PINYIN": "dǒu wēi fēng",
    "NGHĨA": "指故意在人前显示自己不凡的气派、威势,让人敬畏。",
    "SẮP XẾP CÂU": "让人很反感。/ 他当了个小组长，/ 抖威风，/ 就到处",
    "ĐÁP ÁN": "他当了个小组长，就到处抖威风，让人很反感。",
    "PHIÊN ÂM": "Tā dāng le ge xiǎozǔzhǎng, jiù dàochù dǒu wēi fēng, ràng rén hěn fǎngǎn."
  },
  {
    "STT": 862,
    "SẮP XẾP CÂU": "我可不怕你。/ 抖威风，/ 你别在 / 我面前",
    "ĐÁP ÁN": "你别在我面前抖威风，我可不怕你。",
    "PHIÊN ÂM": "Nǐ bié zài wǒ miànqián dǒu wēi fēng, wǒ kě bù pà nǐ."
  },
  {
    "STT": 863,
    "CHỮ": "D",
    "CỤM": "斗闲气",
    "PINYIN": "dòu xián qì",
    "NGHĨA": "指双方在毫无意义的事情上计较、 争执。",
    "SẮP XẾP CÂU": "谁也不理谁。/ 斗闲气，/ 一点小事 / 他们俩为了",
    "ĐÁP ÁN": "他们俩为了一点小事斗闲气，谁也不理谁。",
    "PHIÊN ÂM": "Tāmen liǎ wèile yī diǎn xiǎoshì dòu xián qì, shuí yě bù lǐ shuí."
  },
  {
    "STT": 864,
    "SẮP XẾP CÂU": "不值得。/ 斗闲气了，/ 跟他 / 你别",
    "ĐÁP ÁN": "你别跟他斗闲气了，不值得。",
    "PHIÊN ÂM": "Nǐ bié gēn tā dòu xián qì le, bù zhídé."
  },
  {
    "STT": 865,
    "CHỮ": "D",
    "CỤM": "斗心眼儿",
    "PINYIN": "dòu xīn yǎn ér",
    "NGHĨA": "指动心计、用计谋和別人较量。",
    "SẮP XẾP CÂU": "斗心眼儿。/ 职场如战场，/ 都有人/ 到处",
    "ĐÁP ÁN": "职场如战场，到处都有人斗心眼儿。",
    "PHIÊN ÂM": "Zhíchǎng rú zhànchǎng, dàochù dōu yǒu rén dòu xīn yǎn ér."
  },
  {
    "STT": 866,
    "SẮP XẾP CÂU": "他们俩表面和和气气，/ 斗心眼儿。/ 背地里 / 天天",
    "ĐÁP ÁN": "他们俩表面和和气气，背地里天天斗心眼儿。",
    "PHIÊN ÂM": "Tāmen liǎ biǎomiàn héheqìqì, bèidì lǐ tiāntiān dòu xīn yǎn ér."
  },
  {
    "STT": 867,
    "CHỮ": "D",
    "CỤM": "兜着底儿来",
    "PINYIN": "dōu zhe dǐ er lái",
    "NGHĨA": "比喻从根上把问题彻底解决。",
    "SẮP XẾP CÂU": "领导派他去，/ 肯定没问题。/ 这次任务，/ 兜着底儿来的，/  就是让他",
    "ĐÁP ÁN": "这次任务，领导派他去，就是让他兜着底儿来的，肯定没问题。",
    "PHIÊN ÂM": "Zhè cì rènwù, lǐngdǎo pài tā qù, jiùshì ràng tā dōu zhe dǐ er lái de, kěndìng méi wèntí."
  },
  {
    "STT": 868,
    "SẮP XẾP CÂU": "你放心吧，/ 兜着底儿来，/ 出不了错。/ 这件事有他",
    "ĐÁP ÁN": "你放心吧，这件事有他兜着底儿来，出不了错。",
    "PHIÊN ÂM": "Nǐ fàngxīn ba, zhè jiàn shì yǒu tā dōu zhe dǐ er lái, chū bu liǎo cuò."
  },
  {
    "STT": 869,
    "CHỮ": "D",
    "CỤM": "斗嘴皮子",
    "PINYIN": "dòu zuǐ pí zi",
    "NGHĨA": "指互相开玩笑或争论。",
    "SẮP XẾP CÂU": "快干活吧。/ 斗嘴皮子了，/ 你们俩 / 不要",
    "ĐÁP ÁN": "你们俩不要斗嘴皮子了，快干活吧。",
    "PHIÊN ÂM": "Nǐmen liǎ bù yào dòu zuǐ pí zi le, kuài gànhuó ba."
  },
  {
    "STT": 870,
    "SẮP XẾP CÂU": "斗嘴皮子。/ 欢喜冤家，/ 一见面就 / 他们俩是",
    "ĐÁP ÁN": "他们俩是欢喜冤家，一见面就斗嘴皮子。",
    "PHIÊN ÂM": "Tāmen liǎ shì huānxǐ yuānjiā, yī jiànmiàn jiù dòu zuǐ pí zi."
  },
  {
    "STT": 871,
    "CHỮ": "D",
    "CỤM": "肚饱眼里馋",
    "PINYIN": "dù bǎo yǎn lǐ chán",
    "NGHĨA": "形容人贪吃。\r\n形容人贪心不足。",
    "SẮP XẾP CÂU": "看见蛋糕又想吃了，/ 他刚吃完两大碗饭，/ 肚饱眼里馋。/ 真是",
    "ĐÁP ÁN": "他刚吃完两大碗饭，看见蛋糕又想吃了，真是肚饱眼里馋。",
    "PHIÊN ÂM": "Tā gāng chīwán liǎng dà wǎn fàn, kànjiàn dàngāo yòu xiǎng chī le, zhēnshi dù bǎo yǎn lǐ chán."
  },
  {
    "STT": 872,
    "SẮP XẾP CÂU": "肚饱眼里馋 / 什么时候能改？ / 你这 / 的毛病",
    "ĐÁP ÁN": "你这肚饱眼里馋的毛病什么时候能改？",
    "PHIÊN ÂM": "Nǐ zhè dù bǎo yǎn lǐ chán de máobìng shénme shíhou néng gǎi?"
  },
  {
    "STT": 873,
    "CHỮ": "D",
    "CỤM": "赌风凉咒",
    "PINYIN": "dǔ fēng liáng zhòu",
    "NGHĨA": "指发一些毫无意义的毒誓。",
    "SẮP XẾP CÂU": "赌风凉咒，/ 他输了钱，/ 怨天尤人。/ 就在那儿",
    "ĐÁP ÁN": "他输了钱，就在那儿赌风凉咒，怨天尤人。",
    "PHIÊN ÂM": "Tā shū le qián, jiù zài nàr dǔ fēng liáng zhòu, yuàntiānyóurén."
  },
  {
    "STT": 874,
    "SẮP XẾP CÂU": "赌风凉咒，/ 他什么也/ 不会做。 / 除了",
    "ĐÁP ÁN": "除了赌风凉咒，他什么也不会做。",
    "PHIÊN ÂM": "Chúle dǔ fēng liáng zhòu, tā shénme yě bù huì zuò."
  },
  {
    "STT": 875,
    "CHỮ": "D",
    "CỤM": "堵后门儿",
    "PINYIN": "dǔ hòu mén ér",
    "NGHĨA": "比喻杜绝办事中的不正当途径或通融、舞弊的渠道。",
    "SẮP XẾP CÂU": "防止 / 不正之风。/ 新规定出台的目的，/堵后门儿，/  就是为了",
    "ĐÁP ÁN": "新规定出台的目的，就是为了堵后门儿，防止不正之风。",
    "PHIÊN ÂM": "Xīn guīdìng chūtái de mùdì, jiùshì wèile dǔ hòu mén ér, fángzhǐ bùzhèng zhī fēng."
  },
  {
    "STT": 876,
    "SẮP XẾP CÂU": "给所有人 / 一个机会。/ 我们要公平选拔，/ 堵后门儿，/ 坚决",
    "ĐÁP ÁN": "我们要公平选拔，坚决堵后门儿，给所有人一个机会。",
    "PHIÊN ÂM": "Wǒmen yào gōngpíng xuǎnbá, jiānjué dǔ hòu mén ér, gěi suǒyǒu rén yī ge jīhuì."
  },
  {
    "STT": 877,
    "CHỮ": "D",
    "CỤM": "堵窟窿",
    "PINYIN": "dǔ kū long",
    "NGHĨA": "见“补前降”。",
    "SẮP XẾP CÂU": "赶紧去 / 别让问题更严重。/ 这笔钱你先拿着，/ 堵窟窿，",
    "ĐÁP ÁN": "这笔钱你先拿着，赶紧去堵窟窿，别让问题更严重。",
    "PHIÊN ÂM": "Zhè bǐ qián nǐ xiān názhe, gǎnjǐn qù dǔ kū long, bié ràng wèntí gèng yánzhòng."
  },
  {
    "STT": 878,
    "SẮP XẾP CÂU": "终究不是 / 长久之计。/ 拆东墙补西墙地 / 堵窟窿，",
    "ĐÁP ÁN": "拆东墙补西墙地堵窟窿，终究不是长久之计。",
    "PHIÊN ÂM": "Chāi dōngqiáng bǔ xīqiáng de dǔ kū long, zhōngjiū bù shì chángjiǔ zhī jì."
  },
  {
    "STT": 879,
    "CHỮ": "D",
    "CỤM": "肚里有什么就掏什么",
    "PINYIN": "dù lǐ yǒu shén me jiù tāo shén me",
    "NGHĨA": "形容人心直口快,性格直爽。",
    "SẮP XẾP CÂU": "从不 / 藏着掖着。/ 他这个人很实在，/ 肚里有什么就掏什么，",
    "ĐÁP ÁN": "他这个人很实在，肚里有什么就掏什么，从不藏着掖着。",
    "PHIÊN ÂM": "Tā zhège rén hěn shízài, dù lǐ yǒu shénme jiù tāo shén me, cóng bù cángzhe yēzhe."
  },
  {
    "STT": 880,
    "SẮP XẾP CÂU": "就该 / 跟我，/ 肚里有什么就掏什么。/ 你 ",
    "ĐÁP ÁN": "你跟我，就该肚里有什么就掏什么。",
    "PHIÊN ÂM": "Nǐ gēn wǒ, jiù gāi dù lǐ yǒu shén me jiù tāo shénme."
  },
  {
    "STT": 881,
    "CHỮ": "D",
    "CỤM": "肚里装不下一口气",
    "PINYIN": "dù lǐ zhuāng bù xià yī kǒu qì",
    "NGHĨA": "形容人肚量狹小,忍耐不住或不能容人。",
    "SẮP XẾP CÂU": "真是 / 就气得不行，/ 肚里装不下一口气。/ 他受了这点委屈，",
    "ĐÁP ÁN": "他受了这点委屈，就气得不行，真是肚里装不下一口气。",
    "PHIÊN ÂM": "Tā shòu le zhè diǎn wěiqu, jiù qì de bù xíng, zhēnshi dù lǐ zhuāng bu xià yī kǒu qì."
  },
  {
    "STT": 882,
    "SẮP XẾP CÂU": "为这点小事 / 生那么 / 大气。/ 肚里装不下一口气了，/  你也太",
    "ĐÁP ÁN": "你也太肚里装不下一口气了，为这点小事生那么大气。",
    "PHIÊN ÂM": "Nǐ yě tài dù lǐ zhuāng bu xià yī kǒu qì le, wèi zhè diǎn xiǎoshì shēng nàme dà qì."
  },
  {
    "STT": 883,
    "CHỮ": "D",
    "CỤM": "肚量大",
    "PINYIN": "dù liàng dà",
    "NGHĨA": "形容人心胸宽广,能容人和事。",
    "SẮP XẾP CÂU": "从不计较 / 个人 / 得失。/ 肚量大，/ 他",
    "ĐÁP ÁN": "他肚量大，从不计较个人得失。",
    "PHIÊN ÂM": "Tā dù liàng dà, cóng bù jìjiào gèrén déshī."
  },
  {
    "STT": 884,
    "SẮP XẾP CÂU": "才能 / 服众。/ 做领导的，/ 必须肚量大，/ 必须",
    "ĐÁP ÁN": "做领导的，必须肚量大，才能服众。",
    "PHIÊN ÂM": "Zuò lǐngdǎo de, bìxū dù liàng dà, cái néng fú zhòng."
  },
  {
    "STT": 885,
    "CHỮ": "D",
    "CỤM": "堵门子",
    "PINYIN": "dǔ mén zi",
    "NGHĨA": "比喻事先放话,让人放弃向其通融的念头。",
    "SẮP XẾP CÂU": "让他 / 不得安宁。/ 债主天天来 / 堵门子，",
    "ĐÁP ÁN": "债主天天来堵门子，让他不得安宁。",
    "PHIÊN ÂM": "Zhàizhǔ tiāntiān lái dǔ mén zi, ràng tā bùdé ānjìng."
  },
  {
    "STT": 886,
    "SẮP XẾP CÂU": "我就去你家 / 了！/ 你再不还钱，/ 堵门子",
    "ĐÁP ÁN": "你再不还钱，我就去你家堵门子了！",
    "PHIÊN ÂM": "Nǐ zài bù huán qián, wǒ jiù qù nǐ jiā dǔ mén zi le!"
  },
  {
    "STT": 887,
    "CHỮ": "D",
    "CỤM": "独木桥",
    "PINYIN": "dú mù qiáo",
    "NGHĨA": "一根木头的桥，形容路窄。",
    "SẮP XẾP CÂU": "竞争 / 非常激烈。/ 高考就像 / 独木桥，/ 千军万马过",
    "ĐÁP ÁN": "高考就像千军万马过独木桥，竞争非常激烈。",
    "PHIÊN ÂM": "Gāokǎo jiù xiàng qiānjūn wànmǎ guò dú mù qiáo, jìngzhēng fēicháng jīliè."
  },
  {
    "STT": 888,
    "SẮP XẾP CÂU": "独木桥，/ 成功的 / 人很少。/ 这条创业之路，/ 就是一条",
    "ĐÁP ÁN": "这条创业之路，就是一条独木桥，成功的人很少。",
    "PHIÊN ÂM": "Zhè tiáo chuàngyè zhī lù, jiùshì yī tiáo dú mù qiáo, chénggōng de rén hěn shǎo."
  },
  {
    "STT": 889,
    "CHỮ": "D",
    "CỤM": "肚皮里存不下一句话",
    "PINYIN": "dù pí lǐ cún bù xià yī jù huà",
    "NGHĨA": "指心里藏不住事,有点儿事就想说出来。",
    "SẮP XẾP CÂU": "是典型的 / 你别告诉他秘密。/ 他这个人，/ 肚皮里存不下一句话，",
    "ĐÁP ÁN": "他这个人，是典型的肚皮里存不下一句话，你别告诉他秘密。",
    "PHIÊN ÂM": "Tā zhège rén, shì diǎnxíng de dù pí lǐ cún bu xià yī jù huà, nǐ bié gàosu tā mìmì."
  },
  {
    "STT": 890,
    "SẮP XẾP CÂU": "你可千万别 / 到处乱说。/ 我告诉你这个秘密，/ 肚皮里存不下一句话，",
    "ĐÁP ÁN": "我告诉你这个秘密，你可千万别肚皮里存不下一句话，到处乱说。",
    "PHIÊN ÂM": "Wǒ gàosu nǐ zhège mìmì, nǐ kě qiānwàn bié dù pí lǐ cún bu xià yī jù huà, dàochù luàn shuō."
  },
  {
    "STT": 891,
    "CHỮ": "D",
    "CỤM": "肚皮里打鼓",
    "PINYIN": "dù pí lǐ dǎ gǔ",
    "NGHĨA": "指饿得肚子直叫。",
    "SẮP XẾP CÂU": "他现在紧张得 / 睡不着觉。/ 明天就要面试了，/ 肚皮里打鼓，",
    "ĐÁP ÁN": "明天就要面试了，他现在紧张得肚皮里打鼓，睡不着觉。",
    "PHIÊN ÂM": "Míngtiān jiù yào miànshì le, tā xiànzài jǐnzhāng de dù pí lǐ dǎ gǔ, shuì bu zháo jiào."
  },
  {
    "STT": 892,
    "SẮP XẾP CÂU": "他的心里都会 / 特别紧张。/ 每次上台发言前，/ 肚皮里打鼓，",
    "ĐÁP ÁN": "每次上台发言前，他的心里都会肚皮里打鼓，特别紧张。",
    "PHIÊN ÂM": "Měi cì shàngtái fāyán qián, tā de xīnlǐ dōu huì dù pí lǐ dǎ gǔ, tèbié jǐnzhāng."
  },
  {
    "STT": 893,
    "CHỮ": "D",
    "CỤM": "肚皮里打官司",
    "PINYIN": "dù pí lǐ dǎ guān sī",
    "NGHĨA": "比喻有话或有意见不明说,心里暗自谋划。",
    "SẮP XẾP CÂU": "肯定是在 / 权衡利弊。/ 他一个人坐在那里不说话，/ 肚皮里打官司，",
    "ĐÁP ÁN": "他一个人坐在那里不说话，肯定是在肚皮里打官司，权衡利弊。",
    "PHIÊN ÂM": "Tā yī ge rén zuò zài nàlǐ bù shuōhuà, kěndìng shì zài dù pí lǐ dǎ guān sī, quánhéng lìbì."
  },
  {
    "STT": 894,
    "SẮP XẾP CÂU": "他自己先 / 想了好几天。/ 在做出这个重大决定之前，/ 肚皮里打官司，",
    "ĐÁP ÁN": "在做出这个重大决定之前，他自己先肚里打官司，想了好几天。",
    "PHIÊN ÂM": "Zài zuò chū zhège zhòngdà juédìng zhīqián, tā zìjǐ xiān dù pí lǐ dǎ guān sī, xiǎng le hǎo jǐ tiān."
  },
  {
    "STT": 895,
    "CHỮ": "D",
    "CỤM": "毒蛇黄鳝分不清",
    "PINYIN": "dú shé huáng shàn fēn bù qīng",
    "NGHĨA": "比喻辨不清是非真假,分不清好人坏人。",
    "SẮP XẾP CÂU": "把坏人 / 当好人。/ 他这个人太天真，/ 毒蛇黄鳝分不清，/ 常常",
    "ĐÁP ÁN": "他这个人太天真，常常毒蛇黄鳝分不清，把坏人当好人。",
    "PHIÊN ÂM": "Tā zhège rén tài tiānzhēn, chángcháng dú shé huáng shàn fēn bù qīng, bǎ huàirén dàng hǎorén."
  },
  {
    "STT": 896,
    "SẮP XẾP CÂU": "错把骗子 / 当恩人呢？/ 毒蛇黄鳝分不清，/ 你怎么能",
    "ĐÁP ÁN": "你怎么能毒蛇黄鳝分不清，错把骗子当恩人呢？",
    "PHIÊN ÂM": "Nǐ zěnme néng dú shé huáng shàn fēn bù qīng, cuò bǎ piànzi dāng ēnrén ne?"
  },
  {
    "STT": 897,
    "CHỮ": "D",
    "CỤM": "毒蛇口中吐莲花",
    "PINYIN": "dú shé kǒu zhōng tǔ lián huā",
    "NGHĨA": "比喻阴险凶残的人假装善良,冒充好人。",
    "SẮP XẾP CÂU": "心里 / 坏得很。/ 你别信他的花言巧语，/ 他那是毒蛇口中吐莲花，",
    "ĐÁP ÁN": "你别信他的花言巧语，他那是毒蛇口中吐莲花，心里坏得很。",
    "PHIÊN ÂM": "Nǐ bié xìn tā de huāyányǎoyǔ, tā nà shì dú shé kǒu zhōng tǔ lián huā, xīnlǐ huài de hěn."
  },
  {
    "STT": 898,
    "SẮP XẾP CÂU": "毒蛇口中吐莲花，/ 嘴上说得比 / 唱得还好听。/ 他这个人最会伪装，/ 简直是",
    "ĐÁP ÁN": "他这个人最会伪装，简直是毒蛇口中吐莲花，嘴上说得比唱得还好听。",
    "PHIÊN ÂM": "Tā zhège rén zuì huì wèizhuāng, jiǎnzhí shì dú shé kǒu zhōng tǔ lián huā, zuǐshàng shuō de bǐ chàng de hái hǎotīng."
  },
  {
    "STT": 899,
    "CHỮ": "D",
    "CỤM": "读死书",
    "PINYIN": "dú sǐ shū",
    "NGHĨA": "指人只会死记硬背书中的知识,而不会灵活运用。",
    "SẮP XẾP CÂU": "一定要 / 理论联系 / 实际。/ 读死书，/ 学习不能",
    "ĐÁP ÁN": "学习不能读死书，一定要理论联系实际。",
    "PHIÊN ÂM": "Xuéxí bù néng dú sǐ shū, yīdìng yào lǐlùn liánxì shíjí."
  },
  {
    "STT": 900,
    "SẮP XẾP CÂU": "解决不了 / 实际问题。/ 他虽然学历很高，/ 读死书，/ 但是只会",
    "ĐÁP ÁN": "他虽然学历很高，但是只会读死书，解决不了实际问题。",
    "PHIÊN ÂM": "Tā suīrán xuélì hěn gāo, dànshì zhǐ huì dú sǐ shū, jiějué bu liǎo shíjí wèntí."
  },
  {
    "STT": 901,
    "CHỮ": "D",
    "CỤM": "肚痛埋怨灶司",
    "PINYIN": "dù tòng mái yuàn zào sī",
    "NGHĨA": "比喻自身出了问题,却埋怨、责备他人。",
    "SẮP XẾP CÂU": "真是没道理。 / 他自己做事不小心，/ 出了问题反倒 / 肚痛埋怨灶司，",
    "ĐÁP ÁN": "他自己做事不小心，出了问题反倒肚痛埋怨灶司，真是没道理。",
    "PHIÊN ÂM": "Tā zìjǐ zuòshì bù xiǎoxīn, chū le wèntí fǎndào dù tòng mái yuàn zào sī, zhēnshi méi dàolǐ."
  },
  {
    "STT": 902,
    "SẮP XẾP CÂU": "你别 / 好好反省一下 / 自己的 / 问题。/ 肚痛埋怨灶司了，",
    "ĐÁP ÁN": "你别肚痛埋怨灶司了，好好反省一下自己的问题。",
    "PHIÊN ÂM": "Nǐ bié dù tòng mái yuàn zào sī le, hǎohǎo fǎnxǐng yīxià zìjǐ de wèntí."
  },
  {
    "STT": 903,
    "CHỮ": "D",
    "CỤM": "堵窝掏螃蟹",
    "PINYIN": "dǔ wō tāo páng xiè",
    "NGHĨA": "比喻死守在某地,等待某人出现。",
    "SẮP XẾP CÂU": "而不是 / 堵窝掏螃蟹。/ 我们要找到问题的根源，/ 一举解决，",
    "ĐÁP ÁN": "我们要找到问题的根源，一举解决，而不是堵窝掏螃蟹。",
    "PHIÊN ÂM": "Wǒmen yào zhǎodào wèntí de gēnyuán, yī jǔ jiějué, ér bù shì dǔ wō tāo páng xiè."
  },
  {
    "STT": 904,
    "SẮP XẾP CÂU": "但风险 / 也很大。/ 堵窝掏螃蟹/ 虽然直接，/ 这种 / 的做法，",
    "ĐÁP ÁN": "这种堵窝掏螃蟹的做法，虽然直接，但风险也很大。",
    "PHIÊN ÂM": "Zhè zhǒng dǔ wō tāo páng xiè de zuòfǎ, suīrán zhíjiē, dàn fēngxiǎn yě hěn dà."
  },
  {
    "STT": 905,
    "CHỮ": "D",
    "CỤM": "堵着耳朵摇铃铛",
    "PINYIN": "dǔ zhe ěr duo yáo líng dāng",
    "NGHĨA": "自以为别人不知道,其实事情已完全败露。比喻自己欺骗自己。",
    "SẮP XẾP CÂU": "你不听劝告，/ 一意孤行，/ 吗？ / 堵着耳朵摇铃铛/ 这不等于",
    "ĐÁP ÁN": "你不听劝告，一意孤行，这不等于堵着耳朵摇铃铛吗？",
    "PHIÊN ÂM": "Nǐ bù tīng quàngào, yīyìgūxíng, zhè bù děngyú dǔ zhe ěr duo yáo líng dāng ma?"
  },
  {
    "STT": 906,
    "SẮP XẾP CÂU": "跟他讲道理没用，/ 他听不进去，/ 堵着耳朵摇铃铛。/ 简直是",
    "ĐÁP ÁN": "跟他讲道理没用，他听不进去，简直是堵着耳朵摇铃铛。",
    "PHIÊN ÂM": "Gēn nǐ jiǎng dàolǐ méi yòng, tā tīng bu jìnqù, jiǎnzhí shì dǔ zhe ěr duo yáo líng dāng."
  },
  {
    "STT": 907,
    "CHỮ": "D",
    "CỤM": "堵着窝儿要蛋",
    "PINYIN": "dǔ zhe wō ér yào dàn",
    "NGHĨA": "比喻施加压力,逼着别人作决定或想办法。",
    "SẮP XẾP CÂU": "人家怎么可能 / 答应你？/ 堵着窝儿要蛋，/ 你这样",
    "ĐÁP ÁN": "你这样堵着窝儿要蛋，人家怎么可能答应你？",
    "PHIÊN ÂM": "Nǐ zhèyàng dǔ zhe wō ér yào dàn, rénjiā zěnme kěnéng dāyìng nǐ? "
  },
  {
    "STT": 908,
    "SẮP XẾP CÂU": "堵着窝儿要蛋，/ 做事不能太急躁，/ 要循序渐进。/ 不能",
    "ĐÁP ÁN": "做事不能太急躁，不能堵着窝儿要蛋，要循序渐进。",
    "PHIÊN ÂM": "Zuòshì bù néng tài jízao, bù néng dǔ zhe wō ér yào dàn, yào xúnxùjiànjìn."
  },
  {
    "STT": 909,
    "CHỮ": "D",
    "CỤM": "端金饭碗",
    "PINYIN": "duān jīn fàn wǎn",
    "NGHĨA": "比喻人挣钱多,生活富裕。",
    "SẮP XẾP CÂU": "当上公务员 / 在那个年代，/ 端金饭碗。/ 就等于 ",
    "ĐÁP ÁN": "在那个年代，当上公务员就等于端金饭碗。",
    "PHIÊN ÂM": "Zài nà ge niándài, dāng shàng gōngwùyuán jiù děngyú duān jīn fàn wǎn."
  },
  {
    "STT": 910,
    "SẮP XẾP CÂU": "自己出去创业了。/ 金饭碗，/ 他辞掉了 / 别人眼中的",
    "ĐÁP ÁN": "他辞掉了别人眼中的金饭碗，自己出去创业了。",
    "PHIÊN ÂM": "Tā cídiào le biérén yǎnzhōng de jīn fàn wǎn, zìjǐ chūqù chuàngyè le."
  },
  {
    "STT": 911,
    "CHỮ": "D",
    "CỤM": "端老窝",
    "PINYIN": "duān lǎo wō",
    "NGHĨA": "见“抄老窝”。",
    "SẮP XẾP CÂU": "端老窝，/ 将他们一网打尽。/ 这次行动的目标，/ 就是",
    "ĐÁP ÁN": "这次行动的目标，就是端老窝，将他们一网打尽。",
    "PHIÊN ÂM": "Zhè cì xíngdòng de mùbiāo, jiùshì duān lǎo wō, jiāng tāmen yī wǎng dǎ jìn."
  },
  {
    "STT": 912,
    "SẮP XẾP CÂU": "警方终于成功 / 抓获了所有案犯。/ 经过数月侦查，/ 端老窝，",
    "ĐÁP ÁN": "经过数月侦查，警方终于成功端老窝，抓获了所有案犯。",
    "PHIÊN ÂM": "Jīngguò shù yuè zhēnchá, jǐngfāng zhōngyú chénggōng duān lǎo wō, zhuāhuò le suǒyǒu ànfàn."
  },
  {
    "STT": 913,
    "CHỮ": "D",
    "CỤM": "端起热饭碗，连自己姓什么都忘了",
    "PINYIN": "duān qǐ rè fàn wǎn, lián zì jǐ xìng shén me dōu wàng le",
    "NGHĨA": "讽刺人得了一点儿好处就忘乎所以。",
    "SẮP XẾP CÂU": "太不像话。/ 他才刚有点成就，/ 端起热饭碗，连自己姓什么都忘了，/ 就",
    "ĐÁP ÁN": "他才刚有点成就，就端起热饭碗，连自己姓什么都忘了，太不像话。",
    "PHIÊN ÂM": "Tā cái gāng yǒu diǎn chéngjiù, jiù duān qǐ rè fàn wǎn, lián zì jǐ xìng shén me dōu wàng le, tài bù xiànghuà."
  },
  {
    "STT": 914,
    "SẮP XẾP CÂU": "做人要谦虚，/ 切不可 / 端起热饭碗，连自己姓什么都忘了。/ 爷爷常常教导我，",
    "ĐÁP ÁN": "爷爷常常教导我，做人要谦虚，切不可端起热饭碗，连自己姓什么都忘了。",
    "PHIÊN ÂM": "Yéye chángcháng jiàodǎo wǒ, zuòrén yào qiānxū, qiè bù kě duān qǐ rè fàn wǎn, lián zì jǐ xìng shén me dōu wàng le."
  },
  {
    "STT": 915,
    "CHỮ": "D",
    "CỤM": "端起碗来吃肉，放下筷子骂娘",
    "PINYIN": "duān qǐ wǎn lái chī ròu, fàng xià kuài zi mà niáng",
    "NGHĨA": "指在享受过后还要发泄不满。",
    "SẮP XẾP CÂU": "忘恩负义，/ 不值得深交。/ 他就是那种 / 端起碗来吃肉，放下筷子骂娘的人，",
    "ĐÁP ÁN": "他就是那种端起碗来吃肉，放下筷子骂娘的人，忘恩负义，不值得深交。",
    "PHIÊN ÂM": "Tā jiùshì nà zhǒng duān qǐ wǎn lái chī ròu, fàng xià kuài zi mà niáng de rén, wàng'ēnfùyì, bù zhídé shēnjiāo."
  },
  {
    "STT": 916,
    "SẮP XẾP CÂU": "他却反咬一口，/ 真是 / 端起碗来吃肉，放下筷子骂娘。/ 我帮了他那么多，",
    "ĐÁP ÁN": "我帮了他那么多，他却反咬一口，真是端起碗来吃肉，放下筷子骂娘。",
    "PHIÊN ÂM": "Wǒ bāng le tā nàme duō, tā què fǎnyáo yī kǒu, zhēnshi duān qǐ wǎn lái chī ròu, fàng xià kuài zi mà niáng."
  },
  {
    "STT": 917,
    "CHỮ": "D",
    "CỤM": "端起碗来照得见人影",
    "PINYIN": "duān qǐ wǎn lái zhào de jiàn rén yǐng",
    "NGHĨA": "形容饭食十分稀薄。",
    "SẮP XẾP CÂU": "这碗清水，清得/ 端起碗来照得见人影，/ 一点杂质都没有。",
    "ĐÁP ÁN": "这碗清水，清得端起碗来照得见人影，一点杂质都没有。",
    "PHIÊN ÂM": "Zhè wǎn qīngshuǐ, qīng de duān qǐ wǎn lái zhào de jiàn rén yǐng, yī diǎn zázhì dōu méiyǒu."
  },
  {
    "STT": 918,
    "SẮP XẾP CÂU": "端起碗来照得见人影，/ 什么都没有。/ 连米缸都是空的，/ 他家穷得",
    "ĐÁP ÁN": "他家穷得端起碗来照得见人影，连米缸都是空的，什么都没有。",
    "PHIÊN ÂM": "Tā jiā qióng de duān qǐ wǎn lái zhào de jiàn rén yǐng, lián mǐgāng dōu shì kōng de, shénme dōu méiyǒu."
  },
  {
    "STT": 919,
    "CHỮ": "D",
    "CỤM": "端铁饭碗",
    "PINYIN": "duān tiě fàn wǎn",
    "NGHĨA": "比喻从事固定职业,有稳定的收入。",
    "SẮP XẾP CÂU": "工作稳定 / 端铁饭碗，/ 在那个年代，/ 有保障。/ 人人都想",
    "ĐÁP ÁN": "在那个年代，人人都想端铁饭碗，工作稳定有保障。",
    "PHIÊN ÂM": "Zài nà ge niándài, rénrén dōu xiǎng duān tiě fàn wǎn, gōngzuò wěndìng yǒu bǎozhàng."
  },
  {
    "STT": 920,
    "SẮP XẾP CÂU": "端铁饭碗/ 决定自己创业。/ 的工作， / 他放弃了",
    "ĐÁP ÁN": "他放弃了端铁饭碗的工作，决定自己创业。",
    "PHIÊN ÂM": "Tā fàngqì le duān tiě fàn wǎn de gōngzuò, juédìng zìjǐ chuàngyè."
  },
  {
    "STT": 921,
    "CHỮ": "D",
    "CỤM": "断线风筝",
    "PINYIN": "duàn xiàn fēng zhēng",
    "NGHĨA": "喻指一去不返,失去联系。",
    "SẮP XẾP CÂU": "他出国以后，/ 断线风筝，/ 和家里失去了联系。/ 就成了",
    "ĐÁP ÁN": "他出国以后，就成了断线风筝，和家里失去了联系。",
    "PHIÊN ÂM": "Tā chūguó yǐhòu, jiù chéng le duàn xiàn fēng zhēng, hé jiālǐ shīqù le liánxì."
  },
  {
    "STT": 922,
    "SẮP XẾP CÂU": "失去父母的管教，/ 到处游荡。/ 断线风筝/ 他就像 / 一样，",
    "ĐÁP ÁN": "失去父母的管教，他就像断线风筝一样，到处游荡。",
    "PHIÊN ÂM": "Shīqù fùmǔ de guǎnjiào, tā jiù xiàng duàn xiàn fēng zhēng yīyàng, dàochù yóudàng."
  },
  {
    "STT": 923,
    "CHỮ": "D",
    "CỤM": "断香烟",
    "PINYIN": "duàn xiāng yān",
    "NGHĨA": "指家庭中没有男孩子传宗接代。",
    "SẮP XẾP CÂU": "他戒烟很多年了，/ 断香烟 /  早就 / 了。",
    "ĐÁP ÁN": "他戒烟很多年了，早就断香烟了。",
    "PHIÊN ÂM": "Tā jièyān hěn duō nián le, zǎojiù duàn xiāng yān le."
  },
  {
    "STT": 924,
    "SẮP XẾP CÂU": "为了/ 断香烟。/ 他决心 / 身体健康，",
    "ĐÁP ÁN": "为了身体健康，他决心断香烟。",
    "PHIÊN ÂM": "Wèile shēntǐ jiànkāng, tā juéxīn duàn xiāng yān."
  },
  {
    "STT": 925,
    "CHỮ": "D",
    "CỤM": "断烟火",
    "PINYIN": "duàn yān huǒ",
    "NGHĨA": "指家里穷到没法生火做饭 \r\n指没有子孙后代。",
    "SẮP XẾP CÂU": "自从老伴去世后，/ 冷冷清清。/ 断烟火 / 他家里就 / 了，",
    "ĐÁP ÁN": "自从老伴去世后，他家里就断烟火了，冷冷清清。",
    "PHIÊN ÂM": "Zìcóng lǎobàn qùshì hòu, tā jiālǐ jiù duàn yān huǒ le, lěngléngqīngqīng."
  },
  {
    "STT": 926,
    "SẮP XẾP CÂU": "这户人家好像很久没人住了，/ 断烟火/ 了。 / 都",
    "ĐÁP ÁN": "这户人家好像很久没人住了，都断烟火了。",
    "PHIÊN ÂM": "Zhè hù rénjiā hǎoxiàng hěnjiǔ méi rén zhù le, dōu duàn yān huǒ le."
  },
  {
    "STT": 927,
    "CHỮ": "D",
    "CỤM": "对不上号",
    "PINYIN": "duì bù shàng hào",
    "NGHĨA": "比喻二者不相符合或差距很大。",
    "SẮP XẾP CÂU": "我们说的不是同一个人。/ 他说的人和我说的人，/ 对不上号，/ 好像",
    "ĐÁP ÁN": "他说的人和我说的人，好像对不上号，我们说的不是同一个人。",
    "PHIÊN ÂM": "Tā shuō de rén hé wǒ shuō de rén, hǎoxiàng duì bù shàng hào, wǒmen shuō de bù shì tóng yī ge rén."
  },
  {
    "STT": 928,
    "SẮP XẾP CÂU": "试了半天，/ 对不上号。/ 我拿着钥匙 / 就是和锁",
    "ĐÁP ÁN": "我拿着钥匙试了半天，就是和锁对不上号。",
    "PHIÊN ÂM": "Wǒ názhe yàoshi shì le bàntiān, jiùshì hé suǒ duì bù shàng hào."
  },
  {
    "STT": 929,
    "CHỮ": "D",
    "CỤM": "对痴人说梦",
    "PINYIN": "duì chī rén shuō mèng",
    "NGHĨA": "指胡言乱语。",
    "SẮP XẾP CÂU": "他根本听不进去。/ 跟他讲道理，/ 对痴人说梦，/ 简直是",
    "ĐÁP ÁN": "跟他讲道理，简直是对痴人说梦，他根本听不进去。",
    "PHIÊN ÂM": "Gēn tā jiǎng dàolǐ, jiǎnzhí shì duì chī rén shuō mèng, tā gēnběn tīng bu jìnqù."
  },
  {
    "STT": 930,
    "SẮP XẾP CÂU": "太不切实际了，/ 对痴人说梦。/ 你这个想法 / 简直是",
    "ĐÁP ÁN": "你这个想法太不切实际了，简直是对痴人说梦。",
    "PHIÊN ÂM": "Nǐ zhège xiǎngfǎ tài bù qiè shíjì le, jiǎnzhí shì duì chī rén shuō mèng."
  },
  {
    "STT": 931,
    "CHỮ": "D",
    "CỤM": "对了一个吕字",
    "PINYIN": "duì le yī gè lǚ zì",
    "NGHĨA": "“吕”字是两个口相对。指亲了一个嘴。",
    "SẮP XẾP CÂU": "配合得 / 真好。/ 他们俩一唱一和，/ 对了一个吕字，",
    "ĐÁP ÁN": "他们俩一唱一和，对了一个吕字，配合得真好。",
    "PHIÊN ÂM": "Tāmen liǎ yī chàng yī hè, duì le yī ge lǚ zì, pèihé de zhēn hǎo."
  },
  {
    "STT": 932,
    "SẮP XẾP CÂU": "肯定 / 是一伙的。/ 你看他们俩，/ 对了一个吕字，",
    "ĐÁP ÁN": "你看他们俩，对了一个吕字，肯定是一伙的。",
    "PHIÊN ÂM": "Nǐ kàn tāmen liǎ, duì le yī ge lǚ zì, kěndìng shì yī huǒ de."
  },
  {
    "STT": 933,
    "CHỮ": "E",
    "CỤM": "饿不死也撑不着",
    "PINYIN": "è bù sǐ yě chēng bù zhuó",
    "NGHĨA": "形容收入低,仅够维持最基本的生活。",
    "SẮP XẾP CÂU": "勉强够 / 生活。/ 我这点工资，/ 饿不死也撑不着，",
    "ĐÁP ÁN": "我这点工资，饿不死也撑不着，勉强够生活。",
    "PHIÊN ÂM": "Wǒ zhè diǎn gōngzī, è bù sǐ yě chēng bù zhuó, miǎnqiáng gòu shēnghuó."
  },
  {
    "STT": 934,
    "SẮP XẾP CÂU": "但也 / 安逸。/ 在小城市工作，/ 饿不死也撑不着，/ 虽然",
    "ĐÁP ÁN": "在小城市工作，虽然饿不死也撑不着，但也安逸。",
    "PHIÊN ÂM": "Zài xiǎo chéngshì gōngzuò, suīrán è bù sǐ yě chēng bù zhuó, dàn yě ānyì."
  },
  {
    "STT": 935,
    "CHỮ": "E",
    "CỤM": "鹅蛋看不起鸭蛋",
    "PINYIN": "é dàn kàn bù qǐ yā dàn",
    "NGHĨA": "比喻资历、条件相仿的人互相轻视,互不服气。",
    "SẮP XẾP CÂU": "互相 / 瞧不上。/ 他们俩是同行，/ 鹅蛋看不起鸭蛋， / 但总是",
    "ĐÁP ÁN": "他们俩是同行，但总是鹅蛋看不起鸭蛋，互相瞧不上。",
    "PHIÊN ÂM": "Tāmen liǎ shì tóngháng, dàn zǒngshì é dàn kàn bu qǐ yā dàn, hùxiāng qiáo bu shàng."
  },
  {
    "STT": 936,
    "SẮP XẾP CÂU": "人家也 / 有自己的 / 长处。/ 鹅蛋看不起鸭蛋/ 你别 / 了，",
    "ĐÁP ÁN": "你别鹅蛋看不起鸭蛋了，人家也有自己的长处。",
    "PHIÊN ÂM": "Nǐ bié é dàn kàn bu qǐ yā dàn le, rénjiā yě yǒu zìjǐ de chángchù."
  },
  {
    "STT": 937,
    "CHỮ": "E",
    "CỤM": "饿肚皮",
    "PINYIN": "è dù pí",
    "NGHĨA": "指因没有食物吃而挨饿。\r\n也作“饿肚子”。",
    "SẮP XẾP CÂU": "饿得头昏眼花。/ 为了减肥，/ 饿肚皮，/ 简直是 /  她天天",
    "ĐÁP ÁN": "为了减肥，她天天饿肚皮，简直是饿得头昏眼花。",
    "PHIÊN ÂM": "Wèile jiǎnféi, tā tiāntiān è dù pí, jiǎnzhí shì è de tóuhūnyǎnhuā."
  },
  {
    "STT": 938,
    "SẮP XẾP CÂU": "饿肚皮，/ 不如努力工作 / 赚钱。/ 天天在这里 / 与其",
    "ĐÁP ÁN": "与其天天在这里饿肚皮，不如努力工作赚钱。",
    "PHIÊN ÂM": "Yǔqí tiāntiān zài zhèlǐ è dù pí, bùrú nǔlì gōngzuò zhuànqián."
  },
  {
    "STT": 939,
    "CHỮ": "E",
    "CỤM": "饿狗抢骨头",
    "PINYIN": "è gǒu qiǎng gǔ tou",
    "NGHĨA": "形容速度快,行动迅猛。",
    "SẮP XẾP CÂU": "争得头破血流。/ 这点利益，/ 饿狗抢骨头/ 引得他们像 / 一样，",
    "ĐÁP ÁN": "这点利益，引得他们像饿狗抢骨tou一样，争得头破血流。",
    "PHIÊN ÂM": "Zhè diǎn lìyì, yǐndé tāmen xiàng è gǒu qiǎng gǔ tou yīyàng, zhēng de tóupòxuèliú."
  },
  {
    "STT": 940,
    "SẮP XẾP CÂU": "你看他们那争抢的样子，/ 饿狗抢骨头。/ 没什么区别。/ 就跟",
    "ĐÁP ÁN": "你看他们那争抢的样子，就跟饿狗抢骨头没什么区别。",
    "PHIÊN ÂM": "Nǐ kàn tāmen nà zhēngqiǎng de yàngzi, jiù gēn è gǒu qiǎng gǔ tou méi shénme qūbié."
  },
  {
    "STT": 941,
    "CHỮ": "E",
    "CỤM": "饿狗闻见屎味",
    "PINYIN": "è gǒu wén jiàn shǐ wèi",
    "NGHĨA": "比喻品行不端的人得到了急需的消息。",
    "SẮP XẾP CÂU": "骗子一有机会，/ 就立刻凑上去了。/ 饿狗闻见屎味，/ 就像",
    "ĐÁP ÁN": "骗子一有机会，就像饿狗闻见屎味，立刻就凑上去了。",
    "PHIÊN ÂM": "Piànzi yī yǒu jīhuì, jiù xiàng è gǒu wén jiàn shǐ wèi, lìkè jiù còu shàngqù le."
  },
  {
    "STT": 942,
    "SẮP XẾP CÂU": "他一看到有便宜可占，/ 饿狗闻见屎味/ 就跟 / 凑了过来，/ 似的。",
    "ĐÁP ÁN": "他一看到有便宜可占，就跟饿狗闻见屎味似的凑了过来。",
    "PHIÊN ÂM": "Tā yī kàndào yǒu piányi kě zhàn, jiù gēn è gǒu wén jiàn shǐ wèi shì de còu le guòlái."
  },
  {
    "STT": 943,
    "CHỮ": "E",
    "CỤM": "饿虎逢羊，苍蝇见血",
    "PINYIN": "è hǔ féng yáng, cāng ying jiàn xuè",
    "NGHĨA": "像饥饿的老虎碰到了羊,嗜血的苍蝇见到了血一样。形容迫不及待的样子。",
    "SẮP XẾP CÂU": "插翅难飞。/ 敌人陷入了我们的包围圈，/ 饿虎逢羊，苍蝇见血，/ 如同",
    "ĐÁP ÁN": "敌人陷入了我们的包围圈，如同饿虎逢羊，苍蝇见血，插翅难飞。",
    "PHIÊN ÂM": "Dírén xiànrù le wǒmen de bāowéiquān, rútóng è hǔ féng yáng, cāng ying jiàn xuè, chāchì nán fēi."
  },
  {
    "STT": 944,
    "SẮP XẾP CÂU": "看到这个巨大的商机，/ 饿虎逢羊，苍蝇见血，/ 立刻行动起来。/ 他就像",
    "ĐÁP ÁN": "看到这个巨大的商机，他就像饿虎逢羊，苍蝇见血，立刻行动起来。",
    "PHIÊN ÂM": "Kàndào zhège jùdà de shāngjī, tā jiù xiàng è hǔ féng yáng, cāng ying jiàn xuè, lìkè xíngdòng qǐlái."
  },
  {
    "STT": 945,
    "CHỮ": "E",
    "CỤM": "屙金子呕银子",
    "PINYIN": "ē jīn zi ǒu yín zi",
    "NGHĨA": "喂,吐。比喻凭空生财。",
    "SẮP XẾP CÂU": "他家非常有钱，/ 屙金子呕银子。/ 简直是 / 日进斗金，",
    "ĐÁP ÁN": "他家非常有钱，日进斗金，简直是屙金子呕银子。",
    "PHIÊN ÂM": "Tā jiā fēicháng yǒu qián, rìjìndǒujīn, jiǎnzhí shì ē jīn zi ǒu yín zi."
  },
  {
    "STT": 946,
    "SẮP XẾP CÂU": "看他花钱那大方的样子，/ 屙金子呕银子/ 好像家里能 / 似的。",
    "ĐÁP ÁN": "看他花钱那大方的样子，好像家里能屙金子呕银子似的。",
    "PHIÊN ÂM": "Kàn tā huāqián nà dàfāng de yàngzi, hǎoxiàng jiālǐ néng ē jīn zi ǒu yín zi shì de."
  },
  {
    "STT": 947,
    "CHỮ": "E",
    "CỤM": "饿老鹰想吃天鹅肉",
    "PINYIN": "è lǎo yīng xiǎng chī tiān é ròu",
    "NGHĨA": "讽刺人痴心妄想。",
    "SẮP XẾP CÂU": "也不看看自己什么条件。/ 他癞蛤蟆想吃天鹅肉，/ 饿老鹰想吃天鹅肉，/ 就是",
    "ĐÁP ÁN": "他癞蛤蟆想吃天鹅肉，就是饿老鹰想吃天鹅肉，也不看看自己什么条件。",
    "PHIÊN ÂM": "Tā làiháma xiǎng chī tiān'éròu, jiùshì è lǎo yīng xiǎng chī tiān é ròu, yě bù kànkàn zìjǐ shénme tiáojiàn."
  },
  {
    "STT": 948,
    "SẮP XẾP CÂU": "饿老鹰想吃天鹅肉 / 了，/ 她不可能会 / 喜欢你的。/ 还是现实点吧，/ 你别",
    "ĐÁP ÁN": "你别饿老鹰想吃天鹅肉了，还是现实点吧，她不可能会喜欢你的。",
    "PHIÊN ÂM": "Nǐ bié è lǎo yīng xiǎng chī tiān é ròu le, háishì xiànshí diǎn ba, tā bù kěnéng huì xǐhuan nǐ de."
  },
  {
    "STT": 949,
    "CHỮ": "E",
    "CỤM": "屙绵花屎",
    "PINYIN": "ē mián huā shǐ",
    "NGHĨA": "比喻做事磨蹭、拖拉。",
    "SẮP XẾP CÂU": "他这人胆子小，/ 让他做点事 / 屙绵花屎。/ 稍微遇到点困难，/ 就怕得",
    "ĐÁP ÁN": "他这人胆子小，稍微遇到点困难，让他做点事就怕得屙绵花屎。",
    "PHIÊN ÂM": "Tā zhè rén dǎnzi xiǎo, shāowēi yùdào diǎn kùnnan, ràng tā zuò diǎn shì jiù pà de ē mián huā shǐ."
  },
  {
    "STT": 950,
    "SẮP XẾP CÂU": "屙绵花屎/ 就知道 / 他有多紧张。/ 我一 / 看他那 / 的样子，",
    "ĐÁP ÁN": "我一看他那屙绵花屎的样子，就知道他有多紧张。",
    "PHIÊN ÂM": "Wǒ yī kàn tā nà ē mián huā shǐ de yàngzi, jiù zhīdào tā yǒu duō jǐnzhāng."
  },
  {
    "STT": 951,
    "CHỮ": "E",
    "CỤM": "扼杀在摇篮里",
    "PINYIN": "è shā zài yáo lán lǐ",
    "NGHĨA": "比喻新生事物还未发展,就被遏制在萌芽时期。",
    "SẮP XẾP CÂU": "把这个坏念头 / 绝不能让它发展。/ 我们必须 / 扼杀在摇篮里，",
    "ĐÁP ÁN": "我们必须把这个坏念头扼杀在摇篮里，绝不能让它发展。",
    "PHIÊN ÂM": "Wǒmen bìxū bǎ zhège huài niàntou è shā zài yáo lán lǐ, jué bù néng ràng tā fāzhǎn."
  },
  {
    "STT": 952,
    "SẮP XẾP CÂU": "都应该被 / 及时发现 / 任何潜在的风险，/ 扼杀在摇篮里。/ 并",
    "ĐÁP ÁN": "任何潜在的风险，都应该被及时发现并扼杀在摇篮里。",
    "PHIÊN ÂM": "Rènhé qiánzài de fēngxiǎn, dōu yīnggāi bèi jíshí fāxiàn bìng è shā zài yáo lán lǐ."
  },
  {
    "STT": 953,
    "CHỮ": "E",
    "CỤM": "屙屎也能捡个金元宝",
    "PINYIN": "ē shǐ yě néng jiǎn gè jīn yuán bǎo",
    "NGHĨA": "形容运气好,事事顺利。",
    "SẮP XẾP CÂU": "屙屎也能捡个金元宝，/ 什么好事 / 他运气太好了，/ 都能碰上。/ 真是",
    "ĐÁP ÁN": "他运气太好了，真是屙屎也能捡个金元宝，什么好事都能碰上。",
    "PHIÊN ÂM": "Tā yùnqì tài hǎo le, zhēnshi ē shǐ yě néng jiǎn ge jīn yuán bǎo, shénme hǎoshì dōu néng pèng shàng."
  },
  {
    "STT": 954,
    "SẮP XẾP CÂU": "简直是 / 就中了头奖，/ 屙屎也能捡个金元宝！/ 他随便买张彩票",
    "ĐÁP ÁN": "他随便买张彩票就中了头奖，简直是屙屎也能捡个金元宝！",
    "PHIÊN ÂM": "Tā suíbiàn mǎi zhāng cǎipiào jiù zhòng le tóujiǎng, jiǎnzhí shì ē shǐ yě néng jiǎn ge jīn yuán bǎo!"
  },
  {
    "STT": 955,
    "CHỮ": "E",
    "CỤM": "屙屎遇上大马蜂",
    "PINYIN": "ē shǐ yù shàng dà mǎ fēng",
    "NGHĨA": "形容时运差,碰上了倒霉事。",
    "SẮP XẾP CÂU": "真是 / 屙屎遇上大马蜂。/ 本来挺顺利的，/ 没想到半路杀出个程咬金，",
    "ĐÁP ÁN": "本来挺顺利的，没想到半路杀出个程咬金，真是屙屎遇上大马蜂。",
    "PHIÊN ÂM": "Běnlái tǐng shùnlì de, méi xiǎngdào bànlù shā chū ge Chéng Yǎojīn, zhēnshi ē shǐ yù shàng dà mǎ fēng."
  },
  {
    "STT": 956,
    "SẮP XẾP CÂU": "钱包被偷了，/ 屙屎遇上大马蜂。/ 今天真倒霉，/ 手机也摔坏了，/ 简直是",
    "ĐÁP ÁN": "今天真倒霉，钱包被偷了，手机也摔坏了，简直是屙屎遇上大马蜂。",
    "PHIÊN ÂM": "Jīntiān zhēn dǎoméi, qiánbāo bèi tōu le, shǒujī yě shuāihuài le, jiǎnzhí shì ē shǐ yù shàng dà mǎ fēng."
  },
  {
    "STT": 957,
    "CHỮ": "E",
    "CỤM": "饿死不吃嗟来食",
    "PINYIN": "è sǐ bù chī jiē lái shí",
    "NGHĨA": "形容人有骨气,宁可饿死,也不会为一口食物而丟失做坏事。",
    "SẮP XẾP CÂU": "也不接受 / 别人的施舍。/ 他很有骨气，/ 饿死不吃嗟来食，/ 宁愿",
    "ĐÁP ÁN": "他很有骨气，宁愿饿死不吃嗟来食，也不接受别人的施舍。",
    "PHIÊN ÂM": "Tā hěn yǒu gǔqì, níngyuàn è sǐ bù chī jiē lái shí, yě bù jiēshòu biérén de shīshě."
  },
  {
    "STT": 958,
    "SẮP XẾP CÂU": "保持 / 自己的尊严。/ 我们 / 饿死不吃嗟来食/ 要有 / 的精神，",
    "ĐÁP ÁN": "我们要有饿死不吃嗟来食的精神，保持自己的尊严。",
    "PHIÊN ÂM": "Wǒmen yào yǒu è sǐ bù chī jiē lái shí de jīngshén, bǎochí zìjǐ de zūnyán."
  },
  {
    "STT": 959,
    "CHỮ": "E",
    "CỤM": "饿死嘬，撑死眼",
    "PINYIN": "è sǐ zuō, chēng sǐ yǎn",
    "NGHĨA": "见“撑死眼,饿死嘬”。",
    "SẮP XẾP CÂU": "真是 / 看见什么都想要，/ 饿死嘬，撑死眼。/ 他这人贪得无厌，",
    "ĐÁP ÁN": "他这人贪得无厌，看见什么都想要，真是饿死嘬，撑死眼。",
    "PHIÊN ÂM": "Tā zhè rén tāndéwúyàn, kànjiàn shénme dōu xiǎng yào, zhēnshi è sǐ zuō, chēng sǐ yǎn."
  },
  {
    "STT": 960,
    "SẮP XẾP CÂU": "得改改，/ 不能 / 太贪心。/ 饿死嘬，撑死眼 / 你这 / 的毛病",
    "ĐÁP ÁN": "你这饿死嘬，撑死眼的毛病得改改，不能太贪心。",
    "PHIÊN ÂM": "Nǐ zhè è sǐ zuō, chēng sǐ yǎn de máobìng děi gǎigǎi, bù néng tài tānxīn."
  },
  {
    "STT": 961,
    "CHỮ": "E",
    "CỤM": "屙稀屎",
    "PINYIN": "ē xī shǐ",
    "NGHĨA": "比喻临阵退缩或反悔。",
    "SẮP XẾP CÂU": "结果 / 拉肚子了。/ 他吃了不干净的东西，/ 屙稀屎",
    "ĐÁP ÁN": "他吃了不干净的东西，结果屙稀屎拉肚子了。",
    "PHIÊN ÂM": "Tā chī le bù gānjìng de dōngxi, jiéguǒ ē xī shǐ lādùzi le."
  },
  {
    "STT": 962,
    "SẮP XẾP CÂU": "今天不知道怎么就 / 了。/ 昨天还好好的，/ 就屙稀屎",
    "ĐÁP ÁN": "昨天还好好的，今天不知道怎么就屙稀屎了。",
    "PHIÊN ÂM": "Zuótiān hái hǎohǎo de, jīntiān bù zhīdào zěnme jiù ē xī shǐ le."
  },
  {
    "STT": 963,
    "CHỮ": "E",
    "CỤM": "饿眼见瓜皮",
    "PINYIN": "è yǎn jiàn guā pí",
    "NGHĨA": "饿急了看见瓜皮也好吃。讽刺人因急需而不择好坏,连最差的也不嫌弃。",
    "SẮP XẾP CÂU": "只要是能换钱的东西 / 他都要。/ 他穷疯了，/ 饿眼见瓜皮，",
    "ĐÁP ÁN": "他穷疯了，饿眼见瓜皮，只要是能换钱的东西他都要。",
    "PHIÊN ÂM": "Tā qióng fēng le, è yǎn jiàn guā pí, zhǐyào shì néng huàn qián de dōngxi tā dōu yào."
  },
  {
    "STT": 964,
    "SẮP XẾP CÂU": "真是 / 太可怜了。/ 的样子，/ 你看他那 / 饿眼见瓜皮",
    "ĐÁP ÁN": "你看他那饿眼见瓜皮的样子，真是太可怜了。",
    "PHIÊN ÂM": "Nǐ kàn tā nà è yǎn jiàn guā pí de yàngzi, zhēnshi tài kělián le."
  },
  {
    "STT": 965,
    "CHỮ": "E",
    "CỤM": "摁倒葫芦瓢起来",
    "PINYIN": "èn dǎo hú lú piáo qǐ lái",
    "NGHĨA": "见“按倒葫芦瓢起来”。",
    "SẮP XẾP CÂU": "解决了一个 / 又冒出一个。/ 这里的问题太复杂了，/ 摁倒葫芦瓢起来，",
    "ĐÁP ÁN": "这里的问题太复杂了，摁倒葫芦瓢起来，解决了一个又冒出一个。",
    "PHIÊN ÂM": "Zhèlǐ de wèntí tài fùzá le, èn dǎo hú lú piáo qǐ lái, jiějué le yī ge yòu mào chū yī ge."
  },
  {
    "STT": 966,
    "SẮP XẾP CÂU": "摁倒葫芦瓢起来，/ 没个完 / 的时候。/ 这些麻烦事，/ 总是",
    "ĐÁP ÁN": "这些麻烦事，总是摁倒葫芦瓢起来，没个完的时候。",
    "PHIÊN ÂM": "Zhèxiē máfan shì, zǒngshì èn dǎo hú lú piáo qǐ lái, méi ge wán de shíhou."
  },
  {
    "STT": 967,
    "CHỮ": "E",
    "CỤM": "儿大不由娘",
    "PINYIN": "ér dà bù yóu niáng",
    "NGHĨA": "孩子大了,他们的事情不是母亲所能 -决定的。喻指某人、某事一旦成熟、他人对他就没有决定权了。",
    "SẮP XẾP CÂU": "孩子长大了，/ 让他自己决定吧。/ 有自己的想法，/ 儿大不由娘。",
    "ĐÁP ÁN": "儿大不由娘，孩子长大了，有自己的想法，让他自己决定吧。",
    "PHIÊN ÂM": "Ér dà bù yóu niáng, háizi zhǎngdà le, yǒu zìjǐ de xiǎngfǎ, ràng tā zìjǐ juédìng ba."
  },
  {
    "STT": 968,
    "SẮP XẾP CÂU": "你就别操心了，/ 儿大不由娘，/ 让他去闯吧。/ 正所谓 ",
    "ĐÁP ÁN": "正所谓儿大不由娘，你就别操心了，让他去闯吧。",
    "PHIÊN ÂM": "Zhèng suǒwèi ér dà bù yóu niáng, nǐ jiù bié cāoxīn le, ràng tā qù chuǎng ba."
  },
  {
    "STT": 969,
    "CHỮ": "E",
    "CỤM": "耳朵不馋，眼不花",
    "PINYIN": "ěr duo bù chán, yǎn bù huā",
    "NGHĨA": "形容老年人身体健康,没有任何衰老的迹象。",
    "SẮP XẾP CÂU": "但是身体很好，/ 他年纪虽然大了，/ 耳朵不馋，眼不花。",
    "ĐÁP ÁN": "他年纪虽然大了，但是身体很好，耳朵不馋，眼不花。",
    "PHIÊN ÂM": "Tā niánjì suīrán dà le, dànshì shēntǐ hěn hǎo, ěr duo bù chán, yǎn bù huā."
  },
  {
    "STT": 970,
    "SẮP XẾP CÂU": "看爷爷那精神头，/ 耳朵不馋，眼不花。/ 真是 / 身体硬朗得很，",
    "ĐÁP ÁN": "看爷爷那精神头，真是身体硬朗得很，耳朵不馋，眼不花。",
    "PHIÊN ÂM": "Kàn yéye nà jīngshéntóu, zhēnshi shēntǐ yìnglǎng de hěn, ěr duo bù chán, yǎn bù huā."
  },
  {
    "STT": 971,
    "CHỮ": "E",
    "CỤM": "耳朵不离腮",
    "PINYIN": "ěr duo bù lí sāi",
    "NGHĨA": "比喻双方关系密切。",
    "SẮP XẾP CÂU": "耳朵不离腮，/ 他们俩关系特别好，/ 说悄悄话。/ 形影不离，/ 整天",
    "ĐÁP ÁN": "他们俩关系特别好，形影不离，整天耳朵不离腮，说悄悄话。",
    "PHIÊN ÂM": "Tāmen liǎ guānxì tèbié hǎo, xíngyǐng bù lí, zhěngtiān ěr duo bù lí sāi, shuō qiāoqiāohuà."
  },
  {
    "STT": 972,
    "SẮP XẾP CÂU": "这两个人，/ 总是在一起 / 耳朵不离腮，/ 商量着什么。",
    "ĐÁP ÁN": "这两个人，耳朵不离腮，总是在一起商量着什么。",
    "PHIÊN ÂM": "Zhè liǎng ge rén, ěr duo bù lí sāi, zǒngshì zài yīqǐ shāngliang zhe shénme."
  },
  {
    "STT": 973,
    "CHỮ": "E",
    "CỤM": "耳朵长",
    "PINYIN": "ěr duo cháng",
    "NGHĨA": "形容人消息灵通。",
    "SẮP XẾP CÂU": "什么事都知道。/ 耳朵长，/ 他消息灵通，/ 好像 ",
    "ĐÁP ÁN": "他消息灵通，耳朵长，好像什么事都知道。",
    "PHIÊN ÂM": "Tā xiāoxi língtōng, ěr duo cháng, hǎoxiàng shénme shì dōu zhīdào."
  },
  {
    "STT": 974,
    "SẮP XẾP CÂU": "你想瞒过他可不容易，/ 耳朵长/ 在这儿 / 发生的事，/ 他 / 得很。",
    "ĐÁP ÁN": "在这儿发生的事，你想瞒过他可不容易，他耳朵长得很。",
    "PHIÊN ÂM": "Zài zhè'er fāshēng de shì, nǐ xiǎng mán guò tā kě bù róngyì, tā ěr duo cháng de hěn."
  },
  {
    "STT": 975,
    "CHỮ": "E",
    "CỤM": "耳朵根软",
    "PINYIN": "ěr duo gēn ruǎn",
    "NGHĨA": "形容没主见,容易听信别人的话。\r\n也作“耳朵根子缺钙”、“耳朵皮软”、“耳根子软”、“耳朵是棉花做的”。",
    "SẮP XẾP CÂU": "别人说什么 / 他都信。/ 耳朵根软，/ 没有主见，/ 他",
    "ĐÁP ÁN": "他耳朵根软，没有主见，别人说什么他都信。",
    "PHIÊN ÂM": "Tā ěr duo gēn ruǎn, méiyǒu zhǔjiàn, biérén shuō shénme tā dōu xìn."
  },
  {
    "STT": 976,
    "SẮP XẾP CÂU": "做人要有主见，/ 容易上当。/ 耳朵根软，/ 不然 / 不能",
    "ĐÁP ÁN": "做人要有主见，不能耳朵根软，不然容易上当。",
    "PHIÊN ÂM": "Zuòrén yào yǒu zhǔjiàn, bù néng ěr duo gēn ruǎn, bùrán róngyì shàngdàng."
  },
  {
    "STT": 977,
    "CHỮ": "E",
    "CỤM": "耳朵尖",
    "PINYIN": "ěr duo jiān",
    "NGHĨA": "指人的听觉灵敏。\r\n也作“耳朵灵”。",
    "SẮP XẾP CÂU": "隔壁很小的声音 / 耳朵尖，/ 他都能听见。/ 简直是 / 他",
    "ĐÁP ÁN": "他耳朵尖，简直是隔壁很小的声音他都能听见。",
    "PHIÊN ÂM": "Tā ěr duo jiān, jiǎnzhí shì gébì hěn xiǎo de shēngyīn tā dōu néng tīngjiàn."
  },
  {
    "STT": 978,
    "SẮP XẾP CÂU": "是基本功。/ 对于侦察兵来说，/ 耳朵尖 / 和眼睛亮 ",
    "ĐÁP ÁN": "对于侦察兵来说，耳朵尖和眼睛亮是基本功。",
    "PHIÊN ÂM": "Duìyú zhēnchábīng lái shuō, ěr duo jiān hé yǎnjīng liàng shì jīběngōng."
  },
  {
    "STT": 979,
    "CHỮ": "E",
    "CỤM": "耳朵磨出茧子",
    "PINYIN": "ěr duo mó chū jiǎn zi",
    "NGHĨA": "茧子：手掌或脚掌的某些部位因摩擦而生成的硬皮。\r\n形容某些话听得太多了。\r\n也作“耳朵里起茧子”。",
    "SẮP XẾP CÂU": "耳朵磨出茧子/ 这话你都说了无数遍了，/ 别再说了，/ 求你了，/ 我 / 了。",
    "ĐÁP ÁN": "这话你都说了无数遍了，别再说了，求你了，我耳朵磨出茧子了。",
    "PHIÊN ÂM": "Zhè huà nǐ dōu shuō le wúshù biàn le, bié zài shuō le, qiú nǐ le, wǒ ěr duo mó chū jiǎn zi le."
  },
  {
    "STT": 980,
    "SẮP XẾP CÂU": "耳朵磨出茧子 / 但我知道 / 都是为我好。/ 虽然 / 妈妈的唠叨都让我 / 了，",
    "ĐÁP ÁN": "虽然妈妈的唠叨都让我耳朵磨出茧-子了，但我知道都是为我好。",
    "PHIÊN ÂM": "Suīrán māma de láodao dōu ràng wǒ ěr duo mó chū jiǎn zi le, dàn wǒ zhīdào dōu shì wèi wǒ hǎo."
  },
  {
    "STT": 981,
    "CHỮ": "E",
    "CỤM": "耳朵塞鸡毛",
    "PINYIN": "ěr duo sāi jī máo",
    "NGHĨA": "斥责人听不见或听不进别人的话。\r\n形容人消息不灵通。\r\n也作“耳朵里塞棉花”、“鸡毛堵着耳朵”。",
    "SẮP XẾP CÂU": "我跟他说话，/ 根本不理我。/ 耳朵塞鸡毛，/ 自顾自做自己的事，/ 他好像",
    "ĐÁP ÁN": "我跟他说话，他好像耳朵塞鸡毛，自顾自做自己的事，根本不理我。",
    "PHIÊN ÂM": "Wǒ gēn tā shuōhuà, tā hǎoxiàng ěr duo sāi jī máo, zìgùzì zuò zìjǐ de shì, gēnběn bù lǐ wǒ."
  },
  {
    "STT": 982,
    "SẮP XẾP CÂU": "耳朵塞鸡毛了，/ 好好听我 / 把话说完。/ 行不行？/ 你别",
    "ĐÁP ÁN": "你别耳朵塞鸡毛了，好好听我把话说完，行不行？",
    "PHIÊN ÂM": "Nǐ bié ěr duo sāi jī máo le, hǎohǎo tīng wǒ bǎ huà shuō wán, xíng bu xíng?"
  },
  {
    "STT": 983,
    "CHỮ": "E",
    "CỤM": "耳根不得清静",
    "PINYIN": "ěr gēn bù dé qīng jìng",
    "NGHĨA": "指某人身边有人非常聒噪,喋喋不休,让人讨厌。",
    "SẮP XẾP CÂU": "耳根不得清静。/ 楼下天天装修，/ 从早到晚 / 真是 / 吵得我",
    "ĐÁP ÁN": "楼下天天装修，从早到晚，真是吵得我耳根不得清静。",
    "PHIÊN ÂM": "Lóuxià tiāntiān zhuāngxiū, cóng zǎo dào wǎn, zhēnshi chǎo de wǒ ěr gēn bù dé qīng jìng."
  },
  {
    "STT": 984,
    "SẮP XẾP CÂU": "他一回家，/ 孩子们就围上来，/ 耳根不得清静。/ 叽叽喳喳的，/ 让他",
    "ĐÁP ÁN": "他一回家，孩子们就围上来，叽叽喳喳的，让他耳根不得清静。",
    "PHIÊN ÂM": "Tā yī huí jiā, háizimen jiù wéi shànglái, jījīzhāzhā de, ràng tā ěr gēn bù dé qīng jìng."
  },
  {
    "STT": 985,
    "CHỮ": "E",
    "CỤM": "二两荞麦皮要榨出四两油",
    "PINYIN": "èr liǎng qiáomài pí yào zhà chū sì liǎng yóu",
    "NGHĨA": "比喻对人进行残酷的剥削、压榨。\r\n也作“四两荞麦也要榨出二两油”。",
    "SẮP XẾP CÂU": "他非常吝啬，/ 二两荞麦皮要榨出四两油。/ 简直是 / 想从他那占便宜，",
    "ĐÁP ÁN": "他非常吝啬，想从他那占便宜，简直是二两荞麦皮要榨出四两油。",
    "PHIÊN ÂM": "Tā fēicháng lìnsè, xiǎng cóng tā nà zhàn piányi, jiǎnzhí shì èr liǎng qiáo mài pí yào zhà chū sì liǎng yóu."
  },
  {
    "STT": 986,
    "SẮP XẾP CÂU": "二两荞麦皮要榨出四两油，/ 这个老板 / 对成本的控制 / 到了极致。/",
    "ĐÁP ÁN": "这个老板对成本的控制到了极致，二两荞麦皮要榨出四两油。",
    "PHIÊN ÂM": "Zhège lǎobǎn duì chéngběn de kòngzhì dào le jízhì, èr liǎng qiáo mài pí yào zhà chū sì liǎng yóu."
  },
  {
    "STT": 987,
    "CHỮ": "E",
    "CỤM": "耳目多",
    "PINYIN": "ěr mù duō",
    "NGHĨA": "指打探消息的人多。\r\n也作“耳朵多”。",
    "SẮP XẾP CÂU": "公司里任何风吹草动 / 耳目多，/ 都瞒不过他。/ 在公司里，/ 老板",
    "ĐÁP ÁN": "老板耳目多，在公司里，公司里任何风吹草动都瞒不过他。",
    "PHIÊN ÂM": "Lǎobǎn ěr mù duō, zài gōngsī lǐ, gōngsī lǐ rènhé fēngchuīcǎodòng dōu mán bu guò tā."
  },
  {
    "STT": 988,
    "SẮP XẾP CÂU": "耳目多，/ 小心点。/ 说话要 / 隔墙有耳，/ 这里",
    "ĐÁP ÁN": "这里耳目多，隔墙有耳，说话要小心点。",
    "PHIÊN ÂM": "Zhèlǐ ěr mù duō, géqiángyǒu'ěr, shuōhuà yào xiǎoxīn diǎn."
  },
  {
    "STT": 989,
    "CHỮ": "E",
    "CỤM": "儿女情长，英雄气短",
    "PINYIN": "ér nǚ qíng cháng, yīng xióng qì duǎn",
    "NGHĨA": "指过分看重世间情爱和与人与人之间的感情,而缺乏英雄气概。\r\n也作“英雄气短,儿女情长”。",
    "SẮP XẾP CÂU": "儿女情长，/ 英雄气短。/ 为了爱情放弃江山的例子 / 不在少数，/ 自古",
    "ĐÁP ÁN": "自古儿女情长，英雄气短，为了爱情放弃江山的例子不在少数。",
    "PHIÊN ÂM": "Zìgǔ ér nǚ qíng cháng, yīng xióng qì duǎn, wèile àiqíng fàngqì jiāngshān de lìzi bù zài shǎoshù."
  },
  {
    "STT": 990,
    "SẮP XẾP CÂU": "成大事者，/ 儿女情长，/ 英雄气短。/ 要以大局为重，/ 不应",
    "ĐÁP ÁN": "成大事者，要以大局为重，不应儿女情长，英雄气短。",
    "PHIÊN ÂM": "Chéng dàshì zhě, yào yǐ dàjú wéi zhòng, bù yìng ér nǚ qíng cháng, yīng xióng qì duǎn."
  },
  {
    "STT": 991,
    "CHỮ": "E",
    "CỤM": "耳热眼热",
    "PINYIN": "ěr rè yǎn rè",
    "NGHĨA": "民间认为被别人惦念或背后议论时,当事人耳朵就会发热。",
    "SẮP XẾP CÂU": "看到别人成功，/ 耳热眼热，/ 很是羡慕。/ 心里 / 他",
    "ĐÁP ÁN": "看到别人成功，他心里耳热眼热，很是羡慕。",
    "PHIÊN ÂM": "Kàndào biérén chénggōng, tā xīnlǐ ěr rè yǎn rè, hěn shì xiànmù."
  },
  {
    "STT": 992,
    "SẮP XẾP CÂU": "耳热眼热 / 自己也去争取。/ 有本事 / 还不如 / 你别 / 了，",
    "ĐÁP ÁN": "你别耳热眼-热了，有本事还不如自己也去争取。",
    "PHIÊN ÂM": "Nǐ bié ěr rè yǎn rè le, yǒu běnshì hái bùrú zìjǐ yě qù zhēngqǔ."
  },
  {
    "STT": 993,
    "CHỮ": "E",
    "CỤM": "二十年后又是一条好汉",
    "PINYIN": "èr shí nián hòu yòu shì yī tiáo hǎo hàn",
    "NGHĨA": "迷信认为人死后可以投胎转世,二十年后又长大成人。\r\n常用于面临死亡威胁的场合,形容人不怕死。",
    "SẮP XẾP CÂU": "二十年后又是一条好汉，/ 失败了怕什么，/ 从头再来！/ 反正",
    "ĐÁP ÁN": "失败了怕什么，反正二十年后又是一条好汉，从头再来！",
    "PHIÊN ÂM": "Shībài le pà shénme, fǎnzhèng èr shí nián hòu yòu shì yī tiáo hǎo hàn, cóngtóu zàilái!"
  },
  {
    "STT": 994,
    "SẮP XẾP CÂU": "他虽然破产了，/ 但依然豪气冲天地说：/ “二十年后又是一条好汉！”",
    "ĐÁP ÁN": "他虽然破产了，但依然豪气冲天地说：“二十年后又是一条好汉！”",
    "PHIÊN ÂM": "Tā suīrán pòchǎn le, dàn yīrán háoqì chōngtiān de shuō: “Èr shí nián hòu yòu shì yī tiáo hǎo hàn!”"
  },
  {
    "STT": 995,
    "CHỮ": "E",
    "CỤM": "二十五里骂知县",
    "PINYIN": "èr shí wǔ lǐ mà zhī xiàn",
    "NGHĨA": "指背地里逞英雄,大骂自己所惧怕的或有权势的人。\r\n也作“十里路外骂知县”。",
    "SẮP XẾP CÂU": "公开 / 二十五里骂知县，/ 他胆子真大，/ 对抗上级。/ 敢",
    "ĐÁP ÁN": "他胆子真大，敢二十五里骂知县，公开对抗上级。",
    "PHIÊN ÂM": "Tā dǎnzi zhēn dà, gǎn èr shí wǔ lǐ mà zhī xiàn, gōngkāi duìkàng shàngjí."
  },
  {
    "STT": 996,
    "SẮP XẾP CÂU": "到处 / 说公司的坏话。/ 他离职以后，/ 二十五里骂知县，/ 才敢",
    "ĐÁP ÁN": "他离职以后，才敢二十五里骂知县，到处说公司的坏话。",
    "PHIÊN ÂM": "Tā lízhí yǐhòu, cái gǎn èr shí wǔ lǐ mà zhī xiàn, dàochù shuō gōngsī de huàihuà."
  },
  {
    "STT": 997,
    "CHỮ": "E",
    "CỤM": "二桃杀三士",
    "PINYIN": "èr táo shā sān shì",
    "NGHĨA": "春秋时,公孙接、田开疆、古冶子三人侍奉齐景公,均以勇力闻;\r\n齐相晏婴课三人之请齐景公以二桃赐予二人;论功而食,结果三人弃桃而自杀。\r\n比喻用计谋杀人。",
    "SẮP XẾP CÂU": "就除掉了 / 二桃杀三士，/ 三个竞争对手。/ 老板的这个计策真是高明，/ 一招",
    "ĐÁP ÁN": "老板的这个计策真是高明，一招二桃杀三士，就除掉了三个竞争对手。",
    "PHIÊN ÂM": "Lǎobǎn de zhège jìcè zhēnshi gāomíng, yī zhāo èr táo shā sān shì, jiù chúdiào le sān ge jìngzhēng duìshǒu."
  },
  {
    "STT": 998,
    "SẮP XẾP CÂU": "二桃杀三士/ 我们可不能 / 的计谋， / 上当。/ 来分化我们，/ 他想用",
    "ĐÁP ÁN": "他想用二桃杀三士的计谋来分化我们，我们可不能上当。",
    "PHIÊN ÂM": "Tā xiǎng yòng èr táo shā sān shì de jìmióu lái fēnhuà wǒmen, wǒmen kě bù néng shàngdàng."
  },
  {
    "STT": 999,
    "CHỮ": "E",
    "CỤM": "耳听八方，眼观六路",
    "PINYIN": "ěr tīng bā fāng, yǎn guān liù lù",
    "NGHĨA": "形容非常警觉,时刻注意周围的情况。",
    "SẮP XẾP CÂU": "必须时刻 / 作为一个侦察兵，/ 保持警惕，/ 耳听八方，眼观六路。",
    "ĐÁP ÁN": "作为一个侦察兵，必须时刻保持警惕，耳听八方，眼观六路。",
    "PHIÊN ÂM": "Zuòwéi yī ge zhēnchábīng, bìxū shíkè bǎochí jǐngtì, ěr tīng bā fāng, yǎn guān liù lù."
  },
  {
    "STT": 1000,
    "SẮP XẾP CÂU": "他经验丰富，/ 耳听八方，眼观六路，/ 总能提前发现危险。/ 走在森林里，",
    "ĐÁP ÁN": "他经验丰富，走在森林里，耳听八方，眼观六路，总能提前发现危险。",
    "PHIÊN ÂM": "Tā jīngyàn fēngfù, zǒu zài sēnlín lǐ, ěr tīng bā fāng, yǎn guān liù lù, zǒng néng tíqián fāxiàn wēixiǎn."
  },
  {
    "STT": 1001,
    "CHỮ": "E",
    "CỤM": "耳听心不听",
    "PINYIN": "ěr tīng xīn bù tīng",
    "NGHĨA": "指表面上应付,实际根本没把别人的话放在心上。",
    "SẮP XẾP CÂU": "耳听心不听，/ 根本没 / 他表面上答应了，/ 往心里去。/ 其实",
    "ĐÁP ÁN": "他表面上答应了，其实耳听心不听，根本没往心里去。",
    "PHIÊN ÂM": "Tā biǎomiàn shàng dāyìng le, qíshí ěr tīng xīn bù tīng, gēnběn méi wǎng xīnlǐ qù."
  },
  {
    "STT": 1002,
    "SẮP XẾP CÂU": "对于妈妈的唠叨，/ 他总是 / 左耳进右耳出。/ 耳听心不听，",
    "ĐÁP ÁN": "对于妈妈的唠叨，他总是耳听心不听，左耳进右耳出。",
    "PHIÊN ÂM": "Duìyú māma de láodao, tā zǒngshì ěr tīng xīn bù tīng, zuǒ'ěr jìn yòu'ěr chū."
  },
  {
    "STT": 1003,
    "CHỮ": "E",
    "CỤM": "二五等于一十",
    "PINYIN": "èr wǔ děngyú yīshí",
    "NGHĨA": "指二者情况相同,没有区别。",
    "SẮP XẾP CÂU": "谁都 / 二五等于一十，/ 看得出来。/ 这是明摆着的事，",
    "ĐÁP ÁN": "这是明摆着的事，二五等于一十，谁都看得出来。",
    "PHIÊN ÂM": "Zhè shì míngbǎizhe de shì, èr wǔ děng yú yī shí, shuí dōu kàn de chūlái."
  },
  {
    "STT": 1004,
    "SẮP XẾP CÂU": "他在撒谎，/ 二五等于一十/ 稍微想想 / 就知道了。/ 这种 / 的事情，",
    "ĐÁP ÁN": "他在撒谎，这种二五等于一十的事情，稍微想想就知道了。",
    "PHIÊN ÂM": "Tā zài sāhuǎng, zhè zhǒng èr wǔ děng yú yī shí de shìqíng, shāowēi xiǎngxiang jiù zhīdào le."
  },
  {
    "STT": 1005,
    "CHỮ": "E",
    "CỤM": "而笑心不笑",
    "PINYIN": "ér xiào xīnbùxiào",
    "NGHĨA": "指人虽面带笑容,其实内心并不高 兴。\r\n形容人心不在焉的样子。",
    "SẮP XẾP CÂU": "让人觉得 / 他的表情 / 而笑心不笑，/ 很虚伪。",
    "ĐÁP ÁN": "他的表情而笑心不笑，让人觉得很虚伪。",
    "PHIÊN ÂM": "Tā de biǎoqíng ér xiào xīn bù xiào, ràng rén juéde hěn xūwěi."
  },
  {
    "STT": 1006,
    "SẮP XẾP CÂU": "虽然他在笑，/ 但我看得出来 / 而笑心不笑。/ 心里很难过，/ 他是",
    "ĐÁP ÁN": "虽然他在笑，但我看得出来他心里很难过，他是而笑心不笑。",
    "PHIÊN ÂM": "Suīrán tā zài xiào, dàn wǒ kàn de chūlái tā xīnlǐ hěn nánguò, tā shì ér xiào xīn bù xiào."
  },
  {
    "STT": 1007,
    "CHỮ": "E",
    "CỤM": "二一添作五",
    "PINYIN": "èr yī tiān zuò wǔ",
    "NGHĨA": "本是珠算除法的一句口诀,意思是 1/2=0.5。\r\n指双方平分所得或平均承担责任和任务。",
    "SẮP XẾP CÂU": "我们俩 / 一人一半。/ 这笔钱，/ 二一添作五，",
    "ĐÁP ÁN": "这笔钱，我们俩二一添作五，一人一半。",
    "PHIÊN ÂM": "Zhè bǐ qián, wǒmen liǎ èr yī tiān zuò wǔ, yī rén yī bàn."
  },
  {
    "STT": 1008,
    "SẮP XẾP CÂU": "别争了，/ 公平合理。/ 二一添作五，/ 就这么定了，/ 这些工作我们",
    "ĐÁP ÁN": "别争了，这些工作我们二一添作五，就这么定了，公平合理。",
    "PHIÊN ÂM": "Bié zhēng le, zhèxiē gōngzuò wǒmen èr yī tiān zuò wǔ, jiù zhème dìng le, gōngpíng hélǐ."
  },
  {
    "STT": 1,
    "CHỮ": "F",
    "CỤM": "发摆子",
    "PINYIN": "fā bǎi zi",
    "NGHĨA": "见“打摆子”。",
    "SẮP XẾP CÂU": "让人 / 难以应对。 / 他的情绪 / 发摆子，",
    "ĐÁP ÁN": "他的情绪发摆子，让人难以应对。",
    "PHIÊN ÂM": "Tā de qíngxù fā bǎi zi, ràng rén nányǐ yìngduì."
  },
  {
    "SẮP XẾP CÂU": "一直在 / 发摆子， / 怎么哄都 / 不行。 / 这孩子 / 今天 / 不知道怎么了，",
    "ĐÁP ÁN": "这孩子今天不知道怎么了，一直在发摆子，怎么哄都不行。",
    "PHIÊN ÂM": "Zhè háizi jīntiān bù zhīdào zěnmeliǎo, yīzhí zài fā bǎi zi, zěnme hōng dōu bùxíng."
  },
  {
    "STT": 2,
    "CHỮ": "F",
    "CỤM": "发春秋大梦",
    "PINYIN": "fā chūn qiū dà mèng",
    "NGHĨA": "讽刺人痴心妄想。",
    "SẮP XẾP CÂU": "不切实际。 / 他总是在 / 发春秋大梦，",
    "ĐÁP ÁN": "他总是在发春秋大梦，不切实际。",
    "PHIÊN ÂM": "Tā zǒngshì zài fā chūn qiū dà mèng, bùqiè shíjì."
  },
  {
    "SẮP XẾP CÂU": "赶紧 / 踏踏实实 / 干活吧， / 别再 / 发春秋大梦了。 / 别做梦了，",
    "ĐÁP ÁN": "别做梦了，赶紧踏踏实实干活吧，别再发春秋大梦了。",
    "PHIÊN ÂM": "Bié zuò mèng le, gǎnjǐn tàtàshíshí gànhuó ba, bié zài fā chūn qiū dàmèngle."
  },
  {
    "STT": 3,
    "CHỮ": "F",
    "CỤM": "发醋劲",
    "PINYIN": "fā cù jìn",
    "NGHĨA": "指因嫉妒而发怒。",
    "SẮP XẾP CÂU": "发醋劲了。 / 她/ 因为/ 看到他和其他女生亲密，",
    "ĐÁP ÁN": "她因为看到他和其他女生亲密，发醋劲了。",
    "PHIÊN ÂM": "Tā yīnwèi kàndào tā hé qítā nǚshēng qīnmì, fā cù jìn le."
  },
  {
    "SẮP XẾP CÂU": "立马就 / 发醋劲了。 / 他看到 / 女朋友 / 跟别的男生 / 说话，",
    "ĐÁP ÁN": "他看到女朋友跟别的男生说话，立马就发醋劲了。",
    "PHIÊN ÂM": "Tā kàn dào nǚpéngyǒu gēn bié de nánshēng shuōhuà, lìmǎ jiù fā cù jìn le."
  },
  {
    "STT": 4,
    "CHỮ": "F",
    "CỤM": "发高烧",
    "PINYIN": "fā gāo shāo",
    "NGHĨA": "形容人头脑不冷静,做事不理智。",
    "SẮP XẾP CÂU": "所以今天请假了。 / 他昨晚 / 发高烧，",
    "ĐÁP ÁN": "他昨晚发高烧，所以今天请假了。",
    "PHIÊN ÂM": "Tā zuówǎn fā gāo shāo, suǒyǐ jīntiān qǐngjià le."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "赶紧 / 送医院吧！ / 孩子 / 发高烧，",
    "ĐÁP ÁN": "孩子发高烧，赶紧送医院吧！",
    "PHIÊN ÂM": "Háizi fā gāo shāo, gǎnjǐn sòng yīyuàn ba!"
  },
  {
    "STT": 5,
    "CHỮ": "F",
    "CỤM": "发国难财",
    "PINYIN": "fā guó nàn cái",
    "NGHĨA": "指趁国家危难之际投机倒把,为个人谋私利。",
    "SẮP XẾP CÂU": "真是无耻。 / 他趁机 / 发国难财，",
    "ĐÁP ÁN": "他趁机发国难财，真是无耻。",
    "PHIÊN ÂM": "Tā chènjī fā guó nàn cái, zhēnshi wúchǐ."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真可恶！ / 这种人， / 专门 / 发国难财，",
    "ĐÁP ÁN": "这种人，专门发国难财，真可恶！",
    "PHIÊN ÂM": "Zhè zhǒng rén, zhuānmén fā guó nàn cái, zhēn kěwù!"
  },
  {
    "STT": 6,
    "CHỮ": "F",
    "CỤM": "发横财",
    "PINYIN": "fā héng cái",
    "NGHĨA": "指一下子获得大量财物,暴富了。",
    "SẮP XẾP CÂU": "买了新车。 / 他突然 / 发横财，",
    "ĐÁP ÁN": "他突然发横财，买了新车。",
    "PHIÊN ÂM": "Tā tūrán fā hèng cái, mǎile xīnchē."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真是 / 发横财了！ / 他买彩票 / 中了五百万，",
    "ĐÁP ÁN": "他买彩票中了五百万，真是发横财了！",
    "PHIÊN ÂM": "Tā mǎi cǎipiào zhòngle wǔbǎi wàn, zhēnshi fā hèng cái le!"
  },
  {
    "STT": 7,
    "CHỮ": "F",
    "CỤM": "发酒疯",
    "PINYIN": "fā jiǔ fēng",
    "NGHĨA": "指借着醉意任性胡闹,发泄。",
    "SẮP XẾP CÂU": "让人很无奈。 / 他喝醉后 / 发酒疯，",
    "ĐÁP ÁN": "他喝醉后发酒疯，让人很无奈。",
    "PHIÊN ÂM": "Tā hēzuì hòu fā jiǔ fēng, ràng rén hěn wúnài."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "就开始 / 发酒疯， / 又吵又闹。 / 他 / 喝多了酒，",
    "ĐÁP ÁN": "他喝多了酒，就开始发酒疯，又吵又闹。",
    "PHIÊN ÂM": "Tā hē duōle jiǔ, jiù kāishǐ fā jiǔ fēng, yòu chǎo yòu nào."
  },
  {
    "STT": 8,
    "CHỮ": "F",
    "CỤM": "发空头支票",
    "PINYIN": "fā kōng tóu zhī piào",
    "NGHĨA": "见“开空头支票”。",
    "SẮP XẾP CÂU": "根本兑现不了。 / 他的承诺 / 就像 / 发空头支票，",
    "ĐÁP ÁN": "他的承诺就像发空头支票，根本兑现不了。",
    "PHIÊN ÂM": "Tā de chéngnuò jiù xiàng fā kōng tóu zhī piào, gēnběn duìxiàn bùliǎo."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "答应的事情 / 一件也没做到。 / 他总是 / 发空头支票，",
    "ĐÁP ÁN": "他总是发空头支票，答应的事情一件也没做到。",
    "PHIÊN ÂM": "Tā zǒngshì fā kōng tóu zhī piào, dāyìng de shìqíng yī jiàn yě méi zuò dào."
  },
  {
    "STT": 9,
    "CHỮ": "F",
    "CỤM": "发牢骚",
    "PINYIN": "fā láo sāo",
    "NGHĨA": "指抱怨、发泄心中的不满。",
    "SẮP XẾP CÂU": "对工作不满。 / 他在群里 / 发牢骚，",
    "ĐÁP ÁN": "他在群里发牢骚，对工作不满。",
    "PHIÊN ÂM": "Tā zài qún lǐ fā láo sāo, duì gōngzuò bùmǎn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "抱怨工作太辛苦。 / 他整天 / 发牢骚，",
    "ĐÁP ÁN": "他整天发牢骚，抱怨工作太辛苦。",
    "PHIÊN ÂM": "Tā zhěng tiān fā láo sāo, bàoyuàn gōngzuò tài xīnkǔ."
  },
  {
    "STT": 10,
    "CHỮ": "F",
    "CỤM": "发冷言",
    "PINYIN": "fā lěng yán",
    "NGHĨA": "指用冷言冷语打击人的热情或积极性。",
    "SẮP XẾP CÂU": "显得很不屑。 / 她 / 对这件事 / 发冷言，",
    "ĐÁP ÁN": "她对这件事发冷言，显得很不屑。",
    "PHIÊN ÂM": "Tā duì zhè jiàn shì fā lěng yán, xiǎnde hěn bùxiè."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "让人很不舒服。 / 他总是 / 发冷言冷语，",
    "ĐÁP ÁN": "他总是发冷言冷语，让人很不舒服。",
    "PHIÊN ÂM": "Tā zǒngshì fā lěng yán lěngyǔ, ràng rén hěn bú shūfú."
  },
  {
    "STT": 11,
    "CHỮ": "F",
    "CỤM": "发脾气",
    "PINYIN": "fā pí qì",
    "NGHĨA": "指因生气、不如意而吵闹或向人发火。 也作“发性子”。",
    "SẮP XẾP CÂU": "让大家 / 都很尴尬。 / 他 / 因为小事 / 发脾气，",
    "ĐÁP ÁN": "他因为小事发脾气，让大家都很尴尬。",
    "PHIÊN ÂM": "Tā yīnwèi xiǎo shì fā pí qì, ràng dàjiā dōu hěn gāngà."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "就 / 发脾气了。 / 他因为 / 考试没考好，",
    "ĐÁP ÁN": "他因为考试没考好，就发脾气了。",
    "PHIÊN ÂM": "Tā yīnwèi kǎoshì méi kǎo hǎo, jiù fā pí qì le."
  },
  {
    "STT": 12,
    "CHỮ": "F",
    "CỤM": "发善心",
    "PINYIN": "fā shàn xīn",
    "NGHĨA": "常指坏人突然想做善事。",
    "SẮP XẾP CÂU": "帮助了 / 很多人。 / 他 / 在关键时刻 / 发善心，",
    "ĐÁP ÁN": "他在关键时刻发善心，帮助了很多人。",
    "PHIÊN ÂM": "Tā zài guānjiàn shíkè fā shàn xīn, bāngzhù le hěn duō rén."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "捐了一大笔钱 / 给灾区。 / 他 / 发善心，",
    "ĐÁP ÁN": "他发善心，捐了一大笔钱给灾区。",
    "PHIÊN ÂM": "Tā fā shàn xīn, juānle yī dà bǐ qián gěi zāiqū."
  },
  {
    "STT": 13,
    "CHỮ": "F",
    "CỤM": "发神经",
    "PINYIN": "fā shén jīng",
    "NGHĨA": "指人情绪不正常,举止、行为不合常理。 也作“犯神经病”。",
    "SẮP XẾP CÂU": "心情异常。 / 这件事情 / 让他 / 发神经，",
    "ĐÁP ÁN": "这件事情让他发神经，心情异常。",
    "PHIÊN ÂM": "Zhè jiàn shìqíng ràng tā fā shén jīng, xīnqíng yìcháng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "说话颠三倒四的， / 看着像 / 发神经了。 / 他最近 / 行为怪异，",
    "ĐÁP ÁN": "他最近行为怪异，说话颠三倒四的，看着像发神经了。",
    "PHIÊN ÂM": "Tā zuìjìn xíngwéi guàiyì, shuōhuà diānsāndǎosì de, kànzhe xiàng fā shén jīng le."
  },
  {
    "STT": 14,
    "CHỮ": "F",
    "CỤM": "发通行证",
    "PINYIN": "fā tōng xíng zhèng",
    "NGHĨA": "比喻批准某人做某事或为某人做事提供方便。",
    "SẮP XẾP CÂU": "才能 / 进入 / 这个区域。 / 他们 / 需要 / 发通行证，",
    "ĐÁP ÁN": "他们需要发通行证，才能进入这个区域。",
    "PHIÊN ÂM": "Tāmen xūyào fā tōng xíng zhèng, cái néng jìnrù zhè ge qūyù."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "才能进入 / 施工现场。 / 他们需要 / 先去 / 相关部门 / 发通行证，",
    "ĐÁP ÁN": "他们需要先去相关部门发通行证，才能进入施工现场。",
    "PHIÊN ÂM": "Tāmen xūyào xiān qù xiāngguān bùmén fā tōng xíng zhèng, cáinéng jìnrù shīgōng xiànchǎng."
  },
  {
    "STT": 15,
    "CHỮ": "F",
    "CỤM": "发现新大陆",
    "PINYIN": "fā xiàn xīn dà lù",
    "NGHĨA": "新大陆:美洲的别称,由十五世纪航海家哥伦布最先发现。 比喻发现了新奇、有趣的事物。",
    "SẮP XẾP CÂU": "发现 / 新大陆。 / 这项研究/ 让科学家们",
    "ĐÁP ÁN": "这项研究让科学家们发现新大陆。",
    "PHIÊN ÂM": "Zhè xiàng yánjiū ràng kēxuéjiā men fāxiàn xīn dà lù."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "取得了重大突破。 / 他这次的研究， / 简直是 / 发现新大陆，",
    "ĐÁP ÁN": "他这次的研究，简直是发现新大陆，取得了重大突破。",
    "PHIÊN ÂM": "Tā zhè cì de yánjiū, jiǎnzhí shì fāxiàn xīn dàlù, qǔdéle zhòngdà túpò."
  },
  {
    "STT": 16,
    "CHỮ": "F",
    "CỤM": "发洋财",
    "PINYIN": "fā yáng cái",
    "NGHĨA": "原指与外国人做买卖赚了大量钱财。泛指获得意外钱财。",
    "SẮP XẾP CÂU": "过上了好日子。 / 他 / 通过 / 投资 / 发洋财，",
    "ĐÁP ÁN": "他通过投资发洋财，过上了好日子。",
    "PHIÊN ÂM": "Tā tōngguò tóuzī fā yáng cái, guò shàngle hǎo rìzi."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "买了别墅和豪车。 / 听说他 / 在国外 / 发洋财了，",
    "ĐÁP ÁN": "听说他在国外发洋财了，买了别墅和豪车。",
    "PHIÊN ÂM": "Tīng shuō tā zài guówài fā yáng cáile, mǎile biéshù hé háochē."
  },
  {
    "STT": 17,
    "CHỮ": "F",
    "CỤM": "翻白眼",
    "PINYIN": "fān bái yǎn",
    "NGHĨA": "心中为难、失望、憎恨或不满时眼睛的表情。",
    "SẮP XẾP CÂU": "她 /不知道该说什么。/ 无知 / 翻了个白眼，/对他的 / 真是",
    "ĐÁP ÁN": "她对他的无知翻了个白眼，真是不知道该说什么。",
    "PHIÊN ÂM": "Tā duì tā de wúzhī fānle ge bái yǎn, zhēnshi bù zhīdào gāi shuō shénme."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "他很不满， / 翻白眼，/ 但 /在一旁 / 没人 / 注意到他。",
    "ĐÁP ÁN": "他很不满，在一旁翻白眼，但没人注意到他。",
    "PHIÊN ÂM": "Tā hěn bùmǎn, zài yīpáng fān bái yǎn, dàn méi rén zhùyì dào tā."
  },
  {
    "STT": 18,
    "CHỮ": "F",
    "CỤM": "翻不过身来",
    "PINYIN": "fān bù guò shēn lái",
    "NGHĨA": "指无法改变被压迫或被打击的悲惨处境。",
    "SẮP XẾP CÂU": "翻不过身来。 / 他/ 这次遇到的麻烦/ 让他",
    "ĐÁP ÁN": "他这次遇到的麻烦让他翻不过身来。",
    "PHIÊN ÂM": "Tā zhè cì yùdào de máfan ràng tā fān bù guò shēn lái."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "我真是 / 翻不过身来了！ / 这段时间 / 事情太多了，",
    "ĐÁP ÁN": "这段时间事情太多了，我真是翻不过身来了！",
    "PHIÊN ÂM": "Zhè duàn shíjiān shìqíng tài duōle, wǒ zhēnshi fān bù guò shēn lái le!"
  },
  {
    "STT": 19,
    "CHỮ": "F",
    "CỤM": "翻白眼儿",
    "PINYIN": "fān bái yǎn ér",
    "NGHĨA": "黑眼珠偏斜,露出较多部分的眼白,原是病危或濒临死亡的一种症状。 常用这种表情来表示对人的蔑视、不满或厌恶。",
    "SẮP XẾP CÂU": "觉得荒唐。 / 她 / 听到 / 这个消息 / 不禁 / 翻白眼儿，",
    "ĐÁP ÁN": "她听到这个消息不禁翻白眼儿，觉得荒唐。",
    "PHIÊN ÂM": "Tā tīngdào zhège xiāoxī bùjīn fān bái yǎn er, juéde huāngtáng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "直接 / 翻白眼儿， / 表示不屑。 / 他听了 / 他的话，",
    "ĐÁP ÁN": "他听了他的话，直接翻白眼儿，表示不屑。",
    "PHIÊN ÂM": "Tā tīngle tā de huà, zhíjiē fān bái yǎn er, biǎoshì bùxiè."
  },
  {
    "STT": 20,
    "CHỮ": "F",
    "CỤM": "翻不透账码",
    "PINYIN": "fān bù tòu zhàng mǎ",
    "NGHĨA": "比喻怎么也想不明白。",
    "SẮP XẾP CÂU": "让人很困惑。 / 这笔账 / 翻不透账码，",
    "ĐÁP ÁN": "这笔账翻不透账码，让人很困惑。",
    "PHIÊN ÂM": "Zhè bǐ zhàng fān bù tòu zhàng mǎ, ràng rén hěn kùnhuò."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "根本 / 翻不透账码。 / 这账目 / 做得乱七八糟的，",
    "ĐÁP ÁN": "这账目做得乱七八糟的，根本翻不透账码。",
    "PHIÊN ÂM": "Zhè zhàngmù zuò dé luànqībāzāo de, gēnběn fān bù tòu zhàng mǎ."
  },
  {
    "STT": 21,
    "CHỮ": "F",
    "CỤM": "犯痴病",
    "PINYIN": "fàn chī bìng",
    "NGHĨA": "犯傻。指发呆或做傻事。",
    "SẮP XẾP CÂU": "做事 / 不理智。 / 他最近 / 犯痴病，",
    "ĐÁP ÁN": "他最近犯痴病，做事不理智。",
    "PHIÊN ÂM": "Tā zuìjìn fàn chī bìng, zuòshì bù lǐzhì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "最近 / 犯痴病， / 经常 / 忘记事情。 / 他年纪大了，",
    "ĐÁP ÁN": "他年纪大了，最近犯痴病，经常忘记事情。",
    "PHIÊN ÂM": "Tā niánjì dàle, zuìjìn fàn chī bìng, jīngcháng wàngjì shìqíng."
  },
  {
    "STT": 22,
    "CHỮ": "F",
    "CỤM": "翻的肚衬衫",
    "PINYIN": "fān de dù chèn shān",
    "NGHĨA": "山西方言话“不要翻别人屋里的肚衬衫”演化而来。指揭露别人的隐私。",
    "SẮP XẾP CÂU": "显得不够稳重。 / 他总是 / 翻的肚衬衫，",
    "ĐÁP ÁN": "他总是翻的肚衬衫，显得不够稳重。",
    "PHIÊN ÂM": "Tā zǒngshì fān de dù chèn shān, xiǎnde bùgòu wěnzhòng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真邋遢！ / 他把 / 翻的肚衬衫 / 都穿出来了，",
    "ĐÁP ÁN": "他把翻的肚衬衫都穿出来了，真邋遢！",
    "PHIÊN ÂM": "Tā bǎ fān de dù chèn shān dōu chuān chūláile, zhēn lātā!"
  },
  {
    "STT": 23,
    "CHỮ": "F",
    "CỤM": "犯嘀咕",
    "PINYIN": "fàn dí gu",
    "NGHĨA": "指心中产生疑问或感到不踏实。",
    "SẮP XẾP CÂU": "不太相信 / 这个消息。 / 他 / 在心里 / 犯嘀咕，",
    "ĐÁP ÁN": "他在心里犯嘀咕，不太相信这个消息。",
    "PHIÊN ÂM": "Tā zài xīnlǐ fàn dí gu, bù tài xiāngxìn zhège xiāoxī."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "觉得 / 事情 / 没那么简单。 / 我对他的话 / 犯嘀咕，",
    "ĐÁP ÁN": "我对他的话犯嘀咕，觉得事情没那么简单。",
    "PHIÊN ÂM": "Wǒ duì tā de huà fàn dí gu, juéde shìqíng méi nàme jiǎndān."
  },
  {
    "STT": 24,
    "CHỮ": "F",
    "CỤM": "饭店门口摆粥摊",
    "PINYIN": "fàn diàn mén kǒu bǎi zhōu tān",
    "NGHĨA": "比喻在行家面前卖弄。",
    "SẮP XẾP CÂU": "生意很好。 / 饭店门口 / 摆粥摊，",
    "ĐÁP ÁN": "饭店门口摆粥摊，生意很好。",
    "PHIÊN ÂM": "Fàn diàn mén kǒu bǎi zhōu tān, shēngyì hěn hǎo."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "竞争压力很大。 / 现在 / 饭店门口 / 摆粥摊的现象 / 很常见，",
    "ĐÁP ÁN": "现在饭店门口摆粥摊的现象很常见，竞争压力很大。",
    "PHIÊN ÂM": "Xiànzài fàn diàn mén kǒu bǎi zhōu tān de xiànxiàng hěn chángjiàn, jìngzhēng yālì hěn dà."
  },
  {
    "STT": 25,
    "CHỮ": "F",
    "CỤM": "翻跟头",
    "PINYIN": "fān gēn tou",
    "NGHĨA": "原指身体向下翻转后恢复原状。比喻遭受失败或挫折。 也作“翻斤斗”、“翻筋头”。",
    "SẮP XẾP CÂU": "玩得很开心。 / 他在操场上 / 翻跟头，",
    "ĐÁP ÁN": "他在操场上翻跟头，玩得很开心。",
    "PHIÊN ÂM": "Tā zài cāochǎng shàng fān gēn tou, wán de hěn kāixīn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "可以说是 / 狠狠地 / 翻了个跟头。 / 他这次投资 / 失败了，",
    "ĐÁP ÁN": "他这次投资失败了，可以说是狠狠地翻了个跟头。",
    "PHIÊN ÂM": "Tā zhè cì tóuzī shībàile, kěyǐ shuō shì hěnhěn de fān le gè gēn tou."
  },
  {
    "STT": 26,
    "CHỮ": "F",
    "CỤM": "犯急性病",
    "PINYIN": "fàn jí xìng bìng",
    "NGHĨA": "指做事不顾客观实际,急于求成。 也作“害急性病”。",
    "SẮP XẾP CÂU": "导致 / 他犯急性病。 / 最近 / 工作压力大，",
    "ĐÁP ÁN": "最近工作压力大，导致他犯急性病。",
    "PHIÊN ÂM": "Zuìjìn gōngzuò yālì dà, dǎozhì tā fàn jí xìng bìng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "被紧急送往医院。 / 他突然 / 犯急性病，",
    "ĐÁP ÁN": "他突然犯急性病，被紧急送往医院。",
    "PHIÊN ÂM": "Tā túrán fàn jí xìng bìng, bèi jǐnjí sòng wǎng yīyuàn."
  },
  {
    "STT": 27,
    "CHỮ": "F",
    "CỤM": "犯口舌",
    "PINYIN": "fàn kǒu shé",
    "NGHĨA": "指发生口角。 也作“犯口角”。",
    "SẮP XẾP CÂU": "惹了一身麻烦。 / 他 / 因为这件事 / 犯口舌，",
    "ĐÁP ÁN": "他因为这件事犯口舌，惹了一身麻烦。",
    "PHIÊN ÂM": "Tā yīnwèi zhè jiàn shì fàn kǒu shé, rěle yīshēn máfan."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真是 / 得不偿失。 / 为了这件小事， / 他竟然 / 犯口舌，",
    "ĐÁP ÁN": "为了这件小事，他竟然犯口舌，真是得不偿失。",
    "PHIÊN ÂM": "Wèile zhè jiàn xiǎoshì, tā jìngrán fàn kǒu shé, zhēnshi dé bù cháng shī."
  },
  {
    "STT": 28,
    "CHỮ": "F",
    "CỤM": "翻苦水",
    "PINYIN": "fān kǔ shuǐ",
    "NGHĨA": "指回忆过去的悲惨生活。",
    "SẮP XẾP CÂU": "抱怨生活。 / 他 / 总是 / 在翻苦水，",
    "ĐÁP ÁN": "他总是在翻苦水，抱怨生活。",
    "PHIÊN ÂM": "Tā zǒngshì zài fān kǔ shuǐ, bàoyuàn shēnghuó."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "抱怨工作上的不公平。 / 他向朋友 / 翻苦水，",
    "ĐÁP ÁN": "他向朋友翻苦水，抱怨工作上的不公平。",
    "PHIÊN ÂM": "Tā xiàng péngyǒu fān kǔ shuǐ, bàoyuàn gōngzuò shàng de bù gōngpíng."
  },
  {
    "STT": 29,
    "CHỮ": "F",
    "CỤM": "翻来葫芦倒去瓢",
    "PINYIN": "fān lái hú lú dǎo qù piáo",
    "NGHĨA": "瓢由葫芦做成。指说来说去都是一回事。",
    "SẮP XẾP CÂU": "毫无章法。 / 他的做法 / 就像 / 翻来葫芦倒去瓢，",
    "ĐÁP ÁN": "他的做法就像翻来葫芦倒去瓢，毫无章法。",
    "PHIÊN ÂM": "Tā de zuòfǎ jiù xiàng fān lái hú lu dǎo qù piáo, háo wú zhāngfǎ."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "做事没个准。 / 他这个人 / 翻来葫芦倒去瓢的，",
    "ĐÁP ÁN": "他这个人翻来葫芦倒去瓢的，做事没个准。",
    "PHIÊN ÂM": "Tā zhège rén fān lái hú lú dǎo qù piáo de, zuòshì méi gè zhǔn."
  },
  {
    "STT": 30,
    "CHỮ": "F",
    "CỤM": "饭来张口，茶来伸手",
    "PINYIN": "fàn lái zhāng kǒu, chá lái shēn shǒu",
    "NGHĨA": "见“衣来伸手,饭来张口”。",
    "SẮP XẾP CÂU": "不懂得自立。 / 他总是 / 饭来张口，茶来伸手，",
    "ĐÁP ÁN": "他总是饭来张口，茶来伸手，不懂得自立。",
    "PHIÊN ÂM": "Tā zǒngshì fàn lái zhāng kǒu, chá lái shēn shǒu, bù dǒngdé zìlì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "饭来张口，茶来伸手。 / 他从小娇生惯养，",
    "ĐÁP ÁN": "他从小娇生惯养，饭来张口，茶来伸手。",
    "PHIÊN ÂM": "Tā cóngxiǎo jiāoshēngguànyǎng, fàn lái zhāng kǒu, chá lái shēnshǒu."
  },
  {
    "STT": 31,
    "CHỮ": "F",
    "CỤM": "翻烙饼",
    "PINYIN": "fān lào bǐng",
    "NGHĨA": "比喻购买后快速转手倒卖。 比喻工作反复,毫无进展。 比喻翻来覆去,无法入睡。 也作“翻烧饼”。",
    "SẮP XẾP CÂU": "做得很香。 / 他在厨房 / 翻烙饼，",
    "ĐÁP ÁN": "他在厨房翻烙饼，做得很香。",
    "PHIÊN ÂM": "Tā zài chúfáng fān lào bǐng, zuò de hěn xiāng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "一会儿一个样。 / 他的主意 / 翻烙饼似的，",
    "ĐÁP ÁN": "他的主意翻烙饼似的，一会儿一个样。",
    "PHIÊN ÂM": "Tā de zhǔyì fān lào bǐng shì de, yīhuǐr yīgè yàng."
  },
  {
    "STT": 32,
    "CHỮ": "F",
    "CỤM": "翻老底",
    "PINYIN": "fān lǎo dǐ",
    "NGHĨA": "指把已经过去的事拿出来重提。",
    "SẮP XẾP CÂU": "揭人隐私。 / 他总是 / 翻老底，",
    "ĐÁP ÁN": "他总是翻老底，揭人隐私。",
    "PHIÊN ÂM": "Tā zǒngshì fān lǎo dǐ, jiē rén yǐnsī."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "把以前的坏事 / 都抖搂出来了。 / 他这次彻底 / 翻老底了，",
    "ĐÁP ÁN": "他这次彻底翻老底了，把以前的坏事都抖搂出来了。",
    "PHIÊN ÂM": "Tā zhè cì chèdǐ fān lǎo dǐ le, bǎ yǐqián de huàishì dōu dǒulou chūláile."
  },
  {
    "STT": 33,
    "CHỮ": "F",
    "CỤM": "翻老皇历",
    "PINYIN": "fān lǎo huáng lì",
    "NGHĨA": "皇历:历书。比喻重提陈年旧事。 比喻按过时的老规矩、老办法办事。也作“搬老皇历”。",
    "SẮP XẾP CÂU": "说过去的事情。 / 他总是 / 翻老皇历，",
    "ĐÁP ÁN": "他总是翻老皇历，说过去的事情。",
    "PHIÊN ÂM": "Tā zǒngshì fān lǎo huáng lì, shuō guòqù de shìqíng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "时代变了， / 要与时俱进。 / 别老翻老皇历了，",
    "ĐÁP ÁN": "别老翻老皇历了，时代变了，要与时俱进。",
    "PHIÊN ÂM": "Bié lǎo fān lǎo huáng lì le, shídài biànle, yào yǔ shí jù jìn."
  },
  {
    "STT": 34,
    "CHỮ": "F",
    "CỤM": "翻老婆舌",
    "PINYIN": "fān lǎo pó shé",
    "NGHĨA": "指在背地里传闲话。",
    "SẮP XẾP CÂU": "说一些不着边际的事。 / 他总是 / 翻老婆舌，",
    "ĐÁP ÁN": "他总是在翻老婆舌，说一些不着边际的事。",
    "PHIÊN ÂM": "Tā zǒngshì zài fān lǎo pó shé, shuō yīxiē bùzháobiānjì de shì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "没完没了的抱怨。 / 他老婆 / 又开始 / 翻老婆舌了，",
    "ĐÁP ÁN": "他老婆又开始翻老婆舌了，没完没了的抱怨。",
    "PHIÊN ÂM": "Tā lǎopó yòu kāishǐ fān lǎo pó shé le, méiwán méiliǎo de bàoyuàn."
  },
  {
    "STT": 35,
    "CHỮ": "F",
    "CỤM": "翻老账",
    "PINYIN": "fān lǎo zhàng",
    "NGHĨA": "老账:旧账。 比喻重提令人不愉快的事或重新追究以往的责任与过错。 也作“翻陈账”、“翻旧账”。",
    "SẮP XẾP CÂU": "旧事重提。 / 他总是 / 翻老账，",
    "ĐÁP ÁN": "他总是翻老账，旧事重提。",
    "PHIÊN ÂM": "Tā zǒngshì fān lǎo zhàng, jiùshì chóngtí."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "让我们很不愉快。 / 他总是 / 翻老账，",
    "ĐÁP ÁN": "他总是翻老账，让我们很不愉快。",
    "PHIÊN ÂM": "Tā zǒngshì fān lǎo zhàng, ràng wǒmen hěn bù yúkuài."
  },
  {
    "STT": 36,
    "CHỮ": "F",
    "CỤM": "反了天",
    "PINYIN": "fǎn le tiān",
    "NGHĨA": "斥责人行为放肆,胆大妄为。",
    "SẮP XẾP CÂU": "让人难以接受。 / 这件事情真是 / 反了天，",
    "ĐÁP ÁN": "这件事情真是反了天，让人难以接受。",
    "PHIÊN ÂM": "Zhè jiàn shìqíng zhēnshi fǎn le tiān, ràng rén nányǐ jiēshòu."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真是 / 反了天了！ / 他竟然敢 / 顶撞老师，",
    "ĐÁP ÁN": "他竟然敢顶撞老师，真是反了天了！",
    "PHIÊN ÂM": "Tā jìngrán gǎn dǐngzhuàng lǎoshī, zhēnshi fǎn le tiān le!"
  },
  {
    "STT": 37,
    "CHỮ": "F",
    "CỤM": "犯冷热病",
    "PINYIN": "fàn lěng rè bìng",
    "NGHĨA": "指工作态度忽冷忽热,不能始终如一。",
    "SẮP XẾP CÂU": "犯冷热病。 / 他/ 因为/ 天气变化",
    "ĐÁP ÁN": "他因为天气变化犯冷热病。",
    "PHIÊN ÂM": "Tā yīnwèi tiānqì biànhuà fàn lěng rè bìng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "身体很虚弱。 / 她最近总是 / 犯冷热病，",
    "ĐÁP ÁN": "她最近总是犯冷热病，身体很虚弱。",
    "PHIÊN ÂM": "Tā zuìjìn zǒngshì fàn lěng rè bìng, shēntǐ hěn xūruò."
  },
  {
    "STT": 38,
    "CHỮ": "F",
    "CỤM": "翻脸不认人",
    "PINYIN": "fān liǎn bù rèn rén",
    "NGHĨA": "翻:掉转。 指态度突然变坏,做事不管交情,不讲情面。 也作“反脸不认人”、“转过脸就不认得人”。",
    "SẮP XẾP CÂU": "真是可怕。 / 有些人 / 翻脸不认人，",
    "ĐÁP ÁN": "有些人翻脸不认人，真是可怕。",
    "PHIÊN ÂM": "Yǒuxiē rén fān liǎn bù rèn rén, zhēnshi kěpà."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "让人觉得很可怕。 / 他 / 翻脸不认人，",
    "ĐÁP ÁN": "他翻脸不认人，让人觉得很可怕。",
    "PHIÊN ÂM": "Tā fān liǎn bù rèn rén, ràng rén juéde hěn kěpà."
  },
  {
    "STT": 39,
    "CHỮ": "F",
    "CỤM": "翻脸不认账",
    "PINYIN": "fān liǎn bù rèn zhàng",
    "NGHĨA": "指态度突然转变,拒不承认自己已经做过的事或说过的话(多为过错)。",
    "SẮP XẾP CÂU": "就没什么好谈的。 / 他若 / 翻脸不认账，",
    "ĐÁP ÁN": "他若翻脸不认账，就没什么好谈的。",
    "PHIÊN ÂM": "Tā ruò fān liǎn bù rèn zhàng, jiù méishénme hǎo tán de."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真是个赖皮！ / 他输了钱就 / 翻脸不认账，",
    "ĐÁP ÁN": "他输了钱就翻脸不认账，真是个赖皮！",
    "PHIÊN ÂM": "Tā shūle qián jiù fān liǎn bù rèn zhàng, zhēnshi gè làipí!"
  },
  {
    "STT": 40,
    "CHỮ": "F",
    "CỤM": "犯牛脖子",
    "PINYIN": "fàn niú bó zi",
    "NGHĨA": "见“发牛脾气”。",
    "SẮP XẾP CÂU": "惹了麻烦。 / 他 / 犯牛脖子，",
    "ĐÁP ÁN": "他犯牛脖子，惹了麻烦。",
    "PHIÊN ÂM": "Tā fàn niú bó zi, rěle máfan."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "无论如何都 / 不肯低头。 / 他 / 犯牛脖子，",
    "ĐÁP ÁN": "他犯牛脖子，无论如何都不肯低头。",
    "PHIÊN ÂM": "Tā fàn niú bó zi, wúlùn rúhé dōu bùkěn dītóu."
  },
  {
    "STT": 41,
    "CHỮ": "F",
    "CỤM": "犯牛脾气",
    "PINYIN": "fàn niú pí qì",
    "NGHĨA": "比喻人的脾气很倔强，固执己见。",
    "SẮP XẾP CÂU": "他 / 常常 /当不了大官，/那个人 / 因为他 / 犯牛脾气。",
    "ĐÁP ÁN": "他那个人当不了大官，因为他常常犯牛脾气。",
    "PHIÊN ÂM": "Tā nàgè rén dāng bùliǎo dà guān, yīnwèi tā chángcháng fàn niú pí qì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "怎么了， / 吧? / 又犯牛脾气了",
    "ĐÁP ÁN": "怎么了，又犯牛脾气了吧?",
    "PHIÊN ÂM": "Zěnmeliǎo, yòu fàn niú pí qì le ba?"
  },
  {
    "STT": 42,
    "CHỮ": "F",
    "CỤM": "饭瓢子过河",
    "PINYIN": "fàn piáo zi guò hé",
    "NGHĨA": "饭甑子在河中会顺水漂走。比喻到头来一无所获。",
    "SẮP XẾP CÂU": "小心翼翼。 / 他 / 饭瓢子过河，",
    "ĐÁP ÁN": "他饭瓢子过河，小心翼翼。",
    "PHIÊN ÂM": "Tā fàn piáo zi guò hé, xiǎoxīn yìyì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "一去不复返了。 / 这件事 / 就像 / 饭瓢子过河，",
    "ĐÁP ÁN": "这件事就像饭瓢子过河，一去不复返了。",
    "PHIÊN ÂM": "Zhè jiàn shì jiù xiàng fàn piáo zi guò hé, yī qù bù fù fǎnle."
  },
  {
    "STT": 43,
    "CHỮ": "F",
    "CỤM": "犯神经病",
    "PINYIN": "fàn shén jīng bìng",
    "NGHĨA": "见“发神经”。",
    "SẮP XẾP CÂU": "行为怪异。 / 他最近真是 / 犯神经病，",
    "ĐÁP ÁN": "他最近真是犯神经病，行为怪异。",
    "PHIÊN ÂM": "Tā zuìjìn zhēnshi fàn shén jīng bìng, xíngwéi guàiyì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "怀疑他 / 犯神经病了。 / 他最近 / 行为异常，",
    "ĐÁP ÁN": "他最近行为异常，怀疑他犯神经病了。",
    "PHIÊN ÂM": "Tā zuìjìn xíngwéi yìcháng, huáiyí tā fàn shén jīng bìng le."
  },
  {
    "STT": 44,
    "CHỮ": "F",
    "CỤM": "翻手为云，覆手为雨",
    "PINYIN": "fān shǒu wéi yún, fù shǒu wéi yǔ",
    "NGHĨA": "比喻人反复无常。 比喻人善于玩弄权术。 也作“翻手是雨,合手是云”、“翻手为云覆手雨”、“翻手作云覆手雨”。",
    "SẮP XẾP CÂU": "变化多端。 / 他在商场上 / 翻手为云，覆手为雨，",
    "ĐÁP ÁN": "他在商场上翻手为云，覆手为雨，变化多端。",
    "PHIÊN ÂM": "Tā zài shāngchǎng shàng fānshǒu wéi yún, fùshǒu wéi yǔ, biànhuà duōduān."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "翻手为云，覆手为雨。 / 他权势很大，",
    "ĐÁP ÁN": "他权势很大，翻手为云，覆手为雨。",
    "PHIÊN ÂM": "Tā quánshì hěn dà, fān shǒu wéi yún, fù shǒu wéi yǔ."
  },
  {
    "STT": 45,
    "CHỮ": "F",
    "CỤM": "反说反有理，正说正有理",
    "PINYIN": "fǎn shuō fǎn yǒu lǐ, zhèng shuō zhèng yǒu lǐ",
    "NGHĨA": "指无理狡辩,怎么说都显占理。 也作“东说东有理,西说西有理”。",
    "SẮP XẾP CÂU": "正说正有理。 / 这件事 / 反说反有理，",
    "ĐÁP ÁN": "这件事反说反有理，正说正有理。",
    "PHIÊN ÂM": "Zhè jiàn shì fǎn shuō fǎn yǒu lǐ, zhèng shuō zhèng yǒu lǐ."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "正说正有理。 / 他巧舌如簧， / 反说反有理，",
    "ĐÁP ÁN": "他巧舌如簧，反说反有理，正说正有理。",
    "PHIÊN ÂM": "Tā qiǎoshé rú huáng, fǎn shuō fǎn yǒu lǐ, zhèng shuō zhèng yǒulǐ."
  },
  {
    "STT": 46,
    "CHỮ": "F",
    "CỤM": "犯通病",
    "PINYIN": "fàn tōng bìng",
    "NGHĨA": "指与大多数人一样,犯同样的错误。",
    "SẮP XẾP CÂU": "难以解决。 / 很多人 / 在这个问题上 / 犯通病，",
    "ĐÁP ÁN": "很多人在这个问题上犯通病，难以解决。",
    "PHIÊN ÂM": "Hěnduō rén zài zhège wèntí shàng fàn tōng bìng, nányǐ jiějué."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "缺乏逻辑性。 / 这篇文章 / 犯了通病，",
    "ĐÁP ÁN": "这篇文章犯了通病，缺乏逻辑性。",
    "PHIÊN ÂM": "Zhè piān wénzhāng fànle tōng bìng, quēfá luójí xìng."
  },
  {
    "STT": 47,
    "CHỮ": "F",
    "CỤM": "饭碗里撒沙",
    "PINYIN": "fàn wǎn lǐ sā shā",
    "NGHĨA": "比喻暗中搞破坏。",
    "SẮP XẾP CÂU": "不认真。 / 他 / 在工作中 / 饭碗里撒沙，",
    "ĐÁP ÁN": "他在工作中饭碗里撒沙，不认真。",
    "PHIÊN ÂM": "Tā zài gōngzuò zhōng fàn wǎn lǐ sā shā, bù rènzhēn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "故意刁难别人。 / 他总是 / 饭碗里 / 撒沙，",
    "ĐÁP ÁN": "他总是饭碗里撒沙，故意刁难别人。",
    "PHIÊN ÂM": "Tā zǒngshì fàn wǎn lǐ sā shā, gùyì diāonàn biérén."
  },
  {
    "STT": 48,
    "CHỮ": "F",
    "CỤM": "翻小话",
    "PINYIN": "fān xiǎo huà",
    "NGHĨA": "指在背地里传一些鸡毛蒜皮的小事。",
    "SẮP XẾP CÂU": "说些无聊的事。 / 他 / 在那儿 / 翻小话，",
    "ĐÁP ÁN": "他在那儿翻小话，说些无聊的事。",
    "PHIÊN ÂM": "Tā zài nàr fān xiǎo huà, shuō xiē wúliáo de shì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "直接 / 说重点！ / 别 / 翻小话了，",
    "ĐÁP ÁN": "别翻小话了，直接说重点！",
    "PHIÊN ÂM": "Bié fān xiǎo huà le, zhíjiē shuō zhòngdiǎn!"
  },
  {
    "STT": 49,
    "CHỮ": "F",
    "CỤM": "犯小性",
    "PINYIN": "fàn xiǎo xìng",
    "NGHĨA": "指为小事而发脾气、使性子。",
    "SẮP XẾP CÂU": "斤斤计较。 / 他总是 / 犯小性，",
    "ĐÁP ÁN": "他总是犯小性，斤斤计较。",
    "PHIÊN ÂM": "Tā zǒngshì fàn xiǎo xìng, jīnjīn jìjiào."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "很正常。 / 小孩子 / 犯小性",
    "ĐÁP ÁN": "小孩子犯小性很正常。",
    "PHIÊN ÂM": "Xiǎo háizi fàn xiǎo xìng hěn zhèngcháng."
  },
  {
    "STT": 50,
    "CHỮ": "F",
    "CỤM": "犯眼馋",
    "PINYIN": "fàn yǎn chán",
    "NGHĨA": "指羡慕、嫉妒别人。",
    "SẮP XẾP CÂU": "忍不住想吃。 / 他看到美食 / 犯眼馋，",
    "ĐÁP ÁN": "他看到美食犯眼馋，忍不住想吃。",
    "PHIÊN ÂM": "Tā kàn dào měishí fàn yǎn chán, rěn bù zhù xiǎng chī."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "我 / 犯眼馋了。 / 看到 / 那些美食，",
    "ĐÁP ÁN": "看到那些美食，我犯眼馋了。",
    "PHIÊN ÂM": "Kàn dào nàxiē měishí, wǒ fàn yǎn chán le."
  },
  {
    "STT": 51,
    "CHỮ": "F",
    "CỤM": "反咬一口",
    "PINYIN": "fǎn yǎo yī kǒu",
    "NGHĨA": "比喻自己做了错事,坏事不悔改,还反过来诬赖他人。 也作“倒咬一口”。",
    "SẮP XẾP CÂU": "试图 / 反击对方。 / 他 / 在争论中 / 反咬一口，",
    "ĐÁP ÁN": "他在争论中反咬一口，试图反击对方。",
    "PHIÊN ÂM": "Tā zài zhēnglùn zhōng fǎn yǎo yī kǒu, shìtú fǎnjí duìfāng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "竟然 / 反咬一口。 / 他被揭穿后，",
    "ĐÁP ÁN": "他被揭穿后，竟然反咬一口。",
    "PHIÊN ÂM": "Tā bèi jiēchuān hòu, jìngrán fǎn yǎo yī kǒu."
  },
  {
    "STT": 52,
    "CHỮ": "F",
    "CỤM": "犯夜的倒穿巡夜的",
    "PINYIN": "fàn yè de dào chuān xún yè de",
    "NGHĨA": "犯夜:指夜间犯禁,干坏事。巡夜:指夜间巡逻。 比喻干坏事的人反过来诬陷对其检举揭发的人。",
    "SẮP XẾP CÂU": "生活不规律。 / 他犯夜的 / 倒穿巡夜的，",
    "ĐÁP ÁN": "他犯夜的倒穿巡夜的，生活不规律。",
    "PHIÊN ÂM": "Tā fàn yè de dào chuān xún yè de, shēnghuó bù guīlǜ."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真是 / 犯夜的倒穿巡夜的。 / 这两人 / 互相扯后腿，",
    "ĐÁP ÁN": "这两人互相扯后腿，真是犯夜的倒穿巡夜的。",
    "PHIÊN ÂM": "Zhè liǎng rén hùxiāng chě hòutuǐ, zhēnshi fàn yè de dào chuān xún yè de."
  },
  {
    "STT": 53,
    "CHỮ": "F",
    "CỤM": "反一遍，正一遍",
    "PINYIN": "fǎn yī biàn, zhèng yī biàn",
    "NGHĨA": "指不断重复同样的事情。",
    "SẮP XẾP CÂU": "说话 / 没逻辑。 / 他总是 / 反一遍，正一遍，",
    "ĐÁP ÁN": "他总是反一遍，正一遍，说话没逻辑。",
    "PHIÊN ÂM": "Tā zǒngshì fǎn yī biàn, zhèng yī biàn, shuōhuà méi luójí."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "正一遍地 / 练习。 / 这个舞蹈动作要 / 反一遍，",
    "ĐÁP ÁN": "这个舞蹈动作要反一遍，正一遍地练习。",
    "PHIÊN ÂM": "Zhège wǔdǎo dòngzuò yào fǎn yī biàn, zhèng yī biàn de liànxí."
  },
  {
    "STT": 54,
    "CHỮ": "F",
    "CỤM": "犯疑心",
    "PINYIN": "fàn yí xīn",
    "NGHĨA": "指对人或事产生怀疑。 也作“犯疑影”。",
    "SẮP XẾP CÂU": "觉得 / 不太对劲。 / 他 / 对她的行为 / 犯疑心，",
    "ĐÁP ÁN": "他对她的行为犯疑心，觉得不太对劲。",
    "PHIÊN ÂM": "Tā duì tā de xíngwéi fàn yí xīn, juéde bù tài duìjìn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "怀疑别人对他不好。 / 他总是 / 犯疑心，",
    "ĐÁP ÁN": "他总是犯疑心，怀疑别人对他不好。",
    "PHIÊN ÂM": "Tā zǒngshì fàn yí xīn, huáiyí biérén duì tā bù hǎo."
  },
  {
    "STT": 55,
    "CHỮ": "F",
    "CỤM": "放暗箭",
    "PINYIN": "fàng àn jiàn",
    "NGHĨA": "乘人不备，暗中射箭。比喻暗地里施展害人的 手段。也说“射冷箭”、“放冷箭”。",
    "SẮP XẾP CÂU": "有不少天/ 被别人 / 放出来的 / 才是 / 暗箭毁掉的。",
    "ĐÁP ÁN": "有不少天才是被别人放出来的暗箭毁掉的。",
    "PHIÊN ÂM": "Yǒu bù shǎo tiāncái shì bèi biérén fàng chūlái de àn jiàn huǐ diào de."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放暗箭 / 背后 / 在 / 他 / 总是，/ 小人 / 真是个。",
    "ĐÁP ÁN": "他总是在背后放暗箭，真是个小人。",
    "PHIÊN ÂM": "Tā zǒngshì zài bèihòu fàng àn jiàn, zhēnshi gè xiǎorén."
  },
  {
    "STT": 56,
    "CHỮ": "F",
    "CỤM": "放白鸽",
    "PINYIN": "fàng bái gē",
    "NGHĨA": "一种敲诈勒索行为。让已婚女人先去勾引其他男人,然后丈夫出现,对他人进行敲诈勒索。",
    "SẮP XẾP CÂU": "不再争执。 / 他决定 / 放白鸽，",
    "ĐÁP ÁN": "他决定放白鸽，不再争执。",
    "PHIÊN ÂM": "Tā juédìng fàng bái gē, bù zài zhēngzhí."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "没有赴约。 / 他放了我们 / 白鸽，",
    "ĐÁP ÁN": "他放了我们白鸽，没有赴约。",
    "PHIÊN ÂM": "Tā fàng le wǒmen bái gē, méiyǒu fùyuē."
  },
  {
    "STT": 57,
    "CHỮ": "F",
    "CỤM": "放长线",
    "PINYIN": "fàng cháng xiàn",
    "NGHĨA": "比喻做长远打算。 也作“拉长线”。",
    "SẮP XẾP CÂU": "耐心等待。 / 这次投资/ 他决定 / 放长线，",
    "ĐÁP ÁN": "这次投资他决定放长线，耐心等待。",
    "PHIÊN ÂM": "Zhè cì tóuzī tā juédìng fàng cháng xiàn, nàixīn děngdài."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "钓大鱼。 / 这件事需要 / 放长线，",
    "ĐÁP ÁN": "这件事需要放长线，钓大鱼。",
    "PHIÊN ÂM": "Zhè jiàn shì xūyào fàng cháng xiàn, diào dàyú."
  },
  {
    "STT": 58,
    "CHỮ": "F",
    "CỤM": "放大炮",
    "PINYIN": "fàng dà pào",
    "NGHĨA": "比喻说大话。 比喻发表激烈的言词批评或指责人。",
    "SẮP XẾP CÂU": "引起了大家的注意。 / 他在会场上 / 放大炮，",
    "ĐÁP ÁN": "他在会场上放大炮，引起了大家的注意。",
    "PHIÊN ÂM": "Tā zài huìchǎng shàng fàng dà pào, yǐnqǐle dàjiā de zhùyì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "把大家都吓坏了。 / 他一见面就 / 放大炮，",
    "ĐÁP ÁN": "他一见面就放大炮，把大家都吓坏了。",
    "PHIÊN ÂM": "Tā yī jiànmiàn jiù fàng dà pào, bǎ dàjiā dōu xià huàile."
  },
  {
    "STT": 59,
    "CHỮ": "F",
    "CỤM": "放担子",
    "PINYIN": "fàng dàn zi",
    "NGHĨA": "比喻放下担负的职责、任务。",
    "SẮP XẾP CÂU": "承担更多责任。 / 他开始 / 放担子，",
    "ĐÁP ÁN": "他开始放担子，承担更多责任。",
    "PHIÊN ÂM": "Tā kāishǐ fàng dàn zi, chéngdān gèng duō zérèn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "该放担子的时候 / 就放担子。 / 别总扛着担子，",
    "ĐÁP ÁN": "别总扛着担子，该放担子的时候就放担子。",
    "PHIÊN ÂM": "Bié zǒng kángzhe dànzi, gāi fàng dàn zi de shíhòu jiù fàng dànzi."
  },
  {
    "STT": 60,
    "CHỮ": "F",
    "CỤM": "方的的来圆的",
    "PINYIN": "fāng de de lái yuán de",
    "NGHĨA": "指灵活变换做事的方武和手段。",
    "SẮP XẾP CÂU": "不能太急。 / 这件事情 / 需要 / 方的的来圆的，",
    "ĐÁP ÁN": "这件事情需要方的的来圆的，不能太急。",
    "PHIÊN ÂM": "Zhè jiàn shìqíng xūyào fāng de de lái yuán de, bùnéng tài jí."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "方的的来圆的。 / 事情 / 发展总是 / 出乎意料，",
    "ĐÁP ÁN": "事情发展总是出乎意料，方的的来圆的。",
    "PHIÊN ÂM": "Shìqíng fā zhǎn zǒngshì chūhūyìliào, fāng de de lái yuán de."
  },
  {
    "STT": 61,
    "CHỮ": "F",
    "CỤM": "放第一炮",
    "PINYIN": "fàng dì yī pào",
    "NGHĨA": "比喻第一个发言。 也作“放头炮”。",
    "SẮP XẾP CÂU": "开个好头。 / 他决定/ 在这个项目中 / 放第一炮，",
    "ĐÁP ÁN": "他决定在这个项目中放第一炮，开个好头。",
    "PHIÊN ÂM": "Tā juédìng zài zhège xiàngmù zhòng fàng dì yī pào, kāi gè hǎo tóu."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "提出了 / 一个大胆的 / 建议。 / 他 / 在会议上 / 放了第一炮，",
    "ĐÁP ÁN": "他在会议上放了第一炮，提出了一个大胆的建议。",
    "PHIÊN ÂM": "Tā zài huìyì shàng fàng le dì yī pào, tíchūle yīgè dàdǎn de jiànyì."
  },
  {
    "STT": 62,
    "CHỮ": "F",
    "CỤM": "放掉偷金的，捉打偷针的",
    "PINYIN": "fàng diào tōu jīn de, zhuō dǎ tōu zhēn de",
    "NGHĨA": "比喻放掉了主犯、要犯,却抓住犯小错误的人严惩。",
    "SẮP XẾP CÂU": "不公平。 / 他/ 放掉偷金的，捉打偷针的，",
    "ĐÁP ÁN": "他放掉偷金的，捉打偷针的，不公平。",
    "PHIÊN ÂM": "Tā fàng diào tōu jīn de, zhuō dǎ tōu zhēn de, bù gōngpíng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "这 / 个讽刺， / 放掉偷金的，捉打偷针的。/ 真是",
    "ĐÁP ÁN": "这真是个讽刺，放掉偷金的，捉打偷针的。",
    "PHIÊN ÂM": "Zhè zhēnshi gè fěngcì, fàng diào tōu jīn de, zhuō dǎ tōu zhēn de."
  },
  {
    "STT": 63,
    "CHỮ": "F",
    "CỤM": "放个屁都是香的",
    "PINYIN": "fàng ge pì dōu shì xiāng de",
    "NGHĨA": "说到有些人对某人盲目崇拜、巴结。也作“放个屁都拿来当枪扛”、“闻着屁也是香的”。",
    "SẮP XẾP CÂU": "备受宠爱。 / 他在朋友眼里 / 放个屁都是香的，",
    "ĐÁP ÁN": "他在朋友眼里放个屁都是香的，备受宠爱。",
    "PHIÊN ÂM": "Tā zài péngyǒu yǎnlǐ fàng ge pì dōu shì xiāng de, bèishòu chǒng'ài."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放个屁都是香的。 / 他 / 被捧得/ 真是这么高，",
    "ĐÁP ÁN": "他被捧得这么高，放个屁都是香的。",
    "PHIÊN ÂM": "Tā bèi pěng dé zhème gāo, fàng gè pì dōu shì xiāng de."
  },
  {
    "STT": 64,
    "CHỮ": "F",
    "CỤM": "放个屁也要卜一课",
    "PINYIN": "fàng ge pì yě yào bǔ yī kè",
    "NGHĨA": "占卜。讽刺人相信迷信,不管做什么事都要先占卜。",
    "SẮP XẾP CÂU": "无所不至。 / 总是 / 放个屁也要卜一课，",
    "ĐÁP ÁN": "总是放个屁也要卜一课，无所不至。",
    "PHIÊN ÂM": "Zǒngshì fàng ge pì yě yào bǔ yī kè, wú suǒ bù zhì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "他 / 放个屁也要卜一课。/ 过于 / 做事 / 谨慎，",
    "ĐÁP ÁN": "他做事过于谨慎，放个屁也要卜一课。",
    "PHIÊN ÂM": "Tā zuòshì guòyú jǐnshèn, fàng gè pì yě yào bǔ yī kè."
  },
  {
    "STT": 65,
    "CHỮ": "F",
    "CỤM": "放个屁也有人管",
    "PINYIN": "fàng ge pì yě yǒu rén guǎn",
    "NGHĨA": "形容被管束得很死,没有一点自由。",
    "SẮP XẾP CÂU": "很烦。 / 他觉得 / 放个屁也有人管，",
    "ĐÁP ÁN": "他觉得放个屁也有人管，很烦。",
    "PHIÊN ÂM": "Tā juéde fàng ge pì yě yǒu rén guǎn, hěn fán."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "在这个地方， / 放个屁也有人管。 / 连",
    "ĐÁP ÁN": "在这个地方，连放个屁也有人管。",
    "PHIÊN ÂM": "Zài zhè ge dì fāng, lián fàng gè pì yě yǒu rén guǎn."
  },
  {
    "STT": 66,
    "CHỮ": "F",
    "CỤM": "放个屁，就知道要拉啥屎",
    "PINYIN": "fàng ge pì, jiù zhī dào yào lā shá shǐ",
    "NGHĨA": "形容对某人非常熟悉和了解。",
    "SẮP XẾP CÂU": "真是聪明。 / 他放个屁， / 就知道要拉啥屎，",
    "ĐÁP ÁN": "他放个屁，就知道要拉啥屎，真是聪明。",
    "PHIÊN ÂM": "Tā fàng ge pì, jiù zhī dào yào lā shá shǐ, zhēnshi cōngmíng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "他 / 都/ 说话做事/ 太直接了， / 放个屁，就知道要拉啥屎。",
    "ĐÁP ÁN": "他说话做事都太直接了，放个屁，就知道要拉啥屎。",
    "PHIÊN ÂM": "Tā shuōhuà zuòshì dōu tài zhíjiēle, fàng gè pì, jiù zhī dào yào lā shá shǐ."
  },
  {
    "STT": 67,
    "CHỮ": "F",
    "CỤM": "放隔山炮",
    "PINYIN": "fàng gé shān pào",
    "NGHĨA": "比喻不直接出面攻击,而是间接抨击对方。",
    "SẮP XẾP CÂU": "难以实现。 / 他的计划就像 / 放隔山炮，",
    "ĐÁP ÁN": "他的计划就像放隔山炮，难以实现。",
    "PHIÊN ÂM": "Tā de jìhuà jiù xiàng fàng gé shān pào, nányǐ shíxiàn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "根本 / 没说到点子上。 / 他隔山打牛， / 放隔山炮，",
    "ĐÁP ÁN": "他隔山打牛，放隔山炮，根本没说到点子上。",
    "PHIÊN ÂM": "Tā géshāndǎniú, fàng gé shān pào, gēnběn méi shuō dào diǎnzi shàng."
  },
  {
    "STT": 68,
    "CHỮ": "F",
    "CỤM": "放狗屁",
    "PINYIN": "fàng gǒupì",
    "NGHĨA": "斥责人说话不讲道理或歪曲事实。也作“放臭狗屁”、“放顶门屁”。",
    "SẮP XẾP CÂU": "说一些无聊的话。 / 他在那儿 / 放狗屁，",
    "ĐÁP ÁN": "他在那儿放狗屁，说一些无聊的话。",
    "PHIÊN ÂM": "Tā zài nàr fàng gǒu pì, shuō yīxiē wúliáo de huà."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "根本不可信。 / 他说的 / 那些话都是 / 放狗屁，",
    "ĐÁP ÁN": "他说的那些话都是放狗屁，根本不可信。",
    "PHIÊN ÂM": "Tā shuō de nàxiē huà dōu shì fàng gǒupì, gēnběn bùkě xìn."
  },
  {
    "STT": 69,
    "CHỮ": "F",
    "CỤM": "放火白烧身",
    "PINYIN": "fàng huǒ bái shāo shēn",
    "NGHĨA": "比喻本想害别人,谁知害人不成反害己。",
    "SẮP XẾP CÂU": "放火白烧身。 / 他做事情/ 太冒险，",
    "ĐÁP ÁN": "他做事情太冒险，放火白烧身。",
    "PHIÊN ÂM": "Tā zuò shìqíng tài màoxiǎn, fàng huǒ bái shāo shēn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放火白烧身。 / 他 / 自作自受，",
    "ĐÁP ÁN": "他自作自受，放火白烧身。",
    "PHIÊN ÂM": "Tā zìzuòzìshòu, fàng huǒ bái shāo shēn."
  },
  {
    "STT": 70,
    "CHỮ": "F",
    "CỤM": "放近路不走，偏要绕远",
    "PINYIN": "fàng jìn lù bù zǒu, piān yào rào yuǎn",
    "NGHĨA": "比喻有现成的条件不利用,偏去另找门路。",
    "SẮP XẾP CÂU": "麻烦。/ 真是/ 放近路不走，偏要绕远，",
    "ĐÁP ÁN": "放近路不走，偏要绕远，真是麻烦。",
    "PHIÊN ÂM": "Fàng jìn lù bù zǒu, piān yào rào yuǎn, zhēnshi máfan."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "偏要绕远。 / 他做事/ 总是/ 喜欢绕弯子， / 放近路不走，",
    "ĐÁP ÁN": "他做事总是喜欢绕弯子，放近路不走，偏要绕远。",
    "PHIÊN ÂM": "Tā zuòshì zǒngshì xǐhuān ràowānzi, fàng jìn lù bù zǒu, piān yào rào yuǎn."
  },
  {
    "STT": 71,
    "CHỮ": "F",
    "CỤM": "放开脸皮",
    "PINYIN": "fàng kāi liǎn pí",
    "NGHĨA": "指做事不怕难为情。",
    "SẮP XẾP CÂU": "道歉了。 / 向大家 / 放开脸皮， / 他终于",
    "ĐÁP ÁN": "他终于放开脸皮，向大家道歉了。",
    "PHIÊN ÂM": "Tā zhōngyú fàng kāi liǎn pí, xiàng dàjiā dàoqiànle."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "他不得不 / 放开脸皮 / 去求人。 / 为了完成任务，",
    "ĐÁP ÁN": "为了完成任务，他不得不放开脸皮去求人。",
    "PHIÊN ÂM": "Wèile wánchéng rènwù, tā bùdé bù fàng kāi liǎn pí qù qiúrén."
  },
  {
    "STT": 72,
    "CHỮ": "F",
    "CỤM": "放开手脚",
    "PINYIN": "fàng kāi shǒu jiǎo",
    "NGHĨA": "比喻摆脱各种束缚去做事。",
    "SẮP XẾP CÂU": "事情了。 / 自己喜欢的 / 做 / 放开手脚 / 可以 / 现在",
    "ĐÁP ÁN": "现在可以放开手脚做自己喜欢的事情了。",
    "PHIÊN ÂM": "Xiànzài kěyǐ fàng kāi shǒu jiǎo zuò zìjǐ xǐhuān de shìqíngle."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "让他好好 / 干一番事业。 / 给他 / 放开手脚，",
    "ĐÁP ÁN": "给他放开手脚，让他好好干一番事业。",
    "PHIÊN ÂM": "Gěi tā fàng kāi shǒu jiǎo, ràng tā hǎohǎo gàn yī fān shìyè."
  },
  {
    "STT": 73,
    "CHỮ": "F",
    "CỤM": "放空炮",
    "PINYIN": "fàng kōng pào",
    "NGHĨA": "比喻说内容空洞或不能实现的话。",
    "SẮP XẾP CÂU": "领导只顾 / 也没看看 / 放空炮，/ 有多少人 /下面 / 在认真听。",
    "ĐÁP ÁN": "领导只顾放空炮，也没看看下面有多少人在认真听。",
    "PHIÊN ÂM": "Lǐngdǎo zhǐgù fàng kōng pào, yě méi kànkan xiàmiàn yǒu duōshǎo rén zài rènzhēn tīng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "乱放空炮，/要有的/ 放矢，/不要/ 四处伤人。",
    "ĐÁP ÁN": "要有的放矢，不要乱放空炮，四处伤人。",
    "PHIÊN ÂM": "Yào yǒudìfàngshǐ, bùyào luàn fàng kōng pào, sìchù shāng rén."
  },
  {
    "STT": 74,
    "CHỮ": "F",
    "CỤM": "放口风",
    "PINYIN": "fàng kǒufēng",
    "NGHĨA": "指故意把某种消息透露出去。也作“放风声”。",
    "SẮP XẾP CÂU": "一些秘密。 / 透露了 / 放口风， / 在会议上 / 他会",
    "ĐÁP ÁN": "他在会议上放口风，透露了一些秘密。",
    "PHIÊN ÂM": "Tā zài huìyì shàng fàng kǒu fēng, tòulùle yīxiē mìmì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "暗示他要辞职了。 / 他悄悄地 / 放口风，",
    "ĐÁP ÁN": "他悄悄地放口风，暗示他要辞职了。",
    "PHIÊN ÂM": "Tā qiāoqiāo de fàng kǒu fēng, ànshì tā yào cízhíle."
  },
  {
    "STT": 75,
    "CHỮ": "F",
    "CỤM": "放了屁儿使千掩",
    "PINYIN": "fàng le pìr shǐ qiān yǎn",
    "NGHĨA": "见“屁出了掩臀”。",
    "SẮP XẾP CÂU": "大笑。 / 哈哈 / 大家 / 引得 / 他放了屁儿使千掩，",
    "ĐÁP ÁN": "他放了屁儿使千掩，引得大家哈哈大笑。",
    "PHIÊN ÂM": "Tā fàng le pìr shǐ qiān yǎn, yǐn de dàjiā hāhā dàxiào."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放了屁儿使千掩。 / 他做了错事， / 就想方设法掩盖，",
    "ĐÁP ÁN": "他做了错事，就想方设法掩盖，放了屁儿使千掩。",
    "PHIÊN ÂM": "Tā zuòle cuòshì, jiù xiǎngfāngshèfǎ yǎngài, fàng le pìr shǐ qiān yǎn."
  },
  {
    "STT": 76,
    "CHỮ": "F",
    "CỤM": "放冷风",
    "PINYIN": "fàng lěng fēng",
    "NGHĨA": "见“吹冷风”。",
    "SẮP XẾP CÂU": "不适。 / 让人感到 / 放冷风， / 总是 / 这个地方",
    "ĐÁP ÁN": "这个地方总是放冷风，让人感到不适。",
    "PHIÊN ÂM": "Zhège dìfāng zǒngshì fàng lěng fēng, ràng rén gǎndào bùshì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "暗示要裁员了。 / 公司 / 放冷风，",
    "ĐÁP ÁN": "公司放冷风，暗示要裁员了。",
    "PHIÊN ÂM": "Gōngsī fàng lěng fēng, ànshì yào cáiyuánle."
  },
  {
    "STT": 77,
    "CHỮ": "F",
    "CỤM": "放了屁儿，却使千掩",
    "PINYIN": "fàng le pìr, què shǐ qiān yǎn",
    "NGHĨA": "见“屁出了掩臀”。",
    "SẮP XẾP CÂU": "很尴尬。 / 这句话 / 让人觉得 / 放了屁儿，却使千掩，",
    "ĐÁP ÁN": "这句话放了屁儿，却使千掩，让人觉得很尴尬。",
    "PHIÊN ÂM": "Zhè jù huà fàng le pìr, què shǐ qiān yǎn, ràng rén juéde hěn gāngà."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "企图蒙混过关。 / 他偷偷拿了公司的钱， / 放了屁儿，却使千掩，",
    "ĐÁP ÁN": "他偷偷拿了公司的钱，放了屁儿，却使千掩，企图蒙混过关。",
    "PHIÊN ÂM": "Tā tōutōu nále gōngsī de qián, fàng le pìr, què shǐ qiān yǎn, qìtú ménghùn guòguān."
  },
  {
    "STT": 78,
    "CHỮ": "F",
    "CỤM": "放冷箭",
    "PINYIN": "fàng lěng jiàn",
    "NGHĨA": "原指趁人不备暗放一箭。比喻用言语或行为暗中伤人。 也作“射冷箭”。",
    "SẮP XẾP CÂU": "防不胜防。 / 让人 / 放冷箭， / 他在背后",
    "ĐÁP ÁN": "他在背后放冷箭，让人防不胜防。",
    "PHIÊN ÂM": "Tā zài bèihòu fàng lěng jiàn, ràng rén fáng bù shèng fáng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "陷害同事。 / 他暗地里 / 放冷箭，",
    "ĐÁP ÁN": "他暗地里放冷箭，陷害同事。",
    "PHIÊN ÂM": "Tā àndìli fàng lěng jiàn, xiànhài tóngshì."
  },
  {
    "STT": 79,
    "CHỮ": "F",
    "CỤM": "放冷炮",
    "PINYIN": "fàng lěng pào",
    "NGHĨA": "比喻说话或做事出人意料。",
    "SẮP XẾP CÂU": "无济于事。 / 也 / 放冷炮 / 事情没那么简单，",
    "ĐÁP ÁN": "事情没那么简单，放冷炮也无济于事。",
    "PHIÊN ÂM": "Shìqíng méi nàme jiǎndān, fàng lěng pào yě wújìyúshì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放了个冷炮。 / 他的玩笑 / 一点也不好笑，",
    "ĐÁP ÁN": "他的玩笑一点也不好笑，放了个冷炮。",
    "PHIÊN ÂM": "Tā de wánxiào yīdiǎn yě bù hǎoxiào, fàng le gè lěng pào."
  },
  {
    "STT": 80,
    "CHỮ": "F",
    "CỤM": "放冷枪",
    "PINYIN": "fàng lěng qiāng",
    "NGHĨA": "比喻说冷言冷语打击别人。",
    "SẮP XẾP CÂU": "不舒服。 / 让人觉得 / 在放冷枪， / 她总是",
    "ĐÁP ÁN": "她总是在放冷枪，让人觉得不舒服。",
    "PHIÊN ÂM": "Tā zǒngshì zài fàng lěng qiāng, ràng rén juéde bù shūfú."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "批评了我的工作。 / 他突然 / 放冷枪，",
    "ĐÁP ÁN": "他突然放冷枪，批评了我的工作。",
    "PHIÊN ÂM": "Tā túrán fàng lěng qiāng, pīpíngle wǒ de gōngzuò."
  },
  {
    "STT": 81,
    "CHỮ": "F",
    "CỤM": "方离狼窝，又逢虎口",
    "PINYIN": "fāng lí láng wō, yòu féng hǔ kǒu",
    "NGHĨA": "喻指刚逃离一处险境,又陷入另一危险当中。",
    "SẮP XẾP CÂU": "太危险了。 / 方离狼窝，又逢虎口， / 真是 / 这次选择",
    "ĐÁP ÁN": "这次选择真是方离狼窝，又逢虎口，太危险了。",
    "PHIÊN ÂM": "Zhè cì xuǎnzé zhēnshi fāng lí láng wō, yòu féng hǔkǒu, tài wéixiǎnle."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "又逢虎口。 / 他刚逃离险境， / 又陷入另一个困境， / 方离狼窝，",
    "ĐÁP ÁN": "他刚逃离险境，又陷入另一个困境，方离狼窝，又逢虎口。",
    "PHIÊN ÂM": "Tā gāng táolí xiǎnjìng, yòu xiànrù lìng yīgè kùnjìng, fāng lí láng wō, yòu féng hǔ kǒu."
  },
  {
    "STT": 82,
    "CHỮ": "F",
    "CỤM": "放连珠炮",
    "PINYIN": "fàng lián zhū pào",
    "NGHĨA": "形容说话话中音急促而不晰。",
    "SẮP XẾP CÂU": "说个不停。 / 他的发言 / 放连珠炮， / 就像",
    "ĐÁP ÁN": "他的发言就像放连珠炮，说个不停。",
    "PHIÊN ÂM": "Tā de fāyán jiù xiàng fàng lián zhū pào, shuō ge bù tíng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "像放连珠炮一样。 / 他滔滔不绝地说话，",
    "ĐÁP ÁN": "他滔滔不绝地说话，像放连珠炮一样。",
    "PHIÊN ÂM": "Tā tāotāo bù jué de shuōhuà, xiàng fàng liánzhūpào yīyàng."
  },
  {
    "STT": 83,
    "CHỮ": "F",
    "CỤM": "放马后炮",
    "PINYIN": "fàng mǎ hòu pào",
    "NGHĨA": "马后炮:象棋术语,比喻不及时的行动。 比喻事过之后才出主意或采取行动。",
    "SẮP XẾP CÂU": "的做法 / 让大家 / 他 / 失望。 / 放马后炮",
    "ĐÁP ÁN": "他放马后炮的做法让大家失望。",
    "PHIÊN ÂM": "Tā fàng mǎ hòu pào de zuòfǎ ràng dàjiā shīwàng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "事后才发表意见。 / 他总是 / 放马后炮，",
    "ĐÁP ÁN": "他总是放马后炮，事后才发表意见。",
    "PHIÊN ÂM": "Tā zǒngshì fàng mǎ hòu pào, shìhòu cái fābiǎo yìjiàn."
  },
  {
    "STT": 84,
    "CHỮ": "F",
    "CỤM": "放屁都不会放个响的",
    "PINYIN": "fàng pì dōu bù huì fàng gè xiǎng de",
    "NGHĨA": "讽刺人不会说话或说话说不到点上。",
    "SẮP XẾP CÂU": "就是 / 他的性格 / 放屁都不会放个响的。",
    "ĐÁP ÁN": "他的性格就是放屁都不会放个响的。",
    "PHIÊN ÂM": "Tā de xìnggé jiùshì fàngpì dōu bù huì fàng ge xiǎng de."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放屁都不会放个响的。 / 他胆小怕事，",
    "ĐÁP ÁN": "他胆小怕事，放屁都不会放个响的。",
    "PHIÊN ÂM": "Tā dǎnxiǎo pàshì, fàng pì dōu bù huì fàng gè xiǎng de."
  },
  {
    "STT": 85,
    "CHỮ": "F",
    "CỤM": "放屁怕闪了腰",
    "PINYIN": "fàng pì pà shǎn le yāo",
    "NGHĨA": "闪:指因动作过猛,使身体肌肉受伤而疼痛。 形容人太娇气,干活时不堪出一点儿力气。",
    "SẮP XẾP CÂU": "小心翼翼的，/ 他说话 / 放屁怕闪了腰。",
    "ĐÁP ÁN": "他说话小心翼翼的，放屁怕闪了腰。",
    "PHIÊN ÂM": "Tā shuōhuà xiǎoxīn yìyì de, fàng pì pà shǎn le yāo."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放屁怕闪了腰。 / 他 / 做事 / 小心翼翼，",
    "ĐÁP ÁN": "他做事小心翼翼，放屁怕闪了腰。",
    "PHIÊN ÂM": "Tā zuòshì xiǎoxīn yìyì, fàng pì pà shǎn le yāo."
  },
  {
    "STT": 86,
    "CHỮ": "F",
    "CỤM": "放屁咬牙，拉屎攒拳头",
    "PINYIN": "fàng pì yǎo yá, lā shǐ zǎn quán tou",
    "NGHĨA": "捏紧。形容人心狠手辣。",
    "SẮP XẾP CÂU": "放屁咬牙，拉屎攥拳头。 / 生活 / 不易，",
    "ĐÁP ÁN": "生活不易，放屁咬牙，拉屎攒拳头。",
    "PHIÊN ÂM": "Shēnghuó bùyì, fàng pì yǎo yá, lāshǐ zǎn quántóu."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "拉屎攒拳头。 / 他做事总是憋着劲儿， / 放屁咬牙，",
    "ĐÁP ÁN": "他做事总是憋着劲儿，放屁咬牙，拉屎攒拳头。",
    "PHIÊN ÂM": "Tā zuòshì zǒngshì biēzhe jìnr, fàng pì yǎo yá, lās hǐ zǎn quán tóu."
  },
  {
    "STT": 87,
    "CHỮ": "F",
    "CỤM": "放屁也怕砸了脚后跟",
    "PINYIN": "fàng pì yě pà zá le jiǎo hòu gēn",
    "NGHĨA": "讽刺人过于小心谨慎。",
    "SẮP XẾP CÂU": "真是 / 生怕出错， / 放屁也怕砸了脚后跟。 / 老板让他发个公告， / 他改了五六遍，",
    "ĐÁP ÁN": "老板让他发个公告，他改了五六遍，生怕出错，真是放屁也怕砸了脚后跟。",
    "PHIÊN ÂM": "Lǎobǎn ràng tā fā ge gōng gào, tā gǎile wǔliù biàn, shēngpà chūcuò, zhēnshi fàng pì yě pà zá le jiǎo hòu gēn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放屁也怕砸了脚后跟。 / 他说话做事都非常谨慎，",
    "ĐÁP ÁN": "他说话做事都非常谨慎，放屁也怕砸了脚后跟。",
    "PHIÊN ÂM": "Tā shuōhuà zuòshì dōu fēicháng jǐnshèn, fàng pì yě pà zá le jiǎo hòu gēn."
  },
  {
    "STT": 88,
    "CHỮ": "F",
    "CỤM": "放屁砸了脚后跟",
    "PINYIN": "fàng pì zá le jiǎo hòu gēn",
    "NGHĨA": "形容运气差到极点,做什么都不顺。",
    "SẮP XẾP CÂU": "小心翼翼。 / 放屁怕砸了脚后跟，/他说话总是 /",
    "ĐÁP ÁN": "他说话总是放屁怕砸了脚后跟，小心翼翼。",
    "PHIÊN ÂM": "Tā shuōhuà zǒngshì fàng pì pà zá le jiǎo hòu gēn, xiǎoxīn yìyì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "结果放屁砸了脚后跟。 / 他说话做事太冲动，",
    "ĐÁP ÁN": "他说话做事太冲动，结果放屁砸了脚后跟。",
    "PHIÊN ÂM": "Tā shuōhuà zuòshì tài chōngdòng, jiéguǒ fàng pì zá le jiǎo hòu gēn."
  },
  {
    "STT": 89,
    "CHỮ": "F",
    "CỤM": "放水火",
    "PINYIN": "fàng shuǐ huǒ",
    "NGHĨA": "指监狱中放犯人去大小便。",
    "SẮP XẾP CÂU": "损失严重。 / 这次火灾 / 放水火，",
    "ĐÁP ÁN": "这次火灾放水火，损失严重。",
    "PHIÊN ÂM": "Zhè cì huǒzāi fàng shuǐ huǒ, sǔnshī yánzhòng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "裁判明显 / 放水火。 / 这场比赛，",
    "ĐÁP ÁN": "这场比赛，裁判明显放水火。",
    "PHIÊN ÂM": "Zhè chǎng bǐsài, cáipàn míngxiǎn fàng shuǐ huǒ."
  },
  {
    "STT": 90,
    "CHỮ": "F",
    "CỤM": "放秃尾巴鹰",
    "PINYIN": "fàng tū wěi ba yīng",
    "NGHĨA": "比喻东西放出去却收不回来。",
    "SẮP XẾP CÂU": "不务正业。 / 他 / 放秃尾巴鹰，",
    "ĐÁP ÁN": "他放秃尾巴鹰，不务正业。",
    "PHIÊN ÂM": "Tā fàng tū wěi ba yīng, bùwùzhèngyè."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "故意说一些模棱两可的话。 / 他 / 放秃尾巴鹰，",
    "ĐÁP ÁN": "他放秃尾巴鹰，故意说一些模棱两可的话。",
    "PHIÊN ÂM": "Tā fàng tū wěi bā yīng, gùyì shuō yīxiē móléngliǎngkě de huà."
  },
  {
    "STT": 91,
    "CHỮ": "F",
    "CỤM": "放完了始口不要和尚",
    "PINYIN": "fàng wán le shǐ kǒu bù yào hé shang",
    "NGHĨA": "比喻东西放出去却收不回来。",
    "SẮP XẾP CÂU": "不要和尚， / 他发誓 / 绝不再犯。 / 放了始口",
    "ĐÁP ÁN": "他发誓放完了始口不要和尚，绝不再犯。",
    "PHIÊN ÂM": "Tā fāshì fàng wán liǎo shǐ kǒu bù yào hé shang, jué bù zàifàn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "咱们自己庆祝一下吧！ / 工程终于完工了， / 放完了始口不要和尚，",
    "ĐÁP ÁN": "工程终于完工了，放完了始口不要和尚，咱们自己庆祝一下吧！",
    "PHIÊN ÂM": "Gōngchéng zhōngyú wángōngle, fàng wán liǎo shǐ kǒu bù yào hé shang, zánmen zìjǐ qìngzhù yīxià ba!"
  },
  {
    "STT": 92,
    "CHỮ": "F",
    "CỤM": "放卫星",
    "PINYIN": "fàng wèi xīng",
    "NGHĨA": "卫星:指人造卫星。比喻突出的成绩、成就。比喻创造出惊人的、突出的成绩。",
    "SẮP XẾP CÂU": "想要 / 在会议上 / 引起注意。 / 他会 / 放卫星，",
    "ĐÁP ÁN": "他在会议上放卫星，想要引起注意。",
    "PHIÊN ÂM": "Tā zài huìyì shàng fàng wèi xīng, xiǎng yào yǐnqǐ zhùyì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "根本 / 不 / 靠谱。 / 他 / 说的 / 那些 / 话 / 都 / 是 / 放卫星，",
    "ĐÁP ÁN": "他说的那些话都是放卫星，根本不靠谱。",
    "PHIÊN ÂM": "Tā shuō de nàxiē huà dōu shì fàng wèi xīng, gēnběn bù kàopǔ."
  },
  {
    "STT": 93,
    "CHỮ": "F",
    "CỤM": "房无一间，地无一垄",
    "PINYIN": "fáng wú yī jiān, dì wú yī lǒng",
    "NGHĨA": "见“地无一垄,房无一间”。",
    "SẮP XẾP CÂU": "地无一垄， / 生活艰难。 / 他们家 / 房无一间，",
    "ĐÁP ÁN": "们家房无一间，地无一垄，生活艰难。",
    "PHIÊN ÂM": "Men jiā fáng wú yī jiān, dì wú yī lǒng, shēnghuó jiānnán."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "房 / 无 / 一间， / 地 / 无 / 一垄。 / 他 / 家境 / 贫寒，",
    "ĐÁP ÁN": "他家境贫寒，房无一间，地无一垄。",
    "PHIÊN ÂM": "Tā jiājìng pínhán, fáng wú yī jiān, dì wú yī lǒng."
  },
  {
    "STT": 94,
    "CHỮ": "F",
    "CỤM": "放下包袱",
    "PINYIN": "fàng xià bāo fu",
    "NGHĨA": "包袱:用布包起来的包儿。 比喻影响思想或行动的负担。比喻解除影响思想或行动的负担和顾虑。",
    "SẮP XẾP CÂU": "轻松面对 / 他决定 / 生活。 / 放下包袱，",
    "ĐÁP ÁN": "他决定放下包袱，轻松面对生活。",
    "PHIÊN ÂM": "Tā juédìng fàng xià bāo fu, qīngsōng miànduì shēnghuó."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "轻装上阵。 / 他 / 放下 / 包袱，",
    "ĐÁP ÁN": "他放下包袱，轻装上阵。",
    "PHIÊN ÂM": "Tā fàng xià bāo fu, qīngzhuāng shàngzhèn."
  },
  {
    "STT": 95,
    "CHỮ": "F",
    "CỤM": "放下架子",
    "PINYIN": "fàng xià jià zi",
    "NGHĨA": "比喻去掉自高自大、装腔作势的作风。",
    "SẮP XẾP CÂU": "不/ 下岗了，/不行。/ 放下架子",
    "ĐÁP ÁN": "下岗了，不放下架子不行。",
    "PHIÊN ÂM": "Xiàgǎngle, bù fàng xià jià zi bùxíng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "他 / 来向我们 / 能放下架子，/ 咨询吗?",
    "ĐÁP ÁN": "他能放下架子，来向我们咨询吗?",
    "PHIÊN ÂM": "Tā néng fàng xià jià zi, lái xiàng wǒmen zīxún ma?"
  },
  {
    "STT": 96,
    "CHỮ": "F",
    "CỤM": "放下耙儿扫帚",
    "PINYIN": "fàng xià pá er sào zhǒu",
    "NGHĨA": "形容家务繁忙。形容人勤快。也作“丢下饭碗就拿扫帚”。",
    "SẮP XẾP CÂU": "休息一下。 / 他放下耙儿扫帚，",
    "ĐÁP ÁN": "他放下耙儿扫帚，休息一下。",
    "PHIÊN ÂM": "Tā fàng xià pà er sào zhǒu, xiūxí yīxià."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "彻底 / 放下耙儿扫帚。 / 他 / 辞去了 / 工作，",
    "ĐÁP ÁN": "他辞去了工作，彻底放下耙儿扫帚。",
    "PHIÊN ÂM": "Tā cíqùle gōngzuò, chèdǐ fàng xià pà er sào zhǒu."
  },
  {
    "STT": 97,
    "CHỮ": "F",
    "CỤM": "放瞎炮",
    "PINYIN": "fàng xiā pào",
    "NGHĨA": "比喻人说话没有针对性,说不到点子上。",
    "SẮP XẾP CÂU": "说了一些 / 不着边际的话。 / 他在会议上 / 放嘴炮，",
    "ĐÁP ÁN": "他在会议上放瞎炮，说了一些不着边际的话。",
    "PHIÊN ÂM": "Tā zài huìyì shàng fàng xiā pào, shuōle yīxiē bùzháobiānjì de huà."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "胡说八道。 / 他 / 乱放瞎炮，",
    "ĐÁP ÁN": "他乱放瞎炮，胡说八道。",
    "PHIÊN ÂM": "Tā luàn fàng xiā pào, húshuōbādào."
  },
  {
    "STT": 98,
    "CHỮ": "F",
    "CỤM": "放邪火",
    "PINYIN": "fàng xié huǒ",
    "NGHĨA": "比喻不怀好意地从旁挑拨、怂恿别人。也作“点邪火”。",
    "SẮP XẾP CÂU": "让人无奈。 / 他最近 / 放邪火， / 情绪不好，",
    "ĐÁP ÁN": "他最近情绪不好，放邪火，让人无奈。",
    "PHIÊN ÂM": "Tā zuìjìn qíngxù bù hǎo, fàng xié huǒ, ràng rén wúnài."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放邪火。 / 他把怒火 / 发泄在 / 无辜的人身上，",
    "ĐÁP ÁN": "他把怒火发泄在无辜的人身上，放邪火。",
    "PHIÊN ÂM": "Tā bǎ nùhuǒ fāxiè zài wúgū de rén shēnshang, fàng xié huǒ."
  },
  {
    "STT": 99,
    "CHỮ": "F",
    "CỤM": "放鸭子",
    "PINYIN": "fàng yā zi",
    "NGHĨA": "比喻对人不管束,任其自然发展。",
    "SẮP XẾP CÂU": "看着它们 / 游来游去。 / 他在池塘里 / 放鸭子，",
    "ĐÁP ÁN": "他在池塘里放鸭子，看着它们游来游去。",
    "PHIÊN ÂM": "Tā zài chítáng lǐ fàng yā zi, kànzhe tāmen yóu lái yóu qù."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "各自忙自己的事情了。 / 领导不在， / 大家就 / 放鸭子，",
    "ĐÁP ÁN": "领导不在，大家就放鸭子，各自忙自己的事情了。",
    "PHIÊN ÂM": "Lǐngdǎo bùzài, dàjiā jiù fàng yā zi, gèzì máng zìjǐ de shìqíngle."
  },
  {
    "STT": 100,
    "CHỮ": "F",
    "CỤM": "放烟幕弹",
    "PINYIN": "fàng yān mù dàn",
    "NGHĨA": "烟幕弹:爆炸时可以形成烟幕的炮弹或炸弹。比喻制造某种舆论或假相来掩盖真相,蒙蔽他人。也作“放烟雾”。",
    "SẮP XẾP CÂU": "自己的真实意图。 / 掩盖 / 他故意 / 放烟幕弹，",
    "ĐÁP ÁN": "他故意放烟幕弹，掩盖自己的真实意图。",
    "PHIÊN ÂM": "Tā gùyì fàng yān mù dàn, yǎngài zìjǐ de zhēnshí yìtú."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "转移大家的注意力。 / 他 / 放烟幕弹，",
    "ĐÁP ÁN": "他放烟幕弹，转移大家的注意力。",
    "PHIÊN ÂM": "Tā fàng yān mù dàn, zhuǎnyí dàjiā de zhùyì lì."
  },
  {
    "STT": 101,
    "CHỮ": "F",
    "CỤM": "放阎王债",
    "PINYIN": "fàng yán wáng zhài",
    "NGHĨA": "比喻放高利贷进行盘剥。",
    "SẮP XẾP CÂU": "麻烦不断。 / 真是 / 这次借款 / 放阎王债，",
    "ĐÁP ÁN": "这次借款真是放阎王债，麻烦不断。",
    "PHIÊN ÂM": "Zhè cì jièkuǎn zhēnshi fàng yán wáng zhài, máfan bùduàn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "简直是 / 放阎王债。 / 他 / 欠了一屁股债，",
    "ĐÁP ÁN": "他欠了一屁股债，简直是放阎王债。",
    "PHIÊN ÂM": "Tā qiànle yī pìgu zhài, jiǎnzhí shì fàng yán wáng zhài."
  },
  {
    "STT": 102,
    "CHỮ": "F",
    "CỤM": "放野火",
    "PINYIN": "fàng yě huǒ",
    "NGHĨA": "比喻恶意造谣生事,进行破坏活动。",
    "SẮP XẾP CÂU": "场面壮观。 / 秋天的草原上， / 放野火，",
    "ĐÁP ÁN": "秋天的草原上，放野火，场面壮观。",
    "PHIÊN ÂM": "Qiūtiān de cǎoyuán shàng, fàng yě huǒ, chǎngmiàn zhuàngguān."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "迅速蔓延。 / 谣言像 / 野火一样",
    "ĐÁP ÁN": "谣言像野火一样迅速蔓延。",
    "PHIÊN ÂM": "Yáoyán xiàng yě huǒ yīyàng xùnsù mànyán."
  },
  {
    "STT": 103,
    "CHỮ": "F",
    "CỤM": "放野马",
    "PINYIN": "fàng yě mǎ",
    "NGHĨA": "比喻不管束,任其胡闹。",
    "SẮP XẾP CÂU": "追求自由。 / 他决定 / 放野马，",
    "ĐÁP ÁN": "他决定放野马，追求自由。",
    "PHIÊN ÂM": "Tā juédìng fàng yě mǎ, zhuīqiú zìyóu."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "该 / 收收心 / 好好工作了！ / 别老 / 放野马了，",
    "ĐÁP ÁN": "别老放野马了，该收收心好好工作了！",
    "PHIÊN ÂM": "Bié lǎo fàng yě mǎ le, gāi shōu shōuxīn hǎohǎo gōngzuòle!"
  },
  {
    "STT": 104,
    "CHỮ": "F",
    "CỤM": "放一百二十个心",
    "PINYIN": "fàng yī bǎi èr shí gè xīn",
    "NGHĨA": "指完全可以放心,不用有任何的顾虑和担忧。",
    "SẮP XẾP CÂU": "我 / 只要有他在， / 放一百二十个心。",
    "ĐÁP ÁN": "只要有他在，我放一百二十个心。",
    "PHIÊN ÂM": "Zhǐyào yǒu tā zài, wǒ fàng yī bǎi èr shí gè xīn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放一百二十个心吧！ / 这件事 / 你尽管 / 放心，",
    "ĐÁP ÁN": "这件事你尽管放心，放一百二十个心吧！",
    "PHIÊN ÂM": "Zhè jiàn shì nǐ jǐnguǎn fàngxīn, fàng yī bǎi èr shí ge xīn ba!"
  },
  {
    "STT": 105,
    "CHỮ": "F",
    "CỤM": "放一个屁都会晓得",
    "PINYIN": "fàng yī gè pì dōu huì xiǎo de",
    "NGHĨA": "形容消息传得很快。",
    "SẮP XẾP CÂU": "消息灵通。 / 这里的人 / 放一个屁都会晓得，",
    "ĐÁP ÁN": "这里的人放一个屁都会晓得，消息灵通。",
    "PHIÊN ÂM": "Zhè lǐ de rén fàng yī gè pì dū huì xiǎo de, xiāoxī língtōng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "都会晓得。 / 他消息灵通得很， / 放一个屁",
    "ĐÁP ÁN": "他消息灵通得很，放一个屁都会晓得。",
    "PHIÊN ÂM": "Tā xiāoxī língtōng dé hěn, fàng yī gè pì dōu huì xiǎo de."
  },
  {
    "STT": 106,
    "CHỮ": "F",
    "CỤM": "放在脑后",
    "PINYIN": "fàng zài nǎo hòu",
    "NGHĨA": "见“抛在脑后”。",
    "SẮP XẾP CÂU": "不再想起。 / 他把这件事 / 放在脑后，",
    "ĐÁP ÁN": "他把这件事放在脑后，不再想起。",
    "PHIÊN ÂM": "Tā bǎ zhè jiàn shì fàng zài nǎo hòu, bù zài xiǎngqǐ."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "真抱歉！ / 我把你的话 / 放在脑后了，",
    "ĐÁP ÁN": "我把你的话放在脑后了，真抱歉！",
    "PHIÊN ÂM": "Wǒ bǎ nǐ de huà fàng zài nǎo hòu le, zhēn bàoqiàn!"
  },
  {
    "STT": 107,
    "CHỮ": "F",
    "CỤM": "放在手里怕热着，放在地下怕吓着",
    "PINYIN": "fàng zài shǒu lǐ pà rè zhe, fàng zài dì xià pà xià zhe",
    "NGHĨA": "形容对人或物非常爱惜。也作“放在地上怕湿了,放在手上怕跌了”。",
    "SẮP XẾP CÂU": "难以处理。 / 放在地下怕吓着， / 这件事情真是 / 放在手里怕热着，",
    "ĐÁP ÁN": "这件事情真是放在手里怕热着，放在地下怕吓着，难以处理。",
    "PHIÊN ÂM": "Zhè jiàn shìqíng zhēnshi fàng zài shǒu lǐ pà rè zhe, fàng zài dì xià pà xià zhe, nányǐ chǔlǐ."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "放在手里怕热着， / 放在地下怕吓着。 / 她把这个孩子 / 宝贝得不得了，",
    "ĐÁP ÁN": "她把这个孩子宝贝得不得了，放在手里怕热着，放在地下怕吓着。",
    "PHIÊN ÂM": "Tā bǎ zhège háizi bǎobèi dé bùdéliǎo, fàng zài shǒu lǐ pà rè zhe, fàng zài dì xià pà xià zhe."
  },
  {
    "STT": 108,
    "CHỮ": "F",
    "CỤM": "放在眼里",
    "PINYIN": "fàng zài yǎn lǐ",
    "NGHĨA": "指非常看重某人或某物。",
    "SẮP XẾP CÂU": "非常重视。 / 我放在眼里， / 这件事",
    "ĐÁP ÁN": "这件事我放在眼里，非常重视。",
    "PHIÊN ÂM": "Zhè jiàn shì wǒ fàng zài yǎnlǐ, fēicháng zhòngshì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "一直把他 / 放在眼里。 / 领导很重视 / 他的工作，",
    "ĐÁP ÁN": "领导很重视他的工作，一直把他放在眼里。",
    "PHIÊN ÂM": "Lǐngdǎo hěn zhòngshì tā de gōngzuò, yīzhí bǎ tā fàng zài yǎn lǐ."
  },
  {
    "STT": 109,
    "CHỮ": "F",
    "CỤM": "废物点心",
    "PINYIN": "fèi wù diǎn xīn",
    "NGHĨA": "比喻无能、不会办事的人。",
    "SẮP XẾP CÂU": "他是 /老婆说 / 不生气。/ 废物点心，/ 他也",
    "ĐÁP ÁN": "老婆说他是废物点心，他也不生气。",
    "PHIÊN ÂM": "Lǎopó shuō tā shì fèi wù diǎn xīn, tā yě bù shēngqì."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "你 / 这个废物点心，/ 不会做， / 连个饭 / 都 / 不会做 / 拿你没办法！/ 不会做，",
    "ĐÁP ÁN": "你这个废物点心，连个饭都不会做，真拿你没办法！",
    "PHIÊN ÂM": "Nǐ zhège fèi wù diǎn xīn, lián gè fàn dōu bù huì zuò, zhēn ná nǐ méi bànfǎ!"
  },
  {
    "STT": 110,
    "CHỮ": "F",
    "CỤM": "费周折",
    "PINYIN": "fèi zhōu zhé",
    "NGHĨA": "指费力，事情办理的过程不顺利。",
    "SẮP XẾP CÂU": "他的临时住所 / 找到 / 他的住址，/可费了 / 很偏僻，/ 大周折。",
    "ĐÁP ÁN": "他的临时住所很偏僻，找到他的住址，可费了大周折。",
    "PHIÊN ÂM": "Tā de línshí zhùsuǒ hěn piānpì, zhǎodào tā de zhùzhǐ, kě fèi le dà zhōu zhé."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "地下 / 很多周折的，/ 要最后成交，/ 是要费 / 毕竟那时，/ 地下交易不合法。/二手车市场，",
    "ĐÁP ÁN": "地下二手车市场，要最后成交，是要费很多周折的，毕竟那时，地下交易不合法。",
    "PHIÊN ÂM": "Dìxià èrshǒu chē shìchǎng, yào zuìhòu chéngjiāo, shì yào fèi hěnduō zhōu zhé de, bìjìng nà shí, dìxià jiāoyì bù héfǎ."
  },
  {
    "STT": 111,
    "CHỮ": "F",
    "CỤM": "付东流",
    "PINYIN": "fù dōng liú",
    "NGHĨA": "喻指原先拥有的东西没有了。喻指作出的努力毫无作用。",
    "SẮP XẾP CÂU": "但 / 付出了 / 他 / 最终都 / 很多努力，/ 付东流了。",
    "ĐÁP ÁN": "他付出了很多努力，但最终都付东流了。",
    "PHIÊN ÂM": "Tā fùchūle hěnduō nǔlì, dàn zuìzhōng dōu fù dōng liú le."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "辛勤劳作的 / 把 / 成果 / 付东流了。/ 这场雨 / 都",
    "ĐÁP ÁN": "这场雨把辛勤劳作的成果都付东流了。",
    "PHIÊN ÂM": "Zhè chǎng yǔ bǎ xīnqín láozuò de chéngguǒ dōu fù dōng liú le."
  },
  {
    "STT": 112,
    "CHỮ": "F",
    "CỤM": "赴黄泉",
    "PINYIN": "fù huáng quán",
    "NGHĨA": "比喻走向死亡。",
    "SẮP XẾP CÂU": "快赴黄泉的人了，/ 我一个/ 已经 /老头，/ 没什么要求了。",
    "ĐÁP ÁN": "快赴黄泉的人了，我一个老头，已经没什么要求了。",
    "PHIÊN ÂM": "Kuài fù huáng quán de rénle, wǒ yīgè lǎotóu, yǐjīng méishénme yāoqiúle."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "在 / 最终 / 他 / 向前走，/ 没有 / 路上 / 回头，/ 命赴黄泉。/ 犯罪的 / 一直",
    "ĐÁP ÁN": "他在犯罪的路上一直向前走，没有回头，最终命赴黄泉。",
    "PHIÊN ÂM": "Tā zài fànzuì de lùshàng yīzhí xiàng qián zǒu, méiyǒu huítóu, zuìzhōng mìng fù huáng quán."
  },
  {
    "STT": 113,
    "CHỮ": "F",
    "CỤM": "父母之命,媒妁之言。",
    "PINYIN": "fù mǔ zhī mìng, méi shuò zhī yán",
    "NGHĨA": "父母的命令,媒人的介绍。指旧时婚 姻由媒人介绍,父母包办。",
    "SẮP XẾP CÂU": "婚姻 / 是 / 在过去，/ 很多 / 都 / 父母之命，媒妁之言。",
    "ĐÁP ÁN": "在过去，很多婚姻都是父母之命，媒妁之言。",
    "PHIÊN ÂM": "Zài guòqù, hěnduō hūnyīn dōu shì fù mǔ zhī mìng, méi shuò zhī yán."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "但 / 过得 / 幸福。/ 虽然 / 是 / 他们 / 最终 / 还是 / 很 / 父母之命，媒妁之言，",
    "ĐÁP ÁN": "虽然是父母之命，媒妁之言，但他们最终还是过得很幸福。",
    "PHIÊN ÂM": "Suīrán shì fù mǔ zhī mìng, méi shuò zhī yán, dàn tāmen zuìzhōng háishìguò dé hěn xìngfú."
  },
  {
    "STT": 114,
    "CHỮ": "F",
    "CỤM": "服软不服硬",
    "PINYIN": "fú ruǎn bù fú yìng",
    "NGHĨA": "见“吃软不吃硬”。",
    "SẮP XẾP CÂU": "最终 / 他 / 采取了 / 化解了 / 服软不服硬的 / 冲突。/ 策略，",
    "ĐÁP ÁN": "他采取了服软不服硬的策略，最终化解了冲突。",
    "PHIÊN ÂM": "Tā cǎiqǔle fú ruǎn bù fú yìng de cè lüè, zuìzhōng huàjiěle chōngtú."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "不如 / 先 / 局面。/ 与其 / 服软不服硬，/ 稳住 / 硬碰硬，",
    "ĐÁP ÁN": "与其硬碰硬，不如服软不服硬，先稳住局面。",
    "PHIÊN ÂM": "Yǔqí yìngpèngyìng, bùrú fú ruǎn bù fú yìng, xiān wěn zhù júmiàn."
  },
  {
    "STT": 115,
    "CHỮ": "F",
    "CỤM": "浮上水",
    "PINYIN": "fú shàng shuǐ",
    "NGHĨA": "见“凫上水”。",
    "SẮP XẾP CÂU": "终会 / 浮上水面。/ 真相",
    "ĐÁP ÁN": "真相终会浮上水面",
    "PHIÊN ÂM": "Zhēnxiàng zhōng huì fú shàng shuǐ miàn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "秘密 / 还是 / 他的 / 浮上水面了。/ 最终",
    "ĐÁP ÁN": "他的秘密最终还是浮上水面了。",
    "PHIÊN ÂM": "Tā de mìmì zuìzhōng háishì fú shàng shuǐ miànle."
  },
  {
    "STT": 116,
    "CHỮ": "F",
    "CỤM": "斧头打钉钉入木",
    "PINYIN": "fǔ tóu dǎ dìng dīng rù mù",
    "NGHĨA": "斧子敲打钉子,钉子插进木头里。比 喻一级一级向下压。",
    "SẮP XẾP CÂU": "达到了。/ 笨拙，/ 钉 / 还是 / 虽然 / 但 / 目标 / 方法 / 斧头打钉，/ 入木了，",
    "ĐÁP ÁN": "虽然方法笨拙，但斧头打钉，钉还是入木了，目标达到了。",
    "PHIÊN ÂM": "Suīrán fāngfǎ bènzhuō, dàn fǔ tóu dǎ dīng, dīng háishì rù mù le, mùbiāo dádàole."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "就像 / 他的 / 方法 / 虽然 / 粗糙，/ 但 / 最终 / 完成了 / 任务。/ 还是 / 斧头打钉，",
    "ĐÁP ÁN": "他的方法虽然粗糙，但就像斧头打钉入木，最终还是完成了任务。",
    "PHIÊN ÂM": "Tā de fāngfǎ suīrán cūcāo, dàn jiù xiàng fǔ tóu dǎ dìng dīng rù mù, zuìzhōng háishì wánchéngle rènwù."
  },
  {
    "STT": 117,
    "CHỮ": "F",
    "CỤM": "负心郎",
    "PINYIN": "fù xīn láng",
    "NGHĨA": "玩弄爱情、抛弃痴心女子的男人。",
    "SẮP XẾP CÂU": "她对 /感到 / 负心郎 / 那个/非常痛心。",
    "ĐÁP ÁN": "她对那个负心郎感到非常痛心。",
    "PHIÊN ÂM": "Tā duì nàgè fù xīn láng gǎndào fēicháng tòngxīn."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "发达了，/ 可 / 你 / 她 / 对你 / 这么好，/ 一定 / 不能 / 变成 / 以后 / 负心郎。",
    "ĐÁP ÁN": "她对你这么好，你以后发达了，可一定不能变成负心郎。",
    "PHIÊN ÂM": "Tā duì nǐ zhème hǎo, nǐ yǐhòu fādále, kě yīdìng bùnéng biànchéng fù xīn láng."
  },
  {
    "STT": 118,
    "CHỮ": "F",
    "CỤM": "付学费",
    "PINYIN": "fù xué fèi",
    "NGHĨA": "见“交学费”。",
    "SẮP XẾP CÂU": "付出了沉重的学费 / 这次 / 让他 / 投资失败",
    "ĐÁP ÁN": "这次投资失败让他付出了沉重的学费。",
    "PHIÊN ÂM": "Zhè cì tóuzī shībài ràng tā fù chū le chénzhòng de xué fèi."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "付学费的，/ 总是 / 要 / 才能 / 成长。/ 年轻人",
    "ĐÁP ÁN": "年轻人总是要付学费的，才能成长。",
    "PHIÊN ÂM": "Niánqīng rén zǒngshì yào fù xué fèi de, cáinéng chéngzhǎng."
  },
  {
    "STT": 119,
    "CHỮ": "F",
    "CỤM": "扶一把",
    "PINYIN": "fú yī bǎ",
    "NGHĨA": "指在困难或危难时刻给予支持和 帮助。",
    "SẮP XẾP CÂU": "帮他 / 我们 / 扶他一把，/ 渡过难关。/ 让",
    "ĐÁP ÁN": "让我们扶他一把，帮他渡过难关。",
    "PHIÊN ÂM": "Ràng wǒmen fú tā yī bǎ, bāng tā dùguò nánguān."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "我 / 过去 / 赶紧 / 他 / 扶他一把。/ 跌倒了，",
    "ĐÁP ÁN": "他跌倒了，我赶紧过去扶他一把。",
    "PHIÊN ÂM": "Tā diédǎole, wǒ gǎnjǐn guòqù fú tā yī bǎ."
  },
  {
    "STT": 120,
    "CHỮ": "F",
    "CỤM": "父一辈子一辈",
    "PINYIN": "fù yī bèi zǐ yī bèi",
    "NGHĨA": "指好几代人。",
    "SẮP XẾP CÂU": "父一辈，子一辈 / 医生。/ 他们家 / 是 / 都 / 开诊所，",
    "ĐÁP ÁN": "他们家开诊所，父一辈子一辈都是医生",
    "PHIÊN ÂM": "Tāmen jiā kāi zhěnsuǒ, fù yī bèi zǐ yī bèi dōu shì yīshēng."
  },
  {
    "CHỮ": "F",
    "SẮP XẾP CÂU": "是 / 这 / 手艺。/ 传下来的 / 父一辈，子一辈 / 木匠活儿",
    "ĐÁP ÁN": "这木匠活儿是父一辈子一辈传下来的手艺",
    "PHIÊN ÂM": "Zhè mùjiàng huór shì fù yī bèi zǐ yī bèi chuán xiàlái de shǒuyì."
  },
  {
    "STT": 121,
    "CHỮ": "G",
    "CỤM": "干打雷不下雨",
    "PINYIN": "gān dǎ léi bù xià yǔ",
    "NGHĨA": "比喻光说不动。",
    "SẮP XẾP CÂU": "干打雷 / 不下雨。 / 光说不练， / 他",
    "ĐÁP ÁN": "他光说不练，干打雷不下雨。",
    "PHIÊN ÂM": "Tā guāng shuō bù liàn, gān dǎ léi bù xià yǔ."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "怎么还没出发，可不要干打雷不下雨啊。",
    "ĐÁP ÁN": "说好加工资的，没想到干打雷不下雨。",
    "PHIÊN ÂM": "Shuō hǎo jiā gōngzī de, méi xiǎngdào gān dǎ léi bù xià yǔ."
  },
  {
    "STT": 122,
    "CHỮ": "G",
    "CỤM": "干瞪眼",
    "PINYIN": "gān dèng yǎn",
    "NGHĨA": "在一旁着急而又无能为力。",
    "SẮP XẾP CÂU": "无能为力。 / 干瞪眼， / 他只能 / 面对这种情况，",
    "ĐÁP ÁN": "面对这种情况，他只能干瞪眼，无能为力。",
    "PHIÊN ÂM": "Miànduì zhè zhǒng qíngkuàng, tā zhǐ néng gān dèng yǎn, wúnéngwéilì."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "他 / 不知道 /干瞪眼，/对这个问题 / 该怎么解决。",
    "ĐÁP ÁN": "他对这个问题干瞪眼，不知道该怎么解决。",
    "PHIÊN ÂM": "Tā duì zhège wèntí gān dèng yǎn, bù zhīdào gāi zěnme jiějué."
  },
  {
    "STT": 123,
    "CHỮ": "G",
    "CỤM": "赶鸭子上架",
    "PINYIN": "gǎn yā zi shàng jià",
    "NGHĨA": "比喻去做力不从心的事情。",
    "SẮP XẾP CÂU": "强迫他 / 去做。 / 却被赶鸭子上架， / 不会做 / 这个工作， / 他根本",
    "ĐÁP ÁN": "他根本不会做这个工作，却被赶鸭子上架，强迫他去做。",
    "PHIÊN ÂM": "Tā gēnběn bù huì zuò zhège gōngzuò, què bèi gǎn yā zi shàng jià, qiǎngpò tā qù zuò."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "真是 /让我当所长/ 赶鸭子上架 / 啊。",
    "ĐÁP ÁN": "让我当所长真是赶鸭子上架啊。",
    "PHIÊN ÂM": "Ràng wǒ dāng suǒzhǎng zhēnshi gǎn yā zi shàng jià a."
  },
  {
    "STT": 124,
    "CHỮ": "G",
    "CỤM": "告黑状",
    "PINYIN": "gào hēi zhuàng",
    "NGHĨA": "歪曲或捏造事实向权力或检查机构控告别人。也指偷偷在上级面前诬告别人或说别人的坏话。",
    "SẮP XẾP CÂU": "竟然 / 告黑状！ / 陷害别人， / 他为了",
    "ĐÁP ÁN": "他为了陷害别人，竟然告黑状！",
    "PHIÊN ÂM": "Tā wèile xiànhài biérén, jìngrán gào hēi zhuàng!"
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "据说 / 被人告了/ 黑状而 / 他是 / 下台的。",
    "ĐÁP ÁN": "据说他是被人告了黑状而下台的。",
    "PHIÊN ÂM": "Jùshuō tā shì bèi rén gào le hēiz huàng ér xiàtái de."
  },
  {
    "STT": 125,
    "CHỮ": "G",
    "CỤM": "跟风",
    "PINYIN": "gēn fēng",
    "NGHĨA": "追随某种风气或潮流。",
    "SẮP XẾP CÂU": "他就做什么。 / 别人做什么， / 跟风， / 他总是",
    "ĐÁP ÁN": "他总是跟风，别人做什么，他就做什么。",
    "PHIÊN ÂM": "Tā zǒngshì gēn fēng, biérén zuò shénme, tā jiù zuò shénme."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "跟风是 /理性行为。/不/无知的人的",
    "ĐÁP ÁN": "跟风是无知的人的不理性行为。",
    "PHIÊN ÂM": "Gēn fēng shì wúzhī de rén de bù lǐxìng xíngwéi."
  },
  {
    "STT": 126,
    "CHỮ": "G",
    "CỤM": "跟屁虫",
    "PINYIN": "gēn pì chóng",
    "NGHĨA": "比喻总是跟在人身后的人，多指孩子。",
    "SẮP XẾP CÂU": "整天 / 跟着老板。 / 一样， / 像个跟屁虫 / 他",
    "ĐÁP ÁN": "他像个跟屁虫一样，整天跟着老板。",
    "PHIÊN ÂM": "Tā xiàng gè gēn pì chóng yīyàng, zhěng tiān gēnzhe lǎobǎn."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "儿子 /跟屁虫，/ 就像 / 甩不掉。",
    "ĐÁP ÁN": "儿子就像跟屁虫，甩不掉。",
    "PHIÊN ÂM": "Érzi jiù xiàng gēn pì chóng, shuǎi bù diào."
  },
  {
    "STT": 127,
    "CHỮ": "G",
    "CỤM": "狗头军师",
    "PINYIN": "gǒu tóu jūn shī",
    "NGHĨA": "指给别人出坏主意的人。",
    "SẮP XẾP CÂU": "是个 / 狗头军师！ / 总是馊的， / 他出的主意",
    "ĐÁP ÁN": "他出的主意总是馊的，是个狗头军师！",
    "PHIÊN ÂM": "Tā chū de zhǔyì zǒngshì sōu de, shì gè gǒu tóu jūn shī!"
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "哪个 / 给你出的 /“狗头军师”/坏主意?",
    "ĐÁP ÁN": "哪个“狗头军师”给你出的坏主意? 。",
    "PHIÊN ÂM": "Nǎge “gǒu tóu jūn shī” gěi nǐ chū de huài zhǔyì?"
  },
  {
    "STT": 128,
    "CHỮ": "G",
    "CỤM": "狗腿子",
    "PINYIN": "gǒu tuǐ zi",
    "NGHĨA": "指为主子跑腿办事的人。",
    "SẮP XẾP CÂU": "整天 / 拍马屁。 / 狗腿子， / 他是个",
    "ĐÁP ÁN": "他是个狗腿子，整天拍马屁。",
    "PHIÊN ÂM": "Tā shì gè gǒu tuǐ zi, zhěng tiān pāimǎpì."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "他 / 就像 /都替老板做。/ 个狗腿子，/ 什么事/ 在公司里",
    "ĐÁP ÁN": "他在公司里就像个狗腿子，什么事都替老板做。",
    "PHIÊN ÂM": "Tā zài gōngsī lǐ jiù xiàng gè gǒu tuǐ zi, shénme shì dōu tì lǎobǎn zuò."
  },
  {
    "STT": 129,
    "CHỮ": "G",
    "CỤM": "購上不瞒下",
    "PINYIN": "gòu shàng bù mán xià",
    "NGHĨA": "指瞒哄上面的人,不隐瞒下面的人。",
    "SẮP XẾP CÂU": "要公开透明。 / 这件事哟， / 上不瞒下，",
    "ĐÁP ÁN": "这件事购上不瞒下，要公开透明。",
    "PHIÊN ÂM": "Zhè jiàn shì gòu shàng bù mán xià, yào gōngkāi tòumíng."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "两边都骗。 / 他做的事情 / 购上不瞒下，",
    "ĐÁP ÁN": "他做的事情购上不瞒下，两边都骗。",
    "PHIÊN ÂM": "Tā zuò de shìqíng gòu shàng bù mán xià, liǎngbiān dōu piàn."
  },
  {
    "STT": 130,
    "CHỮ": "G",
    "CỤM": "刮地皮",
    "PINYIN": "guā dì pí",
    "NGHĨA": "比喻做官的人搜刮民财。",
    "SẮP XẾP CÂU": "最终 / 受到了 / 法律的制裁。 / 搜刮民脂民膏， / 刮地皮， / 那些贪官污吏，",
    "ĐÁP ÁN": "那些贪官污吏，刮地皮，搜刮民脂民膏，最终受到了法律的制裁。",
    "PHIÊN ÂM": "Nàxiē tānguān wūlì, guā dì pí, sōuguā mínzhī míngāo, zuìzhōng shòudàole fǎlǜ de zhìcái."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "为官三年，/ 不少地皮，/ 群众意见 /他刮了 / 很大。",
    "ĐÁP ÁN": "为官三年，他刮了不少地皮，群众意见很大。",
    "PHIÊN ÂM": "Wéi guān sān nián, tā guā le bù shǎo dì pí, qúnzhòng yìjiàn hěn dà."
  },
  {
    "STT": 131,
    "CHỮ": "G",
    "CỤM": "挂羊头卖狗肉",
    "PINYIN": "guà yáng tóu mài gǒu ròu",
    "NGHĨA": "比喻骗人的买卖。",
    "SẮP XẾP CÂU": "实际 / 产品质量 / 很差。 / 广告宣传得很漂亮， / 挂羊头卖狗肉， / 这家店",
    "ĐÁP ÁN": "这家店挂羊头卖狗肉，广告宣传得很漂亮，实际产品质量很差。",
    "PHIÊN ÂM": "Zhè jiā diàn guà yáng tóu mài gǒu ròu, guǎnggào xuānchuán dé hěn piàoliang, shíjì chǎnpǐn zhìliàng hěn chà."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "你们怎么 / 啊? / 这不是 /挂羊头卖狗肉/ 骗人吗?",
    "ĐÁP ÁN": "你们怎么挂羊头卖狗肉啊? 这不是骗人吗?",
    "PHIÊN ÂM": "Nǐmen zěnme guà yáng tóu mài gǒu ròu a? Zhè bùshì piàn rén ma?"
  },
  {
    "STT": 132,
    "CHỮ": "G",
    "CỤM": "灌米汤",
    "PINYIN": "guàn mǐ tāng",
    "NGHĨA": "比喻用甜言蜜语奉承人迷惑人。",
    "SẮP XẾP CÂU": "敷衍了事。 / 灌米汤， / 他总是",
    "ĐÁP ÁN": "他总是灌米汤，敷衍了事。",
    "PHIÊN ÂM": "Tā zǒngshì guàn mǐ tāng, fūyǎn liǎoshì."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "少给/ 我可不吃 / 我灌米汤，/你 / 你这一套。",
    "ĐÁP ÁN": "你少给我灌米汤，我可不吃你这一套。",
    "PHIÊN ÂM": "Nǐ shǎo gěi wǒ guàn mǐ tāng, wǒ kě bù chī nǐ zhè yī tào."
  },
  {
    "STT": 133,
    "CHỮ": "G",
    "CỤM": "鬼把戏",
    "PINYIN": "guǐ bǎ xì",
    "NGHĨA": "阴险的手段或计策。",
    "SẮP XẾP CÂU": "被识破了。 / 最终还是 / 鬼把戏， / 他耍的那些",
    "ĐÁP ÁN": "他耍的那些鬼把戏，最终还是被识破了。",
    "PHIÊN ÂM": "Tā shuǎ de nàxiē guǐ bǎ xì, zuìzhōng háishì bèi shìpòle."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "鬼把戏 / 我 /少拿/不信邪。/唬我，",
    "ĐÁP ÁN": "少拿鬼把戏唬我，我不信邪。",
    "PHIÊN ÂM": "Shǎo ná guǐ bǎ xì hǔ wǒ, wǒ bù xìnxié."
  },
  {
    "STT": 134,
    "CHỮ": "G",
    "CỤM": "鬼点子",
    "PINYIN": "guǐ diǎn zi",
    "NGHĨA": "比喻坏主意。也可比喻出人意料的好点子。",
    "SẮP XẾP CÂU": "解决了 / 难题。 / 一个鬼点子， / 他想出了",
    "ĐÁP ÁN": "他想出了一个鬼点子，解决了难题。",
    "PHIÊN ÂM": "Tā xiǎng chūle yīgè guǐ diǎn zi, jiějuéle nántí."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "就/ 还 /鬼点子多，/ 有时/ 挺管用。/他",
    "ĐÁP ÁN": "就他鬼点子多，有时还挺管用。",
    "PHIÊN ÂM": "Jiù tā guǐ diǎn zi duō, yǒushí hái tǐng guǎnyòng."
  },
  {
    "STT": 135,
    "CHỮ": "G",
    "CỤM": "鬼门关",
    "PINYIN": "guǐ mén guān",
    "NGHĨA": "迷信传说中的阴阳交界的关口，比喻凶险的地方。",
    "SẮP XẾP CÂU": "九死一生。 / 鬼门关， / 他这次经历了",
    "ĐÁP ÁN": "他这次经历了鬼门关，九死一生。",
    "PHIÊN ÂM": "Tā zhè cì jīnglìle guǐ mén guān, jiǔsǐyīshēng."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "这就是 / 敢/ 传说中的 / 鬼门关，/ 不敢闯?",
    "ĐÁP ÁN": "这就是传说中的鬼门关，敢不敢闯?",
    "PHIÊN ÂM": "Zhè jiùshì chuánshuō zhōng de guǐ mén guān, gǎn bù gǎn chuǎng?"
  },
  {
    "STT": 136,
    "CHỮ": "G",
    "CỤM": "滚刀肉",
    "PINYIN": "gǔn dāo ròu",
    "NGHĨA": "死皮赖脸、很难打发的人。",
    "SẮP XẾP CÂU": "蛮横 / 不讲理。 / 滚刀肉， / 他是个",
    "ĐÁP ÁN": "他是个滚刀肉，蛮横不讲理。",
    "PHIÊN ÂM": "Tā shìgè gǔn dāo ròu, mánhèng bù jiǎnglǐ."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "离他远点，/一块滚刀肉，/打发的。//他是/很难",
    "ĐÁP ÁN": "离他远点，他是一块滚刀肉，很难打发的。",
    "PHIÊN ÂM": "Lí tā yuǎn diǎn, tā shì yīkuài gǔn dāo ròu, hěn nán dǎfā de."
  },
  {
    "STT": 137,
    "CHỮ": "G",
    "CỤM": "锅不动，瓢不响",
    "PINYIN": "guō bù dòng, piáo bù xiǎng",
    "NGHĨA": "没有粮食,不能开锅做饭。形容家庭非常穷困。",
    "SẮP XẾP CÂU": "天上掉馅饼吗？/ 你 / 等着 / 光说不做，/ 做不成！/ 也 / 什么事 / 锅不动，瓢不响，",
    "ĐÁP ÁN": "你光说不做，等着天上掉馅饼吗？锅不动，瓢不响，什么事也做不成！",
    "PHIÊN ÂM": "Guō bù dòng, piáo bù xiǎng, shén me shì yě zuò bù chéng!"
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "不能 / 也 / 必须 / 积极主动，/ 锅不动，瓢不响，/ 要想 / 光等着 / 什么事 / 取得成功，/ 做不成！/ 别人帮忙，",
    "ĐÁP ÁN": "要想取得成功，必须积极主动，不能光等着别人帮忙，锅不动，瓢不响，什么事也做不成！",
    "PHIÊN ÂM": "Yào xiǎng qǔdé chénggōng, bìxū jījí zhǔdòng, bùnéng guāng děngzhe biérén bāngmáng, guō bù dòng, piáo bù xiǎng, shénme shì yě zuò bùchéng!"
  },
  {
    "STT": 138,
    "CHỮ": "G",
    "CỤM": "锅里吃，锅里屙",
    "PINYIN": "guō lǐ chī, guō lǐ ē",
    "NGHĨA": "比喻在自己生活的地方横行霸道或搞破坏。",
    "SẮP XẾP CÂU": "这简直就是 / 锅里吃，锅里屙！/ 他 / 同时，/ 依赖着 / 环境 / 生存，/ 又 / 破坏环境的",
    "ĐÁP ÁN": "他破坏环境的同时，又依赖着环境生存，这简直就是锅里吃，锅里屙！",
    "PHIÊN ÂM": "Tā pòhuài huánjìng de tóngshí, yòu yīlàizhe huánjìng shēngcún, zhè jiǎnzhí jiùshì guō lǐ chī, guō lǐ ē!"
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "迟早会 / 就像 / 这种 / 人，/ 只顾 / 自食其果，/ 锅里吃，锅里屙。/ 不顾 / 长远发展的 / 眼前利益，",
    "ĐÁP ÁN": "这种只顾眼前利益，不顾长远发展的人，迟早会自食其果，就像锅里吃，锅里屙。",
    "PHIÊN ÂM": "Zhè zhǒng zhǐgù yǎnqián lìyì, bùgù chángyuǎn fǎ zhǎn de rén, chízǎo huì zì shí qí guǒ, jiù xiàng guō lǐ chī, guō lǐ ē."
  },
  {
    "STT": 139,
    "CHỮ": "G",
    "CỤM": "过独木桥",
    "PINYIN": "guò dú mù qiáo",
    "NGHĨA": "比喻通过艰难的途径。",
    "SẮP XẾP CÂU": "成千上万的学生 / 都在 / 过高考 / 这座独木桥， / 只有 / 准备最充分的 / 才能成功。",
    "ĐÁP ÁN": "成千上万的学生都在过高考这座独木桥，只有准备最充分的才能成功。",
    "PHIÊN ÂM": "Chéng qiān shàng wàn de xuéshēng dōu zài guò gāokǎo zhè zuò dú mù qiáo, zhǐyǒu zhǔnbèi zuì chōngfèn de cáinéng chénggōng."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "但那些有毅力和好计划的人 / 很多人失败了， / 创业就像过独木桥， / 能够成功。",
    "ĐÁP ÁN": "创业就像过独木桥，很多人失败了，但那些有毅力和好计划的人能够成功。",
    "PHIÊN ÂM": "Chuàngyè jiù xiàng guò dú mù qiáo, hěnduō rén shībàile, dàn nàxiē yǒu yìlì hé hǎo jìhuà de rén nénggòu chénggōng."
  },
  {
    "STT": 140,
    "CHỮ": "G",
    "CỤM": "过鬼门关",
    "PINYIN": "guò guǐ mén guān",
    "NGHĨA": "比喻凶险的地方。指经历磨难或艰险。",
    "SẮP XẾP CÂU": "是个奇迹。 / 差点就 / 他的康复 / 过了鬼门关， / 他病得很重，",
    "ĐÁP ÁN": "他病得很重，差点就过了鬼门关，他的康复是个奇迹。",
    "PHIÊN ÂM": "Tā bìng dé hěn zhòng, chàdiǎn jiùguòle guǐ mén guān, tā de kāngfù shìgè qíjì."
  },
  {
    "CHỮ": "G",
    "SẮP XẾP CÂU": "他真是 / 司机在车祸中 / 死里逃生， / 过了鬼门关。",
    "ĐÁP ÁN": "司机在车祸中死里逃生，他真是过了鬼门关。",
    "PHIÊN ÂM": "Sījī zài chēhuò zhōng sǐlǐtáoshēng, tā zhēnshi guòle guǐ mén guān."
  },
  {
    "STT": 141,
    "CHỮ": "H",
    "CỤM": "哈巴狗",
    "PINYIN": "hǎ ba gǒu",
    "NGHĨA": "指点头哈腰、溜须拍马的人。",
    "SẮP XẾP CÂU": "整天 / 围着领导转。 / 一样， / 像个哈巴狗 / 他",
    "ĐÁP ÁN": "他像个哈巴狗一样，整天围着领导转。",
    "PHIÊN ÂM": "Tā xiàng gè hǎ ba gǒu yīyàng, zhěng tiān wéizhe lǐngdǎo zhuàn."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "最讨厌/我 / 一样的人，/ 这样的 /嘴脸/实在/看着/像“哈巴狗”/不舒服。",
    "ĐÁP ÁN": "我最讨厌像“哈巴狗”一样的人，这样的嘴脸实在看着不舒服。",
    "PHIÊN ÂM": "Wǒ zuì tǎoyàn xiàng “hǎ ba gǒu” yīyàng de rén, zhèyàng de zuǐliǎn shízài kànzhe bù shūfú."
  },
  {
    "STT": 142,
    "CHỮ": "H",
    "CỤM": "喝倒彩",
    "PINYIN": "hè dào cǎi",
    "NGHĨA": "看到别人失误时起哄。",
    "SẮP XẾP CÂU": "要有/ 做艺人，/ 准备。/经常/被人，/喝倒彩的",
    "ĐÁP ÁN": "做艺人，要有经常被人喝倒彩的准备。",
    "PHIÊN ÂM": "Zuò yìrén, yào yǒu jīngcháng bèi rén hè dào cǎi de zhǔnbèi."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "上台 / 一 / 他 / 就 / 被 / 喝倒彩 / 观众 / 尴尬 / 得 / 出话来 / 说不。",
    "ĐÁP ÁN": "他一上台就被观众喝倒彩，尴尬得说不出话来。",
    "PHIÊN ÂM": "Tā yī shàngtái jiù bèi guānzhòng hè dào cǎi, gāngà dé shuō bu chū huà lái."
  },
  {
    "STT": 143,
    "CHỮ": "H",
    "CỤM": "喝黄汤",
    "PINYIN": "hē huáng tāng",
    "NGHĨA": "泛指饮酒，黄汤指黄酒。",
    "SẮP XẾP CÂU": "醉醺醺的。 / 喝黄汤， / 他经常",
    "ĐÁP ÁN": "他经常喝黄汤，醉醺醺的。",
    "PHIÊN ÂM": "Tā jīngcháng hē huáng tāng, zuìxūnxūn de."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "你就知道/ 也不管管 / 喝黄汤，/孩子的/学习。",
    "ĐÁP ÁN": "你就知道喝黄汤，也不管管孩子的学习。",
    "PHIÊN ÂM": "Nǐ jiù zhīdào hē huáng tāng, yě bùguǎn guǎn háizi de xuéxí."
  },
  {
    "STT": 144,
    "CHỮ": "H",
    "CỤM": "和事佬",
    "PINYIN": "hé shì lǎo",
    "NGHĨA": "指调停争端的人，特指无原则地进行调解的人。",
    "SẮP XẾP CÂU": "经常 / 调解 / 别人的矛盾。 / 和事佬， / 他是个",
    "ĐÁP ÁN": "他是个和事佬，经常调解别人的矛盾。",
    "PHIÊN ÂM": "Tā shìgè hé shì lǎo, jīngcháng tiáojiě biérén de máodùn."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "总是/他/ 充当和事佬，/平息。/大家的/矛盾/让",
    "ĐÁP ÁN": "他总是充当和事佬，让大家的矛盾平息。",
    "PHIÊN ÂM": "Tā zǒngshì chōngdāng hé shì lǎo, ràng dàjiā de máodùn píngxī."
  },
  {
    "STT": 145,
    "CHỮ": "H",
    "CỤM": "黑社会",
    "PINYIN": "hēi shè huì",
    "NGHĨA": "从事非法活动( 如走私、贩毒、赌博等) 的场所或组织。",
    "SẮP XẾP CÂU": "黑社会势力。 / 打击 / 警方严厉",
    "ĐÁP ÁN": "警方严厉打击黑社会势力。",
    "PHIÊN ÂM": "Jǐngfāng yánlì dǎjí hēi shè huì shìlì."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "很多/有/黑社会，/国家/包括北欧。",
    "ĐÁP ÁN": "很多国家有黑社会，包括北欧。",
    "PHIÊN ÂM": "Hěnduō guójiā yǒu hēi shè huì, bāokuò Běi'ōu."
  },
  {
    "STT": 146,
    "CHỮ": "H",
    "CỤM": "黑心肠",
    "PINYIN": "hēi xīn cháng",
    "NGHĨA": "比喻用心阴险毒辣。也说“黑心肝”。",
    "SẮP XẾP CÂU": "害了 / 不少人。 / 黑心肠， / 他",
    "ĐÁP ÁN": "他黑心肠，害了不少人。",
    "PHIÊN ÂM": "Tā hēi xīn cháng, hàile bù shǎo rén."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "他/那家餐厅的/用/竟然/过期的/老板黑心肠，/食材。",
    "ĐÁP ÁN": "那家餐厅的老板黑心肠，竟然用过期的食材。",
    "PHIÊN ÂM": "Nà jiā cāntīng de lǎobǎn hēi xīn cháng, jìngrán yòng guòqī de shícái."
  },
  {
    "STT": 147,
    "CHỮ": "H",
    "CỤM": "恨铁不成钢",
    "PINYIN": "hèn tiě bù chéng gāng",
    "NGHĨA": "比喻对人要求严格，希望他更好。",
    "SẮP XẾP CÂU": "恨他 / 学习不努力。 / 恨铁不成钢， / 他对这个学生",
    "ĐÁP ÁN": "他对这个学生恨铁不成钢，恨他学习不努力。",
    "PHIÊN ÂM": "Tā duì zhè ge xuéshēng hèn tiě bù chéng gāng, hèn tā xuéxí bù nǔlì."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "期望很高/压力很大。/孩子的/都/父母 /恨铁不成钢，/对子女",
    "ĐÁP ÁN": "很多父母都对子女期望很高，恨铁不成钢，孩子的压力很大。",
    "PHIÊN ÂM": "Hěnduō fùmǔ dōu duì zǐnǚ qīwàng hěn gāo, hèn tiě bù chéng gāng, háizi de yālì hěn dà."
  },
  {
    "STT": 148,
    "CHỮ": "H",
    "CỤM": "鸿门宴",
    "PINYIN": "hóng mén yàn",
    "NGHĨA": "喻指加害客人的宴会。",
    "SẮP XẾP CÂU": "暗藏杀机。 / 一样， / 就像鸿门宴 / 那次聚会",
    "ĐÁP ÁN": "那次聚会就像鸿门宴一样，暗藏杀机。",
    "PHIÊN ÂM": "Nà cì jùhuì jiù xiàng hóng mén yàn yīyàng, àncáng shājī."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "今晚的/饭局/鸿门宴，/ 不好吃啊。/饭可/可能是",
    "ĐÁP ÁN": "今晚的饭局可能是鸿门宴，饭可不好吃啊。",
    "PHIÊN ÂM": "Jīnwǎn de fànjú kěnéng shì hóng mén yàn, fàn kěbù hǎochī a."
  },
  {
    "STT": 149,
    "CHỮ": "H",
    "CỤM": "红眼病",
    "PINYIN": "hóng yǎn bìng",
    "NGHĨA": "严重嫉妒的情绪。",
    "SẮP XẾP CÂU": "嫉妒 / 别人的成功。 / 红眼病， / 他得了",
    "ĐÁP ÁN": "他得了红眼病，嫉妒别人的成功。",
    "PHIÊN ÂM": "Tā déle hóng yǎn bìng, jídù biérén de chénggōng."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "红眼病，/他对/感到/心里不舒服。/同事的/成功",
    "ĐÁP ÁN": "他对同事的成功感到红眼病，心里不舒服。",
    "PHIÊN ÂM": "Tā duì tóngshì de chénggōng gǎndào hóng yǎn bìng, xīnlǐ bú shūfú."
  },
  {
    "STT": 150,
    "CHỮ": "H",
    "CỤM": "后遗症",
    "PINYIN": "hòu yí zhèng",
    "NGHĨA": "受伤后遗留病症，常指处理不干净，留麻烦。",
    "SẮP XẾP CÂU": "严重的后遗症。 / 给他留下了 / 这次事故",
    "ĐÁP ÁN": "这次事故给他留下了严重的后遗症。",
    "PHIÊN ÂM": "Zhè cì shìgù gěi tā liú xiàle yánzhòng de hòu yí zhèng."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "发热后/他/呆头呆脑的，/怎么/有了/后遗症？/是不是",
    "ĐÁP ÁN": "他发热后怎么呆头呆脑的，是不是有了后遗症?",
    "PHIÊN ÂM": "Tā fārè hòu zěnme dāitóudāinǎo de, shì bùshì yǒule hòu yí zhèng?"
  },
  {
    "STT": 151,
    "CHỮ": "H",
    "CỤM": "狐狸精",
    "PINYIN": "hú lí jīng",
    "NGHĨA": "传说中狐狸变成的精灵，极其狡猾，善于迷惑人。比喻诡计多端，极其狡猾的人， 也说“老狐狸”。也比喻作风轻浮、善于用迷惑手段勾引人的女人，特指勾引、迷惑 男子的女人。",
    "SẮP XẾP CÂU": "失去了 / 理智。 / 迷住了， / 被狐狸精 / 他",
    "ĐÁP ÁN": "他被狐狸精迷住了，失去了理智。",
    "PHIÊN ÂM": "Tā bèi hú lí jīng mí zhùle, shīqùle lǐzhì."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "常用/这个词/ 狐狸精 /来诽谤女人，/有人 /直到今天，/仍然如此。",
    "ĐÁP ÁN": "有人常用狐狸精这个词来诽谤女人，直到今天，仍然如此。",
    "PHIÊN ÂM": "Yǒurén chángyòng hú lí jīng zhège cí lái fěibàng nǚrén, zhídào jīntiān, réngrán rúcǐ."
  },
  {
    "STT": 152,
    "CHỮ": "H",
    "CỤM": "花花肠子",
    "PINYIN": "huā hua cháng zi",
    "NGHĨA": "比喻淫邪的念头或坏主意。",
    "SẮP XẾP CÂU": "鬼点子多。 / 花花肠子， / 他",
    "ĐÁP ÁN": "他花花肠子，鬼点子多。",
    "PHIÊN ÂM": "Tā huā hua cháng zi, guǐdiǎnzi duō."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "他的/都/ 信任他。/花花肠子/让/不敢/很多人/他",
    "ĐÁP ÁN": "他的花花肠子让很多人都不敢信任他。",
    "PHIÊN ÂM": "Tā de huā hua chángzi ràng hěnduō rén dōu bù gǎn xìnrèn tā."
  },
  {
    "STT": 153,
    "CHỮ": "H",
    "CỤM": "花架子",
    "PINYIN": "huā jià zi",
    "NGHĨA": "指只能在舞台上耍的一种架势，看起来虽然很美，但真的打起来却没有什么用处。 比喻表面上好看、而实际上无用的事物或人。",
    "SẮP XẾP CÂU": "根本 / 无法实施。 / 花架子， / 都是 / 他的那些计划",
    "ĐÁP ÁN": "他的那些计划都是花架子，根本无法实施。",
    "PHIÊN ÂM": "Tā de nàxiē jìhuà dōu shì huā jià zi, gēnběn wúfǎ shíshī."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "习武光有/不行，/要有/花架子/扎实的功夫，/抗击打的能力。/也要有",
    "ĐÁP ÁN": "习武光有花架子不行，要有扎实的功夫，也要有抗击打的能力。",
    "PHIÊN ÂM": "Xíwǔ guāng yǒu huā jià zi bùxíng, yào yǒu zhāshi de gōngfū, yě yào yǒu kàng jīdǎ de nénglì."
  },
  {
    "STT": 154,
    "CHỮ": "H",
    "CỤM": "怀鬼胎",
    "PINYIN": "huái guǐ tāi",
    "NGHĨA": "有坏心思。",
    "SẮP XẾP CÂU": "别相信他。 / 怀鬼胎， / 他一定",
    "ĐÁP ÁN": "他一定怀鬼胎，别相信他。",
    "PHIÊN ÂM": "Tā yīdìng huái guǐ tāi, bié xiāngxìn tā."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "鬼头鬼脑的，/怀疑。/让人/他/很/怀了鬼胎，",
    "ĐÁP ÁN": "他怀了鬼胎，鬼头鬼脑的，很让人怀疑。",
    "PHIÊN ÂM": "Tā huái le guǐ tāi, guǐtóuguǐnǎo de, hěn ràng rén huáiyí."
  },
  {
    "STT": 155,
    "CHỮ": "H",
    "CỤM": "黄昏恋",
    "PINYIN": "huáng hūn liàn",
    "NGHĨA": "比喻丧偶或离异的老人再次恋爱。含褒义。",
    "SẮP XẾP CÂU": "相濡以沫。 / 黄昏恋， / 一对儿 / 他们是",
    "ĐÁP ÁN": "他们是一对黄昏恋，相濡以沫。",
    "PHIÊN ÂM": "Tāmen shì yī duì huáng hūn liàn, xiāngrúyǐmò."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "黄昏恋/应该得到/理解和支持。/应该/更多人的/子女的支持，/得到/黄昏恋",
    "ĐÁP ÁN": "黄昏恋应该得到子女的支持，应该得到更多人的理解和支持。",
    "PHIÊN ÂM": "Huáng hūn liàn yīnggāi dédào zǐnǚ de zhīchí, yīnggāi dédào gèng duō rén de lǐjiě hé zhīchí."
  },
  {
    "STT": 156,
    "CHỮ": "H",
    "CỤM": "黄粱梦",
    "PINYIN": "huáng liáng mèng",
    "NGHĨA": "比喻想实现的好事落空或幻想破灭。",
    "SẮP XẾP CÂU": "不可能 / 实现。 / 黄粱梦， / 都是 / 他的那些计划",
    "ĐÁP ÁN": "他的那些计划都是黄粱梦，不可能实现。",
    "PHIÊN ÂM": "Tā de nàxiē jìhuà dōu shì huáng liáng mèng, bù kěnéng shíxiàn."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "对大多数人/只能是/炒股发财/黄粱梦。/指望/来说",
    "ĐÁP ÁN": "指望炒股发财对大多数人来说只能是黄粱梦。",
    "PHIÊN ÂM": "Zhǐwàng chǎogǔ fācái duì dà duōshù rén lái shuō zhǐ néng shì huáng liáng mèng."
  },
  {
    "STT": 157,
    "CHỮ": "H",
    "CỤM": "黄毛丫头",
    "PINYIN": "huáng máo yā tou",
    "NGHĨA": "指年幼的女孩子。含戏谑或轻侮意。",
    "SẮP XẾP CÂU": "不懂事。 / 黄毛丫头， / 她还是个",
    "ĐÁP ÁN": "她还是个黄毛丫头，不懂事。",
    "PHIÊN ÂM": "Tā háishì gè huáng máo yā tou, bù dǒngshì."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "黄毛丫头，/什么？/能懂/走远点！",
    "ĐÁP ÁN": "黄毛丫头，能懂什么? 走远点!",
    "PHIÊN ÂM": "Huáng máo yā tou, néng dǒng shénme? Zǒu yuǎn diǎn!"
  },
  {
    "STT": 158,
    "CHỮ": "H",
    "CỤM": "混世魔王",
    "PINYIN": "hùn shì mó wáng",
    "NGHĨA": "魔王的一种，比喻什么都不怕的人。",
    "SẮP XẾP CÂU": "调皮捣蛋。 / 混世魔王， / 就是个 / 他从小",
    "ĐÁP ÁN": "他从小就是个混世魔王，调皮捣蛋。",
    "PHIÊN ÂM": "Tā cóngxiǎo jiùshì gè hùn shì mó wáng, tiáopí dǎodàn."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "他/混世魔王。/无恶不作，/成了",
    "ĐÁP ÁN": "他无恶不作，成了混世魔王。",
    "PHIÊN ÂM": "Tā wú'èbùzuò, chéngle hùn shì mó wáng."
  },
  {
    "STT": 159,
    "CHỮ": "H",
    "CỤM": "活不见人，死不见尸",
    "PINYIN": "huó bù jiàn rén, sǐ bù jiàn shī",
    "NGHĨA": "见“生不见人,死不见尸”。",
    "SẮP XẾP CÂU": "大事化小，小事化了。/ 他 / 总是 / 和稀泥，",
    "ĐÁP ÁN": "他失踪了很久，活不见人，死不见尸，家人非常担心。",
    "PHIÊN ÂM": "Tā shīzōngle hěnjiǔ, huó bù jiàn rén, sǐ bù jiàn shī, jiārén fēicháng dānxīn."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "这个案件 / 活不见人，死不见尸。/ 扑朔迷离，/ 至今",
    "ĐÁP ÁN": "这个案件扑朔迷离，至今活不见人，死不见尸。",
    "PHIÊN ÂM": "Zhège ànjiàn pūshuòmílí, zhìjīn huó bù jiàn rén, sǐ bù jiàn shī."
  },
  {
    "STT": 160,
    "CHỮ": "H",
    "CỤM": "活打嘴",
    "PINYIN": "huó dǎ zuǐ",
    "NGHĨA": "指刚夸下口,当场就出了丑。指做了有违自己身份的事而出了丑。",
    "SẮP XẾP CÂU": "家人 / 他 / 很久，/ 非常 / 失踪了 / 担心。/ 活不见人，死不见尸，",
    "ĐÁP ÁN": "他活打嘴，辩论起来滔滔不绝。",
    "PHIÊN ÂM": "Tā huó dǎ zuǐ, biànlùn qǐlái tāotāo bù jué."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "三言两语 / 就 / 这个律师 / 说服了 / 活打嘴，/ 法官。",
    "ĐÁP ÁN": "这个律师活打嘴，三言两语就说服了法官。",
    "PHIÊN ÂM": "Zhège lǜshī huó dǎ zuǐ, sānyánliǎngyǔ jiù shuōfúle fǎguān."
  },
  {
    "STT": 161,
    "CHỮ": "H",
    "CỤM": "活得不耐烦",
    "PINYIN": "huó dé bù nài fán",
    "NGHĨA": "斥责人自己找死、惹祸。\r\n\r\n也作“活腻味”。",
    "SẮP XẾP CÂU": "让人 / 他 / 难以 / 分辨 / 巧舌如簧，/ 真假。/ 活的能说死，死的能说活，",
    "ĐÁP ÁN": "他活得不耐烦了，决定辞职去旅行。",
    "PHIÊN ÂM": "Tā huó dé bù nài fánle, juédìng cízhí qù lǚxíng."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "他 / 同样的 / 每天 / 重复 / 工作，/ 活得不耐烦了。",
    "ĐÁP ÁN": "每天重复同样的工作，他活得不耐烦了。",
    "PHIÊN ÂM": "Měitiān chóngfù tóngyàng de gōngzuò, tā huó dé bù nài fán le."
  },
  {
    "STT": 162,
    "CHỮ": "H",
    "CỤM": "活的能说死,死的能说活",
    "PINYIN": "huó de néng shuō sǐ, sǐ de néng shuō huó",
    "NGHĨA": "形容人嘴巴灵活,善于狡辩。",
    "SẮP XẾP CÂU": "辩论起来 / 他 / 滔滔不绝。/ 活打嘴，",
    "ĐÁP ÁN": "他巧舌如簧，活的能说死，死的能说活，让人难以分辨真假。",
    "PHIÊN ÂM": "Tā qiǎoshé rú huáng, huó de néng shuō sǐ, sǐ de néng shuō huó, ràng rén nányǐ fēnbiàn zhēn jiǎ."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "他 / 擅长 / 活的能说死，死的能说活。/ 歪曲事实，",
    "ĐÁP ÁN": "他擅长歪曲事实，活的能说死，死的能说活。",
    "PHIÊN ÂM": "Tā shàncháng wāiqū shìshí, huó de néng shuō sǐ, sǐ de néng shuō huó."
  },
  {
    "STT": 163,
    "CHỮ": "H",
    "CỤM": "活见鬼",
    "PINYIN": "huó jiàn guǐ",
    "NGHĨA": "形容事情离奇,不可思议。",
    "SẮP XẾP CÂU": "决定 / 辞职 / 旅行。/ 他 / 去 / 活得不耐烦了，",
    "ĐÁP ÁN": "活见鬼！他竟然通过了考试！",
    "PHIÊN ÂM": "Huó jiàn guǐ! Tā jìngrán tōngguòle kǎoshì!"
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "这么巧的 / 事情 / 都能 / 发生！/ 活见鬼！",
    "ĐÁP ÁN": "活见鬼！这么巧的事情都能发生！",
    "PHIÊN ÂM": "Huó jiàn guǐ! Zhème qiǎo de shìqíng dōu néng fāshēng!"
  },
  {
    "STT": 164,
    "CHỮ": "H",
    "CỤM": "活雷锋",
    "PINYIN": "huó léi fēng",
    "NGHĨA": "像雷锋一样乐于做好事的人。",
    "SẮP XẾP CÂU": "经常 / 帮助别人。 / 活雷锋， / 她是个",
    "ĐÁP ÁN": "他是个活雷锋，经常帮助别人。",
    "PHIÊN ÂM": "Tā shìgè huó léi Fēng, jīngcháng bāngzhù biérén."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "他/活雷锋，/真是/这样的人/现在/不多了。",
    "ĐÁP ÁN": "他真是活雷锋，这样的人现在不多了。",
    "PHIÊN ÂM": "Tā zhēnshi huó léi fēng, zhèyàng de rén xiànzài bù duōle."
  },
  {
    "STT": 165,
    "CHỮ": "H",
    "CỤM": "活埋人",
    "PINYIN": "huó mái rén",
    "NGHĨA": "比喻毫无缘由地冤枉、陷害人。",
    "SẮP XẾP CÂU": "他 / 竟然 / 活见鬼！/ 通过了 / 考试！",
    "ĐÁP ÁN": "古代战场上，活埋人是残酷的战争手段。",
    "PHIÊN ÂM": "Gǔdài zhànchǎng shàng, huó mái rén shì cánkù de zhànzhēng shǒuduàn."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "一个被 / 悲惨 / 这个故事 / 命运。/ 讲述了 / 活埋人的",
    "ĐÁP ÁN": "这个故事讲述了一个被活埋人的悲惨命运。",
    "PHIÊN ÂM": "Zhège gùshì jiǎngshùle yīgè bèi huó mái rén de bēicǎn mìngyùn."
  },
  {
    "STT": 166,
    "CHỮ": "H",
    "CỤM": "活菩萨",
    "PINYIN": "huó pú sà",
    "NGHĨA": "菩萨，佛教中修行到一定程度、地位，仅次于佛的人。活菩萨是比喻心肠慈善或救人 出苦难的人。",
    "SẮP XẾP CÂU": "经常 / 做好事。 / 活菩萨， / 他是个",
    "ĐÁP ÁN": "她是个活菩萨，经常做好事。",
    "PHIÊN ÂM": "Tā shìgè huó pú sà, jīngcháng zuò hǎoshì."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "她/修行/真是个/活菩萨。/多年了，/慈眉善目，",
    "ĐÁP ÁN": "她修行多年了，慈眉善目，真是个活菩萨。",
    "PHIÊN ÂM": "Tā xiūxíng duōniánle, címéishànmù, zhēnshi gè huó pú sà."
  },
  {
    "STT": 167,
    "CHỮ": "H",
    "CỤM": "活人让尿憋死",
    "PINYIN": "huó rén ràng niào biē sǐ",
    "NGHĨA": "形容人头脑不灵活,面对困难毫无 办法。",
    "SẮP XẾP CÂU": "是 / 古代战场上，/ 残酷的 / 战争手段。/ 活埋人",
    "ĐÁP ÁN": "别磨蹭了，事情拖得越久越麻烦，小心活人让尿憋死！",
    "PHIÊN ÂM": "Bié mócengle, shìqíng tuō dé yuè jiǔ yuè máfan, xiǎoxīn huó rén ràng niào biē sǐ!"
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "结果 / 承担责任，/ 他 / 害怕 / 差点 / 一直 / 拖延 / 处理问题，/ 因为 / 活人让尿憋死。",
    "ĐÁP ÁN": "他因为害怕承担责任，一直拖延处理问题，结果差点活人让尿憋死。",
    "PHIÊN ÂM": "Tā yīnwèi hàipà chéngdān zérèn, yīzhí tuōyán chǔlǐ wèntí, jiéguǒ chàdiǎn huó rén ràng niào biē sǐ."
  },
  {
    "STT": 168,
    "CHỮ": "H",
    "CỤM": "活人往死门上送",
    "PINYIN": "huó rén wǎng sǐ mén shàng sòng",
    "NGHĨA": "指把人放到不利的或没有活路的 环境中。",
    "SẮP XẾP CÂU": "别 / 事情 / 越久越麻烦，/ 磨蹭了，/ 小心 / 拖得 / 活人让尿憋死！",
    "ĐÁP ÁN": "他明知危险，还执意前往，简直是活人往死门上送！",
    "PHIÊN ÂM": "Tā míngzhī wéixiǎn, hái zhíyì qiánwǎng, jiǎnzhí shì huó rén wǎng sǐ mén shàng sòng!"
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "简直是 / 冒险，/ 他 / 屡教不改，/ 一次又一次 / 活人往死门上送！",
    "ĐÁP ÁN": "他屡教不改，一次又一次冒险，简直是活人往死门上送！",
    "PHIÊN ÂM": "Tā lǚjiàobùgǎi, yīcì yòu yīcì màoxiǎn, jiǎnzhí shì huórén wǎng sǐ mén shàng sòng!"
  },
  {
    "STT": 169,
    "CHỮ": "H",
    "CỤM": "和稀泥",
    "PINYIN": "huò xī ní",
    "NGHĨA": "比喻为了化解矛盾、纷争,无原则地调 停或折中。",
    "SẮP XẾP CÂU": "小事化了。 / 大事化小， / 和稀泥， / 他总是",
    "ĐÁP ÁN": "他总是和稀泥，大事化小，小事化了。",
    "PHIÊN ÂM": "Tā zǒngshì huò xī ní, dàshì huà xiǎo, xiǎoshì huà liǎo."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "领导/所以/不想/解决/什么问题，/和/起了/在会上/稀泥。",
    "ĐÁP ÁN": "领导不想解决什么问题，所以在会上和起了稀泥。",
    "PHIÊN ÂM": "Lǐngdǎo bùxiǎng jiějué shénme wèntí, suǒyǐ zài huì shàng huò qǐle xī ní."
  },
  {
    "STT": 170,
    "CHỮ": "H",
    "CỤM": "活阎王",
    "PINYIN": "huó yán wɑnɡ",
    "NGHĨA": "比喻残害民众、极其凶恶的人。",
    "SẮP XẾP CÂU": "还 / 简直是 / 他 / 明知 / 危险，/ 执意 / 前往，/ 活人往死门上送！",
    "ĐÁP ÁN": "他是我们单位的活阎王，大家都怕他。",
    "PHIÊN ÂM": "Tā shì wǒmen dānwèi de huó yán wang, dàjiā dōu pà tā."
  },
  {
    "CHỮ": "H",
    "SẮP XẾP CÂU": "人民/那个/被/活阎王/处决了。",
    "ĐÁP ÁN": "那个活阎王被人民处决了。",
    "PHIÊN ÂM": "Nàgè huó yán wáng bèi rénmín chǔjuéle."
  },
  {
    "STT": 171,
    "CHỮ": "J",
    "CỤM": "给点颜色看",
    "PINYIN": "jǐ diǎn yán sè kàn",
    "NGHĨA": "把难看的脸色或做出某种严厉的行动给人看，以示警告或惩罚。",
    "SẮP XẾP CÂU": "得给他点 / 颜色看看！ / 太嚣张了， / 他",
    "ĐÁP ÁN": "他太嚣张了，得给他点颜色看看！",
    "PHIÊN ÂM": "Tā tài xiāozhāngle, děi gěi tā diǎn yán sè kàn kan!"
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "点颜色看看。/ 这孩子 / 太不听话了，/给他",
    "ĐÁP ÁN": "这孩子太不听话了，给他点颜色看看。",
    "PHIÊN ÂM": "Zhè háizi tài bù tīnghuàle, gěi tā diǎn yán sè kàn kan."
  },
  {
    "STT": 172,
    "CHỮ": "J",
    "CỤM": "几斤几两",
    "PINYIN": "jǐ jīn jǐ liǎnɡ",
    "NGHĨA": "比喻底细。",
    "SẮP XẾP CÂU": "我清楚。 / 几斤几两 / 我心里有数， / 他的水平，",
    "ĐÁP ÁN": "他的水平，我心里有数，几斤几两我清楚。",
    "PHIÊN ÂM": "Tā de shuǐpíng, wǒ xīnlí yǒushù, jǐ jīn jǐ liǎng wǒ qīngchǔ."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "一清二楚。/他/有/我/几斤几两，",
    "ĐÁP ÁN": "他有几斤几两，我一清二楚。",
    "PHIÊN ÂM": "Tā yǒu jǐ jīn jǐ liǎng, wǒ yī qīng èr chǔ."
  },
  {
    "STT": 173,
    "CHỮ": "J",
    "CỤM": "机灵鬼",
    "PINYIN": "jī línɡ ɡuǐ",
    "NGHĨA": "很机灵的人。",
    "SẮP XẾP CÂU": "很快。 / 反应 / 机灵鬼， / 他是个",
    "ĐÁP ÁN": "他是个机灵鬼，反应很快。",
    "PHIÊN ÂM": "Tā shìgè jī líng guǐ, fǎnyìng hěn kuài."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "老师/我儿子/机灵鬼，/很喜欢。/是",
    "ĐÁP ÁN": "我儿子是机灵鬼，老师很喜欢。",
    "PHIÊN ÂM": "Wǒ érzi shì jī líng guǐ, lǎoshī hěn xǐhuān."
  },
  {
    "STT": 174,
    "CHỮ": "J",
    "CỤM": "及时雨",
    "PINYIN": "jí shí yǔ",
    "NGHĨA": "正赶上时候、适合需要的人或事。",
    "SẮP XẾP CÂU": "解决了 / 我的燃眉之急。 / 真是及时雨， / 他的帮助",
    "ĐÁP ÁN": "他的帮助真是及时雨，解决了我的燃眉之急。",
    "PHIÊN ÂM": "Tā de bāngzhù zhēnshi jí shí yǔ, jiějuéle wǒ de ránméizhījí."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "真是/到位了，/一场/资金/及时雨。",
    "ĐÁP ÁN": "资金到位了，真是一场及时雨。",
    "PHIÊN ÂM": "Zījīn dàowèile, zhēnshi yī chǎng jí shí yǔ."
  },
  {
    "STT": 175,
    "CHỮ": "J",
    "CỤM": "急先锋",
    "PINYIN": "jí xiān fēnɡ",
    "NGHĨA": "打仗时冲锋在前的人。比喻积极领头的人。",
    "SẮP XẾP CÂU": "冲在前面。 / 做急先锋， / 他总是",
    "ĐÁP ÁN": "他总是做急先锋，冲在前面。",
    "PHIÊN ÂM": "Tā zǒngshì zuò jí xiān fēng, chōng zài qiánmiàn."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "吃亏/急先锋/呀，/冒充什么/你看，/了吧。",
    "ĐÁP ÁN": "冒充什么急先锋呀，你看，吃亏了吧。",
    "PHIÊN ÂM": "Màochōng shénme jí xiān fēng ya, nǐ kàn, chīkuīle ba."
  },
  {
    "STT": 176,
    "CHỮ": "J",
    "CỤM": "挤牙膏",
    "PINYIN": "jǐ yá ɡāo",
    "NGHĨA": "说话不痛快，或施加一点压力，说出一点情况。",
    "SẮP XẾP CÂU": "半天 / 说不出个 / 所以然来。 / 一样， / 像挤牙膏 / 他说话",
    "ĐÁP ÁN": "他说话像挤牙膏一样，半天说不出个所以然来。",
    "PHIÊN ÂM": "Tā shuōhuà xiàng jǐ yá gāo yīyàng, bàntiān shuō bu chū gè suǒyǐrán lái."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "就像/犯罪嫌疑人/情况/吞吞吐吐，/交代/挤牙膏。",
    "ĐÁP ÁN": "犯罪嫌疑人交代情况吞吞吐吐，就像挤牙膏。",
    "PHIÊN ÂM": "Fànzuì xiányírén jiāodài qíngkuàng tūntūntǔtǔ, jiù xiàng jǐ yá gāo."
  },
  {
    "STT": 177,
    "CHỮ": "J",
    "CỤM": "夹生饭",
    "PINYIN": "jiā shēnɡ fàn",
    "NGHĨA": "本意为半生不熟的饭，比喻开始没做好再做也很难做好的事情，或开 头没解决以后也很难解决的问题。",
    "SẮP XẾP CÂU": "还需要 / 改进。 / 做得夹生饭， / 他做这件工作",
    "ĐÁP ÁN": "他做这件工作做得夹生饭，还需要改进。",
    "PHIÊN ÂM": "Tā zuò zhè jiàn gōngzuò zuò dé jiā shēng fàn, hái xūyào gǎijìn."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "你/冒冒失失的，/尽做/去收拾。/些/最后/夹生饭，/还要我",
    "ĐÁP ÁN": "你冒冒失失的，尽做些夹生饭，最后还要我去收拾。",
    "PHIÊN ÂM": "Nǐ màomào shīshī de, jǐn zuò xiē jiā shēng fàn, zuìhòu hái yào wǒ qù shōushí."
  },
  {
    "STT": 178,
    "CHỮ": "J",
    "CỤM": "夹着尾巴做人",
    "PINYIN": "jiā zhe wěi bā zuò rén",
    "NGHĨA": "谨小慎微，不敢轻举妄动的样子。",
    "SẮP XẾP CÂU": "就 / 夹着尾巴 / 做人了。 / 犯了错， / 自从他",
    "ĐÁP ÁN": "自从他犯了错，就夹着尾巴做人了。",
    "PHIÊN ÂM": "Zìcóng tā fàn le cuò, jiù jiā zhe wěi bā zuò rén le."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "在公司/不惹/里，/夹着尾巴做人，/尽量/他/麻烦。",
    "ĐÁP ÁN": "在公司里，他夹着尾巴做人，尽量不惹麻烦。",
    "PHIÊN ÂM": "Zài gōngsī lǐ, tā jiā zhe wěi bā zuò rén, jǐnliàng bù rě máfan."
  },
  {
    "STT": 179,
    "CHỮ": "J",
    "CỤM": "交白卷",
    "PINYIN": "jiāo bái juàn",
    "NGHĨA": "比喻承担的任务一点没完成。",
    "SẮP XẾP CÂU": "交白卷了。 / 考试 / 他",
    "ĐÁP ÁN": "他考试交白卷了。",
    "PHIÊN ÂM": "Tā kǎoshì jiāo bái juàn le."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "不好好/向家长/考试/学习，/交白卷，/怎么/交代呢?",
    "ĐÁP ÁN": "不好好学习，考试交白卷，怎么向家长交代呢?",
    "PHIÊN ÂM": "Bù hǎohǎo xuéxí, kǎoshì jiāo bái juàn, zěnme xiàng jiāzhǎng jiāodài ne?"
  },
  {
    "STT": 180,
    "CHỮ": "J",
    "CỤM": "交红运",
    "PINYIN": "jiāo hónɡ yùn",
    "NGHĨA": "多指遇上涉及名利之类的好事。",
    "SẮP XẾP CÂU": "做什么 / 都很顺利。 / 交红运， / 他最近",
    "ĐÁP ÁN": "他最近交红运，做什么都很顺利。",
    "PHIÊN ÂM": "Tā zuìjìn jiāo hóng yùn, zuò shénme dōu hěn shùnlì."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "他/可是/很快/红运了，/一路/交了/得到提拔，/便/成了/市委书记了。",
    "ĐÁP ÁN": "他可是交了红运了，一路得到提拔，很快便成了市委书记了。",
    "PHIÊN ÂM": "Tā kěshì jiāo le hóng yùn le, yīlù dédào tíbá, hěn kuài biàn chéngle shì wěi shūjìle."
  },
  {
    "STT": 181,
    "CHỮ": "J",
    "CỤM": "叫花子",
    "PINYIN": "jiào huā zi",
    "NGHĨA": "生活没有着落而专靠向人要饭要钱过活的人。也叫“叫化子”。",
    "SẮP XẾP CÂU": "成了个 / 叫花子。 / 沦落街头， / 他",
    "ĐÁP ÁN": "他沦落街头，成了个叫花子。",
    "PHIÊN ÂM": "Tā lúnluò jiētóu, chéngle gè jiào huā zi."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "繁华/着/不少/的城市，/散落/叫花子。",
    "ĐÁP ÁN": "繁华的城市，散落着不少叫花子。",
    "PHIÊN ÂM": "Fánhuá de chéngshì, sànluòzhe bù shǎo jiào huā zi."
  },
  {
    "STT": 182,
    "CHỮ": "J",
    "CỤM": "嚼舌根",
    "PINYIN": "jiáo shé ɡēn",
    "NGHĨA": "比喻说是非，或者说废话。又作“嚼舌头”",
    "SẮP XẾP CÂU": "到处说 / 别人的坏话。 / 嚼舌根， / 她喜欢",
    "ĐÁP ÁN": "她喜欢嚼舌根，到处说别人的坏话。",
    "PHIÊN ÂM": "Tā xǐhuān jiáo shé gēn, dàochù shuō biérén de huàihuà."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "嚼舌根/我/不喜欢/的人。",
    "ĐÁP ÁN": "我不喜欢嚼舌根的人。",
    "PHIÊN ÂM": "Wǒ bù xǐhuān jiáo shé gēn de rén."
  },
  {
    "STT": 183,
    "CHỮ": "J",
    "CỤM": "接班人",
    "PINYIN": "jiē bān rén",
    "NGHĨA": "接替上一级工作的人。比喻接替上一辈继续从事某种事业的人。",
    "SẮP XẾP CÂU": "将来要 / 继承父业。 / 接班人， / 公司的 / 他是",
    "ĐÁP ÁN": "他是公司的接班人，将来要继承父业。",
    "PHIÊN ÂM": "Tā shì gōngsī de jiē bān rén, jiānglái yào jìchéng fùyè."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "接班人。/年轻人/的/社会主义/要做",
    "ĐÁP ÁN": "年轻人要做社会主义的接班人。",
    "PHIÊN ÂM": "Niánqīng rén yào zuò shèhuì zhǔyì de jiē bān rén."
  },
  {
    "STT": 184,
    "CHỮ": "J",
    "CỤM": "揭疮疤",
    "PINYIN": "jiē chuānɡ bā",
    "NGHĨA": "指提及别人的痛处。",
    "SẮP XẾP CÂU": "让人 / 很尴尬。 / 揭人疮疤， / 他",
    "ĐÁP ÁN": "他揭人疮疤，让人很尴尬。",
    "PHIÊN ÂM": "Tā jiē rén chuāng bā, ràng rén hěn gāngà."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "对/是/而言，/揭/正人君子/别人/疮疤/不道德的。",
    "ĐÁP ÁN": "对正人君子而言，揭别人疮疤是不道德的。",
    "PHIÊN ÂM": "Duì zhèngrén jūnzǐ ér yán, jiē biérén chuāng bā shì bù dàodé de."
  },
  {
    "STT": 185,
    "CHỮ": "J",
    "CỤM": "节骨眼",
    "PINYIN": "jié ɡǔ yǎn",
    "NGHĨA": "比喻紧要的、能起决定作用的环节或时机。",
    "SẮP XẾP CÂU": "千万 / 不能出错！ / 节骨眼， / 这正是",
    "ĐÁP ÁN": "这正是节骨眼，千万不能出错！",
    "PHIÊN ÂM": "Zhè zhèng shì jié gǔ yǎn, qiān wàn bùnéng chūcuò!"
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "在这个/必须做出/节骨眼上，/我们/正确的决定。",
    "ĐÁP ÁN": "在这个节骨眼上，我们必须做出正确的决定。",
    "PHIÊN ÂM": "Zài zhège jié gǔ yǎn shàng, wǒmen bìxū zuò chū zhèngquè de juédìng."
  },
  {
    "STT": 186,
    "CHỮ": "J",
    "CỤM": "揭老底",
    "PINYIN": "jiē lǎo dǐ",
    "NGHĨA": "不愿被人知道的内情被揭露。",
    "SẮP XẾP CÂU": "摸老底了。 / 都 / 他的底细 / 他把",
    "ĐÁP ÁN": "他把他的底细都揭老底了。",
    "PHIÊN ÂM": "Tā bǎ tā de dǐxì dōu jiē lǎo dǐ le."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "他/揭老底，/的/让/秘密曝光。/许多人",
    "ĐÁP ÁN": "他揭老底，让许多人的秘密曝光。",
    "PHIÊN ÂM": "Tā jiē lǎo dǐ, ràng xǔduō rén de mìmì pùguāng."
  },
  {
    "STT": 187,
    "CHỮ": "J",
    "CỤM": "揭谜底",
    "PINYIN": "jiē mí dǐ",
    "NGHĨA": "公布谜语的结果。",
    "SẮP XẾP CÂU": "谜底。 / 揭开了 / 他终于",
    "ĐÁP ÁN": "他终于揭开了谜底。",
    "PHIÊN ÂM": "Tā zhōngyú jiē kāi le mí dǐ."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "就要/我/猜不出，/再/揭谜底了。",
    "ĐÁP ÁN": "再猜不出，我就要揭谜底了。",
    "PHIÊN ÂM": "Zài cāi bù chū, wǒ jiù yào jiē mí dǐ le."
  },
  {
    "STT": 188,
    "CHỮ": "J",
    "CỤM": "揭开了脸",
    "PINYIN": "jiēkāi le liǎn",
    "NGHĨA": "指处事不留情面。",
    "SẮP XẾP CÂU": "真实的他。 / 他揭开了脸， / 让大家看到",
    "ĐÁP ÁN": "他揭开了脸，让大家看到真实的他。",
    "PHIÊN ÂM": "Tā jiē kāi le liǎn, ràng dàjiā kàn dào zhēnshí de tā."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "露出了 / 他贪婪的本性。 / 他终于 / 揭开了脸，",
    "ĐÁP ÁN": "他终于揭开了脸，露出了他贪婪的本性。",
    "PHIÊN ÂM": "Tā zhōngyú jiē kāi le liǎn, lùchūle tā tānlán de běnxìng."
  },
  {
    "STT": 189,
    "CHỮ": "J",
    "CỤM": "近视眼",
    "PINYIN": "jìn shì yǎn",
    "NGHĨA": "目光短浅",
    "SẮP XẾP CÂU": "长远发展。 / 不考虑 / 眼前利益， / 只顾 / 近视眼， / 他是个",
    "ĐÁP ÁN": "他是个近视眼，只顾眼前利益，不考虑长远发展。",
    "PHIÊN ÂM": "Tā shìgè jìn shì yǎn, zhǐgù yǎnqián lìyì, bù kǎolǜ chángyuǎn fāzhǎn."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "总是/他/看/近视眼，/做事/不清楚。",
    "ĐÁP ÁN": "他近视眼，做事总是看不清楚。",
    "PHIÊN ÂM": "Tā jìn shì yǎn, zuòshì zǒngshì kàn bù qīngchǔ."
  },
  {
    "STT": 190,
    "CHỮ": "J",
    "CỤM": "救世主",
    "PINYIN": "jiù shì zhǔ",
    "NGHĨA": "比喻拯救别人的人。",
    "SẮP XẾP CÂU": "要 / 拯救世界。 / 救世主， / 自认为是 / 他",
    "ĐÁP ÁN": "他自认为是救世主，要拯救世界。",
    "PHIÊN ÂM": "Tā zì rènwéi shì jiù shì zhǔ, yào zhěngjiù shìjiè."
  },
  {
    "CHỮ": "J",
    "SẮP XẾP CÂU": "一切/没什么/靠我们/救世主，/都/自己。",
    "ĐÁP ÁN": "没什么救世主，一切都靠我们自己。",
    "PHIÊN ÂM": "Méishénme jiù shì zhǔ, yīqiè dōu kào wǒmen zìjǐ."
  },
  {
    "STT": 1,
    "CHỮ": "L",
    "CỤM": "姥姥不疼，舅舅不爱",
    "PINYIN": "lǎo lǎo bù téng, jiù jìu bù ài",
    "NGHĨA": "指无人疼爱、关心。",
    "SẮP XẾP CÂU": "舅舅不爱。 / 总感觉 / 他在家里 / 姥姥不疼，",
    "ĐÁP ÁN": "他在家里总感觉姥姥不疼，舅舅不爱。",
    "PHIÊN ÂM": "Tā zài jiālǐ zǒng gǎnjué lǎo lǎo bù téng, jiù jìu bù ài."
  },
  {
    "STT": 2,
    "SẮP XẾP CÂU": "很苦。 / 他从小 / 姥姥不疼，舅舅不爱，/ 过得",
    "ĐÁP ÁN": "他从小姥姥不疼，舅舅不爱，过得很苦。",
    "PHIÊN ÂM": "Tā cóngxiǎo lǎo lǎo bù téng, jiù jìu bù ài, guò dé hěn kǔ."
  },
  {
    "STT": 3,
    "CHỮ": "L",
    "CỤM": "老天爷睁开眼",
    "PINYIN": "lǎo tiān yé zhēng kāi yǎn",
    "NGHĨA": "见“天开眼”。",
    "SẮP XẾP CÂU": "让事情 / 老天爷睁开眼， / 变得顺利。",
    "ĐÁP ÁN": "老天爷睁开眼，让事情变得顺利。",
    "PHIÊN ÂM": "Lǎo tiān yé zhēng kāi yǎn, ràng shìqing biàndé shùnlì."
  },
  {
    "STT": 4,
    "SẮP XẾP CÂU": "希望/ 让他得到/ 老天爷睁开眼，/ 应有的惩罚！",
    "ĐÁP ÁN": "希望老天爷睁开眼，让他得到应有的惩罚！",
    "PHIÊN ÂM": "Xīwàng lǎo tiān yé zhēng kāi yǎn ràng tā dédào yīngyǒu de chéngfá ！"
  },
  {
    "STT": 5,
    "CHỮ": "L",
    "CỤM": "老鸦嫌猪黑",
    "PINYIN": "lǎo yā xián zhū hēi",
    "NGHĨA": "比喻无视自己的缺点,只知嫌恶他人的毛病。",
    "SẮP XẾP CÂU": "看不起别人。 / 他总是 / 老鸦嫌猪黑，",
    "ĐÁP ÁN": "他总是老鸦嫌猪黑，看不起别人。",
    "PHIÊN ÂM": "Tā zǒng shì lǎo yā xián zhū hēi, kàn bù qǐ bié rén."
  },
  {
    "STT": 6,
    "SẮP XẾP CÂU": "还/ 批评别人。 / 都做得不好，/ 他自己 / 老鸦嫌猪黑，",
    "ĐÁP ÁN": "他自己都做得不好，还老鸦嫌猪黑，批评别人。",
    "PHIÊN ÂM": "Tā zìjǐ dōu zuò de bù hǎo, hái lǎo yā xián zhū hēi, pī píng bié rén."
  },
  {
    "STT": 7,
    "CHỮ": "L",
    "CỤM": "老鸦占了凤凰巢",
    "PINYIN": "lǎo yā zhàn le fèng huáng cháo",
    "NGHĨA": "比喻卑贱者强占了高贵之物。含感累死没人买棺材叹、讥讽之意。",
    "SẮP XẾP CÂU": "不合适。 / 这件事情就像 / 老鸹占了凤凰巢，",
    "ĐÁP ÁN": "这件事情就像老鸦占了凤凰巢，不合适。",
    "PHIÊN ÂM": "Zhè jiàn shì qíng jiù xiàng lǎo yā zhàn le fèng huáng cháo, bù hé shì."
  },
  {
    "STT": 8,
    "SẮP XẾP CÂU": "当上了经理。 / 他一个无名小卒， / 竟然 / 老鸦占了凤凰巢，",
    "ĐÁP ÁN": "他一个无名小卒，竟然老鸦占了凤凰巢，当上了经理。",
    "PHIÊN ÂM": "Tā yí gè wú míng xiǎo zú, jìng rán lǎo yā zhàn le fèng huáng cháo, dāng shàng le jīng lǐ."
  },
  {
    "STT": 9,
    "CHỮ": "L",
    "CỤM": "老鹰捉小鸡",
    "PINYIN": "lǎo yīng zhuō xiǎo jī",
    "NGHĨA": "形容来势凶猛,手到擒来。",
    "SẮP XẾP CÂU": "他像/ 对目标/ 老鹰捉小鸡，/ 很专一。",
    "ĐÁP ÁN": "他像老鹰捉小鸡，对目标很专一。",
    "PHIÊN ÂM": "Tā xiàng lǎo yīng zhuō xiǎo jī, duì mùbiāo hěn zhuānyī."
  },
  {
    "STT": 10,
    "SẮP XẾP CÂU": "的游戏。/ 老鹰捉小鸡/ 孩子们 / 在操场上玩",
    "ĐÁP ÁN": "孩子们在操场上玩老鹰捉小鸡的游戏。",
    "PHIÊN ÂM": "Háizi men zài cāochǎng shàng wán lǎo yīng zhuō xiǎo jī de yóuxì."
  },
  {
    "STT": 11,
    "CHỮ": "L",
    "CỤM": "老子天下第一",
    "PINYIN": "lǎo zi tiān xià dì yī",
    "NGHĨA": "老子:自高自大的人自称。\r\n形容人自负,日空一切。",
    "SẮP XẾP CÂU": "觉得 / 自信满满， / 老子天下第一。 / 他总是",
    "ĐÁP ÁN": "他总是自信满满，觉得老子天下第一。",
    "PHIÊN ÂM": "Tā zǒngshì zìxìn mǎnmǎn , juéde lǎo zi tiān xià dì yī."
  },
  {
    "STT": 12,
    "SẮP XẾP CÂU": "的样子，/ 让人很讨厌。 / 他总是 / 老子天下第一",
    "ĐÁP ÁN": "他总是老子天下第一的样子，让人很讨厌。",
    "PHIÊN ÂM": "Tā zǒngshì lǎo zi tiān xià dì yī de yàngzi , ràng rén hěn tǎoyàn."
  },
  {
    "STT": 13,
    "CHỮ": "L",
    "CỤM": "雷公打，雷婆救",
    "PINYIN": "léi gōng dǎ, léi pó jiù",
    "NGHĨA": "雷公:神话中管打雷的男性神。\r\n指父亲严管子女,母亲却一味宽计。",
    "SẮP XẾP CÂU": "真是/ 令人困惑。 / 雷公打，雷婆救， / 这件事",
    "ĐÁP ÁN": "这件事真是雷公打，雷婆救，令人困惑。",
    "PHIÊN ÂM": "Zhè jiàn shì zhēnshi léi gōng dǎ, léi pó jiù, lìngrénkùnhuò."
  },
  {
    "STT": 14,
    "SẮP XẾP CÂU": "人生就是/ 谁也说不准。 / 这么回事， / 雷公打，雷婆救，",
    "ĐÁP ÁN": "人生就是这么回事，雷公打，雷婆救，谁也说不准。",
    "PHIÊN ÂM": "Rén shēng jiùshì zhème huí shì , léi gōng dǎ, léi pó jiù, shéi yě shuō bùzhǔn."
  },
  {
    "STT": 15,
    "CHỮ": "L",
    "CỤM": "勒紧裤腰带",
    "PINYIN": "lēi jǐn kù yāo dài",
    "NGHĨA": "指竭力节俭着过日子。",
    "SẮP XẾP CÂU": "他为了/ 决定 / 勒紧裤腰带。 / 省钱，",
    "ĐÁP ÁN": "他为了省钱，决定勒紧裤腰带。",
    "PHIÊN ÂM": "Tā wèile shěngqián , jué dìng lēi jǐn kù yāo dài."
  },
  {
    "STT": 16,
    "SẮP XẾP CÂU": "他们不得不 / 勒紧裤腰带 / 过日子。 / 为了还清债务，",
    "ĐÁP ÁN": "为了还清债务，他们不得不勒紧裤腰带过日子。",
    "PHIÊN ÂM": "Wèile huánqīng zhàiwù , tāmen bù dé bù lēi jǐn kù yāo dài guò rìzi ."
  },
  {
    "STT": 17,
    "CHỮ": "L",
    "CỤM": "垒山头",
    "PINYIN": "lěi shān tóu",
    "NGHĨA": "比喻结成小集团搞分裂。",
    "SẮP XẾP CÂU": "建立 / 自己的基地。 / 他们在这里 / 垒山头，",
    "ĐÁP ÁN": "他们在这里垒山头，建立自己的基地。",
    "PHIÊN ÂM": "Tāmen zài zhèlǐ lěi shān tóu jiànlì zìjǐ de jīdì ."
  },
  {
    "STT": 18,
    "SẮP XẾP CÂU": "终于有了今天的成就。 / 他多年来 / 一直默默地 / 垒山头，",
    "ĐÁP ÁN": "他多年来一直默默地垒山头，终于有了今天的成就。",
    "PHIÊN ÂM": "Tā duōnián lái yīzhí mòmòdì lěi shān tóu , zhōngyú yǒu le jīntiān de chéngjiù ."
  },
  {
    "STT": 19,
    "CHỮ": "L",
    "CỤM": "雷声大，雨点小",
    "PINYIN": "léi shēng dà, yǔ diǎn xiǎo",
    "NGHĨA": "比喻声势大,行动小,有虚张声势。",
    "SẮP XẾP CÂU": "真是/ 这次承诺/ 雷声大，雨点小。",
    "ĐÁP ÁN": "这次承诺真是雷声大，雨点小。",
    "PHIÊN ÂM": "Zhè cì chéngnuò zhēnshi léi shēng dà, yǔ diǎn xiǎo ."
  },
  {
    "STT": 20,
    "SẮP XẾP CÂU": "光说不练。 / 他总是 / 雷声大，雨点小，",
    "ĐÁP ÁN": "他总是雷声大，雨点小，光说不练。",
    "PHIÊN ÂM": "Tā zǒngshì léi shēng dà, yǔ diǎn xiǎo, guāngshuōbùliàn ."
  },
  {
    "STT": 21,
    "CHỮ": "L",
    "CỤM": "累死没人买棺材",
    "PINYIN": "lèi sǐ méi rén mǎi guān cai",
    "NGHĨA": "指付出艰辛的劳动却得不到他人的理解与感激。",
    "SẮP XẾP CÂU": "辛苦， / 累死没人买棺材。/工作",
    "ĐÁP ÁN": "工作辛苦，累死没人买棺材。",
    "PHIÊN ÂM": "Gōngzuò xīnkǔ , lèi sǐ méi rén mǎi guān cai ."
  },
  {
    "STT": 22,
    "SẮP XẾP CÂU": "令人惋惜。 / 他为公司 / 鞠躬尽瘁， / 最后却 / 累死没人买棺材，",
    "ĐÁP ÁN": "他为公司鞠躬尽瘁，最后却累死没人买棺材，令人惋惜。",
    "PHIÊN ÂM": "Tā wéi gōngsī jūgōngjìncuì , zuìhòu què lèi sǐ méi rén mǎi guān cailìngrén wǎnxī ."
  },
  {
    "STT": 23,
    "CHỮ": "L",
    "CỤM": "勒住脖子扎上嘴",
    "PINYIN": "lēi zhù bó zi zhā shàng zuǐ",
    "NGHĨA": "形容人十分节俭地过日子。",
    "SẮP XẾP CÂU": "他/ 勒住脖子扎上嘴， / 不敢说话。 / 这次",
    "ĐÁP ÁN": "这次他勒住脖子扎上嘴，不敢说话。",
    "PHIÊN ÂM": "Zhè cì tā lēi zhù bó zi zhā shàng zuǐ bùgǎn shuō huà ."
  },
  {
    "STT": 24,
    "SẮP XẾP CÂU": "不敢反驳。 / 他被领导训斥， / 只能 / 勒住脖子扎上嘴，",
    "ĐÁP ÁN": "他被领导训斥，只能勒住脖子扎上嘴，不敢反驳。",
    "PHIÊN ÂM": "Tā bèi lǐng dǎo xùnchì , zhǐ néng lēi zhù bó zi zhā shàng zuǐ bù gǎn fǎnbó ."
  },
  {
    "STT": 25,
    "CHỮ": "L",
    "CỤM": "冷处理",
    "PINYIN": "lěng chù lǐ",
    "NGHĨA": "金属工件淬火后放入冷空气中,以此 提高机械性能。\r\n比喻某些事情发生后等 到适当时机再作处理。",
    "SẮP XẾP CÂU": "等待时机。 / 我们只能 / 对于这件事 / 冷处理，",
    "ĐÁP ÁN": "对于这件事我们只能冷处理，等待时机。",
    "PHIÊN ÂM": "Duìyú zhè jiàn shì wǒmen zhǐ néng lěng chù lǐ děngdài shíjī ."
  },
  {
    "STT": 26,
    "SẮP XẾP CÂU": "对于/ 他们决定 / 冷处理。 / 他的挑衅，",
    "ĐÁP ÁN": "对于他的挑衅，他们决定冷处理。",
    "PHIÊN ÂM": "Duìyú tā de tiǎoxìn , tāmen juédìng lěng chù lǐ ."
  },
  {
    "STT": 27,
    "CHỮ": "L",
    "CỤM": "冷锅中豆儿爆",
    "PINYIN": "lěng guō zhōng dòu er bào",
    "NGHĨA": "比喻事情平白无故突然发生。\r\n比喻已平息的事情突然又发作起来。\r\n也作“冷锅里爆豆”、“冷锅中爆出一个 热栗子来”。",
    "SẮP XẾP CÂU": "毫无反应。 / 这锅水/ 冷锅中豆儿爆，",
    "ĐÁP ÁN": "这锅水冷锅中豆儿爆，毫无反应。",
    "PHIÊN ÂM": "Zhè guō shuǐ lěng guō zhōng dòu ér bào, háo wú fǎn yìng."
  },
  {
    "STT": 28,
    "SẮP XẾP CÂU": "什么也没得到。 / 他费尽心思， / 结果 / 冷锅中豆儿爆，",
    "ĐÁP ÁN": "他费尽心思，结果冷锅中豆儿爆，什么也没得到。",
    "PHIÊN ÂM": "Tā fèi jìn xīn sī, jié guǒ lěng guō zhōng dòu ér bào, shén me yě méi dé dào."
  },
  {
    "STT": 29,
    "CHỮ": "L",
    "CỤM": "冷灰里爆出热火星",
    "PINYIN": "lěng huī lǐ bào chū rè huǒ xīng",
    "NGHĨA": "比喻已经平息的事情又意外重生事 端,引出麻烦。",
    "SẮP XẾP CÂU": "很有/ 他在 /潜力。/ 冷灰里爆出热火星，",
    "ĐÁP ÁN": "他在冷灰里爆出热火星，很有潜力。",
    "PHIÊN ÂM": "Tā zài lěng huī lǐ bào chū rè huǒ xīng, hěn yǒu qián lì."
  },
  {
    "STT": 30,
    "SẮP XẾP CÂU": "但说不定 / 冷灰里爆出热火星呢！ / 事情虽然 / 看起来很糟糕，",
    "ĐÁP ÁN": "事情虽然看起来很糟糕，但说不定冷灰里爆出热火星呢！",
    "PHIÊN ÂM": "Shì qíng suī rán kàn qǐ lái hěn zāo gāo, dàn shuō bù dìng lěng huī lǐ bào chū rè huǒ xīng ne!"
  },
  {
    "STT": 31,
    "CHỮ": "L",
    "CỤM": "冷了半截",
    "PINYIN": "lěng le bàn jié",
    "NGHĨA": "指因受到打击而泄气,丧失信心。 也作“凉了半截”。",
    "SẮP XẾP CÂU": "不下去了。 / 冷了半截，/这杯水 / 喝",
    "ĐÁP ÁN": "这杯水冷了半截，喝不下去了。",
    "PHIÊN ÂM": "Zhè bēi shuǐ lěng le bàn jié, hē bù xià qù le."
  },
  {
    "STT": 32,
    "SẮP XẾP CÂU": "后来听说了/ 冷了半截。 / 他本来很热情， / 这件事，",
    "ĐÁP ÁN": "他本来很热情，后来听说了这件事，冷了半截。",
    "PHIÊN ÂM": "Tā běn lái hěn rè qíng, hòu lái tīng shuō le zhè jiàn shì, lěng le bàn jié."
  },
  {
    "STT": 33,
    "CHỮ": "L",
    "CỤM": "冷手抓热馒头",
    "PINYIN": "lěng shǒu zhuā rè mán tou",
    "NGHĨA": "比喻人不费力就得到意外的收获。 \r\n比喻下手解决棘手的难题。\r\n也作“冷手抓个热煎堆”。",
    "SẮP XẾP CÂU": "他/ 不小心了。 / 冷手抓热馒头，/太",
    "ĐÁP ÁN": "他冷手抓热馒头，太不小心了。",
    "PHIÊN ÂM": "Tā lěng shǒu zhuā rè mán tóu, tài bù xiǎo xīn le."
  },
  {
    "STT": 34,
    "SẮP XẾP CÂU": "结果可想而知。 / 他做事从来不提前准备， / 总是 / 冷手抓热馒头，",
    "ĐÁP ÁN": "他做事从来不提前准备，总是冷手抓热馒头，结果可想而知。",
    "PHIÊN ÂM": "Tā zuò shì cóng lái bù tí qián zhǔn bèi, zǒng shì lěng shǒu zhuā rè mán tóu, jié guǒ kě xiǎng ér zhī."
  },
  {
    "STT": 35,
    "CHỮ": "L",
    "CỤM": "冷眼看螃蟹",
    "PINYIN": "lěng yǎn kàn páng xiè",
    "NGHĨA": "指对横行霸道的人表示鄙视。",
    "SẮP XẾP CÂU": "他/ 对事情 / 不屑一顾。 / 冷眼看螃蟹，",
    "ĐÁP ÁN": "他冷眼看螃蟹，对事情不屑一顾。",
    "PHIÊN ÂM": "Tā lěng yǎn kàn páng xiè, duì shì qíng bù xiè yī gù."
  },
  {
    "STT": 36,
    "SẮP XẾP CÂU": "一清二楚。 / 他对这件事 / 冷眼看螃蟹，/ 看得",
    "ĐÁP ÁN": "他对这件事冷眼看螃蟹，看得一清二楚。",
    "PHIÊN ÂM": "Tā duì zhè jiàn shì lěng yǎn kàn páng xiè, kàn de yì qīng èr chǔ."
  },
  {
    "STT": 37,
    "CHỮ": "L",
    "CỤM": "冷一把，热一把",
    "PINYIN": "lěng yī bǎ, rè yī bǎ",
    "NGHĨA": "比喻待人厚此薄彼。",
    "SẮP XẾP CÂU": "波动大。/ 他总是 / 情绪/ 冷一把，热一把，",
    "ĐÁP ÁN": "他总是冷一把，热一把，情绪波动大。",
    "PHIÊN ÂM": "Tā zǒng shì lěng yì bǎ, rè yì bǎ, qíng xù bō dòng dà."
  },
  {
    "STT": 38,
    "SẮP XẾP CÂU": "捉摸不透。 / 他的态度 / 冷一把，热一把的，/ 让人",
    "ĐÁP ÁN": "他的态度冷一把，热一把的，让人捉摸不透。",
    "PHIÊN ÂM": "Tā de tài dù lěng yì bǎ, rè yì bǎ de, ràng rén zhuō mō bù tòu."
  },
  {
    "STT": 39,
    "CHỮ": "L",
    "CỤM": "冷一句，热一句",
    "PINYIN": "lěng yī jù, rè yī jù",
    "NGHĨA": "指委婉地影射、中伤人。\r\n也作“热一句,冷一句”。",
    "SẮP XẾP CÂU": "捉摸不透。 / 让人/ 他对待朋友 / 冷一句，热一句，",
    "ĐÁP ÁN": "他对待朋友冷一句，热一句，让人捉摸不透。",
    "PHIÊN ÂM": "Tā duì dài péng yǒu lěng yí jù, rè yí jù, ràng rén zhuō mō bù tòu."
  },
  {
    "STT": 40,
    "SẮP XẾP CÂU": "让人心里很不舒服。 / 他说话 / 冷一句，热一句的，",
    "ĐÁP ÁN": "他说话冷一句，热一句的，让人心里很不舒服。",
    "PHIÊN ÂM": "Tā shuō huà lěng yí jù, rè yí jù de, ràng rén xīn lǐ hěn bù shū fú."
  },
  {
    "STT": 41,
    "CHỮ": "L",
    "CỤM": "冷灶着一把，热灶着一把",
    "PINYIN": "lěng zào zhuó yī bǎ, rè zào zhuó yī bǎ",
    "NGHĨA": "在冷灶上点一把火,在热灶上点一把 火。比喻一视同仁,不趋炎附势。",
    "SẮP XẾP CÂU": "对我来说/ 冷灶着一把，热灶着一把。/ 这件事",
    "ĐÁP ÁN": "这件事对我来说冷灶着一把，热灶着一把。",
    "PHIÊN ÂM": "Zhè jiàn shì duì wǒ lái shuō lěng zào zhuó yī bǎ, rè zào zhuó yī bǎ."
  },
  {
    "STT": 42,
    "SẮP XẾP CÂU": "很低。 / 他做事 / 冷灶着一把，热灶着一把，/ 效率",
    "ĐÁP ÁN": "他做事冷灶着一把，热灶着一把，效率很低。",
    "PHIÊN ÂM": "Tā zuò shì lěng zào zhuó yī bǎ, rè zào zhuó yī bǎ, xiào lǜ hěn dī."
  },
  {
    "STT": 43,
    "CHỮ": "L",
    "CỤM": "立定脚",
    "PINYIN": "lì dìng jiǎo",
    "NGHĨA": "见“站得住脚”。",
    "SẮP XẾP CÂU": "他终于/ 坚定了/ 自己的决心。 / 立定脚，",
    "ĐÁP ÁN": "他终于立定脚，坚定了自己的决心。",
    "PHIÊN ÂM": "Tā zhōng yú lì dìng jiǎo, jiān dìng le zì jǐ de jué xīn."
  },
  {
    "STT": 44,
    "SẮP XẾP CÂU": "还需要 / 付出更多的努力。 / 他要在公司 / 立定脚，",
    "ĐÁP ÁN": "他要在公司立定脚，还需要付出更多的努力。",
    "PHIÊN ÂM": "Tā yào zài gōng sī lì dìng jiǎo, hái xū yào fù chū gèng duō de nǔ lì."
  },
  {
    "STT": 45,
    "CHỮ": "L",
    "CỤM": "离见阎王爷就剩一层纸",
    "PINYIN": "lí jiàn yán wáng yé jiù shèng yī céng zhǐ",
    "NGHĨA": "形容生命即将结束。",
    "SẮP XẾP CÂU": "他/ 真是危险，/ 离见阎王爷就剩一层纸。/ 这次",
    "ĐÁP ÁN": "他这次真是危险，离见阎王爷就剩一层纸。",
    "PHIÊN ÂM": "Tā zhè cì zhēn shì wēi xiǎn, lí jiàn yán wáng yé jiù shèng yī céng zhǐ."
  },
  {
    "STT": 46,
    "SẮP XẾP CÂU": "他病得/ 离见阎王爷 / 就剩一层纸了。 / 这么重，",
    "ĐÁP ÁN": "他病得这么重，离见阎王爷就剩一层纸了。",
    "PHIÊN ÂM": "Tā bìng de zhè me zhòng, lí jiàn yán wáng yé jiù shèng yī céng zhǐ le."
  },
  {
    "STT": 47,
    "CHỮ": "L",
    "CỤM": "立军令状",
    "PINYIN": "lì jūn lìng zhuàng",
    "NGHĨA": "军令状:接受命令后写的保证书;表示 不能完成任务,愿受严厉处分。\r\n指立下完成任务的保证。",
    "SẮP XẾP CÂU": "他/ 保证 / 完成任务。/ 在全体员工面前 / 立军令状，",
    "ĐÁP ÁN": "他在全体员工面前立军令状，保证完成任务。",
    "PHIÊN ÂM": "Tā zài quán tǐ yuán gōng miàn qián lì jūn lìng zhuàng, bǎo zhèng wán chéng rèn wù."
  },
  {
    "STT": 48,
    "SẮP XẾP CÂU": "保证按时/ 他 / 立军令状，/ 完成任务。",
    "ĐÁP ÁN": "他立军令状，保证按时完成任务。",
    "PHIÊN ÂM": "Tā lì jūn lìng zhuàng, bǎo zhèng àn shí wán chéng rèn wù."
  },
  {
    "STT": 49,
    "CHỮ": "L",
    "CỤM": "离了马尿河也涨",
    "PINYIN": "lí le mǎ niào hé yě zhǎng",
    "NGHĨA": "比喻离了某人不会影响大局。",
    "SẮP XẾP CÂU": "他/ 依赖。 / 离了马尿河也涨，/ 在外面工作，/不再",
    "ĐÁP ÁN": "他在外面工作，离了马尿河也涨，不再依赖。",
    "PHIÊN ÂM": "Tā zài wài miàn gōng zuò, lí le mǎ niào hé yě zhǎng, bú zài yī lài."
  },
  {
    "STT": 50,
    "SẮP XẾP CÂU": "照样运转。 / 他走了， / 离了马尿河也涨，/ 公司",
    "ĐÁP ÁN": "他走了，离了马尿河也涨，公司照样运转。",
    "PHIÊN ÂM": "Tā zǒu le, lí le mǎ niào hé yě zhǎng, gōngsī zhàoyàng yùnzhuǎn ."
  },
  {
    "STT": 51,
    "CHỮ": "L",
    "CỤM": "离了这块云，天也照样下雨",
    "PINYIN": "lí le zhè kuài yún, tiān yě zhào yàng xià yǔ",
    "NGHĨA": "比喻没有某人,事情照样能办成。",
    "SẮP XẾP CÂU": "他总以为自己是/ 其实/ 核心人物, / 离了这块云，天也照样下雨。",
    "ĐÁP ÁN": "他总以为自己是核心人物, 其实离了这块云，天也照样下雨。",
    "PHIÊN ÂM": "Tā zǒng yǐ wéi zì jǐ shì hé xīn rén wù, qí shí lí le zhè kuài yún, tiān yě zhào yàng xià yǔ."
  },
  {
    "STT": 52,
    "SẮP XẾP CÂU": "离了这块云，天也照样下雨， / 不受影响。 / 他辞职了， / 公司运转",
    "ĐÁP ÁN": "他辞职了，离了这块云，天也照样下雨，公司运转不受影响。",
    "PHIÊN ÂM": "Tā cízhí le, lí le zhè kuài yún, tiān yě zhào yàng xià yǔ, gōng sī yùn zhuǎn bù shòu yǐng xiǎng."
  },
  {
    "STT": 53,
    "CHỮ": "L",
    "CỤM": "离笼之鸟，脱网之鱼",
    "PINYIN": "lí lóng zhī niǎo, tuō wǎng zhī yú",
    "NGHĨA": "比喻逃脱羁绊或险境的人。\r\n也作“漏网之鱼,出笼之鸟”、“脱网的 鱼,离笼的鸟”。",
    "SẮP XẾP CÂU": "他终于/ 获得自由。/ 成为了 / 离笼之鸟，脱网之鱼，",
    "ĐÁP ÁN": "他终于成为了离笼之鸟，脱网之鱼，获得自由。",
    "PHIÊN ÂM": "Tā zhōng yú chéng wéi le lí lóng zhī niǎo, tuō wǎng zhī yú, huò dé zì yóu."
  },
  {
    "STT": 54,
    "SẮP XẾP CÂU": "他终于/ 一样自由自在。 / 摆脱了困境， / 像离笼之鸟，脱网之鱼",
    "ĐÁP ÁN": "他终于摆脱了困境，像离笼之鸟，脱网之鱼一样自由自在。",
    "PHIÊN ÂM": "Tā zhōng yú bǎi tuō le kùn jìng, xiàng lí lóng zhī niǎo, tuō wǎng zhī yú yí yàng zì yóu zì zài."
  },
  {
    "STT": 55,
    "CHỮ": "L",
    "CỤM": "里三层，外三层",
    "PINYIN": "lǐ sān céng, wài sān céng",
    "NGHĨA": "形容围拢的人很多。",
    "SẮP XẾP CÂU": "这件事情/ 复杂难懂。/ 真是/ 里三层，外三层，",
    "ĐÁP ÁN": "这件事情真是里三层，外三层，复杂难懂。",
    "PHIÊN ÂM": "Zhè jiàn shì qíng zhēn shì lǐ sān céng, wài sān céng, fù zá nán dǒng."
  },
  {
    "STT": 56,
    "SẮP XẾP CÂU": "挤满了人。 / 演唱会现场 / 里三层，外三层，",
    "ĐÁP ÁN": "演唱会现场里三层，外三层，挤满了人。",
    "PHIÊN ÂM": "Yǎn chàng huì xiàn chǎng lǐ sān céng, wài sān céng, jǐ mǎn le rén."
  },
  {
    "STT": 57,
    "CHỮ": "L",
    "CỤM": "离天远，挨地近",
    "PINYIN": "lí tiān yuǎn, āi dì jìn",
    "NGHĨA": "形容人快死了。",
    "SẮP XẾP CÂU": "不容乐观。/ 事情发展的 / 离天远，挨地近，",
    "ĐÁP ÁN": "事情发展的离天远，挨地近，不容乐观。",
    "PHIÊN ÂM": "Shì qíng fāzhǎn de lí tiān yuǎn, āi dì jìn, bù róng lè guān."
  },
  {
    "STT": 58,
    "SẮP XẾP CÂU": "离天远，挨地近。 / 他在公司里 / 地位低下，",
    "ĐÁP ÁN": "他在公司里地位低下，离天远，挨地近。",
    "PHIÊN ÂM": "Tā zài gōngsī lǐ dì wèi dī xià, lí tiān yuǎn, āi dì jìn."
  },
  {
    "STT": 59,
    "CHỮ": "L",
    "CỤM": "里外不是人",
    "PINYIN": "lǐ wài bù shì rén",
    "NGHĨA": "指到处遭埋怨,落不是。",
    "SẮP XẾP CÂU": "他/ 里外不是人。/ 这个决定 / 让自己",
    "ĐÁP ÁN": "他这个决定让自己里外不是人。",
    "PHIÊN ÂM": "Tā zhè gè jué dìng ràng zì jǐ lǐ wài bú shì rén."
  },
  {
    "STT": 60,
    "SẮP XẾP CÂU": "里外不是人。 / 他在婆媳之间 / 左右为难，",
    "ĐÁP ÁN": "他在婆媳之间左右为难，里外不是人。",
    "PHIÊN ÂM": "Tā zài pó xí zhī jiān zuǒ yòu wéi nán, lǐ wài bú shì rén."
  },
  {
    "STT": 61,
    "CHỮ": "L",
    "CỤM": "立下马威",
    "PINYIN": "lì xià mǎ wēi",
    "NGHĨA": "指一开始便立威,震慑别人。",
    "SẮP XẾP CÂU": "大家的尊重。/ 他在新职位上/ 赢得了/ 立下马威，",
    "ĐÁP ÁN": "他在新职位上立下马威，赢得了大家的尊重。",
    "PHIÊN ÂM": "Tā zài xīn zhí wèi shàng lì xià mǎ wēi, yíng dé le dà jiā de zūn zhòng."
  },
  {
    "STT": 62,
    "SẮP XẾP CÂU": "好几个员工。 / 新来的经理第一天就 / 批评了 / 立下马威，",
    "ĐÁP ÁN": "新来的经理第一天就立下马威，批评了好几个员工。",
    "PHIÊN ÂM": "Xīn lái de jīng lǐ dì yī tiān jiù lì xià mǎ wēi, pī píng le hǎo jǐ gè yuán gōng."
  },
  {
    "STT": 63,
    "CHỮ": "L",
    "CỤM": "连根烂",
    "PINYIN": "lián gēn làn",
    "NGHĨA": "比喻彻底坏掉。",
    "SẮP XẾP CÂU": "报废。/ 这批货物/ 全部/ 连根烂了，",
    "ĐÁP ÁN": "这批货物连根烂了，全部报废。",
    "PHIÊN ÂM": "Zhè pī huò wù lián gēn làn le, quán bù bào fèi."
  },
  {
    "STT": 64,
    "SẮP XẾP CÂU": "必须砍掉。 / 这棵树/ 已经 / 连根烂了，",
    "ĐÁP ÁN": "这棵树已经连根烂了，必须砍掉。",
    "PHIÊN ÂM": "Zhè kē shù yǐ jīng lián gēn làn le, bì xū kǎn diào."
  },
  {
    "STT": 65,
    "CHỮ": "L",
    "CỤM": "连半个人影也没有",
    "PINYIN": "lián bàn gè rén yǐng yě méi yǒu",
    "NGHĨA": "指根本没有人。\r\n也作“连个鬼影子都没有”、“连个人影 也没有”。",
    "SẮP XẾP CÂU": "冷清。/ 这里/ 显得很/ 连半个人影也没有，",
    "ĐÁP ÁN": "这里连半个人影也没有，显得很冷清。",
    "PHIÊN ÂM": "Zhè lǐ lián bàn gè rén yǐng yě méi yǒu, xiǎn dé hěn lěngqīng."
  },
  {
    "STT": 66,
    "SẮP XẾP CÂU": "连半个人影也没有。 / 大街上 / 空无一人，",
    "ĐÁP ÁN": "大街上空无一人，连半个人影也没有。",
    "PHIÊN ÂM": "dàjiē shàng kōngwúyīrén , lián bànge rényǐng yě méiyǒu ."
  },
  {
    "STT": 67,
    "CHỮ": "L",
    "CỤM": "脸不变色心不跳",
    "PINYIN": "liǎn bù biàn sè xīn bù tiào",
    "NGHĨA": "形容遇事不慌乱,镇定自若。",
    "SẮP XẾP CÂU": "非常淡定。/ 他在/ 脸不变色心不跳，/ 危机时刻，",
    "ĐÁP ÁN": "他在危机时刻，脸不变色心不跳，非常淡定。",
    "PHIÊN ÂM": "tā zài wēijī shíkè , liǎn bù biànsè xīnbùtiào , fēicháng dàndìng ."
  },
  {
    "STT": 68,
    "SẮP XẾP CÂU": "沉着应对。 / 面对突发事件， / 他 / 脸不变色心不跳，",
    "ĐÁP ÁN": "面对突发事件，他脸不变色心不跳，沉着应对。",
    "PHIÊN ÂM": "miànduì tūfāshìjiàn , tā liǎn bù biànsè xīnbùtiào , chénzhuó yìngduì ."
  },
  {
    "STT": 69,
    "CHỮ": "L",
    "CỤM": "脸朝黄土背朝天",
    "PINYIN": "liǎn cháo huáng tǔ bèi cháo tiān",
    "NGHĨA": "见“面朝黄土背朝天”。",
    "SẮP XẾP CÂU": "太辛苦了。/ 真是/ 脸朝黄土背朝天，/ 这份工作",
    "ĐÁP ÁN": "这份工作真是脸朝黄土背朝天，太辛苦了。",
    "PHIÊN ÂM": "zhèfèn gōngzuò zhēnshi liǎncháo huángtǔbèi cháotiān , tài xīnkǔ le ."
  },
  {
    "STT": 70,
    "SẮP XẾP CÂU": "辛苦耕耘。 / 农民伯伯们 / 日复一日， / 脸朝黄土背朝天，",
    "ĐÁP ÁN": "农民伯伯们日复一日，脸朝黄土背朝天，辛苦耕耘。",
    "PHIÊN ÂM": "nóngmín bóbo men rìfùyīrì , liǎncháo huángtǔbèi cháotiān , xīnkǔ gēngyún ."
  },
  {
    "STT": 71,
    "CHỮ": "L",
    "CỤM": "脸丑怪镜子",
    "PINYIN": "liǎn chǒu guài jìng zi",
    "NGHĨA": "比喻自己不好却埋怨别人。",
    "SẮP XẾP CÂU": "自己的问题。/ 不肯承认 / 他总是 / 脸丑怪镜子，",
    "ĐÁP ÁN": "他总是脸丑怪镜子，不肯承认自己的问题。",
    "PHIÊN ÂM": "tā zǒngshì liǎn chǒuguài jìngzi , bùkěn chéngrèn zìjǐ de wèntí ."
  },
  {
    "STT": 72,
    "SẮP XẾP CÂU": "怪别人没提醒他。 / 他自己做得不对， / 还 / 脸丑怪镜子，",
    "ĐÁP ÁN": "他自己做得不对，还脸丑怪镜子，怪别人没提醒他。",
    "PHIÊN ÂM": "tā zìjǐ zuò dé bù duì , huán liǎn chǒuguài jìngzi , guài biéren méi tíxǐng tā ."
  },
  {
    "STT": 73,
    "CHỮ": "L",
    "CỤM": "连出气都不敢张大嘴巴",
    "PINYIN": "lián chū qì dōu bù gǎn zhāng dà zuǐ ba",
    "NGHĨA": "形容非常胆小害怕,谨小慎微。",
    "SẮP XẾP CÂU": "他被/ 连出气都不敢张大嘴巴。/ 吓得",
    "ĐÁP ÁN": "他被吓得连出气都不敢张大嘴巴。",
    "PHIÊN ÂM": "tā bèi xià dé lián chūqì dū bùgǎn zhāngdàzuǐbā ."
  },
  {
    "STT": 74,
    "SẮP XẾP CÂU": "连出气都 / 不敢张大嘴巴。 / 他被吓坏了，",
    "ĐÁP ÁN": "他被吓坏了，连出气都不敢张大嘴巴。",
    "PHIÊN ÂM": "tā bèi xiàhuài le , lián chūqì dū bùgǎn zhāngdàzuǐbā ."
  },
  {
    "STT": 75,
    "CHỮ": "L",
    "CỤM": "连放个屁也得有人管",
    "PINYIN": "lián fàng gè pì yě děi yǒu rén guǎn",
    "NGHĨA": "形容受人约束,没有一点自由。",
    "SẮP XẾP CÂU": "在这个/ 严格的/ 连放个屁也得有人管。/ 环境下，",
    "ĐÁP ÁN": "在这个严格的环境下，连放个屁也得有人管。",
    "PHIÊN ÂM": "zài zhège yángé de huánjìng xià , liánfànggè pì yě dé yǒurén guǎn ."
  },
  {
    "STT": 76,
    "ĐÁP ÁN": "Thiếu ví dụ"
  },
  {
    "STT": 77,
    "CHỮ": "L",
    "CỤM": "连个屁都不敢放",
    "PINYIN": "lián gè pì dōu bù gǎn fàng",
    "NGHĨA": "指连一句话也不敢说。形容人十分 害怕。\r\n也作“连个屁都没敢放”、“连个屁也不 敢放”。",
    "SẮP XẾP CÂU": "他被/ 连个屁都不敢放。/ 压迫得",
    "ĐÁP ÁN": "他被压迫得连个屁都不敢放。",
    "PHIÊN ÂM": "tā bèiyāpò dé liángè pì dū bùgǎn fàng ."
  },
  {
    "STT": 78,
    "SẮP XẾP CÂU": "被领导/ 连个屁都不敢放。/ 训斥后，/ 他",
    "ĐÁP ÁN": "他被领导训斥后，连个屁都不敢放。",
    "PHIÊN ÂM": "tā bèi lǐngdǎo xùnchì hòu , liángè pì dū bùgǎn fàng ."
  },
  {
    "STT": 79,
    "CHỮ": "L",
    "CỤM": "连根拔",
    "PINYIN": "lián gēn bá",
    "NGHĨA": "比喻彻底铲除,全部解决。",
    "SẮP XẾP CÂU": "以免它继续危害。 / 这棵坏树， / 他们决定 / 连根拔",
    "ĐÁP ÁN": "他们决定连根拔这棵坏树，以免它继续危害。",
    "PHIÊN ÂM": "tāmen juédìng liángēnbá zhèkē huàishù , yǐmiǎn tā jìxù wēihài ."
  },
  {
    "STT": 80,
    "SẮP XẾP CÂU": "将腐败分子 / 连根拔。 / 这次的反腐行动，/ 决心要",
    "ĐÁP ÁN": "这次的反腐行动，决心要将腐败分子连根拔。",
    "PHIÊN ÂM": "zhècì de fǎnfǔ xíngdòng , juéxīn yào jiàng fǔbàifēnzi liángēnbá ."
  },
  {
    "STT": 81,
    "CHỮ": "L",
    "CỤM": "连锅端",
    "PINYIN": "lián guō duān",
    "NGHĨA": "比喻全部除掉,彻底解决。\r\n比喻",
    "SẮP XẾP CÂU": "犯罪团伙。/ 警察/ 这个/ 连锅端了",
    "ĐÁP ÁN": "警察连锅端了这个犯罪团伙。",
    "PHIÊN ÂM": "jǐngchá liánguōduān le zhège fànzuìtuánhuǒ ."
  },
  {
    "STT": 82,
    "SẮP XẾP CÂU": "连锅端。 / 警方将 / 犯罪团伙",
    "ĐÁP ÁN": "警方将犯罪团伙连锅端。",
    "PHIÊN ÂM": "jǐngfāng jiàng fànzuìtuánhuǒ liánguōduān ."
  },
  {
    "STT": 83,
    "CHỮ": "L",
    "CỤM": "脸皮扒下来能当鞋底穿",
    "PINYIN": "liǎn pí bā xià lái néng dāng xié dǐ chuān",
    "NGHĨA": "形容人脸皮厚,做事不顾羞耻。",
    "SẮP XẾP CÂU": "他真是/ 厚脸皮。/ 脸皮扒下来能当鞋底穿，",
    "ĐÁP ÁN": "他真是脸皮扒下来能当鞋底穿，厚脸皮。",
    "PHIÊN ÂM": "tā zhēnshi liǎnpí bā xiàlai néngdāng xiédǐ chuān , hòuliǎnpí ."
  },
  {
    "STT": 84,
    "SẮP XẾP CÂU": "什么话都 / 他/ 脸皮扒下来能当鞋底穿，/ 说得出口。",
    "ĐÁP ÁN": "他脸皮扒下来能当鞋底穿，什么话都说得出口。",
    "PHIÊN ÂM": "tā liǎnpí bā xiàlai néngdāng xiédǐ chuān , shénme huà dū shuō dé chūkǒu ."
  },
  {
    "STT": 85,
    "CHỮ": "L",
    "CỤM": "脸皮儿薄得像灯花纸",
    "PINYIN": "liǎn pí er báo de xiàng dēng huā zhǐ",
    "NGHĨA": "形容人过于顾及颜面。",
    "SẮP XẾP CÂU": "容易害羞。/ 脸皮儿薄得像灯花纸， / 她的",
    "ĐÁP ÁN": "她的脸皮儿薄得像灯花纸，容易害羞。",
    "PHIÊN ÂM": "tā de liǎnpí rbó dé xiàng dēnghuā zhǐ , róngyì hàixiū ."
  },
  {
    "STT": 86,
    "SẮP XẾP CÂU": "被人夸奖几句 / 他/ 脸皮儿薄得像灯花纸，/ 就脸红了。",
    "ĐÁP ÁN": "他脸皮儿薄得像灯花纸，被人夸奖几句就脸红了。",
    "PHIÊN ÂM": "tā liǎnpí rbó dé xiàng dēnghuā zhǐ , bèi rén kuājiǎng jǐjù jiù liǎnhóng le ."
  },
  {
    "STT": 87,
    "CHỮ": "L",
    "CỤM": "脸皮厚",
    "PINYIN": "liǎn pí hòu",
    "NGHĨA": "形容人不顾颜面,不知羞耻。",
    "SẮP XẾP CÂU": "毫不在意。 / 说话 / 他真是 / 脸皮厚，",
    "ĐÁP ÁN": "他真是脸皮厚，说话毫不在意。",
    "PHIÊN ÂM": "tā zhēnshi liǎnpíhòu , shuōhuà háobùzàiyì ."
  },
  {
    "STT": 88,
    "SẮP XẾP CÂU": "他/ 不在乎。/ 批评了他也/ 脸皮厚，",
    "ĐÁP ÁN": "他脸皮厚，批评了他也不在乎。",
    "PHIÊN ÂM": "tā liǎnpíhòu , pīpíng le tā yě bùzàihu ."
  },
  {
    "STT": 89,
    "CHỮ": "L",
    "CỤM": "脸让黑瞎子舔了",
    "PINYIN": "liǎn ràng hēi xiā zi tiǎn le",
    "NGHĨA": "黑瞎子:黑熊。\r\n斥骂人没皮没脸。",
    "SẮP XẾP CÂU": "真是/ 丢尽了颜面。/ 脸让黑瞎子舔了， / 他这次失误，",
    "ĐÁP ÁN": "他这次失误，真是脸让黑瞎子舔了，丢尽了颜面。",
    "PHIÊN ÂM": "tā zhècì shīwù , zhēnshi liǎn ràng hēixiāzi tiǎn le , diū jìn le yánmiàn ."
  },
  {
    "STT": 90,
    "SẮP XẾP CÂU": "很难看。 / 他被批评后， / 脸让黑瞎子舔了，/ 脸色",
    "ĐÁP ÁN": "他被批评后，脸让黑瞎子舔了，脸色很难看。",
    "PHIÊN ÂM": "tā bèi pīpíng hòu , liǎn ràng hēixiāzi tiǎn le , liǎnsè hěn nánkàn ."
  },
  {
    "STT": 91,
    "CHỮ": "L",
    "CỤM": "脸上带笑,袖里藏刀",
    "PINYIN": "liǎn shàng dài xiào，xiù lǐ cáng dāo",
    "NGHĨA": "指表面和善,内心歹毒。",
    "SẮP XẾP CÂU": "她/ 算计别人。/ 心里却在/ 脸上带笑，袖里藏刀，",
    "ĐÁP ÁN": "她脸上带笑，袖里藏刀，心里却在算计别人。",
    "PHIÊN ÂM": "tā liǎnshàng dàixiào , xiùlǐ cángdāo , xīnli què zài suànji biéren ."
  },
  {
    "STT": 92,
    "SẮP XẾP CÂU": "别被他骗了！ / 他/ 脸上带笑，袖里藏刀，/ 千万",
    "ĐÁP ÁN": "他脸上带笑，袖里藏刀，千万别被他骗了！",
    "PHIÊN ÂM": "tā liǎnshàng dàixiào , xiùlǐ cángdāo , qiānwànbié bèi tā piàn le ！"
  },
  {
    "STT": 93,
    "CHỮ": "L",
    "CỤM": "脸上飞红云",
    "PINYIN": "liǎn shàng fēi hóng yún",
    "NGHĨA": "形容女子害羞时的样子。",
    "SẮP XẾP CÂU": "她/ 脸上飞红云。/ 听到/ 赞美的话时，",
    "ĐÁP ÁN": "她听到赞美的话时，脸上飞红云。",
    "PHIÊN ÂM": "tā tīngdào zànměi dehuà shí , liǎnshàng fēihóng yún ."
  },
  {
    "STT": 94,
    "SẮP XẾP CÂU": "脸上飞红云。 / 她/ 害羞得",
    "ĐÁP ÁN": "她害羞得脸上飞红云。",
    "PHIÊN ÂM": "tā hàixiū dé liǎnshàng fēihóng yún ."
  },
  {
    "STT": 95,
    "CHỮ": "L",
    "CỤM": "脸上挂不住",
    "PINYIN": "liǎn shàng guà bù zhù",
    "NGHĨA": "指没脸面,不光彩。\r\n也作“脸上支不住”。",
    "SẮP XẾP CÂU": "让他/ 很尴尬。/ 脸上挂不住， / 这件事情",
    "ĐÁP ÁN": "这件事情让他脸上挂不住，很尴尬。",
    "PHIÊN ÂM": "zhèjiàn shìqing ràng tā liǎnshàng guàbùzhù , hěn gāngà ."
  },
  {
    "STT": 96,
    "SẮP XẾP CÂU": "批评我，/ 他当着大家的面 / 脸上挂不住。 / 让我",
    "ĐÁP ÁN": "他当着大家的面批评我，让我脸上挂不住。",
    "PHIÊN ÂM": "tā dāngzhe dàjiā de miàn pīpíng wǒ , ràng wǒ liǎnshàng guàbùzhù ."
  },
  {
    "STT": 97,
    "CHỮ": "L",
    "CỤM": "脸上贴金",
    "PINYIN": "liǎn shàng tiē jīn",
    "NGHĨA": "喻指美化自己或他人。",
    "SẮP XẾP CÂU": "他这次/ 脸上贴金。 / 真是 / 获得奖项，",
    "ĐÁP ÁN": "他这次获得奖项，真是脸上贴金。",
    "PHIÊN ÂM": "tā zhècì huòdé jiǎngxiàng , zhēnshi liǎnshàng tiējīn ."
  },
  {
    "STT": 98,
    "SẮP XẾP CÂU": "夸大自己的/ 他总是 / 脸上贴金，/ 功劳。",
    "ĐÁP ÁN": "他总是脸上贴金，夸大自己的功劳。",
    "PHIÊN ÂM": "tā zǒngshì liǎnshàng tiējīn , kuādà zìjǐ de gōngláo ."
  },
  {
    "STT": 99,
    "CHỮ": "L",
    "CỤM": "脸上下不来",
    "PINYIN": "liǎn shàng xià bù lái",
    "NGHĨA": "指当下面子上过不去,在人前受窘 难堪。\r\n也作“脸上磨不开”、“脸上下不去”。",
    "SẮP XẾP CÂU": "让他/ 很失落。 / 脸上下不来， / 他这次的表现",
    "ĐÁP ÁN": "他这次的表现让他脸上下不来，很失落。",
    "PHIÊN ÂM": "tā zhècì de biǎoxiàn ràng tā liǎnshàng xiàbùlái , hěn shīluò ."
  },
  {
    "STT": 100,
    "SẮP XẾP CÂU": "说错话，/ 非常尴尬。 / 他因为 / 脸上下不来，",
    "ĐÁP ÁN": "他因为说错话，脸上下不来，非常尴尬。",
    "PHIÊN ÂM": "tā yīnwèi shuō cuòhuà , liǎnshàng xiàbùlái , fēicháng gāngà ."
  },
  {
    "STT": 101,
    "CHỮ": "L",
    "CỤM": "脸往哪里放",
    "PINYIN": "liǎn wǎng nǎ lǐ fàng",
    "NGHĨA": "指失了体面,不好意思。\r\n也作“老脸往哪儿搁”、“脸都没处搁”、 “脸搁在啥地方”。",
    "SẮP XẾP CÂU": "很丢人。 / 脸往哪里放， / 让他觉得 / 这次失误",
    "ĐÁP ÁN": "这次失误让他觉得脸往哪里放，很丢人。",
    "PHIÊN ÂM": "zhècì shīwù ràng tā juéde liǎnwǎng nǎlǐ fàng , hěn diūrén ."
  },
  {
    "STT": 102,
    "SẮP XẾP CÂU": "脸往哪里放！ / 被他这么一骂，/ 我",
    "ĐÁP ÁN": "被他这么一骂，我脸往哪里放！",
    "PHIÊN ÂM": "bèi tā zhème yīmà , wǒ liǎnwǎng nǎlǐ fàng ！"
  },
  {
    "STT": 103,
    "CHỮ": "L",
    "CỤM": "连轴转",
    "PINYIN": "lián zhóu zhuàn",
    "NGHĨA": "比喻夜以继日不停地工作或做事。",
    "SẮP XẾP CÂU": "忙得/ 没时间休息。/ 连轴转， / 他最近工作",
    "ĐÁP ÁN": "他最近工作忙得连轴转，没时间休息。",
    "PHIÊN ÂM": "tā zuìjìn gōngzuò máng dé liánzhóuzhuàn , méi shíjiān xiūxi ."
  },
  {
    "STT": 104,
    "SẮP XẾP CÂU": "工作太忙了，/ 天天 / 连轴转。 / 这段时间",
    "ĐÁP ÁN": "这段时间工作太忙了，天天连轴转。",
    "PHIÊN ÂM": "zhè duànshíjiān gōngzuò tàimáng le , tiāntiān liánzhóuzhuàn ."
  },
  {
    "STT": 105,
    "CHỮ": "L",
    "CỤM": "连做梦也没有想到",
    "PINYIN": "lián zuò mèng yě méi yǒu xiǎng dào",
    "NGHĨA": "见“做梦也想不到”。",
    "SẮP XẾP CÂU": "会发生。 / 连做梦也没有想到 / 他/ 这件事情",
    "ĐÁP ÁN": "他连做梦也没有想到这件事会发生。",
    "PHIÊN ÂM": "tā lián zuòmèng yě méiyǒu xiǎngdào zhèjiàn shìhuì fāshēng ."
  },
  {
    "STT": 106,
    "SẮP XẾP CÂU": "连做梦也没有想到/ 事情的结局，/ 会是这样。",
    "ĐÁP ÁN": "事情的结局，连做梦也没有想到会是这样。",
    "PHIÊN ÂM": "shìqing de jiéjú , lián zuòmèng yě méiyǒu xiǎngdào huì shì zhèyàng ."
  },
  {
    "STT": 107,
    "CHỮ": "L",
    "CỤM": "凉白菜干",
    "PINYIN": "liáng bái cài gān",
    "NGHĨA": "比喻人受到冷落。",
    "SẮP XẾP CÂU": "就像/ 没有什么特别。 / 凉白菜干， / 这道菜的味道",
    "ĐÁP ÁN": "这道菜的味道就像凉白菜干，没有什么特别。",
    "PHIÊN ÂM": "zhè dàocài de wèidao jiù xiàng liáng báicài gān , méiyǒu shénme tèbié ."
  },
  {
    "STT": 108,
    "SẮP XẾP CÂU": "都没有。 / 他这个人 / 凉白菜干，/ 一点用",
    "ĐÁP ÁN": "他这个人凉白菜干，一点用都没有。",
    "PHIÊN ÂM": "tā zhège rénliáng báicài gān , yīdiǎn yòng dū méiyǒu ."
  },
  {
    "STT": 109,
    "CHỮ": "L",
    "CỤM": "两边倒",
    "PINYIN": "liǎng biān dǎo",
    "NGHĨA": "形容摇摆不定,无自己的主见和坚定 的立场。",
    "SẮP XẾP CÂU": "让/ 没有赢家。 / 两边倒， / 这场斗争",
    "ĐÁP ÁN": "这场斗争让两边倒，没有赢家。",
    "PHIÊN ÂM": "zhèchǎng dòuzhēng ràng liǎngbiāndǎo , méiyǒu yíngjiā ."
  },
  {
    "STT": 110,
    "SẮP XẾP CÂU": "就帮谁。 / 他 / 谁对他有利 / 两边倒，",
    "ĐÁP ÁN": "他两边倒，谁对他有利就帮谁。",
    "PHIÊN ÂM": "tā liǎngbiāndǎo , shéi duì tā yǒulì jiù bāng shéi ."
  },
  {
    "STT": 111,
    "CHỮ": "L",
    "CỤM": "两步并作一步",
    "PINYIN": "liǎng bù bìng zuò yī bù",
    "NGHĨA": "见“三步并作两步”。",
    "SẮP XẾP CÂU": "他/ 走得很快。 / 两步并作一步，",
    "ĐÁP ÁN": "他两步并作一步，走得很快。",
    "PHIÊN ÂM": "tā liǎngbù bìngzuò yībù , zǒudé hěnkuài ."
  },
  {
    "STT": 112,
    "SẮP XẾP CÂU": "两步并作一步地/ 为了赶时间， / 他/ 往前跑。",
    "ĐÁP ÁN": "为了赶时间，他两步并作一步地往前跑。",
    "PHIÊN ÂM": "wèile gǎnshíjiān , tā liǎngbù bìngzuò yībù dì wǎngqián pǎo ."
  },
  {
    "STT": 113,
    "CHỮ": "L",
    "CỤM": "量柴头，数米粒",
    "PINYIN": "liáng chái tou, shǔ mǐ lì",
    "NGHĨA": "形容持家非常节俭、仔细。\r\n也作“量柴头,数米角”。",
    "SẮP XẾP CÂU": "他做事情/ 非常细致。/ 量柴头，数米粒，/ 总是",
    "ĐÁP ÁN": "他做事情总是量柴头，数米粒，非常细致。",
    "PHIÊN ÂM": "tā zuò shìqing zǒngshì liàng cháitóu , shù mǐlì , fēicháng xìzhì ."
  },
  {
    "STT": 114,
    "SẮP XẾP CÂU": "她/ 量柴头，数米粒。 / 过日子 / 很精打细算，",
    "ĐÁP ÁN": "她过日子很精打细算，量柴头，数米粒。",
    "PHIÊN ÂM": "tā guòrìzi hěn jīngdǎxìsuàn , liàng cháitóu , shù mǐlì ."
  },
  {
    "STT": 115,
    "CHỮ": "L",
    "CỤM": "亮底牌",
    "PINYIN": "liàng dǐ pái",
    "NGHĨA": "底牌:扑克牌游戏中最后亮出来的牌, 比喻底细、内情。\r\n喻指最终揭示事情的真相或底细。",
    "SẮP XẾP CÂU": "自己的实力。 / 显示出 / 亮底牌， / 他在谈判中",
    "ĐÁP ÁN": "他在谈判中亮底牌，显示出自己的实力。",
    "PHIÊN ÂM": "tā zài tánpàn zhōng liàngdǐpái , xiǎnshì chū zìjǐ de shílì ."
  },
  {
    "STT": 116,
    "SẮP XẾP CÂU": "谈判/ 他决定 / 亮底牌。 / 到了关键时刻，",
    "ĐÁP ÁN": "谈判到了关键时刻，他决定亮底牌。",
    "PHIÊN ÂM": "tánpàn dào le guānjiànshíkè , tā juédìng liàngdǐpái ."
  },
  {
    "STT": 117,
    "CHỮ": "L",
    "CỤM": "两个肩膀扛张嘴",
    "PINYIN": "liǎng gè jiān bǎng káng zhe zhāng zuǐ",
    "NGHĨA": "形容十分贫穷,光身一人,别无他 物。\r\n讥讽人两手空空来吃白食。\r\n也作“肩膀头子扛一张嘴”、“两个肩膀 担着一张嘴”、“两肩膀抬着张嘴”。",
    "SẮP XẾP CÂU": "他常常感到/ 很累。 / 两个肩膀扛张嘴， / 压力，",
    "ĐÁP ÁN": "他常常感到压力，两个肩膀扛张嘴，很累。",
    "PHIÊN ÂM": "tā chángcháng gǎndào yālì , liǎnggè jiānbǎng káng zhāngzuǐ , hěnlěi ."
  },
  {
    "STT": 118,
    "SẮP XẾP CÂU": "他/ 两个肩膀扛张嘴。 / 好吃懒做，",
    "ĐÁP ÁN": "他好吃懒做，两个肩膀扛张嘴。",
    "PHIÊN ÂM": "tā hàochīlǎnzuò , liǎnggè jiānbǎng káng zhāngzuǐ ."
  },
  {
    "STT": 119,
    "CHỮ": "L",
    "CỤM": "两个拳头打人",
    "PINYIN": "liǎng gè quán tou dǎ rén",
    "NGHĨA": "指战术上分散使用兵力。",
    "SẮP XẾP CÂU": "他用/ 力量。/ 两个拳头打人，/ 很有",
    "ĐÁP ÁN": "他用两个拳头打人，很有力量。",
    "PHIÊN ÂM": "tā yòng liǎnggè quántou dǎrén , hěn yǒu lìliang ."
  },
  {
    "STT": 120,
    "SẮP XẾP CÂU": "网上网下同时/ 两个拳头打人, / 展开调查。/ 警方",
    "ĐÁP ÁN": "警方两个拳头打人, 网上网下同时展开调查。",
    "PHIÊN ÂM": "jǐngfāng liǎnggè quántou dǎrén , wǎngshàngwǎng xià tóngshí zhǎnkāi diàochá ."
  },
  {
    "STT": 121,
    "CHỮ": "L",
    "CỤM": "亮红灯",
    "PINYIN": "liàng hóng dēng",
    "NGHĨA": "喻指拒绝某人或禁止某事。",
    "SẮP XẾP CÂU": "婚姻/ 亮红灯了。/ 他们的/ 早就",
    "ĐÁP ÁN": "他们的婚姻早就亮红灯了。",
    "PHIÊN ÂM": "tāmen de hūnyīn zǎojiù liànghóngdēng le ."
  },
  {
    "STT": 122,
    "SẮP XẾP CÂU": "必须立刻/ 亮红灯了, / 调整作息。/ 已经/ 他的健康状况",
    "ĐÁP ÁN": "他的健康状况已经亮红灯了, 必须立刻调整作息。",
    "PHIÊN ÂM": "tā de jiànkāngzhuàngkuàng yǐjīng liànghóngdēng le , bìxū lìkè tiáozhěng zuòxī ."
  },
  {
    "STT": 123,
    "CHỮ": "L",
    "CỤM": "亮红牌",
    "PINYIN": "liàng hóng pái",
    "NGHĨA": "指取消做某事的资格或提出严重警告。",
    "SẮP XẾP CÂU": "终于被老板/ 太多次,/ 亮红牌。/ 他上班迟到",
    "ĐÁP ÁN": "他上班迟到太多次,终于被老板亮红牌。",
    "PHIÊN ÂM": "tā shàngbān chídào tài duōcì , zhōngyú bèi lǎobǎn liàng hóngpái ."
  },
  {
    "STT": 124,
    "SẮP XẾP CÂU": "将他罚出场外。 / 裁判 / 亮红牌，",
    "ĐÁP ÁN": "裁判亮红牌，将他罚出场外。",
    "PHIÊN ÂM": "cáipàn liàng hóngpái , jiàng tā fá chūchǎng wài ."
  },
  {
    "STT": 125,
    "CHỮ": "L",
    "CỤM": "亮黄牌",
    "PINYIN": "liàng huáng pái",
    "NGHĨA": "借指提出警告。黄牌是体育比赛中裁判用来警告违规运动员的黄色标志。",
    "SẮP XẾP CÂU": "被/ 警告一次。 / 亮黄牌， / 他在比赛中",
    "ĐÁP ÁN": "他在比赛中被亮黄牌，警告一次。",
    "PHIÊN ÂM": "tā zài bǐsài zhōng bèi liàng huángpái , jǐnggào yīcì ."
  },
  {
    "STT": 126,
    "SẮP XẾP CÂU": "警告他。 / 裁判 / 亮黄牌",
    "ĐÁP ÁN": "裁判亮黄牌警告他。",
    "PHIÊN ÂM": "cáipàn liàng huángpáijǐnggào tā ."
  },
  {
    "STT": 127,
    "CHỮ": "L",
    "CỤM": "两脚踏住平川地",
    "PINYIN": "liǎng jiǎo tà zhù píng chuān dì",
    "NGHĨA": "比喻平安无事了。",
    "SẮP XẾP CÂU": "站着。/ 他/ 两脚踏住平川地，/ 稳稳地",
    "ĐÁP ÁN": "他两脚踏住平川地，稳稳地站着。",
    "PHIÊN ÂM": "tā liǎng jiǎotà zhù píngchuān dì , wěnwěndì zhàn zhe ."
  },
  {
    "STT": 128,
    "SẮP XẾP CÂU": "他终于/ 两脚踏住平川地了。/ 找到了 / 稳定的工作，",
    "ĐÁP ÁN": "他终于找到了稳定的工作，两脚踏住平川地了。",
    "PHIÊN ÂM": "tā zhōngyú zhǎodào le wěndìng de gōngzuò , liǎng jiǎotà zhù píngchuān dì le ."
  },
  {
    "STT": 129,
    "CHỮ": "L",
    "CỤM": "凉了半截",
    "PINYIN": "liáng le bàn jié",
    "NGHĨA": "失望，心灰意冷。",
    "SẮP XẾP CÂU": "再喝了。 / 凉了半截， / 这杯茶/ 没法",
    "ĐÁP ÁN": "这杯茶凉了半截，没法再喝了。",
    "PHIÊN ÂM": "zhèbēi chá liánglebànjié , méifǎ zài hē le ."
  },
  {
    "STT": 130,
    "SẮP XẾP CÂU": "对这件事/ 听了他的解释，/ 凉了半截，/ 已经不抱希望了。/ 我",
    "ĐÁP ÁN": "听了他的解释，我凉了半截，对这件事已经不抱希望了。",
    "PHIÊN ÂM": "tīng le tā de jiěshì , wǒ liánglebànjié , duì zhèjiàn shì yǐjīng bùbào xīwàng le ."
  },
  {
    "STT": 131,
    "CHỮ": "L",
    "CỤM": "两面刀",
    "PINYIN": "liǎng miàn dāo",
    "NGHĨA": "指人表面一套背地一套,11是心非。",
    "SẮP XẾP CÂU": "他/ 让人很难取舍。 / 两面刀， / 在这件事中像",
    "ĐÁP ÁN": "他在这件事中像两面刀，让人很难取舍。",
    "PHIÊN ÂM": "tā zài zhèjiàn shìzhōng xiàng liǎngmiàn dāo , ràng rén hěn nán qǔshě ."
  },
  {
    "STT": 132,
    "SẮP XẾP CÂU": "他是个 / 表面一套，背后一套。 / 两面刀，",
    "ĐÁP ÁN": "他是个两面刀，表面一套，背后一套。",
    "PHIÊN ÂM": "tā shì gè liǎngmiàn dāo , biǎomiàn yītào , bèihòu yītào ."
  },
  {
    "STT": 133,
    "CHỮ": "L",
    "CỤM": "两面光",
    "PINYIN": "liǎng miàn guāng",
    "NGHĨA": "见“面面光”。",
    "SẮP XẾP CÂU": "做得/ 没有问题。 / 两面光， / 这件事",
    "ĐÁP ÁN": "这件事做得两面光，没有问题。",
    "PHIÊN ÂM": "zhèjiàn shì zuò dé liǎngmiànguāng , méiyǒu wèntí ."
  },
  {
    "STT": 134,
    "SẮP XẾP CÂU": "他 / 两边都 / 两面光，/ 不得罪。",
    "ĐÁP ÁN": "他两面光，两边都不得罪。",
    "PHIÊN ÂM": "tā liǎngmiànguāng , liǎngbian dū bù dézui ."
  },
  {
    "STT": 135,
    "CHỮ": "L",
    "CỤM": "亮牌子",
    "PINYIN": "liàng pái zi",
    "NGHĨA": "指说明身份,挑明事情。",
    "SẮP XẾP CÂU": "自己的实力。 / 显示出 / 亮牌子， / 他在比赛中",
    "ĐÁP ÁN": "他在比赛中亮牌子，显示出自己的实力。",
    "PHIÊN ÂM": "tā zài bǐsài zhōngliàng páizi , xiǎnshì chū zìjǐ de shílì ."
  },
  {
    "STT": 136,
    "SẮP XẾP CÂU": "这项计划。 / 他决定 / 亮牌子，/ 公开支持",
    "ĐÁP ÁN": "他决定亮牌子，公开支持这项计划。",
    "PHIÊN ÂM": "tā juédìng liàng páizi , gōngkāi zhīchí zhèxiàng jìhuà ."
  },
  {
    "STT": 137,
    "CHỮ": "L",
    "CỤM": "两手捧着个刺猬",
    "PINYIN": "liǎng shǒu pěng zhe gè cì wèi",
    "NGHĨA": "比喻人左右为难,进退两难。",
    "SẮP XẾP CÂU": "他/ 两手捧着个刺猬。/ 小心翼翼地，",
    "ĐÁP ÁN": "他小心翼翼地，两手捧着个刺猬。",
    "PHIÊN ÂM": "tā xiǎoxīnyìyì dì , liǎngshǒu pěng zhe gè cìwei ."
  },
  {
    "STT": 138,
    "SẮP XẾP CÂU": "让他 / 左右为难，/ 像两手捧着个刺猬一样。 / 这件事",
    "ĐÁP ÁN": "这件事让他左右为难，像两手捧着个刺猬一样。",
    "PHIÊN ÂM": "zhèjiàn shì ràng tā zuǒyòuwéinán , xiàng liǎngshǒu pěng zhe gè cìwei yīyàng ."
  },
  {
    "STT": 139,
    "CHỮ": "L",
    "CỤM": "两手抓",
    "PINYIN": "liǎng shǒu zhuā",
    "NGHĨA": "比喻做事重视从多个方面着手,使各 项工作齐头并进。",
    "SẮP XẾP CÂU": "需要/ 各方面。 / 才能兼顾 / 两手抓， / 他在工作中",
    "ĐÁP ÁN": "他在工作中需要两手抓，才能兼顾各方面。",
    "PHIÊN ÂM": "tā zài gōngzuò zhōng xūyào liǎngshǒuzhuā , cáinéng jiāngù gè fāngmiàn ."
  },
  {
    "STT": 140,
    "SẮP XẾP CÂU": "公司要 / 既要抓生产， / 又要抓销售。 / 两手抓，",
    "ĐÁP ÁN": "公司要两手抓，既要抓生产，又要抓销售。",
    "PHIÊN ÂM": "gōngsī yào liǎngshǒuzhuā , jìyào zhuā shēngchǎn , yòu yào zhuā xiāoshòu ."
  },
  {
    "STT": 141,
    "CHỮ": "L",
    "CỤM": "两手攥空拳",
    "PINYIN": "liǎng shǒu zuàn kōng quán",
    "NGHĨA": "形容人很穷,一无所有。\r\n也作“两手握空拳”、“两手攥空拳头”。",
    "SẮP XẾP CÂU": "实质内容。 / 两手攥空拳， / 他总是/ 没有",
    "ĐÁP ÁN": "他总是两手攥空拳，没有实质内容。",
    "PHIÊN ÂM": "tā zǒngshì liǎngshǒu zuàn kōngquán , méiyǒu shízhì nèiróng ."
  },
  {
    "STT": 142,
    "SẮP XẾP CÂU": "投资/ 两手攥空拳。 / 他这次/ 失败了，",
    "ĐÁP ÁN": "他这次投资失败了，两手攥空拳。",
    "PHIÊN ÂM": "tā zhècì tóuzī shībài le , liǎngshǒu zuàn kōngquán ."
  },
  {
    "STT": 143,
    "CHỮ": "L",
    "CỤM": "两条腿走路",
    "PINYIN": "liǎng tiáo tuǐ zǒu lù",
    "NGHĨA": "比喻以多种途径办事。",
    "SẮP XẾP CÂU": "稳定。 / 两条腿走路， / 他选择/ 更加",
    "ĐÁP ÁN": "他选择两条腿走路，更加稳定。",
    "PHIÊN ÂM": "tā xuǎnzé liǎngtiáotuǐzǒu lù , gèngjiā wěndìng ."
  },
  {
    "STT": 144,
    "SẮP XẾP CÂU": "两条腿走路，/ 又要发展农业。 / 发展经济要 / 既要发展工业，",
    "ĐÁP ÁN": "发展经济要两条腿走路，既要发展工业，又要发展农业。",
    "PHIÊN ÂM": "fāzhǎn jīngjì yào liǎngtiáotuǐzǒu lù , jì yào fāzhǎn gōngyè , yòu yào fāzhǎn nóngyè ."
  },
  {
    "STT": 145,
    "CHỮ": "L",
    "CỤM": "两条心",
    "PINYIN": "liǎng tiáo xīn",
    "NGHĨA": "喻指不忠实,有二心。",
    "SẮP XẾP CÂU": "他对/ 两条心。 / 明显是 / 这件事情的态度",
    "ĐÁP ÁN": "他对这件事情的态度明显是两条心。",
    "PHIÊN ÂM": "tā duì zhèjiàn shìqing de tàidu míngxiǎn shì liǎngtiáo xīn ."
  },
  {
    "STT": 146,
    "SẮP XẾP CÂU": "很难。 / 他们 / 合作起来/ 两条心，",
    "ĐÁP ÁN": "他们两条心，合作起来很难。",
    "PHIÊN ÂM": "tāmen liǎngtiáo xīn , hézuò qǐlai hěnnán ."
  },
  {
    "STT": 147,
    "CHỮ": "L",
    "CỤM": "两头摸不着缰",
    "PINYIN": "liǎng tóu mō bù zháo jiāng",
    "NGHĨA": "比喻对发生的事无从下手解决。",
    "SẮP XẾP CÂU": "他/ 无从下手。 / 两头摸不着缰， / 在这件事情上，",
    "ĐÁP ÁN": "他在这件事情上，两头摸不着缰，无从下手。",
    "PHIÊN ÂM": "tā zài zhèjiàn shìqing shàng , liǎngtóu mōbuzháo jiāng , wúcóngxiàshǒu ."
  },
  {
    "STT": 148,
    "SẮP XẾP CÂU": "他同时/ 非常辛苦。 / 兼顾两份工作， / 两头摸不着缰，",
    "ĐÁP ÁN": "他同时兼顾两份工作，两头摸不着缰，非常辛苦。",
    "PHIÊN ÂM": "tā tóngshí jiāngù liǎngfèn gōngzuò , liǎngtóu mōbuzháo jiāng , fēicháng xīnkǔ ."
  },
  {
    "STT": 149,
    "CHỮ": "L",
    "CỤM": "良心背在背上",
    "PINYIN": "liáng xīn bèi zài bèi shàng",
    "NGHĨA": "指责人心不正,没良心。\r\n也作“良心长到肋条上”。",
    "SẮP XẾP CÂU": "不为别人着想。/ 他/ 做事 / 良心背在背上，",
    "ĐÁP ÁN": "他良心背在背上，做事不为别人着想。",
    "PHIÊN ÂM": "tā liángxīn bèi zài bèishàng , zuòshì bù wéi biéren zhuóxiǎng ."
  },
  {
    "STT": 150,
    "SẮP XẾP CÂU": "他做了/ 不得安宁。 / 这种事， / 良心背在背上，",
    "ĐÁP ÁN": "他做了这种事，良心背在背上，不得安宁。",
    "PHIÊN ÂM": "tā zuò le zhèzhǒng shì , liángxīn bèi zài bèishàng , bùdé ānníng ."
  },
  {
    "STT": 151,
    "CHỮ": "L",
    "CỤM": "良心别在裤腰里",
    "PINYIN": "liáng xīn bié zài kù yāo lǐ",
    "NGHĨA": "指违心下背叛忤逆等坏事。",
    "SẮP XẾP CÂU": "帮助别人。 / 他/ 不愿意 / 良心别在裤腰里，",
    "ĐÁP ÁN": "他良心别在裤腰里，不愿意帮助别人。",
    "PHIÊN ÂM": "tā liángxīn bié zài kùyāo lǐ , bù yuànyì bāngzhù biéren ."
  },
  {
    "STT": 152,
    "SẮP XẾP CÂU": "都做得出来。 / 他这种人， / 良心别在裤腰里，/ 什么事",
    "ĐÁP ÁN": "他这种人，良心别在裤腰里，什么事都做得出来。",
    "PHIÊN ÂM": "tā zhèzhǒng rén , liángxīn bié zài kùyāo lǐ , shénme shì dū zuò dé chūlái ."
  },
  {
    "STT": 153,
    "CHỮ": "L",
    "CỤM": "良心叫狗吃了",
    "PINYIN": "liáng xīn jiào gǒu chī le",
    "NGHĨA": "斥责人卑鄙,丧尽天良。\r\n也作“良心叫狗给叼走了”。",
    "SẮP XẾP CÂU": "真是/ 令人失望。 / 良心叫狗吃了， / 他的行为",
    "ĐÁP ÁN": "他的行为真是良心叫狗吃了，令人失望。",
    "PHIÊN ÂM": "tā de xíngwéi zhēnshi liángxīn jiào gǒu chī le , lìngrén shīwàng ."
  },
  {
    "STT": 154,
    "SẮP XẾP CÂU": "他/ 这种事，/ 良心叫狗吃了！ / 竟然做出",
    "ĐÁP ÁN": "他竟然做出这种事，良心叫狗吃了！",
    "PHIÊN ÂM": "tā jìngrán zuòchū zhèzhǒng shì , liángxīn jiào gǒu chī le ！"
  },
  {
    "STT": 155,
    "CHỮ": "L",
    "CỤM": "两眼煤黑子",
    "PINYIN": "liǎng yǎn méi hēi zi",
    "NGHĨA": "形容人一字不识。",
    "SẮP XẾP CÂU": "不好。 / 两眼煤黑子，/ 形象/ 他",
    "ĐÁP ÁN": "他两眼煤黑子，形象不好。",
    "PHIÊN ÂM": "tā liǎngyǎn méihēizi , xíngxiàng bùhǎo ."
  },
  {
    "STT": 156,
    "SẮP XẾP CÂU": "该怎么办。 / 他 /不知道/ 两眼煤黑子，",
    "ĐÁP ÁN": "他两眼煤黑子，不知道该怎么办。",
    "PHIÊN ÂM": "tā liǎngyǎn méihēizi , bù zhīdào gāi zěnmebàn ."
  },
  {
    "STT": 157,
    "CHỮ": "L",
    "CỤM": "两眼一摸黑",
    "PINYIN": "liǎng yǎn yī mō hēi",
    "NGHĨA": "比喻底细、内情。\r\n喻指最终揭示事情的真相或底细。",
    "SẮP XẾP CÂU": "该怎么走。 / 完全不知道 / 两眼一摸黑， / 他在这个陌生的地方，",
    "ĐÁP ÁN": "他在这个陌生的地方，两眼一摸黑，完全不知道该怎么走。",
    "PHIÊN ÂM": "tā zài zhège mòshēng de dìfāng , liǎngyǎnyīmōhēi , wánquán bù zhīdào gāi zěnme zǒu ."
  },
  {
    "STT": 158,
    "SẮP XẾP CÂU": "他对/ 两眼一摸黑。 / 这个领域 / 完全不懂，",
    "ĐÁP ÁN": "他对这个领域完全不懂，两眼一摸黑。",
    "PHIÊN ÂM": "tā duì zhège lǐngyù wánquán bù dǒng , liǎngyǎnyīmōhēi ."
  },
  {
    "STT": 159,
    "CHỮ": "L",
    "CỤM": "两张皮",
    "PINYIN": "liǎng zhāng pí",
    "NGHĨA": "比喻各说各的，或各做各的。",
    "SẮP XẾP CÂU": "就像/ 互不相干。 / 两张皮， / 他和他朋友的关系",
    "ĐÁP ÁN": "他和他朋友的关系就像两张皮，互不相干。",
    "PHIÊN ÂM": "tā hé tā péngyou de guānxi jiù xiàng liǎngzhāngpí , hù bùxiānggān ."
  },
  {
    "STT": 160,
    "SẮP XẾP CÂU": "他的话和/ 完全不一致。 / 他的行为 / 是两张皮，",
    "ĐÁP ÁN": "他的话和他的行为是两张皮，完全不一致。",
    "PHIÊN ÂM": "tā dehuà hé tā de xíngwéi shì liǎngzhāngpí , wánquán bù yīzhì ."
  },
  {
    "STT": 161,
    "CHỮ": "L",
    "CỤM": "两只船合使一篷风",
    "PINYIN": "liǎng zhī chuán hé shǐ yī péng fēng",
    "NGHĨA": "比喻两人同受惠于一人。",
    "SẮP XẾP CÂU": "就像/ 相辅相成。 / 两只船合一篷风， / 他们的合作",
    "ĐÁP ÁN": "他们的合作就像两只船合使一篷风，相辅相成。",
    "PHIÊN ÂM": "tāmen de hézuò jiù xiàng liǎngzhī chuánhé shǐ yīpéng fēng , xiāngfǔxiāngchéng ."
  },
  {
    "STT": 162,
    "SẮP XẾP CÂU": "很高。 / 他们两人合作， / 两只船合使一篷风，/ 效率",
    "ĐÁP ÁN": "他们两人合作，两只船合使一篷风，效率很高。",
    "PHIÊN ÂM": "tāmen liǎngrén hézuò , liǎngzhī chuánhé shǐ yīpéng fēng , xiàolǜ hěn gāo ."
  },
  {
    "STT": 163,
    "CHỮ": "L",
    "CỤM": "撩虎须",
    "PINYIN": "liáo hǔ xū",
    "NGHĨA": "见“拔虎须”。",
    "SẮP XẾP CÂU": "他在/ 不必要的麻烦。 / 惹来 / 撩虎须，",
    "ĐÁP ÁN": "他在撩虎须，惹来不必要的麻烦。",
    "PHIÊN ÂM": "tā zài liáo hǔxū , rě lái bùbìyào de máfan ."
  },
  {
    "STT": 164,
    "SẮP XẾP CÂU": "他竟然/ 自找麻烦。 / 去 / 撩虎须，",
    "ĐÁP ÁN": "他竟然去撩虎须，自找麻烦。",
    "PHIÊN ÂM": "tā jìngrán qù liáo hǔxū , zìzhǎomáfan ."
  },
  {
    "STT": 165,
    "CHỮ": "L",
    "CỤM": "临渴才打井",
    "PINYIN": "lín kě cái dǎ jǐng",
    "NGHĨA": "比喻平时不做准备,事到临头才费劲 采取措施。",
    "SẮP XẾP CÂU": "太晚了。 / 临渴才打井， / 这次才",
    "ĐÁP ÁN": "这次才临渴才打井，太晚了。",
    "PHIÊN ÂM": "zhècì cái línkě cái dǎjǐng , tàiwǎn le ."
  },
  {
    "STT": 166,
    "SẮP XẾP CÂU": "计划性。 / 他总是 / 做事没有/ 临渴才打井，",
    "ĐÁP ÁN": "他总是临渴才打井，做事没有计划性。",
    "PHIÊN ÂM": "tā zǒngshì línkě cái dǎjǐng , zuòshì méiyǒu jìhuàxìng ."
  },
  {
    "STT": 167,
    "CHỮ": "L",
    "CỤM": "临上轿才扎耳朵眼儿",
    "PINYIN": "lín shàng jiào cái zhā ěr duo yǎn er",
    "NGHĨA": "比喻事到临头才仓促准备。 也作“临上轿再扎耳朵眼儿”。",
    "SẮP XẾP CÂU": "不足。 / 临上轿才扎耳朵眼儿， / 他/ 准备",
    "ĐÁP ÁN": "他临上轿才扎耳朵眼儿，准备不足。",
    "PHIÊN ÂM": "tā línshàng jiào cái zhā ěrduǒyǎnr , zhǔnbèi bùzú ."
  },
  {
    "STT": 168,
    "SẮP XẾP CÂU": "计划性。 / 他总是 / 做事没有/ 临上轿才扎耳朵眼儿，",
    "ĐÁP ÁN": "他总是临上轿才扎耳朵眼儿，做事没有计划性。",
    "PHIÊN ÂM": "tā zǒngshì línshàng jiào cái zhā ěrduǒyǎnr , zuòshì méiyǒu jìhuàxìng ."
  },
  {
    "STT": 169,
    "CHỮ": "L",
    "CỤM": "临时抱佛脚",
    "PINYIN": "lín shí bào fó jiǎo",
    "NGHĨA": "比喻事到临头才急于想办法应付。",
    "SẮP XẾP CÂU": "他/ 才开始/ 临时抱佛脚，/ 复习。",
    "ĐÁP ÁN": "他临时抱佛脚，才开始复习。",
    "PHIÊN ÂM": "tā línshí bàofójiǎo , cái kāishǐ fùxí ."
  },
  {
    "STT": 170,
    "SẮP XẾP CÂU": "考试/ 他还在 / 临时抱佛脚。 / 前一天晚上，",
    "ĐÁP ÁN": "考试前一天晚上，他还在临时抱佛脚。",
    "PHIÊN ÂM": "kǎoshì qiányītiān wǎnshàng , tā huán zài línshí bàofójiǎo ."
  },
  {
    "STT": 171,
    "CHỮ": "L",
    "CỤM": "临死还找个垫背的",
    "PINYIN": "lín sǐ hái zhǎo gè diàn bèi de",
    "NGHĨA": "见“死也要拉个垫背的”。",
    "SẮP XẾP CÂU": "不值得。 / 临死还找个垫背的， / 他/ 真是",
    "ĐÁP ÁN": "他临死还找个垫背的，真是不值得。",
    "PHIÊN ÂM": "tā línsǐ huán zhǎogè diànbèi de , zhēnshi bù zhíde ."
  },
  {
    "STT": 172,
    "SẮP XẾP CÂU": "他/ 坏人，/ 临死还找个垫背的！/ 真是个",
    "ĐÁP ÁN": "他真是个坏人，临死还找个垫背的！",
    "PHIÊN ÂM": "tā zhēnshi gè huàirén , línsǐ huán zhǎogè diànbèi de ！"
  },
  {
    "STT": 173,
    "CHỮ": "L",
    "CỤM": "临阵磨枪",
    "PINYIN": "lín zhèn mó qiāng",
    "NGHĨA": "快要打仗的时候才把枪头磨一磨。喻 指平时没准备,事情来了急忙应付也顶 点用。\r\n多用于应付考试——类的事情。",
    "SẮP XẾP CÂU": "他总是/ 考试前/ 临阵磨枪，/ 才熬夜复习。",
    "ĐÁP ÁN": "他总是临阵磨枪，考试前才熬夜复习。",
    "PHIÊN ÂM": "tā zǒngshì línzhènmóqiāng , kǎoshì qiáncái áoyè fùxí ."
  },
  {
    "STT": 174,
    "SẮP XẾP CÂU": "他总是 / 很低。/ 临阵磨枪，/ 效率",
    "ĐÁP ÁN": "他总是临阵磨枪，效率很低。",
    "PHIÊN ÂM": "tā zǒngshì línzhènmóqiāng , xiàolǜ hěn dī ."
  },
  {
    "STT": 175,
    "CHỮ": "L",
    "CỤM": "留把柄",
    "PINYIN": "liú bǎ bǐng",
    "NGHĨA": "把柄:喻指凭证,多指进行交涉或要挟 的凭证。\r\n喻指做事有纰漏而留给别人抓短的口 实或要挟的凭证。\r\n也作“落把柄”。",
    "SẮP XẾP CÂU": "就是给别人/ 在职场上, / 留把柄。/ 最忌讳的",
    "ĐÁP ÁN": "在职场上, 最忌讳的就是给别人留把柄。",
    "PHIÊN ÂM": "zàizhí chǎngshàng , zuì jìhuì de jiùshì gěi biéren liú bǎbǐng ."
  },
  {
    "STT": 176,
    "SẮP XẾP CÂU": "他做事/ 经常 / 留把柄 / 毛手毛脚的，/ 给别人。",
    "ĐÁP ÁN": "他做事毛手毛脚的，经常留把柄给别人。",
    "PHIÊN ÂM": "tā zuòshì máoshǒumáojiǎo de , jīngcháng liú bǎbǐng gěi biéren ."
  },
  {
    "STT": 177,
    "CHỮ": "L",
    "CỤM": "留点口水养牙齿",
    "PINYIN": "liú diǎn kǒu shuǐ yǎng yá chǐ",
    "NGHĨA": "指不再费力地劝人了。",
    "SẮP XẾP CÂU": "江湖/ 留点口水养牙齿。/ 说话得/ 险恶,",
    "ĐÁP ÁN": "江湖险恶, 说话得留点口水养牙齿。",
    "PHIÊN ÂM": "jiānghúxiǎnè , shuōhuà dé liúdiǎn kǒushuǐ yǎng yáchǐ ."
  },
  {
    "STT": 178,
    "SẮP XẾP CÂU": "这段时间/ 我们得 / 留点口水养牙齿。 / 经济紧张，",
    "ĐÁP ÁN": "这段时间经济紧张，我们得留点口水养牙齿。",
    "PHIÊN ÂM": "zhè duànshíjiān jīngjì jǐnzhāng , wǒmen dé liúdiǎn kǒushuǐ yǎng yáchǐ ."
  },
  {
    "STT": 179,
    "CHỮ": "L",
    "CỤM": "留后路",
    "PINYIN": "liú hòu lù",
    "NGHĨA": "喻指办事以防不测,预留退身之路。",
    "SẮP XẾP CÂU": "万一。 / 留后路， / 做事要/ 以防",
    "ĐÁP ÁN": "做事要留后路，以防万一。",
    "PHIÊN ÂM": "zuòshì yào liúhòulù , yǐfángwànyī ."
  },
  {
    "STT": 180,
    "SẮP XẾP CÂU": "他做事/ 总是给自己 / 留后路。 / 一向谨慎，",
    "ĐÁP ÁN": "他做事一向谨慎，总是给自己留后路。",
    "PHIÊN ÂM": "tā zuòshì yīxiàng jǐnshèn , zǒngshì gěi zìjǐ liúhòulù ."
  },
  {
    "STT": 181,
    "CHỮ": "L",
    "CỤM": "留后手",
    "PINYIN": "liú hòu shǒu",
    "NGHĨA": "指为避免将来被动,采取留有余地的 办法。",
    "SẮP XẾP CÂU": "不时之需。 / 留后手， / 他总是/ 以备",
    "ĐÁP ÁN": "他总是留后手，以备不时之需。",
    "PHIÊN ÂM": "tā zǒngshì liúhòushǒu , yǐbèi bùshízhīxū ."
  },
  {
    "STT": 182,
    "SẮP XẾP CÂU": "他做事/ 总是 / 留后手。 / 一向谨慎，",
    "ĐÁP ÁN": "他做事一向谨慎，总是留后手。",
    "PHIÊN ÂM": "tā zuòshì yīxiàng jǐnshèn , zǒngshì liúhòushǒu ."
  },
  {
    "STT": 183,
    "CHỮ": "L",
    "CỤM": "留后遗症",
    "PINYIN": "liú hòu yí zhèng",
    "NGHĨA": "后遗症,生病过后遗留下的一些症状。 比喻因事情处理不当而留下一系列消 极影响。",
    "SẮP XẾP CÂU": "可能会/ 影响长远。 / 留后遗症， / 这次事件",
    "ĐÁP ÁN": "这次事件可能会留后遗症，影响长远。",
    "PHIÊN ÂM": "zhècì shìjiàn kěnéng huìliú hòuyízhèng , yǐngxiǎng chángyuǎn ."
  },
  {
    "STT": 184,
    "SẮP XẾP CÂU": "留下了 / 严重的后遗症。 / 这次的决策",
    "ĐÁP ÁN": "这次的决策留下了严重的后遗症。",
    "PHIÊN ÂM": "zhècì de juécè liúxià le yánzhòng de hòuyízhèng ."
  },
  {
    "STT": 185,
    "CHỮ": "L",
    "CỤM": "留话柄",
    "PINYIN": "liú huà bǐng",
    "NGHĨA": "指做事有纰漏而给别人留下议论的口实。\r\n也作“落话把”、“落话柄”。",
    "SẮP XẾP CÂU": "抓住把柄。 / 以免被人 / 留话柄， / 不要随便",
    "ĐÁP ÁN": "不要随便留话柄，以免被人抓住把柄。",
    "PHIÊN ÂM": "bùyào suíbiàn liú huàbǐng , yǐmiǎn bèi rén zhuāzhù bǎbǐng ."
  },
  {
    "STT": 186,
    "SẮP XẾP CÂU": "经常 / 留话柄 / 他说话不注意，/ 给别人。",
    "ĐÁP ÁN": "他说话不注意，经常留话柄给别人。",
    "PHIÊN ÂM": "tā shuōhuà bù zhùyì , jīngcháng liú huàbǐng gěi biéren ."
  },
  {
    "STT": 187,
    "CHỮ": "L",
    "CỤM": "留祸根",
    "PINYIN": "liú huò gēn",
    "NGHĨA": "指留下引发灾难的根源。",
    "SẮP XẾP CÂU": "留祸根。 / 可能会 / 如果不处理， / 这件事情",
    "ĐÁP ÁN": "这件事情如果不处理，可能会留祸根。",
    "PHIÊN ÂM": "zhèjiàn shìqing rúguǒ bù chǔlǐ , kěnéng huìliú huògēn ."
  },
  {
    "STT": 188,
    "SẮP XẾP CÂU": "这次/ 留下了祸根。 / 处理不当，",
    "ĐÁP ÁN": "这次处理不当，留下了祸根。",
    "PHIÊN ÂM": "zhècì chùlǐbùdāng , liúxià le huògēn ."
  },
  {
    "STT": 189,
    "CHỮ": "L",
    "CỤM": "留空子",
    "PINYIN": "liú kòng zi",
    "NGHĨA": "指给别人留下可乘之机。",
    "SẮP XẾP CÂU": "日后修改。 / 留了空子， / 他在合同中/ 以便",
    "ĐÁP ÁN": "他在合同中留了空子，以便日后修改。",
    "PHIÊN ÂM": "tā zài hétóng zhōngliú le kòngzi , yǐbiàn rìhòu xiūgǎi ."
  },
  {
    "STT": 190,
    "SẮP XẾP CÂU": "钻空子。 / 计划书里 / 容易被人/ 留了空子，",
    "ĐÁP ÁN": "计划书里留了空子，容易被人钻空子。",
    "PHIÊN ÂM": "jìhuàshū lǐ liú le kòngzi , róngyì bèi rén zuānkòngzi ."
  },
  {
    "STT": 191,
    "CHỮ": "L",
    "CỤM": "流口水",
    "PINYIN": "liú kǒu shuǐ",
    "NGHĨA": "指看到好吃、好喝的东西又吃不到、喝 不到的时候往肚里咽口水的样子。\r\n喻指 迫切希望得到某人或某物。",
    "SẮP XẾP CÂU": "看到/ 流口水。 / 他不禁 / 美食，",
    "ĐÁP ÁN": "看到美食，他不禁流口水。",
    "PHIÊN ÂM": "kàndào měishí , tā bùjīn liúkǒushuǐ ."
  },
  {
    "STT": 192,
    "SẮP XẾP CÂU": "忍不住 / 流口水。 / 看到好吃的，/ 孩子",
    "ĐÁP ÁN": "看到好吃的，孩子忍不住流口水。",
    "PHIÊN ÂM": "kàndào hàochī de , háizi rěnbuzhù liúkǒushuǐ ."
  },
  {
    "STT": 193,
    "CHỮ": "L",
    "CỤM": "流泪眼逢流泪眼，断肠人遇断肠人",
    "PINYIN": "liú lèi yǎn féng liú lèi yǎn, duàn cháng rén yù duàn cháng rén",
    "NGHĨA": "断肠:形容极度思念或悲痛。\r\n指悲痛伤心的人碰在一起。\r\n也作“流泪眼观流泪眼,断肠人伴断肠 人”、“流泪眼观流泪眼,断肠人对断肠人”、“流泪眼观流泪眼,断肠人看断肠人”。",
    "SẮP XẾP CÂU": "断肠人遇断肠人。 / 流泪眼逢流泪眼， / 在这伤心的场合，",
    "ĐÁP ÁN": "在这伤心的场合，流泪眼逢流泪眼，断肠人遇断肠人。",
    "PHIÊN ÂM": "zài zhè shāngxīn de chǎnghé , liúlèi yǎnféng liúlèi yǎn , duànchángrén yù duànchángrén ."
  },
  {
    "STT": 194,
    "SẮP XẾP CÂU": "他们两人/ 流泪眼逢流泪眼，断肠人遇断肠人。/ 遭遇不幸，/ 都是",
    "ĐÁP ÁN": "他们两人都是遭遇不幸，流泪眼逢流泪眼，断肠人遇断肠人。",
    "PHIÊN ÂM": "tāmen liǎngrén dū shì zāoyù bùxìng , liúlèi yǎnféng liúlèi yǎn , duànchángrén yù duànchángrén ."
  },
  {
    "STT": 195,
    "CHỮ": "L",
    "CỤM": "柳树上著刀，桑树上出血",
    "PINYIN": "liǔ shù shàng zhuó dāo, sāng shù shàng chū xuè",
    "NGHĨA": "比喻代人受过。\r\n比喻灾祸牵累 他人。",
    "SẮP XẾP CÂU": "心情烦躁。 / 这天气/ 柳树上著刀，桑树上出血， / 真是",
    "ĐÁP ÁN": "这天气真是柳树上著刀，桑树上出血，心情烦躁。",
    "PHIÊN ÂM": "zhè tiānqì zhēnshi liǔshù shàng zhedāo , sāngshù shàng chūxuè , xīnqíng fánzào ."
  },
  {
    "STT": 196,
    "SẮP XẾP CÂU": "他明明是无辜的， / 真是 / 柳树上著刀，桑树上出血。 / 却被冤枉，",
    "ĐÁP ÁN": "他明明是无辜的，却被冤枉，真是柳树上著刀，桑树上出血。",
    "PHIÊN ÂM": "tā míngmíng shì wúgū de , què bèi yuānwang , zhēnshi liǔshù shàng zhedāo , sāngshù shàng chūxuè ."
  },
  {
    "STT": 197,
    "CHỮ": "L",
    "CỤM": "留余地",
    "PINYIN": "liú yú dì",
    "NGHĨA": "喻指说话做事不走极端,留下回旋的 地步。\r\n也作“留地步”。",
    "SẮP XẾP CÂU": "将来的调整。 / 留余地， / 做事要/ 以便",
    "ĐÁP ÁN": "做事要留余地，以便将来的调整。",
    "PHIÊN ÂM": "zuòshì yào liúyúdì , yǐbiàn jiānglái de tiáozhěng ."
  },
  {
    "STT": 198,
    "SẮP XẾP CÂU": "留余地，/ 别把话说/ 说话做事都要 / 死了。",
    "ĐÁP ÁN": "说话做事都要留余地，别把话说死了。",
    "PHIÊN ÂM": "shuōhuà zuòshì dū yào liúyúdì , bié bǎ huà shuō sǐ le ."
  },
  {
    "STT": 199,
    "CHỮ": "L",
    "CỤM": "六月里下雪",
    "PINYIN": "liù yuè lǐ xià xuě",
    "NGHĨA": "比喻事情发生得蹊跷、稀罕。",
    "SẮP XẾP CÂU": "真是/ 不可思议。 / 六月里下雪， / 这次事件",
    "ĐÁP ÁN": "这次事件真是六月里下雪，不可思议。",
    "PHIÊN ÂM": "zhècì shìjiàn zhēnshi liùyuè lǐ xiàxuě , bùkěsīyì ."
  },
  {
    "STT": 200,
    "SẮP XẾP CÂU": "完成这个任务，/ 六月里下雪。 / 他想要在一天之内 / 简直是",
    "ĐÁP ÁN": "他想要在一天之内完成这个任务，简直是六月里下雪。",
    "PHIÊN ÂM": "tā xiǎngyào zài yītiān zhīnèi wánchéng zhège rènwu , jiǎnzhí shì liùyuè lǐ xiàxuě ."
  },
  {
    "STT": 201,
    "CHỮ": "L",
    "CỤM": "龙虎斗",
    "PINYIN": "lóng hǔ dòu",
    "NGHĨA": "比喻强者之间势均力敌的争斗。",
    "SẮP XẾP CÂU": "就像/ 精彩纷呈。 / 龙虎斗， / 这场比赛",
    "ĐÁP ÁN": "这场比赛就像龙虎斗，精彩纷呈。",
    "PHIÊN ÂM": "zhèchǎng bǐsài jiù xiàng lónghǔdòu , jīngcǎifēnchéng ."
  },
  {
    "STT": 202,
    "SẮP XẾP CÂU": "精彩。 / 这次的比赛是 / 龙虎斗，/ 非常",
    "ĐÁP ÁN": "这次的比赛是龙虎斗，非常精彩。",
    "PHIÊN ÂM": "zhècì de bǐsài shì lónghǔdòu , fēicháng jīngcǎi ."
  },
  {
    "STT": 203,
    "CHỮ": "L",
    "CỤM": "笼中之鸟，网内之鱼",
    "PINYIN": "lóng zhōng zhī niǎo, wǎng nèi zhī yú",
    "NGHĨA": "比喻陷入困境,难以逃脱。 \r\n也作“笼中之鸟,釜中之鱼”。",
    "SẮP XẾP CÂU": "想要自由。 / 就像/ 笼中之鸟，网内之鱼，/ 他觉得自己",
    "ĐÁP ÁN": "他觉得自己就像笼中之鸟，网内之鱼，想要自由。",
    "PHIÊN ÂM": "tā juéde zìjǐ jiù xiàng lóngzhōngzhīniǎo , wǎngnèi zhīyú , xiǎngyào zìyóu ."
  },
  {
    "STT": 204,
    "SẮP XẾP CÂU": "像笼中之鸟，网内之鱼一样。 / 困住了， / 他被",
    "ĐÁP ÁN": "他被困住了，像笼中之鸟，网内之鱼一样。",
    "PHIÊN ÂM": "tā bèi kùnzhù le , xiàng lóngzhōngzhīniǎo , wǎngnèi zhīyú yīyàng ."
  },
  {
    "STT": 205,
    "CHỮ": "L",
    "CỤM": "漏风声",
    "PINYIN": "lòu fēng shēng",
    "NGHĨA": "指走漏消息。\r\n也作“露风声”。",
    "SẮP XẾP CÂU": "肯定有人/ 项目被对手/ 漏风声。/ 截胡了,",
    "ĐÁP ÁN": "项目被对手截胡了, 肯定有人漏风声。",
    "PHIÊN ÂM": "xiàngmù bèi duìshǒu jiéhú le , kěndìng yǒurén lòufēngshēng ."
  },
  {
    "STT": 206,
    "SẮP XẾP CÂU": "这件事/ 就 / 漏风声了。 / 还没正式宣布，",
    "ĐÁP ÁN": "这件事还没正式宣布，就漏风声了。",
    "PHIÊN ÂM": "zhèjiàn shì huán méi zhèngshì xuānbù , jiù lòufēngshēng le ."
  },
  {
    "STT": 207,
    "CHỮ": "L",
    "CỤM": "驴不跑怨鞍不好",
    "PINYIN": "lǘ bù pǎo yuàn ān bù hǎo",
    "NGHĨA": "比喻出现问题不从自身找原因,却赖 在客观条件上。",
    "SẮP XẾP CÂU": "检讨自己。 / 驴不跑怨鞍不好， / 他总是/ 不知",
    "ĐÁP ÁN": "他总是驴不跑怨鞍不好，不知检讨自己。",
    "PHIÊN ÂM": "tā zǒngshì lǘ bù pǎo yuàn ān bùhǎo , bùzhī jiǎntǎo zìjǐ ."
  },
  {
    "STT": 208,
    "SẮP XẾP CÂU": "怪公司没有给他机会。 / 他自己能力不行， / 还 / 驴不跑怨鞍不好，",
    "ĐÁP ÁN": "他自己能力不行，还驴不跑怨鞍不好，怪公司没有给他机会。",
    "PHIÊN ÂM": "tā zìjǐ nénglì bùxíng , huán lǘ bù pǎo yuàn ān bùhǎo , guài gōngsī méiyǒu gěi tā jīhuì ."
  },
  {
    "STT": 209,
    "CHỮ": "L",
    "CỤM": "露口风",
    "PINYIN": "lòu kǒu fēng",
    "NGHĨA": "指交谈时泄露消息。",
    "SẮP XẾP CÂU": "一些信息。 / 泄露了 / 露口风， / 他在会议上",
    "ĐÁP ÁN": "他在会议上露口风，泄露了一些信息。",
    "PHIÊN ÂM": "tā zài huìyì shànglù kǒufēng , xièlù le yīxiē xìnxī ."
  },
  {
    "STT": 210,
    "CHỮ": "*"
  },
  {
    "STT": 211,
    "CHỮ": "L",
    "CỤM": "露破绽",
    "PINYIN": "lòu pò zhàn",
    "NGHĨA": "指说话、做事出现漏洞或毛病。",
    "SẮP XẾP CÂU": "识破了。 / 露破绽， / 他的谎言/ 被人",
    "ĐÁP ÁN": "他的谎言露破绽，被人识破了。",
    "PHIÊN ÂM": "tā de huǎngyán lù pòzhàn , bèi rén shípò le ."
  },
  {
    "STT": 212,
    "SẮP XẾP CÂU": "露了破绽。 / 他的/ 谎言",
    "ĐÁP ÁN": "他的谎言露了破绽。",
    "PHIÊN ÂM": "tā de huǎngyán lù le pòzhàn ."
  },
  {
    "STT": 213,
    "CHỮ": "L",
    "CỤM": "漏网之鱼，出笼之鸟",
    "PINYIN": "lòu wǎng zhī yú, chū lóng zhī niǎo",
    "NGHĨA": "见“离笼之鸟,脱网之鱼”。",
    "SẮP XẾP CÂU": "这次/ 漏网之鱼，出笼之鸟。/ 有很多 / 抓捕行动中，",
    "ĐÁP ÁN": "这次抓捕行动中，有很多漏网之鱼，出笼之鸟。",
    "PHIÊN ÂM": "zhècì zhuābǔ xíngdòng zhōng , yǒu hěnduō lòuwǎngzhīyú , chūlóng zhīniǎo ."
  },
  {
    "STT": 214,
    "SẮP XẾP CÂU": "漏网之鱼, 出笼之鸟, / 那个压抑的环境。/ 他像/ 终于逃离了",
    "ĐÁP ÁN": "他像漏网之鱼, 出笼之鸟, 终于逃离了那个压抑的环境。",
    "PHIÊN ÂM": "tā xiàng lòuwǎngzhīyú , chūlóng zhīniǎo , zhōngyú táolí le nàgè yāyì de huánjìng ."
  },
  {
    "STT": 215,
    "CHỮ": "L",
    "CỤM": "露一鼻子",
    "PINYIN": "lòu yī bí zi",
    "NGHĨA": "指显露本领。",
    "SẮP XẾP CÂU": "他在/ 显得信心不足。 / 露一鼻子， / 这个事情上",
    "ĐÁP ÁN": "他在这个事情上露一鼻子，显得信心不足。",
    "PHIÊN ÂM": "tā zài zhège shìqing shànglù yī bízi , xiǎnde xìnxīn bùzú ."
  },
  {
    "STT": 216,
    "SẮP XẾP CÂU": "大亏。 / 这次他 / 露了一鼻子，/ 吃了",
    "ĐÁP ÁN": "这次他露了一鼻子，吃了大亏。",
    "PHIÊN ÂM": "zhècì tālù le yī bízi , chī le dàkuī ."
  },
  {
    "STT": 217,
    "CHỮ": "L",
    "CỤM": "鲁班门前弄大斧",
    "PINYIN": "lǔ bān mén qián nòng dà fǔ",
    "NGHĨA": "鲁班:我国古代杰出的工匠,传为春秋 时鲁国人,技艺超绝,多有发明,后世被 尊为建筑工匠的祖师。\r\n指在行家面前显示,卖弄自己,说自 己时有自谦之意,说别人时则表示讥讽。\r\n也作“鲁班门前掉大斧”、“鲁班门前玩 锈”。",
    "SẮP XẾP CÂU": "自不量力。 / 鲁班门前弄大斧， / 在/ 真是",
    "ĐÁP ÁN": "在鲁班门前弄大斧，真是自不量力。",
    "PHIÊN ÂM": "zài lǔbān ménqián nòngdàfǔ , zhēnshi zìbùliànglì ."
  },
  {
    "STT": 218,
    "SẮP XẾP CÂU": "在作家面前/ 真是鲁班门前弄大斧。/ 炫耀文笔, / 他竟然",
    "ĐÁP ÁN": "他竟然在作家面前炫耀文笔, 真是鲁班门前弄大斧。",
    "PHIÊN ÂM": "tā jìngrán zài zuòjiā miànqián xuànyào wénbǐ , zhēnshi lǔbān ménqián nòngdàfǔ ."
  },
  {
    "STT": 219,
    "CHỮ": "L",
    "CỤM": "履薄冰",
    "PINYIN": "lǚ báo bīng",
    "NGHĨA": "形容戒惧谨慎的心理。",
    "SẮP XẾP CÂU": "他在/ 非常小心。 / 履薄冰， / 这个问题上",
    "ĐÁP ÁN": "他在这个问题上履薄冰，非常小心。",
    "PHIÊN ÂM": "tā zài zhège wèntí shànglǚ bóbīng , fēicháng xiǎoxīn ."
  },
  {
    "STT": 220,
    "SẮP XẾP CÂU": "如履薄冰。 / 现在的处境 / 非常危险，/ 他",
    "ĐÁP ÁN": "他现在的处境非常危险，如履薄冰。",
    "PHIÊN ÂM": "tā xiànzài de chǔjìng fēicháng wēixiǎn , rúlǚbóbīng ."
  },
  {
    "STT": 221,
    "CHỮ": "L",
    "CỤM": "路不拾遗，夜不闭户",
    "PINYIN": "lù bù shí yí, yè bù bì hù",
    "NGHĨA": "人们不会把掉在路上的东西捡起来据 为己有;晚上睡觉也不需要关门,没有人 入室偷盗。形容社会风尚好,太平安定。",
    "SẮP XẾP CÂU": "很好。 / 路不拾遗，夜不闭户，/ 治安/ 在这个地方，",
    "ĐÁP ÁN": "在这个地方，路不拾遗，夜不闭户，治安很好。",
    "PHIÊN ÂM": "zài zhège dìfāng , lùbùshíyí , yèbùbìhù , zhìān hěn hǎo ."
  },
  {
    "STT": 222,
    "SẮP XẾP CÂU": "治安非常好。 / 过去那个村庄， / 路不拾遗，夜不闭户，",
    "ĐÁP ÁN": "过去那个村庄，路不拾遗，夜不闭户，治安非常好。",
    "PHIÊN ÂM": "guòqu nàgè cūnzhuāng , lùbùshíyí , yèbùbìhù , zhìān fēicháng hǎo ."
  },
  {
    "STT": 223,
    "CHỮ": "L",
    "CỤM": "露出狐狸尾巴",
    "PINYIN": "lù chū hú li wěi ba",
    "NGHĨA": "指露出破绽，被人发现。也说“露马脚”。",
    "SẮP XẾP CÂU": "看穿了。 / 露出狐狸尾巴， / 他在谈话中/ 被人",
    "ĐÁP ÁN": "他在谈话中露出狐狸尾巴，被人看穿了。",
    "PHIÊN ÂM": "tā zài tánhuà zhōng lùchū húliwěiba , bèi rén kànchuān le ."
  },
  {
    "STT": 224,
    "SẮP XẾP CÂU": "他/ 但最终还是 / 露出了狐狸尾巴。 / 伪装得很好，",
    "ĐÁP ÁN": "他伪装得很好，但最终还是露出了狐狸尾巴。",
    "PHIÊN ÂM": "tā wěizhuāng dé hěn hǎo , dàn zuìzhōng háishi lùchū le húliwěiba ."
  },
  {
    "STT": 225,
    "CHỮ": "L",
    "CỤM": "驴唇对不着马嘴",
    "PINYIN": "lǘ chún duì bù zháo mǎ zuǐ",
    "NGHĨA": "见“牛头不对马嘴”。",
    "SẮP XẾP CÂU": "不相干。 / 驴唇对不着马嘴， / 他们的观点/ 完全",
    "ĐÁP ÁN": "他们的观点驴唇对不着马嘴，完全不相干。",
    "PHIÊN ÂM": "#ERROR!"
  },
  {
    "STT": 226,
    "SẮP XẾP CÂU": "听不懂。 / 他讲话 / 驴唇对不着马嘴，/ 让人",
    "ĐÁP ÁN": "他讲话驴唇对不着马嘴，让人听不懂。",
    "PHIÊN ÂM": "tā jiǎnghuà lǘchún duì bù zhe mǎzuǐ , ràng rén tīngbudǒng ."
  },
  {
    "STT": 227,
    "CHỮ": "L",
    "CỤM": "驴打滚",
    "PINYIN": "lǘ dǎ gǔn",
    "NGHĨA": "高利贷的一种。到期还不了,利上加 利,如驴翻身打滚,越滚越多。",
    "SẮP XẾP CÂU": "停不下来。 / 驴打滚， / 他在地上/ 笑得",
    "ĐÁP ÁN": "他在地上驴打滚，笑得停不下来。",
    "PHIÊN ÂM": "tā zài dìshang l2dǎgǔn , xiào dé tíngbùxiàlái ."
  },
  {
    "STT": 228,
    "SẮP XẾP CÂU": "驴打滚/ 对方的攻击。/ 他一个/ 躲开了",
    "ĐÁP ÁN": "他一个驴打滚躲开了对方的攻击。",
    "PHIÊN ÂM": "tā yīgè l2dǎgǔn duǒkāi le duìfāng de gōngjī ."
  },
  {
    "STT": 229,
    "CHỮ": "L",
    "CỤM": "驴倒了架子不倒",
    "PINYIN": "lǘ dǎo le jià zi bù dǎo",
    "NGHĨA": "比喻人虽已失势,却还装腔作势,硬撑 着骄矜的姿态。",
    "SẮP XẾP CÂU": "就像/ 坚定不移。 / 驴倒了架子不倒， / 他的决心",
    "ĐÁP ÁN": "他的决心就像驴倒了架子不倒，坚定不移。",
    "PHIÊN ÂM": "tā de juéxīn jiù xiàng lǘ dǎo le jiàzi bùdǎo , jiāndìngbùyí ."
  },
  {
    "STT": 230,
    "SẮP XẾP CÂU": "公司现在/ 但底子还在，/ 驴倒了架子不倒。 / 虽然/ 面临很多困难，",
    "ĐÁP ÁN": "虽然公司现在面临很多困难，但底子还在，驴倒了架子不倒。",
    "PHIÊN ÂM": "suīrán gōngsī xiànzài miànlín hěnduō kùnnán , dàn dǐzi huán zài , lǘ dǎo le jiàzi bùdǎo ."
  },
  {
    "STT": 231,
    "CHỮ": "L",
    "CỤM": "驴的朝东,马的朝西",
    "PINYIN": "lǘ de cháo dōng，mǎ de cháo xī",
    "NGHĨA": "比喻各走各的路,互不相干。 也作“驴什么朝东,马什么朝西”、“一个马儿头向东,一个驴儿头向西”。",
    "SẮP XẾP CÂU": "他们两个的/ 驴的朝东，马的朝西。/ 意见",
    "ĐÁP ÁN": "他们两个的意见驴的朝东，马的朝西。",
    "PHIÊN ÂM": "tāmen liǎnggè de yìjiàn lǘ de cháodōng , mǎ de cháoxī ."
  },
  {
    "STT": 232,
    "SẮP XẾP CÂU": "合作。 / 他们的目标 / 无法/ 驴的朝东，马的朝西，",
    "ĐÁP ÁN": "他们的目标驴的朝东，马的朝西，无法合作。",
    "PHIÊN ÂM": "tāmen de mùbiāo lǘ de cháodōng , mǎ de cháoxī , wúfǎ hézuò ."
  },
  {
    "STT": 233,
    "CHỮ": "L",
    "CỤM": "捋虎须",
    "PINYIN": "lǚ hǔ xū",
    "NGHĨA": "捋: 抚摸。比喻触犯有权势的人或冒着很大的风险。",
    "SẮP XẾP CÂU": "他竟然敢/ 真是胆大包天! / 那个黑社会老大， / 去挑战 / 捋虎须，",
    "ĐÁP ÁN": "他竟然敢捋虎须，去挑战那个黑社会老大，真是胆大包天！",
    "PHIÊN ÂM": "tā jìngrán gǎn luōhǔxū , qù tiǎozhàn nàgè hēishèhuì lǎodà , zhēnshi dǎndàbāotiān ！"
  },
  {
    "STT": 234,
    "SẮP XẾP CÂU": "自找苦吃！ / 他竟然敢 / 真是/ 捋虎须，",
    "ĐÁP ÁN": "他竟然敢捋虎须，真是自找苦吃！",
    "PHIÊN ÂM": "tā jìngrán gǎn luōhǔxū , zhēnshi zìzhǎokǔchī ！"
  },
  {
    "STT": 235,
    "CHỮ": "L",
    "CỤM": "路见不平，拔刀相助",
    "PINYIN": "lù jiàn bù píng, bá dāo xiāng zhù",
    "NGHĨA": "指遇到不平之事,挺身帮助受欺的一方。",
    "SẮP XẾP CÂU": "体现，/ 值得我们学习。 / 是侠义精神的/ 路见不平，拔刀相助",
    "ĐÁP ÁN": "路见不平，拔刀相助是侠义精神的体现，值得我们学习。",
    "PHIÊN ÂM": "lùjiànbùpíng , bádāoxiāngzhù shì xiáyìjīngshén de tǐxiàn , zhíde wǒmen xuéxí ."
  },
  {
    "STT": 236,
    "SẮP XẾP CÂU": "他/ 被欺负的人。 / 路见不平，拔刀相助，/ 帮助了",
    "ĐÁP ÁN": "他路见不平，拔刀相助，帮助了被欺负的人。",
    "PHIÊN ÂM": "tā lùjiànbùpíng , bádāoxiāngzhù , bāngzhù le bèi qīfu de rén ."
  },
  {
    "STT": 237,
    "CHỮ": "L",
    "CỤM": "路路通",
    "PINYIN": "lù lù tōng",
    "NGHĨA": "比喻办事门路多,交际广。\r\n比喻 事情进展顺利,没有障碍。",
    "SẮP XẾP CÂU": "广, / 路路通。/ 他人脉/ 做事自然",
    "ĐÁP ÁN": "他人脉广, 做事自然路路通。",
    "PHIÊN ÂM": "tārén màiguǎng , zuòshì zìrán lùlùtōng ."
  },
  {
    "STT": 238,
    "SẮP XẾP CÂU": "路路通。/ 他门路/ 很多，",
    "ĐÁP ÁN": "他门路很多，路路通。",
    "PHIÊN ÂM": "tā ménlù hěnduō , lùlùtōng ."
  },
  {
    "STT": 239,
    "CHỮ": "L",
    "CỤM": "驴事未了，马事又发",
    "PINYIN": "lǘ shì wèi liǎo, mǎ shì yòu fā",
    "NGHĨA": "比喻倒霉事—一个接一个发生。\r\n也作“驴事未去,马事到来”。",
    "SẮP XẾP CÂU": "他最近/ 驴事未了，马事又发。/ 倒霉，/ 真是",
    "ĐÁP ÁN": "他最近真是倒霉，驴事未了，马事又发。",
    "PHIÊN ÂM": "tā zuìjìn zhēnshi dǎoméi , lǘshì wèiliǎo , mǎshì yòu fā ."
  },
  {
    "STT": 240,
    "SẮP XẾP CÂU": "他最近/ 马事又发。 / 真是倒霉， / 驴事未了，",
    "ĐÁP ÁN": "他最近真是倒霉，驴事未了，马事又发。",
    "PHIÊN ÂM": "tā zuìjìn zhēnshi dǎoméi , lǘshì wèiliǎo , mǎshì yòu fā ."
  },
  {
    "STT": 241,
    "CHỮ": "L",
    "CỤM": "驴头不对马嘴",
    "PINYIN": "lǘ tóu bù duì mǎ zuǐ",
    "NGHĨA": "见“牛头不对马嘴”。",
    "SẮP XẾP CÂU": "的话题, / 开会时/ 驴头不对马嘴/ 浪费时间。/ 别插那些",
    "ĐÁP ÁN": "开会时别插那些驴头不对马嘴的话题, 浪费时间。",
    "PHIÊN ÂM": "kāihuì shíbié chā nàxiē lǘtóu bù duì mǎ zuǐ de huàtí , làngfèishíjiān ."
  },
  {
    "STT": 242,
    "SẮP XẾP CÂU": "听不明白。 / 他说话 / 让人/ 驴头不对马嘴，",
    "ĐÁP ÁN": "他说话驴头不对马嘴，让人听不明白。",
    "PHIÊN ÂM": "tā shuōhuà lǘtóu bù duì mǎzuǐ , ràng rén tīng bù míngbai ."
  },
  {
    "STT": 243,
    "CHỮ": "L",
    "CỤM": "露头角",
    "PINYIN": "lù tóu jiǎo",
    "NGHĨA": "比喻初次显露才能。",
    "SẮP XẾP CÂU": "他终于/ 自己的实力。 / 展现了 / 露头角， / 这次比赛，",
    "ĐÁP ÁN": "这次比赛，他终于露头角，展现了自己的实力。",
    "PHIÊN ÂM": "zhècì bǐsài , tā zhōngyú lùtóujiǎo , zhǎnxiàn le zìjǐ de shílì ."
  },
  {
    "STT": 244,
    "SẮP XẾP CÂU": "他/ 表现出色。 / 在这次比赛中 / 露头角，",
    "ĐÁP ÁN": "他在这次比赛中露头角，表现出色。",
    "PHIÊN ÂM": "tā zài zhècì bǐsài zhōng lùtóujiǎo , biǎoxiànchūsè ."
  },
  {
    "STT": 245,
    "CHỮ": "L",
    "CỤM": "露一手",
    "PINYIN": "lù yī shǒu",
    "NGHĨA": "指在某一方面或某件事上显示本领给 人看。",
    "SẮP XẾP CÂU": "既然/ 让我们见识见识吧! / 露一手 / 你这么厉害，/ 那就",
    "ĐÁP ÁN": "既然你这么厉害，那就露一手让我们见识见识吧！",
    "PHIÊN ÂM": "jìrán nǐ zhème lìhai , nà jiù lòuyīshǒu ràng wǒmen jiànshi jiànshi bā ！"
  },
  {
    "STT": 246,
    "SẮP XẾP CÂU": "自己的厨艺。 / 他决定 / 展示一下/ 露一手，",
    "ĐÁP ÁN": "他决定露一手，展示一下自己的厨艺。",
    "PHIÊN ÂM": "tā juédìng lòuyīshǒu , zhǎnshì yīxià zìjǐ de chúyì ."
  },
  {
    "STT": 247,
    "CHỮ": "L",
    "CỤM": "乱点鸳鸯谱",
    "PINYIN": "luàn diǎn yuān yāng pǔ",
    "NGHĨA": "鸳鸯:鸟,像野鸭,体形较小,雌雄多成 对生活在水边;文学上用来比喻夫妻。\r\n错配婚姻。\r\n喻指无依据地胡乱安 排事情。",
    "SẮP XẾP CÂU": "媒婆/ 凑到了一起。 / 两个不相干的人 / 硬是把 / 乱点鸳鸯谱，",
    "ĐÁP ÁN": "媒婆乱点鸳鸯谱，硬是把两个不相干的人凑到了一起。",
    "PHIÊN ÂM": "méipó luàndiǎnyuānyāngpǔ , yìngshì bǎ liǎnggè bùxiānggān de rén còu dào le yīqǐ ."
  },
  {
    "STT": 248,
    "SẮP XẾP CÂU": "他 / 把两个不相干的人 / 撮合到一起。 / 乱点鸳鸯谱，",
    "ĐÁP ÁN": "他乱点鸳鸯谱，把两个不相干的人撮合到一起。",
    "PHIÊN ÂM": "tā luàndiǎnyuānyāngpǔ , bǎ liǎnggè bùxiānggān de rén cuōhe dào yīqǐ ."
  },
  {
    "STT": 249,
    "CHỮ": "L",
    "CỤM": "乱方寸",
    "PINYIN": "luàn fāng cùn",
    "NGHĨA": "方寸:心。 \r\n指人思想混乱,没有头绪。",
    "SẮP XẾP CÂU": "发挥失常。 / 乱方寸， / 他在考试的时候，/ 结果",
    "ĐÁP ÁN": "他在考试的时候，乱方寸，结果发挥失常。",
    "PHIÊN ÂM": "tā zài kǎoshì de shíhou , luàn fāngcùn , jiéguǒ fāhuī shīcháng ."
  },
  {
    "STT": 250,
    "SẮP XẾP CÂU": "听到/ 乱方寸了。 / 他/ 这个消息，",
    "ĐÁP ÁN": "他听到这个消息，乱方寸了。",
    "PHIÊN ÂM": "tā tīngdào zhège xiāoxi , luàn fāngcùn le ."
  },
  {
    "STT": 251,
    "CHỮ": "L",
    "CỤM": "乱脚步",
    "PINYIN": "luàn jiǎo bù",
    "NGHĨA": "指出现意外,做事步骤被打乱。",
    "SẮP XẾP CÂU": "跑出了房间。 / 乱脚步 / 他因为害怕，/ 地",
    "ĐÁP ÁN": "他因为害怕，乱脚步地跑出了房间。",
    "PHIÊN ÂM": "tā yīnwèi hàipà , luàn jiǎobù dì pǎo chū le fángjiān ."
  },
  {
    "STT": 252,
    "SẮP XẾP CÂU": "计划性。 / 他做事 / 没有/ 乱脚步，",
    "ĐÁP ÁN": "他做事乱脚步，没有计划性。",
    "PHIÊN ÂM": "tā zuòshì luàn jiǎobù , méiyǒu jìhuàxìng ."
  },
  {
    "STT": 253,
    "CHỮ": "L",
    "CỤM": "乱手脚",
    "PINYIN": "luàn shǒu jiǎo",
    "NGHĨA": "手忙脚乱。形容人慌乱得不知所措。",
    "SẮP XẾP CÂU": "酿成大错。 / 他乱手脚， / 面对突发事件，/ 差点",
    "ĐÁP ÁN": "面对突发事件，他乱手脚，差点酿成大错。",
    "PHIÊN ÂM": "miànduì tūfāshìjiàn , tāluàn shǒujiǎo , chàdiǎn niàngchéng dàcuò ."
  },
  {
    "STT": 254,
    "SẮP XẾP CÂU": "不知所措。 / 紧急情况， / 他遇到/ 乱手脚，",
    "ĐÁP ÁN": "他遇到紧急情况，乱手脚，不知所措。",
    "PHIÊN ÂM": "tā yùdào jǐnjíqíngkuàng , luàn shǒujiǎo , bùzhīsuǒcuò ."
  },
  {
    "STT": 255,
    "CHỮ": "L",
    "CỤM": "落把柄",
    "PINYIN": "luò bǎ bǐng",
    "NGHĨA": "见“留把柄”。",
    "SẮP XẾP CÂU": "被人利用。 / 落下把柄， / 否则很容易 / 做事要谨慎，",
    "ĐÁP ÁN": "做事要谨慎，否则很容易落把柄，被人利用。",
    "PHIÊN ÂM": "zuòshì yào jǐnshèn , fǒuzé hěn róngyì luò bǎbǐng , bèi rén lìyòng ."
  },
  {
    "STT": 256,
    "SẮP XẾP CÂU": "经常 / 落把柄 / 他做事不小心，/ 给别人。",
    "ĐÁP ÁN": "他做事不小心，经常落把柄给别人。",
    "PHIÊN ÂM": "tā zuòshì bù xiǎoxīn , jīngcháng luò bǎbǐng gěi biéren ."
  },
  {
    "STT": 257,
    "CHỮ": "L",
    "CỤM": "落背弓",
    "PINYIN": "luò bèi gōng",
    "NGHĨA": "见“打背弓”。",
    "SẮP XẾP CÂU": "真是/ 损失惨重。 / 落背弓， / 这次投资失败了，",
    "ĐÁP ÁN": "这次投资失败了，真是落背弓，损失惨重。",
    "PHIÊN ÂM": "zhècì tóuzī shībài le , zhēnshi luòbèi gōng , sǔnshīcǎnzhòng ."
  },
  {
    "STT": 258,
    "SẮP XẾP CÂU": "投资/ 落背弓了。 / 这次/ 失败了，",
    "ĐÁP ÁN": "这次投资失败了，落背弓了。",
    "PHIÊN ÂM": "zhècì tóuzī shībài le , luòbèi gōng le ."
  },
  {
    "STT": 259,
    "CHỮ": "L",
    "CỤM": "萝卜白菜一锅煮",
    "PINYIN": "luó bo bái cài yī guō zhǔ",
    "NGHĨA": "比喻对事物不作具体分析,笼统对待处理。",
    "SẮP XẾP CÂU": "很难形成统一意见。 / 萝卜白菜一锅煮， / 各种观点 / 这次会议上，",
    "ĐÁP ÁN": "这次会议上，各种观点萝卜白菜一锅煮，很难形成统一意见。",
    "PHIÊN ÂM": "zhècì huìyì shàng , gèzhǒng guāndiǎn luóbo báicài yīguōzhǔ , hěnnán xíngchéng tǒngyī yìjiàn ."
  },
  {
    "STT": 260,
    "SẮP XẾP CÂU": "学生来自/ 萝卜白菜一锅煮。 / 这个班里， / 各个地方，",
    "ĐÁP ÁN": "这个班里，学生来自各个地方，萝卜白菜一锅煮。",
    "PHIÊN ÂM": "zhège bānlǐ , xuésheng láizì gègè dìfāng , luóbo báicài yīguōzhǔ ."
  },
  {
    "STT": 261,
    "CHỮ": "L",
    "CỤM": "萝卜弗当小菜",
    "PINYIN": "luó bo fú dāng xiǎo cài",
    "NGHĨA": "比喻瞧不起人,不当人看。",
    "SẮP XẾP CÂU": "不敢献丑。/ 说到底也就/ 我这点经验, / 萝卜弗当小菜,",
    "ĐÁP ÁN": "我这点经验,说到底也就萝卜弗当小菜, 不敢献丑。",
    "PHIÊN ÂM": "wǒ zhèdiǎn jīngyàn , shuōdàodǐ yě jiù luóbo fúdāng xiǎocài , bùgǎn xiànchǒu ."
  },
  {
    "STT": 262,
    "SẮP XẾP CÂU": "不能 / 要认真对待。 / 这件事这么重要， / 萝卜弗当小菜，",
    "ĐÁP ÁN": "这件事这么重要，不能萝卜弗当小菜，要认真对待。",
    "PHIÊN ÂM": "zhèjiàn shì zhème zhòngyào , bùnéng luóbo fúdāng xiǎocài , yào rènzhēnduìdài ."
  },
  {
    "STT": 263,
    "CHỮ": "L",
    "CỤM": "落不是",
    "PINYIN": "luò bù shì",
    "NGHĨA": "\r\n指好心做事却招来别人的指责和埋怨。",
    "SẮP XẾP CÂU": "他/ 就落不是了。 / 生意失败后/ 自从",
    "ĐÁP ÁN": "他自从生意失败后就落不是了。",
    "PHIÊN ÂM": "tā zìcóng shēngyi shībài hòu jiù luò bùshì le ."
  },
  {
    "STT": 264,
    "SẮP XẾP CÂU": "被批评了，/ 觉得/ 很落不是。 / 他",
    "ĐÁP ÁN": "他被批评了，觉得很落不是。",
    "PHIÊN ÂM": "#ERROR!"
  },
  {
    "STT": 265,
    "CHỮ": "L",
    "CỤM": "锣不响，鼓不鸣",
    "PINYIN": "luó bù xiǎng, gǔ bù míng",
    "NGHĨA": "比喻不声不响、悄无声息地进行。",
    "SẮP XẾP CÂU": "这次活动/ 参加的人太少了。 / 锣不响，鼓不鸣， / 宣传力度不够，",
    "ĐÁP ÁN": "这次活动宣传力度不够，锣不响，鼓不鸣，参加的人太少了。",
    "PHIÊN ÂM": "zhècì huódòng xuānchuán lìdù bùgòu , luóbùxiǎng , gǔbùmíng , cānjiā de réntàishǎo le ."
  },
  {
    "STT": 266,
    "SẮP XẾP CÂU": "没有声势，/ 他/ 锣不响，鼓不鸣。 / 做事",
    "ĐÁP ÁN": "他做事没有声势，锣不响，鼓不鸣。",
    "PHIÊN ÂM": "tā zuòshì méiyǒu shēngshì , luóbùxiǎng , gǔbùmíng ."
  },
  {
    "STT": 267,
    "CHỮ": "L",
    "CỤM": "落风尘",
    "PINYIN": "luò fēng chén",
    "NGHĨA": "指沦落为妓女。",
    "SẮP XẾP CÂU": "令人惋惜。 / 落风尘， / 无奈之下 / 她家境贫寒，",
    "ĐÁP ÁN": "她家境贫寒，无奈之下落风尘，令人惋惜。",
    "PHIÊN ÂM": "tā jiājìngpínhán , wúnài zhī xiàluò fēngchén , lìngrén wǎnxī ."
  },
  {
    "STT": 268,
    "SẮP XẾP CÂU": "令人心痛。 / 最后 / 落风尘，/ 她家境不好，",
    "ĐÁP ÁN": "她家境不好，最后落风尘，令人心痛。",
    "PHIÊN ÂM": "tā jiājìng bùhǎo , zuìhòu luò fēngchén , lìngrén xīntòng ."
  },
  {
    "STT": 269,
    "CHỮ": "L",
    "CỤM": "落话把",
    "PINYIN": "luò huà bǎ",
    "NGHĨA": "见“留话柄”。",
    "SẮP XẾP CÂU": "招致别人的不满。 / 落话柄， / 他说话不注意，/ 经常",
    "ĐÁP ÁN": "他说话不注意，经常落话把，招致别人的不满。",
    "PHIÊN ÂM": "tā shuōhuà bù zhùyì , jīngcháng luòhuà bǎ , zhāozhì biéren de bùmǎn ."
  },
  {
    "STT": 270,
    "SẮP XẾP CÂU": "不少笑话。 / 他今天真是 / 闹了/ 落话把，",
    "ĐÁP ÁN": "他今天真是落话把，闹了不少笑话。",
    "PHIÊN ÂM": "tā jīntiān zhēnshi luòhuà bǎ , nào le bùshǎo xiàohuà ."
  },
  {
    "STT": 271,
    "CHỮ": "L",
    "CỤM": "落话柄",
    "PINYIN": "luò huà bǐng",
    "NGHĨA": "见“留话柄”。",
    "SẮP XẾP CÂU": "被人抓住小辫子。 / 落话柄， / 他做事毛躁，/ 经常",
    "ĐÁP ÁN": "他做事毛躁，经常落话柄，被人抓住小辫子。",
    "PHIÊN ÂM": "tā zuòshì máozào , jīngcháng luò huàbǐng , bèi rén zhuāzhù xiǎobiànzi ."
  },
  {
    "STT": 272,
    "SẮP XẾP CÂU": "要小心，/ 别落话柄/ 说话/ 给别人。",
    "ĐÁP ÁN": "说话要小心，别落话柄给别人。",
    "PHIÊN ÂM": "shuōhuà yào xiǎoxīn , biéluò huàbǐng gěi biéren ."
  },
  {
    "STT": 273,
    "CHỮ": "L",
    "CỤM": "落花有意随流水，流水无情恋落花",
    "PINYIN": "luò huā yǒu yì suí liú shuǐ, liú shuǐ wú qíng liàn luò huā",
    "NGHĨA": "比喻一方有情,一方淡漠。常含无奈之意。\r\n也作“落花有意,流水无情”。",
    "SẮP XẾP CÂU": "流水无情恋落花。 / 而她却无动于衷， / 如同落花有意随流水， / 他对她的爱慕，",
    "ĐÁP ÁN": "他对她的爱慕，如同落花有意随流水，而她却无动于衷，流水无情恋落花。",
    "PHIÊN ÂM": "tā duì tā de àimù , rútóng luòhuāyǒuyì suí liúshuǐ , ér tā què wúdòngyúzhōng , liúshuǐwúqíng liàn luòhuā ."
  },
  {
    "STT": 274,
    "SẮP XẾP CÂU": "太不对等了。 / 他们的感情/ 落花有意随流水，流水无情恋落花，/ 就像",
    "ĐÁP ÁN": "他们的感情就像落花有意随流水，流水无情恋落花，太不对等了。",
    "PHIÊN ÂM": "tāmen de gǎnqíng jiù xiàng luòhuāyǒuyì suí liúshuǐ , liúshuǐwúqíng liàn luòhuā , tài bù duì děng le ."
  },
  {
    "STT": 275,
    "CHỮ": "L",
    "CỤM": "落火坑",
    "PINYIN": "luò huǒ kēng",
    "NGHĨA": "比喻落入坏人之手或陷入危难境地。",
    "SẮP XẾP CÂU": "算是/ 损失惨重。/ 落火坑了，/ 他这次投资失败，",
    "ĐÁP ÁN": "他这次投资失败，算是落火坑了，损失惨重。",
    "PHIÊN ÂM": "tā zhècì tóuzī shībài , suànshì luò huǒkēng le , sǔnshīcǎnzhòng ."
  },
  {
    "STT": 276,
    "SẮP XẾP CÂU": "他 / 这次生意/ 落火坑了。 / 失败，",
    "ĐÁP ÁN": "这次生意失败，他落火坑了。",
    "PHIÊN ÂM": "zhècì shēngyi shībài , tāluò huǒkēng le ."
  },
  {
    "STT": 277,
    "CHỮ": "L",
    "CỤM": "落旧套",
    "PINYIN": "luò jiù tào",
    "NGHĨA": "喻指没有新意。",
    "SẮP XẾP CÂU": "创新。 / 落旧套， / 要勇于/ 不要总是",
    "ĐÁP ÁN": "不要总是落旧套，要勇于创新。",
    "PHIÊN ÂM": "bùyào zǒngshì luòjiù tào , yào yǒngyúchuàngxīn ."
  },
  {
    "STT": 278,
    "SẮP XẾP CÂU": "没有创新。 / 总是 / 落旧套，/ 他的做法",
    "ĐÁP ÁN": "他的做法总是落旧套，没有创新。",
    "PHIÊN ÂM": "tā de zuòfǎ zǒngshì luòjiù tào , méiyǒu chuàngxīn ."
  },
  {
    "STT": 279,
    "CHỮ": "L",
    "CỤM": "落魔掌",
    "PINYIN": "luò mó zhǎng",
    "NGHĨA": "指落入坏人之手。",
    "SẮP XẾP CÂU": "他借钱借到黑市, / 最后/ 落魔掌, / 生不如死。",
    "ĐÁP ÁN": "他借钱借到黑市, 最后落魔掌, 生不如死。",
    "PHIÊN ÂM": "tā jièqián jiè dào hēishì , zuìhòu luò mózhǎng , shēngbùrúsǐ ."
  },
  {
    "STT": 280,
    "SẮP XẾP CÂU": "自拔了。 / 他一旦 / 就再也无法/ 落魔掌，",
    "ĐÁP ÁN": "他一旦落魔掌，就再也无法自拔了。",
    "PHIÊN ÂM": "tā yīdàn luò mózhǎng , jiù zàiyě wúfǎzìbá le ."
  },
  {
    "STT": 281,
    "CHỮ": "L",
    "CỤM": "锣齐鼓不齐",
    "PINYIN": "luó qí gǔ bù qí",
    "NGHĨA": "比喻人心不一致,行动不协调。",
    "SẮP XẾP CÂU": "虽然/ 还不错。 / 但整体效果 / 锣鼓齐不齐， / 这次演出，",
    "ĐÁP ÁN": "这次演出，虽然锣齐鼓不齐，但整体效果还不错。",
    "PHIÊN ÂM": "zhècì yǎnchū , suīrán luóqí gǔ bùqí , dàn zhěngtǐ xiàoguǒ huán bùcuò ."
  },
  {
    "STT": 282,
    "SẮP XẾP CÂU": "他们/ 效果不佳。 / 合作的时候， / 锣齐鼓不齐，",
    "ĐÁP ÁN": "他们合作的时候，锣齐鼓不齐，效果不佳。",
    "PHIÊN ÂM": "tāmen hézuò de shíhou , luóqí gǔ bùqí , xiàoguǒ bùjiā ."
  },
  {
    "STT": 283,
    "CHỮ": "L",
    "CỤM": "落圈套",
    "PINYIN": "luò quān tào",
    "NGHĨA": "见“中圈套”。",
    "SẮP XẾP CÂU": "结果/ 损失惨重。 / 落圈套， / 他轻信他人，",
    "ĐÁP ÁN": "他轻信他人，结果落圈套，损失惨重。",
    "PHIÊN ÂM": "tā qīngxìn tārén , jiéguǒ luò quāntào , sǔnshīcǎnzhòng ."
  },
  {
    "STT": 284,
    "SẮP XẾP CÂU": "他这次/ 落了圈套。 / 被人设计，",
    "ĐÁP ÁN": "他这次被人设计，落了圈套。",
    "PHIÊN ÂM": "tā zhècì bèi rén shèjì , luò le quāntào ."
  },
  {
    "STT": 285,
    "CHỮ": "L",
    "CỤM": "骆驼站在羊群里",
    "PINYIN": "luò tuo zhàn zài yáng qún lǐ",
    "NGHĨA": "形容人或物体高大,非常显眼。",
    "SẮP XẾP CÂU": "就像/ 格外显眼。 / 骆驼站在羊群里， / 他在一群平庸的人中，",
    "ĐÁP ÁN": "他在一群平庸的人中，就像骆驼站在羊群里，格外显眼。",
    "PHIÊN ÂM": "tā zài yīqún píngyōng de rén zhōng , jiù xiàng luòtuo zhàn zài yángqún lǐ , géwài xiǎnyǎn ."
  },
  {
    "STT": 286,
    "SẮP XẾP CÂU": "在这个小公司里/ 显得格外突出。 / 他/ 就像 / 骆驼站在羊群里，",
    "ĐÁP ÁN": "他在这个小公司里就像骆驼站在羊群里，显得格外突出。",
    "PHIÊN ÂM": "tā zài zhège xiǎo gōngsī lǐ jiù xiàng luòtuo zhàn zài yángqún lǐ , xiǎnde géwài tūchū ."
  },
  {
    "STT": 287,
    "CHỮ": "L",
    "CỤM": "拉帮结伙",
    "PINYIN": "lā bānɡ jié huǒ",
    "NGHĨA": "组织帮派，搞小集团活动。",
    "SẮP XẾP CÂU": "百姓。 / 拉帮结伙， / 他们/ 欺压",
    "ĐÁP ÁN": "他们拉帮结伙，欺压百姓。",
    "PHIÊN ÂM": "tāmen lābāngjiéhuǒ , qīyābǎixìng ."
  },
  {
    "STT": 288,
    "SẮP XẾP CÂU": "搞小团体，/影响了工作氛围。/拉帮结伙，/他们在公司里",
    "ĐÁP ÁN": "他们在公司里拉帮结伙，搞小团体，影响了工作氛围。",
    "PHIÊN ÂM": "tāmen zài gōngsī lǐ lābāngjiéhuǒ , gǎo xiǎotuántǐ , yǐngxiǎng le gōngzuò fēnwéi ."
  },
  {
    "STT": 289,
    "CHỮ": "L",
    "CỤM": "拉不下脸",
    "PINYIN": "lā bú xià liǎn",
    "NGHĨA": "碍于情面，不能拒绝或不便开口。",
    "SẮP XẾP CÂU": "去求人。 / 拉不下脸 / 他",
    "ĐÁP ÁN": "他拉不下脸去求人。",
    "PHIÊN ÂM": "tā lābùxiàliǎn qù qiúrén ."
  },
  {
    "STT": 290,
    "SẮP XẾP CÂU": "去道歉。/可就是/拉不下脸/我明知道错了，",
    "ĐÁP ÁN": "我明知道错了，可就是拉不下脸去道歉。",
    "PHIÊN ÂM": "wǒmíng zhīdào cuò le , kě jiùshì lābùxiàliǎn qù dàoqiàn ."
  },
  {
    "STT": 291,
    "CHỮ": "L",
    "CỤM": "拉长线",
    "PINYIN": "lā cháng xiàn",
    "NGHĨA": "比喻作长远打算。也说“放长线”。",
    "SẮP XẾP CÂU": "做 / 拉长线， / 他/ 长远打算。",
    "ĐÁP ÁN": "他拉长线，做长远打算。",
    "PHIÊN ÂM": "tā lā chángxiàn , zuò chángyuǎndǎsuàn ."
  },
  {
    "STT": 292,
    "SẮP XẾP CÂU": "这家公司/明显在/拉长线/钓大鱼。",
    "ĐÁP ÁN": "这家公司明显在拉长线钓大鱼。",
    "PHIÊN ÂM": "zhèjiā gōngsī míngxiǎn zài lā chángxiàn diàodàyú ."
  },
  {
    "STT": 293,
    "CHỮ": "L",
    "CỤM": "拉长脸",
    "PINYIN": "lā chánɡ liǎn",
    "NGHĨA": "把脸拉长。指不高兴、生气的样子。",
    "SẮP XẾP CÂU": "生气了。 / 拉长脸， / 他",
    "ĐÁP ÁN": "他拉长脸，生气了。",
    "PHIÊN ÂM": "tā lācháng liǎn , shēngqì le ."
  },
  {
    "STT": 294,
    "SẮP XẾP CÂU": "一进门就/谁也没打招呼。/拉长脸，/他/",
    "ĐÁP ÁN": "他一进门就拉长脸，谁也没打招呼。",
    "PHIÊN ÂM": "tā yī jìnmén jiù lācháng liǎn , shéi yě méi dǎzhāohu ."
  },
  {
    "STT": 295,
    "CHỮ": "L",
    "CỤM": "拉大旗作虎皮",
    "PINYIN": "lā dà qí zuò hǔ pí",
    "NGHĨA": "用名人的威望抬高或保护自己。",
    "SẮP XẾP CÂU": "他/ 骗取了/ 拉大旗作虎皮，/ 大家的信任。",
    "ĐÁP ÁN": "他拉大旗作虎皮，骗取了大家的信任。",
    "PHIÊN ÂM": "tā lādàqízuòhǔpí , piànqǔ le dàjiā de xìnrèn ."
  },
  {
    "STT": 296,
    "SẮP XẾP CÂU": "发号施令。/拉大旗作虎皮，/借着领导的名义/他总喜欢",
    "ĐÁP ÁN": "他总喜欢拉大旗作虎皮，借着领导的名义发号施令。",
    "PHIÊN ÂM": "tā zǒng xǐhuan lādàqízuòhǔpí , jièzhe lǐngdǎo de míngyì fāhàoshīlìng ."
  },
  {
    "STT": 297,
    "CHỮ": "L",
    "CỤM": "拉关系",
    "PINYIN": "lā ɡuān xi",
    "NGHĨA": "指为了达到某种目的，跟关系疏远的人或单位联系、拉拢，建立某种关系。",
    "SẮP XẾP CÂU": "他靠/ 办成了 / 拉关系，/ 这件事。",
    "ĐÁP ÁN": "他靠拉关系，办成了这件事。",
    "PHIÊN ÂM": "tā kào lāguānxì , bànchéng le zhèjiàn shì ."
  },
  {
    "STT": 298,
    "SẮP XẾP CÂU": "真的挺没底线的。/他为了得到那个职位，/拉关系，/到处找人",
    "ĐÁP ÁN": "他为了得到那个职位，到处找人拉关系，真的挺没底线的。",
    "PHIÊN ÂM": "tā wèile dédào nàgè zhíwèi , dàochù zhǎorén lāguānxì , zhēnde tǐng méi dǐxiàn de ."
  },
  {
    "STT": 299,
    "CHỮ": "L",
    "CỤM": "拉家常",
    "PINYIN": "lā jiā chánɡ",
    "NGHĨA": "指谈论家庭的日常生活，也泛指随便聊天。也说“扯家常”。",
    "SẮP XẾP CÂU": "他们/ 聊得很开心。 / 拉家常， / 坐在一起",
    "ĐÁP ÁN": "他们坐在一起拉家常，聊得很开心。",
    "PHIÊN ÂM": "tāmen zuòzài yīqǐ lājiācháng , liáodé hěn kāixīn ."
  },
  {
    "STT": 300,
    "SẮP XẾP CÂU": "一边晒太阳，/说说家里的琐事。/我们坐在门口，/拉家常，",
    "ĐÁP ÁN": "我们坐在门口，一边晒太阳，一边拉家常，说说家里的琐事。",
    "PHIÊN ÂM": "wǒmen zuòzài ménkǒu , yībiān shàitàiyáng , yībiān lājiācháng , shuō shuō jiālǐ de suǒshì ."
  },
  {
    "STT": 301,
    "CHỮ": "L",
    "CỤM": "拉交情",
    "PINYIN": "lā jiāo qinɡ",
    "NGHĨA": "拉关系; 套近乎。",
    "SẮP XẾP CÂU": "拉交情。 / 一起吃饭， / 他们经常",
    "ĐÁP ÁN": "他们经常一起吃饭，拉交情。",
    "PHIÊN ÂM": "tāmen jīngcháng yīqǐ chīfàn , lājiāoqing ."
  },
  {
    "STT": 302,
    "SẮP XẾP CÂU": "日后好办事。/是想跟领导/拉交情，/他今天请客吃饭，",
    "ĐÁP ÁN": "他今天请客吃饭，是想跟领导拉交情，日后好办事。",
    "PHIÊN ÂM": "tā jīntiān qǐngkèchīfàn , shì xiǎng gēn lǐngdǎo lājiāoqing , rìhòu hǎo bànshì ."
  },
  {
    "STT": 303,
    "CHỮ": "L",
    "CỤM": "拉锯战",
    "PINYIN": "lā jù zhàn",
    "NGHĨA": "比喻双方来回往复。",
    "SẮP XẾP CÂU": "拉锯战。 / 变成了 / 这场谈判/ 一场",
    "ĐÁP ÁN": "这场谈判变成了一场拉锯战。",
    "PHIÊN ÂM": "zhèchǎng tánpàn biànchéng le yīcháng lājùzhàn ."
  },
  {
    "STT": 304,
    "SẮP XẾP CÂU": "打起了/谁也不肯让步。/拉锯战，/两家公司为了一块地皮",
    "ĐÁP ÁN": "两家公司为了一块地皮打起了拉锯战，谁也不肯让步。",
    "PHIÊN ÂM": "liǎngjiā gōngsī wèile yīkuài dìpí dǎqǐ le lājùzhàn , shéi yě bùkěn ràngbù ."
  },
  {
    "STT": 305,
    "CHỮ": "L",
    "CỤM": "拉偏架",
    "PINYIN": "lā piān jià",
    "NGHĨA": "指在双方发生冲突时偏袒一方。",
    "SẮP XẾP CÂU": "袒护一方。 / 拉偏架， / 他",
    "ĐÁP ÁN": "他拉偏架，袒护一方。",
    "PHIÊN ÂM": "tā lā piānjià , tǎnhù yīfāng ."
  },
  {
    "STT": 306,
    "SẮP XẾP CÂU": "你别插手了，/再拉偏架/只会让事情更糟。",
    "ĐÁP ÁN": "你别插手了，再拉偏架只会让事情更糟。",
    "PHIÊN ÂM": "nǐbié chāshǒu le , zàilā piānjià zhǐhuì ràng shìqing gēngzāo ."
  },
  {
    "STT": 307,
    "CHỮ": "L",
    "CỤM": "拉下脸",
    "PINYIN": "lā xià liǎn",
    "NGHĨA": "露出不高兴的表情。不顾情面。",
    "SẮP XẾP CÂU": "向别人 / 拉下脸来， / 他/ 道歉。",
    "ĐÁP ÁN": "他拉下脸来，向别人道歉。",
    "PHIÊN ÂM": "tā lāxiàliǎnlái , xiàng biéren dàoqiàn ."
  },
  {
    "STT": 308,
    "SẮP XẾP CÂU": "他/我还是挺感动的。/向我道歉，/拉下脸",
    "ĐÁP ÁN": "他拉下脸向我道歉，我还是挺感动的。",
    "PHIÊN ÂM": "tā lāxiàliǎn xiàng wǒ dàoqiàn , wǒ háishi tǐng gǎndòng de ."
  },
  {
    "STT": 309,
    "CHỮ": "L",
    "CỤM": "拉下马",
    "PINYIN": "lā xià mǎ",
    "NGHĨA": "比喻把人从统治地位上拉下来。",
    "SẮP XẾP CÂU": "他把竞争对手/ 经理的位置。/ 拉下马, / 自己坐上",
    "ĐÁP ÁN": "他把竞争对手拉下马, 自己坐上经理的位置。",
    "PHIÊN ÂM": "tā bǎ jìngzhēngduìshǒu lāxiàmǎ , zìjǐ zuò shàng jīnglǐ de wèizhi ."
  },
  {
    "STT": 310,
    "SẮP XẾP CÂU": "他这次举报成功，/把一直作威作福的主任/拉下马了。",
    "ĐÁP ÁN": "他这次举报成功，把一直作威作福的主任拉下马了。",
    "PHIÊN ÂM": "tā zhècì jǔbào chénggōng , bǎ yīzhí zuòwēizuòfú de zhǔrèn lāxiàmǎ le ."
  },
  {
    "STT": 311,
    "CHỮ": "L",
    "CỤM": "拉下水",
    "PINYIN": "lā xià shuǐ",
    "NGHĨA": "使之卷入。把人拉入水中。比喻拉拢人一起去做坏事。也说“拖下水”。",
    "SẮP XẾP CÂU": "他/ 这场纠纷。 / 被拉下水， / 卷入了",
    "ĐÁP ÁN": "他被拉下水，卷入了这场纠纷。",
    "PHIÊN ÂM": "tā bèi lāxiàshuǐ , juǎnrù le zhèchǎng jiūfēn ."
  },
  {
    "STT": 312,
    "SẮP XẾP CÂU": "我可不会跟你一起冒险。/你别想把我/拉下水，",
    "ĐÁP ÁN": "你别想把我拉下水，我可不会跟你一起冒险。",
    "PHIÊN ÂM": "nǐbié xiǎng bǎ wǒ lāxiàshuǐ , wǒ kě bùhuì gēn nǐ yīqǐ màoxiǎn ."
  },
  {
    "STT": 313,
    "CHỮ": "L",
    "CỤM": "拉闲篇",
    "PINYIN": "lā xián piān",
    "NGHĨA": "谈一些与正事无关的话，闲聊。",
    "SẮP XẾP CÂU": "在一起 / 消磨时间。 / 拉闲篇， / 他们",
    "ĐÁP ÁN": "他们在一起拉闲篇，消磨时间。",
    "PHIÊN ÂM": "tāmen zài yīqǐ lā xiánpiān , xiāomó shíjiān ."
  },
  {
    "STT": 314,
    "SẮP XẾP CÂU": "老爱在后面/他们俩上课不听讲，/影响别人学习。/拉闲篇，",
    "ĐÁP ÁN": "他们俩上课不听讲，老爱在后面拉闲篇，影响别人学习。",
    "PHIÊN ÂM": "tāmen liǎ shàngkè bù tīngjiǎng , lǎoài zài hòumiàn lā xiánpiān , yǐngxiǎng biéren xuéxí ."
  },
  {
    "STT": 315,
    "CHỮ": "L",
    "CỤM": "拉一把",
    "PINYIN": "lā yì bǎ",
    "NGHĨA": "比喻帮助别人摆脱困境。",
    "SẮP XẾP CÂU": "帮我 / 度过了难关。 / 拉了我一把， / 他",
    "ĐÁP ÁN": "他拉了我一把，帮我度过了难关。",
    "PHIÊN ÂM": "tā lā le wǒ yībǎ , bāng wǒ dùguò le nánguān ."
  },
  {
    "STT": 316,
    "SẮP XẾP CÂU": "真希望有人能/他正处于低谷期，/拉他一把。",
    "ĐÁP ÁN": "他正处于低谷期，真希望有人能拉他一把。",
    "PHIÊN ÂM": "tā zhèng chǔyú dīgǔ qī , zhēn xīwàng yǒurén nénglā tā yībǎ ."
  },
  {
    "STT": 317,
    "CHỮ": "L",
    "CỤM": "癞皮狗",
    "PINYIN": "lài pí ɡǒu",
    "NGHĨA": "骂人的话，指没皮没脸的人，脸皮厚的人。",
    "SẮP XẾP CÂU": "让人讨厌。 / 一样， / 癞皮狗 / 他像个",
    "ĐÁP ÁN": "他像个癞皮狗一样，让人讨厌。",
    "PHIÊN ÂM": "tā xiàng gè làipígǒu yīyàng , ràng rén tǎoyàn ."
  },
  {
    "STT": 318,
    "SẮP XẾP CÂU": "别人怎么赶都赶不走。/像个癞皮狗，/他这个人",
    "ĐÁP ÁN": "他这个人像个癞皮狗，别人怎么赶都赶不走。",
    "PHIÊN ÂM": "tā zhège rénxiàng gè làipígǒu , biéren zěnme gǎn dū gǎn bù zǒu ."
  },
  {
    "STT": 319,
    "CHỮ": "L",
    "CỤM": "拦路虎",
    "PINYIN": "lán lù hǔ",
    "NGHĨA": "拦住道路的老虎，过去指拦路抢劫的匪徒。现在多用来比喻前进路 上的障碍或困难。",
    "SẮP XẾP CÂU": "搁浅了。 / 拦路虎， / 计划/ 他遇到了",
    "ĐÁP ÁN": "他遇到了拦路虎，计划搁浅了。",
    "PHIÊN ÂM": "tā yùdào le lánlùhǔ , jìhuà gēqiǎn le ."
  },
  {
    "STT": 320,
    "SẮP XẾP CÂU": "数学一直是/我不会轻易放弃。/我学习路上的/拦路虎，但",
    "ĐÁP ÁN": "数学一直是我学习路上的拦路虎，但我不会轻易放弃。",
    "PHIÊN ÂM": "shùxué yīzhí shì wǒ xuéxí lùshang de lánlùhǔ , dàn wǒ bùhuì qīngyì fàngqì ."
  },
  {
    "STT": 321,
    "CHỮ": "L",
    "CỤM": "浪子回头金不换",
    "PINYIN": "lànɡ zi huí tóu jīn bú huàn",
    "NGHĨA": "形容犯错的人改过自新非常难得。",
    "SẮP XẾP CÂU": "重新 / 他 / 做人。 / 浪子回头金不换，",
    "ĐÁP ÁN": "他浪子回头金不换，重新做人。",
    "PHIÊN ÂM": "tā làngzǐhuítóujīnbùhuàn , chóngxīnzuòrén ."
  },
  {
    "STT": 322,
    "SẮP XẾP CÂU": "真是/他以前确实荒唐，/浪子回头金不换。/但现在认真工作，",
    "ĐÁP ÁN": "他以前确实荒唐，但现在认真工作，真是浪子回头金不换。",
    "PHIÊN ÂM": "tā yǐqián quèshí huāngtáng , dàn xiànzài rènzhēn gōngzuò , zhēnshi làngzǐhuítóujīnbùhuàn ."
  },
  {
    "STT": 323,
    "CHỮ": "L",
    "CỤM": "老把戏",
    "PINYIN": "lǎo bǎ xì",
    "NGHĨA": "老旧的一套，多指没有改变的思想、方式、方法。把戏，杂技的节目。",
    "SẮP XẾP CÂU": "没有 / 玩老把戏，/ 新意。/ 他总是",
    "ĐÁP ÁN": "他总是玩老把戏，没有新意。",
    "PHIÊN ÂM": "tā zǒngshì wán lǎobǎxì , méiyǒu xīnyì ."
  },
  {
    "STT": 324,
    "SẮP XẾP CÂU": "别人早就不吃这一套了。/你又来这一套/老把戏，",
    "ĐÁP ÁN": "你又来这一套老把戏，别人早就不吃这一套了。",
    "PHIÊN ÂM": "nǐ yòu lái zhè yītào lǎobǎxì , biéren zǎojiù bùchī zhè yītào le ."
  },
  {
    "STT": 325,
    "CHỮ": "L",
    "CỤM": "老掉牙",
    "PINYIN": "lǎo diào yá",
    "NGHĨA": "事物、言论等陈旧过时。",
    "SẮP XẾP CÂU": "老掉牙了， / 过时了。/ 他的说法/ 已经",
    "ĐÁP ÁN": "他的说法老掉牙了，已经过时了。",
    "PHIÊN ÂM": "tā de shuōfa lǎodiàoyá le , yǐjīng guòshí le ."
  },
  {
    "STT": 326,
    "SẮP XẾP CÂU": "他讲的那个笑话/一点也不好笑。/老掉牙了，",
    "ĐÁP ÁN": "他讲的那个笑话老掉牙了，一点也不好笑。",
    "PHIÊN ÂM": "tā jiǎng de nàgè xiàohuà lǎodiàoyá le , yīdiǎn yě bùhǎo xiào ."
  },
  {
    "STT": 327,
    "CHỮ": "L",
    "CỤM": "老封建",
    "PINYIN": "lǎo fēnɡ jiàn",
    "NGHĨA": "指某人循规蹈矩、传统、保守。",
    "SẮP XẾP CÂU": "保守。 / 老封建， / 思想/ 他思想",
    "ĐÁP ÁN": "他思想老封建，思想保守。",
    "PHIÊN ÂM": "tā sīxiǎng lǎo fēngjiàn , sīxiǎngbǎoshǒu ."
  },
  {
    "STT": 328,
    "SẮP XẾP CÂU": "真是个/他思想还停留在从前，/老封建。",
    "ĐÁP ÁN": "他思想还停留在从前，真是个老封建。",
    "PHIÊN ÂM": "tā sīxiǎng huán tíngliú zài cóngqián , zhēnshi gè lǎo fēngjiàn ."
  },
  {
    "STT": 329,
    "CHỮ": "L",
    "CỤM": "老狐狸",
    "PINYIN": "lǎo hú li",
    "NGHĨA": "指老谋深算的人。",
    "SẮP XẾP CÂU": "非常 / 他是个 / 狡猾。 / 老狐狸，",
    "ĐÁP ÁN": "他是个老狐狸，非常狡猾。",
    "PHIÊN ÂM": "tā shì gè lǎohúli , fēicháng jiǎohuá ."
  },
  {
    "STT": 330,
    "SẮP XẾP CÂU": "和善模样骗了，/他可是个/老狐狸。/ 别被他那副",
    "ĐÁP ÁN": "别被他那副和善模样骗了，他可是个老狐狸。",
    "PHIÊN ÂM": "bié bèi tā nà fù héshàn múyàng piàn le , tā kěshì gè lǎohúli ."
  },
  {
    "STT": 331,
    "CHỮ": "L",
    "CỤM": "老黄牛",
    "PINYIN": "lǎo huánɡ niú",
    "NGHĨA": "指勤劳肯干的人。",
    "SẮP XẾP CÂU": "他像 / 为国家 / 奉献。 / 一样， / 默默地 / 老黄牛",
    "ĐÁP ÁN": "他像老黄牛一样，默默地为国家奉献。",
    "PHIÊN ÂM": "tā xiàng lǎohuángniú yīyàng , mòmòdì wéi guójiā fèngxiàn ."
  },
  {
    "STT": 332,
    "SẮP XẾP CÂU": "却最踏实可靠，/他做事不声不响，/像头/老黄牛一样。",
    "ĐÁP ÁN": "他做事不声不响，却最踏实可靠，像头老黄牛一样。",
    "PHIÊN ÂM": "tā zuòshì bùshēngbùxiǎng , què zuì tāshi kěkào , xiàngtóu lǎohuángniú yīyàng ."
  },
  {
    "STT": 333,
    "CHỮ": "L",
    "CỤM": "冷血动物",
    "PINYIN": "lěnɡ xuè dònɡ wù",
    "NGHĨA": "比喻没有感情的人，不懂得知恩图报。",
    "SẮP XẾP CÂU": "冷血动物一样，/ 无动于衷。/ 他就像个 / 对别人的遭遇",
    "ĐÁP ÁN": "他就像个冷血动物一样，对别人的遭遇无动于衷。",
    "PHIÊN ÂM": "tā jiù xiàng gè lěngxuèdòngwù yīyàng , duì biéren de zāoyù wúdòngyúzhōng ."
  },
  {
    "STT": 334,
    "SẮP XẾP CÂU": "简直就是个 / 也无动于衷，/ 冷血动物。/ 他看着孩子痛哭",
    "ĐÁP ÁN": "他看着孩子痛哭也无动于衷，简直就是个冷血动物。",
    "PHIÊN ÂM": "tā kànzhe háizi tòngkū yě wúdòngyúzhōng , jiǎnzhí jiùshì gè lěngxuèdòngwù ."
  },
  {
    "STT": 335,
    "CỤM": "冷不丁",
    "PINYIN": "lěnɡ bu dīnɡ",
    "NGHĨA": "没有预料到，突然。也说“冷不防”、“冷孤丁”。",
    "SẮP XẾP CÂU": "大雨。 / 冷不丁 / 一场/ 下了",
    "ĐÁP ÁN": "冷不丁下了一场大雨。",
    "PHIÊN ÂM": "lěngbudīng xià le yīcháng dàyǔ ."
  },
  {
    "STT": 336,
    "SẮP XẾP CÂU": "从后面拍了我一下，/ 他 / 吓我一跳。/ 冷不丁",
    "ĐÁP ÁN": "他冷不丁从后面拍了我一下，吓我一跳。",
    "PHIÊN ÂM": "tā lěngbudīng cóng hòumiàn pāi le wǒ yīxià , xià wǒ yī tiào ."
  },
  {
    "STT": 337,
    "CHỮ": "M",
    "CỤM": "马鞍放在牛背上",
    "PINYIN": "mǎ ān fàng zài niú bèi shàng",
    "NGHĨA": "马鞍:放在马背上供人骑坐的器具。\r\n比喻两者不相匹配或对不上号。",
    "SẮP XẾP CÂU": "不合适。 / 马鞍放在牛背上， / 这简直是/ 完全",
    "ĐÁP ÁN": "这简直是马鞍放在牛背上，完全不合适。",
    "PHIÊN ÂM": "zhè jiǎnzhí shì mǎān fàngzài niúbèishàng , wánquán bù héshì ."
  },
  {
    "STT": 338,
    "SẮP XẾP CÂU": "不合适。 / 这件事就像 / 马鞍放在牛背上，/ 根本",
    "ĐÁP ÁN": "这件事就像马鞍放在牛背上，根本不合适。",
    "PHIÊN ÂM": "zhèjiàn shì jiù xiàng mǎān fàngzài niúbèishàng , gēnběn bù héshì ."
  },
  {
    "STT": 339,
    "CHỮ": "M",
    "CỤM": "马不停蹄，人不歇气",
    "PINYIN": "mǎ bù tíng tí, rén bù xiē qì",
    "NGHĨA": "见“人不解甲,马不停蹄”。",
    "SẮP XẾP CÂU": "地工作。 / 马不停蹄，人不歇气 / 为了完成任务，/ 他们",
    "ĐÁP ÁN": "为了完成任务，他们马不停蹄，人不歇气地工作。",
    "PHIÊN ÂM": "wèile wánchéng rènwu , tāmen mǎbùtíngtí , rén bù xiēqì dì gōngzuò ."
  },
  {
    "STT": 340,
    "SẮP XẾP CÂU": "工作忙得 / 马不停蹄，人不歇气。/ 他最近",
    "ĐÁP ÁN": "他最近工作忙得马不停蹄，人不歇气。",
    "PHIÊN ÂM": "tā zuìjìn gōngzuò máng dé mǎbùtíngtí , rén bù xiēqì ."
  },
  {
    "STT": 341,
    "CHỮ": "M",
    "CỤM": "骂大街",
    "PINYIN": "mà dà jiē",
    "NGHĨA": "指当众粗野地谩骂别人。",
    "SẮP XẾP CÂU": "在街上/ 扰乱公共秩序。 / 骂大街， / 他喝醉了酒，",
    "ĐÁP ÁN": "他喝醉了酒，在街上骂大街，扰乱公共秩序。",
    "PHIÊN ÂM": "tā hēzuì le jiǔ , zài jiēshang màdàjiē , rǎoluàn gōnggòngzhìxù ."
  },
  {
    "STT": 342,
    "SẮP XẾP CÂU": "很多人的关注。 / 他在街上 / 骂大街，/ 引起了",
    "ĐÁP ÁN": "他在街上骂大街，引起了很多人的关注。",
    "PHIÊN ÂM": "tā zài jiēshang màdàjiē , yǐnqǐ le hěnduō rén de guānzhù ."
  },
  {
    "STT": 343,
    "CHỮ": "M",
    "CỤM": "马放南山，刀枪入库",
    "PINYIN": "mǎ fàng nán shān, dāo qiāng rù kù",
    "NGHĨA": "见“刀枪入库,马放南山”。",
    "SẮP XẾP CÂU": "安居乐业。 / 马放南山，刀枪入库， / 人民 / 和平年代，",
    "ĐÁP ÁN": "和平年代，马放南山，刀枪入库，人民安居乐业。",
    "PHIÊN ÂM": "#ERROR!"
  },
  {
    "STT": 344,
    "SẮP XẾP CÂU": "安宁的生活。 / 国家安定了， / 马放南山，刀枪入库，/ 大家都过上了",
    "ĐÁP ÁN": "国家安定了，马放南山，刀枪入库，大家都过上了安宁的生活。",
    "PHIÊN ÂM": "guójiā āndìng le , mǎfàngnánshān , dāoqiāngrùkù , dàjiā dū guò shàng le ānníng de shēnghuó ."
  },
  {
    "STT": 345,
    "CHỮ": "M",
    "CỤM": "马拉串，驴驾辕",
    "PINYIN": "mǎ lā chuàn, lǘ jià yuán",
    "NGHĨA": "拉串:拉串套,辅助拉车,辕:车前驾牲畜的两根直木。",
    "SẮP XẾP CÂU": "正常运行。 / 马拉串，驴驾辕， / 根本无法 / 这套设备",
    "ĐÁP ÁN": "这套设备马拉串，驴驾辕，根本无法正常运行。",
    "PHIÊN ÂM": "zhètào shèbèi mǎlā chuàn , lǘ jiàyuán , gēnběnwúfǎ zhèngcháng yùnxíng ."
  },
  {
    "STT": 346,
    "SẮP XẾP CÂU": "搞不清楚。 / 这件事情就像 / 马拉串，驴驾辕，/ 完全",
    "ĐÁP ÁN": "这件事情就像马拉串，驴驾辕，完全搞不清楚。",
    "PHIÊN ÂM": "zhèjiàn shìqing jiù xiàng mǎlā chuàn , lǘ jiàyuán , wánquán gǎobùqīngchǔ ."
  },
  {
    "STT": 347,
    "CHỮ": "M",
    "CỤM": "马屁拍到马腿上",
    "PINYIN": "mǎ pì pāi dào mǎ tuǐ shàng",
    "NGHĨA": "见“拍马拍到马蹄子上”。",
    "SẮP XẾP CÂU": "他这次/ 反而惹恼了领导。 / 不仅没得到好处， / 马屁拍到马腿上，",
    "ĐÁP ÁN": "他这次马屁拍到马腿上，不仅没得到好处，反而惹恼了领导。",
    "PHIÊN ÂM": "tā zhècì mǎpìpāi dào mǎtuǐ shàng , bùjǐn méi dédào hǎochu , fǎnér rěnǎo le lǐngdǎo ."
  },
  {
    "STT": 348,
    "SẮP XẾP CÂU": "让老板不高兴。 / 他拍 / 反而/ 马屁拍到马腿上，",
    "ĐÁP ÁN": "他拍马屁拍到马腿上，反而让老板不高兴。",
    "PHIÊN ÂM": "tā pāimǎpì pāi dào mǎtuǐ shàng , fǎnér ràng lǎobǎn bù gāoxìng ."
  },
  {
    "STT": 349,
    "CHỮ": "M",
    "CỤM": "马钱少，鞍钱多",
    "PINYIN": "mǎ qián shǎo, ān qián duō",
    "NGHĨA": "见“鞍钱倒比马钱贵”。",
    "SẮP XẾP CÂU": "马钱少，鞍钱多，/ 亏本了。 / 他做生意/ 最后",
    "ĐÁP ÁN": "他做生意马钱少，鞍钱多，最后亏本了。",
    "PHIÊN ÂM": "tā zuòshēngyì mǎqiánshǎo , ānqián duō , zuìhòu kuīběn le ."
  },
  {
    "STT": 350,
    "SẮP XẾP CÂU": "不平衡。 / 这笔投资 / 马钱少，鞍钱多，/ 让人心里",
    "ĐÁP ÁN": "这笔投资马钱少，鞍钱多，让人心里不平衡。",
    "PHIÊN ÂM": "zhèbǐ tóuzī mǎqiánshǎo , ānqián duō , ràng rén xīnli bù pínghéng ."
  },
  {
    "STT": 351,
    "CHỮ": "M",
    "CỤM": "马勺碰锅沿",
    "PINYIN": "mǎ sháo pèng guō yán",
    "NGHĨA": "马勺:盛粥或盛饭用的大勺,多用木头 制成。\r\n比喻在一起生活或相处的人发生摩擦 或矛盾。",
    "SẮP XẾP CÂU": "真是/ 让人沮丧。 / 马勺碰锅沿， / 这次计划失败了，",
    "ĐÁP ÁN": "这次计划失败了，真是马勺碰锅沿，让人沮丧。",
    "PHIÊN ÂM": "zhècì jìhuà shībài le , zhēnshi mǎsháo pèngguō yán , ràng rén jǔsàng ."
  },
  {
    "STT": 352,
    "SẮP XẾP CÂU": "简直是 / 完全不搭边。 / 他们这次合作/ 马勺碰锅沿，",
    "ĐÁP ÁN": "他们这次合作简直是马勺碰锅沿，完全不搭边。",
    "PHIÊN ÂM": "tāmen zhècì hézuò jiǎnzhí shì mǎsháo pèngguō yán , wánquán bù dābiān ."
  },
  {
    "STT": 353,
    "CHỮ": "M",
    "CỤM": "马死黄金尽",
    "PINYIN": "mǎ sǐ huáng jīn jìn",
    "NGHĨA": "比喻权势、钱财丧失殆尽。",
    "SẮP XẾP CÂU": "一贫如洗。 / 马死黄金尽， / 他挥霍无度，/ 结果",
    "ĐÁP ÁN": "他挥霍无度，结果马死黄金尽，一贫如洗。",
    "PHIÊN ÂM": "tā huīhuòwúdù , jiéguǒ mǎsǐ huángjīn jìn , yīpínrúxǐ ."
  },
  {
    "STT": 354,
    "SẮP XẾP CÂU": "失去工作，/ 生活就难了。 / 他一旦 / 马死黄金尽，",
    "ĐÁP ÁN": "他一旦失去工作，马死黄金尽，生活就难了。",
    "PHIÊN ÂM": "tā yīdàn shīqù gōngzuò , mǎsǐ huángjīn jìn , shēnghuó jiù nán le ."
  },
  {
    "STT": 355,
    "CHỮ": "M",
    "CỤM": "马王爷见了也得让座",
    "PINYIN": "mǎ wáng yé jiàn le yě děi ràng zuò",
    "NGHĨA": "马王爷:神名,相传长着三只眼。\r\n形容恶势力得势猖狂,没人敢得罪(含嘲讽义)。",
    "SẮP XẾP CÂU": "他 / 马王爷见了也得让座。 / 可是个 / 厉害角色，",
    "ĐÁP ÁN": "他可是个厉害角色，马王爷见了也得让座。",
    "PHIÊN ÂM": "tā kěshì gè lìhai juésè , mǎwángyé jiàn le yě dé ràngzuò ."
  },
  {
    "STT": 356,
    "SẮP XẾP CÂU": "真是 / 在这个行业， / 他的地位 / 马王爷见了也得让座。",
    "ĐÁP ÁN": "在这个行业，他的地位真是马王爷见了也得让座。",
    "PHIÊN ÂM": "zài zhège hángyè , tā de dìwèi zhēnshi mǎwángyé jiàn le yě dé ràngzuò ."
  },
  {
    "STT": 357,
    "CHỮ": "M",
    "CỤM": "蚂蚁啃骨头",
    "PINYIN": "mǎ yǐ kěn gǔ tou",
    "NGHĨA": "比喻以微薄之力——点——点地干完大事。",
    "SẮP XẾP CÂU": "只能 / 慢慢地做。 / 蚂蚁啃骨头， / 这项工程量很大，",
    "ĐÁP ÁN": "这项工程量很大，只能蚂蚁啃骨头，慢慢地做。",
    "PHIÊN ÂM": "zhèxiàng gōngchéngliàng hěndà , zhǐnéng mǎyǐkěngǔtóu , mànmàn dì zuò ."
  },
  {
    "STT": 358,
    "SẮP XẾP CÂU": "就像 / 慢慢壮大。 / 他这小公司 / 蚂蚁啃骨头，",
    "ĐÁP ÁN": "他这小公司就像蚂蚁啃骨头，慢慢壮大。",
    "PHIÊN ÂM": "tā zhè xiǎo gōngsī jiù xiàng mǎyǐkěngǔtóu , mànmàn zhuàngdà ."
  },
  {
    "STT": 359,
    "CHỮ": "M",
    "CỤM": "买不起吊死绳",
    "PINYIN": "mǎi bù qǐ diào sǐ shéng",
    "NGHĨA": "形容穷困至极。",
    "SẮP XẾP CÂU": "走投无路了。 / 买不起吊死绳， / 他穷得 / 真是",
    "ĐÁP ÁN": "他穷得买不起吊死绳，真是走投无路了。",
    "PHIÊN ÂM": "tā qióng dé mǎibuqǐ diàosǐ shéng , zhēnshi zǒutóuwúlù le ."
  },
  {
    "STT": 360,
    "SẮP XẾP CÂU": "买不起吊死绳。 / 他现在/ 经济/ 拮据，",
    "ĐÁP ÁN": "他现在经济拮据，买不起吊死绳。",
    "PHIÊN ÂM": "tā xiànzài jīngjì jiéjū , mǎibuqǐ diàosǐ shéng ."
  },
  {
    "STT": 361,
    "CHỮ": "M",
    "CỤM": "卖抄下",
    "PINYIN": "mài chā xià",
    "NGHĨA": "抄着手在一旁站着。\r\n指责人赖在一 旁不劳动。\r\n斥责人见他人有难不 帮忙。",
    "SẮP XẾP CÂU": "出卖了/ 他为了自保，/ 卖抄下，/ 自己的朋友。/ 竟然",
    "ĐÁP ÁN": "他为了自保，竟然卖抄下，出卖了自己的朋友。",
    "PHIÊN ÂM": "tā wèile zìbǎo , jìngrán mài chāoxià , chūmài le zìjǐ de péngyou ."
  },
  {
    "STT": 362,
    "SẮP XẾP CÂU": "简直是 / 做得很马虎。 / 他这次的工作 / 卖抄下，",
    "ĐÁP ÁN": "他这次的工作简直是卖抄下，做得很马虎。",
    "PHIÊN ÂM": "tā zhècì de gōngzuò jiǎnzhí shì mài chāoxià , zuò dé hěn mǎhu ."
  },
  {
    "STT": 363,
    "CHỮ": "M",
    "CỤM": "卖长舌",
    "PINYIN": "mài cháng shé",
    "NGHĨA": "指人多嘴多舌。",
    "SẮP XẾP CÂU": "别人的坏话。 / 到处说 / 卖长舌， / 她最喜欢",
    "ĐÁP ÁN": "她最喜欢卖长舌，到处说别人的坏话。",
    "PHIÊN ÂM": "tā zuì xǐhuan mài chángshé , dàochù shuō biéren de huàihuà ."
  },
  {
    "STT": 364,
    "SẮP XẾP CÂU": "八卦。 / 她总是 / 卖长舌，/ 喜欢",
    "ĐÁP ÁN": "她总是卖长舌，喜欢八卦。",
    "PHIÊN ÂM": "tā zǒngshì mài chángshé , xǐhuan bāguà ."
  },
  {
    "STT": 365,
    "CHỮ": "M",
    "CỤM": "买得起马，备不起鞍",
    "PINYIN": "mǎi de qǐ mǎ, bèi bù qǐ ān",
    "NGHĨA": "讥讽人大钱都出了,却舍不得花些 小钱。",
    "SẮP XẾP CÂU": "他 / 生意失败了。 / 最后因为没有足够的资金，/ 买得起马，备不起鞍，",
    "ĐÁP ÁN": "他买得起马，备不起鞍，最后因为没有足够的资金，生意失败了。",
    "PHIÊN ÂM": "tā mǎidéqǐ mǎ , bèibùqǐ ān , zuìhòu yīnwèi méiyǒu zúgòu de zījīn , shēngyi shībài le ."
  },
  {
    "STT": 366,
    "SẮP XẾP CÂU": "很奢侈。 / 这人总是 / 买得起马，备不起鞍，/ 生活方式",
    "ĐÁP ÁN": "这人总是买得起马，备不起鞍，生活方式很奢侈。",
    "PHIÊN ÂM": "zhè rén zǒngshì mǎidéqǐ mǎ , bèibùqǐ ān , shēnghuó fāngshì hěn shēchǐ ."
  },
  {
    "STT": 367,
    "CHỮ": "M",
    "CỤM": "买得起马，置得起鞍",
    "PINYIN": "mǎi de qǐ mǎ, zhì de qǐ ān",
    "NGHĨA": "比喻能出得起大钱就不会在乎几个小钱。",
    "SẮP XẾP CÂU": "承担后果。 / 买得起马，置得起鞍， / 就应该 / 这件事他既然敢做，",
    "ĐÁP ÁN": "这件事他既然敢做，就应该买得起马，置得起鞍，承担后果。",
    "PHIÊN ÂM": "zhèjiàn shì tā jìrán gǎn zuò , jiù yīnggāi mǎidéqǐ mǎ , zhì dé qǐ ān , chéngdān hòuguǒ ."
  },
  {
    "STT": 368,
    "SẮP XẾP CÂU": "很滋润。 / 他 / 买得起马，置得起鞍，/ 生活过得",
    "ĐÁP ÁN": "他买得起马，置得起鞍，生活过得很滋润。",
    "PHIÊN ÂM": "tā mǎidéqǐ mǎ , zhì dé qǐ ān , shēnghuó guòdé hěn zīrùn ."
  },
  {
    "STT": 369,
    "CHỮ": "M",
    "CỤM": "买豆腐掏了个肉价钱",
    "PINYIN": "mǎi dòu fu tāo le gè ròu jià qián",
    "NGHĨA": "指本不值钱的东西,却费周折花了大价钱。",
    "SẮP XẾP CÂU": "他/ 亏大了。 / 买豆腐掏了个肉价钱，/ 真是",
    "ĐÁP ÁN": "他买豆腐掏了个肉价钱，真是亏大了。",
    "PHIÊN ÂM": "tā mǎi dòufu tāo le gè ròu jiàqian , zhēnshi kuīdà le ."
  },
  {
    "STT": 370,
    "SẮP XẾP CÂU": "这次 / 买豆腐掏了个肉价钱。 / 买东西/ 真是",
    "ĐÁP ÁN": "这次买东西真是买豆腐掏了个肉价钱。",
    "PHIÊN ÂM": "zhècì mǎi dōngxi zhēnshi mǎi dòufu tāo le gè ròu jiàqian ."
  },
  {
    "STT": 371,
    "CHỮ": "M",
    "CỤM": "卖风月",
    "PINYIN": "mài fēng yuè",
    "NGHĨA": "指女子卖弄姿色。\r\n也作“卖风情”。",
    "SẮP XẾP CÂU": "生活凄惨。 / 卖风月， / 很多女子被迫 / 旧社会，",
    "ĐÁP ÁN": "旧社会，很多女子被迫卖风月，生活凄惨。",
    "PHIÊN ÂM": "jiùshèhuì , hěnduō nǚzǐ bèipò mài fēngyuè , shēnghuó qīcǎn ."
  },
  {
    "STT": 372,
    "SẮP XẾP CÂU": "算是 / 风险很大。 / 他经营的生意 / 卖风月，",
    "ĐÁP ÁN": "他经营的生意算是卖风月，风险很大。",
    "PHIÊN ÂM": "tā jīngyíng de shēngyi suànshì mài fēngyuè , fēngxiǎn hěndà ."
  },
  {
    "STT": 373,
    "CHỮ": "M",
    "CỤM": "埋伏笔",
    "PINYIN": "mái fú bǐ",
    "NGHĨA": "喻指为以后留下线索。",
    "SẮP XẾP CÂU": "埋下伏笔。 / 为后来的情节发展 / 埋伏笔， / 作者在小说开头就",
    "ĐÁP ÁN": "作者在小说开头就埋伏笔，为后来的情节发展埋下伏笔。",
    "PHIÊN ÂM": "zuòzhě zài xiǎoshuō kāitóu jiù máifú bǐ , wéi hòulái de qíngjié fāzhǎn mái xià fúbǐ ."
  },
  {
    "STT": 374,
    "SẮP XẾP CÂU": "埋伏笔 / 这本书的情节/ 紧凑，/ 埋得很好。",
    "ĐÁP ÁN": "这本书的情节紧凑，埋伏笔埋得很好。",
    "PHIÊN ÂM": "zhè běnshū de qíngjié jǐncòu , máifú bǐmái dé hěn hǎo ."
  },
  {
    "STT": 375,
    "CHỮ": "M",
    "CỤM": "卖个眼前俏",
    "PINYIN": "mài gè yǎn qián qiào",
    "NGHĨA": "指做事只图表面成效,敷衍了事。",
    "SẮP XẾP CÂU": "得不偿失。 / 卖个眼前俏， / 他只顾 / 结果",
    "ĐÁP ÁN": "他只顾卖个眼前俏，结果得不偿失。",
    "PHIÊN ÂM": "tā zhǐgù màigè yǎnqián qiào , jiéguǒ débùchángshī ."
  },
  {
    "STT": 376,
    "SẮP XẾP CÂU": "赚了一笔。 / 在这个项目中， / 卖个眼前俏，/ 他",
    "ĐÁP ÁN": "他在这个项目中，卖个眼前俏，赚了一笔。",
    "PHIÊN ÂM": "tā zài zhège xiàngmù zhōng , màigè yǎnqián qiào , zhuàn le yībǐ ."
  },
  {
    "STT": 377,
    "CHỮ": "M",
    "CỤM": "卖狗皮膏药",
    "PINYIN": "mài gǒu pí gāo yào",
    "NGHĨA": "狗皮膏药;中医外用膏药。将药膏涂 抹在小块狗皮上制成,能消痞止痛。旧 时常有走江湖的人制造假的狗皮膏药来 骗取钱财。\r\n比喻用巧言或假货骗人。",
    "SẮP XẾP CÂU": "他 / 不少人的钱。 / 卖狗皮膏药，/ 骗了",
    "ĐÁP ÁN": "他卖狗皮膏药，骗了不少人的钱。",
    "PHIÊN ÂM": "tā màigǒupígāoyào , piàn le bùshǎo rén de qián ."
  },
  {
    "STT": 378,
    "SẮP XẾP CÂU": "他的商品质量 / 简直像 / 卖狗皮膏药。 / 不好，",
    "ĐÁP ÁN": "他的商品质量不好，简直像卖狗皮膏药。",
    "PHIÊN ÂM": "tā de shāngpǐnzhìliàng bùhǎo , jiǎnzhí xiàng màigǒupígāoyào ."
  },
  {
    "STT": 379,
    "CHỮ": "M",
    "CỤM": "卖关节",
    "PINYIN": "mài guān jié",
    "NGHĨA": "指暗中收受贿赂,通过职权之便为别 人办事或做人情。",
    "SẮP XẾP CÂU": "他通过 / 这个职位。 / 获得了 / 卖关节，",
    "ĐÁP ÁN": "他通过卖关节，获得了这个职位。",
    "PHIÊN ÂM": "tā tōngguò màiguānjié , huòdé le zhège zhíwèi ."
  },
  {
    "STT": 380,
    "SẮP XẾP CÂU": "这家商店的产品质量 / 简直就是 / 卖关节。 / 堪忧，",
    "ĐÁP ÁN": "这家商店的产品质量堪忧，简直就是卖关节。",
    "PHIÊN ÂM": "zhèjiā shāngdiàn de chǎnpǐnzhìliàng kānyōu , jiǎnzhí jiùshì màiguānjié ."
  },
  {
    "STT": 381,
    "CHỮ": "M",
    "CỤM": "卖后悔药",
    "PINYIN": "mài hòu huǐ yào",
    "NGHĨA": "见“吃后悔药”。",
    "SẮP XẾP CÂU": "人生可不是谁都能 / 做决定之前 / 卖后悔药。/ 要慎重,",
    "ĐÁP ÁN": "做决定之前要慎重, 人生可不是谁都能卖后悔药。",
    "PHIÊN ÂM": "zuò juédìng zhīqián yào shènzhòng , rénshēng kěbushì shéi dū néng mài hòuhuǐyào ."
  },
  {
    "STT": 382,
    "SẮP XẾP CÂU": "才后悔。 / 做事情要谨慎， / 不能等到 / 卖后悔药的时候",
    "ĐÁP ÁN": "做事情要谨慎，不能等到卖后悔药的时候才后悔。",
    "PHIÊN ÂM": "zuò shìqing yào jǐnshèn , bùnéng děngdào mài hòuhuǐyào de shíhou cái hòuhuǐ ."
  },
  {
    "STT": 383,
    "CHỮ": "M",
    "CỤM": "卖灰面碰见吹大风",
    "PINYIN": "mài huī miàn pèng jiàn chuī dà fēng",
    "NGHĨA": "灰面:石灰面。\r\n比喻事不凑巧,偏赶上倒霉事。",
    "SẮP XẾP CÂU": "真是 / 颗粒无收。 / 卖灰面碰见吹大风， / 这几天生意惨淡，/他",
    "ĐÁP ÁN": "他这几天生意惨淡，真是卖灰面碰见吹大风，颗粒无收。",
    "PHIÊN ÂM": "tā zhè jǐtiān shēngyi cǎndàn , zhēnshi màihuīmiàn pèngjiàn chuī dàfēng , kēlìwúshōu ."
  },
  {
    "STT": 384,
    "SẮP XẾP CÂU": "他最近的生意 / 简直是 / 卖灰面碰见吹大风。 / 不好，",
    "ĐÁP ÁN": "他最近的生意不好，简直是卖灰面碰见吹大风。",
    "PHIÊN ÂM": "tā zuìjìn de shēngyi bùhǎo , jiǎnzhí shì màihuīmiàn pèngjiàn chuī dàfēng ."
  },
  {
    "STT": 385,
    "CHỮ": "M",
    "CỤM": "卖架子",
    "PINYIN": "mài jià zi",
    "NGHĨA": "指卖弄、显示自认为高贵的身份、地位。",
    "SẮP XẾP CÂU": "他总是 / 很不舒服。 / 让人觉得 / 卖架子，",
    "ĐÁP ÁN": "他总是卖架子，让人觉得很不舒服。",
    "PHIÊN ÂM": "tā zǒngshì mài jiàzi , ràng rén juéde hěn bù shūfu ."
  },
  {
    "STT": 386,
    "SẮP XẾP CÂU": "并没有什么实力。 / 他总是 / 卖架子，/ 实际上",
    "ĐÁP ÁN": "他总是卖架子，实际上并没有什么实力。",
    "PHIÊN ÂM": "tā zǒngshì mài jiàzi , shíjìshàng bìng méiyǒu shénme shílì ."
  },
  {
    "STT": 387,
    "CHỮ": "M",
    "CỤM": "买金的遇见卖金的",
    "PINYIN": "mǎi jīn de yù jiàn mài jīn de",
    "NGHĨA": "比喻事情十分凑巧。",
    "SẮP XẾP CÂU": "获益匪浅。 / 买金的遇见卖金的， / 这次合作真是 / 双方都",
    "ĐÁP ÁN": "这次合作真是买金的遇见卖金的，双方都获益匪浅。",
    "PHIÊN ÂM": "zhècì hézuò zhēnshi mǎijīn de yùjiàn màijīn de , shuāngfāng dū huòyìfěiqiǎn ."
  },
  {
    "STT": 388,
    "SẮP XẾP CÂU": "互利共赢。 / 这次合作， / 买金的遇见卖金的，/ 他们",
    "ĐÁP ÁN": "他们这次合作，买金的遇见卖金的，互利共赢。",
    "PHIÊN ÂM": "tāmen zhècì hézuò , mǎijīn de yùjiàn màijīn de , hùlì gòngyíng ."
  },
  {
    "STT": 389,
    "CHỮ": "M",
    "CỤM": "买金偏撞不着卖金的",
    "PINYIN": "mǎi jīn piān zhuàng bù zháo mài jīn de",
    "NGHĨA": "比喻事情偏不那么凑巧。多指佳人 难逢才子。",
    "SẮP XẾP CÂU": "合适的。 / 买金偏撞不着卖金的， / 他找工作找了很久，/ 一直没有找到",
    "ĐÁP ÁN": "他找工作找了很久，买金偏撞不着卖金的，一直没有找到合适的。",
    "PHIÊN ÂM": "tā zhǎo gōngzuò zhǎo le hěn jiǔ , mǎijīn piān zhuàng bù zhe mài jīn de , yīzhí méiyǒu zhǎodào héshì de ."
  },
  {
    "STT": 390,
    "SẮP XẾP CÂU": "合适的。 / 他找工作找了很久， / 买金偏撞不着卖金的，/ 一直没找到",
    "ĐÁP ÁN": "他找工作找了很久，买金偏撞不着卖金的，一直没找到合适的。",
    "PHIÊN ÂM": "tā zhǎo gōngzuò zhǎo le hěn jiǔ , mǎijīn piān zhuàng bù zhe mài jīn de , yīzhí méi zhǎodào héshì de ."
  },
  {
    "STT": 391,
    "CHỮ": "M",
    "CỤM": "卖老俏",
    "PINYIN": "mài lǎo qiào",
    "NGHĨA": "指年老之人在人前招摇、卖弄。",
    "SẮP XẾP CÂU": "却还 / 打扮得像个少女。 / 卖老俏， / 她已经年过半百，",
    "ĐÁP ÁN": "她已经年过半百，却还卖老俏，打扮得像个少女。",
    "PHIÊN ÂM": "tā yǐjīng niánguòbànbǎi , què huán mài lǎoqiào , dǎbàn dé xiàng gè shàonǚ ."
  },
  {
    "STT": 392,
    "SẮP XẾP CÂU": "年轻人。 / 他总是 / 卖老俏，/ 教训",
    "ĐÁP ÁN": "他总是卖老俏，教训年轻人。",
    "PHIÊN ÂM": "tā zǒngshì mài lǎoqiào , jiàoxun niánqīngrén ."
  },
  {
    "STT": 393,
    "CHỮ": "M",
    "CỤM": "卖了儿子招女婿",
    "PINYIN": "mài le ér zi zhāo nǚ xù",
    "NGHĨA": "招女婿:招人入赘做女婿。\r\n比喻瞎折腾。",
    "SẮP XẾP CÂU": "真是短视。 / 卖了儿子招女婿， / 他为了快速赚钱，/ 竟然",
    "ĐÁP ÁN": "他为了快速赚钱，竟然卖了儿子招女婿，真是短视。",
    "PHIÊN ÂM": "tā wèile kuàisù zhuànqián , jìngrán mài le érzi zhāonǚxù , zhēnshi duǎnshì ."
  },
  {
    "STT": 394,
    "SẮP XẾP CÂU": "真是短视！ / 他为了眼前的利益， / 竟然 / 卖了儿子招女婿，",
    "ĐÁP ÁN": "他为了眼前的利益，竟然卖了儿子招女婿，真是短视！",
    "PHIÊN ÂM": "tā wèile yǎnqián de lìyì , jìngrán mài le érzi zhāonǚxù , zhēnshi duǎnshì ！"
  },
  {
    "STT": 395,
    "CHỮ": "M",
    "CỤM": "卖了馄饨买面吃",
    "PINYIN": "mài le hún tun mǎi miàn chī",
    "NGHĨA": "比喻舍优取劣。",
    "SẮP XẾP CÂU": "他 / 舍本逐末。 / 卖了馄饨买面吃，/ 真是",
    "ĐÁP ÁN": "他卖了馄饨买面吃，真是舍本逐末。",
    "PHIÊN ÂM": "tā mài le húntun mǎimiàn chī , zhēnshi shěběnzhúmò ."
  },
  {
    "STT": 396,
    "SẮP XẾP CÂU": "得不偿失！ / 他为了贪图小便宜， / 结果 / 卖了馄饨买面吃，",
    "ĐÁP ÁN": "他为了贪图小便宜，结果卖了馄饨买面吃，得不偿失！",
    "PHIÊN ÂM": "tā wèile tāntú xiǎobiànyí , jiéguǒ mài le húntun mǎimiàn chī , débùchángshī ！"
  },
  {
    "STT": 397,
    "CHỮ": "M",
    "CỤM": "卖路子",
    "PINYIN": "mài lù zi",
    "NGHĨA": "指断了财路。",
    "SẮP XẾP CÂU": "他竟然 / 泄露给了竞争对手。 / 把公司的机密 / 卖路子，",
    "ĐÁP ÁN": "他竟然卖路子，把公司的机密泄露给了竞争对手。",
    "PHIÊN ÂM": "tā jìngrán mài lùzi , bǎ gōngsī de jīmì xièlù gěi le jìngzhēngduìshǒu ."
  },
  {
    "STT": 398,
    "SẮP XẾP CÂU": "据说他很会 / 卖路子。 / 他办事效率/ 很高，",
    "ĐÁP ÁN": "他办事效率很高，据说他很会卖路子。",
    "PHIÊN ÂM": "tā bànshìxiàolǜ hěn gāo , jùshuō tā hěnhuì mài lùzi ."
  },
  {
    "STT": 399,
    "CHỮ": "M",
    "CỤM": "卖破绽",
    "PINYIN": "mài pò zhàn",
    "NGHĨA": "指故作失误,有意给对方漏洞,诱使对 方上当。",
    "SẮP XẾP CÂU": "很容易被识破。 / 卖破绽/ 漏洞百出， / 他这次的计划 / 太多，",
    "ĐÁP ÁN": "他这次的计划漏洞百出，卖破绽太多，很容易被识破。",
    "PHIÊN ÂM": "tā zhècì de jìhuà lòudòngbǎichū , màipòzhàn tài duō , hěn róngyì bèi shípò ."
  },
  {
    "STT": 400,
    "SẮP XẾP CÂU": "卖破绽了。 / 他的谎言/ 很快/ 就",
    "ĐÁP ÁN": "他的谎言很快就卖破绽了。",
    "PHIÊN ÂM": "tā de huǎngyán hěnkuài jiù màipòzhàn le ."
  },
  {
    "STT": 401,
    "CHỮ": "M",
    "CỤM": "买一个，饶一个",
    "PINYIN": "mǎi yī gè, ráo yī gè",
    "NGHĨA": "指获得一个又白得一个。",
    "SẮP XẾP CÂU": "非常精明。 / 买一个，饶一个， / 他在市场上买东西，/ 总是",
    "ĐÁP ÁN": "他在市场上买东西，总是买一个，饶一个，非常精明。",
    "PHIÊN ÂM": "tā zài shìchǎng shàng mǎi dōngxi , zǒngshì mǎi yīgè , ráo yīgè , fēicháng jīngmíng ."
  },
  {
    "STT": 402,
    "SẮP XẾP CÂU": "拖拖拉拉的。 / 他做事 / 买一个，饶一个，/ 总是",
    "ĐÁP ÁN": "他做事买一个，饶一个，总是拖拖拉拉的。",
    "PHIÊN ÂM": "tā zuòshì mǎi yīgè , ráo yīgè , zǒngshì tuōtuōlālā de ."
  },
  {
    "STT": 403,
    "CHỮ": "M",
    "CỤM": "卖嘴皮",
    "PINYIN": "mài zuǐ pí",
    "NGHĨA": "指光说不做。\r\n指人夸夸其谈。",
    "SẮP XẾP CÂU": "实际行动 / 卖嘴皮，/ 却很少。/ 他只会",
    "ĐÁP ÁN": "他只会卖嘴皮，实际行动却很少。",
    "PHIÊN ÂM": "tā zhǐhuì mài zuǐpí , shíjìxíngdòng què hěnshǎo ."
  },
  {
    "STT": 404,
    "SẮP XẾP CÂU": "不行动。 / 他只会 / 卖嘴皮，/ 从来",
    "ĐÁP ÁN": "他只会卖嘴皮，从来不行动。",
    "PHIÊN ÂM": "tā zhǐhuì mài zuǐpí , cóngláibù xíngdòng ."
  },
  {
    "STT": 405,
    "CHỮ": "M",
    "CỤM": "满脑袋高粱花子",
    "PINYIN": "mǎn nǎo dài gāo liáng huā zi",
    "NGHĨA": "指人农民出身。 \r\n也作“满头高粱花”。",
    "SẮP XẾP CÂU": "他 / 别人的劝告。 / 根本听不进 / 满脑袋高粱花子，",
    "ĐÁP ÁN": "他满脑袋高粱花子，根本听不进别人的劝告。",
    "PHIÊN ÂM": "tā mǎnnǎodài gāoliáng huāzi , gēnběn tīngbùjìn biéren de quàngào ."
  },
  {
    "STT": 406,
    "SẮP XẾP CÂU": "该怎么办。 / 他 / 满脑袋高粱花子，/ 根本不知道",
    "ĐÁP ÁN": "他满脑袋高粱花子，根本不知道该怎么办。",
    "PHIÊN ÂM": "tā mǎnnǎodài gāoliáng huāzi , gēnběn bù zhīdào gāi zěnmebàn ."
  },
  {
    "STT": 407,
    "CHỮ": "M",
    "CỤM": "满堂红",
    "PINYIN": "mǎn táng hóng",
    "NGHĨA": "原指绢灯的一种。\r\n比喻全面胜利或到 处兴旺。",
    "SẮP XẾP CÂU": "满堂红。 / 一路攀升， / 公司业绩 / 真是",
    "ĐÁP ÁN": "公司业绩一路攀升，真是满堂红。",
    "PHIÊN ÂM": "gōngsīyèjì yīlù pānshēng , zhēnshi mǎntánghóng ."
  },
  {
    "STT": 408,
    "SẮP XẾP CÂU": "这次会议 / 真是 / 满堂红。 / 取得了圆满成功，",
    "ĐÁP ÁN": "这次会议取得了圆满成功，真是满堂红。",
    "PHIÊN ÂM": "zhècì huìyì qǔdé le yuánmǎnchénggōng , zhēnshi mǎntánghóng ."
  },
  {
    "STT": 409,
    "CHỮ": "M",
    "CỤM": "满天开价，就地还钱",
    "PINYIN": "mǎn tiān kāi jià, jiù dì hái qián",
    "NGHĨA": "见“漫天要价,就地还钱”。",
    "SẮP XẾP CÂU": "总是 / 非常擅长讨价还价。 / 满天开价，就地还钱， / 他在市场上买东西，",
    "ĐÁP ÁN": "他在市场上买东西，总是满天开价，就地还钱，非常擅长讨价还价。",
    "PHIÊN ÂM": "tā zài shìchǎng shàng mǎi dōngxi , zǒngshì mǎntiān kāijià , jiù dì huán qián , fēicháng shàncháng tǎojiàhuánjià ."
  },
  {
    "STT": 410,
    "SẮP XẾP CÂU": "终于达成一致。 / 他们讨价还价， / 满天开价，就地还钱，/ 最后",
    "ĐÁP ÁN": "他们讨价还价，满天开价，就地还钱，最后终于达成一致。",
    "PHIÊN ÂM": "tāmen tǎojiàhuánjià , mǎntiān kāijià , jiù dì huán qián , zuìhòu zhōngyú dáchéng yīzhì ."
  },
  {
    "STT": 411,
    "CHỮ": "M",
    "CỤM": "满桶油打翻，糖饼上刮屑",
    "PINYIN": "mǎn tǒng yóu dǎ fān, táng bǐng shàng guā xiè",
    "NGHĨA": "见“大篓撒油,满地捡芝麻”。",
    "SẮP XẾP CÂU": "赔了个精光。/ 满桶油打翻，糖饼上刮屑， / 他这次投资失败，/ 真是",
    "ĐÁP ÁN": "他这次投资失败，真是满桶油打翻，糖饼上刮屑，赔了个精光。",
    "PHIÊN ÂM": "tā zhècì tóuzī shībài , zhēnshi mǎntǒng yóu dǎfān , tángbǐng shàng guāxiè , péi le gè jīngguāng ."
  },
  {
    "STT": 412,
    "SẮP XẾP CÂU": "浪费，/ 这次宴会/ 真是 / 满桶油打翻，糖饼上刮屑。",
    "ĐÁP ÁN": "这次宴会真是浪费，满桶油打翻，糖饼上刮屑。",
    "PHIÊN ÂM": "zhècì yànhuì zhēnshi làngfèi , mǎntǒng yóu dǎfān , tángbǐng shàng guāxiè ."
  },
  {
    "STT": 413,
    "CHỮ": "M",
    "CỤM": "馒头落地狗造化",
    "PINYIN": "mán tou luò dì gǒu zào huà",
    "NGHĨA": "造化:福分;幸运。\r\n馒头落在地上,成了狗的美食。戏骂 人意外地得到福分。",
    "SẮP XẾP CÂU": "馒头落地狗造化。 / 全看运气， / 这件事成与否，/ 真是",
    "ĐÁP ÁN": "这件事成败与否，全看运气，真是馒头落地狗造化。",
    "PHIÊN ÂM": "zhèjiàn shì chéngbài yǔfǒu , quán kànyùnqì , zhēnshi mántou luòdì gǒu zàohuà ."
  },
  {
    "STT": 414,
    "SẮP XẾP CÂU": "这次 / 馒头落地狗造化。 / 能不能成功， / 就看运气了，",
    "ĐÁP ÁN": "这次能不能成功，就看运气了，馒头落地狗造化。",
    "PHIÊN ÂM": "zhècì néng bùnéng chénggōng , jiù kànyùnqì le , mántou luòdì gǒu zàohuà ."
  },
  {
    "STT": 415,
    "CHỮ": "M",
    "CỤM": "满嘴飞出唾沫星",
    "PINYIN": "mǎn zuǐ fēi chū tuò mò xīng",
    "NGHĨA": "形容人情绪激动,话语滔滔而来。",
    "SẮP XẾP CÂU": "他 / 发表演讲。 / 慷慨激昂地 / 满嘴飞出唾沫星，",
    "ĐÁP ÁN": "他满嘴飞出唾沫星，慷慨激昂地发表演讲。",
    "PHIÊN ÂM": "tā mǎnzuǐ fēi chū tuòmo xīng , kāngkǎijīáng dì fābiǎo yǎnjiǎng ."
  },
  {
    "STT": 416,
    "SẮP XẾP CÂU": "滔滔不绝地讲着/ 他 / 满嘴飞出唾沫星，/ 他的故事。",
    "ĐÁP ÁN": "他满嘴飞出唾沫星，滔滔不绝地讲着他的故事。",
    "PHIÊN ÂM": "tā mǎnzuǐ fēi chū tuòmo xīng , tāotāobùjué dì jiǎng zhe tā de gùshi ."
  },
  {
    "STT": 417,
    "CHỮ": "M",
    "CỤM": "满嘴跑火车",
    "PINYIN": "mǎn zuǐ pǎo huǒ chē",
    "NGHĨA": "形容人说话浮夸,不切实际。",
    "SẮP XẾP CÂU": "他 / 不着边际的事情。 / 说的都是些 / 满嘴跑火车，",
    "ĐÁP ÁN": "他满嘴跑火车，说的都是些不着边际的事情。",
    "PHIÊN ÂM": "tā mǎnzuǐ pǎo huǒchē , shuō de dū shì xiē bùzhuóbiānjì de shìqing ."
  },
  {
    "STT": 418,
    "SẮP XẾP CÂU": "说的那些话 / 他 / 满嘴跑火车，/ 根本不可信。",
    "ĐÁP ÁN": "他满嘴跑火车，说的那些话根本不可信。",
    "PHIÊN ÂM": "tā mǎnzuǐ pǎo huǒchē , shuō de nàxiē huà gēnběn bùkě xìn ."
  },
  {
    "STT": 419,
    "CHỮ": "M",
    "CỤM": "满嘴跑舌头",
    "PINYIN": "mǎn zuǐ pǎo shé tou",
    "NGHĨA": "形容人能言善辩。",
    "SẮP XẾP CÂU": "他 / 说不清话了。/ 满嘴跑舌头， / 紧张得",
    "ĐÁP ÁN": "他紧张得满嘴跑舌头，说不清话了。",
    "PHIÊN ÂM": "tā jǐnzhāng dé mǎnzuǐ pǎo shétou , shuōbùqīng huà le ."
  },
  {
    "STT": 420,
    "SẮP XẾP CÂU": "让人听不清楚。 / 太快了， / 满嘴跑舌头，/ 他说话",
    "ĐÁP ÁN": "他说话太快了，满嘴跑舌头，让人听不清楚。",
    "PHIÊN ÂM": "tā shuōhuà tàikuài le , mǎnzuǐ pǎo shétou , ràng rén tīng bù qīngchu ."
  },
  {
    "STT": 421,
    "CHỮ": "M",
    "CỤM": "盲人骑瞎马",
    "PINYIN": "máng rén qí xiā mǎ",
    "NGHĨA": "指人的某段经历是乱闯过来的。\r\n比喻人育日行动。",
    "SẮP XẾP CÂU": "他做事 / 最终一事无成。 / 盲人骑瞎马， / 没有计划，",
    "ĐÁP ÁN": "他做事没有计划，盲人骑瞎马，最终一事无成。",
    "PHIÊN ÂM": "tā zuòshì méiyǒu jìhuà , mángrén qíxiāmǎ , zuìzhōng yīshìwúchéng ."
  },
  {
    "STT": 422,
    "SẮP XẾP CÂU": "简直是 / 盲人骑瞎马。 / 他在这个行业里 / 毫无经验，",
    "ĐÁP ÁN": "他在这个行业里毫无经验，简直是盲人骑瞎马。",
    "PHIÊN ÂM": "tā zài zhège hángyè lǐ háowú jīngyàn , jiǎnzhí shì mángrén qíxiāmǎ ."
  },
  {
    "STT": 423,
    "CHỮ": "M",
    "CỤM": "忙中遇着腿抽筋",
    "PINYIN": "máng zhōng yù zhe tuǐ chōu jīn",
    "NGHĨA": "比喻忙正事时偏碰到別的事干扰。",
    "SẮP XẾP CÂU": "死机了。 / 忙中遇着腿抽筋， / 他正忙着赶项目，/ 电脑突然",
    "ĐÁP ÁN": "他正忙着赶项目，忙中遇着腿抽筋，电脑突然死机了。",
    "PHIÊN ÂM": "tā zhèngmángzhe gǎn xiàngmù , máng zhōngyù zhe tuǐchōujīn , diànnǎo tūrán sǐjī le ."
  },
  {
    "STT": 424,
    "SẮP XẾP CÂU": "雪上加霜。 / 他正忙着呢， / 忙中遇着腿抽筋，/ 真是",
    "ĐÁP ÁN": "他正忙着呢，忙中遇着腿抽筋，真是雪上加霜。",
    "PHIÊN ÂM": "tā zhèngmángzhe ne , máng zhōngyù zhe tuǐchōujīn , zhēnshi xuěshàngjiāshuāng ."
  },
  {
    "STT": 425,
    "CHỮ": "M",
    "CỤM": "貌不惊人，言不出众",
    "PINYIN": "mào bù jīng rén, yán bù chū zhòng",
    "NGHĨA": "指人的才貌很一般,无出众之处。\r\n也作“言不压众,貌不惊人”。",
    "SẮP XẾP CÂU": "他 / 却很强。 / 貌不惊人，言不出众， / 但能力",
    "ĐÁP ÁN": "他貌不惊人，言不出众，但能力却很强。",
    "PHIÊN ÂM": "tā màobùjīngrén , yán bù chūzhòng , dàn nénglì què hěn qiáng ."
  },
  {
    "STT": 426,
    "SẮP XẾP CÂU": "非常靠谱。/他这个人/貌不惊人，言不出众，/ 做事却",
    "ĐÁP ÁN": "他这个人貌不惊人，言不出众，但做事却非常靠谱。",
    "PHIÊN ÂM": "tā zhège rén màobùjīngrén , yán bù chūzhòng , dàn zuòshì què fēicháng kào pǔ ."
  },
  {
    "STT": 427,
    "CHỮ": "M",
    "CỤM": "猫吃腥",
    "PINYIN": "māo chī xīng",
    "NGHĨA": "本指猫天性爱吃荤食。\r\n比喻男人好色。\r\n比喻人贪恋财物。",
    "SẮP XẾP CÂU": "他们 / 把钱分了。 / 偷偷地 / 猫吃腥似的，",
    "ĐÁP ÁN": "他们猫吃腥似的，偷偷地把钱分了。",
    "PHIÊN ÂM": "tāmen māo chī xīng shìde , tōutōudì bǎ qiánfēn le ."
  },
  {
    "STT": 428,
    "SẮP XẾP CÂU": "做坏事，/ 像猫吃腥一样。 / 他们偷偷摸摸地",
    "ĐÁP ÁN": "他们偷偷摸摸地做坏事，像猫吃腥一样。",
    "PHIÊN ÂM": "tāmen tōutōumōmō dì zuò huàishì , xiàng māo chī xīng yīyàng ."
  },
  {
    "STT": 429,
    "CHỮ": "M",
    "CỤM": "猫对爪儿",
    "PINYIN": "māo duì zhǎor",
    "NGHĨA": "比喻双方发生争斗。",
    "SẮP XẾP CÂU": "他们像 / 对方的意思。 / 就能明白 / 不用多说， / 猫对爪儿，",
    "ĐÁP ÁN": "他们像猫对爪儿，不用多说，就能明白对方的意思。",
    "PHIÊN ÂM": "tāmen xiàng māo duì zhuǎr , bùyòng duō shuō , jiù néng míngbai duìfāng de yìsi ."
  },
  {
    "STT": 430,
    "SẮP XẾP CÂU": "彼此都很了解。 / 他们俩是/ 老朋友了， / 猫对爪儿，",
    "ĐÁP ÁN": "他们俩是老朋友了，猫对爪儿，彼此都很了解。",
    "PHIÊN ÂM": "tāmen liǎ shì lǎopéngyou le , māo duì zhuǎr , bǐcǐ dū hěn liǎojiě ."
  },
  {
    "STT": 431,
    "CHỮ": "M",
    "CỤM": "猫儿见了鱼鲜饭",
    "PINYIN": "māo ér jiàn le yú xiān fàn",
    "NGHĨA": "形容人见到心爱的人或物急欲得手的 神态或心情。",
    "SẮP XẾP CÂU": "他见到 / 两眼放光。 / 就像猫儿见了鱼鲜饭一样， / 心仪的姑娘，",
    "ĐÁP ÁN": "他见到心仪的姑娘，就像猫儿见了鱼鲜饭一样，两眼放光。",
    "PHIÊN ÂM": "tā jiàndào xīnyí de gūniang , jiù xiàng māoér jiàn le yúxiān fàn yīyàng , liǎngyǎn fàngguāng ."
  },
  {
    "STT": 432,
    "SẮP XẾP CÂU": "猫儿见了鱼鲜饭一样。 / 他看到/ 美女，/ 就像",
    "ĐÁP ÁN": "他看到美女，就像猫儿见了鱼鲜饭一样。",
    "PHIÊN ÂM": "tā kàndào měinǚ , jiù xiàng māoér jiàn le yúxiān fàn yīyàng ."
  },
  {
    "STT": 433,
    "CHỮ": "M",
    "CỤM": "猫儿哭老鼠",
    "PINYIN": "māo ér kū lǎo shǔ",
    "NGHĨA": "比喻假装同情受害者。",
    "SẮP XẾP CÂU": "他像 / 企图博取同情。 / 装出一副可怜的样子， / 猫儿哭老鼠，",
    "ĐÁP ÁN": "他像猫儿哭老鼠，装出一副可怜的样子，企图博取同情。",
    "PHIÊN ÂM": "tā xiàng māoér kū lǎoshǔ , zhuāng chū yīfù kělián de yàngzi , qǐtú bóqǔ tóngqíng ."
  },
  {
    "STT": 434,
    "SẮP XẾP CÂU": "他假惺惺地 / 真是 / 猫儿哭老鼠！ / 哭泣，",
    "ĐÁP ÁN": "他假惺惺地哭泣，真是猫儿哭老鼠！",
    "PHIÊN ÂM": "tā jiǎxīngxīng dì kūqì , zhēnshi māoér kū lǎoshǔ ！"
  },
  {
    "STT": 435,
    "CHỮ": "M",
    "CỤM": "猫儿要老鼠",
    "PINYIN": "māo ér yào lǎo shǔ",
    "NGHĨA": "指强权者玩弄、欺压弱势者。",
    "SẮP XẾP CÂU": "他的想法去做。 / 硬要别人 / 他猫儿要老鼠, / 按照",
    "ĐÁP ÁN": "他猫儿要老鼠，硬要别人按照他的想法去做。",
    "PHIÊN ÂM": "tā māoér yào lǎoshǔ , yìngyào biéren ànzhào tā de xiǎngfǎ qù zuò ."
  },
  {
    "STT": 436,
    "SẮP XẾP CÂU": "各怀鬼胎。 / 他们表面上合作， / 实际上 / 猫儿要老鼠，",
    "ĐÁP ÁN": "他们表面上合作，实际上猫儿要老鼠，各怀鬼胎。",
    "PHIÊN ÂM": "tāmen biǎomiàn shàng hézuò , shíjìshàng māoér yào lǎoshǔ , gèhuáiguǐtāi ."
  },
  {
    "STT": 437,
    "CHỮ": "M",
    "CỤM": "猫盖屎",
    "PINYIN": "māo gài shǐ",
    "NGHĨA": "猫很爱干净,拉屎后总会用东西掩埋。\r\n比喻掩盖事实,蒙骗别人。",
    "SẮP XẾP CÂU": "犯下的错误。 / 掩盖他们 / 猫盖屎， / 他们企图",
    "ĐÁP ÁN": "他们企图猫盖屎，掩盖他们犯下的错误。",
    "PHIÊN ÂM": "tāmen qǐtú māogài shǐ , yǎngài tāmen fànxià de cuòwù ."
  },
  {
    "STT": 438,
    "SẮP XẾP CÂU": "但终究会被发现。 / 真相， / 就像猫盖屎一样，/ 他想掩盖",
    "ĐÁP ÁN": "他想掩盖真相，就像猫盖屎一样，但终究会被发现。",
    "PHIÊN ÂM": "tā xiǎng yǎngàizhēnxiāng , jiù xiàng māo gài shǐ yīyàng , dàn zhōngjiūhuì bèi fāxiàn ."
  },
  {
    "STT": 439,
    "CHỮ": "M",
    "CỤM": "冒坏水儿",
    "PINYIN": "mào huài shuǐr",
    "NGHĨA": "比喻使坏心眼儿,出坏主意。",
    "SẮP XẾP CÂU": "算计别人。 / 冒坏水儿， / 他总是 / 背后",
    "ĐÁP ÁN": "他总是冒坏水儿，背后算计别人。",
    "PHIÊN ÂM": "tā zǒngshì mào huàishuǐ r , bèihòu suànji biéren ."
  },
  {
    "STT": 440,
    "SẮP XẾP CÂU": "防不胜防。 / 他总是 / 冒坏水儿，/ 让人",
    "ĐÁP ÁN": "他总是冒坏水儿，让人防不胜防。",
    "PHIÊN ÂM": "tā zǒngshì mào huàishuǐ r , ràng rén fángbùshèngfáng ."
  },
  {
    "STT": 441,
    "CHỮ": "M",
    "CỤM": "冒火星",
    "PINYIN": "mào huǒ xīng",
    "NGHĨA": "形容人发怒时火气十足的神情。",
    "SẮP XẾP CÂU": "他 / 就冒火星了。 / 一听到 / 这个消息，",
    "ĐÁP ÁN": "他一听到这个消息，就冒火星了。",
    "PHIÊN ÂM": "tā yī tīngdào zhège xiāoxi , jiù mào huǒxīng le ."
  },
  {
    "STT": 442,
    "SẮP XẾP CÂU": "发脾气。 / 他突然 / 冲着我/ 冒火星，",
    "ĐÁP ÁN": "他突然冒火星，冲着我发脾气。",
    "PHIÊN ÂM": "tā tūrán mào huǒxīng , chōngzhe wǒ fāpíqì ."
  },
  {
    "STT": 443,
    "CHỮ": "M",
    "CỤM": "猫口里挖鳅",
    "PINYIN": "māo kǒu lǐ wā qiū",
    "NGHĨA": "鳅:泥鳅,鱼的一种,常生活在河湖、池 沼、水田中,潜伏泥中,猫喜食。\r\n比喻事情很难办到。",
    "SẮP XẾP CÂU": "他竟然敢 / 真是胆大包天! / 那个黑社会老大， / 去挑战 / 猫口里挖鳅，",
    "ĐÁP ÁN": "他竟然敢猫口里挖鳅，去挑战那个黑社会老大，真是胆大包天！",
    "PHIÊN ÂM": "tā jìngrán gǎn māo kǒulǐ wāqiū , qù tiǎozhàn nàgè hēishèhuì lǎodà , zhēnshi dǎndàbāotiān ！"
  },
  {
    "STT": 444,
    "SẮP XẾP CÂU": "他这次 / 简直是 / 猫口里挖鳅！ / 冒险行事，",
    "ĐÁP ÁN": "他这次冒险行事，简直是猫口里挖鳅！",
    "PHIÊN ÂM": "tā zhècì màoxiǎn xíngshì , jiǎnzhí shì māo kǒulǐ wāqiū ！"
  },
  {
    "STT": 445,
    "CHỮ": "M",
    "CỤM": "毛了手脚",
    "PINYIN": "máo le shǒu jiǎo",
    "NGHĨA": "见“慌了手脚”。",
    "SẮP XẾP CÂU": "他做事 / 完成了任务。 / 很快就 / 毛手毛脚，",
    "ĐÁP ÁN": "他做事毛了手脚，很快就完成了任务。",
    "PHIÊN ÂM": "tā zuòshì máo le shǒujiǎo , hěnkuài jiù wánchéng le rènwu ."
  },
  {
    "STT": 446,
    "SẮP XẾP CÂU": "很高。 / 他做事 / 毛了手脚，/ 效率",
    "ĐÁP ÁN": "他做事毛了手脚，效率很高。",
    "PHIÊN ÂM": "tā zuòshì máo le shǒujiǎo , xiàolǜ hěn gāo ."
  },
  {
    "STT": 447,
    "CHỮ": "M",
    "CỤM": "冒凉腔",
    "PINYIN": "mào liáng qiāng",
    "NGHĨA": "见“打凉腔”。",
    "SẮP XẾP CÂU": "很不舒服。 / 冒凉腔， / 他说话总是 / 让人感觉",
    "ĐÁP ÁN": "他说话总是冒凉腔，让人感觉很不舒服。",
    "PHIÊN ÂM": "tā shuōhuà zǒngshì màoliángqiāng , ràng rén gǎnjué hěn bù shūfu ."
  },
  {
    "STT": 448,
    "SẮP XẾP CÂU": "很不舒服。 / 他说话总是 / 冒凉腔，/ 让人感觉",
    "ĐÁP ÁN": "他说话总是冒凉腔，让人感觉很不舒服。",
    "PHIÊN ÂM": "tā shuōhuà zǒngshì màoliángqiāng , ràng rén gǎnjué hěn bù shūfu ."
  },
  {
    "STT": 449,
    "CHỮ": "M",
    "CỤM": "毛驴不行埋怨轴棍子打脸",
    "PINYIN": "máo lǘ bù xíng mán yuàn zhóu gùn zi dǎ liǎn",
    "NGHĨA": "轴棍子:套绳后面系着的横棍,用于连 接磨盘。腚:屁股。\r\n比喻自己能力不行而反怨条件不利。",
    "SẮP XẾP CÂU": "没有帮他。 / 责怪别人 / 却毛驴不行埋怨轴棍子打脸， / 他做事失败了，",
    "ĐÁP ÁN": "他做事失败了，却毛驴不行埋怨轴棍子打脸，责怪别人没有帮他。",
    "PHIÊN ÂM": "tā zuòshì shībài le , què máolǘ bùxíng mányuàn zhóu gùnzi dǎliǎn , zéguài biéren méiyǒu bāng tā ."
  },
  {
    "STT": 450,
    "SẮP XẾP CÂU": "怪公司 / 他自己能力不行， / 还毛驴不行埋怨轴棍子打脸，/ 没有给他机会。",
    "ĐÁP ÁN": "他自己能力不行，还毛驴不行埋怨轴棍子打脸，怪公司没有给他机会。",
    "PHIÊN ÂM": "tā zìjǐ nénglì bùxíng , huán máolǘ bùxíng mányuàn zhóu gùnzi dǎliǎn , guài gōngsī méiyǒu gěi tā jīhuì ."
  },
  {
    "STT": 451,
    "CHỮ": "M",
    "CỤM": "冒傻气",
    "PINYIN": "mào shǎ qì",
    "NGHĨA": "指说话、做事幼稚,不老到。",
    "SẮP XẾP CÂU": "他做事 / 不考虑后果。 / 冒傻气， / 总是",
    "ĐÁP ÁN": "他做事总是冒傻气，不考虑后果。",
    "PHIÊN ÂM": "tā zuòshì zǒngshì màoshǎqì , bù kǎolǜ hòuguǒ ."
  },
  {
    "STT": 452,
    "SẮP XẾP CÂU": "不懂。 / 他 / 什么也/ 冒傻气，",
    "ĐÁP ÁN": "他冒傻气，什么也不懂。",
    "PHIÊN ÂM": "tā màoshǎqì , shénme yě bù dǒng ."
  },
  {
    "STT": 453,
    "CHỮ": "M",
    "CỤM": "猫嫌狗不是",
    "PINYIN": "māo xián gǒu bù shì",
    "NGHĨA": "比喻嫌这怨那,成心和人作对。",
    "SẮP XẾP CÂU": "都不满意。 / 对什么事情 / 他猫嫌狗不是，",
    "ĐÁP ÁN": "他猫嫌狗不是，对什么事情都不满意。",
    "PHIÊN ÂM": "tā māo xián gǒu bùshì , duì shénme shìqing dū bù mǎnyì ."
  },
  {
    "STT": 454,
    "SẮP XẾP CÂU": "毛病。 / 她总是 / 猫嫌狗不是，/ 挑剔",
    "ĐÁP ÁN": "她总是猫嫌狗不是，挑剔毛病。",
    "PHIÊN ÂM": "tā zǒngshì māo xián gǒu bùshì , tiāoti máobìng ."
  },
  {
    "STT": 455,
    "CHỮ": "M",
    "CỤM": "冒一身冷汗",
    "PINYIN": "mào yī shēn lěng hàn",
    "NGHĨA": "形容人非常紧张、恐惧。",
    "SẮP XẾP CÂU": "他 / 高空作业。 / 终于完成了 / 冒一身冷汗，",
    "ĐÁP ÁN": "他冒一身冷汗，终于完成了高空作业。",
    "PHIÊN ÂM": "tā mào yīshēn lěnghàn , zhōngyú wánchéng le gāokōngzuòyè ."
  },
  {
    "STT": 456,
    "SẮP XẾP CÂU": "他听到/ 吓得 / 冒一身冷汗。 / 这个消息，",
    "ĐÁP ÁN": "他听到这个消息，吓得冒一身冷汗。",
    "PHIÊN ÂM": "tā tīngdào zhège xiāoxi , xià dé mào yīshēn lěnghàn ."
  },
  {
    "STT": 457,
    "CHỮ": "M",
    "CỤM": "猫捉老鼠狗看门",
    "PINYIN": "māo zhuō lǎo shǔ gǒu kān mén",
    "NGHĨA": "比喻各司其职。",
    "SẮP XẾP CÂU": "他们 / 非常默契。 / 配合得 / 猫捉老鼠狗看门，",
    "ĐÁP ÁN": "他们猫捉老鼠狗看门，配合得非常默契。",
    "PHIÊN ÂM": "tāmen māo zhuō lǎoshǔ gǒu kànmén , pèihé dé fēicháng mòqì ."
  },
  {
    "STT": 458,
    "SẮP XẾP CÂU": "他们 / 就像/ 猫捉老鼠狗看门一样。 / 各司其职，",
    "ĐÁP ÁN": "他们各司其职，就像猫捉老鼠狗看门一样。",
    "PHIÊN ÂM": "tāmen gèsīqízhí , jiù xiàng māo zhuō lǎoshǔ gǒu kànmén yīyàng ."
  },
  {
    "STT": 459,
    "CHỮ": "M",
    "CỤM": "猫子屙屎自己盖",
    "PINYIN": "māo zi ē shǐ zì jǐ gài",
    "NGHĨA": "比喻自己做下的事自己来收场。",
    "SẮP XẾP CÂU": "自己的错误。 / 企图掩盖 / 他猫子哭耗子，",
    "ĐÁP ÁN": "他猫子屙屎自己盖，企图掩盖自己的错误。",
    "PHIÊN ÂM": "tā māozi ē shǐ zìjǐ gài , qǐtú yǎngài zìjǐ de cuòwù ."
  },
  {
    "STT": 460,
    "SẮP XẾP CÂU": "真是 / 猫子屙屎自己盖！ / 他犯了错， / 却想方设法掩盖，",
    "ĐÁP ÁN": "他犯了错，却想方设法掩盖，真是猫子屙屎自己盖！",
    "PHIÊN ÂM": "tā fànlecuò , què xiǎngfāngshèfǎ yǎngài , zhēnshi māozi ē shǐ zìjǐ gài ！"
  },
  {
    "STT": 461,
    "CHỮ": "M",
    "CỤM": "没把柄",
    "PINYIN": "méi bǎ bǐng",
    "NGHĨA": "把柄:器物上便于手拿的部分。\r\n比喻没有被攻击或要挟的短处、过失。",
    "SẮP XẾP CÂU": "任何把柄。 / 没有留下 / 做事光明磊落， / 他为人正直，",
    "ĐÁP ÁN": "他为人正直，做事光明磊落，没有留下任何把柄。",
    "PHIÊN ÂM": "tā wéirénzhèngzhí , zuòshì guāngmínglěiluò , méiyǒu liúxià rènhé bǎbǐng ."
  },
  {
    "STT": 462,
    "SẮP XẾP CÂU": "任何把柄。 / 他做事/ 谨慎小心，/ 没有留下",
    "ĐÁP ÁN": "他做事谨慎小心，没有留下任何把柄。",
    "PHIÊN ÂM": "tā zuòshì jǐnshèn xiǎoxīn , méiyǒu liúxià rènhé bǎbǐng ."
  },
  {
    "STT": 463,
    "CHỮ": "M",
    "CỤM": "没白日没黑夜",
    "PINYIN": "méi bái rì méi hēi yè",
    "NGHĨA": "指人不分昼夜地做事。",
    "SẮP XẾP CÂU": "地加班。 / 他们 / 为了赶上项目进度，/ 没白日没黑夜",
    "ĐÁP ÁN": "为了赶上项目进度，他们没白日没黑夜地加班。",
    "PHIÊN ÂM": "wèile gǎnshàng xiàngmù jìndù , tāmen méi báirì méi hēiyè dì jiābān ."
  },
  {
    "STT": 464,
    "SẮP XẾP CÂU": "没白日没黑夜。 / 这段时间/ 他/ 忙得",
    "ĐÁP ÁN": "这段时间他忙得没白日没黑夜。",
    "PHIÊN ÂM": "zhè duànshíjiān tā máng dé méi báirì méi hēiyè ."
  },
  {
    "STT": 465,
    "CHỮ": "M",
    "CỤM": "没奔头",
    "PINYIN": "méi bēn tou",
    "NGHĨA": "指没有可追求的前途或希望。",
    "SẮP XẾP CÂU": "生活 / 感到很绝望。 / 没奔头， / 他觉得",
    "ĐÁP ÁN": "他觉得生活没奔头，感到很绝望。",
    "PHIÊN ÂM": "tā juéde shēnghuó méi bèntou , gǎndào hěn juéwàng ."
  },
  {
    "STT": 466,
    "SẮP XẾP CÂU": "很迷茫。 / 工作 / 没奔头，/ 他现在",
    "ĐÁP ÁN": "他现在工作没奔头，很迷茫。",
    "PHIÊN ÂM": "tā xiànzài gōngzuò méi bèntou , hěn mímáng ."
  },
  {
    "STT": 467,
    "CHỮ": "M",
    "CỤM": "没鼻子没脸",
    "PINYIN": "méi bí zi méi liǎn",
    "NGHĨA": "指批评人一点儿都不顾及对方脸面。",
    "SẮP XẾP CÂU": "低着头走了。 / 没鼻子没脸 / 他做错了事，/ 地",
    "ĐÁP ÁN": "他做错了事，没鼻子没脸地低着头走了。",
    "PHIÊN ÂM": "tā zuò cuò le shì , méi bízi méiliǎn dì dīzhetóu zǒu le ."
  },
  {
    "STT": 468,
    "SẮP XẾP CÂU": "没鼻子没脸的。 / 他/ 做错了事，",
    "ĐÁP ÁN": "他做错了事，没鼻子没脸的。",
    "PHIÊN ÂM": "tā zuò cuò le shì , méi bízi méiliǎn de ."
  },
  {
    "STT": 469,
    "CHỮ": "M",
    "CỤM": "没病揽伤寒",
    "PINYIN": "méi bìng lǎn shāng hán",
    "NGHĨA": "比喻自找麻烦。",
    "SẮP XẾP CÂU": "找了不少麻烦。 / 没病揽伤寒， / 他没事找事，/ 给自己",
    "ĐÁP ÁN": "他没事找事，没病揽伤寒，给自己找了不少麻烦。",
    "PHIÊN ÂM": "tā méishìzhǎoshì , méibìng lǎn shānghán , gěi zìjǐ zhǎo le bùshǎo máfan ."
  },
  {
    "STT": 470,
    "SẮP XẾP CÂU": "真是 / 没病揽伤寒。 / 他没事找事，",
    "ĐÁP ÁN": "他没事找事，真是没病揽伤寒。",
    "PHIÊN ÂM": "tā méishìzhǎoshì , zhēnshi méibìng lǎn shānghán ."
  },
  {
    "STT": 471,
    "CHỮ": "M",
    "CỤM": "没槽道",
    "PINYIN": "méi cáo dào",
    "NGHĨA": "槽道:本指牲口槽,比喻规矩。\r\n比喻没规矩,不正经。",
    "SẮP XẾP CÂU": "没槽道， / 乱七八糟的。 / 他做事",
    "ĐÁP ÁN": "他做事没槽道，乱七八糟的。",
    "PHIÊN ÂM": "tā zuòshì méicáo dào , luànqībāzāo de ."
  },
  {
    "STT": 472,
    "SẮP XẾP CÂU": "她非得/在我们吵架的时候/真是/没槽道/进来说八卦，",
    "ĐÁP ÁN": "她非得在我们吵架的时候进来说八卦，真是没槽道。",
    "PHIÊN ÂM": "tā fēiděi zài wǒmen chǎojià de shíhou jìnlái shuō bāguà , zhēnshi méicáo dào ."
  },
  {
    "STT": 473,
    "CHỮ": "M",
    "CỤM": "没成色",
    "PINYIN": "méi chéng sè",
    "NGHĨA": "成色:体统。\r\n指行事不成体统,没样子。",
    "SẮP XẾP CÂU": "没成色。 / 还很稚嫩， / 他的作品",
    "ĐÁP ÁN": "他的作品还很稚嫩，没成色。",
    "PHIÊN ÂM": "tā de zuòpǐn huán hěn zhìnèn , méi chéngsè ."
  },
  {
    "STT": 474,
    "SẮP XẾP CÂU": "实现。 / 他的计划 / 没成色，/ 很难",
    "ĐÁP ÁN": "他的计划没成色，很难实现。",
    "PHIÊN ÂM": "tā de jìhuà méi chéngsè , hěnnán shíxiàn ."
  },
  {
    "STT": 475,
    "CHỮ": "M",
    "CỤM": "没吃过猪肉，也见过猪跑",
    "PINYIN": "méi chī guò zhū ròu, yě jiàn guò zhū pǎo",
    "NGHĨA": "比喻虽未亲身经历,但还有一定的见识。",
    "SẮP XẾP CÂU": "但是 / 我还是了解一些的。 / 没吃过猪肉，也见过猪跑， / 虽然我没有做过这项工作，",
    "ĐÁP ÁN": "虽然我没有做过这项工作，但是没吃过猪肉，也见过猪跑，我还是了解一些的。",
    "PHIÊN ÂM": "suīrán wǒ méiyǒu zuòguò zhèxiàng gōngzuò , dànshì méichīguò zhūròu , yě jiàn guò zhū pǎo , wǒ háishi liǎojiě yīxiē de ."
  },
  {
    "STT": 476,
    "SẮP XẾP CÂU": "但我 / 多少了解一些。 / 虽然我没做过这个项目， / 没吃过猪肉，也见过猪跑，",
    "ĐÁP ÁN": "虽然我没做过这个项目，但我没吃过猪肉，也见过猪跑，多少了解一些。",
    "PHIÊN ÂM": "suīrán wǒ méi zuò guò zhège xiàngmù , dàn wǒ méichīguò zhūròu , yě jiàn guò zhū pǎo , duōshǎo liǎojiě yīxiē ."
  },
  {
    "STT": 477,
    "CHỮ": "M",
    "CỤM": "没出路",
    "PINYIN": "méi chū lù",
    "NGHĨA": "也作“没吃过猪肉,还没见过猪跑”, “没吃过猪肉,还没听过猪哼哼”。",
    "SẮP XẾP CÂU": "没出路了。 / 走投无路， / 他感到自己",
    "ĐÁP ÁN": "他感到自己走投无路，没出路了。",
    "PHIÊN ÂM": "tā gǎndào zìjǐ zǒutóuwúlù , méi chūlù le ."
  },
  {
    "STT": 478,
    "SẮP XẾP CÂU": "他感觉自己 / 想换个工作。 / 在这个行业 / 没出路，",
    "ĐÁP ÁN": "他感觉自己在这个行业没出路，想换个工作。",
    "PHIÊN ÂM": "tā gǎnjué zìjǐ zài zhège hángyè méi chūlù , xiǎnghuàngè gōngzuò ."
  },
  {
    "STT": 479,
    "CHỮ": "M",
    "CỤM": "没大小",
    "PINYIN": "méi dà xiǎo",
    "NGHĨA": "比喻好处没得到反而惹了麻烦。",
    "SẮP XẾP CÂU": "他 / 都一样。 / 没大小，/ 对谁",
    "ĐÁP ÁN": "他没大小，对谁都一样。",
    "PHIÊN ÂM": "tā méi dàxiǎo , duì shéi dū yīyàng ."
  },
  {
    "STT": 480,
    "SẮP XẾP CÂU": "很不舒服。 / 他说话 / 没大小，/ 让人",
    "ĐÁP ÁN": "他说话没大小，让人很不舒服。",
    "PHIÊN ÂM": "tā shuōhuà méi dàxiǎo , ràng rén hěn bù shūfu ."
  },
  {
    "STT": 481,
    "CHỮ": "M",
    "CỤM": "没打着狐狸惹一身骚",
    "PINYIN": "méi dǎ zhe hú li rě yī shēn sāo",
    "NGHĨA": "指没前途。",
    "SẮP XẾP CÂU": "他/ 还惹了一身麻烦。 / 不仅没完成任务， / 没打着狐狸惹一身骚，",
    "ĐÁP ÁN": "他没打着狐狸惹一身骚，不仅没完成任务，还惹了一身麻烦。",
    "PHIÊN ÂM": "tā méi dǎzhe húli rě yīshēn sāo , bùjǐn méi wánchéng rènwu , huán rě le yīshēn máfan ."
  },
  {
    "STT": 482,
    "SẮP XẾP CÂU": "他费了 / 结果 / 没打着狐狸惹一身骚。 / 半天劲，",
    "ĐÁP ÁN": "他费了半天劲，结果没打着狐狸惹一身骚。",
    "PHIÊN ÂM": "tāfèi le bàntiān jìn , jiéguǒ méi dǎzhe húli rě yīshēn sāo ."
  },
  {
    "STT": 483,
    "CHỮ": "M",
    "CỤM": "没动静",
    "PINYIN": "méi dòng jing",
    "NGHĨA": "指不注意尊卑、长幼之间的关系,没规矩。",
    "SẮP XẾP CÂU": "等了 / 没动静。 / 半天，/ 还是",
    "ĐÁP ÁN": "等了半天，还是没动静。",
    "PHIÊN ÂM": "děng le bàntiān , háishi méidòngjìng ."
  },
  {
    "STT": 484,
    "SẮP XẾP CÂU": "那边还/ 等了 / 没动静。 / 半天，",
    "ĐÁP ÁN": "等了半天，那边还没动静。",
    "PHIÊN ÂM": "děng le bàntiān , nàbian huán méidòngjìng ."
  },
  {
    "STT": 485,
    "CHỮ": "M",
    "CỤM": "没耳朵",
    "PINYIN": "méi ěr duo",
    "NGHĨA": "指安静,没有声音。\r\n指没有进展 的消息。",
    "SẮP XẾP CÂU": "他 / 都没用。 / 谁劝他 / 没耳朵，",
    "ĐÁP ÁN": "他没耳朵，谁劝他都没用。",
    "PHIÊN ÂM": "tā méi ěrduo , shéi quàn tā dū méiyòng ."
  },
  {
    "STT": 486,
    "SẮP XẾP CÂU": "他都不听。 / 他这个人 / 别人怎么说 / 没耳朵，",
    "ĐÁP ÁN": "他这个人没耳朵，别人怎么说他都不听。",
    "PHIÊN ÂM": "tā zhège rén méi ěrduo , biéren zěnme shuō tā dū bù tīng ."
  },
  {
    "STT": 487,
    "CHỮ": "M",
    "CỤM": "没耳朵听着，也有鼻子闻着",
    "PINYIN": "méi ěr duo tīng zhe, yě yǒu bí zi wén zhe",
    "NGHĨA": "讥讽人听而不闻或糊涂没记性。\r\n也作“没耳性”。",
    "SẮP XẾP CÂU": "我知道怎么回事了。 / 没耳朵听着，也有鼻子闻着， / 虽然他没明说，/ 但是",
    "ĐÁP ÁN": "虽然他没明说，但是没耳朵听着，也有鼻子闻着，我知道怎么回事了。",
    "PHIÊN ÂM": "suīrán tā méi míngshuō , dànshì méi ěrduo tīng zhe , yě yǒu bízi wénzhe , wǒ zhīdào zěnmehuíshì le ."
  },
  {
    "STT": 488,
    "SẮP XẾP CÂU": "大概知道是怎么回事了。 / 但 / 虽然我没亲耳听到， / 没耳朵听着，也有鼻子闻着，",
    "ĐÁP ÁN": "虽然我没亲耳听到，但没耳朵听着，也有鼻子闻着，大概知道是怎么回事了。",
    "PHIÊN ÂM": "suīrán wǒ méi qīněr tīngdào , dàn méi ěrduo tīng zhe , yě yǒu bízi wénzhe , dàgài zhīdào shì zěnmehuíshì le ."
  },
  {
    "STT": 489,
    "CHỮ": "M",
    "CỤM": "没二话",
    "PINYIN": "méi èr huà",
    "NGHĨA": "指不讲求任何条件,爽快地应承人。",
    "SẮP XẾP CÂU": "这件事 / 定了，/ 没二话。 / 就这么",
    "ĐÁP ÁN": "这件事就这么定了，没二话。",
    "PHIÊN ÂM": "zhèjiàn shì jiù zhème dìng le , méi èrhuà ."
  },
  {
    "STT": 490,
    "SẮP XẾP CÂU": "我就 / 没二话。 / 他说什么， / 做什么，",
    "ĐÁP ÁN": "他说什么，我就做什么，没二话。",
    "PHIÊN ÂM": "tā shuō shénme , wǒ jiù zuò shénme , méi èrhuà ."
  },
  {
    "STT": 491,
    "CHỮ": "M",
    "CỤM": "没饭吃",
    "PINYIN": "méi fàn chī",
    "NGHĨA": "指没有谋生的手段,或指人吃不开。",
    "SẮP XẾP CÂU": "没饭吃。 / 他家境贫寒，/ 常常",
    "ĐÁP ÁN": "他家境贫寒，常常没饭吃。",
    "PHIÊN ÂM": "tā jiājìngpínhán , chángcháng méifàn chī ."
  },
  {
    "STT": 492,
    "SẮP XẾP CÂU": "现在 / 没饭吃了。 / 他失业了，",
    "ĐÁP ÁN": "他失业了，现在没饭吃了。",
    "PHIÊN ÂM": "tā shīyè le , xiànzài méifàn chī le ."
  },
  {
    "STT": 493,
    "CHỮ": "M",
    "CỤM": "没缝也要下蛆",
    "PINYIN": "méi fèng yě yào xià qū",
    "NGHĨA": "比喻无端寻衅滋事。",
    "SẮP XẾP CÂU": "他/ 别人的毛病。 / 总是挑 / 没缝也要下蛆，",
    "ĐÁP ÁN": "他没缝也要下蛆，总是挑别人的毛病。",
    "PHIÊN ÂM": "tā méifèng yě yào xià qū , zǒngshì tiāo biéren de máobìng ."
  },
  {
    "STT": 494,
    "SẮP XẾP CÂU": "没缝也要下蛆。 / 他这个人 / 很会钻营，",
    "ĐÁP ÁN": "他这个人很会钻营，没缝也要下蛆。",
    "PHIÊN ÂM": "tā zhège rén hěnhuì zuānyíng , méifèng yě yào xià qū ."
  },
  {
    "STT": 495,
    "CHỮ": "M",
    "CỤM": "没给好嘴脸",
    "PINYIN": "méi gěi hǎo zuǐ liǎn",
    "NGHĨA": "指对人态度冷淡,有意排斥对方。",
    "SẮP XẾP CÂU": "他 / 批评了我一顿。 / 没给好嘴脸，/ 狠狠地",
    "ĐÁP ÁN": "他没给好嘴脸，狠狠地批评了我一顿。",
    "PHIÊN ÂM": "tā méi gěi hǎo zuǐliǎn , hěnhěn dì pīpíng le wǒ yīdùn ."
  },
  {
    "STT": 496,
    "SẮP XẾP CÂU": "他 / 批评了一顿。 / 没给好嘴脸，/把我",
    "ĐÁP ÁN": "他没给好嘴脸，把我批评了一顿。",
    "PHIÊN ÂM": "tā méi gěi hǎo zuǐliǎn , bǎ wǒ pīpíng le yīdùn ."
  },
  {
    "STT": 497,
    "CHỮ": "M",
    "CỤM": "没给孔夫子磕过头",
    "PINYIN": "méi gěi kǒng fū zǐ kē guò tóu",
    "NGHĨA": "旧时读书,必须先给孔夫子磕头行礼。\r\n指没上过学。",
    "SẮP XẾP CÂU": "他 / 没个规矩。 / 说话做事 / 没给孔夫子磕过头，",
    "ĐÁP ÁN": "他没给孔夫子磕过头，说话做事没个规矩。",
    "PHIÊN ÂM": "tā méi gěi kǒngfūzǐ kē guòtóu , shuōhuà zuòshì méigè guīju ."
  },
  {
    "STT": 498,
    "SẮP XẾP CÂU": "都没有。 / 他这个人 / 没给孔夫子磕过头，/ 一点礼貌",
    "ĐÁP ÁN": "他这个人没给孔夫子磕过头，一点礼貌都没有。",
    "PHIÊN ÂM": "tā zhège rén méi gěi kǒngfūzǐ kē guòtóu , yīdiǎn lǐmào dū méiyǒu ."
  },
  {
    "STT": 499,
    "CHỮ": "M",
    "CỤM": "没根基",
    "PINYIN": "méi gēn jī",
    "NGHĨA": "比喻没基础,无势力。",
    "SẮP XẾP CÂU": "他做事 / 失败。 / 没根基，/ 容易",
    "ĐÁP ÁN": "他做事没根基，容易失败。",
    "PHIÊN ÂM": "tā zuòshì méi gēnjī , róngyì shībài ."
  },
  {
    "STT": 500,
    "SẮP XẾP CÂU": "失败。 / 他的事业 / 没根基，/ 很容易",
    "ĐÁP ÁN": "他的事业没根基，很容易失败。",
    "PHIÊN ÂM": "tā de shìyè méi gēnjī , hěn róngyì shībài ."
  },
  {
    "STT": 501,
    "CHỮ": "M",
    "CỤM": "没骨头",
    "PINYIN": "méi gǔ tou",
    "NGHĨA": "形容人懦弱,没志气。\r\n也作“没骨气”。",
    "SẮP XẾP CÂU": "他/ 什么事情都做得出来。 / 为了钱 / 没骨头，",
    "ĐÁP ÁN": "他没骨头，为了钱什么事情都做得出来。",
    "PHIÊN ÂM": "tā méigǔtóu , wèile qián shénme shìqing dū zuò dé chūlái ."
  },
  {
    "STT": 502,
    "SẮP XẾP CÂU": "气节。 / 他这个人 / 没骨头，/ 没有一点",
    "ĐÁP ÁN": "他这个人没骨头，没有一点气节。",
    "PHIÊN ÂM": "tā zhège rén méigǔtóu , méiyǒu yīdiǎn qìjié ."
  },
  {
    "STT": 503,
    "CHỮ": "M",
    "CỤM": "没过河就拆桥",
    "PINYIN": "méi guò hé jiù chāi qiáo",
    "NGHĨA": "比喻还没得到好处或达到目的,就迫 不及待地先把恩人抛开。",
    "SẮP XẾP CÂU": "没过河就拆桥。 / 就翻脸不认人， / 他利用完别人之后，/ 真是",
    "ĐÁP ÁN": "他利用完别人之后，就翻脸不认人，真是没过河就拆桥。",
    "PHIÊN ÂM": "tā lìyòng wán biéren zhīhòu , jiù fānliǎnbùrènrén , zhēnshi méi guòhé jiù chāiqiáo ."
  },
  {
    "STT": 504,
    "SẮP XẾP CÂU": "他 / 忘恩负义。 / 这个人 / 没过河就拆桥，",
    "ĐÁP ÁN": "他这个人没过河就拆桥，忘恩负义。",
    "PHIÊN ÂM": "tā zhège rén méi guòhé jiù chāiqiáo , wàngēnfùyì ."
  },
  {
    "STT": 505,
    "CHỮ": "M",
    "CỤM": "没好果子吃",
    "PINYIN": "méi hǎo guǒ zi chī",
    "NGHĨA": "比喻没好结果。",
    "SẮP XẾP CÂU": "你做了/ 没好果子吃。 / 这样的事，/ 肯定",
    "ĐÁP ÁN": "你做了这样的事，肯定没好果子吃。",
    "PHIÊN ÂM": "nǐ zuò le zhèyàng de shì , kěndìng méihǎo guǒzichī ."
  },
  {
    "STT": 506,
    "SẮP XẾP CÂU": "他 / 肯定 / 没好果子吃。 / 做了坏事，",
    "ĐÁP ÁN": "他做了坏事，肯定没好果子吃。",
    "PHIÊN ÂM": "tā zuò le huàishì , kěndìng méihǎo guǒzichī ."
  },
  {
    "STT": 507,
    "CHỮ": "M",
    "CỤM": "没合槽就先咬群",
    "PINYIN": "méi hé cáo jiù xiān yǎo qún",
    "NGHĨA": "比喻还没有和人相处就先闹矛盾。",
    "SẮP XẾP CÂU": "失败了。 / 没合槽就先咬群， / 他们团队 / 项目最终",
    "ĐÁP ÁN": "他们团队没合槽就先咬群，项目最终失败了。",
    "PHIÊN ÂM": "tāmen tuánduì méihécáo jiù xiān yǎoqún , xiàngmù zuìzhōng shībài le ."
  },
  {
    "STT": 508,
    "SẮP XẾP CÂU": "先做了再说。 / 他做事 / 没合槽就先咬群，/ 总是",
    "ĐÁP ÁN": "他做事没合槽就先咬群，总是先做了再说。",
    "PHIÊN ÂM": "tā zuòshì méihécáo jiù xiān yǎoqún , zǒngshì xiān zuò le zàishuō ."
  },
  {
    "STT": 509,
    "CHỮ": "M",
    "CỤM": "没合眼",
    "PINYIN": "méi hé yǎn",
    "NGHĨA": "指没睡觉。",
    "SẮP XẾP CÂU": "他为了 / 没合眼了。 / 好几天 / 赶工期，",
    "ĐÁP ÁN": "他为了赶工期，好几天没合眼了。",
    "PHIÊN ÂM": "tā wèile gǎngōngqī , hǎo jǐtiān méi héyǎn le ."
  },
  {
    "STT": 510,
    "SẮP XẾP CÂU": "他连续 / 没合眼。 / 工作了 / 三天三夜，",
    "ĐÁP ÁN": "他连续工作了三天三夜，没合眼。",
    "PHIÊN ÂM": "tā liánxù gōngzuò le sāntiānsānyè , méi héyǎn ."
  },
  {
    "STT": 511,
    "CHỮ": "M",
    "CỤM": "没活口",
    "PINYIN": "méi huó kǒu",
    "NGHĨA": "指话已说死,无回旋余地。\r\n指失 去活人口供。",
    "SẮP XẾP CÂU": "没活口了。 / 觉得已经 / 他走投无路，",
    "ĐÁP ÁN": "他走投无路，觉得已经没活口了。",
    "PHIÊN ÂM": "tā zǒutóuwúlù , juéde yǐjīng méi huókǒu le ."
  },
  {
    "STT": 512,
    "SẮP XẾP CÂU": "已经 / 没活口了。 / 他走投无路，",
    "ĐÁP ÁN": "他走投无路，已经没活口了。",
    "PHIÊN ÂM": "tā zǒutóuwúlù , yǐjīng méi huókǒu le ."
  },
  {
    "STT": 513,
    "CHỮ": "M",
    "CỤM": "没活路",
    "PINYIN": "méi huó lù",
    "NGHĨA": "指没有生存的希望。",
    "SẮP XẾP CÂU": "他 / 没活路了。 / 感觉已经 / 生意失败，",
    "ĐÁP ÁN": "他生意失败，感觉已经没活路了。",
    "PHIÊN ÂM": "tā shēngyi shībài , gǎnjué yǐjīng méi huólu le ."
  },
  {
    "STT": 514,
    "SẮP XẾP CÂU": "没活路了。 / 他感觉自己/ 已经",
    "ĐÁP ÁN": "他感觉自己已经没活路了。",
    "PHIÊN ÂM": "tā gǎnjué zìjǐ yǐjīng méi huólu le ."
  },
  {
    "STT": 515,
    "CHỮ": "M",
    "CỤM": "没火种",
    "PINYIN": "méi huǒ zhǒng",
    "NGHĨA": "比喻没有传宗接代的后人或接班人。",
    "SẮP XẾP CÂU": "没火种。 / 侦探们一时 / 案情扑朔迷离，",
    "ĐÁP ÁN": "案情扑朔迷离，侦探们一时没火种。",
    "PHIÊN ÂM": "ànqíng pūshuòmílí , zhēntàn men yīshí méi huǒzhǒng ."
  },
  {
    "STT": 516,
    "SẮP XẾP CÂU": "完全 / 根本没有进展。 / 这次的项目 / 没火种，",
    "ĐÁP ÁN": "这次的项目完全没火种，根本没有进展。",
    "PHIÊN ÂM": "zhècì de xiàngmù wánquán méi huǒzhǒng , gēnběn méiyǒu jìnzhǎn ."
  },
  {
    "STT": 517,
    "CHỮ": "M",
    "CỤM": "没脊骨",
    "PINYIN": "méi jǐ gǔ",
    "NGHĨA": "指没志气或没主见。",
    "SẮP XẾP CÂU": "他是个 / 可以出卖朋友。 / 为了利益 / 没脊骨的人，",
    "ĐÁP ÁN": "他是个没脊骨的人，为了利益可以出卖朋友。",
    "PHIÊN ÂM": "tā shì gè méi jǐgǔ de rén , wèile lìyì kěyǐ chūmài péngyou ."
  },
  {
    "STT": 518,
    "SẮP XẾP CÂU": "这人真/ 总是退缩。 / 没脊骨，/ 遇到事情",
    "ĐÁP ÁN": "这人真没脊骨，遇到事情总是退缩。",
    "PHIÊN ÂM": "zhèrén zhēn méi jǐgǔ , yùdào shìqing zǒngshì tuìsuō ."
  },
  {
    "STT": 519,
    "CHỮ": "M",
    "CỤM": "没有架子",
    "PINYIN": "méi jià zi",
    "NGHĨA": "比喻待人和蔼诚恳，没有一点儿自高自大、装腔作势的样子。",
    "SẮP XẾP CÂU": "但是 / 很平易近人。 / 没有架子， / 他虽然是领导，",
    "ĐÁP ÁN": "他虽然是领导，但是没有架子，很平易近人。",
    "PHIÊN ÂM": "tā suīrán shì lǐngdǎo , dànshì méiyǒu jiàzi , hěn píngyìjìnrén ."
  },
  {
    "STT": 520,
    "SẮP XẾP CÂU": "他虽然 / 没有架子。 / 有名气， / 但为人很平易近人，",
    "ĐÁP ÁN": "他虽然有名气，但为人很平易近人，没有架子。",
    "PHIÊN ÂM": "tā suīrán yǒumíngqì , dàn wéi rén hěn píngyìjìnrén , méiyǒu jiàzi ."
  },
  {
    "STT": 521,
    "CHỮ": "M",
    "CỤM": "没见过簸箕大的天",
    "PINYIN": "méi jiàn guo bò ji dà de tiān",
    "NGHĨA": "比喻没见过大的世面或没有多的 见识。",
    "SẮP XẾP CÂU": "他 / 都不了解。 / 对很多事情 / 没见过簸箕大的天，",
    "ĐÁP ÁN": "他没见过簸箕大的天，对很多事情都不了解。",
    "PHIÊN ÂM": "tā méijiàn guò bòjī dà de tiān , duì hěnduō shìqing dū bù liǎojiě ."
  },
  {
    "STT": 522,
    "SẮP XẾP CÂU": "他 / 不懂。 / 没见过簸箕大的天，/ 什么都",
    "ĐÁP ÁN": "他没见过簸箕大的天，什么都不懂。",
    "PHIÊN ÂM": "tā méijiàn guò bòjī dà de tiān , shénme dū bù dǒng ."
  },
  {
    "STT": 523,
    "CHỮ": "M",
    "CỤM": "没见过世面",
    "PINYIN": "méi jiàn guo shì miàn",
    "NGHĨA": "世面:指形形色色的社会情况。\r\n指经见少,见识浅。",
    "SẮP XẾP CÂU": "他 / 被骗。 / 没见过世面，/ 容易",
    "ĐÁP ÁN": "他没见过世面，容易被骗。",
    "PHIÊN ÂM": "tā méi jiànguòshìmiàn , róngyì bèi piàn ."
  },
  {
    "STT": 524,
    "SẮP XẾP CÂU": "不懂这一行的规矩。 / 个学生， / 没见过世面，/ 他还是",
    "ĐÁP ÁN": "他还是个学生，没见过世面，不懂这一行的规矩。",
    "PHIÊN ÂM": "tā háishi gè xuésheng , méi jiànguòshìmiàn , bù dǒng zhè yīxíng de guīju ."
  },
  {
    "STT": 525,
    "CHỮ": "M",
    "CỤM": "没经纬",
    "PINYIN": "méi jīng wěi",
    "NGHĨA": "比喻说话或办事没条理。",
    "SẮP XẾP CÂU": "写得/ 让人读不懂。 / 没经纬， / 他的文章",
    "ĐÁP ÁN": "他的文章写得没经纬，让人读不懂。",
    "PHIÊN ÂM": "tā de wénzhāng xiě dé méi jīngwěi , ràng réndú bù dǒng ."
  },
  {
    "STT": 526,
    "SẮP XẾP CÂU": "看得很费劲。 / 他的文章 / 没经纬，/ 让人",
    "ĐÁP ÁN": "他的文章没经纬，让人看得很费劲。",
    "PHIÊN ÂM": "tā de wénzhāng méi jīngwěi , ràng rén kàn dé hěn fèijìn ."
  },
  {
    "STT": 527,
    "CHỮ": "M",
    "CỤM": "没靠山",
    "PINYIN": "méi kào shān",
    "NGHĨA": "比喻没有可以倚仗的人或势力。 \r\n也作“无靠山”。",
    "SẮP XẾP CÂU": "他 / 靠自己努力。 / 没靠山，/只能",
    "ĐÁP ÁN": "他没靠山，只能靠自己努力。",
    "PHIÊN ÂM": "tā méi kàoshān , zhǐnéngkào zìjǐ nǔlì ."
  },
  {
    "STT": 528,
    "SẮP XẾP CÂU": "很艰难。 / 他在这个行业里 / 没靠山，/ 发展得",
    "ĐÁP ÁN": "他在这个行业里没靠山，发展得很艰难。",
    "PHIÊN ÂM": "tā zài zhège hángyè lǐ méi kàoshān , fāzhǎn dé hěn jiānnán ."
  },
  {
    "STT": 529,
    "CHỮ": "M",
    "CỤM": "没了王的蜜蜂",
    "PINYIN": "méi le wáng de mì fēng",
    "NGHĨA": "比喻失去管束、胡乱折腾的人。",
    "SẮP XẾP CÂU": "人心涣散。 / 没了王的蜜蜂， / 团队 / 领导调走了，",
    "ĐÁP ÁN": "领导调走了，团队没了王的蜜蜂，人心涣散。",
    "PHIÊN ÂM": "lǐngdǎo diàozǒu le , tuánduì méi le wáng de mìfēng , rénxīnhuànsàn ."
  },
  {
    "STT": 530,
    "SẮP XẾP CÂU": "他失去了 / 真的很难做。 / 支持， / 没了王的蜜蜂，",
    "ĐÁP ÁN": "他失去了支持，没了王的蜜蜂，真的很难做。",
    "PHIÊN ÂM": "tā shīqù le zhīchí , méi le wáng de mìfēng , zhēnde hěnnán zuò ."
  },
  {
    "STT": 531,
    "CHỮ": "M",
    "CỤM": "没理占三分",
    "PINYIN": "méi lǐ zhàn sān fēn",
    "NGHĨA": "见“无理搅三分”。",
    "SẮP XẾP CÂU": "把责任推给了别人。 / 硬是 / 没理占三分， / 但是 / 他虽然理亏，",
    "ĐÁP ÁN": "他虽然理亏，但是没理占三分，硬是把责任推给了别人。",
    "PHIÊN ÂM": "tā suīrán lǐkuī , dànshì méilǐ zhàn sānfēn , yìngshì bǎ zérèn tuīgěi le biéren ."
  },
  {
    "STT": 532,
    "SẮP XẾP CÂU": "虽然 / 但却很坚持。 / 这件事情她 / 没理占三分，",
    "ĐÁP ÁN": "这件事情她虽然没理占三分，但却很坚持。",
    "PHIÊN ÂM": "zhèjiàn shìqing tā suīrán méilǐ zhàn sānfēn , dàn què hěn jiānchí ."
  },
  {
    "STT": 533,
    "CHỮ": "M",
    "CỤM": "没脸面",
    "PINYIN": "méi liǎn miàn",
    "NGHĨA": "指丢人,没面子。 也作“没脸皮”。",
    "SẮP XẾP CÂU": "见人了。 / 没脸面 / 做错了事， / 他",
    "ĐÁP ÁN": "他做错了事，没脸面见人了。",
    "PHIÊN ÂM": "tā zuò cuò le shì , méi liǎnmiàn jiàn rén le ."
  },
  {
    "STT": 534,
    "SẮP XẾP CÂU": "很尴尬。 / 这件事让他 / 没脸面，/ 实在",
    "ĐÁP ÁN": "这件事让他没脸面，实在很尴尬。",
    "PHIÊN ÂM": "zhèjiàn shì ràng tā méi liǎnmiàn , shízài hěn gāngà ."
  },
  {
    "STT": 535,
    "CHỮ": "M",
    "CỤM": "没笼头的马",
    "PINYIN": "méi lóng tóu de mǎ",
    "NGHĨA": "比喻心野而不受约束的人。 \r\n也作“脱掉笼头的马”。",
    "SẮP XẾP CÂU": "谁也管不住他。 / 没笼头的马， / 就像 / 他",
    "ĐÁP ÁN": "他就像没笼头的马，谁也管不住他。",
    "PHIÊN ÂM": "tā jiù xiàng méi lóngtou de mǎ , shéi yě guǎnbùzhù tā ."
  },
  {
    "STT": 536,
    "SẮP XẾP CÂU": "无法控制。 / 他现在的状态就像 / 没笼头的马，/ 完全",
    "ĐÁP ÁN": "他现在的状态就像没笼头的马，完全无法控制。",
    "PHIÊN ÂM": "tā xiànzài de zhuàngtài jiù xiàng méi lóngtou de mǎ , wánquán wúfǎkòngzhì ."
  },
  {
    "STT": 537,
    "CHỮ": "M",
    "CỤM": "眉毛眼睛都会说话",
    "PINYIN": "méi mao yǎn jing dōu huì shuō huà",
    "NGHĨA": "形容人灵秀,善于眉目传情。",
    "SẮP XẾP CÂU": "她在想什么。 / 一看就知道 / 眉毛眼睛都会说话， / 她",
    "ĐÁP ÁN": "她眉毛眼睛都会说话，一看就知道她在想什么。",
    "PHIÊN ÂM": "tā méimáo yǎnjīng dū huì shuōhuà , yīkàn jiù zhīdào tā zài xiǎng shénme ."
  },
  {
    "STT": 538,
    "SẮP XẾP CÂU": "她的表情 / 眉毛眼睛都会说话。 / 很生动，",
    "ĐÁP ÁN": "她的表情生动，眉毛眼睛都会说话。",
    "PHIÊN ÂM": "tā de biǎoqíng shēngdòng , méimáo yǎnjīng dū huì shuōhuà ."
  },
  {
    "STT": 539,
    "CHỮ": "M",
    "CỤM": "没门路",
    "PINYIN": "méi mén lù",
    "NGHĨA": "门路:特指能达到个人日的的途径。\r\n指办事没有渠道,拉不上关系。\r\n也作“没门子”、“无门路”。",
    "SẮP XẾP CÂU": "工作。 / 找不到 / 没门路， / 他",
    "ĐÁP ÁN": "他没门路，找不到工作。",
    "PHIÊN ÂM": "tā méi ménlù , zhǎo bùdào gōngzuò ."
  },
  {
    "STT": 540,
    "SẮP XẾP CÂU": "解决。 / 这件事情 / 没门路，/ 无法",
    "ĐÁP ÁN": "这件事情没门路，无法解决。",
    "PHIÊN ÂM": "zhèjiàn shìqing méi ménlù , wúfǎ jiějué ."
  },
  {
    "STT": 541,
    "CHỮ": "M",
    "CỤM": "没脾气",
    "PINYIN": "méi pí qì",
    "NGHĨA": "指对人无可奈何。",
    "SẮP XẾP CÂU": "忍让别人。 / 总是 / 没脾气的人， / 他是个",
    "ĐÁP ÁN": "他是个没脾气的人，总是忍让别人。",
    "PHIÊN ÂM": "tā shì gè méi píqi de rén , zǒngshì rěnràng biéren ."
  },
  {
    "STT": 542,
    "SẮP XẾP CÂU": "个好人。 / 他对这件事 / 没脾气，/ 真是",
    "ĐÁP ÁN": "他对这件事没脾气，真是个好人。",
    "PHIÊN ÂM": "tā duì zhèjiàn shì méi píqi , zhēnshi gè hǎorén ."
  },
  {
    "STT": 543,
    "CHỮ": "M",
    "CỤM": "没前后眼",
    "PINYIN": "méi qián hòu yǎn",
    "NGHĨA": "比喻无法预料事态的发展和结果。\r\n也作“没长后眼”。",
    "SẮP XẾP CÂU": "后果。 / 总是考虑不到 / 没前没后， / 他做事",
    "ĐÁP ÁN": "他做事没前后眼，总是考虑不到后果。",
    "PHIÊN ÂM": "tā zuòshì méi qiánhòu yǎn , zǒngshì kǎolǜ bùdào hòuguǒ ."
  },
  {
    "STT": 544,
    "SẮP XẾP CÂU": "冲动行事。 / 他做事 / 没前后眼，/ 总是",
    "ĐÁP ÁN": "他做事没前后眼，总是冲动行事。",
    "PHIÊN ÂM": "tā zuòshì méi qiánhòu yǎn , zǒngshì chōngdòng xíngshì ."
  },
  {
    "STT": 545,
    "CHỮ": "M",
    "CỤM": "没请来财神，倒贴了些香表纸银",
    "PINYIN": "méi qǐng lái cái shén, dào tiē le xiē xiāng biǎo zhǐ yín",
    "NGHĨA": "香表:即黄表,祭祀时烧化的黄表纸。\r\n纸银:即纸钱,给死人或鬼神用。\r\n指钱没捞到,反而受了损失。",
    "SẮP XẾP CÂU": "亏损严重。/ 没请来财神，倒贴了些香表纸银, / 投资失败了， / 他这次",
    "ĐÁP ÁN": "他这次投资失败了，没请来财神，倒贴了些香表纸银，亏损严重。",
    "PHIÊN ÂM": "tā zhècì tóuzī shībài le , méi qǐnglái cáishén , dàotiē le xiē xiāngbiǎozhǐ yín , kuīsǔn yánzhòng ."
  },
  {
    "STT": 546,
    "SẮP XẾP CÂU": "反而倒贴了不少钱。 / 这次投资 / 没请来财神，",
    "ĐÁP ÁN": "这次投资没请来财神，反而倒贴了不少钱。",
    "PHIÊN ÂM": "zhècì tóuzī méi qǐnglái cáishén , fǎnér dàotiē le bùshǎo qián ."
  },
  {
    "STT": 547,
    "CHỮ": "M",
    "CỤM": "没人味",
    "PINYIN": "méi rén wèi",
    "NGHĨA": "指言行卑劣,不齿于人。",
    "SẮP XẾP CÂU": "读起来很枯燥。 / 没入味， / 写得 / 这篇文章",
    "ĐÁP ÁN": "这篇文章写得没人味，读起来很枯燥。",
    "PHIÊN ÂM": "zhè piānwénzhāng xiědé méirénwèi , dú qǐlai hěn kūzào ."
  },
  {
    "STT": 548,
    "SẮP XẾP CÂU": "很累。 / 他这个人 / 没人味，/ 跟他相处",
    "ĐÁP ÁN": "他这个人没人味，跟他相处很累。",
    "PHIÊN ÂM": "tā zhège rén méirénwèi , gēn tā xiāngchǔ hěnlěi ."
  },
  {
    "STT": 549,
    "CHỮ": "M",
    "CỤM": "没入脚处",
    "PINYIN": "méi rù jiǎo chù",
    "NGHĨA": "形容欢喜或慌乱得手足无措,不知如 何是好。",
    "SẮP XẾP CÂU": "受人排挤。 / 处处 / 没入脚处， / 他在这个公司",
    "ĐÁP ÁN": "他在这个公司没入脚处，处处受人排挤。",
    "PHIÊN ÂM": "tā zài zhège gōngsī méirù jiǎochù , chùchù shòurén páijǐ ."
  },
  {
    "STT": 550,
    "SẮP XẾP CÂU": "根本 / 很难成功。 / 他这次的计划 / 没入脚处，",
    "ĐÁP ÁN": "他这次的计划根本没入脚处，很难成功。",
    "PHIÊN ÂM": "tā zhècì de jìhuà gēnběn méirù jiǎochù , hěnnán chénggōng ."
  },
  {
    "STT": 551,
    "CHỮ": "M",
    "CỤM": "没三顿饱饭，有三顿饱气",
    "PINYIN": "méi sān dùn bǎo fàn, yǒu sān dùn bǎo qì",
    "NGHĨA": "形容生活极不顺心。",
    "SẮP XẾP CÂU": "依然乐观向上。 / 没三顿饱饭，有三顿饱气，/ 但他 / 虽然生活清苦，",
    "ĐÁP ÁN": "虽然生活清苦，但他没三顿饱饭，有三顿饱气，依然乐观向上。",
    "PHIÊN ÂM": "suīrán shēnghuó qīngkǔ , dàn tā méi sāndùn bǎofàn , yǒu sāndùn bǎoqì , yīrán lèguān xiàngshàng ."
  },
  {
    "STT": 552,
    "SẮP XẾP CÂU": "连饭都吃不饱，/真是 / 没三顿饱饭，有三顿饱气。/他整天在单位发火，",
    "ĐÁP ÁN": "他整天在单位发火，结果连饭都吃不饱，真是没三顿饱饭，有三顿饱气。",
    "PHIÊN ÂM": "tā zhěngtiān zài dānwèi fāhuǒ , jiéguǒ liánfàn dū chībùbǎo , zhēnshi méi sāndùn bǎofàn , yǒu sāndùn bǎoqì ."
  },
  {
    "STT": 553,
    "CHỮ": "M",
    "CỤM": "没杀人反沾一身血",
    "PINYIN": "méi shā rén fǎn zhān yī shēn xuè",
    "NGHĨA": "比喻无辜受连累。",
    "SẮP XẾP CÂU": "而被警方调查。/ 与嫌疑犯认识 / 因为 / 没杀人反沾一身血， / 他",
    "ĐÁP ÁN": "他没杀人反沾一身血，因为与嫌疑犯认识而被警方调查。",
    "PHIÊN ÂM": "tā méi shārén fǎn zhān yīshēn xuè , yīnwèi yǔ xiányífàn rènshi ér bèi jǐngfāng diàochá ."
  },
  {
    "STT": 554,
    "SẮP XẾP CÂU": "却因为 / 没杀人反沾一身血。 / 他没做错事， / 别人牵连，",
    "ĐÁP ÁN": "他没做错事，却因为别人牵连，没杀人反沾一身血。",
    "PHIÊN ÂM": "tā méi zuòcuòshì , què yīnwèi biéren qiānlián , méi shārén fǎn zhān yīshēn xuè ."
  },
  {
    "STT": 555,
    "CHỮ": "M",
    "CỤM": "没市场",
    "PINYIN": "méi shì chǎng",
    "NGHĨA": "比喻思想言论、谣言等没有引起反响。",
    "SẮP XẾP CÂU": "卖不出去。 / 没市场， / 他的产品",
    "ĐÁP ÁN": "他的产品没市场，卖不出去。",
    "PHIÊN ÂM": "tā de chǎnpǐn méi shìchǎng , màibùchūqù ."
  },
  {
    "STT": 556,
    "SẮP XẾP CÂU": "现在 / 难以出售。 / 这项产品 / 没市场，",
    "ĐÁP ÁN": "这项产品现在没市场，难以出售。",
    "PHIÊN ÂM": "zhèxiàng chǎnpǐn xiànzài méi shìchǎng , nányǐ chūshòu ."
  },
  {
    "STT": 557,
    "CHỮ": "M",
    "CỤM": "没水分",
    "PINYIN": "méi shuǐ fèn",
    "NGHĨA": "喻指真实可信,无虚夸成分。",
    "SẮP XẾP CÂU": "数据 / 没水分， / 真实可靠。 / 他的报告",
    "ĐÁP ÁN": "他的报告没水分，数据真实可靠。",
    "PHIÊN ÂM": "tā de bàogào méi shuǐfèn , shùjù zhēnshí kěkào ."
  },
  {
    "STT": 558,
    "SẮP XẾP CÂU": "没水分。 / 他的话/ 很有/ 分量，",
    "ĐÁP ÁN": "他的话很有分量，没水分。",
    "PHIÊN ÂM": "tā dehuà hěn yǒu fènliang , méi shuǐfèn ."
  },
  {
    "STT": 559,
    "CHỮ": "M",
    "CỤM": "没死活",
    "PINYIN": "méi sǐ huó",
    "NGHĨA": "形容做事拼命,不顾一切。",
    "SẮP XẾP CÂU": "真是 / 情况危急， / 没死活。 / 他当时",
    "ĐÁP ÁN": "他当时情况危急，真是没死活。",
    "PHIÊN ÂM": "tā dàngshí qíngkuàngwēijí , zhēnshi méi sǐhuó ."
  },
  {
    "STT": 560,
    "SẮP XẾP CÂU": "没死活。 / 他这段时间的/ 经济状况 / 真是",
    "ĐÁP ÁN": "他这段时间的经济状况真是没死活。",
    "PHIÊN ÂM": "tā zhè duànshíjiān de jīngjì zhuàngkuàng zhēnshi méi sǐhuó ."
  },
  {
    "STT": 561,
    "CHỮ": "M",
    "CỤM": "没头脑",
    "PINYIN": "méi tóu nǎo",
    "NGHĨA": "形容人思想简单,不明事理。",
    "SẮP XẾP CÂU": "总是 / 没头脑， / 犯错误。 / 他做事",
    "ĐÁP ÁN": "他做事没头脑，总是犯错误。",
    "PHIÊN ÂM": "tā zuòshì méitóunǎo , zǒngshì fàncuòwù ."
  },
  {
    "STT": 562,
    "SẮP XẾP CÂU": "真是 / 毫无条理。 / 他的计划 / 没头脑，",
    "ĐÁP ÁN": "他的计划真是没头脑，毫无条理。",
    "PHIÊN ÂM": "tā de jìhuà zhēnshi méitóunǎo , háowú tiáolǐ ."
  },
  {
    "STT": 563,
    "CHỮ": "M",
    "CỤM": "眉头一皱，计上心来",
    "PINYIN": "méi tóu yī zhòu, jì shàng xīn lái",
    "NGHĨA": "指稍作思考,便有了主意。\r\n也作“眉头方一皱,妙计上心来”、“眉 头一蹙,计上心来”、“眉头一皱,心生一 计”、“眉头一纵,计上心来”。",
    "SẮP XẾP CÂU": "想出了 / 解决问题的办法。 / 眉头一皱，计上心来， / 他",
    "ĐÁP ÁN": "他眉头一皱，计上心来，想出了解决问题的办法。",
    "PHIÊN ÂM": "tā méitóuyīzhòu , jìshàngxīnlái , xiǎngchū le jiějuéwèntí de bànfǎ ."
  },
  {
    "STT": 564,
    "SẮP XẾP CÂU": "他 / 解决方案。 / 眉头一皱，计上心来，/ 想到了",
    "ĐÁP ÁN": "他眉头一皱，计上心来，想到了解决方案。",
    "PHIÊN ÂM": "tā méitóuyīzhòu , jìshàngxīnlái , xiǎngdào le jiějuéfāngàn ."
  },
  {
    "STT": 565,
    "CHỮ": "M",
    "CỤM": "没味道",
    "PINYIN": "méi wèi dào",
    "NGHĨA": "指没意思,没趣味。",
    "SẮP XẾP CÂU": "不好吃。 / 做得 / 没味道， / 这道菜",
    "ĐÁP ÁN": "这道菜做得没味道，不好吃。",
    "PHIÊN ÂM": "zhè dàocài zuò dé méi wèidao , bù hàochī ."
  },
  {
    "STT": 566,
    "SẮP XẾP CÂU": "真 / 看得我昏昏欲睡。 / 这部电影/ 没味道，",
    "ĐÁP ÁN": "这部电影真没味道，看得我昏昏欲睡。",
    "PHIÊN ÂM": "zhèbù diànyǐng zhēn méi wèidao , kànde wǒ hūnhūnyùshuì ."
  },
  {
    "STT": 567,
    "CHỮ": "M",
    "CỤM": "没胃口",
    "PINYIN": "méi wèi kǒu",
    "NGHĨA": "指没有食欲。",
    "SẮP XẾP CÂU": "什么也 / 没胃口， / 不想吃。 / 他今天",
    "ĐÁP ÁN": "他今天没胃口，什么也不想吃。",
    "PHIÊN ÂM": "tā jīntiān méi wèikǒu , shénme yě bùxiǎng chī ."
  },
  {
    "STT": 568,
    "SẮP XẾP CÂU": "他最近 / 饭都吃不下去。 / 压力大， / 没胃口，",
    "ĐÁP ÁN": "他最近压力大，没胃口，饭都吃不下去。",
    "PHIÊN ÂM": "tā zuìjìn yālì dà , méi wèikǒu , fàn dū chī bù xiàqù ."
  },
  {
    "STT": 569,
    "CHỮ": "M",
    "CỤM": "没心肠",
    "PINYIN": "méi xīn cháng",
    "NGHĨA": "指没心思,无兴致。",
    "SẮP XẾP CÂU": "对别人的痛苦 / 没心肠， / 漠不关心。 / 他真是",
    "ĐÁP ÁN": "他真是没心肠，对别人的痛苦漠不关心。",
    "PHIÊN ÂM": "tā zhēnshi méi xīncháng , duì biéren de tòngkǔ mòbùguānxīn ."
  },
  {
    "STT": 570,
    "SẮP XẾP CÂU": "真 / 见死不救。 / 他这个人/ 没心肠，",
    "ĐÁP ÁN": "他这个人真没心肠，见死不救。",
    "PHIÊN ÂM": "tā zhège rénzhēn méi xīncháng , jiànsǐbùjiù ."
  },
  {
    "STT": 571,
    "CHỮ": "M",
    "CỤM": "没心肺",
    "PINYIN": "méi xīn fèi",
    "NGHĨA": "形容人头脑简单,不在乎任何事。\r\n也作“没心没肺”。",
    "SẮP XẾP CÂU": "不顾及 / 没心肺， / 别人的感受。 / 他做事",
    "ĐÁP ÁN": "他做事没心肺，不顾及别人的感受。",
    "PHIÊN ÂM": "tā zuòshì méi xīnfèi , bù gùjí biéren de gǎnshòu ."
  },
  {
    "STT": 572,
    "SẮP XẾP CÂU": "他的行为真 / 别人的感受。 / 没心肺，/ 毫不在乎",
    "ĐÁP ÁN": "他的行为真没心肺，毫不在乎别人的感受。",
    "PHIÊN ÂM": "tā de xíngwéi zhēn méi xīnfèi , háobùzàihū biéren de gǎnshòu ."
  },
  {
    "STT": 573,
    "CHỮ": "M",
    "CỤM": "没心肝",
    "PINYIN": "méi xīn gān",
    "NGHĨA": "斥责人没良心或对人狠毒。",
    "SẮP XẾP CÂU": "只顾自己， / 不管别人死活。 / 没心肝， / 他真是",
    "ĐÁP ÁN": "他真是没心肝，只顾自己，不管别人死活。",
    "PHIÊN ÂM": "tā zhēnshi méixīngān , zhǐgù zìjǐ , bùguǎn biéren sǐhuó ."
  },
  {
    "STT": 574,
    "SẮP XẾP CÂU": "真 / 完全不考虑别人。 / 他做事/ 没心肝，",
    "ĐÁP ÁN": "他做事真没心肝，完全不考虑别人。",
    "PHIÊN ÂM": "tā zuòshì zhēn méixīngān , wánquán bù kǎolǜ biéren ."
  },
  {
    "STT": 575,
    "CHỮ": "M",
    "CỤM": "没心没肺",
    "PINYIN": "méi xīn méi fèi",
    "NGHĨA": "比喻没良心，品质恶劣。\r\n比喻头脑简单，不关心时势。",
    "SẮP XẾP CÂU": "整天 / 没心没肺的， / 嘻嘻哈哈。 / 他",
    "ĐÁP ÁN": "他没心没肺的，整天嘻嘻哈哈。",
    "PHIÊN ÂM": "tā méixīnméifèi de , zhěngtiān xīxihāhā ."
  },
  {
    "STT": 576,
    "SẮP XẾP CÂU": "她的性格 / 活得很自在。 / 真是 / 没心没肺，",
    "ĐÁP ÁN": "她的性格真是没心没肺，活得很自在。",
    "PHIÊN ÂM": "tā de xìnggé zhēnshi méixīnméifèi , huódé hěn zì zài ."
  },
  {
    "STT": 577,
    "CHỮ": "M",
    "CỤM": "没心眼",
    "PINYIN": "méi xīn yǎn",
    "NGHĨA": "形容人思想单纯,无心计。",
    "SẮP XẾP CÂU": "很容易 / 没心眼， / 被人骗。 / 他",
    "ĐÁP ÁN": "他没心眼，很容易被人骗。",
    "PHIÊN ÂM": "tā méi xīnyǎn , hěn róngyì bèi rén piàn ."
  },
  {
    "STT": 578,
    "SẮP XẾP CÂU": "他这个人真 / 被别人欺骗。 / 没心眼，/ 容易",
    "ĐÁP ÁN": "他这个人真没心眼，容易被别人欺骗。",
    "PHIÊN ÂM": "tā zhège rénzhēn méi xīnyǎn , róngyì bèi biéren qīpiàn ."
  },
  {
    "STT": 579,
    "CHỮ": "M",
    "CỤM": "没眼珠",
    "PINYIN": "méi yǎn zhū",
    "NGHĨA": "指没眼力,不辨好坏。",
    "SẮP XẾP CÂU": "看不清 / 没眼珠， / 形势。 / 他",
    "ĐÁP ÁN": "他没眼珠，看不清形势。",
    "PHIÊN ÂM": "tā méi yǎnzhū , kànbuqīng xíngshì ."
  },
  {
    "STT": 580,
    "SẮP XẾP CÂU": "心疼。 / 她一脸 / 没眼珠的样子，/ 让人",
    "ĐÁP ÁN": "她一脸没眼珠的样子，让人心疼。",
    "PHIÊN ÂM": "tā yīliǎn méi yǎnzhū de yàngzi , ràng rén xīnténg ."
  },
  {
    "STT": 581,
    "CHỮ": "M",
    "CỤM": "没印把子",
    "PINYIN": "méi yìn bǎ zi",
    "NGHĨA": "印把子:行政机关的图章的把儿,代指 政权。\r\n指手中无权。",
    "SẮP XẾP CÂU": "管不了 / 没印把子， / 别人。 / 他",
    "ĐÁP ÁN": "他没印把子，管不了别人。",
    "PHIÊN ÂM": "tā méi yìnbàzi , guǎnbùle biéren ."
  },
  {
    "STT": 582,
    "SẮP XẾP CÂU": "无法证明。 / 他在这件事上 / 没印把子，/ 根本",
    "ĐÁP ÁN": "他在这件事上没印把子，根本无法证明。",
    "PHIÊN ÂM": "tā zài zhèjiàn shìshàng méi yìnbàzi , gēnběnwúfǎ zhèngmíng ."
  },
  {
    "STT": 583,
    "CHỮ": "M",
    "CỤM": "没影子",
    "PINYIN": "méi yǐng zi",
    "NGHĨA": "指不见踪影。\r\n喻指某事物根本不存在。",
    "SẮP XẾP CÂU": "就 / 他走后， / 没了影子。",
    "ĐÁP ÁN": "他走后，就没了影子。",
    "PHIÊN ÂM": "tā zǒu hòu , jiù méi le yǐngzi ."
  },
  {
    "STT": 584,
    "SẮP XẾP CÂU": "没影子。 / 这个人/ 来去自如，/ 真是",
    "ĐÁP ÁN": "这个人来去自如，真是没影子。",
    "PHIÊN ÂM": "zhège rén láiqùzìrú , zhēnshi méi yǐngzi ."
  },
  {
    "STT": 585,
    "CHỮ": "M",
    "CỤM": "没有功劳，也有苦劳",
    "PINYIN": "méi yǒu gōng láo, yě yǒu kǔ láo",
    "NGHĨA": "虽谈不上贡献,但也付出了辛苦。多 指应对人付出的辛苦予以肯定。",
    "SẮP XẾP CÂU": "但是 / 没有功劳，也有苦劳。 / 没有做出什么成绩， / 他虽然",
    "ĐÁP ÁN": "他虽然没有做出什么成绩，但是没有功劳，也有苦劳。",
    "PHIÊN ÂM": "tā suīrán méiyǒu zuòchū shénme chéngjì , dànshì méiyǒu gōngláo , yě yǒu kǔláo ."
  },
  {
    "STT": 586,
    "SẮP XẾP CÂU": "虽然/ 大家都看在眼里。 / 他在这个项目中 / 没有功劳，也有苦劳，",
    "ĐÁP ÁN": "他在这个项目中虽然没有功劳，也有苦劳，大家都看在眼里。",
    "PHIÊN ÂM": "tā zài zhège xiàngmù zhōng suīrán méiyǒu gōngláo , yě yǒu kǔláo , dàjiā dū kànzàiyǎnli ."
  },
  {
    "STT": 587,
    "CHỮ": "M",
    "CỤM": "没有鸡蛋照样做槽子糕",
    "PINYIN": "méi yǒu jī dàn zhào yàng zuò cáo zi gāo",
    "NGHĨA": "比喻缺了某个人照样能办成事。",
    "SẮP XẾP CÂU": "我们还是完成了任务。 / 但是 / 没有鸡蛋照样做槽子糕， / 虽然材料不足，",
    "ĐÁP ÁN": "虽然材料不足，但是没有鸡蛋照样做槽子糕，我们还是完成了任务",
    "PHIÊN ÂM": "suīrán cáiliào bùzú , dànshì méiyǒu jīdàn zhàoyàngzuò cáozi gāo , wǒmen háishi wánchéng le rènwu"
  },
  {
    "STT": 588,
    "SẮP XẾP CÂU": "足够的资金， / 没有鸡蛋照样做槽子糕。 / 他没有 / 照样能够完成他的项目，",
    "ĐÁP ÁN": "他没有足够的资金，照样能够完成他的项目，没有鸡蛋照样做槽子糕。",
    "PHIÊN ÂM": "tā méiyǒu zúgòu de zījīn , zhàoyàng nénggòu wánchéng tā de xiàngmù , méiyǒu jīdàn zhàoyàngzuò cáozi gāo ."
  },
  {
    "STT": 589,
    "CHỮ": "M",
    "CỤM": "没有金刚钻，偏要揽瓷器活",
    "PINYIN": "méi yǒu jīn gāng zuàn, piān yào lǎn cí qì huó",
    "NGHĨA": "金刚钻:明·李时珍《本草纲目,金石 四·金刚石》:“金刚钻,其砂可以钻玉补 瓷,故谓之钻。” \r\n比喻没有做某事的技能或条件,却偏要承揽。",
    "SẮP XẾP CÂU": "没有金刚钻，偏要揽瓷器活。 / 揽下这个困难的任务， / 却偏偏 / 他能力有限，",
    "ĐÁP ÁN": "他能力有限，却偏偏揽下这个困难的任务，没有金刚钻，偏要揽瓷器活。",
    "PHIÊN ÂM": "tā nénglì yǒuxiàn , què piānpiān lǎn xià zhège kùnnán de rènwu , méiyǒu jīngāngzuān , piānyào lǎn cíqìhuó ."
  },
  {
    "STT": 590,
    "SẮP XẾP CÂU": "真是太冒险了。 / 他没有金刚钻， / 偏要揽瓷器活，",
    "ĐÁP ÁN": "他没有金刚钻，偏要揽瓷器活，真是太冒险了。",
    "PHIÊN ÂM": "tā méiyǒu jīngāngzuān , piānyào lǎn cíqìhuó , zhēnshìtài màoxiǎn le ."
  },
  {
    "STT": 591,
    "CHỮ": "M",
    "CỤM": "没有他地球照样转",
    "PINYIN": "méi yǒu tā dì qiú zhào yàng zhuǎn",
    "NGHĨA": "指缺了某人,原有的生活或事情仍会 照旧进行。",
    "SẮP XẾP CÂU": "没有他地球照样转。 / 其实 / 自以为是， / 他",
    "ĐÁP ÁN": "他自以为是，其实没有他地球照样转。",
    "PHIÊN ÂM": "tā zìyǐwéishì , qíshí méiyǒu tā dìqiú zhàoyàng zhuǎn ."
  },
  {
    "STT": 592,
    "SẮP XẾP CÂU": "他以为 / 没有他地球照样转。 / 自己很重要，/ 其实",
    "ĐÁP ÁN": "他以为自己很重要，其实没有他地球照样转。",
    "PHIÊN ÂM": "tā yǐwéi zìjǐ hěn zhòngyào , qíshí méiyǒu tā dìqiú zhàoyàng zhuǎn ."
  },
  {
    "STT": 593,
    "CHỮ": "M",
    "CỤM": "没有张屠夫，不吃浑毛猪",
    "PINYIN": "méi yǒu zhāng tú fū, bù chī hún máo zhū",
    "NGHĨA": "比喻缺了某人或某种条件,事情照样 能够办成。\r\n也作“死了张屠夫,不吃浑毛猪”。",
    "SẮP XẾP CÂU": "无法继续。 / 项目就 / 离开了他的技术支持， / 没有张屠夫，不吃浑毛猪，",
    "ĐÁP ÁN": "没有张屠夫，不吃浑毛猪，离开了他的技术支持，项目就无法继续。",
    "PHIÊN ÂM": "méiyǒu zhāng túfū , bùchī hún máozhū , líkāi le tā de jìshùzhīchí , xiàngmù jiù wúfǎ jìxù ."
  },
  {
    "STT": 594,
    "SẮP XẾP CÂU": "专业人士 / 这件事需要/ 来处理， / 没有张屠夫，不吃浑毛猪。",
    "ĐÁP ÁN": "这件事需要专业人士来处理，没有张屠夫，不吃浑毛猪。",
    "PHIÊN ÂM": "zhèjiàn shì xūyào zhuānyèrénshì lái chǔlǐ , méiyǒu zhāng túfū , bùchī hún máozhū ."
  },
  {
    "STT": 595,
    "CHỮ": "M",
    "CỤM": "没长眼",
    "PINYIN": "méi zhǎng yǎn",
    "NGHĨA": "讥讽人视而不见或不辨是非善恶。",
    "SẮP XẾP CÂU": "不该得罪的人。 / 得罪了 / 没长眼， / 他",
    "ĐÁP ÁN": "他没长眼，得罪了不该得罪的人。",
    "PHIÊN ÂM": "tā méizhǎngyǎn , dézui le bùgāi dézui de rén ."
  },
  {
    "STT": 596,
    "SẮP XẾP CÂU": "很多人。 / 他说话 / 没长眼，/ 得罪了",
    "ĐÁP ÁN": "他说话没长眼，得罪了很多人。",
    "PHIÊN ÂM": "tā shuōhuà méizhǎngyǎn , dézui le hěnduō rén ."
  },
  {
    "STT": 597,
    "CHỮ": "M",
    "CỤM": "昧着惺惺使糊涂",
    "PINYIN": "mèi zhe xīng xīng shǐ hú tu",
    "NGHĨA": "指心里明白却故意装糊涂。",
    "SẮP XẾP CÂU": "不肯承认。 / 昧着惺惺使糊涂， / 却 / 他明明知道错了，",
    "ĐÁP ÁN": "他明明知道错了，却昧着惺惺使糊涂，不肯承认。",
    "PHIÊN ÂM": "tā míngmíng zhīdào cuò le , què mèi zhe xīngxīng shǐ hútu , bùkěn chéngrèn ."
  },
  {
    "STT": 598,
    "SẮP XẾP CÂU": "昧着惺惺使糊涂。 / 他明知/ 故犯，",
    "ĐÁP ÁN": "他明知故犯，昧着惺惺使糊涂。",
    "PHIÊN ÂM": "tā míngzhīgùfàn , mèi zhe xīngxīng shǐ hútu ."
  },
  {
    "STT": 599,
    "CHỮ": "M",
    "CỤM": "没正形",
    "PINYIN": "méi zhèng xíng",
    "NGHĨA": "指人言行不庄重。",
    "SẮP XẾP CÂU": "出格的事情。 / 一些 / 总是做出 / 没正形， / 他",
    "ĐÁP ÁN": "他没正形，总是做出一些出格的事情。",
    "PHIÊN ÂM": "tā méi zhèngxíng , zǒngshì zuòchū yīxiē chūgé de shìqing ."
  },
  {
    "STT": 600,
    "SẮP XẾP CÂU": "不稳重。 / 他 / 没正形，/ 一点都",
    "ĐÁP ÁN": "他没正形，一点都不稳重。",
    "PHIÊN ÂM": "tā méi zhèngxíng , yīdiǎn dū bù wěnzhòng ."
  },
  {
    "STT": 601,
    "CHỮ": "M",
    "CỤM": "没咒念",
    "PINYIN": "méi zhòu niàn",
    "NGHĨA": "比喻无一点办法、手段来应对。",
    "SẮP XẾP CÂU": "没咒念了。 / 真是 / 这个地步， / 事情发展到",
    "ĐÁP ÁN": "事情发展到这个地步，真是没咒念了。",
    "PHIÊN ÂM": "shìqing fāzhǎn dào zhège dìbù , zhēnshi méizhòuniàn le ."
  },
  {
    "STT": 602,
    "SẮP XẾP CÂU": "没办法了。 / 这件事 / 没咒念，/ 实在",
    "ĐÁP ÁN": "这件事没咒念，实在没办法了。",
    "PHIÊN ÂM": "zhèjiàn shì méi zhòuniàn , shízài méi bànfǎ le ."
  },
  {
    "STT": 603,
    "CHỮ": "M",
    "CỤM": "没主心骨",
    "PINYIN": "méi zhǔ xīn gǔ",
    "NGHĨA": "指人没主见。\r\n指失去可依靠的人。",
    "SẮP XẾP CÂU": "犹豫不决。 / 做事总是 / 没主心骨， / 这个团队",
    "ĐÁP ÁN": "这个团队没主心骨，做事总是犹豫不决。",
    "PHIÊN ÂM": "zhège tuánduì méi zhǔxīngǔ , zuòshì zǒngshì yóuyùbùjué ."
  },
  {
    "STT": 604,
    "SẮP XẾP CÂU": "总是/ 犹豫不决。 / 他做事 / 没主心骨，",
    "ĐÁP ÁN": "他做事没主心骨，总是犹豫不决。",
    "PHIÊN ÂM": "tā zuòshì méi zhǔxīngǔ , zǒngshì yóuyùbùjué ."
  },
  {
    "STT": 605,
    "CHỮ": "M",
    "CỤM": "没罪找枷扣",
    "PINYIN": "méi zuì zhǎo jiā kòu",
    "NGHĨA": "旧时套在罪犯脖子上的一种木 制刑具。\r\n嘲讽人没事自己找罪受。",
    "SẮP XẾP CÂU": "没罪找枷扣。 / 没事找事， / 他",
    "ĐÁP ÁN": "他没事找事，没罪找枷扣。",
    "PHIÊN ÂM": "tā méishìzhǎoshì , méizuì zhǎo jiā kòu ."
  },
  {
    "STT": 606,
    "SẮP XẾP CÂU": "真是 / 没罪找枷扣。 / 他没事找事，",
    "ĐÁP ÁN": "他没事找事，真是没罪找枷扣。",
    "PHIÊN ÂM": "tā méishìzhǎoshì , zhēnshi méizuì zhǎo jiā kòu ."
  },
  {
    "STT": 607,
    "CHỮ": "M",
    "CỤM": "没做理会处",
    "PINYIN": "méi zuò lǐ huì chù",
    "NGHĨA": "理会:处置。\r\n指不知该如何是好。 也作“没理会处”。",
    "SẮP XẾP CÂU": "没做理会处。 / 太棘手了， / 这件事",
    "ĐÁP ÁN": "这件事太棘手了，没做理会处。",
    "PHIÊN ÂM": "zhèjiàn shìtài jíshǒu le , méi zuò lǐhuì chù ."
  },
  {
    "STT": 608,
    "SẮP XẾP CÂU": "很头疼。 / 这件事 / 没做理会处，/ 让人",
    "ĐÁP ÁN": "这件事没做理会处，让人很头疼。",
    "PHIÊN ÂM": "zhèjiàn shì méi zuò lǐhuì chù , ràng rén hěn tóuténg ."
  },
  {
    "STT": 609,
    "CHỮ": "M",
    "CỤM": "门边跌倒赖门神，灶边跌倒赖灶神",
    "PINYIN": "mén biān diē dǎo lài mén shén, zào biān diē dǎo lài zào shén",
    "NGHĨA": "比喻失败了不找主观原因,却赖这怨 那乱找借口。\r\n也作“门边跌倒赖门神,灶边跌倒怨灶 神”、“门边摔倒赖门神,灶边摔倒怨灶 神”。",
    "SẮP XẾP CÂU": "他总是 / 门边跌倒赖门神，灶边跌倒赖灶神。/ 就推卸责任， / 遇到问题",
    "ĐÁP ÁN": "他总是遇到问题就推卸责任，门边跌倒赖门神，灶边跌倒赖灶神。",
    "PHIÊN ÂM": "tā zǒngshì yùdào wèntí jiù tuīxièzérèn , ménbiān diēdǎo lài ménshén , zàobiān diēdǎo lài zàoshén ."
  },
  {
    "STT": 610,
    "SẮP XẾP CÂU": "就推卸责任， / 门边跌倒赖门神，灶边跌倒赖灶神。 / 遇到挫折 / 他总是",
    "ĐÁP ÁN": "他总是遇到挫折就推卸责任，门边跌倒赖门神，灶边跌倒赖灶神。",
    "PHIÊN ÂM": "tā zǒngshì yùdào cuòzhé jiù tuīxièzérèn , ménbiān diēdǎo lài ménshén , zàobiān diēdǎo lài zàoshén ."
  },
  {
    "STT": 611,
    "CHỮ": "M",
    "CỤM": "门不当户不对",
    "PINYIN": "mén bù dàng hù bù duì",
    "NGHĨA": "指联姻双方家庭的社会地位和经济条 件都有悬殊,不相配。",
    "SẮP XẾP CÂU": "很难成功。 / 婚事 / 门不当户不对， / 他们",
    "ĐÁP ÁN": "他们门不当户不对，婚事很难成功。",
    "PHIÊN ÂM": "tāmen mén bùdàng hù bù duì , hūnshì hěnnán chénggōng ."
  },
  {
    "STT": 612,
    "SẮP XẾP CÂU": "结婚。 / 他们两家 / 门不当户不对，/ 很难",
    "ĐÁP ÁN": "他们两家门不当户不对，很难结婚。",
    "PHIÊN ÂM": "tāmen liǎngjiā mén bùdàng hù bù duì , hěnnán jiéhūn ."
  },
  {
    "STT": 613,
    "CHỮ": "M",
    "CỤM": "门槛精",
    "PINYIN": "mén kǎn jīng",
    "NGHĨA": "形容人精明,会找窍门,善占便宜。",
    "SẮP XẾP CÂU": "和 / 人们对门槛精的尊重 / 祈求保佑的心理。 / 体现了 / 这个场景",
    "ĐÁP ÁN": "这个场景体现了人们对门槛精的尊重和祈求保佑的心理。",
    "PHIÊN ÂM": "zhège chǎngjǐng tǐxiàn le rénmen duì ménkǎn jīng de zūnzhòng hé qíqiú bǎoyòu de xīnlǐ ."
  },
  {
    "STT": 614,
    "SẮP XẾP CÂU": "他的同意。 / 他就像个 / 门槛精，/ 谁想进来都得经过",
    "ĐÁP ÁN": "他就像个门槛精，谁想进来都得经过他的同意。",
    "PHIÊN ÂM": "tā jiù xiàng gè ménkǎn jīng , shéi xiǎng jìnlái dū dé jīngguò tā de tóngyì ."
  },
  {
    "STT": 615,
    "CHỮ": "M",
    "CỤM": "门坎儿高",
    "PINYIN": "mén kǎnr gāo",
    "NGHĨA": "比喻界限(多指社会地位)高。",
    "SẮP XẾP CÂU": "进去工作。 / 很难 / 门坎儿高， / 这家公司的",
    "ĐÁP ÁN": "这家公司的门坎儿高，很难进去工作。",
    "PHIÊN ÂM": "zhèjiā gōngsī de mén kǎnr gāo , hěnnán jìnqù gōngzuò ."
  },
  {
    "STT": 616,
    "SẮP XẾP CÂU": "都能进去的。 / 这家公司 / 门坎儿高，/ 不是谁",
    "ĐÁP ÁN": "这家公司门坎儿高，不是谁都能进去的。",
    "PHIÊN ÂM": "zhèjiā gōngsī mén kǎnr gāo , bùshì shéi dū néng jìnqù de ."
  },
  {
    "STT": 617,
    "CHỮ": "M",
    "CỤM": "门头硬",
    "PINYIN": "mén tóu yìng",
    "NGHĨA": "喻指家庭背景大,势力强。",
    "SẮP XẾP CÂU": "实力 / 门头硬， / 雄厚。 / 这家公司",
    "ĐÁP ÁN": "这家公司门头硬，实力雄厚。",
    "PHIÊN ÂM": "zhèjiā gōngsī méntóu yìng , shílìxiónghòu ."
  },
  {
    "STT": 618,
    "SẮP XẾP CÂU": "后台比你想的还大。/ 人家 / 你别小看他，/ 门头硬，",
    "ĐÁP ÁN": "你别小看他，人家门头硬，后台比你想的还大。",
    "PHIÊN ÂM": "nǐbié xiǎokàn tā , rénjiā méntóu yìng , hòutái bǐ nǐ xiǎng de huán dà ."
  },
  {
    "STT": 619,
    "CHỮ": "M",
    "CỤM": "闷在葫芦里",
    "PINYIN": "mèn zài hú lu lǐ",
    "NGHĨA": "见“蒙在鼓里”。",
    "SẮP XẾP CÂU": "心里 / 闷在葫芦里， / 很不舒服。 / 他",
    "ĐÁP ÁN": "他闷在葫芦里，心里很不舒服。",
    "PHIÊN ÂM": "tāmèn zài húlu lǐ , xīnli hěn bù shūfu ."
  },
  {
    "STT": 620,
    "SẮP XẾP CÂU": "不说出来。 / 他把事情 / 闷在葫芦里，",
    "ĐÁP ÁN": "他把事情闷在葫芦里，不说出来。",
    "PHIÊN ÂM": "tā bǎ shìqing mèn zài húlu lǐ , bùshuō chūlái ."
  },
  {
    "STT": 621,
    "CHỮ": "M",
    "CỤM": "蒙虎皮",
    "PINYIN": "méng hǔ pí",
    "NGHĨA": "比喻改换行头,假装正派。",
    "SẮP XẾP CÂU": "欺压 / 蒙虎皮， / 百姓。 / 他",
    "ĐÁP ÁN": "他蒙虎皮，欺压百姓。",
    "PHIÊN ÂM": "tā méng hǔpí , qīyābǎixìng ."
  },
  {
    "STT": 622,
    "SẮP XẾP CÂU": "假借别人的/ 名义办事。 / 他 / 蒙虎皮，",
    "ĐÁP ÁN": "他蒙虎皮，假借别人的名义办事。",
    "PHIÊN ÂM": "tā méng hǔpí , jiǎjiè biéren de míngyì bànshì ."
  },
  {
    "STT": 623,
    "CHỮ": "M",
    "CỤM": "米缸里头长青草",
    "PINYIN": "mǐ gāng lǐ tou zhǎng qīng cǎo",
    "NGHĨA": "指断粮已久。形容穷困至极。",
    "SẮP XẾP CÂU": "生活 / 米缸里头长青草， / 过得很富裕。 / 他家",
    "ĐÁP ÁN": "他家米缸里头长青草，生活过得很富裕。",
    "PHIÊN ÂM": "tājiā mǐgāng lǐtou cháng qīngcǎo , shēnghuó guòdé hěn fùyù ."
  },
  {
    "STT": 624,
    "SẮP XẾP CÂU": "米缸里头长青草。 / 他家境/ 贫寒，",
    "ĐÁP ÁN": "他家境贫寒，米缸里头长青草。",
    "PHIÊN ÂM": "tā jiājìngpínhán , mǐgāng lǐtou cháng qīngcǎo ."
  },
  {
    "STT": 625,
    "CHỮ": "M",
    "CỤM": "米箩里跳入糠箩里",
    "PINYIN": "mǐ luó lǐ tiào rù kāng luó lǐ",
    "NGHĨA": "比喻舍弃富贵之家,走进贫苦之地。",
    "SẮP XẾP CÂU": "真是 / 回到农村， / 米箩里跳入糠箩里。 / 他从大城市",
    "ĐÁP ÁN": "他从大城市回到农村，真是米箩里跳入糠箩里。",
    "PHIÊN ÂM": "tā cóng dàchéngshì huídào nóngcūn , zhēnshi mǐ luólǐ tiàorù kāng luólǐ ."
  },
  {
    "STT": 626,
    "SẮP XẾP CÂU": "令人惋惜。 / 他以前生活很好， / 现在却 / 米箩里跳入糠箩里，",
    "ĐÁP ÁN": "他以前生活很好，现在却米箩里跳入糠箩里，令人惋惜。",
    "PHIÊN ÂM": "tā yǐqián shēnghuó hěn hǎo , xiànzài què mǐ luólǐ tiàorù kāng luólǐ , lìngrén wǎnxī ."
  },
  {
    "STT": 627,
    "CHỮ": "M",
    "CỤM": "面朝黄土背朝天",
    "PINYIN": "miàn cháo huáng tǔ bèi cháo tiān",
    "NGHĨA": "形容农民种地的艰辛。 也作“脸朝黄土背朝天”。",
    "SẮP XẾP CÂU": "辛勤耕耘。 / 面朝黄土背朝天， / 农民们",
    "ĐÁP ÁN": "农民们面朝黄土背朝天，辛勤耕耘。",
    "PHIÊN ÂM": "nóngmín men miàncháo huángtǔbèi cháotiān , xīnqíngēngyún ."
  },
  {
    "STT": 628,
    "SẮP XẾP CÂU": "农民伯伯们顶着烈日， / 辛勤地收割着庄稼。 / 秋收时节， / 面朝黄土背朝天，",
    "ĐÁP ÁN": "秋收时节，农民伯伯们顶着烈日，面朝黄土背朝天，辛勤地收割着庄稼。",
    "PHIÊN ÂM": "qiūshōu shíjié , nóngmín bóbo men dǐng zhe lièrì , miàncháo huángtǔbèi cháotiān , xīnqín dì shōugē zhe zhuāngjia ."
  },
  {
    "STT": 629,
    "CHỮ": "M",
    "CỤM": "面和心不和",
    "PINYIN": "miàn hé xīn bù hé",
    "NGHĨA": "指人表面彼此和气,内心却互有意见。",
    "SẮP XẾP CÂU": "关系 / 面和心不和， / 很紧张。 / 他们",
    "ĐÁP ÁN": "他们面和心不和，关系很紧张。",
    "PHIÊN ÂM": "tāmen miànhéxīnbùhé , guānxi hěn jǐnzhāng ."
  },
  {
    "STT": 630,
    "SẮP XẾP CÂU": "暗地里争斗。 / 他们两人 / 经常 / 面和心不和，",
    "ĐÁP ÁN": "他们两人面和心不和，经常暗地里争斗。",
    "PHIÊN ÂM": "tāmen liǎngrén miànhéxīnbùhé , jīngcháng àndìli zhēngdòu ."
  },
  {
    "STT": 631,
    "CHỮ": "M",
    "CỤM": "棉花耳朵风车心",
    "PINYIN": "mián huā ěr duo fēng chē xīn",
    "NGHĨA": "形容人耳软心活没主见,容易听信他 人的话而改变主意。",
    "SẮP XẾP CÂU": "总是 / 丢三落四。 / 棉花耳朵风车心， / 他做事",
    "ĐÁP ÁN": "他做事棉花耳朵风车心，总是丢三落四。",
    "PHIÊN ÂM": "tā zuòshì miánhuā ěrduo fēngchē xīn , zǒngshì diūsānlàsì ."
  },
  {
    "STT": 632,
    "SẮP XẾP CÂU": "他是/棉花耳朵风车心，/说风就是雨。/跟他讲道理根本没用，",
    "ĐÁP ÁN": "跟他讲道理根本没用，他是棉花耳朵风车心，说风就是雨。",
    "PHIÊN ÂM": "gēn tā jiǎngdàolǐ gēnběn méiyòng , tā shì miánhuā ěrduo fēngchē xīn , shuōfēng jiùshì yǔ ."
  },
  {
    "STT": 633,
    "CHỮ": "M",
    "CỤM": "面孔冷",
    "PINYIN": "miàn kǒng lěng",
    "NGHĨA": "形容人神情冷漠,不友善。",
    "SẮP XẾP CÂU": "让人 / 面孔冷， / 不敢接近。 / 他",
    "ĐÁP ÁN": "他面孔冷，让人不敢接近。",
    "PHIÊN ÂM": "tā miànkǒng lěng , ràng rén bùgǎn jiējìn ."
  },
  {
    "STT": 634,
    "SẮP XẾP CÂU": "我不受欢迎。 / 他一见到我就 / 面孔冷，/ 好像",
    "ĐÁP ÁN": "他一见到我就面孔冷，好像我不受欢迎。",
    "PHIÊN ÂM": "tā yī jiàndào wǒ jiù miànkǒng lěng , hǎoxiàng wǒ bù shòuhuānyíng ."
  },
  {
    "STT": 635,
    "CHỮ": "M",
    "CỤM": "免口舌",
    "PINYIN": "miǎn kǒu shé",
    "NGHĨA": "见“省口舌”。",
    "SẮP XẾP CÂU": "他 / 免口舌， / 忍气吞声。 / 为了",
    "ĐÁP ÁN": "为了免口舌，他忍气吞声。",
    "PHIÊN ÂM": "wèile miǎn kǒushé , tā rěnqìtūnshēng ."
  },
  {
    "STT": 636,
    "SẮP XẾP CÂU": "他/ 选择了妥协。 / 为了 / 免口舌，",
    "ĐÁP ÁN": "为了免口舌，他选择了妥协。",
    "PHIÊN ÂM": "wèile miǎn kǒushé , tā xuǎnzé le tuǒxié ."
  },
  {
    "STT": 637,
    "CHỮ": "M",
    "CỤM": "绵里针，肉里刺",
    "PINYIN": "mián lǐ zhēn, ròu lǐ cì",
    "NGHĨA": "比喻表面柔和,内心歹毒。",
    "SẮP XẾP CÂU": "让人 / 防不胜防。 / 绵里针，肉里刺， / 他",
    "ĐÁP ÁN": "他绵里针，肉里刺，让人防不胜防。",
    "PHIÊN ÂM": "tā miánlǐzhēn , ròulǐ cì , ràng rén fángbùshèngfáng ."
  },
  {
    "STT": 638,
    "SẮP XẾP CÂU": "表面和善，/ 他这个人 / 绵里针，肉里刺，/ 内心阴险。",
    "ĐÁP ÁN": "他这个人绵里针，肉里刺，表面和善，内心阴险。",
    "PHIÊN ÂM": "tā zhège rén miánlǐzhēn , ròulǐ cì , biǎomiàn héshàn , nèixīn yīnxiǎn ."
  },
  {
    "STT": 639,
    "CHỮ": "M",
    "CỤM": "面面光",
    "PINYIN": "miàn miàn guāng",
    "NGHĨA": "形容人圆滑世故,各方面都能周全 应付。\r\n也作“两面光”。",
    "SẮP XẾP CÂU": "面面光。 / 得到了好处， / 大家都 / 这次合作，",
    "ĐÁP ÁN": "这次合作，大家都得到了好处，面面光。",
    "PHIÊN ÂM": "zhècì hézuò , dàjiā dū dédào le hǎochu , miàn miànguāng ."
  },
  {
    "STT": 640,
    "SẮP XẾP CÂU": "很成功。 / 这次活动 / 面面光，",
    "ĐÁP ÁN": "这次活动面面光，很成功。",
    "PHIÊN ÂM": "zhècì huódòng miàn miànguāng , hěn chénggōng ."
  },
  {
    "STT": 641,
    "CHỮ": "M",
    "CỤM": "面前起火，背后冒烟",
    "PINYIN": "miàn qián qǐ huǒ, bèi hòu mào yān",
    "NGHĨA": "形容处境极端困厄。",
    "SẮP XẾP CÂU": "面前起火，背后冒烟。 / 真是 / 危机四伏， / 实际上 / 他表面风光，",
    "ĐÁP ÁN": "他表面风光，实际上危机四伏，真是面前起火，背后冒烟。",
    "PHIÊN ÂM": "tā biǎomiàn fēngguāng , shíjìshàng wēijīsìfú , zhēnshi miànqián qǐhuǒ , bèihòu màoyān ."
  },
  {
    "STT": 642,
    "SẮP XẾP CÂU": "简直是 / 面前起火，背后冒烟。 / 他表面上风光， / 实际上负债累累，",
    "ĐÁP ÁN": "他表面上风光，实际上负债累累，简直是面前起火，背后冒烟。",
    "PHIÊN ÂM": "tā biǎomiàn shàng fēngguāng , shíjìshàng fùzhàilěilěi , jiǎnzhí shì miànqián qǐhuǒ , bèihòu màoyān ."
  },
  {
    "STT": 643,
    "CHỮ": "M",
    "CỤM": "面上不好看",
    "PINYIN": "miàn shàng bù hǎo kàn",
    "NGHĨA": "指某种行为有损颜面,不光彩。 也作“面上没光辉”。",
    "SẮP XẾP CÂU": "办砸了， / 面上不好看。 / 这事儿",
    "ĐÁP ÁN": "这事儿办砸了，面上不好看。",
    "PHIÊN ÂM": "zhè shìr bàn zá le , miànshàng bù hǎokàn ."
  },
  {
    "STT": 644,
    "SẮP XẾP CÂU": "面上不好看。 / 这件事/ 让他",
    "ĐÁP ÁN": "这件事让他面上不好看。",
    "PHIÊN ÂM": "zhèjiàn shì ràng tā miànshàng bù hǎokàn ."
  },
  {
    "STT": 645,
    "CHỮ": "M",
    "CỤM": "面似靴皮厚",
    "PINYIN": "miàn sì xuē pí hòu",
    "NGHĨA": "形容人不顾廉耻。",
    "SẮP XẾP CÂU": "也不承认。 / 做了错事 / 面似靴皮厚， / 他",
    "ĐÁP ÁN": "他面似靴皮厚，做了错事也不承认。",
    "PHIÊN ÂM": "tā miànsìxuēpí hòu , zuò le cuòshì yě bù chéngrèn ."
  },
  {
    "STT": 646,
    "SẮP XẾP CÂU": "被人批评也 / 他 / 面似靴皮厚，/ 不在乎。",
    "ĐÁP ÁN": "他面似靴皮厚，被人批评也不在乎。",
    "PHIÊN ÂM": "tā miànsìxuēpí hòu , bèi rén pīpíng yě bùzàihu ."
  },
  {
    "STT": 647,
    "CHỮ": "M",
    "CỤM": "面子上落不下",
    "PINYIN": "miàn zi shàng luò bù xià",
    "NGHĨA": "指感到尷尬、难堪。",
    "SẮP XẾP CÂU": "低头认错。 / 不肯 / 面子上落不下， / 他",
    "ĐÁP ÁN": "他面子上落不下，不肯低头认错。",
    "PHIÊN ÂM": "tā miànzi shàngluò buxià , bùkěn dītóu rèncuò ."
  },
  {
    "STT": 648,
    "SẮP XẾP CÂU": "他做 / 面子上落不下。 / 错了事，",
    "ĐÁP ÁN": "他做错了事，面子上落不下。",
    "PHIÊN ÂM": "tā zuò cuò le shì , miànzi shàngluò buxià ."
  },
  {
    "STT": 649,
    "CHỮ": "M",
    "CỤM": "面儿光光嘴儿亮",
    "PINYIN": "miànr guāng guāng zuǐr liàng",
    "NGHĨA": "指人相貌漂亮,能说会道。多讥讽对 方看起来还人模人样的。",
    "SẮP XẾP CÂU": "面儿光光嘴儿亮， / 质量很差。 / 实际上 / 他做的东西",
    "ĐÁP ÁN": "他做的东西面儿光光嘴儿亮，实际上质量很差。",
    "PHIÊN ÂM": "tā zuò de dōngxi miànr guāngguāng zuǐrliàng , shíjìshàng zhìliàng hěnchā ."
  },
  {
    "STT": 650,
    "SẮP XẾP CÂU": "但实际上什么也没做。 / 他 / 面儿光光嘴儿亮， / 说的很好听，",
    "ĐÁP ÁN": "他面儿光光嘴儿亮，说的很好听，但实际上什么也没做。",
    "PHIÊN ÂM": "tā miànr guāngguāng zuǐrliàng , shuō de hěn hǎotīng , dàn shíjìshàng shénme yě méi zuò ."
  },
  {
    "STT": 651,
    "CHỮ": "M",
    "CỤM": "描不成画不就",
    "PINYIN": "miáo bù chéng huà bù jiù",
    "NGHĨA": "画工难以画出。形容女子生得极美。",
    "SẮP XẾP CÂU": "什么事也 / 描不成画不就， / 没干成。 / 他费了半天劲儿，",
    "ĐÁP ÁN": "他费了半天劲儿，描不成画不就，什么事也没干成。",
    "PHIÊN ÂM": "tāfèi le bàntiān jìnr , miáo bùchéng huà bù jiù , shénme shì yě méi gānchéng ."
  },
  {
    "STT": 652,
    "SẮP XẾP CÂU": "搞砸了，/ 描不成画不就。 / 他/ 把事情",
    "ĐÁP ÁN": "他把事情搞砸了，描不成画不就。",
    "PHIÊN ÂM": "tā bǎ shìqing gǎozá le , miáo bùchéng huà bù jiù ."
  },
  {
    "STT": 653,
    "CHỮ": "M",
    "CỤM": "庙穷和尚富",
    "PINYIN": "miào qióng hé shang fù",
    "NGHĨA": "指集体的钱财被个人吞占,以致集体 贫穷,个人富有。",
    "SẮP XẾP CÂU": "和尚们都很有钱。/ 庙穷和尚富， / 其实 / 看着破旧， / 那个寺庙",
    "ĐÁP ÁN": "那个寺庙看着破旧，其实庙穷和尚富，和尚们都很有钱。",
    "PHIÊN ÂM": "nàgè sìmiào kànzhe pòjiù , qíshí miào qióng héshang fù , héshang men dū hěn yǒuqián ."
  },
  {
    "STT": 654,
    "SẮP XẾP CÂU": "表面上很穷， / 实际上赚了很多钱。 / 这家公司 / 庙穷和尚富，",
    "ĐÁP ÁN": "这家公司庙穷和尚富，表面上很穷，实际上赚了很多钱。",
    "PHIÊN ÂM": "zhèjiā gōngsī miào qióng héshang fù , biǎomiàn shàng hěnqióng , shíjìshàng zhuàn le hěnduō qián ."
  },
  {
    "STT": 655,
    "CHỮ": "M",
    "CỤM": "庙是那个庙，神不是那个神",
    "PINYIN": "miào shì nà gè miào, shén bù shì nà gè shén",
    "NGHĨA": "指地方依旧,而主事的人变了。",
    "SẮP XẾP CÂU": "完全不同。 / 这两家公司 / 庙是那个庙，神不是那个神， / 但 / 虽然名字一样，",
    "ĐÁP ÁN": "虽然名字一样，但庙是那个庙，神不是那个神，这两家公司完全不同。",
    "PHIÊN ÂM": "suīrán míngzì yīyàng , dànmiào shì nàgè miào , shén bùshì nàgè shén , zhè liǎngjiā gōngsī wánquán bùtóng ."
  },
  {
    "STT": 656,
    "SẮP XẾP CÂU": "完全是不同的公司。 / 这两家公司虽然名字相似， / 庙是那个庙，神不是那个神，/ 但",
    "ĐÁP ÁN": "这两家公司虽然名字相似，但庙是那个庙，神不是那个神，完全是不同的公司。",
    "PHIÊN ÂM": "zhè liǎngjiā gōngsī suīrán míngzì xiāngsì , dànmiào shì nàgè miào , shén bùshì nàgè shén , wánquán shì bùtóng de gōngsī ."
  },
  {
    "STT": 657,
    "CHỮ": "M",
    "CỤM": "庙小牌子大",
    "PINYIN": "miào xiǎo pái zi dà",
    "NGHĨA": "指名不副实(含讥讽义)。",
    "SẮP XẾP CÂU": "但 / 名气很大， / 规模很小。 / 庙小牌子大， / 这家公司",
    "ĐÁP ÁN": "这家公司庙小牌子大，名气很大，但规模很小。",
    "PHIÊN ÂM": "zhèjiā gōngsī miào xiǎo páizi dà , míngqì hěndà , dàn guīmó hěnxiǎo ."
  },
  {
    "STT": 658,
    "SẮP XẾP CÂU": "但实力一般。 / 这家公司 / 庙小牌子大， / 名气很大，",
    "ĐÁP ÁN": "这家公司庙小牌子大，名气很大，但实力一般。",
    "PHIÊN ÂM": "zhèjiā gōngsī miào xiǎo páizi dà , míngqì hěndà , dàn shílì yībān ."
  },
  {
    "STT": 659,
    "CHỮ": "M",
    "CỤM": "庙小装不了大菩萨",
    "PINYIN": "miào xiǎo zhuāng bù liǎo dà pú sà",
    "NGHĨA": "比喻小地方容不下大人物。拒绝接受 来者的委婉之语。\r\n也作“小庙蹲不下大菩萨”。",
    "SẮP XẾP CÂU": "这么大的项目。 / 容纳不下 / 庙小装不了大菩萨， / 这个小城市",
    "ĐÁP ÁN": "这个小城市庙小装不了大菩萨，容纳不下这么大的项目。",
    "PHIÊN ÂM": "zhège xiǎo chéngshì miàoxiǎozhuāng buliǎo dà púsà , róngnà buxià zhème dà de xiàngmù ."
  },
  {
    "STT": 660,
    "SẮP XẾP CÂU": "简直是 / 庙小装不了大菩萨。 / 这个小城市 / 容纳不下这么多人口，",
    "ĐÁP ÁN": "这个小城市容纳不下这么多人口，简直是庙小装不了大菩萨。",
    "PHIÊN ÂM": "zhège xiǎo chéngshì róngnà buxià zhème duō rénkǒu , jiǎnzhí shì miào xiǎozhuāng buliǎo dà púsà ."
  },
  {
    "STT": 661,
    "CHỮ": "M",
    "CỤM": "灭威风",
    "PINYIN": "miè wēi fēng",
    "NGHĨA": "指压制、消灭人或事物的威势、声势。\r\n也作“杀威风”。",
    "SẮP XẾP CÂU": "对方的威风。 / 想灭灭 / 故意刁难对方， / 他",
    "ĐÁP ÁN": "他故意刁难对方，想灭灭对方的威风。",
    "PHIÊN ÂM": "tā gùyì diāonàn duìfāng , xiǎngmiè miè duìfāng de wēifēng ."
  },
  {
    "STT": 662,
    "SẮP XẾP CÂU": "他的威风。 / 他这次的失败/ 彻底 / 灭了",
    "ĐÁP ÁN": "他这次的失败彻底灭了他的威风。",
    "PHIÊN ÂM": "tā zhècì de shībài chèdǐ miè le tā de wēifēng ."
  },
  {
    "STT": 663,
    "CHỮ": "M",
    "CỤM": "名师出高徒",
    "PINYIN": "míng shī chū gāo tú",
    "NGHĨA": "名师有成就,要求严格,就能培养出高 材生。",
    "SẮP XẾP CÂU": "技艺精湛。 / 名师出高徒， / 师从名家， / 他",
    "ĐÁP ÁN": "他师从名家，名师出高徒，技艺精湛。",
    "PHIÊN ÂM": "tā shīcóng míngjiā , míngshīchūgāotú , jìyì jīngzhàn ."
  },
  {
    "STT": 664,
    "SẮP XẾP CÂU": "自然也很高。 / 他的老师是名师， / 名师出高徒，/ 他的水平",
    "ĐÁP ÁN": "他的老师是名师，名师出高徒，他的水平自然也很高。",
    "PHIÊN ÂM": "tā de lǎoshī shì míngshī , míngshīchūgāotú , tā de shuǐpíng zìrán yě hěn gāo ."
  },
  {
    "STT": 665,
    "CHỮ": "M",
    "CỤM": "明是一盆火，暗是一把刀",
    "PINYIN": "míng shì yī pén huǒ, àn shì yī bǎ dāo",
    "NGHĨA": "比喻表面对人亲热,暗里却使手段 害人。",
    "SẮP XẾP CÂU": "心怀鬼胎。 / 实际上 / 表面热情， / 明是一盆火，暗是一把刀， / 他",
    "ĐÁP ÁN": "他明是一盆火，暗是一把刀，表面热情，实际上心怀鬼胎。",
    "PHIÊN ÂM": "tāmíng shì yīpén huǒ , ànshì yībǎ dāo , biǎomiàn rèqíng , shíjìshàng xīnhuáiguǐtāi ."
  },
  {
    "STT": 666,
    "SẮP XẾP CÂU": "表面热情， / 实际上心怀鬼胎。 / 他 / 明是一盆火，暗是一把刀，",
    "ĐÁP ÁN": "他明是一盆火，暗是一把刀，表面热情，实际上心怀鬼胎。",
    "PHIÊN ÂM": "tāmíng shì yīpén huǒ , ànshì yībǎ dāo , biǎomiàn rèqíng , shíjìshàng xīnhuáiguǐtāi ."
  },
  {
    "STT": 667,
    "CHỮ": "M",
    "CỤM": "明修栈道，暗渡陈仓",
    "PINYIN": "míng xiū zhàn dào, àn dù chén cāng",
    "NGHĨA": "栈道:在险绝处傍山架木而 成的一种道路。陈仓:古县名,在今陕西 省宝鸡市东,古为攻守战略要地。\r\n楚汉相争故事,刘邦将要从汉中出兵 攻打关中时,听取张良、韩信的计策,表",
    "SẮP XẾP CÂU": "暗中准备进攻。 / 实际上却在 / 表面上和谈，/ 明修栈道，暗渡陈仓，/ 他们",
    "ĐÁP ÁN": "他们明修栈道，暗渡陈仓，表面上和谈，实际上却在暗中准备进攻。",
    "PHIÊN ÂM": "tāmen míngxiūzhàndào , àndùchéncāng , biǎomiàn shàng hétán , shíjìshàng què zài ànzhōng zhǔnbèi jìngōng ."
  },
  {
    "STT": 668,
    "SẮP XẾP CÂU": "他们的计划。 / 他们 / 明修栈道，暗渡陈仓，/ 偷偷地进行",
    "ĐÁP ÁN": "他们明修栈道，暗渡陈仓，偷偷地进行他们的计划。",
    "PHIÊN ÂM": "tāmen míngxiūzhàndào , àndùchéncāng , tōutōudì jìnxíng tāmen de jìhuà ."
  },
  {
    "STT": 669,
    "CHỮ": "M",
    "CỤM": "名又不成，功又不就",
    "PINYIN": "míng yòu bù chéng, gōng yòu bù jiù",
    "NGHĨA": "指人功名全无,一事无成。",
    "SẮP XẾP CÂU": "他 / 名又不成，功又不就。 / 碌碌无为， / 一生",
    "ĐÁP ÁN": "他一生碌碌无为，名又不成，功又不就。",
    "PHIÊN ÂM": "tā yīshēng lùlùwúwéi , míng yòu bùchéng , gōng yòu bù jiù ."
  },
  {
    "STT": 670,
    "SẮP XẾP CÂU": "结果 / 名又不成，功又不就。 / 他费了 / 九牛二虎之力，",
    "ĐÁP ÁN": "他费了九牛二虎之力，结果名又不成，功又不就。",
    "PHIÊN ÂM": "tāfèi le jiǔniúèrhǔzhīlì , jiéguǒ míng yòu bùchéng , gōng yòu bù jiù ."
  },
  {
    "STT": 671,
    "CHỮ": "M",
    "CỤM": "抹下脸",
    "PINYIN": "mǒ xià liǎn",
    "NGHĨA": "指突然翻脸,变得严厉而不讲情面。\r\n也作“抹脸皮”。",
    "SẮP XẾP CÂU": "去求人。 / 抹下脸 / 不得不 / 为了得到帮助， / 他",
    "ĐÁP ÁN": "他为了得到帮助，不得不抹下脸去求人。",
    "PHIÊN ÂM": "tā wèile dédào bāngzhù , bùdébù mǒ xià liǎn qù qiúrén ."
  },
  {
    "STT": 672,
    "SẮP XẾP CÂU": "抹下脸了。 / 他/ 做错了事，",
    "ĐÁP ÁN": "他做错了事，抹下脸了。",
    "PHIÊN ÂM": "tā zuò cuò le shì , mǒ xià liǎn le ."
  },
  {
    "STT": 673,
    "CHỮ": "M",
    "CỤM": "昧着惺惺使糊涂",
    "PINYIN": "mèi zhe xīng xīng shǐ hú tu",
    "NGHĨA": "指心里明白却故意装糊涂。",
    "SẮP XẾP CÂU": "昧着惺惺使糊涂。 / 他明知/ 故犯，",
    "ĐÁP ÁN": "他明知故犯，昧着惺惺使糊涂。",
    "PHIÊN ÂM": "tā míngzhīgùfàn , mèi zhe xīngxīng shǐ hútu ."
  },
  {
    "STT": 674,
    "SẮP XẾP CÂU": "别再/你心里清楚得很，/把责任都推给别人。/昧着惺惺使糊涂，",
    "ĐÁP ÁN": "你心里清楚得很，别再昧着惺惺使糊涂，把责任都推给别人。",
    "PHIÊN ÂM": "nǐ xīnli qīngchu dé hěn , bié zài mèi zhe xīngxīng shǐ hútu , bǎ zérèn dū tuīgěi biéren ."
  },
  {
    "STT": 675,
    "CHỮ": "M",
    "CỤM": "没正形",
    "PINYIN": "méi zhèng xíng",
    "NGHĨA": "指人言行不庄重。",
    "SẮP XẾP CÂU": "不稳重。 / 他 / 没正形，/ 一点都",
    "ĐÁP ÁN": "他没正形，一点都不稳重。",
    "PHIÊN ÂM": "tā méi zhèngxíng , yīdiǎn dū bù wěnzhòng ."
  },
  {
    "STT": 676,
    "SẮP XẾP CÂU": "没星秤，/ 做事没有分寸。/ 就是 / 他简直",
    "ĐÁP ÁN": "他简直就是没星秤，做事没有分寸。",
    "PHIÊN ÂM": "tā jiǎnzhí jiùshì méixīng chèng , zuòshì méiyǒu fēncùn ."
  },
  {
    "STT": 677,
    "CHỮ": "M",
    "CỤM": "没眼色",
    "PINYIN": "méi yǎn sè",
    "NGHĨA": "比喻不会看情况办事，不知趣儿。",
    "SẮP XẾP CÂU": "不懂 / 没眼色，/ 人情世故。/ 他真是",
    "ĐÁP ÁN": "他真是没眼色，不懂人情世故。",
    "PHIÊN ÂM": "tā zhēnshi méi yǎnsè , bù dǒng rénqíngshìgù ."
  },
  {
    "STT": 678,
    "SẮP XẾP CÂU": "人家正忙着呢，/ 打扰，/ 太没眼色了！/ 你还去",
    "ĐÁP ÁN": "人家正忙着呢，你还去打扰，太没眼色了！",
    "PHIÊN ÂM": "rénjiā zhèngmángzhe ne , nǐ huán qù dǎrǎo , tài méi yǎnsè le ！"
  },
  {
    "STT": 679,
    "CHỮ": "M",
    "CỤM": "没眼珠",
    "PINYIN": "méi yǎn zhū",
    "NGHĨA": "指没眼力,不辨好坏。",
    "SẮP XẾP CÂU": "没眼珠，/ 他简直 / 愚蠢至极。/ 就是",
    "ĐÁP ÁN": "他简直就是没眼珠，愚蠢至极。",
    "PHIÊN ÂM": "tā jiǎnzhí jiùshì méi yǎnzhū , yúchǔn zhìjí ."
  },
  {
    "STT": 680,
    "SẮP XẾP CÂU": "这种场合/也敢乱说话？/你/没眼珠啊，",
    "ĐÁP ÁN": "你没眼珠啊，这种场合也敢乱说话？",
    "PHIÊN ÂM": "nǐ méi yǎnzhū a , zhèzhǒng chǎnghé yě gǎn luànshuōhuà ？"
  },
  {
    "STT": 681,
    "CHỮ": "M",
    "CỤM": "莫须有",
    "PINYIN": "mò xū yǒu",
    "NGHĨA": "宋朝奸臣秦桧诬陷岳飞谋反，韩世忠不平，去质问他有没有证据，秦桧回答说“莫须有”，意思是“也许有吧”。后来用此语表示凭空捏造。",
    "SẮP XẾP CÂU": "莫须有的。/ 他被 / 都是 / 指控的罪名",
    "ĐÁP ÁN": "他被指控的罪名都是莫须有的。",
    "PHIÊN ÂM": "tā bèi zhǐkòng de zuìmíng dū shì mòxūyǒu de ."
  },
  {
    "STT": 682,
    "SẮP XẾP CÂU": "真是太冤了。/他被开除/是因为一个/莫须有的罪名，",
    "ĐÁP ÁN": "他被开除是因为一个莫须有的罪名，真是太冤了。",
    "PHIÊN ÂM": "tā bèi kāichú shìyīnwéi yīgè mòxūyǒu de zuìmíng , zhēnshìtài yuān le ."
  },
  {
    "STT": 683,
    "CHỮ": "M",
    "CỤM": "磨洋工",
    "PINYIN": "mó yánɡ gōnɡ",
    "NGHĨA": "工作时拖延时间，也泛指工作懒散拖沓。",
    "SẮP XẾP CÂU": "效率 / 磨洋工，/ 他整天 / 极低。",
    "ĐÁP ÁN": "他整天磨洋工，效率极低。",
    "PHIÊN ÂM": "tā zhěngtiān móyánggōng , xiàolǜ jídī ."
  },
  {
    "STT": 684,
    "SẮP XẾP CÂU": "干不出点成果来。/他干活总是/磨洋工，/ 一天都",
    "ĐÁP ÁN": "他干活总是磨洋工，一天都干不出点成果来。",
    "PHIÊN ÂM": "tā gànhuó zǒngshì móyánggōng , yītiān dū gān bù chūdiǎn chéngguǒ lái ."
  },
  {
    "STT": 685,
    "CHỮ": "M",
    "CỤM": "母老虎",
    "PINYIN": "mǔ lǎo hǔ",
    "NGHĨA": "比喻特别凶的女人。",
    "SẮP XẾP CÂU": "暴躁，/ 母老虎。/ 她脾气 / 像个",
    "ĐÁP ÁN": "她脾气暴躁，像个母老虎。",
    "PHIÊN ÂM": "tā píqi bàozào , xiàng gè mǔlǎohǔ ."
  },
  {
    "STT": 686,
    "SẮP XẾP CÂU": "不敢惹。/他老婆是个/母老虎，/谁都",
    "ĐÁP ÁN": "他老婆是个母老虎，谁都不敢惹。",
    "PHIÊN ÂM": "tā lǎopó shì gè mǔlǎohǔ , shéi dū bùgǎn rě ."
  },
  {
    "STT": 687,
    "CHỮ": "M",
    "CỤM": "木头人",
    "PINYIN": "mù tou rén",
    "NGHĨA": "比喻愚笨或不灵活的人。",
    "SẮP XẾP CÂU": "木头人一样，/ 迟钝。/ 他像个 / 反应",
    "ĐÁP ÁN": "他像个木头人一样，反应迟钝。",
    "PHIÊN ÂM": "tā xiàng gè mùtóurén yīyàng , fǎnyìngchídùn ."
  },
  {
    "STT": 688,
    "SẮP XẾP CÂU": "讲话呢！/你/别当/木头人啊，/ 人家跟你",
    "ĐÁP ÁN": "你别当木头人啊，人家跟你讲话呢！",
    "PHIÊN ÂM": "nǐbié dāng mùtóurén a , rénjiā gēn nǐ jiǎnghuà ne ！"
  },
  {
    "STT": 689,
    "CHỮ": "M",
    "CỤM": "母夜叉",
    "PINYIN": "mǔ yè chā",
    "NGHĨA": "比喻相貌丑陋、凶恶的女人。夜叉，佛教指恶鬼。",
    "SẮP XẾP CÂU": "母夜叉一样，/ 凶神恶煞。/ 她就像个",
    "ĐÁP ÁN": "她就像个母夜叉一样，凶神恶煞。",
    "PHIÊN ÂM": "tā jiù xiàng gè mǔyèchā yīyàng , xiōngshénèshà ."
  },
  {
    "STT": 690,
    "SẮP XẾP CÂU": "就像/谁都躲不掉。/母夜叉一样，/她一发起火来/",
    "ĐÁP ÁN": "她一发起火来就像母夜叉一样，谁都躲不掉。",
    "PHIÊN ÂM": "tā yīfā qǐhuǒ lái jiù xiàng mǔyèchā yīyàng , shéi dū duǒ bù diào ."
  },
  {
    "STT": 691,
    "CHỮ": "M",
    "CỤM": "抹下脸",
    "PINYIN": "mǒ xià liǎn",
    "NGHĨA": "指突然翻脸,变得严厉而不讲情面。\r\n也作“抹脸皮”。",
    "SẮP XẾP CÂU": "抹下脸/ 为了让他原谅我，/ 我只好 / 去道歉。",
    "ĐÁP ÁN": "为了让他原谅我，我只好抹下脸去道歉。",
    "PHIÊN ÂM": "wèile ràng tā yuánliàng wǒ , wǒ zhǐhǎo mǒ xià liǎn qù dàoqiàn ."
  },
  {
    "STT": 692,
    "SẮP XẾP CÂU": "这么不给面子？/我都/抹下脸/求人了，/",
    "ĐÁP ÁN": "我都抹下脸求人了，你还这么不给面子？",
    "PHIÊN ÂM": "wǒ dū mǒ xià liǎn qiúrén le , nǐ huán zhème bù gěimiànzi ？"
  },
  {
    "STT": 693,
    "CHỮ": "M",
    "CỤM": "没星秤",
    "PINYIN": "méi xīnɡ chènɡ",
    "NGHĨA": "比喻没有主见、没有固定看法的人。星: 指秤上标记斤、两、钱的小点子。",
    "SẮP XẾP CÂU": "太没星秤了，/ 哪壶不开提哪壶！/ 你说话也",
    "ĐÁP ÁN": "你说话也太没星秤了，哪壶不开提哪壶！",
    "PHIÊN ÂM": "nǐ shuōhuà yě tài méixīng chèng le , nǎhú bùkāi tí nǎ hú ！"
  },
  {
    "STT": 694,
    "SẮP XẾP CÂU": "你也不看看/自己几斤几两，/真是/没星秤！",
    "ĐÁP ÁN": "你也不看看自己几斤几两，真是没星秤！",
    "PHIÊN ÂM": "nǐ yě bù kànkan zìjǐ jǐjīnjǐliǎng , zhēnshi méixīng chèng ！"
  },
  {
    "STT": 695,
    "CHỮ": "M",
    "CỤM": "没眼力",
    "PINYIN": "méi yǎn lì",
    "NGHĨA": "比喻不善观察，没有辨别是非好坏的能力。也说“没眼光”。",
    "SẮP XẾP CÂU": "真是 / 都这个时候了 / 没眼力！/ 你还坐着不动，",
    "ĐÁP ÁN": "都这个时候了你还坐着不动，真是没眼力！",
    "PHIÊN ÂM": "dū zhège shíhou le nǐ huán zuò zhe budòng , zhēnshi méi yǎnlì ！"
  },
  {
    "STT": 696,
    "SẮP XẾP CÂU": "没眼力，/ 形势。/ 他真是 / 看不清",
    "ĐÁP ÁN": "他真是没眼力，看不清形势。",
    "PHIÊN ÂM": "tā zhēnshi méi yǎnlì , kànbuqīng xíngshì ."
  },
  {
    "STT": 697,
    "CHỮ": "N",
    "CỤM": "拿不起来",
    "PINYIN": "ná bù qǐ lái",
    "NGHĨA": "不能胜任某项工作。",
    "SẮP XẾP CÂU": "拿不起来。 / 太棘手了， / 这件事 / 他",
    "ĐÁP ÁN": "这件事太棘手了，他拿不起来。",
    "PHIÊN ÂM": "zhèjiàn shìtài jíshǒu le , tā nábùqǐlái ."
  },
  {
    "STT": 698,
    "SẮP XẾP CÂU": "我一个人/这东西太重了，/实在/拿不起来。",
    "ĐÁP ÁN": "这东西太重了，我一个人实在拿不起来。",
    "PHIÊN ÂM": "zhè dōngxi tàizhòng le , wǒ yīgè rén shízài nábùqǐlái ."
  },
  {
    "STT": 699,
    "CHỮ": "N",
    "CỤM": "拿手戏",
    "PINYIN": "ná shǒu xì",
    "NGHĨA": "戏剧演员最擅长的剧目。比喻最擅长的本领。也说“拿手好戏”。",
    "SẮP XẾP CÂU": "拿手戏。 / 他的 / 做菜是",
    "ĐÁP ÁN": "做菜是他的拿手戏。",
    "PHIÊN ÂM": "zuòcài shì tā de náshǒuxì ."
  },
  {
    "STT": 700,
    "SẮP XẾP CÂU": "做得特别好吃。/这道菜是/她的/拿手戏，",
    "ĐÁP ÁN": "这道菜是她的拿手戏，做得特别好吃。",
    "PHIÊN ÂM": "zhè dàocài shì tā de náshǒuxì , zuò dé tèbié hàochī ."
  },
  {
    "STT": 701,
    "CHỮ": "N",
    "CỤM": "闹别扭",
    "PINYIN": "nào biè niu",
    "NGHĨA": "比喻彼此有意见而合不来或故意为难对方。",
    "SẮP XẾP CÂU": "闹别扭了。 / 他们/ 夫妻俩",
    "ĐÁP ÁN": "他们夫妻俩闹别扭了。",
    "PHIÊN ÂM": "tāmen fūqīliǎ nàobièniu le ."
  },
  {
    "STT": 702,
    "SẮP XẾP CÂU": "谁也不肯先低头。/他们俩/最近总在/闹别扭，",
    "ĐÁP ÁN": "他们俩最近总在闹别扭，谁也不肯先低头。",
    "PHIÊN ÂM": "tāmen liǎ zuìjìn zǒngzài nàobièniu , shéi yě bùkěn xiān dītóu ."
  },
  {
    "STT": 703,
    "CHỮ": "N",
    "CỤM": "闹饥荒",
    "PINYIN": "nào jī huānɡ",
    "NGHĨA": "遇到荒年，比喻经济困难。",
    "SẮP XẾP CÂU": "曾经 / 闹饥荒。 / 多次 / 历史上",
    "ĐÁP ÁN": "历史上曾经多次闹饥荒。",
    "PHIÊN ÂM": "lìshǐ shàng céngjīng duōcì nàojīhuāng ."
  },
  {
    "STT": 704,
    "SẮP XẾP CÂU": "钱包又在/只能省着点花。/月底了，/闹饥荒，",
    "ĐÁP ÁN": "月底了，钱包又在闹饥荒，只能省着点花。",
    "PHIÊN ÂM": "yuèdǐ le , qiánbāo yòu zài nàojīhuāng , zhǐnéng shěng zhe diǎnhuā ."
  },
  {
    "STT": 705,
    "CHỮ": "N",
    "CỤM": "闹口舌",
    "PINYIN": "nào kǒu shé",
    "NGHĨA": "比喻发生纠纷、争吵。",
    "SẮP XẾP CÂU": "这 / 闹大了。 / 件事",
    "ĐÁP ÁN": "这件事闹口舌了。",
    "PHIÊN ÂM": "zhèjiàn shìnào kǒushé le ."
  },
  {
    "STT": 706,
    "SẮP XẾP CÂU": "又闹口舌了。/ 他们俩 / 为了一点小事",
    "ĐÁP ÁN": "他们俩为了一点小事又闹口舌了。",
    "PHIÊN ÂM": "tāmen liǎ wèile yīdiǎn xiǎoshì yòu nào kǒushé le ."
  },
  {
    "STT": 707,
    "CHỮ": "N",
    "CỤM": "闹乱子",
    "PINYIN": "nào luàn zi",
    "NGHĨA": "惹祸，惹出麻烦。",
    "SẮP XẾP CÂU": "闹乱子了。 / 这次/ 活动",
    "ĐÁP ÁN": "这次活动闹乱子了。",
    "PHIÊN ÂM": "zhècì huódòng nàoluànzi le ."
  },
  {
    "STT": 708,
    "SẮP XẾP CÂU": "常常在家里 / 小孩子 / 闹乱子。/ 不懂事，",
    "ĐÁP ÁN": "小孩子不懂事，常常在家里闹乱子。",
    "PHIÊN ÂM": "xiǎoháizi bùdǒngshì , chángcháng zài jiālǐ nàoluànzi ."
  },
  {
    "STT": 709,
    "CHỮ": "N",
    "CỤM": "闹摩擦",
    "PINYIN": "nào mó cā",
    "NGHĨA": "比喻个人或团体之间因彼此利害矛盾而蓄意制造事端，引起冲突。",
    "SẮP XẾP CÂU": "闹摩擦了。 / 他们/ 之间",
    "ĐÁP ÁN": "他们之间闹摩擦了。",
    "PHIÊN ÂM": "tāmen zhījiān nào mócā le ."
  },
  {
    "STT": 710,
    "SẮP XẾP CÂU": "频频 / 两国因为 / 闹摩擦。/ 边境问题",
    "ĐÁP ÁN": "两国因为边境问题频频闹摩擦。",
    "PHIÊN ÂM": "liǎng guó yīnwèi biānjìng wèntí pínpín nào mócā ."
  },
  {
    "STT": 711,
    "CHỮ": "N",
    "CỤM": "闹笑话",
    "PINYIN": "nào xiào hua",
    "NGHĨA": "因粗心大意或缺乏常识、经验而发生可笑的错误。",
    "SẮP XẾP CÂU": "闹笑话了。 / 他/ 今天",
    "ĐÁP ÁN": "他今天闹笑话了。",
    "PHIÊN ÂM": "tā jīntiān nàoxiàohuà le ."
  },
  {
    "STT": 712,
    "SẮP XẾP CÂU": "结果 / 说错话，/ 闹笑话了。/ 他当众",
    "ĐÁP ÁN": "他当众说错话，结果闹笑话了。",
    "PHIÊN ÂM": "tā dāngzhòng shuō cuòhuà , jiéguǒ nàoxiàohuà le ."
  },
  {
    "STT": 713,
    "CHỮ": "N",
    "CỤM": "闹着玩儿",
    "PINYIN": "nào zhe wánr",
    "NGHĨA": "做游戏或戏弄人，比喻用轻率的态度对待人或事情。",
    "SẮP XẾP CÂU": "你别当真。 / 闹着玩儿， / 他 / 只是",
    "ĐÁP ÁN": "他只是闹着玩儿，你别当真。",
    "PHIÊN ÂM": "tā zhǐshì nàozhewánr , nǐ biédāngzhēn ."
  },
  {
    "STT": 714,
    "SẮP XẾP CÂU": "我们只是 / 别当真，/ 闹着玩儿呢。",
    "ĐÁP ÁN": "别当真，我们只是闹着玩儿呢。",
    "PHIÊN ÂM": "biédāngzhēn , wǒmen zhǐshì nàozhewánr ne ."
  },
  {
    "STT": 715,
    "CHỮ": "N",
    "CỤM": "泥腿子",
    "PINYIN": "ní tuǐ zi",
    "NGHĨA": "指做农活的人。",
    "SẮP XẾP CÂU": "一辈子 / 在农村生活。 / 他是个地地道道的 / 泥腿子，",
    "ĐÁP ÁN": "他是个地地道道的泥腿子，一辈子在农村生活。",
    "PHIÊN ÂM": "tā shì gè dìdìdàodào de nítuǐzi , yībèizi zài nóngcūn shēnghuó ."
  },
  {
    "STT": 716,
    "SẮP XẾP CÂU": "哪懂这些 / 泥腿子，/ 城里的规矩。/ 他就是个",
    "ĐÁP ÁN": "他就是个泥腿子，哪懂这些城里的规矩。",
    "PHIÊN ÂM": "tā jiùshì gè nítuǐzi , nǎ dǒng zhèxiē chénglǐ de guīju ."
  },
  {
    "STT": 717,
    "CHỮ": "N",
    "CỤM": "牛皮大王",
    "PINYIN": "niú pí dà wánɡ",
    "NGHĨA": "指喜欢吹牛、说大话的人。",
    "SẮP XẾP CÂU": "专夸其谈。 / 他是个 / 牛皮大王，",
    "ĐÁP ÁN": "他是个牛皮大王，夸夸其谈。",
    "PHIÊN ÂM": "tā shì gè niúpí dàiwang , kuākuāqítán ."
  },
  {
    "STT": 718,
    "SẮP XẾP CÂU": "他吹得天花乱坠，/早就被大家叫成/牛皮大王了。",
    "ĐÁP ÁN": "他吹得天花乱坠，早就被大家叫成牛皮大王了。",
    "PHIÊN ÂM": "tā chuī dé tiānhuāluànzhuì , zǎojiù bèi dàjiā jiàochéng niúpí dàiwang le ."
  },
  {
    "STT": 719,
    "CHỮ": "N",
    "CỤM": "扭转乾坤",
    "PINYIN": "niǔ zhuǎn qián kūn",
    "NGHĨA": "指彻底改变局面。",
    "SẮP XẾP CÂU": "局势。 / 扭转了乾坤， / 他的到来 / 改变了",
    "ĐÁP ÁN": "他的到来扭转了乾坤，改变了局势。",
    "PHIÊN ÂM": "tā de dàolái niǔzhuǎn le qiánkūn , gǎibiàn le júshì ."
  },
  {
    "STT": 720,
    "SẮP XẾP CÂU": "他一招/就在大家绝望的时候，/扭转乾坤，/扭转了局势。",
    "ĐÁP ÁN": "就在大家绝望的时候，他一招扭转乾坤，扭转了局势。",
    "PHIÊN ÂM": "jiù zài dàjiā juéwàng de shíhou , tā yīzhāo niǔzhuǎnqiánkūn , niǔzhuǎn le júshì ."
  },
  {
    "STT": 721,
    "CHỮ": "N",
    "CỤM": "弄玄虚",
    "PINYIN": "nòng xuán xū",
    "NGHĨA": "故意弄点花头，迷惑别人",
    "SẮP XẾP CÂU": "让人 / 他总是 / 看不透。 / 弄玄虚，",
    "ĐÁP ÁN": "他总是弄玄虚，让人看不透。",
    "PHIÊN ÂM": "tā zǒngshì nòng xuánxū , ràng rén kànbùtòu ."
  },
  {
    "STT": 722,
    "SẮP XẾP CÂU": "你/有话就直说。/别总/弄玄虚，",
    "ĐÁP ÁN": "你别总弄玄虚，有话就直说。",
    "PHIÊN ÂM": "nǐbié zǒngnòng xuánxū , yǒuhuà jiù zhíshuō ."
  },
  {
    "STT": 723,
    "CHỮ": "N",
    "CỤM": "弄潮儿",
    "PINYIN": "nònɡ cháo ér",
    "NGHĨA": "比喻敢于在风险中拼搏的人。",
    "SẮP XẾP CÂU": "弄潮儿。 / 改革开放的 / 他们是",
    "ĐÁP ÁN": "他们是改革开放的弄潮儿。",
    "PHIÊN ÂM": "tāmen shì gǎigékāifàng de nòngcháor ."
  },
  {
    "STT": 724,
    "SẮP XẾP CÂU": "敢想敢闯，/他是个/时代的/弄潮儿，/不走寻常路。",
    "ĐÁP ÁN": "他是个时代的弄潮儿，敢想敢闯，不走寻常路。",
    "PHIÊN ÂM": "tā shì gè shídài de nòngcháor , gǎn xiǎng gǎn chuǎng , bù zǒu xúnchánglù ."
  },
  {
    "STT": 725,
    "CHỮ": "P",
    "CỤM": "拍马屁",
    "PINYIN": "pāi mǎ pì",
    "NGHĨA": "比喻给别人说好话，谄媚奉承。",
    "SẮP XẾP CÂU": "领导。 / 他总是/ 拍马屁，/ 讨好",
    "ĐÁP ÁN": "他总是拍马屁，讨好领导。",
    "PHIÊN ÂM": "tā zǒngshì pāimǎpì , tǎohǎo lǐngdǎo ."
  },
  {
    "STT": 726,
    "SẮP XẾP CÂU": "拍马屁，/ 混个脸熟。/ 他整天 / 想在领导面前",
    "ĐÁP ÁN": "他整天拍马屁，想在领导面前混个脸熟。",
    "PHIÊN ÂM": "tā zhěngtiān pāimǎpì , xiǎng zài lǐngdǎo miànqián hùngè liǎnshú ."
  },
  {
    "STT": 727,
    "CHỮ": "P",
    "CỤM": "拍脑袋",
    "PINYIN": "pāi nǎo dai",
    "SẮP XẾP CÂU": "必须经过详细的市场调研和 / 拍脑袋 / 数据分析。/ 重大决策不能仅凭一时冲动就/ 决定，",
    "ĐÁP ÁN": "重大决策不能仅凭一时冲动就拍脑袋决定，必须经过详细的市场调研和数据分析。",
    "PHIÊN ÂM": "zhòngdà juécè bùnéng jǐnpíng yīshíchōngdòng jiù pāi nǎodài juédìng , bìxū jīngguò xiángxì de shìchǎngdiàoyán hé shùjùfēnxī ."
  },
  {
    "STT": 728,
    "SẮP XẾP CÂU": "拍脑袋，/ 结果总是让大家替他的草率承担责任。/ 他这个人最大的毛病就是爱 / 常常不考虑后果，",
    "ĐÁP ÁN": "他这个人最大的毛病就是爱拍脑袋，常常不考虑后果，结果总是让大家替他的草率承担责任。",
    "PHIÊN ÂM": "tā zhège rén zuìdà de máobìng jiùshì ài pāi nǎodài , chángcháng bù kǎolǜ hòuguǒ , jiéguǒ zǒngshì ràng dàjiā tì tā de cǎoshuài chéngdānzérèn ."
  },
  {
    "STT": 729,
    "CHỮ": "P",
    "CỤM": "攀高枝",
    "PINYIN": "pān ɡāo zhī",
    "NGHĨA": "比喻巴结或投靠有权势的人。也叫“爬高枝”。",
    "SẮP XẾP CÂU": "她想 / 嫁个 / 有钱人。 / 攀高枝，",
    "ĐÁP ÁN": "她想攀高枝，嫁个有钱人。",
    "PHIÊN ÂM": "tā xiǎng pāngāozhī , jiàgè yǒuqiánrén ."
  },
  {
    "STT": 730,
    "SẮP XẾP CÂU": "有权有势的人那儿跑，/ 攀高枝。/ 她最近总往 / 明显是想",
    "ĐÁP ÁN": "她最近总往有权有势的人那儿跑，明显是想攀高枝。",
    "PHIÊN ÂM": "tā zuìjìn zǒngwǎng yǒuquányǒushì de rén nàr pǎo , míngxiǎn shì xiǎng pāngāozhī ."
  },
  {
    "STT": 731,
    "CHỮ": "P",
    "CỤM": "跑龙套",
    "PINYIN": "pǎo lónɡ tào",
    "NGHĨA": "戏曲用语，即扮演随从或兵卒等不重要的角色，现在常用来比喻在人手下打杂。",
    "SẮP XẾP CÂU": "没什么实权。 / 跑龙套， / 他在公司里 / 只是",
    "ĐÁP ÁN": "他在公司里只是跑龙套，没什么实权。",
    "PHIÊN ÂM": "tā zài gōngsī lǐ zhǐshì pǎolóngtào , méishénme shíquán ."
  },
  {
    "STT": 732,
    "SẮP XẾP CÂU": "连一句台词 / 跑龙套的，/ 都没有。/ 他在剧组里只是",
    "ĐÁP ÁN": "他在剧组里只是跑龙套的，连一句台词都没有。",
    "PHIÊN ÂM": "tā zài jùzǔ lǐ zhǐshì pǎolóngtào de , lián yījù táicí dū méiyǒu ."
  },
  {
    "STT": 733,
    "CHỮ": "P",
    "CỤM": "泡蘑菇",
    "PINYIN": "pào mó ɡū",
    "NGHĨA": "比喻故意纠缠，拖延时间。",
    "SẮP XẾP CÂU": "他整天 / 什么也 / 不干。 / 泡蘑菇，",
    "ĐÁP ÁN": "他整天泡蘑菇，什么也不干。",
    "PHIÊN ÂM": "tā zhěngtiān pàomógu , shénme yě bù gān ."
  },
  {
    "STT": 734,
    "SẮP XẾP CÂU": "赶紧 / 泡蘑菇了，/ 把正事办了！ / 别再",
    "ĐÁP ÁN": "别再泡蘑菇了，赶紧把正事办了！",
    "PHIÊN ÂM": "bié zài pàomógu le , gǎnjǐn bǎ zhèngshì bàn le ！"
  },
  {
    "STT": 735,
    "CHỮ": "P",
    "CỤM": "碰一鼻子灰",
    "PINYIN": "pèng yī bí zi huī",
    "NGHĨA": "遭到拒绝或斥责，落得没趣。",
    "SẮP XẾP CÂU": "事情 / 没办成。 / 碰了一鼻子灰， / 他这次",
    "ĐÁP ÁN": "他这次碰了一鼻子灰，事情没办成。",
    "PHIÊN ÂM": "tā zhècì pèng le yībízihuī , shìqing méi bànchéng ."
  },
  {
    "STT": 736,
    "SẮP XẾP CÂU": "我去找他帮忙，/ 碰一鼻子灰，/ 连门都没让我进。/ 结果",
    "ĐÁP ÁN": "我去找他帮忙，结果碰一鼻子灰，连门都没让我进。",
    "PHIÊN ÂM": "wǒ qù zhǎo tā bāngmáng , jiéguǒ pèngyībízihuī , liánmén dū méi ràng wǒ jìn ."
  },
  {
    "STT": 737,
    "CHỮ": "P",
    "CỤM": "碰壁",
    "PINYIN": "pènɡ bì",
    "NGHĨA": "比喻受到阻碍或遭到拒绝。也指事情行不通或达不到目的。",
    "SẮP XẾP CÂU": "他四处 / 找不到 / 工作。 / 碰壁，",
    "ĐÁP ÁN": "他四处碰壁，找不到工作。",
    "PHIÊN ÂM": "tā sìchù pèngbì , zhǎo bùdào gōngzuò ."
  },
  {
    "STT": 738,
    "SẮP XẾP CÂU": "在会上/ 碰壁了。 / 这项提案 / 又一次",
    "ĐÁP ÁN": "这项提案在会上又一次碰壁了。",
    "PHIÊN ÂM": "zhèxiàng tíàn zài huìshàng yòu yīcì pèngbì le ."
  },
  {
    "STT": 739,
    "CHỮ": "P",
    "CỤM": "碰钉子",
    "PINYIN": "pènɡ dīnɡ zi",
    "NGHĨA": "比喻遭到拒绝或受斥责。也说“吃钉子”",
    "SẮP XẾP CÂU": "他向领导 / 碰了钉子。 / 提建议，/ 却",
    "ĐÁP ÁN": "他向领导提建议，却碰了钉子。",
    "PHIÊN ÂM": "tā xiàng lǐngdǎo tí jiànyì , què pèng le dīngzi ."
  },
  {
    "STT": 740,
    "SẮP XẾP CÂU": "也不长记性。 / 他太固执，/ 碰钉子 / 老是在别人那儿",
    "ĐÁP ÁN": "他太固执，老是在别人那儿碰钉子也不长记性。",
    "PHIÊN ÂM": "tā tài gùzhí , lǎoshi zài biéren nàr pèngdīngzi yě bùcháng jìxing ."
  },
  {
    "STT": 741,
    "CHỮ": "P",
    "CỤM": "偏心眼",
    "PINYIN": "piān xīn yǎn",
    "NGHĨA": "偏向、袒护一方面，不公正。",
    "SẮP XẾP CÂU": "总是偏袒 / 他 / 自己的孩子。 / 偏心眼，",
    "ĐÁP ÁN": "他偏心眼，总是偏袒自己的孩子。",
    "PHIÊN ÂM": "tā piānxīnyǎn , zǒngshì piāntǎn zìjǐ de háizi ."
  },
  {
    "STT": 742,
    "SẮP XẾP CÂU": "怎么什么好事都给你侄子？/你也太/偏心眼了吧，",
    "ĐÁP ÁN": "你也太偏心眼了吧，怎么什么好事都给你侄子？",
    "PHIÊN ÂM": "nǐ yě tài piānxīnyǎn le bā , zěnme shénme hàoshì dū gěi nǐ zhízi ？"
  },
  {
    "STT": 743,
    "CHỮ": "P",
    "CỤM": "拼命三郎",
    "PINYIN": "pīn mìnɡ sān lánɡ",
    "NGHĨA": "把性命豁出去。谑指竭尽全力、甚至不惜生命去工作的人。",
    "SẮP XẾP CÂU": "工作 / 他是个/ 非常努力。 / 拼命三郎，",
    "ĐÁP ÁN": "他是个拼命三郎，工作非常努力。",
    "PHIÊN ÂM": "tā shì gè pīnmìngsānláng , gōngzuò fēicháng nǔlì ."
  },
  {
    "STT": 744,
    "SẮP XẾP CÂU": "像/连饭都顾不上吃。/他干起活来/拼命三郎一样，",
    "ĐÁP ÁN": "他干起活来像拼命三郎一样，连饭都顾不上吃。",
    "PHIÊN ÂM": "tā gānqǐ huólái xiàng pīnmìngsānláng yīyàng , liánfàn dū gùbushàng chī ."
  },
  {
    "STT": 745,
    "CHỮ": "P",
    "CỤM": "泼辣货",
    "PINYIN": "pō là huò",
    "NGHĨA": "谑指能干而又厉害的女人。",
    "SẮP XẾP CÂU": "敢作敢为。 / 泼辣货， / 她是个",
    "ĐÁP ÁN": "她是个泼辣货，敢作敢为。",
    "PHIÊN ÂM": "tā shì gè pōla huò , gǎnzuògǎnwéi ."
  },
  {
    "STT": 746,
    "SẮP XẾP CÂU": "她一开口骂人/像个/谁都拦不住。/泼辣货，",
    "ĐÁP ÁN": "她一开口骂人就像个泼辣货，谁都拦不住。",
    "PHIÊN ÂM": "tā yī kāikǒu màrén jiù xiàng gè pōla huò , shéi dū lánbùzhù ."
  },
  {
    "STT": 747,
    "CHỮ": "P",
    "CỤM": "泼冷水",
    "PINYIN": "pō lěnɡ shuǐ",
    "NGHĨA": "用言语或行动打消某人做某事的积极性。",
    "SẮP XẾP CÂU": "别人的积极性。 / 打击 / 泼冷水， / 他总是",
    "ĐÁP ÁN": "他总是泼冷水，打击别人的积极性。",
    "PHIÊN ÂM": "tā zǒngshì pōlěngshuǐ , dǎjī biéren de jījíxìng ."
  },
  {
    "STT": 748,
    "SẮP XẾP CÂU": "他就开始/我正兴奋地说计划，/往我头上/泼冷水。",
    "ĐÁP ÁN": "我正兴奋地说计划，他就开始往我头上泼冷水。",
    "PHIÊN ÂM": "wǒ zhèng xīngfèn deshuō jìhuà , tā jiù kāishǐ wǎng wǒ tóushàng pōlěngshuǐ ."
  },
  {
    "STT": 749,
    "CHỮ": "P",
    "CỤM": "破天荒",
    "PINYIN": "pò tiān huānɡ",
    "NGHĨA": "打破从未开垦过的荒芜状态。比喻事情第一次出现。",
    "SẮP XẾP CÂU": "请假了。 / 破天荒 / 他 / 地",
    "ĐÁP ÁN": "他破天荒地请假了。",
    "PHIÊN ÂM": "tā pòtiānhuāng dì qǐngjià le ."
  },
  {
    "STT": 750,
    "SẮP XẾP CÂU": "她今天居然早到了，/真是/破天荒/第一次。",
    "ĐÁP ÁN": "她今天居然早到了，真是破天荒第一次。",
    "PHIÊN ÂM": "tā jīntiān jūrán zǎodào le , zhēnshi pòtiānhuāng dìyīcì ."
  },
  {
    "STT": 751,
    "CHỮ": "P",
    "CỤM": "菩萨心肠",
    "PINYIN": "pú sɑ xīn chánɡ",
    "NGHĨA": "心肠像菩萨一样软，见不得人家受苦例。",
    "SẮP XẾP CÂU": "助人。 / 乐于 / 菩萨心肠， / 她",
    "ĐÁP ÁN": "她菩萨心肠，乐于助人。",
    "PHIÊN ÂM": "tā púsàxīncháng , lèyúzhùrén ."
  },
  {
    "STT": 752,
    "SẮP XẾP CÂU": "特别善良。/他虽然外表严厉，/其实有颗/菩萨心肠，",
    "ĐÁP ÁN": "他虽然外表严厉，其实有颗菩萨心肠，特别善良。",
    "PHIÊN ÂM": "tā suīrán wàibiǎo yánlì , qíshí yǒukē púsàxīncháng , tèbié shànliáng ."
  },
  {
    "STT": 753,
    "CHỮ": "Q",
    "CỤM": "骑墙派",
    "PINYIN": "qí qiánɡ pài",
    "NGHĨA": "比喻立场不明确、站在中间、向两方面讨好的人。",
    "SẮP XẾP CÂU": "逢源。 / 骑墙派， / 他是个 / 左右",
    "ĐÁP ÁN": "他是个骑墙派，左右逢源。",
    "PHIÊN ÂM": "tā shì gè qíqiángpài , zuǒyòuféngyuán ."
  },
  {
    "STT": 754,
    "SẮP XẾP CÂU": "遇到重大决策时，/ 骑墙派，/ 他总是当 / 从不明确表态。",
    "ĐÁP ÁN": "遇到重大决策时，他总是当骑墙派，从不明确表态。",
    "PHIÊN ÂM": "yùdào zhòngdà juécè shí , tā zǒngshì dāng qíqiángpài , cóngbù míngquè biǎotài ."
  },
  {
    "STT": 755,
    "CHỮ": "Q",
    "CỤM": "千里马",
    "PINYIN": "qiān lǐ mǎ",
    "NGHĨA": "指很有才华、很有能力、很有前途的人。",
    "SẮP XẾP CÂU": "发现。 / 需要伯乐来 / 千里马， / 他是个",
    "ĐÁP ÁN": "他是千里马，需要伯乐来发现。",
    "PHIÊN ÂM": "tā shì qiānlǐmǎ , xūyào bólè lái fāxiàn ."
  },
  {
    "STT": 756,
    "SẮP XẾP CÂU": "只要给机会， / 千里马，/ 肯定能大有作为。/ 他是公司的",
    "ĐÁP ÁN": "他是公司的千里马，只要给机会，肯定能大有作为。",
    "PHIÊN ÂM": "tā shì gōngsī de qiānlǐmǎ , zhǐyào gěi jīhuì , kěndìng néng dàyǒuzuòwéi ."
  },
  {
    "STT": 757,
    "CHỮ": "Q",
    "CỤM": "千里眼",
    "PINYIN": "qiān lǐ yǎn",
    "NGHĨA": "目光敏锐，看得远。",
    "SẮP XẾP CÂU": "他目光远大，/ 能预见 / 像千里眼一样，/ 未来的发展。",
    "ĐÁP ÁN": "他目光远大，像千里眼一样，能预见未来的发展。",
    "PHIÊN ÂM": "tā mùguāngyuǎndà , xiàng qiānlǐyǎn yīyàng , néng yùjiàn wèilái de fāzhǎn ."
  },
  {
    "STT": 758,
    "SẮP XẾP CÂU": "千里眼，/ 她都能第一时间知道。/ 她简直是 / 公司的风吹草动",
    "ĐÁP ÁN": "她简直是千里眼，公司的风吹草动她都能第一时间知道。",
    "PHIÊN ÂM": "tā jiǎnzhí shì qiānlǐyǎn , gōngsī de fēngchuīcǎodòng tā dū néng dìyī shíjiān zhīdào ."
  },
  {
    "STT": 759,
    "CHỮ": "Q",
    "CỤM": "前怕狼，后怕虎",
    "PINYIN": "qián pà lánɡ，hòu pà hǔ",
    "NGHĨA": "形容胆小怕事，畏缩不前。",
    "SẮP XẾP CÂU": "什么事 / 前怕狼，后怕虎，/ 都不敢做。/ 他",
    "ĐÁP ÁN": "他前怕狼，后怕虎，什么事都不敢做。",
    "PHIÊN ÂM": "tā qiánpàláng , hòupàhǔ , shénme shì dū bùgǎn zuò ."
  },
  {
    "STT": 760,
    "SẮP XẾP CÂU": "那样永远 / 前怕狼，后怕虎，/ 也成不了大事。/ 做事不能总是",
    "ĐÁP ÁN": "做事不能总是前怕狼，后怕虎，那样永远也成不了大事。",
    "PHIÊN ÂM": "zuòshì bùnéng zǒngshì qiánpàláng , hòupàhǔ , nàyàng yǒngyuǎn yě chéngbuliǎo dàshì ."
  },
  {
    "STT": 761,
    "CHỮ": "Q",
    "CỤM": "牵着鼻子走",
    "PINYIN": "qiān zhe bí zi zǒu",
    "NGHĨA": "控制、摆布。",
    "SẮP XẾP CÂU": "没有 / 牵着鼻子走，/ 自己的主见。/ 他被别人",
    "ĐÁP ÁN": "他被别人牵着鼻子走，没有自己的主见。",
    "PHIÊN ÂM": "tā bèi biéren qiānzhebízi zǒu , méiyǒu zìjǐ de zhǔjiàn ."
  },
  {
    "STT": 762,
    "SẮP XẾP CÂU": "他什么主见 / 牵着鼻子走。/ 都没有，/ 总是被上司",
    "ĐÁP ÁN": "他什么主见都没有，总是被上司牵着鼻子走。",
    "PHIÊN ÂM": "tā shénme zhǔjiàn dū méiyǒu , zǒngshì bèi shàngsi qiānzhebízi zǒu ."
  },
  {
    "STT": 763,
    "CHỮ": "Q",
    "CỤM": "枪打出头鸟",
    "PINYIN": "qiānɡ dǎ chū tóu niǎo",
    "NGHĨA": "露出头来的鸟一定会遭到枪击。比喻首先打击带头的人。",
    "SẮP XẾP CÂU": "他太过于冒尖了，/ 枪打出头鸟，/ 受到了批评。/ 结果",
    "ĐÁP ÁN": "他太过于冒尖了，结果枪打出头鸟，受到了批评。",
    "PHIÊN ÂM": "tā tài guòyú màojiān le , jiéguǒ qiāngdǎchūtóuniǎo , shòudào le pīpíng ."
  },
  {
    "STT": 764,
    "SẮP XẾP CÂU": "结果成了 / 在单位里，/ 枪打出头鸟，/ 他太张扬了，/ 第一个被整。",
    "ĐÁP ÁN": "在单位里，他太张扬了，结果成了枪打出头鸟，第一个被整。",
    "PHIÊN ÂM": "zài dānwèi lǐ , tā tài zhāngyáng le , jiéguǒ chéng le qiāngdǎchūtóuniǎo , dìyīgè bèizhěng ."
  },
  {
    "STT": 765,
    "CHỮ": "Q",
    "CỤM": "抢手货",
    "PINYIN": "qiǎnɡ shǒu huò",
    "NGHĨA": "很受欢迎的东西。",
    "SẮP XẾP CÂU": "很快就卖光了。 / 这种商品/ 抢手货，/ 是",
    "ĐÁP ÁN": "这种商品是抢手货，很快就卖光了。",
    "PHIÊN ÂM": "zhèzhǒng shāngpǐn shì qiǎngshǒuhuò , hěnkuài jiù màiguāng le ."
  },
  {
    "STT": 766,
    "SẮP XẾP CÂU": "简直是/这种限量包包/一上架就被抢光，/抢手货。",
    "ĐÁP ÁN": "这种限量包包一上架就被抢光，简直是抢手货。",
    "PHIÊN ÂM": "zhèzhǒng xiànliàng bāobāo yī shàngjià jiù bèi qiǎngguāng , jiǎnzhí shì qiǎngshǒuhuò ."
  },
  {
    "STT": 767,
    "CHỮ": "Q",
    "CỤM": "墙头草",
    "PINYIN": "qiánɡ tóu cǎo",
    "NGHĨA": "比喻立场不坚定、缺乏主见、左右动摇的人。",
    "SẮP XẾP CÂU": "见风使舵。 / 墙头草， / 他是个",
    "ĐÁP ÁN": "他是个墙头草，见风使舵。",
    "PHIÊN ÂM": "tā shì gè qiángtóucǎo , jiànfēngshǐduò ."
  },
  {
    "STT": 768,
    "SẮP XẾP CÂU": "风往哪边吹/他做人太像/就往哪边倒。/墙头草，",
    "ĐÁP ÁN": "他做人太像墙头草，风往哪边吹就往哪边倒。",
    "PHIÊN ÂM": "tā zuòrén tàixiàng qiángtóucǎo , fēngwǎng nǎbiān chuī jiù wǎng nǎbiān dǎo ."
  },
  {
    "STT": 769,
    "CHỮ": "Q",
    "CỤM": "敲边鼓",
    "PINYIN": "qiāo biān ɡǔ",
    "NGHĨA": "比喻从旁帮腔，从旁助势。也说“打边鼓”。",
    "SẮP XẾP CÂU": "鼓励 / 敲边鼓，/ 大家努力。/ 他在旁边",
    "ĐÁP ÁN": "他在旁边敲边鼓，鼓励大家努力。",
    "PHIÊN ÂM": "tā zài pángbiān qiāobiāngǔ , gǔlì dàjiā nǔlì ."
  },
  {
    "STT": 770,
    "SẮP XẾP CÂU": "自己从不出面。/他总爱/替别人/敲边鼓，",
    "ĐÁP ÁN": "他总爱替别人敲边鼓，自己从不出面。",
    "PHIÊN ÂM": "tā zǒngàitì biéren qiāobiāngǔ , zìjǐ cóngbù chūmiàn ."
  },
  {
    "STT": 771,
    "CHỮ": "Q",
    "CỤM": "敲门砖",
    "PINYIN": "qiāo mén zhuān",
    "NGHĨA": "比喻谋取名利的初步手段。",
    "SẮP XẾP CÂU": "敲门砖。/ 是 / 这篇文章 / 他进入文学界的",
    "ĐÁP ÁN": "这篇文章是他进入文学界的敲门砖。",
    "PHIÊN ÂM": "zhè piānwénzhāng shì tā jìnrù wénxuéjiè de qiāoménzhuān ."
  },
  {
    "STT": 772,
    "SẮP XẾP CÂU": "真正的实力/这个证书/才是关键。/只是/敲门砖，",
    "ĐÁP ÁN": "这个证书只是敲门砖，真正的实力才是关键。",
    "PHIÊN ÂM": "zhège zhèngshū zhǐshì qiāoménzhuān , zhēnzhèng de shílì cái shì guānjiàn ."
  },
  {
    "STT": 773,
    "CHỮ": "Q",
    "CỤM": "翘尾巴",
    "PINYIN": "qiào wěi bā",
    "NGHĨA": "比喻骄傲自大。",
    "SẮP XẾP CÂU": "一点成绩 / 翘尾巴了。/ 他取得了 / 就",
    "ĐÁP ÁN": "他取得了一点成绩就翘尾巴了。",
    "PHIÊN ÂM": "tā qǔdé le yīdiǎn chéngjì jiù qiàowěiba le ."
  },
  {
    "STT": 774,
    "SẮP XẾP CÂU": "就开始/别因为夸了你两句/翘尾巴，/谦虚点吧。",
    "ĐÁP ÁN": "别因为夸了你两句就开始翘尾巴，谦虚点吧。",
    "PHIÊN ÂM": "bié yīnwèi kuā le nǐ liǎngjù jiù kāishǐ qiàowěiba , qiānxū diǎn bā ."
  },
  {
    "STT": 775,
    "CHỮ": "Q",
    "CỤM": "敲竹杠",
    "PINYIN": "qiāo zhú gànɡ",
    "NGHĨA": "利用别人的弱点敲诈勒索。",
    "SẮP XẾP CÂU": "钱财。 / 敲诈勒索 / 敲竹杠，/ 他",
    "ĐÁP ÁN": "他敲竹杠，敲诈勒索钱财。",
    "PHIÊN ÂM": "tā qiāozhúgàng , qiāozhàlèsuǒ qiáncái ."
  },
  {
    "STT": 776,
    "SẮP XẾP CÂU": "多要点好处。/借机/他是想趁火打劫，/敲竹杠，",
    "ĐÁP ÁN": "他是想趁火打劫，借机敲竹杠，多要点好处。",
    "PHIÊN ÂM": "tā shì xiǎng chènhuǒdǎjié , jièjī qiāozhúgàng , duō yàodiǎn hǎochu ."
  },
  {
    "STT": 777,
    "CHỮ": "Q",
    "CỤM": "穷光蛋",
    "PINYIN": "qiónɡ ɡuānɡ dàn",
    "NGHĨA": "很穷的人。",
    "SẮP XẾP CÂU": "他 / 穷光蛋。 / 成了个 / 失业了，",
    "ĐÁP ÁN": "他失业了，成了个穷光蛋。",
    "PHIÊN ÂM": "tā shīyè le , chéng le gè qióngguāngdàn ."
  },
  {
    "STT": 778,
    "SẮP XẾP CÂU": "现在可是老板了。/别看他以前是/穷光蛋，",
    "ĐÁP ÁN": "别看他以前是穷光蛋，现在可是老板了。",
    "PHIÊN ÂM": "biékàn tā yǐqián shì qióngguāngdàn , xiànzài kěshì lǎobǎn le ."
  },
  {
    "STT": 779,
    "CHỮ": "Q",
    "CỤM": "秋老虎",
    "PINYIN": "qiū lǎo hǔ",
    "NGHĨA": "比喻立秋以后的炎热天气。",
    "SẮP XẾP CÂU": "秋老虎 / 天气很热。/ 今年的 /厉害，",
    "ĐÁP ÁN": "今年的秋老虎厉害，天气很热。",
    "PHIÊN ÂM": "jīnnián de qiūlǎohǔ lìhai , tiānqì hěn rè ."
  },
  {
    "STT": 780,
    "SẮP XẾP CÂU": "天气像/现在虽然立秋了，/还很热。/秋老虎一样，",
    "ĐÁP ÁN": "现在虽然立秋了，但天气像秋老虎一样，还很热。",
    "PHIÊN ÂM": "xiànzài suīrán lìqiū le , dàn tiānqì xiàng qiūlǎohǔ yīyàng , huán hěn rè ."
  },
  {
    "STT": 1,
    "CHỮ": "W",
    "CỤM": "挖墙脚",
    "PINYIN": "wā qiánɡ jiǎo",
    "NGHĨA": "比喻施行破坏手段使人或集体垮台或使事情不能顺利进行。",
    "SẮP XẾP CÂU": "技术人员。 / 几个 / 我们公司的 / 挖走了 / \r\n他们公司 / 挖墙脚，",
    "ĐÁP ÁN": "他们公司挖墙脚，挖走了我们公司的几个技术人员。",
    "PHIÊN ÂM": "Tāmen gōngsī wā qiáng jiǎo ， wā zǒu le wǒmen gōngsī de jǐge jìshù rényuán 。"
  },
  {
    "STT": 2,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "快走， / 我可要翻脸了。 / 又来挖墙脚了， / 不然",
    "ĐÁP ÁN": "又来挖墙脚了，快走，不然我可要翻脸了。",
    "PHIÊN ÂM": "Yòu lái wā qiáng jiǎo le ， kuài zǒu ， bùrán wǒ kěyào fānliǎn le 。"
  },
  {
    "STT": 3,
    "CHỮ": "W",
    "CỤM": "王老五",
    "PINYIN": "wánɡ lǎo wǔ",
    "NGHĨA": "大龄未婚男子。",
    "SẮP XẾP CÂU": "王老五。 / 是个 / 还 / 他都快 / 四十岁了，",
    "ĐÁP ÁN": "他都快四十岁了，还是个王老五。",
    "PHIÊN ÂM": "Tā dū kuài sìshísuì le ， háishi gè wáng lǎo wǔ 。"
  },
  {
    "STT": 4,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "快四十了， / 连女朋友都没有。 / 他 / 可是 / 多年的王老五，",
    "ĐÁP ÁN": "他可是多年的王老五，快四十了，连女朋友都没有。",
    "PHIÊN ÂM": "Tā kěshì duōnián de wáng lǎo wǔ ， kuài sìshí le ， lián nǚ péngyou dōu méiyǒu 。"
  },
  {
    "STT": 5,
    "CHỮ": "W",
    "CỤM": "窝里斗",
    "PINYIN": "wō lǐ dòu",
    "NGHĨA": "比喻在内部进行的激烈斗争。",
    "SẮP XẾP CÂU": "工作的效率。 / 影响了 / 他们团队 / 窝里斗，",
    "ĐÁP ÁN": "他们团队窝里斗，影响了工作的效率。",
    "PHIÊN ÂM": "Tāmen tuánduì wō lǐ dòu ， yǐngxiǎng le gōngzuò de xiàolǜ 。"
  },
  {
    "STT": 6,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "单位 / 要想 / 取得成绩， / 就 / 不能 / 搞 / 窝里斗， / 消耗 / 内部能量。",
    "ĐÁP ÁN": "单位要想取得成绩，不能搞窝里斗，消耗内部能量。",
    "PHIÊN ÂM": "Dānwèi yào xiǎng qǔdé chéngjì ， bù néng gǎo wō lǐ dòu ， xiāohào nèibù néngliàng 。"
  },
  {
    "STT": 7,
    "CHỮ": "W",
    "CỤM": "窝囊废",
    "PINYIN": "wō nánɡ fèi",
    "NGHĨA": "指怯懦无能的人(含讥讽义)。",
    "SẮP XẾP CÂU": "做不好。 / 都 / 什么事 / 他是个窝囊废，",
    "ĐÁP ÁN": "他是个窝囊废，什么事都做不好。",
    "PHIÊN ÂM": "Tā shì gè wō nánɡ fèi ， shénme shì dōu zuò bùhǎo 。"
  },
  {
    "STT": 8,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "我 / 你 / 拉着我。 / 别 / 我可 / 不想 / 做 / 窝囊废，",
    "ĐÁP ÁN": "我可不想做窝囊废，你别拉着我。",
    "PHIÊN ÂM": "Wǒ kě bùxiǎng zuò wō nánɡ fèi， nǐ bié lāzhe wǒ 。"
  },
  {
    "STT": 9,
    "CHỮ": "W",
    "CỤM": "无底洞",
    "PINYIN": "wú dǐ dònɡ",
    "NGHĨA": "永远填不满的洞。比喻永远满足不了的欲望和要求。",
    "SẮP XẾP CÂU": "资金。 / 大量的 / 投入了 / 无底洞， / 这个项目是个",
    "ĐÁP ÁN": "这个项目是个无底洞，投入了大量的资金。",
    "PHIÊN ÂM": "Zhè ge xiàngmù shì gè wú dǐ dònɡ ， tóurù le dàliàng de zījīn 。"
  },
  {
    "STT": 10,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "你 / 快 / 别 / 了。 / 给他 / 无底洞 / 他钱， / 成",
    "ĐÁP ÁN": "你别给他钱，他快成无底洞了。",
    "PHIÊN ÂM": "Nǐ bié gěi tā qián ， tā kuàichéng wú dǐ dònɡ le 。"
  },
  {
    "STT": 11,
    "CHỮ": "W",
    "CỤM": "乌纱帽",
    "PINYIN": "wū shā mào",
    "NGHĨA": "旧时官员戴的一种帽子。喻指官位。",
    "SẮP XẾP CÂU": "被免职了。 / 乌纱帽， / 他丢了",
    "ĐÁP ÁN": "他丢了乌纱帽，被免职了。",
    "PHIÊN ÂM": "Tā diū le wū shā mào ， bèi miǎnzhí le 。"
  },
  {
    "STT": 12,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "而是 / 他 / 头顶的 / 不是 / 群众的利益， / 关心的 / 自己 / 乌纱帽。",
    "ĐÁP ÁN": "他关心的不是群众的利益，而是自己头顶的乌纱帽。",
    "PHIÊN ÂM": "Tā guānxīn de bùshì qúnzhòng de lìyì ， érshì zìjǐ tóudǐng de wū shā mào 。"
  },
  {
    "STT": 13,
    "CHỮ": "W",
    "CỤM": "乌鸦嘴",
    "PINYIN": "wū yā zuǐ",
    "NGHĨA": "比喻多嘴多舌的人，说倒霉话的人。",
    "SẮP XẾP CÂU": "不吉利。 / 总是 / 说话 / 他是个乌鸦嘴，",
    "ĐÁP ÁN": "他是个乌鸦嘴，说话总是不吉利。",
    "PHIÊN ÂM": "Tā shì gè wū yā zuǐ ， shuōhuà zǒng shì bù jílì 。"
  },
  {
    "STT": 14,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "净说 / 你这个 / 倒霉的话。 / 乌鸦嘴，",
    "ĐÁP ÁN": "你这个乌鸦嘴，净说倒霉的话。",
    "PHIÊN ÂM": "Nǐ zhège wū yā zuǐ ， jìng shuō dǎoméi de huà 。"
  },
  {
    "STT": 15,
    "CHỮ": "W",
    "CỤM": "乌眼鸡似的",
    "PINYIN": "wū yǎn jī shì de",
    "NGHĨA": "像个好斗的鸡。",
    "SẮP XẾP CÂU": "似的。 / 乌眼鸡 / 他哭得",
    "ĐÁP ÁN": "他哭得乌眼鸡似的。",
    "PHIÊN ÂM": "Tā kū dé wū yǎn jī shì de 。"
  },
  {
    "STT": 16,
    "CHỮ": "W",
    "SẮP XẾP CÂU": "我看他 / 这两天 / 啄人。 / 还是 / 直想 / 像个 / 别去 / 招惹他， / 乌眼鸡似的，",
    "ĐÁP ÁN": "这两天还是别去招惹他，我看他像个乌眼鸡似的，直想啄人。",
    "PHIÊN ÂM": "Zhè liǎng tiān háishi bié qù zhāorě tā ， wǒ kàn tā xiàng gè wū yǎn jī shì de， zhí xiǎng zhuó rén 。"
  },
  {
    "STT": 17,
    "CHỮ": "X",
    "CỤM": "下不来台",
    "PINYIN": "xià bù lái tái",
    "NGHĨA": "比喻处境尴尬窘迫。也说“下不了台”。",
    "SẮP XẾP CÂU": "下不来台。 / 错误， / 他犯了",
    "ĐÁP ÁN": "他犯了错误，下不来台。",
    "PHIÊN ÂM": "Tā fàn le cuòwù ， xià bù lái tái 。"
  },
  {
    "STT": 18,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "别让他 / 下不来台。 / 给他 / 留点儿 / 面子，",
    "ĐÁP ÁN": "给他留点儿面子，别让他下不来台。",
    "PHIÊN ÂM": "Gěi tā liú diǎnr miànzi ， bié ràng tā xià bù lái tái 。"
  },
  {
    "STT": 19,
    "CHỮ": "X",
    "CỤM": "下毒手",
    "PINYIN": "xià dú shǒu",
    "NGHĨA": "用不人道的、狠毒的方法、手段对待人和事。",
    "SẮP XẾP CÂU": "很多人。 / 害死了 / 他下毒手，",
    "ĐÁP ÁN": "他下毒手，害死了很多人。",
    "PHIÊN ÂM": "Tā xià dú shǒu ， hài sǐ le hěn duō rén 。"
  },
  {
    "STT": 20,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "杀死了它？ / 是谁 / 向那只流浪狗 / 下了毒手，",
    "ĐÁP ÁN": "是谁向那只流浪狗下了毒手，杀死了它?",
    "PHIÊN ÂM": "Shì shéi xiàng nà zhǐ liú làng gǒu xià le dú shǒu ， shā sǐ le tā ?"
  },
  {
    "STT": 21,
    "CHỮ": "X",
    "CỤM": "下工夫",
    "PINYIN": "xià gōnɡ fu",
    "NGHĨA": "努力，花力气。",
    "SẮP XẾP CÂU": "下工夫。 / 必须 / 要想学好，",
    "ĐÁP ÁN": "要想学好，必须下工夫。",
    "PHIÊN ÂM": "Yào xiǎng xué hǎo, bìxū xià gōng fu."
  },
  {
    "STT": 22,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "把总结报告 / 写好， / 你得 / 上次的 / 下点工夫， / 太糟糕了。",
    "ĐÁP ÁN": "你得下点工夫，把总结报告写好，上次的太糟糕了。",
    "PHIÊN ÂM": "Nǐ děi xià diǎn gōngfu, bǎ zǒngjié bàogào xiě hǎo, shàng cì de tài zāogāo le."
  },
  {
    "STT": 23,
    "CHỮ": "X",
    "CỤM": "下海",
    "PINYIN": "xià hǎi",
    "NGHĨA": "从国有单位辞职。",
    "SẮP XẾP CÂU": "很多钱。 / 赚了 / 他下海经商，",
    "ĐÁP ÁN": "他下海经商，赚了很多钱。",
    "PHIÊN ÂM": "Tā xià hǎi jīng shāng ， zhuàn le hěn duō qián 。"
  },
  {
    "STT": 24,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "还真不少。 / 八十年代， / 下海的人",
    "ĐÁP ÁN": "八十年代，下海的人还真不少。",
    "PHIÊN ÂM": "Bāshí niándài ， xià hǎi de rén huán zhēn bù shǎo 。"
  },
  {
    "STT": 25,
    "CHỮ": "X",
    "CỤM": "下马威",
    "PINYIN": "xià mǎ wēi",
    "NGHĨA": "原指官吏初到任时对下属显示的威风，现在泛指一开头就向对方显 示威力。比喻给他一点颜色看看，让他为难或难堪。",
    "SẮP XẾP CÂU": "下马威。 / 大家 / 给了 / 他一来就",
    "ĐÁP ÁN": "他一来就给了大家下马威。",
    "PHIÊN ÂM": "Tā yīlái jiù gěi le dàjiā xià mǎ wēi 。"
  },
  {
    "STT": 26,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "我非得 / 和我 / 敢 / 对着干？ / 给他 / 一个下马威。",
    "ĐÁP ÁN": "敢和我对着干? 我非得给他一个下马威。",
    "PHIÊN ÂM": "Gǎn hé wǒ duì zhe gàn ? Wǒ fēi děi gěi tā yī gè xià mǎ wēi 。"
  },
  {
    "STT": 27,
    "CHỮ": "X",
    "CỤM": "下台",
    "PINYIN": "xià tái",
    "NGHĨA": "指失去职位。",
    "SẮP XẾP CÂU": "下台了。 / 被迫 / 他",
    "ĐÁP ÁN": "他被迫下台了。",
    "PHIÊN ÂM": "Tā bèi pò xià tái le 。"
  },
  {
    "STT": 28,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "渎职行为， / 政府官员 / 下台。 / 如果有 / 就应该",
    "ĐÁP ÁN": "政府官员如果有渎职行为，就应该下台。",
    "PHIÊN ÂM": "Zhèng fǔ guān yuán rúguǒ yǒu dú zhí xíng wéi ， jiù yīng gāi xià tái 。"
  },
  {
    "STT": 29,
    "CHỮ": "X",
    "CỤM": "象牙塔",
    "PINYIN": "xiànɡ yá tǎ",
    "NGHĨA": "比喻脱离现实生活的文艺家或知识分子的小天地。",
    "SẮP XẾP CÂU": "社会现实。 / 不了解 / 象牙塔里， / 他生活在",
    "ĐÁP ÁN": "他生活在象牙塔里，不了解社会现实。",
    "PHIÊN ÂM": "Tā shēnghuó zài xiàng yá tǎ lǐ ， bù liǎo jiě shè huì xiàn shí 。"
  },
  {
    "STT": 30,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "想进去， / 大学 / 就是 / 一座象牙塔， / 不容易。",
    "ĐÁP ÁN": "大学就是一座象牙塔，想进去，不容易。",
    "PHIÊN ÂM": "Dà xué jiù shì yī zuò xiàng yá tǎ ， xiǎng jìn qù ，bù róngyì 。"
  },
  {
    "STT": 31,
    "CHỮ": "X",
    "CỤM": "小把戏",
    "PINYIN": "xiǎo bǎ xì",
    "NGHĨA": "小花招，小手段。",
    "SẮP XẾP CÂU": "被识破了。 / 很快就 / 小把戏， / 他的那些",
    "ĐÁP ÁN": "他的那些小把戏，很快就被识破了。",
    "PHIÊN ÂM": "Tā de nàxiē xiǎo bǎ xì ， hěn kuài jiù bèi shí pò le 。"
  },
  {
    "STT": 32,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "为生， / 他靠 / 过得比较艰苦。 / 祖传的小把戏",
    "ĐÁP ÁN": "他靠祖传的小把戏为生，过得比较艰苦。",
    "PHIÊN ÂM": "Tā kào zǔ chuán de xiǎo bǎ xì wéishēng ， guò dé bǐjiào jiānkǔ 。"
  },
  {
    "STT": 33,
    "CHỮ": "X",
    "CỤM": "小辫子",
    "PINYIN": "xiǎo biàn zi",
    "NGHĨA": "比喻把柄。常与“抓”连用。",
    "SẮP XẾP CÂU": "好过。 / 不让他 / 小辫子， / 他们抓住他的",
    "ĐÁP ÁN": "他们抓住他的小辫子，不让他好过。",
    "PHIÊN ÂM": "Tāmen zhuā zhù tā de xiǎo biàn zi ， bù ràng tā hǎo guò 。"
  },
  {
    "STT": 34,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "什么都说， / 小心别人 / 抓你小辫子。 / 跟同事不要",
    "ĐÁP ÁN": "跟同事不要什么都说，小心别人抓你小辫子。",
    "PHIÊN ÂM": "Gēn tóngshì bú yào shénme dōu shuō, xiǎoxīn biérén zhuā nǐ xiǎo biàn zi."
  },
  {
    "STT": 35,
    "CHỮ": "X",
    "CỤM": "小插曲",
    "PINYIN": "xiǎo chā qǔ",
    "NGHĨA": "比喻连续进行的事情中插入小小的特殊情况。",
    "SẮP XẾP CÂU": "小插曲。 / 一点 / 发生了 / 这次旅行",
    "ĐÁP ÁN": "这次旅行发生了一点小插曲。",
    "PHIÊN ÂM": "Zhè cì lǚxíng fā shēng le yī diǎn xiǎo chā qǔ 。"
  },
  {
    "STT": 36,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "为了活跃课堂气氛， / 老师 / 有时 / 说几句幽默话。 / 来个小插曲，",
    "ĐÁP ÁN": "老师为了活跃课堂气氛，有时来个小插曲，说几句幽默话。",
    "PHIÊN ÂM": "Lǎo shī wèile huó yuè kè táng qì fēn ， yǒu shí lái gè xiǎo chā qǔ ， shuō jǐ jù yōu mò huà 。"
  },
  {
    "STT": 37,
    "CHỮ": "X",
    "CỤM": "小聪明",
    "PINYIN": "xiǎo cōnɡ ming",
    "NGHĨA": "在小事情上表现出来的聪明(多含贬义)。",
    "SẮP XẾP CÂU": "弄巧成拙。 / 结果 / 他耍小聪明，",
    "ĐÁP ÁN": "他耍小聪明，结果弄巧成拙。",
    "PHIÊN ÂM": "Tā shuǎ xiǎo cōng ming ， jié guǒ nòng qiǎo chéng zhuō 。"
  },
  {
    "STT": 38,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "面对真正的挑战， / 他虽然 / 常常显得 / 有点小聪明， / 手足无措。 / 但",
    "ĐÁP ÁN": "他虽然有点小聪明，但面对真正的挑战，常常显得手足无措。",
    "PHIÊN ÂM": "Tā suī rán yǒu diǎn xiǎo cōng ming ， dàn miàn duì zhēn zhèng de tiǎo zhàn ， cháng cháng xiǎnde shǒu zú wú cuò 。"
  },
  {
    "STT": 39,
    "CHỮ": "X",
    "CỤM": "小道消息",
    "PINYIN": "xiǎo dào xiāo xi",
    "NGHĨA": "指道听途说的非正式消息。",
    "SẮP XẾP CÂU": "是不是真的。 / 不知道 / 小道消息， / 我听说个",
    "ĐÁP ÁN": "我听说个小道消息，不知道是不是真的。",
    "PHIÊN ÂM": "Wǒ tīng shuō gè xiǎo dào xiāo xi ， bù zhī dào shì bù shì zhēnde 。"
  },
  {
    "STT": 40,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "不能全信。 / 半真半假， / 小道消息，",
    "ĐÁP ÁN": "小道消息，半真半假，不能全信。",
    "PHIÊN ÂM": "Xiǎo dào xiāo xi ， bàn zhēn bàn jiǎ ， bù néng quán xìn 。"
  },
  {
    "STT": 41,
    "CHỮ": "X",
    "CỤM": "小儿科",
    "PINYIN": "xiǎo ér kē",
    "NGHĨA": "本指医院中专门诊治儿童疾病的部门。比喻不重要的工作部门或事 情。",
    "SẮP XẾP CÂU": "很容易。 / 小儿科， / 这对他来说是",
    "ĐÁP ÁN": "这对他来说是小儿科，很容易。",
    "PHIÊN ÂM": "zhè duì tā láishuō shì xiǎoérkē ， hěn róngyì 。"
  },
  {
    "STT": 42,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "它的作用 / 是很大的， / 你 / 把工会 / 看成 / 小儿科 / 是不对的。 / 工会 / 是 / 代表广大职工利益的 / 群众组织，",
    "ĐÁP ÁN": "工会是代表广大职工利益的群众组织，它的作用是很大的，\r\n你把工会看成小儿科是不对的。",
    "PHIÊN ÂM": "gōnghuì shì dàibiǎo guǎngdàzhígōng lìyì de qúnzhòngzǔzhī ， tā de zuòyòng shì hěndà de ， \r\nnǐ bǎ gōnghuì kànchéng xiǎoérkē shì bù duì de 。"
  },
  {
    "STT": 43,
    "CHỮ": "X",
    "CỤM": "小金库",
    "PINYIN": "xiǎo jīn kù",
    "NGHĨA": "指国家机关、团体、企事业单位违反国家财经法规，弄虚作假，将应该 纳入账内核算的各种收入转移到账外，隐匿起来，使之变成小团体的“私产” 的那部分资金。",
    "SẮP XẾP CÂU": "小金库。 / 藏着 / 他们单位里",
    "ĐÁP ÁN": "他们单位里藏着小金库。",
    "PHIÊN ÂM": "tāmen dānwèi lǐ cáng zhe xiǎojīnkù 。"
  },
  {
    "STT": 44,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "严查国 / 有 / 企业的小金库， / 收获不小。 / 中央一直在",
    "ĐÁP ÁN": "中央一直在严查国有企业的小金库，收获不小。",
    "PHIÊN ÂM": "zhōngyāng yīzhí zài yánchá guóyǒuqǐyè de xiǎojīnkù ， shōuhuò bùxiǎo 。"
  },
  {
    "STT": 45,
    "CHỮ": "X",
    "CỤM": "小九九",
    "PINYIN": "xiǎo jiǔ jiu",
    "NGHĨA": "比喻心中的算计或打算。",
    "SẮP XẾP CÂU": "太多了。 / 小九九 / 他心里的",
    "ĐÁP ÁN": "他心里的小九九太多了。",
    "PHIÊN ÂM": "tā xīnli de xiǎojiǔjiǔ tàiduō le 。"
  },
  {
    "STT": 46,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "正打 / 不吭声， / 他 / 坐着 / 他的小九九呢。",
    "ĐÁP ÁN": "他坐着不吭声，正打他的小九九呢。",
    "PHIÊN ÂM": "tā zuò zhe bùkēngshēng ， zhèng dǎ tā de xiǎojiǔjiǔ ne 。"
  },
  {
    "STT": 47,
    "CHỮ": "X",
    "CỤM": "笑面虎",
    "PINYIN": "xiào miàn hǔ",
    "NGHĨA": "比喻面带笑容的坏人。",
    "SẮP XẾP CÂU": "内心 / 歹毒。 / 表面 / 和善， / 他是个 / 笑面虎，",
    "ĐÁP ÁN": "他是个笑面虎，表面和善，内心狠毒。",
    "PHIÊN ÂM": "tā shì gè xiàomiànhǔ ， biǎomiàn héshàn ， nèixīn hěndú 。"
  },
  {
    "STT": 48,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "你要 / 那个 / 也会伤人。 / 弄不好 / 小心 / “笑面虎”，",
    "ĐÁP ÁN": "你要小心那个“笑面虎”，弄不好也会伤人。",
    "PHIÊN ÂM": "nǐ yào xiǎoxīn nàgè “ xiàomiànhǔ ” ， nòngbùhǎo yě huì shāngrén 。"
  },
  {
    "STT": 49,
    "CHỮ": "X",
    "CỤM": "小算盘",
    "PINYIN": "xiǎo suàn pán",
    "NGHĨA": "比喻为个人或局部利益的打算。",
    "SẮP XẾP CÂU": "想 / 从中 / 获利。 / 他打着 / 小算盘，",
    "ĐÁP ÁN": "他打着小算盘，想从中获利。",
    "PHIÊN ÂM": "tā dǎzhe xiǎosuànpán ， xiǎng cóngzhōng huòlì 。"
  },
  {
    "STT": 50,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "会不会 / 平时一直 / 做了领导以后 / 小算盘， / 看他 / 不知 / 这么小家子气。 / 打",
    "ĐÁP ÁN": "看他平时一直打小算盘，不知道做了领导以后会不会还这么小家\r\n子气。",
    "PHIÊN ÂM": "kàn tā píngshí yīzhí dǎxiǎosuànpán ， bù zhīdào zuò le lǐngdǎo yǐhòu huì bùhuì huán zhème xiǎojiā \r\nziqì 。"
  },
  {
    "STT": 51,
    "CHỮ": "X",
    "CỤM": "小字辈",
    "PINYIN": "xiǎo zì bèi",
    "NGHĨA": "指团体中一些年纪较小、资历较浅的人员。",
    "SẮP XẾP CÂU": "说话 / 没啥 / 分量。 / 他在家族里是 / 小字辈，",
    "ĐÁP ÁN": "他在家族里是小字辈，说话没啥分量。",
    "PHIÊN ÂM": "tā zài jiāzú lǐ shì xiǎozìbèi ， shuōhuà méi shá fènliang 。"
  },
  {
    "STT": 52,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "少说多听 / 我们都是 / 总没错。 / 小字辈，",
    "ĐÁP ÁN": "我们都是小字辈，少说多听总没错。",
    "PHIÊN ÂM": "wǒmen dū shì xiǎozìbèi ， shǎoshuō duō tīng zǒng méicuò 。"
  },
  {
    "STT": 53,
    "CHỮ": "X",
    "CỤM": "心头肉",
    "PINYIN": "xīn tóu ròu",
    "NGHĨA": "比喻非常宠爱、难以割舍的人和事物。",
    "SẮP XẾP CÂU": "心头肉。 / 他的 / 孙子是",
    "ĐÁP ÁN": "孙子是他的心头肉。",
    "PHIÊN ÂM": "sūnzi shì tā de xīntóuròu 。"
  },
  {
    "STT": 54,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "子女都是 / 父母的 / 心头肉， / 但 / 疼爱只能 / 心里， / 可不能 / 百依百顺。",
    "ĐÁP ÁN": "子女都是父母的心头肉，但疼爱只能疼在心里，可不能百依百顺。",
    "PHIÊN ÂM": "zǐnǚ dū shì fùmǔ de xīntóuròu ， dàn téngài zhǐnéng téng zài xīnli ， kě bùnéng bǎiyībǎishùn 。"
  },
  {
    "STT": 55,
    "CHỮ": "X",
    "CỤM": "绣花枕头",
    "PINYIN": "xiù huā zhěn tou",
    "NGHĨA": "比喻徒有外表而无学识、无才能的人。",
    "SẮP XẾP CÂU": "中看 / 不中用。 / 他只是个 / 绣花枕头，",
    "ĐÁP ÁN": "他只是个绣花枕头，中看不中用。",
    "PHIÊN ÂM": "tā zhǐshì gè xiùhuāzhěntou ， zhòngkàn bùzhòngyòng 。"
  },
  {
    "STT": 56,
    "CHỮ": "X",
    "SẮP XẾP CÂU": "绣花枕头， / 单位里的博士 / 只是 / 没什么大用处。",
    "ĐÁP ÁN": "单位里的博士只是绣花枕头，没什么大用处。",
    "PHIÊN ÂM": "dānwèi lǐ de bóshì zhǐshì xiùhuāzhěntou ， méishénme dàyòngchù 。"
  },
  {
    "STT": 57,
    "CHỮ": "Y",
    "CỤM": "演独角戏",
    "PINYIN": "yǎn dú jiǎo xì",
    "NGHĨA": "一个人表演的戏，比喻没人帮忙。",
    "SẮP XẾP CÂU": "演独角戏。 / 在那里 / 他一个人",
    "ĐÁP ÁN": "他一个人在那里演独角戏。",
    "PHIÊN ÂM": "tā yīgè rén zài nàli yǎn dújiǎoxì 。"
  },
  {
    "STT": 58,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "我就只能 / 你走了， / 演独角戏了。",
    "ĐÁP ÁN": "你走了，我就只能演独角戏了。",
    "PHIÊN ÂM": "nǐ zǒu le ， wǒ jiù zhǐnéng yǎn dújiǎoxì le 。"
  },
  {
    "STT": 59,
    "CHỮ": "Y",
    "CỤM": "眼中钉",
    "PINYIN": "yǎn zhōnɡ dīnɡ",
    "NGHĨA": "比喻心中最讨厌、最憎恨的人。",
    "SẮP XẾP CÂU": "老板的 / 眼中钉。 / 成了 / 他 / 因 / 行为不端，",
    "ĐÁP ÁN": "他因行为不端，成了老板的眼中钉。",
    "PHIÊN ÂM": "tā yīn xíngwéibùduān ， chéng le lǎobǎn de yǎnzhōngdīng 。"
  },
  {
    "STT": 60,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "一心 / 成了 / 想拔掉。/ 他的 / 眼中钉，/ 小王",
    "ĐÁP ÁN": "小王成了他的眼中钉，一心想拔掉。",
    "PHIÊN ÂM": "xiǎowángchéng le tā de yǎnzhōngdīng ， yī xīnxiǎng bádiào 。"
  },
  {
    "STT": 61,
    "CHỮ": "Y",
    "CỤM": "摇钱树",
    "PINYIN": "yáo qián shù",
    "NGHĨA": "神话中的一种宝树，一摇晃就会有很多钱落下来。比喻借以获取钱 财的人或物。",
    "SẮP XẾP CÂU": "回报 / 丰厚。 / 真是 / 这项投资 / 个摇钱树，",
    "ĐÁP ÁN": "这项投资真是个摇钱树，回报丰厚。",
    "PHIÊN ÂM": "zhèxiàng tóuzī zhēnshi gè yáoqiánshù ， huíbào fēnghòu 。"
  },
  {
    "STT": 62,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "公司的 / 摇钱树。/ 新产品 / 成了 / 很热销，",
    "ĐÁP ÁN": "新产品很热销，成了公司的摇钱树。",
    "PHIÊN ÂM": "xīn chǎnpǐn hěn rèxiāo ， chéng le gōngsī de yáoqiánshù 。"
  },
  {
    "STT": 63,
    "CHỮ": "Y",
    "CỤM": "夜猫子",
    "PINYIN": "yè māo zi",
    "NGHĨA": "指特别喜欢熬夜的人。",
    "SẮP XẾP CÂU": "常常 / 睡觉。 / 我哥哥 / 凌晨才 / 是个 / 夜猫子，",
    "ĐÁP ÁN": "我哥哥是个夜猫子，常常凌晨才睡觉。",
    "PHIÊN ÂM": "wǒ gēge shì gè yèmāozi ， chángcháng língchén cái shuìjiào 。"
  },
  {
    "STT": 64,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "有名的 / “夜猫子”，/ 他 / 是 / 不到12点 / 不会睡觉。",
    "ĐÁP ÁN": "他是有名的“夜猫子”，不到12点不会睡觉。",
    "PHIÊN ÂM": "tā shì yǒumíng de “ yèmāozi ” ， bùdào yīèr diǎn bùhuì shuìjiào 。"
  },
  {
    "STT": 65,
    "CHỮ": "Y",
    "CỤM": "一把鼻涕一把眼泪",
    "PINYIN": "yī bǎ bí tì yī bǎ lèi",
    "NGHĨA": "伤心地哭。",
    "SẮP XẾP CÂU": "哭得 / 找不到家， / 一把鼻涕一把泪。 / 小女孩",
    "ĐÁP ÁN": "小女孩找不到家，哭得一把鼻涕一把泪。",
    "PHIÊN ÂM": "xiǎonǚhái zhǎo bùdào jiā ， kū dé yībǎ bítì yībǎ lèi 。"
  },
  {
    "STT": 66,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "结局 / 在那儿 / 我 / 并没有 / 可谁知 / 那么坏。/ 一把鼻涕一把眼泪，",
    "ĐÁP ÁN": "我在那儿一把鼻涕一把眼泪，可谁知结局并没有那么坏。",
    "PHIÊN ÂM": "wǒ zài nàr yībǎ bítì yībǎ yǎnlèi ， kě shéizhī jiéjú bìng méiyǒu nàme huài 。"
  },
  {
    "STT": 67,
    "CHỮ": "Y",
    "CỤM": "一把手",
    "PINYIN": "yī bǎ shǒu",
    "NGHĨA": "指非常能干的人。也说“一把好手”。单位或组织的主要负责人。指 带头人。",
    "SẮP XẾP CÂU": "他 / 重大。 / 责任 / 作为公司 / 一把手，",
    "ĐÁP ÁN": "作为公司一把手，他责任重大。",
    "PHIÊN ÂM": "zuòwéi gōngsī yībǎshǒu ， tā zérènzhòngdà 。"
  },
  {
    "STT": 68,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "处理问题时 / 我们单位的 / 一把手 / 很得人心。/ 公平合理，",
    "ĐÁP ÁN": "我们单位的一把手处理问题时公平合理，很得人心。",
    "PHIÊN ÂM": "wǒmen dānwèi de yībǎshǒu chǔlǐ wèntí shí gōngpínghélǐ ， hěn dérénxīn 。"
  },
  {
    "STT": 69,
    "CHỮ": "Y",
    "CỤM": "一百八十度",
    "PINYIN": "yī bǎi bā shí dù",
    "NGHĨA": "比喻与原来相反。",
    "SẮP XẾP CÂU": "大转变。 / 发生了一百八十度 / 他的态度 / 听了劝告后，",
    "ĐÁP ÁN": "听了劝告后，他的态度发生了一百八十度大转变。",
    "PHIÊN ÂM": "tīng le quàngào hòu ， tā de tàidu fāshēng le yībǎibāshídù dà zhuǎnbiàn 。"
  },
  {
    "STT": 70,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "让 / 大家都 / 她的态度 / 感到意外。/ 一百八十度转变，",
    "ĐÁP ÁN": "她的态度一百八十度转变，让大家都感到意外。",
    "PHIÊN ÂM": "tā de tàidu yībǎibāshídù zhuǎnbiàn ， ràng dàjiā dū gǎndào yìwài 。"
  },
  {
    "STT": 71,
    "CHỮ": "Y",
    "CỤM": "一边倒",
    "PINYIN": "yī biān dǎo",
    "NGHĨA": "朝一个方向倾斜。比喻人的立场、思想、情绪等都倾向一个方面。也 说“一面倒”。",
    "SẮP XẾP CÂU": "强队 / 获胜。 / 轻松 / 结果 / 几乎是 / 一边倒， / 这场比赛的",
    "ĐÁP ÁN": "这场比赛的结果几乎是一边倒，强队轻松获胜。",
    "PHIÊN ÂM": "zhèchǎng bǐsài de jiéguǒ jīhū shì yībiāndǎo ， qiángduì qīngsōng huòshèng 。"
  },
  {
    "STT": 72,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "选举时 / 都 / 由于 / 正直厚道，/ 群众 / 投了 / 他 / 一边倒，/ 作风正派，/ 他的票。\r\n",
    "ĐÁP ÁN": "由于他正直厚道，作风正派，选举时群众一边倒，都投了他的票。",
    "PHIÊN ÂM": "yóuyú tā zhèngzhí hòudao ， zuòfēngzhèngpài ， xuǎnjǔ shí qúnzhòng yībiāndǎo ， dū tóu le tā de piào 。"
  },
  {
    "STT": 73,
    "CHỮ": "Y",
    "CỤM": "一刀切",
    "PINYIN": "yī dāo qiē",
    "NGHĨA": "比喻用划一的办法处理情况或性质不同的事物。",
    "SẮP XẾP CÂU": "具体分析。 / 要 / 具体问题 / 不能 / 管理问题 / 一刀切，",
    "ĐÁP ÁN": "管理问题不能一刀切，要具体问题具体分析。",
    "PHIÊN ÂM": "guǎnlǐ wèntí bùnéng yīdāoqiē ， yào jùtǐ wèntí jùtǐfēnxī 。"
  },
  {
    "STT": 74,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "但要 / 工作上 / 协调一致。/ 不搞 / 一刀切，",
    "ĐÁP ÁN": "工作上不搞一刀切，但要协调一致。",
    "PHIÊN ÂM": "gōngzuò shàng bù gǎo yīdāoqiē ， dàn yào xiédiàoyīzhì 。"
  },
  {
    "STT": 75,
    "CHỮ": "Y",
    "CỤM": "一朵花",
    "PINYIN": "yī duǒ huā",
    "NGHĨA": "指人有魅力。",
    "SẮP XẾP CÂU": "有名的 / 在我们村 / 一朵花。 / 可是 / 她年轻时",
    "ĐÁP ÁN": "她年轻时在我们村可是有名的一朵花。",
    "PHIÊN ÂM": "tā niánqīng shí zài wǒmen cūn kěshì yǒumíng de yīduǒhuā 。"
  },
  {
    "STT": 76,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "但 / 她 / 人说 / 还是 / 姑娘 / 土得很。/ 十八一朵花，/ 跟小时候一样，\r\n",
    "ĐÁP ÁN": "人说姑娘十八一朵花，但她跟小时候一样，还是土得很。",
    "PHIÊN ÂM": "rén shuō gūniang shíbā yīduǒhuā ， dàn tā gēn xiǎoshíhou yīyàng ， háishi tǔde hěn 。"
  },
  {
    "STT": 77,
    "CHỮ": "Y",
    "CỤM": "一个鼻子出气",
    "PINYIN": "yī gè bí zi chū qì",
    "NGHĨA": "比喻勾结在一起，对某事采取同样的态度和主张。",
    "SẮP XẾP CÂU": "意见 / 一致。 / 总是一个鼻孔出气， / 总是 / 他们俩",
    "ĐÁP ÁN": "他们俩总是一个鼻孔出气，意见总是一致。",
    "PHIÊN ÂM": "tāmen liǎ zǒngshì yīgèbíkǒng chūqì ， yìjiàn zǒngshì yīzhì 。"
  },
  {
    "STT": 78,
    "CHỮ": "Y",
    "CỤM": "一个劲儿",
    "PINYIN": "yī gè jìnr",
    "NGHĨA": "表示不停地。",
    "SẮP XẾP CÂU": "希望能 / 完成任务。 / 按时 / 他 / 工作， / 一个劲儿地",
    "ĐÁP ÁN": "他一个劲儿地工作，希望能按时完成任务。",
    "PHIÊN ÂM": "tā yīgèjìnr dì gōngzuò ， xīwàng néng ànshí wánchéng rènwu 。"
  },
  {
    "STT": 79,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "希望能 / 他 / 按时 / 一个劲儿地 / 完成任务。/ 工作，\r\n",
    "ĐÁP ÁN": "现在房价一个劲儿地涨，怎么能买得起房子?",
    "PHIÊN ÂM": "xiànzài fángjià yīgèjìnr dìzhǎng ， zěnme néng mǎidéqǐ fángzi ?"
  },
  {
    "STT": 80,
    "CHỮ": "Y",
    "CỤM": "一根筋",
    "PINYIN": "yī gēn jīn",
    "NGHĨA": "指认死理，不妥协。",
    "SẮP XẾP CÂU": "很难改变。 / 认定的事情 / 就是 / 他这个人 / 一根筋，",
    "ĐÁP ÁN": "他这个人就是一根筋，认定的事情很难改变。",
    "PHIÊN ÂM": "tā zhège rén jiùshì yīgēn jīn ， rèndìng de shìqing hěnnán gǎibiàn 。"
  },
  {
    "STT": 81,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "认定的事情 / 就是 / 他这个人 / 很难 / 改变。/ 一根筋，\r\n",
    "ĐÁP ÁN": "大家都说，他是严格执法一根筋。",
    "PHIÊN ÂM": "dàjiā dū shuō ， tā shì yángézhífǎ yīgēn jīn 。"
  },
  {
    "STT": 82,
    "CHỮ": "Y",
    "CỤM": "一棍子打死",
    "PINYIN": "yī gùn zi dǎ sǐ",
    "NGHĨA": "不问明原因就把对方打死，完全否决。",
    "SẮP XẾP CÂU": "改正的机会。 / 要给他 / 就一棍子打死， / 我们不能 / 犯错 / 因为一个人",
    "ĐÁP ÁN": "我们不能因为一个人犯错就一棍子打死，要给他改正的机会。",
    "PHIÊN ÂM": "wǒmen bùnéng yīnwèi yīgè rén fàncuò jiù yīgùnzidǎsǐ ， yào gěi tā gǎizhèng de jīhuì 。"
  },
  {
    "STT": 83,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "要给 / 因为 / 我们 / 就 / 他 / 不能 / 改正的机会。/ 一个人犯错 / 一棍子打死，",
    "ĐÁP ÁN": "不要因为他曾经犯错就什么都错，我们不能把他一棍子打死。",
    "PHIÊN ÂM": "bùyào yīnwèi tā céngjīng fàncuò jiù shénme dū cuò ， wǒmen bùnéng bǎ tā yīgùnzidǎsǐ 。"
  },
  {
    "STT": 84,
    "CHỮ": "Y",
    "CỤM": "一锅粥",
    "PINYIN": "yī guō zhōu",
    "NGHĨA": "比喻非常混乱，一团糟。",
    "SẮP XẾP CÂU": "像一锅粥。 / 会议室里 / 讨论得 / 没有有效的组织，",
    "ĐÁP ÁN": "没有有效的组织，会议室里讨论得像一锅粥。",
    "PHIÊN ÂM": "méiyǒu yǒuxiào de zǔzhī ， huìyìshì lǐ tǎolùn dé xiàng yīguōzhōu 。"
  },
  {
    "STT": 85,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "会议室里 / 没有 / 讨论得像 / 有效的组织，/ 一锅粥。",
    "ĐÁP ÁN": "这个新来的会计，不熟悉业务，把公司账目搞成了一锅粥。",
    "PHIÊN ÂM": "zhège xīnlái de kuàijì ， bù shúxīyèwù ， bǎ gōngsī zhàngmù gǎochéng le yīguōzhōu 。"
  },
  {
    "STT": 86,
    "CHỮ": "Y",
    "CỤM": "一路货",
    "PINYIN": "yī lù huò",
    "NGHĨA": "同类或同等的货物。比喻同类的人或事物(含贬义)。也说“一路货 色”。",
    "SẮP XẾP CÂU": "我看是 / 都不太可靠。 / 一路货， / 这两个人",
    "ĐÁP ÁN": "这两个人我看是一路货，都不太可靠。",
    "PHIÊN ÂM": "zhè liǎnggè rén wǒ kàn shì yīlùhuò ， dū bù tài kěkào 。"
  },
  {
    "STT": 87,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "这两个人 / 我看是 / 一路货，/ 都不太可靠。\r\n",
    "ĐÁP ÁN": "他和小山是一路货，都不是什么好东西。",
    "PHIÊN ÂM": "tā hé xiǎoshān shì yīlùhuò ， dū bùshì shénme hǎo dōngxi 。"
  },
  {
    "STT": 88,
    "CHỮ": "Y",
    "CỤM": "一盘棋",
    "PINYIN": "yī pán qí",
    "NGHĨA": "比喻一个整体或全局。",
    "SẮP XẾP CÂU": "都需要 / 深思熟虑。 / 每一步 / 就像 / 整个项目 / 一盘棋，",
    "ĐÁP ÁN": "整个项目就像一盘棋，每一步都需要深思熟虑。",
    "PHIÊN ÂM": "zhěnggè xiàngmù jiù xiàng yīpánqí ， měi yībù dū xūyào shēnsīshúlǜ 。"
  },
  {
    "STT": 89,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "整个项目 / 就像 / 一盘棋，/ 每一步 / 都需要 / 深思熟虑。",
    "ĐÁP ÁN": "经济效益上去了，我们厂这盘棋才能活起来。",
    "PHIÊN ÂM": "jīngjìxiàoyì shàngqu le ， wǒmen chǎng zhèpán qí cáinéng huó qǐlai 。"
  },
  {
    "STT": 90,
    "CHỮ": "Y",
    "CỤM": "一条龙",
    "PINYIN": "yī tiáo lónɡ",
    "NGHĨA": "比喻生产程序或工作上的紧密联系和配合。",
    "SẮP XẾP CÂU": "一条龙服务。 / 到施工的 / 我们提供 / 从设计",
    "ĐÁP ÁN": "我们提供从设计到施工的一条龙服务。",
    "PHIÊN ÂM": "wǒmen tígōng cóng shèjì dào shīgōng de yītiáolóng fúwù 。"
  },
  {
    "STT": 91,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "我们 / 提供 / 从设计到施工的 / 一条龙服务。\r\n",
    "ĐÁP ÁN": "机动车税收将实行“一条龙”管理。",
    "PHIÊN ÂM": "jīdòngchē shuìshōu jiàng shíxíng “ yītiáolóng ” guǎnlǐ 。"
  },
  {
    "STT": 92,
    "CHỮ": "Y",
    "CỤM": "一条心",
    "PINYIN": "yī tiáo xīn",
    "NGHĨA": "携手共进的意思。",
    "SẮP XẾP CÂU": "克服不了的 / 困难。 / 就没有 / 只要大家 / 一条心，",
    "ĐÁP ÁN": "只要大家一条心，就没有克服不了的困难。",
    "PHIÊN ÂM": "zhǐyào dàjiā yītiáoxīn ， jiù méiyǒu kèfú buliǎo de kùnnán 。"
  },
  {
    "STT": 93,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "只要 / 大家 / 一条心，/ 就 / 没有 / 克服不了的困难。",
    "ĐÁP ÁN": "只要大家一条心，我想我们能攻克这个难关的。",
    "PHIÊN ÂM": "zhǐyào dàjiā yītiáoxīn ， wǒ xiǎng wǒmen néng gōngkè zhège nánguān de 。"
  },
  {
    "STT": 94,
    "CHỮ": "Y",
    "CỤM": "一头雾水",
    "PINYIN": "yī tóu wù shuǐ",
    "NGHĨA": "指糊涂不清。",
    "SẮP XẾP CÂU": "我还是 / 解释， / 一头雾水。 / 听了他的",
    "ĐÁP ÁN": "听了他的解释，我还是一头雾水。",
    "PHIÊN ÂM": "tīng le tā de jiěshì ， wǒ háishi yītóuwùshuǐ 。"
  },
  {
    "STT": 95,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "听了 / 他的解释，/ 我还是 / 一头雾水。",
    "ĐÁP ÁN": "还没起床，就被骂了一通，真是一头雾水。",
    "PHIÊN ÂM": "huán méi qǐchuáng ， jiù bèi mà le yītōng ， zhēnshi yītóuwùshuǐ 。"
  },
  {
    "STT": 96,
    "CHỮ": "Y",
    "CỤM": "一团乱麻",
    "PINYIN": "yī tuán luàn má",
    "NGHĨA": "比喻心绪或事物紊乱。",
    "SẮP XẾP CÂU": "现在 / 一团乱麻。 / 简直是 / 这个问题 / 太复杂了，",
    "ĐÁP ÁN": "这个问题太复杂了，现在简直是一团乱麻。",
    "PHIÊN ÂM": "zhège wèntí tài fùzá le ， xiànzài jiǎnzhí shì yītuánluànmá 。"
  },
  {
    "STT": 97,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "这个问题 / 太复杂了，/ 现在 / 简直是 / 一团乱麻。",
    "ĐÁP ÁN": "事情本来可以顺利解决，这一下让你搅成了一团乱麻。",
    "PHIÊN ÂM": "shìqing běnlái kěyǐ shùnlì jiějué ， zhèyīxià ràng nǐ jiǎochéng le yītuánluànmá 。"
  },
  {
    "STT": 98,
    "CHỮ": "Y",
    "CỤM": "一团糟",
    "PINYIN": "yī tuán zāo",
    "NGHĨA": "非常混乱、不整齐、肮脏。",
    "SẮP XẾP CÂU": "搞得 / 一团糟。 / 活动现场 / 由于准备不足，",
    "ĐÁP ÁN": "由于准备不足，活动现场搞得一团糟。",
    "PHIÊN ÂM": "yóuyú zhǔnbèi bùzú ， huódòng xiànchǎng gǎo dé yītuánzāo 。"
  },
  {
    "STT": 99,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "由于 / 准备不足，/ 活动现场 / 搞得 / 一团糟。\r\n",
    "ĐÁP ÁN": "学校网站简直是一团糟，太难登录上去了!",
    "PHIÊN ÂM": "xuéxiào wǎngzhàn jiǎnzhí shì yītuánzāo ， tàinán dēnglù shàngqu le !"
  },
  {
    "STT": 100,
    "CHỮ": "Y",
    "CỤM": "一窝蜂",
    "PINYIN": "yī wō fēnɡ",
    "NGHĨA": "比喻许多人乱哄哄地同时说话或行动。也比喻混乱的局面或烦乱的 心情。",
    "SẮP XẾP CÂU": "涌进了商店。 / 顾客们 / 一窝蜂地 / 听到打折的消息，",
    "ĐÁP ÁN": "听到打折的消息，顾客们一窝蜂地涌进了商店。",
    "PHIÊN ÂM": "tīngdào dǎzhé de xiāoxi ， gùkè men yīwōfēng dì yǒngjìn le shāngdiàn 。"
  },
  {
    "STT": 101,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "同学们 / 涌出了教室。 / 一窝蜂地 / 下课了，",
    "ĐÁP ÁN": "下课了，同学们一窝蜂地涌出了教室。",
    "PHIÊN ÂM": "xiàkè le ， tóngxué men yīwōfēng dì yǒngchū le jiàoshì 。"
  },
  {
    "STT": 102,
    "CHỮ": "Y",
    "CỤM": "一言堂",
    "PINYIN": "yī yán tánɡ",
    "NGHĨA": "比喻领导缺乏民主作风，一个人说了算。",
    "SẮP XẾP CÂU": "爸爸 / 简直是一言堂。 / 说了算， / 在这个家里，",
    "ĐÁP ÁN": "在这个家里，爸爸说了算，简直是一言堂。",
    "PHIÊN ÂM": "zài zhège jiālǐ ， bàba shuōlesuàn ， jiǎnzhí shì yīyántáng 。"
  },
  {
    "STT": 103,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "员工 / 完全是 / 没有 / 公司里 / 只有 / 发言权。/ 一个 / 一言堂，/ 老板 / 说了算，\r\n",
    "ĐÁP ÁN": "公司里只有老板说了算，完全是一个一言堂，员工没有发言权。",
    "PHIÊN ÂM": "gōngsī lǐ zhǐyǒu lǎobǎn shuōlesuàn ， wánquán shì yīgè yīyántáng ， yuángōng méiyǒu fāyánquán 。"
  },
  {
    "STT": 104,
    "CHỮ": "Y",
    "CỤM": "一阵风",
    "PINYIN": "yī zhèn fēnɡ",
    "NGHĨA": "比喻行动时间短，不能持久。",
    "SẮP XẾP CÂU": "缺乏 / 持久性。 / 他做事 / 总是一阵风，",
    "ĐÁP ÁN": "他做事总是一阵风，缺乏持久性。",
    "PHIÊN ÂM": "tā zuòshì zǒngshì yīzhènfēng ， quēfá chíjiǔxìng 。"
  },
  {
    "STT": 105,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "又想学画画了。/一阵风，/他/都是/今天/ 想学钢琴，/学什么/ 明天/",
    "ĐÁP ÁN": "他学什么都是一阵风，今天想学钢琴，明天又想学画画了。",
    "PHIÊN ÂM": "tāxué shénme dū shì yīzhènfēng ， jīntiān xiǎng xué gāngqín ， míngtiān yòu xiǎngxué huàhuà le 。"
  },
  {
    "STT": 106,
    "CHỮ": "Y",
    "CỤM": "硬骨头",
    "PINYIN": "yìng gǔ tou",
    "NGHĨA": "比喻坚强不屈的人或气概。也比喻艰巨的任务。",
    "SẮP XẾP CÂU": "也吓不倒他。 / 再大的困难 / 他是个硬骨头，",
    "ĐÁP ÁN": "他是个硬骨头，再大的困难也吓不倒他。",
    "PHIÊN ÂM": "tā shì gè yìnggǔtou ， zài dà de kùnnán yě xiàbùdǎo tā 。"
  },
  {
    "STT": 107,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "从他嘴里 / 他是个 / 什么消息的。/ 搞不到 / 硬骨头，\r\n",
    "ĐÁP ÁN": "他是个硬骨头，从他嘴里搞不到什么消息的。",
    "PHIÊN ÂM": "tā shì gè yìnggǔtou ， cóng tā zuǐlǐ gǎobùdào shénme xiāoxi de 。"
  },
  {
    "STT": 108,
    "CHỮ": "Y",
    "CỤM": "硬着头皮",
    "PINYIN": "yìng zhe tóu pí",
    "NGHĨA": "比喻勉强去做不愿做的事情。",
    "SẮP XẾP CÂU": "硬着头皮 / 接受了。 / 他还是 / 虽然 / 任务艰巨，",
    "ĐÁP ÁN": "虽然任务艰巨，他还是硬着头皮接受了。",
    "PHIÊN ÂM": "suīrán rènwùjiānjù ， tā háishi yìngzhetóupí jiēshòu le 。"
  },
  {
    "STT": 109,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "但需要 / 认为 / 他们 / 他 / 只好 / 政府部门 / 硬着头皮去了。/ 盖章，/ 很讨厌 / 当官的，/ 很官僚，",
    "ĐÁP ÁN": "他很讨厌当官的，认为他们很官僚，但需要政府部门盖章，只好硬着头皮去了。",
    "PHIÊN ÂM": "tā hěn tǎoyàn dāngguān de ， rènwéi tāmen hěn guānliáo ， dàn xūyào zhèngfǔbùmén gàizhāng ， zhǐhǎo yìngzhetóupí qù le 。"
  },
  {
    "STT": 110,
    "CHỮ": "Y",
    "CỤM": "应声虫",
    "PINYIN": "yìnɡ shēnɡ chónɡ",
    "NGHĨA": "比喻随声附和的人。",
    "SẮP XẾP CÂU": "只是个 / 主见， / 应声虫。 / 他没有 / 自己的",
    "ĐÁP ÁN": "他没有自己的主见，只是个应声虫。",
    "PHIÊN ÂM": "tā méiyǒu zìjǐ de zhǔjiàn ， zhǐshì gè yīngshēngchóng 。"
  },
  {
    "STT": 111,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "很没劲。/ 一个 / 你 / 就是 / 应声虫，\r\n",
    "ĐÁP ÁN": "你就是一个应声虫，很没劲。",
    "PHIÊN ÂM": "nǐ jiùshì yīgè yīngshēngchóng ， hěn méijìn 。"
  },
  {
    "STT": 112,
    "CHỮ": "Y",
    "CỤM": "有板有眼",
    "PINYIN": "yǒu bǎn yǒu yǎn",
    "NGHĨA": "比喻言语、行为有条理。板眼，指民族音乐和戏曲中的节拍，每小 节中最强的拍子叫板，其余的拍子叫眼。",
    "SẮP XẾP CÂU": "非常 / 吸引人。 / 有板有眼， / 他讲起故事来",
    "ĐÁP ÁN": "他讲起故事来有板有眼，非常吸引人。",
    "PHIÊN ÂM": "tā jiǎng qǐ gùshi lái yǒubǎnyǒuyǎn ， fēicháng xīyǐn rén 。"
  },
  {
    "STT": 113,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "领导 / 做事 / 她这个做秘书的，/ 很放心。/ 有板有眼，\r\n",
    "ĐÁP ÁN": "她这个做秘书的，做事有板有眼，领导很放心。",
    "PHIÊN ÂM": "tā zhège zuò mìshū de ， zuòshì yǒubǎnyǒuyǎn ， lǐngdǎo hěn fàngxīn 。"
  },
  {
    "STT": 114,
    "CHỮ": "Y",
    "CỤM": "有奔头",
    "PINYIN": "yǒu bèn tou",
    "NGHĨA": "指有前途，有希望。",
    "SẮP XẾP CÂU": "就有奔头。 / 未来的日子 / 只要 / 努力工作，",
    "ĐÁP ÁN": "只要努力工作，未来的日子就有奔头。",
    "PHIÊN ÂM": "zhǐyào nǔlì gōngzuò ， wèilái de rìzi jiù yǒu bèntou 。"
  },
  {
    "STT": 115,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "老百姓 / 生活 / 中国 / 感到 / 实行 / 很有奔头。/ 改革开放政策以后，\r\n",
    "ĐÁP ÁN": "中国实行改革开放政策以后，老百姓感到生活很有奔头。",
    "PHIÊN ÂM": "zhōngguó shíxíng gǎigé kāifàngzhèngcè yǐhòu ， lǎobǎixìng gǎndào shēnghuó hěn yǒu bèntou 。"
  },
  {
    "STT": 116,
    "CHỮ": "Y",
    "CỤM": "有鼻子有眼",
    "PINYIN": "yǒu bí zi yǒu yǎn",
    "NGHĨA": "比喻述说某事具体，活灵活现，仿佛真有其事。",
    "SẮP XẾP CÂU": "好像 / 真的一样。 / 说得 / 有鼻子有眼， / 他把那件小事",
    "ĐÁP ÁN": "他把那件小事说得有鼻子有眼，好像真的一样。",
    "PHIÊN ÂM": "tā bǎ nàjiàn xiǎoshì shuō dé yǒubíziyǒuyǎn ， hǎoxiàng zhēnde yīyàng 。"
  },
  {
    "STT": 117,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "我看 / 说得 / 他是在 / 他说 / 有鼻子有眼的，/ 自己吓自己。/ 他昨天 / 撞见鬼了，",
    "ĐÁP ÁN": "他说他昨天撞见鬼了，说得有鼻子有眼的，我看他是在自己\r\n吓自己。",
    "PHIÊN ÂM": "tā shuō tā zuótiān zhuàngjiàn guǐ le ， shuō dé yǒubíziyǒuyǎn de ， wǒ kàn tā shì zài zìjǐ \r\nxià zìjǐ 。"
  },
  {
    "STT": 118,
    "CHỮ": "Y",
    "CỤM": "有分寸",
    "PINYIN": "yǒu fēn cùn",
    "NGHĨA": "比喻说话或做事能掌握适当的限度。",
    "SẮP XẾP CÂU": "从不 / 得罪人。 / 都很有分寸， / 他说话做事",
    "ĐÁP ÁN": "他说话做事都很有分寸，从不得罪人。",
    "PHIÊN ÂM": "tā shuōhuà zuòshì dū hěn yǒufēncùn ， cóngbù dézuìrén 。"
  },
  {
    "STT": 119,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "本意是为他好， / 批评的 / 但 / 否则达不到理想的效果。 / 要掌握分寸，",
    "ĐÁP ÁN": "批评的本意是为他好，但要掌握分寸，否则达不到理想的效果。",
    "PHIÊN ÂM": "pīpíng de běnyì shì wéi tā hǎo ， dàn yào zhǎngwòfēncùn ， fǒuzé dá bùdào lǐxiǎng de xiàoguǒ 。"
  },
  {
    "STT": 120,
    "CHỮ": "Y",
    "CỤM": "有分量",
    "PINYIN": "yǒu fèn liànɡ",
    "NGHĨA": "比喻某种事物具有重要的意义或价值。",
    "SẮP XẾP CÂU": "一位 / 人物。 / 有分量的 / 他在学术界是",
    "ĐÁP ÁN": "他在学术界是一位有分量的人物。",
    "PHIÊN ÂM": "tā zài xuéshùjiè shì yīwèi yǒu fènliang de rénwù 。"
  },
  {
    "STT": 121,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "职工 / 越来越有分量。 / 在单位民主大会上， / 说话",
    "ĐÁP ÁN": "在单位民主大会上，职工说话越来越有分量。",
    "PHIÊN ÂM": "zài dānwèi mínzhǔ dàhuì shàng ， zhígōng shuōhuà yuèláiyuè yǒu fènliang 。"
  },
  {
    "STT": 122,
    "CHỮ": "Y",
    "CỤM": "有杆秤",
    "PINYIN": "yǒu ɡǎn chènɡ",
    "NGHĨA": "比喻有评判是非好坏的标准。",
    "SẮP XẾP CÂU": "知道 / 谁好谁坏。 / 老百姓心里都 / 有杆秤，",
    "ĐÁP ÁN": "老百姓心里都有杆秤，知道谁好谁坏。",
    "PHIÊN ÂM": "lǎobǎixìng xīnli dū yǒu gǎnchèng ， zhīdào shéi hǎo shéi huài 。"
  },
  {
    "STT": 123,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "大家 / 心里有杆秤。/ 这个人 / 人人 / 工作做得如何，",
    "ĐÁP ÁN": "这个人工作做得如何，大家人人心里有杆秤。",
    "PHIÊN ÂM": "zhège rén gōngzuò zuò dé rúhé ， dàjiā rénrén xīnli yǒu gǎnchèng 。"
  },
  {
    "STT": 124,
    "CHỮ": "Y",
    "CỤM": "有瓜葛",
    "PINYIN": "yǒu ɡuā gé",
    "NGHĨA": "比喻有互相牵连的关系。",
    "SẮP XẾP CÂU": "一点 / 都没有。 / 瓜葛 / 这件事跟他",
    "ĐÁP ÁN": "这件事跟他一点瓜葛都没有。",
    "PHIÊN ÂM": "zhèjiàn shì gēn tā yīdiǎn guāgé dū méiyǒu 。"
  },
  {
    "STT": 125,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "最好 / 别再 / 既然 / 跟她 / 已经 / 有什么瓜葛。/ 分了手，\r\n",
    "ĐÁP ÁN": "既然已经分了手，最好跟她别再有什么瓜葛。",
    "PHIÊN ÂM": "jìrán yǐjīng fēn le shǒu ， zuìhǎo gēn tā bié zàiyǒu shénme guāgé 。"
  },
  {
    "STT": 126,
    "CHỮ": "Y",
    "CỤM": "有好戏看",
    "PINYIN": "yǒu hǎo xì kàn",
    "NGHĨA": "也说“有好戏”。指事情越来越复杂，矛盾越来越尖锐或角逐越来 越激烈。",
    "SẮP XẾP CÂU": "就有 / 你好看的！ / 等会儿 / 你再 / 这样捣乱，",
    "ĐÁP ÁN": "你再这样捣乱，等会儿就有你好看的！",
    "PHIÊN ÂM": "nǐ zài zhèyàng dǎoluàn ， děnghuìr jiù yǒu nǐ hǎokàn de ！"
  },
  {
    "STT": 127,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "过不了多久，/ 群众 / 他 / 咱们这儿 / 就得 / 把他 / 当厂长，/ 轰下台。/ 就有好戏看了，",
    "ĐÁP ÁN": "他当厂长，咱们这儿就有好戏看了，过不了多久，群众就得把他轰下台。",
    "PHIÊN ÂM": "tā dāng chǎngzhǎng ， zánmen zhèr jiù yǒu hǎoxì kàn le ， guò buliǎo duōjiǔ ， qúnzhòng jiù dé bǎ tā hōngxiàtái 。"
  },
  {
    "STT": 128,
    "CHỮ": "Y",
    "CỤM": "有来头",
    "PINYIN": "yǒu lái tou",
    "NGHĨA": "有来历(多指人的资历或背景)。",
    "SẮP XẾP CÂU": "一定 / 有来头。 / 就知道 / 不简单， / 这个人 / 看他的气派，",
    "ĐÁP ÁN": "看他的气派，就知道这个人不简单，一定有来头。",
    "PHIÊN ÂM": "kàn tā de qìpài ， jiù zhīdào zhège rén bù jiǎndān ， yīdìng yǒu láitóu 。"
  },
  {
    "STT": 129,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "犯了法，/ 不管 / 就应该 / 来头有多大，/ 依法得到惩处。",
    "ĐÁP ÁN": "不管来头有多大，犯了法，就应该依法得到惩处。",
    "PHIÊN ÂM": "bùguǎn láitóu yǒu duō dà ， fàn le fǎ ， jiù yīnggāi yīfǎ dédào chéngchǔ 。"
  },
  {
    "STT": 130,
    "CHỮ": "Y",
    "CỤM": "有棱角",
    "PINYIN": "yǒu lénɡ jiǎo",
    "NGHĨA": "比喻敢说敢做的锐气。",
    "SẮP XẾP CÂU": "不要 / 随波逐流。 / 应该 / 自己的棱角， / 保持 / 年轻人",
    "ĐÁP ÁN": "年轻人应该保持自己的棱角，不要随波逐流。",
    "PHIÊN ÂM": "niánqīngrén yīnggāi bǎochí zìjǐ de léngjiǎo ， bùyào suíbōzhúliú 。"
  },
  {
    "STT": 131,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "还是 / 与同事相处，/ 圆滑一点儿更好? / 是有棱角好呢，\r\n",
    "ĐÁP ÁN": "与同事相处，是有棱角好呢，还是圆滑一点儿更好?",
    "PHIÊN ÂM": "yǔ tóngshì xiāngchǔ ， shì yǒu léngjiǎo hǎo ne ， háishi yuánhuá yīdiǎnr gēnghǎo ?"
  },
  {
    "STT": 132,
    "CHỮ": "Y",
    "CỤM": "有两把刷子",
    "PINYIN": "yǒu liǎnɡ bǎ shuā zi",
    "NGHĨA": "也说“有几把刷子”、“有两手”、“有两下子”。比喻有一些本领、 本事、技能。",
    "SẮP XẾP CÂU": "他可 / 真是有 / 两把刷子。 / 别小看他，",
    "ĐÁP ÁN": "别小看他，他可真是有两把刷子。",
    "PHIÊN ÂM": "bié xiǎokàn tā ， tā kě zhēnshi yǒu liǎngbǎshuāzi 。"
  },
  {
    "STT": 133,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "有两把刷子。/ 他在 / 环境治理工作方面\r\n",
    "ĐÁP ÁN": "他在环境治理工作方面有两把刷子。",
    "PHIÊN ÂM": "tā zài huánjìngzhìlǐ gōngzuò fāngmiàn yǒu liǎngbǎshuāzi 。"
  },
  {
    "STT": 134,
    "CHỮ": "Y",
    "CỤM": "有两下子",
    "PINYIN": "yǒu liǎnɡ xià zi",
    "NGHĨA": "有些本事。",
    "SẮP XẾP CÂU": "还真 / 有两下子。 / 没想到 / 他看起来文弱，",
    "ĐÁP ÁN": "他看起来文弱，没想到还真有两下子。",
    "PHIÊN ÂM": "tā kànqǐlai wénruò ， méixiǎngdào huán zhēn yǒuliǎngxiàzi 。"
  },
  {
    "STT": 135,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "居委会 / 确实 / 老李 / 有两下子。/ 在处理邻里矛盾方面，\r\n",
    "ĐÁP ÁN": "在处理邻里矛盾方面，居委会老李确实有两下子。",
    "PHIÊN ÂM": "zài chǔlǐ línlǐ máodùn fāngmiàn ， jūwěihuì lǎolǐ quèshí yǒuliǎngxiàzi 。"
  },
  {
    "STT": 136,
    "CHỮ": "Y",
    "CỤM": "有眉目",
    "PINYIN": "yǒu méi mù",
    "NGHĨA": "比喻事情有了头绪。",
    "SẮP XẾP CÂU": "终于 / 有了些眉目。 / 这个案子 / 经过一番调查，",
    "ĐÁP ÁN": "经过一番调查，这个案子终于有了些眉目。",
    "PHIÊN ÂM": "jīngguò yīfān diàochá ， zhège ànzi zhōngyú yǒu le xiē méimu 。"
  },
  {
    "STT": 137,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "我们 / 确定了赞助商之后，/ 已经 / 就可以 / 找赞助的工作 / 大刀阔斧地干了。/ 有眉目了，",
    "ĐÁP ÁN": "找赞助的工作已经有眉目了，确定了赞助商之后，我们\r\n就可以大刀阔斧地干了。",
    "PHIÊN ÂM": "zhǎo zànzhù de gōngzuò yǐjīng yǒuméimù le ， quèdìng le zànzhùshāng zhīhòu ， wǒmen \r\njiù kěyǐ dàdāokuòfǔ dìgān le 。"
  },
  {
    "STT": 138,
    "CHỮ": "Y",
    "CỤM": "有门道",
    "PINYIN": "yǒu mén dào",
    "NGHĨA": "比喻做事懂得诀窍，有办法，也说有门路。",
    "SẮP XẾP CÂU": "认识 / 不少 / 关键人物。 / 他在这方面 / 很有门道，",
    "ĐÁP ÁN": "他在这方面很有门道，认识不少关键人物。",
    "PHIÊN ÂM": "tā zài zhèfāngmiàn hěn yǒuméndào ， rènshi bùshǎo guānjiànrénwù 。"
  },
  {
    "STT": 139,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "不是 / 修理计算机 / 每个人 / 都会的。/ 是要 / 有点儿门道的，",
    "ĐÁP ÁN": "修理计算机是要有点儿门道的，不是每个人都会的。",
    "PHIÊN ÂM": "xiūlǐ jìsuànjī shì yào yǒudiǎnr méndao de ， bùshì měige rén dū huì de 。"
  },
  {
    "STT": 140,
    "CHỮ": "Y",
    "CỤM": "有苗头",
    "PINYIN": "yǒu miáo tou",
    "NGHĨA": "比喻有略微显露出来的某种趋势或情况。",
    "SẮP XẾP CÂU": "就被他 / 发现了。 / 事情刚 / 有点苗头，",
    "ĐÁP ÁN": "事情刚有点苗头，就被他发现了。",
    "PHIÊN ÂM": "shìqing gāng yǒudiǎn miáotou ， jiù bèi tā fāxiàn le 。"
  },
  {
    "STT": 141,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "让我觉得 / 这可怎么办呢? / 他有 / 孩子最近的表现，/ 早恋的苗头，\r\n",
    "ĐÁP ÁN": "孩子最近的表现，让我觉得他有早恋的苗头，这可怎么办呢?",
    "PHIÊN ÂM": "háizi zuìjìn de biǎoxiàn ， ràng wǒ juéde tā yǒu zǎoliàn de miáotou ， zhè kě zěnmebàn ne ?"
  },
  {
    "STT": 142,
    "CHỮ": "Y",
    "CỤM": "有谱儿",
    "PINYIN": "yǒu pǔr",
    "NGHĨA": "指有大致的标准、打算或有把握。",
    "SẮP XẾP CÂU": "到底 / 啊？ / 有谱儿没谱儿 / 你做事",
    "ĐÁP ÁN": "你做事到底有谱儿没谱儿啊？",
    "PHIÊN ÂM": "nǐ zuòshì dàodǐ yǒu pǔr méipǔr a ？"
  },
  {
    "STT": 143,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "我心里 / 能成功吗? / 可是 / 这件事 / 一点儿谱儿 / 都没有。\r\n",
    "ĐÁP ÁN": "这件事能成功吗? 我心里可是一点儿谱儿都没有。",
    "PHIÊN ÂM": "zhèjiàn shìnéng chénggōng ma ? wǒ xīnli kěshì yīdiǎnr pǔr dū méiyǒu 。"
  },
  {
    "STT": 144,
    "CHỮ": "Y",
    "CỤM": "有起色",
    "PINYIN": "yǒu qǐ sè",
    "NGHĨA": "指开始好转(多指涣散的工作或严重的疾病)。",
    "SẮP XẾP CÂU": "他的病情 / 有了起色。 / 终于 / 经过一段时间的治疗，",
    "ĐÁP ÁN": "经过一段时间的治疗，他的病情终于有了起色。",
    "PHIÊN ÂM": "jīngguò yīduànshíjiān de zhìliáo ， tā de bìngqíng zhōngyú yǒu le qǐsè 。"
  },
  {
    "STT": 145,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "这两天 / 他的病 / 总算 / 通过治疗，/ 有了一点起色。/ 得到了控制，",
    "ĐÁP ÁN": "通过治疗，他的病得到了控制，这两天总算有了一点起色。",
    "PHIÊN ÂM": "tōngguò zhìliáo ， tā de bìng dédào le kòngzhì ， zhè liǎngtiān zǒngsuàn yǒu le yīdiǎn qǐsè 。"
  },
  {
    "STT": 146,
    "CHỮ": "Y",
    "CỤM": "有人味儿",
    "PINYIN": "yǒu rén wèir",
    "NGHĨA": "具有一个人起码应具有的品质。",
    "SẮP XẾP CÂU": "但处处 / 人味儿。 / 透着 / 这家小店虽然简陋，",
    "ĐÁP ÁN": "这家小店虽然简陋，但处处透着人味儿。",
    "PHIÊN ÂM": "zhèjiā xiǎodiàn suīrán jiǎnlòu ， dàn chùchù tòuzhe rénwèir 。"
  },
  {
    "STT": 147,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "但 / 还算 / 他虽然坏，/ 很孝顺，/ 有点儿人味儿。/ 对自己的父母",
    "ĐÁP ÁN": "他虽然坏，但对自己的父母很孝顺，还算有点儿人味儿。",
    "PHIÊN ÂM": "tā suīrán huài ， dàn duì zìjǐ de fùmǔ hěn xiàoshùn ， huán suàn yǒudiǎnr rénwèir 。"
  },
  {
    "STT": 148,
    "CHỮ": "Y",
    "CỤM": "有色眼镜",
    "PINYIN": "yǒu sè yǎn jìnɡ",
    "NGHĨA": "比喻具有个人主观色彩的眼光。",
    "SẮP XẾP CÂU": "去看人。 / 戴着 / 我们不应该 / 有色眼镜",
    "ĐÁP ÁN": "我们不应该戴着有色眼镜去看人。",
    "PHIÊN ÂM": "wǒmen bù yīnggāi dàizhe yǒusèyǎnjìng qù kàn rén 。"
  },
  {
    "STT": 149,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "你 / 不可能 / 就 / 评价一个人。/ 戴着有色眼镜看人，/ 公正、公平地\r\n",
    "ĐÁP ÁN": "戴着有色眼镜看人，你就不可能公正、公平地评价一个人。",
    "PHIÊN ÂM": "dàizhe yǒusèyǎnjìng kànrén ， nǐ jiù bù kěnéng gōngzhèng gōngpíng dì píngjià yīgè rén 。"
  },
  {
    "STT": 150,
    "CHỮ": "Y",
    "CỤM": "有水分",
    "PINYIN": "yǒu shuǐ fèn",
    "NGHĨA": "比喻有虚假或无价值的成分。",
    "SẮP XẾP CÂU": "不太可信。 / 恐怕有水分， / 这份报告里的数据",
    "ĐÁP ÁN": "这份报告里的数据恐怕有水分，不太可信。",
    "PHIÊN ÂM": "zhèfèn bàogào lǐ de shùjù kǒngpà yǒu shuǐfèn ， bùtài kěxìn 。"
  },
  {
    "STT": 151,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "你 / 有太多水分，/ 不可全信。/ 他说的话",
    "ĐÁP ÁN": "他说的话有太多水分，你不可全信。",
    "PHIÊN ÂM": "tā shuō dehuà yǒutàiduō shuǐfèn ， nǐ bùkě quán xìn 。"
  },
  {
    "STT": 152,
    "CHỮ": "Y",
    "CỤM": "有头有脸",
    "PINYIN": "yǒu tóu yǒu liǎn",
    "NGHĨA": "比喻有身份，有声望。",
    "SẮP XẾP CÂU": "有头有脸的 / 人物。 / 他在当地是个",
    "ĐÁP ÁN": "他在当地是个有头有脸的人物。",
    "PHIÊN ÂM": "tā zài dāngdì shì gè yǒutóuyǒuliǎn de rénwù 。"
  },
  {
    "STT": 153,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "也算是 / 在我们这个小地方，/ 一个大学毕业生，/ 有头有脸的人了。\r\n",
    "ĐÁP ÁN": "一个大学毕业生，在我们这个小地方，也算是有头有脸的人了。",
    "PHIÊN ÂM": "yīgè dàxué bìyèshēng ， zài wǒmen zhège xiǎo dìfāng ， yě suànshì yǒutóuyǒuliǎn de rén le 。"
  },
  {
    "STT": 154,
    "CHỮ": "Y",
    "CỤM": "有文章",
    "PINYIN": "yǒu wén zhānɡ",
    "NGHĨA": "比喻有暗含着的意思。",
    "SẮP XẾP CÂU": "我看 / 肯定有文章。 / 这里面 / 他今天说话 / 吞吞吐吐的，",
    "ĐÁP ÁN": "他今天说话吞吞吐吐的，我看这里面肯定有文章。",
    "PHIÊN ÂM": "tā jīntiān shuōhuà tūntūntǔtǔ de ， wǒ kàn zhè lǐmiàn kěndìng yǒu wénzhāng 。"
  },
  {
    "STT": 155,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "肯定 / 他 / 有文章。/ 一反常态，\r\n",
    "ĐÁP ÁN": "他一反常态，肯定有文章。",
    "PHIÊN ÂM": "tā yīfǎnchángtài ， kěndìng yǒu wénzhāng 。"
  },
  {
    "STT": 156,
    "CHỮ": "Y",
    "CỤM": "有眼光",
    "PINYIN": "yǒu yǎn ɡuānɡ",
    "NGHĨA": "指善于观察事物，看得准，看得远。",
    "SẮP XẾP CÂU": "真是 / 有眼光！ / 你选择 / 这只股票，",
    "ĐÁP ÁN": "你选择这只股票，真是有眼光！",
    "PHIÊN ÂM": "nǐ xuǎnzé zhè zhǐ gǔpiào ， zhēnshi yǒu yǎnguāng ！"
  },
  {
    "STT": 157,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "这是 / 老板 / 很有眼光的。/ 几年前 / 着手开发 / 中西部市场，",
    "ĐÁP ÁN": "老板几年前着手开发中西部市场，这是很有眼光的。",
    "PHIÊN ÂM": "lǎobǎn jǐnián qián zhuóshǒu kāifā zhōngxībù shìchǎng ， zhè shì hěn yǒu yǎnguāng de 。"
  },
  {
    "STT": 158,
    "CHỮ": "Y",
    "CỤM": "有一搭没一搭",
    "PINYIN": "yǒu yī dā méi yī dā",
    "NGHĨA": "形容漫不经心，没话找话说。",
    "SẮP XẾP CÂU": "聊着天。 / 有一搭没一搭地 / 他们俩",
    "ĐÁP ÁN": "他们俩有一搭没一搭地聊着天。",
    "PHIÊN ÂM": "tāmen liǎ yǒu yī dā méiyīdā dì liáozhe tiān 。"
  },
  {
    "STT": 159,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "他讲起话来 / 让人听得 / 总是 / 有一搭没一搭的， / 一头雾水。",
    "ĐÁP ÁN": "他讲起话来总是有一搭没一搭的，让人听得一头雾水。",
    "PHIÊN ÂM": "tā jiǎng qǐhuà lái zǒngshì yǒu yī dā méiyīdā de ， ràng rén tīng dé yītóuwùshuǐ 。"
  },
  {
    "STT": 160,
    "CHỮ": "Y",
    "CỤM": "有油水",
    "PINYIN": "yǒu yóu shuǐ",
    "NGHĨA": "比喻可以得到的好处(多指不正当的额外收入)。油水，指饭菜里所 含的脂肪质。",
    "SẮP XẾP CÂU": "其实 / 并没什么 / 油水。 / 这个职位 / 看起来很清闲，",
    "ĐÁP ÁN": "这个职位看起来很清闲，其实并没什么油水。",
    "PHIÊN ÂM": "zhège zhíwèi kànqǐlai hěn qīngxián ， qíshí bìng méishénme yóushuǐ 。"
  },
  {
    "STT": 161,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "目前， / 房产业是 / 很有油水的 / 行业。",
    "ĐÁP ÁN": "目前，房产业是很有油水的行业。",
    "PHIÊN ÂM": "mùqián ， fángchǎnyè shì hěn yǒu yóushuǐ de hángyè 。"
  },
  {
    "STT": 162,
    "CHỮ": "Y",
    "CỤM": "冤大头",
    "PINYIN": "yuān dà tóu",
    "NGHĨA": "指枉费钱财或气力的人(含讥讽意)。",
    "SẮP XẾP CÂU": "成了个 / 冤大头。 / 买了件冒牌货， / 他花高价",
    "ĐÁP ÁN": "他花高价买了件冒牌货，成了个冤大头。",
    "PHIÊN ÂM": "tāhuā gāojià mǎi le jiàn màopáihuò ， chéng le gè yuāndàtóu 。"
  },
  {
    "STT": 163,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "成了个 / 他 / 冒牌货，/ 花高价 / 冤大头。/ 买了件",
    "ĐÁP ÁN": "我不会付这笔钱，我可不是冤大头。",
    "PHIÊN ÂM": "wǒ bùhuì fù zhèbǐ qián ， wǒ kěbushì yuāndàtóu 。"
  },
  {
    "STT": 164,
    "CHỮ": "Y",
    "CỤM": "月下老人",
    "PINYIN": "yuè xià lǎo rén",
    "NGHĨA": "为男女牵线、撮合的人。",
    "SẮP XẾP CÂU": "牵的线。 / 月下老人 / 都说婚姻是",
    "ĐÁP ÁN": "都说婚姻是月下老人牵的线。",
    "PHIÊN ÂM": "dū shuō hūnyīn shì yuèxiàlǎorén qiān de xiàn 。"
  },
  {
    "STT": 165,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "月下老人 / 都说 / 牵的线。/ 婚姻是",
    "ĐÁP ÁN": "他就是给我们搭鹊桥的月下老人。",
    "PHIÊN ÂM": "tā jiùshì gěi wǒmen dā quèqiáo de yuèxiàlǎorén 。"
  },
  {
    "STT": 166,
    "CHỮ": "Y",
    "CỤM": "云里雾里",
    "PINYIN": "yún lǐ wù lǐ",
    "NGHĨA": "表示看不清，不太明白。",
    "SẮP XẾP CÂU": "我还是 / 云里雾里的。 / 听得 / 他解释了半天，",
    "ĐÁP ÁN": "他解释了半天，我还是听得云里雾里的。",
    "PHIÊN ÂM": "tā jiěshì le bàntiān ， wǒ háishi tīngdé yúnlǐwùlǐ de 。"
  },
  {
    "STT": 167,
    "CHỮ": "Y",
    "SẮP XẾP CÂU": "简直是 / 他 / 就被 / 云里雾里。/ 老婆 / 刚进门，/ 骂了一通，\r\n",
    "ĐÁP ÁN": "他刚进门，就被老婆骂了一通，简直是云里雾里。",
    "PHIÊN ÂM": "tā gāng jìnmén ， jiù bèi lǎopó mà le yītōng ， jiǎnzhí shì yúnlǐwùlǐ 。"
  },
  {
    "STT": 168,
    "CHỮ": "Z",
    "CỤM": "砸场子",
    "PINYIN": "zá chǎng zi",
    "NGHĨA": "一般指恶人拆台，搞破坏。",
    "SẮP XẾP CÂU": "真是 / 太过分了！ / 砸场子， / 他竟敢 / 在别人的婚礼上",
    "ĐÁP ÁN": "他竟敢在别人的婚礼上砸场子，真是太过分了！",
    "PHIÊN ÂM": "tā jìnggǎn zài biéren de hūnlǐ shàng zá chǎngzi ， zhēnshi tàiguòfēn le ！"
  },
  {
    "STT": 169,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "搞得 / 在活动中 / 他们 / 一团糟。/ 砸场子，\r\n",
    "ĐÁP ÁN": "他们在活动中砸场子，搞得一团糟。",
    "PHIÊN ÂM": "tāmen zài huódòng zhōng zá chǎngzi ， gǎo dé yītuánzāo 。"
  },
  {
    "STT": 170,
    "CHỮ": "Z",
    "CỤM": "栽跟头",
    "PINYIN": "zāi ɡēn tou",
    "NGHĨA": "指失误，受挫败。",
    "SẮP XẾP CÂU": "狠狠地 / 栽了个跟头。 / 在这个项目上 / 他因为骄傲自大，",
    "ĐÁP ÁN": "他因为骄傲自大，在这个项目上狠狠地栽了个跟头。",
    "PHIÊN ÂM": "tā yīnwèi jiāoàozìdà ， zài zhège xiàngmù shàng hěnhěn dì zāi le gè gēntou 。"
  },
  {
    "STT": 171,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "名次 / 我 / 这次考试 / 一落千丈。/ 栽了跟头，\r\n",
    "ĐÁP ÁN": "这次考试我栽了跟头，名次一落千丈。",
    "PHIÊN ÂM": "zhècì kǎoshì wǒ zāi le gēntou ， míngcì yīluòqiānzhàng 。"
  },
  {
    "STT": 172,
    "CHỮ": "Z",
    "CỤM": "站得住脚",
    "PINYIN": "zhàn de zhù jiǎo",
    "NGHĨA": "有道理，能被人接受。",
    "SẮP XẾP CÂU": "完全 / 站得住脚。 / 证据充分， / 他的这个论点",
    "ĐÁP ÁN": "他的这个论点证据充分，完全站得住脚。",
    "PHIÊN ÂM": "tā de zhège lùndiǎn zhèngjù chōngfèn ， wánquán zhàndezhùjiǎo 。"
  },
  {
    "STT": 173,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "他的理论 / 是 / 通过 / 站得住脚的。/ 专家论证，\r\n",
    "ĐÁP ÁN": "通过专家论证，他的理论是站得住脚的。",
    "PHIÊN ÂM": "tōngguò zhuānjiālùnzhèng ， tā de lǐlùn shì zhàndezhùjiǎo de 。"
  },
  {
    "STT": 174,
    "CHỮ": "Z",
    "CỤM": "占上风",
    "PINYIN": "zhàn shànɡ fēnɡ",
    "NGHĨA": "有优势，处在优势地位。",
    "SẮP XẾP CÂU": "一度 / 占上风。 / 凭借充分的准备 / 我方选手 / 在辩论赛中，",
    "ĐÁP ÁN": "在辩论赛中，我方选手凭借充分的准备一度占上风。",
    "PHIÊN ÂM": "zài biànlùnsài zhōng ， wǒfāng xuǎnshǒu píngjiè chōngfèn de zhǔnbèi yīdù zhànshàngfēng 。"
  },
  {
    "STT": 175,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "明显 / 他 / 占上风。/ 块头这么大，\r\n",
    "ĐÁP ÁN": "他块头这么大，明显占上风。",
    "PHIÊN ÂM": "tā kuàitóu zhème dà ， míngxiǎn zhànshàngfēng 。"
  },
  {
    "STT": 176,
    "CHỮ": "Z",
    "CỤM": "站稳脚跟",
    "PINYIN": "zhàn wěn jiǎo gēn",
    "NGHĨA": "指得以立足。",
    "SẮP XẾP CÂU": "站稳了脚跟。 / 他终于 / 在这个行业 / 经过多年的努力，",
    "ĐÁP ÁN": "经过多年的努力，他终于在这个行业站稳了脚跟。",
    "PHIÊN ÂM": "jīngguò duōnián de nǔlì ， tā zhōngyú zài zhège hángyè zhànwěn le jiǎogēn 。"
  },
  {
    "STT": 177,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "处处 / 还没 / 得小心。/ 新到 / 站稳脚跟，/ 这家公司，",
    "ĐÁP ÁN": "新到这家公司，还没站稳脚跟，处处得小心。",
    "PHIÊN ÂM": "xīndào zhèjiā gōngsī ， huán méi zhànwěnjiǎogēn ， chùchù dé xiǎoxīn 。"
  },
  {
    "STT": 178,
    "CHỮ": "Z",
    "CỤM": "占小便宜，吃大亏",
    "PINYIN": "zhàn xiáo pián yi, chī dà kuī",
    "NGHĨA": "指得到了小的好处却遭受了很大的损失。",
    "SẮP XẾP CÂU": "最终 / 吃大亏。 / 往往会 / 而占小便宜， / 为了眼前的一点利益",
    "ĐÁP ÁN": "为了眼前的一点利益而占小便宜，最终往往会吃大亏。",
    "PHIÊN ÂM": "wèile yǎnqián de yīdiǎn lìyì ér zhàn xiǎobiànyí ， zuìzhōng wǎngwǎng huì chīdàkuī 。"
  },
  {
    "STT": 179,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "结果 / 他 / 吃了大亏，/ 占了点 / 丢了官。/ 单位的 / 小便宜，\r\n",
    "ĐÁP ÁN": "他占了点单位的小便宜，结果吃了大亏，丢了官。",
    "PHIÊN ÂM": "tā zhàn le diǎn dānwèi de xiǎobiànyí ， jiéguǒ chī le dàkuī ， diū le guān 。"
  },
  {
    "STT": 180,
    "CHỮ": "Z",
    "CỤM": "丈二和尚摸不着头脑",
    "PINYIN": "zhànɡ èr hé shànɡ mō bù zháo tóu nǎo",
    "NGHĨA": "比喻搞不清楚什么意思。",
    "SẮP XẾP CÂU": "真叫人 / 丈二和尚摸不着头脑。 / 他突然发脾气，",
    "ĐÁP ÁN": "他突然发脾气，真叫人丈二和尚摸不着头脑。",
    "PHIÊN ÂM": "tā tūrán fāpíqì ， zhēnjiàorén zhàngèrhéshàngmōbùzhetóunǎo 。"
  },
  {
    "STT": 181,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "我 / 是什么意思? / 现在是 / 他们 / 丈二和尚摸不着头脑。\r\n",
    "ĐÁP ÁN": "他们是什么意思? 我现在是丈二和尚摸不着头脑。",
    "PHIÊN ÂM": "tāmen shì shénme yìsi ? wǒ xiànzài shì zhàngèrhéshàngmōbùzhetóunǎo 。"
  },
  {
    "STT": 182,
    "CHỮ": "Z",
    "CỤM": "找个台阶下",
    "PINYIN": "zhǎo ɡe tái jiē xià",
    "NGHĨA": "比喻为避免受窘而寻找途径或机会。",
    "SẮP XẾP CÂU": "好让 / 会议结束。 / 这场尴尬的 / 员工们都等着 / 他找个台阶下， / 老板犯了错，",
    "ĐÁP ÁN": "老板犯了错，员工们都等着他找个台阶下，好让这场尴尬的会议结束。",
    "PHIÊN ÂM": "lǎobǎn fànlecuò ， yuángōng men dū děng zhe tā zhǎogè táijiē xià ， hǎo ràng zhèchǎng gāngà de huìyì jiéshù 。"
  },
  {
    "STT": 183,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "自己 / 尴尬的时候，/ 得给 / 找个台阶下。",
    "ĐÁP ÁN": "尴尬的时候，得给自己找个台阶下。",
    "PHIÊN ÂM": "gāngà de shíhou ， dé gěi zìjǐ zhǎogè táijiē xià 。"
  },
  {
    "STT": 184,
    "CHỮ": "Z",
    "CỤM": "照妖镜",
    "PINYIN": "zhào yāo jìnɡ",
    "NGHĨA": "原指能照出妖怪原形的镜子。现比喻能揭露丑恶现象或行为的武 器。",
    "SẮP XẾP CÂU": "都暴露无遗。 / 把那些隐藏的 / 腐败问题 / 这次的调查就像 / 照妖镜一样，",
    "ĐÁP ÁN": "这次的调查就像照妖镜一样，把那些隐藏的腐败问题都暴露无遗。",
    "PHIÊN ÂM": "zhècì de diàochá jiù xiàng zhàoyāojìng yīyàng ， bǎ nàxiē yǐncáng de fǔbàiwèntí dū bàolùwúyí 。"
  },
  {
    "STT": 185,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "好像 / 能从人群中 / 他有 / 老李 / 一面 / 小偷，/ 照妖镜似的。/ 准确辨认出",
    "ĐÁP ÁN": "老李能从人群中准确辨认出小偷，好像他有一面照妖镜似的。",
    "PHIÊN ÂM": "lǎolǐ néng cóng rénqún zhōng zhǔnquè biànrènchū xiǎotōu ， hǎoxiàng tā yǒu yīmiàn zhàoyāojìng shìde 。"
  },
  {
    "STT": 186,
    "CHỮ": "Z",
    "CỤM": "睁一只眼闭一只眼",
    "PINYIN": "zhēng yī zhī yǎn bì yī zhī yǎn",
    "NGHĨA": "比喻对事物(多指不好的)看见了，装出没看见的样子，不 去过问。",
    "SẮP XẾP CÂU": "总是 / 睁一只眼闭一只眼。 / 领导对他的小错误",
    "ĐÁP ÁN": "领导对他的小错误总是睁一只眼闭一只眼。",
    "PHIÊN ÂM": "lǐngdǎo duì tā de xiǎo cuòwù zǒngshì zhēngyīzhīyǎn bìyīzhīyǎn 。"
  },
  {
    "STT": 187,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "你也 / 算了，/ 管不过来。/ 睁一只眼闭一只眼\r\n",
    "ĐÁP ÁN": "睁一只眼闭一只眼算了，你也管不过来。",
    "PHIÊN ÂM": "zhēngyīzhīyǎn bìyīzhīyǎn suànle ， nǐ yě guǎn bù guòlái 。"
  },
  {
    "STT": 188,
    "CHỮ": "Z",
    "CỤM": "争上游",
    "PINYIN": "zhēnɡ shànɡ yóu",
    "NGHĨA": "争取向上。",
    "SẮP XẾP CÂU": "希望能 / 市场先机。 / 抢占 / 几家公司都在争上游，",
    "ĐÁP ÁN": "几家公司都在争上游，希望能抢占市场先机。",
    "PHIÊN ÂM": "jǐjiā gōngsī dū zài zhēngshàngyóu ， xīwàng néng qiǎngzhànshìchǎng xiānjī 。"
  },
  {
    "STT": 189,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "又快又好地 / 我们 / 完成任务。/ 要 / 力争上游，",
    "ĐÁP ÁN": "我们要力争上游，又快又好地完成任务。",
    "PHIÊN ÂM": "wǒmen yào lìzhēngshàngyóu ， yòukuàiyòuhǎo dì wánchéng rènwu 。"
  },
  {
    "STT": 190,
    "CHỮ": "Z",
    "CỤM": "智多星",
    "PINYIN": "zhì duō xīnɡ",
    "NGHĨA": "原为古典小说《水浒传》中梁山军师吴用的绰号，现泛指聪明机智、计 谋多的人。",
    "SẮP XẾP CÂU": "解决问题的 / 妙招。 / 总是能想出 / 老张是公司的智多星，",
    "ĐÁP ÁN": "老张是公司的智多星，总是能想出解决问题的妙招。",
    "PHIÊN ÂM": "lǎozhāng shì gōngsī de zhìduōxīng ， zǒngshì néng xiǎng chū jiějuéwèntí de miào zhāo 。"
  },
  {
    "STT": 191,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "我 / 人们 / 看不怎么的。/ 都称他 / 智多星，",
    "ĐÁP ÁN": "人们都称他智多星，我看不怎么的。",
    "PHIÊN ÂM": "rénmen dū chēng tā zhìduōxīng ， wǒ kàn bùzěnme de 。"
  },
  {
    "STT": 192,
    "CHỮ": "Z",
    "CỤM": "纸老虎",
    "PINYIN": "zhǐ lǎo hǔ",
    "NGHĨA": "就是用纸做的老虎，一点儿都不可怕。",
    "SẮP XẾP CÂU": "根本 / 不住人。 / 吓唬 / 他的威胁只是纸老虎，",
    "ĐÁP ÁN": "他的威胁只是纸老虎，根本吓唬不住人。",
    "PHIÊN ÂM": "tā de wēixié zhǐshì zhǐlǎohǔ ， gēnběn xiàhu bùzhù rén 。"
  },
  {
    "STT": 193,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "没有什么 / 你别怕。/ 他 / 真本事，/ 是一个 / “纸老虎”，",
    "ĐÁP ÁN": "他是一个“纸老虎”，没有什么真本事，你别怕。",
    "PHIÊN ÂM": "tā shì yīgè “ zhǐlǎohǔ ” ， méiyǒu shénme zhēnběnshì ， nǐ biépà 。"
  },
  {
    "STT": 194,
    "CHỮ": "Z",
    "CỤM": "直筒子",
    "PINYIN": "zhí tǒnɡ zi",
    "NGHĨA": "比喻性情直爽，有什么说什么;也指性情直爽的人。",
    "SẮP XẾP CÂU": "都直接 / 说出来。 / 有什么话 / 小王是个直筒子，",
    "ĐÁP ÁN": "小王是个直筒子，有什么话都直接说出来。",
    "PHIÊN ÂM": "xiǎowáng shì gè zhítǒngzi ， yǒu shénme huà dū zhíjiē shuō chūlái 。"
  },
  {
    "STT": 195,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "有什么想法 / 我可是个 / 不吐不快。/ 直筒子，\r\n",
    "ĐÁP ÁN": "我可是个直筒子，有什么想法不吐不快。",
    "PHIÊN ÂM": "wǒ kěshì gè zhítǒngzi ， yǒu shénme xiǎngfǎ bùtǔ bùkuài 。"
  },
  {
    "STT": 196,
    "CHỮ": "Z",
    "CỤM": "主心骨",
    "PINYIN": "zhǔ xīn ɡǔ",
    "NGHĨA": "比喻可依靠的人或事物。",
    "SẮP XẾP CÂU": "是真正的 / 主心骨。 / 他成为了大家的支柱， / 在危急时刻，",
    "ĐÁP ÁN": "在危急时刻，他成为了大家的支柱，是真正的主心骨。",
    "PHIÊN ÂM": "zài wēijí shíkè ， tā chéngwéi le dàjiā de zhīzhù ， shì zhēnzhèng de zhǔxīngǔ 。"
  },
  {
    "STT": 197,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "我想 / 谁是 / 大家 / 我们这个团队的 / 都很清楚。/ 主心骨，",
    "ĐÁP ÁN": "谁是我们这个团队的主心骨，我想大家都很清楚。",
    "PHIÊN ÂM": "shéi shì wǒmen zhège tuánduì de zhǔxīngǔ ， wǒ xiǎng dàjiā dū hěn qīngchu 。"
  },
  {
    "STT": 198,
    "CHỮ": "Z",
    "CỤM": "装门面",
    "PINYIN": "zhuānɡ mén miàn",
    "NGHĨA": "比喻为了表面好看而做某事。也说“壮门面”",
    "SẮP XẾP CÂU": "实际上 / 很糟糕。 / 经营状况 / 这家公司只是装门面，",
    "ĐÁP ÁN": "这家公司只是装门面，实际上经营状况很糟糕。",
    "PHIÊN ÂM": "zhèjiā gōngsī zhǐshì zhuāngménmiàn ， shíjìshàng jīngyíng zhuàngkuàng hěn zāogāo 。"
  },
  {
    "STT": 199,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "装门面，/ 他 / 哄哄小孩。/ 买了几棵 / 圣诞树，\r\n",
    "ĐÁP ÁN": "他买了几棵圣诞树，装门面，哄哄小孩。",
    "PHIÊN ÂM": "tā mǎi le jǐkē shèngdànshù ， zhuāngménmiàn ， hōnghōng xiǎohái 。"
  },
  {
    "STT": 200,
    "CHỮ": "Z",
    "CỤM": "装洋蒜",
    "PINYIN": "zhuānɡ yánɡ suàn",
    "NGHĨA": "装糊涂。",
    "SẮP XẾP CÂU": "假装听不懂 / 我们在说什么。 / 他装洋蒜，",
    "ĐÁP ÁN": "他装洋蒜，假装听不懂我们在说什么。",
    "PHIÊN ÂM": "tā zhuāngyáng suàn ， jiǎzhuāng tīngbudǒng wǒmen zài shuō shénme 。"
  },
  {
    "STT": 201,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "我知道 / 别给我 / 还不快上? / 你的能耐，/ 装洋蒜，",
    "ĐÁP ÁN": "别给我装洋蒜，我知道你的能耐，还不快上?",
    "PHIÊN ÂM": "bié gěi wǒ zhuāngyáng suàn ， wǒ zhīdào nǐ de néngnài ， huán bùkuài shàng ?"
  },
  {
    "STT": 202,
    "CHỮ": "Z",
    "CỤM": "走下坡路",
    "PINYIN": "zǒu xià pō lù",
    "NGHĨA": "比喻朝衰落、灭亡的方向发展。",
    "SẮP XẾP CÂU": "一直在 / 走下坡路。 / 这家公司最近几年",
    "ĐÁP ÁN": "这家公司最近几年一直在走下坡路。",
    "PHIÊN ÂM": "zhèjiā gōngsī zuìjìn jǐnián yīzhí zài zǒuxiàpōlù 。"
  },
  {
    "STT": 203,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "要注意 / 身体 / 保养。/ 过了四十，/ 开始 / 走下坡路了，",
    "ĐÁP ÁN": "过了四十，身体开始走下坡路了，要注意保养。",
    "PHIÊN ÂM": "guò le sìshí ， shēntǐ kāishǐ zǒuxiàpōlù le ， yào zhùyì bǎoyǎng 。"
  },
  {
    "STT": 204,
    "CHỮ": "Z",
    "CỤM": "钻空子",
    "PINYIN": "zuān kònɡ zi",
    "NGHĨA": "比喻利用某种漏洞，进行对自己有利的活动。",
    "SẮP XẾP CÂU": "逃避责任。 / 钻空子， / 他总是想方设法",
    "ĐÁP ÁN": "他总是想方设法钻空子，逃避责任。",
    "PHIÊN ÂM": "tā zǒngshì xiǎngfāngshèfǎ zuānkòngzi ， táobìzérèn 。"
  },
  {
    "STT": 205,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "就不会 / 如果完善，/ 有人 / 法律 / 再 / 钻法律的空子了。\r\n",
    "ĐÁP ÁN": "法律如果完善，就不会有人再钻法律的空子了。",
    "PHIÊN ÂM": "fǎlǜ rúguǒ wánshàn ， jiù bùhuì yǒurén zài zuān fǎlǜ de kòngzi le 。"
  },
  {
    "STT": 206,
    "CHỮ": "Z",
    "CỤM": "钻牛角尖",
    "PINYIN": "zuān niú jiǎo jiān",
    "NGHĨA": "比喻特别认真或较真。",
    "SẮP XẾP CÂU": "事情没 / 那么复杂。 / 不要钻牛角尖，",
    "ĐÁP ÁN": "不要钻牛角尖，事情没那么复杂。",
    "PHIÊN ÂM": "bùyào zuānniújiǎojiān ， shìqing méi nàme fùzá 。"
  },
  {
    "STT": 207,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "你就 / 这个问题 / 别 / 一点儿也不重要，/ 钻牛角尖了。",
    "ĐÁP ÁN": "这个问题一点儿也不重要，你就别钻牛角尖了。",
    "PHIÊN ÂM": "zhège wèntí yīdiǎnr yě bù zhòngyào ， nǐ jiù bié zuānniújiǎojiān le 。"
  },
  {
    "STT": 208,
    "CHỮ": "Z",
    "CỤM": "钻死胡同",
    "PINYIN": "zuān sǐ hú tong",
    "NGHĨA": "死胡同指走不通的小街道，比喻走到绝路上了。",
    "SẮP XẾP CÂU": "出不来了。 / 死胡同里 / 他钻进",
    "ĐÁP ÁN": "他钻进死胡同里出不来了。",
    "PHIÊN ÂM": "tā zuānjìn sǐhútòng lǐ chūbùlái le 。"
  },
  {
    "STT": 209,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "就像 / 他的研究 / 出不来了。/ 进入了误区，/ 钻进了死胡同，",
    "ĐÁP ÁN": "他的研究进入了误区，就像钻进了死胡同，出不来了。",
    "PHIÊN ÂM": "tā de yánjiū jìnrù le wùqū ， jiù xiàng zuānjìn le sǐhútòng ， chūbùlái le 。"
  },
  {
    "STT": 210,
    "CHỮ": "Z",
    "CỤM": "坐冷板凳",
    "PINYIN": "zuò lěnɡ bǎn dènɡ",
    "NGHĨA": "原为讽刺乡村私塾先生清冷职位的话。后来比喻不受重视，遭到 冷遇。",
    "SẮP XẾP CÂU": "没有得到 / 重用。 / 却一直坐冷板凳， / 他做了很多年，",
    "ĐÁP ÁN": "他做了很多年，却一直坐冷板凳，没有得到重用。",
    "PHIÊN ÂM": "tā zuò le hěnduōnián ， què yīzhí zuòlěngbǎndèng ， méiyǒu dédào zhòngyòng 。"
  },
  {
    "STT": 211,
    "CHỮ": "Z",
    "SẮP XẾP CÂU": "也有 / 即便是 / 时候。/ 世界足球先生，/ 坐冷板凳的",
    "ĐÁP ÁN": "即便是世界足球先生，也有坐冷板凳的时候。",
    "PHIÊN ÂM": "jíbiàn shì shìjièzúqiú xiānsheng ， yě yǒu zuòlěngbǎndèng de shíhou 。"
  }
]

const allAnswers = Array.from(new Set(data.flatMap((d) => [d['ĐÁP ÁN 1'], d['ĐÁP ÁN 2']])));
function generateChoices(correctAnswer, optionsPool) {
  // Lọc ra những đáp án không trùng với correctAnswer
  const filteredPool = optionsPool.filter((opt) => opt !== correctAnswer);

  if (filteredPool.length < 3) {
    throw new Error('Không đủ đáp án sai để tạo 4 lựa chọn');
  }

  // Xáo trộn pool
  const shuffled = [...filteredPool].sort(() => Math.random() - 0.5);

  // Lấy 3 đáp án sai
  const choices = shuffled.slice(0, 3);

  // Thêm đáp án đúng
  choices.push(correctAnswer);

  // Xáo trộn lại để đáp án đúng không luôn đứng cuối
  return choices.sort(() => Math.random() - 0.5);
}

const newData = data
  .map((d,index) => {
    return {
      simplified: d['CỤM'] || data[index - 1]['CỤM'],
      meaning: d['NGHĨA'] || data[index - 1]['NGHĨA'],
      letter: d['CHỮ'] || data[index-1]['CHỮ'],
      index: d['STT'],
      question: d['SẮP XẾP CÂU'],
      pinyin: d['PINYIN'],
      answer: d['ĐÁP ÁN'],
      answerPinyin: d['PHIÊN ÂM']
    };
  })
  .sort((a, b) => {
    if (a.index !== b.index) return a.letter - b.letter;
    return a.index - b.index;
  });
const fs = require('fs');
fs.writeFileSync('new-arrange.json', JSON.stringify(newData, null, 2));
