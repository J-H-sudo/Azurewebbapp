
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error fetching joke');
  }
});

server.listen(port, hostname, () => {

