
let Item = require('./recetaMongo');

exports.Guardar = function(req,res) /* Guarda los datos desde front-end. Sintaxis */
{ 
    console.log(req.body);
    Item.create({
        NombreReceta:req.body.NombreReceta,
        Ingredientes:req.body.Ingredientes,
        Pasos:req.body.Pasos,
        TiempoCoccion:req.body.TiempoCoccion,
        FechaReceta:req.body.FechaReceta,
        ImagenReceta:req.body.ImagenReceta
    }, function(err,item) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            Item.find(function(err,item){ /*Encuentra y devuelve todos los esqueletos que se crearon */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }); 
        }
    });
}

exports.Modificar = function(req,res)
{
    Item.update({_id:req.body._id}, {$set:{ /* _id campo unico y $set me indica cuales campos voy a modificar */
    NombreReceta:req.body.NombreReceta,
    Ingredientes:req.body.Ingredientes,
    Pasos:req.body.Pasos,
    TiempoCoccion:req.body.TiempoCoccion,
    FechaReceta:req.body.FechaReceta,
    ImagenReceta:req.body.ImagenReceta
    }}, function(err,item) {
        if (err) {
            res.send(err);
        } else {
            Item.find(function(err,item){ /*Obtiene y devuelve todas las personas tras crear una de ellas */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }); 
        }
    });
}

exports.Eliminar = function(req,res)
{
    Item.remove({_id:req.body._id}, /*Elimina el dato */
        function(err,item) {
        if (err) {
            res.send(err);
        } else {
            Item.find(function(err,item){ /*Obtiene y devuelve todas las personas tras crear una de ellas */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }); 
        }
    });
}

exports.SeleccionarTodos = function(req,res)
{
    Item.find(
        function(err,item) {
        if (err) {
            res.send(err);
        } else {
            Item.find(function(err,item){ /*Obtiene y devuelve todas las personas tras crear una de ellas */
                if (err) {
                    res.send(err);           
                }else{
                    res.json(item);
                }
            }
            ); 
        }
    });
}
