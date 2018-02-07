const qiniuUploader = require('../index.js')
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