import React, {useState, useEffect} from 'react'
import Restaurant from '../components/Restaurant'

const Restaurants = (props) => {
    const guid = "908ed631-u";
    const apiKey = "defaultlive.a8a4822112770eebf869d899c7b008af4d9445274d6499baaf1daafbd3b2f139";
    // const name = props.match.params.items
    const url = `https://api.aglty.io/${guid}/fetch/en-us/list/restaurants`

    const [restaurants, setRestaruants] = useState(null)
    const [restaurant, setRestaruant] = useState(null)

    const getRestaurant = async () => {
        const response = await fetch(url,{
            headers: {
                accept: "application/json",
                APIkey: apiKey,  
            }
            
    })
        const data = await response.json();
      console.log(data) 
        setRestaruants(data)
    
    }
    

    useEffect(() => {getRestaurant()},[])

    const selectRestaurant = (r) => {
        setRestaruant(r)
    }

const loaded = () =>{
    const r = restaurant ?? restaurants.items[0]
    return <> 
            <Restaurant r={r} />
            {restaurants.items.map((item) =>{
        console.log('loaded ran',)
        return (
            <p onClick={()=>{selectRestaurant(item)}}>{item.fields.name}</p>
        )
    })}
         </>
    
     
    }
const loading = () => {
    return <h1>...Un Momento...</h1>
}
    return restaurants ? loaded() : loading()
}

export default Restaurants