import React from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import BoxSystemProps from './postdisplay';
import Modal from 'react-modal';
import { FaMapMarkerAlt } from "react-icons/fa";

Modal.setAppElement('#root');

class Entire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPostId: null, // 現在表示中の投稿IDを管理
            selectedPost: null // 選択された投稿の詳細情報を保持
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
    
    openModal = (post) => {
        this.setState({
          currentPostId: post.id, // 現在表示中の投稿IDを更新
          selectedPost: post // 選択された投稿の詳細情報を設定
        });
    };
    
    closeModal = () => {
        this.setState({
          currentPostId: null, // モーダルを閉じたら現在表示中の投稿IDをリセット
          selectedPost: null // 選択された投稿の詳細情報をリセット
        });
    };

    render() {        
        const { posts, currentPostId, selectedPost } = this.state;

        return (
            <div className="whole">
                {posts.map((post, index) => (
                    <div className="displayimages" key={index}>
                        <BoxSystemProps title={post.title} image={post.coverImage}/>              
                        <button className="modalbutton" onClick={() => this.openModal(post)}>
                            Check!
                        </button>
                    </div>
                ))}
                
                {/* 選択された投稿の詳細情報をモーダルで表示 */}
                <Modal
                    isOpen={currentPostId !== null}
                    onRequestClose={this.closeModal}
                    contentLabel="Individual Post Modal"
                >
                <div className="container">
                       
                    {selectedPost && (
                        <div>
                         <div className="indiv_intro_box">
                            <div className='indiv_title'>
                            <h1>{selectedPost.title}</h1>
                            </div>
                            <div className="indiv_introduce">
                            <h2>{selectedPost.introduce}</h2>
                            </div>
                         </div>
                        <div className="indiv_course_box">
                        <ul className='timeline'>
                        {selectedPost.spotName && Object.entries(selectedPost.spotName).map(([spotKey, spot]) => (
                         <li>
                          <div className='timeline_content'>
                          <div className='flex'>
                            <figure className='mappin_img'>
                            <FaMapMarkerAlt />
                            </figure>
                            <div className="indiv_spotName">                                                         
                                            
                        <div>
                            <h3>{spot}</h3>
                        </div>                        
                    
                    </div>
                        </div>

                    <div className="indiv_spotIntroduce">
                    
                        <div>                            
                            <h3>{selectedPost.spotIntroduce[spotKey]}</h3>
                        </div>
                    
                    </div>

                    <div className="indiv_image"> 
                    
                        <div>
                            <img src={selectedPost.image[spotKey]} alt={`Spot ${spotKey}`} />
                        </div>
                    
                    </div>
                    </div>
                    </li>
                    ))}
                    </ul>
            
                    </div>        
                </div>
    )}
    </div> 
                </Modal>
            </div>
        );
    }
}

export default Entire;
