import { fromJS } from 'immutable';

export const toList = (body) => {
    return fromJS(body.synonymDefinitions);
};

// export const toBody = (list) => {
//     return {
//         tenantId:
//     }
// };