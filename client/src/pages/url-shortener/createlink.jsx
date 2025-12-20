// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowLeft, Link2, Copy, Check, Sparkles } from "lucide-react";
// import CustomButton from "../../components/ui/CustomButton.jsx";

// const CreateLink = () => {
//   const [longUrl, setLongUrl] = useState("");
//   const [customAlias, setCustomAlias] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [copied, setCopied] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [enabled, setEnabled] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       const alias = customAlias || Math.random().toString(36).substring(2, 8);
//       setShortUrl(`localhost:5173/${alias}`);
//       setIsLoading(false);
//     }, 1000);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(`https://${shortUrl}`);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const resetForm = () => {
//     setLongUrl("");
//     setCustomAlias("");
//     setShortUrl("");
//   };

//   return (
//     // <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
//     <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-8 bg-card border border-border rounded-xl">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-8"
//       >
//         <Link
//           to="/dashboard"
//           className="inline-flex lg:hidden items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
//         >
//           <ArrowLeft size={20} />
//           Back to Dashboard
//         </Link>
//         <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
//           Create Short Link 🔗
//         </h1>
//         <p className="text-muted-foreground mt-1">
//           Shorten your long URLs into memorable links.
//         </p>
//       </motion.div>

//       {/* Main Form */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="overflow-y-auto overflow-x-hidden"
//       >
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Long URL Input */}
//           <div>
//             <label
//               htmlFor="longUrl"
//               className="block text-sm font-medium text-foreground mb-2"
//             >
//               <Link2 className="inline-block w-4 h-4 mr-2" />
//               Destination URL
//             </label>
//             <input
//               id="longUrl"
//               type="url"
//               placeholder="https://example.com/your-very-long-url-here"
//               value={longUrl}
//               onChange={(e) => setLongUrl(e.target.value)}
//               required
//               className="h-12 w-full rounded-xl border border-neutral-300 px-4 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
//             />
//           </div>
//           {/* Custom Alias */}
//           <div>
//             <label
//               htmlFor="customAlias"
//               className="block text-sm font-medium text-foreground mb-2"
//             >
//               <Sparkles className="inline-block w-4 h-4 mr-2" />
//               Custom Alias (optional)
//             </label>
//             <div className="flex items-center gap-2">
//               <span className="text-muted-foreground text-sm whitespace-nowrap">
//                 link.co/
//               </span>
//               <input
//                 id="customAlias"
//                 type="text"
//                 placeholder="my-custom-link"
//                 value={customAlias}
//                 onChange={(e) => setCustomAlias(e.target.value)}
//                 className="h-12 w-full rounded-xl border border-neutral-300 px-4 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
//               />
//             </div>
//           </div>
//           <label className="w-full inline-flex items-center justify-between cursor-pointer gap-3">
//             <span className="text-sm font-medium">Generate QR Code</span>
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={enabled}
//               onChange={() => setEnabled(!enabled)}
//             />
//             <div
//               className="relative w-11 h-6 rounded-full transition
//         bg-neutral-300 peer-checked:bg-blue-600
//         after:content-[''] after:absolute after:top-0.5 after:left-0.5
//         after:h-5 after:w-5 after:rounded-full after:bg-white
//         after:transition-all peer-checked:after:translate-x-5"
//             />
//           </label>
//           {/* Advanced Options Toggle */}
//           {/* Submit Button */}
//           <CustomButton
//             type="submit"
//             className="w-full h-12"
//             disabled={isLoading || !longUrl}
//           >
//             {isLoading ? (
//               <span className="flex items-center gap-2">
//                 <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     fill="none"
//                   />
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                   />
//                 </svg>
//                 Creating...
//               </span>
//             ) : (
//               "Create Short Link"
//             )}
//           </CustomButton>
//         </form>

//         {/* Result */}
//         {shortUrl && (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl"
//   >
//     <p className="text-sm text-muted-foreground mb-2">
//       Your shortened URL:
//     </p>

//     <div className="flex items-center gap-3">
//       <div className="flex-1 bg-background border rounded-lg px-4 py-3 truncate">
//         <a
//           href={`https://${shortUrl}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-primary font-medium hover:underline"
//         >
//           {shortUrl}
//         </a>
//       </div>

//       <button onClick={copyToClipboard}>
//         {copied ? <Check size={18} /> : <Copy size={18} />}
//       </button>
//     </div>

//     <div className="flex gap-3 mt-4">
//       <button onClick={resetForm}>Create Another</button>
//       <Link to="/qr-generator">
//         <button>Generate QR Code</button>
//       </Link>
//     </div>
//   </motion.div>
// )}

//       </motion.div>
//     </div>
//     // {/* </main> */}
//   );
// };

// export default CreateLink;
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Link2,
  Copy,
  Check,
  Sparkles,
  Download,
} from "lucide-react";
import CustomButton from "../../components/ui/CustomButton.jsx";

const CreateLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated API call
    setTimeout(() => {
      const alias =
        customAlias || Math.random().toString(36).substring(2, 8);
      setShortUrl(`localhost:5173/${alias}`);
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setLongUrl("");
    setCustomAlias("");
    setShortUrl("");
    setShowQR(false);
  };

  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(
    `https://${shortUrl}`
  )}&size=200`;

  return (
    <div className="  flex justify-center px-4 py-6">
      {/* Scrollable Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          w-full max-w-xl
          max-h-[90vh]
          overflow-y-auto overflow-x-hidden
          bg-card border border-border
          rounded-xl p-6 sm:p-8
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >

          <h1 className="text-2xl font-bold text-foreground">
            Create Short Link 🔗
          </h1>
          <p className="text-muted-foreground mt-1">
            Shorten long URLs and generate QR codes
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Long URL */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <Link2 className="inline w-4 h-4 mr-2" />
              Destination URL
            </label>
            <input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="https://example.com/very-long-url"
              required
              className="
                w-full h-12 rounded-lg border border-border
                px-4 outline-none
                focus:ring-2 focus:ring-primary/50
              "
            />
          </div>

          {/* Custom Alias */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Custom Alias (optional)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                link.co/
              </span>
              <input
                type="text"
                value={customAlias}
                onChange={(e) => setCustomAlias(e.target.value)}
                placeholder="my-custom-link"
                className="
                  flex-1 h-12 rounded-lg border border-border
                  px-4 outline-none
                  focus:ring-2 focus:ring-primary/50
                "
              />
            </div>
          </div>

          {/* QR Toggle */}
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium">
              Generate QR Code
            </span>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showQR}
              onChange={() => setShowQR(!showQR)}
            />
            <div
              className="
                w-11 h-6 rounded-full bg-neutral-300
                peer-checked:bg-primary relative transition
                after:content-[''] after:absolute after:top-0.5 after:left-0.5
                after:h-5 after:w-5 after:bg-white after:rounded-full
                after:transition peer-checked:after:translate-x-5
              "
            />
          </label>

          {/* Submit */}
          <CustomButton
            type="submit"
            className="w-full h-12"
            disabled={!longUrl || isLoading}
          >
            {isLoading ? "Creating..." : "Create Short Link"}
          </CustomButton>
        </form>

        {/* Result */}
        {shortUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-xl"
          >
            <p className="text-sm text-muted-foreground mb-2">
              Your shortened URL
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-background border rounded-lg px-4 py-2 truncate break-all">
                <a
                  href={`https://${shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {shortUrl}
                </a>
              </div>

              <button onClick={copyToClipboard}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* QR Section */}
            {showQR && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 border rounded-lg bg-background"
              >
                <h3 className="text-sm font-medium mb-3">
                  QR Code
                </h3>

                <div className="flex items-center gap-4">
                  <img
                    src={qrUrl}
                    alt="QR Code"
                    className="w-32 h-32"
                  />

                  <a href={qrUrl} download="qr-code.png">
                    <CustomButton variant="outline" className="gap-2">
                      <Download size={16} />
                      {/* Download QR */}
                    </CustomButton>
                  </a>
                </div>
              </motion.div>
            )}

            <div className="flex gap-3 mt-5">
              <button
                onClick={resetForm}
                className="text-sm text-muted-foreground hover:underline"
              >
                Create Another
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CreateLink;

