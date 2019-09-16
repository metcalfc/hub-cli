const ora = require('ora')

module.exports = (args) => {
    let dockerHubAPI = require('docker-hub-api');
    let username = process.env.DOCKER_HUB_USERNAME;
    let password = process.env.DOCKER_HUB_PASSWORD;
    let repoName = process.env.DOCKER_HUB_REPO;

    const details = {
        description: 'Test',
        full_description: 'Test',
        is_private: false
    }

    if (args.name) {
        repoName = args.name
    }

    const spinner = ora().start()

    try {
        dockerHubAPI.login(username, password).then(function (info) {
            loginToken = info.token;
            dockerHubAPI.setLoginToken(loginToken);
            dockerHubAPI.createRepository(username, repoName, details).then(function (info) {
                spinner.stop()
                console.log(info)
            });
        });

    } catch (err) {
        spinner.stop()
        console.error(err)
    }
}