import { Link } from "react-router-dom";

export default function PrivateListPage() {
  return (
    <div className="m-8 ">
      <ul>
        <li>
          <Link to="/priviate/createWord">单词生成页面</Link>
        </li>
      </ul>
    </div>
  );
}
