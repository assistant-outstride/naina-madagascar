/* ===========================================
   NAINA — Tour Guide Website · script.js
   =========================================== */

// ---- i18n Translations ----
const T = {
  en: {
    nav_about:"About", nav_tours:"Tours", nav_gallery:"Gallery", nav_testimonials:"Reviews", nav_contact:"Contact",
    hero_location:"📍 Morondava, Madagascar", hero_tagline:"Your Guide to the Wonders of Madagascar", hero_cta:"Contact Naina", hero_cta2:"Explore Tours",
    about_label:"About Your Guide", about_title:"Born in Madagascar.<br>Made for Adventure.",
    about_p1:"I'm Naina — born and raised in Morondava, on the wild western coast of Madagascar. I've spent my life exploring this extraordinary land: its ancient baobab forests, its razor-sharp limestone canyons, its warm-hearted villages, and its wildlife found nowhere else on Earth.",
    about_p2:"When you travel with me, you're not getting a standard tour. You're getting a friend who knows every trail, every sunset spot, and every local family willing to share a meal. I genuinely care that you leave Madagascar with memories that last a lifetime.",
    about_p3:"I speak English, French, Malagasy, and some Russian — so whatever your language, we'll connect. Safety, reliability, and a personal touch come first. Always.",
    badge_multi:"Multilingual", badge_safe:"Safety First", badge_local:"Born Local", badge_exp:"10+ Years",
    tours_label:"Experiences & Tours", tours_title:"Discover Western Madagascar", tours_sub:"Every journey is tailored to you — your pace, your passions, your adventure.",
    t1_title:"Avenue of the Baobabs", t1_desc:"Stand beneath thousand-year-old giants as the golden hour paints the sky. Naina knows exactly where to be when the light turns magical.",
    t2_title:"Tsingy de Bemaraha", t2_desc:"Trek through razor-sharp limestone pinnacles at this UNESCO World Heritage Site — one of Madagascar's most spectacular natural wonders.",
    t3_title:"Kirindy Forest Reserve", t3_desc:"Home to the elusive fossa and dozens of lemur species. Naina's trained eye spots wildlife others walk straight past. Night walks available.",
    t4_title:"Lemur Encounters", t4_desc:"Come face-to-face with ring-tailed lemurs, brown lemurs, and sifakas in their natural habitat. Found only in Madagascar — truly once-in-a-lifetime.",
    t5_title:"Village & Cultural Visits", t5_desc:"Go beyond the postcard. Naina's relationships with local communities open doors closed to ordinary tourists. Share a meal, learn a craft, live it.",
    t6_title:"Beach & Coastal Trips", t6_desc:"Morondava's coastline is raw and beautiful. Sail on a traditional pirogue, watch fishermen at work, and find your own stretch of paradise.",
    tag_iconic:"Iconic", tag_wildlife:"Wildlife", tag_unique:"Unique", tag_culture:"Cultural", tag_coastal:"Coastal",
    gallery_label:"Gallery", gallery_title:"Madagascar Through Naina's Eyes", gallery_sub:"Every photo tells a story. Every story is an invitation.",
    test_label:"Traveller Stories", test_title:"What Travellers Say",
    test1_q:"I've had guides on every continent, but Naina is something else. He found us a spot at Baobab Alley that no other tourists could reach — just us, the ancient trees, and the most extraordinary sunset I've ever seen. Genuine, funny, and endlessly knowledgeable. Madagascar was already on my bucket list, but Naina made it the trip I'll be telling people about for the rest of my life.",
    test1_loc:"🇬🇧 United Kingdom",
    test2_q:"I've been travelling for 40 years, and this is the first time a guide truly understood what mattered to me — not just the landmarks, but the stories, the people, the quiet moments. Naina introduced me to a village elder whose knowledge of Madagascar's history was extraordinary. That afternoon changed how I see the world.",
    test2_loc:"🇺🇸 United States",
    test3_q:"After getting over my drug addiction and two years living on the streets of Tbilisi, I needed something to remind me the world was beautiful. Madagascar with Naina did exactly that. He didn’t judge, he didn’t ask questions — he just showed me the baobabs, the lemurs, and the kindest people I’ve ever met. I cried at the sunset. Life-changing.",
    test3_loc:"🇬🇪 Georgia",
    test4_q:"I was a little nervous before the trip — Madagascar felt so far and unknown. But Naina's warmth put me at ease from day one. He even speaks a little Russian, which felt like a small miracle out there. The cultural experiences he arranged were completely genuine, not staged for tourists. I left feeling truly welcomed. Madagascar has my heart.", test4_loc:"🇷🇺 Russia", italian_joke:"🤌 Sorry, no Italians.", contact_label:"Get in Touch", contact_title:"Ready to Explore Madagascar?", contact_sub:"Tell Naina where your curiosity leads. He'll take care of the rest.",
    c_phone_label:"Phone & WhatsApp", c_loc_label:"Based in", c_wa_btn:"Message on WhatsApp",
    form_title:"Send a Message", form_name:"Your Name", form_email:"Email Address", form_interest:"Interested in",
    form_select:"— Choose a tour —", form_custom:"Custom itinerary", form_msg:"Your Message", form_send:"Send Message",
    form_ok:"Message sent! Naina will be in touch soon.",
    footer_tag:"Tour Guide · Morondava, Madagascar", footer_copy:"© 2026 Naina — Tour Guide, Morondava, Madagascar", footer_love:"Made with ❤️ for the love of Madagascar"
  },
  fr: {
    nav_about:"À propos", nav_tours:"Circuits", nav_gallery:"Galerie", nav_testimonials:"Avis", nav_contact:"Contact",
    hero_location:"📍 Morondava, Madagascar", hero_tagline:"Votre Guide des Merveilles de Madagascar", hero_cta:"Contacter Naina", hero_cta2:"Explorer les Circuits",
    about_label:"Votre Guide", about_title:"Né à Madagascar.<br>Fait pour l'Aventure.",
    about_p1:"Je suis Naina — né et élevé à Morondava, sur la côte ouest sauvage de Madagascar. J'ai passé ma vie à explorer cette terre extraordinaire : ses forêts de baobabs millénaires, ses canyons calcaires acérés, ses villages chaleureux et sa faune unique au monde.",
    about_p2:"Quand vous voyagez avec moi, ce n'est pas un circuit classique. C'est un ami qui connaît chaque sentier, chaque spot de coucher de soleil, et chaque famille locale prête à partager un repas. Je tiens vraiment à ce que vous quittiez Madagascar avec des souvenirs inoubliables.",
    about_p3:"Je parle anglais, français, malgache et un peu de russe — quelle que soit votre langue, on se comprendra. Sécurité, fiabilité et touche personnelle avant tout. Toujours.",
    badge_multi:"Multilingue", badge_safe:"Sécurité", badge_local:"Local", badge_exp:"10+ Ans",
    tours_label:"Expériences & Circuits", tours_title:"Découvrez l'Ouest de Madagascar", tours_sub:"Chaque voyage est fait sur mesure — votre rythme, vos passions, votre aventure.",
    t1_title:"Allée des Baobabs", t1_desc:"Tenez-vous sous des géants millénaires tandis que l'heure dorée peint le ciel. Naina sait exactement où être quand la lumière devient magique.",
    t2_title:"Tsingy de Bemaraha", t2_desc:"Parcourez les pinacles calcaires acérés de ce site du Patrimoine mondial de l'UNESCO — l'une des merveilles naturelles les plus spectaculaires de Madagascar.",
    t3_title:"Réserve de Kirindy", t3_desc:"Foyer du fossa insaisissable et de dizaines d'espèces de lémuriens. L'œil entraîné de Naina repère la faune que d'autres ignorent. Promenades nocturnes disponibles.",
    t4_title:"Rencontres avec les Lémuriens", t4_desc:"Venez face à face avec des lémuriens à queue annelée, des lémuriens bruns et des sifakas dans leur habitat naturel. On ne les trouve qu'à Madagascar.",
    t5_title:"Visites Culturelles & Villages", t5_desc:"Allez au-delà de la carte postale. Les relations de Naina avec les communautés locales ouvrent des portes fermées aux touristes ordinaires.",
    t6_title:"Plages & Excursions Côtières", t6_desc:"Le littoral de Morondava est brut et magnifique. Naviguez sur une pirogue traditionnelle et trouvez votre propre coin de paradis.",
    tag_iconic:"Iconique", tag_wildlife:"Faune", tag_unique:"Unique", tag_culture:"Culture", tag_coastal:"Côtier",
    gallery_label:"Galerie", gallery_title:"Madagascar à Travers les Yeux de Naina", gallery_sub:"Chaque photo raconte une histoire. Chaque histoire est une invitation.",
    test_label:"Témoignages", test_title:"Ce que Disent les Voyageurs",
    test1_q:"J'ai eu des guides sur tous les continents, mais Naina est dans une autre catégorie. Il nous a trouvé un endroit à l'Allée des Baobabs qu'aucun autre touriste ne connaissait — juste nous, les arbres millénaires et le coucher de soleil le plus extraordinaire de ma vie. Authentique, drôle et d'une connaissance sans fin. Madagascar était déjà sur ma liste, mais Naina en a fait le voyage dont je parlerai toute ma vie.",
    test1_loc:"🇬🇧 Royaume-Uni",
    test2_q:"Cela fait 40 ans que je voyage, et c'est la première fois qu'un guide a vraiment compris ce qui comptait pour moi — pas seulement les sites, mais les histoires, les gens, les moments de silence. Naina m'a présentée à un ancien du village dont la connaissance de l'histoire malgache était remarquable. Cet après-midi-là a changé ma façon de voir le monde.",
    test2_loc:"🇺🇸 États-Unis",
    test3_q:"Après avoir surmonté ma toxicomanie et deux ans dans les rues de Tbilissi, j’avais besoin de quelque chose pour me rappeler que le monde était beau. Madagascar avec Naina a fait exactement ça. Il n’a pas jugé, il n’a pas posé de questions — il m’a juste montré les baobabs, les lémuriens et les gens les plus gentils que j’aie jamais rencontrés. J’ai pleuré au coucher de soleil.",
    test3_loc:"🇬🇪 Géorgie",
    test4_q:"J'étais un peu anxieuse avant le voyage — Madagascar me semblait si loin et inconnu. Mais la chaleur de Naina m'a rassurée dès le premier jour. Il parle même un peu russe, ce qui était comme un petit miracle là-bas. Les expériences culturelles qu'il a organisées étaient complètement authentiques, pas mises en scène. Je suis partie en me sentant vraiment accueillie. Madagascar a conquis mon cœur.", test4_loc:"🇷🇺 Russie", italian_joke:"🤌 Désolé, pas d'Italiens.", contact_label:"Contactez-nous", contact_title:"Prêt à Explorer Madagascar ?", contact_sub:"Dites à Naina où votre curiosité vous mène. Il s'occupe du reste.",
    c_phone_label:"Téléphone & WhatsApp", c_loc_label:"Basé à", c_wa_btn:"Écrire sur WhatsApp",
    form_title:"Envoyer un Message", form_name:"Votre Nom", form_email:"Adresse E-mail", form_interest:"Intéressé par",
    form_select:"— Choisir un circuit —", form_custom:"Itinéraire sur mesure", form_msg:"Votre Message", form_send:"Envoyer",
    form_ok:"Message envoyé ! Naina vous contactera bientôt.",
    footer_tag:"Guide Touristique · Morondava, Madagascar", footer_copy:"© 2026 Naina — Guide Touristique, Morondava, Madagascar", footer_love:"Fait avec ❤️ pour l'amour de Madagascar"
  },
  ru: {
    nav_about:"О гиде", nav_tours:"Туры", nav_gallery:"Галерея", nav_testimonials:"Отзывы", nav_contact:"Контакты",
    hero_location:"📍 Морондава, Мадагаскар", hero_tagline:"Ваш Гид по Чудесам Мадагаскара", hero_cta:"Связаться с Найна", hero_cta2:"Посмотреть Туры",
    about_label:"О вашем Гиде", about_title:"Рождён на Мадагаскаре.<br>Создан для Приключений.",
    about_p1:"Я Найна — родился и вырос в Морондаве, на диком западном побережье Мадагаскара. Всю жизнь я исследую эту удивительную землю: её древние баобабовые леса, острые известняковые каньоны, гостеприимные деревни и животный мир, не встречающийся больше нигде на Земле.",
    about_p2:"Путешествуя со мной, вы получаете не стандартный тур, а друга, который знает каждую тропу, каждое место для заката и каждую местную семью, готовую разделить с вами трапезу.",
    about_p3:"Я говорю на английском, французском, малагасийском и немного на русском — мы обязательно найдём общий язык. Безопасность, надёжность и индивидуальный подход — всегда на первом месте.",
    badge_multi:"Многоязычный", badge_safe:"Безопасность", badge_local:"Местный", badge_exp:"10+ Лет",
    tours_label:"Экскурсии и Туры", tours_title:"Откройте Западный Мадагаскар", tours_sub:"Каждое путешествие создано для вас — ваш темп, ваши увлечения, ваше приключение.",
    t1_title:"Аллея Баобабов", t1_desc:"Встаньте под тысячелетними гигантами, пока золотой час раскрашивает небо. Найна знает, где быть, когда свет становится волшебным.",
    t2_title:"Цинги де Бемараха", t2_desc:"Пройдите сквозь острые известняковые башни в этом объекте Всемирного наследия ЮНЕСКО — одном из самых впечатляющих чудес природы Мадагаскара.",
    t3_title:"Заповедник Киринди", t3_desc:"Дом неуловимой фоссы и десятков видов лемуров. Натренированный глаз Найна замечает то, мимо чего проходят другие. Доступны ночные прогулки.",
    t4_title:"Встречи с Лемурами", t4_desc:"Встретьтесь лицом к лицу с кольцехвостыми лемурами, бурыми лемурами и сифаками в их естественной среде обитания. Только на Мадагаскаре.",
    t5_title:"Деревни и Культура", t5_desc:"Выйдите за рамки открытки. Связи Найна с местными сообществами открывают двери, закрытые для обычных туристов.",
    t6_title:"Пляжи и Побережье", t6_desc:"Побережье Морондавы — дикое и прекрасное. Поплавайте на традиционном пироге и найдите свой собственный уголок рая.",
    tag_iconic:"Культовый", tag_wildlife:"Фауна", tag_unique:"Уникальный", tag_culture:"Культура", tag_coastal:"Побережье",
    gallery_label:"Галерея", gallery_title:"Мадагаскар Глазами Найна", gallery_sub:"Каждое фото рассказывает историю. Каждая история — приглашение.",
    test_label:"Истории Путешественников", test_title:"Что Говорят Путешественники",
    test1_q:"У меня были гиды на каждом континенте, но Найна — это что-то особенное. Он нашел нам место у Аллеи Баобабов, куда другие туристы не добираются — только мы, древние деревья и самый невероятный закат в моей жизни. Искренний, веселый и бесконечно эрудированный. Найна сделал это путешествие тем, о котором я буду рассказывать всю жизнь.",
    test1_loc:"🇬🇧 Великобритания",
    test2_q:"Я путешествую 40 лет, и впервые гид по-настоящему понял, что для меня важно — не достопримечательности, а истории, люди, тихие мгновения. Найна познакомил меня со старейшиной деревни, чьи знания истории Мадагаскара были поразительны. Тот день изменил мое видение мира.",
    test2_loc:"🇺🇸 США",
    test3_q:"Поход по Цинги был совершенно непохож ни на что, что я делал раньше. Найна выдерживал идеальный темп, замечал животных, которых я бы полностью пропустил, и отвечал на любые вопросы о геологии. Ночная прогулка в Киринди, где мы нашли фоссу? До сих пор рассказываю об этом. Уже планирую поездку с друзьями из Тбилиси.",
    test3_loc:"🇬🇪 Грузия",
    test4_q:"Перед поездкой я немного волновалась — Мадагаскар казался таким далеким. Но теплота Найны успокоила меня с первого дня. Он даже говорит немного по-русски, что казалось маленьким чудом в таком далеком месте. Культурные впечатления были настоящими, не для туристов. Я уехала с ощущением, что меня по-настоящему приняли. Мадагаскар навсегда в моем сердце.", test4_loc:"🇷🇺 Россия", italian_joke:"🤌 Извините, без итальянцев.", contact_label:"Свяжитесь", contact_title:"Готовы Исследовать Мадагаскар?", contact_sub:"Расскажите Найна, куда ведёт ваше любопытство. Он позаботится об остальном.",
    c_phone_label:"Телефон и WhatsApp", c_loc_label:"Базируется в", c_wa_btn:"Написать в WhatsApp",
    form_title:"Отправить Сообщение", form_name:"Ваше Имя", form_email:"Электронная Почта", form_interest:"Интересует",
    form_select:"— Выберите тур —", form_custom:"Индивидуальный маршрут", form_msg:"Ваше Сообщение", form_send:"Отправить",
    form_ok:"Сообщение отправлено! Найна свяжется с вами в ближайшее время.",
    footer_tag:"Гид · Морондава, Мадагаскар", footer_copy:"© 2026 Найна — Гид, Морондава, Мадагаскар", footer_love:"Сделано с ❤️ из любви к Мадагаскару"
  },
  zh: {
    nav_about:"关于", nav_tours:"旅游线路", nav_gallery:"相册", nav_testimonials:"评价", nav_contact:"联系",
    hero_location:"📍 穆龙达瓦，马达加斯加", hero_tagline:"您的马达加斯加奇迹之旅向导", hero_cta:"联系 Naina", hero_cta2:"探索线路",
    about_label:"关于您的向导", about_title:"生于马达加斯加。<br>为冒险而生。",
    about_p1:"我是 Naina —— 在马达加斯加西海岸的穆龙达瓦出生长大。我一生都在探索这片非凡的土地：千年猴面包树森林、锋利的石灰岩峡谷、热情好客的村庄，以及地球上其他任何地方都找不到的野生动物。",
    about_p2:"和我一起旅行，您得到的不是标准行程，而是一个了解每条小路、每个日落观赏点、每个愿意分享一餐的当地家庭的朋友。",
    about_p3:"我会说英语、法语、马达加斯加语和一些俄语 —— 无论您说什么语言，我们都能沟通。安全、可靠和贴心服务永远是第一位的。",
    badge_multi:"多语言", badge_safe:"安全第一", badge_local:"本地人", badge_exp:"10+年经验",
    tours_label:"体验与线路", tours_title:"发现马达加斯加西部", tours_sub:"每段旅程都为您量身定制 —— 您的节奏，您的热情，您的冒险。",
    t1_title:"猴面包树大道", t1_desc:"站在千年巨树下，看金色时光将天空染上色彩。Naina 知道在光线变得神奇时该去哪里。",
    t2_title:"贝马拉哈石林", t2_desc:"穿越联合国教科文组织世界遗产地的锋利石灰岩尖峰 —— 马达加斯加最壮观的自然奇观之一。",
    t3_title:"基林迪森林保护区", t3_desc:"马岛獴和数十种狐猴的家园。Naina 训练有素的眼睛能发现别人错过的野生动物。可夜游。",
    t4_title:"狐猴邂逅", t4_desc:"在自然栖息地与环尾狐猴、棕色狐猴和冕狐猴面对面。仅在马达加斯加可见 —— 真正的一生一次。",
    t5_title:"村庄与文化之旅", t5_desc:"超越明信片。Naina 与当地社区的关系为您打开普通游客无法进入的大门。",
    t6_title:"海滩与海岸之旅", t6_desc:"穆龙达瓦的海岸线原始而美丽。乘坐传统独木舟，观看渔民劳作，找到属于您的天堂。",
    tag_iconic:"标志性", tag_wildlife:"野生动物", tag_unique:"独特", tag_culture:"文化", tag_coastal:"海岸",
    gallery_label:"相册", gallery_title:"透过 Naina 的眼睛看马达加斯加", gallery_sub:"每张照片讲述一个故事。每个故事都是一份邀请。",
    test_label:"旅行者故事", test_title:"旅行者怎么说",
    test1_q:"我在每个大洲都请过向导，但Naina与众不同。他带我们找到了猴面包树大道上其他游客无法到达的地方——只有我们、千年古树和我人生中最壮观的日落。真诚、幽默、知识渊博。Naina让这次旅行成为我一辈子都会讲述的故事。",
    test1_loc:"🇬🇧 英国",
    test2_q:"Naina独特之处在于个人联系。他把我们介绍给偏远村庄的家庭，这些地方我们自己永远找不到。你能感受到相互尊重——不是旅游景点，而是真正的关系。真的很特别。",
    test2_loc:"🇺🇸 美国",
    test3_q:"石林徒步是我从未有过的体验。Naina节奏掌握得恰到好处，能发现我完全会错过的野生动物，还能回答关于地质的每个问题。基林迪的夜间漫步发现了马岛獴？我至今还在讲这个故事。已经在计划带第比利斯的朋友来组团旅行。",
    test3_loc:"🇬🇪 格鲁吉亚",
    test4_q:"我独自来马达加斯加有点紧张——感觉那么遥远、那么陌生。但Naina的温暖从第一天就让我放松下来。他甚至会说一点俄语，在那么远的地方这感觉像个小奇迹。他安排的文化体验都是真实的，不是做给游客看的。我离开时感觉被真正接纳了。马达加斯加永远住在我心里。", test4_loc:"🇷🇺 俄罗斯", italian_joke:"🤌 抱歉，不接待意大利人。", contact_label:"联系我们", contact_title:"准备好探索马达加斯加了吗？", contact_sub:"告诉 Naina 您的好奇心会带您去哪里。其余的交给他。",
    c_phone_label:"电话和 WhatsApp", c_loc_label:"所在地", c_wa_btn:"WhatsApp 发消息",
    form_title:"发送消息", form_name:"您的姓名", form_email:"电子邮箱", form_interest:"感兴趣的",
    form_select:"— 选择线路 —", form_custom:"定制行程", form_msg:"您的留言", form_send:"发送",
    form_ok:"消息已发送！Naina 会尽快与您联系。",
    footer_tag:"导游 · 穆龙达瓦，马达加斯加", footer_copy:"© 2026 Naina — 导游，穆龙达瓦，马达加斯加", footer_love:"用 ❤️ 为热爱马达加斯加而制作"
  },
  mg: {
    nav_about:"Momba", nav_tours:"Fizahan-tany", nav_gallery:"Sary", nav_testimonials:"Hevitra", nav_contact:"Fifandraisana",
    hero_location:"📍 Morondava, Madagasikara", hero_tagline:"Mpitarika Anao amin'ny Hafinoan'i Madagasikara", hero_cta:"Mifandraisa amin'i Naina", hero_cta2:"Jereo ny Fizahan-tany",
    about_label:"Momba ny Mpitarika Anao", about_title:"Teraka teto Madagasikara.<br>Natao ho an'ny Aventure.",
    about_p1:"Izaho no Naina — teraka sy lehibe teto Morondava, amin'ny moron-dranomasina andrefan'i Madagasikara. Nandany ny fiainako tamin'ny fikarohana ity tany mahagaga ity: ny ala baobab fahiny, ny harambato limestone maranitra, ny vohitra feno fitiavana, ary ny biby tsy hita na aiza na aiza eto an-tany.",
    about_p2:"Rehefa miara-mandeha amiko ianao, tsy ny fizahan-tany mahazatra no azonao. Namana izay mahalala ny lalana tsirairay, ny toerana fijerena masoandro milentika tsirairay ary ny fianakaviana vonona hizara sakafo.",
    about_p3:"Miteny anglisy, frantsay, malagasy ary kely rusiana aho — na inona na inona fiteny ampiasainao, hifandray isika. Fiarovana, fahatokiana ary fomba manokana no voalohany. Mandrakariva.",
    badge_multi:"Fiteny maro", badge_safe:"Fiarovana", badge_local:"Teratany", badge_exp:"10+ Taona",
    tours_label:"Traikefa & Fizahan-tany", tours_title:"Fantaro ny Andrefan'i Madagasikara", tours_sub:"Ny dia tsirairay dia natao ho anao — ny hafainganao, ny firaiketam-ponao, ny aventure anao.",
    t1_title:"Lalan'ny Baobab", t1_desc:"Mijoroa eo ambanin'ireo goavam-be an'arivony taona raha ny ora volamena no mandoko ny lanitra.",
    t2_title:"Tsingy de Bemaraha", t2_desc:"Mandeha amin'ny harambato limestone maranitra ao amin'ity Lova Iraisam-pirenena ity — iray amin'ireo fahagagana voajanahary mamirapiratra indrindra eto Madagasikara.",
    t3_title:"Ala Fiarovana Kirindy", t3_desc:"Fonenan'ny fossa sy ny karazana gidro maro. Ny mason'i Naina voaofana dia mahita biby izay tsy hitan'ny hafa.",
    t4_title:"Fihaonana amin'ny Gidro", t4_desc:"Mifanatrika amin'ny gidro misy rambony, gidro volontsôkôlà ary sifaka eo amin'ny toerana misy azy. Tsy hita afa-tsy eto Madagasikara.",
    t5_title:"Fitsidihana Vohitra", t5_desc:"Mihoatra ny karatra. Ny fifandraisan'i Naina amin'ny fiarahamonina eo an-toerana dia manokatra varavarana mihidy amin'ny mpizaha-tany hafa.",
    t6_title:"Tora-pasika & Morontsiraka", t6_desc:"Ny morontsirakan'i Morondava dia hentitra sy mahafinaritra. Mandeha lakana nentim-paharazana ary mitady ny paradisan'nao manokana.",
    tag_iconic:"Malaza", tag_wildlife:"Biby", tag_unique:"Manokana", tag_culture:"Kolontsaina", tag_coastal:"Morontsiraka",
    gallery_label:"Sary", gallery_title:"Madagasikara amin'ny Mason'i Naina", gallery_sub:"Ny sary tsirairay dia mitantara.",
    test_label:"Tantaran'ny Mpandeha", test_title:"Ahoana ny Hevitr'izy ireo",
    test1_q:"Efa nanana mpitarika teo amin'ny kaontinanta rehetra aho, fa Naina dia hafa mihitsy. Nahita toerana ho anay teo amin'ny Lalan'ny Baobab izay tsy ho hitan'ny mpizaha-tany hafa izy — izahay ihany, ireo hazo arivo taona, ary ny masoandro milentika mahagaga indrindra teo amin'ny fiainako. Marina, mahafinaritra, ary be fahalalana tsy manam-pahataperana. Naina no nanao io dia io ho dia hitantarako mandritra ny androm-piainako.",
    test1_loc:"🇬🇧 Angletera",
    test2_q:"Efa 40 taona aho mandeha dia, ary izao no voalohany nahitako mpitarika nahazo izay zava-dehibe tamiko — tsy ny toerana malaza ihany, fa ny tantara, ny olona, ny fotoana mangina. Naina nampahafantatra ahy loholon'ny vohitra iray izay nanana fahalalana mahagaga momba ny tantaran'i Madagasikara. Io tolak'andro io dia nanova ny fijeriko an'izao tontolo izao.",
    test2_loc:"🇺🇸 Etazonia",
    test3_q:"Ny dia tao amin'ny Tsingy dia tsy nitovy tamin'izay rehetra nataoko. Naina nametraka hafainganam-pandeha tonga lafatra, nahita biby izay tsy ho hitako mihitsy, ary afaka namaly fanontaniana rehetra momba ny jeolojia. Ny fitsangantsanganana alina tao Kirindy nahitanay fossa? Mbola resahiko foana izany. Efa manomana dia amin'ny antokon'olona miaraka amin'ny sakaizako avy any Tbilisi aho.",
    test3_loc:"🇬🇪 Jeorjia",
    test4_q:"Kely ny ahiahiko talohan'ny dia — lavitra sy tsy fantatra ny Madagasikara. Fa ny hafanan'i Naina dia nanala ny ahiahiko hatramin'ny andro voalohany. Miteny kely rosianina aza izy, izay toy ny fahagagana kely any lavitra any. Ny traikefa ara-kolontsaina nomaniny dia tena marina, tsy natao ho an'ny mpizaha-tany. Nandao tamin'ny fihetsikam-piainana voaray aho. Madagasikara dia ao am-poko mandrakizay.", test4_loc:"🇷🇺 Rosia", italian_joke:"🤌 Miala tsiny, tsy misy Italiana.", contact_label:"Mifandraisa", contact_title:"Vonona Hikaroka an'i Madagasikara?", contact_sub:"Lazao amin'i Naina izay itarihin'ny fahaliananao. Izy no hiandraikitra ny ambiny.",
    c_phone_label:"Finday & WhatsApp", c_loc_label:"Monina ao", c_wa_btn:"Manoratra amin'ny WhatsApp",
    form_title:"Mandefa Hafatra", form_name:"Anaranao", form_email:"Adiresy Mailaka", form_interest:"Liana amin'ny",
    form_select:"— Misafidy fizahan-tany —", form_custom:"Dia manokana", form_msg:"Hafatrao", form_send:"Alefa",
    form_ok:"Lasa ny hafatra! Hifandray aminao i Naina tsy ho ela.",
    footer_tag:"Mpitarika Fizahan-tany · Morondava, Madagasikara", footer_copy:"© 2026 Naina — Mpitarika, Morondava, Madagasikara", footer_love:"Vita tamin'ny ❤️ ho fitiavana an'i Madagasikara"
  }
};

let currentLang = "en";

function setLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (T[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = T[lang][key];
      } else {
        el.innerHTML = T[lang][key];
      }
    }
  });
  // Update lang switcher button
  const btn = document.getElementById("langBtn");
  const flagEl = document.getElementById("langFlag");
  const codeEl = document.getElementById("langCode");
  const items = document.querySelectorAll("#langDropdown li");
  items.forEach(li => {
    li.classList.toggle("active", li.dataset.lang === lang);
    if (li.dataset.lang === lang) {
      flagEl.textContent = li.dataset.flag;
      codeEl.textContent = lang.toUpperCase();
    }
  });
  localStorage.setItem("naina-lang", lang);
}

// ---- Nav scroll ----
const navbar = document.getElementById("navbar");
function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Mobile toggle ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ---- Lang switcher ----
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
langBtn.addEventListener("click", e => {
  e.stopPropagation();
  const open = langDropdown.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", open);
});
document.addEventListener("click", () => {
  langDropdown.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
});
langDropdown.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    setLang(li.dataset.lang);
    langDropdown.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  });
});

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));

// ---- Lightbox ----
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
const galItems = document.querySelectorAll(".gal-item");
let lbIdx = 0;
const srcs = Array.from(galItems).map(g => ({ src: g.dataset.src, cap: g.dataset.cap || "" }));

function openLb(i) {
  lbIdx = i;
  lbImg.src = srcs[i].src;
  lbImg.alt = srcs[i].cap;
  lbCap.textContent = srcs[i].cap;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLb() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}
function navLb(dir) {
  lbIdx = (lbIdx + dir + srcs.length) % srcs.length;
  lbImg.src = srcs[lbIdx].src;
  lbImg.alt = srcs[lbIdx].cap;
  lbCap.textContent = srcs[lbIdx].cap;
}

galItems.forEach((g, i) => g.addEventListener("click", () => openLb(i)));
document.getElementById("lbClose").addEventListener("click", closeLb);
document.getElementById("lbPrev").addEventListener("click", () => navLb(-1));
document.getElementById("lbNext").addEventListener("click", () => navLb(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLb(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") navLb(-1);
  if (e.key === "ArrowRight") navLb(1);
});

// ---- Contact form ----
const contactForm = document.getElementById("contactForm");
const formOk = document.getElementById("formOk");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const name = document.getElementById("fname").value;
    const email = document.getElementById("femail").value;
    const trip = document.getElementById("ftrip").value;
    const msg = document.getElementById("fmsg").value;
    const waText = encodeURIComponent(`Hi Naina! My name is ${name} (${email}).\nI'm interested in: ${trip || "a custom trip"}.\n\n${msg}`);
    window.open(`https://wa.me/261329501706?text=${waText}`, "_blank");
    contactForm.classList.add("hidden");
    formOk.classList.remove("hidden");
    setTimeout(() => { contactForm.classList.remove("hidden"); formOk.classList.add("hidden"); contactForm.reset(); }, 5000);
  });
}

// ---- Smooth scroll offset for fixed nav ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// ---- Init lang from localStorage ----
const saved = localStorage.getItem("naina-lang");
if (saved && T[saved]) setLang(saved);
