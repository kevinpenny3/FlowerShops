let nurseries = []

export const useNurseries = () => nurseries.slice()

export const getNurseries = () => fetch("http://localhost:3000/nurseries")
    .then(res => res.json())
    .then(parsedNurseries => nurseries = parsedNurseries)