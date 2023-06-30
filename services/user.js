const db = require('../db'); /*Importar el fichero db*/

/*Función obtener todos los registros de usuario
get all  */
async function getAll(){
    /*Llama a la función query del objeto db
    la función await ejecuta una sentencia y espera que finalice
    la petición. para utilizar await la función tiene que
    ser async.
    */
  const rows = await db.query(
    `SELECT *
    FROM users`
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

/*funcion create user POST*/
async function create(user){
    console.log(user);
    let sql =   `INSERT INTO users 
    (name, LastName, email, password )
    VALUES 
    ('${user.name}', '${user.LastName}', '${user.email}', '${user.password}')`;
    console.log(sql);
    const result = await db.query(sql);
  
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'user created successfully';
    }
  
    return {message};
  }

  /*funcion put UPDATE*/
async function update(id, user){
    const result = await db.query(
      `UPDATE user
      SET name='${user.name}', LastName='${user.LastName}', email='${user.email})'}
      WHERE Id=${id}`
      );
  
    let message = 'Error in updating user';
  
    if (result.affectedRows) {
      message = 'user updated successfully';
    }

  return {message};
  }
  
/*funcion DELETE user*/
  async function remove(id){
    const result = await db.query(
      `DELETE FROM user WHERE id=${id}`
    );
  
    let message = 'Error in deleting user';
  
    if (result.affectedRows) {
      message = 'user deleted successfully';
    }
  
    return {message};
  }
 
  module.exports = { /*Exportar la función getAll */
    getAll,
    create,
    update,
}

