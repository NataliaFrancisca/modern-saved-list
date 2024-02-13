import { useGetRouter } from '@/hooks/useGetRouter';
import Link from 'next/link';
import { useEffect } from 'react';

type CallbackFunction = (type: boolean) => void;

const DashboardNav = (props: {
  onToggleInput: CallbackFunction;
  statusInput: boolean;
}) => {
  const filter = useGetRouter();

  useEffect(() => {
    if (props.statusInput === false) {
      props.onToggleInput(true);
    }
  }, [filter]);

  return (
    <nav className="__dashboard-nav">
      <div className={`nav-links ${filter}`}>
        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'allcontent' }
          }}
          className={'allcontent'}
        >
          ALL CONTENT
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'article' }
          }}
          className="article"
        >
          ARTICLE
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'music' }
          }}
          className="music"
        >
          MUSIC
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'podcast' }
          }}
          className="podcast"
        >
          PODCAST
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'video' }
          }}
          className="video"
        >
          VIDEO
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'book' }
          }}
          className="book"
        >
          BOOK
        </Link>

        <Link
          href={{
            pathname: '/dashboard',
            query: { filter: 'others' }
          }}
          className="others"
        >
          OTHERS
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNav;
