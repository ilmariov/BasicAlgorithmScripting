function bouncer(arr) {
    const new_arr = [];
    for (let elem of arr) {
        if (elem) {
            new_arr.push(elem);
        }
    }
    console.log(new_arr);
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);