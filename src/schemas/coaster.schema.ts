import joi from 'joi';
import { regexPatterns } from '../constants/regexPatterns.js';
import { Coaster } from '../protocols/Coaster.js';

export const coasterSchema = joi.object<Coaster>({
    rcdbLink: joi.string().pattern(regexPatterns.rcdbLink, 'rcdb link').required(),
    coasterName: joi.string().required(),
    parkName: joi.string(),
    length: joi.number().min(0),
    drop: joi.number().min(0),
    speed: joi.number().min(0),
    openingYear: joi.string().length(4)
});
