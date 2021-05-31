export const classNamesToString = (...classes) => {
    return classes.filter(Boolean).join(' ');
}