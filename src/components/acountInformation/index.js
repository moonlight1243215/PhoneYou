import { Data } from '../../data';
import styles from './index.module.css'

const acountInformation = (props) => {
    
    const acount = Data.length;

    return(
        <div className={styles.left}>
            <div className={styles.avatar}></div>
            <p className={styles.userName}>Krzysztof Szywacz</p>
            <div className={styles.acountDataBox}>
                <p className={styles.acountData}>Number of friends: 22</p>
                <p className={styles.acountData}>Reactions obtained: 33</p>
                <p className={styles.acountData}>Added posts: 44</p>
            </div>
            <div className={styles.line}></div>
            <p className={styles.generalData}>Active users</p>
            <div className={styles.wheel}>55</div>
            <p className={styles.generalData}>Registered accounts</p>
            <div className={styles.wheel2}>{acount}</div>
        </div>
)};


export default acountInformation;
