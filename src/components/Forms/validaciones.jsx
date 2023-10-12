export const validarEmail = (email) => {
    const length = email.length;
    if (length > 8 && length < 50 && email.includes("@")) {
      return true;
    } else {
      return false;
    }
  };
  
  export function validarName(name) {
    const length = name.length;
    if (length >= 3 ) {
      return true;
    } else {
      return false;
    }
  }

  export function validarMessage(message) {

        return true;
  }