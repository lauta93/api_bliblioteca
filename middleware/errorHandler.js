const errorHandler = (err, req, res, next) => {
    // Verifica si el error tiene un código de estado definido, de lo
    //contrario, establecer el código de estado predeterminado
    const statusCode = err.statusCode || 500;
    const errorResponse = {
    error: {
    message: err.message || "Error interno del servidor",
    code: err.code || "internal_error",
    },
    };
    // Envia respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
    };
    module.exports = errorHandler;