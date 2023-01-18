import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import Ionicons from "react-native-ionicons"
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "../components/TodoList";
import AddListModal from "../components/AddListModal";
import TodoModal from '../components/TodoModal';



export default class Todo extends React.Component {
    state = {
        addTodoVisible: false
    };
    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} />
                </Modal>
           
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.divider} />
                    <Text style={styles.title}>
                        Todo <Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
                    </Text> 
                    <View style={styles.divider} />
                </View>

                <View style={{ marginVertical: 48 }}>
                     <TouchableOpacity style={styles.addList} >
                        <Ionicons name="add-circle-outline" size={16} color={colors.blue} onPress={() => this.toggleAddTodoModal()}/>
                    </TouchableOpacity> 
                    <Text style={styles.add}>Add List</Text>
                </View>


                <View style={{ height: 275, paddingLeft: 32 }}>
                    <FlatList data={tempData}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <TodoList list={item} />}
                    />

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    divider: {
        backgroundColor: colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: 'center'

    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: colors.black,
        paddingHorizontal: 64
    },
    addList: {
        borderWidth: 2,
        borderColor: colors.lightBlue,
        borderRadius: 4,
        padding: 16,
        alignItems: "center"
    },
    add: {
        color: colors.lightBlue,
        fontWeight: '600',
        fontSize: 14,
        marginTop: 8
    }
});
