const classNames = (...args) => args.filter(Boolean).join(" "); //it will remove all undefined, null values and only return truthy values

export default classNames;
