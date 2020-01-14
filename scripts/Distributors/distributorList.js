import { useDistributors } from "./distrubutorProvider.js"
import Distributor from "./distributor.js"


const contentTarget = document.querySelector(".distributors")

export const DistributorList = () => {
    const distributors = useDistributors()


    const render = () => {
        contentTarget.innerHTML = distributors.map(distributor => Distributor(distributor)).join("")
    }

    render()
}

export default DistributorList