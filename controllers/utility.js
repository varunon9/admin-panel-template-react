module.exports = {
  
  isAdmin: (/*decoded*/) => {
    return false;
  },

  swapValues: (arr) => {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  },

  generateOTP: () => {
    // 6 digits OTP
    const min = 100000;
    const max = 999999;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
