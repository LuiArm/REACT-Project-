import React, {useState, useEffect} from 'react'


const Restaurants = (props) => {
    const guid = "908ed631-u";
    const apiKey = "defaultlive.a8a4822112770eebf869d899c7b008af4d9445274d6499baaf1daafbd3b2f139";
    const url = `https://api.aglty.io/${guid}/fetch/en-us/list/restaurants`

    const [restaurant, setRestaruant] = useState(null)

    const getRestaurant = async () => {
        const response = await fetch(url,{
            headers: {
                accept: "application/json",
                APIkey: apiKey,  
            }
            
    })
        const data = await response.json();
        // console.log(data)
        setRestaruant(data)
        console.log(data)
    }
    useEffect(() => {getRestaurant()},[])

    return <h1>World</h1>

}
export default Restaurants