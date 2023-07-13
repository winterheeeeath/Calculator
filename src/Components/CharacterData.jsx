function readFilesFromDirectory(directory) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', directory);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const files = xhr.responseText.split('\n');
        resolve(files);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function() {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

const avatarFiles = readFilesFromDirectory('./GenshinSrc')
  .then(files => files.filter(file => file.startsWith('ca')))
  .then(filteredFiles => filteredFiles.map(file => file.replace('.png', '')))
  .catch(error => console.error(error));

const backgroundFiles = readFilesFromDirectory('./GenshinSrc')
  .then(files => files.filter(file => file.startsWith('cb')))
  .then(filteredFiles => filteredFiles.map(file => file.replace('.png', '')))
  .catch(error => console.error(error));


const characterData = [
  {
    CharId: 1,
    CharName: "Albedo",
    CharVision: "Geo",
    CharClass: "Sword",
    CharRegion: "Mondstadt",
    CharDescription: "A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
  },
  {
    CharId: 2,
    CharName: "Alhaitham",
    CharVision: "Dendro",
    CharClass: "Sword",
    CharRegion: "Sumeru",
    CharDescription: "Alhaitham is a member of the Haravatat of the Sumeru Akademiya and the Akademiya's Scribe, responsible for documenting their findings and drafting ordinances. Despite his brilliance, people within the Akademiya are perplexed by Alhaitham due to his unwillingness to aspire for higher office in spite of his egocentricity, and many have been at odds with him for his uncompromising view on rationality and the truth.",
  },
  {
    CharId: 3,
    CharName: "Aloy",
    CharVision: "Cryo",
    CharClass: "Bow",
    CharRegion: "Mondstadt",
    CharDescription: "She is the heroine from Horizon Zero Dawn and is introduced as a collaboration and crossover character between Guerrilla Games and HoYoverse.",
  },
  {
    CharId: 4,
    CharName: "Amber",
    CharVision: "Pyro",
    CharClass: "Bow",
    CharRegion: "Mondstadt",
    CharDescription: "As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more challenging task.",
  },
  {
    CharId: 5,
    CharName: "Arataki Itto",
    CharVision: "Geo",
    CharClass: "Claymore",
    CharRegion: "Inazuma",
    CharDescription: "A loud and proud descendant of the crimson oni, Itto is also the leader and founder of the Arataki Gang. While not a villain, his reputation as a delinquent in Inazuma City leaves something to be desired.",
  },
  {
    CharId: 6,
    CharName: "Baizhu",
    CharVision: "Dendro",
    CharClass: "Catalyst",
    CharRegion: "Liyue",
    CharDescription: "The owner of Bubu Pharmacy and Qiqi's guardian, Doctor Baizhu is a master of the medicinal arts and the latest recipient of a generational contract with a white snake named Changsheng. He seeks to achieve immortality to ensure he is the last to ever bear his contract, saving potential inheritors and even Changsheng herself from the cost that comes with its power.",
  },
  {
    CharId: 7,
    CharName: "Barbara",
    CharVision: "Hydro",
    CharClass: "Catalyst",
    CharRegion: "Mondstadt",
    CharDescription: "She is the deaconess of the Church of Favonius and a prominent idol after learning about them from the intrepid adventurer Alice. She is also the younger sister of the Acting Grand Master Jean.",
  },
  {
    CharId: 8,
    CharName: "Beidou",
    CharVision: "Electro",
    CharClass: "Claymore",
    CharRegion: "Liyue",
    CharDescription: "She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang — a trait that the other appreciates, yet grows irritated by.",
  },
  {
    CharId: 9,
    CharName: "Bennett",
    CharVision: "Pyro",
    CharClass: "Sword",
    CharRegion: "Mondstadt",
    CharDescription: "An orphan discovered by an elderly adventurer as a baby, Bennett was raised in Mondstadt's Adventurers' Guild. He is the one and only member of Benny's Adventure Team, as everyone else left the team after experiencing the constant misfortune that follows him.",
  },
  {
    CharId: 10,
    CharName: "Candace",
    CharVision: "Hydro",
    CharClass: "Polearm",
    CharRegion: "Sumeru",
    CharDescription: "The scion of Al-Ahmar and the Guardian of Aaru Village, Candace is kind to travelers who visit, but is unforgiving to those who violate the village's rules.",
  },
  {
    CharId: 11,
    CharName: "Chongyun",
    CharVision: "Cryo",
    CharClass: "Claymore",
    CharRegion: "Liyue",
    CharDescription: "Born with an excess of yang (positive) energy, Chongyun has become a highly effective exorcist in Liyue — so effective to the point where he hasn't seen a spirit himself, as they immediately flee when he approaches. The excessive yang energy also makes him particularly susceptible to heat and strong emotion, which has led to some rather unexpected results.",
  },
  {
    CharId: 12,
    CharName: "Collei",
    CharVision: "Dendro",
    CharClass: "Bow",
    CharRegion: "Sumeru",
    CharDescription: "She has appeared in the official Manga and serves as one of its main characters. Originally a victim of Fatui human experimentation, Collei wandered the world as a vagrant until she met Amber in Mondstadt. Since then, Collei has turned her life around, and currently serves as a trainee Forest Ranger in the Avidya Forest.",
  },
  {
    CharId: 13,
    CharName: "Cyno",
    CharVision: "Electro",
    CharClass: "Polearm",
    CharRegion: "Sumeru",
    CharDescription: "As the General Mahamatra, Cyno leads the Matra and strikes fear into the hearts of researchers of the Sumeru Akademiya. In spite of this, Cyno has a fun side outside of his role in the Akademiya, as he has an affinity for Genius Invokation TCG and constantly cracks unfunny jokes.",
  },
  {
    CharId: 14,
    CharName: "Dehya",
    CharVision: "Pyro",
    CharClass: "Claymore",
    CharRegion: "Sumeru",
    CharDescription: "A fierce and strong warrior, the Flame-Mane Dehya is considered a legend among the Eremites for her might, passion, and conscientiousness. Unwilling to be trapped by the conditions that force most from the desert to stay there, she aspires to deliver hope back to the sands that she considers her home.",
  },
  {
    CharId: 15,
    CharName: "Diluc",
    CharVision: "Pyro",
    CharClass: "Claymore",
    CharRegion: "Mondstadt",
    CharDescription: "Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt. While a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way.",
  },
  {
    CharId: 16,
    CharName: "Diona",
    CharVision: "Cryo",
    CharClass: "Bow",
    CharRegion: "Mondstadt",
    CharDescription: "Despite being a bartender at the Cat's Tail, she loathes alcohol and will stop at nothing to ruin Mondstadt's wine industry — a feat easier said than done when her patrons absolutely love her drinks. She is the daughter of Draff, a hunter in Springvale.",
  },
  {
    CharId: 17,
    CharName: "Dori",
    CharVision: "Electro",
    CharClass: "Claymore",
    CharRegion: "Sumeru",
    CharDescription: "The owner of The Palace of Alcazarzaray and a merchant of high regard, Lord Sangemah Bay is well-known for her ability to obtain anything a person needs, as long as they have enough Mora to afford her jaw-dropping prices.",
  },
  {
    CharId: 18,
    CharName: "Eula",
    CharVision: "Cryo",
    CharClass: "Claymore",
    CharRegion: "Mondstadt",
    CharDescription: "Although a descendant of the infamous and tyrannical Lawrence Clan, Eula severed her ties with the clan and became the captain of the Reconnaissance Company with the Knights of Favonius.",
  },
  {
    CharId: 19,
    CharName: "Faruzan",
    CharVision: "Anemo",
    CharClass: "Bow",
    CharRegion: "Sumeru",
    CharDescription: "She is a renowned professor of the Sumeru Akademiya and member of the Haravatat Darshan. She recently returned to the Akademiya after solving a puzzle and escaping the ruins that trapped her a century ago.",
  },
  {
    CharId: 20,
    CharName: "Fischl",
    CharVision: "Electro",
    CharClass: "Bow",
    CharRegion: "Mondstadt",
    CharDescription: "She is an investigator for Mondstadt's Adventurers' Guild, accompanied by the night raven Oz. A daring adventurer with seemingly outlandish theories that happen to turn out to be true, she claims to hail from a world beyond Teyvat.",
  },
  {
    CharId: 21,
    CharName: "Ganyu",
    CharVision: "Cryo",
    CharClass: "Bow",
    CharRegion: "Liyue",
    CharDescription: "She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as the general secretary of the Liyue Qixing.",
  },
  {
    CharId: 22,
    CharName: "Gorou",
    CharVision: "Geo",
    CharClass: "Bow",
    CharRegion: "Inazuma",
    CharDescription: "He is a general of the Watatsumi Army. Courageous and reliable, his men know they can place their trust in him both on and off of the battlefield.",
  },
  {
    CharId: 23,
    CharName: "Hu Tao",
    CharVision: "Pyro",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "Hu Tao's antics and eccentricity belies her role as the 77th Director of the Wangsheng Funeral Parlor and her talent as a poet. Nevertheless, she treats the parlor's operations with utmost importance, and holds funeral ceremonies with the highest dignity and solemnity.",
  },
  {
    CharId: 24,
    CharName: "Jean",
    CharVision: "Anemo",
    CharClass: "Sword",
    CharRegion: "Mondstadt",
    CharDescription: "The older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.",
  },
  {
    CharId: 25,
    CharName: "Kaedehara Kazuha",
    CharVision: "Anemo",
    CharClass: "Sword",
    CharRegion: "Inazuma",
    CharDescription: "A wandering samurai of the once-famed Kaedehara Clan with an ability to read the sounds of nature, Kazuha is a temporary crewmember of The Crux. Despite being burdened by the many happenings of his past, Kazuha still maintains an easygoing disposition.",
  },
  {
    CharId: 26,
    CharName: "Kaeya",
    CharVision: "Cryo",
    CharClass: "Sword",
    CharRegion: "Mondstadt",
    CharDescription: "A wandering samurai of the once-famed Kaedehara Clan with an ability to read the sounds of nature, Kazuha is a temporary crewmember of The Crux. Despite being burdened by the many happenings of his past, Kazuha still maintains an easygoing disposition.",
  },
  {
    CharId: 27,
    CharName: "Kamisato Ayaka",
    CharVision: "Cryo",
    CharClass: "Sword",
    CharRegion: "Inazuma",
    CharDescription: "She is in charge of the internal and external affairs of the Kamisato Clan and is the younger sister of Kamisato Ayato. Beautiful, dignified, and noble, Ayaka has earned the title Shirasagi Himegimi and is considered a model of perfection in Inazuma.",
  },
  {
    CharId: 28,
    CharName: "Kamisato Ayato",
    CharVision: "Hydro",
    CharClass: "Sword",
    CharRegion: "Inazuma",
    CharDescription: "He is the current head of the Kamisato Clan, the older brother of Kamisato Ayaka, and the Yashiro Commissioner. Resourceful and cunning, Ayato keeps a lower profile than his sister and focuses on government affairs in the Commission.",
  },
  {
    CharId: 29,
    CharName: "Kaveh",
    CharVision: "Dendro",
    CharClass: "Claymore",
    CharRegion: "Sumeru",
    CharDescription: "The architect behind the Palace of Alcazarzaray, Kaveh was a student of the Kshahrewar Darshan of the Sumeru Akademiya and graduated with honors, earning the moniker Light of Kshahrewar. Having become insolvent after the construction of the Palace of Alcazarzaray, he was forced to reside with Alhaitham, whom he has a complicated relationship with. In spite of the illustrious façade he maintains to outsiders, Kaveh is often saddled with guilt for his father's death, ashamed of his poverty, and struggling with realizing his ideals.",
  },
  {
    CharId: 30,
    CharName: "Keqing",
    CharVision: "Electro",
    CharClass: "Sword",
    CharRegion: "Liyue",
    CharDescription: "As the Yuheng of the Liyue Qixing, she is someone who seeks her own answers instead of idly letting chaos run amok in Liyue. She chooses her own path with her own power and ability, instead of letting the gods determine her fate.",
  },
  {
    CharId: 31,
    CharName: "Kirara",
    CharVision: "Dendro",
    CharClass: "Sword",
    CharRegion: "Inazuma",
    CharDescription: "A youkai — a nekomata, specifically — Kirara is the Gold Level Courier of the Inazuma-based Komaniya Express. Her diligence in ensuring every package would be delivered to the right place has increased her company's renown and hers, making her the sole courier handling international deliveries. She enjoys every delivery she makes as she considers these outings for herself.",
  },
  {
    CharId: 32,
    CharName: "Klee",
    CharVision: "Pyro",
    CharClass: "Catalyst",
    CharRegion: "Mondstadt",
    CharDescription: "The daughter of the intrepid and often quite destructive adventurer Alice, Klee takes after her mother in many ways, much to the dismay of the Knights of Favonius whom she has been entrusted to.",
  },
  {
    CharId: 33,
    CharName: "Kujou Sara",
    CharVision: "Electro",
    CharClass: "Bow",
    CharRegion: "Inazuma",
    CharDescription: "A tengu, Sara is the adopted daughter of the Kujou Clan of the Tenryou Commission. Loyal to both her clan and the Shogun, Sara carries out her orders by the Shogun's will.",
  },
  {
    CharId: 34,
    CharName: "Kuki Shinobu",
    CharVision: "Electro",
    CharClass: "Sword",
    CharRegion: "Inazuma",
    CharDescription: "A former shrine maiden of the Grand Narukami Shrine, she is the sidekick of Arataki Itto and Deputy Leader of the Arataki Gang. Due to her professionalism and certifications, Kuki Shinobu has helped the Arataki Gang out of many problems, and has even expanded the gang's business scope outside of the regular mischief and delinquency.",
  },
  {
    CharId: 35,
    CharName: "Layla",
    CharVision: "Cryo",
    CharClass: "Sword",
    CharRegion: "Sumeru",
    CharDescription: "She is a student in the Rtawahist Darshan, specializing in Theoretical Astrology. Chronically sleep-deprived and of poor health as a result, Layla believes that The Stars' Blessing is the reason she wakes from sleepwalking to find her papers fully completed.",
  },
  {
    CharId: 36,
    CharName: "Lisa",
    CharVision: "Electro",
    CharClass: "Catalyst",
    CharRegion: "Mondstadt",
    CharDescription: "A powerful mage recognized as Sumeru Akademiya's most distinguished graduate in 200 years, Lisa has since returned to Mondstadt to become the humble Librarian of the Knights of Favonius.",
  },
  {
    CharId: 37,
    CharName: "Mika",
    CharVision: "Cryo",
    CharClass: "Polearm",
    CharRegion: "Mondstadt",
    CharDescription: "Huffman's younger brother and the front-line surveyor of the Knights of Favonius Reconnaissance Company led by Eula, Mika diligently fulfills all his tasks efficiently and dreams of becoming an expert cartographer in the future. In spite of his shyness towards other people, he eventually warms up to those close to him as he values teamwork immensely and desires learning from his colleagues.",
  },
  {
    CharId: 38,
    CharName: "Mona",
    CharVision: "Hydro",
    CharClass: "Catalyst",
    CharRegion: "Mondstadt",
    CharDescription: "An astrologist of knowledgeable skill and high pride, Mona has settled in Mondstadt to avoid suffering the ire of her master after unwittingly reading the latter's diary.",
  },
  {
    CharId: 39,
    CharName: "Nahida",
    CharVision: "Dendro",
    CharClass: "Catalyst",
    CharRegion: "Sumeru",
    CharDescription: "She is the vessel of Buer, as Lesser Lord Kusanali, the current Dendro Archon. Having been freed from her extensive confinement in the Sanctuary of Surasthana, she now strives to have a stronger presence in Sumeru.",
  },
  {
    CharId: 40,
    CharName: "Nilou",
    CharVision: "Hydro",
    CharClass: "Sword",
    CharRegion: "Sumeru",
    CharDescription: "A dancer under the Zubayr Theater, Nilou's dancing is but elegant and graceful — however, outside the stage's spotlight, she's just like any girl her age; warm, smiling, and friendly.",
  },
  {
    CharId: 41,
    CharName: "Ningguang",
    CharVision: "Geo",
    CharClass: "Catalyst",
    CharRegion: "Liyue",
    CharDescription: "The Tianquan of the Liyue Qixing and owner of the floating Jade Chamber in the skies of Liyue, Ningguang is a mogul who shakes the very foundations of business circles. Even grabbing a few scraps from the documents she shreds from the Jade Chamber will gift one an invaluable fragment of her wisdom, enough to stay a step or two from one's peers.",
  },
  {
    CharId: 42,
    CharName: "Noelle",
    CharVision: "Geo",
    CharClass: "Claymore",
    CharRegion: "Mondstadt",
    CharDescription: "Extremely strong and reliable, Noelle is considered to be 'the maid of all maids' in the Knights of Favonius, with many thinking she has the ability to be everywhere all at once. She is stubborn, however, and willing to unnecessarily endanger her life at any moment to help someone. She has tried many times to join the ranks of the Knights of Favonius to accomplish her dream of becoming a full-fledged knight, but has fallen short every time so far.",
  },
  {
    CharId: 43,
    CharName: "Qiqi",
    CharVision: "Cryo",
    CharClass: "Sword",
    CharRegion: "Liyue",
    CharDescription: "Resurrected as a zombie by the adepti, she has ended up in Baizhu's care and now works at Bubu Pharmacy in Liyue Harbor.",
  },
  {
    CharId: 44,
    CharName: "Raiden Shogun",
    CharVision: "Electro",
    CharClass: "Polearm",
    CharRegion: "Inazuma",
    CharDescription: "The Raiden Shogun is unique as she is comprised of two beings in one body: Ei, the current Electro Archon of Inazuma; and the Shogun, the puppet created by Ei to act as the ruler of Inazuma in her stead, which also serves as her vessel.",
  },
  {
    CharId: 45,
    CharName: "Razor",
    CharVision: "Electro",
    CharClass: "Claymore",
    CharRegion: "Mondstadt",
    CharDescription: "Abandoned as an infant, Razor was taken in by the Wolf of the North, Andrius, and raised by his wolf pack in Wolvendom. After a chance encounter with Varka, the current Grand Master of the Knights of Favonius, he has slowly started integrating with humans again through the help of his teacher Lisa.",
  },
  {
    CharId: 46,
    CharName: "Rosaria",
    CharVision: "Cryo",
    CharClass: "Polearm",
    CharRegion: "Mondstadt",
    CharDescription: "The least devout among the nuns of the Church of Favonius, Rosaria prefers acting in the shadows rather than participating in the activities of the Church.",
  },
  {
    CharId: 47,
    CharName: "Sangonomiya Kokomi",
    CharVision: "Hydro",
    CharClass: "Catalyst",
    CharRegion: "Inazuma",
    CharDescription: "The young Divine Priestess of Watatsumi Island and a descendant of the Sangonomiya Clan, Kokomi is in charge of most of Watatsumi's affairs, shouldering heavy responsibilities alone in hopes for giving Watatsumi Island's people the hopes and happiness that they desire.",
  },
  {
    CharId: 48,
    CharName: "Sayu",
    CharVision: "Anemo",
    CharClass: "Claymore",
    CharRegion: "Inazuma",
    CharDescription: "A ninja from the Shuumatsuban that is struggling with growing tall. Sayu believes that sleeping can help her growth, which is why she prefers to use her ninja techniques to hide and laze around.",
  },
  {
    CharId: 49,
    CharName: "Shenhe",
    CharVision: "Cryo",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "The daughter of an unnamed exorcist couple, Shenhe was taken in and raised by Cloud Retainer as a disciple following a traumatic incident instigated by Shenhe's father during her childhood.",
  },
  {
    CharId: 50,
    CharName: "Shikanoin Heizou",
    CharVision: "Anemo",
    CharClass: "Catalyst",
    CharRegion: "Inazuma",
    CharDescription: "He is the number one Tenryou Commission detective, harboring a rivalry with the Bantan Sango Detective Agency's Sango.",
  },
  {
    CharId: 51,
    CharName: "Sucrose",
    CharVision: "Anemo",
    CharClass: "Catalyst",
    CharRegion: "Mondstadt",
    CharDescription: "An alchemist specializing in bio-alchemy, she also serves as an assistant for Albedo, the head alchemist of the Knights of Favonius.",
  },
  {
    CharId: 52,
    CharName: "Tartaglia",
    CharVision: "Hydro",
    CharClass: "Bow",
    CharRegion: "Liyue",
    CharDescription: "He is the Eleventh of the Eleven Fatui Harbingers. Wherever he goes, danger follows, and Childe is always eager for a challenge, making him extremely dangerous despite being the youngest member.",
  },
  {
    CharId: 53,
    CharName: "Thoma",
    CharVision: "Pyro",
    CharClass: "Polearm",
    CharRegion: "Inazuma",
    CharDescription: "Hailing from Mondstadt, Thoma is the sociable and responsible housekeeper for the Kamisato Clan and a well-known fixer in Inazuma. Having amassed a powerful network of people, Thoma defends the rights and interests of the Yashiro Commission with utmost seriousness.",
  },
  {
    CharId: 54,
    CharName: "Tighnari",
    CharVision: "Dendro",
    CharClass: "Bow",
    CharRegion: "Sumeru",
    CharDescription: "Tighnari is the stern Chief Officer of the Forest Rangers and Collei's mentor. Despite his intelligence, he prefers to live a solitary life in the depths of Avidya Forest rather than in the ivory tower of Sumeru Akademiya.",
  },
  {
    CharId: 55,
    CharName: "Traveler Male",
    CharVision: "None",
    CharClass: "Sword",
    CharRegion: "None",
    CharDescription: "The Traveler is the playable protagonist of Genshin Impact. In the opening cutscene, twin siblings from another world travel through the universe, until an unknown god blocks their path. The player gets to choose either Aether (male) or Lumine (female) as the traveler and Traveler's Sibling gets captured. Their power to travel is sealed, leaving them stranded on Teyvat. They save Paimon by fishing her out of the water and she accompanies them as their new travel companion. Together they set out on a journey to find The Seven and reunite with the Traveler's lost sibling. Although players can choose the name they want to be referred by, the Traveler's Sibling refers to the Traveler by their real name, regardless of their custom name.",
  },
  {
    CharId: 56,
    CharName: "Traveler Female",
    CharVision: "None",
    CharClass: "Sword",
    CharRegion: "None",
    CharDescription: "The Traveler is the playable protagonist of Genshin Impact. In the opening cutscene, twin siblings from another world travel through the universe, until an unknown god blocks their path. The player gets to choose either Aether (male) or Lumine (female) as the traveler and Traveler's Sibling gets captured. Their power to travel is sealed, leaving them stranded on Teyvat. They save Paimon by fishing her out of the water and she accompanies them as their new travel companion. Together they set out on a journey to find The Seven and reunite with the Traveler's lost sibling. Although players can choose the name they want to be referred by, the Traveler's Sibling refers to the Traveler by their real name, regardless of their custom name.",
  },
  {
    CharId: 57,
    CharName: "Venti",
    CharVision: "Anemo",
    CharClass: "Bow",
    CharRegion: "Mondstadt",
    CharDescription: "He is a free-spirited, wine-loving bard in Mondstadt and the current mortal vessel of Barbatos, the Anemo Archon.",
  },
  {
    CharId: 58,
    CharName: "Wanderer",
    CharVision: "Anemo",
    CharClass: "Catalyst",
    CharRegion: "Sumeru",
    CharDescription: "The Wanderer came into existence in place of his previous incarnation after the latter expunged his previous appellations and their respective histories from Irminsul. Harboring his former self's memories after willingly regaining them, 'Wanderer' is now the only title he goes by, for he has no home, kin, or destination.",
  },
  {
    CharId: 59,
    CharName: "Xiangling",
    CharVision: "Pyro",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "She is the Head Chef at the Wanmin Restaurant and runs it alongside her father Chef Mao. As a chef, Xiangling isn't afraid to try out different recipes or 'exotic' ingredients, making her dishes sometimes quite unique.",
  },
  {
    CharId: 60,
    CharName: "Xiao",
    CharVision: "Anemo",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "He is an adeptus, under the name Alatus, and the sole surviving member of the five foremost Yakshas dispatched by Morax to subdue the demonic spirits that plagued Liyue. He currently resides at Wangshu Inn and mostly restrains himself from large crowds and social interactions.",
  },
  {
    CharId: 61,
    CharName: "Xingqiu",
    CharVision: "Hydro",
    CharClass: "Sword",
    CharRegion: "Liyue",
    CharDescription: "He is the second son of the Guild Manager of the Feiyun Commerce Guild, an influential group in Liyue, and is also a self-proclaimed practitioner of the Guhua Clan's arts. Also an avid reader, Xingqiu aims to be the embodiment of chivalry like the heroes from the books he reads; however, this belies his knack for mischief.",
  },
  {
    CharId: 62,
    CharName: "Xinyan",
    CharVision: "Pyro",
    CharClass: "Claymore",
    CharRegion: "Liyue",
    CharDescription: "Rock 'n' roll is a relatively unpopular style of music in Liyue, having recently been brought over from Fontaine. Xinyan, however, loves the sound — and she's slowly but surely amassing a fanbase of her own as she performs throughout Liyue Harbor.",
  },
  {
    CharId: 63,
    CharName: "Yae Miko",
    CharVision: "Electro",
    CharClass: "Catalyst",
    CharRegion: "Inazuma",
    CharDescription: "A kitsune of many facets, Yae Miko oversees the Grand Narukami Shrine, owns the Yae Publishing House, and is Eternity's servant and friend.",
  },
  {
    CharId: 64,
    CharName: "Yanfei",
    CharVision: "Pyro",
    CharClass: "Catalyst",
    CharRegion: "Liyue",
    CharDescription: "One of the few half-illuminated-beasts who have not signed a contract with Rex Lapis, Yanfei nevertheless works for the betterment of Liyue as a premier legal adviser who values fairness.",
  },
  {
    CharId: 65,
    CharName: "Yaoyao",
    CharVision: "Dendro",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "Hailing from a rural area not far from Qingce Village, Yaoyao grew up with nature at her side. Seeing potential in Yaoyao, Streetward Rambler took her in as her disciple, and Yaoyao left the tranquil mountains to live with her master in the bright and bustle Liyue Harbor.",
  },
  {
    CharId: 66,
    CharName: "Yelan",
    CharVision: "Hydro",
    CharClass: "Bow",
    CharRegion: "Liyue",
    CharDescription: "She is a mysterious person who claims to work for the Ministry of Civil Affairs, but comes out as a non-entity on their list. She also claims to work for the Yanshang Teahouse, but only uses it for her true job, an intelligence agent collaborating with Ningguang.",
  },
  {
    CharId: 67,
    CharName: "Yoimiya",
    CharVision: "Pyro",
    CharClass: "Bow",
    CharRegion: "Inazuma",
    CharDescription: "Yoimiya is the current owner of Naganohara Fireworks; with her colorful fireworks and outgoing personality, Yoimiya is loved by everyone on Narukami Island. She was coined as the 'Queen of the Summer Festival,' as they believe summer is not the same without her.",
  },
  {
    CharId: 68,
    CharName: "Yun Jin",
    CharVision: "Geo",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "A famous figure in Liyue Harbor's opera scene, Yun Jin is the director of the Yun-Han Opera Troupe, and performs at Heyu Tea House from time to time. She is also a playwright, having written all the plays the Yun-Han Opera Troupe has performed in recent years, including a new ending for 'The Divine Damsel of Devastation.'",
  },
  {
    CharId: 69,
    CharName: "Zhongli",
    CharVision: "Geo",
    CharClass: "Polearm",
    CharRegion: "Liyue",
    CharDescription: "A consultant of the Wangsheng Funeral Parlor, he is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal.",
  } 

];

const cardFiles = characterData.map(character => `.${character.CharName}_Card.webp`);

const CharacterData = characterData.map((character, index) => {
  const avatarIndex = index;
  const backgroundIndex = index;
  const cardIndex = index;

  return {
    ...character,
    CharAvatar: avatarFiles[avatarIndex],
    CharBackground: backgroundFiles[backgroundIndex],
    CharCard: cardFiles[cardIndex],
  };
});

module.exports = CharacterData;
