import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

const DashboardNav = () => {
  const routerSearch = useSearchParams();
  let filtro = routerSearch.get('filter') || 'allcontent';

  const applyClassName = (link: string) =>
    filtro === link ? 'current' : 'dafult';

  return (
    <nav className="dashboard-nav">
      <div className="nav-links">
        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'allcontent' }
          }}
          className={applyClassName('allcontent')}
        >
          ALL CONTENT
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'article' }
          }}
          className={applyClassName('article')}
        >
          ARTICLE
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'music' }
          }}
          className={applyClassName('music')}
        >
          MUSIC
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'podcast' }
          }}
          className={applyClassName('podcast')}
        >
          PODCAST
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'video' }
          }}
          className={applyClassName('video')}
        >
          VIDEO
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'book' }
          }}
          className={applyClassName('book')}
        >
          BOOK
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'others' }
          }}
          className={applyClassName('others')}
        >
          OTHERS
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNav;
