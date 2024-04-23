import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Platform, FlatList } from "react-native";
import moment from "moment/moment";
import 'moment/locale/pt-br';
import todayImage from '../assets/imgs/today.jpg';
import commonStyles from '../CommonStyles';
import Task from "../components/Task";

export default class TaskList extends Component {
    state = {
        tasks: [{
            id:Math.random(),
            desc: 'Comprar Livro História',
            estimateAt: new Date(),
            doneAt: new Date(),
        }]
    }

    toggleTask = (taskId) => {
        const tasks = [...this.state.tasks];
        tasks.forEach((task) => {
            if (task.id == taskId) {
                task.doneAt = task.doneAt ? null : new Date();
            }
        });
        this.setState({tasks: tasks}, this.filterTasks); 
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style = {styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.title}>Hoje</Text>
                        <Text style = {styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    {/* <Task desc = "Trabalho" estimateAt = {new Date()} doneAt={null}></Task> */}
                    {/* renderizando a lista de tarefas utilizando FlatList */}
                    <FlatList
                        data = {this.state.tasks}
                        keyExtractor = {(item) => `${item.id}` }
                        renderItem={({ item }) => <Task {...item} onToggleTask = {this.toggleTask}/>}
                    />
                </View>
            </View>
        );
    }

};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 40
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});