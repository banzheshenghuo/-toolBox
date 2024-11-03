import _ from "lodash";
import { useEffect, useState } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

export default function CustomWordPage() {
  const [textAreaVal, setTextAreaVal] = useState<any>();
  const [finalData, setFinalData] = useState<string>();
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    //* 如果 storage有数据就从中获取
    const storageWords: any = localStorage.getItem("words");
    setTextAreaVal(storageWords);
  }, []);

  const updateTextAreaValue = (event: any) => {
    setTextAreaVal(event.target.value);
  };

  // 1. remove newline
  // 2. 转为小写字母并set map
  // 3. 将 map 转为空格间隔的字符串
  const generateFinalWords = () => {
    const map = new Map();

    const arr = textAreaVal.replaceAll("\n", " ").split(" ");
    _.each(arr, (word) => {
      map.set(word.toLowerCase(), 1);
    });
    const result = Array.from(map.keys());

    setWords(result);
    // * set storage
    localStorage.setItem("words", result.join(" "));
  };
  console.log(1);
  return (
    <div>
      <div className="flex pt-20">
        <div className="flex flex-1 justify-center">
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
          <TextArea rows={8} value={words.join(" ")} disabled />
        </div>
        <span>共计{words.length}个单词</span>
      </div>
    </div>
  );
}
