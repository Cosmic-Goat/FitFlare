import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, StatusBar, View } from "react-native";

type ItemData = {
    id: string;
    title: string;
};

const DATA: ItemData[] = [
    {
        id: "1",
        title: 'Cardio',
    },
    {
        id: "2",
        title: 'Flex',
    },
    {
        id: "3",
        title: 'Strength',
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
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);

export default function HomeScreen() {
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
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, textAlign: 'left', width: "90%", paddingTop: 20 }}>Hi Maya!</Text>
            <Text style={{ fontSize: 30, textAlign: 'left', width: "90%" }}>Recent Workouts</Text>
            <FlatList
                style={{ paddingLeft: 8 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
