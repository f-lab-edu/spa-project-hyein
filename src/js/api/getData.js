export async function getData() {
  // 네트워크 요청을 통해 데이터 가져오기
  const response = await axios({
    method: 'get',
    url: 'https://c325fbd2-ad4f-446e-8b6d-f55d776f9413.mock.pstmn.io/v1/post',
    responseType: 'json',
  });

  // 데이터를 반환
  return response.data;
}
