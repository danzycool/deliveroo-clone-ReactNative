import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

import { urlFor } from '../sanity';
import { addToBasket, selectBasketItems } from '../features/basketSlice';

const DishRow = ({ id, name, description, price, image }) => {
    const formatter = (num) => {
        return num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    console.log(items)

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200
                ${isPressed && "border-b-0"}`}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            {formatter({ price }.price)}
                        </Text>
                    </View>

                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4",
                            }}
                            source={{ uri: urlFor(image).url() }}
                            className="h-20 w-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity >

            {isPressed &&
                (<View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>

                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                </View>)
            }
        </>
    )
}

export default DishRow