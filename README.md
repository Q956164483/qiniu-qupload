## 准备
本插件依赖于七牛的命令行工具qshell和shelljs,之所以依赖qshell是为了方便维护，以免由于官方调整而改动代码

##### [qshell官方安装教程](https://developer.qiniu.com/kodo/tools/1302/qshell)

## 安装
```
npm install qiniu-qupload
```
## 使用
完整配置可以参考qshell的文档；本插件同步前会自动先删除七牛云对应bucket下的key_prefix开头的文件，然后上传，所以不用担心历史文件占用七牛空间的问题；七牛缓存比较严重，建议给文件都加指纹哦，插件有其他问题，可以直接在[git提问](https://github.com/Q956164483/qiniu-qupload/issues)；个人建议把key_prefix设置为你项目的名称，我是直接把package.json的name字段直接引入进来了，例如这样``` `${process.env.npm_package_name}/static/` ```,同时，如果你使用了webpack，把publicPath字段改为``` `http://youCdnPath/${process.env.npm_package_name}/` ```即可，这样一来，每次项目初始化之后改下package.json的name字段，然后配合npm scripts就能实现一个命令搞定打包+同步cdn+上传服务器
```javascript
const qiniuUploader = require('qiniu-qupload')
const path = require('path')
const qnConf = {
  "ak"            : "youAK",
  "sk"            : "youSK",
  "src_dir"       : `${path.resolve(process.cwd(), './test').replace(/\\/g, '\\')}`,
  "bucket"        : "youBucket",
  "key_prefix"    : "11test/static/",
  "overwrite"     : true,
  "rescan_local"  : true,
  "log_file"      : "qnupload.log",
  "file_type"     : 0
}
qiniuUploader(qnConf)
```
#### 注意：src_dir参数mac和windows不一样，上面的为windows平台的示例，mac应该为path.resolve(process.cwd(), './test')但是我没验证，src_dir参数以及其他完整配置请查看[qshell-qupload官方文档](https://github.com/qiniu/qshell/blob/master/docs/qupload.md)