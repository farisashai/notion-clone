/**
 * Utility function to merge class names easily with conditional classNames, filtering out falsey values
 * @param names
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export const classNames = (...names: any[]): string => names.filter(name => name).join(' ');
