import { Data } from '../../data';
import styles from './index.module.css';
import PostForm from '../postCreateForm'


const addPost = (props) => {

    return(
    <div className={styles.addPost}>
        <p className={styles.title}>Create post</p>
        <div className={styles.box}>
            <div className={styles.buttonBox}>
                <button className={styles.button}>Post</button>
                <button className={styles.button}>Inquiry</button>
                <button className={styles.button}>Request</button>
            </div>
            <PostForm />
        </div>
    </div>
)};


export default addPost;
