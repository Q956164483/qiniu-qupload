const { exec } = require('shelljs')
const fs = require('fs')
const path = require('path')
function qiniuUploader(qnConf) {
  console.log('>>>登陆七牛...')
  exec(`qshell account ${qnConf.ak} ${qnConf.sk}`)
  console.log('>>>隐藏ak sk ...')
  delete qnConf.ak
  delete qnConf.sk
  console.log('>>>生成七牛配置文件...')
  fs.writeFile(process.cwd() + '/qn.config.json', JSON.stringify(qnConf, null, 2), (err) => {
    if (err) {
      return console.log(chalk.red(err))
    }

    console.log('>>>查找七牛上此项目现有文件...')
    exec(`qshell listbucket ${qnConf.bucket} ${qnConf.key_prefix} qnlist.txt`)
  
    console.log('>>>删除此项目现有文件...')
    exec(`qshell batchdelete -force ${qnConf.bucket} qnlist.txt`)
  
    console.log('>>>上传至cdn...')
    exec(`qshell qupload qn.config.json`)
  })
}
module.exports = qiniuUploader


