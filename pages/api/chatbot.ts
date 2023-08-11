import { NextApiRequest, NextApiResponse } from "next";
import answers from "@/_mock/answers";
import { sample } from "lodash";

type AnswersKey = keyof typeof answers;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { question, askTime } = req.body;
  const type = sample(Object.keys(answers)) as AnswersKey;
  const data = answers[type];

  const getTime = () => {
    const time = new Date();
    return time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const response = {
    question,
    askTime,
    answer: {
      type,
      data,
      respondTime: getTime(),
    },
  };

  res.status(200).json(response);
};

export default handler;
