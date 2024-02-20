import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Trangchu from '../pages/Trangchu';
import Gioithieu from '../pages/GioiThieu';
import Lienhe from '../pages/Lienhe';
import Nike from '../pages/Nike';
import Adidas from '../pages/Adidas';
import Bosuutap from './Bosuutap'
import Styles from '../style/index.module.css'
import Footer from '../pages/footer'
import Detail1 from '../orderdetail/detail1'
import Detail2 from '../orderdetail/detail2'

type Props = {}

export default function index({ }: Props) {
    return (
        <div>
            <div className={Styles.container}>
                <div className={Styles.logo}>
                    <img src='/image/logo.png' alt="Logo" />
                </div>
                <div className={Styles.App}>
                    <nav>
                        <ul>
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
                                <Link to="/Bosuutap">Bộ sưu tập</Link>
                            </li>
                            <li>
                                <Link to="/Lienhe">Liên Hệ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Trangchu />} />
                <Route path="/gioithieu" element={<Gioithieu />} />
                <Route path="/Nike" element={<Nike />} />
                <Route path="/Adidas" element={<Adidas />} />
                <Route path="/Lienhe" element={<Lienhe />} />
                <Route path="/Bosuutap" element={<Bosuutap />} />
                <Route path="/orderdetail/1" element={<Detail1 />} />
                <Route path="/orderdetail/2" element={<Detail2 />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}