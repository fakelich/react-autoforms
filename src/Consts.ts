import { createContext } from 'react';
import validator from 'validate.js';

const VirtualFormContext = createContext({});

export {
    validator,
    VirtualFormContext,
};