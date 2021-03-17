import React from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight} from 'react-native';

const Cita = ({cita, eliminarPaciente}) => {

    const dialogoEliminar = id => {
        console.log('eliminadoxd', id);

        eliminarPaciente(id);
    }

    return (
        <View style={styles.cita}>
            
        <View>
            <Text style={styles.label}>Paciente:</Text>
            <Text style={styles.texto}>{cita.paciente}</Text>
        </View>

        <View>
            <Text style={styles.label}>Propietario:</Text>
            <Text style={styles.texto}>{cita.propietario}</Text>
        </View>

        <View>
            <Text style={styles.label}>Síntomas:</Text>
            <Text style={styles.texto}>{cita.sintomas}</Text>
        </View>

        <View>
            <TouchableHighlight onPress={ () => dialogoEliminar(cita.id) } style={styles.btnEliminar}>
                <Text style={styles.txtEliminar}>Eliminar &times;</Text>
            </TouchableHighlight>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({

    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#E1E1E1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        //paddingTop: 20, //padding de arriba
        //paddingBottom: 30 //padding de abajo
        paddingVertical: 20,
        paddingHorizontal: '5%',
        marginBottom: 10,
        marginHorizontal: '2.5%'
    },

    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },

    texto: {
        fontSize: 18
    },

    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        paddingVertical: 10
    },

    txtEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Cita;
