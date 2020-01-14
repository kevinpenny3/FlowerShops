let retailers = []

export const useRetailers = () => retailers.slice()

export const getRetailers = () => fetch("http://localhost:3000/retailers")
    .then(res => res.json())
    .then(parsedRetailers => retailers = parsedRetailers)