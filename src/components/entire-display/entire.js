import React from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Txt from './input'; // Txtコンポーネントのインポート
import BoxSystemProps from './postdisplay'; // BoxSystemPropsコンポーネントのインポート
import storage from "../../firebase"
import Modal from 'react-modal';//ReactModalのインポート
import Individual from '../individual-display/individual';//individual-displayインポート

Modal.setAppElement('#root');

class Entire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            openModals: {}, //各モーダルの開閉状態を管理
            currentPostId: null, // 現在表示中の投稿IDを管理
        };
    }
    componentDidMount() {
        const postData = collection(db, "posts");
        getDocs(postData).then((querySnapshot) => {
            this.setState({ posts: querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
        });

        onSnapshot(postData, (post) => {
            this.setState({ posts: post.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
        });
    }
    
    openModal = (postId) => {
        this.setState({
          openModals: {
            [postId]: true,
          },
          currentPostId: postId, // 現在表示中の投稿IDを更新
        });
      };
    
      closeModal = () => {
        this.setState({
          openModals: {},
          currentPostId: null, // モーダルを閉じたら現在表示中の投稿IDをリセット
        });
      };
    

    render() {        
        const currentPost = this.state.posts[this.state.currentPostId];

        return (
            <div className="whole">
                <div className="explore">
                    <Txt />
                </div>
                
                {Object.entries(this.state.posts).map(([key, post]) => (
                    <div className="displayimages" key={key}>
                           <BoxSystemProps title={post.title} />              
           
            <button className="modalbutton" onClick={() => this.openModal(key)}>
              Check!
            </button>
            User

            {/* 投稿ごとのモーダル */}            
            <Modal
              isOpen={this.state.currentPostId === key}
              onRequestClose={this.closeModal}
              contentLabel={`Individual Post Modal - ${key}`}
            >
              {/* Individual コンポーネントをモーダル内で表示 */}
              {currentPost && <Individual post={currentPost} />}
            </Modal>            
                        </div>
                ))}
            </div>
        );
    }
}

export default Entire;