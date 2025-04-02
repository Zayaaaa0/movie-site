export const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTI1ZjVhNmY0YzVmMzMwZDkyZjM4OWFlNDE2MGM4ZCIsIm5iZiI6MTczNzQyNTMwMS41NCwic3ViIjoiNjc4ZjAxOTU3NzE4ZDFlODk4YWFhNDc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CSwBCMtO25P2AunVSacHMHRsZ1jZk-dVrWlZ0gwW4UU";
export const formatRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};
