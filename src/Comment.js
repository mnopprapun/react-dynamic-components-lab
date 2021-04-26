import React, { Component } from 'react'
import BlogPost from './BlogPost'


class BlogPost extends React.Component {
    return() {
        return (
            <div>
            {this.props.CommentText}
            </div>
        )
    }

}

export default Comment
