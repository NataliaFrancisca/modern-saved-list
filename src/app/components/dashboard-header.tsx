import { useRouter } from 'next/navigation';

const DashboardHeader = (props: {
  userPhoto: string;
  onToggleInput: Function;
}) => {
  const router = useRouter();

  return (
    <header className="__dashboard-header">
      <button>
        <img
          src="icon/search.svg"
          alt="search icon"
          onClick={() => props.onToggleInput()}
        />
      </button>

      <img src={props.userPhoto} alt="user illustration" />

      <button>
        <img
          src="icon/menu.svg"
          alt="menu icon"
          onClick={() => router.push('/dashboard/menu')}
        />
      </button>
    </header>
  );
};

export default DashboardHeader;
