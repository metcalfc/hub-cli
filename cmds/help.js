const menus = {
    main: `
      hub-cli [command] <options>

      create            create repo
      delete            delete repo
      version           show package version
      help              show help menu for a command`,

    create: `
      hub-cli create <options>

      --name, -n        the repo name to use`,

    delete: `
      hub-cli delete <options>

      --name, -n        the repo name to use`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}