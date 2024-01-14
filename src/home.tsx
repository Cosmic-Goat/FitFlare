import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, StatusBar, View } from "react-native";

type ItemData = {
    id: string;
    title: string;
    time: string;
    cals: number;
    challenge: boolean;
};

const DATA: ItemData[] = [
    {
        id: "1",
        title: 'Cardio',
        time: "1h 25m",
        cals: 421,
    },
    {
        id: "2",
        title: 'Flex',
        time: "1h 9m",
        cals: 366,
    },
    {
        id: "3",
        title: 'Strength',
        time: "50m",
        cals: 251
    },
];

const FAV_DATA: ItemData[] = [
    {
        id: "1",
        title: 'Half-Marathon',
        time: "2h",
        cals: 500,
        challenge: true,
    },
    {
        id: "2",
        title: 'Yoga Routine',
        time: "1h",
        cals: 300,
        challenge: true,
    },
    {
        id: "3",
        title: 'Body Combat',
        time: "20m",
        cals: 250,
        challenge: true,
    },
];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={{ fontSize: 20, color: textColor }}>{item.title}</Text>
        <Text style={{ fontSize: 12, color: textColor }}>{item.time}</Text>
        <Text style={{ fontSize: 12, color: textColor }}>{item.cals} kcal {item.challenge ? "" : "burned"}</Text>
    </TouchableOpacity>
);

const Scroller = ({ title, data }) => {
    const [selectedId, setSelectedId] = useState<string>();

    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = item.id === selectedId ? 'tomato' : '#f5ac9f';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <>
            <Text style={{ fontSize: 30, textAlign: 'left', width: "90%" }}>{title}</Text>
            <FlatList
                style={styles.flatlist}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal={true}
            />
        </>
    )
}

export default function HomeScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, textAlign: 'left', width: "90%", paddingTop: 20 }}>Hi Maya!</Text>
            <Scroller title="Recent Workouts" data={DATA} />
            <Scroller title="Favourite Challenges" data={FAV_DATA} />
        </View>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        paddingLeft: 8,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        height: 100,
        width: 200,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 20,
    },
});
