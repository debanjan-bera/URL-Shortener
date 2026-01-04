import { memo, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, Palette, Image, Link2, RefreshCw } from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(200);

  const colorPresets = useMemo(
    () => [
      { fg: "#000000", bg: "#ffffff", name: "Classic" },
      { fg: "#1a1a2e", bg: "#eaeaea", name: "Dark" },
      { fg: "#e94560", bg: "#0f3460", name: "Neon" },
      { fg: "#2d6a4f", bg: "#d8f3dc", name: "Nature" },
      { fg: "#7c3aed", bg: "#ede9fe", name: "Purple" },
      { fg: "#ea580c", bg: "#fff7ed", name: "Orange" },
    ],
    []
  );

  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(
    url
  )}&dark=${fgColor.replace("#", "")}&light=${bgColor.replace(
    "#",
    ""
  )}&size=${size}`;

  const downloadQR = async (format = "png") => {
    if (!url && !qrUrl) return;

    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `qr-code.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("QR download failed", error);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          QR Code Generator
        </h1>
        <p className="text-muted-foreground mt-1">
          Create beautiful, customizable QR codes.
        </p>
      </motion.div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* URL Input */}
          <div className="bg-card border border-border rounded-xl p-6">
            <form>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Link2 className="inline-block w-4 h-4 mr-2" />
                Enter URL or Text
              </label>
              <div className="space-y-2"></div>
              <div className="flex gap-3">
                <div className="relative">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="
        w-full h-12 px-4 rounded-lg
        border border-border
        bg-background text-foreground
        placeholder:text-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-primary/50
        transition
      "
                  />
                </div>
                <CustomButton type="submit" className="shrink-0">
                  <RefreshCw size={18} />
                </CustomButton>
              </div>
            </form>
          </div>

          {/* Color Presets */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
              <Palette size={16} />
              Color Presets
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    setFgColor(preset.fg);
                    setBgColor(preset.bg);
                  }}
                  className={`p-3 rounded-lg border transition-all ${
                    fgColor === preset.fg && bgColor === preset.bg
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                  style={{ backgroundColor: preset.bg }}
                >
                  <div
                    className="w-6 h-6 rounded mx-auto mb-1"
                    style={{ backgroundColor: preset.fg }}
                  />
                  <span className="text-xs" style={{ color: preset.fg }}>
                    {preset.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Colors */}

          <div className="bg-card border rounded-xl p-6">
            <h3 className="text-sm font-medium mb-4">Custom Colors</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs">Foreground</label>
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-full h-10"
                />
              </div>
              <div>
                <label className="text-xs">Background</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full h-10"
                />
              </div>
            </div>
          </div>
          {/* Style Options */}

          {/* Size Slider */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
              <Image size={16} />
              Size: {size}px
            </h3>
            <input
              type="range"
              min="150"
              max="400"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-sm font-medium text-foreground mb-4">Preview</h3>

          <div
            className={`flex items-center justify-center p-8 rounded-lg mb-6 ${
              url && "border"
            }`}
            style={{ backgroundColor: bgColor }}
          >
            {url ? (
              <img
                src={qrUrl}
                alt="QR Code Preview"
                loading="lazy"
                className="max-w-full h-auto"
              />
            ) : (
              // <canvas ref={canvasRef} className="max-w-full h-auto" />

              <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <p className="text-muted-foreground text-center text-sm">
                  Enter a URL to generate
                  <br />
                  your QR code
                </p>
              </div>
            )}
          </div>

          {url && (
            <div className="space-y-3">
              <CustomButton
                onClick={() => downloadQR("png")}
                className="w-full gap-2"
              >
                <Download size={18} />
                Download PNG
              </CustomButton>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default memo(QRGenerator);
