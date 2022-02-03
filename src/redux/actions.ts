export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    payload:{
        amountOfBYN: string,
        amountOfCurrency: string
    }
};

// @ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return  {
        type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload:{amountOfBYN,amountOfCurrency,},
    }
};

export type ChangeAction = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    payload:{
        isBuying:boolean
    }
};

// @ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
};

export type ChangeCurrentCurrencyType = {
};

// @ts-ignore
export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;