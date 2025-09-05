import { Product,Appliance,Clothing } from "../../data/products.js";
describe("test suite: how classes work",() => {
    it('how product class work',() => {
        const product1 = new Product({

    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  
        });
    
    expect(product1.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(product1.getStarsUrl()).toEqual( `images/ratings/rating-45.png`);
    expect(product1.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
    expect(product1.getPrice()).toEqual('$10.90');
    expect(product1.rating).toEqual({stars: 4.5,
      count: 87});
    expect(product1.priceCents).toEqual(1090);
    expect(product1.extraInfoHTML()).toEqual('');
    expect(product1.getPrice()).toEqual('$10.90');
    expect(product1.getStarsUrl()).toEqual('images/ratings/rating-45.png')
    });
});

describe("test suite: how clothing classes work",() => {
    let product2
    beforeEach(() => {
        product2 = new Clothing({
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  });
    });

    it('how clothing class works', () => {
        expect(product2.id).toEqual("5968897c-4d27-4872-89f6-5bcb052746d7");
        expect(product2.name).toEqual("Women's Chiffon Beachwear Cover Up - Black");
        expect(product2.priceCents).toEqual(2070);
        expect(product2.rating).toEqual({
      stars: 4.5,
      count: 235
    });
        expect(product2.extraInfoHTML()).toContain('images/clothing-size-chart.png');
        expect(product2.getPrice()).toEqual('$20.70');
        expect(product2.getStarsUrl()).toEqual('images/ratings/rating-45.png');
    });
});

describe("test suite: how appliance class work", () => {
  let product3;
  beforeEach(() => {
    product3 = new Appliance({
       id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ],
    type:"appliance",
    instructionsLink:"images/appliance-instructions.png",
    warrantyLink:"images/appliance-warranty.png"
    });
  });
  it('how appliance class works', () => {
    expect(product3.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(product3.getStarsUrl()).toEqual( `images/ratings/rating-50.png`);
    expect(product3.name).toEqual("2 Slot Toaster - Black");
    expect(product3.getPrice()).toEqual('$18.99');
    expect(product3.rating).toEqual({stars: 5,
      count: 2197});
    expect(product3.priceCents).toEqual(1899);
    expect(product3.extraInfoHTML()).toContain(`<a href="images/appliance-warranty.png" target="_blank">
    Warranty
    </a>`);
    expect(product3.instructionsLink).toEqual('images/appliance-instructions.png');
    expect(product3.warrantyLink).toEqual('images/appliance-warranty.png')
  })
})
 