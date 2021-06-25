const express = require('express'); // express 모듈을 가져옴
const app = express(); // 새로운 express 앱을 만듦.
const port = 5000; // 서버 포트

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

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
}); // 해당 포트에서 이 앱을 실행
