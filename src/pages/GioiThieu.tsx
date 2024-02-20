import React from 'react'
import styles from '../style/gioithieu.module.css'

type Props = {}
const logoBand = [
  { id: 1, img: '1.png' },
  { id: 2, img: '2.png' },
  { id: 3, img: '3.png' },
  { id: 4, img: '4.png' },
  { id: 5, img: '5.png' }
]

export default function GioiThieu({ }: Props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src='/gioithieu/1.png' />
          <img src='/gioithieu/2.png' />
        </div>
        <div>

          <div className={styles.text}>
            <h1> SHOEREPS</h1>
            <p>Hệ thống giày thể thao chính hãng chuyên thiết kế và kinh doanh các mặt hàng giày dép cho giới trẻ,<br /> là cấu nối cho bạn trẻ cả nước tiếp cận với xu hướng thời trang giày trên thế giới.<br /> “Chúng tôi mang đến sự khác biệt!”<br />  Cùng với xu hướng thời trang của thế giới Hệ thống giày chính hãng đã và đang không ngừng đổi mới <br />để mang đến cho các bản trẻ các mẫu giày thời trang độc đáo, mới lạ, để tiên phong cho một phong cách thời trang mới, <br />một phong cách biểu tượng cho giới trẻ trên cả nước.</p>
          </div>

        </div>

      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1> Cam Kết Với Xu Hướng:</h1>
          <p>Shoereps luôn duy trì sự nhạy bén với xu hướng thời trang.<br /> Bằng cách kết hợp giữa phong cách truyền thống và sự đổi mới,<br /> Shoereps không ngừng tạo ra những sản phẩm thú vị,<br /> phản ánh xu hướng thời trang và <br />cái mới mẻ trong ngành giày dép.</p>
        </div>
        <div className={styles.photo}>
          <img src='/gioithieu/3.jpg' />
          <img src='/gioithieu/4.jpg' />
        </div>
      </div>
      <div className={styles.bandLogo}>
        {logoBand.map((band) => (
          <div className={styles.band} key={band.img}>
            <img alt={band.img} src={`/band/${band.img}`} />
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  )
}