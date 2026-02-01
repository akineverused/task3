const http = require("http");
const PORT = process.env.PORT || 3000;

const server =  http.createServer((request, response)=>{
    if (request.method !== "GET") {
        response.end("NaN");
        return;
    }

    const url = new URL(request.url, "http://localhost:3000");

    if (url.pathname !== "/kuralovmadik_gmail_com") {
        response.end("NaN");
        return;
    }

    const x = Number(url.searchParams.get("x"));
    const y = Number(url.searchParams.get("y"));

    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
        response.end("NaN");
        return;
    }

    response.end(String(nok(x, y)));
});

server.listen(PORT, ()=>console.log("Сервер запущен по адресу " + PORT));

function gcd(n, m) {
    return m == 0 ? n : gcd(m, n % m);
}

function nok(n, m) {
    return n * m / gcd(n, m);
}