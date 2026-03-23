const asyncHandler = (requestHandler) => async(req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
}

/* ths is how error will handle 
    Here we have send the error that is next(err) - how to handle the error 

    app.use((err,req,res,next) = {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    })


*/ 

export { asyncHandler };

// const asyncHandler = (fn) => async() => {
//     try{
//         await fn(req,res,next);
//     }
//     catch(error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }     
// }
