import { client } from "../client";

export const sendInterviewData = async (audioBlob: Blob) => {
  if (!audioBlob) {
    alert("업로드할 녹음이 없습니다.");
    return;
  }

  const form = new FormData();
  const ext = audioBlob.type.includes("ogg")
    ? "ogg"
    : audioBlob.type.includes("mp4")
    ? "m4a"
    : "webm";
  form.append("file", audioBlob, `record.${ext}`);

  try {
    const response = await client
      .post("send-interview", {
        body: form,
      })
      .json();
    console.log("결과:", response);
    alert("업로드 성공");
  } catch (err) {
    console.error("업로드 실패:", err);
    alert("업로드 실패");
  }
};
