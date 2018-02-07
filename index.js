const { exec } = require('shelljs')
const fs = require('fs')
const path = require('path')
function qiniuUploader(qnConf) {
  console.log('>>>生成七牛配置文件...')
  qnConf.src_dir = path.resolve(process.cwd(), qnConf.src_dir).replace(/\\/g, '\\')
  fs.writeFile(process.cwd() + '/qn.config.json', JSON.stringify(qnConf, null, 2), (err) => {
    if (err) {
      return console.log(chalk.red(err))
    }
  
    console.log('>>>登陆七牛...')
    exec(`qshell account ${qnConf.ak} ${qnConf.sk}`)
  
    console.log('>>>查找项目现有文件...')
    exec(`qshell listbucket ${qnConf.bucket} ${qnConf.key_prefix} qnlist.txt`)
  
    console.log('>>>删除项目现有文件...')
    exec(`qshell batchdelete -force ${qnConf.bucket} qnlist.txt`)
  
    console.log('>>>上传至cdn...')
    exec(`qshell qupload qn.config.json`)
  })
}
module.exports = qiniuUploader


