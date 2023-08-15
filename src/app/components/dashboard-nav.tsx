import Link from 'next/link';

const DashboardNav = (props: { current: string | null }) => {
  const currentNav = (link: string): string => {
    return props.current === link ? 'current' : 'default';
  };

  return (
    <nav className="dashboard-nav">
      <div className="nav-links">
        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'allcontent' }
          }}
          className={currentNav('allcontent')}
        >
          ALL CONTENT
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'article' }
          }}
          className={currentNav('article')}
        >
          ARTICLE
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'podcast' }
          }}
          className={currentNav('podcast')}
        >
          PODCAST
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'videos' }
          }}
          className={currentNav('videos')}
        >
          VIDEOS
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'book' }
          }}
          className={currentNav('book')}
        >
          BOOK
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'others' }
          }}
          className={currentNav('others')}
        >
          OTHERS
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNav;
