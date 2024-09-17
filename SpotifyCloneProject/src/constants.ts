import {Track} from 'react-native-track-player';

export const playListData: Track[] = [
  {
    id: 1,
    title: 'Olsun',
    artist: 'Sertap Erener',
    album: 'Kirik Kalpler Albümü',
    artwork:
      'https://is1-ssl.mzstatic.com/image/thumb/Music60/v4/f8/4b/c5/f84bc5af-6e56-9529-76cd-fb8784922ff6/cover.jpg/600x600bf-60.jpg',
    url: require('./assets/audio/one.mp3'),
  },
  {
    id: 2,
    title: 'Olmazlara Yandim',
    artist: 'Ozbi Feat. Gülce Duru',
    album: 'RAKILI LIVE',
    artwork: 'https://i1.sndcdn.com/artworks-000248974490-mj08df-t500x500.jpg',
    url: require('./assets/audio/two.mp3'),
  },
  {
    id: 3,
    title: 'Journey',
    artist: 'Mark Eliyahu',
    album: 'Journey',
    artwork: 'https://i.ytimg.com/vi/RgKKgzVhMgY/maxresdefault.jpg',
    url: require('./assets/audio/three.mp3'),
  },
  {
    id: 4,
    title: 'Derinlerde',
    artist: 'Mark Eliyahu & Cem Adrian',
    album: 'Derinlerde',
    artwork: 'https://i.ytimg.com/vi/BAlG6zmNi2w/maxresdefault.jpg',
    url: require('./assets/audio/four.mp3'),
  },
  {
    id: 5,
    title: 'Her Gece',
    artist: 'Perdenin Ardindakiler',
    album: 'Perdenin Ardindakiler',
    artwork: 'https://i.ytimg.com/vi/VWc85A8bIyo/sddefault.jpg',
    url: require('./assets/audio/five.mp3'),
  },
];
