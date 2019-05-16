'use strict'

const packageConfig = require('../package.json');
const semver = require('semver');
const chalk = require('chalk');
const shell = require('shelljs');


function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}
const versionRequirements = [];

if (shell.which('node')) {
    versionRequirements.push({
        name: 'node',
        requireVersion: packageConfig.engines.node,
        currentVersion: exec('node -v'),
    });
}

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        requireVersion: packageConfig.engines.npm,
        currentVersion: exec('npm -v')
    });
}

module.exports = function () {

    const warnings = [];

    for (let index = 0; index < versionRequirements.length; index++) {
        const r = versionRequirements[index];
        if (!semver.satisfies(r.currentVersion, r.requireVersion)) {
            warnings.push(`${r.name}: ${chalk.red(r.currentVersion)}  should be ${chalk.blue(r.requireVersion)}`);
        }
    }

    if (warnings.length) {

        console.log(chalk.yellow('构建应用，你需要更新如下模块的版本'));

        for (let index = 0; index < warnings.length; index++) {
            const tip = warnings[index];

            console.log('    ' + tip);
        }

        process.exit(1);
    }

};