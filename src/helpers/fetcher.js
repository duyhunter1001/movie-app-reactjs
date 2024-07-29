const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjNjM2U0ZmM1MTE0NTljYmIxNTI1ZTIwOWM2MGUxMiIsIm5iZiI6MTcyMTc0NjI2Ny40NzMzOSwic3ViIjoiNjY5ZmMyMTdlMTZiNDgzODgwMDFmMTQ2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Wdk-Ljdal2OExx6elUCeCxTe5V4ujEHmrp_TBCzV_Jo";

export const fetchWithToken = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
