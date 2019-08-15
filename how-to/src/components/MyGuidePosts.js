import React from 'react';
import { Card, Image } from "semantic-ui-react";
import choco from "../chocomilk.jpg";

const MyGuidePosts = ({ posts, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            {posts.map(post => (
                <Card.Group>
                    <Image src={choco} avatar />
                    <Card>
                        <Card.Content>
                            <Card.Header>{post.title}</Card.Header>
                            <Card.Description>{post.body}</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            ))}
        </div>
    );
};

export default MyGuidePosts;