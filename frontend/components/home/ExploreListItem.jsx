import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ExploreListItem({ link, page }) {
  return (
    <div>
      <Link href={`${page}`} legacyBehavior>
          <div className="image">
            <Image
              src={link}
              alt="some picture"
              width={130}
              height={130}
              priority
            />
          </div>
      </Link>
    </div>
  );
}

export default ExploreListItem;
