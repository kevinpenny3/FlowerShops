import { useFlowers } from "./flowerProvider.js"
import Flower from "./flower.js"


const contentTarget = document.querySelector(".flowers")

export const FlowerList = () => {
    const flowers = useFlowers()


    const render = () => {
        contentTarget.innerHTML = flowers.map(flower => Flower(flower)).join("")
    }

    render()
}

export default FlowerList