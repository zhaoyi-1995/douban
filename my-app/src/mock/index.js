const Mock = require('mockjs');

Mock.mock('/home','get',require('./json/home'));
Mock.mock('/movies','get',require('./json/movies'));
Mock.mock('/findgoodmovies','get',require('./json/findGoodMovies'));
Mock.mock('/movielist','get',require('./json/movielist'));
Mock.mock('/groups','get',require('./json/groups'));
Mock.mock('/check','get',require('./json/toggle'));
Mock.mock('/books','get',require('./json/books'));