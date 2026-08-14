import { useEffect, useRef, useState } from "react";

export default function FaceScanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [error, setError] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
const [result, setResult] = useState<{
  skinType: string;
  concerns: string[];
  recommendation: string;
} | null>(null);
const analyzeFace = async () => {
  if (!videoRef.current) return;

  try {
    setAnalyzing(true);
    setResult(null);
    setError("");

    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas not supported");
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg", 0.8);

    const response = await fetch("https://glowcare-js3s9.onrender.com/analyze-skin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: imageData,
      }),
    });

    const responseText = await response.text();

let data;

try {
  data = JSON.parse(responseText);
} catch {
  throw new Error(
    `Backend returned non-JSON response (${response.status}): ${responseText.slice(0, 200)}`
  );
}

    if (!response.ok) {
      throw new Error(data.error || "Skin analysis failed");
    }

    setResult({
      skinType: data.skinType,
      concerns: data.concerns,
      recommendation: data.recommendation,
    });
  } catch (err) {
    console.error("Skin analysis error:", err);

    setError(
      err instanceof Error
        ? err.message
        : "Skin analysis nahi ho paya."
    );
  } finally {
    setAnalyzing(false);
  }
};
  

  const startCamera = async () => {
    try {
      setError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);
    } catch {
      setError("Camera permission allow karo aur dobara try karo.");
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraOn(false);
  };

  useEffect(() => {
  if (cameraOn && videoRef.current && streamRef.current) {
    videoRef.current.srcObject = streamRef.current;

    videoRef.current.onloadedmetadata = () => {
      videoRef.current?.play().catch((err) => {
        console.log("Video play error:", err);
      });
    };
  }

  return () => {
    // Camera ko yahan stop mat karo
  };
}, [cameraOn]);

  return (
    <section id="scanner" className="py-20 bg-blush-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-blush-500 font-medium mb-3">
          Personalized Skin Check
        </p>

        <h2 className="text-4xl font-serif font-semibold text-ink mb-4">
          Scan Your Face
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Use your camera to scan your face and get a personalized skin
          analysis.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 shadow-lg">
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
            {cameraOn ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center px-6">
                <div className="text-5xl mb-4">📷</div>

                <p className="text-gray-500">
                  Camera preview will appear here
                </p>
              </div>
            )}
          </div>

          {error && (
            <p className="text-red-500 mt-4">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
  {!cameraOn ? (
    <button
      onClick={startCamera}
      className="px-8 py-3 rounded-full bg-ink text-white font-medium"
    >
      Start Face Scan
    </button>
  ) : (
    <>
      <button
        onClick={analyzeFace}
        disabled={analyzing}
        className="px-8 py-3 rounded-full bg-ink text-white font-medium disabled:opacity-50"
      >
        {analyzing ? "Analyzing..." : "Analyze My Skin"}
      </button>

      <button
        onClick={stopCamera}
        className="px-8 py-3 rounded-full bg-blush-500 text-white font-medium"
      >
        Stop Camera
      </button>
    </>
  )}
  {result && (
  <div className="mt-6 max-w-2xl mx-auto bg-white rounded-3xl p-6 shadow-lg text-left">
    <h3 className="text-2xl font-semibold text-ink mb-4">
      Skin Analysis Result
    </h3>

    <p className="mb-2">
      <strong>Skin Type:</strong> {result.skinType}
    </p>

    <div className="mb-4">
      <strong>Concerns:</strong>
      <ul className="list-disc ml-6 mt-2">
        {result.concerns.map((concern) => (
          <li key={concern}>{concern}</li>
        ))}
      </ul>
    </div>

    <p>
      <strong>Recommendation:</strong> {result.recommendation}
    </p>
  </div>
)}
</div>
        </div>
      </div>
    </section>
  );
}
