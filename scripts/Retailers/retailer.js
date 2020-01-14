const Retailer = (retailer, distributor, nurseries, flowers) => {
    console.log(flowers)
    return `
        <article class="retailerInformation">
        <section class="retailerList">
        <div class="retailer">
            <header class="retailer__name">
                <h1>${retailer.name}</h1>
            </header>
            <div class="flowersSold">
            <ul class="individualFlowers">
                    ${flowers.map(flower =>
                        `
                         ${flower.map(individualFlower => {return `<li>${individualFlower.commonName}</li>`}).join("")}
                            
                        `
                       ).join("")
                     }
                </ul>
            </div>
            <div class="retailer__cityState">
                Located in ${retailer.city}, ${retailer.state}
            </div>
            <div class="retailer__address">
                 ${retailer.address}
            </div>
        </div>
        </section>
        <section class="distributorList">
        <div class="distributor">
            <header class="distributor__name">
                <div class="distributorName">Distributor: ${distributor.name}<div>
            </header>
            <div class="nurseries">
                <div>Nurseries Purchased From:</div>
                <ul class="individualNurseries">
                    ${nurseries.map(nursery =>
                        `
                        <li>${nursery.name}</li>
                        `
                       ).join("")
                     }</li>
                </ul>
            </div>
        </div>
        </section>
        </article>
    `
}

export default Retailer