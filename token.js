const jwtSecret = "c7fb1c1736098a3f0e926d6bf57322d1d3bac57e59c493fc39ee1e0bade0ecb26e46e6";/*
Variable con un codigo de protección */
const jwt = require('jsonwebtoken');/*Instancia la libreria jsonweb token */

/*Funcion de verificación de autorización de usuario */
const userAuth = (req, res, next) => {
    const token = req.cookies.jwt; /* El token viene dentro de una 
    cookie para el jwt*/
    console.log(token); /*Escribo en la consola ese token */
    if (token) { /*Si existe el token */

        /*Verificamos el token */
      jwt.verify(token, jwtSecret, (err, decodedToken) => { /*Función flecha js */
        if (err) { /*Si hay errores */
          return res.status(401).json({ message: "Not authorized" }) /*Retorno que no esta autorizado */
        } else {
            next() /*El token es correcto */
        }
      })
    } else {
      return res
        .status(401) /*No existe el token por tanto deniego el acceso */
        .json({ message: "Not authorized, token not available" })
    }
  }

module.exports = {
    jwtSecret,
    userAuth
}

