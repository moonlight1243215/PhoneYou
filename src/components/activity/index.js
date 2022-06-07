import ActivityStatus from '../activityStatus';
import styles from './index.module.css';


const activity = (props) => (
    <div className={styles.activity}>
        <p className={styles.title}>Ostatnia aktywność</p>
        <ActivityStatus />
        <ActivityStatus />
        <ActivityStatus />
        <button className={styles.more}>More...</button>
    </div>
);


export default activity;
