import './App.css';
import Layout from './components/shared/Layout';
import youtubeData from './data/youtubeData.json';


function App() {
		
  console.log('id : ', youtubeData['data'][0]['id'], ' -> 영상의 링크 주소');
  console.log('channelId : ', youtubeData['data'][0]['channelId'], ' -> 채널 아이디');
  console.log('date : ', youtubeData['data'][0]['date'], ' -> 업로드 날짜');
  console.log('title : ', youtubeData['data'][0]['title'], ' -> 영상제목');
  console.log('thumbnail : ', youtubeData['data'][0]['thumbnail'], ' -> 영상 썸네일 이미지 주소');
  console.log('description : ', youtubeData['data'][0]['description'], ' -> 영상 설명');
  console.log('channelTitle : ', youtubeData['data'][0]['channelTitle'], ' -> 채널 제목');
	console.log('category : ', youtubeData['data'][0]['category'], ' -> 카테고리');
  console.log('viewCount : ', youtubeData['data'][0]['viewCount'], ' -> 조회수');
  console.log('likeCount : ', youtubeData['data'][0]['likeCount'], ' -> 좋아요 수');
  console.log('channelUrl : ', youtubeData['data'][0]['channelUrl'], ' -> 채널 주소');
  console.log('channelThumbnail : ', youtubeData['data'][0]['channelThumbnail'], ' -> 채널 썸네일 이미지 주소');


	return(
		<Layout>
			<div>콘텐츠!</div>
		</Layout> 
		
	);
}

export default App;
