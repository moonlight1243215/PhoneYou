 import { BsHeartFill, BsFillEmojiSmileFill, BsFillEmojiFrownFill, BsFillEmojiAngryFill } from "react-icons/bs";
 import { Data } from '../../data';
 import styles from './index.module.css'
 
const postForm = (props) => {

    const listItem = Data.map((item) =>
        <div className={styles.postForm}>
        <div className={styles.userData}>
            <div className={styles.userDataLeft}>
                <div className={styles.postAvatar}></div>
                <p className={styles.postUserName}>{item.userName}</p>
            </div>
            <p className={styles.postAddTime}>{item.timeToAdd}</p>
        </div>
        <div className={styles.postContent}>
            <p className={styles.postContentText}>{item.postContext}</p>
        </div>
        <div className={styles.postComentSection}>
            <div className={styles.reactionBox}>
                <div className={styles.emojiBox}>
                    <div className={styles.emoji}>
                        <BsFillEmojiSmileFill className={styles.icon}/>
                    </div>
                    <p className={styles.numberOfEmoji}>{item.happyNumber}</p>
                </div>
                    <div className={styles.emojiBox}>
                    <div className={styles.emoji}>
                        <BsFillEmojiFrownFill className={styles.icon}/>
                    </div>
                    <p className={styles.numberOfEmoji}>{item.sadNumber}</p>
                </div>
                    <div className={styles.emojiBox}>
                    <div className={styles.emoji}>
                        <BsFillEmojiAngryFill className={styles.icon}/>
                    </div>
                    <p className={styles.numberOfEmoji}>{item.angryNumber}</p>
                </div>
                    <div className={styles.emojiBox}>
                    <div className={styles.emoji}>
                        <BsHeartFill className={styles.icon}/>
                    </div>
                    <p className={styles.numberOfEmoji}>{item.heartNumber}</p>
                </div>
            </div>
            <p className={styles.commentButton}>Comment!</p>
        </div>
    </div>
    );

return(
    <>
        <ul>{listItem}</ul>
    </>
)}
 
 
 export default postForm;
 