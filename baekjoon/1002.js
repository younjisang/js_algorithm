const fs = require("fs");
const input = fs.readFileSync(0, 'utf8').toString().split("\n");

const num = parseInt(input[0]);

for(let i = 1; i <= num; i++)
{
    const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(el => parseInt(el))

    const s = r1 > r2 ? r1 - r2 : r2 - r1
    const d = ((x1 - x2) ** 2) + ((y1 - y2) ** 2)

    const sum_circle = (r1 + r2) ** 2
    const diff_circle = (r1 - r2) ** 2

    if(r1 == r2 && d == 0) console.log("-1")
    else if(d == sum_circle || d == diff_circle)  console.log("1")
    else if(d > sum_circle || d < diff_circle) console.log("0")
    else if(d < sum_circle)console.log("2")
}
