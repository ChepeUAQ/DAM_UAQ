const characterData = [
    { id: 0, charName: 'Mario', icon: 'https://ssb.wiki.gallery/images/9/9e/MarioHeadSSBUWebsite.png', gameSeries: 'Super Mario', predominantColor: '#ff4444' },
    { id: 1, charName: 'Donkey Kong', icon: 'https://ssb.wiki.gallery/images/2/21/DonkeyKongHeadSSBUWebsite.png', gameSeries: 'Donkey Kong', predominantColor: '#e17055' },
    { id: 2, charName: 'Link', icon: 'https://ssb.wiki.gallery/images/2/2b/LinkHeadSSBUWebsite.png', gameSeries: 'The Legend of Zelda', predominantColor: '#228B22' },
    { id: 3, charName: 'Samus', icon: 'https://ssb.wiki.gallery/images/d/d0/SamusHeadSSBUWebsite.png', gameSeries: 'Metroid', predominantColor: '#ff9900' },
    { id: 4, charName: 'Dark Samus', icon: 'https://ssb.wiki.gallery/images/2/24/DarkSamusHeadSSBUWebsite.png', gameSeries: 'Metroid', predominantColor: '#0088aa' },
    { id: 5, charName: 'Yoshi', icon: 'https://ssb.wiki.gallery/images/9/93/YoshiHeadSSBUWebsite.png', gameSeries: 'Yoshi', predominantColor: '#6ac70b' },
    { id: 6, charName: 'Kirby', icon: 'https://ssb.wiki.gallery/images/1/15/KirbyHeadSSBUWebsite.png', gameSeries: 'Kirby', predominantColor: '#ff69b4' },
    { id: 7, charName: 'Fox', icon: 'https://ssb.wiki.gallery/images/c/c9/FoxHeadSSBUWebsite.png', gameSeries: 'Star Fox', predominantColor: '#ffcc00' },
    { id: 8, charName: 'Pikachu', icon: 'https://ssb.wiki.gallery/images/5/52/PikachuHeadSSBUWebsite.png', gameSeries: 'Pokémon', predominantColor: '#ffdd44' },
    { id: 9, charName: 'Luigi', icon: 'https://ssb.wiki.gallery/images/9/9d/LuigiHeadSSBUWebsite.png', gameSeries: 'Super Mario', predominantColor: '#1a9b06' },
    { id: 10, charName: 'Ness', icon: 'https://ssb.wiki.gallery/images/d/d5/NessHeadSSBUWebsite.png', gameSeries: 'EarthBound', predominantColor: '#ff3344' },
    { id: 11, charName: 'Captain Falcon', icon: 'https://ssb.wiki.gallery/images/6/6b/CaptainFalconHeadSSBUWebsite.png', gameSeries: 'F-Zero', predominantColor: '#5588cc' },
    { id: 12, charName: 'Jigglypuff', icon: 'https://ssb.wiki.gallery/images/9/90/JigglypuffHeadSSBUWebsite.png', gameSeries: 'Pokémon', predominantColor: '#ffb6c1' },
    { id: 13, charName: 'Peach', icon: 'https://ssb.wiki.gallery/images/1/14/PeachHeadSSBUWebsite.png', gameSeries: 'Super Mario', predominantColor: '#ff99cc' },
    { id: 14, charName: 'Daisy', icon: 'https://ssb.wiki.gallery/images/2/2d/DaisyHeadSSBUWebsite.png', gameSeries: 'Super Mario', predominantColor: '#ffa500' },
    { id: 15, charName: 'Bowser', icon: 'https://ssb.wiki.gallery/images/0/0b/BowserHeadSSBUWebsite.png', gameSeries: 'Super Mario', predominantColor: '#44aa33' },
    { id: 16, charName: 'Ice Climbers', icon: 'https://ssb.wiki.gallery/images/0/0c/IceClimbersHeadSSBUWebsite.png', gameSeries: 'Ice Climber', predominantColor: '#87cefa' },
    { id: 17, charName: 'Sheik', icon: 'https://ssb.wiki.gallery/images/1/1e/SheikHeadSSBUWebsite.png', gameSeries: 'The Legend of Zelda', predominantColor: '#4488aa' },
    { id: 18, charName: 'Zelda', icon: 'https://ssb.wiki.gallery/images/c/c8/ZeldaHeadSSBUWebsite.png', gameSeries: 'The Legend of Zelda', predominantColor: '#d4a017' },
    { id: 19, charName: 'Dr. Mario', icon: 'https://ssb.wiki.gallery/images/c/c8/DrMarioHeadSSBUWebsite.png', gameSeries: 'Super Mario', predominantColor: '#ffffff' },
    { id: 20, charName: 'Pichu', icon: 'https://ssb.wiki.gallery/images/5/50/PichuHeadSSBUWebsite.png', gameSeries: 'Pokémon', predominantColor: '#ffdd44' },
    { id: 21, charName: 'Falco', icon: 'https://ssb.wiki.gallery/images/6/6e/FalcoHeadSSBUWebsite.png', gameSeries: 'Star Fox', predominantColor: '#1289A7' },
    { id: 22, charName: 'Marth', icon: 'https://ssb.wiki.gallery/images/a/ae/MarthHeadSSBUWebsite.png', gameSeries: 'Fire Emblem', predominantColor: '#575fcf' },
    { id: 23, charName: 'Lucina', icon: 'https://ssb.wiki.gallery/images/d/d8/LucinaHeadSSBUWebsite.png', gameSeries: 'Fire Emblem', predominantColor: '#575fcf' },
    { id: 24, charName: 'Young Link', icon: 'https://ssb.wiki.gallery/images/c/c0/YoungLinkHeadSSBUWebsite.png', gameSeries: 'The Legend of Zelda', predominantColor: '#228B22' },
    { id: 25, charName: 'Ganondorf', icon: 'https://ssb.wiki.gallery/images/b/b6/GanondorfHeadSSBUWebsite.png', gameSeries: 'The Legend of Zelda', predominantColor: '#b33939' },
    { id: 26, charName: 'Mewtwo', icon: 'https://ssb.wiki.gallery/images/7/7e/MewtwoHeadSSBUWebsite.png', gameSeries: 'Pokémon', predominantColor: '#9370db' },
    { id: 27, charName: 'Roy', icon: 'https://ssb.wiki.gallery/images/2/22/RoyHeadSSBUWebsite.png', gameSeries: 'Fire Emblem', predominantColor: '#ff5252' },
    { id: 28, charName: 'Chrom', icon: 'https://ssb.wiki.gallery/images/7/70/ChromHeadSSBUWebsite.png', gameSeries: 'Fire Emblem', predominantColor: '#336699' },
    { id: 29, charName: 'Mr. Game & Watch', icon: 'https://ssb.wiki.gallery/images/1/15/MrGame%26WatchHeadSSBUWebsite.png', gameSeries: 'Game & Watch', predominantColor: '#84817a' },
    { id: 30, charName: 'Meta Knight', icon: 'https://ssb.wiki.gallery/images/3/3d/MetaKnightHeadSSBUWebsite.png', gameSeries: 'Kirby', predominantColor: '#706fd3' },
    { id: 31, charName: 'Pit', icon: 'https://ssb.wiki.gallery/images/d/d7/PitHeadSSBUWebsite.png', gameSeries: 'Kid Icarus', predominantColor: '#f8f8f8' },
    { id: 32, charName: 'Dark Pit', icon: 'https://ssb.wiki.gallery/images/8/8b/DarkPitHeadSSBUWebsite.png', gameSeries: 'Kid Icarus', predominantColor: '#474787' },
    { id: 33, charName: 'Zero Suit Samus', icon: 'https://ssb.wiki.gallery/images/5/5a/ZeroSuitSamusHeadSSBUWebsite.png', gameSeries: 'Metroid', predominantColor: '#0073e6' },
    { id: 34, charName: 'Wario', icon: 'https://ssb.wiki.gallery/images/7/7f/WarioHeadSSBUWebsite.png', gameSeries: 'Wario', predominantColor: '#ffd700' },
    { id: 35, charName: 'Snake', icon: 'https://ssb.wiki.gallery/images/9/9f/SnakeHeadSSBUWebsite.png', gameSeries: 'Metal Gear', predominantColor: '#5d5d5d' },
    { id: 36, charName: 'Ike', icon: 'https://ssb.wiki.gallery/images/2/25/IkeHeadSSBUWebsite.png', gameSeries: 'Fire Emblem', predominantColor: '#c44569' },
    { id: 37, charName: 'Pokémon Trainer', icon: 'https://ssb.wiki.gallery/images/2/2c/Pok%C3%A9monTrainerHeadSSBUWebsite.png', gameSeries: 'Pokémon', predominantColor: '#ff4444' },
    { id: 38, charName: 'Diddy Kong', icon: 'https://ssb.wiki.gallery/images/5/5d/DiddyKongHeadSSBUWebsite.png', gameSeries: 'Donkey Kong', predominantColor: '#a52a2a' },
    { id: 39, charName: 'Lucas', icon: 'https://ssb.wiki.gallery/images/3/31/LucasHeadSSBUWebsite.png', gameSeries: 'EarthBound', predominantColor: '#fada5e' },
    { id: 40, charName: 'Sonic', icon: 'https://ssb.wiki.gallery/images/b/b7/SonicHeadSSBUWebsite.png', gameSeries: 'Sonic the Hedgehog', predominantColor: '#0059ff' },
    { id: 41, charName: 'King Dedede', icon: 'https://ssb.wiki.gallery/images/f/fe/KingDededeHeadSSBUWebsite.png', gameSeries: 'Kirby', predominantColor: '#ffcc00' },
    { id: 42, charName: 'Olimar', icon: 'https://ssb.wiki.gallery/images/9/97/OlimarHeadSSBUWebsite.png', gameSeries: 'Pikmin', predominantColor: '#c7a008' },
    { id: 43, charName: 'Lucario', icon: 'https://ssb.wiki.gallery/images/2/20/LucarioHeadSSBUWebsite.png', gameSeries: 'Pokémon', predominantColor: '#0066cc' },
    { id: 44, charName: 'R.O.B.', icon: 'https://ssb.wiki.gallery/images/b/be/ROBHeadSSBUWebsite.png', gameSeries: 'R.O.B.', predominantColor: '#aaaaaa' },
    { id: 45, charName: 'Toon Link', icon: 'https://ssb.wiki.gallery/images/b/bf/ToonLinkHeadSSBUWebsite.png', gameSeries: 'The Legend of Zelda', predominantColor: '#00cc66' },
    { id: 46, charName: 'Wolf', icon: 'https://ssb.wiki.gallery/images/0/06/WolfHeadSSBUWebsite.png', gameSeries: 'Star Fox', predominantColor: '#7250b9' }
];

export default characterData;
