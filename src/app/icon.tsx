import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                }}
            >
                <svg
                    viewBox="0 0 40 40"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                    </defs>
                    {/* Outer ring */}
                    <circle
                        cx="20"
                        cy="20"
                        r="17"
                        stroke="url(#logo-gradient)"
                        strokeWidth="2.5"
                        fill="none"
                    />
                    {/* Inner stylized O */}
                    <circle
                        cx="20"
                        cy="20"
                        r="9"
                        stroke="url(#logo-gradient)"
                        strokeWidth="3"
                        fill="none"
                    />
                    {/* Accent dot */}
                    <circle cx="20" cy="20" r="3" fill="url(#logo-gradient)" />
                </svg>
            </div>
        ),
        {
            ...size,
        },
    );
}
