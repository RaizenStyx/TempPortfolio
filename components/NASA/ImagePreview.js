import Image from "next/image";
import Link from "next/link";

export default function ImagePreview({ thumbnailURL, nasaId }) {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}> {/* Ensure the width is 100% to fit within grid */}
      <Link href={`/photo/${nasaId}`} passHref> {/* Use the `href` directly and passHref is optional here */}
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <Image 
            src={thumbnailURL} 
            alt={`NASA Image ${nasaId}`} 
            layout="responsive" 
            width={500} 
            height={250} 
          />
        </div>
        <div style={{ textAlign: 'center' }}>Nasa ID: {nasaId}</div>
      </Link>
    </div>
  );
}