const deepDiffMapper = {
  VALUE_CREATED: "CREATED",
  VALUE_UPDATED: "UPDATED",
  VALUE_DELETED: "DELETED",
  VALUE_UNCHANGED: "UNCHANGED",
  map: (obj1: any, obj2: any, deep?: boolean) => {
    if (deepDiffMapper.isFunction(obj1) || deepDiffMapper.isFunction(obj2)) {
      throw "Invalid argument. Function given, object expected.";
    }
    // OLD: deepDiffMapper.isValue(obj1) || deepDiffMapper.isValue(obj2)
    if (deepDiffMapper.isValue(obj1) && deepDiffMapper.isValue(obj2)) {
      return {
        type: deepDiffMapper.compareValues(obj1, obj2),
        oldData: obj1,
        currentData: obj2,
      };
    }

    if (deep && (deepDiffMapper.isArray(obj1) || deepDiffMapper.isArray(obj2))) {
      // const maxLength = Math.max(obj1?.length || 0, obj2?.length || 0);
      // const diff: any[] = [];
      // for (let i = 0; i < maxLength; i++) {
      //   diff.push(deepDiffMapper.map(obj1?.[i], obj2?.[i]));
      // }

      // return diff;

      return {
        type: deepDiffMapper.compareValues(obj1, obj2),
        oldData: obj1,
        currentData: obj2,
      };
    }

    const diff: any = {};
    for (let key in obj1) {
      if (deepDiffMapper.isFunction(obj1?.[key])) {
        continue;
      }

      let value2 = undefined;
      if (obj2?.[key] !== undefined) {
        value2 = obj2?.[key];
      }

      diff[key] = deepDiffMapper.map(obj1?.[key], value2, true);
    }
    for (let key in obj2) {
      if (deepDiffMapper.isFunction(obj2?.[key]) || diff?.[key] !== undefined) {
        continue;
      }

      diff[key] = deepDiffMapper.map(undefined, obj2?.[key], true);
    }

    return diff;
  },
  compareValues: (value1: any, value2: any) => {
    if (value1 === value2) {
      return deepDiffMapper.VALUE_UNCHANGED;
    }
    if (deepDiffMapper.isDate(value1) && deepDiffMapper.isDate(value2) && value1.getTime() === value2.getTime()) {
      return deepDiffMapper.VALUE_UNCHANGED;
    }
    if (
      Array.isArray(value1) &&
      Array.isArray(value2) &&
      value1.length === value2.length &&
      value1.every((x: any) => value2.includes(x))
    ) {
      return deepDiffMapper.VALUE_UNCHANGED;
    }
    if (value1 === undefined) {
      return deepDiffMapper.VALUE_CREATED;
    }
    if (value2 === undefined) {
      return deepDiffMapper.VALUE_DELETED;
    }
    return deepDiffMapper.VALUE_UPDATED;
  },
  isFunction: (value: any) => Object.prototype.toString.call(value) === "[object Function]",
  isArray: (value: any) => Object.prototype.toString.call(value) === "[object Array]",
  isDate: (value: any) => Object.prototype.toString.call(value) === "[object Date]",
  isObject: (value: any) => Object.prototype.toString.call(value) === "[object Object]",
  isValue: (value: any) => !deepDiffMapper.isObject(value) && !deepDiffMapper.isArray(value),
  isArrayMode: (value: any) => value && typeof value === "object" && Object.keys(value)?.some((x: any) => !isNaN(x)),
  normalizeResult: (value: any) => (deepDiffMapper.isArrayMode(value) ? Object.values(value) : [value].flat()),
  compare: (obj1: any, obj2: any) => deepDiffMapper.normalizeResult(deepDiffMapper.map(obj1, obj2)),
};

export default deepDiffMapper;
