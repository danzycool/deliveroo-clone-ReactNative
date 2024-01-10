import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    // Executes when the UI loads
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // Executes when the component loads
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
        }`).then(data => {
            setFeaturedCategories(data)
        })
    }, []);


    return (
        <SafeAreaView>
            <View className="flex-1 bg-white pt-5 h-full">


                {/** Header */}
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

                {/** Search */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <SearchIcon color="gray" size={20} />
                        <TextInput
                            placeholder="Restaurants and cuisines"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsIcon color="#00CCBB" />
                </View>

                {/**body */}
                <ScrollView className="bg-gray-100">

                    {/** Categories */}
                    <Categories />

                    <View className="pb-5">
                        {/** Featured */}

                        {featuredCategories?.map(category => (
                            <FeaturedRow
                                key={category._id}
                                id={category._id}
                                title={category.name}
                                description={category.short_description}
                            />
                        ))}
                    </View>

                    <View className="w-full bg-[#00CCBB] p-5 mt-2">
                        <Text className="text-center text-lg font-bold color-white">Built with "❤️" by Danzycool</Text>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;