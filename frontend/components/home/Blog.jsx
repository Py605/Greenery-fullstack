import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Blog({ src, text, link }) {
  return (
    <div className="blog-div">
      <div className="image-with-text">
        <Image src={src} width={200} height={150} className="blogs-image image" alt="Example Image"/>
      </div>

      <div className="text-with-img">
        <div className="text-wrap-center">
          <div className="heading">{text}</div>
          <Link href={link} legacyBehavior>
            <button className="read-more-btn">Read Now {'>'}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
