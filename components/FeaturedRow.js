import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg" >{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsVerticalScrollIndicator={false}
                className="pt-4"
            >
                {/** RestaurantCards */}
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Sushi"
                    rating={4.3}
                    genre="Chinese"
                    address="21 Rhine Street, Maitama"
                    short_description="This is a short description"
                    dishes={[]}
                    long={50.777}
                    lat={40.859}
                />

                <RestaurantCard
                    id={1234}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Sushi"
                    rating={4.3}
                    genre="Chinese"
                    address="21 Rhine Street, Maitama"
                    short_description="This is a short description"
                    dishes={[]}
                    long={50.777}
                    lat={40.859}
                />

                <RestaurantCard
                    id={12345}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Sushi"
                    rating={4.3}
                    genre="Chinese"
                    address="21 Rhine Street, Maitama"
                    short_description="This is a short description"
                    dishes={[]}
                    long={50.777}
                    lat={40.859}
                />

                <RestaurantCard
                    id={123456}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Sushi"
                    rating={4.3}
                    genre="Chinese"
                    address="21 Rhine Street, Maitama"
                    short_description="This is a short description"
                    dishes={[]}
                    long={50.777}
                    lat={40.859}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow