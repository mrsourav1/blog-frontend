import 'react-quill/dist/quill.snow.css';
import {Navigate, useNavigate} from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

export default function WriteBlog() {
  const navigate = useNavigate()
  const editor = useRef(null);
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const token = localStorage.getItem('token');
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:8000/api/v1/blog', {
      method: 'POST',
      body: data,
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (response.ok) {
      setRedirect(true);
      navigate('/blogs')
    }else{
      navigate('/')
    }
  }

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      return navigate('/admin-panel/123')
    }
  },[])


  if (redirect) {
    return <Navigate to={'/blogs'} />
  }
  return (
    <form onSubmit={createNewPost}>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      {/* <Editor value={content} onChange={setContent} onBlur={newContent => setContent(newContent)} /> */}
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
      />

      <button style={{marginTop:'5px'}}>Create post</button>
    </form>
  );
}


// import React, { useState, useRef, useMemo } from 'react';
// import JoditEditor from 'jodit-react';

// const Editor = ({ value,onChange,onBlur }) => {
// 	const editor = useRef(null);
// 	return (
// 		<JoditEditor
// 			ref={editor}
// 			value={value}
// 			tabIndex={1} // tabIndex of textarea
// 			 // preferred to use only this option to update the content for performance reasons
// 			onChange={onChange}
// 			onBlur={onBlur}
// 		/>
// 	);
// };

// export default Editor;