const request = new XMLHttpRequest();

request.open('POST', 'http://localhost:3000');
request.send('badly');

request.onload = () => {
    console.log(request.status);
}