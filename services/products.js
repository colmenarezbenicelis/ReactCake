const db = require('../db'); /*Importar el fichero db*/


/*Función obtener todos los registros de usuario
get all  */
async function getAll(){
    /*Llama a la función query del objeto db
    la función await ejecuta una sentencia y espera que final
    la petición. para utilizar await la función tiene que
    ser async.
    */
  const rows = await db.query(
    `SELECT *
    FROM products`
  );


  let data = [];  /*Inicializa un arreglo vacío */
  if (rows) { /*Si la variable rows contiene algo no es nula
  data es igual a lo que tiene rows */
    data = rows;
  }


  /*Retorno la variable data */
  return {
    data
  }
}


module.exports = { /*Exportar la función getAll */
    getAll
}
