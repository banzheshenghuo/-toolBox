import { Button } from "antd";

export default function RollPage() {
  console.log(12);
  return (
    <div className="">
      <div className="text-center">
        <h1 className="pt-10">A站抽奖工具</h1>
        <Button type="primary">Primary Button</Button>
      </div>
      <div className="flex">
        <OperationArea />
        <DisplayArea />
      </div>
    </div>
  );
}

function OperationArea() {
  return <div className="w-2/4">OperationArea</div>;
}

function DisplayArea() {
  return <div className="w-2/4">DisplayArea</div>;
}
