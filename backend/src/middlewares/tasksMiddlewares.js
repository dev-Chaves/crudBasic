const { response, json } = require("express");

const validateFieldTitle = ( req, res, next) => {
    const {body} = req;

    if(body.title === undefined ){
        return res.status(400).json({message: 'The Field "title" is required '});
    };

    if(body.title === ''){
        return res.status(400).json({message: 'The Field "title" cant be empty '});
    };

    next();
    

};

const validateFieldStatus = (req, res, next) =>{
    const {body} = req;

    if(body.status == undefined){
        return res.status(400).json({message: 'The Field "status" is required '});
    };
    
    if(body.status == ''){
        return res.status(400).json({message: 'The Field "status" cant be empty '});
    };

    next();

};

module.exports = {
    validateFieldTitle,
    validateFieldStatus
};