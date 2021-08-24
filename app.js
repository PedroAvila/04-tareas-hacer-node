require('colors');
const { 
    inquirerMenu, 
    pausa,
    leerInput 
    } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {
        // Imprimir el menú
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput( 'Descripción: ' );
                tareas.crearTarea( desc );
                break;
        
            case '2':
                console.log( tareas.listadoArr );
                break;
        }
        

        await pausa();

    } while( opt !== '0' );


    // pausa();
}

main();


