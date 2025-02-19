import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useSpring, animated } from '@react-spring/web';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');

  // Fade-in animation for the rich text editor
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  // Casting animated.div to any to bypass the TypeScript children issue
  const AnimatedDiv = animated.div as any;

  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('richTextContent', content);
    alert('Content saved successfully!');
  };

  return (
    <AnimatedDiv style={fadeIn}>
      <div style={{ margin: '20px auto', maxWidth: '800px' }}>
        <h2>Rich Text Editor</h2>
        <ReactQuill value={content} onChange={setContent} />
        <button
          onClick={handleSave}
          style={{ marginTop: '10px', padding: '10px 15px', cursor: 'pointer' }}
        >
          Save Content
        </button>
      </div>
    </AnimatedDiv>
  );
};

export default RichTextEditor;
