const qiniuUploader = require('../index.js')
const path = require('path')
const qnConf = {
  /* eslint-disable  */
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
console.log('操作系统>>>', process.platform)
// qiniuUploader(qnConf)