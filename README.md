# FIRST - RAPYUTA IO - NODE JS



## Development Guide

* Initial setup

    ```bash
    $ npm install
    ```

* To watch for changes

    ```bash
    $ nodemon
    ```

## Docker Guide

* Build Image

    ```bash
    $ docker build -t first-rr-nodejs:latest .
    ```

* Run Image

    ```bash
    $ docker run -d -p 5000:5000 first-rr-nodejs:latest
    ```