import InputMask from "react-input-mask";

const InputIPAddress = (props: any) => {
  const checkIpValue = (value: any) => {
    const subips = value.split(".");
    if (subips.length > 3) {
      return false;
    }
    const invalidSubips = subips.filter((ip: any) => {
      if (ip.length > 3) {
        return true;
      }
      ip = parseInt(ip);

      return ip < 0 || ip > 255;
    });

    if (invalidSubips.length !== 0) {
      return false;
    }
    let emptyIpCount = 0;
    subips.forEach((ip: any) => {
      if (ip === "") {
        emptyIpCount++;
      }
    });
    if (emptyIpCount > 1) {
      return false;
    }
    return true;
  };

  return (
    <InputMask
      className="form-control"
      formatChars={{
        "9": "[0-9.]",
      }}
      mask="99999999999"
      maskChar={null}
      alwaysShowMask={false}
      beforeMaskedValueChange={(newState: any, oldState: any) => {
        let value = newState.value;
        const oldValue = oldState.value;
        let selection = newState.selection;
        let cursorPosition = selection ? selection.start : null;
        const result = checkIpValue(value);

        if (!result) {
          value = value.trim();
          // try to add . before the last char to see if it is valid ip address
          const newValue = value.substring(0, value.length - 1) + "." + value.substring(value.length - 1);

          if (checkIpValue(newValue)) {
            cursorPosition++;
            selection = { start: cursorPosition, end: cursorPosition };
            value = newValue;
          } else {
            value = oldValue;
          }
        }

        return {
          value,
          selection,
        };
      }}
      {...props}
    />
  );
};

export default InputIPAddress;
