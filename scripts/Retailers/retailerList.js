import { useRetailers } from "./retailerProvider.js"
import Retailer from "./retailer.js"
import { useDistributors } from "../Distributors/distrubutorProvider.js"
import { useDistributorNursery } from "../distributorNursery/distributorNurseryProvider.js"
import { useflowerNursery } from "../FlowerNursery/flowerNurseryProvider.js"
import { useNurseries } from "../Nurseries/nurseriesProvider.js"
import { useFlowers } from "../Flowers/flowerProvider.js"




const contentTarget = document.querySelector(".retailers")

export const RetailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const flowers = useFlowers()
    const flowerNurseries = useflowerNursery()
    const distributorNurseries = useDistributorNursery()


    const render = () => {
        // map through the retailers to get each ones information
        contentTarget.innerHTML = retailers.map(retailer => {
            // find the instance of the distributors Id within each itteration of the retailer
            const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
            // find the nurseries for the distributor
            const distributorNursery = distributorNurseries.filter(dist => dist.distributorId === distributor.id);

            const foundNurseries = distributorNursery.map(distNurse => {
                const foundNursery = nurseries.find(currentNursery => currentNursery.id === distNurse.nurseryId);
                return foundNursery;
            })
            // Find the flowers the retailer sells based on nursery\
            debugger

            const nurseryArray = foundNurseries.map( nursery => {

            const nurseryFlowerRel  = flowerNurseries.filter(fn => fn.nurseryId === nursery.id);
            const foundFlowers = nurseryFlowerRel.map(nfr => {
            const foundFlower = flowers.find(currentflower => currentflower.id === nfr.flowerId)
                    return foundFlower
            })
            return foundFlowers
            }
            )

            return Retailer(retailer, distributor, foundNurseries, nurseryArray)
        }).join("")
    }
    render()
}

export default RetailerList