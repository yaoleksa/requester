const request = new XMLHttpRequest();

request.open('POST', 'https://yaoleksa.github.io/sample_server/');
request.send('badly');

request.onload = () => {
    console.log(request.status);
    console.log('not');
}