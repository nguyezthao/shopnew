import React from 'react'
import styles from '../style/footer.module.css'
import { Link } from 'react-router-dom';
type Props = {}

export default function footer({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <div className={styles.adr}>
                <ul>
                    <li>
                        <span>
                            Giày chính hãng Nike - Adidas
                        </span>
                    </li>
                    <li>Cửa hàng 1: 9999 Nguyễn Huệ, Quận 1, TP. HCM</li>
                    <li>Cửa hàng 2: 9999 Nguyễn Trãi, Quận 5, TP. HCM</li>
                    <li>Cửa hàng 3: 9999 Đinh Tiên Hoàng, Q. Ba Đình, Hà Nội</li>
                </ul>
            </div>
            <div className={styles.nav}>
               <div><ul className={styles.linklist}>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/gioithieu">Giới Thiệu</Link>
                    </li>
                    <li>
                        <Link to="/Nike">Nike</Link>
                    </li>
                    <li>
                        <Link to="/Adidas">Adidas</Link>
                    </li>
                    <li>
                        <Link to="/Lienhe">Liên Hệ</Link>
                    </li>
                </ul>
                </div> 
            </div>
        </div>
    )
}