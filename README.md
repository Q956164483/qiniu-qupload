## 准备
本插件依赖于七牛的命令行工具qshell和shelljs,之所以依赖qshell是为了方便维护，以免由于官方调整而改动代码

#### [qshell官方安装教程](https://developer.qiniu.com/kodo/tools/1302/qshell)

#### 安装shelljs
```
npm install shelljs
```
## 安装
```
npm install qiniu-qupload
```
## 使用
配置具体可以参考qshell的文档，本插件同步前会自动先删除key_prefix目录下的文件，然后上传，所以不用担心历史文件占用七牛空间的问题，另外，七牛缓存比较严重，建议给文件都加指纹哦，插件有其他问题，可以直接在git提问
```javascript
const qiniuUploader = require('qiniu-qupload')
const path = require('path')
const qnConf = {
  "ak"            : "youAK",
  "sk"            : "youSK",
  "src_dir"       : `${path.resolve(process.cwd(), './test').replace(/\\/g, '\\')}`,
  "bucket"        : "youBucket",
  "key_prefix"    : "11test/",
  "overwrite"     : true,
  "rescan_local"  : true,
  "log_file"      : "qnupload.log",
  "file_type"     : 0
}
qiniuUploader(qnConf)
```
#### 注意：src_dir参数mac和windows不一样，上面的为windows平台的示例，mac应该为path.resolve(process.cwd(), './test')但是我没验证，src_dir参数以及其他完整配置请查看[qshell-qupload官方文档](https://github.com/qiniu/qshell/blob/master/docs/qupload.md)