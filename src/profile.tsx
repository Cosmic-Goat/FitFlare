import { Text, View, Image } from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import img from "../assets/profile.webp"

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, textAlign: 'left', width: "90%", paddingTop: 20 }}>Level 21</Text>
            <Text style={{ fontSize: 32, textAlign: 'left', width: "90%", paddingTop: 0 }}>Maya</Text>
            <Image source={img} style={{ width: 200, height: 200, borderRadius: 200 }} />
            <View style={{ paddingTop: 20 }}>
                <ProgressBar progress={0.3} width={300} color="tomato" />
            <Text style={{ fontSize: 15, textAlign: 'left', width: "90%", paddingTop: 5 }}>300 Points to Level 22</Text>
            </View>
            <Text style={{ fontSize: 24, textAlign: 'left', width: "90%", paddingTop: 20 }}>24 Challenges Completed</Text>
            <Text style={{ fontSize: 24, textAlign: 'left', width: "90%", paddingTop: 10 }}>7 Quests Completed</Text>
        </View>
    );
}
