import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  categorySet: string;
  // languageSet: string;
  // productType: string;
}

export interface CardList {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  categorySet: string;
}

export interface AccessoriesList {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  categorySet: string;
}

export interface ToysList {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  categorySet: string;
}

export interface ChineseProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  categorySet: string;
}

// export interface CardsItems {
//   id: number | string;
//   amount: number;
//   product: CardList;
//   totalProductPrice: number;
// }

export interface CartItem {
  id: number | string;
  amount: number;
  product: Product;
  totalProductPrice: number;
}

export interface NewCart {
  [key: string]: CartItem;
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private toys: ToysList[] = [
    {
      id: 1,
      name: 'Birthday Pikachu Poké Plush - 9 In.',
      description:
        "With a colorful hat and shimmery present, Pikachu's all dressed up and ready to celebrate someone's birthday! Whether you gift this fun plush to a friend or display it as a centerpiece to celebrate your own special day, it's an easy way to spread the joy ",
      price: 24.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/High/10005/P10573_701E13511_01.jpg',
      category: 'Plush',
      categorySet: '',
    },
    {
      id: 2,
      name: 'Ditto As Lucario Plush - 8 ¼ In.',
      description:
        "Ditto is pretending to be Lucario! How can you tell? It's all in the eyes! Enjoy Ditto taking on lots of different looks in the Ditto As collection.",
      price: 16.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/High/10011/P10819_72-10361-101_01.jpg',
      category: 'Plush',
      categorySet: '',
    },
    {
      id: 3,
      name: 'Garchomp Raging Fury Figure by First 4 Figures',
      description:
        "Leaping into the air with daunting swipes of its clawed wings, Garchomp is the ferocious star of this limited edition Pokémon collectible made by First 4 Figures. Push the button on the back of the figure's round base to illuminate the purple attack ",
      price: 249.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9911_703E12525_01.jpg',
      category: 'Figures',
      categorySet: '',
    },
    {
      id: 4,
      name: 'Iris & Salamence Pokémon Trainers Figure',
      description:
        'Iris has an impressive track record as a Pokémon Trainer, working her way up from Opelucid Gym Leader to Champion of the Unova region at a young age! Her partner Pokémon, Salamence, also made its dreams come true by gaining wings upon ',
      price: 49.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9613_703E12202_01.jpg',
      category: 'Figures',
      categorySet: '',
    },
    {
      id: 5,
      name: 'Kotobukiya Arceus Figure',
      description:
        'A collectible Kotobukiya figure featuring Arceus has arrived at Pokémon Center! The Mythical Pokémon dashes across the ruined landscape of Sinnoh’s Spear Pillar as fiery comets appear to shatter its rocklike display base. This is a definitive figure for ',
      price: 169.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9073_710-96728_01.jpg',
      category: 'Figures',
      categorySet: '',
    },
    {
      id: 6,
      name: 'Togepi Pokémon Pin',
      description:
        'It’s easy to show off your favorite Pokémon wherever you go with a too-cool Pokémon Pin! Featuring Togepi, the Spike Ball Pokémon, this collectible accessory is made of shining metal and colorful enamel, and it comes with two rubbery backers ',
      price: 8.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10008/P10605_70-10204-101_01.jpg',
      category: 'Pins',
      categorySet: '',
    },
    {
      id: 7,
      name: 'Roaring Moon Pokémon Pin',
      description:
        "It's easy to show off your favorite Pokémon wherever you go with an eye-catching Pokémon Pin! Featuring Roaring Moon, a Paradox Pokémon, this collectible accessory is made of shining metal and colorful enamel, and it comes with two rubbery backers ",
      price: 8.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9892_710E11050_01.jpg',
      category: 'Pins',
      categorySet: '',
    },
  ];

  private accessories: AccessoriesList[] = [
    {
      id: 8,
      name: 'Pokémon TCG: Caterpie Munch Time Card Sleeves (65 Sleeves)',
      description:
        'Caterpie takes time for a little snack on this set that includes enough sleeves for your full deck—with a few extra, too!',
      price: 6.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10007/P10301_705E13122_01.jpg',
      category: 'Card Sleeves',
      categorySet: '',
    },
    {
      id: 9,
      name: 'Pokémon TCG: Mythical Mew Playmat',
      description:
        'Mew frolics on this playmat that’s sized just right for even the fiercest of battles. When you aren’t playing, it’s a perfect way to add pizzazz to your workspace.',
      price: 19.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10007/P10301_705E13114_01.jpg',
      category: 'Playmats',
      categorySet: '',
    },
    {
      id: 10,
      name: 'Pokémon TCG: Caterpie Munch Time Playmat',
      description:
        'Take a bite out of TCG battles with a little help from Caterpie! The Worm Pokémon frolics on this playmat that’s sized just right for even the fiercest of battles. When you aren’t playing, it’s a perfect way to add pizzazz to your workspace.',
      price: 19.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10007/P10301_705E13109_01.jpg',
      category: 'Playmats',
      categorySet: '',
    },
    {
      id: 11,
      name: 'Pokémon TCG: Varoom & Revavroom Playmat',
      description:
        'Varoom and Revavroom pose on this playmat that’s sized just right for even the fiercest of battles. When you aren’t playing, it’s a perfect way to add pizzazz to your workspace.',
      price: 19.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10007/P10301_705E13113_01.jpg',
      category: 'Playmats',
      categorySet: '',
    },
    {
      id: 12,
      name: 'Pokémon TCG: Roaring Moon & Iron Valiant Double Deck Box',
      description:
        'Protect your favorite decks with a little help from Roaring Moon and Iron Valiant! Your cards can stay in battle-ready condition with help from two dividers and a magnetic closure that keeps everything in its place—this box is sure to delight players ',
      price: 11.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/High/10007/P10301_705E13118_01.jpg',
      category: 'Deck Boxes',
      categorySet: '',
    },
    {
      id: 13,
      name: 'Pokémon TCG: Midnight Agent Card Sleeves (65 Sleeves)',
      description:
        'Greninja takes center stage in a comic book-inspired design on this set that includes enough sleeves for your full deck—with a few extra, too!',
      price: 6.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10007/P10301_705E13146_01.jpg',
      category: 'Card Sleeves',
      categorySet: '',
    },
    {
      id: 14,
      name: 'Pokémon TCG: Wetland Wonders Deck Box',
      description:
        'Protect your favorite decks with a little help from Paldean Wooper and Clodsire! Your cards can stay in battle-ready condition in this deck box that boasts a design that shows off the adorable duo. A magnetic closure keeps everything in its place—this  ',
      price: 7.99,
      image:
        'https://www.pokemoncenter.com/images/DAMRoot/High/10007/P10301_705E13106_01.jpg',
      category: 'Deck Boxes',
      categorySet: '',
    },
  ];

  private cards: CardList[] = [
    {
      id: 15,
      name: 'N.s Reshiram',
      description: '',
      price: 14.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_167-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 16,
      name: 'Lillie.s Ribombee',
      description: '',
      price: 6.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_164-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 17,
      name: 'Volcanion EX',
      description: '',
      price: 28.49,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_182-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 18,
      name: 'Iono.s Bellibolt EX',
      description: '',
      price: 40,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_172-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 19,
      name: 'Lillie.s Clefairy EX',
      description: '',
      price: 149.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_184-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 20,
      name: 'N.s Zoroark EX',
      description: '',
      price: 130,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_185-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 21,
      name: 'Hop.s Zacian EX',
      description: '',
      price: 109.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_186-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 22,
      name: 'Salamence EX',
      description: '',
      price: 80,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_187-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 23,
      name: 'Articuno',
      description: '',
      price: 24.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_161-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 24,
      name: 'Wailord',
      description: '',
      price: 14.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_162-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 25,
      name: 'Volcanion EX',
      description: '',
      price: 3.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/journey-together/en-us/SV09_EN_171-2x.png',
      category: 'card',
      categorySet: 'Journey Together',
    },
    {
      id: 26,
      name: 'Flareon EX',
      description: '',
      price: 400,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/prismatic-evolutions/en-us/SV8pt5_EN_146-2x.png',
      category: 'card',
      categorySet: 'Prismatic Evolutions',
    },
    {
      id: 27,
      name: 'Ceruledge EX',
      description: '',
      price: 120,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/prismatic-evolutions/en-us/SV8pt5_EN_147-2x.png',
      category: 'card',
      categorySet: 'Prismatic Evolutions',
    },
    {
      id: 28,
      name: 'Vaporeon EX',
      description: '',
      price: 390,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/prismatic-evolutions/en-us/SV8pt5_EN_149-2x.png',
      category: 'card',
      categorySet: 'Prismatic Evolutions',
    },
    {
      id: 29,
      name: 'Glaceon EX',
      description: '',
      price: 380,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/prismatic-evolutions/en-us/SV8pt5_EN_150-2x.png',
      category: 'card',
      categorySet: 'Prismatic Evolutions',
    },
    {
      id: 30,
      name: 'Jolteon EX',
      description: '',
      price: 330,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/prismatic-evolutions/en-us/SV8pt5_EN_153-2x.png',
      category: 'card',
      categorySet: 'Prismatic Evolutions',
    },
    {
      id: 31,
      name: 'Umbreon EX',
      description: '',
      price: 1499.99,
      image:
        'https://dz3we2x72f7ol.cloudfront.net/expansions/prismatic-evolutions/en-us/SV8pt5_EN_161-2x.png',
      category: 'card',
      categorySet: 'Prismatic Evolutions',
    },
  ];

  // private products: Product[] = [
  //   {
  //     id: 32,
  //     name: 'Pokémon TCG Scarlet & Violet : 151 SPC',
  //     description:
  //       ' The Mythical Pokémon Mew holds many secrets of the Pokémon world, and usually only the luckiest of Trainers encounter it. But now you can add it to your own Pokédex along with even more Kanto Pokémon inside a bounty of booster packs from the Scarlet & Violet—151 expansion! Mew ex appears here as both playable and collectible metal cards, and you’ll also find a beautifully illustrated promo card featuring Mewtwo, a durable playmat and deck box, and more.\n' +
  //       '\n' +
  //       'The Pokémon TCG: Scarlet & Violet—151 Ultra-Premium Collection includes:\n' +
  //       '\n' +
  //       '    1 etched foil promo card featuring Mew ex\n' +
  //       '    1 full-art foil promo card featuring Mewtwo\n' +
  //       '    1 etched metal card featuring Mew ex\n' +
  //       '    1 playmat\n' +
  //       '    1 deck box\n' +
  //       '    1 metallic coin featuring Mew\n' +
  //       '    6 damage-counter dice\n' +
  //       '    2 plastic condition markers\n' +
  //       '    16 booster packs from Pokémon TCG: Scarlet & Violet—151\n' +
  //       '        Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack.\n' +
  //       '    A code card for Pokémon TCG Live',
  //     price: 119.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/300px_Pokemon%20TCG%20151%20Ultra%20Premium%20Collection%20Mew%20%281%29.webp',
  //     category: 'Super Premium Collection',
  //     categorySet: '',
  //   },
  //   {
  //     id: 33,
  //     name: 'Pokémon TCG Scarlet & Violet : Journey Together ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://tcg.pokemon.com/assets/img/sv-expansions/journey-together/collections/en-us/sv09-etb-en-2x.png',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 34,
  //     name: 'Pokémon TCG Scarlet & Violet : Twilight Masquerade ETB',
  //     description:
  //       ' Welcome to the land of Kitakami, where people and Pokémon live harmoniously with nature. Folktales abound, but not all is as it seems… Uncover the mystery of the masked Legendary Pokémon Ogerpon, appearing as four fearsome types of Tera Pokémon ex, and team up with more newly discovered Pokémon, like Bloodmoon Ursaluna ex and Sinistcha ex. Growing in power, Greninja, Dragapult, and Magcargo dazzle as Tera Pokémon ex, and more ACE SPEC cards round out the festivities in the Pokémon TCG: Scarlet & Violet—Twilight Masquerade expansion! ',
  //     price: 54.99,
  //     image:
  //       'https://tcg.pokemon.com/assets/img/sv-expansions/twilight-masquerade/collections/en-us/p9505-sv06-3d-pc-etb-outersleeve-right-en-2x.png',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 35,
  //     name: 'Prismatic Evolutions ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://tcg.pokemon.com/assets/img/sv-expansions/prismatic-evolutions/collections/en-us/sv8pt5-etb-pc-en-2x.png',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 36,
  //     name: 'Surging Sparks ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9508_191-85953_01.jpg',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 37,
  //     name: 'Paldean Fates ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/600px_pokemon-tcg-etb-paldean-fates.webp',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 38,
  //     name: 'Shrouded Fable ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://tcg.pokemon.com/assets/img/sv-expansions/shrouded-fable/collections/en-us/P9506_SV06pt5_3D_PC_ETB_OuterSleeve_Right_EN-2x.png',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 39,
  //     name: 'Obsidian Flames ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/600px_Pokemon_TCG_Scarlet_Violet%E2%80%94Obsidian_Flames_Elite_Trainer_Box%20%281%292.webp',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 40,
  //     name: 'Paldea Evolved ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/600px_185-85366_SV02_3D_ETB_EN-2700x2573-9566ca9.webp',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 41,
  //     name: 'Scarlet & Violet ETB',
  //     description: ' Red Apple',
  //     price: 54.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/300px_SV01_3D_ETB_Kiraidon_3.webp',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 42,
  //     name: 'Paradox Rift ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/600px_Pokemon-Scarlet-and-Violet-Paradox-Rift-ETB-Iron-Valiant',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 43,
  //     name: 'Stellar Crown ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://tcg.pokemon.com/assets/img/sv-expansions/stellar-crown/collections/en-us/sv07-etb-en-2x.png',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 44,
  //     name: 'Temporal Forces ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/collections/en-us/P9504_SV05_3D_PCenter_ETB_Walking_Wake_Right_EN-2x.png',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 45,
  //     name: '151 ETB',
  //     description: ' Red Apple, country: Poland',
  //     price: 54.99,
  //     image:
  //       'https://pokeshop.pl/images/mini/300px_Pokemon%20TCG%20Scarlet%20%26%20Violet%20151%20Elite%20Trainer%20Box.webp',
  //     category: 'Elite Trainer Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 46,
  //     name: 'Paradox Rift Booster',
  //     description: ' Red Apple, country: Poland',
  //     price: 4.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P8981_187-85399-BULK_01.jpg',
  //     category: 'Booster Packs',
  //     categorySet: '',
  //   },
  //   {
  //     id: 47,
  //     name: 'Temporal Forces Booster',
  //     description: ' Red Apple, country: Poland',
  //     price: 4.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9504_188-85981-BULK_01.jpg',
  //     category: 'Booster Packs',
  //     categorySet: '',
  //   },
  //   {
  //     id: 48,
  //     name: 'Surging Sparks Booster',
  //     description: ' Red Apple, country: Poland',
  //     price: 6.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9508_191-85932_01.jpg',
  //     category: 'Booster Packs',
  //     categorySet: '',
  //   },
  //   {
  //     id: 49,
  //     name: 'Destined Rivals Booster',
  //     description: ' Red Apple',
  //     price: 5.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10011/P10345_100-10623_01.jpg',
  //     category: 'Booster Packs',
  //     categorySet: '',
  //   },
  //   {
  //     id: 50,
  //     name: 'Twilight Masquerade Booster',
  //     description: ' Red Apple',
  //     price: 5.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9505_189-85340-BULK_01.jpg',
  //     category: 'Booster Packs',
  //     categorySet: '',
  //   },
  //   {
  //     id: 51,
  //     name: 'Pokémon TCG: Palafin ex Box',
  //     description: ' Pokémon TCG: Palafin ex Box',
  //     price: 19.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9555_290-85758_01.jpg',
  //     category: 'Boxed Sets',
  //     categorySet: '',
  //   },
  //   {
  //     id: 52,
  //     name: 'Pokémon TCG: Iron Valiant ex Box',
  //     description: ' Pokémon TCG: Iron Valiant ex Box',
  //     price: 19.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P8984_699-85713_01.jpg',
  //     category: 'Boxed Sets',
  //     categorySet: '',
  //   },
  //   {
  //     id: 53,
  //     name: 'Pokémon TCG: Prismatic Evolutions Surprise Box',
  //     description:
  //       ' Pokémon TCG: Scarlet & Violet-Prismatic Evolutions Surprise Box',
  //     price: 19.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10004/P10460_100-10096_01.jpg',
  //     category: 'Boxed Sets',
  //     categorySet: '',
  //   },
  //   {
  //     id: 54,
  //     name: '151 Booster Bundle',
  //     description: ' Pokémon TCG: Scarlet & Violet-151 Booster Bundle',
  //     price: 23.99,
  //     image:
  //       'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P8976_699-85322_01.jpg',
  //     category: 'Boxed Sets',
  //     categorySet: '',
  //   },
  // ];

  // private chineseProduct: ChineseProduct[] = [
  //   {
  //     id: 54,
  //     name: 'Pokemon Departure Gift Box : Charizard',
  //     description:
  //       '1.Supplementary pack (20 pieces) 3 packs \n' +
  //       '2. Collection of 151 items (20 pictures) 3 packages \n' +
  //       '3. Departure Package (2 pieces) 6 packages \n' +
  //       '4. Fire Dragon Departure Theme Art Card Cover (64 pieces) 1 set \n' +
  //       '5. Fire Dragon Departure Theme Coin Dice 1 piece \n' +
  //       '6. Injury indicator dice 4 pieces \n' +
  //       '7. Fire Dragon Departure Theme Card Storage Box (with 2 partitions) 1 piece',
  //     price: 100,
  //     image:
  //       'https://redhatgamecard.com/cdn/shop/files/49-thumb-1000xauto-27412.png?v=1749693198&width=1946',
  //     category: 'Departure Gift Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 55,
  //     name: 'Pokemon Departure Gift Box : Bulbasaur',
  //     description:
  //       "'1.Supplementary pack (20 pieces) 3 packs \\n' +\n" +
  //       "        '2. Collection of 151 items (20 pictures) 3 packages \\n' +\n" +
  //       "        '3. Departure Package (2 pieces) 6 packages \\n' +\n" +
  //       "        '4. Fire Dragon Departure Theme Art Card Cover (64 pieces) 1 set \\n' +\n" +
  //       "        '5. Fire Dragon Departure Theme Coin Dice 1 piece \\n' +\n" +
  //       "        '6. Injury indicator dice 4 pieces \\n' +\n" +
  //       "        '7. Fire Dragon Departure Theme Card Storage Box (with 2 partitions) 1 piece",
  //     price: 90,
  //     image:
  //       'https://redhatgamecard.com/cdn/shop/files/46-thumb-1000xauto-27409.png?v=1749693198&width=1946',
  //     category: 'Departure Gift Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 56,
  //     name: 'Pokemon Departure Gift Box : Blastoise',
  //     description:
  //       '1.Supplementary pack (20 pieces) 3 packs \n' +
  //       '2. Collection of 151 items (20 pictures) 3 packages \n' +
  //       '3. Departure Package (2 pieces) 6 packages \n' +
  //       '4. Fire Dragon Departure Theme Art Card Cover (64 pieces) 1 set \n' +
  //       '5. Fire Dragon Departure Theme Coin Dice 1 piece \n' +
  //       '6. Injury indicator dice 4 pieces \n' +
  //       '7. Fire Dragon Departure Theme Card Storage Box (with 2 partitions) 1 piece',
  //     price: 90,
  //     image:
  //       'https://redhatgamecard.com/cdn/shop/files/52-thumb-1000xauto-27415.png?v=1749693198&width=1946',
  //     category: 'Departure Gift Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 57,
  //     name: 'Pokemon Departure Gift Box : Gardevoir',
  //     description:
  //       '1.Supplementary pack (20 pieces) 3 packs \n' +
  //       '2. Collection of 151 items (20 pictures) 3 packages \n' +
  //       '3. Departure Package (2 pieces) 6 packages \n' +
  //       '4. Fire Dragon Departure Theme Art Card Cover (64 pieces) 1 set \n' +
  //       '5. Fire Dragon Departure Theme Coin Dice 1 piece \n' +
  //       '6. Injury indicator dice 4 pieces \n' +
  //       '7. Fire Dragon Departure Theme Card Storage Box (with 2 partitions) 1 piece',
  //     price: 90,
  //     image:
  //       'https://redhatgamecard.com/cdn/shop/files/76b42c12b393ea763fb9088fb40d8a829e86afba-thumb-1000xauto-27422.png?v=1749693198&width=1946',
  //     category: 'Departure Gift Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 58,
  //     name: 'PTCG Pokemon 10.0 Slim Pack (csv2C)',
  //     description: 'PTCG Pokemon 10.0 Slim Pack (csv2C)',
  //     price: 24.99,
  //     image:
  //       'https://redhatgamecard.com/cdn/shop/files/MBAN_ceb34304-474b-4179-a1cb-0f88fd0d4e3c.png?v=1752113956&width=1946',
  //     category: 'Booster Pack',
  //     categorySet: '',
  //   },
  //   {
  //     id: 59,
  //     name: 'Pokemon "Collect 151 Journey" Booster Box Slim',
  //     description:
  //       'Pokemon Simplified Chinese "Collect 151 Journey" Booster Box Slim',
  //     price: 70.99,
  //     image:
  //       'https://tofutcg.in/wp-content/uploads/2025/02/Untitled-design-2025-02-06T114354.826.png',
  //     category: 'Booster Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 60,
  //     name: 'Simplified Chinese Pokemon: Gem Pack Vol 2 Booster Box',
  //     description: 'Simplified Chinese Pokemon: Gem Pack Vol 2 Booster Box',
  //     price: 60.5,
  //     image:
  //       'https://www.hammerheadtcg.co.uk/cdn/shop/files/GemVol2Box.jpg?v=1747040910',
  //     category: 'Booster Box',
  //     categorySet: '',
  //   },
  //   {
  //     id: 61,
  //     name: 'Pokemon Gem Pack Vol.1 Booster Box - Simplified Chinese ',
  //     description: 'Pokemon Gem Pack Vol.1 Booster Box - Simplified Chinese ',
  //     price: 55.99,
  //     image:
  //       'https://collectorskingdom.co.uk/cdn/shop/files/151GemPack.jpg?v=1739909356',
  //     category: 'Booster Box',
  //     categorySet: '',
  //   },
  // ];

  // private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
  //   Product[]
  // >([]);

  private newCartSubject: BehaviorSubject<NewCart> =
    new BehaviorSubject<NewCart>({});

  public readonly newCart$: Observable<NewCart> =
    this.newCartSubject.asObservable();

  public readonly total$: Observable<number> = this.newCart$.pipe(
    map((res) => Object.values(res).length),
  );

  public readonly totalQty$: Observable<number> = this.newCart$.pipe(
    map((res) =>
      Object.values(res).reduce((sum, item) => sum + item.amount, 0),
    ),
  );

  public readonly totalPrice$: Observable<number> = this.newCart$.pipe(
    map((item) =>
      Object.values(item).reduce(
        (total, item) => total + item.amount * item.product.price,
        0,
      ),
    ),
  );

  constructor(
    private storage: StorageService,
    private http: HttpClient,
  ) {
    const savedCart = this.storage.get<NewCart>('cart');
    if (savedCart) {
      this.newCartSubject.next(savedCart);
    }
  }

  public getFilteredProducts(filters: {
    languageSet?: string;
    productType?: string;
  }): Observable<Product[]> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get<Product[]>('http://localhost:3000/api/all-products', {
      params,
    });
  }

  // public createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>('http://localhost:3000/products/', product);
  // }
  //
  // public deleteProduct(id: number): Observable<Product> {
  //   return this.http.delete<Product>(`http://localhost:3000/products/${id}`);
  // }

  addCartProduct(product: Product): void {
    const updatedCart: NewCart = { ...this.newCartSubject.value };
    if (!(product.id in updatedCart)) {
      updatedCart[product.id] = {
        amount: 1,
        product: product,
        id: product.id,
        totalProductPrice: product.price,
      };
    } else {
      const amount = updatedCart[product.id].amount + 1;
      updatedCart[product.id] = {
        ...updatedCart[product.id],
        amount: amount,
        totalProductPrice: amount * product.price,
      };
    }
    this.newCartSubject.next(updatedCart);
    this.storage.set('cart', updatedCart);
    // this.cartSubject.next([...this.cartSubject.value, product]);
  }

  addCartProductQty(product: Product, qty: number): void {
    const updatedCart: NewCart = { ...this.newCartSubject.value };
    if (!(product.id in updatedCart)) {
      updatedCart[product.id] = {
        amount: qty,
        product: product,
        id: product.id,
        totalProductPrice: product.price,
      };
    } else {
      const amount = updatedCart[product.id].amount + qty;
      updatedCart[product.id] = {
        ...updatedCart[product.id],
        amount: amount,
        totalProductPrice: amount * product.price,
      };
    }
    this.newCartSubject.next(updatedCart);
    // this.cartSubject.next([...this.cartSubject.value, product]);
  }

  removeFromCart(id: number): void {
    // this.cartSubject.next(
    //   this.cartSubject.value.filter((product) => product.id !== id),
    // );
    const updatedCart: NewCart = { ...this.newCartSubject.value };
    delete updatedCart[id];
    this.newCartSubject.next(updatedCart);
    this.storage.set('cart', updatedCart);
  }

  removeAllFromCart(): void {
    const updatedCart: NewCart = {};
    this.newCartSubject.next(updatedCart);
    this.storage.remove('cart');
  }

  removeOneFromCart(product: Product): void {
    const updatedCart: NewCart = { ...this.newCartSubject.value };
    const amount = updatedCart[product.id].amount - 1;
    if (product.id in updatedCart && amount >= 1) {
      updatedCart[product.id] = {
        ...updatedCart[product.id],
        amount: amount,
        totalProductPrice: amount * product.price,
      };
    } else {
      delete updatedCart[product.id];
    }
    this.newCartSubject.next(updatedCart);
    this.storage.set('cart', updatedCart);
  }
  
  public getProductsId(id: number): Observable<Product | undefined> {
    return this.http.get<Product>(
      `http://localhost:3000/api/all-products/${id}`,
    );
  }
}
