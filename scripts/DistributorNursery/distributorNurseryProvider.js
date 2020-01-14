let distributorNursery = []

export const useDistributorNursery = () => distributorNursery.slice()

export const getDistributorNursery = () => fetch("http://localhost:3000/distributorNursery")
    .then(res => res.json())
    .then(parsedDistributorNursery => distributorNursery = parsedDistributorNursery)