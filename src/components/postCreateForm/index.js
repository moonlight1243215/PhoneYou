import styles from './index.module.css';

const PostForm = (props) => {


    return(
        <div className={styles.box}>
            <textarea placeholder="Write post..." type="placeholder" id="content" className={styles.input}/>
            <button className={styles.button}>Submit</button>
        </div>
)};


export default PostForm;
