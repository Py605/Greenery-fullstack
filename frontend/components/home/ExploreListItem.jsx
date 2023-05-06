import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ExploreListItem({ link, page }) {
  return (
    <div>
      <Link href={`${page}`} legacyBehavior>
          <div >
            <Image
              src={link}
              alt="some picture"
              width={130}
              height={130}
              priority
              className="explore-image-list"
            />
          </div>
      </Link>
    </div>
  );
}

export default ExploreListItem;