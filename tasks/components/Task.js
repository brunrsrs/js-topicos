import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import moment from "moment";
import 'moment/locale/pt-br';
import CommonStyles from "../CommonStyles";

export default(props) => {
    const doneOrNotStyle = props.doneAt != null ? {textDecorationLine: 'line-through' } : {};
    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                <View style={styles.checkContainer}>
                    {/* exibindo o icone de tarefa concluida ou nao */}
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <TouchableOpacity style = {[styles.deleteButton,
                                        {backgroundColor: 'red' }]}
                                        activeOpacity={0.7}
                                        onPress = {() => deleteTask(this.id)}>
                        <Icon name = "whatsapp" size={15} color = {CommonStyles.colors.secondary} />
            </TouchableOpacity>
        </View>
    );
};
//função para retornar o icone de tarefa concluida ou pendente
function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF"></Icon>
            </View>
        );
    } else {
        return <View style = {styles.pending}></View>;
    }
}

deleteTask = (id) => {
    const tasks = [...this.state]
    
    tasks.filter({
        
    })

    this.setState({ tasks, showAddTask: false}, this.filterTasks)
}   

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButton: {
        position: 'absolute',
        right: 30,
        width: '10%',
        height: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.colors.subText,
        fontSize: 12
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    excludeIcon: {
        marginLeft: 10
    },
    excludeText: {
        fontFamily: CommonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10
    }
})