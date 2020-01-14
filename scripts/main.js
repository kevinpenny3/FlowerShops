import { getFlowers } from "./Flowers/flowerProvider.js";
import { getRetailers } from "./Retailers/retailerProvider.js";
import RetailerList from "./Retailers/retailerList.js";
import { getDistributors } from "./Distributors/distrubutorProvider.js";
import { getDistributorNursery } from "./distributorNursery/distributorNurseryProvider.js";
import { getflowerNursery } from "./FlowerNursery/flowerNurseryProvider.js";
import { getNurseries } from "./Nurseries/nurseriesProvider.js";




getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(getflowerNursery)
    .then(getNurseries)
    .then(getDistributorNursery)
    .then(RetailerList)