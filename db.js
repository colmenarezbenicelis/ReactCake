const mysql = require('mysql2/promise'); /*Instancia un objeto de la dependencia mysql2 */
const config = require('./config'); /*Importa la configuración de conexión*/


/*Función query, esta función conecta con la base de datos
y le pasa la sentencia en el parametro sql y los parametros */
async function query(sql, params) {
  const connection = await mysql.createConnection(config.db); /*Conecta con la bd le pasa la configuración
  en el objeto db */
  const [results, ] = await connection.execute(sql, params); /*ejecuta la sentencia
  sql (Select, update o delete) y retorna los resultados */


  return results; /*retorna los resultados */
}


module.exports = { /*Exporta la función query */
  query
}






