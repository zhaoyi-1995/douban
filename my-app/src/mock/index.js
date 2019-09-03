const Mock = require('mockjs');

Mock.mock('/home','get',require('./json/home'));
Mock.mock('/movies','get',require('./json/movies'));
Mock.mock('/findgoodmovies','get',require('./json/findGoodMovies'));
Mock.mock('/movielist','get',require('./json/movielist'));