let flowerNurseries = []

export const useflowerNursery = () => flowerNurseries.slice()

export const getflowerNursery = () => fetch("http://localhost:3000/flowerNursery")
    .then(res => res.json())
    .then(parsedflowerNurseries => flowerNurseries = parsedflowerNurseries)