import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Platform, FlatList, TouchableOpacity } from "react-native";
import moment from "moment/moment";
import 'moment/locale/pt-br';
import todayImage from '../assets/imgs/today.jpg';
import commonStyles from '../CommonStyles';
import Task from "../components/Task";
import Icon from "react-native-vector-icons/FontAwesome";
import AddTask from "./AddTask";

export default class TaskList extends Component {
    state = {
        tasks: [{
            id:Math.random(),
            desc: 'Fazer tarefa',
            estimateAt: new Date(),
            doneAt: new Date(),
        }],
        showDoneTasks: true,
        visibleTasks: [],
        showAddTask: false,
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

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    };

    componentDidMount = () => {
        this.filterTasks();
    };

    filterTasks = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks];
        } else {
            const pending = (task) => task.doneAt === null;
            visibleTasks = this.state.tasks.filter(pending);
        }
        this.setState({visibleTasks});
    }

    getColor = () => {
        switch(this.props.daysAhead) {
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tomorrow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
    }

    addTask = newTask => {
        //verifica se a descrição da nova tarefa é vazia ou contem apenas espaços em branco
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados inválidos', 'Descrição não informada!')
            return
        }
        const tasks = [...this.state.tasks]

        //adiciona a nova tarefa a lista de tarefas
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })

        //atualiza o estado com a nova lista de tarefas e fecha o modal
        this.setState({ tasks, showAddTask: false}, this.filterTasks)
    }


    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style = {styles.container}>
                <AddTask isVisible = {this.state.showAddTask}
                        onCancel = {() => this.setState({showAddTask: false})}
                        onSave={this.addTask} />
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name= {this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                    size={25} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.title}>Hoje</Text>
                        <Text style = {styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    {/* <Task desc = "Trabalho" estimateAt = {new Date()} doneAt={null}></Task> */}
                    {/* renderizando a lista de tarefas utilizando FlatList */}
                    <FlatList
                        data = {this.state.visibleTasks}
                        keyExtractor = {(item) => `${item.id}` }
                        renderItem={({ item }) => <Task {...item} onToggleTask = {this.toggleTask}/>}
                    />
                    <TouchableOpacity style = {[styles.addButton,
                                        {backgroundColor: this.getColor() }]}
                                        activeOpacity={0.7}
                                        onPress = {() => this.setState({showAddTask: true})}>
                        <Icon name = "bath" size={20} color = {commonStyles.colors.secondary} />
                    </TouchableOpacity>
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