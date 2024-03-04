import React from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Txt from './input'; // Txtコンポーネントのインポート
import BoxSystemProps from './postdisplay'; // BoxSystemPropsコンポーネントのインポート

class Entire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        const postData = collection(db, "posts");
        getDocs(postData).then((querySnapshot) => {
            this.setState({ posts: querySnapshot.docs.map((doc) => ({ ...doc.data() })) });
        });

        onSnapshot(postData, (post) => {
            this.setState({ posts: post.docs.map((doc) => ({ ...doc.data() })) });
        });
    }
    render() {
        return (
            <div className="whole">
                <div className="explore">
                    <Txt />
                </div>
                {this.state.posts.map((post) => (
                    <div className="displayimages" key={post.id}>
                        <BoxSystemProps title={post.title}/>
                    </div>
                ))}
            </div>
        );
    }
}
export default Entire;