import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LeftCircleOutlined, RightCircleOutlined, DownloadOutlined } from '@ant-design/icons';
import { Rate, Button, Avatar, Card } from 'antd';
import styles from '../style/trangchu.module.css';

type Props = {};
const url = [
  { path: '/Nike', id: 1 },
  { path: '/Adidas', id: 2 },
  { path: '/B', id: 3 }

]

const images1 = [
  { id: 1, imageName: '1.png', avatarUrl: 'https://example.com/avatar1.jpg', title: 'Ultra Boost', description: '4.700.000 ₫' },
  { id: 2, imageName: '2.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Zx 4000 4d', description: '6.400.000 ₫' },
  { id: 3, imageName: '3.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Yeezy Boost 700 “Wave Runner”', description: '6.800.000 ₫' },
  { id: 4, imageName: '4.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Yeezy boost 350 v2 “zebra”', description: '6.000.000 ₫' },
  { id: 5, imageName: '5.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Ultraboost W', description: '5.300.000 ₫' },
  { id: 6, imageName: '6.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas', description: '5.000.000 ₫' },
  { id: 7, imageName: '7.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Nmd R1 “Villa Exclusive”', description: '5.000.000 ₫' },
  { id: 8, imageName: '8.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas EQT Cushion ADV “North America', description: '4.700.000 ₫' },
];
const images2 = [
  { id: 1, imageName: '1.png', avatarUrl: 'https://example.com/avatar1.jpg', title: 'Nike W’s Air Huarache Run “Triple White”', description: '7.300.000 ₫' },
  { id: 2, imageName: '2.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas EQT Cushion ADV “North America”', description: '7.000.000₫' },
  { id: 3, imageName: '3.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Nike Air Presto “Off White”', description: '8.800.000 ₫' },
  { id: 4, imageName: '4.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Nmd R1 “Villa Exclusive”', description: '6.000.000 ₫' },
  { id: 5, imageName: '5.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Nike Air Max 1 Se “Just Do It”', description: '5.300.000 ₫' },
  { id: 6, imageName: '6.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Nike Wmns Air Huarache City Move', description: '5.000.000 ₫' },
  { id: 7, imageName: '7.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Ultraboost W', description: '5.000.000 ₫' },
  { id: 8, imageName: '8.png', avatarUrl: 'https://example.com/avatar2.jpg', title: 'Adidas Yeezy boost 350 v2 “zebra”', description: '4.700.000 ₫' },
];

const card = [
  { id: 1, img: '1.png', title: 'Nike', path: '/Nike' },
  { id: 2, img: '2.png', title: 'Adisdas', path: '/Adidas ' },
  { id: 3, img: '3.png', title: 'Bộ sưu tập', path: '/Bosuutap' }
];
const logoBand = [
  { id: 1, img: '1.png' },
  { id: 2, img: '2.png' },
  { id: 3, img: '3.png' },
  { id: 4, img: '4.png' },
  { id: 5, img: '5.png' }
]

const TrangChu: React.FC<Props> = () => {
  const { Meta } = Card;
  const [index, setIndex] = useState(1);
  const [imagePath, setImagePath] = useState(`/image/${index}.png`);

  useEffect(() => {
    setImagePath(`/image/${index}.png`);
  }, [index]);

  const handlePrevClick = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    const maxIndex = card.length;
    if (index < maxIndex) {
      setIndex(index + 1);
    } else {
      // Nếu đang ở ảnh cuối cùng, quay lại ảnh đầu tiên
      setIndex(1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.imageBig} src={imagePath} alt="" />
        <button disabled={index === 0} className={`${styles.button} ${styles.prevButton}`} onClick={handlePrevClick}>
          <LeftCircleOutlined className={styles.icon} />
        </button>
        <button className={`${styles.button} ${styles.nextButton}`} onClick={handleNextClick}>
          <RightCircleOutlined className={styles.icon} />
        </button>
      </div>
      <div className={styles.text}>
        <p>Sản phẩm mới</p>
      </div>
      <div className={styles.container_card}>
        {images1.map((image) => (
          <Link className={styles.link} to={`/orderdetail/${image.id}`} key={image.id}>
            <Card className={styles.card} cover={<img alt={image.title} src={`/imgproduct1/${image.imageName}`} />}>
              <Meta
                avatar={<Avatar src={image.avatarUrl} />}
                title={<span className={styles.cardTitle}>{image.title}</span>}
                description={<span className={styles.cardDescription}>{image.description}</span>}
              />
            </Card>
          </Link>
        ))}
      </div>
      <div className={styles.container_img}>
        {card.map((card) => (
          <Link className={styles.link} to={`${card.path}`} key={card.id}>
            <div className={styles.card_img} key={card.id}>
              <img alt={card.img} src={`/poster/${card.img}`} />
              <span>
                <p>{card.title}</p>
              </span>
              <span>
                <Button className={styles.detailButton} shape="round">
                  Mua ngay
                </Button>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.text}>
        <p>Sản phẩm bán chạy</p>
      </div>
      <div className={styles.container_card}>
        {images2.map((image) => (
          <Link className={styles.link} to={`/orderdetail/${image.id}`} key={image.id}>
            <Card className={styles.card} cover={<img alt={image.title} src={`/imgproduct2/${image.imageName}`} />}>
              <Meta
                avatar={<Avatar src={image.avatarUrl} />}
                title={<span className={styles.cardTitle}>{image.title}</span>}
                description={<span className={styles.cardDescription}>{image.description}</span>}
              />
            </Card>
          </Link>
        ))}
      </div>
      <div className={styles.imgFooter}>
        <img src='/poster/footer.png' alt="Footer Image" />
        <div className={styles.textImg}>
          <h1>Giày luyện tập thể thao</h1><br />
          <h1>Nâng tầm chất lượng, hướng tới mục tiêu</h1> <br />
          <h1>SHOEREPS</h1>
        </div>
      </div>
      <div className={styles.bandLogo}>
        {logoBand.map((band) => (
          <div className={styles.band} key={band.img}>
            <img alt={band.img} src={`/band/${band.img}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default TrangChu;
