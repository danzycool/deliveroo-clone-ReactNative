import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            {/**Header */}
            <View >
                <View className="flex-row pb-3 item-center justify-between mx-4 space-x-2">
                    <Image
                        source={{
                            uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />

                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now!
                        </Text>
                        <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00CCBB" />
                </View>
                {/**Search */}
                <View>
                    <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                        <SearchIcon color="#00CCBB" />
                        <TextInput
                            placeholder="Restaurants and cuisines"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsIcon color="#00CCBB" />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;