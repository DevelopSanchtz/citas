import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {

    const [paciente, guardarpaciente] = useState ('');
    const [propietario, guardarpropietario] = useState ('');
    const [telefono, guardartelefono] = useState ('');
    const [fecha, guardarfecha] = useState ('');
    const [hora, guardarhora] = useState ('');
    const [sintomas, guardarsintomas] = useState ('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (date) => {
      const opciones = { year: 'numeric', month: 'long', day: '2-digit' }
      guardarfecha(date.toLocaleDateString('es-ES', opciones));
      hideDatePicker();
    };

    
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };

      const confirmarHora = (hora) => {
        const opciones = { hour: 'numeric', minute: '2-digit'}
        guardarhora(hora.toLocaleString('es-Es', opciones));

        hideTimePicker();
      };

      const crearNuevaCita = () => {
            if (paciente.trim() === '' || 
                propietario.trim() === '' || 
                telefono.trim() === '' ||
                fecha.trim() === '' ||
                hora.trim() === '' ||
                sintomas.trim() === '') 
                {
                    mostrarAlerta();
                    return;
                }
            const cita = { paciente, propietario, telefono, fecha, hora, sintomas };

            cita.id = shortid.generate();
            const citasNuevo = [...citas, cita];
            setCitas(citasNuevo);

            guardarMostrarForm(false);

      }

      const mostrarAlerta = () => {
          Alert.alert(
            'Error', //title
            'Todos los campos son obligatorios', //message
            [{
                text: 'Ok' //Arreglo de botones
            }]
          );
      }

    return (
        <>
            <ScrollView style = {styles.formulario}>

                <View>
                    <Text style = {styles.label}>Paciente:</Text>
                    <TextInput style = {styles.input}
                        onChangeText = { (texto) => guardarpaciente(texto)}
                    />
                </View>

                <View>
                    <Text style = {styles.label}>Dueño:</Text>
                    <TextInput style = {styles.input}
                        onChangeText = { (texto) => guardarpropietario(texto)}
                    />
                </View>

                <View>
                    <Text style = {styles.label}>Télefono Contacto:</Text>
                    <TextInput style = {styles.input}
                        onChangeText = { (texto) => guardartelefono(texto)}
                        keyboardType = 'numeric'
                    />
                </View>

                <View>
                    <Text style = {styles.label}>Fecha:</Text>
                    <Button title="Selecionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale = 'es_Es'
                    />
                <Text>{fecha}</Text>
                </View>

                <View>
                    <Text style = {styles.label}>Hora:</Text>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale = 'es_Es'
                        is24Hour
                    />
                <Text>{hora}</Text>
                </View>
                
                <View>
                    <Text style = {styles.label}>Síntomas:</Text>
                    <TextInput multiline style = {styles.input}
                        onChangeText = { (texto) => guardarsintomas(texto)}
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={ () => crearNuevaCita() } style={styles.btnSubmit}>
                        <Text style={styles.txtSubmit}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>

            </ScrollView>
        </> 
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 35,
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#7d024e',
        paddingVertical: 10,
        marginTop: 30,
        marginBottom: 30
    },
    txtSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default Formulario; 

