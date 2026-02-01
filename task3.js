const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {

    if (request.method !== "GET") {
        response.end("NaN");
        return;
    }

    const url = new URL(request.url, "http://localhost");

    if (url.pathname !== "/kuralovmadik_gmail_com") {
        response.end("NaN");
        return;
    }

    const xStr = url.searchParams.get("x");
    const yStr = url.searchParams.get("y");

    if (!/^[1-9]\d*$/.test(xStr) || !/^[1-9]\d*$/.test(yStr)) {
        response.end("NaN");
        return;
    }

    const x = BigInt(xStr);
    const y = BigInt(yStr);

    const result = nok(x, y);

    response.end(result.toString());
});

server.listen(PORT, ()=>console.log("Сервер запущен по адресу " + PORT));

function gcd(a, b) {
    while (b !== 0n) {
        [a, b] = [b, a % b];
    }
    return a;
}

function nok(a, b) {
    return (a * b) / gcd(a, b);
}