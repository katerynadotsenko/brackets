module.exports = function check(str, bracketsConfig) {

    if (str === '') return false;
    str = [...str];
    let i = 0;

    while (i < str.length) {
        bracketsConfig.forEach(arr => {
            if (str[i] === arr[0] && str[i + 1] === arr[1]) {
                str.splice(i, 2);
                i = i >= 0 ? i - 2 : i;
            };
        });
        i++;
    };

    return str.length === 0 ? true : false;
}
