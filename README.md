# Deprecated 

You should use https://github.com/docker/hub-tool instead.


# hub-cli

Command line tool to create or delete Docker Hub repositories.

# Usage

You will need to set environment variables for your username and password.

```
 DOCKER_HUB_PASSWORD
 DOCKER_HUB_USERNAME
```

 You can either set an environment variable for the repository name.

```
 DOCKER_HUB_REPO
```

 Or use a CLI flag.

 ```
 hub-cli create -n repoName
 hub-cli delete -n repoName
 ```
