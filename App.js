import React, { useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, Touchable} from 'react-native';
import Cita from './componentes/Cita'; 
import Formulario from './componentes/Formulario'; 


const App = () => {

  //definir el state de citas

  const [ mostrarform, guardarMostrarForm] = useState(false);

  const [ citas, setCitas ] = useState([
    {
      id: "1",
      paciente: "Armando Sanchez",
      propietario: "SanchtzNative",
      sintomas: "Para hacer pruebas del useState"
    }
  ]);

  const eliminarPaciente = id => {
    setCitas( ( citasActuales ) => {
      return citasActuales.filter( cita => cita.id !== id);
    });
  }

  const mostrarFormulario = () => {

    guardarMostrarForm(!mostrarform);

  }

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

   return (

    <TouchableWithoutFeedback onPress= {() => cerrarTeclado()}>
      <View style={styles.contenedor}>

      <Text style={styles.title}>Administrador de Citas</Text>

      <View style={ styles.contenido}>


      <View>
        <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrar}>
        <Text style={styles.txtMostrar}>{mostrarform ? 'Mostrar Citas' : 'Crear Nueva Cita'}</Text>
        </TouchableHighlight>
      </View>

        { mostrarform ? (
        
          <>
          <Text style={styles.title}>Crear Nueva Cita</Text>
          <Formulario
          citas = {citas}
          setCitas = {setCitas}
          guardarMostrarForm = {guardarMostrarForm}
          />
          </>

        ): (
          <>
          <Text style={styles.title}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
          <FlatList
            style={styles.listado}
            data = {citas}
            renderItem = { ({item}) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
            keyExtractor = { cita => cita.id}
          />
          </>
          )}
        

      </View>

    </View>
    </TouchableWithoutFeedback>


  );
};

const styles = StyleSheet.create({

contenedor: {
  backgroundColor: '#AA076B',
  //minHeight: '100%'
  flex: 1
},

title: {
  color: '#FFF',
  marginTop: Platform.OS === 'ios' ? 40 : 10,
  marginBottom: 20,
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center'
},

contenido: {
  flex: 1, 
  marginHorizontal: '2.5%'
},

listado: {
  flex: 1,
},
btnMostrar: {
  padding: 10,
  backgroundColor: '#7d024e',
  paddingVertical: 10,
  marginTop: 5,
  borderColor: 'black',
  borderWidth: 2
},
txtMostrar: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 18
}

}); 

export default App;