import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DishRow = ({ id, name, description, price, image }) => {
    const formatter = (num) => {
        return num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    return (
        <TouchableOpacity>
            <View>
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text className="text-gray-400 mt-2">
                    {formatter({ price }.price)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default DishRow