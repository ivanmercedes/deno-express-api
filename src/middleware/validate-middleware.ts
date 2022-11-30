import { Request, Response, NextFunction } from "npm:express";
import Ajv, { Schema } from "npm:ajv";
import ajvErrors from "npm:ajv-errors";
import addFormats from "npm:ajv-formats";

const ajv = new Ajv.default({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");

// @ts-ignore This expression is not callable.
addFormats(ajv);
// @ts-ignore This expression is not callable.
ajvErrors(ajv, { singleError: false });

const validateJsonSchema = (schema: Schema) => {
  const validate = ajv.compile(schema);
  return (req: Request, res: Response, next: NextFunction) => {
    const isValid = validate(req.body);
    // Format error response
    const errors = validate.errors?.map((error) => {
      return {
        keyword: error.params.errors[0].keyword,
        param:
          error.instancePath.replace("/", "") ||
          error.params.errors[0].params.missingProperty,
        message: error.message,
      };
    });
    if (!isValid) return res.status(400).json(errors);
    next();
  };
};

export default validateJsonSchema;
