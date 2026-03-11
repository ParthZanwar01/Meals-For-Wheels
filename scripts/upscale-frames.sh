#!/bin/bash
# Upscale frame images for Meals for Wheels scroll animation
# Uses FFmpeg with Lanczos scaling + unsharp for high quality

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRAMES_DIR="$PROJECT_ROOT/public/frames"
OUTPUT_DIR="$PROJECT_ROOT/public/frames_upscaled"
TEMP_VIDEO="$PROJECT_ROOT/temp_upscale_input.mp4"
TEMP_4K="$PROJECT_ROOT/temp_upscale_4k.mp4"

echo "=== Frame Upscale Script ==="
echo "Source: $FRAMES_DIR"
echo "Output: $OUTPUT_DIR"
echo ""

# Check for FFmpeg
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg not found. Install with: brew install ffmpeg"
    exit 1
fi

# Count frames
FRAME_COUNT=$(ls "$FRAMES_DIR"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo "Found $FRAME_COUNT frames"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo ""
echo "Step 1/3: Creating video from frames..."
ffmpeg -y -framerate 24 -i "$FRAMES_DIR/frame_%04d.jpg" -c:v libx264 -pix_fmt yuv420p "$TEMP_VIDEO"

echo ""
echo "Step 2/3: Upscaling to 4K with Lanczos + unsharp..."
ffmpeg -y -i "$TEMP_VIDEO" -vf "scale=3840:2160:flags=lanczos,unsharp=5:5:1.0:5:5:0.0" -c:v libx264 -preset slow -crf 16 "$TEMP_4K"

echo ""
echo "Step 3/3: Extracting upscaled frames..."
ffmpeg -y -i "$TEMP_4K" -vf "fps=24" -q:v 2 "$OUTPUT_DIR/frame_%04d.jpg"

# Cleanup temp files
rm -f "$TEMP_VIDEO" "$TEMP_4K"

echo ""
echo "Done! Upscaled frames saved to: $OUTPUT_DIR"
echo ""
echo "To use them, either:"
echo "  1. Replace: mv $FRAMES_DIR ${FRAMES_DIR}_backup && mv $OUTPUT_DIR $FRAMES_DIR"
echo "  2. Or update canvas-scroll-animation.jsx to use /frames_upscaled/"
