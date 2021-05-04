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
       
        setRestaruant(data)
       console.log(data)
    }
    

    useEffect(() => {getRestaurant()},[])

const loaded = () =>{
    return (
    <h1>heloo </h1>
     )
    }
const loading = () => {
    return <h1>...Un Momento...</h1>
}
    return restaurant ? loaded() : loading()
}

export default Restaurants