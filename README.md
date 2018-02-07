## qiniu-qupload
### 注意：本插件依赖于七牛的命令行工具[qshell](https://developer.qiniu.com/kodo/tools/1302/qshell)和shelljs,之所以依赖qshell是为了方便维护，以免由于官方调整而改动代码

### 安装
```
npm install qiniu-qupload
```
### 使用
配置具体可以参考qshell的文档，另外src_dir参数做了优化，只用传相对路径即可
```javascript
const qiniuUploader = require('qiniu-qupload')
const qnConf = {
  /* eslint-disable  */
  "ak"            : "youAK",
  "sk"            : "youSK",
  "src_dir"       : './test',
  "bucket"        : "youBucket",
  "key_prefix"    : "11test/",
  "overwrite"     : true,
  "rescan_local"  : true,
  "log_file"      : "qnupload.log",
  "file_type"     : 0
}
qiniuUploader(qnConf)
```