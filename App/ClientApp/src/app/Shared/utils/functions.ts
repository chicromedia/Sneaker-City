export const isEmpty = ( value: any ) => Array.isArray( value ) ? !value.length : !value;
export const notEmpty = ( value: any ) => Array.isArray( value ) ? !!value.length : !!value;
