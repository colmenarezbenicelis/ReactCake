const express = require('express'); /* instanciamos express */
const router = express.Router(); /* instancia el objeto Router de express */
const user = require('../services/user'); /* instancia el objeto User*/

/*Método "get" del API REST, Retorna todos los usuarios.
 Los tipos de petición del API REST son GET, POST, PUT, DELETE
 la url es la raíz del  API REST. Ejemplo: http://localhost/user/
*/
router.get('/',  async function(req, res, next) { /*Se ejecuta la función asíncrona */
  console.log("hola");
  try { /*intento
  ejecutar las sentencias del bloque de código */

 res.json(await user.getAll());  /* llamamos a la función json del objeto res y
    le pasamos como parámetro await de la función user.getAll()
    para recuperar la lista de los usuarios.*/
  } catch (err) { /*caputo errores  */
    console.error(`Error while getting user `, err.message); /*escribo los errores */
    next(err); /* pase el control a la siguiente función en la pila de middleware.
    https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express */
  }
});

/* POST user */
router.post('/', async function(req, res, next) {
    try {
      res.json(await user.create(req.body));
    } catch (err) {
      console.error(`Error while user`, err.message);
      next(err);
    }
  });

  /* PUT user*/
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await user.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while user`, err.message);
    next(err);
  }
});

/* DELETE user*/
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await user.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});
  
//en versiones previas de express se exportaba de esta forma el router
//module.exports = router;

//de esta forma se expresa en las nuevas versiones de express
module.exports = {
    userRouter : router
}















