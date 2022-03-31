const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, coerceTypes: true, useDefaults: "empty" });

const validator = require('validator');

require("ajv-keywords")(ajv);
require("ajv-formats")(ajv);
require("ajv-errors")(ajv);

