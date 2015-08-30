
module.exports = {
	development: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost/todoList-dev',
		port: process.env.PORT || 3030,
		seedDB: true
	},
	production: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost/todoList',
		port: process.env.PORT || 80,
		seedDB: false
	}
}
