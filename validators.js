const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, coerceTypes: true, useDefaults: "empty" });

// require("ajv-keywords")(ajv);
// require("ajv-formats")(ajv);
// require("ajv-errors")(ajv);

const partySchema = {
    type: "object",

    properties:{
        title:{
            type:"string"
        },
        location:{
            type:"string"
        },
        date:{
            type:"string"
        },
        time:{
            type:"string"
        }
    }
}

exports.partyValidator = (req,res, next) => {
    let validate = ajv.compile(partySchema);
    let validation = validate(req.body);

    if(!validation){
        res.status(422).render("error", { validationErrors: validate.errors });
    }else {
        next();
    }
}
