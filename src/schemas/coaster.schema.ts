import joi from 'joi';
import { regexPatterns } from '../constants/regexPatterns.js';

export const coasterSchema = joi.object({
    rcdbLink: joi.string().pattern(regexPatterns.rcdbLink, 'rcdb link').required(),
    coasterName: joi.string().required(),
    parkName: joi.string(),
    length: joi.number().min(0),
    drop: joi.number().min(0),
    speed: joi.number().min(0),
    openingYear: joi.string().length(4)
});