let xyz: any = "Ramessh lal";
console.log(xyz.toUpperCase());
xyz = 10000.001;
console.log(xyz);
xyz = -100;
console.log(xyz);
xyz = true;
console.log(xyz);
xyz = {
  name: "ramessh lal",
  village: "Katihar",
};
console.log(xyz);

//-----------------------------------

let value: unknown = "Ramessh lal";
// value.toUpperCase();// error value is of type unknown

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// for API data
const data: any = await response.json(); // typescript won't protect.

// typescript will check if data is of same type.
const data: unknown = await response.json();
if (typeof data === "object" && data !== null) {
  console.log(data);
}
