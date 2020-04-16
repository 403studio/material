#!/usr/bin/env node
const ora = require('ora')
const chalk = require('chalk')
const shell = require('shelljs')
const ghpages = require('gh-pages')

const buildSpinner = ora('文档编译中...').start()
// console.log(shell.exec('npm run build', { silent: true }))
const { code, stderr } = shell.exec('npm run build', { silent: true })
if (code === 0) {
  buildSpinner.succeed(chalk.green('文档编译完成'))
  const publishSpinner = ora('正在发布...').start()
  ghpages.publish('dist', {
    repo: 'https://github.com/403studio/material.git',
    message: 'docs: 文档发布'
  }, function (error) {
    if (error) {
      console.log(error)
      publishSpinner.fail('文档发布失败')
    }
    publishSpinner.succeed('文档发布完成')
  })
} else {
  console.log(stderr)
  buildSpinner.fail(chalk.red('文档编译失败'))
}
