# monitoring

A simple node app written in express that listens to port 8000, that answers to 

* /login on POST
* /api/users on GET and POST

You can change the port locally to listen to a different one, to do so create a .env file with content

``` env
PORT=NUMBER
```

# Running the stack

To run the stack simply use docker-compose

***Note: Make sure the following ports are not being used before running this***

* 8000
* 9090
* 3000

```bash
docker-compose up -d
```

- Grafan will be available in port 3000
- Prometheus UI will be available in port 9090
- Node.api will be available in port 8000


# Development

To build the image with a different port change the value in the .env file, Dockerfile and docker-compose.yml
