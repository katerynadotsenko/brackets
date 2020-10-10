module.exports = function check(str, bracketsConfig) {

    /* Solution using stack */

    if (str === '') return false;

    let bracketsConfigObject = {};

    [...bracketsConfig].forEach(item => {
        bracketsConfigObject[item[0]] = item[1];
    });


    let stack = [];
    str = [...str];

    for (let i = 0; i < str.length; i++) {
        if (bracketsConfigObject[str[i]] && bracketsConfigObject[str[i]] !== stack[stack.length - 1]) {
            stack.push(str[i]);
        } else if (stack.length !== 0) {
            if (str[i] === bracketsConfigObject[stack[stack.length - 1]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0 ? true : false;


    /* Solution 2 */

    /*if (str === '') return false;
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
    */
}
