import Mock from 'mockjs'

//图片和json文件是默认暴露的
import banner from './banner.json'
import floor from './floor.json'

Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })