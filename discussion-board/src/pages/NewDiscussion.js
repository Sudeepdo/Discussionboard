import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewDiscussion = () => {
    const [title, setTitle] = useState(''); // Commented variable for title
    const [content, setContent] = useState(''); // Commented variable for content
    const navigate = useNavigate(); // Commented variable for navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedDiscussions = JSON.parse(localStorage.getItem('discussions')) || []; // Commented variable for storedDiscussions

        const newDiscussion = {
            id: Date.now(),
            title,
            content,
        };

        const updatedDiscussions = [...storedDiscussions, newDiscussion]; // Commented variable for updatedDiscussions
        localStorage.setItem('discussions', JSON.stringify(updatedDiscussions));

        navigate('/discussions');
    };

    // Styles
    const styles = {
        container: {
            maxWidth: '500px',
            margin: '40px auto',
            padding: '25px',
            border: '1px solid #ececec',
            borderRadius: '12px',
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fefefe',
        },
        heading: {
            textAlign: 'center',
            color: '#2c3e50',
            fontSize: '24px',
            marginBottom: '25px',
            fontFamily: 'Arial, sans-serif',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        label: {
            fontWeight: '600',
            color: '#34495e',
            fontSize: '14px',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '12px',
            border: '1px solid #bdc3c7',
            borderRadius: '8px',
            fontSize: '16px',
            backgroundColor: '#f8f9fa',
            transition: 'border-color 0.3s ease',
        },
        inputFocus: {
            borderColor: '#3498db',
        },
        textarea: {
            width: '100%',
            padding: '12px',
            border: '1px solid #bdc3c7',
            borderRadius: '8px',
            fontSize: '16px',
            backgroundColor: '#f8f9fa',
            resize: 'vertical',
            minHeight: '120px',
            transition: 'border-color 0.3s ease',
        },
        button: {
            padding: '12px 20px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#1abc9c',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
        },
        buttonHover: {
            backgroundColor: '#16a085',
        },
        buttonActive: {
            transform: 'scale(0.98)',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Post a New Discussion</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label htmlFor="title" style={styles.label}>Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = styles.input.borderColor)}
                    />
                </div>
                <div>
                    <label htmlFor="content" style={styles.label}>Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        style={styles.textarea}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = styles.textarea.borderColor)}
                    />
                </div>
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    onMouseDown={(e) => (e.target.style.transform = styles.buttonActive.transform)}
                    onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Post Discussion
                </button>
            </form>
        </div>
    );
};

export default NewDiscussion;
