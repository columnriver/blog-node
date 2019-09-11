/**
 * App config module.
 * @file 应用运行配置
 * @module app.config
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

const path = require('path');
const { argv } = require('yargs');
// const package = require('package')

exports.APP = {
	LIMIT: 10,
	PORT: 8000,
	ROOT_PATH: __dirname,
	NAME: 'LAR',
	URL: 'http://47.93.185.193/main.html',
	FRONT_END_PATH: path.join(__dirname, '..', 'LAR'),
};

exports.CROSS_DOMAIN = {
	allowedOrigins: [
		'http://47.93.185.193/main.html',
		'http://47.93.185.193',
		'https://github.com',
	],
	allowedReferer: 'LAR',
};

exports.MONGODB = {
	uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/blogNode`,
	username: argv.db_username || 'DB_username',
	password: argv.db_password || 'DB_password',
};
exports.AUTH = {
	data: argv.auth_data || { user: 'root' },
	jwtTokenSecret: argv.auth_key || 'blog-node',
	defaultPassword: argv.auth_default_password || 'root',
};

exports.EMAIL = {
	account: argv.email_account || 'your email address like : i@LAR',
	password: argv.email_password || 'your email password',
	from: 'https://github.com',
	admin: 'LAR',
};

exports.AKISMET = {
	key: argv.akismet_key || 'your akismet Key',
	blog: argv.akismet_blog || 'your akismet blog site, like: http://47.93.185.193/main.html',
};

exports.GITHUB = {
	username: 'newborn',
	oauth_uri: 'https://github.com/login/oauth/authorize',
	access_token_url: 'https://github.com/login/oauth/access_token',
	// 获取 github 用户信息 url // eg: https://api.github.com/user?access_token=****&scope=&token_type=bearer
	user_url: 'https://api.github.com/user',

	// 请把生产环境的 redirect_url，client_id 和 client_secret 中的 "****", 换成自己创建的 OAuth App 的具体参数即可。
	// // 生产环境
   // redirect_url: 'http://47.93.185.193/login',
   // client_id: 'bbda75ed59d119102cb1',
	// client_secret: '883657faaf5202a3399ff9a8d36b86e5185e02e9',

	// 开发环境 （参数可以直接用，公供测试）
	redirect_url: "http://localhost:3001/login",
    client_id: "00485dbcd602508dade6",
	client_secret: "8f37f4d395d113884fe71b795a989634fd013cd4",
	
};

exports.ALIYUN = {
	ip: argv.aliyun_ip_auth,
};

exports.BAIDU = {
	site: argv.baidu_site || 'your baidu site domain like : newborn',
	token: argv.baidu_token || 'your baidu seo push token',
};

exports.QINIU = {
	accessKey: argv.qn_accessKey || 'your access key',
	secretKey: argv.qn_secretKey || 'your secret key',
	bucket: argv.qn_bucket || 'your bucket name',
	origin: argv.qn_origin || 'http://nodepress.u.qiniudn.com',
	uploadURL: argv.qn_uploadURL || 'http://up.qiniu.com/',
};

exports.INFO = {
	// name: package.name,
	// version: package.version,
	// author: package.author,
	// site: exports.APP.URL,
	github: 'https://github.com',
	powered: ['react', 'Nodejs', 'MongoDB', 'Express', 'Nginx'],
};