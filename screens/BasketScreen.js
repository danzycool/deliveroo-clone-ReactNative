import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    return (
        <SafeAreaView>
            <View>
                <Text>BasketScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen