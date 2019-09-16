const ora = require('ora')

module.exports = (args) => {
    let dockerHubAPI = require('docker-hub-api');
    let username = process.env.DOCKER_HUB_USERNAME;
    let password = process.env.DOCKER_HUB_PASSWORD;
    let repoName = process.env.DOCKER_HUB_REPO;

    if (args.name) {
        repoName = args.name
    }

    const spinner = ora().start()

    try {
        dockerHubAPI.login(username, password).then(function (info) {
            loginToken = info.token;
            dockerHubAPI.setLoginToken(loginToken);
            dockerHubAPI.deleteRepository(username, repoName).then(function (info) {
                spinner.stop()
                console.log("repo deleted")
            });
        });

    } catch (err) {
        spinner.stop()
        console.error(err)
    }
}