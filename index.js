const express = require('express'); // express 모듈을 가져옴
const app = express(); // 새로운 express 앱을 만듦.
const port = 5000; // 서버 포트
const bodyParser = require('body-parser');
const {User} = require('./models/user');

// application/x-www-form-urlencoded 를 가져올 수 있게 해주는 부분
app.use(bodyParser.urlencoded({extended: true}));
// application/json 타입을 분석해서 가져올 수 있도록
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose
	.connect(
		'mongodb+srv://hyesuhong:znzlfn95@boilerplate.evpaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then(() => console.log('mongo db connected!'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('Hello World!');
}); // 루트 디렉토리에 Hello World를 출력

app.post('/register', (request, response) => {
	// Client에서 회원가입에 필요한 정보를 받아와 DB에 넣어주기
	// User Model을 가져오기

	// request.body 안에는 json형식으로 들어있음. -> 이는 body-parser가 있어서 가능한 것. 
	const user = new User(request.body);
	
	user.save((err, userInfo) => {
		if(err) return response.json({success: false, err})
		return response.status(200).json({success: true})
	}) // mongoDB
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
}); // 해당 포트에서 이 앱을 실행
