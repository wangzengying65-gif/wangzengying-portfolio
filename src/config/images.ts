import type { GalleryImage } from '../types';

// ============================================================
// 本地开发模式 — 照片放在 public/photos/ 目录
// 上线时替换为 CDN 地址:
//   e.g. 'https://your-bucket.cos.ap-guangzhou.myqcloud.com'
// ============================================================
const BASE = '/photos';

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: `${BASE}/04744a1b03d50c53beb9ea9f84e190c5.jpg`,
    thumbnail: `${BASE}/04744a1b03d50c53beb9ea9f84e190c5.jpg`,
    alt: '照片 1',
    width: 4032,
    height: 3024,
  },
  {
    id: '2',
    src: `${BASE}/08171b7a8c2843f0d703c81176a07b02.jpg`,
    thumbnail: `${BASE}/08171b7a8c2843f0d703c81176a07b02.jpg`,
    alt: '照片 2',
    width: 4032,
    height: 3024,
  },
  {
    id: '3',
    src: `${BASE}/54b437cab9858064dcbef360d0c6ff8e.jpg`,
    thumbnail: `${BASE}/54b437cab9858064dcbef360d0c6ff8e.jpg`,
    alt: '照片 3',
    width: 5712,
    height: 4284,
  },
  {
    id: '4',
    src: `${BASE}/95c64567d001fe705cff0b44ac0ab7e0.jpg`,
    thumbnail: `${BASE}/95c64567d001fe705cff0b44ac0ab7e0.jpg`,
    alt: '照片 4',
    width: 5712,
    height: 4284,
  },
  {
    id: '5',
    src: `${BASE}/985c90d07551f471e93ac57e65e318f3.jpg`,
    thumbnail: `${BASE}/985c90d07551f471e93ac57e65e318f3.jpg`,
    alt: '照片 5',
    width: 5712,
    height: 4284,
  },
  {
    id: '6',
    src: `${BASE}/a6911e351c48fe0d1424ea7aeb8cc1f5.jpg`,
    thumbnail: `${BASE}/a6911e351c48fe0d1424ea7aeb8cc1f5.jpg`,
    alt: '照片 6',
    width: 4032,
    height: 3024,
  },
  {
    id: '7',
    src: `${BASE}/aa1ee8883ce33cfe15e5361b22231d3c.jpg`,
    thumbnail: `${BASE}/aa1ee8883ce33cfe15e5361b22231d3c.jpg`,
    alt: '照片 7',
    width: 4032,
    height: 3024,
  },
  {
    id: '8',
    src: `${BASE}/acb289eec5074ecb22ff9b450d6cb8c8.jpg`,
    thumbnail: `${BASE}/acb289eec5074ecb22ff9b450d6cb8c8.jpg`,
    alt: '照片 8',
    width: 1702,
    height: 1276,
  },
  {
    id: '9',
    src: `${BASE}/b8271dcde00bf86fd9a76c3b32849fa6.jpg`,
    thumbnail: `${BASE}/b8271dcde00bf86fd9a76c3b32849fa6.jpg`,
    alt: '照片 9',
    width: 1650,
    height: 3418,
  },
  {
    id: '10',
    src: `${BASE}/c8b3cd9929839b9d9dae618c8cc6430d.png`,
    thumbnail: `${BASE}/c8b3cd9929839b9d9dae618c8cc6430d.png`,
    alt: '照片 10',
    width: 1086,
    height: 1448,
  },
  {
    id: '11',
    src: `${BASE}/d5ed2b69417253c27380b0849bee437e.png`,
    thumbnail: `${BASE}/d5ed2b69417253c27380b0849bee437e.png`,
    alt: '照片 11',
    width: 941,
    height: 1672,
  },
  {
    id: '12',
    src: `${BASE}/dbc010e0b8461afc406f70ef8076c864.jpg`,
    thumbnail: `${BASE}/dbc010e0b8461afc406f70ef8076c864.jpg`,
    alt: '照片 12',
    width: 3024,
    height: 4032,
  },
];
