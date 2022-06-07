import styles from './index.module.css';
import avatar from '../../assets/avatar.png'

const ActivityStatus = (props) => (
    <>
        <div className={styles.box}>
            <img className={styles.avatar} src={avatar} />
            <p className={styles.userName}>Anna Man polubiła</p>
        </div>
    </>
);

ActivityStatus.propTypes = {};

export default ActivityStatus;
