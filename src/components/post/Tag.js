// import React, { useState } from 'react';
// import { render } from 'react-dom';
// import "./Tag.css";
// import { WithContext as ReactTags } from 'react-tag-input';

// const COUNTRIES = [
//     "Thailand",
//     "India",
//     "Vietnam",
//     "Turkey",
//     "Japan",
//     "United States",
//     "United Kingdom",
//     "Germany",
//     "France",
//     "Italy"
//   ];

// const suggestions = COUNTRIES.map(country => {
//     return {
//       id: country,
//       text: country
//     };
//   });
  
//   const KeyCodes = {
//     comma: 188,
//     enter: 13
//   };
  
//   const delimiters = [KeyCodes.comma, KeyCodes.enter];
  
//   const App = () => {
//     const [tags, setTags] = React.useState([
//       { id: 'Thailand', text: 'Thailand' },
//       { id: 'India', text: 'India' },
//       { id: 'Vietnam', text: 'Vietnam' },
//       { id: 'Turkey', text: 'Turkey' }
//     ]);
  
//     const handleDelete = i => {
//       setTags(tags.filter((tag, index) => index !== i));
//     };
  
//     const handleAddition = tag => {
//       setTags([...tags, tag]);
//     };
  
//     const handleDrag = (tag, currPos, newPos) => {
//       const newTags = tags.slice();
  
//       newTags.splice(currPos, 1);
//       newTags.splice(newPos, 0, tag);
  
//       // re-render
//       setTags(newTags);
//     };
  
//     const handleTagClick = index => {
//       console.log('The tag at index ' + index + ' was clicked');
//     };
  
//     return (
//       <div className="app">
//         <h1> React Tags Example </h1>
//         <div>
//           <ReactTags
//             tags={tags}
//             suggestions={suggestions}
//             delimiters={delimiters}
//             handleDelete={handleDelete}
//             handleAddition={handleAddition}
//             handleDrag={handleDrag}
//             handleTagClick={handleTagClick}
//             inputFieldPosition="bottom"
//             autocomplete
//           />
//         </div>
//       </div>
//     );
//   };
  
//   render(<App />, document.getElementById('root'));

import React, { useState } from 'react';
import '@pathofdev/react-tag-input/build/index.css';
import ReactTagInput from '@pathofdev/react-tag-input';

export const TagInputComponent = () => {
    const [tags, setTags] = React.useState(["タグ1"])
    return (
        <ReactTagInput
            placeholder="入力してください"
            tags={tags} 
            onChange={(newTags) => setTags(newTags)}
        />
    )
}

export default TagInputComponent;