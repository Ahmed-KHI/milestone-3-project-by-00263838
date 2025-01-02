export default function handler( req, res ) {
    const products = [
        {
            id: 1,
            name: "Tandoori Chicken",
            price: 12,
            image: "/id-1.jpg",
        },
        {
            id: 2,
            name: "Prosciutto e Rucola",
            price: 32,
            image: "/id-2.jpg",
        },
        {
            id: 3,
            name: "Mexicana",
            price: 25,
            image: "/id-3.jpg",
        },
        {
            id: 4,
            name: "Sicilian",
            price: 17,
            image: "/id-4.jpg",
        },
        {
            id: 5,
            name: "Souvlaki",
            price: 19,
            image: "/id-5.jpg",
        },
        {
            id: 6,
            name: "Peking Duck",
            price: 22,
            image: "/id-6.jpg",
        },
    ];

    res.status(200).json(products);
}