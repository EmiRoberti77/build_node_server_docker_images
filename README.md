## build the docker image

```bash
docker build -t my-express-app .
```

## run the container

```bash
docker run -p 8090:8090 my-express-app
```

# push image to docker repository

craete a tag with the appropiate repository name and its version.

```bash
docker tag my-express-app emirob/emi-repo:my-express-app
```

```bash
docker images
```

## Push the image to the Docker repository

```bash
docker push emirob/emi-repo:my-express-app
```

## login in to docker if needed

```bash
docker login --username emirob
```

## Push the image to docker repo

```bash
docker push emirob/emi-repo:my-express-app

```

## possible trouble shooting if login does not work because Docker Desktop is missing

```bash
nano ~/.docker/config.json
```

Update the Config: Replace "credsStore": "desktop" with "credsStore": "store", or remove the credsStore entry entirely. The file should look something like this:

Remove the previous auths:

```json
{
  "auths": {
    "https://index.docker.io/v1/": {}
  }
}
```

after it should look like this

```json
{
  "auths": {
    "https://index.docker.io/v1/": {
      "auth": "ZW1pcm9iOkZlcnJhcmk3N0VtaTc3IQ=="
    }
  },
  "currentContext": "colima",
  "plugins": {
    "-x-cli-hints": {
      "enabled": "true"
    },
    "debug": {
      "hooks": "exec"
    },
    "scout": {
      "hooks": "pull,buildx build"
    }
  },
  "features": {
    "hooks": "true"
  }
}
```

login again and it should work

```bash
docker login --username emirob
```

## Delete docker images

```bash
docker images
```

output:

```bash
(base) user@Users-MacBook-Pro ts_express_server % docker images
REPOSITORY        TAG              IMAGE ID       CREATED          SIZE
emirob/emi-repo   my-express-app   763090cfec54   26 minutes ago   186MB
my-express-app    latest           763090cfec54   26 minutes ago   186MB
node              18-alpine        90e3052b3146   6 weeks ago      126MB
hello-world       latest           ee301c921b8a   20 months ago    9.14kB
```

use image id to delete images

```bash
docker rmi IMAGE_ID
```

## Force remove

```bash
docker rmi -f IMAGE_ID
```

or

```bash
docker rmi my-express-app:latest
```

## Delete all Unused (Dangling) images

```bash
docker image prune
```

## Remove all unused images

```bash
docker image prune -a
```

## Pull image from docker repo

```bash
docker pull emirob/emi-repo:my-express-app
```

## Run the image that was pulled from the repo

```bash
docker run -p 8090:8090 emirob/emi-repo:my-express-app
```
