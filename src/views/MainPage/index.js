import styles from './index.module.css';
import PostForm from '../../components/postFrom';
import AcountInformation from '../../components/acountInformation';
import AddPost from '../../components/addPost';
import Activity from '../../components/activity';
import MenuBar from '../../components/menuBar';

const MainPage = () => {

    return(
    <>
    <div className={styles.container}>
        <MenuBar />
        <div className={styles.contentBox}>
            <div className={styles.leftBox}>
               <AcountInformation />
            </div>
            <div className={styles.center}>
                <PostForm />
            </div>
            <div className={styles.right}>
                <AddPost />
                <Activity />
            </div>
        </div>
    </div>
    </>
)};


export default MainPage;
