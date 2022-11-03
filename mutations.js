function mutation(arr) {
    const sample = arr[1].toLowerCase();
    const original = arr[0].toLowerCase();
    for (let i = 0; i < sample.length; i++) {
      if (original.indexOf(sample[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "elo"]);