const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { Rooms } = require("../models");

initModels();

const rooms = [
  {
    type: "Deluxe 2 Queen Ocean Front Balcony ",
    number: 1,
    floor: 10,
    characteristics:
      "A spacious Deluxe 2 Queen bedroom with Balcony.  Floor-to-ceiling views of the Atlantic.  Designed to accommodate your every need and pamper you with Sleep linen, bedding, and luxurious bath amenities.  ",
    price: 441.75,
  },
  {
    type: "City View King Bedroom Suite",
    number: 1,
    floor: 9,
    characteristics:
      "Our Studio Suite gives youroom to spread out. We set you up with views of Atlantic Avenue in Daytona Beach and sitting area with a sofas bed where you can soak in the relaxation with plush bedding and Spa bath amenities.",
    price: 380.0,
  },
  {
    type: "Courtyard Suite King",
    number: 1,
    floor: 1,
    characteristics:
      "Our Courtyard Suite with a King Bed gives you room to spread out. We set you up with a living room & dining area, and you can soak in the relaxation with plush bedding and Spa bath amenities.",
    price: 343.88,
  },
  {
    type: "Ocean Front King Balcony - Sofa Bed",
    number: 1,
    floor: 8,
    characteristics:
      "Your Ocean Front room says, you're here to have a good time. We'll set you up to do just that—with single or connecting rooms, king bed and VIP amenities including Sleep bedding and  Spa bath products.",
    price: 350.75,
  },
  {
    type: "Royalty King Ocean Front Studio Suite",
    number: 1,
    floor: 12,
    characteristics:
      "Our Suites gives you room to spread out. We set you up with a private patio and living room with dining area, and you can soak in the relaxation with plush bedding and  Spa bath amenities.",
    price: 735.0,
  },
];

async function seeding() {
  await db.sync({ force: true });
  await forEach(rooms, (room) => Rooms.create(room));
}
seeding();
