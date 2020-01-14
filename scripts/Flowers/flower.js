const Flower = (flower) => {
    return `
        <div class="flowerList">
            <section class="flower">
            <header class="flower__name">
                <h1>${flower.commonName}</h1>
            </header>
            <div class="flower__color">
                The Flower is ${flower.color}
            </div>
            </section>
        </div>
    `
}
export default Flower