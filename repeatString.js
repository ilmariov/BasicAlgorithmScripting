function repeatStringNumTimes(str, num) {
    let new_str = '';
    for (let i=0; i<num; i++) {
        new_str = new_str + str;
    }
    return new_str;
}
  
repeatStringNumTimes("abc", 3);