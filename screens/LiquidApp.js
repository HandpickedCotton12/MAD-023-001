import React, { useRef, useState } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import { type } from "os";
import { Console } from "console";

const styles = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: "#FAE8D0" }
})

function LiquidApp() {

    const [recordData, setRecordData] = useState({ "water": 0, "coffee": 0, "tea": 0, "juice": 0 });
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const calPercentage=()=>{
        let num=(data.map((item) => {
            const num = parseInt(item.count)
            return ((num * 200))
        }))
        console.log(num)

        let sum=num.reduce((prev,curr)=> prev+curr,0)
        console.log(sum)
        console.log( typeof sum)

        const percent= (sum/2000)*100
        console.log(percent)
        
        return (percent>100?"100%":`${percent}%`)
    }
    const add = () => {
        setCount(num => { return ++num })
        console.log(count)
    }
    const subtract = () => {
        if (count > 0) {
            setCount(num => { return --num })
            console.log(count)
        }
    }
    const [drinkType, setDrinkType] = useState("water")
    const handleOnButtonPress = () => {
        setRecordData((oldRecord) => ({ ...oldRecord, [drinkType]: count }))
        console.log(recordData)
        console.log(data)
        const date = (`${new Date().getHours() - 1}:${new Date().getMinutes()}${(new Date().getHours()) > 11 ? "PM" : "AM"}`)
        console.log(date)
        setData((oldData) => ([...oldData, {
            "time": `${new Date().getHours() - 1}:${new Date().getMinutes()}${(new Date().getHours()) > 11 ? "PM" : "AM"}`,
            "type": drinkType, "count": count
        }]))
        console.log(data)
    }


    const percentage = 66;
    const refRBSheet = useRef();
    return (
        <View style={styles.mainView}>
            <View style={{ flexDirection: "row", height: "10%", backgroundColor: "#5f8953" }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}

                // Uncomment this line to navigate to your preferred screen
                // onPress={()=>{navigation.navigate()}}
                >
                    <FontAwesome name="arrow-left" size={50} color="white" />
                </TouchableOpacity>

                <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>Stay Hydrated</Text>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>Track Your Drink Intake</Text>
                </View>

                <View style={{ backgroundColor: "#ed873a", flex: 1, borderRadius: 100 }}>
                    <Image style={{ borderRadius: 100, flex:1, height:80, width:80 }} source={ require("../images/Me.png") } resizeMode="contain" />
                </View>
            </View>


            <View style={{ zIndex: 1, position: "absolute", width: "100%", height: "80%" }}>
                <View style={{ backgroundColor: "#B4E4A8", borderRadius: 100, height: "30%", width: "50%", top: "25%", right: "20%" }}></View>
                <View style={{ backgroundColor: "#B4E4A8", borderRadius: 100, height: "30%", width: "50%", top: "50%", left: "70%" }}></View>
            </View>

            <View style={{ flexDirection: "row", width: "100%", height: "8%", justifyContent: "center", alignItems: "center", zIndex: 10 }}>

                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#253321", fontWeight: "bold", fontSize: 12 }}>Today's Goal</Text>
                    <Text style={{ color: "#253321", fontWeight: "bold", fontSize: 25 }}>2,000 ml</Text>
                </View>

                <TouchableOpacity style={{ zIndex: 10, position:'absolute', left:'87%' }}
                    onPress={() => { refRBSheet.current.open() }}>
                    <Ionicons name="add-circle" size={50} color={"black"} />
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", height: "35%", zIndex: 10, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "60%", borderWidth: 2, height: "80%", borderWidth: 10, borderColor: "#253321", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#ed873a", fontSize: 30, fontWeight: "bold" }}> {
                       calPercentage()
                    }</Text>
                    <Text style={{ color: "#ed873a", fontSize: 15, fontWeight: "bold" }}>Today</Text>
                </View>
            </View>

            <View style={{ zIndex: 10, justifyContent: "center", alignItems: "center", width: "100%", height: "40%" }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ zIndex: 10, backgroundColor: "white", margin: "4%", width: 250, borderRadius: 60, paddingLeft: "10%" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}> {item.time} {item.timeType}</Text>
                                <Text> {(parseInt(item.count)) * 200} ml,  {item.type}</Text>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>

            <View style={{ flexDirection: "row", width: "100%", height: "10%", backgroundColor: "#5f8953" }}>


            </View>




            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={400}
                customStyles={{
                    wrapper: {

                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "gray"
                    },
                }}
            >
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#253321", fontWeight: "bold", fontSize: 22, padding: 10 }}>Add drink monitoring</Text>
                    <Text style={{ color: "#253321", fontWeight: "bold", fontSize: 17, paddingTop: 10 }}>Types of Drinks</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: -40, marginTop: 15 }}>
                        <TouchableOpacity onPress={() => { setDrinkType("water") }} style={[{ backgroundColor: "#B4E4A8", borderRadius: 20, justifyContent: "center", alignItems: "center", width: "20%", height: "60%", margin: "1%" },{backgroundColor:drinkType==="water"?"#588157":"#B4E4A8"}]}>
                            <Text style={{ color: "orange", fontWeight: "bold" }}>Water</Text>
                            <Ionicons name="water" size={30} color={"green"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDrinkType("coffee") }} style={[{ backgroundColor: "#B4E4A8", borderRadius: 20, justifyContent: "center", alignItems: "center", width: "20%", height: "60%", margin: "1%" },{backgroundColor:drinkType==="coffee"?"#588157":"#B4E4A8"}]}>
                            <Text style={{ color: "orange", fontWeight: "bold" }}>Coffee</Text>
                            <FontAwesome name="coffee" size={30} color={"green"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDrinkType("juice") }} style={[{ backgroundColor: "#B4E4A8", borderRadius: 20, justifyContent: "center", alignItems: "center", width: "20%", height: "60%", margin: "1%" },{backgroundColor:drinkType==="juice"?"#588157":"#B4E4A8"}]}>
                            <Text style={{ color: "orange", fontWeight: "bold" }}>Juice</Text>
                            <FontAwesome5 name="glass-whiskey" size={30} color={"green"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDrinkType("tea") }} style={[{ backgroundColor: "#B4E4A8", borderRadius: 20, justifyContent: "center", alignItems: "center", width: "20%", height: "60%", margin: "1%" },{backgroundColor:drinkType==="tea"?"#588157":"#B4E4A8"}]}>
                            <Text style={{ color: "orange", fontWeight: "bold" }}>Tea</Text>
                            <Feather name="coffee" size={30} color={"green"} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: "3%" }}>
                        <TouchableOpacity onPress={() => { subtract() }} style={{ backgroundColor: "black", justifyContent: "center", alignItems: "center", width: "15%", height: "50%", marginTop: 5 }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>-</Text>
                        </TouchableOpacity>
                        <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: "4%", marginTop: -40 }}>
                            <FontAwesome5 name="glass-whiskey" size={50} color={"green"} />
                            <Text style={{ fontWeight: 'bold' }}>{count}x Glasses 200 ml</Text>
                        </View>
                        <TouchableOpacity onPress={() => { add() }} style={{ backgroundColor: "black", justifyContent: "center", alignItems: "center", width: "15%", height: "50%", marginTop: 5 }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 35 }}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={handleOnButtonPress} style={{ justifyContent: "center", marginTop: "-10%", alignItems: "center", zIndex: 10, backgroundColor: "orange", height: 35, margin: "4%", width: "60%", borderRadius: 60 }}>
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}> ADD</Text>
                    </TouchableOpacity>
                </View>

            </RBSheet>
        </View>
    );
}

const Menu = () => {
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Progres" component={Progres}></Tab.Screen>
            <Tab.Screen name="Recipes" component={Recipes}></Tab.Screen>
            <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
}

const Home = () => {
    return (
        <View>
            <Text style={{ margin: "5%", fontSize: 30 }}>Home</Text>
        </View>
    )
}

const Progres = () => {
    return (
        <View>
            <Text style={{ margin: "5%", fontSize: 30 }}>Progress</Text>
        </View>
    )
}

const Recipes = () => {
    return (
        <View>
            <Text style={{ margin: "5%", fontSize: 30 }}>Recipes</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text style={{ margin: "5%", fontSize: 30 }}>Settings</Text>
        </View>
    )
}


const Stack = createNativeStackNavigator()
export default LiquidApp