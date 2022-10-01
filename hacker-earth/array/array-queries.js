function array_queries(N, M, A, B, Q, queries) {
  const output = new Array(Q + 1);
  const calculate = (arrayA, arrayB) => {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arrayA[i] && arrayB[j]) {
          sum += (arrayA[i] * arrayB[j] * (i + j + 2)) % 998244353;
        }
      }
    }
    return sum;
  };
  output[0] = calculate(A, B);
  for (let i = 0; i < queries.length; i++) {
    let temp = 0;
    switch (queries[i][0]) {
      case 1:
        temp = A[queries[i][1] - 1];
        A[queries[i][1] - 1] = B[queries[i][2] - 1];
        B[queries[i][2] - 1] = temp;
        output[i + 1] = calculate(A, B);
        break;
      case 2:
        temp = A[queries[i][1] - 1];
        A[queries[i][1] - 1] = A[queries[i][2] - 1];
        A[queries[i][2] - 1] = temp;
        output[i + 1] = calculate(A, B);
        break;
      case 3:
        temp = B[queries[i][1] - 1];
        B[queries[i][1] - 1] = B[queries[i][2] - 1];
        B[queries[i][2] - 1] = temp;
        output[i + 1] = calculate(A, B);
        break;
    }
  }
  return output;
}
console.log(
  array_queries(3, 2, [3, 5, 1], [4, 1], 3, [
    [1, 1, 2],
    [2, 1, 3],
    [3, 1, 2],
  ])
);
