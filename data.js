import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const menuArray = [
    {
        name: "The Legend of Zelda: Tears of the Kingdom",
        description: "In addition to the vast lands of Hyrule, the latest entry in the Legend of Zelda series will take you up into the skies and an expanded world that goes beyond that.",
        tags: ["RPG", "Adventure", "Third Person"],
        platforms: ["Switch"],
        id: uuidv4(),
        price: 49,
        img: "totk.jpg",
        isinBasket: false,
        inBasket: 0,
    },
    {
        name: "Call of Duty: Modern Warfare II",
        description: 'Welcome to the new era of Call of Duty, which finds new and inventive ways to annoy people with shotguns, camping and bunny-hopping.', 
        tags: ["Action", "Mulitplayer", "FPS"],
        platforms: ["PlayStation","Xbox", "PC"],
        id: uuidv4(),
        price: 69,
        img: "cod.jpg",
        isinBasket: false,
        inBasket: 0,
    },
        {
        name: "Hollow Knight: Silksong",
        description: "Discover a vast, haunted kingdom in Hollow Knight: Silksong! The sequel to the award winning action-adventure. Explore, fight and survive as you ascend to the peak of a land ruled by silk and song.",
        tags: ["RPG", "Adventure", "Sidescroller"],
        platforms: ["Switch", "PlayStation", "Xbox", "PC"],
        id: uuidv4(),
        price: 4,
        img: "silksong.jpg",
        isinBasket: false,
        inBasket: 0,
    }
]