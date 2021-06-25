import { Link } from "react-router-dom";

export default function PublicListPage() {
  return (
    <div className="m-8 ">
      <ul>
        <li>
          <Link to="/public/roll">A站抽奖工具</Link>
        </li>
      </ul>
    </div>
  );
}
