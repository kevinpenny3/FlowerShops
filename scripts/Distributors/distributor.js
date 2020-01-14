const Distributor = (distributor) => {
    return `
        <section class="distributorList">
        <div class="distributor">
            <header class="distributor__name">
                <h1>${distributor.name}</h1>
            </header>
            <div class="distributor__cityState">
                Located in ${distributor.city}, ${distributor.state}
            </div>
            <div class="distributor__address">
                 ${distributor.address}
            </div>
        </div>
        </section>
    `
}
export default Distributor