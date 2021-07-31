import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Upload, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const MARK_COLOR = "#B4FFEB";

interface FileParsedData {
  data: Array<Array<string>>;
  errors: any[];
  meta: Object;
}

export default function CustomWordPage() {
  const [highWords, setHighWords] = useState<string[]>([]);
  const [textAreaVal, setTextAreaVal] = useState<any>();
  const [finalData, setFinalData] = useState<string>();

  const props = {
    name: "file",
    showUploadList: false,
    beforeUpload: (file: File) => {
      csvToJson(file, createHighWordData);
      return false;
    },
  };

  useEffect(() => {
    //* 如果 storage有数据就从中获取
    const storageWords: any = localStorage.getItem("words");
    setTextAreaVal(storageWords);
  }, []);

  const createHighWordData = (data: string[]) => {
    setHighWords(data);
  };

  const updateTextAreaValue = (event: any) => {
    setTextAreaVal(event.target.value);
  };

  const generateFinalWords = () => {
    const result = highWords.slice();

    const WordByHandArr = textAreaVal.split("\n");

    for (const word of WordByHandArr) {
      result.push(word.trim());
    }

    const finalWords = result.join(" ");

    setFinalData(finalWords);
    // * set storage
    localStorage.setItem("words", finalWords);
  };

  return (
    <div>
      <div className="flex pt-20">
        <div className="flex flex-1 justify-center">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>上传csv</Button>
          </Upload>
        </div>
        <div className="flex flex-1">
          <div className="w-4/5">
            <TextArea
              rows={8}
              onChange={updateTextAreaValue}
              value={textAreaVal}
            />
          </div>
        </div>
      </div>
      <div className="text-center pt-20">
        <Button onClick={generateFinalWords} type="primary">
          生成
        </Button>
        <div className="pt-20 w-2/4 m-auto">
          <TextArea rows={8} value={finalData} disabled />
        </div>
      </div>
    </div>
  );
}

function csvToJson(file: File, cb: (data: string[]) => void) {
  Papa.parse(file, {
    complete: (res: FileParsedData) => {
      cb(gerMarkColorRecord(res));
    },
    error: (reason) => {
      console.error(reason);
    },
  });
}

function gerMarkColorRecord(res: FileParsedData): string[] {
  const result = [];

  for (const record of res.data) {
    if (record[3] === MARK_COLOR) {
      result.push(record[6]);
    }
  }

  return result;
}
