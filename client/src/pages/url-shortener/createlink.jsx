import { motion } from "framer-motion";
import {
  Link2,
  Copy,
  Check,
  Sparkles,
  Download,
  Building2,
} from "lucide-react";
import CustomButton from "../../components/ui/CustomButton.jsx";
import { useDispatch } from "react-redux";
import { toggleAddTaskForm } from "../../components/features/UI/uiReducers.jsx";
import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import { generateAlias } from "../../utils/generateAlias.jsx";
import { addUrl } from "../../components/features/URL/urlReducers.jsx";

const CreateLink = () => {
  const dispatch = useDispatch();
  const [customAlias, setAlias] = useState("");
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      urlTitle: "",
      originalUrl: "",
      shortUrl: "",
      qrCode: "",
      clicks: "",
      created: ""
    },
  });

  const shortUrl = useWatch({ control, name: "shortUrl" });
  const qrCode = useWatch({ control, name: "qrCode" });

  const resetForm = (closed) => {
    reset();
    setShowQR(false);
    closed && dispatch(toggleAddTaskForm());
  };
  /* ---------- SUBMIT ---------- */
  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1000));

    const alias = customAlias?.trim() || generateAlias(5);

    const shortUrl = `localhost:5173/${alias}`;
    const qrCode = !showQR
      ? null
      : `https://quickchart.io/qr?text=${encodeURIComponent(
          `https://${shortUrl}`
        )}&size=200`;

    // Update form state (for UI)
    setValue("shortUrl", shortUrl);
    setValue("qrCode", qrCode);

    // ✅ FINAL PAYLOAD (THIS is what you send)
    const linkPayload = {
      id: generateAlias(7),
      urlTitle: data.urlTitle,
      originalUrl: data.originalUrl,
      shortUrl,
      qrCode,
      clicks: 12,
      created: new Date().toISOString().split("T")[0],
    };
    dispatch(addUrl(linkPayload));
    console.log("SEND TO BACKEND:", linkPayload);
    // resetForm(false);
  };

  /* ---------- COPY ---------- */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://${shortUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ---------- RESET ---------- */

  return (
    <div className="flex justify-center px-4 py-6">
      <motion.div className="w-full h-[69vh] max-w-xl bg-card border rounded-xl p-6 flex flex-col items-right overflow-x-scroll">
        <h1 className="text-2xl font-bold mb-1">Create Short Link 🔗</h1>
        <p className="text-muted-foreground mb-6">
          Shorten long URLs and generate QR codes
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Long URL */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <Building2 className="inline w-4 h-4 mr-2" />
              URL Title
            </label>
            <input
              type="text"
              {...register("urlTitle", { required: true })}
              placeholder="YOUTUBE"
              className="w-full h-12 rounded-lg border px-4 focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              <Link2 className="inline w-4 h-4 mr-2" />
              Destination URL
            </label>
            <input
              type="url"
              {...register("originalUrl", { required: true })}
              placeholder="https://example.com"
              className="w-full h-12 rounded-lg border px-4 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Custom Alias */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Custom Alias (optional)
            </label>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">link.co/</span>
              <input
                type="text"
                value={customAlias}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[a-zA-Z0-9-_]*$/.test(value)) {
                    setAlias(value);
                  }
                }}
                placeholder="my-custom-link"
                className="flex-1 h-12 rounded-lg border px-4 focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* QR Toggle */}
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium">Generate QR Code</span>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showQR}
              onChange={() => setShowQR(!showQR)}
            />
            <div className="w-11 h-6 rounded-full bg-neutral-300 peer-checked:bg-primary relative after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:bg-white after:rounded-full peer-checked:after:translate-x-5 transition" />
          </label>

          {/* Buttons */}
          <div className="flex gap-4">
            <CustomButton
              type="button"
              variant="ghost"
              className="w-full h-12"
              onClick={()=>resetForm(true)}
            >
              Cancel
            </CustomButton>

            <CustomButton
              type="submit"
              className="w-full h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Short Link"}
            </CustomButton>
          </div>
        </form>

        {/* Result */}
        {shortUrl && (
          <motion.div className="mt-8 p-5 border rounded-xl bg-primary/5">
            <p className="text-sm text-muted-foreground mb-2">
              Your shortened URL
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 border rounded-lg px-4 py-2 break-all">
                <a
                  href={`https://${shortUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-medium"
                >
                  {shortUrl}
                </a>
              </div>

              <button onClick={copyToClipboard}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            {showQR && (
              <div className="mt-6 flex gap-4 items-center">
                <img src={qrCode} alt="QR Code" className="w-32 h-32" />
                <a href={qrCode} download>
                  <CustomButton variant="outline">
                    <Download size={16} />
                    Download QR
                  </CustomButton>
                </a>
              </div>
            )}

            {
              // <div className="mt-6 flex gap-4 items-center">
              //   <img
              //     src={watch("qrCode")}
              //     alt="QR Code"
              //     className="w-32 h-32"
              //   />
              //   <a href={watch("qrCode")} download>
              //     <CustomButton variant="outline">
              //       <Download size={16} />
              //       Download QR
              //     </CustomButton>
              //   </a>
              // </div>
            }
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CreateLink;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Link2,
//   Copy,
//   Check,
//   Sparkles,
//   Download,
// } from "lucide-react";
// import CustomButton from "../../components/ui/CustomButton.jsx";
// import { useDispatch } from "react-redux";
// import { toggleAddTaskForm } from "../../components/features/UI/uiReducers.jsx";
// import { useForm } from "react-hook-form";

// const CreateLink = () => {
//   // const [longUrl, setLongUrl] = useState("");
//   // const [customAlias, setCustomAlias] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [copied, setCopied] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showQR, setShowQR] = useState(false);

//     const { addShortUrl, handleSubmit } = useForm()
//   const dispatch = useDispatch()
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulated API call
//     setTimeout(() => {
//       const alias = customAlias || Math.random().toString(36).substring(2, 8);
//       setShortUrl(`localhost:5173/${alias}`);
//       setIsLoading(false);
//     }, 1000);
//     // setTimeout(()=> dispatch(toggleAddTaskForm()),1200)
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
//     setShowQR(false);
//     dispatch(toggleAddTaskForm())
//   };

//   const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(
//     `https://${shortUrl}`
//   )}&size=200`;

//   return (
//     <div className="  flex justify-center px-4 py-6">
//       {/* Scrollable Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.96 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="
//           w-full max-w-xl
//           max-h-[90vh]
//           overflow-y-auto overflow-x-hidden
//           bg-card border border-border
//           rounded-xl p-6 sm:p-8
//         "
//       >
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-6"
//         >
//           <h1 className="text-2xl font-bold text-foreground">
//             Create Short Link 🔗
//           </h1>
//           <p className="text-md text-muted-foreground mt-1">
//             Shorten long URLs and generate QR codes
//           </p>
//         </motion.div>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {/* Long URL */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               <Link2 className="inline w-4 h-4 mr-2" />
//               Destination URL
//             </label>
//             <input
//               type="url"
//               // value={longUrl}
//               {...addShortUrl("longUrl")}
//               placeholder="https://example.com/very-long-url"
//               required
//               className="w-full h-12 rounded-lg border border-border px-4 outline-none
//                   focus:ring-2 focus:ring-primary/50"
//             />
//           </div>

//           {/* Custom Alias */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               <Sparkles className="inline w-4 h-4 mr-2" />
//               Custom Alias (optional)
//             </label>
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-muted-foreground">link.co/</span>
//               <input
//                 type="text"
//                 // value={customAlias}
//                 {...addShortUrl("customAlias")}
//                 // onChange={(e) => setCustomAlias(e.target.value)}
//                 placeholder="my-custom-link"
//                 className="
//                   flex-1 h-12 rounded-lg border border-border
//                   px-4 outline-none
//                   focus:ring-2 focus:ring-primary/50
//                 "
//               />
//             </div>
//           </div>

//           {/* QR Toggle */}
//           <label className="flex items-center justify-between cursor-pointer">
//             <span className="text-sm font-medium">Generate QR Code</span>
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={showQR}
//               onChange={() => setShowQR(!showQR)}
//             />
//             <div className=" w-11 h-6 rounded-full bg-neutral-300 peer-checked:bg-primary relative transition after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:bg-white after:rounded-full after:transition peer-checked:after:translate-x-5" />
//           </label>

//           {/* Submit */}
//           <div className="flex gap-4">
//             <CustomButton
//               variant="ghost"
//               className="w-full h-12"
//               onClick={()=> resetForm()}
//               // disabled={!longUrl || isLoading}
//             >
//               Cancel
//             </CustomButton>
//             <CustomButton
//               type="submit"
//               className="w-full h-12"
//               disabled={!longUrl || isLoading}
//             >
//               {isLoading ? "Creating..." : "Create Short Link"}
//             </CustomButton>
//           </div>
//         </form>

//         {/* Result */}
//         {shortUrl && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-xl"
//           >
//             <p className="text-sm text-muted-foreground mb-2">
//               Your shortened URL
//             </p>

//             <div className="flex items-center gap-3">
//               <div className="flex-1 bg-background border rounded-lg px-4 py-2 truncate break-all">
//                 <a
//                   href={`https://${shortUrl}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary font-medium hover:underline"
//                 >
//                   {shortUrl}
//                 </a>
//               </div>

//               <button onClick={copyToClipboard}>
//                 {copied ? <Check size={18} /> : <Copy size={18} />}
//               </button>
//             </div>

//             {/* QR Section */}
//             {showQR && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="mt-6 p-4 border rounded-lg bg-background"
//               >
//                 <h3 className="text-sm font-medium mb-3">QR Code</h3>

//                 <div className="flex items-center gap-4">
//                   <img src={qrUrl} alt="QR Code" className="w-32 h-32" />

//                   <a href={qrUrl} download="qr-code.png">
//                     <CustomButton variant="outline" className="gap-2">
//                       <Download size={16} />
//                       {/* Download QR */}
//                     </CustomButton>
//                   </a>
//                 </div>
//               </motion.div>
//             )}

//             <div className="flex gap-3 mt-5">
//               <button
//                 onClick={resetForm}
//                 className="text-sm text-muted-foreground hover:underline"
//               >
//                 Create Another
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default CreateLink;
