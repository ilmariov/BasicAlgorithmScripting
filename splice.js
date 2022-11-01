function frankenSplice(arr1, arr2, n) {
    let copy_arr2 = arr2.slice(0, arr2.length)
    for (let elem of arr1) {
        copy_arr2.splice(n, 0, elem);
        n++;
    }
    return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);