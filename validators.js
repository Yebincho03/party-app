const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, coerceTypes: true, useDefaults: "empty" });

const validator = require('validator');

require("ajv-keywords")(ajv);
require("ajv-formats")(ajv);
require("ajv-errors")(ajv);

ajv.addKeyword({
  keyword: "dateSanitization",
  modifying: true,
  schema: true,
  validate: (schema, data, parentSchema, dataCtx) => {
    if (schema == true) {
      dataCtx.parentData[dataCtx.parentDataProperty] = data.replaceAll("/", "-");
    }
    return true;
  },
})

exports.pizzaFormValidator = (req,res,next)=>{
    
    let schema = {
        
        type: "object",
        
        properties: {
            size:{
                type:"string",
                enum:["extra-large","large","medium","small"],
                errorMessage:{
                    enum:"Please choose one of the allowed sizes"
                }
            },
            glutenFreeCrust:{
                type:"boolean",
                default:false
            },
            toppings:{
                type:"array",
                minItems: 3,
                maxItems: 5,
                items: [{
                    enum: ["tomato-sauce", "cheese", "pepperoni", "green-peppers", "pineapple", "mushrooms", "olives"],
                    errorMessage: {
                        enum: "Choose toppings from the list!",
                    }
                }],
                errorMessage: {
                    type: "Please choose at least 3 toppings",
                    minItems: "Please choose 3 to 5 toppings",
                    maxItems: "Please choose 3 to 5 toppings"
                }
            },
            name: {
                type: "string",
                minLength: 1,
                maxLength: 20,
                transform: ["trim"],
                errorMessage: {
                  minLength: "Please enter your name",
                  maxLength: "Name must be between 1 and 20 characters",
                },
            },
            email: {
                type: "string",
                minLength: 1,
                maxLength: 40,
                format: "email",
                transform: ["trim"],
                errorMessage: {
                  format: "please use a valid email address",
                  maxLength:"email must be between 1 and 40 characters"
                },
            },
            
            date: {
                type: "string",
                transform: ["trim"],
                format: "date",
                dateSanitization: true,
                errorMessage: {
                  format: "please use a valid date format"
                }
            },
            rate: {
                type: "number",
                default:5,
                minimum:1,
                maximum:5,
                errorMessage: {
                  minimun:"between 1 and 5",
                  maximum:"between 1 and 5"
                }
                
            },
        },
        required: ["size","toppings","name","email","date"],
        additionalProperties: true,
        errorMessage: {
            required:{
              "name" : "Please enter your name",
              "email" : "Please enter your email",
              "date" : "Please enter the date",
              "size" : "Please choose one of the allowed sizes",
              "toppings" :"Please choose toppings from the list"
            }
        }
      };
      
    const validate = ajv.compile(schema);
    validate(req.body);
    
    if (validate.errors != null) {
      res.status(422).render("error", { validationErrors: validate.errors });
    } else {
     res.render("success", { order: req.body });
    }
  
};

exports.colorFormValidator = (req,res,next)=>{
    
    let pageColor = req.query.color;
    if (pageColor != null) {
        let isValid = validator.isHexColor(pageColor);
        if (isValid) {
            res.render("index", { color: pageColor });
            next();
            
        } else {
             res.render("index", { color: "#554488" });
        }
    } else {
        res.render("index", { color: "#554488" });
    }
}