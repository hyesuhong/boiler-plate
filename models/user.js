const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50,
	},
	email: {
		type: String,
		trim: true, // true로 되어 있으면 전달된 문자에 공백이 있을 경우 없애주는 옵션
		unique: 1,
	},
	password: {
		type: String,
		minlength: 5,
	},
	lastname: {
		type: String,
		maxlength: 50,
	},
	role: {
		// 관리자와 일반 유저를 구분하기 위해
		type: Number,
		default: 0,
	},
	image: String,
	token: {
		type: String,
	},
	tokenExp: {
		type: Number,
	},
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
