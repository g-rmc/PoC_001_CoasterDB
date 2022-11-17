import joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateSchema = (schema: joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, {abortEarly: false});
        if (validation.error) {
            const errors = validation.error.details.map(v => v.message);
            res.status(422).send({
                message: "Joi patterns were not satisfied",
                joiErrors: errors,
            });
            return;
        };
        req.body = validation.value;
        next();
    };
};

export { validateSchema };