import { View, Text, Image } from 'react-native'
import React from 'react'

interface DataProp {
    item: {
        category: string,
        description: string,
        id: number,
        title: string,
        price: number,
        image: string,
        rating: any
    }
}

const ProductItem = ({ item }: DataProp) => {
    return (
        <View style={{
            width: "90%",
            alignItems: "center",
            backgroundColor: "white",
            marginTop: 20,
            flexDirection: "row",
            overflow:"hidden",
        }}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60 }} />
            <View style={{ marginLeft: 10, padding: 10 }}>
                <Text 
                style={{ fontWeight: "500", color: "black", width: "70%" }}>
                    {item.title}
                    </Text>
                <Text
                    style={{ fontSize: 12, marginTop: 10, width: "70%" }}>
                    {item.description.length > 50 ? item.description.substring(0,50)+"...": item.description}
                </Text>

            </View>
        </View>
    )
}

export default ProductItem