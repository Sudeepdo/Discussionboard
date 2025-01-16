import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Discussions = () => {
    const [discussions, setDiscussions] = useState([]); // Variable for discussions
    const [likes, setLikes] = useState({}); // Variable for likes
    const [dislikes, setDislikes] = useState({}); // Variable for dislikes

    // Load discussions, likes, and dislikes from localStorage
    useEffect(() => {
        const storedDiscussions = JSON.parse(localStorage.getItem('discussions')) || [];
        setDiscussions(storedDiscussions);

        const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
        const storedDislikes = JSON.parse(localStorage.getItem('dislikes')) || {};
        setLikes(storedLikes);
        setDislikes(storedDislikes);
    }, []);

    // Handle like action (toggle-like functionality)
    const handleLike = (id) => {
        const updatedLikes = { ...likes, [id]: (likes[id] || 0) + 1 }; // Update likes
        setLikes(updatedLikes);
        localStorage.setItem('likes', JSON.stringify(updatedLikes));
    };

    // Handle dislike action (toggle-dislike functionality)
    const handleDislike = (id) => {
        const updatedDislikes = { ...dislikes, [id]: (dislikes[id] || 0) + 1 }; // Update dislikes
        setDislikes(updatedDislikes);
        localStorage.setItem('dislikes', JSON.stringify(updatedDislikes));
    };

    // Styles with updated background and button images
    const styles = {
        container: {
            maxWidth: '900px',
            margin: '40px auto',
            padding: '25px',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#87CEEB', // Light sky blue background color
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        header: {
            textAlign: 'center',
            color: '#fff', // Changed text color to contrast with the background
            marginBottom: '25px',
            fontFamily: 'Verdana, sans-serif',
        },
        link: {
            display: 'inline-block',
            marginBottom: '20px',
            padding: '12px 25px',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#3498db',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
        },
        linkHover: {
            backgroundColor: '#2980b9',
        },
        list: {
            listStyle: 'none',
            padding: '0',
        },
        listItem: {
            marginBottom: '25px',
            padding: '18px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#ffffff',
        },
        title: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '12px',
        },
        content: {
            fontSize: '16px',
            color: '#555',
            marginBottom: '18px',
        },
        button: {
            marginRight: '12px',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            display: 'inline-block',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '45px', // Set a height for the button
            width: '45px', // Set a width for the button
        },
        likeButton: {
            backgroundColor: '#27ae60',
            backgroundImage: 'url(https://img.icons8.com/?size=100&id=YbNGe7fKEaZV&format=png&color=000000)', // Updated like icon URL
        },
        dislikeButton: {
            backgroundColor: '#e74c3c',
            backgroundImage: 'url(https://img.icons8.com/?size=100&id=HdNFOrnNuBoG&format=png&color=000000)', // Updated dislike icon URL
        },
        countDisplay: {
            margin: '0 12px',
            fontSize: '18px',
            color: '#333',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Discussions</h1>
            <Link
                to="/new-discussion"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.linkHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.link.backgroundColor)}
            >
                Post a New Discussion
            </Link>
            <ul style={styles.list}>
                {discussions.map((discussion) => {
                    const likeCount = likes[discussion.id] || 0;
                    const dislikeCount = dislikes[discussion.id] || 0;
                    const totalCount = likeCount - dislikeCount; // Calculate the count difference
                    return (
                        <li key={discussion.id} style={styles.listItem}>
                            <h2 style={styles.title}>{discussion.title}</h2>
                            <p style={styles.content}>{discussion.content}</p>
                            <button
                                style={{ ...styles.button, ...styles.likeButton }}
                                onClick={() => handleLike(discussion.id)}
                            />
                            <span style={styles.countDisplay}>{totalCount}</span> {/* Display current count */}
                            <button
                                style={{ ...styles.button, ...styles.dislikeButton }}
                                onClick={() => handleDislike(discussion.id)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Discussions;
