class Speaker {
    constructor(
        name,
        description,
        price,
        brand,
        hasFreeDelivery,
        isInStock,
        rating,
        colour
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.hasFreeDelivery = hasFreeDelivery;
        this.isInStock = isInStock;
        this.rating = rating;
        this.colour = colour;
    }
    toHtml() {
        const div = document.createElement('div');
        const entries = Object.entries(this);
        entries.forEach(element => {
            const span = document.createElement('span');
            const span_02 = document.createElement('span');
            span.textContent = element[0] + ': ';
            span_02.textContent = element[1] + '. ';
            div.appendChild(span);
            div.appendChild(span_02);
        });
        return div
    }

}
const speakers = [
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
];

speakers.forEach(element => {
    document.body.appendChild(element.toHtml());
});