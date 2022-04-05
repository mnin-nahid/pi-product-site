import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className="blog">
                <h3 className='text-3xl font-bold'>What is context api?</h3>
                <p>The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application.
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className="blog">
                <h3 className='text-3xl font-bold'>What is semantic tag?</h3>
                <p>
                    Semantic Tag or semantic markup is HTML that introduces meaning to the web page rather than just presentation.
                    <br />
                    For example, a &lt;p&gt; tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them. On the flip side of this equation, tags such as &lt;b&gt; and &lt;i&gt; are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.
                    <br />
                    Examples of semantic HTML tags include:
                    <br />
                    Header tags &lt;h1&gt; through &lt;h6&gt;
                    <br />
                    &lt;code&gt;
                    <br />
                    &lt;em&gt;
                    <br />
                    There are many more semantic HTML tags to use as you build a standards-compliant website.
                </p>
            </div>
            <div className="blog">
                <h3 className='text-3xl font-bold'>What is difference into block, inline, and inline-block element?</h3>
                <p><strong>Block Element:</strong> A block element always starts on a new line, and fills up the horizontal space left and right on the web page. You can add margins and padding on all four sides of any block element — top, right, left, and bottom.Some examples of block elements are &lt;div&gt; and &lt;p&gt; tags. As shown below, I’ve also added green padding on all four sides of each block element.
                <br />
                <strong>Inline Elements: </strong>Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are &lt;span&gt; , &lt;strong&gt;, and &lt;img&gt; tags.
                When it comes to margins and padding, browsers treat inline elements differently. You can add space to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element.
                Inline elements can actually appear within block elements, as shown below. I’ve added white padding on the left and right side of each inline element.
                <br />
                <strong>Inline-Block : </strong>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare display: inline-block in your CSS code.One common use for using inline-block is for creating navigation links horizontally, as shown below. I’ve created a horizontal navigation menu with an orange background color.
                </p>
            </div>
        </div>
    );
};

export default Blogs;