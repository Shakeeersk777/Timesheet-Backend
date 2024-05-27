export function PrepareResponse(
  isSucceed: boolean,
  messege: string,
  data: any
) {
  return {
    _isSucceed: isSucceed,
    _messege: messege,
    _data: data,
  };
}

export function catchError() {
  return {
    _isSucceed: false,
    _messege: "There is seems to an issue! ",
    _data: [],
  };
}
