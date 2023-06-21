import styles from './Home.module.css'
import Offers from '../../components/Offers/Offers';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/store';

const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [product, setProduct] = useState<Record<string, any>>({});
    const {products} = useAppSelector(state => state.products);
    const index = Math.random() * products.length;
    useEffect(() => {
        setProduct(products[index])
        console.log(product);
      }, [index, product, products]);

    return (
        <>
        <div className={styles.home_container}>
            <div className={styles.home_product}>
                <div className={styles.home_product_detail}>
                    <h1>Nombre producto</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, id perspiciatis illo consequatur quasi aut! Eos rem voluptatem tempora nostrum alias repellendus mollitia, commodi maiores neque aspernatur maxime consequatur?</p>
                </div>
                <button className={styles.home_product_button}>Ver producto</button>
            </div>
            <img src="/src/assets/pngwing.com.png" alt="image_product" />
        </div>
        <Offers />
        </>
    )
}

export default Home;