import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

interface ProductState{
    category:string,
    description: string,
    id:number,
    title:string,
    price:number,
    image:string,
    rating:any

}

const Products = () => {
    const [products, setProducts] = useState<ProductState[]>([])
    useEffect(()=>{
      getProducts()
    },[])

    const getProducts=()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(json =>{
        //   console.log(json);
          setProducts(json)
        })
    }
  return (
    <View style={{flex:1}}>
        {/* <Text>ftyfutgugihhgghhhjj</Text> */}
        <FlatList 
        data={products} 
        renderItem={({item, index}:{item:ProductState, index:number})=>{
            return(
                <ProductItem item={item}/>
            )
        }}/>
     
    </View>
  )
}

export default Products