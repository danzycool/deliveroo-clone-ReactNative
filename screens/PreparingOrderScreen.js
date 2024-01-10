import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])

    return (
        <SafeAreaView >
            <StatusBar
                barStyle="dark-content"
                translucent={true}
                animated={true}
                backgroundColor="#00CCBB"
            />
            <View className="bg-[#00CCBB] flex-1 h-full justify-center items-center">
                <Animatable.Image
                    source={require("../assets/orderLoading.gif")}
                    animation="slideInUp"
                    iterationCount={1}
                    className="h-96 w-96"
                />
                <Animatable.Text
                    animation="slideInUp"
                    iterationCount={1}
                    className="text-lg my-10 mx-3 text-white font-bold text-center"
                >
                    Waiting for Restaurant to accept your order!
                </Animatable.Text>
                <Progress.Circle size={60} indeterminate={true} color="white" />
            </View>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen